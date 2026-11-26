/**
 * The menu plan model shared by the backend and the panel, the date helpers, and the two parsers:
 * ETH Zurich's Cookpit service (JSON) and food2050, which serves the UZH outlets of the ZFV
 * (server-rendered pages whose embedded payload holds the dishes).
 */

export type Source = 'eth' | 'uzh'
/** The menu plan's campus tags: ETH Zentrum, ETH Hönggerberg and the UZH outlets. */
export type Campus = 'eth' | 'hoengg' | 'uzh'
export const CAMPUSES: Campus[] = ['eth', 'hoengg', 'uzh']
export type Service = 'lunch' | 'dinner'
export type PriceGroup = 'students' | 'internal' | 'external'
export type Climate = 'LOW' | 'MEDIUM' | 'HIGH'

/** Who a price is for: one of the three groups, staff and students together, or every visitor. */
export type PriceKind = PriceGroup | 'internalStudents' | 'all'
export type Price = { group: PriceKind; price: number }
const PRICE_ORDER: PriceKind[] = ['students', 'internalStudents', 'internal', 'external', 'all']
/** A dish's prices from students to guests, the order the card shows them in ("CHF 7.90 / 10.90 / 13.90"). */
export const pricesInOrder = (prices: Price[]) => [...prices].sort((a, b) => PRICE_ORDER.indexOf(a.group) - PRICE_ORDER.indexOf(b.group))
const COVERS: Record<PriceKind, PriceGroup[]> = { students: ['students'], internal: ['internal'], external: ['external'], internalStudents: ['internal', 'students'], all: ['students', 'internal', 'external'] }
/** The price a group pays: its own price, else a shared price that covers it ("All visitors", "Staff & students"). */
export const priceFor = (prices: Price[], group: PriceGroup): Price | undefined =>
  prices.find(row => row.group === group) ?? prices.find(row => COVERS[row.group].includes(group))
export type Dish = {
  id: string
  line: string
  name: string
  description: string
  diet: 'vegan' | 'vegetarian' | null
  classes: string[]
  prices: Price[]
  allergens: string[]
  climate: Climate | null
  /** True when a declared allergen is a gluten cereal, false when allergens are declared without one, null when none are declared. */
  gluten: boolean | null
  /** The same for milk and lactose. */
  lactose: boolean | null
  /** The dish picture's address at its source ('' when it has none). */
  image: string
  /** food2050's page of this dish, which holds its picture and prices ('' for ETH). */
  detail: string
}
export type DishDetail = { image: string; prices: Price[] }
export type ServiceMenu = { service: Service; from: string; to: string; dishes: Dish[] }
export type Hours = { from: string; to: string }
/** `hours` are the place's opening hours that day, when its source publishes them (ETH only). */
export type DayMenu = { date: string; hours: Hours[]; services: ServiceMenu[] }
/** `place` is the building and floor (ETH) or the street address (UZH); `area` the UZH campus. */
export type Location = { id: string; source: Source; campus: Campus; name: string; place: string; area: string; url: string; days: DayMenu[] }
export type Outlet = { path: string; name: string; campus: string }

export const ETH_HOST = 'idapps.ethz.ch'
export const ETH_BASE = `https://${ETH_HOST}/cookpit-pub-services/v1`
/** The client id ETH's own gastronomy page sends with every Cookpit request. */
export const ETH_CLIENT = 'ethz-wcms'
export const UZH_HOST = 'app.food2050.ch'
export const UZH_ORGANISATION = 'universitat-zurich'
/** Postcodes ETH's gastronomy page files under Hönggerberg (its own location rule). */
export const HOENGGERBERG_POSTCODES = ['8093', '8049', '8053']
/** ETH's Oerlikon postcode; Basel is every 4xxx postcode. Everything else is Zentrum. */
export const OERLIKON_POSTCODES = ['8050']

