import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, NotEqualStencilFunc, SRGBColorSpace, Texture, type Scene, type Vector3 } from 'three'
import { wgs84ToLv95 } from './geo'

/**
 * The blank base map (the 2D campus map's tiles) draped over the 3D view's ground. Each Web Mercator
 * tile becomes a small grid whose corners and inner points are projected to LV95 and lifted onto the
 * ground surface, so the map follows the approximate terrain; the texture keeps the tile's own pixels.
 * Tiles are chosen around the camera target at one zoom level picked from the camera distance; the scene
 * renders on demand, so a loaded tile only asks for one more frame.
 */
/** Every ground surface leaves out the pixels a shown floor has marked, so floors below the ground stay visible. */
export const GROUND_STENCIL = { stencilWrite: true, stencilRef: 1, stencilFunc: NotEqualStencilFunc }
const GRID = 8
const MAX_LOADED = 96
const MAX_WANTED = 64
const PARALLEL = 4

export interface GroundMapOptions {
  scene: Scene
  win: Window
  toScene(east: number, north: number, height: number): Vector3
  height(east: number, north: number): number
  load(z: number, x: number, y: number, dark: boolean): Promise<ArrayBuffer>
  changed(): void
}

/** Zoom level of the draped tiles for a camera at `distance` metres from its target. */
export function groundZoom(distance: number): number {
  return distance < 450 ? 16 : distance < 1300 ? 15 : distance < 3600 ? 14 : 13
}

/** Longitude and latitude of a point in tile space (`x`, `y` may be fractional) at zoom `z`. */
export function tileToWgs84(z: number, x: number, y: number): [number, number] {
  const n = 2 ** z
  return [x / n * 360 - 180, Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n))) * 180 / Math.PI]
}

/** The tile (fractional) that holds a WGS84 point at zoom `z`. */
export function wgs84ToTile(z: number, longitude: number, latitude: number): [number, number] {
  const n = 2 ** z
  const phi = latitude * Math.PI / 180
  return [(longitude + 180) / 360 * n, (1 - Math.log(Math.tan(phi) + 1 / Math.cos(phi)) / Math.PI) / 2 * n]
}

/** LV95 → WGS84, swisstopo's approximate formulas (about 1 m), the inverse of `wgs84ToLv95`. */
export function lv95ToWgs84(east: number, north: number): [number, number] {
  const y = (east - 2600000) / 1000000
  const x = (north - 1200000) / 1000000
  const lambda = 2.6779094 + 4.728982 * y + 0.791484 * y * x + 0.1306 * y * x * x - 0.0436 * y ** 3
  const phi = 16.9023892 + 3.238272 * x - 0.270978 * y * y - 0.002528 * x * x - 0.0447 * y * y * x - 0.014 * x ** 3
  return [lambda * 100 / 36, phi * 100 / 36]
}

/** The tiles to show around an LV95 point within `radius` metres at zoom `z`, nearest first. */
export function tilesAround(z: number, east: number, north: number, radius: number, limit = MAX_WANTED): [number, number][] {
  const [west, south] = lv95ToWgs84(east - radius, north - radius)
  const [eastLon, northLat] = lv95ToWgs84(east + radius, north + radius)
  const [x0, y0] = wgs84ToTile(z, west, northLat)
  const [x1, y1] = wgs84ToTile(z, eastLon, south)
  const [cx, cy] = wgs84ToTile(z, ...lv95ToWgs84(east, north))
  const n = 2 ** z
  const tiles: { tile: [number, number]; distance: number }[] = []
  for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(n - 1, Math.floor(x1)); x++) {
    for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(n - 1, Math.floor(y1)); y++) tiles.push({ tile: [x, y], distance: Math.hypot(x + 0.5 - cx, y + 0.5 - cy) })
  }
  return tiles.sort((a, b) => a.distance - b.distance).slice(0, limit).map(item => item.tile)
}

interface Patch { key: string; mesh: Mesh | null; texture: Texture | null; loading: boolean; failed: boolean; used: number }

export class GroundMap {
  private readonly patches = new Map<string, Patch>()
  private wanted = new Set<string>()
  private running = 0
  private dark = false
  private visible = true
  private generation = 0
  private clock = 0
  private disposed = false

  constructor(private readonly options: GroundMapOptions) {}

  /** Shows the tiles around the camera target; call it whenever the camera has settled or moved far. */
  update(east: number, north: number, distance: number, radius: number): void {
    if (this.disposed || !this.visible) return
    const z = groundZoom(distance)
    const tiles = tilesAround(z, east, north, Math.min(radius, z === 13 ? 7000 : radius))
    this.wanted = new Set(tiles.map(([x, y]) => `${z}/${x}/${y}`))
    this.clock++
    let changed = false
    for (const [key, patch] of this.patches) {
      const shown = this.wanted.has(key)
      if (patch.mesh && patch.mesh.visible !== shown) { patch.mesh.visible = shown; changed = true }
      if (shown) patch.used = this.clock
    }
    for (const [x, y] of tiles) this.request(z, x, y)
    this.evict()
    // Only a visible change asks for a frame: the scene calls update after every frame it draws.
    if (changed) this.options.changed()
  }

