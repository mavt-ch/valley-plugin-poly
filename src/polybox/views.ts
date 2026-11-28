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
  MAX_LINKS, POLYBOX_INSTANCE, linksOf, parsePasted, shareToken, sharePageUrl, sortFiles, sortOf, subjectInstance, subjectOf,
  type PolyboxFile, type PolyboxLink, type SortKey
} from './model'
import { canNest, folderOfLink, foldersOf, isFolderId, moveFolder, moveLink, newFolderId, removeFolder, treeRows, MAX_FOLDER_NAME, type Drop, type PolyboxFolder, type TreeRow } from './tree'

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
const COPY: Shapes = ['M9 9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z', 'M15 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4']
const CHECK: Shapes = ['M5 12.5l4.5 4.5L19 7.5']
/** The path separator and the share's root (28 Nov, on request: "make the slash breadcrumb icon centered"): a drawn slash, centred in its box like the other glyphs, never a text "/" that sits on the baseline. */
const SLASH: Shapes = ['M14.5 5l-5 14']
const ARROW_UP: Shapes = ['M12 19V5', 'M6 11l6-6 6 6']
const ARROW_DOWN: Shapes = ['M12 5v14', 'M6 13l6 6 6-6']
const FOLDER: Shapes = ['M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z']
const FOLDER_OPEN: Shapes = ['M3.5 17V7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h7a1.5 1.5 0 0 1 1.5 1.5v1.5', 'M3.5 17.5l2.3-6.4a1.5 1.5 0 0 1 1.4-1h12.6a.9.9 0 0 1 .85 1.2l-2.1 6.2a1.5 1.5 0 0 1-1.4 1H5a1.5 1.5 0 0 1-1.5-1z']
const FOLDER_PLUS: Shapes = [...['M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z'], 'M12 10.5v5', 'M9.5 13h5']
const FILE: Shapes = ['M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z', 'M14 3.5V8h4.5']
const PDF: Shapes = [...FILE, 'M8.5 13h7', 'M8.5 16.5h5']
const GRID: Shapes = ['M4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z', 'M13 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z', 'M4 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z', 'M13 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z']
const LIST: Shapes = ['M9 6h11', 'M9 12h11', 'M9 18h11', 'M4.5 6h.01', 'M4.5 12h.01', 'M4.5 18h.01']
const LOCK: Shapes = ['M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z', 'M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10']
/** Grid tiles use Font Awesome's folder and file glyphs (react-icons `FaFolder`, `FaRegFile`, `FaRegFilePdf`, `FaRegFileImage`; 28 Nov, on request), inlined so the bundle carries no icon library. */
type Glyph = { viewBox: string; d: string }
const FA_FILE_D = 'M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z'
const FA_FOLDER: Glyph = { viewBox: '0 0 512 512', d: 'M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z' }
const FA_FILE: Glyph = { viewBox: '0 0 384 512', d: FA_FILE_D }
const FA_FILE_PDF: Glyph = { viewBox: '0 0 384 512', d: `${FA_FILE_D}m250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z` }
const FA_FILE_IMAGE: Glyph = { viewBox: '0 0 384 512', d: `${FA_FILE_D}m32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z` }
const IMAGE: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M8.5 10a1.5 1.5 0 1 0 0-.01', 'M20 15l-4.5-4.5L6 20']

