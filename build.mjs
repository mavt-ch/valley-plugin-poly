import { constants, existsSync } from 'node:fs'
import { cp } from 'node:fs/promises'
import path from 'node:path'
import { build } from 'esbuild'

/**
 * The campus map's 2D engine (MapLibre) is bundled on its own into `runtime/assets/campus-map.js` and
 * loaded into the page's document when the map opens, so the panel's bundle stays small and MapLibre
 * runs in the realm whose window and document it draws in.
 *
 * The 3D city model ships in the package as `runtime/assets/model/`, one script per model file (written by
 * `npm run update-model`, see `tooling/modelAssets.mjs`). The build replaces `runtime/`, so the model is carried over
 * into the new runtime (an APFS clone where possible).
 */
export default async function ({ root, outDir }) {
  await build({
    absWorkingDir: root, entryPoints: [path.join(root, 'src/campus/mapIsland.ts')], outfile: path.join(outDir, 'assets/campus-map.js'),
    bundle: true, format: 'esm', platform: 'browser', target: 'es2022', conditions: ['production'], minify: true, legalComments: 'none',
    logLevel: 'silent', loader: { '.css': 'text' }
  })
  const model = path.join(root, 'runtime', 'assets', 'model')
  if (existsSync(path.join(model, 'index.json.js'))) await cp(model, path.join(outDir, 'assets', 'model'), { recursive: true, mode: constants.COPYFILE_FICLONE })
  else console.warn('runtime/assets/model/ has no city model: run `npm run update-model` before publishing')
  return {}
}
