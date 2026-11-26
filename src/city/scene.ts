import { BufferAttribute, BufferGeometry, CanvasTexture, Color, DirectionalLight, DoubleSide, Fog, HemisphereLight, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshLambertMaterial, PerspectiveCamera, Raycaster, RepeatWrapping, ReplaceStencilOp, Scene, ShapeUtils, Sprite, SpriteMaterial, Vector2, Vector3, WebGLRenderer } from 'three'
import { MapControls } from 'three/addons/controls/MapControls.js'
import { GROUND_STENCIL, GroundMap } from './groundMap'
import { boundsOfLv95, boundsOverlap, buildingsInArea, type Lv95Polygon } from './match'
import { buildingAtTriangle, decodeTile, gunzip, type TileBuilding, type TileEntry, type TileIndex } from './tileFormat'
import type { ColorMode, SelectedBuilding } from './store'

export interface CameraState { position: [number, number, number]; target: [number, number, number] }

export type { Lv95Polygon } from './match'

/**
 * A building area to highlight (an ETH building's outline in LV95): every LoD2 building that belongs to it
 * (`match.ts`). With `floor`, those buildings turn translucent and the floor's rooms are drawn as a slab
 * `elevation` metres above the buildings' base (above the ground where the model has none), coloured by `color`.
 */
export interface SceneArea {
  polygons: Lv95Polygon[]
  floor?: { elevation: number; rooms: { color: string; polygons: Lv95Polygon[]; picked?: boolean; label?: string }[] } | null
  /** Where to fly instead of the whole building: a searched room. */
  focus?: Lv95Polygon[] | null
}

export interface SceneEvents {
  read(path: string, size?: number): Promise<ArrayBuffer>
  onTiles(loaded: number, loading: number): void
  /** `at` is the clicked spot in LV95, just inside the building. */
  onSelect(building: SelectedBuilding | null, at?: [number, number]): void
  onCamera(camera: CameraState): void
  onError(message: string): void
  /** One tile of the blank base map (light or dark) to drape over the ground; without it the ground stays plain. */
  tile?(z: number, x: number, y: number, dark: boolean): Promise<ArrayBuffer>
}

interface Palette { background: Color; wall: Color; roof: Color; footprint: Color; ground: Color; accent: Color; ramp: Color[] }

interface LoadedTile {
  entry: TileEntry
  mesh: Mesh
  buildings: TileBuilding[]
  kinds: Uint8Array
  heights: Float32Array
}

const MAX_TILES = 220
const CONCURRENCY = 6
const BASE_HEIGHT = 400
const DEFAULT_VIEW = { east: 2683250, north: 1247900, distance: 1600 }

export function parseCssColor(value: string, fallback: string): Color {
  const text = value.trim()
  const srgb = text.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/)
  if (srgb) return new Color(Number(srgb[1]), Number(srgb[2]), Number(srgb[3]))
  const rgb = text.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/)
  if (rgb) return new Color(Number(rgb[1]) / 255, Number(rgb[2]) / 255, Number(rgb[3]) / 255)
  if (/^#[0-9a-f]{3,8}$/i.test(text)) return new Color(text.slice(0, 7))
  return new Color(fallback)
}

export function luminance(color: Color): number {
  return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b
}

export class CityScene {
  private readonly doc: Document
  private readonly win: Window
  private readonly canvas: HTMLCanvasElement
  private readonly renderer: WebGLRenderer
  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(45, 1, 1, 20000)
  private readonly controls: MapControls
  private readonly material = new MeshLambertMaterial({ vertexColors: true, flatShading: true, side: DoubleSide })
  private readonly groundMaterial = new MeshLambertMaterial({ side: DoubleSide, ...GROUND_STENCIL })
  private readonly highlightMaterial = new MeshLambertMaterial({ flatShading: true, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })
  /** The highlighted area while a floor is shown: the buildings stay as a faint shell around the floor. */
  private readonly ghostMaterial = new MeshLambertMaterial({ flatShading: true, side: DoubleSide, transparent: true, opacity: 0.16, depthWrite: false })
  private readonly hiddenMaterial = new MeshBasicMaterial({ visible: false })
  private readonly floorMaterial = new MeshLambertMaterial({ vertexColors: true, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })
  private readonly floorLineMaterial = new LineBasicMaterial({ transparent: true, opacity: 0.55 })
  /** Marks the floor's pixels before the ground is drawn, which leaves them open (`GROUND_STENCIL`). */
  private readonly floorMaskMaterial = new MeshBasicMaterial({ colorWrite: false, depthWrite: false, depthTest: false, side: DoubleSide, stencilWrite: true, stencilRef: 1, stencilZPass: ReplaceStencilOp })
  private area: SceneArea | null = null
  private readonly areaMeshes = new Map<string, Mesh>()
  private floorMeshes: (Mesh | LineSegments | Sprite)[] = []
  private readonly tiles = new Map<string, LoadedTile>()
  private readonly loading = new Set<string>()
  private readonly failed = new Set<string>()
  private readonly raycaster = new Raycaster()
  private readonly observers: Array<() => void> = []
  private palette!: Palette
  private index: TileIndex | null = null
  private origin: [number, number] = [2683000, 1247000]
  private ground: { mesh: Mesh; heights: Float32Array; cell: number; originX: number; originY: number; columns: number; rows: number } | null = null
  private colorMode: ColorMode = 'surfaces'
  private highlight: { mesh: Mesh; key: string; building: TileBuilding } | null = null
  private frame = 0
  private lastTileUpdate = 0
  private fly: { from: Vector3; to: Vector3; fromTarget: Vector3; toTarget: Vector3; start: number; duration: number } | null = null
  private cameraTimer = 0
  private disposed = false
  private pointerDown: { x: number; y: number; time: number } | null = null