const DATE = /^\d{4}-\d{2}-\d{2}$/
export const isDate = (value: unknown): value is string => typeof value === 'string' && DATE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
const utc = (date: string) => new Date(`${date}T00:00:00Z`)
const iso = (date: Date) => date.toISOString().slice(0, 10)
export const addDays = (date: string, days: number) => { const next = utc(date); next.setUTCDate(next.getUTCDate() + days); return iso(next) }
/** 1 = Monday … 7 = Sunday. */
export const weekday = (date: string) => utc(date).getUTCDay() || 7
export const mondayOf = (date: string) => addDays(date, 1 - weekday(date))
export function isoWeek(date: string): { week: number; year: number } {
  const thursday = utc(addDays(date, 4 - weekday(date)))
  const year = thursday.getUTCFullYear()
  const first = Date.UTC(year, 0, 1)
  return { week: Math.floor((thursday.getTime() - first) / 86_400_000 / 7) + 1, year }
}
/** Today's date where the app runs, as YYYY-MM-DD. */
export function today(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}
/** Lunch until half past two, dinner after. */
export const defaultService = (now = new Date()): Service => now.getHours() * 60 + now.getMinutes() >= 14 * 60 + 30 ? 'dinner' : 'lunch'
export const sourceLanguage = (language: string): 'de' | 'en' => language.toLowerCase().startsWith('de') ? 'de' : 'en'

const record = (value: unknown): Record<string, unknown> => value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
const list = (value: unknown): unknown[] => Array.isArray(value) ? value : []
/** Cookpit fills missing English texts with the word "novalue". */
const text = (value: unknown): string => typeof value === 'string' && value.trim() !== 'novalue' ? value.replace(/​/g, '').trim() : ''
const time = (value: unknown): string => typeof value === 'string' && /^\d{2}:\d{2}$/.test(value) ? value : ''
/** A meal time starting at three or later is dinner, whatever the outlet calls it. */
const serviceAt = (from: string): Service => from && from >= '15:00' ? 'dinner' : 'lunch'
/** Cookpit's customer groups: 10 students, 11 internal, 12 internal & students, 13 external, 14 all visitors. */
const GROUPS: Record<number, PriceKind> = { 10: 'students', 11: 'internal', 12: 'internalStudents', 13: 'external', 14: 'all' }
/** Cookpit's allergen code for gluten ("gluten wheat"). */
const ETH_GLUTEN_CODE = 10
/** food2050's allergen ids of the gluten cereals. */
export const UZH_GLUTEN_IDS = ['cerealsContainingGluten', 'wheat', 'barley', 'rye', 'spelt', 'oat', 'oats', 'kamut']
/** Cookpit's allergen code for milk ("milk, lactose") and food2050's milk ids. */
const ETH_MILK_CODE = 16
export const UZH_MILK_IDS = ['milk', 'lactose']

// ── ETH (Cookpit) ────────────────────────────────────────────────────────────

export type EthFacility = { id: number; name: string; place: string; url: string; postcode: string }

export function parseEthFacilities(body: unknown): EthFacility[] {
  return list(record(body)['facility-array']).map(record).flatMap(row => {
    const id = row['facility-id'], name = text(row['facility-name'])
    if (typeof id !== 'number' || !name) return []
    const place = [text(row.building), text(row.floor), text(row['room-nr'])].filter(Boolean).join(' ')
    const postcode = text(row['address-line-3']).match(/\b\d{4}\b/)?.[0] ?? ''
    return [{ id, name, place, url: text(row['facility-url']), postcode }]
  })
}

export type EthZone = 'zentrum' | 'hoenggerberg' | 'oerlikon' | 'basel'
/** ETH's own location rule by postcode: Hönggerberg, Oerlikon and Basel by their postcodes, Zentrum for the rest. */
export function ethZone(facility: EthFacility): EthZone {
  if (HOENGGERBERG_POSTCODES.includes(facility.postcode)) return 'hoenggerberg'
  if (OERLIKON_POSTCODES.includes(facility.postcode)) return 'oerlikon'
  if (/^4\d{3}$/.test(facility.postcode)) return 'basel'
  return 'zentrum'
}
/** The campus tag of an ETH facility: Zentrum is "ETH", Hönggerberg "Höngg"; Oerlikon and Basel have none. */
export function ethCampus(facility: EthFacility): Campus | null {
  const zone = ethZone(facility)
  return zone === 'zentrum' ? 'eth' : zone === 'hoenggerberg' ? 'hoengg' : null
}

/** Cookpit pictures are served with the same client id as the menus. */
export function ethImage(url: unknown): string {
  const match = /^https:\/\/idapps\.ethz\.ch\/cookpit-pub-services\/v1\/images\/(\d+)$/.exec(text(url))
  return match ? `${ETH_BASE}/images/${match[1]}?client-id=${ETH_CLIENT}` : ''
}

