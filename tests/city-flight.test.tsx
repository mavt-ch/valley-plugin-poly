import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { CityStage } from '../src/city/CityView'
import { initRuntime } from '../src/city/runtime'
import type { SceneArea } from '../src/city/scene'
import { update } from '../src/city/store'
import type { TileIndex } from '../src/city/tileFormat'

const flyToArea = vi.fn()
vi.mock('../src/city/scene', () => ({
  CityScene: class {
    flyToArea = flyToArea
    setIndex() {}
    setColorMode() {}
    setShowGround() {}
    setArea() {}
    flyTo() {}
    dispose() {}
  },
}))

afterEach(cleanup)

describe('3D flight to a selection', () => {
  it('flies once per request, also when the area arrives late, never for a later click on the model', () => {
    const api = createMockValleyApi().api
    api.backend.call = (() => new Promise(() => {})) as unknown as typeof api.backend.call
    api.settings.get = () => ({})
    initRuntime(api)
    const area: SceneArea = { polygons: [[[[0, 0], [1, 0], [1, 1], [0, 0]]]] }
    const stage = (next: SceneArea | null, focus: number) => api.React.createElement(CityStage, { area: next, focus })
    const view = render(stage(null, 1))
    act(() => update({ status: 'ready', index: {} as TileIndex }))
    expect(flyToArea).not.toHaveBeenCalled()
    // The outlines arrive after the selection.
    view.rerender(stage(area, 1))
    expect(flyToArea).toHaveBeenCalledTimes(1)
    // Cleared, then another building clicked on the model.
    view.rerender(stage(null, 1))
    view.rerender(stage({ ...area }, 1))
    expect(flyToArea).toHaveBeenCalledTimes(1)
    view.rerender(stage(area, 2))
    expect(flyToArea).toHaveBeenCalledTimes(2)
  })
})
