import { React } from '../city/runtime'
import { campusText } from '../city/localization'
import { addressOf, buildingOf, fold, groupBuildings, searchBuildings, type Building, type CampusGroup } from './data'
import { parseRoomQuery, type Room } from './services'
import { loadLevels, searchRooms, selectBuilding, selectRoom, showPlace, useCampus, useSelection } from './store'
import { PLACES } from '../city/geo'

const svg = (paths: string[], extra?: Record<string, unknown>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...extra}>{paths.map(d => <path key={d} d={d} />)}</svg>
)
/** The campus map's icon: a location pin (the tab, the rows and the page). */
export const PIN = ['M19 10c0 4.6-7 11-7 11s-7-6.4-7-11a7 7 0 0 1 14 0Z', 'M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0']
const SEARCH = ['M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13', 'M20 20l-4.8-4.8']
const CLOSE = ['M18 6 6 18', 'M6 6l12 12']
const CHEVRON = ['M9 6l6 6-6 6']
const LINK = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const DOOR = ['M4 21h16', 'M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17', 'M14.5 12.5v.01']
/** Room answers wait this long after the last keystroke. */
const ROOM_DELAY = 250

type Section = CampusGroup | 'rooms' | 'zurich'
type RoomResults = { key: string; status: 'loading' | 'ready' | 'error'; rooms: Room[] }

/** The selected building, pinned to the bottom of the sidebar as a plain strip (2 × 37px): code, address, campus and floors, ETH page, and × to clear it. */
function BuildingCard({ building }: { building: Building }) {
  const campus = useCampus()
  const floors = campus.levels?.get(building.code)?.length ?? 0
  return (
    <section className="poly-building" aria-label={building.code}>
      <div className="poly-building-code">{building.code}</div>
      <button type="button" className="poly-icon-btn poly-building-close" title={campusText('building.clear')} aria-label={campusText('building.clear')} onClick={() => selectBuilding(null, campusText('title'), false)}>{svg(CLOSE)}</button>
      <div className="poly-building-address">{addressOf(building)}</div>
      <div className="poly-building-meta">
        {campusText(`group.${building.campus}`)}
        {' · '}
        {campus.levelsStatus === 'ready' ? (floors ? campusText(floors === 1 ? 'floors.one' : 'floors.other', { count: floors }) : campusText('floors.none')) : campusText('floors.reading')}
      </div>
      <a className="poly-building-link" href={building.link} target="_blank" rel="noreferrer">{svg(LINK)}<span>{campusText('building.link')}</span></a>
    </section>
  )
}

