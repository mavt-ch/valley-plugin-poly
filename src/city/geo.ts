// WGS84 → LV95 (EPSG:2056), swisstopo's approximate formulas (about 1 m accuracy).
export function wgs84ToLv95(latitude: number, longitude: number): [number, number] {
  const phi = (latitude * 3600 - 169028.66) / 10000
  const lambda = (longitude * 3600 - 26782.5) / 10000
  const east = 2600072.37 + 211455.93 * lambda - 10938.51 * lambda * phi - 0.36 * lambda * phi * phi - 44.54 * lambda ** 3
  const north = 1200147.07 + 308807.95 * phi + 3745.25 * lambda * lambda + 76.63 * phi * phi - 194.56 * lambda * lambda * phi + 119.79 * phi ** 3
  return [east, north]
}

export interface Place {
  id: string
  name: string
  latitude: number
  longitude: number
  /** Viewing distance in metres. */
  distance: number
}

// Proper names stay as they are in every language.
export const PLACES: Place[] = [
  { id: 'hb', name: 'Zürich HB', latitude: 47.37818, longitude: 8.54019, distance: 900 },
  { id: 'lindenhof', name: 'Lindenhof', latitude: 47.37292, longitude: 8.54083, distance: 600 },
  { id: 'grossmuenster', name: 'Grossmünster', latitude: 47.3701, longitude: 8.54405, distance: 450 },
  { id: 'fraumuenster', name: 'Fraumünster', latitude: 47.36985, longitude: 8.54107, distance: 450 },
  { id: 'bellevue', name: 'Bellevue / Opernhaus', latitude: 47.36532, longitude: 8.54683, distance: 700 },
  { id: 'eth', name: 'ETH Zentrum', latitude: 47.37635, longitude: 8.54786, distance: 650 },
  { id: 'uzh', name: 'Universität Zürich', latitude: 47.3745, longitude: 8.54855, distance: 650 },
  { id: 'kunsthaus', name: 'Kunsthaus', latitude: 47.37017, longitude: 8.54817, distance: 500 },
  { id: 'prime', name: 'Prime Tower', latitude: 47.3861, longitude: 8.51713, distance: 800 },
  { id: 'letzigrund', name: 'Letzigrund', latitude: 47.38277, longitude: 8.5041, distance: 800 },
  { id: 'hoengg', name: 'ETH Hönggerberg', latitude: 47.40828, longitude: 8.5076, distance: 900 },
  { id: 'oerlikon', name: 'Bahnhof Oerlikon', latitude: 47.4118, longitude: 8.54396, distance: 800 },
  { id: 'hallenstadion', name: 'Hallenstadion', latitude: 47.41162, longitude: 8.55194, distance: 800 },
  { id: 'altstetten', name: 'Bahnhof Altstetten', latitude: 47.3913, longitude: 8.489, distance: 800 },
  { id: 'zuerichhorn', name: 'Zürichhorn', latitude: 47.3546, longitude: 8.5522, distance: 900 },
]
