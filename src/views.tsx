/**
 * Poly's two surfaces:
 * - `poly.panel` (left sidebar, an Icon Rail entry): row 1 the shown feature's name and the page button,
 *   row 2 the feature tabs (eLink, Menu plan, Campus map, News, Polybox) drawn like Map's sidebar tabs, then the feature's body:
 *   for the menu plan the campus tags (ETH, Höngg, UZH), the day with Lunch | Dinner and one row per place;
 *   for the campus map the building search, the selected building and the buildings by campus;
 * - `poly.page` (main workspace): one place's menus as picture cards (`instanceId` `place:<id>`),
 *   without an instance every place of the chosen campus, and with `campus` the campus map (2D | 3D).
 * Both share the tab, day, meal, campus, filters, price and selected building through the plugin's settings.
 */
import type { ValleyPluginApi } from '@valley/plugin-sdk'
import { paletteCssContrast, paletteCssValue } from '@valley/plugin-sdk/palette'
import {
  CAMPUSES, addDays, defaultService, dishesOf, formatPrice, hasFilters, priceFor, pricesInOrder, isDate, menuOf, mondayOf, openState, openingOf, placeInstance, placeOf, sourceLanguage, today,
  type Campus, type Dish, type DishDetail, type Filters, type Location, type Outlet, type Price, type PriceGroup, type Service
} from './model'
import { CampusPanelBody } from './campus/Panel'
import { CampusPage } from './campus/Page'
import { isCampusInstance, openCampus } from './campus/store'
import { BUS_ICON, createElinkViews } from './elink/views'
import { isElinkInstance } from './elink/model'
import { NEWS_ICON, createNewsViews } from './news/views'
import { isNewsInstance } from './news/model'
import { POLYBOX_ICON, createPolyboxViews } from './polybox/views'
import { isPolyboxInstance } from './polybox/model'

