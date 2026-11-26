import type { PluginBackendApi } from '@valley/plugin-sdk'
import { bytesFromBase64, textFromBase64 } from '../base64'
import { FACILITIES_URL, LEVELS_URL, LEVEL_ID, PAGE_SIZE, UNITS_URL, exceeded, parseLevels, parseOutlines, parseRooms, query, roomWhere, type Level, type Outline, type Room, type RoomQuery } from '../campus/services'

/**
 * The blank base map: Esri's Light and Dark Gray Canvas (OpenStreetMap data, no key, credited), streets and
 * buildings in quiet greys without points of interest. Tiles exist up to zoom 16; the map enlarges them above.
 * CARTO's blank tiles answer "API key required", OpenStreetMap's standard tiles are full of symbols.
 */
export const TILE_HOST = 'server.arcgisonline.com'
const TILE_CLIENT = 'Valley-Poly (ETH campus map plugin)'
export const MAX_ZOOM = 16
const LIST_TTL = 12 * 3_600_000
const MAX_TILES = 400
const TILE_PARALLEL = 6
const MAX_BYTES = 4 * 1024 * 1024
const MAX_PAGES = 10

export function tileUrl(raw: unknown): string {
  const { z, x, y, dark } = (raw ?? {}) as Record<string, unknown>
  const whole = (value: unknown, limit: number): value is number => typeof value === 'number' && Number.isInteger(value) && value >= 0 && value < limit
  if (!whole(z, MAX_ZOOM + 1) || !whole(x, 2 ** z) || !whole(y, 2 ** z) || (dark !== undefined && typeof dark !== 'boolean')) throw new Error('invalidInput')
  return `https://${TILE_HOST}/ArcGIS/rest/services/Canvas/World_${dark ? 'Dark' : 'Light'}_Gray_Base/MapServer/tile/${z}/${y}/${x}`
}

/**
 * The campus map's backend: ETH's building outlines, floors and rooms from ETH's public campus-map
 * services (`arcgis-prd-web.ethz.ch`), and the blank base map's tiles for the 2D map, which reach the UI as
 * bytes (the frame has no network of its own).
 */
