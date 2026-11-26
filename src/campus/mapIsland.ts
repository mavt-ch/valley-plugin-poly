/**
 * The campus map's 2D engine, bundled on its own (`runtime/assets/campus-map.js`) and loaded into the
 * page's own document like Map's island: MapLibre reads `window`, `document` and `requestAnimationFrame`
 * of the realm it runs in. The blank base map's tiles (light or dark) come through the plugin's backend (`tile`), the
 * ETH outlines and rooms are GeoJSON layers; labels are drawn as small images, so no glyph server is
 * needed. MapLibre renders on demand: nothing runs while the map is idle.
 */
import maplibreCss from 'maplibre-gl/dist/maplibre-gl.css'
import { Map as MlMap, addProtocol, removeProtocol, type GeoJSONSource, type MapMouseEvent, type StyleSpecification } from 'maplibre-gl'
import { commandAsControl } from './mapGestures'
import { roomLabel, type Outline, type Polygon, type Room, type RoomKind } from './services'

export interface CampusCamera { center: [number, number]; zoom: number; bearing?: number }


export interface CampusMapOptions {
  container: HTMLElement
  tile(z: number, x: number, y: number, dark: boolean): Promise<ArrayBuffer>
  onSelect(code: string | null): void
  onRoom(room: Room | null): void
  onCamera(camera: CampusCamera): void
  camera: CampusCamera
  /** Room fill by kind, the same colours as the page's legend and the 3D floor. */
  roomColors: Record<RoomKind, string>
}

const STYLE_ID = 'poly-maplibre-css'
const HATCH = 'poly-hatch'
const KINDS: RoomKind[] = ['teaching', 'lab', 'office', 'circulation', 'toilet', 'service', 'other']

interface Colors { accent: string; text: string; halo: string; fill: string; line: string; dark: boolean; rooms: Record<RoomKind, string> }

/** A CSS colour in a form MapLibre parses (a canvas normalises it to #rrggbb or rgba()). */
function normalise(document: Document, value: string, fallback: string): string {
  const context = document.createElement('canvas').getContext('2d')
  if (!context || !value.trim()) return fallback
  context.fillStyle = fallback
  context.fillStyle = value.trim()
  return String(context.fillStyle)
}

function readColors(container: HTMLElement, rooms: Record<RoomKind, string>): Colors {
  const document = container.ownerDocument
  const style = document.defaultView!.getComputedStyle(container)
  const token = (name: string, fallback: string) => normalise(document, style.getPropertyValue(name), fallback)
  const background = token('--pane-bg', token('--background-color', '#ffffff'))
  const rgb = background.startsWith('#') ? [1, 3, 5].map(i => parseInt(background.slice(i, i + 2), 16) / 255) : (background.match(/[\d.]+/g) ?? ['255', '255', '255']).slice(0, 3).map(value => Number(value) / 255)
  const dark = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2] < 0.45
  return {
    accent: token('--accent-color', '#3b82f6'),
    text: token('--title-color', dark ? '#f2f2f2' : '#1f1f1f'),
    halo: background,
    fill: dark ? '#9aa0a6' : '#5f6368',
    line: dark ? '#c7ccd1' : '#4a4f55',
    dark,
    rooms,
  }
}

/** Centre of a polygon's outer ring (area-weighted), for its label. */
function centroid(polygons: Polygon[]): [number, number] {
  let best: [number, number] = polygons[0]?.[0]?.[0] ?? [0, 0], bestArea = 0
  for (const polygon of polygons) {
    const ring = polygon[0]
    let area = 0, x = 0, y = 0
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const cross = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1]
      area += cross; x += (ring[j][0] + ring[i][0]) * cross; y += (ring[j][1] + ring[i][1]) * cross
    }
    if (Math.abs(area) > bestArea && area !== 0) { bestArea = Math.abs(area); best = [x / (3 * area), y / (3 * area)] }
  }
  return best
}

const collection = (features: unknown[]) => ({ type: 'FeatureCollection' as const, features })
const multi = (polygons: Polygon[]) => ({ type: 'MultiPolygon' as const, coordinates: polygons })
const point = (coordinates: [number, number]) => ({ type: 'Point' as const, coordinates })

export class CampusMap {
  private readonly map: MlMap
  private readonly protocol = `poly-osm-${crypto.randomUUID()}`
  private readonly resize: ResizeObserver | null
  private colors: Colors
  private outlines: Outline[] = []
  private rooms: Room[] = []
  private selected: string | null = null
  private room: string | null = null
  private ready = false
  private pendingFit: [number, number, number, number] | null = null
  private disposed = false

