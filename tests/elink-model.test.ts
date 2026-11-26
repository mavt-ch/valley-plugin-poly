import { describe, expect, it } from 'vitest'
import { ELINK_STOPS, directionOf, elinkDay, isElink, isWeekend, minutesUntil, pageEnd, parseStationboard, routeOf, stationboardUrl, upcoming } from '../src/elink/model'
import { HB_BOARD, HOENGG_PAGE_1, HOENGG_PAGE_2, SATURDAY_BOARD, ZENTRUM_BOARD } from './elink-fixtures'

const DAY = '2026-11-26'
const BOARDS = [ZENTRUM_BOARD, HOENGG_PAGE_1, HOENGG_PAGE_2, HB_BOARD]
const times = (day: ReturnType<typeof elinkDay>, id: string) => day.directions.find(row => row.id === id)!.departures.map(row => row.time)

describe('eLink model', () => {
  it('asks transport.opendata.ch for a page of buses with only the fields it reads', () => {
    const url = new URL(stationboardUrl(ELINK_STOPS.hoengg, DAY, '17:40'))
    expect(url.host).toBe('transport.opendata.ch')
    expect(url.pathname).toBe('/v1/stationboard')
    expect([url.searchParams.get('id'), url.searchParams.get('limit'), url.searchParams.get('datetime')]).toEqual(['8591122', '420', '2026-11-26 17:40'])
    expect(url.searchParams.getAll('transportations[]')).toEqual(['bus'])
    expect(url.searchParams.getAll('fields[]')).toContain('stationboard/passList/arrival')
  })

  it('keeps only line E of VBG and drops the VBZ line E at Universitätsspital', () => {
    const vbz = ZENTRUM_BOARD.stationboard.filter(row => row.number === 'E' && row.operator === 'VBZ')
    expect(vbz.length).toBeGreaterThan(0)
    expect(vbz.every(row => !isElink(row))).toBe(true)
    const departures = parseStationboard(ZENTRUM_BOARD, DAY)
    expect(departures.map(row => row.time)).toEqual(['07:45', '08:00', '08:15', '18:32'])
    expect(departures.every(row => row.direction === 'toHoengg' && row.line === 'E')).toBe(true)
    expect(departures[0].stops.map(stop => [stop.name, stop.time])).toEqual([['ETH/Universitätsspital', '07:45'], ['Haldenegg', '07:48'], ['ETH Hönggerberg', '07:59']])
    expect(isElink({ number: 'E', operator: 'VBG' })).toBe(true)
    expect(isElink({ number: 'E', operator: 'VBZ' })).toBe(false)
    expect(isElink({ number: 'E1', operator: 'VBG' })).toBe(false)
  })

  it('groups the runs by direction from where they start and end', () => {
    expect(directionOf(ELINK_STOPS.zentrum, ELINK_STOPS.hoengg)).toBe('toHoengg')
    expect(directionOf(ELINK_STOPS.hb, ELINK_STOPS.hoengg)).toBe('fromHb')
    expect(directionOf(ELINK_STOPS.hoengg, ELINK_STOPS.zentrum)).toBe('toZentrum')
    expect(directionOf(ELINK_STOPS.hoengg, ELINK_STOPS.hb)).toBe('toHb')
    expect(directionOf(ELINK_STOPS.hoengg, ELINK_STOPS.hbQuai)).toBe('toHb')
    expect(directionOf(ELINK_STOPS.hoengg, ELINK_STOPS.haldenegg)).toBeNull()
    const day = elinkDay(DAY, BOARDS)
    expect(times(day, 'toHoengg')).toEqual(['07:45', '08:00', '08:15', '18:32'])
    expect(times(day, 'toZentrum')).toEqual(['07:06', '07:29', '07:44', '17:59'])
    expect(times(day, 'fromHb')).toEqual(['07:06', '07:21', '07:36'])
    expect(times(day, 'toHb')).toEqual(['18:14', '18:29', '18:44', '18:59'])
    const toHb = day.directions.find(row => row.id === 'toHb')!.departures
    expect(toHb.map(row => row.stops.at(-1)!.name)).toEqual(['Bahnhofplatz/HB', 'Bahnhofquai/HB', 'Bahnhofquai/HB', 'Bahnhofquai/HB'])
    expect(routeOf(day.directions.find(row => row.id === 'fromHb')!.departures)).toEqual(['Bahnhofplatz/HB', 'Haldenegg', 'ETH Hönggerberg'])
  })

  it('reads every page once: other buses, repeats at the page seam and the next day are dropped', () => {
    expect(pageEnd(HOENGG_PAGE_1).last).toEqual({ date: DAY, time: '17:40' })
    expect(pageEnd(HOENGG_PAGE_2).last?.date).toBe('2026-11-27')
    const day = elinkDay(DAY, [HOENGG_PAGE_1, HOENGG_PAGE_2, HOENGG_PAGE_2])
    expect(day.directions.flatMap(row => row.departures)).toHaveLength(8)
  })

  it('knows the weekend and finds no eLink on it', () => {
    expect(isWeekend('2026-11-28')).toBe(true)
    expect(isWeekend('2026-11-29')).toBe(true)
    expect(isWeekend('2026-11-30')).toBe(false)
    expect(elinkDay('2026-11-28', [SATURDAY_BOARD]).directions.every(row => row.departures.length === 0)).toBe(true)
  })

  it('reads a delay only where transport.opendata.ch reports one', () => {
    const live = structuredClone(ZENTRUM_BOARD) as { stationboard: { operator: string; stop: { delay: unknown } }[] }
    live.stationboard.filter(row => row.operator === 'VBG')[0].stop.delay = 3
    const departures = parseStationboard(live, DAY)
    expect(departures.map(row => row.delay)).toEqual([3, null, null, null])
    expect(minutesUntil(DAY, departures[0], new Date(2026, 10, 26, 7, 40))).toBe(8)
    expect(upcoming(DAY, departures, new Date(2026, 10, 26, 8, 1)).map(row => row.time)).toEqual(['08:15', '18:32'])
  })
})
