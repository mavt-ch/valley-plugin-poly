/**
 * ETH News from the feeds ETH lists on ethz.ch/en/utils/rss.html: every ETH News article, the
 * Zukunftsblog, the Globe magazine and the media releases, each in English and German (Atom). An article
 * is read from its own ethz.ch page into plain blocks; nothing is made up or rewritten.
 */

export const NEWS_HOST = 'ethz.ch'
export type NewsFeed = 'news' | 'zukunftsblog' | 'globe' | 'media'
export const NEWS_FEEDS: NewsFeed[] = ['news', 'zukunftsblog', 'globe', 'media']
/** The `tag` each feed adds to ETH's news feed address; the whole news feed has none. */
const FEED_TAGS: Record<NewsFeed, string> = { news: '', zukunftsblog: 'news:dossiers/zukunftsblog', globe: 'news:dossiers/globe', media: 'news:dossiers/medienmitteilung' }
/** Feed markers on every entry that say nothing about the article itself. */
const MARKERS = new Set(['news', 'homehero'])

export const isNewsFeed = (value: unknown): value is NewsFeed => NEWS_FEEDS.includes(value as NewsFeed)
export const newsFeedOf = (value: unknown): NewsFeed => isNewsFeed(value) ? value : 'news'

/** The feed's address as ETH publishes it (the `www.` host only redirects to `ethz.ch`). */
export function feedUrl(feed: NewsFeed, language: 'de' | 'en'): string {
  const base = `https://${NEWS_HOST}/${language}/news-und-veranstaltungen/eth-news/news/_jcr_content.feed.html`
  return FEED_TAGS[feed] ? `${base}?tag=${FEED_TAGS[feed]}` : base
}

const ARTICLE = /^https:\/\/ethz\.ch\/(en|de)\/news-(?:and-events|und-veranstaltungen)\/eth-news\/news\/\d{4}\/\d{2}\/[A-Za-z0-9._%-]+\.html$/
export const isArticleUrl = (value: unknown): value is string => typeof value === 'string' && ARTICLE.test(value)
/** A picture of an ETH News article (lead image, figures, video previews), served from ethz.ch. */
export const isNewsImageUrl = (value: unknown): value is string => typeof value === 'string' && (
  /^https:\/\/ethz\.ch\/(en|de)\/news-(?:and-events|und-veranstaltungen)\/eth-news\/news\/\d{4}\/\d{2}\/[A-Za-z0-9._%-]+\/_jcr_content\/[A-Za-z0-9._%/-]+\.(?:jpe?g|png|webp|gif)$/i.test(value) ||
  /^https:\/\/ethz\.ch\/bin\/ethz\/components\/previewImage\/youtube\/[A-Za-z0-9_-]+\.jpg$/.test(value))

/** The page instance of the news page and of one article (`news:<article address>`). */
export const NEWS_INSTANCE = 'news'
export const isNewsInstance = (value: unknown) => value === NEWS_INSTANCE || articleOf(value) !== null
export const articleInstance = (url: string) => `news:${url}`
export const articleOf = (value: unknown): string | null => typeof value === 'string' && value.startsWith('news:') && isArticleUrl(value.slice(5)) ? value.slice(5) : null

export type NewsEntry = {
  id: string
  url: string
  title: string
  summary: string
  /** ISO time as the feed gives it. */
  published: string
  author: string
  /** The entry's topics and departments, without the feed markers. */
  topics: string[]
}

export type Inline = { text: string; href?: string; strong?: boolean }
export type Picture = { src: string; alt: string; caption: string }
export type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; parts: Inline[] }
  | { type: 'list'; items: Inline[][] }
  | { type: 'quote'; parts: Inline[] }
  | { type: 'figure'; picture: Picture }
  | { type: 'video'; url: string; caption: string; preview: string }
  | { type: 'box'; blocks: Block[] }
  | { type: 'links'; title: string; items: { text: string; href: string }[] }

export type NewsArticle = {
  url: string
  title: string
  lead: string
  /** ISO date of the article page (`<time datetime>`), else empty. */
  date: string
  author: string
  topics: string[]
  /** The lead picture (the card's picture too), else ETH's share picture. */
  picture: Picture | null
  blocks: Block[]
}

