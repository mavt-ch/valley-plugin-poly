import type { PluginBackendApi } from '@valley/plugin-sdk'
import { textFromBase64 } from '../base64'
import { feedUrl, isArticleUrl, isNewsFeed, parseArticle, parseFeed, type NewsArticle, type NewsEntry } from '../news/model'

/** ETH publishes a few articles a day; a feed is read again after 15 minutes, an article after 12 hours. */
const FEED_TTL = 15 * 60_000
const ARTICLE_TTL = 12 * 3_600_000
const MAX_PARALLEL = 2
/** The host refuses a request that asks for more than 4 MiB; a feed of 100 entries is about 100 KB, an article page about 80 KB. */
const MAX_BYTES = 4 * 1024 * 1024
const MAX_ARTICLES = 200

/**
 * ETH News: the four feeds of ethz.ch/en/utils/rss.html (all news, Zukunftsblog, Globe, media releases)
 * in English or German, and each article read from its own ethz.ch page.
 */
export function registerNews(api: PluginBackendApi): () => Promise<void> {
  const requests = new Set<string>()
  const memo = new Map<string, { at: number; ttl: number; value: Promise<unknown> }>()
  let disposed = false
  let running = 0
  const waiting: (() => void)[] = []

  const get = async (url: string, accept: string): Promise<string> => {
    if (disposed) throw new Error('unavailable')
    while (running >= MAX_PARALLEL) await new Promise<void>(resolve => waiting.push(resolve))
    running++
    const requestId = crypto.randomUUID()
    requests.add(requestId)
    try {
      const result = await api.network.fetch({ url, method: 'GET', headers: { Accept: accept }, requestId, timeoutMs: 20_000, maxResponseBytes: MAX_BYTES })
      if (disposed) throw new Error('unavailable')
      if (result.status === 404) throw new Error('notFound')
      if (result.status < 200 || result.status >= 300) throw new Error('serviceError')
      return textFromBase64(result.bodyBase64)
    } catch (error) {
      if (error instanceof Error && ['unavailable', 'notFound', 'serviceError'].includes(error.message)) throw error
      console.warn(`[poly] ethz.ch news: ${error instanceof Error ? error.message : String(error)}`)
      throw new Error('networkError')
    } finally { requests.delete(requestId); running--; waiting.shift()?.() }
  }

  /** One answer per key while it is fresh; a failed answer is forgotten at once. */
  const remember = <T>(key: string, ttl: number, fresh: boolean, load: () => Promise<T>): Promise<T> => {
    const hit = memo.get(key)
    if (!fresh && hit && Date.now() - hit.at < hit.ttl) return hit.value as Promise<T>
    const value = load()
    memo.set(key, { at: Date.now(), ttl, value })
    value.catch(() => { if (memo.get(key)?.value === value) memo.delete(key) })
    if (memo.size > MAX_ARTICLES) memo.delete(memo.keys().next().value!)
    return value
  }

  const input = (raw: unknown) => raw && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : {}

  const feed = async (raw: unknown): Promise<NewsEntry[]> => {
    const value = input(raw)
    if (!isNewsFeed(value.feed) || (value.language !== 'de' && value.language !== 'en')) throw new Error('invalidInput')
    const name = value.feed, language = value.language
    return remember(`feed:${language}:${name}`, FEED_TTL, value.fresh === true, async () => {
      const body = await get(feedUrl(name, language), 'application/atom+xml, application/xml;q=0.9, */*;q=0.8')
      if (!/<feed\b/.test(body)) throw new Error('formatError')
      return parseFeed(body)
    })
  }

  const article = async (raw: unknown): Promise<NewsArticle> => {
    const value = input(raw)
    if (!isArticleUrl(value.url)) throw new Error('invalidInput')
    const url = value.url
    return remember(`article:${url}`, ARTICLE_TTL, value.fresh === true, async () => {
      const parsed = parseArticle(await get(url, 'text/html'), url)
      if (!parsed) throw new Error('formatError')
      return parsed
    })
  }

  const offs = [api.rpc.handle('news.feed', feed), api.rpc.handle('news.article', article)]
  return async () => {
    disposed = true
    for (const off of offs) off()
    await Promise.all([...requests].map(id => api.network.cancel(id).catch(() => false)))
    memo.clear()
  }
}
