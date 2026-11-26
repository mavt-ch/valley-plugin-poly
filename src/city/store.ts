import { api } from './runtime'
import { campusText } from './localization'
import { isCampusInstance, openCampus } from '../campus/store'
import { isTileIndex, type TileIndex } from './tileFormat'
import { ModelAssetMissing, readPackagedModelFile } from './modelAssets'
import { uiText } from './localization'

export type ColorMode = 'surfaces' | 'height'
export type ModelStatus = 'loading' | 'missing' | 'ready' | 'error'

export interface SelectedBuilding {
  egid: string | null
  ground: number
  roof: number
  height: number
  triangles: number
  center: [number, number]
}

export interface CityState {
  status: ModelStatus
  error: string | null
  folder: string
  index: TileIndex | null
  selected: SelectedBuilding | null
  loadedTiles: number
  loadingTiles: number
  colorMode: ColorMode
  showGround: boolean
  /** Bumped for every fly-to request; the view reads `flyTarget` when it changes. */
  flyRequest: number
  flyTarget: { east: number; north: number; distance: number } | null
}

const listeners = new Set<() => void>()
let state: CityState = {
  status: 'loading',
  error: null,
  folder: 'plugins/data/poly/model/',
  index: null,
  selected: null,
  loadedTiles: 0,
  loadingTiles: 0,
  colorMode: 'surfaces',
  showGround: true,
  flyRequest: 0,
  flyTarget: null,
}

export function getState(): CityState {
  return state
}

export function update(patch: Partial<CityState>): void {
  state = { ...state, ...patch }
  for (const listener of listeners) listener()
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useCity(): CityState {
  return api.React.useSyncExternalStore(subscribe, getState)
}

/** A model installed in the realm's plugin data is read by the backend; else the package's own model is used. */
let source: 'realm' | 'package' = 'package'

/** A whole model file of a realm-installed model, read in backend chunks until `size` bytes (or an empty chunk) arrived. */
async function readRealmModelFile(path: string, size?: number): Promise<ArrayBuffer> {
  const parts: Uint8Array[] = []
  let offset = 0
  for (;;) {
    const chunk = await api.backend.call('model.read', { path, offset }, { encoding: 'bytes' })
    if (!chunk.byteLength) break
    parts.push(new Uint8Array(chunk))
    offset += chunk.byteLength
    if (size !== undefined ? offset >= size : chunk.byteLength < 2 * 1024 * 1024) break
  }
  if (parts.length === 1) return parts[0].buffer as ArrayBuffer
  const whole = new Uint8Array(offset)
  let at = 0
  for (const part of parts) { whole.set(part, at); at += part.byteLength }
  return whole.buffer
}

/** Host and loader errors stay out of the page: it says in plain words that the model could not be read. */
function unreadable(error: unknown): Error {
  console.warn('Poly: the city model could not be read', error)
  return new Error(uiText('model.errorText'))
}

export async function readModelFile(path: string, size?: number): Promise<ArrayBuffer> {
  try {
    return source === 'realm' ? await readRealmModelFile(path, size) : await readPackagedModelFile(path)
  } catch (error) {
    throw unreadable(error)
  }
}

let loading: Promise<void> | null = null

export function loadModel(force = false): Promise<void> {
  if (loading && !force) return loading
  update({ status: 'loading', error: null })
  loading = (async () => {
    try {
      const status = await api.backend.call<{ installed: boolean; folder: string }>('model.status').catch(() => null)
      source = status?.installed ? 'realm' : 'package'
      const folder = status?.installed ? status.folder : 'runtime/assets/model/'
      let bytes: ArrayBuffer
      try {
        bytes = source === 'realm' ? await readRealmModelFile('index.json') : await readPackagedModelFile('index.json')
      } catch (error) {
        if (error instanceof ModelAssetMissing) { update({ status: 'missing', folder, index: null }); return }
        throw error
      }
      const index: unknown = JSON.parse(new TextDecoder().decode(bytes))
      if (!isTileIndex(index)) throw new Error('index.json is not a Zürich 3D model index')
      update({ status: 'ready', index, folder })
    } catch (error) {
      update({ status: 'error', error: unreadable(error).message })
    }
  })()
  return loading
}

export function readSettings(): void {
  const settings = api.settings.get()
  update({
    colorMode: settings.colorMode === 'height' ? 'height' : 'surfaces',
    showGround: settings.showGround !== false,
  })
}

export function setColorMode(colorMode: ColorMode): void {
  update({ colorMode })
  void api.settings.set('colorMode', colorMode)
}

export function setShowGround(showGround: boolean): void {
  update({ showGround })
  void api.settings.set('showGround', showGround)
}

/** Flies the 3D view to a place: the campus page switches to 3D and comes to the front when it is not. */
export function flyTo(east: number, north: number, distance: number): void {
  update({ flyTarget: { east, north, distance }, flyRequest: state.flyRequest + 1 })
  if (api.settings.get().campusView !== '3d') void api.settings.set('campusView', '3d')
  const tab = api.getState().activePluginTab
  if (tab?.pluginId !== api.pluginId || !isCampusInstance(tab.instanceId)) openCampus(campusText('title'))
}
