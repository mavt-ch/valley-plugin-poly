/**
 * The menu plan's two surfaces, built from the same pieces:
 * - `study.panel` (left sidebar, an Icon Rail entry): a compact list of the outlets and their dishes;
 * - `study.page` (main workspace): the same day as cards with the dish pictures, prices and details.
 * ETH Hönggerberg comes in one answer per week; a UZH outlet is read only while its section is open,
 * and a UZH dish's page (picture, prices) only once its card is on screen.
 */
import type { ValleyPluginApi } from '@valley/plugin-sdk'
import {
  ETH_WEBSITE, UZH_WEBSITE, addDays, defaultService, formatPrice, mondayOf, openByDefault, sourceLanguage, today,
  type DayMenu, type Dish, type DishDetail, type Location, type Outlet, type PriceGroup, type Service, type Source
} from './model'

export const VIEWS_CSS = `
.study-panel, .study-page { display: flex; flex-direction: column; height: 100%; min-height: 0; overflow: hidden; }
.study-page { background: var(--background-color, transparent); }
.study-bar { display: flex; align-items: center; gap: 6px; height: var(--app-bar-height); box-sizing: border-box; padding: 0 6px; border-bottom: 1px solid var(--border-light); flex-shrink: 0; }
.study-page .study-bar { gap: 8px; padding: 0 12px; }
/* The host draws back/forward at the start and its menu at the end of the page's first row. */
.study-page .study-bar.study-page-head { padding-left: calc(var(--plugin-navigation-offset, 60px) + var(--space-2, 6px)); padding-right: calc(var(--plugin-actions-offset, 36px) + var(--space-2, 6px)); }
.study-spacer { flex: 1; min-width: 0; }
.study-page { container-type: inline-size; }
.study-seg { display: flex; flex: 1; min-width: 0; gap: 2px; padding: 2px; border-radius: var(--shell-control-radius, 6px); background: var(--hover-bg); }
.study-seg.compact, .study-page .study-seg { flex: 0 0 auto; }
.study-seg button { flex: 1 1 auto; min-width: 0; height: calc(var(--search-field-height, 26px) - 4px); padding: 0 8px; border: 0; border-radius: calc(var(--shell-control-radius, 6px) - 2px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.study-seg.compact button { flex: 0 0 auto; padding: 0 7px; }
.study-page .study-seg button { flex: 0 0 auto; padding: 0 10px; }
.study-seg button:hover { color: var(--text-color); }
.study-seg button.active { background: var(--background-color, var(--container-color)); color: var(--title-color); box-shadow: 0 0 0 1px var(--border-light); }
.study-seg button:focus-visible, .study-icon-btn:focus-visible, .study-day-label:focus-visible, .study-section-head:focus-visible, .study-dish:focus-visible, .study-card:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.study-day { display: flex; align-items: center; gap: 2px; flex: 1; min-width: 0; }
.study-page .study-day { flex: 1; justify-content: center; }
.study-day-label { flex: 1; min-width: 0; height: var(--search-field-height, 26px); padding: 0 2px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.study-page .study-day-label { flex: 0 1 auto; min-width: 0; padding: 0 10px; }
.study-day-label:hover { background: var(--hover-bg); }
.study-day-label.today { color: var(--accent-color); }
.study-icon-btn { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-tertiary, var(--text-secondary)); cursor: pointer; }
.study-icon-btn:hover { background: var(--hover-bg); color: var(--text-color); }
.study-icon-btn svg { width: 15px; height: 15px; }
.study-icon-btn.spinning svg { animation: study-spin 0.9s linear infinite; }
@keyframes study-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .study-icon-btn.spinning svg { animation: none; } }
.study-list { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 6px 12px; }
.study-page .study-list { padding: 0; }
.study-page-inner { max-width: 1240px; margin: 0 auto; padding: 18px 24px 36px; }
.study-note { padding: 8px 10px; color: var(--text-secondary); font-size: var(--small-font-size); }
.study-page .study-note { padding: 8px 2px; }
.study-note.error { color: var(--tint-red-text, var(--text-secondary)); }
.study-campus { padding: 10px 8px 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
.study-page .study-campus { padding: 22px 2px 4px; }
.study-section + .study-section { margin-top: 2px; }
.study-page .study-section + .study-section { margin-top: 14px; }
.study-section-head { display: grid; grid-template-columns: 16px minmax(0, 1fr) max-content; align-items: center; gap: 4px; width: 100%; min-height: 32px; box-sizing: border-box; padding: 4px 6px 4px 2px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; text-align: left; cursor: pointer; }
.study-page .study-section-head { min-height: 44px; padding: 6px 8px 6px 2px; }
.study-section-head:hover { background: var(--hover-bg); }
.study-section-head svg { width: 12px; height: 12px; color: var(--text-tertiary, var(--text-secondary)); transition: transform 120ms ease; }
.study-section-head[aria-expanded="true"] svg { transform: rotate(90deg); }
@media (prefers-reduced-motion: reduce) { .study-section-head svg { transition: none; } }
.study-section-name { min-width: 0; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-page .study-section-name { font-size: 1.15rem; }
.study-section-meta { color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.study-section-place { grid-column: 2 / 4; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-dishes { display: grid; gap: 1px; padding: 0 0 6px 18px; }
.study-dish { display: grid; gap: 1px; width: 100%; box-sizing: border-box; padding: 5px 6px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; }
.study-dish:hover, .study-dish.open { background: var(--hover-bg); }
.study-dish-top { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
.study-dish-line { flex: 1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.study-dish-price { flex-shrink: 0; color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; }
.study-dish-name { color: var(--title-color); font-weight: 600; overflow-wrap: anywhere; }
.study-dish-description { color: var(--text-secondary); font-size: var(--small-font-size); overflow-wrap: anywhere; }
.study-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
.study-tag { padding: 0 6px; border-radius: 999px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.6; }
.study-tag.vegan, .study-tag.vegetarian, .study-tag.LOW { background: var(--tint-green-bg, var(--hover-bg)); color: var(--tint-green-text, var(--text-secondary)); }
.study-tag.HIGH { background: var(--tint-orange-bg, var(--hover-bg)); color: var(--tint-orange-text, var(--text-secondary)); }
.study-dish-extra { margin-top: 3px; color: var(--text-secondary); font-size: var(--smaller-font-size); }
.study-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; padding: 6px 0 4px 18px; }
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
  .study-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; padding-left: 0; }
  .study-card { flex-direction: row; align-items: stretch; }
  .study-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 112px; }
  .study-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
.study-credit { padding: 10px 8px 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
.study-page .study-credit { padding: 28px 2px 0; }
`

