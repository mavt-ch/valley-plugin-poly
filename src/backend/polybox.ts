import type { PluginBackendApi } from '@valley/plugin-sdk'
import type { PluginCredentialStore, PluginFetchRequest, PluginSocketEndpoint } from '@valley/plugin-sdk/pluginNetwork'
import { WebdavError, createWebdavClient, type WebdavEntry } from '@valley/plugin-sdk/webdav'
import { bytesFromBase64, textFromBase64 } from '../base64'
import { POLYBOX_DATA, isSharePath, isShareToken, keptPath, shareDavUrl, sharePageUrl, shareTitle, type PolyboxFile } from '../polybox/model'

/** A share's folders change when the teaching assistant uploads; a listing is read again after two minutes, the title after a day. */
const LIST_TTL = 2 * 60_000
const TITLE_TTL = 24 * 3_600_000
const MAX_BYTES = 4 * 1024 * 1024
/** Course files are documents and slides; a larger file is refused rather than filling the plugin data folder. */
const MAX_FILE_BYTES = 2 * 1024 ** 3
/** A password share's file comes in ranges below the host's 4 MiB response limit (`network.download` cannot carry a credential). */
const RANGE_BYTES = 3 * 1024 * 1024
/**
 * Share passwords live in Valley's encrypted credential store, never in settings: one entry per share token holding
 * `anonymous:<password>` in base64, sent as HTTP Basic to Nextcloud's public WebDAV (the user name is ignored there).
 */
