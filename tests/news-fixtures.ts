/**
 * Invented ETH News fixtures in the shape ethz.ch sends them: an Atom feed (titles escaped twice, the
 * "News" and "Homehero" markers) and an article page (header, lead, lead picture, grey boxes, text, a
 * figure, a video, a quote, a link list, then the share buttons, comments and footer that are not read).
 */
export const ARTICLE_URL = 'https://ethz.ch/en/news-and-events/eth-news/news/2026/11/a-quieter-wind-tunnel.html'
export const SECOND_URL = 'https://ethz.ch/en/news-and-events/eth-news/news/2026/11/student-rover-wins.html'
export const OLD_URL = 'https://ethz.ch/en/news-and-events/eth-news/news/2025/03/glacier-sensors.html'

export const FEED = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"><title type="html">ETH News</title><updated>2026-11-27T10:00:00Z</updated>
<entry><title type="html">A quieter wind tunnel for the Hönggerberg&amp;#39;s labs</title><link href="${ARTICLE_URL}" /><category term="Research" /><category term="News" /><category term="Homehero" /><category term="D-MAVT" /><category term="Innovation &amp; Industry" /><author><name>Mara Example, Corporate Communications</name></author><id>${ARTICLE_URL}</id><published>2026-11-27T07:00:00Z</published><content type="html">Engineers rebuilt a test hall so that &amp;#34;quiet&amp;#34; measurements need no night shifts. </content></entry>
<entry><title type="html">Student rover wins the desert challenge</title><link href="${SECOND_URL}" /><category term="Students" /><category term="News" /><author><name>Leo Sample</name></author><id>${SECOND_URL}</id><published>2026-11-25T09:00:00Z</published><content type="html">A team of twelve students drove their rover across 40 kilometres of sand.</content></entry>
<entry><title type="html">Sensors listen to a glacier</title><link href="${OLD_URL}" /><category term="Climate sciences" /><author><name>Ana Placeholder</name></author><id>${OLD_URL}</id><published>2025-03-02T06:00:00Z</published><content type="html">Seismic sensors record how the ice moves.</content></entry>
<entry><title type="html">Not an article</title><link href="https://example.org/elsewhere.html" /><id>x</id><published>2026-11-20T06:00:00Z</published></entry>
</feed>`

const IMAGE = '/en/news-and-events/eth-news/news/2026/11/a-quieter-wind-tunnel/_jcr_content'
export const ARTICLE_HTML = `<!DOCTYPE html><html><head><meta property="og:image" content="https://ethz.ch${IMAGE}/pageimages/imageCarousel.imageformat.lightbox.1.jpg" ><script>var x = '<p>not text</p>'</script></head><body>
<nav><a href="/en.html">Home</a></nav>
<div class="newsArticle__header"><h1>A quieter wind tunnel </h1>
<div class="TagCloud TagCloud--raw TagCloud--article"><ul class="TagCloud__list"><li class="TagCloud__item"><a class="eth-link" href="/x">Research</a></li><li class="TagCloud__item"><a class="eth-link" href="/y">Innovation &amp; Industry</a></li></ul></div>
</div>
<div><div class="lead basecomponent"><p class="lead">Engineers rebuilt a test hall so that quiet measurements need no night shifts. </p></div></div>
<div class="newsArticle__details"><span class="newsArticle__author"><time datetime="2026-11-27T00:00:00Z">27.11.2026</time> by <a href="/a" class="eth-link">Mara Example, Corporate Communications</a></span>
<ul class="newsArticle__actions"><li><a href="#"><span aria-hidden="true" class="icon--volume_up"></span>Read</a></li></ul></div>
<div class="newsArticle__image"><div><div class="image-component"><figure><img alt="The test hall" src="${IMAGE}/articleLeadImage/image.imageformat.carousel.2.jpg"/><figcaption><div class="image-component__caption">The rebuilt hall.&nbsp;(Image: ETH Zurich)</div></figcaption></figure></div></div></div>
<div class="basecomponent parsys"><div class="wide_content parsys basecomponent">
<div class="greybox parsys basecomponent"><div class="greybox__wrapper"><div class="text-box"><div class="textimage basecomponent"><div class="text-image">
<h2>In brief&nbsp;</h2><ul><li><p>The hall is 40 dB quieter.&nbsp;</p></li></ul><ul><li><p>Tests can run in the daytime.</p></li></ul>
</div></div></div></div></div><div class="greyboxend basecomponent"></div>
<div class="textimage basecomponent"><div class="text-image"><p>&ldquo;We can finally hear the models,&rdquo; says <b>Jo Invented</b>, who led the <a href="/en/news-and-events/eth-news/news/2026/10/earlier-story.html">first study</a> and the <a href="https://example.org/report.pdf">report</a>.</p>
<h2>Why it matters</h2><p>Quiet halls mean&nbsp;more data.<br>Every week.</p><h3><b>Next steps</b></h3><p>More halls follow.</p></div></div>
<div class="textimage basecomponent"><div class="image-component"><figure><img alt="A fan" src="${IMAGE}/par/image.imageformat.carousel.3.jpg"/><figcaption><div class="image-component__caption">The new fan.</div></figcaption></figure></div></div>
<div class="youtube basecomponent"><script src="/x.js"></script><div class="NewVideo__wrapper"><div id="youtube-1" data-init="videoPlayer" data-caption="The hall in action (Video: ETH Zurich)" data-video-url="https://www.youtube.com/embed/AbCdEf12345?rel=0&amp;autoplay=1" data-image-placeholder="/bin/ethz/components/previewImage/youtube/AbCdEf12345.jpg" data-is-youtube="true"></div></div></div>
<div class="textimage basecomponent"><div class="text-image"><blockquote><p>&ldquo;Silence is a measurement tool.&rdquo;</p></blockquote></div></div>
<div class="greybox parsys basecomponent"><div class="greybox__wrapper"></div></div><div class="greyboxend basecomponent"></div>
<div class="linklist basecomponent"><div class="linklist__wrapper is-last"><h2>Newsletter subscription</h2><ul class="linklist "><li><a class="eth-link" href="/en/news-and-events/eth-news/newsletters.html"><span aria-hidden="true" class="icon--chevron_right"></span> Get the latest ETH News <span class="hidden">external</span></a></li></ul></div></div>
</div></div>
<div id="cmp_par_socialsharing_1-expanded"><p>Share this</p></div>
<div class="newsArticle__comments"><p>Comments</p></div>
<footer class="footer"><p>Footer text</p></footer>
</body></html>`

/** A Zukunftsblog page: no lead picture, so the body starts after the share row and the card uses the share picture. */
export const BLOG_HTML = `<html><head><meta property="og:image" content="https://ethz.ch/en/news-and-events/eth-news/news/2025/03/glacier-sensors/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.9.jpg" ><meta property="og:image:alt" content="Ice"></head><body>
<div class="newsArticle__header"><h1>Sensors listen to a glacier</h1></div>
<p class="lead">Seismic sensors record how the ice moves.</p>
<div class="newsArticle__details"><span class="newsArticle__author"><time datetime="2025-03-02T00:00:00Z">02.03.2025</time> by <a href="/b">Ana Placeholder</a></span><ul class="newsArticle__actions"><li>Read</li></ul></div>
<div class="textimage basecomponent"><p>The ice is never still.</p></div>
<div class="newsArticle__comments"></div></body></html>`