/** Only pictures of the two menu services are fetched. */
export function isImageUrl(value: unknown): value is string {
  return typeof value === 'string' && (
    new RegExp(`^${ETH_BASE.replace(/[.]/g, '\\.')}/images/\\d+\\?client-id=${ETH_CLIENT}$`).test(value) ||
    /^https:\/\/storage\.googleapis\.com\/dish-images-prod\/[A-Za-z0-9%._~-]+$/.test(value))
}

/** A food2050 dish page of a UZH outlet. */
export const isDishUrl = (value: unknown): value is string =>
  typeof value === 'string' && value.length < 400 && /^https:\/\/app\.food2050\.ch\/(de|en)\/zfv\/universitat-zurich[a-z0-9,-]*\/[a-z0-9-]+\/[a-z0-9,-]+\/\d{4}-\d{2}-\d{2}$/.test(value)

function ethDish(line: Record<string, unknown>, fallback: Map<number, Record<string, unknown>>): Dish | null {
  const meal = record(line.meal)
  const id = typeof meal['line-id'] === 'number' ? meal['line-id'] : null
  const other = id === null ? {} : fallback.get(id) ?? {}
  const name = text(meal.name) || text(other.name)
  const description = text(meal.description) || text(other.description)
  if (!name && !description) return null
  const codes = list(meal['meal-class-array']).map(record)
  const diet = codes.some(row => row.code === 16) ? 'vegan' : codes.some(row => row.code === 17) ? 'vegetarian' : null
  const allergens = list(meal['allergen-array']).map(record)
  return {
    id: `eth:${id ?? name}`,
    line: text(line.name),
    name: name || description,
    description: name ? description.replace(/\s*\|\s*/g, ' · ').replace(/\s+/g, ' ').trim() : '',
    diet,
    classes: codes.filter(row => row.code !== 16 && row.code !== 17).map(row => text(row.desc)).filter(Boolean),
    prices: list(meal['meal-price-array']).map(record).flatMap(row => {
      const group = GROUPS[row['customer-group-code'] as number]
      return group && typeof row.price === 'number' ? [{ group, price: row.price }] : []
    }),
    allergens: allergens.map(row => text(row.desc)).filter(Boolean),
    climate: null,
    gluten: allergens.length ? allergens.some(row => row.code === ETH_GLUTEN_CODE || /gluten/i.test(text(row.desc))) : null,
    lactose: allergens.length ? allergens.some(row => row.code === ETH_MILK_CODE || /milk|lactose|milch|laktose/i.test(text(row.desc))) : null,
    image: ethImage(meal['image-url']),
    detail: ''
  }
}

/** Every meal of a Cookpit rota answer by line id, to fill texts missing in another language. */
export function ethMealsById(body: unknown): Map<number, Record<string, unknown>> {
  const meals = new Map<number, Record<string, unknown>>()
  for (const rota of list(record(body)['weekly-rota-array']).map(record))
    for (const day of list(rota['day-of-week-array']).map(record))
      for (const hours of list(day['opening-hour-array']).map(record))
        for (const mealTime of list(hours['meal-time-array']).map(record))
          for (const line of list(mealTime['line-array']).map(record)) {
            const meal = record(line.meal)
            if (typeof meal['line-id'] === 'number') meals.set(meal['line-id'], meal)
          }
  return meals
}

/** True when an answer left a dish name to Cookpit's "novalue" placeholder. */
export const ethHasGaps = (body: unknown) => JSON.stringify(body ?? null).includes('"novalue"')

/** The week starting `monday` for the given facilities (Zentrum and Hönggerberg), one entry per facility in their order. */
export function parseEthWeek(body: unknown, facilities: EthFacility[], monday: string, fallback = new Map<number, Record<string, unknown>>()): Location[] {
  const rotas = list(record(body)['weekly-rota-array']).map(record)
  return facilities.map(facility => {
    const own = rotas.filter(rota => rota['facility-id'] === facility.id)
    const days: DayMenu[] = []
    for (let offset = 0; offset < 7; offset++) {
      const date = addDays(monday, offset)
      const rota = own.find(row => text(row['valid-from']) <= date && date <= text(row['valid-to']))
      const day = rota ? list(rota['day-of-week-array']).map(record).find(row => row['day-of-week-code'] === offset + 1) : undefined
      const services: ServiceMenu[] = []
      const opening: Hours[] = []
      for (const hours of list(day?.['opening-hour-array']).map(record)) {
        const from = time(hours['time-from']), to = time(hours['time-to'])
        if (from && to) opening.push({ from, to })
        for (const mealTime of list(hours['meal-time-array']).map(record)) {
          const from = time(mealTime['time-from']), to = time(mealTime['time-to'])
          const dishes = list(mealTime['line-array']).map(record).map(line => ethDish(line, fallback)).filter((dish): dish is Dish => dish !== null)
          if (!dishes.length) continue
          const service = serviceAt(from)
          const same = services.find(row => row.service === service)
          if (same) same.dishes.push(...dishes)
          else services.push({ service, from, to, dishes })
        }
      }
      days.push({ date, hours: opening, services })
    }
    return { id: `eth:${facility.id}`, source: 'eth' as const, campus: ethCampus(facility) ?? 'eth', name: facility.name, place: facility.place, area: '', url: facility.url, days }
  })
}

