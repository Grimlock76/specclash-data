// TikTok photo-carousel generator (1080×1920 slides) driven by the app's own
// spec lookup, so every number on a slide is exactly what the site shows.
//
//   node scripts/render-carousel.mjs scripts/carousels/patrol-y63-vs-lc300.json out-dir/
//
// Config: { hook: [lines], sub, cars: ["Make|Model|Year|Trim", …2],
//           names?: [short names], slides: [{ title, rows: [[key, label, higherWins], …] }],
//           missing?: "TBA", outro?: [lines], notes?: "source line on every slide" }
// higherWins: true / false / null (null = shown but not scored).
import fs from 'node:fs'
import path from 'node:path'
import { loadTools, newCanvas, savePng } from './render-card.mjs'
import { pickArchetype } from '../src/utils/archetype.js'
import { getBodyType } from '../src/utils/bodyType.js'

const [cfgPath, outDir = 'carousel'] = process.argv.slice(2)
if (!cfgPath) { console.error('usage: render-carousel.mjs config.json [outDir]'); process.exit(1) }
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
fs.mkdirSync(outDir, { recursive: true })

const W = 1080, H = 1920
const LIME = '#C8F04A', BLUE = '#60C8FF', COLORS = [LIME, BLUE]
const F = w => `${w} "Barlow Condensed"`
const num = v => {
  const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : null
}
const isMissing = v => v == null || v === '' || v === '—'

const { vite, getCar, card } = await loadTools()
const cars = await Promise.all(cfg.cars.map(getCar))
const names = cfg.names || cars.map(c => `${c.make} ${c.model} ${c.trim}`)
const total = cfg.slides.length + 2
const tally = [0, 0]
let scorable = 0, unscored = 0

function fit(ctx, text, weight, size, maxW, min = 26) {
  let s = size
  ctx.font = F(`${weight} ${s}px`)
  while (s > min && ctx.measureText(text).width > maxW) { s -= 2; ctx.font = F(`${weight} ${s}px`) }
}

function frame(ctx, idx) {
  ctx.fillStyle = '#080808'; ctx.fillRect(0, 0, W, H)
  ctx.textAlign = 'center'
  ctx.font = F('800 72px')
  const lw = ctx.measureText('SPECCLASH').width
  ctx.textAlign = 'left'
  ctx.fillStyle = '#fff'; ctx.fillText('SPEC', (W - lw) / 2, 120)
  ctx.fillStyle = LIME; ctx.fillText('CLASH', (W - lw) / 2 + ctx.measureText('SPEC').width, 120)
  ctx.textAlign = 'center'
  ctx.fillStyle = '#444'; ctx.font = F('600 34px')
  ctx.fillText(`${idx} / ${total}`, W / 2, 170)
  ctx.fillStyle = LIME; ctx.font = F('700 40px')
  ctx.fillText('@specclash05', W / 2, H - 120)
  ctx.fillStyle = '#3a3a3a'; ctx.font = F('600 38px')
  ctx.fillText('spec-clash.vercel.app', W / 2, H - 70)
  if (cfg.notes) { ctx.fillStyle = '#3a3a3a'; ctx.font = F('500 28px'); ctx.fillText(cfg.notes, W / 2, H - 185) }
}

const silhouettes = (ctx, y, w = 440) => cars.forEach((c, i) => {
  const arch = pickArchetype(getBodyType(c.model, c.trim), { year: c.year, make: c.make, model: c.model })
  card.drawSilhouette(ctx, arch, COLORS[i], i === 0 ? 60 : W - 60 - w, y, w)
})

// ── 1: hook ──
{
  const { canvas, ctx } = newCanvas(W, H)
  frame(ctx, 1)
  ctx.fillStyle = '#fff'
  let y = 420
  for (const line of cfg.hook) { fit(ctx, line, 800, 120, W - 100); ctx.fillText(line, W / 2, y); y += 130 }
  if (cfg.sub) { ctx.fillStyle = '#888'; fit(ctx, cfg.sub, 600, 50, W - 120); ctx.fillText(cfg.sub, W / 2, y + 20) }
  silhouettes(ctx, 1050)
  names.forEach((n, i) => {
    ctx.fillStyle = COLORS[i]; ctx.textAlign = i === 0 ? 'left' : 'right'
    fit(ctx, n.toUpperCase(), 700, 44, 460); ctx.fillText(n.toUpperCase(), i === 0 ? 60 : W - 60, 1270)
  })
  ctx.textAlign = 'center'; ctx.fillStyle = '#2c2c2c'; ctx.font = F('800 90px'); ctx.fillText('VS', W / 2, 1180)
  ctx.fillStyle = LIME; ctx.font = F('800 56px'); ctx.fillText('SWIPE →', W / 2, 1520)
  savePng(canvas, path.join(outDir, '01-hook.png'))
}

