import { afterEach, describe, expect, it, vi } from 'vitest'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { registerElink } from '../src/backend/elink'
import type { ElinkDay } from '../src/elink/model'
import { HB_BOARD, HOENGG_PAGE_1, HOENGG_PAGE_2, SATURDAY_BOARD, ZENTRUM_BOARD } from './elink-fixtures'

const base64 = (text: string) => Buffer.from(text, 'utf-8').toString('base64')
/** The first Hönggerberg page as the service sends it: full (420 buses), so the backend asks for the next one. */
const FULL_PAGE_1 = { ...HOENGG_PAGE_1, stationboard: [...Array.from({ length: 420 - HOENGG_PAGE_1.stationboard.length }, () => HOENGG_PAGE_1.stationboard[0]), ...HOENGG_PAGE_1.stationboard] }

function route(url: URL): unknown {
  const stop = url.searchParams.get('id')
  const time = url.searchParams.get('datetime')!.slice(11)
  if (stop === '8591123') return ZENTRUM_BOARD
  if (stop === '8587348') return HB_BOARD
  if (stop === '8591122') return time === '00:00' ? FULL_PAGE_1 : time === '17:40' ? HOENGG_PAGE_2 : null
  return null
}

function backend(answer: (url: URL) => { status?: number; body: unknown } = url => ({ body: route(url) })) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const urls: string[] = []
  let running = 0, most = 0
  const fetch = vi.fn(async ({ url, maxResponseBytes }: { url: string; maxResponseBytes?: number }) => {
    if (maxResponseBytes === undefined || maxResponseBytes > 4 * 1024 * 1024) throw new Error('maxResponseBytes too large')
    urls.push(url)
    running++; most = Math.max(most, running)
    await new Promise(resolve => setTimeout(resolve, 1))
    running--
    const { status = 200, body } = answer(new URL(url))
    return { status, headers: { 'Content-Type': 'application/json' }, bodyBase64: base64(typeof body === 'string' ? body : JSON.stringify(body)) }
  })
  const api = { rpc: { handle: (name: string, fn: (payload: unknown) => unknown) => { handlers.set(name, fn); return () => handlers.delete(name) } }, network: { fetch, cancel: vi.fn(async () => true) } }
  const dispose = registerElink(api as unknown as PluginBackendApi)
  const call = (payload: unknown) => handlers.get('elink.day')!(payload) as Promise<ElinkDay>
  return { call, urls, dispose, most: () => most }
}

afterEach(() => vi.useRealTimers())

describe('eLink backend', () => {
  it('reads every page of the three starting stops, two requests at a time, and caches the day', async () => {
    const { call, urls, most } = backend()
    const day = await call({ date: '2026-11-26' })
    expect(urls.every(url => new URL(url).host === 'transport.opendata.ch')).toBe(true)
    expect(urls.map(url => { const u = new URL(url); return `${u.searchParams.get('id')} ${u.searchParams.get('datetime')}` }).sort())
      .toEqual(['8587348 2026-11-26 00:00', '8591122 2026-11-26 00:00', '8591122 2026-11-26 17:40', '8591123 2026-11-26 00:00'])
    expect(most()).toBeLessThanOrEqual(2)
    expect(day.directions.map(row => [row.id, row.departures.length])).toEqual([['toHoengg', 4], ['toZentrum', 4], ['fromHb', 3], ['toHb', 4]])
    await call({ date: '2026-11-26' })
    expect(urls).toHaveLength(4)
    await call({ date: '2026-11-26', fresh: true })
    expect(urls).toHaveLength(8)
  })

  it('answers a weekend with no departures, never invented ones', async () => {
    const { call } = backend(() => ({ body: SATURDAY_BOARD }))
    const day = await call({ date: '2026-11-28' })
    expect(day.directions.every(row => row.departures.length === 0)).toBe(true)
  })

  it('refuses bad dates and reports service failures', async () => {
    const { call } = backend()
    await expect(call({ date: '26.11.2026' })).rejects.toThrow('invalidInput')
    await expect(call(null)).rejects.toThrow('invalidInput')
    await expect(backend(() => ({ status: 500, body: '' })).call({ date: '2026-11-26' })).rejects.toThrow('serviceError')
    await expect(backend(() => ({ body: '<html>' })).call({ date: '2026-11-26' })).rejects.toThrow('formatError')
    const failing = backend(() => { throw new Error('offline') })
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    await expect(failing.call({ date: '2026-11-26' })).rejects.toThrow('networkError')
  })
})