  setDark(dark: boolean): void {
    if (dark === this.dark) return
    this.dark = dark
    this.clear()
  }

  setVisible(visible: boolean): void {
    this.visible = visible
    for (const patch of this.patches.values()) if (patch.mesh) patch.mesh.visible = visible && this.wanted.has(patch.key)
    this.options.changed()
  }

  /** The ground heights or the scene origin changed: every patch is lifted again, its texture kept. */
  reshape(): void {
    for (const patch of this.patches.values()) {
      if (!patch.mesh) continue
      const [z, x, y] = patch.key.split('/').map(Number)
      patch.mesh.geometry.dispose()
      patch.mesh.geometry = this.geometry(z, x, y)
    }
    this.options.changed()
  }

  /** Forgets every tile (theme change, a new model). */
  clear(): void {
    this.generation++
    for (const key of [...this.patches.keys()]) this.drop(key)
    this.options.changed()
  }

  dispose(): void {
    this.disposed = true
    this.clear()
  }

  private request(z: number, x: number, y: number): void {
    const key = `${z}/${x}/${y}`
    if (this.patches.has(key) || this.running >= PARALLEL) return
    const patch: Patch = { key, mesh: null, texture: null, loading: true, failed: false, used: this.clock }
    this.patches.set(key, patch)
    this.running++
    const generation = this.generation
    void this.options.load(z, x, y, this.dark).then(async bytes => {
      const bitmap = await this.options.win.createImageBitmap(new Blob([new Uint8Array(bytes).slice()]))
      if (this.disposed || generation !== this.generation || this.patches.get(key) !== patch) { bitmap.close(); return }
      const texture = new Texture(bitmap)
      texture.colorSpace = SRGBColorSpace
      texture.flipY = false
      texture.anisotropy = 4
      texture.needsUpdate = true
      const mesh = new Mesh(this.geometry(z, x, y), new MeshBasicMaterial({ map: texture, depthWrite: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, ...GROUND_STENCIL }))
      mesh.matrixAutoUpdate = false
      mesh.renderOrder = -1
      mesh.visible = this.visible && this.wanted.has(key)
      patch.mesh = mesh
      patch.texture = texture
      this.options.scene.add(mesh)
    }).catch(() => { patch.failed = true }).finally(() => {
      patch.loading = false
      this.running--
      if (this.disposed || generation !== this.generation) return
      // The next wanted tile that has not been asked for yet.
      for (const wanted of this.wanted) if (!this.patches.has(wanted)) { const [nz, nx, ny] = wanted.split('/').map(Number); this.request(nz, nx, ny); break }
      this.options.changed()
    })
  }

  /** A GRID × GRID patch over the tile, projected to LV95 and lifted onto the ground (0.6 m below the building bases). */
  private geometry(z: number, x: number, y: number): BufferGeometry {
    const positions = new Float32Array((GRID + 1) * (GRID + 1) * 3)
    const uvs = new Float32Array((GRID + 1) * (GRID + 1) * 2)
    for (let row = 0; row <= GRID; row++) for (let column = 0; column <= GRID; column++) {
      const u = column / GRID, v = row / GRID
      const [longitude, latitude] = tileToWgs84(z, x + u, y + v)
      const [east, north] = wgs84ToLv95(latitude, longitude)
      const point = this.options.toScene(east, north, this.options.height(east, north) - 0.6)
      const at = row * (GRID + 1) + column
      positions.set([point.x, point.y, point.z], at * 3)
      uvs.set([u, v], at * 2)
    }
    const indices = new Uint16Array(GRID * GRID * 6)
    let k = 0
    for (let row = 0; row < GRID; row++) for (let column = 0; column < GRID; column++) {
      const a = row * (GRID + 1) + column, b = a + 1, c = a + GRID + 1, d = c + 1
      indices.set([a, c, b, b, c, d], k); k += 6
    }
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    geometry.setAttribute('uv', new BufferAttribute(uvs, 2))
    geometry.setIndex(new BufferAttribute(indices, 1))
    geometry.computeBoundingSphere()
    return geometry
  }

  private drop(key: string): void {
    const patch = this.patches.get(key)
    if (!patch) return
    if (patch.mesh) {
      this.options.scene.remove(patch.mesh)
      patch.mesh.geometry.dispose()
      ;(patch.mesh.material as MeshBasicMaterial).dispose()
    }
    patch.texture?.dispose()
    ;(patch.texture?.image as ImageBitmap | undefined)?.close?.()
    this.patches.delete(key)
  }

  /** Keeps at most MAX_LOADED tiles, dropping the ones unused longest; failed tiles are retried on a later update. */
  private evict(): void {
    for (const [key, patch] of this.patches) if (patch.failed && !this.wanted.has(key)) this.drop(key)
    if (this.patches.size <= MAX_LOADED) return
    const old = [...this.patches.values()].filter(patch => !patch.loading && !this.wanted.has(patch.key)).sort((a, b) => a.used - b.used)
    for (const patch of old.slice(0, this.patches.size - MAX_LOADED)) this.drop(patch.key)
  }
}
