import { describe, expect, it, vi } from 'vitest'
import type { PluginBackendApi } from '@valley/plugin-sdk'
import { registerNews } from '../src/backend/news'
import type { NewsArticle, NewsEntry } from '../src/news/model'
import { ARTICLE_HTML, ARTICLE_URL, FEED } from './news-fixtures'

const base64 = (text: string) => Buffer.from(text, 'utf-8').toString('base64')

function backend(answer: (url: URL) => { status?: number; body: string } = url => ({ body: url.pathname.endsWith('.feed.html') ? FEED : ARTICLE_HTML })) {
  const handlers = new Map<string, (payload: unknown) => unknown>()
  const urls: string[] = []
  let running = 0, most = 0
  const fetch = vi.fn(async ({ url, maxResponseBytes }: { url: string; maxResponseBytes?: number }) => {
    if (maxResponseBytes === undefined || maxResponseBytes > 4 * 1024 * 1024) throw new Error('maxResponseBytes too large')
    urls.push(url)
    running++; most = Math.max(most, running)
    await new Promise(resolve => setTimeout(resolve, 1))
    running--
    const { status = 200, body } = answer(new URL(url))
    return { status, headers: { 'Content-Type': 'text/html' }, bodyBase64: base64(body) }
  })
  const api = { rpc: { handle: (name: string, fn: (payload: unknown) => unknown) => { handlers.set(name, fn); return () => handlers.delete(name) } }, network: { fetch, cancel: vi.fn(async () => true) } }
  const dispose = registerNews(api as unknown as PluginBackendApi)
  const call = <T>(name: string, payload: unknown) => handlers.get(name)!(payload) as Promise<T>
  return { call, urls, dispose, most: () => most }
}

describe('ETH News backend', () => {
  it('reads each feed from ethz.ch once while it is fresh, two requests at a time, and again on Refresh', async () => {
    const { call, urls, most } = backend()
    const feeds = await Promise.all((['news', 'zukunftsblog', 'globe', 'media'] as const).map(feed => call<NewsEntry[]>('news.feed', { feed, language: 'de' })))
    expect(feeds[0].map(entry => entry.url)[0]).toBe(ARTICLE_URL)
    expect(urls.every(url => new URL(url).host === 'ethz.ch' && new URL(url).pathname.startsWith('/de/'))).toBe(true)
    expect(most()).toBeLessThanOrEqual(2)
    await call('news.feed', { feed: 'news', language: 'de' })
    expect(urls).toHaveLength(4)
    await call('news.feed', { feed: 'news', language: 'de', fresh: true })
    expect(urls).toHaveLength(5)
  })

  it('reads an article page once and refuses other addresses', async () => {
    const { call, urls } = backend()
    const article = await call<NewsArticle>('news.article', { url: ARTICLE_URL })
    expect(article.title).toBe('A quieter wind tunnel')
    await call('news.article', { url: ARTICLE_URL })
    expect(urls).toEqual([ARTICLE_URL])
    await expect(call('news.article', { url: 'https://example.org/x.html' })).rejects.toThrow('invalidInput')
    await expect(call('news.feed', { feed: 'sports', language: 'en' })).rejects.toThrow('invalidInput')
    await expect(call('news.feed', { feed: 'news', language: 'fr' })).rejects.toThrow('invalidInput')
  })

  it('names the failure in its own words and forgets it', async () => {
    let status = 404
    const { call } = backend(() => ({ status, body: status === 200 ? FEED : 'gone' }))
    await expect(call('news.article', { url: ARTICLE_URL })).rejects.toThrow('notFound')
    status = 500
    await expect(call('news.feed', { feed: 'news', language: 'en' })).rejects.toThrow('serviceError')
    status = 200
    await expect(call<NewsEntry[]>('news.feed', { feed: 'news', language: 'en' })).resolves.toHaveLength(3)
    const odd = backend(() => ({ body: '<html>maintenance</html>' }))
    await expect(odd.call('news.feed', { feed: 'news', language: 'en' })).rejects.toThrow('formatError')
    await expect(odd.call('news.article', { url: ARTICLE_URL })).rejects.toThrow('formatError')
  })
})
