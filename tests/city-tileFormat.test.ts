import { gzipSync } from 'node:zlib'
// @ts-expect-error untyped build tooling
import { encodeTile } from '../tooling/tileFormat.mjs'
// @ts-expect-error untyped build tooling
import { buildGround } from '../tooling/ground.mjs'
import { buildingAtTriangle, decodeTile, gunzip, isTileIndex, type TileBuilding } from '../src/city/tileFormat'
import { wgs84ToLv95 } from '../src/city/geo'

function sampleTile(vertices: number) {
  const positions: number[] = []
  const kinds: number[] = []
  for (let i = 0; i < vertices; i++) { positions.push(2683000 + i * 0.0071, 1247000 + (i % 7) * 1.5, 400 + (i % 11)); kinds.push(i % 3) }
  const indices: number[] = []
  for (let i = 0; i + 2 < vertices; i++) indices.push(i, i + 1, i + 2)
  return { positions, kinds, indices }
}

describe('tile format', () => {
  it.each([5, 70001])('round-trips %i vertices within 3 cm', async (count) => {
    const tile = sampleTile(count)
    const { bytes, tileBounds } = encodeTile(tile)
    const decoded = decodeTile(await gunzip(gzipSync(bytes)))
    expect(decoded.indexCount).toBe(tile.indices.length)
    expect(decoded.indices instanceof (decoded.vertexCount > 65535 ? Uint32Array : Uint16Array)).toBe(true)
    for (let i = 0; i < tile.indices.length; i += 97) {
      const source = tile.indices[i], target = decoded.indices[i]
      expect(decoded.kinds[target]).toBe(tile.kinds[source])
      for (let axis = 0; axis < 3; axis++) expect(Math.abs(decoded.origin[axis] + decoded.positions[target * 3 + axis] * decoded.step[axis] - tile.positions[source * 3 + axis])).toBeLessThan(0.03)
    }
    expect(tileBounds[0]).toBeCloseTo(2683000, 1)
  })

  it('shares equal vertices within a building, never across buildings, and keeps the triangle order', () => {
    const square = [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]
    const positions = [...square, ...square, ...square].map((value, i) => 2683000 + value + (i % 3 === 2 ? 400 : 0))
    const kinds = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    // Building A: two triangles over vertices 0-3 and a duplicate of the same square (4-7); building B: vertices 8-11.
    const indices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 8, 9, 10]
    const decoded = decodeTile(encodeTile({ positions, kinds, indices, buildings: [{ firstTriangle: 0 }, { firstTriangle: 3 }] }).bytes.buffer)
    expect(decoded.vertexCount).toBe(7)
    expect(Array.from(decoded.indices)).toEqual([0, 1, 2, 0, 2, 3, 0, 1, 2, 4, 5, 6])
    expect(Array.from(decoded.kinds)).toEqual([1, 1, 1, 1, 0, 0, 0])
  })

  it('still reads version 1 tiles', () => {
    const buffer = new ArrayBuffer(64 + 8 + 4 + 8)
    const view = new DataView(buffer)
    new Uint8Array(buffer).set([0x5a, 0x33, 0x44, 0x54])
    view.setUint32(4, 1, true); view.setUint32(8, 1, true); view.setUint32(12, 3, true); view.setUint32(16, 2, true)
    view.setFloat64(24, 2683000, true); view.setFloat32(48, 0.01, true)
    new Uint16Array(buffer, 64, 3).set([100, 0, 0])
    const tile = decodeTile(buffer)
    expect(tile.origin[0] + tile.positions[0] * tile.step[0]).toBeCloseTo(2683001, 3)
    expect(Array.from(tile.indices)).toEqual([0, 0, 0])
  })

  it('refuses a foreign file', () => {
    expect(() => decodeTile(new Uint8Array(64).buffer)).toThrow('Not a Zürich 3D tile')
  })

  it('finds the building of a triangle', () => {
    const buildings: TileBuilding[] = [['1', 0, 4, 0, 0, 0, 1, 1, 1], ['2', 4, 2, 0, 0, 0, 1, 1, 1], [null, 6, 10, 0, 0, 0, 1, 1, 1]]
    expect(buildingAtTriangle(buildings, 0)?.[0]).toBe('1')
    expect(buildingAtTriangle(buildings, 5)?.[0]).toBe('2')
    expect(buildingAtTriangle(buildings, 15)?.[0]).toBeNull()
    expect(buildingAtTriangle(buildings, 16)).toBeNull()
  })

  it('recognizes a model index', () => {
    expect(isTileIndex({ format: 'zurich3d-tiles', version: 1, tiles: [], bounds: [] })).toBe(true)
    expect(isTileIndex({ format: 'zurich3d-tiles', version: 2, tiles: [], bounds: [] })).toBe(true)
    expect(isTileIndex({ format: 'zurich3d-tiles', version: 3, tiles: [], bounds: [] })).toBe(false)
    expect(isTileIndex({ format: 'other', version: 1, tiles: [], bounds: [] })).toBe(false)
  })
})

describe('ground', () => {
  it('fills cells without buildings from their neighbours', () => {
    const ground = buildGround([0, 0, 400, 200, 0, 420], [0, 0, 0, 200, 0, 0], 50)
    expect(ground.columns).toBe(5)
    expect(ground.heights[0]).toBe(400)
    expect(ground.heights[4]).toBe(420)
    expect(ground.heights[2]).toBeGreaterThan(400)
    expect(ground.heights[2]).toBeLessThan(420)
  })

  it('leaves cells far from every building without ground', () => {
    const ground = buildGround([0, 0, 400], [0, 0, 0, 1000, 0, 0], 50, 3)
    expect(ground.heights[3]).toBe(400)
    expect(Number.isNaN(ground.heights[4])).toBe(true)
  })
})

describe('coordinates', () => {
  it('places Zürich HB in LV95', () => {
    const [east, north] = wgs84ToLv95(47.37818, 8.54019)
    expect(Math.abs(east - 2683140)).toBeLessThan(150)
    expect(Math.abs(north - 1248100)).toBeLessThan(150)
  })
})
