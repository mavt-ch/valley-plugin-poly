/**
 * The News tab: ETH's four news feeds (ETH News, Zukunftsblog, Globe, Media releases) as tags in the
 * sidebar, then the chosen feed's articles drawn like Email's message list; the page (`poly.page`, instance
 * `news`) shows the feed as picture cards, and instance `news:<article address>` reads one article in
 * Valley (title, lead, picture, text, boxes, quotes, videos and link lists), never an embedded website.
 * The feed is shared by both through the hidden `newsFeed` setting; the language follows Valley's (de, else en).
 */
import type { ValleyPluginApi } from '@valley/plugin-sdk'
import { paletteCssContrast, paletteCssValue } from '@valley/plugin-sdk/palette'
import { NEWS_FEEDS, NEWS_INSTANCE, articleInstance, articleOf, isArticleUrl, newsFeedOf, type Block, type Inline, type NewsArticle, type NewsEntry, type NewsFeed, type Picture } from './model'

type Shapes = string[]
/** The News tab: a folded newspaper, its columns of text and the back page's edge. */
export const NEWS_ICON: Shapes = ['M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V18a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z', 'M16 9h2.5A1.5 1.5 0 0 1 20 10.5V18a2 2 0 0 1-4 0', 'M7 8h6', 'M7 11.5h6', 'M7 15h3.5']
/** One glyph per feed: the newspaper (every article), a pen (Zukunftsblog), a globe (Globe), a megaphone (media releases). */
const FEED_ICONS: Record<NewsFeed, Shapes> = {
  news: NEWS_ICON,
  zukunftsblog: ['M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16z', 'M13.5 6.5l4 4', 'M14 20h6'],
  globe: ['M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0', 'M3.6 9h16.8', 'M3.6 15h16.8', 'M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9', 'M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9'],
  media: ['M4 10v4a1 1 0 0 0 1 1h2.5L13 19V5L7.5 9H5a1 1 0 0 0-1 1z', 'M16.5 9a4 4 0 0 1 0 6', 'M19 6.5a7.5 7.5 0 0 1 0 11', 'M7.5 15l1 4.5']
}
const FEED_COLORS: Record<NewsFeed, string> = { news: 'palette:primary-blue', zukunftsblog: 'palette:orange', globe: 'palette:teal', media: 'palette:rose' }
const SEARCH: Shapes = ['M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13', 'M20 20l-4.8-4.8']
const CLOSE: Shapes = ['M6 6l12 12', 'M18 6L6 18']
const REFRESH: Shapes = ['M20 11a8 8 0 0 0-14.9-3.9L4 8.5', 'M4 4v4.5h4.5', 'M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4', 'M20 20v-4.5h-4.5']
const OPEN: Shapes = ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
const TAB: Shapes = ['M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', 'M4 9h16', 'M10 4v5']
const PLAY: Shapes = ['M9 7.5v9l7.5-4.5z']
const CHEVRON: Shapes = ['M9 6l6 6-6 6']
/** The tag filter beside the search: a price-tag label with its hole. */
export const TAG_ICON: Shapes = ['M3.5 4.5v6.3a1 1 0 0 0 .3.7l8.7 8.7a1.5 1.5 0 0 0 2.1 0l5.3-5.3a1.5 1.5 0 0 0 0-2.1L11.2 4.1a1 1 0 0 0-.7-.3H4.3a.8.8 0 0 0-.8.7z', 'M8 8.5h.01']
/** Articles of the last seven days count as new; each tag's tooltip says how many its feed has. */
const RECENT = 7 * 86_400_000