export function registerCampus(api: PluginBackendApi): () => Promise<void> {
  const requests = new Set<string>()
  const memo = new Map<string, { at: number; value: Promise<unknown> }>()
  let disposed = false

  const fetchBody = async (url: string, headers: Record<string, string>, maxResponseBytes: number) => {
    if (disposed) throw new Error('unavailable')
    const requestId = crypto.randomUUID()
    requests.add(requestId)
    try {
      const result = await api.network.fetch({ url, method: 'GET', headers, requestId, timeoutMs: 20_000, maxResponseBytes })
      if (disposed) throw new Error('unavailable')
      if (result.status < 200 || result.status >= 300) throw new Error('serviceError')
      return result.bodyBase64
    } catch (error) {
      if (error instanceof Error && ['unavailable', 'serviceError'].includes(error.message)) throw error
      console.warn(`[poly] ${new URL(url).host}: ${error instanceof Error ? error.message : String(error)}`)
      throw new Error('networkError')
    } finally { requests.delete(requestId) }
  }

  const remember = <T>(key: string, fresh: boolean, load: () => Promise<T>): Promise<T> => {
    const hit = memo.get(key)
    if (!fresh && hit && Date.now() - hit.at < LIST_TTL) return hit.value as Promise<T>
    const value = load()
    memo.set(key, { at: Date.now(), value })
    value.catch(() => { if (memo.get(key)?.value === value) memo.delete(key) })
    if (memo.size > 300) memo.delete(memo.keys().next().value!)
    return value
  }

  /** Every page of one layer query (the services answer at most 2000 features at a time). */
  const pages = async <T>(url: string, params: Record<string, string>, parse: (body: unknown) => T[]): Promise<T[]> => {
    const result: T[] = []
    for (let page = 0; page < MAX_PAGES; page++) {
      const body = await fetchBody(query(url, { ...params, orderByFields: 'OBJECTID', resultOffset: String(page * PAGE_SIZE), resultRecordCount: String(PAGE_SIZE) }), { Accept: 'application/geo+json, application/json' }, MAX_BYTES)
      let parsed: unknown
      try { parsed = JSON.parse(textFromBase64(body)) } catch { throw new Error('formatError') }
      const rows = parse(parsed)
      result.push(...rows)
      if (!exceeded(parsed) && rows.length < PAGE_SIZE) break
    }
    return result
  }

  const options = (raw: unknown) => ({ fresh: (raw as { fresh?: unknown } | null)?.fresh === true })

  const outlines = (raw: unknown) => remember('outlines', options(raw).fresh, (): Promise<Outline[]> =>
    pages(FACILITIES_URL, { where: '1=1', outFields: 'NAME', geometryPrecision: '7' }, parseOutlines))

  const levels = (raw: unknown) => remember('levels', options(raw).fresh, (): Promise<Level[]> =>
    pages(LEVELS_URL, { where: '1=1', outFields: 'LEVEL_ID,FACILITY_ID,NAME,NAME_SHORT,VERTICAL_ORDER,HEIGHT_RELATIVE', returnGeometry: 'false' }, parseLevels))

  const rooms = (raw: unknown) => {
    const level = (raw as { level?: unknown } | null)?.level
    if (typeof level !== 'string' || !LEVEL_ID.test(level)) throw new Error('invalidInput')
    return remember(`rooms:${level}`, options(raw).fresh, (): Promise<Room[]> =>
      pages(UNITS_URL, { where: `LEVEL_ID='${level}'`, outFields: 'UNIT_ID,NAME,USE_TYPE,RaumNr,RaumTyp,LEVEL_ID', geometryPrecision: '7' }, parseRooms))
  }

  /** Map tiles kept in memory, newest last; up to six requests at once. */
  const tiles = new Map<string, Promise<ArrayBuffer>>()
  let running = 0
  const waiting: (() => void)[] = []
  const tile = async (raw: unknown): Promise<ArrayBuffer> => {
    const url = tileUrl(raw)
    const hit = tiles.get(url)
    if (hit) { tiles.delete(url); tiles.set(url, hit); return hit }
    const value = (async () => {
      while (running >= TILE_PARALLEL) await new Promise<void>(resolve => waiting.push(resolve))
      running++
      try { return bytesFromBase64(await fetchBody(url, { 'User-Agent': TILE_CLIENT, Accept: 'image/jpeg, image/png' }, 1_000_000)).buffer as ArrayBuffer }
      finally { running--; waiting.shift()?.() }
    })()
    tiles.set(url, value)
    value.catch(() => { if (tiles.get(url) === value) tiles.delete(url) })
    while (tiles.size > MAX_TILES) tiles.delete(tiles.keys().next().value!)
    return value
  }

  /** Rooms matching a room number or a room type in one building (`parseRoomQuery`), at most 40, by name. */
  const searchRooms = (raw: unknown) => {
    const where = roomWhere(((raw as { query?: unknown } | null)?.query ?? {}) as RoomQuery)
    if (!where) throw new Error('invalidInput')
    return remember(`search:${where}`, false, async (): Promise<Room[]> => {
      const body = await fetchBody(query(UNITS_URL, { where, outFields: 'UNIT_ID,NAME,USE_TYPE,RaumNr,RaumTyp,LEVEL_ID', orderByFields: 'NAME', resultRecordCount: '40', geometryPrecision: '7' }), { Accept: 'application/geo+json, application/json' }, MAX_BYTES)
      try { return parseRooms(JSON.parse(textFromBase64(body))) } catch (error) { throw error instanceof Error && error.message === 'formatError' ? error : new Error('formatError') }
    })
  }

  const offs = [
    api.rpc.handle('campus.searchRooms', searchRooms),
    api.rpc.handle('campus.outlines', outlines),
    api.rpc.handle('campus.levels', levels),
    api.rpc.handle('campus.rooms', rooms),
    api.rpc.handle('campus.tile', tile),
  ]
  return async () => {
    disposed = true
    for (const off of offs) off()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
    tiles.clear()
  }
}
