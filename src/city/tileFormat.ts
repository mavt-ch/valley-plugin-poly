export const HEADER_BYTES = 64

export interface DecodedTile {
  vertexCount: number
  indexCount: number
  origin: [number, number, number]
  step: [number, number, number]
  positions: Uint16Array
  kinds: Uint8Array
  indices: Uint16Array | Uint32Array
}

export type TileBuilding = [egid: string | null, firstTriangle: number, triangleCount: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number]

export interface TileEntry {
  key: string
  x: number
  y: number
  bounds: [number, number, number, number, number, number]
  buildings: number
  triangles: number
  bytes: number
}

export interface TileIndex {
  format: 'zurich3d-tiles'
  version: 1 | 2
  tileSize: number
  crs: string
  source: { name: string; url: string; date: string; licence: string }
  bounds: [number, number, number, number, number, number]
  tiles: TileEntry[]
  stats: { buildings: number; polygons: number; triangles: number; tiles: number; bytes: number }
}

export function decodeTile(buffer: ArrayBuffer): DecodedTile {
  const view = new DataView(buffer)
  const magic = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3))
  if (magic !== 'Z3DT') throw new Error('Not a Zürich 3D tile')
  const version = view.getUint32(4, true)
  if (version !== 1 && version !== 2) throw new Error(`Unsupported tile version ${version}`)
  const vertexCount = view.getUint32(8, true)
  const indexCount = view.getUint32(12, true)
  const indexBytes = view.getUint32(16, true)
  const origin: [number, number, number] = [view.getFloat64(24, true), view.getFloat64(32, true), view.getFloat64(40, true)]
  const step: [number, number, number] = [view.getFloat32(48, true), view.getFloat32(52, true), view.getFloat32(56, true)]
  if (version === 2) return { vertexCount, indexCount, origin, step, ...decodeV2(new Uint8Array(buffer), vertexCount, indexCount, indexBytes, view.getUint32(20, true)) }
  const positions = new Uint16Array(buffer, HEADER_BYTES, vertexCount * 3)
  const positionBytes = Math.ceil((vertexCount * 6) / 4) * 4
  const kinds = new Uint8Array(buffer, HEADER_BYTES + positionBytes, vertexCount)
  const indexOffset = HEADER_BYTES + positionBytes + Math.ceil(vertexCount / 4) * 4
  const indices = indexBytes === 4 ? new Uint32Array(buffer, indexOffset, indexCount) : new Uint16Array(buffer, indexOffset, indexCount)
  return { vertexCount, indexCount, origin, step, positions, kinds, indices }
}

// Version 2 (tooling/tileFormat.mjs): zigzag deltas per axis in low/high byte planes, the kinds, then varint index codes.
function decodeV2(bytes: Uint8Array, vertexCount: number, indexCount: number, indexBytes: number, codeBytes: number): Pick<DecodedTile, 'positions' | 'kinds' | 'indices'> {
  if (bytes.length < HEADER_BYTES + vertexCount * 7 + codeBytes) throw new Error('Truncated Zürich 3D tile')
  const positions = new Uint16Array(vertexCount * 3)
  let at = HEADER_BYTES
  for (let axis = 0; axis < 3; axis++) {
    let value = 0
    const high = at + vertexCount
    for (let k = 0, out = axis; k < vertexCount; k++, out += 3) {
      const zigzag = bytes[at + k] | (bytes[high + k] << 8)
      value = (value + ((zigzag >>> 1) ^ -(zigzag & 1))) & 0xffff
      positions[out] = value
    }
    at += vertexCount * 2
  }
  const kinds = bytes.slice(at, at + vertexCount)
  at += vertexCount
  const end = at + codeBytes
  const indices = indexBytes === 4 ? new Uint32Array(indexCount) : new Uint16Array(indexCount)
  let newest = 0
  for (let i = 0; i < indexCount; i++) {
    if (at >= end) throw new Error('Truncated Zürich 3D tile')
    let byte = bytes[at++]
    let code = byte & 127
    for (let scale = 128; byte >= 128; scale *= 128) {
      if (at >= end) throw new Error('Truncated Zürich 3D tile')
      byte = bytes[at++]
      code += (byte & 127) * scale
    }
    const vertex = newest - code
    if (vertex < 0 || vertex >= vertexCount) throw new Error('Invalid Zürich 3D tile')
    indices[i] = vertex
    if (code === 0) newest++
  }
  return { positions, kinds, indices }
}

export function isTileIndex(value: unknown): value is TileIndex {
  const index = value as TileIndex | null
  return !!index && index.format === 'zurich3d-tiles' && (index.version === 1 || index.version === 2) && Array.isArray(index.tiles) && Array.isArray(index.bounds)
}

export function buildingAtTriangle(buildings: TileBuilding[], triangle: number): TileBuilding | null {
  let low = 0
  let high = buildings.length - 1
  while (low <= high) {
    const middle = (low + high) >> 1
    const building = buildings[middle]
    if (triangle < building[1]) high = middle - 1
    else if (triangle >= building[1] + building[2]) low = middle + 1
    else return building
  }
  return null
}

export async function gunzip(bytes: ArrayBuffer | Uint8Array): Promise<ArrayBuffer> {
  const body = new Response(bytes as BodyInit).body
  if (!body) throw new Error('Empty tile')
  return new Response(body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer()
}
