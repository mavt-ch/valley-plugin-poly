#!/usr/bin/env node
// Runs the 3D view's building match (src/city/match.ts) for every ETH building against the packaged city model
// (runtime/assets/model) or a realm's installed one and lists the buildings of the model area that match nothing. Outlines are
// read from ETH's Facilities service, or from a saved GeoJSON of it.
// Usage: node tooling/check-3d-match.mjs [--realm <realm folder>] [--outlines <facilities.geojson>] [--code HIL,HG]
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { FACILITIES_URL, PAGE_SIZE, exceeded, parseOutlines, query } from '../src/campus/services.ts'
import { wgs84ToLv95 } from '../src/city/geo.ts'
import { belongsTo, boundsOfLv95, boundsOverlap, footprintOverlap } from '../src/city/match.ts'
import { decodeTile } from '../src/city/tileFormat.ts'
import { hasModelAssets, readModelAsset } from './modelAssets.mjs'

const args = process.argv.slice(2)
const option = (name) => { const at = args.indexOf(name); return at >= 0 ? args[at + 1] : undefined }
const realm = option('--realm')
const model = realm ? join(resolve(realm), '.valley', 'plugins', 'data', 'poly', 'model') : fileURLToPath(new URL('../runtime/assets/model', import.meta.url))
// A realm-installed model is plain files; the packaged one is packed into scripts.
const readModel = realm ? (path) => readFileSync(join(model, path)) : (path) => readModelAsset(model, path)
if (realm ? !existsSync(join(model, 'index.json')) : !hasModelAssets(model)) { console.error('Usage: node tooling/check-3d-match.mjs [--realm <realm with an installed model>] [--outlines <facilities.geojson>] [--code HIL,HG]'); process.exit(2) }

async function readOutlines() {
  const file = option('--outlines')
  if (file) return parseOutlines(JSON.parse(readFileSync(file, 'utf8')))
  const result = []
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const response = await fetch(query(FACILITIES_URL, { where: '1=1', outFields: 'NAME', geometryPrecision: '7', orderByFields: 'OBJECTID', resultOffset: String(offset), resultRecordCount: String(PAGE_SIZE) }))
    if (!response.ok) throw new Error(`ETH's Facilities service answered HTTP ${response.status}`)
    const body = await response.json()
    result.push(...parseOutlines(body))
    if (!exceeded(body)) return result
  }
}

const index = JSON.parse(readModel('index.json').toString('utf8'))
const buildings = JSON.parse(readFileSync(new URL('../src/campus/buildings.json', import.meta.url), 'utf8'))
const outlines = await readOutlines()
const only = option('--code')?.split(',')
const tiles = new Map()

function readTile(key) {
  let tile = tiles.get(key)
  if (!tile) {
    const packed = gunzipSync(readModel(`tiles/${key}.bin.gz`))
    const data = decodeTile(packed.buffer.slice(packed.byteOffset, packed.byteOffset + packed.byteLength))
    const point = (vertex) => [data.origin[0] + data.positions[vertex * 3] * data.step[0], data.origin[1] + data.positions[vertex * 3 + 1] * data.step[1]]
    tile = { buildings: JSON.parse(readModel(`tiles/${key}.json`).toString('utf8')), triangles: { indices: data.indices, kinds: data.kinds, point } }
    tiles.set(key, tile)
  }
  return tile
}

const outside = [], noOutline = [], unmatched = [], partly = []
let matched = 0
for (const { code } of buildings) {
  if (only && !only.includes(code)) continue
  const polygons = outlines.filter(outline => outline.code === code).flatMap(outline => outline.polygons)
    .map(polygon => polygon.map(ring => ring.map(([longitude, latitude]) => wgs84ToLv95(latitude, longitude))))
  const box = boundsOfLv95(polygons)
  if (!box) { noOutline.push(code); continue }
  const reaching = index.tiles.filter(entry => boundsOverlap(box, { minX: entry.bounds[0], minY: entry.bounds[1], maxX: entry.bounds[3], maxY: entry.bounds[4] }))
  if (!reaching.length) { outside.push(code); continue }
  const found = []
  for (const entry of reaching) {
    const tile = readTile(entry.key)
    for (const building of tile.buildings) {
      if (!boundsOverlap(box, { minX: building[3], minY: building[4], maxX: building[6], maxY: building[7] })) continue
      const overlap = footprintOverlap(building, tile.triangles, polygons)
      if (belongsTo(overlap)) found.push({ building, overlap })
    }
  }
  if (only) console.log(code, found.length ? found.map(({ building, overlap }) => `${building[0] ?? '—'} share ${Math.round(overlap.share * 100)} % cover ${Math.round(overlap.cover * 100)} % base ${building[5]}`).join(' | ') : 'no match')
  if (!found.length) { unmatched.push(code); continue }
  matched++
  const cover = found.reduce((sum, item) => sum + item.overlap.cover, 0)
  if (cover < 0.6) partly.push(`${code} ${Math.round(cover * 100)} %`)
}

console.log(`Model of ${index.source.date}: ${matched + unmatched.length} ETH buildings in the model area, ${matched} matched, ${unmatched.length} without a model building.`)
if (unmatched.length) console.log(`Without a match (floors are drawn on the ground): ${unmatched.join(' ')}`)
if (partly.length) console.log(`Matched buildings cover less than 60 % of the outline: ${partly.join(', ')}`)
console.log(`Outside the model: ${outside.length}${noOutline.length ? `; without an outline: ${noOutline.join(' ')}` : ''}`)
