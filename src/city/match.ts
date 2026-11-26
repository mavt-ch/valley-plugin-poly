/**
 * Which buildings of the city model belong to an ETH building, from their footprints. The two sources do not
 * cut buildings alike: ETH's outline can be one part of a larger model building, a model building can come in
 * several pieces, and the edges differ by a few metres. So a model building belongs to the outline when at
 * least `MIN_SHARE` of its footprint lies inside it, or when it covers at least `MIN_COVER` of the outline.
 * No runtime imports: `tooling/check-3d-match.mjs` runs this file in Node.
 */
import type { TileBuilding } from './tileFormat'

/** A polygon in LV95: outer ring, then holes; each point [east, north]. */
export type Lv95Polygon = [number, number][][]

export const MIN_SHARE = 0.5
export const MIN_COVER = 0.3
/** Square metres inside the outline below which a building only touches it. */
const MIN_INSIDE = 1
const SURFACE_ROOF = 1
const SURFACE_GROUND = 2

/** One tile's triangles: three vertex numbers each, the surface kind per vertex, and each vertex in LV95. */
export interface TileTriangles {
  indices: ArrayLike<number>
  kinds: ArrayLike<number>
  point(vertex: number): [number, number]
}

export interface Overlap {
  /** Part of the building's footprint that lies inside the outline, 0 to 1. */
  share: number
  /** Part of the outline that the building's footprint covers, 0 to 1. */
  cover: number
  /** Square metres of the footprint inside the outline. */
  inside: number
}

export interface Bounds { minX: number; minY: number; maxX: number; maxY: number }

export function boundsOfLv95(polygons: Lv95Polygon[]): Bounds | null {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const polygon of polygons) for (const [x, y] of polygon[0] ?? []) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y) }
  return Number.isFinite(minX) ? { minX, minY, maxX, maxY } : null
}

export const boundsOverlap = (a: Bounds, b: Bounds): boolean => a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY

export function insideLv95(point: [number, number], polygon: Lv95Polygon): boolean {
  let inside = false
  for (const ring of polygon) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j]
      if ((yi > point[1]) !== (yj > point[1]) && point[0] < ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi) inside = !inside
    }
  }
  return inside
}

function ringArea(ring: [number, number][]): number {
  let sum = 0
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) sum += (ring[j][0] - ring[i][0]) * (ring[j][1] + ring[i][1])
  return Math.abs(sum / 2)
}

const outlineArea = (polygons: Lv95Polygon[]) => polygons.reduce((sum, [outer, ...holes]) => sum + (outer ? ringArea(outer) - holes.reduce((all, hole) => all + ringArea(hole), 0) : 0), 0)

/**
 * The part of a triangle inside the polygons, 0 to 1: the centres of the equal small triangles it divides
 * into (about 2 m² each) are tested.
 */
function insidePart(a: [number, number], b: [number, number], c: [number, number], area: number, polygons: Lv95Polygon[]): number {
  const steps = Math.min(Math.max(Math.ceil(Math.sqrt(area / 2)), 1), 24)
  let hit = 0
  for (let i = 0; i < steps; i++) for (let j = 0; j < steps - i; j++) {
    // The upright small triangle of this cell and, except on the long edge, the inverted one beside it.
    for (let half = 1; half <= (j < steps - i - 1 ? 2 : 1); half++) {
      const u = (i + half / 3) / steps, v = (j + half / 3) / steps
      const point: [number, number] = [a[0] + (b[0] - a[0]) * u + (c[0] - a[0]) * v, a[1] + (b[1] - a[1]) * u + (c[1] - a[1]) * v]
      if (polygons.some(polygon => insideLv95(point, polygon))) hit++
    }
  }
  return hit / (steps * steps)
}

/** How a building's footprint (its ground surfaces, else its roofs) and the outline overlap. */
export function footprintOverlap(building: TileBuilding, tile: TileTriangles, polygons: Lv95Polygon[]): Overlap {
  const box = boundsOfLv95(polygons)
  const total = outlineArea(polygons)
  const footprint = [0, 0, 0], inside = [0, 0, 0]
  for (let triangle = building[1]; triangle < building[1] + building[2]; triangle++) {
    const first = tile.indices[triangle * 3]
    const kind = tile.kinds[first]
    if (kind !== SURFACE_ROOF && kind !== SURFACE_GROUND) continue
    const a = tile.point(first), b = tile.point(tile.indices[triangle * 3 + 1]), c = tile.point(tile.indices[triangle * 3 + 2])
    const area = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) / 2
    if (area < 0.01) continue
    footprint[kind] += area
    const reaches = box && boundsOverlap(box, { minX: Math.min(a[0], b[0], c[0]), minY: Math.min(a[1], b[1], c[1]), maxX: Math.max(a[0], b[0], c[0]), maxY: Math.max(a[1], b[1], c[1]) })
    if (reaches) inside[kind] += area * insidePart(a, b, c, area, polygons)
  }
  const kind = footprint[SURFACE_GROUND] > 0 ? SURFACE_GROUND : SURFACE_ROOF
  return { share: footprint[kind] ? inside[kind] / footprint[kind] : 0, cover: total ? inside[kind] / total : 0, inside: inside[kind] }
}

export const belongsTo = (overlap: Overlap): boolean => overlap.inside >= MIN_INSIDE && (overlap.share >= MIN_SHARE || overlap.cover >= MIN_COVER)

/** The buildings of one tile that belong to the outline's polygons; only those whose box reaches it are measured. */
export function buildingsInArea(buildings: TileBuilding[], tile: TileTriangles, polygons: Lv95Polygon[]): TileBuilding[] {
  const box = boundsOfLv95(polygons)
  if (!box) return []
  return buildings.filter(building => boundsOverlap(box, { minX: building[3], minY: building[4], maxX: building[6], maxY: building[7] })
    && belongsTo(footprintOverlap(building, tile, polygons)))
}