// ── category slides ──
cfg.slides.forEach((slide, si) => {
  const { canvas, ctx } = newCanvas(W, H)
  frame(ctx, si + 2)
  ctx.fillStyle = '#fff'; ctx.font = F('800 110px'); ctx.fillText(slide.title.toUpperCase(), W / 2, 330)
  names.forEach((n, i) => {
    ctx.fillStyle = COLORS[i]; ctx.textAlign = i === 0 ? 'left' : 'right'
    fit(ctx, n.toUpperCase(), 700, 42, 470); ctx.fillText(n.toUpperCase(), i === 0 ? 60 : W - 60, 430)
  })
  // Centre the rows in the space between the names and the footer
  const rowH = Math.min(260, Math.floor(1100 / slide.rows.length))
  let y = Math.round(520 + (1180 - rowH * slide.rows.length) / 2 + 40)
  for (const [key, label, higher] of slide.rows) {
    const raw = cars.map(c => c.specs?.[key])
    const vals = raw.map(v => (isMissing(v) ? (cfg.missing || '—') : String(v)))
    const nums = raw.map(v => (isMissing(v) ? null : num(v)))
    let win = -1
    if (higher != null) { scorable++; if (nums[0] == null || nums[1] == null) unscored++ }
    if (higher != null && nums[0] != null && nums[1] != null && nums[0] !== nums[1]) {
      win = (higher ? nums[0] > nums[1] : nums[0] < nums[1]) ? 0 : 1
      tally[win]++
    }
    ctx.textAlign = 'center'; ctx.fillStyle = '#666'; ctx.font = F('700 44px'); ctx.fillText(label.toUpperCase(), W / 2, y)
    for (const i of [0, 1]) {
      ctx.textAlign = i === 0 ? 'left' : 'right'
      ctx.fillStyle = win === i ? COLORS[i] : (isMissing(raw[i]) ? '#555' : '#d0d0d0')
      const t = (win === i ? '▲ ' : '') + vals[i]
      fit(ctx, t, win === i ? 800 : 600, 76, W / 2 - 80)
      ctx.fillText(t, i === 0 ? 60 : W - 60, y + 95)
    }
    ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 2; ctx.beginPath()
    ctx.moveTo(60, y + 140); ctx.lineTo(W - 60, y + 140); ctx.stroke()
    y += rowH
  }
  savePng(canvas, path.join(outDir, `${String(si + 2).padStart(2, '0')}-${slide.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`))
})

// ── verdict ──
{
  const { canvas, ctx } = newCanvas(W, H)
  frame(ctx, total)
  ctx.fillStyle = '#fff'; ctx.font = F('800 110px'); ctx.fillText('THE VERDICT', W / 2, 330)
  silhouettes(ctx, 470)
  ctx.font = F('800 200px')
  ctx.fillStyle = LIME; ctx.textAlign = 'left'; ctx.fillText(String(tally[0]), 140, 920)
  ctx.fillStyle = BLUE; ctx.textAlign = 'right'; ctx.fillText(String(tally[1]), W - 140, 920)
  ctx.textAlign = 'center'; ctx.fillStyle = '#2c2c2c'; ctx.fillText('–', W / 2, 910)
  const lead = tally[0] === tally[1] ? null : (tally[0] > tally[1] ? 0 : 1)
  // Don't crown a winner on half the data: missing specs aren't scored
  const partial = unscored > 0
  const verdict = lead == null ? 'DEAD HEAT ON PAPER'
    : `${partial ? 'EARLY LEAD: ' : ''}${names[lead].toUpperCase()}${partial ? '' : ' TAKES IT'}`
  ctx.fillStyle = lead == null ? '#aaa' : COLORS[lead]
  fit(ctx, verdict, 800, 80, W - 100); ctx.fillText(verdict, W / 2, 1060)
  let y = 1200
  if (partial) {
    ctx.fillStyle = '#777'; fit(ctx, `${unscored} spec${unscored > 1 ? 's' : ''} still TBA — not scored yet`, 600, 44, W - 120)
    ctx.fillText(`${unscored} spec${unscored > 1 ? 's' : ''} still TBA — not scored yet`, W / 2, 1140); y = 1260
  }
  ctx.fillStyle = '#bbb'
  for (const line of cfg.outro || ['Which one would you take?', 'Compare any two cars free ↓']) {
    fit(ctx, line, 600, 56, W - 120); ctx.fillText(line, W / 2, y); y += 80
  }
  savePng(canvas, path.join(outDir, `${String(total).padStart(2, '0')}-verdict.png`))
}

console.log(`wrote ${total} slides to ${outDir} (score ${tally[0]}–${tally[1]})`)
await vite.close()
