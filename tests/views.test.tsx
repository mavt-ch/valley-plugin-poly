import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { registerStudyViews } from '../src/views'
import { parseEthFacilities, parseEthWeek, parseUzhOutlet, parseUzhOutlets, parseUzhWeek, isHoenggerberg, uzhLocation, today, mondayOf } from '../src/model'
import { DISH_IMAGE, ETH_FACILITIES, ETH_ROTAS, ETH_ROTAS_DE, UZH_LUNCH, UZH_ORG, UZH_OUTLET } from './fixtures'
import { ethMealsById } from '../src/model'
import en from '../locales/en.json'
import de from '../locales/de.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import zh from '../locales/zh-CN.json'

const t = (key: string) => (en as Record<string, string>)[key] ?? key
const settle = () => act(async () => { for (let i = 0; i < 5; i++) await new Promise(resolve => setTimeout(resolve, 0)) })

/** The fixtures' Wednesday, served for whatever week the panel asks. */
function shift<T>(value: T, from: string, to: string): T { return JSON.parse(JSON.stringify(value).replaceAll(from, to)) }

function harness(settings: Record<string, unknown> = {}, view = 'study.panel') {
  vi.useFakeTimers({ toFake: ['Date'], now: new Date(2026, 10, 25, 12, 0) })
  const mock = createMockValleyApi()
  const api = mock.api
  const listeners = new Set<() => void>()
  const views = new Map<string, ComponentType>()
  const calls: [string, Record<string, unknown>][] = []
  const facilities = parseEthFacilities(ETH_FACILITIES).filter(isHoenggerberg)
  api.backend.call = vi.fn(async (name: string, input: Record<string, unknown>) => {
    calls.push([name, input])
    const monday = input.monday as string
    if (name === 'eth.week') return shift(parseEthWeek(ETH_ROTAS, facilities, '2026-11-23', ethMealsById(ETH_ROTAS_DE)), '2026-11-2', monday.slice(0, 9))
    if (name === 'uzh.outlets') return parseUzhOutlets(UZH_ORG)
    if (name === 'image') return `data:image/jpeg;base64,${btoa(String(input.url))}`
    if (name === 'uzh.dish') return { image: DISH_IMAGE, prices: [{ group: 'students', price: 6.1 }, { group: 'internal', price: 9 }] }
    if (name === 'uzh.week') return uzhLocation(parseUzhOutlets(UZH_ORG)[0], parseUzhOutlet(UZH_OUTLET)!, [{ service: 'lunch', days: parseUzhWeek(UZH_LUNCH) }], monday, 'en')
    throw new Error('serviceError')
  }) as unknown as typeof api.backend.call
  api.settings.get = () => settings
  api.settings.set = vi.fn(async (key: string, value: unknown) => { settings[key] = value; for (const listener of [...listeners]) listener(); return { ok: true } }) as unknown as typeof api.settings.set
  api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
  api.ui.language = () => 'en'
  const open = vi.fn(async () => true)
  api.links.open = open as unknown as typeof api.links.open
  api.registerView = vi.fn((key: string, view: ComponentType) => { views.set(key, view) }) as unknown as typeof api.registerView
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  const setTitle = vi.fn()
  api.workspace.setMainTabTitle = setTitle as unknown as typeof api.workspace.setMainTabTitle
  api.ui.hasModKey = (() => false) as typeof api.ui.hasModKey
  registerStudyViews(api, { t })
  render(api.React.createElement(views.get(view)!))
  return { api, calls, settings, open, openMainTab, setTitle }
}

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('menu plan panel', () => {
  it('shows today’s ETH Hönggerberg lunch with student prices', async () => {
    expect(today()).toBe('2026-11-25')
    const { calls } = harness()
    await settle()
    expect(calls[0]).toEqual(['eth.week', { monday: mondayOf('2026-11-25'), language: 'en', fresh: false }])
    expect(screen.getByText('Menu plan')).toBeTruthy()
    expect(screen.getByTitle('Wednesday, November 25, 2026 · Today').getAttribute('aria-current')).toBe('date')
    expect(screen.getByText('Wed 25')).toBeTruthy()
    expect(screen.getByText('Test Hall')).toBeTruthy()
    expect(screen.queryByText('Ring Bistro')).toBeNull()
    expect(screen.getByText('11:00–13:30')).toBeTruthy()
    expect(screen.getByText('Lentil curry')).toBeTruthy()
    expect(screen.getAllByText('CHF 7.50')).toHaveLength(2)
    expect(screen.getByText('Vegan')).toBeTruthy()
  })

  it('switches to dinner and the staff price, and opens a dish’s details', async () => {
    harness({ priceGroup: 'internal' })
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }))
    expect(screen.getByText('Pasta al forno')).toBeTruthy()
    expect(screen.getByText('CHF 10.50')).toBeTruthy()
    fireEvent.click(screen.getByText('Pasta al forno'))
    expect(screen.getByText('Allergens: celery')).toBeTruthy()
    expect(screen.getByText('Students CHF 7.50 · Staff CHF 10.50 · Guests CHF 13.50')).toBeTruthy()
  })

  it('moves through the days and back to today', async () => {
    const { calls } = harness()
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Next day' }))
    await settle()
    expect(screen.getByText('No outlet serves lunch on this day.')).toBeTruthy()
    for (let i = 0; i < 5; i++) fireEvent.click(screen.getByRole('button', { name: 'Next day' }))
    await settle()
    expect(calls.at(-1)).toEqual(['eth.week', { monday: '2026-11-30', language: 'en', fresh: false }])
    const away = screen.getByTitle(/Back to today$/)
    expect(away.getAttribute('aria-current')).toBeNull()
    fireEvent.click(away)
    await settle()
    expect(screen.getByText('Lentil curry')).toBeTruthy()
  })

  it('folds an outlet and remembers it', async () => {
    const { settings } = harness()
    await settle()
    fireEvent.click(screen.getByText('Test Hall'))
    expect(settings.folded).toEqual(['eth:1'])
    expect(screen.queryByText('Lentil curry')).toBeNull()
  })

  it('shows UZH outlets by campus and reads only the open ones', async () => {
    const { calls, settings } = harness({ source: 'uzh' })
    await settle()
    expect(screen.getByText('Campus Zentrum')).toBeTruthy()
    expect(screen.getByText('Campus Irchel')).toBeTruthy()
    expect(screen.getByText('COUSCOUS BOWL')).toBeTruthy()
    expect(screen.getByText('Low climate impact')).toBeTruthy()
    expect(calls.filter(([name]) => name === 'uzh.week').map(([, input]) => input.path)).toEqual(['universitat-zurich,campus-zentrum/obere-mensa'])
    fireEvent.click(screen.getByText('Seerose'))
    await settle()
    expect(settings.opened).toEqual(['uzh:universitat-zurich,campus-irchel/seerose'])
    expect(calls.filter(([name]) => name === 'uzh.week')).toHaveLength(2)
  })

  it('switches the university and refreshes past the cache', async () => {
    const { calls, settings } = harness()
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'UZH' }))
    expect(settings.source).toBe('uzh')
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))
    await settle()
    expect(calls.at(-1)?.[1].fresh).toBe(true)
  })

  it('names a failing service', async () => {
    const { api } = harness()
    await settle()
    ;(api.backend.call as unknown as { mockImplementation: (fn: () => Promise<never>) => void }).mockImplementation(async () => { throw new Error('networkError') })
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))
    await settle()
    expect(screen.getByRole('alert').textContent).toBe('The menu service could not be reached.')
  })
})