const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', shy: '', ndash: '–', mdash: '—', hellip: '…', laquo: '«', raquo: '»',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', bdquo: '„', sbquo: '‚', middot: '·', bull: '•', deg: '°', euro: '€', copy: '©', reg: '®', times: '×',
  auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß', eacute: 'é', egrave: 'è', ecirc: 'ê', agrave: 'à', aacute: 'á', acirc: 'â',
  iacute: 'í', oacute: 'ó', uacute: 'ú', ccedil: 'ç', ntilde: 'ñ', Eacute: 'É', oslash: 'ø', aring: 'å', euml: 'ë', iuml: 'ï', ocirc: 'ô', ucirc: 'û'
}
/** HTML character references; the feed escapes its titles twice ("&amp;#39;"), so decoding runs until nothing changes. */
export function decodeEntities(value: string): string {
  let text = value
  for (let round = 0; round < 3; round++) {
    const next = text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, name: string) => {
      if (name[0] === '#') {
        const code = name[1] === 'x' || name[1] === 'X' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10)
        return Number.isFinite(code) && code > 0 && code < 0x110000 ? String.fromCodePoint(code) : match
      }
      return NAMED[name] ?? match
    })
    if (next === text) break
    text = next
  }
  return text
}
const clean = (value: string) => value.replace(/[\s ]+/g, ' ').trim()
/** Text of an HTML fragment: entities decoded, tags dropped, white space folded. */
export const plain = (html: string) => clean(decodeEntities(decodeEntities(html).replace(/<[^>]*>/g, ' ')))

const attribute = (tag: string, name: string) => {
  const match = new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i').exec(tag)
  return match ? decodeEntities(match[1] ?? match[2] ?? '') : ''
}
const absolute = (href: string, base: string) => {
  try {
    const url = new URL(href, base)
    return url.protocol === 'https:' || url.protocol === 'http:' || url.protocol === 'mailto:' ? url.href : ''
  } catch { return '' }
}

