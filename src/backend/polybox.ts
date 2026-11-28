import type { PluginBackendApi } from '@valley/plugin-sdk'
import { WebdavError, createWebdavClient, type WebdavEntry } from '@valley/plugin-sdk/webdav'
import { textFromBase64 } from '../base64'
import { POLYBOX_DATA, isSharePath, isShareToken, keptPath, shareDavUrl, sharePageUrl, shareTitle, type PolyboxFile } from '../polybox/model'

/** A share's folders change when the teaching assistant uploads; a listing is read again after two minutes, the title after a day. */
const LIST_TTL = 2 * 60_000
const TITLE_TTL = 24 * 3_600_000
const MAX_BYTES = 4 * 1024 * 1024
/** Course files are documents and slides; a larger file is refused rather than filling the plugin data folder. */
const MAX_FILE_BYTES = 2 * 1024 ** 3

/** The host names a download handle in plain ASCII only; the realm file keeps its real name, so the handle gets `polybox.<extension>`. */
export const downloadName = (name: string) => `polybox${/\.([A-Za-z0-9]{1,16})$/.exec(name)?.[0] ?? ''}`

/**
 * Polybox: public shares of polybox.ethz.ch (Nextcloud) read through the SDK's WebDAV client on Nextcloud's public
 * endpoint (`public.php/dav/files/<token>/`, no login), and each share's title from its public page.
 */
