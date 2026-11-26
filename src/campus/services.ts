/**
 * Parsers for ETH's public campus-map services, which the backend reads: building outlines
 * (Facilities), floors (Levels) and rooms (Units). No building list here, so the backend bundle stays small.
 */
export const BUILDING_CODE = /^[A-Z0-9]{1,6}$/
export const LEVEL_ID = /^ETH\.[A-Z0-9]{1,6}\.[A-Z0-9]{1,6}$/
export const ARCGIS_HOST = 'arcgis-prd-web.ethz.ch'
const SERVICES = `https://${ARCGIS_HOST}/server/rest/services`
export const FACILITIES_URL = `${SERVICES}/EGDB_EN/Facilities_EN/FeatureServer/5/query`
export const LEVELS_URL = `${SERVICES}/EGDB_EN/Levels_EN/FeatureServer/2/query`
export const UNITS_URL = `${SERVICES}/EGDB_EN/Units_EN/FeatureServer/1/query`
/** The services answer at most this many features per request. */
export const PAGE_SIZE = 2000

export function query(url: string, params: Record<string, string>): string {
  return `${url}?${new URLSearchParams({ f: 'geojson', ...params })}`
}

export type Ring = [number, number][]
export type Polygon = Ring[]

export interface Outline { code: string; polygons: Polygon[] }

export interface Level {
  id: string
  code: string
  name: string
  /** Storey order: 0 is the ground floor, negative below it. */
  order: number
  /** Storey height in metres. */
  height: number
}

export interface Room {
  id: string
  /** "HG E 41". */
  name: string
  number: string
  /** ETH's room type in German ("Hörsaal"), as the services publish it. */
  type: string
  /** English use type ("Lecture Hall"). */
  use: string
  kind: RoomKind
  /** The floor it is on ("ETH.HG.F"); the building code is its middle part. */
  level: string
  polygons: Polygon[]
}

export type RoomKind = 'teaching' | 'lab' | 'office' | 'circulation' | 'toilet' | 'service' | 'other'

const text = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const finite = (value: unknown) => typeof value === 'number' && Number.isFinite(value) ? value : null

function polygonsOf(geometry: unknown): Polygon[] {
  const value = geometry as { type?: unknown; coordinates?: unknown } | null
  if (!value || !Array.isArray(value.coordinates)) return []
  const isPoint = (point: unknown): point is [number, number] => Array.isArray(point) && point.length >= 2 && Number.isFinite(point[0]) && Number.isFinite(point[1])
  const ring = (raw: unknown): Ring | null => Array.isArray(raw) && raw.length >= 4 && raw.every(isPoint) ? raw.map(point => [point[0], point[1]] as [number, number]) : null
  const polygon = (raw: unknown): Polygon | null => {
    if (!Array.isArray(raw)) return null
    const rings = raw.map(ring).filter((item): item is Ring => item !== null)
    return rings.length ? rings : null
  }
  const list = value.type === 'Polygon' ? [value.coordinates] : value.type === 'MultiPolygon' ? value.coordinates : []
  return (list as unknown[]).map(polygon).filter((item): item is Polygon => item !== null)
}

function features(body: unknown): { properties: Record<string, unknown>; geometry: unknown }[] {
  const value = body as { type?: unknown; features?: unknown; error?: unknown } | null
  if (!value || value.error || value.type !== 'FeatureCollection' || !Array.isArray(value.features)) throw new Error('formatError')
  return value.features.filter((feature): feature is { properties: Record<string, unknown>; geometry: unknown } => !!feature && typeof feature === 'object' && !!(feature as { properties?: unknown }).properties)
}

export const exceeded = (body: unknown): boolean => {
  const value = body as { exceededTransferLimit?: unknown; properties?: { exceededTransferLimit?: unknown } } | null
  return value?.exceededTransferLimit === true || value?.properties?.exceededTransferLimit === true
}

/** Facilities → one outline per building code of the shipped list. */
export function parseOutlines(body: unknown): Outline[] {
  const result: Outline[] = []
  for (const feature of features(body)) {
    const code = text(feature.properties.NAME)
    const polygons = polygonsOf(feature.geometry)
    if (BUILDING_CODE.test(code) && polygons.length) result.push({ code, polygons })
  }
  return result
}

/** Levels → every building's floors, top floor first. */
export function parseLevels(body: unknown): Level[] {
  const result: Level[] = []
  for (const feature of features(body)) {
    const id = text(feature.properties.LEVEL_ID)
    const facility = text(feature.properties.FACILITY_ID)
    const order = finite(feature.properties.VERTICAL_ORDER)
    if (!LEVEL_ID.test(id) || !facility.startsWith('ETH.') || order === null) continue
    result.push({ id, code: facility.slice(4), name: text(feature.properties.NAME_SHORT) || text(feature.properties.NAME) || id.split('.')[2], order, height: finite(feature.properties.HEIGHT_RELATIVE) ?? 3.5 })
  }
  return result.sort((a, b) => a.code.localeCompare(b.code) || b.order - a.order)
}