describe('menu plan page', () => {
  it('opens from the panel', async () => {
    const { openMainTab } = harness()
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Open the menu plan page' }))
    expect(openMainTab).toHaveBeenCalledWith({ newTab: false })
  })

  it('shows ETH dishes as cards with their pictures and the full date', async () => {
    const { calls, setTitle } = harness({}, 'study.page')
    await settle()
    expect(setTitle).toHaveBeenCalledWith('Menu plan', undefined)
    expect(screen.getByText('Wednesday, November 25')).toBeTruthy()
    const picture = screen.getByAltText('Lentil curry') as HTMLImageElement
    expect(picture.src).toBe(`data:image/jpeg;base64,${btoa('https://idapps.ethz.ch/cookpit-pub-services/v1/images/5001?client-id=ethz-wcms')}`)
    expect(screen.queryByAltText('Bratwurst')).toBeNull()
    expect(calls.filter(([name]) => name === 'image')).toHaveLength(1)
    fireEvent.click(screen.getByText('Lentil curry'))
    expect(screen.getByText('Allergens: celery')).toBeTruthy()
  })

  it('reads a UZH dish page for its picture and price', async () => {
    const { calls } = harness({ source: 'uzh' }, 'study.page')
    await settle()
    expect(calls.some(([name, input]) => name === 'uzh.dish' && String(input.url).endsWith('/lunch,menu-1/2026-11-25'))).toBe(true)
    expect((screen.getByAltText('COUSCOUS BOWL') as HTMLImageElement).src).toBe(`data:image/jpeg;base64,${btoa(DISH_IMAGE)}`)
    expect(screen.getByText('CHF 6.10')).toBeTruthy()
  })

  it('opens the university’s own website from the page bar', async () => {
    const { open } = harness({ source: 'uzh' }, 'study.page')
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Open website' }))
    expect(open).toHaveBeenCalledWith('https://www.mensa.uzh.ch/de/Standorte-und-Verpflegung.html')
  })
})

describe('catalogs', () => {
  it('keep the same keys in all five languages', () => {
    const keys = Object.keys(en).sort()
    for (const catalog of [de, es, fr, zh]) expect(Object.keys(catalog).sort()).toEqual(keys)
    expect(Object.values(de).join(' ')).not.toMatch(/�/)
  })
})
