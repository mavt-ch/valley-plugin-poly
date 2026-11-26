// Regenerates src/campus/buildings.json, the finder's building list: ETH's building list (CSV: code, name_long,
// street, zip, city, canton, link), cleaned, grouped by campus after ETH's site plans, each with the centre of
// its outline from ETH's public Facilities service (used for 3D fly-to without a network round trip).
//   node tooling/buildings.mjs <eth_buildings.csv>
import fs from 'node:fs/promises'
import path from 'node:path'

const FACILITIES = 'https://arcgis-prd-web.ethz.ch/server/rest/services/EGDB_EN/Facilities_EN/FeatureServer/5/query'
const ZENTRUM = 'AMA CAB CHN CLA CLD CLE CLF CLG CLI CLT CLX CNB ETA ETF ETL ETZ FHK GEP GLC HAA HAC HAD HAW HCA HCB HG HRG IFW LEE LEH LEO LFG LFH LFO LFV LFW ML MM NEL NO NW PLB RZ SEC SOH SOI SOK SOL SON SOP SOQ SOR SOX STB STC STD STE STS STW TAN UNG UNH UNO VOG WEC WEH WES WEV WPW WWA ZUE'.split(' ')
const HOENGGERBERG = 'HCI HCP HDB HEZ HGP HIA HIB HIF HIL HIN HIT HKK HPF HPH HPI HPK HPL HPM HPP HPQ HPR HPS HPT HPV HPW HPY HPZ HRZ HWA HWB HWC HWW HXE HZA HZB HZC HZD'.split(' ')
const LINK = 'https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0='

/** RFC 4180 rows: a quoted field may hold commas and doubled quotes. Every value is trimmed (some streets start with a space). */
function parseCsv(text) {
  const rows = [[]]
  let field = '', quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) { if (c === '"' && text[i + 1] === '"') { field += '"'; i++ } else if (c === '"') quoted = false; else field += c; continue }
    if (c === '"') quoted = true
    else if (c === ',') { rows.at(-1).push(field); field = '' }
    else if (c === '\n') { rows.at(-1).push(field); field = ''; rows.push([]) }
    else if (c !== '\r' && c !== '﻿') field += c
  }
  if (field || rows.at(-1).length) rows.at(-1).push(field)
  const [keys, ...lines] = rows.filter(row => row.some(Boolean))
  return lines.map(line => Object.fromEntries(keys.map((key, i) => [key, (line[i] ?? '').trim()])))
}
/** Slips in the source list: misspelt cities and LUI's street split by a stray comma. */
const CITY = { Zuerich: 'Zürich', 'Zürch': 'Zürich' }
const STREET = { 'Via Giuseppe, Buffi 13': 'Via Giuseppe Buffi 13' }

/** Area-weighted centre of a polygon's outer rings (WGS84, small enough to treat as planar). */
function centre(geometry) {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates
  let area = 0, x = 0, y = 0
  for (const [ring] of polygons) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const cross = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1]
      area += cross; x += (ring[j][0] + ring[i][0]) * cross; y += (ring[j][1] + ring[i][1]) * cross
    }
  }
  return [Math.round(x / (3 * area) * 1e6) / 1e6, Math.round(y / (3 * area) * 1e6) / 1e6]
}

const csv = process.argv[2]
if (!csv) throw new Error('usage: node tooling/buildings.mjs <eth_buildings.csv>')
const rows = parseCsv(await fs.readFile(csv, 'utf8'))
const response = await fetch(`${FACILITIES}?${new URLSearchParams({ where: '1=1', outFields: 'NAME', geometryPrecision: '7', f: 'geojson' })}`)
if (!response.ok) throw new Error(`Facilities service answered ${response.status}`)
const outlines = new Map((await response.json()).features.map(feature => [feature.properties.NAME.trim(), feature.geometry]))
const buildings = rows.map(row => {
  const geometry = outlines.get(row.code)
  if (!geometry) throw new Error(`No outline for ${row.code}`)
  return {
    code: row.code,
    street: STREET[row.street] ?? row.street,
    zip: row.zip,
    city: CITY[row.city] ?? row.city,
    canton: row.canton,
    // The source list points CLG at BHA's page; every building's page is its own code.
    link: `${LINK}${encodeURIComponent(row.code)}`,
    campus: ZENTRUM.includes(row.code) ? 'zentrum' : HOENGGERBERG.includes(row.code) ? 'hoengg' : 'other',
    center: centre(geometry),
  }
}).sort((a, b) => a.code.localeCompare(b.code))
const out = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'src', 'campus', 'buildings.json')
await fs.writeFile(out, `${JSON.stringify(buildings, null, 0).replaceAll('},{', '},\n{')}\n`)
console.log(`${buildings.length} buildings → ${out}`)
