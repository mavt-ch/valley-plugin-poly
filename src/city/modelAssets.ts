import { api } from './runtime'

/**
 * The packaged city model (26 Nov): `runtime/assets/model/<file>.js`, one classic script per model file, written by
 * `tooling/modelAssets.mjs`. The plugin's own assets load as scripts from the frame's origin, also through a realm
 * whose Poly package is a symbolic link, where storage grants refuse to go. Each script calls `valleyPolyModel(path, base64)`.
 */
export const MODEL_CALLBACK = 'valleyPolyModel'
const MODEL_FILE = /^(?:index\.json|ground\.bin|tiles\/-?\d{1,6}_-?\d{1,6}\.(?:bin\.gz|json))$/

/** The package has no such model file (a package built without its model). */
export class ModelAssetMissing extends Error {}

export function decodeBase64(text: string): ArrayBuffer {
  const fromBase64 = (Uint8Array as unknown as { fromBase64?: (value: string) => Uint8Array }).fromBase64
  if (fromBase64) return fromBase64(text).buffer as ArrayBuffer
  const binary = atob(text)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes.buffer
}

const received = new Map<string, (data: string) => void>()
const loads = new Map<string, Promise<ArrayBuffer>>()

/** Installs the scripts' callback on a window: it hands each file to the load waiting for exactly that path. */
export function installModelReceiver(view: Window): void {
  const target = view as unknown as Record<string, unknown>
  if (typeof target[MODEL_CALLBACK] === 'function') return
  target[MODEL_CALLBACK] = (path: unknown, data: unknown) => {
    if (typeof path === 'string' && typeof data === 'string') received.get(path)?.(data)
  }
}

/** One whole packaged model file; concurrent reads of the same file share one script load. */
export function readPackagedModelFile(path: string, doc: Document = document): Promise<ArrayBuffer> {
  if (!MODEL_FILE.test(path)) return Promise.reject(new Error('invalidPath'))
  const pending = loads.get(path)
  if (pending) return pending
  const load = new Promise<ArrayBuffer>((resolve, reject) => {
    if (doc.defaultView) installModelReceiver(doc.defaultView)
    let data: string | null = null
    received.set(path, value => { data = value })
    const script = doc.createElement('script')
    const finish = () => { received.delete(path); loads.delete(path); script.remove() }
    script.onload = () => {
      finish()
      if (data === null) { reject(new Error(`${path}: not a packaged model file`)); return }
      try { resolve(decodeBase64(data)) } catch (error) { reject(error) }
    }
    script.onerror = () => { finish(); reject(new ModelAssetMissing(path)) }
    script.src = api.assets.url(`model/${path}.js`)
    ;(doc.head ?? doc.documentElement).appendChild(script)
  })
  loads.set(path, load)
  return load
}