export const POLYBOX_CSS = `
.poly-panel .poly-bar.pbx-add-bar { padding: 0 var(--space-2, 8px); }
.pbx-add-bar .search-field-row { flex: 1; min-width: 0; }
.pbx-add-bar .search-field-icon { display: grid; place-items: center; }
.pbx-add-bar .search-field-icon svg { width: 14px; height: 14px; }
.pbx-add-note { padding: 6px 12px; color: var(--tint-red-text, var(--text-secondary)); font-size: var(--smaller-font-size); border-bottom: 1px solid var(--border-light); }
/*
 * The sidebar tree (28 Nov, on request: "a little bit more organized"): user folders up to three deep, open and closed
 * folder glyphs, and compact 28px subject rows with only the cloud and the name. Rows drag to a new place.
 */
.pbx-list { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 0 12px; }
.pbx-list.drop-root { box-shadow: inset 0 -2px 0 var(--accent-color); }
.pbx-row { display: flex; align-items: center; gap: 7px; width: 100%; height: 28px; box-sizing: border-box; margin: 0; padding: 0 10px 0 calc(10px + var(--pbx-depth, 0) * 16px); border: 0; border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; user-select: none; touch-action: none; transition: background-color 120ms ease-out; }
.pbx-row:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-row.active { background: var(--accent-tint-bg); }
.pbx-row.active .pbx-row-name { color: var(--accent-color); }
.pbx-row:focus-visible, .pbx-file:focus-visible, .pbx-crumb:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-row.dragging { opacity: 0.45; }
.pbx-row.drop-before { box-shadow: inset 0 2px 0 var(--accent-color); }
.pbx-row.drop-after { box-shadow: inset 0 -2px 0 var(--accent-color); }
.pbx-row.drop-into { background: var(--accent-tint-bg); box-shadow: inset 0 0 0 1px var(--accent-color); }
.pbx-row-icon { display: grid; place-items: center; flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-row-icon svg { width: 15px; height: 15px; }
.pbx-row.folder .pbx-row-icon { color: var(--text-secondary); }
.pbx-row-name { flex: 1; min-width: 0; color: var(--text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-row.folder .pbx-row-name { color: var(--title-color); font-weight: 600; }
.pbx-row-name.pending { color: var(--text-tertiary, var(--text-secondary)); }
.pbx-row-count { flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.pbx-rename { flex: 1; width: 100%; min-width: 0; box-sizing: border-box; height: 22px; margin: 0; padding: 0 4px; border: 1px solid var(--accent-color); border-radius: 3px; outline: 0; background: var(--background-color, transparent); color: var(--title-color); font: inherit; }
.pbx-add-bar .poly-icon-btn { flex-shrink: 0; }
@media (prefers-reduced-motion: reduce) { .pbx-row, .pbx-file { transition: none; } }
.pbx-empty { padding: 14px 12px; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.45; }
/*
 * A subject's page (28 Nov, on request): the title bar names the share's Polybox link, the second bar is the folder path as
 * left-aligned breadcrumbs, then the entries edge to edge as list rows of exactly one header height or as a grid.
 */
.poly-page-head .poly-bar-balance.triple { width: calc(var(--shell-control-toolbar, 24px) * 3 + 16px); }
.poly-icon-btn.pbx-copy.done { color: var(--tint-green-text, var(--accent-color)); }
/* The path is centred in its bar (28 Nov, on request: "still make the breadcrumb centered"). */
.poly-page .poly-bar.pbx-path { justify-content: center; padding: 0 12px; overflow: hidden; }
.pbx-crumbs { display: flex; align-items: center; gap: 2px; min-width: 0; overflow: hidden; white-space: nowrap; }
.pbx-crumb { display: inline-flex; align-items: center; gap: 6px; flex-shrink: 1; min-width: 0; max-width: 320px; height: var(--search-field-height, 26px); padding: 0 6px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); cursor: pointer; }
.pbx-crumb-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.pbx-crumb.root { justify-content: center; width: var(--search-field-height, 26px); padding: 0; color: var(--text-secondary); }
.pbx-crumb.root svg, .pbx-crumb-sep svg { display: block; width: 14px; height: 14px; }
.pbx-crumb.root[aria-current="page"] { color: var(--title-color); }
.pbx-crumb:hover { background: var(--hover-bg); color: var(--text-color); }
.pbx-crumb[aria-current="page"] { color: var(--title-color); font-weight: 600; cursor: default; background: transparent; }
.pbx-crumb-sep { display: grid; place-items: center; flex-shrink: 0; width: 14px; height: var(--search-field-height, 26px); color: var(--text-tertiary, var(--text-secondary)); }
.pbx-files { padding: 0 0 32px; }
.pbx-files > .poly-note { padding: 8px 12px; }
.pbx-file, .pbx-columns { display: grid; grid-template-columns: 18px minmax(0, 1fr) var(--pbx-date-col, 128px) var(--pbx-date-col, 128px) 84px; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; height: var(--app-bar-height); padding: 0 12px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-file:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-file[aria-busy="true"] { cursor: progress; opacity: 0.6; }
.pbx-file-icon { display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-file.folder .pbx-file-icon { color: var(--accent-color); }
.pbx-file-icon svg { width: 16px; height: 16px; }
.pbx-file-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-file.folder .pbx-file-name { color: var(--title-color); font-weight: 600; }
.pbx-file-date, .pbx-file-size { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; text-align: center; overflow: hidden; text-overflow: ellipsis; }
/* The column titles (28 Nov, on request: "filename | date created | date last modified | file size"), on the rows' grid. */
.poly-page .poly-bar.pbx-columns { display: grid; padding: 0 12px; gap: 12px; }
.pbx-col { display: flex; align-items: center; justify-content: center; gap: 4px; min-width: 0; height: 26px; margin: 0; padding: 0 8px; border: 0; border-radius: var(--radius-m, 6px); transition: background-color 120ms ease-out, color 120ms ease-out; background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--smaller-font-size); font-weight: 600; white-space: nowrap; cursor: pointer; }
.pbx-col:hover { color: var(--text-color); background: var(--hover-bg); }
.pbx-col.active { color: var(--title-color); }
.pbx-col:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-col-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.pbx-col-arrow { display: grid; place-items: center; flex-shrink: 0; }
.pbx-col-arrow svg { width: 12px; height: 12px; }
.pbx-col.name { grid-column: 1 / 3; justify-self: start; justify-content: flex-start; margin-left: -8px; }
@media (prefers-reduced-motion: reduce) { .pbx-col { transition: none; } }
.pbx-col + .pbx-col { position: relative; overflow: visible; }
.pbx-col + .pbx-col::before { content: ''; position: absolute; left: -6px; top: 4px; bottom: 4px; border-left: 1px solid var(--border-light); }
@container (max-width: 720px) { .pbx-file, .pbx-columns { grid-template-columns: 18px minmax(0, 1fr) var(--pbx-date-col, 128px) 84px; } .pbx-file-date.created, .pbx-col.created { display: none; } }
@container (max-width: 520px) { .pbx-file, .pbx-columns { grid-template-columns: 18px minmax(0, 1fr) 72px; } .pbx-file-date, .pbx-col.created, .pbx-col.modified { display: none; } }
.pbx-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(132px, 1fr)); gap: 6px; padding: 12px 12px 32px; }
.pbx-grid > .poly-note { grid-column: 1 / -1; padding: 0; }
.pbx-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 0; box-sizing: border-box; padding: 16px 8px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--text-color); font: inherit; text-align: center; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-tile:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-tile:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-tile[aria-busy="true"] { cursor: progress; opacity: 0.6; }
.pbx-tile-icon { display: grid; place-items: center; height: 52px; margin-bottom: 4px; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-tile-icon svg { width: 44px; height: 44px; }
.pbx-tile.folder .pbx-tile-icon { color: var(--accent-color); }
.pbx-tile.folder .pbx-tile-icon svg { width: 52px; height: 52px; }
.pbx-tile-name { display: -webkit-box; max-width: 100%; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; font-size: var(--small-font-size); line-height: 1.3; overflow-wrap: anywhere; }
.pbx-tile.folder .pbx-tile-name { color: var(--title-color); font-weight: 600; }
.pbx-tile-meta { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .pbx-tile { transition: none; } }
.pbx-lock { display: flex; flex-direction: column; align-items: center; gap: 10px; max-width: 360px; margin: 48px auto 0; padding: 0 16px; text-align: center; }
.pbx-lock-icon { display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-lock-icon svg { width: 28px; height: 28px; }
.pbx-lock-text { margin: 0; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.45; }
.pbx-lock-row { display: flex; gap: 6px; width: 100%; }
.pbx-lock-input { flex: 1; min-width: 0; box-sizing: border-box; height: var(--search-field-height, 26px); padding: 0 8px; border: 1px solid var(--border-color, var(--border-light)); border-radius: var(--radius-sm, 4px); outline: 0; background: var(--background-color, transparent); color: var(--text-color); font: inherit; font-size: var(--small-font-size); }
.pbx-lock-input:focus { border-color: var(--accent-color); }
.pbx-lock-btn { flex-shrink: 0; height: var(--search-field-height, 26px); padding: 0 12px; border: 0; border-radius: var(--radius-sm, 4px); background: var(--accent-color); color: #fff; font: inherit; font-size: var(--small-font-size); font-weight: 600; cursor: pointer; }
.pbx-lock-btn:disabled { opacity: 0.5; cursor: default; }
.pbx-lock-btn:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 2px; }
.pbx-lock-note { color: var(--tint-red-text, var(--text-secondary)); font-size: var(--small-font-size); }
`

