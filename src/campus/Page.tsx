import { React, api } from '../city/runtime'
import { campusText, uiText } from '../city/localization'
import { CityStage, zoomCity } from '../city/CityView'
import { setColorMode, setShowGround, useCity } from '../city/store'
import { wgs84ToLv95 } from '../city/geo'
import type { Lv95Polygon, SceneArea } from '../city/scene'
import { BUILDINGS, addressOf, buildingOf } from './data'
import { boundsOf, floorElevations, insidePolygon, roomLabel, type Level, type Outline, type Polygon, type Room, type RoomKind } from './services'
import { loadLevels, loadOutlines, loadRooms, mapCamera, selectBuilding, selectLevel, setCampusView, setMapCamera, updateCampus, useCampus, useSelection, type CampusState } from './store'
import type { CampusMap, CampusMapOptions } from './mapIsland'

/** Room colours by kind, shared by the 2D map, the 3D floor and the legend. */
export const ROOM_COLORS: Record<RoomKind, string> = { teaching: '#4a90d9', lab: '#9a6dd7', office: '#4caf72', circulation: '#b9bdc2', toilet: '#3fb8c6', service: '#8d9298', other: '#e09a3e' }
/** The picked room's ground on a 3D floor, under its accent hatching: light, so the stripes stand out on any kind. */
export const ROOM_PICKED = '#f1f0ec'
export const ROOM_KINDS: RoomKind[] = ['teaching', 'lab', 'office', 'circulation', 'toilet', 'service', 'other']

type Island = { createCampusMap(options: CampusMapOptions): CampusMap }
/** The 2D map on screen, for the page's zoom buttons. */
let activeMap: CampusMap | null = null
const islands = new WeakMap<Document, Promise<Island>>()

/** Loads the 2D engine into the page's own document once (see `mapIsland.ts`). */
export function loadIsland(document: Document): Promise<Island> {
  const existing = islands.get(document)
  if (existing) return existing
  const pending = new Promise<Island>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = api.assets.url('campus-map.js')
    script.onload = () => {
      const island = (document.defaultView as unknown as { valleyPolyCampusMap?: Island } | null)?.valleyPolyCampusMap
      if (island) resolve(island)
      else { islands.delete(document); script.remove(); reject(new Error('mapUnavailable')) }
    }
    script.onerror = () => { islands.delete(document); script.remove(); reject(new Error('mapUnavailable')) }
    document.head.appendChild(script)
  })
  islands.set(document, pending)
  return pending
}

const toLv95 = (polygons: Polygon[]): Lv95Polygon[] => polygons.map(polygon => polygon.map(ring => ring.map(([longitude, latitude]) => wgs84ToLv95(latitude, longitude))))

/** The ETH building whose outline contains an LV95 point, if any. */
export function buildingAt(point: [number, number], outlines: { code: string; polygons: Lv95Polygon[] }[]): string | null {
  return outlines.find(outline => outline.polygons.some(polygon => insidePolygon(point, polygon)))?.code ?? null
}

/** Default 2D frames: the selected building's campus, else ETH Zentrum. */
export function campusBounds(campus: 'zentrum' | 'hoengg'): [number, number, number, number] {
  const list = BUILDINGS.filter(building => building.campus === campus)
  const lons = list.map(building => building.center[0]), lats = list.map(building => building.center[1])
  return [Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)]
}

