import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { moveTab, registerPolyViews, tabOrderOf } from '../src/views'
import { initRuntime } from '../src/city/runtime'
import { parseEthFacilities, parseEthWeek, parseUzhOutlet, parseUzhOutlets, parseUzhWeek, ethCampus, uzhLocation, today, mondayOf } from '../src/model'
import { DISH_IMAGE, ETH_FACILITIES, ETH_ROTAS, ETH_ROTAS_DE, UZH_LUNCH, UZH_ORG, UZH_OUTLET } from './fixtures'
import { ethMealsById } from '../src/model'
import { OUTLINES, LEVELS, ROOMS } from './campus-fixtures'
import { parseLevels, parseOutlines, parseRooms } from '../src/campus/services'
import { getCampus, resetCampus } from '../src/campus/store'
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

function harness(settings: Record<string, unknown> = {}, view = 'poly.panel', props: Record<string, unknown> = {}) {
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
    if (name === 'campus.outlines') return parseOutlines(OUTLINES)
    if (name === 'campus.levels') return parseLevels(LEVELS)
    if (name === 'campus.rooms') return parseRooms(ROOMS)
    if (name === 'campus.searchRooms') return parseRooms(ROOMS)
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
  api.getState = (() => ({ activePluginTab: null })) as unknown as typeof api.getState
  api.registerView = vi.fn((key: string, view: ComponentType<Record<string, unknown>>) => { views.set(key, view) }) as unknown as typeof api.registerView
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  const setTitle = vi.fn()
  api.workspace.setMainTabTitle = setTitle as unknown as typeof api.workspace.setMainTabTitle
  let mod = false
  api.ui.hasModKey = (() => mod) as typeof api.ui.hasModKey
  initRuntime(api)
  resetCampus()
  registerPolyViews(api, { t })
  const { container } = render(api.React.createElement(views.get(view)!, props))
  return { api, calls, settings, open, openMainTab, setTitle, menu, container, setMod: (value: boolean) => { mod = value } }
}