/** ETH's use types (English, with a few German ones the services also publish) by kind; the rest are common rooms, food, exhibitions and the like. */
const KINDS: [RoomKind, RegExp][] = [
  ['toilet', /toilet|wc|shower|wardrobe/i],
  ['teaching', /lecture|seminar|class|course|teaching|training|library|study|drafting|computer room|auditor/i],
  ['lab', /lab|workshop|clean room/i],
  ['office', /office|büro|meeting|sitzung|conference|cabinet|workplace|arbeitsplatz/i],
  ['circulation', /hallway|gang|corridor|stair|elevator|lift|entrance|exit|foyer|lobby|ramp|terrace/i],
  ['service', /service|storage|lager|technical|shaft|betrieb|security|parking|print|drucken|archive|cleaning|server/i],
]
export const roomKind = (use: string): RoomKind => KINDS.find(([, pattern]) => pattern.test(use))?.[0] ?? 'other'

/** Units → the rooms of one floor. */
export function parseRooms(body: unknown): Room[] {
  const result: Room[] = []
  for (const feature of features(body)) {
    const id = text(feature.properties.UNIT_ID)
    const polygons = polygonsOf(feature.geometry)
    if (!id || !polygons.length) continue
    const use = text(feature.properties.USE_TYPE)
    result.push({
      id,
      name: text(feature.properties.NAME) || id,
      number: text(feature.properties.RaumNr),
      type: text(feature.properties.RaumTyp),
      use,
      kind: roomKind(use),
      level: text(feature.properties.LEVEL_ID),
      polygons,
    })
  }
  return result
}

/**
 * Height of each floor's slab above the building's base: the ground floor (order 0) at 0, the floors
 * above stacked by the storey heights below them, the basements by their own heights downwards.
 */
export function floorElevations(levels: Level[]): Map<string, number> {
  const sorted = [...levels].sort((a, b) => a.order - b.order)
  const result = new Map<string, number>()
  let up = 0
  for (const level of sorted.filter(item => item.order >= 0)) { result.set(level.id, up); up += level.height }
  let down = 0
  for (const level of sorted.filter(item => item.order < 0).reverse()) { down -= level.height; result.set(level.id, down) }
  return result
}

/** Even-odd test of a point against one polygon (outer ring and holes). */
export function insidePolygon(point: [number, number], polygon: Ring[]): boolean {
  let inside = false
  for (const ring of polygon) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j]
      if ((yi > point[1]) !== (yj > point[1]) && point[0] < ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi) inside = !inside
    }
  }
  return inside
}

export function boundsOf(polygons: Polygon[]): [number, number, number, number] | null {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const polygon of polygons) for (const [x, y] of polygon[0] ?? []) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y) }
  return Number.isFinite(minX) ? [minX, minY, maxX, maxY] : null
}

/**
 * A room search: a room number ("HG F7", "HG F 7.1", "f 7" in the selected building) or a room type in one
 * building ("HG Hörsaal", "HCI lab"). Only letters, digits, dots and spaces reach the services' SQL.
 */
export type RoomQuery = { building: string; floor: string; number: string } | { building: string; words: string[] }

export function parseRoomQuery(input: string, selected?: string | null): RoomQuery | null {
  const text = input.normalize('NFC').toUpperCase().replace(/[^A-Z0-9ÄÖÜ. ]+/g, ' ').trim().replace(/\s+/g, ' ')
  if (!text) return null
  const room = /^(?:([A-Z0-9]{1,6}) )?([A-Z]{1,2}) ?([0-9][0-9.]{0,9})?$/.exec(text)
  if (room) {
    const building = room[1] ?? selected ?? ''
    // A floor letter needs a building before it ("HG F") or a number after it ("F7" in the selected building);
    // "HG" alone stays a building search.
    if (BUILDING_CODE.test(building) && (room[1] || room[3])) return { building, floor: room[2], number: room[3] ?? '' }
  }
  const [first, ...rest] = text.split(' ')
  const words = rest.filter(word => /^[A-ZÄÖÜ]{3,20}$/.test(word))
  if (BUILDING_CODE.test(first) && words.length && words.length === rest.length) return { building: first, words }
  return null
}

/** ETH writes German room types in ASCII ("Hoersaal"). */
const ascii = (word: string) => word.replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE')

/** The `where` clause for a room search, or null for a query that is not one. */
export function roomWhere(query: RoomQuery): string | null {
  if (!BUILDING_CODE.test(query.building)) return null
  if ('floor' in query) {
    if (!/^[A-Z]{1,2}$/.test(query.floor) || !/^[0-9.]{0,10}$/.test(query.number)) return null
    return `NAME LIKE '${query.building} ${query.floor} ${query.number}%'`
  }
  if (!query.words.length || !query.words.every(word => /^[A-ZÄÖÜ]{3,20}$/.test(word))) return null
  const types = query.words.map(word => `(UPPER(USE_TYPE) LIKE '%${ascii(word)}%' OR UPPER(RaumTyp) LIKE '%${ascii(word)}%')`).join(' AND ')
  return `NAME LIKE '${query.building} %' AND ${types}`
}

/** A room's label on the map: its number without the building code ("HG F 7" → "F 7"). */
export const roomLabel = (name: string, code: string): string => name.startsWith(`${code} `) ? name.slice(code.length + 1) : name