export function registerPolybox(api: PluginBackendApi): () => Promise<void> {
  const requests = new Set<string>()
  const memo = new Map<string, { at: number; ttl: number; value: Promise<unknown> }>()
  let disposed = false

  const fetch: Parameters<typeof createWebdavClient>[0]['fetch'] = async request => {
    if (disposed) throw new Error('unavailable')
    const requestId = request.requestId ?? crypto.randomUUID()
    requests.add(requestId)
    try { return await api.network.fetch({ ...request, requestId, timeoutMs: request.timeoutMs ?? 20_000, maxResponseBytes: Math.min(request.maxResponseBytes ?? MAX_BYTES, MAX_BYTES) }) }
    finally { requests.delete(requestId) }
  }

  const remember = <T>(key: string, ttl: number, fresh: boolean, load: () => Promise<T>): Promise<T> => {
    const hit = memo.get(key)
    if (!fresh && hit && Date.now() - hit.at < hit.ttl) return hit.value as Promise<T>
    const value = load()
    memo.set(key, { at: Date.now(), ttl, value })
    value.catch(() => { if (memo.get(key)?.value === value) memo.delete(key) })
    if (memo.size > 300) memo.delete(memo.keys().next().value!)
    return value
  }

  const problem = (error: unknown): Error => {
    if (error instanceof WebdavError) return new Error(error.status === 404 ? 'notFound' : error.status === 401 || error.status === 403 ? 'polyboxLocked' : 'serviceError')
    if (error instanceof Error && ['unavailable', 'notFound', 'serviceError', 'formatError', 'tooLarge', 'invalidInput'].includes(error.message)) return error
    console.warn(`[poly] polybox.ethz.ch: ${error instanceof Error ? error.message : String(error)}`)
    return new Error('networkError')
  }

  const input = (raw: unknown) => raw && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : {}

  const fileOf = (entry: WebdavEntry): PolyboxFile => ({
    name: entry.name, path: entry.path, isFolder: entry.isCollection, url: entry.url,
    ...(entry.size !== undefined ? { size: entry.size } : {}), ...(entry.lastModified ? { modified: entry.lastModified } : {}), ...(entry.contentType ? { type: entry.contentType } : {})
  })

  const list = async (raw: unknown): Promise<PolyboxFile[]> => {
    const value = input(raw)
    if (!isShareToken(value.token) || !isSharePath(value.path ?? '')) throw new Error('invalidInput')
    const token = value.token, path = (value.path ?? '') as string
    return remember(`list:${token}:${path}`, LIST_TTL, value.fresh === true, async () => {
      try { return (await createWebdavClient({ fetch, baseUrl: shareDavUrl(token) }).list(path ? `${path}/` : '')).map(fileOf) }
      catch (error) { throw problem(error) }
    })
  }

  const title = async (raw: unknown): Promise<string> => {
    const value = input(raw)
    if (!isShareToken(value.token)) throw new Error('invalidInput')
    const token = value.token
    return remember(`title:${token}`, TITLE_TTL, value.fresh === true, async () => {
      try {
        const result = await fetch({ url: sharePageUrl(token), method: 'GET', headers: { Accept: 'text/html' } })
        if (result.status === 404) throw new Error('notFound')
        if (result.status < 200 || result.status >= 300) throw new Error('serviceError')
        return shareTitle(textFromBase64(result.bodyBase64))
      } catch (error) { throw problem(error) }
    })
  }

  /** A write grant on Polybox's folder in the plugin data folder; the host creates it on first use. */
  const withData = async <T>(work: (handle: string, root: string) => Promise<T>): Promise<T> => {
    const grant = await api.storage.open({ area: 'metadata', path: POLYBOX_DATA, kind: 'directory', mode: 'write' })
    try { return await work(grant.handle, grant.path) } finally { await api.storage.close(grant.handle) }
  }
  /**
   * The realm-relative path of a kept file, for the host's open-with-default-app and reveal actions: the grant's absolute
   * path ends in `<config folder>/plugins/data/poly/polybox`, so the config folder's name comes from it (no realm access needed).
   */
  const realmRelative = (grantPath: string, target: string) => {
    const root = grantPath.replace(/\/+$/, '')
    if (!root.endsWith(`/${POLYBOX_DATA}`)) throw new Error('formatError')
    const config = root.slice(0, -POLYBOX_DATA.length - 1).split('/').at(-1)
    if (!config) throw new Error('formatError')
    return `${config}/${POLYBOX_DATA}/${target}`
  }

  /**
   * A share's file kept in Polybox's own data folder (`<token>/<path>`): downloaded when missing or when the share's copy
   * is newer or of another size than the kept one, else used as it is. Returns its realm-relative path.
   */
  const keeping = new Map<string, Promise<string>>()
  const keep = async (raw: unknown): Promise<string> => {
    const value = input(raw)
    if (!isShareToken(value.token) || !isSharePath(value.path) || !value.path) throw new Error('invalidInput')
    const token = value.token, path = value.path
    const target = keptPath(token, path)
    const running = keeping.get(target)
    if (running) return running
    const work = (async () => {
      let entry: WebdavEntry
      try { entry = await createWebdavClient({ fetch, baseUrl: shareDavUrl(token) }).stat(path) } catch (error) { throw problem(error) }
      if (entry.isCollection) throw new Error('invalidInput')
      if ((entry.size ?? 0) > MAX_FILE_BYTES) throw new Error('tooLarge')
      return withData(async (handle, root) => {
        const remoteTime = entry.lastModified ? Date.parse(entry.lastModified) : NaN
        const kept = await api.storage.stat({ handle, path: target }).catch(() => null)
        const fresh = kept && kept.kind === 'file' && kept.size === entry.size && (!Number.isFinite(remoteTime) || kept.mtimeMs >= remoteTime - 1000)
        if (!fresh) {
          const parts = target.split('/')
          for (let i = 1; i < parts.length; i++) await api.storage.mkdir({ handle, path: parts.slice(0, i).join('/') }).catch(() => undefined)
          const requestId = crypto.randomUUID()
          requests.add(requestId)
          let download: { handle: string } | undefined
          try {
            download = await api.network.download({ requestId, url: entry.url, name: downloadName(parts.at(-1)!), maxBytes: Math.max(1, entry.size ?? MAX_FILE_BYTES) })
            await api.storage.importFile({ handle, path: target }, download.handle)
            if (Number.isFinite(remoteTime)) await api.storage.setTimes({ handle, path: target }, remoteTime).catch(() => undefined)
          } catch (error) { throw problem(error) }
          finally { requests.delete(requestId); if (download) await api.files.release([download.handle]).catch(() => undefined) }
        }
        return realmRelative(root, target)
      })
    })()
    keeping.set(target, work)
    try { return await work } catch (error) { throw problem(error) } finally { keeping.delete(target) }
  }

  /** Removes the kept files of shares no longer listed (`keep`: the listed tokens), or of one removed share (`token`). */
  const forget = async (raw: unknown): Promise<number> => {
    const value = input(raw)
    const keepTokens = Array.isArray(value.keep) ? value.keep.filter(isShareToken) : null
    if (!keepTokens && !isShareToken(value.token)) throw new Error('invalidInput')
    return withData(async handle => {
      const names = keepTokens
        ? (await api.storage.list({ handle, path: '' }).catch(() => [])).filter(entry => entry.kind === 'directory' && isShareToken(entry.name) && !keepTokens.includes(entry.name)).map(entry => entry.name)
        : [value.token as string]
      for (const name of names) await api.storage.remove({ handle, path: name }, { recursive: true, missingOk: true })
      return names.length
    }).catch(error => { throw problem(error) })
  }

  const offs = [api.rpc.handle('polybox.list', list), api.rpc.handle('polybox.title', title), api.rpc.handle('polybox.keep', keep), api.rpc.handle('polybox.forget', forget)]
  return async () => {
    disposed = true
    for (const off of offs) off()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
  }
}