// ── UZH (food2050) ───────────────────────────────────────────────────────────

/** The streamed page payload a food2050 page embeds in its scripts, joined in order. */
export function flightPayload(html: string): string {
  let payload = ''
  for (const match of html.matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)) {
    try { payload += JSON.parse(`"${match[1]}"`) as string } catch { /* a chunk that is not a plain string */ }
  }
  return payload
}

/** The JSON object that starts at `start` (a `{`), found by matching its braces outside strings. */
function objectAt(payload: string, start: number): string | null {
  let depth = 0, inString = false
  for (let index = start; index < payload.length; index++) {
    const character = payload[index]
    if (inString) {
      if (character === '\\') index++
      else if (character === '"') inString = false
    } else if (character === '"') inString = true
    else if (character === '{' || character === '[') depth++
    else if (character === '}' || character === ']') { depth--; if (depth === 0) return payload.slice(start, index + 1) }
  }
  return null
}

/**
 * The component properties that begin with `{"<key>":`, with the payload's references to its own
 * earlier values (`"$14:props:outlet:…"`) resolved and `"$undefined"` dropped.
 */
export function payloadProps(payload: string, key: string): Record<string, unknown> | null {
  const start = payload.indexOf(`{"${key}":`)
  if (start < 0) return null
  const source = objectAt(payload, start)
  if (!source) return null
  let root: unknown
  try { root = JSON.parse(source) } catch { return null }
  const resolve = (value: unknown, depth: number): unknown => {
    if (typeof value !== 'string' || !value.startsWith('$')) return value
    if (value === '$undefined') return undefined
    if (value.startsWith('$$')) return value.slice(1)
    const match = /^\$[0-9a-f]+:props:(.+)$/.exec(value)
    if (!match || depth > 20) return undefined
    let current: unknown = root
    for (const step of match[1].split(':')) {
      current = Array.isArray(current) ? current[Number(step)] : record(current)[step]
      current = resolve(current, depth + 1)
      if (current === undefined) return undefined
    }
    return current
  }
  const walk = (value: unknown, depth: number): unknown => {
    const resolved = resolve(value, 0)
    if (depth > 60) return resolved
    if (Array.isArray(resolved)) return resolved.map(item => walk(item, depth + 1))
    if (resolved && typeof resolved === 'object') return Object.fromEntries(Object.entries(resolved).map(([name, item]) => [name, walk(item, depth + 1)]))
    return resolved
  }
  return record(walk(root, 0))
}

