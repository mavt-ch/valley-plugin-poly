/** Small answers shaped like ETH's campus-map services (GeoJSON), with simplified outlines and invented rooms. */
const square = (lon: number, lat: number, size: number) => [[[lon, lat], [lon + size, lat], [lon + size, lat + size], [lon, lat + size], [lon, lat]]]

export const OUTLINES = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { NAME: 'HG' }, geometry: { type: 'Polygon', coordinates: square(8.5475, 47.3760, 0.0012) } },
    { type: 'Feature', properties: { NAME: ' HCI' }, geometry: { type: 'MultiPolygon', coordinates: [square(8.5070, 47.4080, 0.001), square(8.5085, 47.4080, 0.0005)] } },
    { type: 'Feature', properties: { NAME: 'BAD' }, geometry: null },
    { type: 'Feature', properties: { NAME: 'bad code!' }, geometry: { type: 'Polygon', coordinates: square(8.5, 47.4, 0.001) } },
  ],
}

const level = (id: string, name: string, order: number, height: number) => ({ type: 'Feature', geometry: null, properties: { LEVEL_ID: id, FACILITY_ID: id.split('.').slice(0, 2).join('.'), NAME: name, NAME_SHORT: name, VERTICAL_ORDER: order, HEIGHT_RELATIVE: height } })
export const LEVELS = {
  type: 'FeatureCollection',
  features: [
    level('ETH.HG.D', 'D', -1, 3.2), level('ETH.HG.F', 'F', 1, 3.5), level('ETH.HG.E', 'E', 0, 4),
    level('ETH.HCI.E', 'E', 0, 3.95),
    { type: 'Feature', geometry: null, properties: { LEVEL_ID: 'not a level', FACILITY_ID: 'ETH.X', VERTICAL_ORDER: 0 } },
  ],
}

const room = (id: string, number: string, use: string, type: string, lon: number) => ({ type: 'Feature', properties: { UNIT_ID: id, NAME: `HG E ${number}`, RaumNr: number, USE_TYPE: use, RaumTyp: type, LEVEL_ID: 'ETH.HG.E' }, geometry: { type: 'Polygon', coordinates: square(lon, 47.3762, 0.0002) } })
export const ROOMS = {
  type: 'FeatureCollection',
  features: [
    room('ETH.HG.E.E_5', '5', 'Lecture Hall', 'Hörsaal', 8.5476),
    room('ETH.HG.E.E_7', '7', 'Hallway', 'Korridor', 8.5479),
    room('ETH.HG.E.E_9', '9', "Women's Toilet", 'WC Damen', 8.5482),
    { type: 'Feature', properties: { UNIT_ID: '' }, geometry: { type: 'Polygon', coordinates: square(8.548, 47.376, 0.0001) } },
  ],
}