export const VIEWS_CSS = `
.poly-panel, .poly-page { display: flex; flex-direction: column; height: 100%; min-height: 0; overflow: hidden; }
.poly-page { background: var(--background-color, transparent); container-type: inline-size; }
.poly-bar { display: flex; align-items: center; gap: 6px; height: var(--app-bar-height); box-sizing: border-box; padding: 0 6px; border-bottom: 1px solid var(--border-light); flex-shrink: 0; }
.poly-page .poly-bar { gap: 8px; padding: 0 12px; }
/* The host draws back/forward at the start and its menu at the end of the page's first row. */
.poly-page .poly-bar.poly-page-head { padding-left: calc(var(--plugin-navigation-offset, 60px) + var(--space-2, 6px)); padding-right: calc(var(--plugin-actions-offset, 36px) + var(--space-2, 6px)); }
.poly-spacer { flex: 1; min-width: 0; }
.poly-actions { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.poly-seg { display: flex; flex: 0 0 auto; min-width: 0; gap: 2px; padding: 2px; border-radius: var(--shell-control-radius, 6px); background: var(--hover-bg); }
.poly-seg button { flex: 0 0 auto; height: calc(var(--shell-control-toolbar, 24px) - 4px); padding: 0 7px; border: 0; border-radius: calc(var(--shell-control-radius, 6px) - 2px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); white-space: nowrap; cursor: pointer; }
.poly-page .poly-seg button { height: calc(var(--search-field-height, 26px) - 4px); padding: 0 10px; }
.poly-seg button:hover { color: var(--text-color); }
.poly-panel .poly-bar:not(.poly-tiles) { gap: 2px; }
.poly-panel .poly-bar .poly-seg { margin: 0 2px; }
.poly-panel .poly-bar .poly-seg button { padding: 0 6px; }
.poly-seg button.active { background: var(--background-color, var(--container-color)); color: var(--title-color); box-shadow: 0 0 0 1px var(--border-light); }
.poly-seg button:focus-visible, .poly-icon-btn:focus-visible, .poly-day-label:focus-visible, .poly-place:focus-visible, .poly-card:focus-visible, .poly-tile:focus-visible, .poly-place-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-day { display: flex; align-items: center; gap: 2px; flex: 1; min-width: 0; }
.poly-day-label { flex: 1; min-width: 0; height: var(--search-field-height, 26px); padding: 0 2px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.poly-day-label:hover { background: var(--hover-bg); }
.poly-day-label.today { color: var(--accent-color); }
/* The menu plan's week: Monday to Sunday with their dates between the week chevrons; today in the accent colour, the chosen day filled. */
.poly-week-days { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; flex: 1; min-width: 0; }
.poly-week-day { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-width: 0; height: 32px; padding: 0; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-secondary); font: inherit; line-height: 1; cursor: pointer; }
.poly-week-day:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-week-name { max-width: 100%; overflow: hidden; font-size: var(--smaller-font-size); white-space: nowrap; }
.poly-week-date { color: var(--title-color); font-size: var(--small-font-size); font-weight: 600; font-variant-numeric: tabular-nums; }
.poly-week-day.today, .poly-week-day.today .poly-week-date { color: var(--accent-color); }
.poly-week-day.selected { background: var(--accent-tint-bg); }
.poly-week-day.selected:not(.today) { color: var(--title-color); }
.poly-week-day:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-icon-btn:disabled { opacity: 0.4; cursor: default; background: transparent; }
.poly-groups { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }
.poly-divider { width: 1px; height: 16px; margin: 0 3px; background: var(--border-light); flex-shrink: 0; }
.poly-icon-btn { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--text-secondary); cursor: pointer; }
.poly-icon-btn:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-icon-btn.active { background: var(--accent-tint-bg); color: var(--title-color); }
.poly-icon-btn svg { width: var(--shell-glyph-default, 15px); height: var(--shell-glyph-default, 15px); }
.poly-icon-btn.spinning svg { animation: poly-spin 0.9s linear infinite; }
@keyframes poly-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .poly-icon-btn.spinning svg { animation: none; } }
/* Campus tags: To-Do's smart-list chips (icon tinted in the tag's colour, filled when active) with the 6px corners of Contacts' group tags. */
.poly-tiles { gap: 4px; padding: 0 5px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; }
.poly-tiles::-webkit-scrollbar { display: none; }
.poly-tile { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; box-sizing: border-box; height: 28px; padding: 0 10px; border: 1px solid var(--border-light); border-radius: 6px; background: var(--surface-color-alt); color: var(--text-secondary); font-family: var(--interface-font); font-size: var(--small-font-size); line-height: 1; cursor: pointer; }
.poly-tile:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-tile-icon { display: grid; place-items: center; width: 15px; height: 15px; flex-shrink: 0; color: var(--poly-tile-color, var(--text-tertiary)); }
.poly-tile-icon svg { width: 15px; height: 15px; }
.poly-tile-count { color: var(--text-tertiary); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.poly-tile.active { background: var(--poly-tile-color, var(--accent-color)); border-color: var(--poly-tile-color, var(--accent-color)); color: var(--poly-tile-on, var(--title-color)); }
.poly-tile.active .poly-tile-icon, .poly-tile.active .poly-tile-count { color: inherit; }
.poly-list { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 6px 12px; }
.poly-page .poly-list, .poly-panel .poly-list { padding: 0; }
.poly-page-inner { max-width: 1240px; margin: 0 auto; padding: 18px 24px 36px; }
.poly-note { padding: 8px 10px; color: var(--text-secondary); font-size: var(--small-font-size); }
.poly-page .poly-note { padding: 8px 2px; }
.poly-note.error { color: var(--tint-red-text, var(--text-secondary)); }
.poly-campus { padding: 10px 8px 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
/* Place rows follow Email's message list (full width, no inset or rounding, a hairline between rows) and Contacts' selection (accent tint, accent name). */
.poly-place { display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: baseline; gap: 2px 8px; width: 100%; box-sizing: border-box; margin: 0; padding: 10px 12px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.poly-place:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
/* Each row carries a favourite star at its right edge, outside the row button; filled yellow when it is a favourite. */
.poly-place-item { position: relative; }
.poly-place-item .poly-place { padding-right: 38px; }
.poly-place-item > .poly-star { position: absolute; top: 8px; right: 8px; }
.poly-star { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--text-tertiary, var(--text-secondary)); cursor: pointer; }
.poly-star:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-star svg { width: 15px; height: 15px; }
.poly-star.on, .poly-star.on:hover { color: var(--color-yellow, #e5b33a); }
.poly-star.on svg { fill: currentColor; }
.poly-star:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-place.active { background: var(--accent-tint-bg); }
.poly-place.active .poly-place-name { color: var(--accent-color); }
@media (prefers-reduced-motion: reduce) { .poly-place { transition: none; } }
.poly-panel .poly-note { padding: 10px 12px; }
.poly-panel .poly-credit { padding: 10px 12px 12px; }
.poly-place-name { min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-place-count { color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.poly-place-count.pending { color: var(--text-tertiary, var(--text-secondary)); }
.poly-place-meta { grid-column: 1 / -1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-open { color: var(--tint-green-text, var(--text-secondary)); }
.poly-closed { color: var(--text-secondary); }
/* The page's first bar names the place (or the campus) only; day, meal and filters live in the sidebar. */
.poly-page-title { flex: 1; min-width: 0; margin: 0; color: var(--title-color); font-size: var(--normal-font-size, 1rem); font-weight: 600; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-page-head .poly-bar-balance { width: var(--shell-control-toolbar, 24px); flex-shrink: 0; }
.poly-page-head .poly-bar-balance.double { width: calc(var(--shell-control-toolbar, 24px) * 2 + 8px); }
/* A place's facts: a fixed, centred second bar (37px + 1px line) that never scrolls or wraps; the location gives way first. */
.poly-page .poly-bar.poly-facts { padding: 0; overflow: hidden; }
.poly-facts-inner { display: flex; align-items: center; justify-content: center; gap: 14px; width: 100%; padding: 0 24px; box-sizing: border-box; overflow: hidden; white-space: nowrap; color: var(--text-secondary); font-size: var(--small-font-size); }
.poly-facts-inner > span { flex-shrink: 0; }
.poly-facts-inner > .poly-facts-where { flex-shrink: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.poly-section + .poly-section { margin-top: 22px; }
.poly-place-link { display: flex; align-items: baseline; gap: 10px; width: 100%; padding: 4px 2px 8px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; text-align: left; cursor: pointer; }
.poly-place-link:hover .poly-place-link-name { text-decoration: underline; }
.poly-place-link-name { font-size: 1.15rem; font-weight: 600; }
.poly-place-link-meta { min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* Line and prices share a row; when the line's name does not fit beside the prices, the prices drop to their own row (right-aligned) instead of cutting the name. */
.poly-dish-top { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 8px; min-width: 0; }
.poly-dish-top .poly-dish-price { margin-left: auto; }
.poly-dish-line { flex: 1 1 auto; min-width: 0; max-width: 100%; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-dish-price { flex-shrink: 0; color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; }
.poly-dish-name { color: var(--title-color); font-weight: 600; overflow-wrap: anywhere; }
.poly-dish-description { color: var(--text-secondary); font-size: var(--small-font-size); overflow-wrap: anywhere; }
.poly-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
.poly-tag { padding: 0 6px; border-radius: 999px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.6; }
.poly-tag.vegan, .poly-tag.vegetarian, .poly-tag.glutenFree, .poly-tag.lactoseFree, .poly-tag.LOW { background: var(--tint-green-bg, var(--hover-bg)); color: var(--tint-green-text, var(--text-secondary)); }
.poly-tag.HIGH { background: var(--tint-orange-bg, var(--hover-bg)); color: var(--tint-orange-text, var(--text-secondary)); }
.poly-dish-allergens { margin-top: 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow-wrap: anywhere; }
.poly-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; padding: 2px 0 4px; }
.poly-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; border: 1px solid var(--border-light); border-radius: 8px; background: var(--container-color, transparent); color: var(--text-color); }
.poly-card-image { position: relative; aspect-ratio: 3 / 2; background: var(--hover-bg); display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.poly-card-image svg { width: 30px; height: 30px; opacity: 0.6; }
.poly-card-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.poly-card-body { display: grid; gap: 3px; padding: 10px 12px 12px; }
.poly-card .poly-dish-name { font-size: 1rem; }
.poly-card .poly-dish-description { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
/* A narrow page lays each card out as a row: picture left, text right. */
@container (max-width: 560px) {
  .poly-page-inner { padding: 10px 12px 28px; }
  .poly-facts-inner { padding: 0 12px; }
  .poly-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .poly-card { flex-direction: row; align-items: stretch; }
  .poly-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 112px; }
  .poly-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
.poly-credit { padding: 10px 8px 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
.poly-page .poly-credit { padding: 28px 2px 0; }
`

