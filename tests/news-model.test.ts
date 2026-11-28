import { describe, expect, it } from 'vitest'
import { MAX_SAVED, articleInstance, articleOf, decodeEntities, feedUrl, isArticleUrl, isNewsImageUrl, isNewsInstance, isSaved, newsFeedOf, newsSourceOf, parseArticle, parseFeed, savedArticle, savedEntry, savedOf, withSaved, withoutSaved } from '../src/news/model'
import { ARTICLE_HTML, ARTICLE_URL, BLOG_HTML, FEED, OLD_URL, SECOND_URL } from './news-fixtures'

describe('ETH News model', () => {
  it('builds the four feed addresses of ethz.ch/en/utils/rss.html in English and German', () => {
    expect(feedUrl('news', 'en')).toBe('https://ethz.ch/en/news-und-veranstaltungen/eth-news/news/_jcr_content.feed.html')
    expect(feedUrl('zukunftsblog', 'de')).toBe('https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/_jcr_content.feed.html?tag=news:dossiers/zukunftsblog')
    expect(feedUrl('globe', 'en')).toContain('?tag=news:dossiers/globe')
    expect(feedUrl('media', 'en')).toContain('?tag=news:dossiers/medienmitteilung')
    expect(newsFeedOf('globe')).toBe('globe')
    expect(newsFeedOf('sports')).toBe('news')
  })

  it('reads the feed: titles escaped twice, the markers dropped, only ETH News articles', () => {
    const entries = parseFeed(FEED)
    expect(entries.map(entry => entry.url)).toEqual([ARTICLE_URL, SECOND_URL, OLD_URL])
    expect(entries[0]).toEqual({
      id: ARTICLE_URL, url: ARTICLE_URL, title: 'A quieter wind tunnel for the Hönggerberg\'s labs',
      summary: 'Engineers rebuilt a test hall so that "quiet" measurements need no night shifts.',
      published: '2026-11-27T07:00:00Z', author: 'Mara Example, Corporate Communications',
      topics: ['Research', 'D-MAVT', 'Innovation & Industry']
    })
    expect(decodeEntities('&amp;#39;&nbsp;&uuml;')).toBe('\' ü')
  })

  it('accepts only ETH News article addresses and their pictures', () => {
    expect(isArticleUrl(ARTICLE_URL)).toBe(true)
    expect(isArticleUrl('https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/2026/11/x.html')).toBe(true)
    expect(isArticleUrl('https://example.org/en/news-and-events/eth-news/news/2026/11/x.html')).toBe(false)
    expect(isArticleUrl('https://ethz.ch/en/studies.html')).toBe(false)
    expect(isNewsImageUrl('https://ethz.ch/en/news-and-events/eth-news/news/2026/11/x/_jcr_content/articleLeadImage/image.imageformat.carousel.2.jpg')).toBe(true)
    expect(isNewsImageUrl('https://ethz.ch/bin/ethz/components/previewImage/youtube/AbCdEf12345.jpg')).toBe(true)
    expect(isNewsImageUrl('https://ethz.ch/etc/secret.jpg')).toBe(false)
    expect(articleOf(articleInstance(ARTICLE_URL))).toBe(ARTICLE_URL)
    expect(articleOf('news:https://example.org/x.html')).toBeNull()
    expect(isNewsInstance('news')).toBe(true)
    expect(isNewsInstance('elink')).toBe(false)
  })

  it('reads an article page into its blocks, in page order, without scripts, share buttons, comments or footer', () => {
    const article = parseArticle(ARTICLE_HTML, ARTICLE_URL)!
    expect(article).toMatchObject({
      title: 'A quieter wind tunnel', lead: 'Engineers rebuilt a test hall so that quiet measurements need no night shifts.',
      date: '2026-11-27T00:00:00Z', author: 'Mara Example, Corporate Communications', topics: ['Research', 'Innovation & Industry'],
      picture: { src: 'https://ethz.ch/en/news-and-events/eth-news/news/2026/11/a-quieter-wind-tunnel/_jcr_content/articleLeadImage/image.imageformat.carousel.2.jpg', alt: 'The test hall', caption: 'The rebuilt hall. (Image: ETH Zurich)' }
    })
    expect(article.blocks).toEqual([
      { type: 'box', blocks: [
        { type: 'heading', level: 2, text: 'In brief' },
        { type: 'list', items: [[{ text: 'The hall is 40 dB quieter.' }]] },
        { type: 'list', items: [[{ text: 'Tests can run in the daytime.' }]] }
      ] },
      { type: 'paragraph', parts: [
        { text: '“We can finally hear the models,” says ' }, { text: 'Jo Invented', strong: true }, { text: ', who led the ' },
        { text: 'first study', href: 'https://ethz.ch/en/news-and-events/eth-news/news/2026/10/earlier-story.html' }, { text: ' and the ' },
        { text: 'report', href: 'https://example.org/report.pdf' }, { text: '.' }
      ] },
      { type: 'heading', level: 2, text: 'Why it matters' },
      { type: 'paragraph', parts: [{ text: 'Quiet halls mean more data. Every week.' }] },
      { type: 'heading', level: 3, text: 'Next steps' },
      { type: 'paragraph', parts: [{ text: 'More halls follow.' }] },
      { type: 'figure', picture: { src: 'https://ethz.ch/en/news-and-events/eth-news/news/2026/11/a-quieter-wind-tunnel/_jcr_content/par/image.imageformat.carousel.3.jpg', alt: 'A fan', caption: 'The new fan.' } },
      { type: 'video', url: 'https://www.youtube.com/watch?v=AbCdEf12345', caption: 'The hall in action (Video: ETH Zurich)', preview: 'https://ethz.ch/bin/ethz/components/previewImage/youtube/AbCdEf12345.jpg' },
      { type: 'quote', parts: [{ text: '“Silence is a measurement tool.”' }] },
      { type: 'links', title: 'Newsletter subscription', items: [{ text: 'Get the latest ETH News', href: 'https://ethz.ch/en/news-and-events/eth-news/newsletters.html' }] }
    ])
    expect(JSON.stringify(article)).not.toMatch(/Share this|Comments|Footer text|not text|Read/)
  })

  it('starts a page without lead picture after the share row and takes the share picture', () => {
    const article = parseArticle(BLOG_HTML, OLD_URL)!
    expect(article.picture).toEqual({ src: 'https://ethz.ch/en/news-and-events/eth-news/news/2025/03/glacier-sensors/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.9.jpg', alt: 'Ice', caption: '' })
    expect(article.blocks).toEqual([{ type: 'paragraph', parts: [{ text: 'The ice is never still.' }] }])
    expect(parseArticle('<html><body><p>No heading</p></body></html>', OLD_URL)).toBeNull()
  })

  it('keeps saved articles within the setting\'s schema, newest saved first, each once', () => {
    const [entry, second] = parseFeed(FEED)
    const article = parseArticle(ARTICLE_HTML, ARTICLE_URL)
    const saved = savedArticle(ARTICLE_URL, { entry, article }, '2026-11-27T10:00:00.000Z')!
    expect(saved).toEqual({ url: ARTICLE_URL, title: entry.title, summary: entry.summary, published: entry.published, author: entry.author, topics: entry.topics, picture: article!.picture!.src, savedAt: '2026-11-27T10:00:00.000Z' })
    // Without the feed's entry the page says it all; without either there is nothing to save.
    expect(savedArticle(ARTICLE_URL, { article }, 'x')).toMatchObject({ title: 'A quieter wind tunnel', summary: article!.lead })
    expect(savedArticle(ARTICLE_URL, {}, 'x')).toBeNull()
    expect(savedArticle('https://example.org/a.html', { entry }, 'x')).toBeNull()
    const other = savedArticle(SECOND_URL, { entry: second }, '2026-11-27T11:00:00.000Z')!
    expect(other.picture).toBe('')
    const list = withSaved(withSaved([], saved), other)
    expect(list.map(item => item.url)).toEqual([SECOND_URL, ARTICLE_URL])
    expect(withSaved(list, { ...saved, savedAt: '2026-11-27T12:00:00.000Z' }).map(item => item.url)).toEqual([ARTICLE_URL, SECOND_URL])
    expect(isSaved(list, ARTICLE_URL)).toBe(true)
    expect(withoutSaved(list, ARTICLE_URL).map(item => item.url)).toEqual([SECOND_URL])
    expect(savedEntry(saved)).toEqual({ ...entry, id: ARTICLE_URL })
    // The stored list is read back sorted and cleaned: foreign addresses, duplicates and pictures from elsewhere go.
    expect(savedOf([saved, other, { ...saved, title: 'Again' }, { url: 'https://example.org/x.html', title: 'X' }, 3, null, { ...other, url: OLD_URL, picture: 'https://example.org/p.jpg', topics: ['a', 'a', 4], savedAt: '' }]))
      .toEqual([other, saved, { ...other, url: OLD_URL, picture: '', topics: ['a'], savedAt: '' }])
    expect(savedOf('nonsense')).toEqual([])
    const many = Array.from({ length: MAX_SAVED + 3 }, (_, index) => ({ ...saved, url: ARTICLE_URL.replace('.html', `-${index}.html`) }))
    expect(many.reduce((all, item) => withSaved(all, item), [] as typeof many)).toHaveLength(MAX_SAVED)
    expect(newsSourceOf('saved')).toBe('saved')
    expect(newsSourceOf('globe')).toBe('globe')
    expect(newsSourceOf('nope')).toBe('news')
  })
})
