// Z3DT tile layout (little endian), read by src/city/tileFormat.ts. Version 2 (26 Nov) is small enough to ship in the package:
// 0 'Z3DT' | 4 u32 version 2 | 8 u32 vertexCount | 12 u32 indexCount | 16 u32 indexBytes (2|4, decoded) | 20 u32 codeBytes
// 24 f64 originX | 32 f64 originY | 40 f64 originZ | 48 f32 stepX | 52 f32 stepY | 56 f32 stepZ | 60 u32 0
// 64 per axis E, N, H: the zigzag delta of each quantized coordinate to the previous vertex (u16), low bytes then high bytes
// | u8[vertexCount] surface kind (0 wall, 1 roof, 2 ground) | codeBytes of varint index codes (newest vertex − index; 0 = next new vertex).
// Equal vertices of one building are shared (never across buildings, so per-vertex building colours stay exact) and numbered by
// first use; triangle order is kept, so the buildings' triangle ranges stay valid. Coordinates are quantized to at least STEP.
export const TILE_SIZE = 500
export const HEADER_BYTES = 64

export function tileKey(tx, ty) {
  return `${tx}_${ty}`
}

export const STEP = 0.05

export function encodeTile(tile) {
  const min = [Infinity, Infinity, Infinity]
  const max = [-Infinity, -Infinity, -Infinity]
  for (let i = 0; i < tile.positions.length; i++) {
    const axis = i % 3
    const value = tile.positions[i]
    if (value < min[axis]) min[axis] = value
    if (value > max[axis]) max[axis] = value
  }
  // At most 32767 steps per axis, so a delta between two vertices fits a 16-bit zigzag value.
  const step = [0, 1, 2].map((axis) => Math.fround(Math.max((max[axis] - min[axis]) / 32767, STEP)))
  const starts = new Set((tile.buildings ?? []).map((building) => building.firstTriangle * 3))
  const quantized = (index, axis) => Math.round((tile.positions[index * 3 + axis] - min[axis]) / step[axis])
  const vertices = []
  const codes = []
  let shared = new Map()
  let newest = 0
  for (let i = 0; i < tile.indices.length; i++) {
    if (starts.has(i)) shared = new Map()
    const source = tile.indices[i]
    const x = quantized(source, 0), y = quantized(source, 1), z = quantized(source, 2), kind = tile.kinds[source]
    const key = ((x * 32768 + y) * 32768 + z) * 4 + kind
    let vertex = shared.get(key)
    if (vertex === undefined) { vertex = vertices.length / 4; shared.set(key, vertex); vertices.push(x, y, z, kind) }
    codes.push(newest - vertex)
    if (vertex === newest) newest++
  }
  const vertexCount = vertices.length / 4
  const indexCount = tile.indices.length
  const varints = []
  for (const code of codes) {
    let value = code
    while (value >= 128) { varints.push((value & 127) | 128); value >>>= 7 }
    varints.push(value)
  }
  const bytes = new Uint8Array(HEADER_BYTES + vertexCount * 7 + varints.length)
  const view = new DataView(bytes.buffer)
  bytes.set([0x5a, 0x33, 0x44, 0x54])
  view.setUint32(4, 2, true)
  view.setUint32(8, vertexCount, true)
  view.setUint32(12, indexCount, true)
  view.setUint32(16, vertexCount > 65535 ? 4 : 2, true)
  view.setUint32(20, varints.length, true)
  view.setFloat64(24, min[0], true)
  view.setFloat64(32, min[1], true)
  view.setFloat64(40, min[2], true)
  view.setFloat32(48, step[0], true)
  view.setFloat32(52, step[1], true)
  view.setFloat32(56, step[2], true)
  let at = HEADER_BYTES
  for (let axis = 0; axis < 3; axis++) {
    let previous = 0
    for (let k = 0; k < vertexCount; k++) {
      const value = vertices[k * 4 + axis]
      const delta = value - previous
      previous = value
      const zigzag = ((delta << 1) ^ (delta >> 31)) & 0xffff
      bytes[at + k] = zigzag & 255
      bytes[at + vertexCount + k] = zigzag >> 8
    }
    at += vertexCount * 2
  }
  for (let k = 0; k < vertexCount; k++) bytes[at++] = vertices[k * 4 + 3]
  bytes.set(varints, at)
  const round = (value) => Math.round(value * 100) / 100
  return { bytes, tileBounds: [...min, ...max].map(round) }
}