/** The entries of an ETH Atom feed, newest first as ETH sends them. */
export function parseFeed(xml: string): NewsEntry[] {
  const entries: NewsEntry[] = []
  for (const match of xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const body = match[1]
    const field = (name: string) => { const found = new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`).exec(body); return found ? found[1].replace(/^<!\[CDATA\[|\]\]>$/g, '') : '' }
    const link = /<link\b[^>]*>/.exec(body)
    const url = link ? attribute(link[0], 'href') : ''
    const title = plain(field('title'))
    if (!isArticleUrl(url) || !title) continue
    const topics = [...body.matchAll(/<category\b[^>]*>/g)].map(tag => clean(decodeEntities(attribute(tag[0], 'term')))).filter(term => term && !MARKERS.has(term.toLowerCase()))
    entries.push({
      id: plain(field('id')) || url, url, title,
      summary: plain(field('content') || field('summary')),
      published: plain(field('published') || field('updated')),
      author: plain(/<author\b[^>]*>[\s\S]*?<name>([\s\S]*?)<\/name>/.exec(body)?.[1] ?? ''),
      topics: [...new Set(topics)]
    })
  }
  return entries
}

const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'wbr', 'col', 'area', 'embed', 'param', 'track'])
/** Components that carry no article text: scripts, styles, social buttons, comments, the read-aloud player. */
const SKIPPED = new Set(['script', 'style', 'noscript', 'iframe', 'svg', 'button', 'form', 'template', 'select', 'textarea'])
const HIDDEN = /(?:^|\s)(?:hidden|visually-hidden|icon--[\w-]+|rs_skip|newsArticle__actions)(?:\s|$)/

/**
 * Reads the article's own content from its ethz.ch page: title, lead, date, author, topics, the lead
 * picture, then headings, paragraphs (with their links), lists, quotes, figures, videos (as links), the
 * grey boxes and link lists, in page order. Null when the page has no article heading.
 */
export function parseArticle(html: string, url: string): NewsArticle | null {
  const header = /<div class="newsArticle__header">([\s\S]*?)<\/div>\s*(?:<\/div>)?/.exec(html)
  const title = plain(/<h1\b[^>]*>([\s\S]*?)<\/h1>/.exec(header?.[1] ?? html)?.[1] ?? '')
  if (!title) return null
  const lead = plain(/<p class="lead">([\s\S]*?)<\/p>/.exec(html)?.[1] ?? '')
  const details = /<div class="newsArticle__details">([\s\S]*?)<\/span>/.exec(html)?.[1] ?? ''
  const date = attribute(/<time\b[^>]*>/.exec(details)?.[0] ?? '', 'datetime')
  const author = plain(/<a\b[^>]*>([\s\S]*?)<\/a>/.exec(details)?.[1] ?? '')
  const topics = [...(header?.[1] ?? '').matchAll(/<li class="TagCloud__item">([\s\S]*?)<\/li>/g)].map(item => plain(item[1])).filter(Boolean)
  const leadImage = /<div class="newsArticle__image">([\s\S]*?)<\/figure>/.exec(html)
  let picture: Picture | null = null
  if (leadImage) {
    const img = /<img\b[^>]*>/.exec(leadImage[1])?.[0] ?? ''
    const src = absolute(attribute(img, 'src'), url)
    if (src) picture = { src, alt: attribute(img, 'alt'), caption: plain(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/.exec(leadImage[1])?.[1] ?? '') }
  }
  if (!picture) {
    const share = attribute(/<meta[^>]*property="og:image"[^>]*>/.exec(html)?.[0] ?? '', 'content')
    if (share) picture = { src: absolute(share, url), alt: attribute(/<meta[^>]*property="og:image:alt"[^>]*>/.exec(html)?.[0] ?? '', 'content'), caption: '' }
  }
  // The body starts after the lead picture, or without one after the date, author and share row.
  const actions = html.indexOf('class="newsArticle__actions"')
  const afterDetails = actions >= 0 && html.indexOf('</ul>', actions) >= 0 ? html.indexOf('</ul>', actions) + 5 : html.indexOf('<div class="newsArticle__details">')
  const start = leadImage ? leadImage.index + leadImage[0].length : afterDetails
  // It ends before the share buttons, the comments, the related news or the footer (cut at the tag that names them).
  const ends = ['-expanded"', 'class="newsArticle__comments', 'class="wide_content2', '<footer'].map(marker => html.indexOf(marker, Math.max(0, start))).filter(index => index >= 0).map(index => html.lastIndexOf('<', index))
  const body = start >= 0 ? html.slice(start, ends.length ? Math.min(...ends) : html.length) : ''
  return { url, title, lead, date, author, topics, picture, blocks: parseBlocks(body, url) }
}

type Frame = { tag: string; skip: boolean; kind?: 'box' | 'figure' | 'video' | 'links' }

/** The article body as blocks, read with a small tag scanner (the backend has no DOM). */
export function parseBlocks(html: string, base: string): Block[] {
  const root: Block[] = []
  const boxes: Block[][] = [root]
  const out = () => boxes[boxes.length - 1]
  const stack: Frame[] = []
  let parts: Inline[] | null = null
  type PartsKind = 'paragraph' | 'quote' | 'item' | 'heading' | 'caption'
  let partsKind: PartsKind | null = null
  /** The kind being collected, read through a call so the checks below see changes made inside `close`. */
  const collecting = (): PartsKind | null => partsKind
  let headingLevel: 2 | 3 = 2
  let list: Inline[][] | null = null
  let links: { title: string; items: { text: string; href: string }[] } | null = null
  let figure: Picture | null = null
  let caption = ''
  let href = ''
  let strong = 0
  let linkText = ''
  let quoteDepth = 0

  const skipping = () => stack.some(frame => frame.skip)
  const push = (text: string) => {
    if (!parts) return
    const last = parts[parts.length - 1]
    const part: Inline = { text, ...(href ? { href } : {}), ...(strong ? { strong: true } : {}) }
    if (last && last.href === part.href && last.strong === part.strong) last.text += text
    else parts.push(part)
  }
  const finish = (inline: Inline[]) => {
    const merged = inline.map(part => ({ ...part, text: part.text.replace(/[\s ]+/g, ' ') })).filter(part => part.text)
    if (merged.length) { merged[0].text = merged[0].text.trimStart(); merged[merged.length - 1].text = merged[merged.length - 1].text.trimEnd() }
    return merged.filter(part => part.text)
  }
  const open = (kind: PartsKind) => { if (parts && partsKind !== kind) close(); if (!parts) { parts = []; partsKind = kind } }
  const close = () => {
    if (!parts) return
    const inline = finish(parts)
    const text = inline.map(part => part.text).join('')
    if (text) {
      if (partsKind === 'heading') out().push({ type: 'heading', level: headingLevel, text })
      else if (partsKind === 'item' && list) list.push(inline)
      else if (partsKind === 'quote') out().push({ type: 'quote', parts: inline })
      else if (partsKind === 'caption') caption = text
      else out().push({ type: 'paragraph', parts: inline })
    }
    parts = null
    partsKind = null
  }

  for (const match of html.matchAll(/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>|([^<]+)/g)) {
    if (match[0].startsWith('<!--')) continue
    const text = match[4]
    if (text !== undefined) {
      if (skipping()) continue
      const value = decodeEntities(text)
      if (links && href) linkText += value
      if (parts) push(value)
      else if (value.trim() && !links && !figure) { open(quoteDepth ? 'quote' : 'paragraph'); push(value) }
      continue
    }
    const closing = match[1] === '/'
    const tag = match[2].toLowerCase()
    const attrs = match[3]
    if (!closing) {
      const className = attribute(` ${attrs}`, 'class')
      const skip = SKIPPED.has(tag) || HIDDEN.test(className) || attribute(` ${attrs}`, 'aria-hidden') === 'true'
      if (skipping() || skip) { if (!VOID.has(tag) && !attrs.trimEnd().endsWith('/')) stack.push({ tag, skip: true }); continue }
      let kind: Frame['kind']
      if (tag === 'div' && /(?:^|\s)greybox(?:\s|$)/.test(className)) { close(); const box: Block[] = []; out().push({ type: 'box', blocks: box }); boxes.push(box); kind = 'box' }
      else if (tag === 'div' && /(?:^|\s)greyboxend(?:\s|$)/.test(className)) { close(); if (boxes.length > 1) boxes.pop() }
      else if (tag === 'div' && attribute(` ${attrs}`, 'data-is-youtube') === 'true') {
        close()
        const embed = attribute(` ${attrs}`, 'data-video-url')
        const id = /youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]+)/.exec(embed)?.[1]
        if (id) out().push({ type: 'video', url: `https://www.youtube.com/watch?v=${id}`, caption: clean(attribute(` ${attrs}`, 'data-caption')), preview: absolute(attribute(` ${attrs}`, 'data-image-placeholder'), base) })
      }
      else if (tag === 'div' && /(?:^|\s)linklist__wrapper(?:\s|$)/.test(className)) { close(); links = { title: '', items: [] }; kind = 'links' }
      else if (tag === 'figure') { close(); figure = { src: '', alt: '', caption: '' }; caption = ''; kind = 'figure' }
      else if (tag === 'img' && figure && !figure.src) { figure.src = absolute(attribute(` ${attrs}`, 'src'), base); figure.alt = attribute(` ${attrs}`, 'alt') }
      else if (tag === 'figcaption' && figure) open('caption')
      else if (/^h[1-6]$/.test(tag)) { if (links) { parts = []; partsKind = 'heading' } else { close(); headingLevel = tag === 'h2' || tag === 'h1' ? 2 : 3; open('heading') } }
      else if (tag === 'p') { if (collecting() !== 'item' && collecting() !== 'caption') { close(); open(quoteDepth ? 'quote' : 'paragraph') } }
      else if (tag === 'blockquote') { close(); quoteDepth++ }
      else if (tag === 'ul' || tag === 'ol') { if (!links) { close(); list = [] } }
      else if (tag === 'li') { if (!links) { close(); open('item') } }
      else if (tag === 'a') { href = absolute(attribute(` ${attrs}`, 'href'), base); if (links) linkText = '' }
      else if (tag === 'b' || tag === 'strong') strong++
      else if (tag === 'br') push(' ')
      if (!VOID.has(tag)) stack.push({ tag, skip: false, kind })
      continue
    }
    // A closing tag ends the innermost open element of that name (ETH's markup is well formed; strays are ignored).
    const index = stack.map(frame => frame.tag).lastIndexOf(tag)
    if (index < 0) continue
    const [frame] = stack.splice(index).slice(0, 1)
    if (frame.skip) continue
    if (/^h[1-6]$/.test(tag)) {
      if (links && collecting() === 'heading') { links.title = finish(parts ?? []).map(part => part.text).join(''); parts = null; partsKind = null }
      else close()
    }
    else if (tag === 'p') { if (collecting() === 'paragraph' || collecting() === 'quote') close() }
    else if (tag === 'li') { if (collecting() === 'item') close() }
    else if (tag === 'ul' || tag === 'ol') { close(); if (list?.length) out().push({ type: 'list', items: list }); list = null }
    else if (tag === 'blockquote') { close(); quoteDepth = Math.max(0, quoteDepth - 1) }
    else if (tag === 'a') {
      if (links && href) { const label = clean(linkText); if (label) links.items.push({ text: label, href }) }
      href = ''
    }
    else if (tag === 'b' || tag === 'strong') strong = Math.max(0, strong - 1)
    else if (tag === 'figcaption') close()
    else if (frame.kind === 'figure') { close(); if (figure?.src) out().push({ type: 'figure', picture: { ...figure, caption } }); figure = null; caption = '' }
    else if (frame.kind === 'links') { if (links?.items.length) out().push({ type: 'links', ...links }); links = null }
  }
  close()
  // Empty grey boxes (the page's own separators) are dropped.
  const prune = (blocks: Block[]): Block[] => blocks.flatMap((block): Block[] => {
    if (block.type !== 'box') return [block]
    const inner = prune(block.blocks)
    return inner.length ? [{ type: 'box', blocks: inner }] : []
  })
  return prune(root)
}

