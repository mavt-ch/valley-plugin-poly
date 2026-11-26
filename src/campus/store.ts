import { api } from '../city/runtime'
import { wgs84ToLv95 } from '../city/geo'
import { flyTo as cityFlyTo } from '../city/store'
import { buildingOf, type Building } from './data'
import { LEVEL_ID, type Level, type Outline, type Room, type RoomQuery } from './services'
import type { CampusCamera } from './mapIsland'

/** The campus page's two views: the 2D campus map and the 3D city model. */
export type CampusView = 'map' | '3d'
type Status = 'idle' | 'loading' | 'ready' | 'error'

export interface CampusState {
  outlines: Outline[] | null
  outlinesStatus: Status
  levels: Map<string, Level[]> | null
  levelsStatus: Status
  rooms: Map<string, Room[]>
  roomsStatus: Map<string, Status>
  /** The room clicked on the 2D map. */
  room: Room | null
  /** Bumped by every selection from the sidebar, so the page frames the building again. */
  focus: number
  /** The building `focus` was last bumped for. */
  focusOn: string | null
  /** A Zürich place to fly the 2D map to, bumped by every click on one ([longitude, latitude], zoom). */
  place: { center: [number, number]; zoom: number; request: number } | null
}

const listeners = new Set<() => void>()
const initial = (): CampusState => ({ outlines: null, outlinesStatus: 'idle', levels: null, levelsStatus: 'idle', rooms: new Map(), roomsStatus: new Map(), room: null, focus: 0, focusOn: null, place: null })
let state: CampusState = initial()
/** Forgets everything read (a new plugin session, and the tests). */
export const resetCampus = () => { state = initial(); searches.clear() }
/** The 2D map's last camera in this session; the first view frames ETH Zentrum. */
export let mapCamera: CampusCamera = { center: [8.5485, 47.3768], zoom: 15.6 }
export const setMapCamera = (camera: CampusCamera) => { mapCamera = camera }

