import type { PluginBackendApi } from '@valley/plugin-sdk'
import {
  ETH_BASE, ETH_CLIENT, UZH_ORGANISATION, ethCampus, ethHasGaps, ethMealsById, isDate, isOutletPath, parseEthFacilities, parseEthWeek,
  isDishUrl, isImageUrl, parseUzhAllergenNames, parseUzhDish, parseUzhOutlet, parseUzhOutlets, parseUzhWeek, isoWeek, addDays, uzhLocation, uzhUrl, weekday,
  type DishDetail, type EthFacility, type Location, type Outlet, type Service, type Dish, type UzhOutletPage
} from '../model'
import { registerCity } from './city'
import { registerCampus } from './campus'
import { registerElink } from './elink'

const MENU_TTL = 30 * 60_000
const LIST_TTL = 12 * 3_600_000
const IMAGE_TTL = 6 * 3_600_000
/** Pictures kept in memory, newest last; older ones are read again when shown again. */
const MAX_IMAGES = 120
const MAX_PARALLEL = 2
/** The host refuses a request that asks for more than 4 MiB. */
export const MAX_RESPONSE_BYTES = 4 * 1024 * 1024
const LANGUAGES = new Set(['de', 'en'])

/** UTF-8 text from a base64 body. */
export function decode(base64: string): string {
  return new TextDecoder().decode(Uint8Array.from(atob(base64), character => character.charCodeAt(0)))
}

function input(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('invalidInput')
  return value as Record<string, unknown>
}
const language = (value: unknown) => { if (typeof value !== 'string' || !LANGUAGES.has(value)) throw new Error('invalidInput'); return value }
const monday = (value: unknown) => { if (!isDate(value) || weekday(value) !== 1) throw new Error('invalidInput'); return value }

