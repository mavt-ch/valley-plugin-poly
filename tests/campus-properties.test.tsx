import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { initRuntime } from '../src/city/runtime'
import { registerCampusProperties } from '../src/campus/properties'

afterEach(() => cleanup())

describe('3D city Properties tab', () => {
  it('describes the campus page only, with the 3D facts while it shows 3D', async () => {
    const api = createMockValleyApi().api
    const settings: Record<string, unknown> = { campusView: '3d' }
    api.settings.get = () => settings
    api.settings.subscribe = () => () => {}
    api.backend.call = vi.fn(async () => ({ installed: false, folder: 'plugins/data/poly/model/' })) as unknown as typeof api.backend.call
    type Segment = { id: string; pluginSurfaces?: string[]; render(ctx: unknown): unknown }
    const segments: Segment[] = []
    api.interop.extensions.provide = vi.fn((_contract: unknown, value: never) => { segments.push(value); return () => {} }) as unknown as typeof api.interop.extensions.provide
    initRuntime(api)
    registerCampusProperties(api)
    expect(segments.map(item => item.id)).toEqual(['poly.building', 'poly.city3d'])
    const segment: Segment | undefined = segments[1]
    expect(segment!.pluginSurfaces).toEqual(['main_workspace'])
    expect(segment!.render({ relPath: '', kind: 'unsupported', tab: { pluginId: 'poly', instanceId: 'place:eth-9' } })).toBeNull()
    const { container } = render(segment!.render({ relPath: '', kind: 'unsupported', tab: { pluginId: 'poly', instanceId: 'campus' } }) as never)
    // The facts read the model's status once; let that answer land.
    await act(async () => { for (let i = 0; i < 4; i++) await new Promise(resolve => setTimeout(resolve, 0)) })
    expect(container.querySelector('.z3d-options')).not.toBeNull()
    // The clicked LoD2 building is shown here, not on the page (26 Nov).
    const { update } = await import('../src/city/store')
    act(() => update({ selected: { egid: '3169989', ground: 447.3, roof: 499.7, height: 52.4, triangles: 1234, center: [2683790, 1247870] } }))
    for (const text of ['3169989', '52.4', '447.3', '499.7', '1,234']) expect(container.textContent).toContain(text)
    act(() => update({ selected: null }))
    settings.campusView = 'map'
    const second = render(segment!.render({ relPath: '', kind: 'unsupported', tab: { pluginId: 'poly', instanceId: 'campus' } }) as never)
    expect(second.container.textContent).toContain('while the campus page shows 3D')
  })

  it('shows the selected building and its picked room in the Building tab', async () => {
    const api = createMockValleyApi().api
    const settings: Record<string, unknown> = { campusView: 'map' }
    api.settings.get = () => settings
    api.settings.subscribe = () => () => {}
    const segments: { id: string; render(ctx: unknown): unknown }[] = []
    api.interop.extensions.provide = vi.fn((_contract: unknown, value: never) => { segments.push(value); return () => {} }) as unknown as typeof api.interop.extensions.provide
    initRuntime(api)
    registerCampusProperties(api)
    const building = segments.find(item => item.id === 'poly.building')!
    const ctx = { relPath: '', kind: 'unsupported', tab: { pluginId: 'poly', instanceId: 'campus' } }
    expect(building.render({ ...ctx, tab: { pluginId: 'poly', instanceId: 'place:eth-9' } })).toBeNull()
    const empty = render(building.render(ctx) as never)
    expect(empty.container.textContent).toContain('Select a building')
    settings.building = 'HG'
    const { updateCampus } = await import('../src/campus/store')
    act(() => updateCampus({ room: { id: 'r1', name: 'HG F 7', number: '7', type: 'Hörsaal', use: 'Lecture Hall', kind: 'teaching', level: 'ETH.HG.F', polygons: [] } }))
    const shown = render(building.render(ctx) as never)
    expect(shown.container.textContent).toContain('HG')
    expect(shown.container.textContent).toContain('Rämistrasse 101')
    expect(shown.container.textContent).toContain('ETH Zentrum')
    expect(shown.container.textContent).toContain('HG F 7')
    expect(shown.container.textContent).toContain('Lecture Hall')
    expect(shown.container.textContent).toContain('Teaching')
  })
})
