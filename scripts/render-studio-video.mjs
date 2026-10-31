// Renders a Spec-Clash Studio matchup straight to a TikTok-ready MP4
// (1080x1920, 30 fps, H.264 + silent AAC track so TikTok's sound picker works).
//
//   node scripts/render-studio-video.mjs studio/matchups/<slug>.json [out.mp4]
//
// How: serves studio/ locally, preloads the matchup into Studio's saved state,
// swaps Google Fonts for the self-hosted @fontsource files, opens Record mode
// in headless Chrome and captures every painted frame with the DevTools
// screencast, then ffmpeg rebuilds a constant-frame-rate video from the
// frame timestamps.
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import os from 'node:os'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const STUDIO = path.join(ROOT, 'studio')
const [inPath, outArg] = process.argv.slice(2)
if (!inPath) { console.error('usage: render-studio-video.mjs matchup.json [out.mp4]'); process.exit(1) }
const matchup = JSON.parse(fs.readFileSync(inPath, 'utf8'))
const out = path.resolve(outArg || path.join(ROOT, 'studio/out', path.basename(inPath, '.json') + '.mp4'))
fs.mkdirSync(path.dirname(out), { recursive: true })

// ---- fonts: local woff2 instead of Google Fonts (the render box has no Google access)
const FS = path.join(ROOT, 'node_modules/@fontsource')
const font = (fam, dir, file, w) => {
  const b64 = fs.readFileSync(path.join(FS, dir, 'files', file)).toString('base64')
  return `@font-face{font-family:'${fam}';font-style:normal;font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2')}`
}
const FONT_CSS = [
  font('Anton', 'anton', 'anton-latin-400-normal.woff2', 400),
  ...[400, 500, 600].map(w => font('Barlow', 'barlow', `barlow-latin-${w}-normal.woff2`, w)),
  ...[500, 600, 700].map(w => font('Barlow Condensed', 'barlow-condensed', `barlow-condensed-latin-${w}-normal.woff2`, w)),
].join('\n')

// ---- tiny static server for studio/
const server = http.createServer((req, res) => {
  const p = path.join(STUDIO, decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html'))
  if (!p.startsWith(STUDIO) || !fs.existsSync(p)) { res.writeHead(404); return res.end() }
  res.writeHead(200, { 'content-type': p.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
})
await new Promise(r => server.listen(0, '127.0.0.1', r))
const url = `http://127.0.0.1:${server.address().port}/index.html`

const executablePath = ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable'].find(fs.existsSync)
const browser = await chromium.launch({ executablePath, args: ['--disable-gpu-vsync', '--hide-scrollbars'] })
const ctx = await browser.newContext({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 })
const page = await ctx.newPage()
await page.route(/fonts\.googleapis\.com/, r => r.fulfill({ status: 200, contentType: 'text/css', body: FONT_CSS }))
await page.route(/fonts\.gstatic\.com/, r => r.abort())
await page.addInitScript(state => { try { localStorage.setItem('specclash-studio-v1', state) } catch {} }, JSON.stringify(matchup))
await page.goto(url, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.click('#btnRec')
await page.waitForTimeout(400)

// ---- capture
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'scstudio-'))
const cdp = await ctx.newCDPSession(page)
const frames = []
cdp.on('Page.screencastFrame', async ({ data, metadata, sessionId }) => {
  const f = path.join(tmp, `f${String(frames.length).padStart(5, '0')}.jpg`)
  fs.writeFileSync(f, Buffer.from(data, 'base64'))
  frames.push({ f, t: metadata.timestamp })
  cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {})
})
await page.mouse.click(270, 600)            // Studio waits 1.2 s after the tap, then plays
await page.waitForTimeout(1100)              // rec hint has faded by now
await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: 1080, maxHeight: 1920, everyNthFrame: 1 })
await page.waitForFunction(() => !document.querySelector('.rec.playing'), null, { timeout: 240000, polling: 250 })
await cdp.send('Page.stopScreencast')
await browser.close(); server.close()

if (frames.length < 30) { console.error(`only ${frames.length} frames captured`); process.exit(1) }

// ---- frames -> constant 30 fps H.264
const list = frames.map((fr, i) => {
  const next = frames[i + 1]?.t ?? fr.t + 1 / 30
  return `file '${fr.f}'\nduration ${Math.max(0.001, next - fr.t).toFixed(4)}`
}).join('\n') + `\nfile '${frames.at(-1).f}'\n`
fs.writeFileSync(path.join(tmp, 'list.txt'), list)
const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error',
  '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'),
  '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
  '-vf', 'fps=30,scale=1080:1920:flags=lanczos,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-profile:v', 'high',
  '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', out], { stdio: 'inherit' })
fs.rmSync(tmp, { recursive: true, force: true })
if (ff.status) process.exit(ff.status)
const secs = frames.at(-1).t - frames[0].t
console.log(`${path.relative(ROOT, out)}  ${secs.toFixed(1)} s  ${frames.length} frames captured  ${(fs.statSync(out).size / 1e6).toFixed(1)} MB`)