  private readonly commandDrag = (event: MouseEvent): void => {
    const press = commandAsControl(event)
    if (!press || !event.target) return
    event.stopPropagation()
    event.preventDefault()
    event.target.dispatchEvent(press)
  }

  constructor(private readonly options: CampusMapOptions) {
    const document = options.container.ownerDocument
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = maplibreCss
      document.head.appendChild(style)
    }
    this.colors = readColors(options.container, options.roomColors)
    addProtocol(this.protocol, async ({ url }) => {
      const [z, x, y] = new URL(url).pathname.replace(/^\/+/, '').split('/').map(Number)
      const bytes = await options.tile(z, x, y, this.colors.dark)
      // Copied into this realm: the plugin's frame owns the backend's buffer.
      return { data: new Uint8Array(bytes).slice().buffer }
    })
    this.map = new MlMap({
      container: options.container,
      style: this.style(),
      center: options.camera.center,
      zoom: options.camera.zoom,
      bearing: options.camera.bearing ?? 0,
      maxZoom: 20,
      // The page draws its own zoom buttons and attribution in Valley's style.
      attributionControl: false,
      // The map turns but never tilts: it stays a plan.
      dragRotate: true,
      pitchWithRotate: false,
    })
    options.container.addEventListener('mousedown', this.commandDrag, true)
    this.map.on('styleimagemissing', event => this.drawLabel(event.id))
    this.map.on('load', () => {
      this.ready = true
      this.sync()
      if (this.pendingFit) { const bounds = this.pendingFit; this.pendingFit = null; this.fit(bounds) }
    })
    this.map.on('moveend', () => { const center = this.map.getCenter(); options.onCamera({ center: [center.lng, center.lat], zoom: this.map.getZoom(), bearing: this.map.getBearing() }) })
    this.map.on('click', event => this.click(event))
    for (const layer of ['buildings-fill', 'rooms-fill']) {
      this.map.on('mouseenter', layer, () => { this.map.getCanvas().style.cursor = 'pointer' })
      this.map.on('mouseleave', layer, () => { this.map.getCanvas().style.cursor = '' })
    }
    const Resize = document.defaultView?.ResizeObserver
    this.resize = Resize ? new Resize(() => { if (!this.disposed) this.map.resize() }) : null
    this.resize?.observe(options.container)
  }

  private style(): StyleSpecification {
    const c = this.colors
    const roomColor = ['match', ['get', 'kind'], ...KINDS.flatMap(kind => [kind, c.rooms[kind]]), c.rooms.other]
    return {
      version: 8,
      sources: {
        // The theme is part of the address, so a theme change reads the other set instead of a cached one.
        osm: { type: 'raster', tiles: [`${this.protocol}://${c.dark ? 'dark' : 'light'}/{z}/{x}/{y}`], tileSize: 256, maxzoom: 16 },
        buildings: { type: 'geojson', data: collection([]) },
        labels: { type: 'geojson', data: collection([]) },
        rooms: { type: 'geojson', data: collection([]) },
        roomLabels: { type: 'geojson', data: collection([]) },
        pickedLabel: { type: 'geojson', data: collection([]) },
      },
      layers: [
        { id: 'background', type: 'background', paint: { 'background-color': c.halo } },
        { id: 'osm', type: 'raster', source: 'osm', paint: { 'raster-fade-duration': 0 } },
        { id: 'buildings-fill', type: 'fill', source: 'buildings', paint: { 'fill-color': c.fill, 'fill-opacity': 0.22 } },
        { id: 'buildings-line', type: 'line', source: 'buildings', paint: { 'line-color': c.line, 'line-width': ['interpolate', ['linear'], ['zoom'], 13, 0.4, 17, 1.2] } },
        { id: 'selected-fill', type: 'fill', source: 'buildings', filter: ['==', ['get', 'code'], ''], paint: { 'fill-color': c.accent, 'fill-opacity': 0.28 } },
        { id: 'rooms-fill', type: 'fill', source: 'rooms', paint: { 'fill-color': roomColor as never, 'fill-opacity': c.dark ? 0.5 : 0.42 } },
        { id: 'rooms-line', type: 'line', source: 'rooms', paint: { 'line-color': c.line, 'line-width': ['interpolate', ['linear'], ['zoom'], 16, 0.2, 20, 1], 'line-opacity': 0.7 } },
        // The picked room is hatched (schraffiert) in the accent colour, outlined, and carries its number.
        { id: 'room-picked', type: 'fill', source: 'rooms', filter: ['==', ['get', 'id'], ''], paint: { 'fill-pattern': HATCH } },
        { id: 'room-selected', type: 'line', source: 'rooms', filter: ['==', ['get', 'id'], ''], paint: { 'line-color': c.accent, 'line-width': 2.5 } },
        { id: 'selected-line', type: 'line', source: 'buildings', filter: ['==', ['get', 'code'], ''], paint: { 'line-color': c.accent, 'line-width': 2.5 } },
        { id: 'room-labels', type: 'symbol', source: 'roomLabels', minzoom: 18.2, layout: { 'icon-image': ['concat', 'r:', ['get', 'number']], 'icon-allow-overlap': false, 'icon-padding': 1 } },
        { id: 'room-picked-label', type: 'symbol', source: 'pickedLabel', layout: { 'icon-image': ['concat', 'p:', ['get', 'label']], 'icon-allow-overlap': true, 'icon-ignore-placement': true } },
        { id: 'labels', type: 'symbol', source: 'labels', minzoom: 14.5, layout: { 'icon-image': ['concat', ['case', ['get', 'selected'], 's:', 'b:'], ['get', 'code']], 'icon-allow-overlap': false, 'symbol-sort-key': ['case', ['get', 'selected'], 0, 1], 'icon-padding': 2 } },
      ],
    }
  }

  /** A label image: building codes bold (the selected one in the accent colour), room numbers smaller. */
  private drawLabel(id: string): void {
    if (id === HATCH) { this.drawHatch(); return }
    const kind = id.slice(0, 2)
    const text = id.slice(2)
    if (!text || !['b:', 's:', 'r:', 'p:'].includes(kind) || this.map.hasImage(id)) return
    const document = this.options.container.ownerDocument
    const ratio = Math.min(document.defaultView?.devicePixelRatio || 1, 2)
    const size = (kind === 'r:' ? 10 : kind === 'p:' ? 15 : 12) * ratio
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return
    const font = `${kind === 'r:' ? 500 : 700} ${size}px ${document.defaultView?.getComputedStyle(this.options.container).fontFamily || 'system-ui, sans-serif'}`
    context.font = font
    const pad = (kind === 'p:' ? 4 : 3) * ratio
    canvas.width = Math.ceil(context.measureText(text).width + pad * 2)
    canvas.height = Math.ceil(size * 1.35 + pad)
    context.font = font
    context.textBaseline = 'middle'
    context.lineJoin = 'round'
    context.lineWidth = 3 * ratio
    context.strokeStyle = this.colors.halo
    context.fillStyle = kind === 's:' ? this.colors.accent : this.colors.text
    context.strokeText(text, pad, canvas.height / 2)
    context.fillText(text, pad, canvas.height / 2)
    const image = context.getImageData(0, 0, canvas.width, canvas.height)
    this.map.addImage(id, { width: image.width, height: image.height, data: new Uint8Array(image.data.buffer) }, { pixelRatio: ratio })
  }

  /** Diagonal accent stripes over a light accent tint, repeated as the picked room's fill. */
  private drawHatch(): void {
    if (this.map.hasImage(HATCH)) return
    const document = this.options.container.ownerDocument
    const ratio = Math.min(document.defaultView?.devicePixelRatio || 1, 2)
    const size = Math.round(10 * ratio)
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    const context = canvas.getContext('2d')
    if (!context) return
    context.globalAlpha = 0.22
    context.fillStyle = this.colors.accent
    context.fillRect(0, 0, size, size)
    context.globalAlpha = 0.9
    context.strokeStyle = this.colors.accent
    context.lineWidth = 1.6 * ratio
    context.lineCap = 'square'
    // One stripe corner to corner plus its two neighbours, so the tiles join without gaps.
    for (const offset of [-size, 0, size]) { context.beginPath(); context.moveTo(offset, size); context.lineTo(offset + size, 0); context.stroke() }
    const image = context.getImageData(0, 0, size, size)
    this.map.addImage(HATCH, { width: size, height: size, data: new Uint8Array(image.data.buffer) }, { pixelRatio: ratio })
  }

  /** The picked room's hatch, outline and number. */
  private syncPicked(): void {
    if (!this.ready || this.disposed) return
    const room = this.room ? this.rooms.find(item => item.id === this.room) : undefined
    this.map.setFilter('room-picked', ['==', ['get', 'id'], room?.id ?? ''])
    this.map.setFilter('room-selected', ['==', ['get', 'id'], this.room ?? ''])
    // The picked room's plain number gives way to its bigger label.
    this.map.setFilter('room-labels', ['!=', ['get', 'id'], room?.id ?? ''])
    const code = room?.level.split('.')[1] ?? ''
    this.source('pickedLabel')?.setData(structuredClone(collection(room ? [{ type: 'Feature', properties: { label: roomLabel(room.name, code) }, geometry: point(centroid(room.polygons)) }] : [])) as never)
  }

  private click(event: MapMouseEvent): void {
    const room = this.map.queryRenderedFeatures(event.point, { layers: ['rooms-fill'] })[0]
    if (room) {
      const id = room.properties?.id as string
      this.setRoom(id)
      this.options.onRoom(this.rooms.find(item => item.id === id) ?? null)
      return
    }
    const building = this.map.queryRenderedFeatures(event.point, { layers: ['buildings-fill'] })[0]
    this.options.onSelect((building?.properties?.code as string | undefined) ?? null)
  }

  private source(id: string): GeoJSONSource | undefined {
    return this.map.getSource(id) as GeoJSONSource | undefined
  }

  private sync(): void {
    if (!this.ready || this.disposed) return
    // Cloned into this realm: MapLibre's worker refuses objects built in the plugin's frame.
    this.source('buildings')?.setData(structuredClone(collection(this.outlines.map(outline => ({ type: 'Feature', properties: { code: outline.code }, geometry: multi(outline.polygons) })))) as never)
    this.source('labels')?.setData(structuredClone(collection(this.outlines.map(outline => ({ type: 'Feature', properties: { code: outline.code, selected: outline.code === this.selected }, geometry: point(centroid(outline.polygons)) })))) as never)
    this.source('rooms')?.setData(structuredClone(collection(this.rooms.map(room => ({ type: 'Feature', properties: { id: room.id, kind: room.kind }, geometry: multi(room.polygons) })))) as never)
    this.source('roomLabels')?.setData(structuredClone(collection(this.rooms.filter(room => room.number).map(room => ({ type: 'Feature', properties: { id: room.id, number: room.number }, geometry: point(centroid(room.polygons)) })))) as never)
    this.map.setFilter('selected-fill', ['==', ['get', 'code'], this.selected ?? ''])
    this.map.setFilter('selected-line', ['==', ['get', 'code'], this.selected ?? ''])
    this.syncPicked()
    // The selected building's rooms replace its plain fill while a floor is shown.
    this.map.setPaintProperty('selected-fill', 'fill-opacity', this.rooms.length ? 0.06 : 0.28)
  }

  setOutlines(outlines: Outline[]): void { this.outlines = outlines; this.sync() }

  setSelected(code: string | null): void { this.selected = code; this.sync() }

  setRooms(rooms: Room[] | null): void { this.rooms = rooms ?? []; this.room = null; this.sync() }

  setRoom(id: string | null): void { this.room = id; this.syncPicked() }

  /** Fits [west, south, east, north] into view, waiting for the style when it is still loading. */
  fit(bounds: [number, number, number, number], maxZoom = 18.5): void {
    if (!this.ready) { this.pendingFit = bounds; return }
    // Framing keeps the map turned the way it is.
    this.map.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], { padding: 60, maxZoom, duration: 700, bearing: this.map.getBearing() })
  }

  zoomBy(delta: number): void {
    if (this.ready) this.map.easeTo({ zoom: this.map.getZoom() + delta, duration: 250 })
  }

  flyTo(camera: CampusCamera): void {
    if (this.ready) this.map.flyTo({ center: camera.center, zoom: camera.zoom, duration: 700 })
  }

  /** The theme changed: the style is rebuilt with the new colours and the data set again. */
  refreshTheme(): void {
    const next = readColors(this.options.container, this.options.roomColors)
    if (JSON.stringify(next) === JSON.stringify(this.colors)) return
    this.colors = next
    this.ready = false
    this.map.setStyle(this.style())
    this.map.once('styledata', () => { this.ready = true; for (const id of this.map.listImages()) if (/^[bsrp]:/.test(id) || id === HATCH) this.map.removeImage(id); this.sync() })
  }

  dispose(): void {
    if (this.disposed) return
    this.disposed = true
    this.options.container.removeEventListener('mousedown', this.commandDrag, true)
    this.resize?.disconnect()
    this.map.remove()
    removeProtocol(this.protocol)
  }
}

export function createCampusMap(options: CampusMapOptions): CampusMap {
  return new CampusMap(options)
}

Object.assign(window, { valleyPolyCampusMap: { createCampusMap } })