export const getCampus = () => state
export function updateCampus(patch: Partial<CampusState>): void {
  state = { ...state, ...patch }
  for (const listener of listeners) listener()
}
export function subscribeCampus(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
export const useCampus = (): CampusState => api.React.useSyncExternalStore(subscribeCampus, getCampus)

/** The saved selection: building code, floor and view (hidden settings `building`, `level`, `campusView`). */
export interface Selection { building: Building | null; level: string; view: CampusView }
export function readSelection(settings: Record<string, unknown> = api.settings.get()): Selection {
  const building = buildingOf(settings.building)
  const level = typeof settings.level === 'string' && LEVEL_ID.test(settings.level) && building && settings.level.split('.')[1] === building.code ? settings.level : ''
  return { building, level, view: settings.campusView === '3d' ? '3d' : 'map' }
}
export function useSelection(): Selection {
  const React = api.React
  const [selection, setSelection] = React.useState(() => readSelection())
  React.useEffect(() => api.settings.subscribe(() => setSelection(previous => {
    const next = readSelection()
    return next.building === previous.building && next.level === previous.level && next.view === previous.view ? previous : next
  })), [])
  return selection
}

const failed = (error: unknown) => { console.warn(`[poly] campus: ${error instanceof Error ? error.message : String(error)}`) }

export function loadOutlines(fresh = false): void {
  if (!fresh && state.outlinesStatus !== 'idle' && state.outlinesStatus !== 'error') return
  updateCampus({ outlinesStatus: 'loading' })
  api.backend.call<Outline[]>('campus.outlines', { fresh }).then(
    outlines => updateCampus({ outlines, outlinesStatus: 'ready' }),
    error => { failed(error); updateCampus({ outlinesStatus: 'error' }) })
}

export function loadLevels(fresh = false): void {
  if (!fresh && state.levelsStatus !== 'idle' && state.levelsStatus !== 'error') return
  updateCampus({ levelsStatus: 'loading' })
  api.backend.call<Level[]>('campus.levels', { fresh }).then(
    list => {
      const levels = new Map<string, Level[]>()
      for (const level of list) levels.set(level.code, [...(levels.get(level.code) ?? []), level])
      updateCampus({ levels, levelsStatus: 'ready' })
    },
    error => { failed(error); updateCampus({ levelsStatus: 'error' }) })
}

export function loadRooms(level: string): void {
  const status = state.roomsStatus.get(level)
  if (status === 'loading' || status === 'ready') return
  updateCampus({ roomsStatus: new Map(state.roomsStatus).set(level, 'loading') })
  api.backend.call<Room[]>('campus.rooms', { level }).then(
    rooms => updateCampus({ rooms: new Map(state.rooms).set(level, rooms), roomsStatus: new Map(state.roomsStatus).set(level, 'ready') }),
    error => { failed(error); updateCampus({ roomsStatus: new Map(state.roomsStatus).set(level, 'error') }) })
}

/** Poly's campus page: instance `campus` or `campus-<id>`; 2.0.0's `city` / `city-<id>` tabs open it too. */
export const isCampusInstance = (instanceId: string | undefined): boolean =>
  instanceId === 'campus' || instanceId === 'city' || Boolean(instanceId?.startsWith('campus-') || instanceId?.startsWith('city-'))

function campusTabIsActive(): boolean {
  const tab = api.getState().activePluginTab
  return tab?.pluginId === api.pluginId && isCampusInstance(tab.instanceId)
}

export function openCampus(title: string, newTab = false): void {
  api.workspace.openMainTab({ instanceId: newTab ? `campus-${Date.now().toString(36)}` : 'campus', title, newTab })
}

/**
 * Selects a building (or clears it) and drops its floor. From the sidebar (`frame`) the page frames it
 * and comes to the front when it is not; a click on the map or the 3D model only selects.
 */
export function selectBuilding(code: string | null, title: string, frame = true): void {
  if (code === (api.settings.get().building || null) && !frame) return
  void api.settings.set('building', code ?? '')
  void api.settings.set('level', '')
  updateCampus({ room: null, ...(frame ? { focus: state.focus + 1, focusOn: code } : {}) })
  if (frame && code && !campusTabIsActive()) openCampus(title)
}

/** Selects a searched room: its building, its floor, the room itself, framed on the page. */
export function selectRoom(room: Room, title: string): void {
  const code = room.level.split('.')[1] ?? ''
  if (!LEVEL_ID.test(room.level) || !code) return
  void api.settings.set('building', code)
  void api.settings.set('level', room.level)
  updateCampus({ room, focus: state.focus + 1, focusOn: code })
  loadRooms(room.level)
  if (!campusTabIsActive()) openCampus(title)
}

/** Room search answers, by query text; a failed search is not kept. */
const searches = new Map<string, Promise<Room[]>>()
export function searchRooms(query: RoomQuery): Promise<Room[]> {
  const key = JSON.stringify(query)
  let pending = searches.get(key)
  if (!pending) {
    pending = api.backend.call<Room[]>('campus.searchRooms', { query })
    searches.set(key, pending)
    pending.catch(() => searches.delete(key))
    if (searches.size > 100) searches.delete(searches.keys().next().value!)
  }
  return pending
}

export function selectLevel(level: string): void {
  void api.settings.set('level', level)
  updateCampus({ room: null })
  if (level) loadRooms(level)
}

/** Switches the page between the 2D map and 3D, framing the selection; `title` also brings the page to the front. */
/** A viewing distance in metres as a 2D zoom level (450 m ≈ 17, 900 m ≈ 16). */
export const zoomForDistance = (distance: number): number => Math.min(Math.max(17 - Math.log2(Math.max(distance, 50) / 450), 13), 19)

/** Shows a Zürich place in the view on screen: the 3D camera flies there in 3D, the 2D map in 2D; the page comes to the front. */
export function showPlace(place: { latitude: number; longitude: number; distance: number }, title: string, view: CampusView): void {
  if (view === '3d') {
    const [east, north] = wgs84ToLv95(place.latitude, place.longitude)
    cityFlyTo(east, north, place.distance)
    return
  }
  const center: [number, number] = [place.longitude, place.latitude]
  const zoom = zoomForDistance(place.distance)
  mapCamera = { center, zoom }
  updateCampus({ place: { center, zoom, request: (state.place?.request ?? 0) + 1 } })
  if (!campusTabIsActive()) openCampus(title)
}

export function setCampusView(view: CampusView, title?: string): void {
  void api.settings.set('campusView', view)
  updateCampus({ focus: state.focus + 1, focusOn: readSelection().building?.code ?? null })
  if (title && !campusTabIsActive()) openCampus(title)
}