/** The campus sidebar below the tab row: search, the found rooms, the buildings by campus, the 3D options and, at the bottom, the selected building. */
export function CampusPanelBody() {
  const selection = useSelection()
  const campus = useCampus()
  const [query, setQuery] = React.useState('')
  const [folded, setFolded] = React.useState<Set<Section>>(() => new Set<Section>(['other', 'zurich']))
  const [found, setFound] = React.useState<RoomResults | null>(null)
  const input = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => { loadLevels() }, [])
  const buildings = React.useMemo(() => searchBuildings(query), [query])
  const roomQuery = React.useMemo(() => {
    const parsed = parseRoomQuery(query, selection.building?.code)
    return parsed && buildingOf(parsed.building) ? parsed : null
  }, [query, selection.building])
  const roomKey = roomQuery ? JSON.stringify(roomQuery) : ''
  React.useEffect(() => {
    if (!roomQuery) { setFound(null); return }
    let live = true
    setFound(previous => ({ key: roomKey, status: 'loading', rooms: previous?.rooms ?? [] }))
    const timer = setTimeout(() => {
      searchRooms(roomQuery).then(
        rooms => { if (live) setFound({ key: roomKey, status: 'ready', rooms }) },
        () => { if (live) setFound({ key: roomKey, status: 'error', rooms: [] }) })
    }, ROOM_DELAY)
    return () => { live = false; clearTimeout(timer) }
  }, [roomKey])
  const groups = groupBuildings(buildings)
  // The Zürich places (landmarks to fly to) always come last, in 2D and in 3D, filtered by the same search.
  const places = React.useMemo(() => { const text = fold(query.trim()); return text ? PLACES.filter(place => fold(place.name).includes(text)) : PLACES }, [query])
  const searching = query.trim().length > 0
  const title = campusText('title')
  const rooms = found?.key === roomKey ? found : null
  const toggle = (section: Section) => setFolded(previous => { const next = new Set(previous); if (next.has(section)) next.delete(section); else next.add(section); return next })
  const isOpen = (section: Section) => searching || !folded.has(section)
  const head = (section: Section, count?: number) => (
    <button type="button" className={`poly-group-head ${isOpen(section) ? 'open' : ''}`} aria-expanded={isOpen(section)} onClick={() => toggle(section)}>
      <span className="poly-group-chevron">{svg(CHEVRON)}</span>
      <span className="poly-group-name">{campusText(`group.${section}`)}</span>
      {count !== undefined && <span className="poly-group-count">{count}</span>}
    </button>
  )
  const pickFirst = () => {
    const room = rooms?.rooms[0]
    if (room) selectRoom(room, title)
    else if (buildings[0]) selectBuilding(buildings[0].code, title)
  }
  return (
    <>
      <div className="poly-bar poly-search-bar">
        <div className="search-field-row">
          <div className="search-field">
            <span className="search-field-icon">{svg(SEARCH)}</span>
            <input ref={input} className="search-field-input" value={query} placeholder={campusText('search.placeholder')} aria-label={campusText('search.placeholder')}
              onChange={event => setQuery(event.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') pickFirst()
                if (event.key === 'Escape') setQuery('')
              }} />
            {query && <button type="button" className="search-field-action" title={campusText('search.clear')} aria-label={campusText('search.clear')} onClick={() => setQuery('')}>{svg(CLOSE)}</button>}
          </div>
        </div>
      </div>
      <div className="poly-list poly-campus-list">
        {roomQuery && (
          <div className="poly-group" data-group="rooms">
            {head('rooms', rooms?.status === 'ready' ? rooms.rooms.length : undefined)}
            {rooms?.status === 'loading' && !rooms.rooms.length && <div className="poly-note">{campusText('rooms.searching')}</div>}
            {rooms?.status === 'error' && <div className="poly-note error">{campusText('rooms.failed')}</div>}
            {rooms?.status === 'ready' && !rooms.rooms.length && <div className="poly-note">{campusText('rooms.none')}</div>}
            {rooms?.rooms.map(room => (
              <button key={room.id} type="button" data-room={room.id}
                className={`poly-building-row ${room.id === campus.room?.id ? 'active' : ''}`}
                onClick={() => selectRoom(room, title)}>
                <span className="poly-building-icon">{svg(DOOR)}</span>
                <span className="poly-building-row-meta">
                  <span className="poly-building-row-code">{room.name}</span>
                  <span className="poly-building-row-sub">{[room.type, room.use].filter((value, index, all) => value && all.indexOf(value) === index).join(' · ')}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        {groups.map(({ group, buildings: list }) => (
          <div key={group} className="poly-group" data-group={group}>
            {head(group, list.length)}
            {isOpen(group) && list.map(building => (
              <button key={building.code} type="button" data-building={building.code}
                className={`poly-building-row ${building.code === selection.building?.code ? 'active' : ''}`}
                onClick={() => selectBuilding(building.code, title)}>
                <span className="poly-building-icon">{svg(PIN)}</span>
                <span className="poly-building-row-meta">
                  <span className="poly-building-row-code">{building.code}</span>
                  <span className="poly-building-row-sub">{addressOf(building)}</span>
                </span>
              </button>
            ))}
          </div>
        ))}
        {places.length > 0 && (
          <div className="poly-group" data-group="zurich">
            {head('zurich', places.length)}
            {isOpen('zurich') && places.map(place => (
              <button key={place.id} type="button" data-place={place.id} className="poly-building-row" onClick={() => showPlace(place, title, selection.view)}>
                <span className="poly-building-icon">{svg(PIN)}</span>
                <span className="poly-building-row-meta"><span className="poly-building-row-code">{place.name}</span></span>
              </button>
            ))}
          </div>
        )}
        {!buildings.length && !roomQuery && !places.length && <div className="poly-note">{campusText('search.none')}</div>}
        <div className="poly-credit">{campusText('credit')}</div>
      </div>
      {selection.building && <BuildingCard building={selection.building} />}
    </>
  )
}
