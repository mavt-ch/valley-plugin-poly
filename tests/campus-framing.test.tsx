import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { CampusPage } from '../src/campus/Page'
import { parseLevels, parseOutlines } from '../src/campus/services'
import { resetCampus, selectBuilding } from '../src/campus/store'
import { initRuntime } from '../src/city/runtime'
import { LEVELS, OUTLINES } from './campus-fixtures'

const stage: { focus: number; east: number }[] = []
vi.mock('../src/city/CityView', () => ({
  CityStage: ({ area, focus }: { area: { polygons: [number, number][][][] } | null; focus: number }) => {
    if (area) stage.push({ focus, east: Math.round(area.polygons[0][0][0][0]) })
    return null
  },
  zoomCity: () => {},
}))

const settle = () => act(async () => { for (let i = 0; i < 8; i++) await new Promise(resolve => setTimeout(resolve, 0)) })

afterEach(cleanup)

describe('framing a selection', () => {
  it('asks the 3D view to fly only once the selected building is the one shown', async () => {
    const api = createMockValleyApi().api
    const settings: Record<string, unknown> = { building: 'HG', campusView: '3d' }
    const listeners = new Set<() => void>()
    // The host answers a settings write later; the selection changes only then.
    api.settings.get = () => ({ ...settings })
    api.settings.set = (async (key: string, value: unknown) => {
      await new Promise(resolve => setTimeout(resolve, 0))
      settings[key] = value
      for (const listener of [...listeners]) listener()
      return { ok: true }
    }) as unknown as typeof api.settings.set
    api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
    api.backend.call = (async (name: string) => name === 'campus.outlines' ? parseOutlines(OUTLINES) : parseLevels(LEVELS)) as unknown as typeof api.backend.call
    api.getState = (() => ({ activePluginTab: null })) as unknown as typeof api.getState
    initRuntime(api)
    resetCampus()
    render(api.React.createElement(CampusPage))
    await settle()
    const hg = stage.at(-1)!.east

    act(() => selectBuilding('HCI', 'Campus map'))
    await settle()
    const hci = stage.at(-1)!
    expect(hci.east).not.toBe(hg)
    expect(hci.focus).toBe(1)
    // No render ever paired the new request with the building shown before.
    expect(stage.filter(item => item.focus === 1 && item.east === hg)).toEqual([])

    // A click on the model selects without a flight.
    act(() => selectBuilding('HG', 'Campus map', false))
    await settle()
    expect(stage.at(-1)).toEqual({ focus: 1, east: hg })
  })
})
