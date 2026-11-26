import { React, api } from './runtime'
import { uiText } from './localization'
import { CityScene, type CameraState, type Lv95Polygon, type SceneArea } from './scene'
import { getState, loadModel, readModelFile, update, useCity } from './store'
import { formatMetres, formatNumber } from './format'
import { CloseIcon } from './icons'
import { MissingModel } from './MissingModel'

let activeScene: CityScene | null = null

export function clearSelection(): void {
  activeScene?.clearSelection()
}

/** Back to the default view over the city. */
export function resetCityView(): void {
  activeScene?.resetView()
}

export function zoomCity(step: number): void {
  activeScene?.zoomBy(step)
}

function savedCamera(): CameraState | null {
  const value = api.settings.get().camera as CameraState | null | undefined
  return value && Array.isArray(value.position) && Array.isArray(value.target) ? value : null
}

export interface CityStageProps {
  /** The ETH building to highlight, with its floor when one is chosen. */
  area: SceneArea | null
  /** Bumped when the page should fly to `area` again; `close` comes nearer (a floor is shown). */
  focus: number
  /** The LoD2 building clicked: the clicked spot, then its footprint centre (LV95), so the page can match it to an ETH building. */
  onPick?(points: [number, number][]): void
}

/** The 3D city model of Stadt Zürich in a WebGL stage, rendered on demand (no loop while idle). */
export function CityStage({ area, focus, onPick }: CityStageProps) {
  const city = useCity()
  const stage = React.useRef<HTMLDivElement>(null)
  const scene = React.useRef<CityScene | null>(null)
  const [failure, setFailure] = React.useState<string | null>(null)
  const onPickRef = React.useRef(onPick)
  onPickRef.current = onPick

  React.useEffect(() => { void loadModel() }, [])

  React.useEffect(() => {
    const container = stage.current
    if (!container) return
    let instance: CityScene
    try {
      instance = new CityScene(container, {
        read: readModelFile,
        onTiles: (loadedTiles, loadingTiles) => { const now = getState(); if (now.loadedTiles !== loadedTiles || now.loadingTiles !== loadingTiles) update({ loadedTiles, loadingTiles }) },
        onSelect: (selected, at) => { update({ selected }); onPickRef.current?.(selected ? [...(at ? [at] : []), selected.center] : []) },
        onCamera: camera => { void api.settings.set('camera', camera) },
        onError: message => setFailure(message),
        // The campus map's blank base map, draped over the ground (backend `campus.tile`, bytes).
        tile: (z, x, y, dark) => api.backend.call('campus.tile', { z, x, y, dark }, { encoding: 'bytes' }),
      }, savedCamera())
    } catch (error) {
      setFailure(error instanceof Error ? error.message : String(error))
      return
    }
    scene.current = instance
    activeScene = instance
    return () => {
      if (activeScene === instance) activeScene = null
      scene.current = null
      instance.dispose()
    }
  }, [])

  React.useEffect(() => { scene.current?.setIndex(city.status === 'ready' ? city.index : null) }, [city.status, city.index])
  React.useEffect(() => { scene.current?.setColorMode(city.colorMode) }, [city.colorMode])
  React.useEffect(() => { scene.current?.setShowGround(city.showGround) }, [city.showGround])
  React.useEffect(() => { scene.current?.setArea(area) }, [area])
  const flown = React.useRef(0)
  React.useEffect(() => {
    if (!focus || focus === flown.current || !area || city.status !== 'ready') return
    flown.current = focus
    scene.current?.flyToArea((area.focus ?? area.polygons) as Lv95Polygon[], Boolean(area.floor))
    // `area` joins once: a selection made before the outlines arrived still flies when they do.
  }, [focus, city.status, area ? 1 : 0])
  React.useEffect(() => {
    const target = getState().flyTarget
    if (city.flyRequest && target) scene.current?.flyTo(target.east, target.north, target.distance)
  }, [city.flyRequest])
  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && getState().selected) scene.current?.clearSelection() }
    const doc = stage.current?.ownerDocument
    doc?.addEventListener('keydown', onKey)
    return () => doc?.removeEventListener('keydown', onKey)
  }, [])

  const selected = city.selected
  return (
    <div className="z3d-stage" ref={stage}>
      {city.status === 'loading' && <div className="z3d-message">{uiText('model.loading')}</div>}
      {city.status === 'missing' && <div className="z3d-message"><MissingModel /></div>}
      {city.status === 'error' && <div className="z3d-message"><strong>{uiText('model.errorTitle')}</strong><span className="z3d-error">{city.error}</span></div>}
      {failure && city.status === 'ready' && city.loadedTiles === 0 && <div className="z3d-message"><strong>{uiText('view.failed')}</strong><span className="z3d-error">{failure}</span></div>}
      {city.status === 'ready' && city.loadingTiles > 0 && <div className="z3d-status" role="status">{uiText('view.loadingTiles', { count: city.loadingTiles })}</div>}
      {selected && (
        <div className="z3d-card" role="dialog" aria-label={uiText('building.title')}>
          <div className="z3d-card-head">
            <span>{uiText('building.title')}</span>
            <button type="button" className="z3d-card-close" title={uiText('building.close')} aria-label={uiText('building.close')} onClick={() => scene.current?.clearSelection()}><CloseIcon /></button>
          </div>
          <dl className="z3d-facts">
            <dt>{uiText('building.egid')}</dt><dd>{selected.egid ?? '—'}</dd>
            <dt>{uiText('building.height')}</dt><dd>{formatMetres(selected.height)}</dd>
            <dt>{uiText('building.ground')}</dt><dd>{formatMetres(selected.ground)} {uiText('unit.asl')}</dd>
            <dt>{uiText('building.roof')}</dt><dd>{formatMetres(selected.roof)} {uiText('unit.asl')}</dd>
            <dt>{uiText('building.position')}</dt><dd>{formatNumber(selected.center[0])} / {formatNumber(selected.center[1])}</dd>
            <dt>{uiText('building.triangles')}</dt><dd>{formatNumber(selected.triangles)}</dd>
          </dl>
        </div>
      )}
    </div>
  )
}
