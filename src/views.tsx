/**
 * The menu plan's two surfaces:
 * - `study.panel` (left sidebar, an Icon Rail entry): Lunch | Dinner and the page button, the campus
 *   tags (ETH, Höngg, UZH), the day, then one row per place with its location, opening state and
 *   number of menus;
 * - `study.page` (main workspace): one place's menus as picture cards (`instanceId` `place:<id>`),
 *   or, without an instance, every place of the chosen campus.
 * Both share the day, meal, campus, filters and price through the plugin's settings.
 */
import type { ValleyPluginApi } from '@valley/plugin-sdk'
import { paletteCssContrast, paletteCssValue } from '@valley/plugin-sdk/palette'
import {
  CAMPUSES, addDays, defaultService, dishesOf, formatPrice, hasFilters, isDate, menuOf, mondayOf, openState, openingOf, placeInstance, placeOf, sourceLanguage, today,
  type Campus, type Dish, type DishDetail, type Filters, type Location, type Outlet, type PriceGroup, type Service
} from './model'

export const VIEWS_CSS = `
.study-panel, .study-page { display: flex; flex-direction: column; height: 100%; min-height: 0; overflow: hidden; }
.study-page { background: var(--background-color, transparent); container-type: inline-size; }
.study-bar { display: flex; align-items: center; gap: 6px; height: var(--app-bar-height); box-sizing: border-box; padding: 0 6px; border-bottom: 1px solid var(--border-light); flex-shrink: 0; }
.study-page .study-bar { gap: 8px; padding: 0 12px; }
/* The host draws back/forward at the start and its menu at the end of the page's first row. */
.study-page .study-bar.study-page-head { padding-left: calc(var(--plugin-navigation-offset, 60px) + var(--space-2, 6px)); padding-right: calc(var(--plugin-actions-offset, 36px) + var(--space-2, 6px)); }
.study-spacer { flex: 1; min-width: 0; }
.study-actions { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.study-seg { display: flex; flex: 0 0 auto; min-width: 0; gap: 2px; padding: 2px; border-radius: var(--shell-control-radius, 6px); background: var(--hover-bg); }
.study-seg button { flex: 0 0 auto; height: calc(var(--shell-control-toolbar, 24px) - 4px); padding: 0 7px; border: 0; border-radius: calc(var(--shell-control-radius, 6px) - 2px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); white-space: nowrap; cursor: pointer; }
.study-page .study-seg button { height: calc(var(--search-field-height, 26px) - 4px); padding: 0 10px; }
.study-seg button:hover { color: var(--text-color); }
.study-seg button.active { background: var(--background-color, var(--container-color)); color: var(--title-color); box-shadow: 0 0 0 1px var(--border-light); }
.study-seg button:focus-visible, .study-icon-btn:focus-visible, .study-day-label:focus-visible, .study-place:focus-visible, .study-card:focus-visible, .study-tile:focus-visible, .study-place-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.study-day { display: flex; align-items: center; gap: 2px; flex: 1; min-width: 0; }
.study-page .study-day { justify-content: center; }
.study-day-label { flex: 1; min-width: 0; height: var(--search-field-height, 26px); padding: 0 2px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.study-page .study-day-label { flex: 0 1 auto; padding: 0 10px; }
.study-day-label:hover { background: var(--hover-bg); }
.study-day-label.today { color: var(--accent-color); }
.study-icon-btn { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--text-secondary); cursor: pointer; }
.study-icon-btn:hover { background: var(--hover-bg); color: var(--text-color); }
.study-icon-btn.active { background: var(--accent-tint-bg); color: var(--title-color); }
.study-icon-btn svg { width: var(--shell-glyph-default, 15px); height: var(--shell-glyph-default, 15px); }
.study-icon-btn.spinning svg { animation: study-spin 0.9s linear infinite; }
@keyframes study-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .study-icon-btn.spinning svg { animation: none; } }
/* Campus tags: To-Do's smart-list chips (icon tinted in the tag's colour, filled when active). */
.study-tiles { gap: 4px; padding: 0 5px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; }
.study-tiles::-webkit-scrollbar { display: none; }
.study-tile { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; box-sizing: border-box; height: 28px; padding: 0 10px; border: 1px solid var(--border-light); border-radius: 999px; background: var(--surface-color-alt); color: var(--text-secondary); font-family: var(--interface-font); font-size: var(--small-font-size); line-height: 1; cursor: pointer; }
.study-tile:hover { background: var(--hover-bg); color: var(--text-color); }
.study-tile-icon { display: grid; place-items: center; width: 15px; height: 15px; flex-shrink: 0; color: var(--study-tile-color, var(--text-tertiary)); }
.study-tile-icon svg { width: 15px; height: 15px; }
.study-tile-count { color: var(--text-tertiary); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.study-tile.active { background: var(--study-tile-color, var(--accent-color)); border-color: var(--study-tile-color, var(--accent-color)); color: var(--study-tile-on, var(--title-color)); }
.study-tile.active .study-tile-icon, .study-tile.active .study-tile-count { color: inherit; }
.study-list { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 6px 12px; }
.study-page .study-list { padding: 0; }
.study-page-inner { max-width: 1240px; margin: 0 auto; padding: 18px 24px 36px; }
.study-note { padding: 8px 10px; color: var(--text-secondary); font-size: var(--small-font-size); }
.study-page .study-note { padding: 8px 2px; }
.study-note.error { color: var(--tint-red-text, var(--text-secondary)); }
.study-campus { padding: 10px 8px 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
.study-place { display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: baseline; gap: 1px 8px; width: 100%; box-sizing: border-box; padding: 6px 8px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; }
.study-place + .study-place { margin-top: 1px; }
.study-place:hover { background: var(--hover-bg); }
.study-place-name { min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-place-count { color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.study-place-count.pending { color: var(--text-tertiary, var(--text-secondary)); }
.study-place-meta { grid-column: 1 / -1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-open { color: var(--tint-green-text, var(--text-secondary)); }
.study-closed { color: var(--text-secondary); }
.study-place-head { display: grid; gap: 4px; padding: 0 2px 14px; }
.study-place-title { margin: 0; color: var(--title-color); font-size: 1.4rem; font-weight: 650; }
.study-place-facts { display: flex; flex-wrap: wrap; gap: 4px 14px; color: var(--text-secondary); font-size: var(--small-font-size); }
.study-section + .study-section { margin-top: 22px; }
.study-place-link { display: flex; align-items: baseline; gap: 10px; width: 100%; padding: 4px 2px 8px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; text-align: left; cursor: pointer; }
.study-place-link:hover .study-place-link-name { text-decoration: underline; }
.study-place-link-name { font-size: 1.15rem; font-weight: 600; }
.study-place-link-meta { min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-dish-top { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
.study-dish-line { flex: 1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-dish-price { flex-shrink: 0; color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; }
.study-dish-name { color: var(--title-color); font-weight: 600; overflow-wrap: anywhere; }
.study-dish-description { color: var(--text-secondary); font-size: var(--small-font-size); overflow-wrap: anywhere; }
.study-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
.study-tag { padding: 0 6px; border-radius: 999px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.6; }
.study-tag.vegan, .study-tag.vegetarian, .study-tag.glutenFree, .study-tag.LOW { background: var(--tint-green-bg, var(--hover-bg)); color: var(--tint-green-text, var(--text-secondary)); }
.study-tag.HIGH { background: var(--tint-orange-bg, var(--hover-bg)); color: var(--tint-orange-text, var(--text-secondary)); }
.study-dish-extra { margin-top: 3px; color: var(--text-secondary); font-size: var(--smaller-font-size); }
.study-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; padding: 2px 0 4px; }
.study-card { display: flex; flex-direction: column; min-width: 0; padding: 0; overflow: hidden; border: 1px solid var(--border-light); border-radius: 8px; background: var(--container-color, transparent); color: var(--text-color); font: inherit; text-align: left; cursor: pointer; }
.study-card:hover, .study-card.open { border-color: var(--border-color, var(--text-tertiary)); }
.study-card-image { position: relative; aspect-ratio: 3 / 2; background: var(--hover-bg); display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.study-card-image svg { width: 30px; height: 30px; opacity: 0.6; }
.study-card-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.study-card-body { display: grid; gap: 3px; padding: 10px 12px 12px; }
.study-card .study-dish-name { font-size: 1rem; }
.study-card .study-dish-description { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
.study-card.open .study-dish-description { display: block; }
/* A narrow page lays each card out as a row: picture left, text right. */
@container (max-width: 560px) {
  .study-page-inner { padding: 10px 12px 28px; }
  .study-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .study-card { flex-direction: row; align-items: stretch; }
  .study-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 112px; }
  .study-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
.study-credit { padding: 10px 8px 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
.study-page .study-credit { padding: 28px 2px 0; }
`