function MapStage({ outlines, selected, rooms, room, focus, place }: { outlines: Outline[] | null; selected: string | null; rooms: Room[] | null; room: Room | null; focus: number; place: CampusState['place'] }) {
  const stage = React.useRef<HTMLDivElement>(null)
  const engine = React.useRef<CampusMap | null>(null)
  const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading')
  const latest = React.useRef({ outlines, selected, rooms })
  latest.current = { outlines, selected, rooms }

  React.useEffect(() => {
    const container = stage.current
    if (!container) return
    let live = true
    let instance: CampusMap | null = null
    loadIsland(container.ownerDocument).then(island => {
      if (!live) return
      instance = island.createCampusMap({
        container,
        camera: mapCamera,
        roomColors: ROOM_COLORS,
        tile: (z, x, y, dark) => api.backend.call('campus.tile', { z, x, y, dark }, { encoding: 'bytes' }),
        onSelect: code => selectBuilding(code, campusText('title'), false),
        onRoom: room => updateCampus({ room }),
        onCamera: setMapCamera,
      })
      engine.current = instance
      activeMap = instance
      const now = latest.current
      if (now.outlines) instance.setOutlines(now.outlines)
      instance.setSelected(now.selected)
      instance.setRooms(now.rooms)
      setStatus('ready')
    }, () => { if (live) setStatus('error') })
    // The map follows the app's appearance like the 3D view does.
    const doc = container.ownerDocument
    const Observer = doc.defaultView?.MutationObserver
    const theme = Observer ? new Observer(() => engine.current?.refreshTheme()) : null
    theme?.observe(doc.documentElement, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    if (doc.body) theme?.observe(doc.body, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    return () => { live = false; theme?.disconnect(); if (activeMap === instance) activeMap = null; instance?.dispose(); engine.current = null }
  }, [])

  React.useEffect(() => { if (outlines) engine.current?.setOutlines(outlines) }, [outlines, status])
  React.useEffect(() => { engine.current?.setSelected(selected) }, [selected, status])
  React.useEffect(() => { engine.current?.setRooms(rooms) }, [rooms, status])
  React.useEffect(() => { engine.current?.setRoom(room?.id ?? null) }, [room, rooms, status])
  React.useEffect(() => { if (place && status === 'ready') engine.current?.flyTo({ center: place.center, zoom: place.zoom }) }, [place?.request, status])
  React.useEffect(() => {
    if (!focus || status !== 'ready') return
    // A searched room comes first: close enough to read its number.
    const roomBounds = room ? boundsOf(room.polygons) : null
    if (roomBounds) { engine.current?.fit(roomBounds, 19.5); return }
    const outline = selected ? outlines?.find(item => item.code === selected) : null
    const bounds = outline ? boundsOf(outline.polygons) : null
    const building = buildingOf(selected)
    if (bounds) engine.current?.fit(bounds)
    else if (building) engine.current?.flyTo({ center: building.center, zoom: 17.5 })
    else engine.current?.fit(campusBounds('zentrum'), 16.5)
  }, [focus, status, outlines ? 1 : 0])

  return (
    <div className="poly-map-stage" ref={stage}>
      {status === 'loading' && <div className="z3d-message">{campusText('map.loading')}</div>}
      {status === 'error' && <div className="z3d-message"><span className="z3d-error">{campusText('map.failed')}</span></div>}
    </div>
  )
}

const icon = (paths: string[]) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths.map(d => <path key={d} d={d} />)}</svg>

/** Map's round controls at the top right, in both views: zoom in, zoom out and the 2D/3D switch (it names the view it switches to). */
function MapControls({ view }: { view: 'map' | '3d' }) {
  const city = useCity()
  const zoom = (step: number) => view === '3d' ? zoomCity(step) : activeMap?.zoomBy(step)
  const heights = city.colorMode === 'height'
  const colourLabel = `${uiText('display.color')}: ${uiText(heights ? 'display.height' : 'display.surfaces')}`
  const groundLabel = `${uiText('display.ground')} · ${uiText('display.groundHint')}`
  const next = view === '3d' ? 'map' : '3d'
  const label = campusText(next === '3d' ? 'view.show3d' : 'view.show2d')
  return (
    <div className="poly-map-controls" data-tooltip-placement="left">
      <button type="button" className="poly-round-btn" title={campusText('map.zoomIn')} aria-label={campusText('map.zoomIn')} onClick={() => zoom(1)}>{icon(['M12 5v14', 'M5 12h14'])}</button>
      <button type="button" className="poly-round-btn" title={campusText('map.zoomOut')} aria-label={campusText('map.zoomOut')} onClick={() => zoom(-1)}>{icon(['M5 12h14'])}</button>
      <button type="button" className="poly-round-btn poly-round-text" title={label} aria-label={label} data-view={next} onClick={() => setCampusView(next)}>{next === '3d' ? '3D' : '2D'}</button>
      {view === '3d' && <>
        <button type="button" className={`poly-round-btn ${heights ? 'active' : ''}`} data-control="colour" aria-pressed={heights} title={colourLabel} aria-label={colourLabel}
          onClick={() => setColorMode(heights ? 'surfaces' : 'height')}>{icon(['M5 20V12', 'M10 20V7', 'M15 20V10', 'M20 20V4', 'M3 20h18'])}</button>
        <button type="button" className={`poly-round-btn ${city.showGround ? 'active' : ''}`} data-control="ground" aria-pressed={city.showGround} title={groundLabel} aria-label={uiText('display.ground')}
          onClick={() => setShowGround(!city.showGround)}>{icon(['M3 17l5-6 4 4 3-3 6 5', 'M3 20h18'])}</button>
      </>}
    </div>
  )
}

/** The floor strip on the page: the building's floors, top floor first, like a lift panel. */
function FloorStrip({ levels, level, code }: { levels: Level[]; level: string; code: string }) {
  if (!levels.length) return null
  return (
    <div className="poly-floors" role="group" aria-label={campusText('floors.label', { code })}>
      {levels.map(item => (
        <button key={item.id} type="button" className={item.id === level ? 'active' : ''} aria-pressed={item.id === level}
          title={campusText('floors.show', { floor: item.name })} onClick={() => selectLevel(item.id === level ? '' : item.id)}>{item.name}</button>
      ))}
    </div>
  )
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="z3d-card poly-room-card" role="dialog" aria-label={room.name}>
      <div className="z3d-card-head">
        <span>{room.name}</span>
        <button type="button" className="z3d-card-close" title={campusText('room.close')} aria-label={campusText('room.close')} onClick={() => updateCampus({ room: null })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      </div>
      <dl className="z3d-facts">
        {room.type && <><dt>{campusText('room.type')}</dt><dd title={room.type}>{room.type}</dd></>}
        {room.use && <><dt>{campusText('room.use')}</dt><dd title={room.use}>{room.use}</dd></>}
      </dl>
    </div>
  )
}

function Legend() {
  return (
    <div className="poly-legend" aria-label={campusText('legend.label')}>
      {ROOM_KINDS.map(kind => <span key={kind}><i style={{ background: ROOM_COLORS[kind] }} />{campusText(`room.kind.${kind}`)}</span>)}
    </div>
  )
}


/** The campus page: the 2D campus map or the 3D city model, the selected building highlighted, its floors and rooms. */
export function CampusPage() {
  const selection = useSelection()
  const campus = useCampus()
  React.useEffect(() => { loadOutlines(); loadLevels() }, [])
  const building = selection.building
  const code = building?.code ?? null
  // A selection asks for framing before its settings write has landed; the stages hear of it once that building is shown.
  const framed = React.useRef(0)
  if (campus.focusOn === code) framed.current = campus.focus
  const outline = code ? campus.outlines?.find(item => item.code === code) ?? null : null
  const levels = (code && campus.levels?.get(code)) || []
  const level = levels.some(item => item.id === selection.level) ? selection.level : ''
  React.useEffect(() => { if (level) loadRooms(level) }, [level])
  const rooms = level ? campus.rooms.get(level) ?? null : null
  const roomsStatus = level ? campus.roomsStatus.get(level) : undefined

  const lv95Outlines = React.useMemo(() => (campus.outlines ?? []).map(item => ({ code: item.code, polygons: toLv95(item.polygons) })), [campus.outlines])
  const area = React.useMemo((): SceneArea | null => {
    if (!outline) return null
    const polygons = lv95Outlines.find(item => item.code === outline.code)?.polygons ?? toLv95(outline.polygons)
    const elevation = level ? floorElevations(levels).get(level) : undefined
    const picked = campus.room && campus.room.level === level ? campus.room : null
    return {
      polygons,
      floor: rooms && elevation !== undefined ? { elevation, rooms: rooms.map(room => room.id === picked?.id
        ? { color: ROOM_PICKED, polygons: toLv95(room.polygons), picked: true, label: roomLabel(room.name, code ?? '') }
        : { color: ROOM_COLORS[room.kind], polygons: toLv95(room.polygons) }) } : null,
      focus: picked ? toLv95(picked.polygons) : null,
    }
  }, [outline, lv95Outlines, level, rooms, levels, campus.room])

  const city = useCity()
  const title = building ? `${building.code} · ${addressOf(building)}` : campusText('title')
  const outside3d = selection.view === '3d' && building && building.city !== 'Zürich'
  return (
    <div className="poly-page poly-campus-page">
      <div className="poly-bar poly-page-head">
        <h1 className="poly-page-title" title={title}>{title}</h1>
      </div>
      <div className="poly-campus-body">
        {selection.view === 'map'
          ? <MapStage outlines={campus.outlines} selected={code} rooms={rooms} room={campus.room} focus={framed.current} place={campus.place} />
          : <CityStage area={area} focus={framed.current} onPick={points => {
              const hit = points.map(point => buildingAt(point, lv95Outlines)).find(Boolean)
              if (hit && hit !== code) selectBuilding(hit, campusText('title'), false)
            }} />}
        {code && <FloorStrip levels={levels} level={level} code={code} />}
        <MapControls view={selection.view} />
        <div className="poly-notes" role="status">
          {level && roomsStatus === 'loading' && <span>{campusText('floors.loading')}</span>}
          {level && roomsStatus === 'error' && <span className="z3d-error">{campusText('floors.failed')}</span>}
          {campus.outlinesStatus === 'error' && <span className="z3d-error">{campusText('outlines.failed')}</span>}
          {outside3d && <span>{campusText('view.outside')}</span>}
        </div>
        {/* Legend and credit share one bottom row: side by side when they fit, the legend above the credit when they do not, never on top of each other. */}
        <div className="poly-map-foot">
          {rooms && rooms.length > 0 && <Legend />}
          {(selection.view === 'map' || city.status === 'ready') && (
            <div className="z3d-attribution">{selection.view === 'map' ? campusText('map.attribution') : `${uiText('model.attribution')} · ${campusText('map.attribution')}`}</div>
          )}
        </div>
        {campus.room && <RoomCard room={campus.room} />}
      </div>
    </div>
  )
}
