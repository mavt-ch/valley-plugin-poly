import { footerItems } from '../src/city/footer'
import { initRuntime } from '../src/city/runtime'
import { getState } from '../src/city/store'
import type { TileIndex } from '../src/city/tileFormat'
import type { ValleyPluginApi } from '@valley/plugin-sdk'

const index = { format: 'zurich3d-tiles', version: 1, tileSize: 500, crs: '', source: { name: '', url: '', date: '2026-11-17', licence: '' }, bounds: [0, 0, 0, 1, 1, 1], tiles: [], stats: { buildings: 59003, polygons: 1, triangles: 1, tiles: 362, bytes: 1 } } as TileIndex

describe('footer details', () => {
  beforeAll(() => initRuntime({ React: {} as never, ui: { language: () => 'en' } } as unknown as ValleyPluginApi))

  it('hides every item until a model is loaded', () => {
    expect(Object.values(footerItems(getState())).every(item => item.available === false)).toBe(true)
  })

  it('names the loaded tiles and the selected building', () => {
    const items = footerItems({ ...getState(), index, loadedTiles: 12, selected: { egid: '302014272', ground: 520, roof: 547, height: 27.1, triangles: 287, center: [0, 0] } })
    expect(items.tiles.text).toBe('Tiles · 12 / 362')
    expect(items.building.text).toBe('Building · 302014272 · 27.1 m')
    expect(items.buildings.text).toBe('Buildings · 59,003')
    expect(items.date.text).toBe('Data as of · November 17, 2026')
  })
})