/** `universitat-zurich,campus-irchel/mensa` from a food2050 detail address. */
export function outletPath(url: unknown): string {
  const match = /\/zfv\/([a-z0-9,-]+\/[a-z0-9-]+)(?:[/?#]|$)/.exec(text(url))
  return match ? match[1] : ''
}
export const isOutletPath = (value: unknown): value is string => typeof value === 'string' && /^universitat-zurich(,[a-z0-9-]+)*\/[a-z0-9-]+$/.test(value)
export const uzhUrl = (language: string, path: string) => `https://${UZH_HOST}/${language}/zfv/${path}`

/** The UZH outlets of the organisation page, each with the campus it belongs to. */
export function parseUzhOutlets(html: string): Outlet[] {
  const organisation = record(payloadProps(flightPayload(html), 'organisation')?.organisation)
  const campuses = new Map<string, string>()
  const visit = (row: Record<string, unknown>) => {
    const match = /\/zfv\/([a-z0-9,-]+)$/.exec(text(row.detailUrl))
    if (match && text(row.name)) campuses.set(match[1], text(row.name))
    for (const child of list(row.organisationChildren)) visit(record(child))
  }
  for (const child of list(organisation.organisationChildren)) visit(record(child))
  const seen = new Set<string>()
  return list(organisation.outlets).map(record).flatMap(row => {
    const path = outletPath(row.detailUrl), name = text(row.name)
    if (!isOutletPath(path) || !name || seen.has(path)) return []
    seen.add(path)
    const campus = path.slice(0, path.indexOf('/'))
    return [{ path, name, campus: campuses.get(campus) ?? '' }]
  })
}

export type UzhCategory = { slug: string; service: Service }
export type UzhOutletPage = { name: string; place: string; categories: UzhCategory[] }

export function parseUzhOutlet(html: string): UzhOutletPage | null {
  const outlet = record(payloadProps(flightPayload(html), 'outlet')?.outlet)
  if (!text(outlet.name)) return null
  const address = record(record(outlet.location).address)
  const categories = list(outlet.menuCategories).map(record).flatMap(row => {
    const slug = /\/([a-z0-9-]+)\/?$/.exec(text(row.detailUrl))?.[1] ?? ''
    if (!slug) return []
    const service: Service = /abend|dinner|evening/i.test(`${text(row.name)} ${slug}`) ? 'dinner' : 'lunch'
    return [{ slug, service }]
  })
  return { name: text(outlet.name), place: text(address.addressLine1), categories }
}

/** The dishes of one menu category's weekly page, by date. */
export function parseUzhWeek(html: string): Map<string, Dish[]> {
  const outlet = record(payloadProps(flightPayload(html), 'outlet')?.outlet)
  const week = record(record(record(outlet.menuCategory).calendar).week)
  const days = new Map<string, Dish[]>()
  for (const day of list(week.daily).map(record)) {
    const date = text(record(day.from).dateLocal).slice(0, 10)
    if (!isDate(date)) continue
    const dishes = list(day.menuItems).map(record).flatMap((item): Dish[] => {
      const dish = record(item.dish)
      const name = text(dish.name)
      if (!name) return []
      const rating = text(record(record(dish.stats).food2050climateImpact).rating)
      const climate: Climate | null = rating === 'LOW' || rating === 'MEDIUM' || rating === 'HIGH' ? rating : null
      const allergens = list(dish.allergens).map(row => text(record(record(row).allergen).externalId)).filter(Boolean)
      return [{
        id: `uzh:${text(item.id) || text(dish.id) || name}`,
        line: text(record(item.category).name),
        name,
        description: text(dish.description),
        diet: dish.isVegan === true ? 'vegan' as const : dish.isVegetarian === true ? 'vegetarian' as const : null,
        classes: [],
        prices: [],
        allergens,
        climate,
        gluten: allergens.length ? allergens.some(id => UZH_GLUTEN_IDS.includes(id)) : null,
        lactose: allergens.length ? allergens.some(id => UZH_MILK_IDS.includes(id)) : null,
        image: '',
        detail: isDishUrl(text(item.detailUrl)) ? text(item.detailUrl) : ''
      }]
    })
    days.set(date, [...(days.get(date) ?? []), ...dishes])
  }
  return days
}

/** A price category's name in German or English as the group it is for; a shared price ("Alle Besucher") is for everyone. */
export function priceGroupOf(name: string): PriceKind | null {
  if (/^(alle|all|everyone|einheitspreis)\b|alle besucher|all visitors/i.test(name.trim())) return 'all'
  if (/stud/i.test(name) && /mitarbeit|angestellt|personal|staff|employee|intern/i.test(name)) return 'internalStudents'
  if (/stud/i.test(name)) return 'students'
  if (/mitarbeit|angestellt|personal|staff|employee|intern/i.test(name)) return 'internal'
  if (/extern|gäst|gast|guest|visitor|public/i.test(name)) return 'external'
  return null
}

/** A food2050 dish page: its picture and its prices. */
export function parseUzhDish(html: string): DishDetail | null {
  const props = payloadProps(flightPayload(html), 'menuItem')
  if (!props) return null
  const item = record(props.menuItem)
  const image = text(record(item.dish).imageUrl)
  const prices = list(item.prices).map(record).flatMap(row => {
    const group = priceGroupOf(text(record(row.priceCategory).name)), amount = Number(text(row.amount))
    return group && Number.isFinite(amount) && amount > 0 ? [{ group, price: amount }] : []
  })
  return { image: isImageUrl(image) ? image : '', prices }
}

/** The allergen names food2050 ships with its page, in the page's language. */
export function parseUzhAllergenNames(html: string): Record<string, string> {
  const payload = flightPayload(html)
  const start = payload.indexOf('"allergens":{"allergyInformation"')
  if (start < 0) return {}
  const source = objectAt(payload, payload.indexOf('{', start))
  try {
    const names = record(JSON.parse(source ?? '{}'))
    return Object.fromEntries(Object.entries(names).filter((entry): entry is [string, string] => typeof entry[1] === 'string' && entry[0] !== 'allergyInformation'))
  } catch { return {} }
}

export function uzhLocation(outlet: Outlet, page: UzhOutletPage, weeks: { service: Service; days: Map<string, Dish[]> }[], monday: string, language: string, names: Record<string, string> = {}): Location {
  const days: DayMenu[] = []
  for (let offset = 0; offset < 7; offset++) {
    const date = addDays(monday, offset)
    const services: ServiceMenu[] = []
    for (const { service, days: byDate } of weeks) {
      const dishes = (byDate.get(date) ?? []).map(dish => ({ ...dish, allergens: dish.allergens.map(id => names[id] ?? id) }))
      if (!dishes.length) continue
      const same = services.find(row => row.service === service)
      if (same) same.dishes.push(...dishes)
      else services.push({ service, from: '', to: '', dishes })
    }
    days.push({ date, hours: [], services })
  }
  return { id: `uzh:${outlet.path}`, source: 'uzh', campus: 'uzh', name: page.name || outlet.name, place: page.place, area: outlet.campus, url: uzhUrl(language, outlet.path), days }
}

// ── Filters and the place list ───────────────────────────────────────────────

export type Filters = { vegetarian: boolean; vegan: boolean; glutenFree: boolean; lactoseFree: boolean }
export const NO_FILTERS: Filters = { vegetarian: false, vegan: false, glutenFree: false, lactoseFree: false }
export const hasFilters = (filters: Filters) => filters.vegetarian || filters.vegan || filters.glutenFree || filters.lactoseFree

/**
 * Whether a dish passes the diet filters. Vegetarian includes vegan dishes. Gluten-free needs the
 * source to declare the dish's allergens without a gluten cereal, lactose-free without milk: a
 * dish without any declared allergens is never called gluten- or lactose-free.
 */
export function matchesFilters(dish: Dish, filters: Filters): boolean {
  if (filters.vegan && dish.diet !== 'vegan') return false
  if (filters.vegetarian && !dish.diet) return false
  if (filters.glutenFree && dish.gluten !== false) return false
  if (filters.lactoseFree && dish.lactose !== false) return false
  return true
}

export const menuOf = (location: Location, date: string, service: Service) =>
  location.days.find(day => day.date === date)?.services.find(row => row.service === service)

/** The dishes a place serves for the day and meal that pass the filters. */
export const dishesOf = (location: Location, date: string, service: Service, filters: Filters) =>
  (menuOf(location, date, service)?.dishes ?? []).filter(dish => matchesFilters(dish, filters))

/** The opening hours around a meal: the block its serving time falls in, else the day's first block. */
export function openingOf(location: Location, date: string, service: Service): Hours | null {
  const day = location.days.find(row => row.date === date)
  if (!day?.hours.length) return null
  const from = menuOf(location, date, service)?.from ?? ''
  return day.hours.find(block => from && block.from <= from && from < block.to) ?? day.hours[0]
}

/** `open` or `closed` right now when `date` is today; `null` for another day. */
export function openState(hours: Hours, date: string, now = new Date()): 'open' | 'closed' | null {
  if (date !== today(now)) return null
  const clock = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
  return hours.from <= clock && clock < hours.to ? 'open' : 'closed'
}

/** `place:<location id>`, the page instance of one place. */
export const placeInstance = (id: string) => `place:${id}`
export function placeOf(instanceId: string | undefined): { source: Source; key: string; id: string } | null {
  const match = /^place:(eth|uzh):(.+)$/.exec(instanceId ?? '')
  if (!match) return null
  const source = match[1] as Source, key = match[2]
  if (source === 'eth' ? !/^\d+$/.test(key) : !isOutletPath(key)) return null
  return { source, key, id: `${source}:${key}` }
}

export function formatPrice(price: number): string { return `CHF ${price.toFixed(2)}` }
