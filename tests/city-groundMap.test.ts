import { describe, expect, it, vi } from 'vitest'
import { Scene, Vector3 } from 'three'
import { GroundMap, groundZoom, lv95ToWgs84, tileToWgs84, tilesAround, wgs84ToTile } from '../src/city/groundMap'
import { wgs84ToLv95 } from '../src/city/geo'

const settle = () => new Promise(resolve => setTimeout(resolve, 0))

describe('ground map projection', () => {
  it('converts between tiles, WGS84 and LV95', () => {
    const [x, y] = wgs84ToTile(16, 8.5480, 47.3765)
    expect([Math.floor(x), Math.floor(y)]).toEqual([34324, 22949])
    const [longitude, latitude] = tileToWgs84(16, x, y)
    expect(longitude).toBeCloseTo(8.5480, 9)
    expect(latitude).toBeCloseTo(47.3765, 9)
    // ETH main building: LV95 → WGS84 → LV95 stays within a metre.
    const [lon, lat] = lv95ToWgs84(2683500, 1247700)
    const [east, north] = wgs84ToLv95(lat, lon)
    expect(Math.abs(east - 2683500)).toBeLessThan(1)
    expect(Math.abs(north - 1247700)).toBeLessThan(1)
  })

  it('picks the zoom from the camera distance and the tiles nearest the target first', () => {
    expect([100, 800, 2000, 6000].map(groundZoom)).toEqual([16, 15, 14, 13])
    const [east, north] = wgs84ToLv95(47.3765, 8.548)
    const tiles = tilesAround(16, east, north, 1300)
    expect(tiles[0]).toEqual([34324, 22949])
    expect(tiles.length).toBeGreaterThan(20)
    expect(tiles.length).toBeLessThanOrEqual(64)
    expect(tilesAround(16, east, north, 5000, 10)).toHaveLength(10)
  })
})

describe('ground map tiles', () => {
  function setup() {
    const scene = new Scene()
    const load = vi.fn(async (_z: number, _x: number, _y: number, _dark: boolean) => new Uint8Array([1, 2, 3]).buffer)
    const changed = vi.fn()
    const win = { createImageBitmap: vi.fn(async () => ({ width: 256, height: 256, close: vi.fn() })) } as unknown as Window
    const map = new GroundMap({ scene, win, load, changed, toScene: (east, north, height) => new Vector3(east - 2683000, height - 400, 1247000 - north), height: () => 410 })
    return { scene, load, changed, map }
  }

  it('loads at most four tiles at once, light or dark, and draws each as a draped patch', async () => {
    const { scene, load, map } = setup()
    const [east, north] = wgs84ToLv95(47.3765, 8.548)
    map.update(east, north, 300, 1300)
    expect(load).toHaveBeenCalledTimes(4)
    expect(load.mock.calls[0]).toEqual([16, 34324, 22949, false])
    for (let i = 0; i < 20; i++) await settle()
    expect(load.mock.calls.length).toBeGreaterThan(20)
    expect(scene.children.length).toBe(load.mock.calls.length)
    map.setDark(true)
    expect(scene.children).toHaveLength(0)
    map.update(east, north, 300, 1300)
    expect(load.mock.calls.at(-1)?.[3]).toBe(true)
    map.dispose()
  })

  it('asks for a frame only when something it shows changed, so an idle view stays idle', async () => {
    const { changed, map } = setup()
    const [east, north] = wgs84ToLv95(47.3765, 8.548)
    map.update(east, north, 300, 1300)
    for (let i = 0; i < 40; i++) await settle()
    changed.mockClear()
    map.update(east, north, 300, 1300)
    expect(changed).not.toHaveBeenCalled()
    map.setVisible(false)
    expect(changed).toHaveBeenCalledTimes(1)
    map.dispose()
  })
})
