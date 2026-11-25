import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { registerStudyViews } from '../src/views'
import { parseEthFacilities, parseEthWeek, parseUzhOutlet, parseUzhOutlets, parseUzhWeek, ethCampus, uzhLocation, today, mondayOf } from '../src/model'
import { DISH_IMAGE, ETH_FACILITIES, ETH_ROTAS, ETH_ROTAS_DE, UZH_LUNCH, UZH_ORG, UZH_OUTLET } from './fixtures'
import { ethMealsById } from '../src/model'
import en from '../locales/en.json'
import de from '../locales/de.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import zh from '../locales/zh-CN.json'

const t = (key: string) => (en as Record<string, string>)[key] ?? key
const settle = () => act(async () => { for (let i = 0; i < 6; i++) await new Promise(resolve => setTimeout(resolve, 0)) })

/** The fixtures' Wednesday, served for whatever week the panel asks. */
function shift<T>(value: T, from: string, to: string): T { return JSON.parse(JSON.stringify(value).replaceAll(from, to)) }
const MENSA = 'universitat-zurich,campus-zentrum/obere-mensa'

function harness(settings: Record<string, unknown> = {}, view = 'study.panel', props: Record<string, unknown> = {}) {
  vi.useFakeTimers({ toFake: ['Date'], now: new Date(2026, 10, 25, 12, 0) })
  const mock = createMockValleyApi()
  const api = mock.api
  const listeners = new Set<() => void>()
  const views = new Map<string, ComponentType<Record<string, unknown>>>()
  const calls: [string, Record<string, unknown>][] = []
  const facilities = parseEthFacilities(ETH_FACILITIES).filter(facility => ethCampus(facility) !== null)
  const outlets = parseUzhOutlets(UZH_ORG)
  api.backend.call = vi.fn(async (name: string, input: Record<string, unknown>) => {
    calls.push([name, input])
    const monday = input.monday as string
    if (name === 'eth.week') return shift(parseEthWeek(ETH_ROTAS, facilities, '2026-11-23', ethMealsById(ETH_ROTAS_DE)), '2026-11-2', monday.slice(0, 9))
    if (name === 'uzh.outlets') return outlets
    if (name === 'image') return `data:image/jpeg;base64,${btoa(String(input.url))}`
    if (name === 'uzh.dish') return { image: DISH_IMAGE, prices: [{ group: 'students', price: 6.1 }, { group: 'internal', price: 9 }] }
    if (name === 'uzh.week') {
      const outlet = outlets.find(row => row.path === input.path)!
      return uzhLocation(outlet, parseUzhOutlet(UZH_OUTLET)!, outlet.path === MENSA ? [{ service: 'lunch', days: parseUzhWeek(UZH_LUNCH) }] : [], monday, 'en')
    }
    throw new Error('serviceError')
  }) as unknown as typeof api.backend.call
  api.settings.get = () => settings
  api.settings.set = vi.fn(async (key: string, value: unknown) => { settings[key] = value; for (const listener of [...listeners]) listener(); return { ok: true } }) as unknown as typeof api.settings.set
  api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
  api.ui.language = () => 'en'
  const menu = vi.fn(async (): Promise<string | null> => null)
  api.ui.openMenu = menu as unknown as typeof api.ui.openMenu
  const open = vi.fn(async () => true)
  api.links.open = open as unknown as typeof api.links.open
  api.registerView = vi.fn((key: string, view: ComponentType<Record<string, unknown>>) => { views.set(key, view) }) as unknown as typeof api.registerView
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  const setTitle = vi.fn()
  api.workspace.setMainTabTitle = setTitle as unknown as typeof api.workspace.setMainTabTitle
  let mod = false
  api.ui.hasModKey = (() => mod) as typeof api.ui.hasModKey
  registerStudyViews(api, { t })
  const { container } = render(api.React.createElement(views.get(view)!, props))
  return { api, calls, settings, open, openMainTab, setTitle, menu, container, setMod: (value: boolean) => { mod = value } }
}