type Shapes = string[]
const LEFT: Shapes = ['M15 6l-6 6 6 6']
const RIGHT: Shapes = ['M9 6l6 6-6 6']
const REFRESH: Shapes = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']
const OPEN: Shapes = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const TAB: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M4 9h16', 'M10 4v5']
const DISH: Shapes = ['M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3', 'M8 3v18', 'M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17']
/** Food filter: a salad bowl with a leaf. */
const FILTER: Shapes = ['M3.5 11.5h17a8.5 6.5 0 0 1-17 0z', 'M9 20.5h6', 'M12 11.5c0-3.6 2.1-6.2 6.3-6.8 0 3.9-2.5 6.4-6.3 6.8', 'M12 11.5l3.2-3.2', 'M9.6 11.5c-.3-2.1-1.7-3.5-3.8-3.8']
/** Whose prices: a graduation cap for students, a briefcase for staff, a person for guests. */
const GROUP_ICONS: Record<PriceGroup, Shapes> = {
  students: ['M2.5 9.5L12 5.5l9.5 4-9.5 4z', 'M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4', 'M21.5 9.5v5'],
  internal: ['M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z', 'M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2', 'M3 13h18'],
  external: ['M8.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0', 'M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6']
}
const NO = 'M4 4l16 16'
/** The diet filters: a leaf, a sprout, crossed-out wheat, a crossed-out milk carton. */
const FILTER_ICONS: Record<keyof Filters, Shapes> = {
  vegetarian: ['M5 19c0-8 5-13.5 14-14 0 9-5 14-13 14', 'M5 19l7.5-7.5'],
  vegan: ['M12 20v-8', 'M12 12c0-3.3-2.7-6-6-6H4v1c0 3.3 2.7 6 6 6h2', 'M12 10c0-3.3 2.7-6 6-6h2v1c0 3.3-2.7 6-6 6h-2'],
  glutenFree: ['M12 21V8', 'M12 8c-1.7-.8-2.8-2.4-2.8-4.5 1.7.8 2.8 2.4 2.8 4.5z', 'M12 8c1.7-.8 2.8-2.4 2.8-4.5-1.7.8-2.8 2.4-2.8 4.5z', 'M12 13.5c-1.9-.6-3.3-2.1-3.5-4.2 1.9.6 3.3 2.1 3.5 4.2z', 'M12 13.5c1.9-.6 3.3-2.1 3.5-4.2-1.9.6-3.3 2.1-3.5 4.2z', NO],
  lactoseFree: ['M8.5 3h7', 'M9 3v3L7 9.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5L15 6V3', 'M7 12.5h10', NO]
}
/**
 * ETH Zentrum: the main building's front from the Polyterrasse (26 Nov: long, low wings with their windows and
 * a wider centre with three arched windows, the door and the flagpole); Höngg: the hill; UZH: the main building's
 * round tower with its dome and door between the hipped wings. Drawn sparse so they stay legible at 15px.
 */
const CAMPUS_ICONS: Record<Campus, Shapes> = {
  eth: ['M1 18.5h22', 'M1.75 18.5v-5.5h5.75', 'M16.5 13h5.75v5.5', 'M7.5 18.5V10h9v8.5', 'M6.5 10h11', 'M12 10V6', 'M10.5 18.5v-2a1.5 1.5 0 0 1 3 0v2',
    'M9.75 12.75h.01', 'M12 12.75h.01', 'M14.25 12.75h.01', 'M3.6 15.75h.01', 'M5.75 15.75h.01', 'M18.25 15.75h.01', 'M20.4 15.75h.01'],
  hoengg: ['M3 19h18', 'M3 19l6-9 4 5 3-3 5 7', 'M15 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0'],
  uzh: ['M2 20h20', 'M3 20v-6l1.5-2h4', 'M15.5 12h4l1.5 2v6', 'M8.5 20v-9h7v9', 'M8.5 11a3.5 3.5 0 0 1 7 0', 'M12 7.5V6', 'M10.5 20v-2.5a1.5 1.5 0 0 1 3 0V20', 'M5.5 16.5h.01', 'M18.5 16.5h.01']
}
/**
 * The sidebar's feature tabs (row 2): the eLink shuttle (a bus), the menu plan (fork and knife), the campus
 * map (ETH's main building, 26 Nov), ETH News (a newspaper, 27 Nov) and Polybox (two clouds, 27 Nov), saved in the hidden `mode` setting. 2.0.0 saved the campus map's
 * predecessor, Zürich 3D, as `city`. Their order is the user's (26 Nov): the hidden `tabOrder` setting.
 */
export type Mode = 'elink' | 'menu' | 'campus' | 'news' | 'polybox'
export const MODES: Mode[] = ['elink', 'menu', 'campus', 'news', 'polybox']
const MODE_ICONS: Record<Mode, Shapes> = { elink: BUS_ICON, menu: DISH, campus: CAMPUS_ICONS.eth, news: NEWS_ICON, polybox: POLYBOX_ICON }
/** The saved tab order: every mode once, unknown or repeated entries dropped, missing ones appended in the default order. */
export function tabOrderOf(value: unknown): Mode[] {
  const saved = Array.isArray(value) ? value.filter((item): item is Mode => MODES.includes(item as Mode)) : []
  const order = [...new Set(saved)]
  return [...order, ...MODES.filter(mode => !order.includes(mode))]
}
/** `order` with `mode` moved to `index`. */
export function moveTab(order: readonly Mode[], mode: Mode, index: number): Mode[] {
  const rest = order.filter(item => item !== mode)
  rest.splice(Math.max(0, Math.min(index, rest.length)), 0, mode)
  return rest
}
export const modeOf = (value: unknown): Mode => value === 'elink' || value === 'news' || value === 'polybox' ? value : value === 'campus' || value === 'city' ? 'campus' : 'menu'
const STAR: Shapes = ['M12 3.6l2.6 5.25 5.8.85-4.2 4.1 1 5.8L12 16.85 6.8 19.6l1-5.8-4.2-4.1 5.8-.85z']
/** The tags of row 2: Favorites first (shown once a place is starred), then the campuses. */
type Tag = 'favorites' | Campus
const TAGS: Tag[] = ['favorites', ...CAMPUSES]
const TAG_ICONS: Record<Tag, Shapes> = { favorites: STAR, ...CAMPUS_ICONS }
const TAG_COLORS: Record<Tag, string> = { favorites: 'palette:yellow', eth: 'palette:primary-blue', hoengg: 'palette:green', uzh: 'palette:violet' }
/** The diet filters in the menu's two groups: what the dish is, then what it leaves out. */
/** Whose prices the cards show: every price, or one group's. */
type PriceShown = 'all' | PriceGroup
const PRICE_CHOICES: PriceShown[] = ['all', 'students', 'internal', 'external']
const FILTER_KEYS = [['vegetarian', 'onlyVegetarian'], ['vegan', 'onlyVegan'], ['glutenFree', 'onlyGlutenFree'], ['lactoseFree', 'onlyLactoseFree']] as const

