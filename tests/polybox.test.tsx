import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { createPolyboxViews } from '../src/polybox/views'
import { isSharePath, keptPath, linksOf, normalizeUrl, parsePasted, shareDavUrl, shareTitle, shareToken, sortFiles, subjectInstance, subjectOf, type PolyboxFile } from '../src/polybox/model'
import en from '../locales/en.json'

const t = (key: string) => (en as Record<string, string>)[key] ?? key
const settle = () => act(async () => { for (let i = 0; i < 6; i++) await new Promise(resolve => setTimeout(resolve, 0)) })
const SHARE = 'https://polybox.ethz.ch/index.php/s/AbCdEf1234567'
const OTHER = 'https://polybox.ethz.ch/index.php/s/ZyXwVu9876543'
const dav = (path: string) => `${shareDavUrl('AbCdEf1234567')}${path}`
const ROOT: PolyboxFile[] = [
  { name: 'Serie 10.pdf', path: 'Serie 10.pdf', isFolder: false, size: 362419, created: '2026-11-20T09:00:00.000Z', modified: '2026-11-26T14:55:14.000Z', type: 'application/pdf', url: dav('Serie%2010.pdf') },
  { name: 'Übungsstunden', path: 'Übungsstunden', isFolder: true, modified: '2026-11-27T13:02:21.000Z', url: dav('%C3%9Cbungsstunden/') },
  { name: 'Serie 2.pdf', path: 'Serie 2.pdf', isFolder: false, size: 104601, modified: '2026-09-23T16:18:49.000Z', type: 'application/pdf', url: dav('Serie%202.pdf') }
]
const LESSONS: PolyboxFile[] = [{ name: 'Lektion 01.pdf', path: 'Übungsstunden/Lektion 01.pdf', isFolder: false, size: 6870585, type: 'application/pdf', url: dav('%C3%9Cbungsstunden/Lektion%2001.pdf') }]

function harness(view: 'panel' | 'page', settings: Record<string, unknown> = {}, instanceId?: string, locked?: { password: string }) {
  const { api } = createMockValleyApi()
  const listeners = new Set<() => void>()
  const calls: [string, Record<string, unknown>][] = []
  api.backend.call = vi.fn(async (name: string, input: Record<string, unknown>) => {
    calls.push([name, input])
    if (name === 'polybox.title' && locked) return ''
    if (name === 'polybox.title') return input.token === 'AbCdEf1234567' ? 'Analysis I - HS26' : 'Physik I'
    if (name === 'polybox.unlock') { if (input.password !== locked?.password) return { ok: false, reason: 'rejected' }; locked = undefined; return { ok: true } }
    if (name === 'polybox.list' && locked) throw new Error('polyboxPassword')
    if (name === 'polybox.list') return input.path === 'Übungsstunden' ? LESSONS : ROOT
    if (name === 'polybox.keep') return `.valley/plugins/data/poly/polybox/${input.token}/${input.path}`
    if (name === 'polybox.forget') return 0
    throw new Error('serviceError')
  }) as unknown as typeof api.backend.call
  api.settings.get = () => settings
  api.settings.set = vi.fn(async (key: string, value: unknown) => { settings[key] = value; for (const listener of [...listeners]) listener(); return { ok: true } }) as unknown as typeof api.settings.set
  api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
  api.ui.language = () => 'en'
  api.ui.hasModKey = (() => false) as typeof api.ui.hasModKey
  api.getState = (() => ({ activePluginTab: null })) as unknown as typeof api.getState
  const menus: { id?: string; label?: string }[][] = []
  let choice: string | null = null
  api.ui.openMenu = vi.fn(async (items: { id?: string; label?: string }[]) => { menus.push(items); return choice }) as unknown as typeof api.ui.openMenu
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  const setTitle = vi.fn()
  api.workspace.setMainTabTitle = setTitle as unknown as typeof api.workspace.setMainTabTitle
  const open = vi.fn(async () => ({ ok: true }))
  api.links.open = open as unknown as typeof api.links.open
  const openFile = vi.fn()
  api.workspace.openFile = openFile as unknown as typeof api.workspace.openFile
  const goBack = vi.fn(), goForward = vi.fn()
  api.workspace.goBack = goBack as unknown as typeof api.workspace.goBack
  api.workspace.goForward = goForward as unknown as typeof api.workspace.goForward
  const system = vi.fn(), finder = vi.fn(), inFiles = vi.fn()
  const ownData = vi.fn(async () => ({ status: 'opened' as const }))
  api.files.openOwnData = ownData as unknown as typeof api.files.openOwnData
  Object.defineProperty(api, 'pluginId', { value: 'poly', configurable: true })
  api.files.openWithDefaultApp = system as unknown as typeof api.files.openWithDefaultApp
  api.files.revealInFinder = finder as unknown as typeof api.files.revealInFinder
  api.files.revealLabel = (() => 'Show in Finder') as typeof api.files.revealLabel
  api.workspace.revealInFiles = inFiles as unknown as typeof api.workspace.revealInFiles
  const copy = vi.fn(async () => undefined)
  api.ui.writeClipboardText = copy as unknown as typeof api.ui.writeClipboardText
  const views = createPolyboxViews(api, t)
  let controller: { canGoBack: boolean; canGoForward: boolean; goBack(): void; goForward(): void } | null = null
  const navigation = { setController: (next: typeof controller) => { controller = next } }
  const { container } = render(api.React.createElement(view === 'panel' ? views.PolyboxPanelBody : views.PolyboxPage, { instanceId, navigation } as never))
  return { copy, settings, calls, open, openFile, system, finder, inFiles, ownData, goBack, controller: () => controller, openMainTab, setTitle, menus, container, choose: (id: string | null) => { choice = id } }
}
const paste = (target: Element, text: string) => fireEvent.paste(target, { clipboardData: { getData: (type: string) => type === 'text/plain' ? text : '' } })