export const NEWS_CSS = `
/* The article list follows Email's message list: full width, a hairline under each row, Contacts' selection. */
.news-list { flex: 1; min-height: 0; overflow-y: auto; }
.news-row { display: grid; grid-template-columns: minmax(0, 1fr) max-content; gap: 2px 8px; width: 100%; box-sizing: border-box; margin: 0; padding: 9px 12px 10px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.news-row:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.news-row.active { background: var(--accent-tint-bg); }
.news-row.active .news-row-title { color: var(--accent-color); }
.news-row:focus-visible, .news-card:focus-visible, .news-video:focus-visible, .news-link:focus-visible, .news-inline-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.news-row-title { grid-column: 1; min-width: 0; color: var(--title-color); font-weight: 600; line-height: 1.3; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; overflow-wrap: anywhere; }
.news-row-date { grid-column: 2; grid-row: 1; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.news-row-date.new { color: var(--accent-color); font-weight: 600; }
.news-row-summary { grid-column: 1 / -1; min-width: 0; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.35; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
/* Tags sit under the title and the description everywhere (27 Nov, on request): Contacts' 6px tag chips; one line in the list. */
/* Chips that do not fit wrap onto a hidden line, so none is cut mid-word; a single long one ellipsizes. */
.news-tags-line { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 4px; min-width: 0; height: 18px; margin-top: 3px; overflow: hidden; }
.news-tags-line .news-topic { box-sizing: border-box; height: 18px; max-width: 100%; line-height: 18px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-card .news-tags-line { height: 40px; }
@media (prefers-reduced-motion: reduce) { .news-row { transition: none; } }
/* The four feed tags share the row equally so they always fit the sidebar (27 Nov: with counts they overflowed it). */
.poly-bar.news-tags { overflow: hidden; }
.news-tags .poly-tile { flex: 1 1 0; min-width: 0; justify-content: center; gap: 5px; padding: 0 5px; }
.news-tags .poly-tile > span:last-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-panel .poly-bar.news-search-bar { padding: 0 var(--space-2, 8px); }
.news-search-bar .search-field-row { flex: 1; min-width: 0; }
.news-search-bar { gap: 4px; }
.news-topic { border: 0; font-family: inherit; cursor: pointer; }
.news-topic:hover { background: color-mix(in srgb, var(--title-color) 12%, var(--hover-bg)); color: var(--text-color); }
.news-topic.on { background: var(--accent-tint-bg); color: var(--accent-color); }
.news-topic:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 1px; }
.poly-icon-btn.filtered:not(.active) { color: var(--accent-color); }
/* The tag view: every tag of the feed as chips in place of the list; chosen ones in the accent tint. */
.news-tag-view { padding: 10px 12px 4px; }
.news-tag-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 8px; color: var(--text-secondary); font-size: var(--small-font-size); }
.news-cloud { display: flex; flex-wrap: wrap; gap: 6px; }
.news-cloud .news-topic { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; height: 26px; padding: 0 9px; font-size: var(--small-font-size); line-height: 1; }
.news-cloud .news-topic > span:first-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-cloud-count { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.news-cloud .news-topic.on .news-cloud-count { color: inherit; opacity: 0.8; }
.news-text-btn { padding: 0; border: 0; background: transparent; color: var(--accent-color); font: inherit; text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.news-search-bar .search-field-icon { display: grid; place-items: center; }
.news-search-bar .search-field-icon svg, .news-search-bar .search-field-action svg { width: 14px; height: 14px; }
/* The feed page: picture cards like the menu cards, the newest first and wider. */
.news-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
.news-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; padding: 0; border: 1px solid var(--border-light); border-radius: 8px; background: var(--container-color, transparent); color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: border-color 120ms ease-out, background-color 120ms ease-out; }
.news-card:hover { border-color: color-mix(in srgb, var(--title-color) 22%, var(--border-light)); background: color-mix(in srgb, var(--title-color) 3%, var(--container-color, transparent)); }
.news-card.active { border-color: var(--accent-color); }
.news-card-image { position: relative; aspect-ratio: 16 / 9; background: var(--hover-bg); display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.news-card-image > svg { width: 30px; height: 30px; opacity: 0.5; }
.news-card-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.news-card-body { display: grid; gap: 4px; padding: 10px 12px 12px; }
.news-card-top { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
.news-card-author { flex: 1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-card-date { flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.news-card-title { color: var(--title-color); font-size: 1rem; font-weight: 600; line-height: 1.3; overflow-wrap: anywhere; }
.news-card-summary { color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.4; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
@container (min-width: 760px) {
  .news-cards > .news-card:first-child { grid-column: span 2; flex-direction: row; }
  .news-cards > .news-card:first-child .news-card-image { flex: 0 0 58%; aspect-ratio: 16 / 10; }
  .news-cards > .news-card:first-child .news-card-body { align-content: start; padding: 16px 18px; }
  .news-cards > .news-card:first-child .news-card-title { font-size: 1.3rem; }
  .news-cards > .news-card:first-child .news-card-summary { -webkit-line-clamp: 6; font-size: var(--normal-font-size, 1rem); }
}
@container (max-width: 560px) {
  .news-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .news-card { flex-direction: row; }
  .news-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 100px; }
  .news-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
@media (prefers-reduced-motion: reduce) { .news-card { transition: none; } }
/* An article: one reading column in Valley's type, the picture full width, boxes as quiet callouts. */
.news-article { max-width: 720px; margin: 0 auto; padding: 26px 24px 40px; color: var(--text-color); line-height: 1.6; user-select: text; }
.news-topics { display: flex; flex-wrap: wrap; gap: 4px; margin: -2px 0 12px; }
.news-topic { padding: 0 7px; border-radius: 6px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.7; }
.news-article .news-title { margin: 0 0 12px; color: var(--title-color); font-size: 1.75rem; font-weight: 700; line-height: 1.2; overflow-wrap: anywhere; }
.news-lead { margin: 0 0 12px; color: var(--title-color); font-size: 1.08rem; line-height: 1.55; }
.news-meta { display: flex; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 18px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); }
.news-figure { margin: 18px 0; }
.news-figure-frame { position: relative; display: grid; place-items: center; min-height: 120px; overflow: hidden; border-radius: 6px; background: var(--hover-bg); color: var(--text-tertiary, var(--text-secondary)); }
.news-figure-frame.empty { aspect-ratio: 3 / 2; min-height: 0; }
.news-figure-frame img { display: block; width: 100%; height: auto; animation: news-in 180ms ease-out; }
.news-figure figcaption { margin-top: 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); line-height: 1.45; }
.news-article h2 { margin: 26px 0 8px; color: var(--title-color); font-size: 1.22rem; line-height: 1.3; }
.news-article h3 { margin: 20px 0 6px; color: var(--title-color); font-size: 1.05rem; line-height: 1.35; }
.news-article p { margin: 0 0 12px; }
.news-article ul.news-bullets { margin: 0 0 12px; padding-left: 20px; }
.news-article ul.news-bullets li { margin: 0 0 6px; }
.news-quote { margin: 18px 0; padding: 2px 0 2px 16px; border-left: 3px solid var(--accent-color); color: var(--title-color); font-size: 1.08rem; font-style: italic; }
.news-box { margin: 20px 0; padding: 12px 16px 4px; border-radius: 6px; background: var(--surface-color-alt, var(--hover-bg)); }
.news-box > :first-child { margin-top: 0; }
.news-box h2 { font-size: 1.05rem; }
.news-inline-link { color: var(--link-color, var(--accent-color)); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.news-video { display: block; width: 100%; margin: 18px 0; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.news-video .news-figure-frame { aspect-ratio: 16 / 9; }
.news-video img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.news-play { position: absolute; display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%; background: rgba(0, 0, 0, 0.6); color: #fff; }
.news-play svg { width: 26px; height: 26px; fill: currentColor; }
.news-video:hover .news-play { background: rgba(0, 0, 0, 0.75); }
.news-video-caption { display: block; margin-top: 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); }
.news-links { margin: 18px 0; }
.news-links-title { margin: 0 0 4px; color: var(--title-color); font-weight: 600; }
.news-link { display: flex; align-items: center; gap: 6px; width: 100%; padding: 5px 0; border: 0; border-bottom: 1px solid var(--border-light); background: transparent; color: var(--link-color, var(--accent-color)); font: inherit; text-align: left; cursor: pointer; }
.news-link svg { width: 14px; height: 14px; flex-shrink: 0; }
.news-link:hover span { text-decoration: underline; }
.news-source { margin-top: 28px; padding-top: 12px; border-top: 1px solid var(--border-light); color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
/* Smooth arrival (27 Nov): what was read fades in; placeholders appear only after a pause and never pulse. */
@keyframes news-in { from { opacity: 0; } to { opacity: 1; } }
.news-appear { animation: news-in 180ms ease-out; }
.news-card-image img { animation: news-in 180ms ease-out; }
.news-placeholder { pointer-events: none; animation: news-in 240ms ease-out; }
.news-bar { display: block; height: 10px; border-radius: 4px; background: var(--hover-bg); }
.news-row.news-placeholder { cursor: default; }
.news-row.news-placeholder .news-bar.title { grid-column: 1; width: 80%; height: 12px; margin: 3px 0; }
.news-row.news-placeholder .news-bar.date { grid-column: 2; grid-row: 1; width: 44px; margin-top: 4px; }
.news-row.news-placeholder .news-bar.text { grid-column: 1 / -1; width: 100%; }
.news-row.news-placeholder .news-bar.short { grid-column: 1 / -1; width: 55%; }
.news-card.news-placeholder .news-card-body { gap: 8px; }
.news-card.news-placeholder .news-bar.date { width: 30%; } .news-card.news-placeholder .news-bar.title { width: 85%; height: 14px; } .news-card.news-placeholder .news-bar.text { width: 100%; }
.news-article .news-placeholder { display: grid; gap: 12px; }
.news-bar.heading { width: 75%; height: 26px; } .news-article .news-bar.text { width: 100%; height: 14px; } .news-article .news-bar.short { width: 60%; height: 14px; }
@media (prefers-reduced-motion: reduce) { .news-appear, .news-placeholder, .news-card-image img, .news-figure-frame img { animation: none; } }
@container (max-width: 560px) { .news-article { padding: 16px 14px 32px; } .news-article .news-title { font-size: 1.4rem; } }
`