type State<T> = { data: T | null; error: string; loading: boolean }
type Day = { date: string; service: Service }

export function registerPolyViews(api: ValleyPluginApi, { t }: { t: (key: string) => string }): void {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>

  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const problem = (error: unknown) => { const key = `error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('error.serviceError') : t(key) }
  const fill = (template: string, values: Record<string, string | number>) => Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template)
  const strings = (value: unknown): string[] => Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
  const menusLabel = (count: number) => count === 1 ? t('menus.one') : fill(t('menus.other'), { count })

  /** The shared day: a stored day before this week's Monday falls back to today and the meal of the hour. */
  function dayOf(value: unknown): Day {
    const stored = value && typeof value === 'object' ? value as Partial<Day> : {}
    const now = today()
    if (!isDate(stored.date) || stored.date < mondayOf(now)) return { date: now, service: defaultService() }
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
    return {
      language: sourceLanguage(api.ui.language()),
      locale: api.ui.language() || 'en',
      mode: modeOf(settings.mode),
      tabOrder: tabOrderOf(settings.tabOrder),
      campus: (TAGS.includes(settings.campus as Tag) ? settings.campus : 'hoengg') as Tag,
      favorites: strings(settings.favorites),
      prices: (PRICE_CHOICES.includes(settings.prices as PriceShown) ? settings.prices : 'all') as PriceShown,
      filters: { vegetarian: settings.onlyVegetarian === true, vegan: settings.onlyVegan === true, glutenFree: settings.onlyGlutenFree === true, lactoseFree: settings.onlyLactoseFree === true } as Filters,
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
      ...(dish.lactose === false ? [{ key: 'lactoseFree', label: t('filter.lactoseFree') }] : []),
      ...dish.classes.map(label => ({ key: '', label })),
      ...(dish.climate ? [{ key: dish.climate, label: t(`climate.${dish.climate}`) }] : [])
    ]
  }
  /**
   * Every price on one line, students to guests ("CHF 7.90 / 10.90 / 13.90"), or only the chosen
   * group's price (its own, else a shared price covering it); the tooltip names the groups.
   */
  function priceLine(prices: Price[], shown: PriceShown) {
    const own = shown === 'all' ? undefined : priceFor(prices, shown)
    const ordered = shown === 'all' ? pricesInOrder(prices) : own ? [own] : []
    return {
      short: ordered.length ? `CHF ${ordered.map(row => row.price.toFixed(2)).join(' / ')}` : '',
      long: ordered.map(row => `${t(`price.${row.group}`)} ${formatPrice(row.price)}`).join(' · ')
    }
  }
  const Tags = ({ dish }: { dish: Dish }): Node | null => {
    const tags = tagsOf(dish)
    return tags.length ? h('span', { className: 'poly-tags' }, tags.map(tag => h('span', { key: `${tag.key}:${tag.label}`, className: `poly-tag ${tag.key}` }, tag.label))) : null
  }

  /**
   * A dish card, one compact form with everything on it: picture (read once the card is on screen),
   * line and all prices, name, description, allergens, then the tags. For UZH the picture and prices
   * come from the dish's own page.
   */
  function DishCard({ dish, shown, revision }: { dish: Dish; shown: PriceShown; revision: number }): Node {
    const ref = React.useRef<HTMLDivElement>(null)
    const visible = useVisible(ref)
    const detail = useAnswer<DishDetail>(visible && dish.detail ? dish.detail : null, revision, fresh => api.backend.call<DishDetail>('uzh.dish', { url: dish.detail, fresh }))
    const source = dish.image || detail.data?.image || ''
    const picture = useAnswer<string>(visible && source ? source : null, 0, () => api.backend.call<string>('image', { url: source }))
    const prices = dish.prices.length ? dish.prices : detail.data?.prices ?? []
    const price = priceLine(prices, shown)
    return h('div', { ref, className: 'poly-card', 'data-dish': dish.id },
      h('span', { className: 'poly-card-image' },
        h(Icon, { shapes: DISH }),
        picture.data ? h('img', { src: picture.data, alt: dish.name, draggable: false }) : null),
      h('span', { className: 'poly-card-body' },
        h('span', { className: 'poly-dish-top' },
          h('span', { className: 'poly-dish-line' }, dish.line),
          price.short ? h('span', { className: 'poly-dish-price', title: price.long, 'aria-label': price.long }, price.short) : null),
        h('span', { className: 'poly-dish-name' }, dish.name),
        dish.description ? h('span', { className: 'poly-dish-description' }, dish.description) : null,
        h('span', { className: 'poly-dish-allergens' }, dish.allergens.length ? `${t('allergens')}: ${dish.allergens.join(', ')}` : t('allergens.none')),
        h(Tags, { dish })))
  }

  /** "Open now · 11:00–14:00" today, the hours alone on another day; null without published hours. */
  function OpeningLabel({ location, date, service }: { location: Location; date: string; service: Service }): Node | null {
    const hours = openingOf(location, date, service)
    if (!hours) return null
    const range = `${hours.from}–${hours.to}`
    const state = openState(hours, date)
    if (state === 'open') return h('span', { className: 'poly-open' }, fill(t('hours.openNow'), { hours: range }))
    if (state === 'closed') return h('span', { className: 'poly-closed' }, fill(t('hours.closed'), { hours: range }))
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

  /** Whose prices the cards show: one icon per group; the active group's again shows every price. */
  function PriceGroups({ preferences }: { preferences: Preferences }): Node {
    return h('div', { className: 'poly-groups', role: 'group', 'aria-label': t('prices') },
      ...(['students', 'internal', 'external'] as PriceGroup[]).map(group => {
        const active = preferences.prices === group
        const label = `${t('prices')} · ${t(`price.${group}`)}`
        return h('button', { key: group, type: 'button', className: `poly-icon-btn${active ? ' active' : ''}`, title: label, 'aria-label': label, 'aria-pressed': active, onClick: () => void api.settings.set('prices', active ? 'all' : group) }, h(Icon, { shapes: GROUP_ICONS[group] }))
      }))
  }

  /** The diet filters, as a header filter menu. */
  function FilterButton({ preferences }: { preferences: Preferences }): Node {
    const active = hasFilters(preferences.filters)
    const pick = async (event: MouseEvent) => {
      const choice = await api.ui.openMenu([
        ...FILTER_KEYS.flatMap(([name], index) => [
          ...(index === 2 ? [{ type: 'separator' as const }] : []),
          { id: name, type: 'checkbox' as const, label: t(`filter.${name}`), icon: h(Icon, { shapes: FILTER_ICONS[name] }), checked: preferences.filters[name] }
        ]),
        ...(active ? [{ type: 'separator' as const }, { id: 'clear', label: t('filter.clear') }] : [])
      ], { anchor: event.currentTarget as HTMLElement, align: 'end' })
      if (!choice) return
      if (choice === 'clear') { for (const [, key] of FILTER_KEYS) void api.settings.set(key, false); return }
      const entry = FILTER_KEYS.find(([name]) => name === choice)
      if (entry) void api.settings.set(entry[1], !preferences.filters[entry[0]])
    }
    const label = active ? `${t('filter')} · ${FILTER_KEYS.filter(([name]) => preferences.filters[name]).map(([name]) => t(`filter.${name}`)).join(', ')}` : t('filter')
    return h('button', { type: 'button', className: `poly-icon-btn${active ? ' active' : ''}`, title: label, 'aria-label': label, 'aria-haspopup': 'menu', onClick: pick }, h(Icon, { shapes: FILTER }))
  }

  const seg = <T extends string>(value: T, current: T, label: string, pick: (value: T) => void) =>
    h('button', { key: value, type: 'button', className: value === current ? 'active' : '', 'aria-pressed': value === current, onClick: () => pick(value) }, label)
  const Services = ({ preferences }: { preferences: Preferences }): Node => h('div', { className: 'poly-seg', role: 'group', 'aria-label': t('service.label') },
    seg<Service>('lunch', preferences.service, t('service.lunch'), service => setDay({ date: preferences.date, service })),
    seg<Service>('dinner', preferences.service, t('service.dinner'), service => setDay({ date: preferences.date, service })))
  /** The week from Monday to Sunday with its dates; the chevrons move a week, never before this one. */
  function WeekNav({ preferences }: { preferences: Preferences }): Node {
    const { date, service, locale } = preferences
    const now = today()
    const monday = mondayOf(date)
    const first = monday <= mondayOf(now)
    return h('div', { className: 'poly-day' },
      h('button', { type: 'button', className: 'poly-icon-btn', title: t('week.previous'), 'aria-label': t('week.previous'), disabled: first, onClick: () => { const back = addDays(date, -7); setDay({ date: back < now ? now : back, service }) } }, h(Icon, { shapes: LEFT })),
      h('div', { className: 'poly-week-days', role: 'group', 'aria-label': t('week.label') },
        ...Array.from({ length: 7 }, (_, index) => {
          const day = addDays(monday, index)
          const isToday = day === now
          return h('button', {
            key: day, type: 'button', className: `poly-week-day${isToday ? ' today' : ''}${day === date ? ' selected' : ''}`,
            title: isToday ? `${dayTitle(day, locale)} · ${t('day.today')}` : dayTitle(day, locale),
            'aria-label': dayTitle(day, locale), 'aria-pressed': day === date, 'aria-current': isToday ? 'date' : undefined,
            onClick: () => setDay({ date: day, service })
          }, h('span', { className: 'poly-week-name' }, formatDay(day, locale, { weekday: 'short' })), h('span', { className: 'poly-week-date' }, formatDay(day, locale, { day: 'numeric' })))
        })),
      h('button', { type: 'button', className: 'poly-icon-btn', title: t('week.next'), 'aria-label': t('week.next'), onClick: () => setDay({ date: addDays(date, 7), service }) }, h(Icon, { shapes: RIGHT })))
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
    const favorites = [...ethPlaces, ...uzhPlaces].filter(row => preferences.favorites.includes(row.id)).sort((a, b) => a.name.localeCompare(b.name, preferences.locale))
    const byTag: Record<Tag, Location[]> = { favorites, eth: ethPlaces.filter(row => row.campus === 'eth'), hoengg: ethPlaces.filter(row => row.campus === 'hoengg'), uzh: uzhPlaces }
    const count = (location: Location) => dishesOf(location, date, service, filters).length
    const ethPending = eth.loading && !eth.data
    const pending: Record<Tag, boolean> = { favorites: ethPending || uzh.pending, eth: ethPending, hoengg: ethPending, uzh: uzh.pending }
    /** Favorites list what has loaded; an unreachable service shows on its own campus tag. */
    const error: Record<Tag, string> = { favorites: '', eth: eth.error, hoengg: eth.error, uzh: uzh.outlets.error }
    return { byTag, count, pending, error, hasFavorites: preferences.favorites.length > 0 }
  }
  type Places = ReturnType<typeof usePlaces>

  /**
   * The tags shown: Favorites while any place is starred, each campus while it has places serving the
   * meal that day, else the chosen one alone; the active tag is the chosen one when shown.
   */
  function campusTags(places: Places, chosen: Tag) {
    const shown = TAGS.filter(tag => tag === 'favorites' ? places.hasFavorites : places.pending[tag] || places.byTag[tag].length > 0)
    const visible = shown.length ? shown : [chosen]
    return { visible, active: visible.includes(chosen) ? chosen : visible[0] }
  }

  function Tiles({ places, visible, active }: { places: Places; visible: Tag[]; active: Tag }): Node {
    return h('nav', { className: 'poly-bar poly-tiles', 'aria-label': t('campus.label') }, visible.map(campus => {
      const count = places.byTag[campus].filter(location => places.count(location) > 0).length
      const label = t(`campus.${campus}`)
      return h('button', {
        key: campus, type: 'button', className: `poly-tile${campus === active ? ' active' : ''}`, 'aria-pressed': campus === active,
        title: t(`campus.${campus}.title`), 'aria-label': `${t(`campus.${campus}.title`)} ${count}`,
        style: { '--poly-tile-color': paletteCssValue(TAG_COLORS[campus]), '--poly-tile-on': paletteCssContrast(TAG_COLORS[campus]) } as Record<string, string>,
        onClick: () => void api.settings.set('campus', campus)
      },
      h('span', { className: 'poly-tile-icon' }, h(Icon, { shapes: TAG_ICONS[campus] })),
      h('span', null, label),
      h('span', { className: 'poly-tile-count' }, places.pending[campus] && !count ? '…' : String(count)))
    }))
  }

  /** The `instanceId` of this plugin's page in the focused workspace tab, followed live. */
  function useActiveInstance(): string | undefined {
    const read = () => { const tab = api.getState().activePluginTab; return tab?.pluginId === api.pluginId ? tab.instanceId : undefined }
    const [instance, setInstance] = React.useState(read)
    React.useEffect(() => api.subscribe(() => setInstance(read())), [])
    return instance
  }

  const toggleFavorite = (preferences: Preferences, id: string) => void api.settings.set('favorites',
    preferences.favorites.includes(id) ? preferences.favorites.filter(item => item !== id) : [...preferences.favorites, id].slice(-200))

  /** The favourite star of a place: outlined, filled yellow while the place is a favourite. */
  function Star({ location, preferences }: { location: Location; preferences: Preferences }): Node {
    const on = preferences.favorites.includes(location.id)
    const label = fill(t(on ? 'favorite.remove' : 'favorite.add'), { name: location.name })
    return h('button', { type: 'button', className: `poly-star${on ? ' on' : ''}`, 'aria-pressed': on, title: label, 'aria-label': label, onClick: () => toggleFavorite(preferences, location.id) }, h(Icon, { shapes: STAR }))
  }

  function PlaceRow({ location, preferences, count, active, tag, refresh }: { location: Location; preferences: Preferences; count: number; active: boolean; tag: Tag; refresh: () => void }): Node {
    const opening = h(OpeningLabel, { location, date: preferences.date, service: preferences.service })
    const place = [tag === 'favorites' && location.source === 'eth' ? t(`campus.${location.campus}`) : '', where(location)].filter(Boolean).join(' · ')
    return h('div', { className: 'poly-place-item' }, h('button', {
      type: 'button', className: `poly-place${active ? ' active' : ''}`, 'data-place': location.id, 'aria-current': active ? 'page' : undefined,
      onClick: (event: MouseEvent) => openPlace(location, api.ui.hasModKey(event)),
      onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openPlace(location, true) } },
      onContextMenu: (event: MouseEvent) => void placeMenu(event, location, refresh)
    },
    h('span', { className: 'poly-place-name' }, location.name),
    h('span', { className: 'poly-place-count' }, menusLabel(count)),
    h('span', { className: 'poly-place-meta' }, place, place && openingOf(location, preferences.date, preferences.service) ? ' · ' : null, opening)),
    h(Star, { location, preferences }))
  }

  /** The note under a tag's list: still loading, nothing after the filters, or nothing that day. */
  function listNote(places: Places, tag: Tag, listed: Location[], preferences: Preferences) {
    if (places.pending[tag] && !listed.length) return t(tag === 'uzh' ? 'loading.uzh' : 'loading')
    if (listed.length) return places.pending[tag] ? t('loading.uzh') : ''
    if (places.byTag[tag].length) return t('empty.filtered')
    return t(tag === 'favorites' ? 'empty.favorites' : `empty.${preferences.service}`)
  }

  function PlaceList({ places, campus, preferences, refresh }: { places: Places; campus: Tag; preferences: Preferences; refresh: () => void }): Node {
    const open = useActiveInstance()
    if (places.error[campus]) return h('div', { className: 'poly-note error', role: 'alert' }, places.error[campus])
    const listed = places.byTag[campus].filter(location => places.count(location) > 0)
    const rows = listed.map(location => h(PlaceRow, { key: location.id, location, preferences, count: places.count(location), active: open === placeInstance(location.id), tag: campus, refresh }))
    const note = listNote(places, campus, listed, preferences)
    return h(React.Fragment, null, ...rows, note ? h('div', { className: 'poly-note' }, note) : null)
  }

  const modeTitle = (mode: Mode) => t(mode === 'elink' ? 'elink.title' : mode === 'campus' ? 'campusMap.title' : mode === 'news' ? 'news.title' : mode === 'polybox' ? 'polybox.title' : 'menu.title')
  const elink = createElinkViews(api, t)
  const news = createNewsViews(api, t)
  const polybox = createPolyboxViews(api, t)

  /**
   * Row 2: the feature tabs, like Map's sidebar tab row (arrow keys, Home and End move between them). They are
   * reordered by dragging one sideways (it follows the pointer, the others make room, the order is saved on
   * release) or with Option/Alt + arrow keys on the focused tab.
   */
  function Tabs({ preferences }: { preferences: Preferences }): Node {
    const [drag, setDrag] = React.useState<{ mode: Mode; order: Mode[]; offset: number } | null>(null)
    const dragged = React.useRef(false)
    const order = drag?.order ?? preferences.tabOrder
    const save = (next: Mode[]) => { if (next.join() !== preferences.tabOrder.join()) void api.settings.set('tabOrder', next) }
    const startDrag = (event: PointerEvent, mode: Mode) => {
      if (event.button !== 0) return
      const button = event.currentTarget as HTMLElement
      const row = button.parentElement
      if (!row) return
      const startX = event.clientX
      const width = button.getBoundingClientRect().width + (parseFloat(getComputedStyle(row).columnGap) || 0)
      const from = preferences.tabOrder.indexOf(mode)
      let current: Mode[] = preferences.tabOrder
      let moving = false
      dragged.current = false
      const view = button.ownerDocument.defaultView ?? window
      const move = (e: PointerEvent) => {
        const dx = e.clientX - startX
        if (!moving && Math.abs(dx) < 4) return
        if (!moving) { moving = true; dragged.current = true; button.setPointerCapture?.(e.pointerId) }
        const index = Math.max(0, Math.min(MODES.length - 1, from + Math.round(dx / width)))
        current = moveTab(preferences.tabOrder, mode, index)
        setDrag({ mode, order: current, offset: dx - (current.indexOf(mode) - from) * width })
      }
      const end = () => {
        view.removeEventListener('pointermove', move)
        view.removeEventListener('pointerup', end)
        view.removeEventListener('pointercancel', end)
        setDrag(null)
        if (moving) save(current)
      }
      view.addEventListener('pointermove', move)
      view.addEventListener('pointerup', end)
      view.addEventListener('pointercancel', end)
    }
    return h('div', { className: 'poly-tabs', role: 'tablist', 'aria-label': t('mode.label') },
      order.map((mode, index) => h('button', {
        key: mode, type: 'button', role: 'tab', className: `poly-tab ${mode === preferences.mode ? 'active' : ''} ${drag?.mode === mode ? 'dragging' : ''}`, 'aria-selected': mode === preferences.mode,
        tabIndex: mode === preferences.mode ? 0 : -1, title: modeTitle(mode), 'aria-label': modeTitle(mode), 'data-mode': mode,
        style: drag?.mode === mode ? { transform: `translateX(${drag.offset}px)` } : undefined,
        onPointerDown: (event: PointerEvent) => startDrag(event, mode),
        onClick: () => { if (dragged.current) { dragged.current = false; return } void api.settings.set('mode', mode) },
        onKeyDown: (event: KeyboardEvent) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
          event.preventDefault()
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? order.length - 1 : event.altKey ? Math.max(0, Math.min(order.length - 1, index + (event.key === 'ArrowLeft' ? -1 : 1))) : (index + (event.key === 'ArrowLeft' ? -1 : 1) + order.length) % order.length
          const target = event.currentTarget as HTMLElement
          if (event.altKey) {
            save(moveTab(order, mode, next))
            // The moved tab keeps its focus once the row has re-rendered in the new order.
            target.ownerDocument.defaultView?.requestAnimationFrame(() => (target.parentElement?.querySelector(`[data-mode="${mode}"]`) as HTMLElement | null)?.focus())
            return
          }
          void api.settings.set('mode', order[next])
          ;(target.parentElement?.children[next] as HTMLElement | undefined)?.focus()
        }
      }, h(Icon, { shapes: MODE_ICONS[mode] }))))
  }

  /** Row 1: the shown feature's name and the page button, which opens that feature's page. */
  function PanelHeader({ preferences }: { preferences: Preferences }): Node {
    const mode = preferences.mode
    const open = (newTab: boolean) => mode === 'elink' ? elink.openElink(newTab) : mode === 'campus' ? openCampus(t('campusMap.title'), newTab) : mode === 'news' ? news.openNews(newTab) : mode === 'polybox' ? polybox.openPolybox(newTab) : api.workspace.openMainTab({ newTab })
    const label = t(mode === 'elink' ? 'elink.openPage' : mode === 'campus' ? 'campusMap.openPage' : mode === 'news' ? 'news.openPage' : mode === 'polybox' ? 'polybox.openPage' : 'openPage')
    return h('div', { className: 'panel-header' },
      h('span', { className: 'panel-title' }, modeTitle(preferences.mode)),
      h('div', { className: 'poly-actions' },
        h('button', {
          type: 'button', className: 'plugin-open-page', title: label, 'aria-label': label,
          onClick: (event: MouseEvent) => open(api.ui.hasModKey(event)),
          onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); open(true) } }
        })))
  }

  function MenuPanel({ preferences }: { preferences: Preferences }): Node {
    const { revision, refresh } = useRefresh()
    const places = usePlaces(preferences, revision)
    const { visible, active } = campusTags(places, preferences.campus)
    return h(React.Fragment, null,
      h(Tiles, { places, visible, active }),
      h('div', { className: 'poly-bar poly-week' }, h(WeekNav, { preferences })),
      h('div', { className: 'poly-bar' }, h(Services, { preferences }), h('div', { className: 'poly-spacer' }), h(PriceGroups, { preferences }), h('div', { className: 'poly-divider', 'aria-hidden': true }), h(FilterButton, { preferences })),
      h('div', { className: 'poly-list' },
        h(PlaceList, { places, campus: active, preferences, refresh }),
        h('div', { className: 'poly-credit' }, t(active === 'uzh' ? 'credit.uzh' : active === 'favorites' ? 'credit.both' : 'credit.eth'))))
  }

  function Panel(): Node {
    const preferences = usePreferences()
    // 2.0.0 saved the 3D tab as `city`; it is the campus map now.
    React.useEffect(() => { if (api.settings.get().mode === 'city') void api.settings.set('mode', 'campus') }, [])
    return h('div', { className: 'poly-panel' },
      h(PanelHeader, { preferences }),
      h(Tabs, { preferences }),
      preferences.mode === 'elink' ? h(elink.ElinkPanelBody, null) : preferences.mode === 'campus' ? h(CampusPanelBody, null) : preferences.mode === 'news' ? h(news.NewsPanelBody, null) : preferences.mode === 'polybox' ? h(polybox.PolyboxPanelBody, null) : h(MenuPanel, { preferences }))
  }

  function Cards({ location, preferences, revision }: { location: Location; preferences: Preferences; revision: number }): Node {
    const dishes = dishesOf(location, preferences.date, preferences.service, preferences.filters)
    if (!dishes.length) return h('div', { className: 'poly-note' }, menuOf(location, preferences.date, preferences.service) ? t('empty.filtered') : t('empty.location'))
    return h('div', { className: 'poly-cards' }, dishes.map(dish => h(DishCard, { key: dish.id, dish, shown: preferences.prices, revision })))
  }

  function PlaceFacts({ location, preferences }: { location: Location; preferences: Preferences }): Node {
    const menu = menuOf(location, preferences.date, preferences.service)
    const count = dishesOf(location, preferences.date, preferences.service, preferences.filters).length
    return h('div', { className: 'poly-facts-inner' },
      where(location) ? h('span', { className: 'poly-facts-where', title: where(location) }, where(location)) : null,
      h(OpeningLabel, { location, date: preferences.date, service: preferences.service }),
      menu?.from && menu.to ? h('span', null, fill(t(`service.time.${preferences.service}`), { hours: `${menu.from}–${menu.to}` })) : null,
      menu ? h('span', null, menusLabel(count)) : null)
  }

  /** The page's scrolling body below its fixed bars. */
  const scroll = (...children: (Node | null)[]): Node => h('div', { className: 'poly-list' }, h('div', { className: 'poly-page-inner' }, ...children))

  /** One place's page: a fixed bar with its location and hours, then its menus as cards; its name stands in the page's first bar. */
  function PlaceBody({ place, preferences, revision, onTitle, onLocation }: { place: NonNullable<ReturnType<typeof placeOf>>; preferences: Preferences; revision: number; onTitle: (title: string) => void; onLocation: (location: Location | null) => void }): Node {
    const monday = mondayOf(preferences.date)
    const eth = useEthWeek(preferences, revision, place.source === 'eth')
    const uzh = useAnswer<Location>(place.source === 'uzh' ? `${preferences.language}:${place.key}:${monday}` : null, revision,
      fresh => api.backend.call<Location>('uzh.week', { path: place.key, monday, language: preferences.language, fresh }))
    const state = place.source === 'eth' ? eth : uzh
    const location = place.source === 'eth' ? eth.data?.find(row => row.id === place.id) ?? null : uzh.data
    React.useEffect(() => { if (location) onTitle(location.name); onLocation(location) }, [location])
    const facts = h('div', { className: 'poly-bar poly-facts' }, location ? h(PlaceFacts, { location, preferences }) : null)
    if (state.error) return h(React.Fragment, null, facts, scroll(h('div', { className: 'poly-note error', role: 'alert' }, state.error)))
    if (!location) return h(React.Fragment, null, facts, scroll(h('div', { className: 'poly-note' }, state.loading ? t('loading') : t('error.notFound'))))
    return h(React.Fragment, null, facts, scroll(
      h(Cards, { location, preferences, revision }),
      h('div', { className: 'poly-credit' }, t(location.source === 'uzh' ? 'credit.uzh' : 'credit.eth'))))
  }

  /** Without a place: every place of the chosen campus, each heading opening its own page. */
  function OverviewBody({ preferences, revision, refresh, onTitle }: { preferences: Preferences; revision: number; refresh: () => void; onTitle: (title: string) => void }): Node {
    const places = usePlaces(preferences, revision)
    const { active } = campusTags(places, preferences.campus)
    const heading = t(`campus.${active}.title`)
    React.useEffect(() => { onTitle(heading) }, [heading])
    if (places.error[active]) return scroll(h('div', { className: 'poly-note error', role: 'alert' }, places.error[active]))
    const listed = places.byTag[active].filter(location => places.count(location) > 0)
    return scroll(
      ...listed.map(location => h('section', { key: location.id, className: 'poly-section', 'data-place': location.id },
        h('button', {
          type: 'button', className: 'poly-place-link',
          onClick: (event: MouseEvent) => openPlace(location, api.ui.hasModKey(event)),
          onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openPlace(location, true) } },
          onContextMenu: (event: MouseEvent) => void placeMenu(event, location, refresh)
        }, h('span', { className: 'poly-place-link-name' }, location.name), h('span', { className: 'poly-place-link-meta' }, where(location))),
        h(Cards, { location, preferences, revision }))),
      listNote(places, active, listed, preferences) ? h('div', { className: 'poly-note' }, listNote(places, active, listed, preferences)) : null,
      h('div', { className: 'poly-credit' }, t(active === 'uzh' ? 'credit.uzh' : active === 'favorites' ? 'credit.both' : 'credit.eth')))
  }

  function MenuPage({ instanceId }: { instanceId?: string }): Node {
    const preferences = usePreferences()
    const { revision, refreshing, refresh } = useRefresh()
    const place = placeOf(instanceId)
    const [title, setTitle] = React.useState('')
    const [location, setLocation] = React.useState<Location | null>(null)
    React.useEffect(() => { api.workspace.setMainTabTitle(place ? title || t('menu.title') : t('menu.title'), instanceId) }, [instanceId, title, api.ui.language()])
    return h('div', { className: 'poly-page' },
      h('div', { className: 'poly-bar poly-page-head' },
        h('span', { className: `poly-bar-balance${place ? ' double' : ''}`, 'aria-hidden': true }),
        h('h1', { className: 'poly-page-title' }, title),
        place && location ? h(Star, { location, preferences }) : place ? h('span', { className: 'poly-bar-balance', 'aria-hidden': true }) : null,
        h('button', { type: 'button', className: `poly-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH }))),
      place ? h(PlaceBody, { place, preferences, revision, onTitle: setTitle, onLocation: setLocation }) : h(OverviewBody, { preferences, revision, refresh, onTitle: setTitle }))
  }

  api.registerView('poly.panel', Panel)
  /** The page: the eLink timetable for instance `elink`, the campus map for a `campus` (or 2.0.0's `city`) instance, ETH News for `news` or `news:<article>`, the Polybox table for `polybox`, else the menu plan. */
  const Page = (props: { instanceId?: string }): Node => isElinkInstance(props.instanceId) ? h(elink.ElinkPage, props) : isCampusInstance(props.instanceId) ? h(CampusPage, null) : isNewsInstance(props.instanceId) ? h(news.NewsPage, props) : isPolyboxInstance(props.instanceId) ? h(polybox.PolyboxPage, props) : h(MenuPage, props)
  api.registerView('poly.page', Page)
}