afterEach(cleanup)

describe('Polybox model', () => {
  it('knows share links, share paths and the share title, and reads pasted lines', () => {
    expect(shareToken(SHARE)).toBe('AbCdEf1234567')
    expect(shareToken('https://polybox.ethz.ch/s/AbCdEf1234567?path=%2F')).toBe('AbCdEf1234567')
    expect(shareToken('https://polybox.ethz.ch/apps/files/')).toBeNull()
    expect(shareToken('https://example.com/index.php/s/AbCdEf1234567')).toBeNull()
    expect(normalizeUrl(' polybox.ethz.ch/index.php/s/AbCdEf1234567 ')).toBe(SHARE)
    expect(parsePasted(`Analysis I\t${SHARE}\n\n${OTHER}`)).toEqual([{ name: 'Analysis I', url: SHARE }, { name: '', url: OTHER }])
    expect(linksOf([{ name: ' A ', url: ' x ' }, { name: '', url: '' }, 'junk'])).toEqual([{ name: 'A', url: 'x' }])
    expect(subjectOf(subjectInstance('AbCdEf1234567'))).toBe('AbCdEf1234567')
    expect(subjectOf('polybox')).toBeNull()
    expect(subjectOf('polybox:../x')).toBeNull()
    expect(['', 'a', 'a/b c', 'Übungsstunden/Woche 1'].every(isSharePath)).toBe(true)
    expect(['/a', 'a/', 'a//b', '..', 'a/../b', './a'].some(isSharePath)).toBe(false)
    expect(shareTitle('<meta property="og:title" content="Analysis I - HS26 - MAVT - H&ouml;cker &amp; Co">')).toBe('Analysis I - HS26 - MAVT - Höcker & Co')
    expect(shareTitle('<html></html>')).toBe('')
    expect(sortFiles(ROOT).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    expect(sortFiles(ROOT, { key: 'name', dir: 'desc' }).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    expect(sortFiles(ROOT, { key: 'size', dir: 'asc' }).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    expect(sortFiles(ROOT, { key: 'modified', dir: 'desc' }).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    // A file without a creation date goes last whichever way the column is sorted.
    expect(sortFiles(ROOT, { key: 'created', dir: 'asc' }).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    expect(sortFiles(ROOT, { key: 'created', dir: 'desc' }).map(file => file.name)).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    expect(keptPath('AbCdEf1234567', 'Übungsstunden/Lektion 01.pdf')).toBe('AbCdEf1234567/Übungsstunden/Lektion 01.pdf')
    expect(keptPath('AbCdEf1234567', '.env/a:b')).toBe('AbCdEf1234567/env/a b')
  })
})

describe('Polybox sidebar', () => {
  it('adds pasted share links, names them after the share and refuses other links', async () => {
    const { container, settings } = harness('panel')
    const input = container.querySelector('.pbx-add-bar input')!
    expect(container.querySelector('.pbx-empty')?.textContent).toContain('No subjects yet')
    paste(input, `${SHARE}\nhttps://example.com/x`)
    await settle()
    expect(settings.polyboxLinks).toEqual([{ name: 'Analysis I - HS26', url: SHARE }])
    expect(container.querySelector('[role="alert"]')?.textContent).toContain('Not a Polybox share link')
    // A link already listed is not added twice; a typed one is added with Enter.
    fireEvent.change(input, { target: { value: `${SHARE}` } })
    fireEvent.keyDown(input, { key: 'Enter' })
    fireEvent.change(input, { target: { value: OTHER } })
    fireEvent.keyDown(input, { key: 'Enter' })
    await settle()
    expect((settings.polyboxLinks as { name: string }[]).map(link => link.name)).toEqual(['Analysis I - HS26', 'Physik I'])
    expect((input as HTMLInputElement).value).toBe('')
    const rows = [...container.querySelectorAll('.pbx-row')]
    expect(rows.map(row => [row.querySelector('.pbx-row-name')?.textContent, row.querySelector('.pbx-row-meta')?.textContent])).toEqual([
      ['Analysis I - HS26', 'polybox.ethz.ch · AbCdEf1234567'], ['Physik I', 'polybox.ethz.ch · ZyXwVu9876543']])
  })

  it('opens a subject\'s page, renames it with a double click and removes it from its menu', async () => {
    const { container, settings, calls, openMainTab, open, choose } = harness('panel', { polyboxLinks: [{ name: 'Analysis I', url: SHARE }] })
    const row = () => container.querySelector('.pbx-row')!
    fireEvent.click(row())
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: 'polybox:AbCdEf1234567', title: 'Analysis I', newTab: false })
    fireEvent.doubleClick(row())
    const field = container.querySelector('.pbx-rename') as HTMLInputElement
    fireEvent.change(field, { target: { value: 'Analysis' } })
    fireEvent.keyDown(field, { key: 'Enter' })
    await settle()
    expect(settings.polyboxLinks).toEqual([{ name: 'Analysis', url: SHARE }])
    choose('website')
    fireEvent.contextMenu(row())
    await settle()
    expect(open).toHaveBeenLastCalledWith(SHARE)
    choose('remove')
    fireEvent.contextMenu(row())
    await settle()
    expect(settings.polyboxLinks).toEqual([])
    // Its kept files go with it; on start the files of shares no longer listed were cleaned up.
    expect(calls.filter(([name]) => name === 'polybox.forget').map(([, input]) => input)).toEqual([{ keep: ['AbCdEf1234567'] }, { token: 'AbCdEf1234567' }])
  })
})

describe('Polybox page', () => {
  it('lists the share\'s folders first, opens a folder in place and a file in Valley\'s viewer', async () => {
    const { container, calls, open, openFile, system, ownData, setTitle } = harness('page', { polyboxLinks: [{ name: 'Analysis I', url: SHARE }] }, 'polybox:AbCdEf1234567')
    await settle()
    expect(setTitle).toHaveBeenCalledWith('Analysis I', 'polybox:AbCdEf1234567')
    expect(calls.at(-1)).toEqual(['polybox.list', { token: 'AbCdEf1234567', path: '', fresh: false }])
    const names = () => [...container.querySelectorAll('.pbx-file-name')].map(name => name.textContent)
    expect(names()).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    expect(container.querySelector('[data-path="Serie 10.pdf"] .pbx-file-size')?.textContent).toBe('362 KB')
    // A file is kept in Polybox's data folder and opens read-only in Valley's own viewer.
    fireEvent.click(container.querySelector('[data-path="Serie 2.pdf"]')!)
    await settle()
    expect(calls.at(-1)).toEqual(['polybox.keep', { token: 'AbCdEf1234567', path: 'Serie 2.pdf' }])
    expect(ownData).toHaveBeenLastCalledWith('polybox/AbCdEf1234567/Serie 2.pdf', { newTab: false, title: 'Serie 2.pdf' })
    expect(system).not.toHaveBeenCalled()
    expect(openFile).not.toHaveBeenCalled()
    expect(open).not.toHaveBeenCalled()
    fireEvent.click(container.querySelector('[data-path="Übungsstunden"]')!)
    await settle()
    expect(names()).toEqual(['Lektion 01.pdf'])
    expect([...container.querySelectorAll('.pbx-crumb')].map(crumb => crumb.textContent)).toEqual(['', 'Übungsstunden'])
    fireEvent.click(container.querySelector('.pbx-crumb')!)
    await settle()
    expect(names()).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    fireEvent.click(container.querySelector('button[aria-label="Refresh"]')!)
    await settle()
    expect(calls.at(-1)?.[1].fresh).toBe(true)
  })

  it('offers Valley, a new tab, the default app, Finder and Polybox in a file\'s menu', async () => {
    const { container, menus, choose, openFile, system, finder, ownData, open } = harness('page', { polyboxLinks: [{ name: 'Analysis I', url: SHARE }] }, 'polybox:AbCdEf1234567')
    await settle()
    const row = () => container.querySelector('[data-path="Serie 2.pdf"]')!
    choose('finder')
    fireEvent.contextMenu(row())
    await settle()
    expect(menus.at(-1)?.map(item => item.label)).toEqual(['Open in Valley', 'Open in new tab', 'Open with default app', 'Show in Finder', undefined, 'Open in Polybox'])
    expect(finder).toHaveBeenLastCalledWith('.valley/plugins/data/poly/polybox/AbCdEf1234567/Serie 2.pdf')
    choose('system'); fireEvent.contextMenu(row()); await settle()
    expect(system).toHaveBeenLastCalledWith('.valley/plugins/data/poly/polybox/AbCdEf1234567/Serie 2.pdf')
    choose('tab'); fireEvent.contextMenu(row()); await settle()
    expect(ownData).toHaveBeenLastCalledWith('polybox/AbCdEf1234567/Serie 2.pdf', { newTab: true, title: 'Serie 2.pdf' })
    choose('website'); fireEvent.contextMenu(row()); await settle()
    expect(open).toHaveBeenLastCalledWith(SHARE)
    expect(openFile).not.toHaveBeenCalled()
    // A refusal from Valley shows in plain words.
    ownData.mockResolvedValueOnce({ status: 'refused', reason: 'missing' } as never)
    fireEvent.click(row()); await settle()
    expect(container.querySelector('[role="alert"]')?.textContent).toBe('This share or folder no longer exists.')
  })

  it('steps back and forward through the folders with the host\'s back and forward', async () => {
    const { container, controller, goBack } = harness('page', { polyboxLinks: [{ name: 'Analysis I', url: SHARE }] }, 'polybox:AbCdEf1234567')
    await settle()
    const names = () => [...container.querySelectorAll('.pbx-file-name')].map(name => name.textContent)
    expect(controller()).toMatchObject({ canGoBack: false, canGoForward: false })
    fireEvent.click(container.querySelector('[data-path="Übungsstunden"]')!)
    await settle()
    expect(names()).toEqual(['Lektion 01.pdf'])
    expect(controller()).toMatchObject({ canGoBack: true, canGoForward: false })
    act(() => controller()!.goBack())
    await settle()
    expect(names()).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    expect(controller()).toMatchObject({ canGoBack: false, canGoForward: true })
    act(() => controller()!.goForward())
    await settle()
    expect(names()).toEqual(['Lektion 01.pdf'])
    // A stale copy of the root controller still steps the newest trail; at the top folder the tab's own history takes over.
    act(() => controller()!.goBack())
    await settle()
    expect(names()).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    act(() => controller()!.goBack())
    expect(goBack).toHaveBeenCalledOnce()
  })

  it('names the subject with a copy-link button, shows the path from "/", titles the columns and switches between list and grid', async () => {
    const { container, settings, copy } = harness('page', { polyboxLinks: [{ name: 'Analysis I', url: SHARE }] }, 'polybox:AbCdEf1234567')
    await settle()
    expect(container.querySelector('.poly-page-title')?.textContent).toBe('Analysis I')
    expect(container.querySelector('.poly-page-head button[aria-label="Open in Polybox"]')).toBeNull()
    fireEvent.click(container.querySelector('button[aria-label="Copy link"]')!)
    await settle()
    expect(copy).toHaveBeenLastCalledWith(SHARE)
    expect(container.querySelector('button[aria-label="Link copied"]')).not.toBeNull()
    expect(container.querySelector('.pbx-crumb.root svg')).not.toBeNull()
    expect(container.querySelector('.pbx-crumb.root')?.getAttribute('aria-label')).toBe('Analysis I')
    expect([...container.querySelectorAll('.pbx-col')].map(col => col.textContent)).toEqual(['Name', 'Date created', 'Date modified', 'Size'])
    const names = () => [...container.querySelectorAll('.pbx-file-name')].map(name => name.textContent)
    expect(container.querySelector('.pbx-col.name')?.getAttribute('aria-sort')).toBe('ascending')
    fireEvent.click(container.querySelector('.pbx-col.name')!)
    await settle()
    expect(settings.polyboxSort).toEqual({ key: 'name', dir: 'desc' })
    expect(names()).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    fireEvent.click(container.querySelector('.pbx-col.size')!)
    await settle()
    expect(settings.polyboxSort).toEqual({ key: 'size', dir: 'asc' })
    expect(container.querySelector('.pbx-col.size')?.getAttribute('aria-sort')).toBe('ascending')
    expect(names()).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    fireEvent.click(container.querySelector('.pbx-col.size')!)
    await settle()
    expect(names()).toEqual(['Übungsstunden', 'Serie 10.pdf', 'Serie 2.pdf'])
    fireEvent.click(container.querySelector('.pbx-col.name')!)
    await settle()
    expect(container.querySelector('[data-path="Serie 10.pdf"] .pbx-file-date.created')?.textContent).toBe('Nov 20, 2026')
    expect(container.querySelector('[data-path="Serie 10.pdf"] .pbx-file-date.modified')?.textContent).toBe('Nov 26, 2026')
    expect(container.querySelectorAll('.pbx-file')).toHaveLength(3)
    fireEvent.click(container.querySelector('button[aria-label="Show as grid"]')!)
    await settle()
    expect(settings.polyboxView).toBe('grid')
    expect(container.querySelector('.pbx-columns')).toBeNull()
    expect([...container.querySelectorAll('.pbx-grid .pbx-tile-name')].map(name => name.textContent)).toEqual(['Übungsstunden', 'Serie 2.pdf', 'Serie 10.pdf'])
    expect(container.querySelector('[data-path="Serie 10.pdf"] .pbx-tile-meta')?.textContent).toBe('362 KB')
    expect(container.querySelector('.pbx-tile.folder svg')?.getAttribute('viewBox')).toBe('0 0 512 512')
    fireEvent.click(container.querySelector('[data-path="Übungsstunden"]')!)
    await settle()
    expect([...container.querySelectorAll('.pbx-crumbs > *')].map(crumb => crumb.textContent)).toEqual(['', 'Übungsstunden'])
    expect([...container.querySelectorAll('.pbx-tile-name')].map(name => name.textContent)).toEqual(['Lektion 01.pdf'])
    fireEvent.click(container.querySelector('button[aria-label="Show as list"]')!)
    await settle()
    expect(settings.polyboxView).toBe('list')
    expect(container.querySelectorAll('.pbx-file')).toHaveLength(1)
  })

  it('asks for a password share\'s password, refuses a wrong one and lists the share once unlocked', async () => {
    const { container, calls, settings } = harness('page', { polyboxLinks: [{ name: '', url: SHARE }] }, 'polybox:AbCdEf1234567', { password: 'analysis-test' })
    await settle()
    const input = container.querySelector<HTMLInputElement>('.pbx-lock-input')!
    expect(input.type).toBe('password')
    fireEvent.change(input, { target: { value: 'nope' } })
    fireEvent.submit(container.querySelector('.pbx-lock')!)
    await settle()
    expect(container.querySelector('.pbx-lock-note')?.textContent).toBe('Polybox did not accept this password.')
    fireEvent.change(container.querySelector('.pbx-lock-input')!, { target: { value: 'analysis-test' } })
    fireEvent.submit(container.querySelector('.pbx-lock')!)
    await settle()
    expect(calls.filter(([name]) => name === 'polybox.unlock').map(([, input]) => input.password)).toEqual(['nope', 'analysis-test'])
    expect(container.querySelector('.pbx-lock')).toBeNull()
    expect(container.querySelectorAll('.pbx-file')).toHaveLength(3)
    expect(calls.filter(([name, input]) => name === 'polybox.title' && input.token === 'AbCdEf1234567').length).toBeGreaterThanOrEqual(2)
    expect(settings.polyboxLinks).toEqual([{ name: 'Analysis I - HS26', url: SHARE }])
  })
})
