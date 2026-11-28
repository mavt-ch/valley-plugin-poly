import { decodeEntities } from '../news/model'

/** One row of the Polybox table: a subject and its Polybox share link, optionally in a sidebar folder (`tree.ts`). */
export type PolyboxLink = { name: string; url: string; folder?: string }

/** One file or folder of a share, as the backend lists it. */
/** `created` is when the file was added to Polybox (Nextcloud's upload time); folders and older files have none. */
export type PolyboxFile = { name: string; path: string; isFolder: boolean; size?: number; created?: string; modified?: string; type?: string; url: string }

export const POLYBOX_INSTANCE = 'polybox'
const TOKEN = /^[A-Za-z0-9]{6,64}$/
export const isShareToken = (value: unknown): value is string => typeof value === 'string' && TOKEN.test(value)
/** The page of one subject: `polybox:<share token>`; bare `polybox` lists every subject. */
export const subjectInstance = (token: string) => `${POLYBOX_INSTANCE}:${token}`
export const subjectOf = (value: unknown): string | null => typeof value === 'string' && value.startsWith(`${POLYBOX_INSTANCE}:`) && isShareToken(value.slice(POLYBOX_INSTANCE.length + 1)) ? value.slice(POLYBOX_INSTANCE.length + 1) : null
export const isPolyboxInstance = (value: unknown) => value === POLYBOX_INSTANCE || subjectOf(value) !== null
/** A public share as WebDAV: Nextcloud's public endpoint needs no login, and its file addresses open directly. */
export const shareDavUrl = (token: string) => `https://polybox.ethz.ch/public.php/dav/files/${token}/`
export const sharePageUrl = (token: string, path = '') => `https://polybox.ethz.ch/index.php/s/${token}${path ? `?${new URLSearchParams({ path: `/${path}` })}` : ''}`
/** A folder path inside a share: relative, `/`-separated, no empty, `.` or `..` segment. */
export const isSharePath = (value: unknown): value is string => typeof value === 'string' && value.length <= 1000 && (value === '' || value.split('/').every(part => part !== '' && part !== '.' && part !== '..'))

/** One path segment as a realm file or folder name: no separators or control characters, no leading dot, never a reserved name. */
export function realmSegment(name: string): string {
  const clean = name.replace(/[\u0000-\u001f\u007f/\\:]/g, ' ').replace(/\s+/g, ' ').trim().replace(/^\.+/, '').trim()
  return !clean || /^(\.valley|\.git|\.env)$/i.test(clean) ? '_' : clean.slice(0, 180)
}
/** Polybox's own folder in the plugin data folder; each share keeps its files below its token. */
export const POLYBOX_DATA = 'plugins/data/poly/polybox'
/** Where a share's file is kept inside `POLYBOX_DATA`: `<token>/<path inside the share>`, every segment a safe file name. */
export const keptPath = (token: string, path: string) => [token, ...path.split('/').filter(Boolean).map(realmSegment)].join('/')

export type SortKey = 'name' | 'created' | 'modified' | 'size'
export type FileSort = { key: SortKey; dir: 'asc' | 'desc' }
export const DEFAULT_SORT: FileSort = { key: 'name', dir: 'asc' }
const SORT_KEYS: SortKey[] = ['name', 'created', 'modified', 'size']
/** The saved column sort, else name ascending. */
export function sortOf(value: unknown): FileSort {
  const raw = value && typeof value === 'object' ? value as Record<string, unknown> : {}
  return SORT_KEYS.includes(raw.key as SortKey) && (raw.dir === 'asc' || raw.dir === 'desc') ? { key: raw.key as SortKey, dir: raw.dir } : DEFAULT_SORT
}
const byName = (a: PolyboxFile, b: PolyboxFile) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
const time = (iso: string | undefined) => { const value = iso ? Date.parse(iso) : NaN; return Number.isFinite(value) ? value : null }
/**
 * Folders first, then files, each by the chosen column (28 Nov, on request: "add desc asc sort"); names sort as people
 * sort (Serie 2 before Serie 10), a missing date or size always goes last, and equal values fall back to the name.
 */
