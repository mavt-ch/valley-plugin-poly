import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { ValleyPluginApi } from '@valley/plugin-sdk'
// @ts-expect-error The tooling is plain JavaScript.
import { MODEL_CALLBACK as TOOLING_CALLBACK, decodeModelAsset, encodeModelAsset, packModel, readModelAsset } from '../tooling/modelAssets.mjs'
import { MODEL_CALLBACK, ModelAssetMissing, decodeBase64, readPackagedModelFile } from '../src/city/modelAssets'
import { initRuntime } from '../src/city/runtime'

const bytes = new Uint8Array([0, 1, 2, 250, 255, 31, 139, 8])

/** A document whose scripts "load" from a map of published assets, run in a scope where the callback is the window's. */
function fakeDocument(published: Map<string, string>) {
  const view: Record<string, unknown> = {}
  const appended: string[] = []
  const doc = {
    defaultView: view,
    head: {
      appendChild(script: { src: string; onload: () => void; onerror: () => void }) {
        appended.push(script.src)
        const text = published.get(script.src)
        queueMicrotask(() => {
          if (text === undefined) { script.onerror(); return }
          new Function(MODEL_CALLBACK, text)(view[MODEL_CALLBACK])
          script.onload()
        })
      },
    },
    createElement: () => ({ remove() {} }),
  }
  return { doc: doc as unknown as Document, appended }
}

describe('packaged model assets', () => {
  beforeAll(() => initRuntime({ React: {}, assets: { url: (path: string) => `asset:${path}` } } as unknown as ValleyPluginApi))

  it('uses one callback name in the tooling and the UI', () => {
    expect(TOOLING_CALLBACK).toBe(MODEL_CALLBACK)
  })

  it('round-trips a file through the script form', () => {
    const script = encodeModelAsset('tiles/5366_2494.bin.gz', bytes)
    expect(new Uint8Array(decodeModelAsset(script, 'tiles/5366_2494.bin.gz'))).toEqual(bytes)
    expect(() => decodeModelAsset(script, 'tiles/1_1.bin.gz')).toThrow()
    expect(new Uint8Array(decodeBase64(Buffer.from(bytes).toString('base64')))).toEqual(bytes)
  })

  it('packs a converted model folder file by file', () => {
    const root = mkdtempSync(join(tmpdir(), 'poly-model-'))
    mkdirSync(join(root, 'model', 'tiles'), { recursive: true })
    writeFileSync(join(root, 'model', 'index.json'), '{"format":"zurich3d-tiles"}')
    writeFileSync(join(root, 'model', 'tiles', '1_2.bin.gz'), bytes)
    expect(packModel(join(root, 'model'), join(root, 'assets'))).toBe(2)
    expect(readFileSync(join(root, 'assets', 'index.json.js'), 'utf8')).toMatch(/^valleyPolyModel\("index\.json","/)
    expect(new Uint8Array(readModelAsset(join(root, 'assets'), 'tiles/1_2.bin.gz'))).toEqual(bytes)
  })

  it('loads a file through the package assets and shares concurrent loads', async () => {
    const { doc, appended } = fakeDocument(new Map([['asset:model/tiles/1_2.bin.gz.js', encodeModelAsset('tiles/1_2.bin.gz', bytes)]]))
    const [a, b] = await Promise.all([readPackagedModelFile('tiles/1_2.bin.gz', doc), readPackagedModelFile('tiles/1_2.bin.gz', doc)])
    expect(new Uint8Array(a)).toEqual(bytes)
    expect(b).toBe(a)
    expect(appended).toEqual(['asset:model/tiles/1_2.bin.gz.js'])
  })

  it('tells a missing file from a file that hands over another path', async () => {
    const { doc } = fakeDocument(new Map([['asset:model/tiles/3_4.json.js', encodeModelAsset('tiles/9_9.json', bytes)]]))
    await expect(readPackagedModelFile('index.json', doc)).rejects.toBeInstanceOf(ModelAssetMissing)
    await expect(readPackagedModelFile('tiles/3_4.json', doc)).rejects.toThrow('not a packaged model file')
  })

  it.each(['../config.json', 'tiles/../index.json', 'notes.md'])('refuses %s', async (path) => {
    await expect(readPackagedModelFile(path, fakeDocument(new Map()).doc)).rejects.toThrow('invalidPath')
  })
})
