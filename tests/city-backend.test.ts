import config from '../config.json'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { CHUNK_BYTES, MODEL_FOLDER, PACKAGE_MODEL_FOLDERS, registerCity as register } from '../src/backend/city'

function backend(installed: readonly string[] = [MODEL_FOLDER]) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const storage = {
    open: vi.fn(async ({ path }: { path: string }) => ({ handle: path, path: '/realm/.valley/' + path, kind: 'directory', mode: 'read' })),
    stat: vi.fn(async ({ handle, path }: { handle: string; path: string }) => (path === 'index.json' && installed.includes(handle) ? { name: 'index.json', kind: 'file', size: 10, mtimeMs: 0 } : null)),
    readBytes: vi.fn(async () => ({ bytes: new Uint8Array([1, 2, 3]).buffer, nextOffset: 3, done: true })),
    close: vi.fn(async () => {}),
  }
  const api = { storage, rpc: { handle: (name: string, handler: (payload: unknown) => unknown) => { handlers.set(name, handler); return () => handlers.delete(name) } } } as unknown as PluginBackendApi
  const dispose = register(api)
  return { handlers, storage, dispose }
}

describe('backend', () => {
  it('reports an installed model', async () => {
    const { handlers, storage } = backend()
    await expect(handlers.get('model.status')?.(undefined)).resolves.toEqual({ installed: true, folder: `${MODEL_FOLDER}/`, bundled: false })
    expect(storage.open).toHaveBeenCalledWith({ area: 'metadata', path: MODEL_FOLDER, kind: 'directory', mode: 'read' })
  })

  it('reads the packaged model when the realm has none', async () => {
    const github = PACKAGE_MODEL_FOLDERS.find(folder => folder.includes('/github/'))!
    const { handlers, storage } = backend([github])
    await expect(handlers.get('model.status')?.(undefined)).resolves.toEqual({ installed: true, folder: `${github}/`, bundled: true })
    await handlers.get('model.read')?.({ path: 'index.json', offset: 0 })
    expect(storage.readBytes).toHaveBeenLastCalledWith({ handle: github, path: 'index.json' }, { offset: 0, maxBytes: CHUNK_BYTES, encoding: 'bytes' })
    expect(storage.close).toHaveBeenCalledWith(MODEL_FOLDER)
    expect(storage.close).not.toHaveBeenCalledWith(github)
  })

  it('reports a missing model and looks again on the next call', async () => {
    const { handlers, storage } = backend([])
    await expect(handlers.get('model.status')?.(undefined)).resolves.toEqual({ installed: false, folder: `${MODEL_FOLDER}/`, bundled: false })
    await expect(handlers.get('model.read')?.({ path: 'index.json' })).rejects.toThrow('modelMissing')
    expect(storage.open).toHaveBeenCalledTimes((1 + PACKAGE_MODEL_FOLDERS.length) * 2)
  })

  it('declares a read grant for every model folder', () => {
    expect(config.permissions.storage.metadata).toEqual([MODEL_FOLDER, ...PACKAGE_MODEL_FOLDERS])
  })

  it('reads model files in chunks as bytes', async () => {
    const { handlers, storage } = backend()
    const bytes = await handlers.get('model.read')?.({ path: 'tiles/5366_2494.bin.gz', offset: 0 })
    expect(new Uint8Array(bytes as ArrayBuffer)).toEqual(new Uint8Array([1, 2, 3]))
    expect(storage.readBytes).toHaveBeenCalledWith({ handle: MODEL_FOLDER, path: 'tiles/5366_2494.bin.gz' }, { offset: 0, maxBytes: CHUNK_BYTES, encoding: 'bytes' })
  })

  it.each(['../secret', 'tiles/../index.json', '/etc/passwd', 'notes.md', 'tiles/a_b.bin.gz'])('refuses %s', async (path) => {
    const { handlers } = backend()
    await expect(handlers.get('model.read')?.({ path, offset: 0 })).rejects.toThrow('invalidPath')
  })

  it('opens one grant and closes it on disposal', async () => {
    const { handlers, storage, dispose } = backend()
    await handlers.get('model.status')?.(undefined)
    await handlers.get('model.read')?.({ path: 'index.json' })
    expect(storage.open).toHaveBeenCalledTimes(1)
    dispose()
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(storage.close).toHaveBeenCalledWith(MODEL_FOLDER)
  })
})
