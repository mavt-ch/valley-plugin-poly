/**
 * The eLink tab: in the sidebar the day row and every direction's next departures, drawn like a
 * departure board (line badge, destination, time, minutes until it leaves); the page (`poly.page`,
 * instance `elink`) every departure of the day per direction in the same rows. The day is shared by both
 * through the hidden `elinkDate` setting; a past day falls back to today.
 */
import type { ValleyPluginApi } from '@valley/plugin-sdk'
import { ELINK_INSTANCE, isElinkDate, isWeekend, minutesUntil, routeOf, upcoming, type Departure, type ElinkDay, type ElinkDirection } from './model'

/** A bus seen from the front: body, windscreen, lights and wheels. */
export const BUS_ICON = ['M5 16V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z', 'M5 11h14', 'M9 6h6', 'M8 14h.01', 'M16 14h.01', 'M7 17v3', 'M17 17v3']

export const ELINK_CSS = `
.elink-list { flex: 1; min-height: 0; overflow-y: auto; }
.elink-group { padding: 10px 12px 8px; }
.elink-group + .elink-group { border-top: 1px solid var(--border-light); }
.elink-head { display: flex; align-items: baseline; gap: 8px; min-width: 0; margin-bottom: 4px; }
.elink-title { flex: 1; min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-span { flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
/* A departure-board row: line badge, destination, time, minutes until it leaves. */
.elink-row { display: grid; grid-template-columns: max-content minmax(0, 1fr) max-content 34px; align-items: center; gap: 8px; min-height: 26px; font-variant-numeric: tabular-nums; }
.elink-line { display: inline-grid; place-items: center; min-width: 22px; height: 20px; padding: 0 4px; box-sizing: border-box; border-radius: 3px; background: #fff; color: #000; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35); font-weight: 700; font-size: var(--small-font-size); line-height: 1; }
.elink-to { min-width: 0; color: var(--text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-time { color: var(--text-secondary); font-size: var(--small-font-size); white-space: nowrap; }
.elink-delay { margin-left: 3px; color: var(--tint-orange-text, var(--text-secondary)); font-weight: 600; }
.elink-minutes { color: var(--title-color); font-weight: 600; text-align: right; white-space: nowrap; }
.elink-row.past { opacity: 0.45; }
.elink-row.next .elink-minutes { color: var(--accent-color); }
.elink-note { color: var(--text-secondary); font-size: var(--small-font-size); }
.elink-link { padding: 0; border: 0; background: transparent; color: var(--accent-color); font: inherit; font-size: var(--small-font-size); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.elink-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 2px; }
.elink-empty { display: grid; gap: 6px; padding: 14px 12px; color: var(--text-secondary); font-size: var(--small-font-size); }
.elink-empty strong { color: var(--title-color); font-size: var(--normal-font-size, 1rem); }
.elink-credit { padding: 10px 12px 12px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
/* The page: the directions side by side as plain columns of rows, no cards; each row adds the arrival. */
.elink-columns { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px 32px; align-items: start; }
.elink-columns .elink-group { padding: 0 0 16px; border: 0; }
.elink-columns .elink-route { margin: -2px 0 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-columns .elink-row { grid-template-columns: max-content minmax(0, 1fr) max-content max-content 34px; border-bottom: 1px solid var(--border-light); }
.elink-arrival { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); white-space: nowrap; }
.elink-columns .elink-row.next { background: var(--accent-tint-bg); }
.poly-page .elink-credit { padding: 20px 0 0; }
`

/** How many coming departures each direction lists in the sidebar. */
const SHOWN = 5
const LEFT = ['M15 6l-6 6 6 6']
const RIGHT = ['M9 6l6 6-6 6']
const REFRESH = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']

