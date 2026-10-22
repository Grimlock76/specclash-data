// Renders a loaded comparison as a 1080x1920 story-format PNG (TikTok /
// Instagram / Shorts) and triggers a download. Drawn entirely on canvas —
// silhouettes via Path2D from the shared hand-authored path data, text in
// the app's Barlow Condensed (already loaded by the page).
import { DARK, poly, PATHS } from './silhouettePaths.js'
import { pickArchetype } from './archetype.js'
import { getBodyType } from './bodyType.js'

const SLOT_COLORS = ['#C8F04A', '#60C8FF']
const ROWS = [
  ['hp', 'POWER', true], ['tq', 'TORQUE', true], ['z1', '0–100 KM/H', false],
  ['ts', 'TOP SPEED', true], ['wt', 'WEIGHT', false], ['pr', 'PRICE NEW', false],
]
const num = v => {
  const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : null
}

export function drawSilhouette(ctx, key, color, x, y, w) {
  const { body, windows = [], lite = [], deco = [], dark = [] } = PATHS[key] || PATHS.sedanModern
  const s = w / 200
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(s, s)
  const fill = (paths, colour) => {
    if (!paths.length) return
    ctx.fillStyle = colour
    for (const p of paths) ctx.fill(new Path2D(poly(p)))
  }
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath(); ctx.ellipse(100, 72, 92, 2.5, 0, 0, Math.PI * 2); ctx.fill()
  fill(deco, color)
  ctx.fillStyle = color
  ctx.fill(new Path2D(body))
  fill(windows, DARK)
  fill(dark.length ? dark : [], DARK)
  ctx.globalAlpha = 0.4
  fill(lite, '#ffffff')
  ctx.globalAlpha = 1
  const wheelR = /fourWheelDriveBox|uteDualcab/.test(key) ? 10.5 : 9.5
  for (const cx of [48, 152]) {
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(cx, 64, wheelR, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = DARK; ctx.beginPath(); ctx.arc(cx, 64, wheelR - 4, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(cx, 64, wheelR - 7, 0, Math.PI * 2); ctx.fill()
  }
  ctx.restore()
}

export const CARD_W = 1080
export const CARD_H = 1920

// Shrink a font until `text` fits `maxW` (long trims like "Y63 Ti-L Reserve"
// otherwise run off the 1080px card).
function fitFont(ctx, text, weight, size, maxW, F, min = 26) {
  let s = size
  ctx.font = F(`${weight} ${s}px`)
  while (s > min && ctx.measureText(text).width > maxW) { s -= 2; ctx.font = F(`${weight} ${s}px`) }
  return s
}

// Pure canvas drawing — no DOM — so scripts/render-card.mjs can reuse it in Node.
export function drawMatchupCard(ctx, cars, { font = '"Barlow Condensed", sans-serif', handle = '@specclash05' } = {}) {
  const W = CARD_W, H = CARD_H
  const F = w => `${w} ${font}`

  ctx.fillStyle = '#080808'; ctx.fillRect(0, 0, W, H)

  // header
  ctx.textAlign = 'center'
  ctx.font = F('800 110px')
  const logoW = ctx.measureText('SPECCLASH').width
  ctx.textAlign = 'left'
  ctx.fillStyle = '#ffffff'; ctx.fillText('SPEC', (W - logoW) / 2, 150)
  ctx.fillStyle = '#C8F04A'; ctx.fillText('CLASH', (W - logoW) / 2 + ctx.measureText('SPEC').width, 150)
  ctx.textAlign = 'center'
  ctx.fillStyle = '#555555'; ctx.font = F('600 40px')
  ctx.fillText('H E A D - T O - H E A D', W / 2, 215)

  // cars + VS
  const wins = [0, 0]
  cars.forEach((c, i) => {
    const y = i === 0 ? 255 : 665
    const color = SLOT_COLORS[i]
    const arch = pickArchetype(getBodyType(c.model, c.trim, c.make), { year: c.year, make: c.make, model: c.model })
    drawSilhouette(ctx, arch, color, (W - 620) / 2, y, 620)
    ctx.fillStyle = color
    fitFont(ctx, c.label.toUpperCase(), 700, 52, W - 100, F)
    ctx.fillText(c.label.toUpperCase(), W / 2, y + 290)
  })
  ctx.fillStyle = '#2c2c2c'; ctx.font = F('800 84px')
  ctx.fillText('VS', W / 2, 632)

  // spec rows
  let y = 1050
  ctx.font = F('600 34px')
  for (const [key, label, higher] of ROWS) {
    const vals = cars.map(c => c.specs?.[key] ?? '—')
    const nums = vals.map(num)
    let win = -1
    if (nums[0] != null && nums[1] != null && nums[0] !== nums[1]) {
      win = (higher ? nums[0] > nums[1] : nums[0] < nums[1]) ? 0 : 1
      wins[win]++
    }
    ctx.fillStyle = '#666666'; ctx.font = F('700 34px'); ctx.textAlign = 'center'
    ctx.fillText(label, W / 2, y)
    for (const i of [0, 1]) {
      ctx.textAlign = i === 0 ? 'left' : 'right'
      ctx.fillStyle = win === i ? SLOT_COLORS[i] : '#c8c8c8'
      const text = (win === i ? '▲ ' : '') + String(vals[i]).slice(0, 26)
      fitFont(ctx, text, win === i ? 700 : 500, 40, W / 2 - 90, F)
      ctx.fillText(text, i === 0 ? 70 : W - 70, y)
    }
    ctx.strokeStyle = '#161616'; ctx.beginPath()
    ctx.moveTo(60, y + 34); ctx.lineTo(W - 60, y + 34); ctx.stroke()
    y += 105
  }

  // verdict
  ctx.textAlign = 'center'
  if (wins[0] + wins[1] < 3) {
    // Too few rows with data on both sides — a "WINS 1–0" verdict would mislead
    ctx.fillStyle = '#888888'; ctx.font = F('800 52px')
    ctx.fillText('NOT ENOUGH SPECS FOR A VERDICT', W / 2, y + 60)
  } else if (wins[0] !== wins[1]) {
    const w = wins[0] > wins[1] ? 0 : 1
    const verdict = `${cars[w].label.toUpperCase()} WINS ${Math.max(...wins)}–${Math.min(...wins)}`
    ctx.fillStyle = SLOT_COLORS[w]
    fitFont(ctx, verdict, 800, 58, W - 100, F)
    ctx.fillText(verdict, W / 2, y + 60)
  } else {
    ctx.fillStyle = '#888888'; ctx.font = F('800 58px')
    ctx.fillText(`DEAD HEAT ${wins[0]}–${wins[1]}`, W / 2, y + 60)
  }

  // footer
  ctx.fillStyle = '#3a3a3a'; ctx.font = F('600 42px')
  ctx.fillText('spec-clash.vercel.app', W / 2, H - 70)
  if (handle) {
    ctx.fillStyle = '#C8F04A'; ctx.font = F('700 40px')
    ctx.fillText(handle, W / 2, H - 125)
  }
}

export function downloadMatchupCard(loaded) {
  const cars = loaded.slice(0, 2)
  if (cars.length < 2) return
  const canvas = document.createElement('canvas')
  canvas.width = CARD_W; canvas.height = CARD_H
  drawMatchupCard(canvas.getContext('2d'), cars)

  canvas.toBlob(blob => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `specclash-${cars[0].model}-vs-${cars[1].model}`
      .toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-') + '.png'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 5000)
  }, 'image/png')
}
