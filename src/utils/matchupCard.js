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

function drawSilhouette(ctx, key, color, x, y, w) {
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

export function downloadMatchupCard(loaded) {
  const cars = loaded.slice(0, 2)
  if (cars.length < 2) return
  const W = 1080, H = 1920
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')
  const F = w => `${w} "Barlow Condensed", sans-serif`

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
    const arch = pickArchetype(getBodyType(c.model, c.trim), { year: c.year, make: c.make, model: c.model })
    drawSilhouette(ctx, arch, color, (W - 620) / 2, y, 620)
    ctx.fillStyle = color; ctx.font = F('700 52px')
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
      ctx.font = F(win === i ? '700 40px' : '500 40px')
      const text = (win === i ? '▲ ' : '') + String(vals[i]).slice(0, 22)
      ctx.fillText(text, i === 0 ? 70 : W - 70, y)
    }
    ctx.strokeStyle = '#161616'; ctx.beginPath()
    ctx.moveTo(60, y + 34); ctx.lineTo(W - 60, y + 34); ctx.stroke()
    y += 105
  }

  // verdict
  ctx.textAlign = 'center'
  if (wins[0] !== wins[1]) {
    const w = wins[0] > wins[1] ? 0 : 1
    ctx.fillStyle = SLOT_COLORS[w]; ctx.font = F('800 58px')
    ctx.fillText(`🏁 ${cars[w].label.toUpperCase()} WINS ${Math.max(...wins)}–${Math.min(...wins)}`, W / 2, y + 60)
  } else {
    ctx.fillStyle = '#888888'; ctx.font = F('800 58px')
    ctx.fillText(`🏁 DEAD HEAT ${wins[0]}–${wins[1]}`, W / 2, y + 60)
  }

  // footer
  ctx.fillStyle = '#3a3a3a'; ctx.font = F('600 42px')
  ctx.fillText('spec-clash.vercel.app', W / 2, H - 70)

  canvas.toBlob(blob => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `specclash-${cars[0].model}-vs-${cars[1].model}`
      .toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-') + '.png'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 5000)
  }, 'image/png')
}
