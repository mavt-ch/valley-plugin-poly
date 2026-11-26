import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { createElinkViews, elinkDateOf, nextWeekday } from '../src/elink/views'
import { elinkDay } from '../src/elink/model'
import { HB_BOARD, HOENGG_PAGE_1, HOENGG_PAGE_2, SATURDAY_BOARD, ZENTRUM_BOARD } from './elink-fixtures'
import en from '../locales/en.json'

const t = (key: string) => (en as Record<string, string>)[key] ?? key
const settle = () => act(async () => { for (let i = 0; i < 6; i++) await new Promise(resolve => setTimeout(resolve, 0)) })

function harness(view: 'panel' | 'page', now: Date, settings: Record<string, unknown> = {}) {
  vi.useFakeTimers({ toFake: ['Date'], now })
  const { api } = createMockValleyApi()
  const listeners = new Set<() => void>()
  const calls: Record<string, unknown>[] = []
  api.backend.call = vi.fn(async (name: string, input: Record<string, unknown>) => {
    if (name !== 'elink.day') throw new Error('serviceError')
    calls.push(input)
    const date = input.date as string
    return date === '2026-11-26' ? elinkDay(date, [ZENTRUM_BOARD, HOENGG_PAGE_1, HOENGG_PAGE_2, HB_BOARD]) : elinkDay(date, [SATURDAY_BOARD])
  }) as unknown as typeof api.backend.call
  api.settings.get = () => settings
  api.settings.set = vi.fn(async (key: string, value: unknown) => { settings[key] = value; for (const listener of [...listeners]) listener(); return { ok: true } }) as unknown as typeof api.settings.set
  api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
  api.ui.language = () => 'en'
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  api.workspace.setMainTabTitle = vi.fn() as unknown as typeof api.workspace.setMainTabTitle
  api.ui.hasModKey = (() => false) as typeof api.ui.hasModKey
  const views = createElinkViews(api, t)
  const { container } = render(api.React.createElement(view === 'panel' ? views.ElinkPanelBody : views.ElinkPage, { instanceId: 'elink' }))
  return { calls, settings, openMainTab, container }
}
const direction = (container: HTMLElement, id: string) => container.querySelector(`[data-direction="${id}"]`) as HTMLElement | null
const rows = (element: HTMLElement) => [...element.querySelectorAll('.elink-row')].map(row => [...row.children].map(cell => cell.textContent))

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('eLink views', () => {
  it('lists every direction like a departure board: line, destination, time and minutes', async () => {
    const { calls, container } = harness('panel', new Date(2026, 10, 26, 7, 40))
    await settle()
    expect(calls[0]).toEqual({ date: '2026-11-26', fresh: false })
    const toHoengg = direction(container, 'toHoengg')!
    expect(toHoengg.querySelector('.elink-title')!.textContent).toBe('Zentrum → Hönggerberg')
    expect(toHoengg.querySelector('.elink-span')!.textContent).toBe('07:45–18:32')
    expect(toHoengg.querySelector('.elink-span')!.getAttribute('title')).toBe('First 07:45 · Last 18:32')
    expect(rows(toHoengg)).toEqual([['E', 'ETH Hönggerberg', '07:45', "5'"], ['E', 'ETH Hönggerberg', '08:00', "20'"], ['E', 'ETH Hönggerberg', '08:15', "35'"], ['E', 'ETH Hönggerberg', '18:32', '']])
    expect(toHoengg.querySelector('.elink-row.next')!.getAttribute('title')).toBe('ETH/Universitätsspital 07:45 · Haldenegg 07:48 · ETH Hönggerberg 07:59')
    expect([...container.querySelectorAll('[data-direction]')].map(row => row.getAttribute('data-direction'))).toEqual(['toHoengg', 'toZentrum', 'fromHb', 'toHb'])
    expect(rows(direction(container, 'toZentrum')!).map(row => row[2])).toEqual(['07:44', '17:59'])
    expect(rows(direction(container, 'toHb')!).map(row => row[1])).toEqual(['Bahnhofplatz/HB', 'Bahnhofquai/HB', 'Bahnhofquai/HB', 'Bahnhofquai/HB'])
    expect(container.querySelector('table')).toBeNull()
    expect(screen.getByText('Timetable data by transport.opendata.ch')).toBeTruthy()
  })

  it('says when the day is over and opens the timetable page', async () => {
    const { container, openMainTab } = harness('panel', new Date(2026, 10, 26, 19, 30))
    await settle()
    expect(direction(container, 'toHoengg')!.textContent).toContain('No more departures today.')
    fireEvent.click(screen.getAllByText('Show timetable')[0])
    expect(openMainTab).toHaveBeenCalledWith({ instanceId: 'elink', title: 'eLink', newTab: false })
  })

  it('shows no eLink on weekends and offers the next weekday', async () => {
    const { container, settings, calls } = harness('panel', new Date(2026, 10, 28, 10, 0))
    await settle()
    expect(calls[0]).toEqual({ date: '2026-11-28', fresh: false })
    expect(container.querySelector('[data-direction]')).toBeNull()
    expect(screen.getByText('No eLink on weekends.')).toBeTruthy()
    fireEvent.click(screen.getByText('Show Monday, November 30'))
    await settle()
    expect(settings.elinkDate).toBe('2026-11-30')
    expect(nextWeekday('2026-11-27')).toBe('2026-11-30')
  })

  it('moves between days, never shows a past day and shows times without minutes on another day', async () => {
    expect(elinkDateOf('2026-11-20', new Date(2026, 10, 26, 9))).toBe('2026-11-26')
    expect(elinkDateOf('2026-11-27', new Date(2026, 10, 26, 9))).toBe('2026-11-27')
    const { settings, container } = harness('panel', new Date(2026, 10, 25, 21, 0))
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Next day' }))
    await settle()
    expect(settings.elinkDate).toBe('2026-11-26')
    expect((screen.getByRole('button', { name: 'Previous day' }) as HTMLButtonElement).disabled).toBe(false)
    expect(rows(direction(container, 'fromHb')!)).toEqual([['E', 'ETH Hönggerberg', '07:06', ''], ['E', 'ETH Hönggerberg', '07:21', ''], ['E', 'ETH Hönggerberg', '07:36', '']])
  })

  it('shows every departure of the day per direction on the page, with arrival, the next one marked', async () => {
    const { container } = harness('page', new Date(2026, 10, 26, 8, 5))
    await settle()
    expect(container.querySelector('.poly-page-title')!.textContent).toBe('eLink · Thursday, November 26, 2026')
    const column = direction(container, 'toHoengg')!
    expect(column.querySelector('.elink-route')!.textContent).toBe('ETH/Universitätsspital · Haldenegg · ETH Hönggerberg')
    expect(rows(column)[2]).toEqual(['E', 'ETH Hönggerberg', '08:15', '→ 08:29', "10'"])
    expect([...column.querySelectorAll('.elink-row')].map(row => row.className)).toEqual(['elink-row past', 'elink-row past', 'elink-row next', 'elink-row'])
  })
})
