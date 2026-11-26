import { describe, expect, it } from 'vitest'
import { buildingsInArea, footprintOverlap, insideLv95, type Lv95Polygon, type TileTriangles } from '../src/city/match'
import type { TileBuilding } from '../src/city/tileFormat'

const E = 2683000, N = 1247000
const ring = (points: [number, number][]): [number, number][] => [...points, points[0]].map(([x, y]) => [E + x, N + y])
const rect = (x0: number, y0: number, x1: number, y1: number): [number, number][] => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]

type Part = { rect: [number, number, number, number]; kind?: number }

/** A tile of invented buildings, each made of flat rectangles (two triangles each) of one surface kind. */
function tile(buildings: Record<string, Part[]>): { list: TileBuilding[]; triangles: TileTriangles } {
  const points: [number, number][] = [], kinds: number[] = [], indices: number[] = [], list: TileBuilding[] = []
  for (const [name, parts] of Object.entries(buildings)) {
    const first = indices.length / 3
    for (const { rect: [x0, y0, x1, y1], kind = 2 } of parts) {
      const base = points.length
      for (const [x, y] of rect(x0, y0, x1, y1)) { points.push([E + x, N + y]); kinds.push(kind) }
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3)
    }
    const xs = parts.flatMap(part => [part.rect[0], part.rect[2]]), ys = parts.flatMap(part => [part.rect[1], part.rect[3]])
    list.push([name, first, indices.length / 3 - first, E + Math.min(...xs), N + Math.min(...ys), 400, E + Math.max(...xs), N + Math.max(...ys), 420])
  }
  return { list, triangles: { indices, kinds, point: vertex => points[vertex] } }
}

const matched = (buildings: Record<string, Part[]>, outline: Lv95Polygon[]) => {
  const { list, triangles } = tile(buildings)
  return buildingsInArea(list, triangles, outline).map(building => building[0])
}

describe('3D building match', () => {
  it('tests points against LV95 polygons with holes', () => {
    const polygon = [ring(rect(0, 0, 10, 10)), ring(rect(4, 4, 6, 6))]
    expect(insideLv95([E + 2, N + 2], polygon)).toBe(true)
    expect(insideLv95([E + 5, N + 5], polygon)).toBe(false)
    expect(insideLv95([E + 12, N + 5], polygon)).toBe(false)
  })

  it('takes a building whose box centre lies outside its own comb-shaped outline', () => {
    // An L: the centre of its box (50, 50) is in the notch.
    const outline = [[ring([[0, 0], [100, 0], [100, 20], [20, 20], [20, 100], [0, 100]])]]
    expect(matched({ el: [{ rect: [0, 0, 100, 20] }, { rect: [0, 20, 20, 100] }] }, outline)).toEqual(['el'])
  })

  it('takes a larger building that the outline is one part of', () => {
    const outline = [[ring(rect(0, 0, 30, 30))]]
    const { list, triangles } = tile({ block: [{ rect: [0, 0, 150, 30] }] })
    const overlap = footprintOverlap(list[0], triangles, outline)
    expect(overlap.share).toBeCloseTo(0.2, 1)
    // Sampled, so a few percent either way.
    expect(overlap.cover).toBeCloseTo(1, 1)
    expect(buildingsInArea(list, triangles, outline)).toEqual(list)
  })

  it('takes every piece of a building that comes in several, and the ones a few metres off', () => {
    const outline = [[ring(rect(0, 0, 100, 40))]]
    expect(matched({
      west: [{ rect: [0, 0, 50, 40] }], east: [{ rect: [50, 0, 100, 40] }], annex: [{ rect: [92, 30, 104, 40] }],
    }, outline)).toEqual(['west', 'east', 'annex'])
  })

  it('leaves neighbours that only overlap the edge, and a house in a courtyard', () => {
    const outline = [[ring(rect(0, 0, 100, 100)), ring(rect(30, 30, 70, 70))]]
    expect(matched({
      own: [{ rect: [0, 0, 100, 30] }],
      neighbour: [{ rect: [97, 0, 140, 100] }],
      courtyard: [{ rect: [32, 32, 68, 68] }],
      far: [{ rect: [200, 200, 220, 220] }],
    }, outline)).toEqual(['own'])
    expect(matched({ own: [{ rect: [0, 0, 100, 30] }] }, [])).toEqual([])
  })

  it('measures ground surfaces, falling back to roofs, and ignores walls', () => {
    const outline = [[ring(rect(0, 0, 20, 20))]]
    expect(matched({
      // The roof overhangs far beyond the outline; the ground surface decides.
      grounded: [{ rect: [0, 0, 20, 20], kind: 2 }, { rect: [0, 0, 200, 20], kind: 1 }],
      roofed: [{ rect: [2, 2, 18, 18], kind: 1 }],
      walls: [{ rect: [2, 2, 18, 18], kind: 0 }],
    }, outline)).toEqual(['grounded', 'roofed'])
  })
})
