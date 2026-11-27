import { describe, expect, it } from 'vitest'
import { articleInstance, articleOf, decodeEntities, feedUrl, isArticleUrl, isNewsImageUrl, isNewsInstance, newsFeedOf, parseArticle, parseFeed } from '../src/news/model'
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
})
