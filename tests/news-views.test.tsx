import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { createMockValleyApi } from '@valley/plugin-testkit'
import { createNewsViews, isRecent, newsTagsOf, searchEntries, tagCounts, withTags } from '../src/news/views'
import { articleInstance, parseArticle, parseFeed } from '../src/news/model'
import { ARTICLE_HTML, ARTICLE_URL, FEED, SECOND_URL } from './news-fixtures'
import en from '../locales/en.json'

const t = (key: string) => (en as Record<string, string>)[key] ?? key
const settle = () => act(async () => { for (let i = 0; i < 6; i++) await new Promise(resolve => setTimeout(resolve, 0)) })

function harness(view: 'panel' | 'page', instanceId?: string, settings: Record<string, unknown> = {}, language: 'en' | 'de' = 'en') {
  vi.useFakeTimers({ toFake: ['Date'], now: new Date('2026-11-27T12:00:00Z') })
  const { api } = createMockValleyApi()
  const listeners = new Set<() => void>()
  const calls: [string, Record<string, unknown>][] = []
  api.backend.call = vi.fn(async (name: string, input: Record<string, unknown>) => {
    calls.push([name, input])
    if (name === 'news.feed') return input.feed === 'globe' ? parseFeed(FEED).slice(2) : parseFeed(FEED)
    if (name === 'news.article') return parseArticle(ARTICLE_HTML, input.url as string)
    if (name === 'image') return 'data:image/png;base64,AA=='
    throw new Error('serviceError')
  }) as unknown as typeof api.backend.call
  api.settings.get = () => settings
  api.settings.set = vi.fn(async (key: string, value: unknown) => { settings[key] = value; for (const listener of [...listeners]) listener(); return { ok: true } }) as unknown as typeof api.settings.set
  api.settings.subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) }
  api.ui.language = () => language
  api.ui.hasModKey = (() => false) as typeof api.ui.hasModKey
  const openMainTab = vi.fn()
  api.workspace.openMainTab = openMainTab as unknown as typeof api.workspace.openMainTab
  api.workspace.setMainTabTitle = vi.fn() as unknown as typeof api.workspace.setMainTabTitle
  const open = vi.fn(async () => ({ ok: true }))
  api.links.open = open as unknown as typeof api.links.open
  const views = createNewsViews(api, t)
  const { container } = render(api.React.createElement(view === 'panel' ? views.NewsPanelBody : views.NewsPage, { instanceId }))
  return { calls, settings, openMainTab, open, container, api, views }
}

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('ETH News views', () => {
  it('shows the four feeds as tags (this week\'s count in the tooltip), then the chosen feed like a message list', async () => {
    const { container, calls, settings, openMainTab } = harness('panel')
    await settle()
    expect(calls.filter(([name]) => name === 'news.feed').map(([, input]) => input.feed)).toEqual(expect.arrayContaining(['news', 'zukunftsblog', 'globe', 'media']))
    expect(calls.every(([, input]) => input.language === 'en')).toBe(true)
    const tags = [...container.querySelectorAll('.poly-tile')]
    expect(tags.map(tag => [tag.getAttribute('data-feed'), tag.textContent, tag.getAttribute('title')])).toEqual([['news', 'News', 'ETH News · 2 articles this week'], ['zukunftsblog', 'Blog', 'Zukunftsblog · 2 articles this week'], ['globe', 'Globe', 'Globe magazine · 0 articles this week'], ['media', 'Media', 'Media releases · 2 articles this week']])
    expect(tags[0].getAttribute('aria-pressed')).toBe('true')
    const rows = [...container.querySelectorAll('.news-row')]
    expect(rows.map(row => row.querySelector('.news-row-title')?.textContent)).toEqual(['A quieter wind tunnel for the Hönggerberg\'s labs', 'Student rover wins the desert challenge', 'Sensors listen to a glacier'])
    expect(rows[0].querySelector('.news-row-date')?.textContent).toBe('Today')
    expect([...rows[0].children].map(child => child.className)).toEqual(['news-row-title', 'news-row-date new', 'news-row-summary', 'news-tags-line'])
    expect([...rows[0].querySelectorAll('.news-topic')].map(tag => tag.textContent)).toEqual(['Research', 'D-MAVT', 'Innovation & Industry'])
    fireEvent.click(rows[1])
    expect(openMainTab).toHaveBeenLastCalledWith({ instanceId: articleInstance(SECOND_URL), title: 'Student rover wins the desert challenge', newTab: false })
    fireEvent.change(container.querySelector('.search-field-input')!, { target: { value: 'glacier' } })
    expect(container.querySelectorAll('.news-row')).toHaveLength(1)
    fireEvent.click(tags[2])
    await settle()
    expect(settings.newsFeed).toBe('globe')
    expect(container.querySelector('.poly-tile[data-feed="globe"]')?.getAttribute('aria-pressed')).toBe('true')
    expect(container.querySelector('.news-credit, .poly-credit')?.textContent).toContain('ethz.ch')
  })

  it('reads the German feeds when Valley is in German', async () => {
    const { calls } = harness('panel', undefined, {}, 'de')
    await settle()
    expect(calls.filter(([name]) => name === 'news.feed').every(([, input]) => input.language === 'de')).toBe(true)
  })

  it('shows the feed page as cards whose pictures come from each article', async () => {
    const { container, calls } = harness('page', 'news')
    await settle()
    expect(container.querySelector('.poly-page-title')?.textContent).toBe('ETH News')
    const cards = container.querySelectorAll('.news-card')
    expect(cards).toHaveLength(3)
    expect(calls.some(([name, input]) => name === 'news.article' && input.url === ARTICLE_URL)).toBe(true)
    expect(cards[0].querySelector('img')?.getAttribute('src')).toBe('data:image/png;base64,AA==')
    expect([...cards[0].querySelector('.news-card-body')!.children].map(child => child.className)).toEqual(['news-card-top', 'news-card-title', 'news-card-summary', 'news-tags-line'])
  })

  it('reads an article in Valley: ETH News links open in Valley, other links through the link handler', async () => {
    const { container, openMainTab, open } = harness('page', articleInstance(ARTICLE_URL))
    await settle()
    const article = container.querySelector('.news-article')!
    expect(article.querySelector('.news-title')?.textContent).toBe('A quieter wind tunnel')
    expect(article.querySelector('.news-lead')?.textContent).toContain('Engineers rebuilt')
    expect([...article.children].slice(0, 4).map(child => child.className)).toEqual(['news-title', 'news-lead', 'news-topics', 'news-meta'])
    expect(article.querySelector('.news-box h2')?.textContent).toBe('In brief')
    expect([...article.querySelectorAll('h2, h3')].map(node => node.textContent)).toEqual(['A quieter wind tunnel', 'In brief', 'Why it matters', 'Next steps'])
    expect(article.querySelector('.news-quote')?.textContent).toBe('“Silence is a measurement tool.”')
    expect(article.querySelectorAll('.news-figure')).toHaveLength(2)
    fireEvent.click([...article.querySelectorAll('.news-inline-link')].find(link => link.textContent === 'first study')!)
    expect(openMainTab).toHaveBeenLastCalledWith(expect.objectContaining({ instanceId: articleInstance('https://ethz.ch/en/news-and-events/eth-news/news/2026/10/earlier-story.html') }))
    fireEvent.click([...article.querySelectorAll('.news-inline-link')].find(link => link.textContent === 'report')!)
    expect(open).toHaveBeenLastCalledWith('https://example.org/report.pdf')
    fireEvent.click(article.querySelector('.news-video')!)
    expect(open).toHaveBeenLastCalledWith('https://www.youtube.com/watch?v=AbCdEf12345')
    fireEvent.click(container.querySelector('.poly-page-head [aria-label="Open on ethz.ch"]')!)
    expect(open).toHaveBeenLastCalledWith(ARTICLE_URL)
  })

  it('opens an article at once from what the feed said, prefetches on hover and keeps what was read', async () => {
    const { container, calls, api, views } = harness('panel')
    await settle()
    const row = container.querySelector(`[data-article="${SECOND_URL}"]`)!
    fireEvent.pointerEnter(row)
    await settle()
    expect(calls.filter(([name, input]) => name === 'news.article' && input.url === SECOND_URL)).toHaveLength(1)
    // The article page shows the feed's title and description before (and without) a loading text.
    let release: () => void = () => undefined
    const call = api.backend.call
    api.backend.call = vi.fn((name: string, input: Record<string, unknown>) => name === 'news.article' && input.url === ARTICLE_URL
      ? new Promise(resolve => { release = () => resolve(parseArticle(ARTICLE_HTML, ARTICLE_URL)) })
      : call(name, input)) as unknown as typeof api.backend.call
    const page = render(api.React.createElement(views.NewsPage, { instanceId: articleInstance(ARTICLE_URL) })).container
    expect(page.querySelector('.news-title')?.textContent).toBe('A quieter wind tunnel for the Hönggerberg\'s labs')
    expect(page.querySelector('.news-lead')?.textContent).toBe('Engineers rebuilt a test hall so that "quiet" measurements need no night shifts.')
    expect(page.textContent).not.toContain('Loading')
    await act(async () => { release() })
    await settle()
    expect(page.querySelector('.news-title')?.textContent).toBe('A quieter wind tunnel')
    expect(page.querySelector('.news-appear h2')?.textContent).toBe('In brief')
    // The prefetched article opens from memory: no second read.
    const before = (api.backend.call as unknown as { mock: { calls: unknown[] } }).mock.calls.length
    const again = render(api.React.createElement(views.NewsPage, { instanceId: articleInstance(SECOND_URL) })).container
    expect(again.querySelector('.news-appear')).not.toBeNull()
    expect((api.backend.call as unknown as { mock: { calls: [string, Record<string, unknown>][] } }).mock.calls.slice(before).some(([name]) => name === 'news.article')).toBe(false)
  })

  it('filters the list by tags from the tag button beside the search and from the tag chips', async () => {
    const { container, settings, api } = harness('panel')
    await settle()
    const menus: unknown[][] = []
    const answers = ['tag:D-MAVT', 'tag:Research', 'clear']
    api.ui.openMenu = vi.fn(async (items: unknown[]) => { menus.push(items); return answers.shift() ?? null }) as unknown as typeof api.ui.openMenu
    const button = container.querySelector('.news-search-bar .poly-icon-btn[aria-haspopup="menu"]')!
    expect(button.getAttribute('aria-label')).toBe('Filter by tags')
    fireEvent.click(button)
    await settle()
    const labels = (menus[0] as { label?: string; checked?: boolean }[]).map(item => item.label)
    // Every tag of the feed with its count, the most used first, then by name.
    expect(labels).toEqual(['Climate sciences · 1', 'D-MAVT · 1', 'Innovation & Industry · 1', 'Research · 1', 'Students · 1'])
    expect(settings.newsTags).toEqual(['D-MAVT'])
    expect([...container.querySelectorAll('.news-row')].map(row => row.getAttribute('data-article'))).toEqual([ARTICLE_URL])
    expect(button.className).toContain('active')
    // With D-MAVT chosen the menu offers only the tags of the remaining article, the chosen one first and ticked.
    fireEvent.click(button)
    await settle()
    expect((menus[1] as { label?: string; checked?: boolean; id?: string }[]).filter(item => item.id?.startsWith('tag:')).map(item => [item.label, item.checked])).toEqual([['D-MAVT · 1', true], ['Innovation & Industry · 1', false], ['Research · 1', false]])
    expect(settings.newsTags).toEqual(['D-MAVT', 'Research'])
    fireEvent.click(button)
    await settle()
    expect(settings.newsTags).toEqual([])
    expect(container.querySelectorAll('.news-row')).toHaveLength(3)
    // A chip filters without opening the article; the chosen chip is marked.
    fireEvent.click([...container.querySelectorAll(`[data-article="${SECOND_URL}"] .news-topic`)].find(chip => chip.textContent === 'Students')!)
    await settle()
    expect(settings.newsTags).toEqual(['Students'])
    expect(container.querySelectorAll('.news-row')).toHaveLength(1)
    expect(container.querySelector('.news-topic.on')?.textContent).toBe('Students')
    await act(async () => { await api.settings.set('newsTags', ['Students', 'Research']) })
    expect(container.querySelector('.poly-note')?.textContent).toContain('No article has all chosen tags.')
    fireEvent.click(container.querySelector('.news-text-btn')!)
    await settle()
    expect(settings.newsTags).toEqual([])
  })

  it('searches every word and counts the last seven days as new', () => {
    expect(tagCounts(parseFeed(FEED)).map(row => row.tag)).toEqual(['Climate sciences', 'D-MAVT', 'Innovation & Industry', 'Research', 'Students'])
    expect(withTags(parseFeed(FEED), ['Research', 'D-MAVT']).map(entry => entry.url)).toEqual([ARTICLE_URL])
    expect(newsTagsOf(['a', 'a', 3, ''])).toEqual(['a'])
    const entries = parseFeed(FEED)
    expect(searchEntries(entries, 'rover SAND').map(entry => entry.url)).toEqual([SECOND_URL])
    expect(searchEntries(entries, '  ')).toHaveLength(3)
    const now = Date.parse('2026-11-27T12:00:00Z')
    expect(isRecent('2026-11-21T13:00:00Z', now)).toBe(true)
    expect(isRecent('2026-11-20T11:00:00Z', now)).toBe(false)
    expect(isRecent('nonsense', now)).toBe(false)
  })
})