type Shapes = string[]
const LEFT: Shapes = ['M15 6l-6 6 6 6']
const RIGHT: Shapes = ['M9 6l6 6-6 6']
const REFRESH: Shapes = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']
const OPEN: Shapes = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const TAB: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M4 9h16', 'M10 4v5']
const DISH: Shapes = ['M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3', 'M8 3v18', 'M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17']
const FILTER: Shapes = ['M4 5h16l-6 7.5V19l-4 1.5v-8z']
/** ETH Zentrum: the main building's columns; Höngg: the hill; UZH: a book. */
const CAMPUS_ICONS: Record<Campus, Shapes> = {
  eth: ['M3 21h18', 'M4 10h16', 'M12 3l8 5H4z', 'M6 10v8', 'M10 10v8', 'M14 10v8', 'M18 10v8', 'M4 18h16'],
  hoengg: ['M3 19h18', 'M3 19l6-9 4 5 3-3 5 7', 'M15 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0'],
  uzh: ['M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z', 'M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z']
}
const CAMPUS_COLORS: Record<Campus, string> = { eth: 'palette:primary-blue', hoengg: 'palette:green', uzh: 'palette:violet' }
const PRICES: PriceGroup[] = ['students', 'internal', 'external']
const FILTER_KEYS = [['vegetarian', 'onlyVegetarian'], ['vegan', 'onlyVegan'], ['glutenFree', 'onlyGlutenFree']] as const

