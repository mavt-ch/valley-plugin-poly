import { describe, expect, it, vi } from 'vitest'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { downloadName, registerPolybox } from '../src/backend/polybox'
import type { PolyboxFile } from '../src/polybox/model'

const base64 = (text: string) => Buffer.from(text, 'utf-8').toString('base64')
const TOKEN = 'AbCdEf1234567'
/** A trimmed Nextcloud 31 answer to PROPFIND on a public share (invented names). */
const MULTISTATUS = `<?xml version="1.0"?>
<d:multistatus xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns" xmlns:oc="http://owncloud.org/ns">
 <d:response><d:href>/public.php/dav/files/${TOKEN}/</d:href><d:propstat><d:prop><d:resourcetype><d:collection/></d:resourcetype><d:getlastmodified>Fri, 27 Nov 2026 13:02:21 GMT</d:getlastmodified></d:prop><d:status>HTTP/1.1 200 OK</d:status></d:propstat></d:response>
 <d:response><d:href>/public.php/dav/files/${TOKEN}/%c3%9cbungsstunden/</d:href><d:propstat><d:prop><d:resourcetype><d:collection/></d:resourcetype><d:getlastmodified>Fri, 27 Nov 2026 13:02:21 GMT</d:getlastmodified></d:prop><d:status>HTTP/1.1 200 OK</d:status></d:propstat></d:response>
 <d:response><d:href>/public.php/dav/files/${TOKEN}/Serie%201.pdf</d:href><d:propstat><d:prop><d:resourcetype/><d:getcontentlength>80490</d:getcontentlength><d:getcontenttype>application/pdf</d:getcontenttype><d:getlastmodified>Thu, 17 Sep 2026 18:45:41 GMT</d:getlastmodified></d:prop><d:status>HTTP/1.1 200 OK</d:status></d:propstat></d:response>
</d:multistatus>`

function backend(answer: (request: { url: string; method?: string; headers?: Record<string, string> }) => { status: number; body: string }) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const requests: { url: string; method?: string; headers?: Record<string, string> }[] = []
  const fetch = vi.fn(async (request: { url: string; method?: string; headers?: Record<string, string>; maxResponseBytes?: number }) => {
    if (request.maxResponseBytes === undefined || request.maxResponseBytes > 4 * 1024 * 1024) throw new Error('maxResponseBytes too large')
    requests.push(request)
    const { status, body } = answer(request)
    return { status, headers: { 'Content-Type': 'application/xml' }, bodyBase64: base64(body) }
  })
  const realm = new Map<string, { size: number; mtimeMs: number }>()
  const writes: string[] = []
  const download = vi.fn(async (request: { url: string; maxBytes: number }) => ({ handle: `dl:${request.url}`, name: 'x', size: 80490, sha256: '' }))
  const storage = {
    open: vi.fn(async (_input: { area: string; path: string }) => ({ handle: 'g1', path: '/realm/.valley/plugins/data/poly/polybox', kind: 'directory', mode: 'write' })),
    list: vi.fn(async () => [...new Set([...realm.keys()].map(path => path.split('/')[0]))].map(name => ({ name, kind: 'directory', size: 0, mtimeMs: 0 })).concat([{ name: 'notes.txt', kind: 'file', size: 1, mtimeMs: 0 }])),
    remove: vi.fn(async ({ path }: { path: string }) => { for (const key of [...realm.keys()]) if (key === path || key.startsWith(`${path}/`)) realm.delete(key) }),
    close: vi.fn(async () => undefined),
    stat: vi.fn(async ({ path }: { path: string }) => realm.has(path) ? { name: path, kind: 'file', ...realm.get(path)! } : null),
    mkdir: vi.fn(async () => undefined),
    importFile: vi.fn(async ({ path }: { path: string }, handle: string) => { writes.push(`${path} <- ${handle}`); realm.set(path, { size: 80490, mtimeMs: 0 }) }),
    setTimes: vi.fn(async ({ path }: { path: string }, modifiedAt: number) => { realm.get(path)!.mtimeMs = modifiedAt })
  }
  const files = { release: vi.fn(async () => undefined) }
  const api = { rpc: { handle: (name: string, fn: (payload: unknown) => unknown) => { handlers.set(name, fn); return () => handlers.delete(name) } }, network: { fetch, download, cancel: vi.fn(async () => true) }, storage, files, realm: { info: vi.fn(async () => { throw new Error('Realm access is not declared') }) } }
  const dispose = registerPolybox(api as unknown as PluginBackendApi)
  const call = <T>(name: string, payload: unknown) => handlers.get(name)!(payload) as Promise<T>
  return { call, requests, dispose, writes, realm, download, files, storage }
}