export function sortFiles(files: PolyboxFile[], sort: FileSort = DEFAULT_SORT): PolyboxFile[] {
  const sign = sort.dir === 'desc' ? -1 : 1
  const value = (file: PolyboxFile) => sort.key === 'size' ? (file.isFolder ? null : file.size ?? null) : sort.key === 'created' ? time(file.created) : sort.key === 'modified' ? time(file.modified) : null
  return [...files].sort((a, b) => {
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    if (sort.key === 'name') return sign * byName(a, b)
    const x = value(a), y = value(b)
    if (x === null || y === null) return x === y ? byName(a, b) : x === null ? 1 : -1
    return sign * (x - y) || byName(a, b)
  })
}

/** The share's own title from its public page (`og:title`), entities decoded; '' when it has none. */
export function shareTitle(html: string): string {
  const match = /<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']*)["']/i.exec(html) ?? /<meta[^>]+content=["']([^"']*)["'][^>]*property=["']og:title["']/i.exec(html)
  return match ? decodeEntities(match[1]).replace(/\s+/g, ' ').trim().slice(0, MAX_NAME) : ''
}
export const MAX_LINKS = 200
export const MAX_NAME = 200
export const MAX_URL = 2000

const SHARE = /^https:\/\/polybox\.ethz\.ch\/(?:index\.php\/)?s\/([A-Za-z0-9]{6,64})(?:[/?#]\S*)?$/
const URL_IN_TEXT = /(?:https?:\/\/|(?=polybox\.ethz\.ch\/))\S+/i

/** A typed link with `https://` added when it starts at the host; anything else stays as written. */
export function normalizeUrl(text: string): string {
  const value = text.trim()
  return /^polybox\.ethz\.ch\//i.test(value) ? `https://${value}` : value
}

/** The share token of a Polybox share link, else null (any other address, a folder of someone's own account). */
export function shareToken(url: string): string | null {
  return SHARE.exec(url.trim())?.[1] ?? null
}

/** The saved rows: well-formed entries only, trimmed, capped. */
export function linksOf(value: unknown): PolyboxLink[] {
  if (!Array.isArray(value)) return []
  return value.flatMap(item => {
    if (!item || typeof item !== 'object') return []
    const { name, url, folder } = item as Record<string, unknown>
    if (typeof name !== 'string' || typeof url !== 'string') return []
    const row: PolyboxLink = { name: name.trim().slice(0, MAX_NAME), url: url.trim().slice(0, MAX_URL), ...(typeof folder === 'string' && /^f-[a-z0-9]{6,32}$/.test(folder) ? { folder } : {}) }
    return row.name || row.url ? [row] : []
  }).slice(0, MAX_LINKS)
}

/**
 * Pasted text as table rows: one row per line; a line is split at tabs (cells copied from a spreadsheet)
 * or else into its link and the text around it ("Analysis I https://polybox…", "Analysis I: polybox…").
 * The cell that holds a link is the link whichever column it came from.
 */
export function parsePasted(text: string): PolyboxLink[] {
  return text.split(/\r?\n/).flatMap(line => {
    if (!line.trim()) return []
    const cells = line.includes('\t') ? line.split('\t').map(cell => cell.trim()).filter(Boolean) : null
    if (cells) {
      const index = cells.findIndex(cell => URL_IN_TEXT.test(cell))
      const url = index >= 0 ? normalizeUrl(URL_IN_TEXT.exec(cells[index])![0]) : ''
      const name = cells.filter((_, i) => i !== index).join(' ')
      return [{ name: name.slice(0, MAX_NAME), url: url.slice(0, MAX_URL) }]
    }
    const match = URL_IN_TEXT.exec(line)
    if (!match) return [{ name: line.trim().slice(0, MAX_NAME), url: '' }]
    const name = (line.slice(0, match.index) + ' ' + line.slice(match.index + match[0].length)).replace(/[\s:;,|–—-]+$/u, '').replace(/^[\s:;,|–—-]+/u, '').replace(/\s+/g, ' ').trim()
    return [{ name: name.slice(0, MAX_NAME), url: normalizeUrl(match[0]).slice(0, MAX_URL) }]
  }).slice(0, MAX_LINKS)
}