const tile = (label: RegExp) => screen.getByRole('button', { name: label })
const place = (container: HTMLElement, id: string) => container.querySelector(`[data-place="${id}"]`) as HTMLElement | null

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('menu plan panel', () => {
  it('shows three header rows and the Höngg places with location, opening state and menu count', async () => {
    expect(today()).toBe('2026-11-25')
    const { calls, container } = harness()
    await settle()
    expect(calls[0]).toEqual(['eth.week', { monday: mondayOf('2026-11-25'), language: 'en', fresh: false }])
    const header = container.querySelector('.panel-header')!
    expect(header.textContent).toContain('Menu plan')
    expect(header.querySelector('.plugin-open-page')?.getAttribute('aria-label')).toBe('Open the menu plan page')
    expect(screen.getByRole('button', { name: 'Lunch' }).getAttribute('aria-pressed')).toBe('true')
    expect(container.querySelectorAll('.study-bar')).toHaveLength(2)
    expect(tile(/^ETH Zentrum/).textContent).toBe('ETH2')
    expect(tile(/^ETH Hönggerberg/).getAttribute('aria-pressed')).toBe('true')
    expect(tile(/^ETH Hönggerberg/).textContent).toBe('Höngg1')
    expect(tile(/^UZH outlets/).textContent).toBe('UZH1')
    expect(screen.getByTitle('Wednesday, November 25, 2026 · Today').textContent).toBe('Wed Nov 25')
    const hall = place(container, 'eth:1')!
    expect(hall.textContent).toBe('Test Hall2 menusHXX E 1 · Open now · 11:00–20:00')
    expect(place(container, 'eth:3')).toBeNull()
    expect(place(container, 'eth:2')).toBeNull()
    expect(screen.queryByText('Lentil curry')).toBeNull()
  })

  it('reads every UZH outlet in the background and lists only the places serving the meal', async () => {
    const { calls, container, settings } = harness()
    await settle()
    expect(calls.filter(([name]) => name === 'uzh.week').map(([, input]) => [input.path, input.background])).toEqual([[MENSA, true], ['universitat-zurich,campus-irchel/seerose', true]])
    fireEvent.click(tile(/^UZH outlets/))
    expect(settings.campus).toBe('uzh')
    expect(place(container, `uzh:${MENSA}`)!.textContent).toBe('Obere Mensa2 menusCampus Zentrum · Teststrasse 1')
    expect(place(container, 'uzh:universitat-zurich,campus-irchel/seerose')).toBeNull()
    expect(screen.getByText('Menus from the ZFV on food2050.')).toBeTruthy()
    fireEvent.click(tile(/^ETH Zentrum/))
    expect(place(container, 'eth:2')!.textContent).toBe('City Bar2 menusZZ D · Open now · 11:00–14:00')
  })

  it('hides a tag without places for the meal and falls back to a shown one', async () => {
    const { container } = harness({ campus: 'eth' })
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }))
    await settle()
    expect(screen.queryByRole('button', { name: /^ETH Zentrum/ })).toBeNull()
    expect(screen.queryByRole('button', { name: /^UZH outlets/ })).toBeNull()
    expect(tile(/^ETH Hönggerberg/).getAttribute('aria-pressed')).toBe('true')
    expect(place(container, 'eth:1')!.textContent).toBe('Test Hall1 menuHXX E 1 · Open now · 11:00–20:00')
  })

  it('opens a place’s page, in a new tab with ⌘ or the middle button', async () => {
    const { container, openMainTab, setMod } = harness()
    await settle()
    fireEvent.click(place(container, 'eth:1')!)
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'place:eth:1', title: 'Test Hall', newTab: false })
    setMod(true)
    fireEvent.click(place(container, 'eth:1')!)
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'place:eth:1', title: 'Test Hall', newTab: true })
    setMod(false)
    fireEvent(place(container, 'eth:1')!, new MouseEvent('auxclick', { bubbles: true, button: 1 }))
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'place:eth:1', title: 'Test Hall', newTab: true })
    fireEvent.click(container.querySelector('.plugin-open-page')!)
    expect(openMainTab).toHaveBeenLastCalledWith({ newTab: false })
  })

  it('filters the menu counts by diet and saves the filters and the price', async () => {
    const { container, menu, settings } = harness()
    await settle()
    menu.mockResolvedValueOnce('glutenFree')
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }))
    await settle()
    const items = (menu.mock.calls[0] as unknown as [{ id?: string; checked?: boolean; type?: string }[]])[0]
    expect(items.map(item => item.id ?? '—')).toEqual(['vegetarian', 'vegan', 'glutenFree', '—', 'price:students', 'price:internal', 'price:external'])
    expect(settings.onlyGlutenFree).toBe(true)
    expect(place(container, 'eth:1')!.textContent).toContain('1 menu')
    expect(screen.getByRole('button', { name: 'Filter · Gluten-free' }).className).toContain('active')
    menu.mockResolvedValueOnce('vegetarian')
    fireEvent.click(screen.getByRole('button', { name: 'Filter · Gluten-free' }))
    await settle()
    expect(settings.onlyVegetarian).toBe(true)
    menu.mockResolvedValueOnce('price:external')
    fireEvent.click(screen.getByRole('button', { name: /^Filter/ }))
    await settle()
    expect(settings.price).toBe('external')
    menu.mockResolvedValueOnce('vegan')
    fireEvent.click(screen.getByRole('button', { name: /^Filter/ }))
    await settle()
    expect(place(container, 'eth:1')!.textContent).toContain('1 menu')
    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }))
    await settle()
    expect(screen.getByText('No menu matches the filters.')).toBeTruthy()
    expect(tile(/^ETH Hönggerberg/).textContent).toBe('Höngg0')
    fireEvent.click(screen.getByRole('button', { name: 'Lunch' }))
    menu.mockResolvedValueOnce('clear')
    fireEvent.click(screen.getByRole('button', { name: /^Filter/ }))
    await settle()
    expect([settings.onlyVegetarian, settings.onlyVegan, settings.onlyGlutenFree]).toEqual([false, false, false])
    expect(place(container, 'eth:1')!.textContent).toContain('2 menus')
  })

  it('moves through the days, shares the day and comes back to today', async () => {
    const { calls, settings, container } = harness()
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Next day' }))
    await settle()
    expect(settings.day).toEqual({ date: '2026-11-26', service: 'lunch' })
    expect(screen.getByText('No place serves lunch on this day.')).toBeTruthy()
    expect(tile(/^ETH Hönggerberg/).textContent).toBe('Höngg0')
    expect(place(container, 'eth:1')).toBeNull()
    for (let i = 0; i < 5; i++) fireEvent.click(screen.getByRole('button', { name: 'Next day' }))
    await settle()
    expect(calls.filter(([name]) => name === 'eth.week').at(-1)).toEqual(['eth.week', { monday: '2026-11-30', language: 'en', fresh: false }])
    const away = screen.getByTitle(/Back to today$/)
    expect(away.getAttribute('aria-current')).toBeNull()
    fireEvent.click(away)
    await settle()
    expect(place(container, 'eth:1')).not.toBeNull()
  })

  it('starts on today when the saved day has passed', async () => {
    const { container } = harness({ day: { date: '2026-11-20', service: 'dinner' } })
    await settle()
    expect(screen.getByRole('button', { name: 'Lunch' }).getAttribute('aria-pressed')).toBe('true')
    expect(place(container, 'eth:1')).not.toBeNull()
  })

  it('offers a new tab, the website and a refresh on a place', async () => {
    const { container, menu, open, calls } = harness()
    await settle()
    menu.mockResolvedValueOnce('website')
    fireEvent.contextMenu(place(container, 'eth:1')!)
    await settle()
    expect(open).toHaveBeenCalledWith('https://example.test/hall')
    menu.mockResolvedValueOnce('refresh')
    fireEvent.contextMenu(place(container, 'eth:1')!)
    await settle()
    expect(calls.filter(([name]) => name === 'eth.week').at(-1)?.[1].fresh).toBe(true)
  })

  it('names a failing service', async () => {
    const { api, menu, container } = harness()
    await settle()
    ;(api.backend.call as unknown as { mockImplementation: (fn: () => Promise<never>) => void }).mockImplementation(async () => { throw new Error('networkError') })
    menu.mockResolvedValueOnce('refresh')
    fireEvent.contextMenu(place(container, 'eth:1')!)
    await settle()
    expect(screen.getByRole('alert').textContent).toBe('The menu service could not be reached.')
  })
})

