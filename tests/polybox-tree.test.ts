import { describe, expect, it } from 'vitest'
import { depthOf, foldersOf, heightOf, moveFolder, moveLink, removeFolder, treeRows, type PolyboxFolder } from '../src/polybox/tree'
import { linksOf, type PolyboxLink } from '../src/polybox/model'

const A = 'https://polybox.ethz.ch/index.php/s/AaAaAa111111'
const B = 'https://polybox.ethz.ch/index.php/s/BbBbBb222222'
const C = 'https://polybox.ethz.ch/index.php/s/CcCcCc333333'
const folders: PolyboxFolder[] = [
  { id: 'f-sem1aaaa', name: 'Semester 1' },
  { id: 'f-mathaaaa', name: 'Mathe', parent: 'f-sem1aaaa' },
  { id: 'f-uebaaaaa', name: 'Übungen', parent: 'f-mathaaaa' },
  { id: 'f-sem2aaaa', name: 'Semester 2' }
]
const links: PolyboxLink[] = [{ name: 'Analysis', url: A, folder: 'f-mathaaaa' }, { name: 'Physik', url: B }, { name: 'Chemie', url: C, folder: 'f-mathaaaa' }]
const names = (rows: ReturnType<typeof treeRows>) => rows.map(row => `${'  '.repeat(row.depth)}${row.kind === 'folder' ? row.folder.name : row.link.name}`)

describe('Polybox sidebar tree', () => {
  it('reads folders three deep at most, drops cycles and unknown parents, and keeps a subject\'s folder', () => {
    const read = foldersOf([...folders, { id: 'f-deepaaaa', name: 'Too deep', parent: 'f-uebaaaaa' }, { id: 'f-loopaaaa', name: 'Loop', parent: 'f-loopbbbb' }, { id: 'f-loopbbbb', name: 'Loop 2', parent: 'f-loopaaaa' }, { id: 'bad', name: 'x' }])
    expect(read.map(folder => folder.name)).toEqual(['Semester 1', 'Mathe', 'Übungen', 'Semester 2'])
    expect(depthOf(read, 'f-uebaaaaa')).toBe(3)
    expect(heightOf(read, 'f-sem1aaaa')).toBe(3)
    expect(linksOf([{ name: 'x', url: A, folder: 'f-mathaaaa' }, { name: 'y', url: B, folder: '../x' }])).toEqual([{ name: 'x', url: A, folder: 'f-mathaaaa' }, { name: 'y', url: B }])
  })

  it('lists subfolders before subjects and hides what a closed folder holds', () => {
    expect(names(treeRows(folders, links, new Set()))).toEqual(['Semester 1', '  Mathe', '    Übungen', '    Analysis', '    Chemie', 'Semester 2', 'Physik'])
    const rows = treeRows(folders, links, new Set(['f-mathaaaa']))
    expect(names(rows)).toEqual(['Semester 1', '  Mathe', 'Semester 2', 'Physik'])
    expect(rows.find(row => row.kind === 'folder' && row.folder.id === 'f-sem1aaaa')).toMatchObject({ count: 2, open: true })
  })

  it('moves subjects into folders, beside other subjects and to the top level', () => {
    const into = moveLink(links, folders, B, { place: 'into', target: { kind: 'folder', id: 'f-uebaaaaa' } })
    expect(into.find(link => link.url === B)?.folder).toBe('f-uebaaaaa')
    const before = moveLink(links, folders, C, { place: 'before', target: { kind: 'link', url: A } })
    expect(before.map(link => link.name)).toEqual(['Chemie', 'Analysis', 'Physik'])
    const out = moveLink(links, folders, A, { place: 'after', target: { kind: 'link', url: B } })
    expect(out.find(link => link.url === A)).toEqual({ name: 'Analysis', url: A })
    expect(names(treeRows(folders, out, new Set()))).toEqual(['Semester 1', '  Mathe', '    Übungen', '    Chemie', 'Semester 2', 'Physik', 'Analysis'])
    const root = moveLink(links, folders, C, { place: 'into', target: { kind: 'root' } })
    expect(root.map(link => link.name)).toEqual(['Analysis', 'Physik', 'Chemie'])
    expect(root.find(link => link.url === C)?.folder).toBeUndefined()
  })

  it('moves folders but never into themselves or below the third level', () => {
    expect(moveFolder(folders, links, 'f-sem1aaaa', { place: 'into', target: { kind: 'folder', id: 'f-uebaaaaa' } })).toBeNull()
    expect(moveFolder(folders, links, 'f-sem1aaaa', { place: 'into', target: { kind: 'folder', id: 'f-sem2aaaa' } })).toBeNull()
    expect(moveFolder(folders, links, 'f-sem2aaaa', { place: 'into', target: { kind: 'folder', id: 'f-uebaaaaa' } })).toBeNull()
    const nested = moveFolder(folders, links, 'f-sem2aaaa', { place: 'into', target: { kind: 'folder', id: 'f-mathaaaa' } })!
    expect(nested.find(folder => folder.id === 'f-sem2aaaa')?.parent).toBe('f-mathaaaa')
    const reordered = moveFolder(folders, links, 'f-sem2aaaa', { place: 'before', target: { kind: 'folder', id: 'f-sem1aaaa' } })!
    expect(treeRows(reordered, [], new Set()).map(row => row.kind === 'folder' ? row.folder.name : '')).toEqual(['Semester 2', 'Semester 1', 'Mathe', 'Übungen'])
    const lifted = moveFolder(folders, links, 'f-uebaaaaa', { place: 'after', target: { kind: 'link', url: B } })!
    expect(lifted.find(folder => folder.id === 'f-uebaaaaa')?.parent).toBeUndefined()
  })

  it('removing a folder moves its subfolders and subjects up one level', () => {
    const next = removeFolder(folders, links, 'f-mathaaaa')
    expect(next.folders.find(folder => folder.id === 'f-uebaaaaa')?.parent).toBe('f-sem1aaaa')
    expect(next.links.filter(link => link.folder === 'f-sem1aaaa').map(link => link.name)).toEqual(['Analysis', 'Chemie'])
    const top = removeFolder(folders, links, 'f-sem2aaaa')
    expect(top.links).toEqual(links)
  })
})
