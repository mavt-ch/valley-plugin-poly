#!/usr/bin/env node
// Converts the Stadt Zürich LoD2 CityGML (ganze_Stadt.gml, LV95 / LN02) into Zürich 3D tiles.
// Usage: node tooling/convert-citygml.mjs <LoD2_CityGML.zip | ganze_Stadt.gml> <output-folder> [--source-date YYYY-MM-DD] [--source-modified <HTTP date>]
import { spawn } from 'node:child_process'
import { createReadStream, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { createInterface } from 'node:readline'
import { gzipSync } from 'node:zlib'
import earcut from 'earcut'
import { TILE_SIZE, encodeTile, tileKey } from './tileFormat.mjs'
import { GROUND_CELL, buildGround } from './ground.mjs'

const [input, output, ...rest] = process.argv.slice(2)
if (!input || !output) {
  console.error('Usage: node tooling/convert-citygml.mjs <LoD2_CityGML.zip | ganze_Stadt.gml> <output-folder> [--source-date YYYY-MM-DD]')
  process.exit(2)
}
const sourceDateArg = rest.indexOf('--source-date')
const sourceDate = sourceDateArg >= 0 ? rest[sourceDateArg + 1] : statSync(input).mtime.toISOString().slice(0, 10)
const modifiedArg = rest.indexOf('--source-modified')
const sourceModified = modifiedArg >= 0 ? rest[modifiedArg + 1] : null

const KIND = { WallSurface: 0, RoofSurface: 1, GroundSurface: 2, ClosureSurface: 0 }
const tiles = new Map()
const footprints = []
let building = null
let kind = 0
let rings = []
let pos = null
let awaitEgid = false
let stats = { buildings: 0, polygons: 0, triangles: 0, skipped: 0 }

function tileFor(x, y) {
  const tx = Math.floor(x / TILE_SIZE)
  const ty = Math.floor(y / TILE_SIZE)
  const key = tileKey(tx, ty)
  let tile = tiles.get(key)
  if (!tile) {
    tile = { tx, ty, positions: [], kinds: [], indices: [], buildings: [] }
    tiles.set(key, tile)
  }
  return tile
}

function parseCoords(text) {
  const values = text.trim().split(/\s+/).map(Number)
  const points = []
  for (let i = 0; i + 2 < values.length; i += 3) points.push([values[i], values[i + 1], values[i + 2]])
  if (points.length > 1) {
    const a = points[0]
    const b = points[points.length - 1]
    if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) points.pop()
  }
  return points
}

function triangulate(polygonRings) {
  const outer = polygonRings[0]
  if (!outer || outer.length < 3) return null
  let nx = 0, ny = 0, nz = 0
  for (let i = 0; i < outer.length; i++) {
    const [x1, y1, z1] = outer[i]
    const [x2, y2, z2] = outer[(i + 1) % outer.length]
    nx += (y1 - y2) * (z1 + z2)
    ny += (z1 - z2) * (x1 + x2)
    nz += (x1 - x2) * (y1 + y2)
  }
  const ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz)
  if (ax + ay + az < 1e-9) return null
  const [u, v] = az >= ax && az >= ay ? [0, 1] : ax >= ay ? [1, 2] : [0, 2]
  const flat = []
  const holes = []
  const points = []
  for (const ring of polygonRings) {
    if (ring.length < 3) continue
    if (points.length) holes.push(points.length)
    for (const p of ring) {
      flat.push(p[u], p[v])
      points.push(p)
    }
  }
  const triangles = earcut(flat, holes.length ? holes : undefined, 2)
  return triangles.length ? { points, triangles } : null
}

function flushPolygon() {
  if (!building || !rings.length) { rings = []; return }
  const result = triangulate(rings)
  rings = []
  stats.polygons++
  if (!result) { stats.skipped++; return }
  building.polygons.push({ kind, ...result })
}

function flushBuilding() {
  const b = building
  building = null
  if (!b || !b.polygons.length) return
  let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
  for (const polygon of b.polygons) for (const [x, y, z] of polygon.points) {
    if (x < minX) minX = x; if (x > maxX) maxX = x
    if (y < minY) minY = y; if (y > maxY) maxY = y
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z
  }
  const tile = tileFor((minX + maxX) / 2, (minY + maxY) / 2)
  footprints.push((minX + maxX) / 2, (minY + maxY) / 2, minZ)
  const firstTriangle = tile.indices.length / 3
  for (const polygon of b.polygons) {
    const base = tile.positions.length / 3
    for (const p of polygon.points) {
      tile.positions.push(p[0], p[1], p[2])
      tile.kinds.push(polygon.kind)
    }
    for (const index of polygon.triangles) tile.indices.push(base + index)
  }
  const triangleCount = tile.indices.length / 3 - firstTriangle
  stats.triangles += triangleCount
  stats.buildings++
  tile.buildings.push({
    egid: b.egid,
    firstTriangle,
    triangleCount,
    bounds: [minX, minY, minZ, maxX, maxY, maxZ].map((value) => Math.round(value * 100) / 100),
  })
}

