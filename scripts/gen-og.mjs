// Renders public/og.png (1200x630 social card) by screenshotting inline HTML,
// so the real Barlow Condensed webfont is used. Rerun after brand changes.
import { chromium } from 'playwright'

const SLOT_COLORS = ['#C8F04A', '#60C8FF', '#FF7043', '#B39DFF']
const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #080808;
    font-family: 'Barlow Condensed', sans-serif; color: #e0e0e0;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 90px; overflow: hidden;
  }
  .bars { display: flex; gap: 14px; margin-bottom: 42px; }
  .bar { height: 12px; border-radius: 6px; }
  h1 { font-size: 130px; font-weight: 800; letter-spacing: 14px; line-height: 1; color: #fff; }
  h1 span { color: #C8F04A; }
  p { font-size: 40px; font-weight: 600; letter-spacing: 3px; color: #777; margin-top: 26px; }
  .sub { font-size: 26px; letter-spacing: 2px; color: #3a3a3a; margin-top: 16px; }
</style></head><body>
  <div class="bars">${SLOT_COLORS.map((c, i) =>
    `<div class="bar" style="background:${c};width:${[220, 160, 120, 90][i]}px"></div>`).join('')}
  </div>
  <h1>SPEC<span>CLASH</span></h1>
  <p>COMPARE CAR SPECS HEAD-TO-HEAD</p>
  <p class="sub">191 MAKES &middot; 43,000+ TRIMS &middot; AUSTRALIAN MARKET</p>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: 'public/og.png' })
await browser.close()
console.log('wrote public/og.png')
