import { describe, expect, it } from 'vitest'
import { BUILDINGS, addressOf, buildingOf, fold, groupBuildings, searchBuildings } from '../src/campus/data'
import { boundsOf, exceeded, floorElevations, insidePolygon, parseLevels, parseOutlines, parseRoomQuery, parseRooms, roomKind, roomLabel, roomWhere } from '../src/campus/services'
import { LEVELS, OUTLINES, ROOMS } from './campus-fixtures'

describe('building list', () => {
  it('holds ETH\'s 225 buildings, cleaned and grouped after ETH\'s site plans', () => {
    expect(BUILDINGS).toHaveLength(225)
    expect(BUILDINGS.every(building => building.street === building.street.trim() && building.link.endsWith(`args0=${building.code}`))).toBe(true)
    expect(buildingOf('CLG')?.link).toBe('https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLG')
    expect(buildingOf('AUA')?.street).toBe('Austrasse 54')
    expect(buildingOf('LUI')).toMatchObject({ street: 'Via Giuseppe Buffi 13', zip: '6900', city: 'Lugano', canton: 'TI' })
    expect(BUILDINGS.some(building => building.city === 'Zuerich' || building.city === 'Zürch')).toBe(false)
    expect(groupBuildings(BUILDINGS).map(({ group, buildings }) => [group, buildings.length])).toEqual([['zentrum', 68], ['hoengg', 35], ['other', 122]])
    expect(buildingOf('HG')?.campus).toBe('zentrum')
    expect(buildingOf('HCI')?.campus).toBe('hoengg')
    expect(buildingOf('AGS')?.campus).toBe('other')
    expect(buildingOf('nope')).toBeNull()
    expect(addressOf(buildingOf('HG')!)).toBe('Rämistrasse 101, 8092 Zürich')
  })

  it('searches codes first, then addresses, ignoring case and umlauts', () => {
    expect(searchBuildings('hg')[0].code).toBe('HG')
    expect(searchBuildings('HP').slice(0, 3).every(building => building.code.startsWith('HP'))).toBe(true)
    expect(searchBuildings('ramistrasse').map(building => building.code)).toContain('HG')
    expect(searchBuildings('Rämistrasse 101').map(building => building.code)).toEqual(['HG'])
    expect(searchBuildings('hoenggerbergring').length).toBeGreaterThan(3)
    expect(searchBuildings('Lugano').every(building => building.city === 'Lugano')).toBe(true)
    expect(searchBuildings('8093 HPV').map(building => building.code)).toEqual(['HPV'])
    expect(searchBuildings('')).toBe(BUILDINGS)
    expect(searchBuildings('no such place')).toEqual([])
    expect(fold('Hönggerberg')).toBe(fold('Hoenggerberg'))
  })
})

describe('campus services', () => {
  it('reads outlines, skipping features without a usable code or geometry', () => {
    const outlines = parseOutlines(OUTLINES)
    expect(outlines.map(outline => [outline.code, outline.polygons.length])).toEqual([['HG', 1], ['HCI', 2]])
    expect(boundsOf(outlines[0].polygons)).toEqual([8.5475, 47.376, 8.5475 + 0.0012, 47.376 + 0.0012])
    expect(() => parseOutlines({ error: { code: 400 } })).toThrow('formatError')
  })

  it('reads floors top first and stacks their slabs from the ground floor', () => {
    const levels = parseLevels(LEVELS)
    expect(levels.map(level => level.id)).toEqual(['ETH.HCI.E', 'ETH.HG.F', 'ETH.HG.E', 'ETH.HG.D'])
    const hg = levels.filter(level => level.code === 'HG')
    expect(Object.fromEntries(floorElevations(hg))).toEqual({ 'ETH.HG.E': 0, 'ETH.HG.F': 4, 'ETH.HG.D': -3.2 })
  })

  it('reads a floor\'s rooms with their kind', () => {
    const rooms = parseRooms(ROOMS)
    expect(rooms.map(room => [room.number, room.type, room.kind])).toEqual([['5', 'Hörsaal', 'teaching'], ['7', 'Korridor', 'circulation'], ['9', 'WC Damen', 'toilet']])
    expect(roomKind('Laboratory')).toBe('lab')
    expect(roomKind('Office')).toBe('office')
    expect(roomKind('Service Room')).toBe('service')
    expect(roomKind('Mensa')).toBe('other')
  })

  it('reads room searches: numbers, floors and room types, never anything else into the SQL', () => {
    expect(parseRoomQuery('HG F7')).toEqual({ building: 'HG', floor: 'F', number: '7' })
    expect(parseRoomQuery('hg f 7.1')).toEqual({ building: 'HG', floor: 'F', number: '7.1' })
    expect(parseRoomQuery('F7', 'CAB')).toEqual({ building: 'CAB', floor: 'F', number: '7' })
    expect(parseRoomQuery('HG F')).toEqual({ building: 'HG', floor: 'F', number: '' })
    expect(parseRoomQuery('HG Hörsaal')).toEqual({ building: 'HG', words: ['HÖRSAAL'] })
    expect(parseRoomQuery('HG')).toBeNull()
    expect(parseRoomQuery('F', 'CAB')).toBeNull()
    expect(parseRoomQuery('Rämistrasse 101')).toBeNull()
    expect(parseRoomQuery("HG F7' OR 1=1 --")).toBeNull()
    expect(roomWhere({ building: 'HG', floor: 'F', number: '7' })).toBe("NAME LIKE 'HG F 7%'")
    expect(roomWhere({ building: 'HG', words: ['HÖRSAAL'] })).toBe("NAME LIKE 'HG %' AND (UPPER(USE_TYPE) LIKE '%HOERSAAL%' OR UPPER(RaumTyp) LIKE '%HOERSAAL%')")
    expect(roomWhere({ building: "HG'", floor: 'F', number: '7' })).toBeNull()
    expect(roomWhere({ building: 'HG', floor: 'F', number: "7' OR '1'='1" })).toBeNull()
    expect(roomWhere({ building: 'HG', words: ["X' OR 1=1"] })).toBeNull()
    expect(roomLabel('HG F 7', 'HG')).toBe('F 7')
    expect(roomLabel('HCI E 8', 'HG')).toBe('HCI E 8')
  })

  it('knows when a query has more pages', () => {
    expect(exceeded({ exceededTransferLimit: true })).toBe(true)
    expect(exceeded({ properties: { exceededTransferLimit: true } })).toBe(true)
    expect(exceeded({ type: 'FeatureCollection', features: [] })).toBe(false)
  })

  it('tests points against polygons with holes', () => {
    const polygon: [number, number][][] = [[[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]], [[4, 4], [6, 4], [6, 6], [4, 6], [4, 4]]]
    expect(insidePolygon([2, 2], polygon)).toBe(true)
    expect(insidePolygon([5, 5], polygon)).toBe(false)
    expect(insidePolygon([12, 5], polygon)).toBe(false)
  })
})