type Shapes = string[]
const CHEVRON: Shapes = ['M9 6l6 6-6 6']
const LEFT: Shapes = ['M15 6l-6 6 6 6']
const RIGHT: Shapes = ['M9 6l6 6-6 6']
const REFRESH: Shapes = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']
const OPEN: Shapes = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const PAGE: Shapes = ['M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z', 'M4 9h16', 'M9 9v11']
const DISH: Shapes = ['M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3', 'M8 3v18', 'M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17']

type State<T> = { data: T | null; error: string; loading: boolean }
type Variant = 'list' | 'cards'

export function registerStudyViews(api: ValleyPluginApi, { t }: { t: (key: string) => string }): void {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>

  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const problem = (error: unknown) => { const key = `error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('error.serviceError') : t(key) }
  const strings = (value: unknown): string[] => Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
  /** Whether an outlet is open: opened or folded by hand, else its default. */
  const isOpen = (preferences: { opened: string[]; folded: string[] }, id: string, fallback: boolean) =>
    preferences.opened.includes(id) ? true : preferences.folded.includes(id) ? false : fallback

  function usePreferences() {
    const [, setTick] = React.useState(0)
    React.useEffect(() => {
      const bump = () => setTick(value => value + 1)
      const offs = [api.ui.onLanguageChanged(bump), api.settings.subscribe(bump)]
      return () => { for (const off of offs) off() }
    }, [])
    const settings = api.settings.get()
    const group = settings.priceGroup
    return {
      language: sourceLanguage(api.ui.language()),
      locale: api.ui.language() || 'en',
      source: (settings.source === 'uzh' ? 'uzh' : 'eth') as Source,
      priceGroup: (group === 'internal' || group === 'external' ? group : 'students') as PriceGroup,
      opened: strings(settings.opened),
      folded: strings(settings.folded)
    }
  }
  type Preferences = ReturnType<typeof usePreferences>

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

  const formatDay = (date: string, locale: string, options: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
  /** "Wed 25" in the sidebar, the full date on the page and in the tooltip. */
  const dayLabel = (date: string, locale: string, variant: Variant) => variant === 'cards'
    ? formatDay(date, locale, { weekday: 'long', day: 'numeric', month: 'long' })
    : `${formatDay(date, locale, { weekday: 'short' })} ${formatDay(date, locale, { day: 'numeric' })}`
  const dayTitle = (date: string, locale: string) => formatDay(date, locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  function tagsOf(dish: Dish) {
    return [
      ...(dish.diet ? [{ key: dish.diet, label: t(`diet.${dish.diet}`) }] : []),
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

  function DishRow({ dish, group }: { dish: Dish; group: PriceGroup }): Node {
    const [open, setOpen] = React.useState(false)
    const price = dish.prices.find(row => row.group === group)
    return h('button', { type: 'button', className: `study-dish${open ? ' open' : ''}`, 'aria-expanded': open, onClick: () => setOpen(!open) },
      h('span', { className: 'study-dish-top' },
        h('span', { className: 'study-dish-line' }, dish.line),
        price ? h('span', { className: 'study-dish-price' }, formatPrice(price.price)) : null),
      h('span', { className: 'study-dish-name' }, dish.name),
      dish.description ? h('span', { className: 'study-dish-description' }, dish.description) : null,
      h(Tags, { dish }),
      ...(open ? detailsOf(dish, dish.prices).map(line => h('span', { key: line, className: 'study-dish-extra' }, line)) : []))
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

  function Section({ id, name, place, open, onToggle, url, children, meta }: { id: string; name: string; place: string; open: boolean; onToggle: () => void; url: string; meta?: string; children?: Node | Node[] | null }): Node {
    const menu = async (event: MouseEvent) => {
      event.preventDefault()
      const choice = await api.ui.openMenu([
        { id: 'page', label: t('openPage'), icon: h(Icon, { shapes: PAGE }) },
        { id: 'website', label: t('openWebsite'), icon: h(Icon, { shapes: OPEN }), enabled: Boolean(url) }
      ], { x: event.clientX, y: event.clientY })
      if (choice === 'page') openPage(false)
      if (choice === 'website' && url) void api.links.open(url)
    }
    return h('div', { className: 'study-section', 'data-location': id },
      h('button', { type: 'button', className: 'study-section-head', 'aria-expanded': open, onClick: onToggle, onContextMenu: menu },
        h(Icon, { shapes: CHEVRON }),
        h('span', { className: 'study-section-name' }, name),
        h('span', { className: 'study-section-meta' }, meta ?? ''),
        place ? h('span', { className: 'study-section-place' }, place) : null),
      open ? children : null)
  }

  const serviceOf = (day: DayMenu | undefined, service: Service) => day?.services.find(row => row.service === service)
  const menuOf = (location: Location, date: string, service: Service) => serviceOf(location.days.find(day => day.date === date), service)

  function Dishes({ location, date, service, group, variant, revision }: { location: Location; date: string; service: Service; group: PriceGroup; variant: Variant; revision: number }): Node {
    const menu = menuOf(location, date, service)
    if (!menu) return h('div', { className: 'study-note' }, t('empty.location'))
    return variant === 'cards'
      ? h('div', { className: 'study-cards' }, menu.dishes.map(dish => h(DishCard, { key: dish.id, dish, group, revision })))
      : h('div', { className: 'study-dishes' }, menu.dishes.map(dish => h(DishRow, { key: dish.id, dish, group })))
  }

  const hours = (location: Location, date: string, service: Service) => {
    const menu = menuOf(location, date, service)
    return menu?.from && menu.to ? `${menu.from}–${menu.to}` : ''
  }

  type ListProps = { date: string; service: Service; revision: number; preferences: Preferences; variant: Variant; toggle: (id: string, open: boolean) => void }

  function EthList({ date, service, revision, preferences, variant, toggle }: ListProps): Node {
    const monday = mondayOf(date)
    const state = useAnswer<Location[]>(`${preferences.language}:${monday}`, revision, fresh => api.backend.call<Location[]>('eth.week', { monday, language: preferences.language, fresh }))
    if (state.error) return h('div', { className: 'study-note error', role: 'alert' }, state.error)
    if (!state.data) return h('div', { className: 'study-note' }, t('loading'))
    const serving = state.data.filter(location => menuOf(location, date, service))
    if (!serving.length) return h('div', { className: 'study-note' }, t(`empty.${service}`))
    return h(React.Fragment, null, serving.map(location => h(Section, {
      key: location.id, id: location.id, name: location.name, place: location.place, url: location.url, meta: hours(location, date, service),
      open: isOpen(preferences, location.id, true), onToggle: () => toggle(location.id, !isOpen(preferences, location.id, true))
    }, h(Dishes, { location, date, service, group: preferences.priceGroup, variant, revision }))))
  }

  function UzhOutlet({ outlet, date, service, revision, preferences, variant, toggle }: ListProps & { outlet: Outlet }): Node {
    const id = `uzh:${outlet.path}`
    const open = isOpen(preferences, id, openByDefault(outlet.name))
    const monday = mondayOf(date)
    const state = useAnswer<Location>(open ? `${preferences.language}:${outlet.path}:${monday}` : null, revision, fresh => api.backend.call<Location>('uzh.week', { path: outlet.path, monday, language: preferences.language, fresh }))
    const location = state.data
    const body = state.error ? h('div', { className: 'study-note error', role: 'alert' }, state.error)
      : !location ? h('div', { className: 'study-note' }, t('loading'))
        : location.days.every(day => !day.services.length) ? h('div', { className: 'study-note' }, t('empty.plan'))
          : h(Dishes, { location, date, service, group: preferences.priceGroup, variant, revision })
    const count = location ? menuOf(location, date, service)?.dishes.length ?? 0 : 0
    return h(Section, {
      id, name: outlet.name, place: location?.place ?? '', url: location?.url ?? `https://app.food2050.ch/${preferences.language}/zfv/${outlet.path}`,
      meta: count ? t('dishes').replace('{count}', String(count)) : '', open, onToggle: () => toggle(id, !open)
    }, body)
  }

  function UzhList(props: ListProps): Node {
    const { preferences, revision } = props
    const state = useAnswer<Outlet[]>(preferences.language, revision, fresh => api.backend.call<Outlet[]>('uzh.outlets', { language: preferences.language, fresh }))
    if (state.error) return h('div', { className: 'study-note error', role: 'alert' }, state.error)
    if (!state.data) return h('div', { className: 'study-note' }, t('loading'))
    const campuses = new Map<string, Outlet[]>()
    for (const outlet of state.data) campuses.set(outlet.campus, [...(campuses.get(outlet.campus) ?? []), outlet])
    return h(React.Fragment, null, [...campuses].map(([campus, outlets]) => h(React.Fragment, { key: campus },
      campus ? h('div', { className: 'study-campus' }, campus) : null,
      outlets.map(outlet => h(UzhOutlet, { key: outlet.path, outlet, ...props })))))
  }

  const openPage = (newTab: boolean) => api.workspace.openMainTab({ newTab })

  /** Day, meal, university and refresh state with the controls that change them. */
  function useControls(variant: Variant) {
    const preferences = usePreferences()
    const [date, setDate] = React.useState(() => today())
    const [service, setService] = React.useState<Service>(() => defaultService())
    const [revision, setRevision] = React.useState(0)
    const [refreshing, setRefreshing] = React.useState(false)
    const source = preferences.source
    const toggle = (id: string, open: boolean) => {
      const opened = preferences.opened.filter(item => item !== id), folded = preferences.folded.filter(item => item !== id)
      void api.settings.set('opened', open ? [...opened, id].slice(-200) : opened)
      void api.settings.set('folded', open ? folded : [...folded, id].slice(-200))
    }
    const refresh = () => {
      setRefreshing(true)
      setRevision(value => value + 1)
      setTimeout(() => setRefreshing(false), 600)
    }
    const seg = <T extends string>(value: T, current: T, label: string, pick: (value: T) => void) =>
      h('button', { key: value, type: 'button', className: value === current ? 'active' : '', 'aria-pressed': value === current, onClick: () => pick(value) }, label)
    const isToday = date === today()
    const universities = h('div', { className: 'study-seg', role: 'group', 'aria-label': t('source.label') },
      seg<Source>('eth', source, t('source.eth'), value => void api.settings.set('source', value)),
      seg<Source>('uzh', source, t('source.uzh'), value => void api.settings.set('source', value)))
    const day = h('div', { className: 'study-day' },
      h('button', { type: 'button', className: 'study-icon-btn', title: t('day.previous'), 'aria-label': t('day.previous'), onClick: () => setDate(addDays(date, -1)) }, h(Icon, { shapes: LEFT })),
      h('button', { type: 'button', className: `study-day-label${isToday ? ' today' : ''}`, title: `${dayTitle(date, preferences.locale)} · ${isToday ? t('day.today') : t('day.backToToday')}`, 'aria-current': isToday ? 'date' : undefined, onClick: () => setDate(today()) }, dayLabel(date, preferences.locale, variant)),
      h('button', { type: 'button', className: 'study-icon-btn', title: t('day.next'), 'aria-label': t('day.next'), onClick: () => setDate(addDays(date, 1)) }, h(Icon, { shapes: RIGHT })))
    const services = h('div', { className: 'study-seg compact', role: 'group', 'aria-label': t('service.label') },
      seg<Service>('lunch', service, t('service.lunch'), setService),
      seg<Service>('dinner', service, t('service.dinner'), setService))
    const refreshButton = h('button', { type: 'button', className: `panel-tool-btn study-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH }))
    const list: ListProps = { date, service, revision, preferences, variant, toggle }
    const body = h(React.Fragment, null,
      source === 'eth' ? h(EthList, list) : h(UzhList, list),
      h('div', { className: 'study-credit' }, t(source === 'eth' ? 'credit.eth' : 'credit.uzh')))
    return { source, universities, day, services, refreshButton, body }
  }

  function Panel(): Node {
    const { universities, day, services, refreshButton, body } = useControls('list')
    return h('div', { className: 'study-panel' },
      h('div', { className: 'panel-header' },
        h('span', { className: 'panel-title' }, t('menu.title')),
        h('div', { className: 'panel-toolbar' },
          refreshButton,
          h('button', { type: 'button', className: 'panel-tool-btn study-icon-btn', title: t('openPage'), 'aria-label': t('openPage'), onClick: (event: MouseEvent) => openPage(api.ui.hasModKey(event)) }, h(Icon, { shapes: PAGE })))),
      h('div', { className: 'study-bar' }, universities),
      h('div', { className: 'study-bar' }, day, services),
      h('div', { className: 'study-list' }, body))
  }

  function Page({ instanceId }: { instanceId?: string }): Node {
    const { source, universities, day, services, refreshButton, body } = useControls('cards')
    React.useEffect(() => { api.workspace.setMainTabTitle(t('menu.title'), instanceId) }, [instanceId, api.ui.language()])
    return h('div', { className: 'study-page' },
      h('div', { className: 'study-bar study-page-head' },
        universities,
        h('span', { className: 'study-spacer' }),
        refreshButton,
        h('button', { type: 'button', className: 'study-icon-btn', title: t('openWebsite'), 'aria-label': t('openWebsite'), onClick: () => void api.links.open(source === 'eth' ? ETH_WEBSITE : UZH_WEBSITE) }, h(Icon, { shapes: OPEN }))),
      h('div', { className: 'study-bar' }, day, services),
      h('div', { className: 'study-list' }, h('div', { className: 'study-page-inner' }, body)))
  }

  api.registerView('study.panel', Panel)
  api.registerView('study.page', Page)
}