export function register(api: PluginBackendApi): () => Promise<void> {
  const requests = new Set<string>()
  const memo = new Map<string, { at: number; ttl: number; value: Promise<unknown> }>()
  let disposed = false
  let running = 0
  /** Requests of the open page and its pictures go first; the place list's reads of every outlet wait behind them. */
  const waiting: { urgent: (() => void)[]; background: (() => void)[] } = { urgent: [], background: [] }
  const slot = async (background: boolean) => {
    while (running >= MAX_PARALLEL) await new Promise<void>(resolve => waiting[background ? 'background' : 'urgent'].push(resolve))
    running++
    return () => { running--; (waiting.urgent.shift() ?? waiting.background.shift())?.() }
  }

  const fetchRaw = async (url: string, accept: string, background = false) => {
    if (disposed) throw new Error('unavailable')
    const release = await slot(background)
    const requestId = crypto.randomUUID()
    requests.add(requestId)
    try {
      const result = await api.network.fetch({ url, method: 'GET', headers: { Accept: accept }, requestId, timeoutMs: 20_000, maxResponseBytes: MAX_RESPONSE_BYTES })
      if (disposed) throw new Error('unavailable')
      if (result.status === 404) throw new Error('notFound')
      if (result.status < 200 || result.status >= 300) throw new Error('serviceError')
      return result
    } catch (error) {
      if (error instanceof Error && ['unavailable', 'notFound', 'serviceError'].includes(error.message)) throw error
      console.warn(`[poly] ${new URL(url).host}: ${error instanceof Error ? error.message : String(error)}`)
      throw new Error('networkError')
    } finally { requests.delete(requestId); release() }
  }
  const get = async (url: string, accept: string, background = false): Promise<string> => decode((await fetchRaw(url, accept, background)).bodyBase64)
  const json = async (url: string): Promise<unknown> => {
    const body = await get(url, 'application/json')
    try { return JSON.parse(body) } catch { throw new Error('formatError') }
  }
  const html = (url: string, background = false) => get(url, 'text/html', background)

  /** One answer per key while it is fresh; a failed answer is forgotten at once. */
  const remember = <T>(key: string, ttl: number, fresh: boolean, load: () => Promise<T>): Promise<T> => {
    const hit = memo.get(key)
    if (!fresh && hit && Date.now() - hit.at < hit.ttl) return hit.value as Promise<T>
    const value = load()
    memo.set(key, { at: Date.now(), ttl, value })
    value.catch(() => { if (memo.get(key)?.value === value) memo.delete(key) })
    if (memo.size > 600) memo.delete(memo.keys().next().value!)
    return value
  }

  /** A dish picture as a data address the sandboxed view can show; the UI has no network of its own. */
  const images = new Map<string, { at: number; value: Promise<string> }>()
  const image = async (raw: unknown): Promise<string> => {
    const url = input(raw).url
    if (!isImageUrl(url)) throw new Error('invalidInput')
    const hit = images.get(url)
    if (hit && Date.now() - hit.at < IMAGE_TTL) { images.delete(url); images.set(url, hit); return hit.value }
    // Cookpit answers 406 to `image/*` alone; it serves its pictures only when `*/*` is accepted too.
    const value = fetchRaw(url, 'image/avif,image/webp,image/png,image/jpeg,*/*').then(result => {
      const type = Object.entries(result.headers ?? {}).find(([name]) => name.toLowerCase() === 'content-type')?.[1]?.split(';')[0].trim().toLowerCase() ?? ''
      if (!/^image\/(jpeg|png|webp|gif|avif)$/.test(type)) throw new Error('formatError')
      return `data:${type};base64,${result.bodyBase64}`
    })
    images.set(url, { at: Date.now(), value })
    value.catch(() => { if (images.get(url)?.value === value) images.delete(url) })
    while (images.size > MAX_IMAGES) images.delete(images.keys().next().value!)
    return value
  }

  /** A UZH dish's own page: its picture and prices. */
  const uzhDish = async (raw: unknown): Promise<DishDetail> => {
    const value = input(raw)
    if (!isDishUrl(value.url)) throw new Error('invalidInput')
    const url = value.url
    return remember(`uzh:dish:${url}`, MENU_TTL, value.fresh === true, async () => {
      const detail = parseUzhDish(await html(url))
      if (!detail) throw new Error('formatError')
      return detail
    })
  }

  const eth = (path: string, lang: string, query: Record<string, string> = {}) =>
    `${ETH_BASE}/${path}?${new URLSearchParams({ 'client-id': ETH_CLIENT, lang, ...query })}`

  const ethFacilities = (lang: string, fresh: boolean) => remember(`eth:facilities:${lang}`, LIST_TTL, fresh, async (): Promise<EthFacility[]> =>
    parseEthFacilities(await json(eth('facilities', lang, { 'rs-first': '0', 'rs-size': '200' }))).filter(facility => ethCampus(facility) !== null))

  const ethRotas = (lang: string, week: string, fresh: boolean) => remember(`eth:rotas:${lang}:${week}`, MENU_TTL, fresh, () =>
    json(eth('weeklyrotas', lang, { 'rs-first': '0', 'rs-size': '200', 'valid-after': week, 'valid-before': addDays(week, 7) })))

  /** The ETH outlets of Zentrum and Hönggerberg for the week starting `monday`, each with its campus tag. */
  const ethWeek = async (raw: unknown): Promise<Location[]> => {
    const value = input(raw), lang = language(value.language), week = monday(value.monday), fresh = value.fresh === true
    const [facilities, body] = await Promise.all([ethFacilities(lang, fresh), ethRotas(lang, week, fresh)])
    // Cookpit leaves some English dish texts as "novalue"; the German answer fills them.
    const fallback = lang !== 'de' && ethHasGaps(body) ? ethMealsById(await ethRotas('de', week, fresh)) : undefined
    return parseEthWeek(body, facilities, week, fallback)
  }

  const uzhOutlets = (lang: string, fresh: boolean) => remember(`uzh:outlets:${lang}`, LIST_TTL, fresh, async (): Promise<Outlet[]> => {
    const outlets = parseUzhOutlets(await html(uzhUrl(lang, UZH_ORGANISATION)))
    if (!outlets.length) throw new Error('formatError')
    return outlets
  })

  /** The UZH outlets, each with its campus. */
  const outlets = async (raw: unknown): Promise<Outlet[]> => {
    const value = input(raw)
    return uzhOutlets(language(value.language), value.fresh === true)
  }

  /** An outlet's page (address, meal categories), which rarely changes. */
  const uzhOutlet = (lang: string, path: string, fresh: boolean, background: boolean) => remember(`uzh:outlet:${lang}:${path}`, LIST_TTL, fresh, async (): Promise<UzhOutletPage> => {
    const page = parseUzhOutlet(await html(uzhUrl(lang, path), background))
    if (!page) throw new Error('formatError')
    return page
  })

  /**
   * One UZH outlet for the week starting `monday`: its lunch and dinner categories, each read from
   * its weekly page. `background: true` (the place list reading every outlet) queues behind other reads.
   */
  const uzhWeek = async (raw: unknown): Promise<Location> => {
    const value = input(raw), lang = language(value.language), week = monday(value.monday), fresh = value.fresh === true, background = value.background === true
    if (!isOutletPath(value.path)) throw new Error('invalidInput')
    const path = value.path
    const outlet = (await uzhOutlets(lang, false)).find(row => row.path === path)
    if (!outlet) throw new Error('invalidInput')
    return remember(`uzh:week:${lang}:${path}:${week}`, MENU_TTL, fresh, async () => {
      const page = await uzhOutlet(lang, path, fresh, background)
      const { week: number, year } = isoWeek(week)
      let names: Record<string, string> = {}
      const weeks: { service: Service; days: Map<string, Dish[]> }[] = []
      for (const category of page.categories) {
        const body = await html(`${uzhUrl(lang, path)}/${category.slug}/menu/weekly?${new URLSearchParams({ week: String(number), year: String(year) })}`, background)
        if (!Object.keys(names).length) names = parseUzhAllergenNames(body)
        weeks.push({ service: category.service, days: parseUzhWeek(body) })
      }
      return uzhLocation(outlet, page, weeks, week, lang, names)
    })
  }

  const offs = [
    api.rpc.handle('eth.week', ethWeek),
    api.rpc.handle('uzh.outlets', outlets),
    api.rpc.handle('uzh.week', uzhWeek),
    api.rpc.handle('uzh.dish', uzhDish),
    api.rpc.handle('image', image),
    registerCity(api)
  ]
  const disposeCampus = registerCampus(api)
  const disposeElink = registerElink(api)
  return async () => {
    disposed = true
    for (const off of offs) off()
    await disposeCampus()
    await disposeElink()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
    images.clear()
  }
}
