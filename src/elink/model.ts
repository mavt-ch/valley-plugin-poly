/**
 * The ETH eLink shuttle (line E of the operator VBG) between ETH Zentrum and ETH Hönggerberg, read
 * from transport.opendata.ch's public stationboards. Every departure comes from the service; nothing is made up.
 */

/** DIDOK ids of the stops where eLink runs start or end. */
export const ELINK_STOPS = {
  zentrum: '8591123',
  haldenegg: '8591174',
  hoengg: '8591122',
  hb: '8587348',
  hbQuai: '8587349',
} as const
/** The stops whose stationboards hold every eLink run's first departure. */
export const ELINK_BOARDS = [ELINK_STOPS.zentrum, ELINK_STOPS.hoengg, ELINK_STOPS.hb] as const
export const ELINK_HOST = 'transport.opendata.ch'
export const ELINK_LINE = 'E'
export const ELINK_OPERATOR = 'VBG'
/** The most departures transport.opendata.ch answers per request (a larger limit is refused). */
export const ELINK_PAGE = 420
/** At most this many pages per stop and day (a full day at ETH Hönggerberg takes two). */
export const ELINK_MAX_PAGES = 5

/** Zentrum → Hönggerberg, Hönggerberg → Zentrum, and the HB runs (mornings to, evenings from Hönggerberg). */
export type Direction = 'toHoengg' | 'toZentrum' | 'fromHb' | 'toHb'
export const DIRECTIONS: Direction[] = ['toHoengg', 'toZentrum', 'fromHb', 'toHb']

export type ElinkStop = { id: string; name: string; time: string }
export type Departure = {
  trip: string
  /** The line as the service names it ("E"). */
  line: string
  /** HH:MM, the timetable time at the first stop. */
  time: string
  /** Minutes late as transport.opendata.ch reports them (`stop.delay`), null when it reports none. */
  delay: number | null
  /** Every stop from the first to the terminal with its timetable time. */
  stops: ElinkStop[]
}
export type ElinkDirection = { id: Direction; departures: Departure[] }
export type ElinkDay = { date: string; directions: ElinkDirection[] }

const DATE = /^\d{4}-\d{2}-\d{2}$/
export const isElinkDate = (value: unknown): value is string => typeof value === 'string' && DATE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
/** Saturday and Sunday. */
export const isWeekend = (date: string) => { const day = new Date(`${date}T00:00:00Z`).getUTCDay(); return day === 0 || day === 6 }

const FIELDS = ['station/id', 'station/name', 'stationboard/name', 'stationboard/number', 'stationboard/operator', 'stationboard/to', 'stationboard/stop/departure', 'stationboard/stop/delay',
  'stationboard/passList/station/id', 'stationboard/passList/station/name', 'stationboard/passList/arrival', 'stationboard/passList/departure']

/** One page of a stop's buses from `time` on `date`, with only the fields the parser reads. */
export function stationboardUrl(stop: string, date: string, time = '00:00'): string {
  const query = new URLSearchParams({ id: stop, limit: String(ELINK_PAGE), datetime: `${date} ${time}` })
  query.append('transportations[]', 'bus')
  for (const field of FIELDS) query.append('fields[]', field)
  return `https://${ELINK_HOST}/v1/stationboard?${query}`
}

const record = (value: unknown): Record<string, unknown> => value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
const text = (value: unknown) => typeof value === 'string' ? value.trim() : typeof value === 'number' ? String(value) : ''
const entries = (body: unknown): Record<string, unknown>[] => { const list = record(body).stationboard; return Array.isArray(list) ? list.map(record) : [] }
/** "2026-11-26T07:45:00+0100" → date and HH:MM, the stop's local time. */
function stamp(value: unknown): { date: string; time: string } | null {
  const match = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(text(value))
  return match ? { date: match[1], time: match[2] } : null
}
/** Only VBG's line E is eLink; VBZ runs an unrelated line E through Universitätsspital. */
export const isElink = (entry: Record<string, unknown>) =>
  text(entry.number) === ELINK_LINE && /^VBG\b/.test(text(entry.operator))