  private readonly groundMap: GroundMap | null

  constructor(private readonly container: HTMLElement, private readonly events: SceneEvents, initialCamera: CameraState | null) {
    this.doc = container.ownerDocument
    this.win = this.doc.defaultView ?? window
    const tile = events.tile
    this.groundMap = tile ? new GroundMap({
      scene: this.scene, win: this.win, load: tile, changed: () => this.schedule(),
      toScene: (east, north, height) => this.toScene(east, north, height), height: (east, north) => this.groundHeight(east, north),
    }) : null
    this.canvas = this.doc.createElement('canvas')
    this.canvas.className = 'z3d-canvas'
    container.appendChild(this.canvas)
    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true, stencil: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(this.win.devicePixelRatio || 1, 2))
    this.controls = new MapControls(this.camera, this.canvas)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.12
    this.controls.screenSpacePanning = false
    this.controls.zoomToCursor = true
    this.controls.minDistance = 15
    this.controls.maxDistance = 16000
    this.controls.maxPolarAngle = Math.PI * 0.48
    this.controls.addEventListener('change', this.schedule)
    this.controls.addEventListener('end', this.saveCameraSoon)
    const sky = new HemisphereLight(0xffffff, 0x8a8478, 1.6)
    const sun = new DirectionalLight(0xffffff, 1.9)
    sun.position.set(-0.45, 0.8, 0.35)
    this.scene.add(sky, sun)
    this.scene.fog = new Fog(0x000000, 3000, 8000)
    this.readTheme()
    this.pendingCamera = initialCamera
    this.listen()
    this.resize()
  }

  private pendingCamera: CameraState | null

  setIndex(index: TileIndex | null): void {
    if (this.index === index) return
    this.clearTiles()
    this.groundMap?.clear()
    this.index = index
    if (!index) { this.schedule(); return }
    this.origin = [Math.round((index.bounds[0] + index.bounds[3]) / 2), Math.round((index.bounds[1] + index.bounds[4]) / 2)]
    const camera = this.pendingCamera
    this.pendingCamera = null
    if (camera) {
      this.camera.position.copy(this.toScene(camera.position[0], camera.position[1], camera.position[2]))
      this.controls.target.copy(this.toScene(camera.target[0], camera.target[1], camera.target[2]))
    } else this.place(DEFAULT_VIEW.east, DEFAULT_VIEW.north, DEFAULT_VIEW.distance, false)
    this.controls.update()
    this.groundReady = false
    void this.loadGround(index)
    this.schedule()
  }

  setColorMode(mode: ColorMode): void {
    if (this.colorMode === mode) return
    this.colorMode = mode
    for (const tile of this.tiles.values()) this.paint(tile)
    this.schedule()
  }

  /** The Ground switch: the draped base map, or the plain approximate ground when there is no map. */
  setShowGround(show: boolean): void {
    this.groundVisible = show
    if (this.ground) this.ground.mesh.visible = show && !this.groundMap
    this.groundMap?.setVisible(show)
    this.lastTileUpdate = 0
    this.schedule()
  }

  private groundVisible = true

  flyTo(east: number, north: number, distance: number): void {
    this.place(east, north, distance, true)
  }

  resetView(): void {
    this.place(DEFAULT_VIEW.east, DEFAULT_VIEW.north, DEFAULT_VIEW.distance, true)
  }

  /** One zoom step towards (+1) or away from (−1) the point looked at, animated like a fly-to. */
  zoomBy(step: number): void {
    const target = this.controls.target.clone()
    const offset = this.camera.position.clone().sub(target)
    const distance = Math.min(Math.max(offset.length() * (step > 0 ? 0.6 : 1 / 0.6), this.controls.minDistance), this.controls.maxDistance)
    const position = target.clone().add(offset.normalize().multiplyScalar(distance))
    this.fly = { from: this.camera.position.clone(), to: position, fromTarget: target.clone(), toTarget: target, start: this.win.performance.now(), duration: 350 }
    this.schedule()
  }

  clearSelection(): void {
    this.select(null)
  }

  /** Highlights an ETH building (or clears it with null); with a floor, ghosts it and draws that floor's rooms. */
  setArea(area: SceneArea | null): void {
    this.clearArea()
    this.area = area
    if (area) for (const tile of this.tiles.values()) this.applyArea(tile)
    this.syncHighlight()
    this.buildFloor()
    this.schedule()
  }

  /** Flies to the area: its centre at a distance that fits its size. */
  flyToArea(polygons: Lv95Polygon[], close = false): void {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    for (const polygon of polygons) for (const [x, y] of polygon[0] ?? []) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y) }
    if (!Number.isFinite(minX)) return
    const size = Math.max(maxX - minX, maxY - minY)
    this.place((minX + maxX) / 2, (minY + maxY) / 2, Math.min(Math.max(size * (close ? 2 : 2.4), close ? 90 : 140), 1600), true)
  }

  private areaBuildings(): TileBuilding[] {
    return [...this.areaMeshes.values()].flatMap(mesh => mesh.userData.buildings as TileBuilding[])
  }

  /** Marks the tile's buildings that belong to the area; true when it has any. */
  private applyArea(tile: LoadedTile): boolean {
    if (!this.area || this.areaMeshes.has(tile.entry.key)) return false
    const source = tile.mesh.geometry
    const index = source.getIndex()
    if (!index || !this.tileReaches(tile.entry, this.area.polygons)) return false
    const array = index.array as Uint16Array | Uint32Array
    const positions = source.getAttribute('position').array
    const [east, north] = this.origin
    const buildings = buildingsInArea(tile.buildings, {
      indices: array, kinds: tile.kinds, point: vertex => [positions[vertex * 3] + east, north - positions[vertex * 3 + 2]],
    }, this.area.polygons)
    if (!buildings.length) return false
    const ranges = buildings.map(building => [building[1] * 3, building[2] * 3] as const).sort((a, b) => a[0] - b[0])
    const picked = new (array.constructor as Uint32ArrayConstructor)(ranges.reduce((sum, [, count]) => sum + count, 0))
    let at = 0
    for (const [start, count] of ranges) { picked.set(array.subarray(start, start + count), at); at += count }
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', source.getAttribute('position'))
    geometry.setIndex(new BufferAttribute(picked, 1))
    const floor = Boolean(this.area.floor)
    const mesh = new Mesh(geometry, floor ? this.ghostMaterial : this.highlightMaterial)
    mesh.matrixAutoUpdate = false
    mesh.renderOrder = floor ? 2 : 0
    mesh.userData.buildings = buildings
    this.areaMeshes.set(tile.entry.key, mesh)
    this.scene.add(mesh)
    // With a floor shown, the opaque buildings are left out of the tile so the floor shows through the shell.
    if (floor) {
      source.clearGroups()
      let cursor = 0
      for (const [start, count] of ranges) {
        if (start > cursor) source.addGroup(cursor, start - cursor, 0)
        source.addGroup(start, count, 1)
        cursor = start + count
      }
      if (cursor < array.length) source.addGroup(cursor, array.length - cursor, 0)
      tile.mesh.material = [this.material, this.hiddenMaterial]
    }
    return true
  }

  private tileReaches(entry: TileEntry, polygons: Lv95Polygon[]): boolean {
    const box = boundsOfLv95(polygons)
    return !!box && boundsOverlap(box, { minX: entry.bounds[0], minY: entry.bounds[1], maxX: entry.bounds[3], maxY: entry.bounds[4] })
  }

  /** A clicked building's solid highlight would hide the floor inside it, so it gives way while that floor is shown. */
  private syncHighlight(): void {
    if (!this.highlight) return
    const { key, building } = this.highlight
    const shell = this.area?.floor ? this.areaMeshes.get(key)?.userData.buildings as TileBuilding[] | undefined : undefined
    this.highlight.mesh.visible = !shell?.some(item => item[1] === building[1])
  }

  private removeAreaMesh(key: string): void {
    const mesh = this.areaMeshes.get(key)
    if (!mesh) return
    this.scene.remove(mesh)
    mesh.geometry.dispose()
    this.areaMeshes.delete(key)
    const tile = this.tiles.get(key)
    if (tile) { tile.mesh.geometry.clearGroups(); tile.mesh.material = this.material }
  }

  private clearArea(): void {
    for (const key of [...this.areaMeshes.keys()]) this.removeAreaMesh(key)
    this.clearFloor()
  }

  /** Removes the floor's meshes; the picked room's hatch and label bring their own textures, the sprite shares three's geometry. */
  private clearFloor(): void {
    for (const item of this.floorMeshes) {
      this.scene.remove(item)
      const dispose = item.userData.dispose as (() => void) | undefined
      if (dispose) dispose()
      else item.geometry.dispose()
    }
    this.floorMeshes = []
  }

  /** A canvas from the view's own document: diagonal accent stripes, repeated over the picked room. */
  private hatchTexture(): CanvasTexture {
    const canvas = this.doc.createElement('canvas')
    canvas.width = canvas.height = 64
    const context = canvas.getContext('2d')!
    context.strokeStyle = `#${this.palette.accent.getHexString()}`
    context.lineWidth = 16
    for (const offset of [-64, 0, 64]) { context.beginPath(); context.moveTo(offset, 64); context.lineTo(offset + 64, 0); context.stroke() }
    const texture = new CanvasTexture(canvas)
    texture.wrapS = texture.wrapT = RepeatWrapping
    return texture
  }

  /** The picked room's number as a sprite that always faces the camera and stays readable above the floor. */
  private labelSprite(text: string, size: number): Sprite {
    const canvas = this.doc.createElement('canvas')
    const context = canvas.getContext('2d')!
    const font = `700 56px ${this.win.getComputedStyle(this.container).fontFamily || 'system-ui, sans-serif'}`
    context.font = font
    canvas.width = Math.ceil(context.measureText(text).width + 40)
    canvas.height = 84
    context.font = font
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.lineJoin = 'round'
    context.lineWidth = 12
    context.strokeStyle = 'rgba(0, 0, 0, 0.75)'
    context.fillStyle = '#ffffff'
    context.strokeText(text, canvas.width / 2, canvas.height / 2)
    context.fillText(text, canvas.width / 2, canvas.height / 2)
    const texture = new CanvasTexture(canvas)
    const material = new SpriteMaterial({ map: texture, depthTest: false, transparent: true })
    const sprite = new Sprite(material)
    sprite.scale.set(size * canvas.width / canvas.height, size, 1)
    sprite.renderOrder = 4
    sprite.userData.dispose = () => { texture.dispose(); material.dispose() }
    return sprite
  }

  /**
   * The height the area's floors stack from: the lowest base of its buildings. Where the model has no building
   * there, the ground, once every tile reaching the area has been read; null while that is still open and for
   * an area outside the model.
   */
  private floorBase(polygons: Lv95Polygon[]): number | null {
    const buildings = this.areaBuildings()
    if (buildings.length) return Math.min(...buildings.map(building => building[5]))
    const box = boundsOfLv95(polygons)
    if (!box || !this.groundReady) return null
    const reaching = this.index?.tiles.filter(entry => this.tileReaches(entry, polygons)) ?? []
    if (!reaching.length || reaching.some(entry => !this.tiles.has(entry.key) && !this.failed.has(entry.key))) return null
    return this.groundHeight((box.minX + box.maxX) / 2, (box.minY + box.maxY) / 2)
  }

  /** The floor's rooms as one flat, vertex-coloured mesh with their outlines, `elevation` above `floorBase`. */
  private buildFloor(): void {
    this.clearFloor()
    const floor = this.area?.floor
    const ground = floor ? this.floorBase(this.area!.polygons) : null
    if (!floor || ground === null) { this.schedule(); return }
    const base = ground + floor.elevation + 0.2
    const positions: number[] = [], colors: number[] = [], lines: number[] = [], hatch: number[] = []
    let label: { text: string; x: number; y: number; size: number } | null = null
    const color = new Color()
    for (const room of floor.rooms) {
      color.set(room.color)
      if (room.picked && room.label) {
        const ring = room.polygons[0]?.[0] ?? []
        const xs = ring.map(([east]) => east - this.origin[0]), ys = ring.map(([, north]) => north - this.origin[1])
        const width = Math.max(...xs) - Math.min(...xs), depth = Math.max(...ys) - Math.min(...ys)
        if (ring.length) label = { text: room.label, x: (Math.max(...xs) + Math.min(...xs)) / 2, y: (Math.max(...ys) + Math.min(...ys)) / 2, size: Math.min(Math.max(Math.min(width, depth) * 0.35, 2.5), 7) }
      }
      for (const polygon of room.polygons) {
        const rings = polygon.map(ring => {
          const points = ring.map(([east, north]) => new Vector2(east - this.origin[0], north - this.origin[1]))
          if (points.length > 1 && points[0].equals(points[points.length - 1])) points.pop()
          return points
        }).filter(points => points.length >= 3)
        if (!rings.length) continue
        const [contour, ...holes] = rings
        const all = [contour, ...holes].flat()
        for (const [a, b, c] of ShapeUtils.triangulateShape(contour, holes)) {
          for (const corner of [a, b, c]) {
            const p = all[corner]
            positions.push(p.x, base - BASE_HEIGHT, -p.y); colors.push(color.r, color.g, color.b)
            if (room.picked) hatch.push(p.x, base - BASE_HEIGHT + 0.08, -p.y)
          }
        }
        for (const points of rings) for (let i = 0; i < points.length; i++) {
          const p = points[i], q = points[(i + 1) % points.length]
          lines.push(p.x, base - BASE_HEIGHT + 0.05, -p.y, q.x, base - BASE_HEIGHT + 0.05, -q.y)
        }
      }
    }
    if (positions.length) {
      const geometry = new BufferGeometry()
      geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
      geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3))
      geometry.computeVertexNormals()
      const mesh = new Mesh(geometry, this.floorMaterial)
      mesh.renderOrder = 1
      // A floor below the ground (a basement, a building in a slope) is seen through an opening of its own shape.
      const mask = new Mesh(geometry, this.floorMaskMaterial)
      mask.renderOrder = -2
      mask.userData.dispose = () => {}
      this.floorMeshes.push(mesh, mask)
    }
    if (lines.length) {
      const geometry = new BufferGeometry()
      geometry.setAttribute('position', new BufferAttribute(new Float32Array(lines), 3))
      const outline = new LineSegments(geometry, this.floorLineMaterial)
      outline.renderOrder = 1
      this.floorMeshes.push(outline)
    }
    if (hatch.length) {
      // The picked room is hatched (schraffiert): stripes 1.5 m apart, laid in world coordinates.
      const geometry = new BufferGeometry()
      geometry.setAttribute('position', new BufferAttribute(new Float32Array(hatch), 3))
      const uv = new Float32Array((hatch.length / 3) * 2)
      for (let i = 0, j = 0; i < hatch.length; i += 3, j += 2) { uv[j] = hatch[i] / 1.5; uv[j + 1] = -hatch[i + 2] / 1.5 }
      geometry.setAttribute('uv', new BufferAttribute(uv, 2))
      const texture = this.hatchTexture()
      const material = new MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: DoubleSide, fog: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })
      const mesh = new Mesh(geometry, material)
      mesh.renderOrder = 3
      mesh.userData.dispose = () => { geometry.dispose(); texture.dispose(); material.dispose() }
      this.floorMeshes.push(mesh)
    }
    if (label) {
      const sprite = this.labelSprite(label.text, label.size)
      sprite.position.set(label.x, base - BASE_HEIGHT + label.size * 0.6 + 0.5, -label.y)
      this.floorMeshes.push(sprite)
    }
    for (const item of this.floorMeshes) this.scene.add(item)
    this.schedule()
  }

  dispose(): void {
    this.disposed = true
    if (this.frame) this.win.cancelAnimationFrame(this.frame)
    this.win.clearTimeout(this.cameraTimer)
    for (const off of this.observers) off()
    this.controls.dispose()
    this.clearTiles()
    if (this.ground) { this.ground.mesh.geometry.dispose(); this.ground = null }
    this.material.dispose()
    this.groundMaterial.dispose()
    this.groundMap?.dispose()
    this.highlightMaterial.dispose()
    this.clearArea()
    for (const material of [this.ghostMaterial, this.hiddenMaterial, this.floorMaterial, this.floorLineMaterial, this.floorMaskMaterial]) material.dispose()
    this.renderer.dispose()
    this.canvas.remove()
  }

  private toScene(east: number, north: number, height: number): Vector3 {
    return new Vector3(east - this.origin[0], height - BASE_HEIGHT, -(north - this.origin[1]))
  }

  private fromScene(point: Vector3): [number, number, number] {
    return [Math.round((point.x + this.origin[0]) * 100) / 100, Math.round((this.origin[1] - point.z) * 100) / 100, Math.round((point.y + BASE_HEIGHT) * 100) / 100]
  }

  groundHeight(east: number, north: number): number {
    const ground = this.ground
    if (!ground) return this.index ? Math.max(this.index.bounds[2], 400) : 410
    const x = Math.min(Math.max((east - ground.originX) / ground.cell, 0), ground.columns - 1)
    const y = Math.min(Math.max((north - ground.originY) / ground.cell, 0), ground.rows - 1)
    const x0 = Math.floor(x), y0 = Math.floor(y)
    const x1 = Math.min(x0 + 1, ground.columns - 1), y1 = Math.min(y0 + 1, ground.rows - 1)
    const fx = x - x0, fy = y - y0
    const at = (column: number, row: number) => ground.heights[row * ground.columns + column]
    const height = (at(x0, y0) * (1 - fx) + at(x1, y0) * fx) * (1 - fy) + (at(x0, y1) * (1 - fx) + at(x1, y1) * fx) * fy
    return Number.isNaN(height) ? Math.max(this.index?.bounds[2] ?? 400, 400) : height
  }

  /**
   * A fly-to asked before the ground heights are read would aim at the fallback height (400 m, tens of
   * metres under the campus) and leave the camera underground, so it waits for them.
   */
  private groundReady = false
  private pendingPlace: [number, number, number] | null = null

  private groundSettled(): void {
    this.groundReady = true
    if (this.area?.floor) this.buildFloor()
    const pending = this.pendingPlace
    this.pendingPlace = null
    if (pending) this.place(pending[0], pending[1], pending[2], true)
  }

  private place(east: number, north: number, distance: number, animate: boolean): void {
    if (animate && this.index && !this.groundReady) { this.pendingPlace = [east, north, distance]; return }
    const target = this.toScene(east, north, this.groundHeight(east, north))
    const direction = this.camera.position.clone().sub(this.controls.target)
    if (direction.lengthSq() < 1 || direction.y / direction.length() > 0.95 || direction.y / direction.length() < 0.25) direction.set(0.35, 0.75, 0.55)
    direction.normalize().multiplyScalar(distance)
    const position = target.clone().add(direction)
    if (!animate) {
      this.camera.position.copy(position)
      this.controls.target.copy(target)
      this.schedule()
      return
    }
    this.fly = { from: this.camera.position.clone(), to: position, fromTarget: this.controls.target.clone(), toTarget: target, start: this.win.performance.now(), duration: 1200 }
    this.schedule()
  }

  private readonly schedule = (): void => {
    if (this.frame || this.disposed) return
    this.frame = this.win.requestAnimationFrame(this.tick)
  }

  private readonly tick = (time: number): void => {
    this.frame = 0
    if (this.disposed) return
    let moving = false
    if (this.fly) {
      const t = Math.min((time - this.fly.start) / this.fly.duration, 1)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
      this.camera.position.lerpVectors(this.fly.from, this.fly.to, eased)
      this.controls.target.lerpVectors(this.fly.fromTarget, this.fly.toTarget, eased)
      if (t >= 1) { this.fly = null; this.saveCameraSoon() }
      moving = true
    }
    moving = this.controls.update() || moving
    const distance = this.camera.position.distanceTo(this.controls.target)
    const radius = this.viewRadius(distance)
    this.camera.near = Math.max(0.5, distance / 800)
    this.camera.far = radius * 1.6 + distance * 2
    this.camera.updateProjectionMatrix()
    const fog = this.scene.fog as Fog
    fog.near = radius * 0.55 + distance * 0.5
    fog.far = radius * 1.05 + distance
    this.renderer.render(this.scene, this.camera)
    if (time - this.lastTileUpdate > 200 || !moving) { this.lastTileUpdate = time; this.updateTiles(radius) }
    if (moving) this.schedule()
  }

  private viewRadius(distance: number): number {
    return Math.min(Math.max(distance * 2.6, 1300), 7500)
  }

  private updateTiles(radius: number): void {
    const index = this.index
    if (!index) return
    const target = this.controls.target
    const east = target.x + this.origin[0]
    const north = this.origin[1] - target.z
    this.groundMap?.update(east, north, this.camera.position.distanceTo(target), radius)
    const half = index.tileSize / 2
    const distanceTo = (entry: TileEntry) => Math.hypot((entry.x * index.tileSize + half) - east, (entry.y * index.tileSize + half) - north)
    const wanted = index.tiles.map(entry => ({ entry, distance: distanceTo(entry) })).filter(item => item.distance <= radius).sort((a, b) => a.distance - b.distance)
    for (const [key, tile] of this.tiles) if (distanceTo(tile.entry) > radius * 1.4) this.unload(key)
    if (this.tiles.size > MAX_TILES) {
      const far = [...this.tiles.values()].sort((a, b) => distanceTo(b.entry) - distanceTo(a.entry))
      for (const tile of far.slice(0, this.tiles.size - MAX_TILES)) this.unload(tile.entry.key)
    }
    for (const { entry } of wanted) {
      if (this.loading.size >= CONCURRENCY) break
      if (this.tiles.has(entry.key) || this.loading.has(entry.key) || this.failed.has(entry.key)) continue
      if (this.tiles.size + this.loading.size >= MAX_TILES) break
      void this.load(entry)
    }
    this.events.onTiles(this.tiles.size, this.loading.size)
  }

  private async load(entry: TileEntry): Promise<void> {
    const index = this.index
    this.loading.add(entry.key)
    try {
      const [packed, meta] = await Promise.all([
        this.events.read(`tiles/${entry.key}.bin.gz`, entry.bytes),
        this.events.read(`tiles/${entry.key}.json`),
      ])
      if (this.disposed || this.index !== index) return
      const tile = decodeTile(await gunzip(packed))
      const buildings = JSON.parse(new TextDecoder().decode(meta)) as TileBuilding[]
      if (this.disposed || this.index !== index) return
      const positions = new Float32Array(tile.vertexCount * 3)
      const [ox, oy, oz] = tile.origin
      const [sx, sy, sz] = tile.step
      const dx = ox - this.origin[0], dy = oz - BASE_HEIGHT, dz = this.origin[1] - oy
      for (let i = 0, j = 0; i < tile.vertexCount; i++, j += 3) {
        positions[j] = dx + tile.positions[j] * sx
        positions[j + 1] = dy + tile.positions[j + 2] * sz
        positions[j + 2] = dz - tile.positions[j + 1] * sy
      }
      const heights = new Float32Array(tile.vertexCount)
      for (const building of buildings) {
        const height = building[8] - building[5]
        const end = (building[1] + building[2]) * 3
        for (let i = building[1] * 3; i < end; i++) heights[tile.indices[i]] = height
      }
      const geometry = new BufferGeometry()
      geometry.setAttribute('position', new BufferAttribute(positions, 3))
      geometry.setAttribute('color', new BufferAttribute(new Uint8Array(tile.vertexCount * 3), 3, true))
      geometry.setIndex(new BufferAttribute(tile.indices, 1))
      geometry.computeBoundingSphere()
      const mesh = new Mesh(geometry, this.material)
      mesh.matrixAutoUpdate = false
      const loaded: LoadedTile = { entry, mesh, buildings, kinds: tile.kinds, heights }
      this.paint(loaded)
      this.tiles.set(entry.key, loaded)
      this.scene.add(mesh)
      if (this.selectedKey === entry.key && this.selectedBuilding) this.showHighlight(loaded, this.selectedBuilding)
      const joined = this.applyArea(loaded)
      this.syncHighlight()
      // A floor without any building waits for the area's last tile before it settles on the ground.
      if (this.area?.floor && (joined || !this.areaMeshes.size)) this.buildFloor()
    } catch (error) {
      this.failed.add(entry.key)
      this.events.onError(error instanceof Error ? error.message : String(error))
      if (this.area?.floor && !this.areaMeshes.size) this.buildFloor()
    } finally {
      this.loading.delete(entry.key)
      this.lastTileUpdate = 0
      this.schedule()
    }
  }

  private unload(key: string): void {
    const tile = this.tiles.get(key)
    if (!tile) return
    if (this.highlight?.key === key) this.removeHighlight()
    this.removeAreaMesh(key)
    this.scene.remove(tile.mesh)
    tile.mesh.geometry.dispose()
    this.tiles.delete(key)
  }

  private clearTiles(): void {
    for (const key of [...this.tiles.keys()]) this.unload(key)
    this.failed.clear()
    this.events.onTiles(0, this.loading.size)
  }

  private paint(tile: LoadedTile): void {
    const attribute = tile.mesh.geometry.getAttribute('color') as BufferAttribute
    const colors = attribute.array as Uint8Array
    const palette = this.palette
    const pick = new Color()
    for (let i = 0; i < tile.kinds.length; i++) {
      const kind = tile.kinds[i]
      let color: Color
      if (this.colorMode === 'height' && kind !== 2) color = this.ramp(tile.heights[i], kind === 1, pick)
      else color = kind === 1 ? palette.roof : kind === 2 ? palette.footprint : palette.wall
      colors[i * 3] = color.r * 255
      colors[i * 3 + 1] = color.g * 255
      colors[i * 3 + 2] = color.b * 255
    }
    attribute.needsUpdate = true
  }

  private ramp(height: number, roof: boolean, out: Color): Color {
    const stops = this.palette.ramp
    const t = Math.min(Math.max(height / 60, 0), 1) * (stops.length - 1)
    const low = Math.floor(t)
    out.copy(stops[low]).lerp(stops[Math.min(low + 1, stops.length - 1)], t - low)
    if (roof) out.offsetHSL(0, 0, 0.05)
    return out
  }

  private async loadGround(index: TileIndex): Promise<void> {
    const meta = (index as TileIndex & { ground?: { file: string; cell: number; originX: number; originY: number; columns: number; rows: number } }).ground
    if (!meta) { this.groundSettled(); return }
    try {
      const bytes = await this.events.read(meta.file, meta.columns * meta.rows * 4)
      if (this.disposed || this.index !== index) return
      const heights = new Float32Array(bytes.slice(0, meta.columns * meta.rows * 4))
      const positions = new Float32Array(meta.columns * meta.rows * 3)
      for (let row = 0; row < meta.rows; row++) for (let column = 0; column < meta.columns; column++) {
        const at = row * meta.columns + column
        positions[at * 3] = meta.originX + column * meta.cell - this.origin[0]
        positions[at * 3 + 1] = Number.isNaN(heights[at]) ? 0 : heights[at] - BASE_HEIGHT - 0.4
        positions[at * 3 + 2] = this.origin[1] - (meta.originY + row * meta.cell)
      }
      const indices = new Uint32Array((meta.columns - 1) * (meta.rows - 1) * 6)
      let k = 0
      for (let row = 0; row < meta.rows - 1; row++) for (let column = 0; column < meta.columns - 1; column++) {
        const a = row * meta.columns + column, b = a + 1, c = a + meta.columns, d = c + 1
        if (Number.isNaN(heights[a]) || Number.isNaN(heights[b]) || Number.isNaN(heights[c]) || Number.isNaN(heights[d])) continue
        indices[k++] = a; indices[k++] = c; indices[k++] = b
        indices[k++] = b; indices[k++] = c; indices[k++] = d
      }
      const geometry = new BufferGeometry()
      geometry.setAttribute('position', new BufferAttribute(positions, 3))
      geometry.setIndex(new BufferAttribute(indices.subarray(0, k), 1))
      geometry.computeVertexNormals()
      const mesh = new Mesh(geometry, this.groundMaterial)
      mesh.matrixAutoUpdate = false
      mesh.visible = this.groundVisible && !this.groundMap
      mesh.renderOrder = -1
      this.ground = { mesh, heights, ...meta }
      // The draped map follows the ground's heights now that they are known.
      this.groundMap?.reshape()
      this.scene.add(mesh)
      this.schedule()
      this.groundSettled()
    } catch (error) {
      this.events.onError(error instanceof Error ? error.message : String(error))
      this.groundSettled()
    }
  }

  private selectedKey: string | null = null
  private selectedBuilding: TileBuilding | null = null

  private select(hit: { tile: LoadedTile; building: TileBuilding; at: [number, number] } | null): void {
    this.removeHighlight()
    this.selectedKey = hit?.tile.entry.key ?? null
    this.selectedBuilding = hit?.building ?? null
    if (hit) this.showHighlight(hit.tile, hit.building)
    const b = hit?.building
    this.events.onSelect(b ? { egid: b[0], ground: b[5], roof: b[8], height: Math.round((b[8] - b[5]) * 10) / 10, triangles: b[2], center: [(b[3] + b[6]) / 2, (b[4] + b[7]) / 2] } : null, hit?.at)
    this.schedule()
  }

  private showHighlight(tile: LoadedTile, building: TileBuilding): void {
    const source = tile.mesh.geometry
    const index = source.getIndex()
    if (!index) return
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', source.getAttribute('position'))
    geometry.setIndex(new BufferAttribute((index.array as Uint16Array | Uint32Array).slice(building[1] * 3, (building[1] + building[2]) * 3), 1))
    const mesh = new Mesh(geometry, this.highlightMaterial)
    mesh.matrixAutoUpdate = false
    this.highlight = { mesh, key: tile.entry.key, building }
    this.syncHighlight()
    this.scene.add(mesh)
  }

  private removeHighlight(): void {
    if (!this.highlight) return
    this.scene.remove(this.highlight.mesh)
    this.highlight.mesh.geometry.dispose()
    this.highlight = null
  }

  private pick(clientX: number, clientY: number): void {
    const rect = this.canvas.getBoundingClientRect()
    const pointer = new Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1)
    this.raycaster.setFromCamera(pointer, this.camera)
    const meshes = [...this.tiles.values()].map(tile => tile.mesh)
    const [hit] = this.raycaster.intersectObjects(meshes, false)
    if (!hit || hit.faceIndex == null) { this.select(null); return }
    const tile = [...this.tiles.values()].find(item => item.mesh === hit.object)
    const building = tile ? buildingAtTriangle(tile.buildings, hit.faceIndex) : null
    // A metre further along the ray, so a click on a wall counts for the building behind it.
    const [east, north] = this.fromScene(hit.point.addScaledVector(this.raycaster.ray.direction, 1))
    this.select(tile && building ? { tile, building, at: [east, north] } : null)
  }

  private readonly saveCameraSoon = (): void => {
    this.win.clearTimeout(this.cameraTimer)
    this.cameraTimer = this.win.setTimeout(() => {
      if (this.disposed || !this.index) return
      this.events.onCamera({ position: this.fromScene(this.camera.position), target: this.fromScene(this.controls.target) })
    }, 800)
  }

  private readTheme(): void {
    const probe = this.doc.createElement('span')
    probe.style.display = 'none'
    this.container.appendChild(probe)
    const resolve = (token: string, fallback: string) => { probe.style.color = `var(${token}, ${fallback})`; return parseCssColor(this.win.getComputedStyle(probe).color, fallback) }
    const background = resolve('--pane-bg', '#181818')
    const accent = resolve('--accent-color', '#3b82f6')
    probe.remove()
    const dark = luminance(background) < 0.4
    this.groundMap?.setDark(dark)
    this.palette = dark
      ? { background, accent, wall: new Color('#8f8d88'), roof: new Color('#a77561'), footprint: new Color('#4a4946'), ground: new Color('#2b2b2a'),
          ramp: ['#56657a', '#6f8a8c', '#a3a07c', '#c08b63', '#c9665a'].map(value => new Color(value)) }
      : { background, accent, wall: new Color('#d9d6d0'), roof: new Color('#b97a5f'), footprint: new Color('#b5b2ab'), ground: new Color('#e4e1da'),
          ramp: ['#8ea2bd', '#97b7b3', '#d0c896', '#dda57a', '#d9756a'].map(value => new Color(value)) }
    this.renderer.setClearColor(background)
    ;(this.scene.fog as Fog).color.copy(background)
    this.groundMaterial.color.copy(this.palette.ground)
    this.highlightMaterial.color.copy(accent)
    this.ghostMaterial.color.copy(accent)
    this.floorLineMaterial.color.copy(dark ? new Color('#d6d3cc') : new Color('#3a3a38'))
    for (const tile of this.tiles.values()) this.paint(tile)
    this.schedule()
  }

  private listen(): void {
    const ResizeObserverClass = (this.win as Window & typeof globalThis).ResizeObserver ?? ResizeObserver
    const resize = new ResizeObserverClass(() => this.resize())
    resize.observe(this.container)
    this.observers.push(() => resize.disconnect())
    const MutationObserverClass = (this.win as Window & typeof globalThis).MutationObserver ?? MutationObserver
    const theme = new MutationObserverClass(() => this.readTheme())
    theme.observe(this.doc.documentElement, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    if (this.doc.body) theme.observe(this.doc.body, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    this.observers.push(() => theme.disconnect())
    const media = this.win.matchMedia?.('(prefers-color-scheme: dark)')
    const onMedia = () => this.readTheme()
    media?.addEventListener('change', onMedia)
    this.observers.push(() => media?.removeEventListener('change', onMedia))
    const down = (event: PointerEvent) => { if (event.button === 0) this.pointerDown = { x: event.clientX, y: event.clientY, time: event.timeStamp } }
    const up = (event: PointerEvent) => {
      const start = this.pointerDown
      this.pointerDown = null
      if (!start || event.button !== 0) return
      if (Math.hypot(event.clientX - start.x, event.clientY - start.y) < 4 && event.timeStamp - start.time < 500) this.pick(event.clientX, event.clientY)
    }
    const lost = (event: Event) => { event.preventDefault(); this.events.onError('WebGL context lost') }
    const restored = () => this.schedule()
    this.canvas.addEventListener('pointerdown', down)
    this.canvas.addEventListener('pointerup', up)
    this.canvas.addEventListener('webglcontextlost', lost)
    this.canvas.addEventListener('webglcontextrestored', restored)
    this.observers.push(() => {
      this.canvas.removeEventListener('pointerdown', down)
      this.canvas.removeEventListener('pointerup', up)
      this.canvas.removeEventListener('webglcontextlost', lost)
      this.canvas.removeEventListener('webglcontextrestored', restored)
    })
  }

  private resize(): void {
    const width = Math.max(1, this.container.clientWidth)
    const height = Math.max(1, this.container.clientHeight)
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.schedule()
  }
}
