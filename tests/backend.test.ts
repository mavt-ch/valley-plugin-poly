import { describe, expect, it, vi } from 'vitest'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { register } from '../src/backend/index'
import { bytesFromBase64, textFromBase64 } from '../src/base64'
import type { Location, Outlet } from '../src/model'
import { DISH_IMAGE, ETH_FACILITIES, ETH_ROTAS, ETH_ROTAS_DE, UZH_DINNER, UZH_DISH, UZH_LUNCH, UZH_ORG, UZH_OUTLET } from './fixtures'

const base64 = (text: string) => btoa(String.fromCharCode(...new TextEncoder().encode(text)))

function backend(routes: (url: URL) => { status?: number; body: string; type?: string } | null) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const urls: string[] = []
  const fetch = vi.fn(async ({ url, maxResponseBytes, headers }: { url: string; maxResponseBytes?: number; headers?: Record<string, string> }) => {
    // Cookpit's pictures refuse an Accept header without */* (406), as the live service does.
    if (url.includes('/cookpit-pub-services/v1/images/') && !headers?.Accept?.includes('*/*')) return { status: 406, headers: {}, bodyBase64: '' }
    // The host's own limit: a larger ask is refused before any request.
    if (maxResponseBytes !== undefined && maxResponseBytes > 4 * 1024 * 1024) throw new Error('maxResponseBytes too large')
    urls.push(url)
    const answer = routes(new URL(url))
    if (!answer) return { status: 404, bodyBase64: '' }
    return { status: answer.status ?? 200, headers: { 'Content-Type': answer.type ?? 'text/html; charset=utf-8' }, bodyBase64: base64(answer.body) }
  })
  const api = {
    rpc: { handle: (name: string, fn: (payload: unknown) => unknown) => { handlers.set(name, fn); return () => handlers.delete(name) } },
    network: { fetch, cancel: vi.fn(async () => true) }
  }
  const dispose = register(api as unknown as PluginBackendApi)
  const call = <T>(name: string, payload: unknown) => handlers.get(name)!(payload) as Promise<T>
  return { call, urls, fetch, dispose }
}

const eth = (url: URL) => {
  if (url.host !== 'idapps.ethz.ch') return null
  expect(url.searchParams.get('client-id')).toBe('ethz-wcms')
  if (url.pathname.endsWith('/facilities')) return { body: JSON.stringify(ETH_FACILITIES) }
  if (url.pathname.endsWith('/weeklyrotas')) {
    expect([url.searchParams.get('valid-after'), url.searchParams.get('valid-before')]).toEqual(['2026-11-23', '2026-11-30'])
    return { body: JSON.stringify(url.searchParams.get('lang') === 'de' ? ETH_ROTAS_DE : ETH_ROTAS) }
  }
  return null
}

const uzh = (url: URL) => {
  if (url.host !== 'app.food2050.ch') return null
  const path = decodeURIComponent(url.pathname)
  if (path === '/de/zfv/universitat-zurich') return { body: UZH_ORG }
  if (path === '/de/zfv/universitat-zurich,campus-zentrum/obere-mensa') return { body: UZH_OUTLET }
  if (path.endsWith('/obere-mensa/lunch/menu/weekly')) { expect(url.search).toBe('?week=48&year=2026'); return { body: UZH_LUNCH } }
  if (path.endsWith('/obere-mensa/abendverpflegung/menu/weekly')) return { body: UZH_DINNER }
  if (path.endsWith('/obere-mensa/lunch,menu-1/2026-11-25')) return { body: UZH_DISH }
  return null
}

