/**
 * The Polybox sidebar as a tree (28 Nov, on request: "make folder into max three folder depth … drag and drop to
 * reorder"): user folders nest at most three deep and hold subjects. Folders are saved in `polyboxFolders` (order =
 * order among siblings), a subject's folder in its own `folder` field of `polyboxLinks` (order = order among the
 * subjects of that folder). Inside a folder its subfolders come first, then its subjects.
 */
import type { PolyboxLink } from './model'

export type PolyboxFolder = { id: string; name: string; parent?: string }
export const MAX_DEPTH = 3
export const MAX_FOLDERS = 200
export const MAX_FOLDER_NAME = 120
const FOLDER_ID = /^f-[a-z0-9]{6,32}$/

export const isFolderId = (value: unknown): value is string => typeof value === 'string' && FOLDER_ID.test(value)
export const newFolderId = () => `f-${crypto.randomUUID().replace(/-/g, '').slice(0, 12)}`

/** The saved folders: well-formed, unique, with a known parent, no cycle and never deeper than three. */
export function foldersOf(value: unknown): PolyboxFolder[] {
  if (!Array.isArray(value)) return []
  const raw = new Map<string, PolyboxFolder>()
  for (const item of value.slice(0, MAX_FOLDERS)) {
    if (!item || typeof item !== 'object') continue
    const { id, name, parent } = item as Record<string, unknown>
    if (!isFolderId(id) || raw.has(id) || typeof name !== 'string') continue
    raw.set(id, { id, name: name.trim().slice(0, MAX_FOLDER_NAME), ...(isFolderId(parent) && parent !== id ? { parent } : {}) })
  }
  const depth = (id: string, seen = new Set<string>()): number => {
    const folder = raw.get(id)
    if (!folder || seen.has(id)) return Infinity
    seen.add(id)
    return folder.parent ? depth(folder.parent, seen) + 1 : 1
  }
  return [...raw.values()].filter(folder => depth(folder.id) <= MAX_DEPTH)
}

/** A subject's folder when it still exists, else none (top level). */
export const folderOfLink = (link: PolyboxLink, folders: PolyboxFolder[]): string | undefined =>
  link.folder && folders.some(folder => folder.id === link.folder) ? link.folder : undefined

/** 1 for a top-level folder. */
export function depthOf(folders: PolyboxFolder[], id: string): number {
  let depth = 0
  for (let folder = folders.find(f => f.id === id); folder && depth <= MAX_DEPTH; folder = folders.find(f => f.id === folder!.parent)) depth++
  return depth
}

/** The folder and every folder below it. */
export function subtree(folders: PolyboxFolder[], id: string): Set<string> {
  const ids = new Set([id])
  for (let grown = true; grown;) {
    grown = false
    for (const folder of folders) if (folder.parent && ids.has(folder.parent) && !ids.has(folder.id)) { ids.add(folder.id); grown = true }
  }
  return ids
}

/** How many levels a folder spans with its subfolders: 1 for a folder without subfolders. */
export function heightOf(folders: PolyboxFolder[], id: string): number {
  const children = folders.filter(folder => folder.parent === id)
  return 1 + Math.max(0, ...children.map(child => heightOf(folders, child.id)))
}

export type TreeRow =
  | { kind: 'folder'; folder: PolyboxFolder; depth: number; open: boolean; count: number }
  | { kind: 'link'; link: PolyboxLink; depth: number }

/** The visible rows, top to bottom: each folder's subfolders, then its subjects; a closed folder hides its contents. */
export function treeRows(folders: PolyboxFolder[], links: PolyboxLink[], collapsed: ReadonlySet<string>): TreeRow[] {
  const rows: TreeRow[] = []
  const count = (id: string) => { const ids = subtree(folders, id); return links.filter(link => { const folder = folderOfLink(link, folders); return folder !== undefined && ids.has(folder) }).length }
  const walk = (parent: string | undefined, depth: number) => {
    for (const folder of folders.filter(f => f.parent === parent)) {
      const open = !collapsed.has(folder.id)
      rows.push({ kind: 'folder', folder, depth, open, count: count(folder.id) })
      if (open) walk(folder.id, depth + 1)
    }
    for (const link of links.filter(l => folderOfLink(l, folders) === parent)) rows.push({ kind: 'link', link, depth })
  }
  walk(undefined, 0)
  return rows
}