/** The Saved folder beside the four feeds: a source of the News tab, chosen in the same `newsFeed` setting. */
export type NewsSource = NewsFeed | 'saved'
export const SAVED: NewsSource = 'saved'
export const newsSourceOf = (value: unknown): NewsSource => value === 'saved' ? 'saved' : newsFeedOf(value)
/** At most this many saved articles; saving one more drops the oldest saved. */
export const MAX_SAVED = 500

/** A saved article: what its row and card need without the network (27 Nov: a flat Saved folder, not Valley's Bookmarks). */
export type SavedArticle = {
  url: string
  title: string
  summary: string
  /** ISO time the feed or the page gave, else empty. */
  published: string
  author: string
  topics: string[]
  /** The lead picture's address (an ETH News picture), else empty. */
  picture: string
  /** ISO time it was saved. */
  savedAt: string
}

const text = (value: unknown, max: number) => typeof value === 'string' ? value.slice(0, max) : ''
/** One saved article within the `newsSaved` schema's limits, else null (no ETH News address, no title). */
function savedRow(value: unknown): SavedArticle | null {
  if (!value || typeof value !== 'object') return null
  const row = value as Record<string, unknown>
  const title = text(row.title, 400)
  if (!isArticleUrl(row.url) || row.url.length > 400 || !title) return null
  return {
    url: row.url, title, summary: text(row.summary, 2000), published: text(row.published, 40), author: text(row.author, 200),
    topics: Array.isArray(row.topics) ? [...new Set(row.topics.filter((topic): topic is string => typeof topic === 'string' && topic.length > 0).map(topic => topic.slice(0, 200)))].slice(0, 30) : [],
    picture: isNewsImageUrl(row.picture) && row.picture.length <= 600 ? row.picture : '',
    savedAt: text(row.savedAt, 40)
  }
}
/** The saved list from settings: valid ETH News addresses only, each once, newest saved first, at most `MAX_SAVED`. */
export function savedOf(value: unknown): SavedArticle[] {
  if (!Array.isArray(value)) return []
  const seen = new Set<string>()
  const list: SavedArticle[] = []
  for (const item of value) {
    const row = savedRow(item)
    if (!row || seen.has(row.url)) continue
    seen.add(row.url)
    list.push(row)
  }
  return list.sort((a, b) => (Date.parse(b.savedAt) || 0) - (Date.parse(a.savedAt) || 0)).slice(0, MAX_SAVED)
}
export const isSaved = (list: readonly SavedArticle[], url: string) => list.some(item => item.url === url)
/** The entry saved in front of the others (saving it again moves it to the front); the oldest saved go past `MAX_SAVED`. */
export const withSaved = (list: readonly SavedArticle[], article: SavedArticle) => [article, ...list.filter(item => item.url !== article.url)].slice(0, MAX_SAVED)
export const withoutSaved = (list: readonly SavedArticle[], url: string) => list.filter(item => item.url !== url)
/** What to keep of an article: the feed's entry, else what its page said, and the lead picture when known. */
export function savedArticle(url: string, from: { entry?: NewsEntry; article?: NewsArticle | null }, savedAt: string): SavedArticle | null {
  const { entry, article } = from
  return savedRow({
    url, title: entry?.title || article?.title || '', summary: entry?.summary || article?.lead || '', published: entry?.published || article?.date || '',
    author: entry?.author || article?.author || '', topics: entry?.topics.length ? entry.topics : article?.topics ?? [], picture: article?.picture?.src ?? '', savedAt
  })
}
/** A saved article drawn like a feed entry (its address is its id). */
export const savedEntry = (saved: SavedArticle): NewsEntry => ({ id: saved.url, url: saved.url, title: saved.title, summary: saved.summary, published: saved.published, author: saved.author, topics: saved.topics })