const localeDate = (iso: string, locale: string, options: Intl.DateTimeFormatOptions) => {
  const time = Date.parse(iso)
  return Number.isNaN(time) ? '' : new Intl.DateTimeFormat(locale, { timeZone: 'Europe/Zurich', ...options }).format(new Date(time))
}
export const isRecent = (iso: string, now = Date.now()) => { const time = Date.parse(iso); return !Number.isNaN(time) && now - time < RECENT && time <= now + 86_400_000 }
/** Entries matching every word of the query in their title, summary, author or topics. */
export function searchEntries(entries: NewsEntry[], query: string): NewsEntry[] {
  const words = query.toLocaleLowerCase().split(/\s+/).filter(Boolean)
  if (!words.length) return entries
  return entries.filter(entry => { const text = [entry.title, entry.summary, entry.author, ...entry.topics].join(' ').toLocaleLowerCase(); return words.every(word => text.includes(word)) })
}

/** Entries carrying at least one chosen tag (27 Nov: the tag view selects like tags, so more tags show more); none chosen keeps them all. */
export const withTags = (entries: NewsEntry[], tags: readonly string[]) => tags.length ? entries.filter(entry => tags.some(tag => entry.topics.includes(tag))) : entries
/** The tags of `entries` with how many carry each, the most used first, then by name. */
export function tagCounts(entries: NewsEntry[], locale = 'en'): { tag: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const entry of entries) for (const tag of entry.topics) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  return [...counts].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, locale))
}
/** The saved tag filter: strings only, each once. */
export const newsTagsOf = (value: unknown): string[] => Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === 'string' && item.length > 0))] : []

