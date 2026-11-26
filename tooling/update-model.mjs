#!/usr/bin/env node
// Downloads the newest Stadt Zürich LoD2 CityGML when it is newer than the installed model, converts it and installs it
// into the package's runtime/assets/model, packed into scripts (tooling/modelAssets.mjs; shipped with the plugin,
// `npm run build` keeps it) or, with --realm, as plain files into
// <realm>/.valley/plugins/data/poly/model, which that realm then reads instead. An installed model is kept beside it as model.previous-<date>.
// Usage: node tooling/update-model.mjs [--realm <realm folder>] [--force] [--zip <already downloaded LoD2_CityGML.zip>]
import { spawnSync } from 'node:child_process'
import { createWriteStream, existsSync, mkdtempSync, readFileSync, renameSync, rmdirSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { fileURLToPath } from 'node:url'
import { hasModelAssets, packModel, readModelAsset } from './modelAssets.mjs'

export const SOURCE_URL = 'https://www.ogd.stadt-zuerich.ch/geoportal_data_static/LoD2_CityGML.zip'
const args = process.argv.slice(2)
const option = (name) => { const at = args.indexOf(name); return at >= 0 ? args[at + 1] : undefined }
const realm = option('--realm')
if (args.includes('--realm') && !realm) { console.error('Usage: node tooling/update-model.mjs [--realm <realm folder>] [--force] [--zip <LoD2_CityGML.zip>]'); process.exit(2) }
const config = realm ? join(resolve(realm), '.valley') : null
if (config && !existsSync(config)) { console.error(`${realm} is not a realm: it has no .valley folder`); process.exit(2) }
const target = config ? join(config, 'plugins', 'data', 'poly', 'model') : join(dirname(fileURLToPath(import.meta.url)), '..', 'runtime', 'assets', 'model')
const installed = config
  ? existsSync(join(target, 'index.json')) ? JSON.parse(readFileSync(join(target, 'index.json'), 'utf8')) : null
  : hasModelAssets(target) ? JSON.parse(readModelAsset(target, 'index.json').toString('utf8')) : null

const head = await fetch(SOURCE_URL, { method: 'HEAD' })
if (!head.ok) throw new Error(`The model is not available: HTTP ${head.status}`)
const modified = head.headers.get('last-modified')
const size = Number(head.headers.get('content-length') ?? 0)
console.log(`Newest model: ${modified ?? 'unknown date'}, ${(size / 1e6).toFixed(0)} MB`)
if (!args.includes('--force') && installed?.source?.modified && modified && Date.parse(installed.source.modified) >= Date.parse(modified)) {
  console.log(`The installed model (${installed.source.modified}) is current.`)
  process.exit(0)
}

const work = mkdtempSync(join(tmpdir(), 'zurich3d-'))
let zip = option('--zip')
const downloading = !zip
if (!zip) {
  zip = join(work, 'LoD2_CityGML.zip')
  console.log(`Downloading to ${zip}`)
  const response = await fetch(SOURCE_URL)
  if (!response.ok || !response.body) throw new Error(`Download failed: HTTP ${response.status}`)
  await pipeline(Readable.fromWeb(response.body), createWriteStream(zip))
  if (size && statSync(zip).size !== size) throw new Error('The download is incomplete')
}
const date = modified ? new Date(modified).toISOString().slice(0, 10) : statSync(zip).mtime.toISOString().slice(0, 10)
const staging = `${target}.next`
if (existsSync(staging)) throw new Error(`${staging} exists from an earlier run; move it away first`)
const converter = join(dirname(fileURLToPath(import.meta.url)), 'convert-citygml.mjs')
// The packaged model is converted beside the download first, then packed into the staging folder.
const converted = config ? staging : join(work, 'model')
const result = spawnSync(process.execPath, ['--max-old-space-size=4096', converter, zip, converted, '--source-date', date, ...(modified ? ['--source-modified', modified] : [])], { stdio: 'inherit' })
if (result.status !== 0) throw new Error('The conversion failed')
if (!config) console.log(`Packed ${packModel(converted, staging)} model files into ${staging}`)
if (existsSync(target)) {
  // A packaged model is kept outside runtime/, which every build replaces and which the package ships whole.
  const previous = config ? `${target}.previous-${installed?.source?.date ?? 'unknown'}` : join(work, `model.previous-${installed?.source?.date ?? 'unknown'}`)
  if (existsSync(previous)) throw new Error(`${previous} exists; move it away first`)
  renameSync(target, previous)
  console.log(`Kept the previous model as ${previous}`)
}
renameSync(staging, target)
console.log(`Installed the model of ${date} in ${target}.`)
if (!config) console.log(`The unpacked model stays in ${converted}.`)
if (downloading) console.log(`The downloaded archive stays in ${work}.`)
else if (config && !existsSync(join(work, `model.previous-${installed?.source?.date ?? 'unknown'}`))) rmdirSync(work)