type State<T> = { data: T | null; error: string; loading: boolean }
type Day = { date: string; service: Service }

export function registerStudyViews(api: ValleyPluginApi, { t }: { t: (key: string) => string }): void {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>

  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const problem = (error: unknown) => { const key = `error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('error.serviceError') : t(key) }
  const fill = (template: string, values: Record<string, string | number>) => Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template)
  const menusLabel = (count: number) => count === 1 ? t('menus.one') : fill(t('menus.other'), { count })

  /** The shared day: a stored day before today falls back to today and the meal of the hour. */
  function dayOf(value: unknown): Day {
    const stored = value && typeof value === 'object' ? value as Partial<Day> : {}
    const now = today()
    if (!isDate(stored.date) || stored.date < now) return { date: now, service: defaultService() }
    return { date: stored.date, service: stored.service === 'dinner' ? 'dinner' : 'lunch' }
  }

  function usePreferences() {
    const [, setTick] = React.useState(0)
    React.useEffect(() => {
      const bump = () => setTick(value => value + 1)
      const offs = [api.ui.onLanguageChanged(bump), api.settings.subscribe(bump)]
      return () => { for (const off of offs) off() }
    }, [])
    const settings = api.settings.get()
    const price = settings.price
    return {
      language: sourceLanguage(api.ui.language()),
      locale: api.ui.language() || 'en',
      campus: (CAMPUSES.includes(settings.campus as Campus) ? settings.campus : 'hoengg') as Campus,
      price: (PRICES.includes(price as PriceGroup) ? price : 'students') as PriceGroup,
      filters: { vegetarian: settings.onlyVegetarian === true, vegan: settings.onlyVegan === true, glutenFree: settings.onlyGlutenFree === true } as Filters,
      ...dayOf(settings.day)
    }
  }
  type Preferences = ReturnType<typeof usePreferences>
  const setDay = (day: Day) => void api.settings.set('day', day)

  /** A backend answer for `key`, reloaded when the key or `revision` changes; `revision` > 0 asks past the cache. */
  function useAnswer<T>(key: string | null, revision: number, load: (fresh: boolean) => Promise<T>): State<T> {
    const [state, setState] = React.useState<State<T>>({ data: null, error: '', loading: key !== null })
    React.useEffect(() => {
      if (key === null) return
      let live = true
      setState(previous => ({ data: previous.data, error: '', loading: true }))
      load(revision > 0).then(
        data => { if (live) setState({ data, error: '', loading: false }) },
        error => { if (live) setState({ data: null, error: problem(error), loading: false }) })
      return () => { live = false }
    }, [key, revision])
    return state
  }

  /** True once the element has come near the visible part of its own window. */
  function useVisible(ref: { current: HTMLElement | null }): boolean {
    const [visible, setVisible] = React.useState(false)
    React.useEffect(() => {
      const element = ref.current
      const View = element?.ownerDocument.defaultView?.IntersectionObserver
      if (!element || visible) return
      if (!View) { setVisible(true); return }
      const observer = new View(entries => { if (entries.at(-1)?.isIntersecting) { setVisible(true); observer.disconnect() } }, { rootMargin: '300px' })
      observer.observe(element)
      return () => observer.disconnect()
    }, [visible])
    return visible
  }

  /** ETH Zentrum and Hönggerberg for the week of `date`, in one answer. */
  const useEthWeek = (preferences: Preferences, revision: number, enabled = true) => {
    const monday = mondayOf(preferences.date)
    return useAnswer<Location[]>(enabled ? `${preferences.language}:${monday}` : null, revision, fresh => api.backend.call<Location[]>('eth.week', { monday, language: preferences.language, fresh }))
  }

  /**
   * Every UZH outlet's week, read as soon as the list is known: the backend reads two pages at a
   * time (list reads queue behind the open page's) and keeps each answer for 30 minutes.
   */
  function useUzhWeeks(preferences: Preferences, revision: number) {
    const monday = mondayOf(preferences.date)
    const outlets = useAnswer<Outlet[]>(preferences.language, revision, fresh => api.backend.call<Outlet[]>('uzh.outlets', { language: preferences.language, fresh }))
    const [weeks, setWeeks] = React.useState<{ key: string; byPath: Map<string, State<Location>> }>({ key: '', byPath: new Map() })
    const key = `${preferences.language}:${monday}:${revision}`
    React.useEffect(() => {
      const list = outlets.data
      if (!list) return
      let live = true
      setWeeks({ key, byPath: new Map(list.map(outlet => [outlet.path, { data: null, error: '', loading: true }])) })
      for (const outlet of list) {
        api.backend.call<Location>('uzh.week', { path: outlet.path, monday, language: preferences.language, fresh: revision > 0, background: true }).then(
          data => ({ data, error: '', loading: false }),
          error => ({ data: null, error: problem(error), loading: false })
        ).then(state => {
          if (!live) return
          setWeeks(previous => previous.key === key ? { key, byPath: new Map(previous.byPath).set(outlet.path, state) } : previous)
        })
      }
      return () => { live = false }
    }, [outlets.data, key])
    const byPath = weeks.key === key ? weeks.byPath : new Map<string, State<Location>>()
    const pending = outlets.data ? byPath.size < outlets.data.length || [...byPath.values()].some(state => state.loading) : !outlets.error
    return { outlets, byPath, pending }
  }

  const formatDay = (date: string, locale: string, options: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
  const dayTitle = (date: string, locale: string) => formatDay(date, locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  function tagsOf(dish: Dish) {
    return [
      ...(dish.diet ? [{ key: dish.diet, label: t(`diet.${dish.diet}`) }] : []),
      ...(dish.gluten === false ? [{ key: 'glutenFree', label: t('filter.glutenFree') }] : []),
      ...dish.classes.map(label => ({ key: '', label })),
      ...(dish.climate ? [{ key: dish.climate, label: t(`climate.${dish.climate}`) }] : [])
    ]
  }
  function detailsOf(dish: Dish, prices: DishDetail['prices']) {
    return [
      prices.length > 1 ? prices.map(row => `${t(`price.${row.group}`)} ${formatPrice(row.price)}`).join(' · ') : '',
      dish.allergens.length ? `${t('allergens')}: ${dish.allergens.join(', ')}` : t('allergens.none')
    ].filter(Boolean)
  }
  const Tags = ({ dish }: { dish: Dish }): Node | null => {
    const tags = tagsOf(dish)
    return tags.length ? h('span', { className: 'study-tags' }, tags.map(tag => h('span', { key: `${tag.key}:${tag.label}`, className: `study-tag ${tag.key}` }, tag.label))) : null
  }

  /** A dish card: the picture (read once the card is on screen), and for UZH its page's picture and prices. */
  function DishCard({ dish, group, revision }: { dish: Dish; group: PriceGroup; revision: number }): Node {
    const ref = React.useRef<HTMLButtonElement>(null)
    const [open, setOpen] = React.useState(false)
    const visible = useVisible(ref)
    const detail = useAnswer<DishDetail>(visible && dish.detail ? dish.detail : null, revision, fresh => api.backend.call<DishDetail>('uzh.dish', { url: dish.detail, fresh }))
    const source = dish.image || detail.data?.image || ''
    const picture = useAnswer<string>(visible && source ? source : null, 0, () => api.backend.call<string>('image', { url: source }))
    const prices = dish.prices.length ? dish.prices : detail.data?.prices ?? []
    const price = prices.find(row => row.group === group)
    return h('button', { ref, type: 'button', className: `study-card${open ? ' open' : ''}`, 'aria-expanded': open, onClick: () => setOpen(!open) },
      h('span', { className: 'study-card-image' },
        h(Icon, { shapes: DISH }),
        picture.data ? h('img', { src: picture.data, alt: dish.name, draggable: false }) : null),
      h('span', { className: 'study-card-body' },
        h('span', { className: 'study-dish-top' },
          h('span', { className: 'study-dish-line' }, dish.line),
          price ? h('span', { className: 'study-dish-price' }, formatPrice(price.price)) : null),
        h('span', { className: 'study-dish-name' }, dish.name),
        dish.description ? h('span', { className: 'study-dish-description' }, dish.description) : null,
        h(Tags, { dish }),
        ...(open ? detailsOf(dish, prices).map(line => h('span', { key: line, className: 'study-dish-extra' }, line)) : [])))
  }

  /** "Open now · 11:00–14:00" today, the hours alone on another day; null without published hours. */
  function OpeningLabel({ location, date, service }: { location: Location; date: string; service: Service }): Node | null {
    const hours = openingOf(location, date, service)
    if (!hours) return null
    const range = `${hours.from}–${hours.to}`
    const state = openState(hours, date)
    if (state === 'open') return h('span', { className: 'study-open' }, fill(t('hours.openNow'), { hours: range }))
    if (state === 'closed') return h('span', { className: 'study-closed' }, fill(t('hours.closed'), { hours: range }))
    return h('span', null, fill(t('hours.open'), { hours: range }))
  }
  const where = (location: Location) => [location.area, location.place].filter(Boolean).join(' · ')

  const openPlace = (location: Location, newTab: boolean) => api.workspace.openMainTab({ instanceId: placeInstance(location.id), title: location.name, newTab })
  const placeMenu = async (event: MouseEvent, location: Location, refresh: () => void) => {
    event.preventDefault()
    const choice = await api.ui.openMenu([
      { id: 'tab', label: t('openInNewTab'), icon: h(Icon, { shapes: TAB }) },
      { id: 'website', label: t('openWebsite'), icon: h(Icon, { shapes: OPEN }), enabled: Boolean(location.url) },
      { type: 'separator' },
      { id: 'refresh', label: t('refresh'), icon: h(Icon, { shapes: REFRESH }) }
    ], { x: event.clientX, y: event.clientY })
    if (choice === 'tab') openPlace(location, true)
    if (choice === 'website' && location.url) void api.links.open(location.url)
    if (choice === 'refresh') refresh()
  }

  /** The diet filters and the price shown, as a header filter menu. */
  function FilterButton({ preferences }: { preferences: Preferences }): Node {
    const active = hasFilters(preferences.filters)
    const pick = async (event: MouseEvent) => {
      const choice = await api.ui.openMenu([
        ...FILTER_KEYS.map(([name]) => ({ id: name, type: 'checkbox' as const, label: t(`filter.${name}`), checked: preferences.filters[name] })),
        { type: 'separator' },
        ...PRICES.map(group => ({ id: `price:${group}`, type: 'radio' as const, label: `${t('filter.price')}: ${t(`price.${group}`)}`, checked: preferences.price === group })),
        ...(active ? [{ type: 'separator' as const }, { id: 'clear', label: t('filter.clear') }] : [])
      ], { anchor: event.currentTarget as HTMLElement, align: 'end' })
      if (!choice) return
      if (choice === 'clear') { for (const [, key] of FILTER_KEYS) void api.settings.set(key, false); return }
      if (choice.startsWith('price:')) { void api.settings.set('price', choice.slice(6)); return }
      const entry = FILTER_KEYS.find(([name]) => name === choice)
      if (entry) void api.settings.set(entry[1], !preferences.filters[entry[0]])
    }
    const label = active ? `${t('filter')} · ${FILTER_KEYS.filter(([name]) => preferences.filters[name]).map(([name]) => t(`filter.${name}`)).join(', ')}` : t('filter')
    return h('button', { type: 'button', className: `study-icon-btn${active ? ' active' : ''}`, title: label, 'aria-label': label, 'aria-haspopup': 'menu', onClick: pick }, h(Icon, { shapes: FILTER }))
  }

  const seg = <T extends string>(value: T, current: T, label: string, pick: (value: T) => void) =>
    h('button', { key: value, type: 'button', className: value === current ? 'active' : '', 'aria-pressed': value === current, onClick: () => pick(value) }, label)
  const Services = ({ preferences }: { preferences: Preferences }): Node => h('div', { className: 'study-seg', role: 'group', 'aria-label': t('service.label') },
    seg<Service>('lunch', preferences.service, t('service.lunch'), service => setDay({ date: preferences.date, service })),
    seg<Service>('dinner', preferences.service, t('service.dinner'), service => setDay({ date: preferences.date, service })))
  function DayNav({ preferences, long }: { preferences: Preferences; long: boolean }): Node {
    const { date, service, locale } = preferences
    const isToday = date === today()
    const label = long ? formatDay(date, locale, { weekday: 'long', day: 'numeric', month: 'long' }) : `${formatDay(date, locale, { weekday: 'short' })} ${formatDay(date, locale, { day: 'numeric', month: 'short' })}`
    return h('div', { className: 'study-day' },
      h('button', { type: 'button', className: 'study-icon-btn', title: t('day.previous'), 'aria-label': t('day.previous'), onClick: () => setDay({ date: addDays(date, -1), service }) }, h(Icon, { shapes: LEFT })),
      h('button', { type: 'button', className: `study-day-label${isToday ? ' today' : ''}`, title: `${dayTitle(date, locale)} · ${isToday ? t('day.today') : t('day.backToToday')}`, 'aria-current': isToday ? 'date' : undefined, onClick: () => setDay({ date: today(), service }) }, label),
      h('button', { type: 'button', className: 'study-icon-btn', title: t('day.next'), 'aria-label': t('day.next'), onClick: () => setDay({ date: addDays(date, 1), service }) }, h(Icon, { shapes: RIGHT })))
  }

  function useRefresh() {
    const [revision, setRevision] = React.useState(0)
    const [refreshing, setRefreshing] = React.useState(false)
    const refresh = () => { setRefreshing(true); setRevision(value => value + 1); setTimeout(() => setRefreshing(false), 600) }
    return { revision, refreshing, refresh }
  }

  /** The places of every campus for the day and meal, with their matching menu counts. */
  function usePlaces(preferences: Preferences, revision: number) {
    const eth = useEthWeek(preferences, revision)
    const uzh = useUzhWeeks(preferences, revision)
    const { date, service, filters } = preferences
    const serving = (location: Location) => Boolean(menuOf(location, date, service))
    const ethPlaces = (eth.data ?? []).filter(serving).sort((a, b) => a.name.localeCompare(b.name, preferences.locale))
    const uzhPlaces = (uzh.outlets.data ?? []).flatMap(outlet => { const week = uzh.byPath.get(outlet.path)?.data; return week && serving(week) ? [week] : [] })
    const byCampus: Record<Campus, Location[]> = { eth: ethPlaces.filter(row => row.campus === 'eth'), hoengg: ethPlaces.filter(row => row.campus === 'hoengg'), uzh: uzhPlaces }
    const count = (location: Location) => dishesOf(location, date, service, filters).length
    const pending: Record<Campus, boolean> = { eth: eth.loading && !eth.data, hoengg: eth.loading && !eth.data, uzh: uzh.pending }
    const error: Record<Campus, string> = { eth: eth.error, hoengg: eth.error, uzh: uzh.outlets.error }
    return { byCampus, count, pending, error }
  }
  type Places = ReturnType<typeof usePlaces>

  /** The tags shown: those with places that day, else the chosen one alone; the active tag is the chosen one when shown. */
  function campusTags(places: Places, chosen: Campus) {
    const shown = CAMPUSES.filter(campus => places.pending[campus] || places.byCampus[campus].length > 0)
    const visible = shown.length ? shown : [chosen]
    return { visible, active: visible.includes(chosen) ? chosen : visible[0] }
  }

  function Tiles({ places, visible, active }: { places: Places; visible: Campus[]; active: Campus }): Node {
    return h('nav', { className: 'study-bar study-tiles', 'aria-label': t('campus.label') }, visible.map(campus => {
      const count = places.byCampus[campus].filter(location => places.count(location) > 0).length
      const label = t(`campus.${campus}`)
      return h('button', {
        key: campus, type: 'button', className: `study-tile${campus === active ? ' active' : ''}`, 'aria-pressed': campus === active,
        title: t(`campus.${campus}.title`), 'aria-label': `${t(`campus.${campus}.title`)} ${count}`,
        style: { '--study-tile-color': paletteCssValue(CAMPUS_COLORS[campus]), '--study-tile-on': paletteCssContrast(CAMPUS_COLORS[campus]) } as Record<string, string>,
        onClick: () => void api.settings.set('campus', campus)
      },
      h('span', { className: 'study-tile-icon' }, h(Icon, { shapes: CAMPUS_ICONS[campus] })),
      h('span', null, label),
      h('span', { className: 'study-tile-count' }, places.pending[campus] && !count ? '…' : String(count)))
    }))
  }

  function PlaceRow({ location, preferences, count, refresh }: { location: Location; preferences: Preferences; count: number; refresh: () => void }): Node {
    const opening = h(OpeningLabel, { location, date: preferences.date, service: preferences.service })
    const place = where(location)
    return h('button', {
      type: 'button', className: 'study-place', 'data-place': location.id,
      onClick: (event: MouseEvent) => openPlace(location, api.ui.hasModKey(event)),
      onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openPlace(location, true) } },
      onContextMenu: (event: MouseEvent) => void placeMenu(event, location, refresh)
    },
    h('span', { className: 'study-place-name' }, location.name),
    h('span', { className: 'study-place-count' }, menusLabel(count)),
    h('span', { className: 'study-place-meta' }, place, place && openingOf(location, preferences.date, preferences.service) ? ' · ' : null, opening))
  }

  function PlaceList({ places, campus, preferences, refresh }: { places: Places; campus: Campus; preferences: Preferences; refresh: () => void }): Node {
    if (places.error[campus]) return h('div', { className: 'study-note error', role: 'alert' }, places.error[campus])
    const listed = places.byCampus[campus].filter(location => places.count(location) > 0)
    const rows = listed.map(location => h(PlaceRow, { key: location.id, location, preferences, count: places.count(location), refresh }))
    const note = places.pending[campus] ? t(campus === 'uzh' ? 'loading.uzh' : 'loading')
      : listed.length ? '' : places.byCampus[campus].length ? t('empty.filtered') : t(`empty.${preferences.service}`)
    return h(React.Fragment, null, ...rows, note ? h('div', { className: 'study-note' }, note) : null)
  }

  function Panel(): Node {
    const preferences = usePreferences()
    const { revision, refresh } = useRefresh()
    const places = usePlaces(preferences, revision)
    const { visible, active } = campusTags(places, preferences.campus)
    const openOverview = (newTab: boolean) => api.workspace.openMainTab({ newTab })
    return h('div', { className: 'study-panel' },
      h('div', { className: 'panel-header' },
        h('span', { className: 'panel-title' }, t('menu.title')),
        h('div', { className: 'study-actions' },
          h(Services, { preferences }),
          h('button', {
            type: 'button', className: 'plugin-open-page', title: t('openPage'), 'aria-label': t('openPage'),
            onClick: (event: MouseEvent) => openOverview(api.ui.hasModKey(event)),
            onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openOverview(true) } }
          }))),
      h(Tiles, { places, visible, active }),
      h('div', { className: 'study-bar' }, h(DayNav, { preferences, long: false }), h(FilterButton, { preferences })),
      h('div', { className: 'study-list' },
        h(PlaceList, { places, campus: active, preferences, refresh }),
        h('div', { className: 'study-credit' }, t(active === 'uzh' ? 'credit.uzh' : 'credit.eth'))))
  }

  function Cards({ location, preferences, revision }: { location: Location; preferences: Preferences; revision: number }): Node {
    const dishes = dishesOf(location, preferences.date, preferences.service, preferences.filters)
    if (!dishes.length) return h('div', { className: 'study-note' }, menuOf(location, preferences.date, preferences.service) ? t('empty.filtered') : t('empty.location'))
    return h('div', { className: 'study-cards' }, dishes.map(dish => h(DishCard, { key: dish.id, dish, group: preferences.price, revision })))
  }

  function PlaceFacts({ location, preferences }: { location: Location; preferences: Preferences }): Node {
    const menu = menuOf(location, preferences.date, preferences.service)
    const count = dishesOf(location, preferences.date, preferences.service, preferences.filters).length
    return h('div', { className: 'study-place-facts' },
      where(location) ? h('span', null, where(location)) : null,
      h(OpeningLabel, { location, date: preferences.date, service: preferences.service }),
      menu?.from && menu.to ? h('span', null, fill(t(`service.time.${preferences.service}`), { hours: `${menu.from}–${menu.to}` })) : null,
      menu ? h('span', null, menusLabel(count)) : null)
  }

  /** One place's page: its name, location, hours and its menus as cards. */
  function PlaceBody({ place, preferences, revision, onTitle }: { place: NonNullable<ReturnType<typeof placeOf>>; preferences: Preferences; revision: number; onTitle: (title: string) => void }): Node {
    const monday = mondayOf(preferences.date)
    const eth = useEthWeek(preferences, revision, place.source === 'eth')
    const uzh = useAnswer<Location>(place.source === 'uzh' ? `${preferences.language}:${place.key}:${monday}` : null, revision,
      fresh => api.backend.call<Location>('uzh.week', { path: place.key, monday, language: preferences.language, fresh }))
    const state = place.source === 'eth' ? eth : uzh
    const location = place.source === 'eth' ? eth.data?.find(row => row.id === place.id) ?? null : uzh.data
    React.useEffect(() => { if (location) onTitle(location.name) }, [location?.name])
    if (state.error) return h('div', { className: 'study-note error', role: 'alert' }, state.error)
    if (!location) return h('div', { className: 'study-note' }, state.loading ? t('loading') : t('error.notFound'))
    return h(React.Fragment, null,
      h('div', { className: 'study-place-head' },
        h('h1', { className: 'study-place-title' }, location.name),
        h(PlaceFacts, { location, preferences })),
      h(Cards, { location, preferences, revision }),
      h('div', { className: 'study-credit' }, t(location.source === 'uzh' ? 'credit.uzh' : 'credit.eth')))
  }

  /** Without a place: every place of the chosen campus, each heading opening its own page. */
  function OverviewBody({ preferences, revision, refresh }: { preferences: Preferences; revision: number; refresh: () => void }): Node {
    const places = usePlaces(preferences, revision)
    const { active } = campusTags(places, preferences.campus)
    if (places.error[active]) return h('div', { className: 'study-note error', role: 'alert' }, places.error[active])
    const listed = places.byCampus[active].filter(location => places.count(location) > 0)
    return h(React.Fragment, null,
      h('div', { className: 'study-place-head' }, h('h1', { className: 'study-place-title' }, t(`campus.${active}.title`))),
      listed.map(location => h('section', { key: location.id, className: 'study-section', 'data-place': location.id },
        h('button', {
          type: 'button', className: 'study-place-link',
          onClick: (event: MouseEvent) => openPlace(location, api.ui.hasModKey(event)),
          onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openPlace(location, true) } },
          onContextMenu: (event: MouseEvent) => void placeMenu(event, location, refresh)
        }, h('span', { className: 'study-place-link-name' }, location.name), h('span', { className: 'study-place-link-meta' }, where(location))),
        h(Cards, { location, preferences, revision }))),
      places.pending[active] ? h('div', { className: 'study-note' }, t(active === 'uzh' ? 'loading.uzh' : 'loading'))
        : listed.length ? null : h('div', { className: 'study-note' }, places.byCampus[active].length ? t('empty.filtered') : t(`empty.${preferences.service}`)),
      h('div', { className: 'study-credit' }, t(active === 'uzh' ? 'credit.uzh' : 'credit.eth')))
  }

  function Page({ instanceId }: { instanceId?: string }): Node {
    const preferences = usePreferences()
    const { revision, refreshing, refresh } = useRefresh()
    const place = placeOf(instanceId)
    const [title, setTitle] = React.useState('')
    React.useEffect(() => { api.workspace.setMainTabTitle(place ? title || t('menu.title') : t('menu.title'), instanceId) }, [instanceId, title, api.ui.language()])
    return h('div', { className: 'study-page' },
      h('div', { className: 'study-bar study-page-head' },
        h(DayNav, { preferences, long: true }),
        h(Services, { preferences }),
        h(FilterButton, { preferences }),
        h('button', { type: 'button', className: `study-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH }))),
      h('div', { className: 'study-list' }, h('div', { className: 'study-page-inner' },
        place ? h(PlaceBody, { place, preferences, revision, onTitle: setTitle }) : h(OverviewBody, { preferences, revision, refresh }))))
  }

  api.registerView('study.panel', Panel)
  api.registerView('study.page', Page)
}
