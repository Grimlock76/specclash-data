// Builds the TikTok post queue from the weekly content packs.
//
//   node scripts/build-post-queue.mjs
//
// For every post in studio/packs/*.json (last 3 weeks + anything upcoming):
//   - renders studio/matchups/<slug>.json to MP4 if it isn't rendered yet
//   - copies the video to public/queue/<slug>.mp4
//   - writes public/queue/queue.json (what the queue page shows)
//   - writes public/queue/calendar.ics (subscribe once, posting slots appear)
// Older videos are dropped from public/queue so the repo doesn't balloon.
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PACKS = path.join(ROOT, 'studio/packs')
const OUT = path.join(ROOT, 'studio/out')
const Q = path.join(ROOT, 'public/queue')
const KEEP_DAYS = 21

fs.mkdirSync(Q, { recursive: true })
const now = Date.now()
const posts = fs.readdirSync(PACKS).filter(f => f.endsWith('.json')).sort()
  .flatMap(f => JSON.parse(fs.readFileSync(path.join(PACKS, f), 'utf8')).posts)
  .filter(p => new Date(p.post_at).getTime() > now - KEEP_DAYS * 864e5)
  .sort((a, b) => new Date(a.post_at) - new Date(b.post_at))

for (const p of posts) {
  const src = path.join(OUT, `${p.slug}.mp4`)
  if (!fs.existsSync(src)) {
    console.log(`rendering ${p.slug}…`)
    const r = spawnSync('node', ['scripts/render-studio-video.mjs', `studio/matchups/${p.slug}.json`, src], { cwd: ROOT, stdio: 'inherit' })
    if (r.status) process.exit(r.status)
  }
  fs.copyFileSync(src, path.join(Q, `${p.slug}.mp4`))
}

// drop videos no longer in the queue
const keep = new Set(posts.map(p => `${p.slug}.mp4`))
for (const f of fs.readdirSync(Q)) if (f.endsWith('.mp4') && !keep.has(f)) fs.rmSync(path.join(Q, f))

const queue = posts.map(p => {
  const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'studio/matchups', `${p.slug}.json`), 'utf8'))
  return { ...p, video: `/queue/${p.slug}.mp4`, sources: m._sources || [] }
})
fs.writeFileSync(path.join(Q, 'queue.json'), JSON.stringify({ updated: new Date().toISOString(), posts: queue }, null, 2) + '\n')

// ---- calendar feed
const ics = s => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
const utc = d => new Date(d).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const fold = line => line.match(/.{1,73}/g).join('\r\n ')
const ev = queue.flatMap(p => [
  'BEGIN:VEVENT',
  `UID:${p.slug}@spec-clash.vercel.app`,
  `DTSTAMP:${utc(now)}`,
  `DTSTART:${utc(p.post_at)}`,
  `DTEND:${utc(new Date(p.post_at).getTime() + 15 * 60e3)}`,
  fold(`SUMMARY:${ics('Post TikTok: ' + p.title)}`),
  fold(`DESCRIPTION:${ics(`Open the queue: https://spec-clash.vercel.app/queue/\n\nCaption:\n${p.caption}\n${p.hashtags.join(' ')}\n\nSound ideas:\n- ${p.sounds.join('\n- ')}`)}`),
  'URL:https://spec-clash.vercel.app/queue/',
  'BEGIN:VALARM', 'ACTION:DISPLAY', fold(`DESCRIPTION:${ics('Post ' + p.title + ' in 15 min')}`), 'TRIGGER:-PT15M', 'END:VALARM',
  'END:VEVENT',
])
fs.writeFileSync(path.join(Q, 'calendar.ics'), [
  'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Spec Clash//Post Queue//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
  'X-WR-CALNAME:Spec Clash posts', 'X-WR-TIMEZONE:Australia/Perth', 'REFRESH-INTERVAL;VALUE=DURATION:PT6H',
  ...ev, 'END:VCALENDAR', '',
].join('\r\n'))

console.log(`queue: ${queue.length} posts → public/queue/ (queue.json, calendar.ics, videos)`)