describe('menu plan page', () => {
  it('shows one ETH place with its hours and its menus as picture cards', async () => {
    const { calls, setTitle, container } = harness({}, 'study.page', { instanceId: 'place:eth:1' })
    await settle()
    expect(setTitle).toHaveBeenLastCalledWith('Test Hall', 'place:eth:1')
    expect(container.querySelector('.study-page-head')).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'Test Hall' })).toBeTruthy()
    expect(container.querySelector('.study-place-facts')!.textContent).toBe('HXX E 1Open now · 11:00–20:00Lunch 11:00–13:302 menus')
    expect(screen.getByText('Wednesday, November 25')).toBeTruthy()
    const picture = screen.getByAltText('Lentil curry') as HTMLImageElement
    expect(picture.src).toBe(`data:image/jpeg;base64,${btoa('https://idapps.ethz.ch/cookpit-pub-services/v1/images/5001?client-id=ethz-wcms')}`)
    expect(screen.queryByAltText('Bratwurst')).toBeNull()
    expect(calls.filter(([name]) => name === 'image')).toHaveLength(1)
    expect(calls.some(([name]) => name === 'uzh.week')).toBe(false)
    expect(screen.getAllByText('CHF 7.50')).toHaveLength(2)
    fireEvent.click(screen.getByText('Bratwurst'))
    expect(screen.getByText('Allergens: gluten wheat, celery')).toBeTruthy()
    expect(screen.getByText('Students CHF 7.50 · Staff CHF 10.50 · Guests CHF 13.50')).toBeTruthy()
  })

  it('follows the filters and the chosen price', async () => {
    harness({ onlyVegan: true, price: 'internal' }, 'study.page', { instanceId: 'place:eth:1' })
    await settle()
    expect(screen.getByText('Lentil curry')).toBeTruthy()
    expect(screen.queryByText('Bratwurst')).toBeNull()
    expect(screen.getByText('CHF 10.50')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }))
    await settle()
    expect(screen.getByText('No menu matches the filters.')).toBeTruthy()
  })

  it('shows a price for all visitors whatever group is chosen, listed once in the details', async () => {
    harness({ price: 'external' }, 'study.page', { instanceId: 'place:eth:6' })
    await settle()
    expect(screen.getByText('CHF 22.00')).toBeTruthy()
    fireEvent.click(screen.getByText('Braised beef'))
    expect(screen.getByText('All visitors CHF 22.00')).toBeTruthy()
    cleanup()
    harness({ price: 'internal' }, 'study.page', { instanceId: 'place:eth:2' })
    await settle()
    expect(screen.getByText('CHF 9.50')).toBeTruthy()
    fireEvent.click(screen.getByText('Tofu bowl'))
    expect(screen.getByText('Staff & students CHF 9.50 · Guests CHF 12.00')).toBeTruthy()
  })

  it('reads one UZH outlet and its dish pages for picture and price', async () => {
    const { calls } = harness({}, 'study.page', { instanceId: `place:uzh:${MENSA}` })
    await settle()
    expect(calls.filter(([name]) => name === 'uzh.week').map(([, input]) => [input.path, input.background])).toEqual([[MENSA, undefined]])
    expect(screen.getByRole('heading', { name: 'Obere Mensa' })).toBeTruthy()
    expect(calls.some(([name, input]) => name === 'uzh.dish' && String(input.url).endsWith('/lunch,menu-1/2026-11-25'))).toBe(true)
    expect((screen.getByAltText('COUSCOUS BOWL') as HTMLImageElement).src).toBe(`data:image/jpeg;base64,${btoa(DISH_IMAGE)}`)
    expect(screen.getByText('CHF 6.10')).toBeTruthy()
  })

  it('without a place shows the chosen campus with links to each place’s page', async () => {
    const { setTitle, openMainTab, container } = harness({ campus: 'eth' }, 'study.page')
    await settle()
    expect(setTitle).toHaveBeenLastCalledWith('Menu plan', undefined)
    expect(screen.getByRole('heading', { name: 'ETH Zentrum' })).toBeTruthy()
    expect(screen.getByText('Tofu bowl')).toBeTruthy()
    fireEvent.click(container.querySelector('[data-place="eth:2"] .study-place-link')!)
    expect(openMainTab).toHaveBeenCalledWith({ instanceId: 'place:eth:2', title: 'City Bar', newTab: false })
  })

  it('refreshes past the cache', async () => {
    const { calls } = harness({}, 'study.page', { instanceId: 'place:eth:1' })
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))
    await settle()
    expect(calls.at(-1)?.[1].fresh).toBe(true)
  })
})

describe('catalogs', () => {
  it('keep the same keys in all five languages', () => {
    const keys = Object.keys(en).sort()
    for (const catalog of [de, es, fr, zh]) expect(Object.keys(catalog).sort()).toEqual(keys)
    expect(Object.values(de).join(' ')).not.toMatch(/�/)
  })
})
