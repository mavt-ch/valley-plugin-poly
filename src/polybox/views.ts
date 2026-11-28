/**
 * The Polybox tab: the user's course shares on polybox.ethz.ch. The sidebar has a field to paste share links into
 * (one or several lines; each is named after the share's own title) and one row per subject, drawn like Email's
 * message list; a click opens the subject's page (`poly.page`, instance `polybox:<token>`), which lists the share's
 * folders and files read through WebDAV. A folder opens in place; a file is kept in Polybox's own plugin data folder
 * (`plugins/data/poly/polybox/<token>/…`) and opens read-only in Valley's viewer (or the default app); removing a subject
 * removes its files. Instance `polybox` lists
 * every subject. Saved in the hidden `polyboxLinks` setting.
 */
import type { MainWorkspaceNavigation, ValleyPluginApi } from '@valley/plugin-sdk'
import {
  MAX_LINKS, POLYBOX_INSTANCE, linksOf, parsePasted, shareToken, sharePageUrl, sortFiles, subjectInstance, subjectOf,
  type PolyboxFile, type PolyboxLink
} from './model'

type Shapes = string[]
/** Two clouds, the larger one in front (27 Nov, drawn from the user's picture of clouds on a blue sky). */
export const POLYBOX_ICON: Shapes = ['M10.99 7.13A4.4 4.4 0 0 1 19.6 8.41A2.4 2.4 0 0 1 19.4 13.2', 'M5.4 19.5A2.8 2.8 0 0 1 5.11 13.91A5.2 5.2 0 0 1 15.49 14.05A2.8 2.8 0 1 1 16.4 19.5z']
const OPEN: Shapes = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const TAB: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M4 9h16', 'M10 4v5']
const REFRESH: Shapes = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']
const LINK: Shapes = ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1']
const CLOSE: Shapes = ['M6 6l12 12', 'M18 6L6 18']
const PEN: Shapes = ['M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16z', 'M13.5 6.5l4 4']
const TRASH: Shapes = ['M4 7h16', 'M10 11v6', 'M14 11v6', 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12', 'M9 7V4h6v3']
const CHEVRON: Shapes = ['M9 6l6 6-6 6']
const FOLDER: Shapes = ['M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z']
const FILE: Shapes = ['M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z', 'M14 3.5V8h4.5']
const PDF: Shapes = [...FILE, 'M8.5 13h7', 'M8.5 16.5h5']
const IMAGE: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M8.5 10a1.5 1.5 0 1 0 0-.01', 'M20 15l-4.5-4.5L6 20']

export const POLYBOX_CSS = `
.poly-panel .poly-bar.pbx-add-bar { padding: 0 var(--space-2, 8px); }
.pbx-add-bar .search-field-row { flex: 1; min-width: 0; }
.pbx-add-bar .search-field-icon { display: grid; place-items: center; }
.pbx-add-bar .search-field-icon svg { width: 14px; height: 14px; }
.pbx-add-note { padding: 6px 12px; color: var(--tint-red-text, var(--text-secondary)); font-size: var(--smaller-font-size); border-bottom: 1px solid var(--border-light); }
.pbx-list { flex: 1; min-height: 0; overflow-y: auto; }
.pbx-row { display: grid; grid-template-columns: 15px minmax(0, 1fr); align-items: center; gap: 2px 10px; width: 100%; box-sizing: border-box; margin: 0; padding: 9px 12px 10px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-row:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-row.active { background: var(--accent-tint-bg); }
.pbx-row.active .pbx-row-name { color: var(--accent-color); }
.pbx-row:focus-visible, .pbx-file:focus-visible, .pbx-crumb:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-row-icon { grid-row: 1 / 3; display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-row-icon svg { width: 15px; height: 15px; }
.pbx-row-name { min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-row-name.pending { color: var(--text-tertiary, var(--text-secondary)); font-weight: 400; }
.pbx-row-meta { min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-rename { width: 100%; min-width: 0; box-sizing: border-box; height: 22px; margin: -2px 0; padding: 0 4px; border: 1px solid var(--accent-color); border-radius: 3px; outline: 0; background: var(--background-color, transparent); color: var(--title-color); font: inherit; font-weight: 600; }
@media (prefers-reduced-motion: reduce) { .pbx-row, .pbx-file { transition: none; } }
.pbx-empty { padding: 14px 12px; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.45; }
/* A subject's page: the folder path as a fixed second bar, then the folder's entries as Email-like rows. */
.poly-page .poly-bar.pbx-path { justify-content: center; padding: 0 24px; overflow: hidden; }
.pbx-crumbs { display: flex; align-items: center; gap: 2px; min-width: 0; overflow: hidden; white-space: nowrap; }
.pbx-crumb { flex-shrink: 1; min-width: 0; max-width: 260px; padding: 2px 6px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.pbx-crumb:hover { background: var(--hover-bg); color: var(--text-color); }
.pbx-crumb[aria-current="page"] { color: var(--title-color); font-weight: 600; cursor: default; background: transparent; }
.pbx-crumb-sep { display: grid; place-items: center; flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-crumb-sep svg { width: 12px; height: 12px; }
.pbx-files { max-width: 980px; margin: 0 auto; padding: 8px 24px 32px; }
.pbx-file { display: grid; grid-template-columns: 18px minmax(0, 1fr) max-content max-content; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; height: var(--app-bar-height); padding: 0 8px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-file:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-file[aria-busy="true"] { cursor: progress; opacity: 0.6; }
.pbx-file-icon { display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-file.folder .pbx-file-icon { color: var(--accent-color); }
.pbx-file-icon svg { width: 16px; height: 16px; }
.pbx-file-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-file.folder .pbx-file-name { color: var(--title-color); font-weight: 600; }
.pbx-file-date, .pbx-file-size { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.pbx-file-size { min-width: 64px; text-align: right; }
@container (max-width: 560px) { .pbx-files { padding: 4px 8px 24px; } .pbx-file { grid-template-columns: 18px minmax(0, 1fr) max-content; } .pbx-file-date { display: none; } }
`

type Listing = { files: PolyboxFile[] | null; error: string; loading: boolean }

export function createPolyboxViews(api: ValleyPluginApi, t: (key: string) => string) {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>
  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const fill = (template: string, values: Record<string, string | number>) => Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template)
  const problem = (error: unknown) => { const key = `polybox.error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('polybox.error.serviceError') : t(key) }

  const readLinks = () => linksOf(api.settings.get().polyboxLinks)
  const save = (links: PolyboxLink[]) => void api.settings.set('polyboxLinks', linksOf(links))
  const subjectName = (link: PolyboxLink) => link.name || shareToken(link.url) || t('polybox.untitled')
  const openSubject = (link: PolyboxLink, newTab = false) => {
    const token = shareToken(link.url)
    if (token) api.workspace.openMainTab({ instanceId: subjectInstance(token), title: subjectName(link), newTab })
  }
  /** Removing a subject removes the files kept for its share too. */
  const remove = (link: PolyboxLink) => {
    save(readLinks().filter(row => row.url !== link.url))
    const token = shareToken(link.url)
    if (token && !readLinks().some(row => shareToken(row.url) === token)) void api.backend.call('polybox.forget', { token }).catch(() => undefined)
  }
  /** Kept files of shares that are no longer listed (removed elsewhere, or by an older Poly) are cleaned up once per start. */
  let pruned = false
  const prune = () => {
    if (pruned) return
    pruned = true
    void api.backend.call('polybox.forget', { keep: readLinks().map(link => shareToken(link.url)).filter(Boolean) }).catch(() => { pruned = false })
  }
  const openPolybox = (newTab = false) => api.workspace.openMainTab({ instanceId: POLYBOX_INSTANCE, title: t('polybox.title'), newTab })

  /** Names the subjects that have none from their share's title; a share without one keeps its token. */
  const named = new Set<string>()
  const nameMissing = () => {
    for (const link of readLinks()) {
      const token = shareToken(link.url)
      if (!token || link.name || named.has(token)) continue
      named.add(token)
      void api.backend.call<string>('polybox.title', { token }).then(title => {
        if (!title) return
        const links = readLinks()
        if (links.some(row => shareToken(row.url) === token && !row.name)) save(links.map(row => shareToken(row.url) === token && !row.name ? { ...row, name: title } : row))
      }, () => undefined)
    }
  }

  /** Adds the pasted share links not listed yet; returns how many lines were not share links. */
  const addLinks = (text: string): number => {
    const pasted = parsePasted(text)
    const links = readLinks()
    const known = new Set(links.map(link => shareToken(link.url)))
    const added: PolyboxLink[] = []
    let refused = 0
    for (const row of pasted) {
      const token = shareToken(row.url)
      if (!token) { refused++; continue }
      if (known.has(token)) continue
      known.add(token)
      added.push({ name: row.name, url: row.url })
    }
    if (added.length) { save([...links, ...added].slice(0, MAX_LINKS)); queueMicrotask(nameMissing) }
    return refused
  }

  function useLinks(): PolyboxLink[] {
    const [, setTick] = React.useState(0)
    React.useEffect(() => {
      const bump = () => setTick(value => value + 1)
      const offs = [api.ui.onLanguageChanged(bump), api.settings.subscribe(bump)]
      nameMissing()
      prune()
      return () => { for (const off of offs) off() }
    }, [])
    return readLinks()
  }

  function useActiveInstance(): string | undefined {
    const read = () => { const tab = api.getState().activePluginTab; return tab?.pluginId === api.pluginId ? tab.instanceId : undefined }
    const [instance, setInstance] = React.useState(read)
    React.useEffect(() => api.subscribe(() => setInstance(read())), [])
    return instance
  }

  /** The paste field: Enter or a paste adds every share link in the text. */
  function AddBar(): Node {
    const [value, setValue] = React.useState('')
    const [note, setNote] = React.useState('')
    const submit = (text: string) => {
      if (!text.trim()) return
      const refused = addLinks(text)
      setNote(refused ? t('polybox.invalid') : '')
      setValue(refused ? text : '')
    }
    const placeholder = t('polybox.paste')
    return h(React.Fragment, null,
      h('div', { className: 'poly-bar pbx-add-bar' },
        h('div', { className: 'search-field-row' },
          h('div', { className: 'search-field' },
            h('span', { className: 'search-field-icon' }, h(Icon, { shapes: LINK })),
            h('input', {
              className: 'search-field-input', value, placeholder, 'aria-label': placeholder, spellCheck: false,
              onChange: (event: { target: HTMLInputElement }) => { setValue(event.target.value); setNote('') },
              onPaste: (event: ClipboardEvent) => { const text = event.clipboardData?.getData('text/plain') ?? ''; if (!text.trim()) return; event.preventDefault(); submit(text) },
              onKeyDown: (event: KeyboardEvent) => { if (event.key === 'Enter') { event.preventDefault(); submit(value) } else if (event.key === 'Escape') { setValue(''); setNote('') } }
            }),
            value ? h('button', { type: 'button', className: 'search-field-action', title: t('polybox.clear'), 'aria-label': t('polybox.clear'), onClick: () => { setValue(''); setNote('') } }, h(Icon, { shapes: CLOSE })) : null))),
      note ? h('div', { className: 'pbx-add-note', role: 'alert' }, note) : null)
  }

  function SubjectRow({ link, index, active, renaming, setRenaming }: { link: PolyboxLink; index: number; active: boolean; renaming: boolean; setRenaming: (index: number | null) => void }): Node {
    const token = shareToken(link.url)
    const rename = (name: string) => { setRenaming(null); const links = readLinks(); if (links[index]?.url === link.url && name.trim() !== link.name) save(links.map((row, i) => i === index ? { ...row, name: name.trim() } : row)) }
    const menu = async (event: MouseEvent) => {
      event.preventDefault()
      const choice = await api.ui.openMenu([
        { id: 'tab', label: t('polybox.openInNewTab'), icon: h(Icon, { shapes: TAB }), enabled: Boolean(token) },
        { id: 'website', label: t('polybox.openWebsite'), icon: h(Icon, { shapes: OPEN }), enabled: Boolean(token) },
        { type: 'separator' },
        { id: 'rename', label: t('polybox.rename'), icon: h(Icon, { shapes: PEN }) },
        { id: 'remove', label: t('polybox.removeSubject'), icon: h(Icon, { shapes: TRASH }) }
      ], { x: event.clientX, y: event.clientY })
      if (choice === 'tab') openSubject(link, true)
      if (choice === 'website' && token) void api.links.open(sharePageUrl(token))
      if (choice === 'rename') setRenaming(index)
      if (choice === 'remove') remove(link)
    }
    const name = renaming
      ? h('input', {
        className: 'pbx-rename', defaultValue: link.name || '', placeholder: subjectName(link), autoFocus: true, maxLength: 200, 'aria-label': t('polybox.rename'),
        onClick: (event: MouseEvent) => event.stopPropagation(),
        onKeyDown: (event: KeyboardEvent) => { event.stopPropagation(); if (event.key === 'Enter') rename((event.target as HTMLInputElement).value); if (event.key === 'Escape') setRenaming(null) },
        onBlur: (event: FocusEvent) => rename((event.target as HTMLInputElement).value)
      })
      : h('span', { className: `pbx-row-name${link.name ? '' : ' pending'}` }, subjectName(link))
    return h(renaming ? 'div' : 'button', {
      type: renaming ? undefined : 'button', className: `pbx-row${active ? ' active' : ''}`, 'data-subject': token ?? '', 'aria-current': active ? 'page' : undefined,
      onClick: renaming ? undefined : (event: MouseEvent) => openSubject(link, api.ui.hasModKey(event)),
      onAuxClick: (event: MouseEvent) => { if (event.button === 1 && !renaming) { event.preventDefault(); openSubject(link, true) } },
      onDoubleClick: renaming ? undefined : () => setRenaming(index),
      onContextMenu: renaming ? undefined : (event: MouseEvent) => void menu(event)
    },
    h('span', { className: 'pbx-row-icon' }, h(Icon, { shapes: POLYBOX_ICON })),
    name,
    h('span', { className: 'pbx-row-meta' }, token ? `polybox.ethz.ch · ${token}` : t('polybox.invalid')))
  }

  /** The sidebar: the paste field, then one row per subject. */
  function PolyboxPanelBody(): Node {
    const links = useLinks()
    const open = useActiveInstance()
    const [renaming, setRenaming] = React.useState<number | null>(null)
    return h(React.Fragment, null,
      h(AddBar, null),
      h('div', { className: 'pbx-list' }, links.length
        ? links.map((link, index) => h(SubjectRow, { key: link.url, link, index, active: Boolean(shareToken(link.url)) && open === subjectInstance(shareToken(link.url)!), renaming: renaming === index, setRenaming }))
        : h('div', { className: 'pbx-empty' }, t('polybox.empty'))))
  }

  /** Listings read once stay in memory, so going back up a folder shows it at once; Refresh reads past them. */
  const listings = new Map<string, PolyboxFile[]>()
  /** The folder each subject's page shows, kept while the plugin runs so a tab comes back where it was. */
  /** Each subject's folder history while the plugin runs (28 Nov, on request: "can't go back"): the host's back and forward step through it. */
  const folders = new Map<string, { stack: string[]; index: number }>()

  function useListing(token: string, path: string, revision: number): Listing {
    const key = `${token}:${path}`
    const [state, setState] = React.useState<Listing>(() => ({ files: listings.get(key) ?? null, error: '', loading: !listings.has(key) }))
    React.useEffect(() => {
      let live = true
      const cached = listings.get(key)
      setState({ files: cached ?? null, error: '', loading: !cached || revision > 0 })
      api.backend.call<PolyboxFile[]>('polybox.list', { token, path, fresh: revision > 0 }).then(
        files => { listings.set(key, files); if (live) setState({ files, error: '', loading: false }) },
        error => { if (live) setState({ files: cached ?? null, error: problem(error), loading: false }) })
      return () => { live = false }
    }, [key, revision])
    return state
  }

  const formatSize = (bytes: number | undefined, locale: string) => {
    if (bytes === undefined) return ''
    const units = ['B', 'KB', 'MB', 'GB']
    let value = bytes, unit = 0
    while (value >= 1000 && unit < units.length - 1) { value /= 1000; unit++ }
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: unit && value < 10 ? 1 : 0 }).format(value)} ${units[unit]}`
  }
  const formatDate = (iso: string | undefined, locale: string) => iso ? new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso)) : ''
  const fileIcon = (file: PolyboxFile) => file.isFolder ? FOLDER : file.type === 'application/pdf' || /\.pdf$/i.test(file.name) ? PDF : file.type?.startsWith('image/') ? IMAGE : FILE

  function SubjectPage({ token, instanceId, navigation }: { token: string; instanceId?: string; navigation?: MainWorkspaceNavigation }): Node {
    const links = useLinks()
    const link = links.find(row => shareToken(row.url) === token)
    const title = link ? subjectName(link) : token
    const [trail, setTrail] = React.useState(() => folders.get(token) ?? { stack: [''], index: 0 })
    const path = trail.stack[trail.index] ?? ''
    /** Hands Valley the controller for a trail; called at once on a folder change too, so Back works before the page re-renders or loads. */
    /**
     * The page takes every back and forward click (28 Nov: Valley's copy of this controller lags a folder click by about
     * 100 ms, and a click in that gap went to the tab's history): it steps through the latest folder trail and hands the
     * click to the tab's own history only at the trail's ends.
     */
    const publish = (current: { stack: string[]; index: number }) => {
      const state = api.getState()
      navigation?.setController({
        canGoBack: current.index > 0 || state.canGoBack === true,
        canGoForward: current.index < current.stack.length - 1 || state.canGoForward === true,
        goBack: () => { const now = folders.get(token) ?? current; if (now.index > 0) keep({ ...now, index: now.index - 1 }); else api.workspace.goBack() },
        goForward: () => { const now = folders.get(token) ?? current; if (now.index < now.stack.length - 1) keep({ ...now, index: now.index + 1 }); else api.workspace.goForward() }
      })
    }
    const keep = (next: { stack: string[]; index: number }) => { folders.set(token, next); setTrail(next); publish(next) }
    /** Opening a folder (or a crumb) is a new stop; stops ahead of the current one are dropped, as in a browser. */
    const setPath = (next: string) => { if (next !== path) keep({ stack: [...trail.stack.slice(0, trail.index + 1), next].slice(-100), index: Math.min(trail.index + 1, 99) }) }
    React.useEffect(() => { publish(trail) })
    React.useEffect(() => () => navigation?.setController(null), [])
    const [revision, setRevision] = React.useState(0)
    const listing = useListing(token, path, revision)
    const locale = api.ui.language() || 'en'
    React.useEffect(() => { api.workspace.setMainTabTitle(title, instanceId) }, [instanceId, title])
    const parts = path ? path.split('/') : []
    const crumbs = [{ label: title, path: '' }, ...parts.map((part, index) => ({ label: part, path: parts.slice(0, index + 1).join('/') }))]
    const files = listing.files ? sortFiles(listing.files) : null
    const [opening, setOpening] = React.useState('')
    const [openError, setOpenError] = React.useState('')
    /**
     * A file is kept in Polybox's data folder first (downloaded only when the share's copy changed), then a click opens it
     * read-only in Valley's own viewer through `api.files.openOwnData` (SDK 8.9.0; 28 Nov, on request: "make sure I can
     * also open it in valley"); the menu also hands it to the system's default app or shows it in Finder.
     */
    type Action = 'valley' | 'tab' | 'system' | 'finder'
    const refusals: Record<string, string> = { missing: 'notFound', 'not-a-file': 'notFound', 'plugin-unavailable': 'unavailable' }
    const act = async (file: PolyboxFile, action: Action) => {
      setOpening(file.path); setOpenError('')
      try {
        const relPath = await api.backend.call<string>('polybox.keep', { token, path: file.path })
        if (action === 'valley' || action === 'tab') {
          const own = `plugins/data/${api.pluginId}/`
          const at = relPath.indexOf(own)
          if (at < 0) throw new Error('formatError')
          const result = await api.files.openOwnData(relPath.slice(at + own.length), { newTab: action === 'tab', title: file.name })
          if (result.status === 'refused') throw new Error(refusals[result.reason] ?? 'serviceError')
        } else if (action === 'system') api.files.openWithDefaultApp(relPath)
        else api.files.revealInFinder(relPath)
      } catch (error) { setOpenError(problem(error)) }
      finally { setOpening(current => current === file.path ? '' : current) }
    }
    const open = (file: PolyboxFile, event: MouseEvent) => { if (file.isFolder) setPath(file.path); else void act(file, api.ui.hasModKey(event) ? 'tab' : 'valley') }
    const menu = async (event: MouseEvent, file: PolyboxFile) => {
      event.preventDefault()
      const items = file.isFolder
        ? [{ id: 'folder', label: fill(t('polybox.openFolder'), { name: file.name }), icon: h(Icon, { shapes: FOLDER }) }, { type: 'separator' as const }, { id: 'website', label: t('polybox.openWebsite'), icon: h(Icon, { shapes: POLYBOX_ICON }) }]
        : [
          { id: 'valley', label: t('polybox.menu.valley'), icon: h(Icon, { shapes: fileIcon(file) }) },
          { id: 'tab', label: t('polybox.openInNewTab'), icon: h(Icon, { shapes: TAB }) },
          { id: 'system', label: t('polybox.menu.system'), icon: h(Icon, { shapes: OPEN }) },
          { id: 'finder', label: api.files.revealLabel(), icon: h(Icon, { shapes: FOLDER }) },
          { type: 'separator' as const },
          { id: 'website', label: t('polybox.openWebsite'), icon: h(Icon, { shapes: POLYBOX_ICON }) }
        ]
      const choice = await api.ui.openMenu(items, { x: event.clientX, y: event.clientY })
      if (choice === 'folder') setPath(file.path)
      else if (choice === 'website') void api.links.open(sharePageUrl(token, file.isFolder ? file.path : file.path.split('/').slice(0, -1).join('/')))
      else if (choice === 'valley' || choice === 'tab' || choice === 'system' || choice === 'finder') void act(file, choice)
    }
    const body = listing.error && !files ? h('div', { className: 'poly-note error', role: 'alert' }, listing.error)
      : !files ? (listing.loading ? null : h('div', { className: 'poly-note' }, t('polybox.folderEmpty')))
      : !files.length ? h('div', { className: 'poly-note' }, t('polybox.folderEmpty'))
      : h(React.Fragment, null, files.map(file => h('button', {
        key: file.path, type: 'button', className: `pbx-file${file.isFolder ? ' folder' : ''}`, 'data-path': file.path,
        title: file.isFolder ? fill(t('polybox.openFolder'), { name: file.name }) : fill(t('polybox.openFile'), { name: file.name }),
        'aria-busy': opening === file.path || undefined, disabled: opening === file.path,
        onClick: (event: MouseEvent) => open(file, event),
        onAuxClick: (event: MouseEvent) => { if (event.button === 1 && !file.isFolder) { event.preventDefault(); void act(file, 'tab') } },
        onContextMenu: (event: MouseEvent) => void menu(event, file)
      },
      h('span', { className: 'pbx-file-icon' }, h(Icon, { shapes: fileIcon(file) })),
      h('span', { className: 'pbx-file-name' }, file.name),
      h('span', { className: 'pbx-file-date' }, formatDate(file.modified, locale)),
      h('span', { className: 'pbx-file-size' }, file.isFolder ? '' : formatSize(file.size, locale)))))
    return h('div', { className: 'poly-page' },
      h('div', { className: 'poly-bar poly-page-head' },
        h('span', { className: 'poly-bar-balance double', 'aria-hidden': true }),
        h('h1', { className: 'poly-page-title' }, title),
        h('button', { type: 'button', className: 'poly-icon-btn', title: t('polybox.openWebsite'), 'aria-label': t('polybox.openWebsite'), onClick: () => void api.links.open(sharePageUrl(token, path)) }, h(Icon, { shapes: OPEN })),
        h('button', { type: 'button', className: `poly-icon-btn${listing.loading && revision > 0 ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: () => setRevision(value => value + 1) }, h(Icon, { shapes: REFRESH }))),
      h('div', { className: 'poly-bar pbx-path' }, h('nav', { className: 'pbx-crumbs', 'aria-label': t('polybox.path') },
        ...crumbs.flatMap((crumb, index) => [
          index ? h('span', { key: `sep${index}`, className: 'pbx-crumb-sep', 'aria-hidden': true }, h(Icon, { shapes: CHEVRON })) : null,
          h('button', { key: crumb.path || '/', type: 'button', className: 'pbx-crumb', 'aria-current': index === crumbs.length - 1 ? 'page' : undefined, title: crumb.label, onClick: () => { if (index < crumbs.length - 1) setPath(crumb.path) } }, crumb.label)
        ]))),
      h('div', { className: 'poly-list' }, h('div', { className: 'pbx-files' }, body,
        listing.error && files ? h('div', { className: 'poly-note error', role: 'alert' }, listing.error) : null,
        openError ? h('div', { className: 'poly-note error', role: 'alert' }, openError) : null)))
  }

  /** Instance `polybox`: every subject, each opening its page. */
  function OverviewPage({ instanceId }: { instanceId?: string }): Node {
    const links = useLinks()
    React.useEffect(() => { api.workspace.setMainTabTitle(t('polybox.title'), instanceId) }, [instanceId, api.ui.language()])
    return h('div', { className: 'poly-page' },
      h('div', { className: 'poly-bar poly-page-head' }, h('h1', { className: 'poly-page-title' }, t('polybox.title'))),
      h('div', { className: 'poly-list' }, h('div', { className: 'pbx-files' }, links.length
        ? links.map(link => h('button', { key: link.url, type: 'button', className: 'pbx-file folder', onClick: (event: MouseEvent) => openSubject(link, api.ui.hasModKey(event)) },
          h('span', { className: 'pbx-file-icon' }, h(Icon, { shapes: POLYBOX_ICON })),
          h('span', { className: 'pbx-file-name' }, subjectName(link)),
          h('span', { className: 'pbx-file-date' }, shareToken(link.url) ?? ''),
          h('span', { className: 'pbx-file-size' })))
        : h('div', { className: 'poly-note' }, t('polybox.empty')))))
  }

  function PolyboxPage({ instanceId, navigation }: { instanceId?: string; navigation?: MainWorkspaceNavigation }): Node {
    const token = subjectOf(instanceId)
    return token ? h(SubjectPage, { key: token, token, instanceId, navigation }) : h(OverviewPage, { instanceId })
  }

  return { PolyboxPanelBody, PolyboxPage, openPolybox }
}