type Listing = { files: PolyboxFile[] | null; error: string; code: string; loading: boolean }
type View = 'list' | 'grid'
const viewOf = (value: unknown): View => value === 'grid' ? 'grid' : 'list'

export function createPolyboxViews(api: ValleyPluginApi, t: (key: string) => string) {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>
  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const FaIcon = ({ glyph }: { glyph: Glyph }): Node => h('svg', { viewBox: glyph.viewBox, fill: 'currentColor', 'aria-hidden': true }, h('path', { d: glyph.d }))
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
  function AddBar({ extra }: { extra?: Node }): Node {
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
            value ? h('button', { type: 'button', className: 'search-field-action', title: t('polybox.clear'), 'aria-label': t('polybox.clear'), onClick: () => { setValue(''); setNote('') } }, h(Icon, { shapes: CLOSE })) : null)),
        extra ?? null),
      note ? h('div', { className: 'pbx-add-note', role: 'alert' }, note) : null)
  }

  const readFolders = () => foldersOf(api.settings.get().polyboxFolders)
  const saveFolders = (folders: PolyboxFolder[]) => void api.settings.set('polyboxFolders', foldersOf(folders))
  const readCollapsed = (): Set<string> => { const raw = api.settings.get().polyboxCollapsed; return new Set(Array.isArray(raw) ? raw.filter(isFolderId) : []) }
  const setCollapsed = (ids: Set<string>) => { const known = new Set(readFolders().map(folder => folder.id)); void api.settings.set('polyboxCollapsed', [...ids].filter(id => known.has(id))) }
  const toggleFolder = (id: string, open?: boolean) => { const ids = readCollapsed(); if (open ?? ids.has(id)) ids.delete(id); else ids.add(id); setCollapsed(ids) }
  /** A new folder, at the top level or inside `parent` (never below the third level), opened and named in place. */
  const createFolder = (parent?: string): string | null => {
    const folders = readFolders()
    if (parent && !canNest(folders, parent)) return null
    const id = newFolderId()
    saveFolders([...folders, { id, name: t('polybox.folder.new'), ...(parent ? { parent } : {}) }])
    if (parent) toggleFolder(parent, true)
    return id
  }
  /** Removing a folder keeps everything in it: its subfolders and subjects move up one level. */
  const deleteFolder = (id: string) => {
    const next = removeFolder(readFolders(), readLinks(), id)
    saveFolders(next.folders)
    save(next.links)
  }
  const renameFolder = (id: string, name: string) => {
    const folders = readFolders()
    const clean = name.trim().slice(0, MAX_FOLDER_NAME)
    if (clean && folders.some(folder => folder.id === id && folder.name !== clean)) saveFolders(folders.map(folder => folder.id === id ? { ...folder, name: clean } : folder))
  }
  const renameLink = (url: string, name: string) => {
    const links = readLinks()
    if (links.some(link => link.url === url && link.name !== name.trim())) save(links.map(link => link.url === url ? { ...link, name: name.trim() } : link))
  }
  type Moving = { kind: 'folder' | 'link'; id: string }
  /** Applies a drop; false when it is not allowed (a folder into itself or below the third level). */
  const applyDrop = (moving: Moving, drop: Drop): boolean => {
    if (moving.kind === 'link') { save(moveLink(readLinks(), readFolders(), moving.id, drop)); if (drop.place === 'into' && drop.target.kind === 'folder') toggleFolder(drop.target.id, true); return true }
    const next = moveFolder(readFolders(), readLinks(), moving.id, drop)
    if (!next) return false
    saveFolders(next)
    if (drop.place === 'into' && drop.target.kind === 'folder') toggleFolder(drop.target.id, true)
    return true
  }
  const allowed = (moving: Moving, drop: Drop) => moving.kind === 'link' || moveFolder(readFolders(), readLinks(), moving.id, drop) !== null
  const rowKey = (row: TreeRow) => row.kind === 'folder' ? `f:${row.folder.id}` : `l:${row.link.url}`

  function RenameField({ value, placeholder, onDone }: { value: string; placeholder: string; onDone: (name: string | null) => void }): Node {
    return h('input', {
      className: 'pbx-rename', defaultValue: value, placeholder, autoFocus: true, maxLength: 200, 'aria-label': t('polybox.rename'),
      onFocus: (event: FocusEvent) => (event.target as HTMLInputElement).select(),
      onClick: (event: MouseEvent) => event.stopPropagation(),
      onPointerDown: (event: PointerEvent) => event.stopPropagation(),
      onKeyDown: (event: KeyboardEvent) => { event.stopPropagation(); if (event.key === 'Enter') onDone((event.target as HTMLInputElement).value); if (event.key === 'Escape') onDone(null) },
      onBlur: (event: FocusEvent) => onDone((event.target as HTMLInputElement).value)
    })
  }

  /**
   * The sidebar: the paste field with a New folder button, then the tree. A row drags with the pointer (4px threshold):
   * on a folder's upper or lower quarter it lands before or after it, in between it goes into it; on a subject before or
   * after it; below the last row at the top level. Option/Alt + ↑/↓ moves the focused row among its siblings.
   */
  function PolyboxPanelBody(): Node {
    const links = useLinks()
    const folders = readFolders()
    const collapsed = readCollapsed()
    const rows = treeRows(folders, links, collapsed)
    const open = useActiveInstance()
    const [renaming, setRenaming] = React.useState<string | null>(null)
    const [drag, setDrag] = React.useState<{ moving: Moving; drop: Drop | null } | null>(null)
    const listRef = React.useRef<HTMLDivElement | null>(null)
    const pending = React.useRef<{ moving: Moving; x: number; y: number; pointerId: number; active: boolean; drop: Drop | null } | null>(null)
    const suppressClick = React.useRef(false)

    const newFolder = (parent?: string) => { const id = createFolder(parent); if (id) setRenaming(`f:${id}`) }
    const dropAt = (y: number, moving: Moving): Drop | null => {
      const list = listRef.current
      if (!list) return null
      const elements = [...list.querySelectorAll<HTMLElement>('[data-row]')]
      for (const element of elements) {
        const rect = element.getBoundingClientRect()
        if (y < rect.top || y >= rect.bottom) continue
        const ratio = rect.height ? (y - rect.top) / rect.height : 0.5
        const kind = element.dataset.row
        const id = element.dataset.id ?? ''
        const drop: Drop = kind === 'folder'
          ? { place: ratio < 0.25 ? 'before' : ratio > 0.75 && !(element.dataset.open === 'true' && element.dataset.empty !== 'true') ? 'after' : 'into', target: { kind: 'folder', id } }
          : { place: ratio < 0.5 ? 'before' : 'after', target: { kind: 'link', url: id } }
        if (drop.target.kind === moving.kind && (drop.target.kind === 'folder' ? drop.target.id : drop.target.url) === moving.id) return null
        return allowed(moving, drop) ? drop : null
      }
      const last = elements.at(-1)
      if (last && y >= last.getBoundingClientRect().bottom) { const drop: Drop = { place: 'into', target: { kind: 'root' } }; return allowed(moving, drop) ? drop : null }
      return null
    }
    const onPointerDown = (event: PointerEvent, moving: Moving) => {
      if (event.button !== 0 || renaming) return
      pending.current = { moving, x: event.clientX, y: event.clientY, pointerId: event.pointerId, active: false, drop: null }
    }
    const onPointerMove = (event: PointerEvent) => {
      const state = pending.current
      if (!state || state.pointerId !== event.pointerId) return
      if (!state.active) {
        if (Math.hypot(event.clientX - state.x, event.clientY - state.y) < 4) return
        state.active = true
        try { listRef.current?.setPointerCapture(event.pointerId) } catch { /* the pointer may already be gone */ }
      }
      state.drop = dropAt(event.clientY, state.moving)
      setDrag({ moving: state.moving, drop: state.drop })
    }
    const finish = (event: PointerEvent, apply: boolean) => {
      const state = pending.current
      if (!state || state.pointerId !== event.pointerId) return
      pending.current = null
      if (!state.active) return
      suppressClick.current = true
      setTimeout(() => { suppressClick.current = false }, 0)
      try { listRef.current?.releasePointerCapture(event.pointerId) } catch { /* released already */ }
      setDrag(null)
      if (apply && state.drop) applyDrop(state.moving, state.drop)
    }
    /** Option/Alt + ↑/↓: the row trades places with its neighbour of the same kind and level. */
    const stepRow = (event: KeyboardEvent, row: TreeRow) => {
      if (!event.altKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return
      event.preventDefault()
      const up = event.key === 'ArrowUp'
      if (row.kind === 'folder') {
        const siblings = folders.filter(folder => folder.parent === row.folder.parent)
        const neighbour = siblings[siblings.findIndex(folder => folder.id === row.folder.id) + (up ? -1 : 1)]
        if (neighbour) applyDrop({ kind: 'folder', id: row.folder.id }, { place: up ? 'before' : 'after', target: { kind: 'folder', id: neighbour.id } })
      } else {
        const here = folderOfLink(row.link, folders)
        const siblings = links.filter(link => folderOfLink(link, folders) === here)
        const neighbour = siblings[siblings.findIndex(link => link.url === row.link.url) + (up ? -1 : 1)]
        if (neighbour) applyDrop({ kind: 'link', id: row.link.url }, { place: up ? 'before' : 'after', target: { kind: 'link', url: neighbour.url } })
      }
      queueMicrotask(() => listRef.current?.querySelector<HTMLElement>(`[data-key="${CSS.escape(rowKey(row))}"]`)?.focus())
    }
    const dropClass = (row: TreeRow) => {
      const drop = drag?.drop
      if (!drop || drop.target.kind === 'root') return ''
      const hit = drop.target.kind === 'folder' ? row.kind === 'folder' && row.folder.id === drop.target.id : row.kind === 'link' && row.link.url === drop.target.url
      return hit ? ` drop-${drop.place}` : ''
    }
    const isDragged = (row: TreeRow) => drag !== null && (row.kind === 'folder' ? drag.moving.kind === 'folder' && drag.moving.id === row.folder.id : drag.moving.kind === 'link' && drag.moving.id === row.link.url)

    const folderMenu = async (event: MouseEvent, folder: PolyboxFolder) => {
      event.preventDefault(); event.stopPropagation()
      const choice = await api.ui.openMenu([
        { id: 'sub', label: t('polybox.folder.newInside'), icon: h(Icon, { shapes: FOLDER_PLUS }), enabled: canNest(folders, folder.id) },
        { type: 'separator' },
        { id: 'rename', label: t('polybox.rename'), icon: h(Icon, { shapes: PEN }) },
        { id: 'delete', label: t('polybox.folder.delete'), icon: h(Icon, { shapes: TRASH }) }
      ], { x: event.clientX, y: event.clientY })
      if (choice === 'sub') newFolder(folder.id)
      if (choice === 'rename') setRenaming(`f:${folder.id}`)
      if (choice === 'delete') deleteFolder(folder.id)
    }
    const linkMenu = async (event: MouseEvent, link: PolyboxLink) => {
      event.preventDefault(); event.stopPropagation()
      const token = shareToken(link.url)
      const choice = await api.ui.openMenu([
        { id: 'tab', label: t('polybox.openInNewTab'), icon: h(Icon, { shapes: TAB }), enabled: Boolean(token) },
        { id: 'website', label: t('polybox.openWebsite'), icon: h(Icon, { shapes: OPEN }), enabled: Boolean(token) },
        { type: 'separator' },
        { id: 'rename', label: t('polybox.rename'), icon: h(Icon, { shapes: PEN }) },
        { id: 'remove', label: t('polybox.removeSubject'), icon: h(Icon, { shapes: TRASH }) }
      ], { x: event.clientX, y: event.clientY })
      if (choice === 'tab') openSubject(link, true)
      if (choice === 'website' && token) void api.links.open(sharePageUrl(token))
      if (choice === 'rename') setRenaming(`l:${link.url}`)
      if (choice === 'remove') remove(link)
    }
    const listMenu = async (event: MouseEvent) => {
      event.preventDefault()
      const choice = await api.ui.openMenu([{ id: 'folder', label: t('polybox.folder.new'), icon: h(Icon, { shapes: FOLDER_PLUS }) }], { x: event.clientX, y: event.clientY })
      if (choice === 'folder') newFolder()
    }

    const renderRow = (row: TreeRow): Node => {
      const key = rowKey(row)
      const editing = renaming === key
      const common = {
        key, 'data-key': key, 'data-row': row.kind, style: { '--pbx-depth': row.depth } as Record<string, unknown>,
        onPointerDown: (event: PointerEvent) => onPointerDown(event, row.kind === 'folder' ? { kind: 'folder', id: row.folder.id } : { kind: 'link', id: row.link.url }),
        onKeyDown: (event: KeyboardEvent) => { if (!editing) stepRow(event, row) }
      }
      if (row.kind === 'folder') {
        const { folder } = row
        return h(editing ? 'div' : 'button', {
          ...common, type: editing ? undefined : 'button', className: `pbx-row folder${isDragged(row) ? ' dragging' : ''}${dropClass(row)}`,
          'data-id': folder.id, 'data-open': String(row.open), 'data-empty': String(!folders.some(f => f.parent === folder.id) && !links.some(link => folderOfLink(link, folders) === folder.id)),
          'aria-expanded': row.open,
          onClick: editing ? undefined : () => { if (!suppressClick.current) toggleFolder(folder.id) },
          onDoubleClick: editing ? undefined : () => setRenaming(key),
          onContextMenu: editing ? undefined : (event: MouseEvent) => void folderMenu(event, folder)
        },
        h('span', { className: 'pbx-row-icon' }, h(Icon, { shapes: row.open ? FOLDER_OPEN : FOLDER })),
        editing ? h(RenameField, { value: folder.name, placeholder: t('polybox.folder.new'), onDone: name => { setRenaming(null); if (name !== null) renameFolder(folder.id, name) } })
          : h('span', { className: 'pbx-row-name' }, folder.name || t('polybox.untitled')),
        editing || !row.count ? null : h('span', { className: 'pbx-row-count' }, row.count))
      }
      const { link } = row
      const token = shareToken(link.url)
      const active = Boolean(token) && open === subjectInstance(token!)
      return h(editing ? 'div' : 'button', {
        ...common, type: editing ? undefined : 'button', className: `pbx-row${active ? ' active' : ''}${isDragged(row) ? ' dragging' : ''}${dropClass(row)}`,
        'data-id': link.url, 'data-subject': token ?? '', 'aria-current': active ? 'page' : undefined,
        title: token ? `${subjectName(link)} · polybox.ethz.ch/s/${token}` : t('polybox.invalid'),
        onClick: editing ? undefined : (event: MouseEvent) => { if (!suppressClick.current) openSubject(link, api.ui.hasModKey(event)) },
        onAuxClick: (event: MouseEvent) => { if (event.button === 1 && !editing) { event.preventDefault(); openSubject(link, true) } },
        onDoubleClick: editing ? undefined : () => setRenaming(key),
        onContextMenu: editing ? undefined : (event: MouseEvent) => void linkMenu(event, link)
      },
      h('span', { className: 'pbx-row-icon' }, h(Icon, { shapes: POLYBOX_ICON })),
      editing ? h(RenameField, { value: link.name || '', placeholder: subjectName(link), onDone: name => { setRenaming(null); if (name !== null) renameLink(link.url, name) } })
        : h('span', { className: `pbx-row-name${link.name ? '' : ' pending'}` }, subjectName(link)))
    }

    return h(React.Fragment, null,
      h(AddBar, { extra: h('button', { type: 'button', className: 'poly-icon-btn', title: t('polybox.folder.new'), 'aria-label': t('polybox.folder.new'), onClick: () => newFolder() }, h(Icon, { shapes: FOLDER_PLUS })) }),
      h('div', {
        ref: listRef, className: `pbx-list${drag?.drop?.target.kind === 'root' ? ' drop-root' : ''}`, role: 'tree', 'aria-label': t('polybox.title'),
        onPointerMove, onPointerUp: (event: PointerEvent) => finish(event, true), onPointerCancel: (event: PointerEvent) => finish(event, false),
        onContextMenu: (event: MouseEvent) => { if (event.target === listRef.current) void listMenu(event) }
      }, rows.length ? rows.map(renderRow) : h('div', { className: 'pbx-empty' }, t('polybox.empty'))))
  }

  /** Listings read once stay in memory, so going back up a folder shows it at once; Refresh reads past them. */
  const listings = new Map<string, PolyboxFile[]>()
  /** The folder each subject's page shows, kept while the plugin runs so a tab comes back where it was. */
  /** Each subject's folder history while the plugin runs (28 Nov, on request: "can't go back"): the host's back and forward step through it. */
  const folders = new Map<string, { stack: string[]; index: number }>()

  function useListing(token: string, path: string, revision: number): Listing {
    const key = `${token}:${path}`
    const [state, setState] = React.useState<Listing>(() => ({ files: listings.get(key) ?? null, error: '', code: '', loading: !listings.has(key) }))
    React.useEffect(() => {
      let live = true
      const cached = listings.get(key)
      setState({ files: cached ?? null, error: '', code: '', loading: !cached || revision > 0 })
      api.backend.call<PolyboxFile[]>('polybox.list', { token, path, fresh: revision > 0 }).then(
        files => { listings.set(key, files); if (live) setState({ files, error: '', code: '', loading: false }) },
        error => { if (live) setState({ files: cached ?? null, error: problem(error), code: error instanceof Error ? error.message : '', loading: false }) })
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
  const isPdf = (file: PolyboxFile) => file.type === 'application/pdf' || /\.pdf$/i.test(file.name)
  const isImage = (file: PolyboxFile) => Boolean(file.type?.startsWith('image/'))
  const fileIcon = (file: PolyboxFile) => file.isFolder ? FOLDER : isPdf(file) ? PDF : isImage(file) ? IMAGE : FILE
  const fileGlyph = (file: PolyboxFile) => file.isFolder ? FA_FOLDER : isPdf(file) ? FA_FILE_PDF : isImage(file) ? FA_FILE_IMAGE : FA_FILE

  /**
   * A password share's lock (28 Nov, on request): the password is checked against Polybox and, when it fits, stored
   * encrypted by the backend for this share; the listing then loads with it. A stored password that stopped fitting asks again.
   */
  function PasswordForm({ token, stale, onUnlocked }: { token: string; stale: boolean; onUnlocked: () => void }): Node {
    const [value, setValue] = React.useState('')
    const [busy, setBusy] = React.useState(false)
    const [note, setNote] = React.useState('')
    const submit = async (event: Event) => {
      event.preventDefault()
      if (!value || busy) return
      setBusy(true); setNote('')
      try {
        const result = await api.backend.call<{ ok: true } | { ok: false; reason: 'rejected' | 'network' }>('polybox.unlock', { token, password: value })
        if (result.ok) { setValue(''); onUnlocked(); return }
        setNote(t(result.reason === 'rejected' ? 'polybox.password.rejected' : 'polybox.error.networkError'))
      } catch (error) { setNote(problem(error)) }
      finally { setBusy(false) }
    }
    const label = t('polybox.password.placeholder')
    return h('form', { className: 'pbx-lock', onSubmit: (event: Event) => void submit(event) },
      h('span', { className: 'pbx-lock-icon' }, h(Icon, { shapes: LOCK })),
      h('p', { className: 'pbx-lock-text' }, t(stale ? 'polybox.password.stale' : 'polybox.password.needed')),
      h('div', { className: 'pbx-lock-row' },
        h('input', { className: 'pbx-lock-input', type: 'password', value, placeholder: label, 'aria-label': label, autoFocus: true, autoComplete: 'off', spellCheck: false, disabled: busy,
          onChange: (event: { target: HTMLInputElement }) => { setValue(event.target.value); setNote('') } }),
        h('button', { type: 'submit', className: 'pbx-lock-btn', disabled: busy || !value }, t('polybox.password.unlock'))),
      note ? h('div', { className: 'pbx-lock-note', role: 'alert' }, note) : null)
  }

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
    const crumbs = [{ label: '/', path: '' }, ...parts.map((part, index) => ({ label: part, path: parts.slice(0, index + 1).join('/') }))]
    const sort = sortOf(api.settings.get().polyboxSort)
    const files = listing.files ? sortFiles(listing.files, sort) : null
    /** A click on a column title sorts by it; a second click on the same title reverses the order. */
    const sortBy = (key: SortKey) => void api.settings.set('polyboxSort', { key, dir: sort.key === key && sort.dir === 'asc' ? 'desc' : 'asc' })
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
    const view = viewOf(api.settings.get().polyboxView)
    const locked = listing.code === 'polyboxPassword' || listing.code === 'polyboxWrongPassword'
    const unlocked = () => {
      for (const key of [...listings.keys()]) if (key.startsWith(`${token}:`)) listings.delete(key)
      named.delete(token)
      nameMissing()
      setRevision(value => value + 1)
    }
    const fileProps = (file: PolyboxFile, className: string) => ({
      key: file.path, type: 'button', className: `${className}${file.isFolder ? ' folder' : ''}`, 'data-path': file.path,
      title: file.isFolder ? fill(t('polybox.openFolder'), { name: file.name }) : fill(t('polybox.openFile'), { name: file.name }),
      'aria-busy': opening === file.path || undefined, disabled: opening === file.path,
      onClick: (event: MouseEvent) => open(file, event),
      onAuxClick: (event: MouseEvent) => { if (event.button === 1 && !file.isFolder) { event.preventDefault(); void act(file, 'tab') } },
      onContextMenu: (event: MouseEvent) => void menu(event, file)
    })
    const body = locked && !files ? h(PasswordForm, { token, stale: listing.code === 'polyboxWrongPassword', onUnlocked: unlocked })
      : listing.error && !files ? h('div', { className: 'poly-note error', role: 'alert' }, listing.error)
      : !files ? (listing.loading ? null : h('div', { className: 'poly-note' }, t('polybox.folderEmpty')))
      : !files.length ? h('div', { className: 'poly-note' }, t('polybox.folderEmpty'))
      : view === 'grid' ? h(React.Fragment, null, files.map(file => h('button', fileProps(file, 'pbx-tile'),
        h('span', { className: 'pbx-tile-icon' }, h(FaIcon, { glyph: fileGlyph(file) })),
        h('span', { className: 'pbx-tile-name' }, file.name),
        h('span', { className: 'pbx-tile-meta' }, file.isFolder ? formatDate(file.modified, locale) : formatSize(file.size, locale)))))
      : h(React.Fragment, null, files.map(file => h('button', fileProps(file, 'pbx-file'),
      h('span', { className: 'pbx-file-icon' }, h(Icon, { shapes: fileIcon(file) })),
      h('span', { className: 'pbx-file-name' }, file.name),
      h('span', { className: 'pbx-file-date created' }, formatDate(file.created, locale)),
      h('span', { className: 'pbx-file-date modified' }, formatDate(file.modified, locale)),
      h('span', { className: 'pbx-file-size' }, file.isFolder ? '' : formatSize(file.size, locale)))))
    const shareLink = sharePageUrl(token)
    const [copied, setCopied] = React.useState(false)
    React.useEffect(() => { if (!copied) return; const timer = setTimeout(() => setCopied(false), 1500); return () => clearTimeout(timer) }, [copied])
    const copyLink = () => { api.ui.writeClipboardText(shareLink).then(() => setCopied(true), () => setOpenError(t('polybox.copyFailed'))) }
    const copyLabel = copied ? t('polybox.copied') : t('polybox.copyLink')
    const viewLabel = t(view === 'grid' ? 'polybox.view.list' : 'polybox.view.grid')
    return h('div', { className: 'poly-page' },
      h('div', { className: 'poly-bar poly-page-head' },
        h('span', { className: 'poly-bar-balance triple', 'aria-hidden': true }),
        h('h1', { className: 'poly-page-title', title }, title),
        h('button', { type: 'button', className: 'poly-icon-btn', title: viewLabel, 'aria-label': viewLabel, 'aria-pressed': view === 'grid', onClick: () => void api.settings.set('polyboxView', view === 'grid' ? 'list' : 'grid') }, h(Icon, { shapes: view === 'grid' ? LIST : GRID })),
        h('button', { type: 'button', className: `poly-icon-btn pbx-copy${copied ? ' done' : ''}`, title: `${copyLabel} (${shareLink})`, 'aria-label': copyLabel, onClick: copyLink }, h(Icon, { shapes: copied ? CHECK : COPY })),
        h('button', { type: 'button', className: `poly-icon-btn${listing.loading && revision > 0 ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: () => setRevision(value => value + 1) }, h(Icon, { shapes: REFRESH }))),
      h('div', { className: 'poly-bar pbx-path' }, h('nav', { className: 'pbx-crumbs', 'aria-label': t('polybox.path') },
        ...crumbs.flatMap((crumb, index) => [
          index > 1 ? h('span', { key: `sep${index}`, className: 'pbx-crumb-sep', 'aria-hidden': true }, h(Icon, { shapes: SLASH })) : null,
          h('button', { key: crumb.path || '/', type: 'button', className: `pbx-crumb${index ? '' : ' root'}`, 'aria-current': index === crumbs.length - 1 ? 'page' : undefined, title: index ? crumb.label : title, 'aria-label': index ? undefined : title, onClick: () => { if (index < crumbs.length - 1) setPath(crumb.path) } },
            index ? h('span', { className: 'pbx-crumb-label' }, crumb.label) : h(Icon, { shapes: SLASH }))
        ]))),
      view === 'list' && files?.length ? h('div', { className: 'poly-bar pbx-columns', role: 'toolbar', 'aria-label': t('polybox.sort.label') },
        ...(['name', 'created', 'modified', 'size'] as SortKey[]).map(key => {
          const active = sort.key === key
          const label = t(`polybox.column.${key}`)
          return h('button', {
            key, type: 'button', className: `pbx-col ${key}${active ? ' active' : ''}`, 'aria-sort': active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined,
            title: fill(t(active && sort.dir === 'asc' ? 'polybox.sort.desc' : 'polybox.sort.asc'), { column: label }), onClick: () => sortBy(key)
          }, h('span', { className: 'pbx-col-label' }, label), active ? h('span', { className: 'pbx-col-arrow', 'aria-hidden': true }, h(Icon, { shapes: sort.dir === 'asc' ? ARROW_UP : ARROW_DOWN })) : null)
        })) : null,
      h('div', { className: 'poly-list' }, h('div', { className: view === 'grid' && files?.length ? 'pbx-grid' : 'pbx-files' }, body,
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