/** How many departures a page holds and when its last one leaves, to ask for the next page. */
export function pageEnd(body: unknown): { count: number; last: { date: string; time: string } | null } {
  const list = entries(body)
  return { count: list.length, last: list.length ? stamp(record(list.at(-1)!.stop).departure) : null }
}

/** The direction of a run from where it starts and where it ends; null for any other run of line E. */
export function directionOf(from: string, terminal: string): Direction | null {
  if (terminal === ELINK_STOPS.hoengg) return from === ELINK_STOPS.hb ? 'fromHb' : from === ELINK_STOPS.hoengg ? null : 'toHoengg'
  if (from !== ELINK_STOPS.hoengg) return null
  if (terminal === ELINK_STOPS.zentrum) return 'toZentrum'
  return terminal === ELINK_STOPS.hb || terminal === ELINK_STOPS.hbQuai ? 'toHb' : null
}

/** "Zürich, ETH Hönggerberg" → "ETH Hönggerberg". */
export const stopName = (name: string) => name.replace(/^Zürich,\s*/, '')

/** The eLink departures of one stationboard page on `date`, each with its direction. */
export function parseStationboard(body: unknown, date: string): (Departure & { direction: Direction })[] {
  const station = record(record(body).station)
  const from = text(station.id)
  const departures: (Departure & { direction: Direction })[] = []
  for (const entry of entries(body)) {
    if (!isElink(entry)) continue
    const stop = record(entry.stop)
    const at = stamp(stop.departure)
    if (!at || at.date !== date) continue
    const passes = (Array.isArray(entry.passList) ? entry.passList : []).map(record)
    const stops = passes.flatMap((pass, index) => {
      const place = record(pass.station)
      const when = index === 0 ? at : stamp(pass.arrival) ?? stamp(pass.departure)
      return text(place.id) ? [{ id: text(place.id), name: stopName(text(place.name)), time: when?.time ?? '' }] : []
    })
    if (!stops.length || stops[0].id !== from) stops.unshift({ id: from, name: stopName(text(station.name)), time: at.time })
    if (stops.length < 2) stops.push({ id: '', name: stopName(text(entry.to)), time: '' })
    const direction = directionOf(from, stops.at(-1)!.id)
    if (!direction) continue
    departures.push({ direction, trip: text(entry.name), line: text(entry.number), time: at.time, delay: typeof stop.delay === 'number' ? stop.delay : null, stops })
  }
  return departures
}

/** The day's runs per direction, in time order, from every page of the stops where they start. */
export function elinkDay(date: string, pages: unknown[]): ElinkDay {
  const byDirection = new Map<Direction, Departure[]>(DIRECTIONS.map(id => [id, []]))
  const seen = new Set<string>()
  for (const body of pages) {
    for (const { direction, ...departure } of parseStationboard(body, date)) {
      const key = `${direction}:${departure.trip}:${departure.time}`
      if (seen.has(key)) continue
      seen.add(key)
      byDirection.get(direction)!.push(departure)
    }
  }
  for (const list of byDirection.values()) list.sort((a, b) => a.time.localeCompare(b.time))
  return { date, directions: DIRECTIONS.map(id => ({ id, departures: byDirection.get(id)! })) }
}

/** Minutes from `now` until `time` on `date` (local time), counting the reported delay. */
export function minutesUntil(date: string, departure: Pick<Departure, 'time' | 'delay'>, now = new Date()): number {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = departure.time.split(':').map(Number)
  const at = new Date(year, month - 1, day, hour, minute + (departure.delay ?? 0))
  return Math.floor((at.getTime() - now.getTime()) / 60_000)
}

/** The departures still to come on `date` (today). */
export const upcoming = (date: string, departures: Departure[], now = new Date()) => departures.filter(row => minutesUntil(date, row, now) >= 0)

/** The stop sequence a direction usually takes: the longest one among its runs. */
export function routeOf(departures: Departure[]): string[] {
  let best: string[] = []
  for (const row of departures) if (row.stops.length > best.length) best = row.stops.map(stop => stop.name)
  return best
}

/** `elink`, the page instance of the full-day timetable. */
export const ELINK_INSTANCE = 'elink'
export const isElinkInstance = (instanceId: string | undefined) => instanceId === ELINK_INSTANCE