export type DropTarget = { kind: 'folder'; id: string } | { kind: 'link'; url: string } | { kind: 'root' }
export type Drop = { place: 'before' | 'after' | 'into'; target: DropTarget }

const container = (target: DropTarget, folders: PolyboxFolder[], links: PolyboxLink[], place: Drop['place']): string | undefined | null => {
  if (target.kind === 'root') return undefined
  if (target.kind === 'folder') {
    const folder = folders.find(f => f.id === target.id)
    if (!folder) return null
    return place === 'into' ? folder.id : folder.parent
  }
  const link = links.find(l => l.url === target.url)
  return link ? folderOfLink(link, folders) : null
}

/** A subject moved by a drop: into a folder (last of its subjects), beside another subject, or to the top of a folder row's level. */
export function moveLink(links: PolyboxLink[], folders: PolyboxFolder[], url: string, drop: Drop): PolyboxLink[] {
  const moving = links.find(link => link.url === url)
  if (!moving || (drop.target.kind === 'link' && drop.target.url === url)) return links
  const folder = container(drop.target, folders, links, drop.place)
  if (folder === null) return links
  const rest = links.filter(link => link.url !== url)
  const moved: PolyboxLink = { name: moving.name, url: moving.url, ...(folder ? { folder } : {}) }
  let index: number
  if (drop.target.kind === 'link') {
    const targetUrl = drop.target.url
    const at = rest.findIndex(link => link.url === targetUrl)
    index = drop.place === 'after' ? at + 1 : at
  } else if (drop.place === 'into' || drop.target.kind === 'root') {
    const last = rest.map(link => folderOfLink(link, folders)).lastIndexOf(folder)
    index = last < 0 ? rest.length : last + 1
  } else {
    // Beside a folder row: subjects come after the folders of that level, so the subject becomes the level's first.
    const first = rest.findIndex(link => folderOfLink(link, folders) === folder)
    index = first < 0 ? rest.length : first
  }
  return [...rest.slice(0, index), moved, ...rest.slice(index)]
}

/** A folder moved by a drop, or null when the drop is not allowed (into itself or below it, or deeper than three). */
export function moveFolder(folders: PolyboxFolder[], links: PolyboxLink[], id: string, drop: Drop): PolyboxFolder[] | null {
  const moving = folders.find(folder => folder.id === id)
  if (!moving) return null
  if (drop.target.kind === 'folder' && drop.target.id === id) return drop.place === 'into' ? null : folders
  const parent = container(drop.target, folders, links, drop.place)
  if (parent === null) return null
  const own = subtree(folders, id)
  if (parent && own.has(parent)) return null
  if ((parent ? depthOf(folders, parent) : 0) + heightOf(folders, id) > MAX_DEPTH) return null
  const rest = folders.filter(folder => folder.id !== id)
  const moved: PolyboxFolder = { id: moving.id, name: moving.name, ...(parent ? { parent } : {}) }
  let index: number
  if (drop.target.kind === 'folder' && drop.place !== 'into') {
    const targetId = drop.target.id
    const at = rest.findIndex(folder => folder.id === targetId)
    index = drop.place === 'after' ? at + 1 : at
  } else {
    // Into a folder, or beside a subject: the folder becomes the last folder of that level.
    const last = rest.map(folder => folder.parent).lastIndexOf(parent)
    index = last < 0 ? rest.length : last + 1
  }
  return [...rest.slice(0, index), moved, ...rest.slice(index)]
}

/** A removed folder hands its subfolders and subjects to its own parent; nothing else is lost. */
export function removeFolder(folders: PolyboxFolder[], links: PolyboxLink[], id: string): { folders: PolyboxFolder[]; links: PolyboxLink[] } {
  const folder = folders.find(f => f.id === id)
  if (!folder) return { folders, links }
  const lift = <T extends { parent?: string } | { folder?: string }>(item: T, key: 'parent' | 'folder'): T => {
    const { [key]: _old, ...rest } = item as Record<string, unknown>
    return (folder.parent ? { ...rest, [key]: folder.parent } : rest) as T
  }
  return {
    folders: folders.filter(f => f.id !== id).map(f => f.parent === id ? lift(f, 'parent') : f),
    links: links.map(link => link.folder === id ? lift(link, 'folder') : link)
  }
}

/** The folder a new subfolder may go into: only folders above the third level. */
export const canNest = (folders: PolyboxFolder[], id: string) => depthOf(folders, id) < MAX_DEPTH