const localDate = (now = new Date()) => `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
const shiftDate = (date: string, days: number) => { const next = new Date(`${date}T00:00:00Z`); next.setUTCDate(next.getUTCDate() + days); return next.toISOString().slice(0, 10) }
/** The next Monday to Friday after `date`. */
export const nextWeekday = (date: string) => { let next = shiftDate(date, 1); while (isWeekend(next)) next = shiftDate(next, 1); return next }
/** The stored eLink day; one before today is today. */
export const elinkDateOf = (value: unknown, now = new Date()) => isElinkDate(value) && value >= localDate(now) ? value : localDate(now)

export function createElinkViews(api: ValleyPluginApi, t: (key: string) => string) {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>

  const Icon = ({ shapes }: { shapes: string[] }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const fill = (template: string, values: Record<string, string | number>) => Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template)
  const problem = (error: unknown) => { const key = `elink.error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('elink.error.serviceError') : t(key) }
  const runsLabel = (count: number) => count === 1 ? t('elink.runs.one') : fill(t('elink.runs.other'), { count })
  const locale = () => api.ui.language() || 'en'
  const formatDay = (date: string, options: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale(), { ...options, timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
  const dayTitle = (date: string) => formatDay(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  const openElink = (newTab = false) => api.workspace.openMainTab({ instanceId: ELINK_INSTANCE, title: t('elink.title'), newTab })
  const setDate = (date: string) => void api.settings.set('elinkDate', date)

  /** The shared day and the language, re-read when either changes; `now` ticks every 20 seconds for the minutes. */
  function useDay() {
    const [, setTick] = React.useState(0)
    React.useEffect(() => {
      const bump = () => setTick(value => value + 1)
      const offs = [api.ui.onLanguageChanged(bump), api.settings.subscribe(bump)]
      const timer = setInterval(bump, 20_000)
      return () => { for (const off of offs) off(); clearInterval(timer) }
    }, [])
    const now = new Date()
    return { date: elinkDateOf(api.settings.get().elinkDate, now), now }
  }

  /** The day's runs from the backend; `revision` > 0 reads past the cache. */
  function useElinkDay(date: string, revision: number) {
    const [state, setState] = React.useState<{ key: string; data: ElinkDay | null; error: string; loading: boolean }>({ key: '', data: null, error: '', loading: true })
    React.useEffect(() => {
      let live = true
      setState(previous => ({ key: date, data: previous.key === date ? previous.data : null, error: '', loading: true }))
      api.backend.call<ElinkDay>('elink.day', { date, fresh: revision > 0 }).then(
        data => { if (live) setState({ key: date, data, error: '', loading: false }) },
        error => { if (live) setState({ key: date, data: null, error: problem(error), loading: false }) })
      return () => { live = false }
    }, [date, revision])
    return state
  }

  function useRefresh() {
    const [revision, setRevision] = React.useState(0)
    const [refreshing, setRefreshing] = React.useState(false)
    const refresh = () => { setRefreshing(true); setRevision(value => value + 1); setTimeout(() => setRefreshing(false), 600) }
    return { revision, refreshing, refresh }
  }

  /** The directions with runs that day; the HB runs appear only on days that have them. */
  const served = (day: ElinkDay | null) => (day?.directions ?? []).filter(row => row.departures.length > 0)
  const span = (runs: Departure[]) => fill(t('elink.firstLast'), { first: runs[0].time, last: runs.at(-1)!.time })

  /**
   * One departure: line badge, destination, timetable time (and a reported delay), and today the minutes
   * until it leaves ("6'") while that is under an hour. The page adds the arrival at the last stop.
   */
  function Row({ run, date, now, isToday, next, arrival }: { run: Departure; date: string; now: Date; isToday: boolean; next: boolean; arrival?: boolean }): Node {
    const last = run.stops.at(-1)!
    const minutes = isToday ? minutesUntil(date, run, now) : null
    const soon = minutes !== null && minutes >= 0 && minutes < 60
    const route = run.stops.map(stop => stop.time ? `${stop.name} ${stop.time}` : stop.name).join(' · ')
    return h('div', { className: `elink-row${minutes !== null && minutes < 0 ? ' past' : ''}${next ? ' next' : ''}`, 'data-trip': run.trip, title: route },
      h('span', { className: 'elink-line' }, run.line),
      h('span', { className: 'elink-to' }, last.name),
      h('span', { className: 'elink-time' }, run.time,
        run.delay && run.delay > 0 ? h('span', { className: 'elink-delay', title: fill(t('elink.delay'), { minutes: run.delay }) }, `+${run.delay}`) : null),
      arrival ? h('span', { className: 'elink-arrival', title: fill(t('elink.arrival'), { time: last.time, stop: last.name }) }, last.time ? `→ ${last.time}` : '') : null,
      h('span', { className: 'elink-minutes', 'aria-label': soon ? fill(t('elink.in'), { minutes }) : undefined }, soon ? `${minutes}'` : ''))
  }

  /** A day without a single run: the weekend, or a weekday without service (a holiday). */
  function NoService({ date }: { date: string }): Node {
    const next = nextWeekday(date)
    return h('div', { className: 'elink-empty', role: 'status' },
      h('strong', null, t(isWeekend(date) ? 'elink.weekend' : 'elink.noService')),
      h('span', null, h('button', { type: 'button', className: 'elink-link', onClick: () => setDate(next) }, fill(t('elink.showDay'), { day: formatDay(next, { weekday: 'long', day: 'numeric', month: 'long' }) }))))
  }

  /** One direction in the sidebar: its name, first and last run, then the next departures. */
  function DirectionSummary({ direction, date, now, isToday }: { direction: ElinkDirection; date: string; now: Date; isToday: boolean }): Node {
    const runs = direction.departures
    const listed = (isToday ? upcoming(date, runs, now) : runs).slice(0, SHOWN)
    return h('section', { className: 'elink-group', 'data-direction': direction.id },
      h('div', { className: 'elink-head' },
        h('span', { className: 'elink-title' }, t(`elink.direction.${direction.id}`)),
        h('span', { className: 'elink-span', title: span(runs) }, `${runs[0].time}–${runs.at(-1)!.time}`)),
      listed.length
        ? listed.map((run, index) => h(Row, { key: `${run.trip}:${run.time}`, run, date, now, isToday, next: isToday && index === 0 }))
        : h('div', { className: 'elink-note' }, `${t('elink.ended')} `,
          h('button', { type: 'button', className: 'elink-link', onClick: (event: MouseEvent) => openElink(api.ui.hasModKey(event)) }, t('elink.showTimetable'))))
  }

  function DayRow({ date, refresh, refreshing }: { date: string; refresh: () => void; refreshing: boolean }): Node {
    const isToday = date === localDate()
    const label = `${formatDay(date, { weekday: 'short' })} ${formatDay(date, { day: 'numeric' })}`
    return h('div', { className: 'poly-bar' },
      h('div', { className: 'poly-day' },
        h('button', { type: 'button', className: 'poly-icon-btn', title: t('day.previous'), 'aria-label': t('day.previous'), disabled: isToday, onClick: () => setDate(shiftDate(date, -1)) }, h(Icon, { shapes: LEFT })),
        h('button', { type: 'button', className: `poly-day-label${isToday ? ' today' : ''}`, title: `${dayTitle(date)} · ${isToday ? t('day.today') : t('day.backToToday')}`, 'aria-current': isToday ? 'date' : undefined, onClick: () => setDate(localDate()) }, label),
        h('button', { type: 'button', className: 'poly-icon-btn', title: t('day.next'), 'aria-label': t('day.next'), onClick: () => setDate(shiftDate(date, 1)) }, h(Icon, { shapes: RIGHT }))),
      h('button', { type: 'button', className: `poly-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH })))
  }

  /** The sidebar's eLink tab below the tab row: the day, then every direction's next departures. */
  function ElinkPanelBody(): Node {
    const { date, now } = useDay()
    const { revision, refreshing, refresh } = useRefresh()
    const day = useElinkDay(date, revision)
    const directions = served(day.data)
    const isToday = date === localDate(now)
    const body = day.error ? h('div', { className: 'poly-note error', role: 'alert' }, day.error)
      : !day.data ? h('div', { className: 'poly-note' }, t('elink.loading'))
      : !directions.length ? h(NoService, { date })
      : h(React.Fragment, null, ...directions.map(direction => h(DirectionSummary, { key: direction.id, direction, date, now, isToday })))
    return h(React.Fragment, null,
      h(DayRow, { date, refresh, refreshing }),
      h('div', { className: 'elink-list' }, body, h('div', { className: 'elink-credit' }, t('elink.credit'))))
  }

  /** One direction on the page: every departure of the day; today the past ones dimmed and the next one marked. */
  function DirectionColumn({ direction, date, now, isToday }: { direction: ElinkDirection; date: string; now: Date; isToday: boolean }): Node {
    const runs = direction.departures
    const nextRun = isToday ? upcoming(date, runs, now)[0] : undefined
    return h('section', { className: 'elink-group', 'data-direction': direction.id },
      h('div', { className: 'elink-head' },
        h('span', { className: 'elink-title' }, t(`elink.direction.${direction.id}`)),
        h('span', { className: 'elink-span' }, `${runsLabel(runs.length)} · ${span(runs)}`)),
      h('div', { className: 'elink-route' }, routeOf(runs).join(' · ')),
      runs.map(run => h(Row, { key: `${run.trip}:${run.time}`, run, date, now, isToday, next: run === nextRun, arrival: true })))
  }

  /** The full-day page; its first bar names the day, the sidebar chooses it. */
  function ElinkPage({ instanceId }: { instanceId?: string }): Node {
    const { date, now } = useDay()
    const { revision, refreshing, refresh } = useRefresh()
    const day = useElinkDay(date, revision)
    const directions = served(day.data)
    const isToday = date === localDate(now)
    React.useEffect(() => { api.workspace.setMainTabTitle(t('elink.title'), instanceId) }, [instanceId, api.ui.language()])
    const content = day.error ? h('div', { className: 'poly-note error', role: 'alert' }, day.error)
      : !day.data ? h('div', { className: 'poly-note' }, t('elink.loading'))
      : !directions.length ? h(NoService, { date })
      : h('div', { className: 'elink-columns' }, directions.map(direction => h(DirectionColumn, { key: direction.id, direction, date, now, isToday })))
    return h('div', { className: 'poly-page' },
      h('div', { className: 'poly-bar poly-page-head' },
        h('span', { className: 'poly-bar-balance', 'aria-hidden': true }),
        h('h1', { className: 'poly-page-title' }, `${t('elink.title')} · ${dayTitle(date)}`),
        h('button', { type: 'button', className: `poly-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH }))),
      h('div', { className: 'poly-list' }, h('div', { className: 'poly-page-inner' }, content, h('div', { className: 'elink-credit' }, t('elink.credit')))))
  }

  return { ElinkPanelBody, ElinkPage, openElink }
}