const tile = (label: RegExp) => screen.getByRole('button', { name: label })
const place = (container: HTMLElement, id: string) => container.querySelector(`[data-place="${id}"]`) as HTMLElement | null

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('menu plan panel', () => {
  it('shows three header rows and the Höngg places with location, opening state and menu count', async () => {
    // The harness fixes the clock at Wed 25 Nov 2026, noon, whatever day the tests run.
    const { calls, container } = harness()
    expect(today()).toBe('2026-11-25')
    await settle()
    expect(calls[0]).toEqual(['eth.week', { monday: mondayOf('2026-11-25'), language: 'en', fresh: false }])
    const header = container.querySelector('.panel-header')!
    expect(header.textContent).toContain('Menu plan')
    expect(header.querySelector('.plugin-open-page')?.getAttribute('aria-label')).toBe('Open the menu plan page')
    expect(header.querySelector('.poly-seg')).toBeNull()
    const tabs = container.querySelector('.poly-tabs')!
    expect(tabs.previousElementSibling).toBe(header)
    expect([...tabs.querySelectorAll('[role="tab"]')].map(tab => [tab.getAttribute('aria-label'), tab.getAttribute('aria-selected')])).toEqual([['eLink', 'false'], ['Menu plan', 'true'], ['Campus map', 'false'], ['ETH News', 'false'], ['Polybox', 'false']])
    expect(header.textContent).not.toContain('Lunch')
    const bars = container.querySelectorAll('.poly-bar')
    expect(bars).toHaveLength(3)
    expect([...bars[1].querySelectorAll('.poly-week-day')].map(day => day.textContent)).toEqual(['Mon23', 'Tue24', 'Wed25', 'Thu26', 'Fri27', 'Sat28', 'Sun29'])
    expect(bars[2].querySelector('[aria-label="Meal"]')?.textContent).toBe('LunchDinner')
    expect([...bars[2].querySelectorAll('[aria-label="Prices"] button')].map(button => button.getAttribute('aria-label'))).toEqual(['Prices · Students', 'Prices · Staff', 'Prices · Guests'])
    expect(screen.getByRole('button', { name: 'Lunch' }).getAttribute('aria-pressed')).toBe('true')
    expect(tile(/^ETH Zentrum/).textContent).toBe('ETH2')
    expect(tile(/^ETH Hönggerberg/).getAttribute('aria-pressed')).toBe('true')
    expect(tile(/^ETH Hönggerberg/).textContent).toBe('Höngg1')
    expect(tile(/^UZH outlets/).textContent).toBe('UZH1')
    const todayCell = screen.getByTitle('Wednesday, November 25, 2026 · Today')
    expect(todayCell.className).toBe('poly-week-day today selected')
    expect(todayCell.getAttribute('aria-current')).toBe('date')
    expect(screen.getByRole('button', { name: 'Previous week' }).hasAttribute('disabled')).toBe(true)
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

  it('stars places, shows Favorites first and lists every favorite across campuses', async () => {
    const { settings, container } = harness()
    await settle()
    expect(screen.queryByRole('button', { name: /^Favorite places/ })).toBeNull()
    const star = screen.getByRole('button', { name: 'Add Test Hall to favorites' })
    expect(star.closest('.poly-place-item')!.querySelector('[data-place="eth:1"]')).not.toBeNull()
    fireEvent.click(star)
    expect(settings.favorites).toEqual(['eth:1'])
    const starred = screen.getByRole('button', { name: 'Remove Test Hall from favorites' })
    expect(starred.className).toBe('poly-star on')
    expect(starred.getAttribute('aria-pressed')).toBe('true')
    const favorites = tile(/^Favorite places/)
    expect(favorites.parentElement!.firstElementChild).toBe(favorites)
    expect(favorites.textContent).toBe('Favorites1')
    fireEvent.click(tile(/^UZH outlets/))
    fireEvent.click(screen.getByRole('button', { name: 'Add Obere Mensa to favorites' }))
    expect(settings.favorites).toEqual(['eth:1', `uzh:${MENSA}`])
    fireEvent.click(favorites)
    expect(settings.campus).toBe('favorites')
    expect([...container.querySelectorAll('.poly-place')].map(row => row.textContent)).toEqual([
      'Obere Mensa2 menusCampus Zentrum · Teststrasse 1',
      'Test Hall2 menusHöngg · HXX E 1 · Open now · 11:00–20:00'
    ])
    expect(screen.getByText('Menus from ETH Zurich Gastronomy and from the ZFV on food2050.')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Thursday, November 26, 2026' }))
    await settle()
    expect(screen.getByText('None of your favorite places has a menu for this meal on this day.')).toBeTruthy()
    expect(tile(/^Favorite places/).textContent).toBe('Favorites0')
  })

  it('marks the place whose page is the focused tab', async () => {
    const { api } = harness()
    const listeners = new Set<() => void>()
    let state = { ...api.getState(), activePluginTab: null as null | { pluginId: string; instanceId?: string } }
    api.getState = (() => state) as typeof api.getState
    api.subscribe = ((listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }) as typeof api.subscribe
    cleanup()
    render(api.React.createElement((api.registerView as unknown as { mock: { calls: [string, ComponentType][] } }).mock.calls.find(([key]) => key === 'poly.panel')![1]))
    await settle()
    expect(document.querySelector('[data-place="eth:1"]')).not.toBeNull()
    expect(document.querySelector('.poly-place.active')).toBeNull()
    state = { ...state, activePluginTab: { pluginId: api.pluginId, instanceId: 'place:eth:1' } }
    act(() => { for (const listener of listeners) listener() })
    const hall = document.querySelector('[data-place="eth:1"]')!
    expect(hall.className).toBe('poly-place active')
    expect(hall.getAttribute('aria-current')).toBe('page')
    state = { ...state, activePluginTab: { pluginId: 'other', instanceId: 'place:eth:1' } }
    act(() => { for (const listener of listeners) listener() })
    expect(document.querySelector('.poly-place.active')).toBeNull()
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

  it('filters the menu counts by diet and saves the filters', async () => {
    const { container, menu, settings } = harness()
    await settle()
    menu.mockResolvedValueOnce('glutenFree')
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }))
    await settle()
    const items = (menu.mock.calls[0] as unknown as [{ id?: string; checked?: boolean; type?: string }[]])[0]
    expect(items.map(item => item.id ?? '—')).toEqual(['vegetarian', 'vegan', '—', 'glutenFree', 'lactoseFree'])
    expect(settings.onlyGlutenFree).toBe(true)
    expect(place(container, 'eth:1')!.textContent).toContain('1 menu')
    expect(screen.getByRole('button', { name: 'Filter · Gluten-free' }).className).toContain('active')
    menu.mockResolvedValueOnce('vegetarian')
    fireEvent.click(screen.getByRole('button', { name: 'Filter · Gluten-free' }))
    await settle()
    expect(settings.onlyVegetarian).toBe(true)
    menu.mockResolvedValueOnce('lactoseFree')
    fireEvent.click(screen.getByRole('button', { name: /^Filter/ }))
    await settle()
    expect(settings.onlyLactoseFree).toBe(true)
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
    expect([settings.onlyVegetarian, settings.onlyVegan, settings.onlyGlutenFree, settings.onlyLactoseFree]).toEqual([false, false, false, false])
    expect(place(container, 'eth:1')!.textContent).toContain('2 menus')
  })

  it('picks a day of the week, moves week by week, shares the day and comes back to this week', async () => {
    const { calls, settings, container } = harness()
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Thursday, November 26, 2026' }))
    await settle()
    expect(settings.day).toEqual({ date: '2026-11-26', service: 'lunch' })
    expect(screen.getByText('No place serves lunch on this day.')).toBeTruthy()
    expect(tile(/^ETH Hönggerberg/).textContent).toBe('Höngg0')
    expect(place(container, 'eth:1')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Next week' }))
    await settle()
    expect(settings.day).toEqual({ date: '2026-12-03', service: 'lunch' })
    expect(calls.filter(([name]) => name === 'eth.week').at(-1)).toEqual(['eth.week', { monday: '2026-11-30', language: 'en', fresh: false }])
    expect([...container.querySelectorAll('.poly-week-day')].map(day => day.textContent)).toEqual(['Mon30', 'Tue1', 'Wed2', 'Thu3', 'Fri4', 'Sat5', 'Sun6'])
    expect(container.querySelector('.poly-week-day.today')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Previous week' }))
    await settle()
    expect(settings.day).toEqual({ date: '2026-11-26', service: 'lunch' })
    fireEvent.click(screen.getByTitle('Wednesday, November 25, 2026 · Today'))
    await settle()
    expect(place(container, 'eth:1')).not.toBeNull()
  })

  it('keeps an earlier day of this week', async () => {
    harness({ day: { date: '2026-11-23', service: 'dinner' } })
    await settle()
    expect(screen.getByRole('button', { name: 'Monday, November 23, 2026' }).getAttribute('aria-pressed')).toBe('true')
    expect(screen.getByRole('button', { name: 'Dinner' }).getAttribute('aria-pressed')).toBe('true')
  })

  it('starts on today when the saved day was in an earlier week', async () => {
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
    const { calls, setTitle, container } = harness({}, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    expect(setTitle).toHaveBeenLastCalledWith('Test Hall', 'place:eth:1')
    const head = container.querySelector('.poly-page-head')!
    expect(head.querySelector('h1')!.textContent).toBe('Test Hall')
    expect(head.textContent).toBe('Test Hall')
    expect([...head.querySelectorAll('button')].map(button => button.getAttribute('aria-label'))).toEqual(['Add Test Hall to favorites', 'Refresh'])
    expect(screen.getAllByRole('heading')).toHaveLength(1)
    const facts = container.querySelector('.poly-page > .poly-bar.poly-facts')!
    expect(facts.textContent).toBe('HXX E 1Open now · 11:00–20:00Lunch 11:00–13:302 menus')
    expect(facts.closest('.poly-list')).toBeNull()
    expect(container.querySelectorAll('.poly-page > .poly-bar')).toHaveLength(2)
    expect(screen.queryByText(/November 25/)).toBeNull()
    const picture = screen.getByAltText('Lentil curry') as HTMLImageElement
    expect(picture.src).toBe(`data:image/jpeg;base64,${btoa('https://idapps.ethz.ch/cookpit-pub-services/v1/images/5001?client-id=ethz-wcms')}`)
    expect(screen.queryByAltText('Bratwurst')).toBeNull()
    expect(calls.filter(([name]) => name === 'image')).toHaveLength(1)
    expect(calls.some(([name]) => name === 'uzh.week')).toBe(false)
    const bratwurst = container.querySelector('[data-dish="eth:102"]')!
    expect(bratwurst.tagName).toBe('DIV')
    expect([...bratwurst.querySelectorAll('.poly-card-body > *')].map(node => node.className)).toEqual(['poly-dish-top', 'poly-dish-name', 'poly-dish-description', 'poly-dish-allergens', 'poly-tags'])
    const price = bratwurst.querySelector('.poly-dish-price')!
    expect(price.textContent).toBe('CHF 7.50 / 10.50 / 13.50')
    expect(price.getAttribute('title')).toBe('Students CHF 7.50 · Staff CHF 10.50 · Guests CHF 13.50')
    expect(bratwurst.querySelector('.poly-dish-allergens')!.textContent).toBe('Allergens: gluten wheat, celery')
    expect(screen.getAllByText('Lactose-free')).toHaveLength(2)
  })

  it('stars the place from its page bar', async () => {
    const { settings } = harness({ favorites: ['eth:2'] }, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Add Test Hall to favorites' }))
    expect(settings.favorites).toEqual(['eth:2', 'eth:1'])
    fireEvent.click(screen.getByRole('button', { name: 'Remove Test Hall from favorites' }))
    expect(settings.favorites).toEqual(['eth:2'])
  })

  it('follows the filters', async () => {
    harness({ onlyVegan: true }, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    expect(screen.getByText('Lentil curry')).toBeTruthy()
    expect(screen.queryByText('Bratwurst')).toBeNull()
    cleanup()
    harness({ onlyVegan: true, day: { date: '2026-11-25', service: 'dinner' } }, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    expect(screen.getByText('No menu matches the filters.')).toBeTruthy()
  })

  it('picks whose prices the cards show from the three group icons beside the filter', async () => {
    const { settings } = harness()
    await settle()
    const staff = screen.getByRole('button', { name: 'Prices · Staff' })
    expect(staff.getAttribute('aria-pressed')).toBe('false')
    fireEvent.click(staff)
    await settle()
    expect(settings.prices).toBe('internal')
    expect(screen.getByRole('button', { name: 'Prices · Staff' }).className).toContain('active')
    fireEvent.click(screen.getByRole('button', { name: 'Prices · Staff' }))
    await settle()
    expect(settings.prices).toBe('all')
  })

  it('draws an icon beside every diet filter', async () => {
    const { menu } = harness()
    await settle()
    menu.mockResolvedValueOnce(null)
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }))
    await settle()
    const items = (menu.mock.calls[0] as unknown as [{ id?: string; icon?: unknown }[]])[0].filter(item => item.id)
    expect(items.map(item => item.id)).toEqual(['vegetarian', 'vegan', 'glutenFree', 'lactoseFree'])
    expect(items.every(item => item.icon)).toBe(true)
  })

  it('shows only the chosen group’s price on the cards, a shared price when that is what it pays', async () => {
    const { container } = harness({ prices: 'internal' }, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    const price = container.querySelector('[data-dish="eth:102"] .poly-dish-price')!
    expect(price.textContent).toBe('CHF 10.50')
    expect(price.getAttribute('title')).toBe('Staff CHF 10.50')
    cleanup()
    harness({ prices: 'students' }, 'poly.page', { instanceId: 'place:eth:6' })
    await settle()
    expect(screen.getByText('CHF 22.00').getAttribute('title')).toBe('All visitors CHF 22.00')
    cleanup()
    harness({ prices: 'external' }, 'poly.page', { instanceId: 'place:eth:2' })
    await settle()
    expect(screen.getByText('CHF 12.00').getAttribute('title')).toBe('Guests CHF 12.00')
  })

  it('shows a shared price once, named in its tooltip', async () => {
    harness({}, 'poly.page', { instanceId: 'place:eth:6' })
    await settle()
    expect(screen.getByText('CHF 22.00').getAttribute('title')).toBe('All visitors CHF 22.00')
    cleanup()
    harness({}, 'poly.page', { instanceId: 'place:eth:2' })
    await settle()
    expect(screen.getByText('CHF 9.50 / 12.00').getAttribute('title')).toBe('Staff & students CHF 9.50 · Guests CHF 12.00')
  })

  it('reads one UZH outlet and its dish pages for picture and price', async () => {
    const { calls } = harness({}, 'poly.page', { instanceId: `place:uzh:${MENSA}` })
    await settle()
    expect(calls.filter(([name]) => name === 'uzh.week').map(([, input]) => [input.path, input.background])).toEqual([[MENSA, undefined]])
    expect(screen.getByRole('heading', { name: 'Obere Mensa' })).toBeTruthy()
    expect(calls.some(([name, input]) => name === 'uzh.dish' && String(input.url).endsWith('/lunch,menu-1/2026-11-25'))).toBe(true)
    expect((screen.getByAltText('COUSCOUS BOWL') as HTMLImageElement).src).toBe(`data:image/jpeg;base64,${btoa(DISH_IMAGE)}`)
    expect(screen.getByText('CHF 6.10 / 9.00')).toBeTruthy()
  })

  it('without a place shows the chosen campus with links to each place’s page', async () => {
    const { setTitle, openMainTab, container } = harness({ campus: 'eth' }, 'poly.page')
    await settle()
    expect(setTitle).toHaveBeenLastCalledWith('Menu plan', undefined)
    expect(screen.getByRole('heading', { name: 'ETH Zentrum' })).toBeTruthy()
    expect(screen.getByText('Tofu bowl')).toBeTruthy()
    fireEvent.click(container.querySelector('[data-place="eth:2"] .poly-place-link')!)
    expect(openMainTab).toHaveBeenCalledWith({ instanceId: 'place:eth:2', title: 'City Bar', newTab: false })
  })

  it('refreshes past the cache', async () => {
    const { calls } = harness({}, 'poly.page', { instanceId: 'place:eth:1' })
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))
    await settle()
    expect(calls.at(-1)?.[1].fresh).toBe(true)
  })
})

describe('campus map tab', () => {
  const tabOf = (container: HTMLElement, mode: string) => container.querySelector(`.poly-tab[data-mode="${mode}"]`) as HTMLElement

  it('switches the sidebar between the menu plan and the campus map, its page button opening that page', async () => {
    const { settings, container, openMainTab, setMod } = harness()
    await settle()
    fireEvent.click(tabOf(container, 'campus'))
    await settle()
    expect(settings.mode).toBe('campus')
    const header = container.querySelector('.panel-header')!
    expect(header.querySelector('.panel-title')?.textContent).toBe('Campus map')
    expect(tabOf(container, 'campus').getAttribute('aria-selected')).toBe('true')
    expect(container.querySelector('.poly-tiles')).toBeNull()
    expect(container.querySelector('.poly-search-bar .search-field-input')).not.toBeNull()
    fireEvent.click(header.querySelector('.plugin-open-page')!)
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'campus', title: 'Campus map', newTab: false })
    setMod(true)
    fireEvent.click(header.querySelector('.plugin-open-page')!)
    expect(openMainTab.mock.calls.at(-1)?.[0]).toMatchObject({ newTab: true, instanceId: expect.stringMatching(/^campus-/) })
    fireEvent.keyDown(tabOf(container, 'campus'), { key: 'ArrowLeft' })
    await settle()
    expect(settings.mode).toBe('menu')
    expect(container.querySelector('.poly-tiles')).not.toBeNull()
  })

  it('reorders the feature tabs by dragging one or with Option and an arrow key, and keeps the order', async () => {
    const order = (container: HTMLElement) => [...container.querySelectorAll('.poly-tab')].map(tab => tab.getAttribute('data-mode'))
    const { settings, container } = harness({ tabOrder: ['campus', 'menu'] })
    await settle()
    // A saved order is completed with the missing tabs; the campus tab carries ETH's main building.
    expect(order(container)).toEqual(['campus', 'menu', 'elink', 'news', 'polybox'])
    expect(tabOf(container, 'campus').querySelectorAll('path').length).toBeGreaterThan(10)
    fireEvent.keyDown(tabOf(container, 'campus'), { key: 'ArrowRight', altKey: true })
    await settle()
    expect(settings.tabOrder).toEqual(['menu', 'campus', 'elink', 'news', 'polybox'])
    expect(order(container)).toEqual(['menu', 'campus', 'elink', 'news', 'polybox'])
    expect(settings.mode).toBeUndefined()
    // A drag of two tab widths to the left puts the eLink tab first; the drag is not a click.
    const tab = tabOf(container, 'elink')
    tab.getBoundingClientRect = () => ({ x: 0, y: 0, left: 0, top: 0, right: 30, bottom: 26, width: 30, height: 26, toJSON: () => ({}) })
    fireEvent.pointerDown(tab, { button: 0, clientX: 100, pointerId: 1 })
    fireEvent.pointerMove(window, { clientX: 70, pointerId: 1 })
    fireEvent.pointerMove(window, { clientX: 38, pointerId: 1 })
    expect(order(container)).toEqual(['elink', 'menu', 'campus', 'news', 'polybox'])
    expect(tabOf(container, 'elink').className).toContain('dragging')
    fireEvent.pointerUp(window, { clientX: 38, pointerId: 1 })
    fireEvent.click(tabOf(container, 'elink'))
    await settle()
    expect(settings.tabOrder).toEqual(['elink', 'menu', 'campus', 'news', 'polybox'])
    expect(settings.mode).toBeUndefined()
    expect(tabOf(container, 'elink').className).not.toContain('dragging')
    expect(tabOrderOf(['x', 'menu', 'menu'])).toEqual(['menu', 'elink', 'campus', 'news', 'polybox'])
    expect(moveTab(['elink', 'menu', 'campus'], 'elink', 9)).toEqual(['menu', 'campus', 'elink'])
  })

  it('reads 2.0.0\'s city tab as the campus map and saves it under its new name', async () => {
    const { settings, container } = harness({ mode: 'city' })
    await settle()
    expect(settings.mode).toBe('campus')
    expect(container.querySelector('.panel-title')?.textContent).toBe('Campus map')
  })

  it('lists the buildings by campus, searches them and selects one with its address, link and floors', async () => {
    const { api, settings, container, openMainTab } = harness({ mode: 'campus' })
    await settle()
    const groups = [...container.querySelectorAll('.poly-group[data-group]')].map(group => [group.getAttribute('data-group'), group.querySelector('.poly-group-count')?.textContent])
    expect(groups).toEqual([['zentrum', '68'], ['hoengg', '35'], ['other', '122'], ['zurich', '15']])
    // Other sites start folded.
    expect(container.querySelector('[data-group="other"] .poly-building-row')).toBeNull()
    const input = container.querySelector('.search-field-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'hoenggerbergring' } })
    await settle()
    expect([...container.querySelectorAll('.poly-building-row-code')].map(row => row.textContent)).toContain('HIG')
    expect([...container.querySelectorAll('.poly-building-row-sub')].every(row => row.textContent?.includes('Hönggerbergring'))).toBe(true)
    expect(container.querySelector('[data-group="zentrum"]')).toBeNull()
    fireEvent.change(input, { target: { value: 'HG' } })
    await settle()
    expect(container.querySelector('.poly-building-row-code')?.textContent).toBe('HG')
    fireEvent.keyDown(input, { key: 'Enter' })
    await settle()
    expect(settings.building).toBe('HG')
    expect(settings.level).toBe('')
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'campus', title: 'Campus map', newTab: false })
    const card = container.querySelector('.poly-building')!
    expect(card.querySelector('.poly-building-address')?.textContent).toBe('Rämistrasse 101, 8092 Zürich')
    expect(card.querySelector('a')?.getAttribute('href')).toBe('https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HG')
    expect(card.querySelector('.poly-building-meta')?.textContent).toBe('ETH Zentrum · 3 floors with rooms')
    expect(container.querySelector('[data-building="HG"]')?.classList.contains('active')).toBe(true)
    // A plain strip at the bottom of the sidebar, below the scrolling list: code, address, campus and floors, link; no buttons.
    expect([...card.children].map(child => child.className)).toEqual(['poly-building-code', 'poly-icon-btn poly-building-close', 'poly-building-address', 'poly-building-meta', 'poly-building-link'])
    expect(card.querySelector('.poly-building-code')?.textContent).toBe('HG')
    expect([...card.querySelectorAll('button')].map(button => button.getAttribute('aria-label'))).toEqual(['Clear the selection'])
    expect(container.querySelector('.poly-panel > .poly-building')?.previousElementSibling?.classList.contains('poly-campus-list')).toBe(true)
    // The four groups stay the same in 3D: ETH Zentrum, ETH Hönggerberg, Other sites, Zürich.
    await act(async () => { await api.settings.set('campusView', '3d') })
    fireEvent.change(input, { target: { value: '' } })
    await settle()
    expect([...container.querySelectorAll('.poly-group-name')].map(name => name.textContent)).toEqual(['ETH Zentrum', 'ETH Hönggerberg', 'Other sites', 'Zürich'])
    fireEvent.click(screen.getByRole('button', { name: 'Clear the selection' }))
    await settle()
    expect(settings.building).toBe('')
    expect(container.querySelector('.poly-building')).toBeNull()
  })

  it('flies the 2D map to a Zürich place from the fourth group, and filters the places by the search', async () => {
    const { container, openMainTab } = harness({ mode: 'campus' })
    await settle()
    fireEvent.click(container.querySelector('[data-group="zurich"] .poly-group-head')!)
    const rows = [...container.querySelectorAll('[data-place]')]
    expect(rows[0].textContent).toBe('Zürich HB')
    fireEvent.click(container.querySelector('[data-place="lindenhof"]')!)
    expect(getCampus().place).toMatchObject({ center: [8.54083, 47.37292], request: 1 })
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'campus', title: 'Campus map', newTab: false })
    fireEvent.change(container.querySelector('.search-field-input')!, { target: { value: 'grossmunster' } })
    await settle()
    expect([...container.querySelectorAll('[data-place]')].map(row => row.textContent)).toEqual(['Grossmünster'])
  })

  it('searches rooms by number, then opens the room on its floor', async () => {
    const { settings, container, calls, openMainTab } = harness({ mode: 'campus' })
    await settle()
    const input = container.querySelector('.search-field-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'hg e5' } })
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 300)) })
    await settle()
    expect(calls.find(([name]) => name === 'campus.searchRooms')?.[1]).toEqual({ query: { building: 'HG', floor: 'E', number: '5' } })
    const rows = [...container.querySelectorAll('[data-group="rooms"] .poly-building-row')]
    expect(rows.map(row => row.querySelector('.poly-building-row-code')?.textContent)).toEqual(['HG E 5', 'HG E 7', 'HG E 9'])
    expect(rows[0].querySelector('.poly-building-row-sub')?.textContent).toBe('Hörsaal · Lecture Hall')
    fireEvent.click(rows[0])
    await settle()
    expect(settings.building).toBe('HG')
    expect(settings.level).toBe('ETH.HG.E')
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'campus', title: 'Campus map', newTab: false })
    expect(container.querySelector('[data-room="ETH.HG.E.E_5"]')?.classList.contains('active')).toBe(true)
  })

  it('shows the campus map on a campus page with the floor strip, and the menu plan on the others', async () => {
    const { container, calls, settings } = harness({ building: 'HG' }, 'poly.page', { instanceId: 'campus' })
    await settle()
    expect(container.querySelector('.poly-campus-page .poly-map-stage')).not.toBeNull()
    expect(container.querySelector('.poly-page-title')?.textContent).toBe('HG · Rämistrasse 101, 8092 Zürich')
    // The page's bar names the building only; Search | 3D | Map live in the sidebar's box.
    expect(container.querySelector('.poly-page-head button')).toBeNull()
    // Map's round controls: zoom in, zoom out and the 2D/3D switch, which names the view it switches to.
    expect([...container.querySelectorAll('.poly-map-controls button')].map(button => button.getAttribute('aria-label'))).toEqual(['Zoom in', 'Zoom out', 'Show in 3D'])
    expect(container.querySelector('.poly-map-controls [data-view="3d"]')?.textContent).toBe('3D')
    expect(calls.map(([name]) => name)).toEqual(expect.arrayContaining(['campus.outlines', 'campus.levels']))
    const floors = [...container.querySelectorAll('.poly-floors button')].map(button => button.textContent)
    expect(floors).toEqual(['F', 'E', 'D'])
    fireEvent.click(container.querySelector('.poly-floors button[title="Show floor E"]')!)
    await settle()
    expect(settings.level).toBe('ETH.HG.E')
    expect(calls.at(-1)).toEqual(['campus.rooms', { level: 'ETH.HG.E' }])
    expect(container.querySelector('.poly-legend')?.textContent).toContain('Teaching')
    expect(container.querySelector('.poly-floors .active')?.textContent).toBe('E')
  })

  it('opens 2.0.0\'s city tabs as the campus page and shows the 3D model in 3D', async () => {
    // jsdom has no WebGL: three logs that it cannot create a context, which the view itself reports.
    const logged: unknown[][] = []
    vi.spyOn(console, 'error').mockImplementation((...args: unknown[]) => { logged.push(args) })
    const { container, settings } = harness({ campusView: '3d' }, 'poly.page', { instanceId: 'city' })
    await settle()
    fireEvent.click(container.querySelector('.poly-map-controls [data-view="map"]')!)
    expect(settings.campusView).toBe('map')
    await settle()
    expect(container.querySelector('.poly-map-controls [data-control]')).toBeNull()
    fireEvent.click(container.querySelector('.poly-map-controls [data-view="3d"]')!)
    expect(settings.campusView).toBe('3d')
    await settle()
    // In 3D only: colour by height and the ground switch, as round buttons.
    expect([...container.querySelectorAll('.poly-map-controls [data-control]')].map(button => button.getAttribute('data-control'))).toEqual(['colour', 'ground'])
    fireEvent.click(container.querySelector('.poly-map-controls [data-control="colour"]')!)
    expect(settings.colorMode).toBe('height')
    fireEvent.click(container.querySelector('.poly-map-controls [data-control="ground"]')!)
    expect(settings.showGround).toBe(false)
    expect(container.querySelector('.poly-campus-page .z3d-stage')).not.toBeNull()
    expect(container.querySelector('.poly-map-stage')).toBeNull()
    expect(container.querySelector('.poly-page-title')?.textContent).toBe('Campus map')
    expect(logged.flat().join(' ')).toContain('Error creating WebGL context')
  })

  it('shows the menu plan on a place page', async () => {
    const { container } = harness({}, 'poly.page', {})
    await settle()
    expect(container.querySelector('.poly-campus-page')).toBeNull()
    expect(container.querySelector('.poly-page')).not.toBeNull()
  })
})

describe('catalogs', () => {
  it('keep the same keys in all five languages', () => {
    const keys = Object.keys(en).sort()
    for (const catalog of [de, es, fr, zh]) expect(Object.keys(catalog).sort()).toEqual(keys)
    expect(Object.values(de).join(' ')).not.toMatch(/�/)
  })
})