describe('Polybox backend', () => {
  it('lists a public share through WebDAV without a login, keeps it two minutes and reads again on Refresh', async () => {
    const { call, requests } = backend(() => ({ status: 207, body: MULTISTATUS }))
    const files = await call<PolyboxFile[]>('polybox.list', { token: TOKEN, path: '' })
    expect(requests[0]).toMatchObject({ method: 'PROPFIND', url: `https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/` })
    expect(requests[0].headers?.Depth).toBe('1')
    expect(Object.keys(requests[0].headers ?? {}).some(name => name.toLowerCase() === 'authorization')).toBe(false)
    expect(files).toEqual([
      { name: 'Übungsstunden', path: 'Übungsstunden', isFolder: true, modified: '2026-11-27T13:02:21.000Z', url: `https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/%c3%9cbungsstunden/` },
      { name: 'Serie 1.pdf', path: 'Serie 1.pdf', isFolder: false, size: 80490, modified: '2026-09-17T18:45:41.000Z', type: 'application/pdf', url: `https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/Serie%201.pdf` }
    ])
    await call('polybox.list', { token: TOKEN, path: '' })
    expect(requests).toHaveLength(1)
    await call('polybox.list', { token: TOKEN, path: '', fresh: true })
    expect(requests).toHaveLength(2)
    await call('polybox.list', { token: TOKEN, path: 'Übungsstunden' })
    expect(requests[2].url).toBe(`https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/%C3%9Cbungsstunden/`)
  })

  it('refuses bad tokens and paths, and names a locked or missing share', async () => {
    const { call } = backend(request => ({ status: request.url.includes('Gone') ? 404 : 401, body: '' }))
    await expect(call('polybox.list', { token: 'x', path: '' })).rejects.toThrow('invalidInput')
    await expect(call('polybox.list', { token: TOKEN, path: '../x' })).rejects.toThrow('invalidInput')
    await expect(call('polybox.list', { token: TOKEN, path: '' })).rejects.toThrow('polyboxLocked')
    await expect(call('polybox.list', { token: TOKEN, path: 'Gone' })).rejects.toThrow('notFound')
  })

  it('reads the share title from its public page', async () => {
    const { call, requests } = backend(() => ({ status: 200, body: '<head><meta property="og:title" content="Analysis I - HS26 - MAVT - H&ouml;cker"></head>' }))
    expect(await call('polybox.title', { token: TOKEN })).toBe('Analysis I - HS26 - MAVT - Höcker')
    expect(requests[0]).toMatchObject({ method: 'GET', url: `https://polybox.ethz.ch/index.php/s/${TOKEN}` })
  })

  it('keeps a file in Polybox\'s data folder, downloading it again only when the share\'s copy changed, and forgets removed shares', async () => {
    const one = `<?xml version="1.0"?><d:multistatus xmlns:d="DAV:"><d:response><d:href>/public.php/dav/files/${TOKEN}/%c3%9cbungen/Serie%201.pdf</d:href><d:propstat><d:prop><d:resourcetype/><d:getcontentlength>80490</d:getcontentlength><d:getlastmodified>Thu, 17 Sep 2026 18:45:41 GMT</d:getlastmodified></d:prop><d:status>HTTP/1.1 200 OK</d:status></d:propstat></d:response></d:multistatus>`
    const { call, requests, writes, realm, download, files, storage } = backend(() => ({ status: 207, body: one }))
    const path = await call<string>('polybox.keep', { token: TOKEN, path: 'Übungen/Serie 1.pdf' })
    expect(path).toBe(`.valley/plugins/data/poly/polybox/${TOKEN}/Übungen/Serie 1.pdf`)
    expect(storage.open).toHaveBeenCalledWith({ area: 'metadata', path: 'plugins/data/poly/polybox', kind: 'directory', mode: 'write' })
    expect(requests[0]).toMatchObject({ method: 'PROPFIND', url: `https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/%C3%9Cbungen/Serie%201.pdf` })
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ url: `https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/%c3%9cbungen/Serie%201.pdf`, maxBytes: 80490, name: 'polybox.pdf' }))
    expect(['Wie füge ich eine Polybox hinzu?.pdf', 'Links (Kahoot, etc.).md', 'README', 'a.tar.gz'].map(downloadName)).toEqual(['polybox.pdf', 'polybox.md', 'polybox', 'polybox.gz'])
    expect(writes).toEqual([`${TOKEN}/Übungen/Serie 1.pdf <- dl:https://polybox.ethz.ch/public.php/dav/files/${TOKEN}/%c3%9cbungen/Serie%201.pdf`])
    expect(realm.get(`${TOKEN}/Übungen/Serie 1.pdf`)?.mtimeMs).toBe(Date.parse('2026-09-17T18:45:41Z'))
    expect(files.release).toHaveBeenCalledTimes(1)
    // Unchanged on the share: the kept copy opens without a second download; a newer copy replaces it.
    await call('polybox.keep', { token: TOKEN, path: 'Übungen/Serie 1.pdf' })
    expect(download).toHaveBeenCalledTimes(1)
    realm.get(`${TOKEN}/Übungen/Serie 1.pdf`)!.mtimeMs = 0
    await call('polybox.keep', { token: TOKEN, path: 'Übungen/Serie 1.pdf' })
    expect(download).toHaveBeenCalledTimes(2)
    await expect(call('polybox.keep', { token: TOKEN, path: '' })).rejects.toThrow('invalidInput')
    // Removing the share removes its folder; a prune keeps only listed shares and never touches other files.
    realm.set('ZyXwVu9876543/a.pdf', { size: 1, mtimeMs: 0 })
    expect(await call('polybox.forget', { keep: ['ZyXwVu9876543'] })).toBe(1)
    expect([...realm.keys()]).toEqual(['ZyXwVu9876543/a.pdf'])
    expect(await call('polybox.forget', { token: 'ZyXwVu9876543' })).toBe(1)
    expect(realm.size).toBe(0)
    await expect(call('polybox.forget', { token: '../x' })).rejects.toThrow('invalidInput')
  })
})
