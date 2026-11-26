import { gunzipSync } from 'node:zlib'
import { existsSync } from 'node:fs'
import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, DoubleSide, Raycaster, Vector3 } from 'three'
// @ts-expect-error untyped build tooling
import { readModelAsset } from '../tooling/modelAssets.mjs'
import { decodeTile, type DecodedTile, type TileBuilding } from '../src/city/tileFormat'
import { tileGeometry } from '../src/city/scene'

const MODEL = 'runtime/assets/model'
const ORIGIN: [number, number] = [2683000, 1247000]

/** The scene's float positions as Poly ≤ 2.7.0 built them, the reference for the 16-bit geometry. */
function floatGeometry(tile: DecodedTile): BufferGeometry {
  const positions = new Float32Array(tile.vertexCount * 3)
  const [ox, oy, oz] = tile.origin, [sx, sy, sz] = tile.step
  const dx = ox - ORIGIN[0], dy = oz - 400, dz = ORIGIN[1] - oy
  for (let i = 0, j = 0; i < tile.vertexCount; i++, j += 3) {
    positions[j] = dx + tile.positions[j] * sx
    positions[j + 1] = dy + tile.positions[j + 2] * sz
    positions[j + 2] = dz - tile.positions[j + 1] * sy
  }
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setIndex(new BufferAttribute(tile.indices, 1))
  return geometry
}

describe.runIf(existsSync(`${MODEL}/index.json.js`))('16-bit tile geometry', () => {
  const key = '5366_2494'
  const tile = decodeTile(new Uint8Array(gunzipSync(readModelAsset(MODEL, `tiles/${key}.bin.gz`))).buffer)
  const buildings = JSON.parse(readModelAsset(MODEL, `tiles/${key}.json`).toString()) as TileBuilding[]
  const { geometry, matrix } = tileGeometry(tile, ORIGIN)
  const reference = floatGeometry(tile)

  it('places every vertex where the float geometry had it, with aligned RGBA colours', () => {
    const position = geometry.getAttribute('position'), expected = reference.getAttribute('position')
    const point = new Vector3()
    for (let i = 0; i < tile.vertexCount; i += 7) {
      point.fromBufferAttribute(position, i).applyMatrix4(matrix)
      expect(point.distanceTo(new Vector3().fromBufferAttribute(expected, i))).toBeLessThan(1e-3)
    }
    expect(geometry.getAttribute('color').itemSize).toBe(4)
  })

  it('picks the same triangle and spot as the float geometry', () => {
    const material = new MeshBasicMaterial({ side: DoubleSide })
    const mesh = new Mesh(geometry, material)
    mesh.matrixAutoUpdate = false
    mesh.matrix.copy(matrix)
    mesh.matrixWorld.copy(matrix)
    const old = new Mesh(reference, material)
    const raycaster = new Raycaster()
    let hits = 0
    for (const building of buildings.filter((_, i) => i % 9 === 0)) {
      const x = (building[3] + building[6]) / 2 - ORIGIN[0], z = ORIGIN[1] - (building[4] + building[7]) / 2
      raycaster.set(new Vector3(x, 600, z), new Vector3(0.02, -1, 0.01).normalize())
      const [ours] = raycaster.intersectObject(mesh, false)
      const [theirs] = raycaster.intersectObject(old, false)
      expect(ours?.faceIndex).toBe(theirs?.faceIndex)
      if (ours && theirs) { hits++; expect(ours.point.distanceTo(theirs.point)).toBeLessThan(1e-3) }
    }
    expect(hits).toBeGreaterThan(5)
  })
})
