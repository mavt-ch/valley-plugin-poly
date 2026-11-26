import type { PluginBackendApi } from '@valley/plugin-sdk'
import { ELINK_BOARDS, ELINK_MAX_PAGES, ELINK_PAGE, elinkDay, isElinkDate, pageEnd, stationboardUrl, type ElinkDay } from '../elink/model'

/** Today's boards carry live delays and are read again after two minutes; other days keep 30 minutes, like the menus. */
const TODAY_TTL = 2 * 60_000
const DAY_TTL = 30 * 60_000
const MAX_PARALLEL = 2
/** The host refuses a request that asks for more than 4 MiB; a page of 420 buses with the asked fields is about 0.8 MB. */
const MAX_BYTES = 4 * 1024 * 1024

function decode(base64: string): string {
  return new TextDecoder().decode(Uint8Array.from(atob(base64), character => character.charCodeAt(0)))
}
const localToday = (now = new Date()) => `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

/**
 * The eLink shuttle's backend: the stationboards of ETH/Universitätsspital, ETH Hönggerberg and
 * Bahnhofplatz/HB from transport.opendata.ch (public, no key), filtered to line E of VBG and grouped by direction.
 */
export function registerElink(api: PluginBackendApi): () => Promise<void> {
  const requests = new Set<string>()
  const memo = new Map<string, { at: number; ttl: number; value: Promise<ElinkDay> }>()
  let disposed = false
  let running = 0
  const waiting: (() => void)[] = []

  const board = async (url: string): Promise<unknown> => {
    if (disposed) throw new Error('unavailable')
    while (running >= MAX_PARALLEL) await new Promise<void>(resolve => waiting.push(resolve))
    running++
    const requestId = crypto.randomUUID()
    requests.add(requestId)
    try {
      const result = await api.network.fetch({ url, method: 'GET', headers: { Accept: 'application/json' }, requestId, timeoutMs: 20_000, maxResponseBytes: MAX_BYTES })
      if (disposed) throw new Error('unavailable')
      if (result.status < 200 || result.status >= 300) throw new Error('serviceError')
      try { return JSON.parse(decode(result.bodyBase64)) } catch { throw new Error('formatError') }
    } catch (error) {
      if (error instanceof Error && ['unavailable', 'serviceError', 'formatError'].includes(error.message)) throw error
      console.warn(`[poly] transport.opendata.ch: ${error instanceof Error ? error.message : String(error)}`)
      throw new Error('networkError')
    } finally { requests.delete(requestId); running--; waiting.shift()?.() }
  }

  /** Every page of one stop's buses on `date`: the next page starts at the minute the last one ended (repeats are dropped later). */
  const stopDay = async (stop: string, date: string): Promise<unknown[]> => {
    const pages: unknown[] = []
    let time = '00:00'
    for (let page = 0; page < ELINK_MAX_PAGES; page++) {
      const body = await board(stationboardUrl(stop, date, time))
      pages.push(body)
      const { count, last } = pageEnd(body)
      if (count < ELINK_PAGE || !last || last.date !== date || last.time === time) break
      time = last.time
    }
    return pages
  }

  /** Every eLink departure of `date`, per direction. */
  const day = async (raw: unknown): Promise<ElinkDay> => {
    const value = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : {}
    if (!isElinkDate(value.date)) throw new Error('invalidInput')
    const date = value.date
    const ttl = date === localToday() ? TODAY_TTL : DAY_TTL
    const hit = memo.get(date)
    if (value.fresh !== true && hit && Date.now() - hit.at < hit.ttl) return hit.value
    const result = Promise.all(ELINK_BOARDS.map(stop => stopDay(stop, date))).then(pages => elinkDay(date, pages.flat()))
    memo.set(date, { at: Date.now(), ttl, value: result })
    result.catch(() => { if (memo.get(date)?.value === result) memo.delete(date) })
    if (memo.size > 30) memo.delete(memo.keys().next().value!)
    return result
  }

  const off = api.rpc.handle('elink.day', day)
  return async () => {
    disposed = true
    off()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
  }
}