export const CREDENTIAL_STORE: PluginCredentialStore = { file: 'polybox-credentials.json', valueField: 'value' }
const ENDPOINTS: PluginSocketEndpoint[] = [{ host: 'polybox.ethz.ch', port: 443, security: 'tls' }]
export const credentialName = (token: string) => `polybox.${token}`
const PENDING = (token: string) => `polybox.pending.${token}`
const utf8 = new TextEncoder()
export const basicValue = (password: string) => { let binary = ''; for (const byte of utf8.encode(`anonymous:${password}`)) binary += String.fromCharCode(byte); return btoa(binary) }
const MAX_PASSWORD = 1000
const NC = 'http://nextcloud.org/ns'
/** The usual listing properties plus Nextcloud's `upload_time`, the only creation date Polybox reports (`creation_time` is 0). */
const LIST_PROPERTIES = [...['resourcetype', 'getcontentlength', 'getcontenttype', 'getlastmodified', 'getetag', 'displayname'].map(name => ({ namespace: 'DAV:', name })), { namespace: NC, name: 'upload_time' }]
const DISPLAY_NAME = '<?xml version="1.0"?><d:propfind xmlns:d="DAV:"><d:prop><d:displayname/></d:prop></d:propfind>'

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

  /** The stored password's credential handle per share, or null for an open share; dropped when the password changes. */
  const handles = new Map<string, Promise<string | null>>()
  const credentialFor = (token: string): Promise<string | null> => {
    let handle = handles.get(token)
    if (!handle) {
      handle = (async () => {
        const name = credentialName(token)
        if (await api.credentials.state(name, CREDENTIAL_STORE).catch(() => 'absent') !== 'ok') return null
        return api.credentials.handle(name, { store: CREDENTIAL_STORE, endpoints: ENDPOINTS })
      })()
      handle.catch(() => { if (handles.get(token) === handle) handles.delete(token) })
      handles.set(token, handle)
    }
    return handle
  }
  const withCredential = (request: PluginFetchRequest, handle: string | null): PluginFetchRequest =>
    handle ? { ...request, credential: { handle, placement: 'header', name: 'Authorization', prefix: 'Basic ' } } : request
  /** A WebDAV client for one share; `handle` (a stored or pending password) goes along as HTTP Basic. */
  const davFor = (token: string, handle: string | null) =>
    createWebdavClient({ fetch: request => fetch(withCredential(request as PluginFetchRequest, handle) as typeof request), baseUrl: shareDavUrl(token) })
  /** 401: the share wants a password, or the stored one no longer fits (the password was changed in Polybox). */
  const davProblem = (error: unknown, handle: string | null): Error =>
    error instanceof WebdavError && error.status === 401 ? new Error(handle ? 'polyboxWrongPassword' : 'polyboxPassword') : problem(error)
  const dropShare = (token: string) => {
    handles.delete(token)
    for (const key of [...memo.keys()]) if (key === `title:${token}` || key.startsWith(`list:${token}:`)) memo.delete(key)
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
    if (error instanceof Error && ['unavailable', 'notFound', 'serviceError', 'formatError', 'tooLarge', 'invalidInput', 'polyboxPassword', 'polyboxWrongPassword'].includes(error.message)) return error
    console.warn(`[poly] polybox.ethz.ch: ${error instanceof Error ? error.message : String(error)}`)
    return new Error('networkError')
  }

  const input = (raw: unknown) => raw && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : {}

  const createdOf = (entry: WebdavEntry) => {
    const seconds = Number(entry.props[`{${NC}}upload_time`]?.text)
    return Number.isFinite(seconds) && seconds > 0 ? { created: new Date(seconds * 1000).toISOString() } : {}
  }
  const fileOf = (entry: WebdavEntry): PolyboxFile => ({
    name: entry.name, path: entry.path, isFolder: entry.isCollection, url: entry.url, ...createdOf(entry),
    ...(entry.size !== undefined ? { size: entry.size } : {}), ...(entry.lastModified ? { modified: entry.lastModified } : {}), ...(entry.contentType ? { type: entry.contentType } : {})
  })

  const list = async (raw: unknown): Promise<PolyboxFile[]> => {
    const value = input(raw)
    if (!isShareToken(value.token) || !isSharePath(value.path ?? '')) throw new Error('invalidInput')
    const token = value.token, path = (value.path ?? '') as string
    return remember(`list:${token}:${path}`, LIST_TTL, value.fresh === true, async () => {
      const handle = await credentialFor(token)
      try { return (await davFor(token, handle).list(path ? `${path}/` : '', { properties: LIST_PROPERTIES })).map(fileOf) }
      catch (error) { throw davProblem(error, handle) }
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
        if (result.status >= 200 && result.status < 300) {
          const title = shareTitle(textFromBase64(result.bodyBase64))
          if (title) return title
        } else if (result.status < 300 || result.status >= 400) throw new Error('serviceError')
        // A password share's page sends to its password form (303) and has no title; once unlocked, the share's root names it.
        return await rootName(token)
      } catch (error) { throw problem(error) }
    })
  }

  /** The share's own folder name (`displayname` of its WebDAV root), read with the stored password; '' when there is none. */
  const rootName = async (token: string): Promise<string> => {
    const handle = await credentialFor(token)
    if (!handle) return ''
    const result = await fetch(withCredential({ url: shareDavUrl(token), method: 'PROPFIND', headers: { Depth: '0', 'Content-Type': 'application/xml; charset=utf-8' }, bodyBase64: btoa(DISPLAY_NAME) }, handle))
    if (result.status !== 207) return ''
    const match = /<(?:[A-Za-z0-9]+:)?displayname>([^<]*)<\/(?:[A-Za-z0-9]+:)?displayname>/.exec(textFromBase64(result.bodyBase64))
    return match ? shareTitle(`<meta property="og:title" content="${match[1].replace(/"/g, '&quot;')}">`) : ''
  }

  /**
   * Unlocks a password share: the password is tried under a scratch name first, so a wrong one never replaces a stored
   * one; when Polybox accepts it, it is stored encrypted for the share and every listing reads with it.
   */
  const unlock = async (raw: unknown): Promise<{ ok: true } | { ok: false; reason: 'rejected' | 'network' }> => {
    const value = input(raw)
    if (!isShareToken(value.token) || typeof value.password !== 'string' || !value.password || value.password.length > MAX_PASSWORD) throw new Error('invalidInput')
    const token = value.token, secret = basicValue(value.password)
    await api.credentials.set(PENDING(token), secret, ENDPOINTS, CREDENTIAL_STORE)
    try {
      const handle = await api.credentials.handle(PENDING(token), { store: CREDENTIAL_STORE, endpoints: ENDPOINTS })
      await davFor(token, handle).list('')
    } catch (error) {
      return { ok: false, reason: error instanceof WebdavError && error.status === 401 ? 'rejected' : 'network' }
    } finally {
      await api.credentials.delete(PENDING(token), CREDENTIAL_STORE).catch(() => undefined)
    }
    await api.credentials.set(credentialName(token), secret, ENDPOINTS, CREDENTIAL_STORE)
    dropShare(token)
    return { ok: true }
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
      const credential = await credentialFor(token)
      try { entry = await davFor(token, credential).stat(path) } catch (error) { throw davProblem(error, credential) }
      if (entry.isCollection) throw new Error('invalidInput')
      if ((entry.size ?? 0) > MAX_FILE_BYTES) throw new Error('tooLarge')
      return withData(async (handle, root) => {
        const remoteTime = entry.lastModified ? Date.parse(entry.lastModified) : NaN
        const kept = await api.storage.stat({ handle, path: target }).catch(() => null)
        const fresh = kept && kept.kind === 'file' && kept.size === entry.size && (!Number.isFinite(remoteTime) || kept.mtimeMs >= remoteTime - 1000)
        if (!fresh) {
          const parts = target.split('/')
          for (let i = 1; i < parts.length; i++) await api.storage.mkdir({ handle, path: parts.slice(0, i).join('/') }).catch(() => undefined)
          if (credential) {
            try { await fetchRanges(entry, credential, handle, target) }
            catch (error) { await api.storage.remove({ handle, path: target }, { missingOk: true }).catch(() => undefined); throw davProblem(error, credential) }
          } else {
            const requestId = crypto.randomUUID()
            requests.add(requestId)
            let download: { handle: string } | undefined
            try {
              download = await api.network.download({ requestId, url: entry.url, name: downloadName(parts.at(-1)!), maxBytes: Math.max(1, entry.size ?? MAX_FILE_BYTES) })
              await api.storage.importFile({ handle, path: target }, download.handle)
            } catch (error) { throw problem(error) }
            finally { requests.delete(requestId); if (download) await api.files.release([download.handle]).catch(() => undefined) }
          }
          if (Number.isFinite(remoteTime)) await api.storage.setTimes({ handle, path: target }, remoteTime).catch(() => undefined)
        }
        return realmRelative(root, target)
      })
    })()
    keeping.set(target, work)
    try { return await work } catch (error) { throw problem(error) } finally { keeping.delete(target) }
  }

  /** A password share's file, written in byte ranges with the stored password (`network.download` sends no credential). */
  const fetchRanges = async (entry: WebdavEntry, credential: string, handle: string, target: string) => {
    const size = entry.size
    let at = 0
    do {
      const end = size === undefined ? at + RANGE_BYTES - 1 : Math.min(size, at + RANGE_BYTES) - 1
      const result = await fetch(withCredential({ url: entry.url, method: 'GET', headers: { Range: `bytes=${at}-${end}` }, maxResponseBytes: MAX_BYTES }, credential))
      if (result.status === 401) throw new Error('polyboxWrongPassword')
      if (result.status !== 206 && !(result.status === 200 && at === 0)) throw new Error(result.status === 404 ? 'notFound' : 'serviceError')
      const chunk = bytesFromBase64(result.bodyBase64)
      await api.storage.writeBytes({ handle, path: target }, result.bodyBase64, at > 0)
      at += chunk.length
      if (result.status === 200 || !chunk.length) break
      const total = Number(/\/(\d+)$/.exec(result.headers['content-range'] ?? result.headers['Content-Range'] ?? '')?.[1])
      if (Number.isFinite(total) && at >= total) break
    } while (size === undefined || at < size)
    if (size !== undefined && at !== size) throw new Error('serviceError')
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
      for (const name of names) {
        await api.storage.remove({ handle, path: name }, { recursive: true, missingOk: true })
        await api.credentials.delete(credentialName(name), CREDENTIAL_STORE).catch(() => undefined)
        dropShare(name)
      }
      return names.length
    }).catch(error => { throw problem(error) })
  }

  const offs = [api.rpc.handle('polybox.list', list), api.rpc.handle('polybox.title', title), api.rpc.handle('polybox.keep', keep), api.rpc.handle('polybox.forget', forget), api.rpc.handle('polybox.unlock', unlock)]
  return async () => {
    disposed = true
    for (const off of offs) off()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
    handles.clear()
  }
}