function openInput() {
  if (input.toLowerCase().endsWith('.zip')) {
    const child = spawn('unzip', ['-p', input], { stdio: ['ignore', 'pipe', 'inherit'] })
    return child.stdout
  }
  return createReadStream(input)
}

const lines = createInterface({ input: openInput(), crlfDelay: Infinity })
for await (const line of lines) {
  if (pos !== null) {
    const end = line.indexOf('</gml:posList>')
    pos += ' ' + (end >= 0 ? line.slice(0, end) : line)
    if (end >= 0) { rings.push(parseCoords(pos)); pos = null }
    continue
  }
  if (line.includes('<bldg:Building ') || line.includes('<bldg:Building>')) {
    flushBuilding()
    building = { egid: null, polygons: [] }
    continue
  }
  if (line.includes('</bldg:Building>')) { flushBuilding(); continue }
  if (!building) continue
  const surface = line.match(/<bldg:(WallSurface|RoofSurface|GroundSurface|ClosureSurface)[ >]/)
  if (surface) { kind = KIND[surface[1]]; continue }
  if (line.includes('<informationSystem>EGID</informationSystem>')) { awaitEgid = true; continue }
  if (awaitEgid) {
    const name = line.match(/<name>([^<]*)<\/name>/)
    if (name) { if (!building.egid) building.egid = name[1]; awaitEgid = false }
    continue
  }
  const start = line.indexOf('<gml:posList')
  if (start >= 0) {
    const open = line.indexOf('>', start) + 1
    const end = line.indexOf('</gml:posList>', open)
    if (end >= 0) rings.push(parseCoords(line.slice(open, end)))
    else pos = line.slice(open)
    continue
  }
  if (line.includes('</gml:Polygon>')) flushPolygon()
}
flushBuilding()

mkdirSync(join(output, 'tiles'), { recursive: true })
const index = { format: 'zurich3d-tiles', version: 2, tileSize: TILE_SIZE, crs: 'EPSG:2056+5728', source: { name: '3D-Stadtmodell Stadt Zürich, Dachmodell LoD2 (CityGML)', url: 'https://www.ogd.stadt-zuerich.ch/geoportal_data_static/LoD2_CityGML.zip', date: sourceDate, modified: sourceModified, convertedAt: new Date().toISOString(), licence: 'Open Government Data Stadt Zürich, free of use restrictions' }, bounds: null, tiles: [] }
let bounds = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity]
let totalBytes = 0
for (const [key, tile] of [...tiles.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  const { bytes, tileBounds } = encodeTile(tile)
  const packed = gzipSync(bytes, { level: 9 })
  writeFileSync(join(output, 'tiles', `${key}.bin.gz`), packed)
  writeFileSync(join(output, 'tiles', `${key}.json`), JSON.stringify(tile.buildings.map((b) => [b.egid, b.firstTriangle, b.triangleCount, ...b.bounds])))
  totalBytes += packed.length
  for (let i = 0; i < 3; i++) { bounds[i] = Math.min(bounds[i], tileBounds[i]); bounds[i + 3] = Math.max(bounds[i + 3], tileBounds[i + 3]) }
  index.tiles.push({ key, x: tile.tx, y: tile.ty, bounds: tileBounds, buildings: tile.buildings.length, triangles: tile.indices.length / 3, bytes: packed.length })
}
index.bounds = bounds
const ground = buildGround(footprints, bounds, GROUND_CELL)
writeFileSync(join(output, 'ground.bin'), Buffer.from(ground.heights.buffer))
index.ground = { file: 'ground.bin', cell: GROUND_CELL, originX: ground.originX, originY: ground.originY, columns: ground.columns, rows: ground.rows, min: ground.min, max: ground.max, source: 'Approximated from the ground height of building footprints' }
index.stats = { ...stats, tiles: index.tiles.length, bytes: totalBytes }
writeFileSync(join(output, 'index.json'), JSON.stringify(index, null, 1))
console.log(JSON.stringify(index.stats))
