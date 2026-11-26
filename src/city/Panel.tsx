import { React } from './runtime'
import { campusText, uiText } from './localization'
import { loadModel, useCity } from './store'
import { formatDate, formatMetres, formatNumber } from './format'
import { MissingModel } from './MissingModel'

export const SOURCE_PAGE = 'https://www.stadt-zuerich.ch/de/planen-und-bauen/bauvorschriften-und-planerische-grundlagen/planbezug-datenbezug/3d-stadtmodell.html'

/** The 3D city tab in the right sidebar's Properties: the clicked LoD2 building and the model facts. */
export function CityProperties() {
  const city = useCity()
  React.useEffect(() => { void loadModel() }, [])
  const index = city.index
  return (
    <div className="z3d-options">
      {city.status === 'missing' && <div className="z3d-note"><MissingModel /></div>}
      {city.status === 'error' && <div className="z3d-note z3d-error">{city.error}</div>}
      {city.selected && (
        <section>
          <div className="z3d-section-title">{uiText('building.title')}</div>
          <dl className="z3d-facts">
            <dt>{uiText('building.egid')}</dt><dd>{city.selected.egid ?? '—'}</dd>
            <dt>{uiText('building.height')}</dt><dd>{formatMetres(city.selected.height)}</dd>
            <dt>{uiText('building.ground')}</dt><dd>{formatMetres(city.selected.ground)} {uiText('unit.asl')}</dd>
            <dt>{uiText('building.roof')}</dt><dd>{formatMetres(city.selected.roof)} {uiText('unit.asl')}</dd>
            <dt>{uiText('building.position')}</dt><dd>{formatNumber(city.selected.center[0])} / {formatNumber(city.selected.center[1])}</dd>
            <dt>{uiText('building.triangles')}</dt><dd>{formatNumber(city.selected.triangles)}</dd>
          </dl>
        </section>
      )}
      {index && (
        <section>
          <div className="z3d-section-title">{uiText('model.title')}</div>
          <dl className="z3d-facts">
            <dt>{uiText('model.date')}</dt><dd>{formatDate(index.source.date)}</dd>
            <dt>{uiText('model.buildings')}</dt><dd>{formatNumber(index.stats.buildings)}</dd>
            <dt>{uiText('model.triangles')}</dt><dd>{formatNumber(index.stats.triangles)}</dd>
            <dt>{uiText('model.tiles')}</dt><dd>{formatNumber(city.loadedTiles)} / {formatNumber(index.stats.tiles)}</dd>
          </dl>
          <p className="z3d-note">{uiText('model.groundNote')} <a href={SOURCE_PAGE} target="_blank" rel="noreferrer">{uiText('model.source')}</a></p>
          <p className="z3d-note">{campusText('map.attribution')}</p>
        </section>
      )}
    </div>
  )
}