describe('backend', () => {
  it('reads a UZH dish page and serves pictures as data addresses', async () => {
    const { call, urls } = backend(url => url.host === 'storage.googleapis.com' ? { body: 'JPEG', type: 'image/jpeg' } : url.host === 'idapps.ethz.ch' ? { body: '<html>', type: 'text/html' } : uzh(url))
    const detail = await call<{ image: string; prices: unknown[] }>('uzh.dish', { url: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/lunch,menu-1/2026-11-25' })
    expect(detail.image).toBe(DISH_IMAGE)
    expect(detail.prices).toHaveLength(3)
    expect(await call('image', { url: DISH_IMAGE })).toBe(`data:image/jpeg;base64,${base64('JPEG')}`)
    await call('image', { url: DISH_IMAGE })
    expect(urls.filter(url => url === DISH_IMAGE)).toHaveLength(1)
    await expect(call('image', { url: 'https://idapps.ethz.ch/cookpit-pub-services/v1/images/7?client-id=ethz-wcms' })).rejects.toThrow('formatError')
    const eth = backend(url => url.pathname.endsWith('/images/8') ? { body: 'JPEG', type: 'image/jpeg' } : null)
    expect(await eth.call('image', { url: 'https://idapps.ethz.ch/cookpit-pub-services/v1/images/8?client-id=ethz-wcms' })).toBe(`data:image/jpeg;base64,${base64('JPEG')}`)
    await expect(call('image', { url: 'https://evil.test/x.jpg' })).rejects.toThrow('invalidInput')
    await expect(call('uzh.dish', { url: 'https://evil.test/x' })).rejects.toThrow('invalidInput')
  })

  it('reads the ETH Zentrum and Hönggerberg week and fills English gaps from German', async () => {
    const { call, urls } = backend(eth)
    const week = await call<Location[]>('eth.week', { monday: '2026-11-23', language: 'en' })
    expect(week.map(location => [location.name, location.campus])).toEqual([['Test Hall', 'hoengg'], ['City Bar', 'eth'], ['Ring Bistro', 'hoengg'], ['Faculty Club', 'eth']])
    expect(week[0].days[2].services[0].dishes[1].name).toBe('Bratwurst')
    expect(urls.filter(url => url.includes('lang=de'))).toHaveLength(1)
    await call('eth.week', { monday: '2026-11-23', language: 'en' })
    expect(urls).toHaveLength(3)
    await call('eth.week', { monday: '2026-11-23', language: 'en', fresh: true })
    expect(urls).toHaveLength(6)
  })

  it('lists UZH outlets and reads one outlet week from its categories', async () => {
    const { call } = backend(uzh)
    const outlets = await call<Outlet[]>('uzh.outlets', { language: 'de' })
    expect(outlets.map(outlet => outlet.name)).toEqual(['Obere Mensa', 'Seerose'])
    const location = await call<Location>('uzh.week', { path: outlets[0].path, monday: '2026-11-23', language: 'de' })
    expect(location.days[2].services.map(row => row.service)).toEqual(['lunch', 'dinner'])
    expect(location.days[2].services[0].dishes[0].allergens).toEqual(['Glutenhaltiges Getreide'])
    expect(location.days[2].services[0].dishes[0].gluten).toBe(true)
  })

  it('keeps an outlet page for 12 hours and queues the place list’s reads behind the page’s', async () => {
    const { call, fetch, urls } = backend(uzh)
    const outlets = await call<Outlet[]>('uzh.outlets', { language: 'de' })
    await call('uzh.week', { path: outlets[0].path, monday: '2026-11-23', language: 'de', background: true })
    await call('uzh.week', { path: outlets[0].path, monday: '2026-11-23', language: 'de', background: true, fresh: true })
    expect(urls.filter(url => url.endsWith('/obere-mensa'))).toHaveLength(2)
    const started: string[] = []
    const releases: (() => void)[] = []
    fetch.mockImplementation(async ({ url }: { url: string }) => {
      started.push(url)
      await new Promise<void>(resolve => releases.push(resolve))
      return { status: 404, headers: {}, bodyBase64: '' }
    })
    const tick = () => new Promise(resolve => setTimeout(resolve, 0))
    const reads = [
      call('uzh.week', { path: outlets[1].path, monday: '2026-11-23', language: 'de', background: true }),
      call('uzh.week', { path: outlets[1].path, monday: '2026-11-30', language: 'de', background: true }),
      call('uzh.week', { path: outlets[1].path, monday: '2026-12-07', language: 'de', background: true, fresh: true })
    ].map(read => read.catch(() => null))
    await tick()
    const picture = call('image', { url: DISH_IMAGE }).catch(() => null)
    await tick()
    expect(started).toHaveLength(2)
    releases.shift()!()
    await tick(); await tick()
    expect(started[2]).toBe(DISH_IMAGE)
    while (releases.length) { releases.shift()!(); await tick(); await tick() }
    await Promise.all([...reads, picture])
  })

  it('refuses unknown outlets, wrong dates and languages', async () => {
    const { call } = backend(uzh)
    await expect(call('uzh.week', { path: 'universitat-zurich,campus-zentrum/nowhere', monday: '2026-11-23', language: 'de' })).rejects.toThrow('invalidInput')
    await expect(call('uzh.week', { path: '../../etc', monday: '2026-11-23', language: 'de' })).rejects.toThrow('invalidInput')
    await expect(call('eth.week', { monday: '2026-11-24', language: 'de' })).rejects.toThrow('invalidInput')
    await expect(call('eth.week', { monday: '2026-11-23', language: 'fr' })).rejects.toThrow('invalidInput')
  })

  it('names service errors, unreadable answers and an unreachable network', async () => {
    await expect(backend(() => ({ status: 500, body: '' })).call('eth.week', { monday: '2026-11-23', language: 'de' })).rejects.toThrow('serviceError')
    await expect(backend(() => ({ body: '<html>' })).call('eth.week', { monday: '2026-11-23', language: 'de' })).rejects.toThrow('formatError')
    await expect(backend(() => ({ body: '<html></html>' })).call('uzh.outlets', { language: 'de' })).rejects.toThrow('formatError')
    const offline = backend(() => null)
    offline.fetch.mockRejectedValueOnce(new Error('ENOTFOUND'))
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    await expect(offline.call('uzh.outlets', { language: 'de' })).rejects.toThrow('networkError')
  })

  it('decodes UTF-8 bodies and cancels requests on dispose', async () => {
    expect(textFromBase64(base64('Hönggerberg – Zürich'))).toBe('Hönggerberg – Zürich')
    expect([...bytesFromBase64(base64('\u0000\u00ff'))]).toEqual([0, 0xc3, 0xbf])
    let release = () => {}
    const { dispose, call, fetch } = backend(eth)
    fetch.mockImplementationOnce(() => new Promise(resolve => { release = () => resolve({ status: 200, bodyBase64: base64('{}') }) }))
    const pending = call('uzh.outlets', { language: 'de' })
    await new Promise(resolve => setTimeout(resolve, 0))
    await dispose()
    release()
    await expect(pending).rejects.toThrow('unavailable')
    expect(() => call('eth.week', { monday: '2026-11-23', language: 'de' })).toThrow()
  })
})
