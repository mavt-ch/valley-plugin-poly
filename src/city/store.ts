import { api } from './runtime'
import { campusText } from './localization'
import { isCampusInstance, openCampus } from '../campus/store'
import { isTileIndex, type TileIndex } from './tileFormat'

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

/** A whole model file, read in backend chunks until `size` bytes (or an empty chunk) arrived. */
export async function readModelFile(path: string, size?: number): Promise<ArrayBuffer> {
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

let loading: Promise<void> | null = null

export function loadModel(force = false): Promise<void> {
  if (loading && !force) return loading
  update({ status: 'loading', error: null })
  loading = (async () => {
    try {
      const status = await api.backend.call<{ installed: boolean; folder: string }>('model.status')
      if (!status.installed) { update({ status: 'missing', folder: status.folder, index: null }); return }
      const index: unknown = JSON.parse(new TextDecoder().decode(await readModelFile('index.json')))
      if (!isTileIndex(index)) throw new Error('index.json is not a Zürich 3D model index')
      update({ status: 'ready', index, folder: status.folder })
    } catch (error) {
      update({ status: 'error', error: error instanceof Error ? error.message : String(error) })
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
