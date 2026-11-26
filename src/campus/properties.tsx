import { METADATA_PANEL_SEGMENT_V1, type ValleyPluginApi } from '@valley/plugin-sdk'
import { React } from '../city/runtime'
import { campusText } from '../city/localization'
import { CityProperties } from '../city/Panel'
import { isCampusInstance, useCampus, useSelection } from './store'
import { addressOf } from './data'
import { ROOM_COLORS } from './Page'

/** The 3D city tab's icon: a cube, drawn like the host's line icons. */
const CUBE_ICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5"/><path d="M12 12v9"/></svg>')}`

/** The Building tab's icon: a building with windows, drawn like the host's line icons. */
const BUILDING_ICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16"/><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"/><path d="M10.5 21v-4h3v4"/></svg>')}`

/** The selected building (code, address, campus, floors, ETH page) and, once one is picked, its room. */
function BuildingProperties() {
  const selection = useSelection()
  const campus = useCampus()
  const building = selection.building
  if (!building) return <p className="z3d-note poly-properties-note">{campusText('properties.none')}</p>
  const levels = campus.levels?.get(building.code) ?? []
  const level = levels.find(item => item.id === selection.level)
  const room = campus.room && campus.room.level.split('.')[1] === building.code ? campus.room : null
  const roomLevel = room ? levels.find(item => item.id === room.level) : undefined
  const floors = campus.levelsStatus === 'ready' ? (levels.length ? String(levels.length) : campusText('floors.none')) : campusText('floors.reading')
  return (
    <div className="z3d-options">
      <section>
        <div className="z3d-section-title">{campusText('properties.building')}</div>
        <dl className="z3d-facts">
          <dt>{campusText('properties.code')}</dt><dd>{building.code}</dd>
          <dt>{campusText('properties.address')}</dt><dd title={addressOf(building)}>{addressOf(building)}</dd>
          <dt>{campusText('properties.campus')}</dt><dd>{campusText(`group.${building.campus}`)}</dd>
          <dt>{campusText('properties.floors')}</dt><dd>{floors}</dd>
          {level && <><dt>{campusText('properties.floor')}</dt><dd>{level.name || level.id.split('.').pop()}</dd></>}
        </dl>
        {building.link && <p className="z3d-note"><a href={building.link} target="_blank" rel="noreferrer">{campusText('building.link')}</a></p>}
      </section>
      {room && (
        <section>
          <div className="z3d-section-title">{campusText('properties.room')}</div>
          <dl className="z3d-facts">
            <dt>{campusText('properties.room')}</dt><dd>{room.name}</dd>
            <dt>{campusText('properties.floor')}</dt><dd>{roomLevel?.name || room.level.split('.').pop()}</dd>
            {room.type && <><dt>{campusText('room.type')}</dt><dd title={room.type}>{room.type}</dd></>}
            {room.use && <><dt>{campusText('room.use')}</dt><dd title={room.use}>{room.use}</dd></>}
            <dt>{campusText('properties.kind')}</dt>
            <dd><span className="poly-properties-kind"><i style={{ background: ROOM_COLORS[room.kind] }} />{campusText(`room.kind.${room.kind}`)}</span></dd>
          </dl>
        </section>
      )}
    </div>
  )
}

/** The tab's body: the 3D city's facts while the campus page shows 3D, else a one-line note. */
function CampusProperties() {
  const selection = useSelection()
  return selection.view === '3d' ? <CityProperties /> : <p className="z3d-note poly-properties-note">{campusText('properties.only3d')}</p>
}

/**
 * The right sidebar's Properties gets two tabs on the campus page: Building (the selected ETH building and
 * its picked room, in 2D and 3D) and 3D city (the clicked LoD2 building and the model facts).
 */
export function registerCampusProperties(api: ValleyPluginApi): () => void {
  const onCampus = (ctx: { tab?: { instanceId?: string } | null; subject?: { instanceId?: string } | null }) => isCampusInstance(ctx.tab?.instanceId ?? ctx.subject?.instanceId)
  const offs = [
    api.interop.extensions.provide(METADATA_PANEL_SEGMENT_V1, {
      id: 'poly.building', label: 'Building', labelKey: 'campusMap.properties.buildingTab', icon: BUILDING_ICON, pluginSurfaces: ['main_workspace'],
      render: ctx => onCampus(ctx) ? <BuildingProperties /> : null,
    }),
    api.interop.extensions.provide(METADATA_PANEL_SEGMENT_V1, {
      id: 'poly.city3d', label: '3D city', labelKey: 'campusMap.properties.tab', icon: CUBE_ICON, pluginSurfaces: ['main_workspace'],
      render: ctx => onCampus(ctx) ? <CampusProperties /> : null,
    }),
  ]
  return () => { for (const off of offs) off() }
}
