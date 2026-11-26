import { describe, expect, it, vi } from 'vitest'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { registerCampus, tileUrl } from '../src/backend/campus'
import { OUTLINES, ROOMS } from './campus-fixtures'

const encode = (value: unknown) => btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(value))))

function backend(answer: (url: string) => { status: number; body: string }) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const fetch = vi.fn(async ({ url, maxResponseBytes }: { url: string; maxResponseBytes: number }) => {
    if (maxResponseBytes > 4 * 1024 * 1024) throw new Error('maxResponseBytes too large')
    const { status, body } = answer(url)
    return { status, headers: {}, bodyBase64: body }
  })
  const api = { network: { fetch, cancel: vi.fn(async () => true) }, rpc: { handle: (name: string, handler: (payload: unknown) => unknown) => { handlers.set(name, handler); return () => handlers.delete(name) } } } as unknown as PluginBackendApi
  return { handlers, fetch, dispose: registerCampus(api) }
}

describe('campus backend', () => {
  it('reads every outline from ETH\'s Facilities service once and keeps it', async () => {
    const { handlers, fetch } = backend(() => ({ status: 200, body: encode(OUTLINES) }))
    const outlines = await handlers.get('campus.outlines')!({}) as { code: string }[]
    expect(outlines.map(outline => outline.code)).toEqual(['HG', 'HCI'])
    const url = new URL(fetch.mock.calls[0][0].url)
    expect(url.host).toBe('arcgis-prd-web.ethz.ch')
    expect(url.pathname).toBe('/server/rest/services/EGDB_EN/Facilities_EN/FeatureServer/5/query')
    expect(Object.fromEntries(url.searchParams)).toMatchObject({ where: '1=1', f: 'geojson', resultOffset: '0', resultRecordCount: '2000' })
    await handlers.get('campus.outlines')!({})
    expect(fetch).toHaveBeenCalledTimes(1)
    await handlers.get('campus.outlines')!({ fresh: true })
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('pages a floor\'s rooms while the service reports more', async () => {
    let page = 0
    const { handlers, fetch } = backend(() => ({ status: 200, body: encode(page++ === 0 ? { ...ROOMS, exceededTransferLimit: true } : ROOMS) }))
    const rooms = await handlers.get('campus.rooms')!({ level: 'ETH.HG.E' }) as unknown[]
    expect(rooms).toHaveLength(6)
    expect(fetch).toHaveBeenCalledTimes(2)
    expect(new URL(fetch.mock.calls[1][0].url).searchParams.get('resultOffset')).toBe('2000')
    expect(new URL(fetch.mock.calls[0][0].url).searchParams.get('where')).toBe("LEVEL_ID='ETH.HG.E'")
  })

  it('searches rooms with one bounded query and keeps the answer', async () => {
    const { handlers, fetch } = backend(() => ({ status: 200, body: encode(ROOMS) }))
    const rooms = await handlers.get('campus.searchRooms')!({ query: { building: 'HG', floor: 'E', number: '5' } }) as { level: string }[]
    expect(rooms).toHaveLength(3)
    expect(rooms[0].level).toBe('ETH.HG.E')
    const params = new URL(fetch.mock.calls[0][0].url).searchParams
    expect(params.get('where')).toBe("NAME LIKE 'HG E 5%'")
    expect(params.get('resultRecordCount')).toBe('40')
    await handlers.get('campus.searchRooms')!({ query: { building: 'HG', floor: 'E', number: '5' } })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(() => handlers.get('campus.searchRooms')!({ query: { building: 'HG', floor: 'E', number: "5' OR '1'='1" } })).toThrow('invalidInput')
  })

  it.each([{}, { level: "ETH.HG.E' OR 1=1 --" }, { level: 'HG.E' }])('refuses a floor id that is not one (%o)', async input => {
    const { handlers, fetch } = backend(() => ({ status: 200, body: encode(ROOMS) }))
    expect(() => handlers.get('campus.rooms')!(input)).toThrow('invalidInput')
    expect(fetch).not.toHaveBeenCalled()
  })

  it('reports a failing service', async () => {
    const { handlers } = backend(() => ({ status: 500, body: '' }))
    await expect(handlers.get('campus.levels')!({})).rejects.toThrow('serviceError')
  })

  it('serves the blank base map\'s tiles as bytes, light or dark, from memory the second time', async () => {
    const { handlers, fetch } = backend(() => ({ status: 200, body: btoa('PNG!') }))
    const bytes = await handlers.get('campus.tile')!({ z: 16, x: 34322, y: 22915 }) as ArrayBuffer
    expect(new TextDecoder().decode(bytes)).toBe('PNG!')
    expect(fetch.mock.calls[0][0]).toMatchObject({ url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/16/22915/34322', headers: { 'User-Agent': expect.stringContaining('Valley-Poly') } })
    await handlers.get('campus.tile')!({ z: 16, x: 34322, y: 22915 })
    expect(fetch).toHaveBeenCalledTimes(1)
    await handlers.get('campus.tile')!({ z: 16, x: 34322, y: 22915, dark: true })
    expect(fetch.mock.calls[1][0].url).toBe('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/16/22915/34322')
  })

  it.each([{ z: 17, x: 0, y: 0 }, { z: 2, x: 4, y: 0 }, { z: 1.5, x: 0, y: 0 }, { z: 2, x: 0, y: 0, dark: 'yes' }, null])('refuses a tile outside the map (%o)', input => {
    expect(() => tileUrl(input)).toThrow('invalidInput')
  })

  it('cancels open requests on disposal', async () => {
    const { handlers, dispose } = backend(() => ({ status: 200, body: encode(OUTLINES) }))
    await handlers.get('campus.outlines')!({})
    await dispose()
    await expect(handlers.get('campus.outlines')?.({ fresh: true })).toBeUndefined()
  })
})
