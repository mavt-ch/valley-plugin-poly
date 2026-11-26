// The packaged city model lives in runtime/assets/model/ as one classic script per model file (26 Nov): the plugin UI
// loads its own package's assets as scripts, which also works when the realm's Poly package is a symbolic link, while
// storage grants never traverse one. Each script hands its file to the UI as base64: valleyPolyModel("<path>","<base64>").
// The UI half is src/city/modelAssets.ts; both use the same callback name and file names.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'

export const MODEL_CALLBACK = 'valleyPolyModel'
const SCRIPT = /^valleyPolyModel\(("[^"\\]*"),"([A-Za-z0-9+/=]*)"\)\n?$/

export const assetName = (path) => `${path}.js`

export function encodeModelAsset(path, bytes) {
  return `${MODEL_CALLBACK}(${JSON.stringify(path)},"${Buffer.from(bytes).toString('base64')}")\n`
}

export function decodeModelAsset(text, path) {
  const match = SCRIPT.exec(text)
  if (!match || JSON.parse(match[1]) !== path) throw new Error(`${path}: not a packaged model file`)
  return Buffer.from(match[2], 'base64')
}

export const hasModelAssets = (dir) => existsSync(join(dir, assetName('index.json')))

export const readModelAsset = (dir, path) => decodeModelAsset(readFileSync(join(dir, assetName(path)), 'utf8'), path)

/** Packs a converted model folder (index.json, ground.bin, tiles/) into the script files of `target`. */
export function packModel(source, target) {
  let files = 0
  const walk = (folder) => {
    for (const entry of readdirSync(folder, { withFileTypes: true })) {
      const file = join(folder, entry.name)
      if (entry.isDirectory()) { walk(file); continue }
      if (!entry.isFile()) continue
      const path = relative(source, file).split(sep).join('/')
      const out = join(target, assetName(path))
      mkdirSync(dirname(out), { recursive: true })
      writeFileSync(out, encodeModelAsset(path, readFileSync(file)))
      files++
    }
  }
  walk(source)
  return files
}