export function createNewsViews(api: ValleyPluginApi, t: (key: string) => string) {
  const React = api.React
  const h = React.createElement
  type Node = ReturnType<typeof h>
  type State<T> = { data: T | null; error: string; loading: boolean }

  const Icon = ({ shapes }: { shapes: Shapes }): Node => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    ...shapes.map(d => h('path', { key: d, d })))
  const fill = (template: string, values: Record<string, string | number>) => Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template)
  const problem = (error: unknown) => { const key = `news.error.${error instanceof Error ? error.message : ''}`; return t(key) === key ? t('news.error.serviceError') : t(key) }
  const language = (): 'de' | 'en' => (api.ui.language() || 'en').toLowerCase().startsWith('de') ? 'de' : 'en'
  const locale = () => api.ui.language() || 'en'
  const feedTitle = (feed: NewsFeed) => t(`news.feed.${feed}`)
  /** "Today", "Yesterday", else the day ("24 Nov" this year, "24 Nov 2025" before). */
  function shortDate(iso: string) {
    const time = Date.parse(iso)
    if (Number.isNaN(time)) return ''
    const day = (value: number) => localeDate(new Date(value).toISOString(), 'en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const now = Date.now()
    if (day(time) === day(now)) return t('day.today')
    if (day(time) === day(now - 86_400_000)) return t('news.yesterday')
    const sameYear = localeDate(iso, 'en', { year: 'numeric' }) === localeDate(new Date(now).toISOString(), 'en', { year: 'numeric' })
    return localeDate(iso, locale(), sameYear ? { day: 'numeric', month: 'short' } : { day: 'numeric', month: 'short', year: 'numeric' })
  }
  const longDate = (iso: string) => localeDate(iso, locale(), { day: 'numeric', month: 'long', year: 'numeric' })

  function usePreferences() {
    const [, setTick] = React.useState(0)
    React.useEffect(() => {
      const bump = () => setTick(value => value + 1)
      const offs = [api.ui.onLanguageChanged(bump), api.settings.subscribe(bump)]
      return () => { for (const off of offs) off() }
    }, [])
    const settings = api.settings.get()
    return { feed: newsFeedOf(settings.newsFeed), tags: newsTagsOf(settings.newsTags), language: language() }
  }
  /** Adds or removes one tag of the sidebar's filter (hidden `newsTags` setting, shared by every surface). */
  const toggleTag = (tag: string) => {
    const tags = newsTagsOf(api.settings.get().newsTags)
    void api.settings.set('newsTags', tags.includes(tag) ? tags.filter(item => item !== tag) : [...tags, tag].slice(-20))
  }
  const clearTags = () => void api.settings.set('newsTags', [])

  /**
   * Answers already read stay in memory for the plugin's life, so a feed, an article or a picture seen once
   * shows at once when it comes back (27 Nov, on request: "make the loading a lot smoother"); Refresh reads past them.
   */
  const feedCache = new Map<string, NewsEntry[]>()
  const articleCache = new Map<string, NewsArticle>()
  const pictureCache = new Map<string, string>()
  /** Every feed entry seen, by address: an article opens at once with the feed's title, summary, date and author. */
  const entryCache = new Map<string, NewsEntry>()
  const inflight = new Map<string, Promise<unknown>>()
  const once = <T>(key: string, load: () => Promise<T>): Promise<T> => {
    const running = inflight.get(key)
    if (running) return running as Promise<T>
    const value = load().finally(() => inflight.delete(key))
    inflight.set(key, value)
    return value
  }
  const keep = <T>(cache: Map<string, T>, key: string, value: T, limit: number) => { cache.delete(key); cache.set(key, value); while (cache.size > limit) cache.delete(cache.keys().next().value!) }
  const loadFeed = (feed: NewsFeed, lang: 'de' | 'en', fresh: boolean) => once(`feed:${lang}:${feed}:${fresh}`, () => api.backend.call<NewsEntry[]>('news.feed', { feed, language: lang, fresh }).then(entries => {
    keep(feedCache, `${lang}:${feed}`, entries, 8)
    for (const entry of entries) keep(entryCache, entry.url, entry, 1000)
    return entries
  }))
  const loadArticle = (url: string, fresh: boolean) => once(`article:${url}:${fresh}`, () => api.backend.call<NewsArticle>('news.article', { url, fresh }).then(article => { keep(articleCache, url, article, 60); return article }))
  const loadPicture = (src: string) => once(`picture:${src}`, () => api.backend.call<string>('image', { url: src }).then(data => { keep(pictureCache, src, data, 80); return data }))
  /** Reads an article and its lead picture before it is opened (pointer over a row or card, or focus on it). */
  const prefetch = (url: string) => {
    if (articleCache.has(url) && pictureCache.has(articleCache.get(url)!.picture?.src ?? '')) return
    void loadArticle(url, false).then(article => article.picture ? loadPicture(article.picture.src) : undefined).catch(() => undefined)
  }

  function useAnswer<T>(key: string | null, revision: number, load: (fresh: boolean) => Promise<T>, cache?: Map<string, T>): State<T> {
    const cached = key !== null && revision === 0 ? cache?.get(key) : undefined
    const [state, setState] = React.useState<State<T> & { key: string | null }>(() => cached !== undefined ? { key, data: cached, error: '', loading: false } : { key: null, data: null, error: '', loading: key !== null })
    React.useEffect(() => {
      if (key === null) return
      const hit = revision === 0 ? cache?.get(key) : undefined
      if (hit !== undefined) { setState({ key, data: hit, error: '', loading: false }); return }
      let live = true
      setState(previous => ({ key, data: previous.key === key ? previous.data : null, error: '', loading: true }))
      load(revision > 0).then(
        data => { if (live) setState({ key, data, error: '', loading: false }) },
        error => { if (live) setState({ key, data: null, error: problem(error), loading: false }) })
      return () => { live = false }
    }, [key, revision])
    if (state.key === key) return state
    return cached !== undefined ? { data: cached, error: '', loading: false } : { data: null, error: '', loading: key !== null }
  }

  /** True once `ms` have passed: placeholders appear only when a first read takes long, never as a flash. */
  function useLate(ms = 350): boolean {
    const [late, setLate] = React.useState(false)
    React.useEffect(() => { const timer = setTimeout(() => setLate(true), ms); return () => clearTimeout(timer) }, [])
    return late
  }

  function useRefresh() {
    const [revision, setRevision] = React.useState(0)
    const [refreshing, setRefreshing] = React.useState(false)
    const refresh = () => { setRefreshing(true); setRevision(value => value + 1); setTimeout(() => setRefreshing(false), 600) }
    return { revision, refreshing, refresh }
  }

  const useFeed = (feed: NewsFeed, lang: 'de' | 'en', revision: number) =>
    useAnswer<NewsEntry[]>(`${lang}:${feed}`, revision, fresh => loadFeed(feed, lang, fresh), feedCache)
  /** Every feed's entries for the tag counts; the chosen feed is asked first. */
  function useFeeds(chosen: NewsFeed, lang: 'de' | 'en', revision: number) {
    const known = (): Partial<Record<NewsFeed, NewsEntry[]>> => Object.fromEntries(NEWS_FEEDS.flatMap(feed => feedCache.has(`${lang}:${feed}`) ? [[feed, feedCache.get(`${lang}:${feed}`)!]] : []))
    const key = `${lang}:${revision}`
    const [feeds, setFeeds] = React.useState<{ key: string; byFeed: Partial<Record<NewsFeed, NewsEntry[]>> }>(() => ({ key, byFeed: revision === 0 ? known() : {} }))
    React.useEffect(() => {
      let live = true
      setFeeds(previous => previous.key === key ? previous : { key, byFeed: revision === 0 ? known() : {} })
      for (const feed of [chosen, ...NEWS_FEEDS.filter(item => item !== chosen)]) {
        if (revision === 0 && feedCache.has(`${lang}:${feed}`)) continue
        loadFeed(feed, lang, revision > 0).then(entries => {
          if (live) setFeeds(previous => ({ key, byFeed: { ...(previous.key === key ? previous.byFeed : {}), [feed]: entries } }))
        }, () => undefined)
      }
      return () => { live = false }
    }, [key])
    return feeds.key === key ? feeds.byFeed : {}
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
  const usePicture = (src: string | null) => useAnswer<string>(src, 0, () => loadPicture(src!), pictureCache)

  function useActiveInstance(): string | undefined {
    const read = () => { const tab = api.getState().activePluginTab; return tab?.pluginId === api.pluginId ? tab.instanceId : undefined }
    const [instance, setInstance] = React.useState(read)
    React.useEffect(() => api.subscribe(() => setInstance(read())), [])
    return instance
  }

  const openNews = (newTab = false) => api.workspace.openMainTab({ instanceId: NEWS_INSTANCE, title: t('news.title'), newTab })
  const openArticle = (url: string, title: string, newTab = false) => api.workspace.openMainTab({ instanceId: articleInstance(url), title, newTab })
  /** An ETH News article opens in Valley; any other address goes to Valley's link handling. */
  const follow = (href: string, label: string, newTab = false) => isArticleUrl(href) ? openArticle(href, label, newTab) : void api.links.open(href)

  const articleMenu = async (event: MouseEvent, entry: { url: string; title: string }, refresh?: () => void) => {
    event.preventDefault()
    const choice = await api.ui.openMenu([
      { id: 'tab', label: t('openInNewTab'), icon: h(Icon, { shapes: TAB }) },
      { id: 'website', label: t('news.openWebsite'), icon: h(Icon, { shapes: OPEN }) },
      ...(refresh ? [{ type: 'separator' as const }, { id: 'refresh', label: t('refresh'), icon: h(Icon, { shapes: REFRESH }) }] : [])
    ], { x: event.clientX, y: event.clientY })
    if (choice === 'tab') openArticle(entry.url, entry.title, true)
    if (choice === 'website') void api.links.open(entry.url)
    if (choice === 'refresh') refresh?.()
  }
  const clickProps = (entry: NewsEntry, refresh?: () => void) => ({
    onPointerEnter: () => prefetch(entry.url),
    onFocus: () => prefetch(entry.url),
    onClick: (event: MouseEvent) => openArticle(entry.url, entry.title, api.ui.hasModKey(event)),
    onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); openArticle(entry.url, entry.title, true) } },
    onContextMenu: (event: MouseEvent) => void articleMenu(event, entry, refresh)
  })

  /** Row 3: the four feeds as tags, each with its glyph and colour; the tooltip counts the articles from the last seven days. */
  function FeedTags({ chosen, byFeed }: { chosen: NewsFeed; byFeed: Partial<Record<NewsFeed, NewsEntry[]>> }): Node {
    const now = Date.now()
    return h('nav', { className: 'poly-bar poly-tiles news-tags', 'aria-label': t('news.feeds') }, NEWS_FEEDS.map(feed => {
      const entries = byFeed[feed]
      const recent = entries ? entries.filter(entry => isRecent(entry.published, now)).length : null
      const title = recent === null ? feedTitle(feed) : `${feedTitle(feed)} · ${recent === 1 ? t('news.recent.one') : fill(t('news.recent.other'), { count: recent })}`
      return h('button', {
        key: feed, type: 'button', className: `poly-tile${feed === chosen ? ' active' : ''}`, 'aria-pressed': feed === chosen, 'data-feed': feed, title, 'aria-label': title,
        style: { '--poly-tile-color': paletteCssValue(FEED_COLORS[feed]), '--poly-tile-on': paletteCssContrast(FEED_COLORS[feed]) } as Record<string, string>,
        onClick: () => void api.settings.set('newsFeed', feed)
      },
      h('span', { className: 'poly-tile-icon' }, h(Icon, { shapes: FEED_ICONS[feed] })),
      h('span', null, t(`news.tag.${feed}`)))
    }))
  }

  /**
   * The tag button beside the search (27 Nov, on request): it swaps the sidebar's article list for every tag of
   * the feed and back; filled while the tags are shown, the icon in the accent colour while a filter is on.
   */
  function TagButton({ open, chosen, toggle }: { open: boolean; chosen: string[]; toggle: () => void }): Node {
    const label = open ? t('news.tags.hide') : chosen.length ? `${t('news.tags.show')} · ${chosen.join(', ')}` : t('news.tags.show')
    return h('button', { type: 'button', className: `poly-icon-btn${open ? ' active' : ''}${chosen.length ? ' filtered' : ''}`, title: label, 'aria-label': label, 'aria-pressed': open, 'data-tag-view': true, onClick: toggle }, h(Icon, { shapes: TAG_ICON }))
  }

  /**
   * Every tag of the feed as chips in place of the article list, the most used first, each with its number of
   * articles; a click selects a tag and another click deselects it. The search field narrows the tags here.
   */
  function TagView({ entries, chosen, query }: { entries: NewsEntry[]; chosen: string[]; query: string }): Node {
    const words = query.toLocaleLowerCase().split(/\s+/).filter(Boolean)
    const all = tagCounts(entries, locale())
    const missing = chosen.filter(tag => !all.some(row => row.tag === tag)).map(tag => ({ tag, count: 0 }))
    const rows = [...all, ...missing].filter(row => words.every(word => row.tag.toLocaleLowerCase().includes(word)))
    const shown = withTags(entries, chosen).length
    return h('div', { className: 'news-tag-view news-appear' },
      h('div', { className: 'news-tag-head' },
        h('span', null, chosen.length ? (shown === 1 ? t('news.tags.articles.one') : fill(t('news.tags.articles.other'), { count: shown })) : fill(t('news.tags.count'), { count: all.length })),
        chosen.length ? h('button', { type: 'button', className: 'news-text-btn', onClick: clearTags }, t('news.tags.clear')) : null),
      rows.length
        ? h('div', { className: 'news-cloud', role: 'group', 'aria-label': t('news.tags.show') }, rows.map(row => {
          const on = chosen.includes(row.tag)
          return h('button', { key: row.tag, type: 'button', className: `news-topic${on ? ' on' : ''}`, 'aria-pressed': on, 'data-tag': row.tag, title: fill(t(on ? 'news.tags.remove' : 'news.tags.add'), { tag: row.tag }), onClick: () => toggleTag(row.tag) },
            h('span', null, row.tag), h('span', { className: 'news-cloud-count' }, String(row.count)))
        }))
        : h('div', { className: 'poly-note' }, query ? t('news.tags.noMatch') : t('news.tags.none')))
  }

  function SearchRow({ query, setQuery, tagView, chosen, toggleTags }: { query: string; setQuery: (value: string) => void; tagView: boolean; chosen: string[]; toggleTags: () => void }): Node {
    const placeholder = t(tagView ? 'news.tags.search' : 'news.search')
    return h('div', { className: 'poly-bar news-search-bar' },
      h('div', { className: 'search-field-row' },
        h('div', { className: 'search-field' },
          h('span', { className: 'search-field-icon' }, h(Icon, { shapes: SEARCH })),
          h('input', { className: 'search-field-input', value: query, placeholder, 'aria-label': placeholder, onChange: (event: { target: HTMLInputElement }) => setQuery(event.target.value), onKeyDown: (event: KeyboardEvent) => { if (event.key === 'Escape') setQuery('') } }),
          query ? h('button', { type: 'button', className: 'search-field-action', title: t('news.search.clear'), 'aria-label': t('news.search.clear'), onClick: () => setQuery('') }, h(Icon, { shapes: CLOSE })) : null)),
      h(TagButton, { open: tagView, chosen, toggle: toggleTags }))
  }

  /**
   * An article's tags; a click on one adds it to (or takes it out of) the sidebar's tag filter, the chosen ones
   * in the accent tint. Inside a row or card (themselves buttons) the chips are plain spans that keep the
   * click to themselves; the tag menu beside the search is their keyboard way.
   */
  const Tags = ({ topics, line, chosen }: { topics: string[]; line?: boolean; chosen: string[] }): Node | null => topics.length
    ? h('span', { className: line ? 'news-tags-line' : 'news-topics' }, topics.map(topic => {
      const on = chosen.includes(topic)
      const label = fill(t(on ? 'news.tags.remove' : 'news.tags.add'), { tag: topic })
      return line
        ? h('span', { key: topic, className: `news-topic${on ? ' on' : ''}`, title: label, onClick: (event: MouseEvent) => { event.stopPropagation(); toggleTag(topic) } }, topic)
        : h('button', { key: topic, type: 'button', className: `news-topic${on ? ' on' : ''}`, title: label, 'aria-pressed': on, onClick: () => toggleTag(topic) }, topic)
    }))
    : null

  /** An article row: title and date, the description, then its tags. */
  function Row({ entry, active, refresh, chosen }: { entry: NewsEntry; active: boolean; refresh: () => void; chosen: string[] }): Node {
    return h('button', { type: 'button', className: `news-row${active ? ' active' : ''}`, 'data-article': entry.url, 'aria-current': active ? 'page' : undefined, title: entry.author ? `${entry.title}\n${entry.author}` : entry.title, ...clickProps(entry, refresh) },
      h('span', { className: 'news-row-title' }, entry.title),
      h('span', { className: `news-row-date${isRecent(entry.published) ? ' new' : ''}`, title: longDate(entry.published) }, shortDate(entry.published)),
      entry.summary ? h('span', { className: 'news-row-summary' }, entry.summary) : null,
      h(Tags, { topics: entry.topics, line: true, chosen }))
  }

  /** Quiet rows in the list's shape while a feed is read the first time; shown only when that takes long. */
  function RowPlaceholders(): Node | null {
    const late = useLate()
    if (!late) return null
    return h('div', { className: 'news-placeholders', 'aria-busy': true, 'aria-label': t('news.loading') },
      ...[0, 1, 2, 3, 4].map(index => h('div', { key: index, className: 'news-row news-placeholder' },
        h('span', { className: 'news-bar title' }), h('span', { className: 'news-bar date' }), h('span', { className: 'news-bar text' }), h('span', { className: 'news-bar short' }))))
  }

  /** The sidebar's News tab below the tab row: the feed tags, the search, then the articles. */
  function NewsPanelBody(): Node {
    const { feed, tags, language: lang } = usePreferences()
    const { revision, refresh } = useRefresh()
    const [query, setQuery] = React.useState('')
    const [tagView, setTagView] = React.useState(false)
    // Each view keeps its own search: articles here, tag names in the tag view.
    const [tagQuery, setTagQuery] = React.useState('')
    const byFeed = useFeeds(feed, lang, revision)
    const state = useFeed(feed, lang, revision)
    const open = useActiveInstance()
    const entries = state.data ?? []
    const listed = searchEntries(withTags(entries, tags), query)
    const empty = query ? t('news.empty.search') : tags.length ? t('news.empty.tags') : t('news.empty')
    const body = state.error ? h('div', { className: 'poly-note error', role: 'alert' }, state.error)
      : !state.data ? h(RowPlaceholders, null)
      : tagView ? h(TagView, { entries, chosen: tags, query: tagQuery })
      : !listed.length ? h('div', { className: 'poly-note' }, empty, tags.length ? h(React.Fragment, null, ' ', h('button', { type: 'button', className: 'news-text-btn', onClick: clearTags }, t('news.tags.clear'))) : null)
      : h('div', { className: 'news-appear' }, ...listed.map(entry => h(Row, { key: entry.id, entry, active: open === articleInstance(entry.url), refresh, chosen: tags })))
    return h(React.Fragment, null,
      h(FeedTags, { chosen: feed, byFeed }),
      h(SearchRow, { query: tagView ? tagQuery : query, setQuery: tagView ? setTagQuery : setQuery, tagView, chosen: tags, toggleTags: () => setTagView(value => !value) }),
      h('div', { className: 'news-list' }, body, h('div', { className: 'poly-credit' }, t('news.credit'))))
  }

  /** A feed card: the article's picture (read from its page once the card is on screen), topic, date, title, summary, author. */
  function Card({ entry, active, revision, chosen }: { entry: NewsEntry; active: boolean; revision: number; chosen: string[] }): Node {
    const ref = React.useRef<HTMLButtonElement>(null)
    const visible = useVisible(ref)
    const article = useAnswer<NewsArticle>(visible ? entry.url : null, revision, fresh => loadArticle(entry.url, fresh), articleCache)
    const picture = usePicture(article.data?.picture?.src ?? null)
    return h('button', { ref, type: 'button', className: `news-card${active ? ' active' : ''}`, 'data-article': entry.url, ...clickProps(entry) },
      h('span', { className: 'news-card-image' }, h(Icon, { shapes: NEWS_ICON }), picture.data ? h('img', { src: picture.data, alt: article.data?.picture?.alt ?? '', draggable: false }) : null),
      h('span', { className: 'news-card-body' },
        h('span', { className: 'news-card-top' },
          h('span', { className: 'news-card-author' }, entry.author),
          h('span', { className: 'news-card-date', title: longDate(entry.published) }, shortDate(entry.published))),
        h('span', { className: 'news-card-title' }, entry.title),
        entry.summary ? h('span', { className: 'news-card-summary' }, entry.summary) : null,
        h(Tags, { topics: entry.topics, line: true, chosen })))
  }

  function CardPlaceholders(): Node | null {
    const late = useLate()
    if (!late) return null
    return h('div', { className: 'news-cards', 'aria-busy': true, 'aria-label': t('news.loading') },
      ...[0, 1, 2, 3, 4].map(index => h('div', { key: index, className: 'news-card news-placeholder' },
        h('span', { className: 'news-card-image' }), h('span', { className: 'news-card-body' }, h('span', { className: 'news-bar date' }), h('span', { className: 'news-bar title' }), h('span', { className: 'news-bar text' })))))
  }

  const PageHead = ({ title, actions }: { title: string; actions: Node[] }): Node => h('div', { className: 'poly-bar poly-page-head' },
    h('span', { className: `poly-bar-balance${actions.length > 1 ? ' double' : ''}`, 'aria-hidden': true }),
    h('h1', { className: 'poly-page-title' }, title),
    ...actions)
  const refreshButton = (refreshing: boolean, refresh: () => void) => h('button', { key: 'refresh', type: 'button', className: `poly-icon-btn${refreshing ? ' spinning' : ''}`, title: t('refresh'), 'aria-label': t('refresh'), onClick: refresh }, h(Icon, { shapes: REFRESH }))

  /** The chosen feed's articles as cards; its name stands in the first bar, the sidebar picks the feed. */
  function FeedPage({ instanceId }: { instanceId?: string }): Node {
    const { feed, tags, language: lang } = usePreferences()
    const { revision, refreshing, refresh } = useRefresh()
    const state = useFeed(feed, lang, revision)
    const open = useActiveInstance()
    React.useEffect(() => { api.workspace.setMainTabTitle(t('news.title'), instanceId) }, [instanceId, api.ui.language()])
    const content = state.error ? h('div', { className: 'poly-note error', role: 'alert' }, state.error)
      : !state.data ? h(CardPlaceholders, null)
      : !state.data.length ? h('div', { className: 'poly-note' }, t('news.empty'))
      : h('div', { className: 'news-cards news-appear' }, state.data.map(entry => h(Card, { key: entry.id, entry, active: open === articleInstance(entry.url), revision, chosen: tags })))
    return h('div', { className: 'poly-page' },
      h(PageHead, { title: feedTitle(feed), actions: [refreshButton(refreshing, refresh)] }),
      h('div', { className: 'poly-list' }, h('div', { className: 'poly-page-inner' }, content, h('div', { className: 'poly-credit' }, t('news.credit')))))
  }

  function InlineText({ parts }: { parts: Inline[] }): Node {
    return h(React.Fragment, null, ...parts.map((part, index) => {
      const text = part.strong ? h('strong', null, part.text) : part.text
      if (!part.href) return h(React.Fragment, { key: index }, text)
      const href = part.href
      return h('a', {
        key: index, className: 'news-inline-link', href, title: href,
        onClick: (event: MouseEvent) => { event.preventDefault(); follow(href, part.text, api.ui.hasModKey(event)) },
        onAuxClick: (event: MouseEvent) => { if (event.button === 1) { event.preventDefault(); follow(href, part.text, true) } }
      }, text)
    }))
  }

  function Figure({ picture }: { picture: Picture }): Node {
    const ref = React.useRef<HTMLElement>(null)
    const visible = useVisible(ref)
    const image = usePicture(visible ? picture.src : null)
    return h('figure', { ref, className: 'news-figure' },
      h('div', { className: `news-figure-frame${image.data ? '' : ' empty'}` }, image.data ? h('img', { src: image.data, alt: picture.alt, draggable: false }) : null),
      picture.caption ? h('figcaption', null, picture.caption) : null)
  }

  function Video({ block }: { block: Extract<Block, { type: 'video' }> }): Node {
    const ref = React.useRef<HTMLButtonElement>(null)
    const visible = useVisible(ref)
    const image = usePicture(visible && block.preview ? block.preview : null)
    const label = block.caption ? `${t('news.video')}: ${block.caption}` : t('news.video')
    return h('button', { ref, type: 'button', className: 'news-video', title: block.url, 'aria-label': label, onClick: () => void api.links.open(block.url) },
      h('span', { className: 'news-figure-frame' }, image.data ? h('img', { src: image.data, alt: '', draggable: false }) : null, h('span', { className: 'news-play' }, h(Icon, { shapes: PLAY }))),
      h('span', { className: 'news-video-caption' }, block.caption || t('news.video')))
  }

  function Blocks({ blocks }: { blocks: Block[] }): Node {
    return h(React.Fragment, null, ...blocks.map((block, index) => {
      switch (block.type) {
        case 'heading': return h(block.level === 2 ? 'h2' : 'h3', { key: index }, block.text)
        case 'paragraph': return h('p', { key: index }, h(InlineText, { parts: block.parts }))
        case 'quote': return h('blockquote', { key: index, className: 'news-quote' }, h(InlineText, { parts: block.parts }))
        case 'list': return h('ul', { key: index, className: 'news-bullets' }, block.items.map((item, at) => h('li', { key: at }, h(InlineText, { parts: item }))))
        case 'figure': return h(Figure, { key: index, picture: block.picture })
        case 'video': return h(Video, { key: index, block })
        case 'box': return h('aside', { key: index, className: 'news-box' }, h(Blocks, { blocks: block.blocks }))
        case 'links': return h('div', { key: index, className: 'news-links' },
          block.title ? h('div', { className: 'news-links-title' }, block.title) : null,
          block.items.map((item, at) => h('button', { key: at, type: 'button', className: 'news-link', title: item.href, onClick: (event: MouseEvent) => follow(item.href, item.text, api.ui.hasModKey(event)) }, h(Icon, { shapes: CHEVRON }), h('span', null, item.text))))
      }
    }))
  }

  /** One article read in Valley: its first bar names ETH News and opens the original page; the text below scrolls. */
  function ArticlePage({ instanceId, url }: { instanceId?: string; url: string }): Node {
    const { revision, refreshing, refresh } = useRefresh()
    const { tags } = usePreferences()
    const state = useAnswer<NewsArticle>(url, revision, fresh => loadArticle(url, fresh), articleCache)
    const article = state.data
    const entry = entryCache.get(url)
    const late = useLate()
    // What the feed already said stands at once; the page's own text replaces it when it arrives.
    const head = article ?? (entry ? { title: entry.title, lead: entry.summary, date: entry.published, author: entry.author, topics: entry.topics, picture: null } : null)
    React.useEffect(() => { api.workspace.setMainTabTitle(head?.title || t('news.title'), instanceId) }, [instanceId, head?.title, api.ui.language()])
    const website = h('button', { key: 'website', type: 'button', className: 'poly-icon-btn', title: t('news.openWebsite'), 'aria-label': t('news.openWebsite'), onClick: () => void api.links.open(url) }, h(Icon, { shapes: OPEN }))
    const content = !head && state.error ? h('div', { className: 'poly-note error', role: 'alert' }, state.error)
      : !head ? (late ? h('div', { className: 'news-article', 'aria-busy': true, 'aria-label': t('news.loading') }, h('div', { className: 'news-placeholder' }, h('span', { className: 'news-bar heading' }), h('span', { className: 'news-bar text' }), h('span', { className: 'news-bar text' }), h('span', { className: 'news-bar short' }))) : null)
      : h('article', { className: 'news-article', lang: /^https:\/\/ethz\.ch\/de\//.test(url) ? 'de' : 'en', 'aria-busy': article ? undefined : true },
        h('h2', { className: 'news-title' }, head.title),
        head.lead ? h('p', { className: 'news-lead' }, head.lead) : null,
        h(Tags, { topics: head.topics, chosen: tags }),
        h('div', { className: 'news-meta' }, head.date ? h('span', null, longDate(head.date)) : null, head.author ? h('span', null, fill(t('news.by'), { author: head.author })) : null),
        state.error ? h('div', { className: 'poly-note error', role: 'alert' }, state.error)
          : article ? h('div', { className: 'news-appear' },
            article.picture ? h(Figure, { picture: article.picture }) : null,
            h(Blocks, { blocks: article.blocks }),
            h('div', { className: 'news-source' }, t('news.source'), ' ',
              h('a', { className: 'news-inline-link', href: url, onClick: (event: MouseEvent) => { event.preventDefault(); void api.links.open(url) } }, new URL(url).host)))
          : h('div', { className: 'news-figure' }, h('div', { className: 'news-figure-frame empty' })))
    return h('div', { className: 'poly-page' },
      h(PageHead, { title: t('news.title'), actions: [website, refreshButton(refreshing, refresh)] }),
      h('div', { className: 'poly-list' }, content))
  }

  /** The page for a `news` instance (the feed) or a `news:<address>` instance (one article). */
  function NewsPage({ instanceId }: { instanceId?: string }): Node {
    const url = articleOf(instanceId)
    return url ? h(ArticlePage, { instanceId, url, key: url }) : h(FeedPage, { instanceId })
  }

  return { NewsPanelBody, NewsPage, openNews }
}
