import type { PluginBackendApi } from '@valley/plugin-sdk'
import { bytesFromBase64 } from '../base64'

/**
 * A model installed into the realm's plugin data (`npm run update-model -- --realm`). The packaged model is not read
 * here: the UI loads it from the package's own assets (`src/city/modelAssets.ts`), which also works when the realm's
 * Poly package is a symbolic link, because storage grants never traverse one (26 Nov).
 */
export const MODEL_FOLDER = 'plugins/data/poly/model'
export const CHUNK_BYTES = 2 * 1024 * 1024
const MODEL_FILE = /^(?:index\.json|ground\.bin|tiles\/-?\d{1,6}_-?\d{1,6}\.(?:bin\.gz|json))$/

function request(value: unknown): { path: string; offset: number } {
  const input = value as { path?: unknown; offset?: unknown } | null
  if (!input || typeof input.path !== 'string' || !MODEL_FILE.test(input.path)) throw new Error('invalidPath')
  const offset = input.offset ?? 0
  if (typeof offset !== 'number' || !Number.isSafeInteger(offset) || offset < 0) throw new Error('invalidOffset')
  return { path: input.path, offset }
}

// The host answers `encoding: 'bytes'` with an ArrayBuffer; the vendored SDK types still describe base64 only.
interface ByteStorage {
  readBytes(location: { handle: string; path: string }, options: { offset?: number; maxBytes?: number; encoding: 'bytes' }): Promise<{ bytes?: ArrayBuffer; base64?: string; nextOffset: number; done: boolean }>
}

function toBuffer(chunk: { bytes?: ArrayBuffer; base64?: string }): ArrayBuffer {
  return chunk.bytes ?? bytesFromBase64(chunk.base64 ?? '').buffer
}

export function registerCity(api: PluginBackendApi): () => void {
  const storage = api.storage as unknown as ByteStorage
  const opened: string[] = []
  // A folder the host refuses (missing, or behind a symbolic link) is no installed model: the UI then uses the packaged one.
  const find = async (): Promise<{ handle: string; folder: string } | null> => {
    for (const folder of [MODEL_FOLDER]) {
      const handle = await api.storage.open({ area: 'metadata', path: folder, kind: 'directory', mode: 'read' }).then(grant => grant.handle, () => null)
      if (!handle) continue
      const entry = await api.storage.stat({ handle, path: 'index.json' }).catch(() => null)
      if (entry?.kind === 'file') { opened.push(handle); return { handle, folder } }
      await api.storage.close(handle).catch(() => {})
    }
    return null
  }
  let model: Promise<{ handle: string; folder: string } | null> | null = null
  const located = () => (model ??= find().then(value => { if (!value) model = null; return value }, error => { model = null; throw error }))
  const offs = [
    api.rpc.handle('model.status', async () => {
      const found = await located()
      return { installed: !!found, folder: `${found?.folder ?? MODEL_FOLDER}/` }
    }),
    // One chunk of a model file: the bytes reach the UI as an ArrayBuffer (bytes mode), never as base64.
    api.rpc.handle('model.read', async raw => {
      const { path, offset } = request(raw)
      const found = await located()
      if (!found) throw new Error('modelMissing')
      return toBuffer(await storage.readBytes({ handle: found.handle, path }, { offset, maxBytes: CHUNK_BYTES, encoding: 'bytes' }))
    }),
  ]
  return () => {
    offs.forEach(off => off())
    for (const handle of opened.splice(0)) void api.storage.close(handle).catch(() => {})
  }
}
