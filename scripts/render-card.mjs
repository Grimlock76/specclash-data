// Render the app's 1080×1920 matchup card from the command line — same
// drawing code as the in-app "⬇ Card" button, same data lookup — so TikTok
// slides always match what the site shows.
//
//   node scripts/render-card.mjs "Nissan|Patrol|2026|Y63 Ti-L+" "Toyota|LandCruiser 300|2026|GR Sport" out.png
import { createCanvas, GlobalFonts, Path2D } from '@napi-rs/canvas'
import { createServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const FONT_DIR = path.join(ROOT, 'node_modules/@fontsource/barlow-condensed/files')
for (const w of [500, 600, 700, 800]) {
  GlobalFonts.registerFromPath(path.join(FONT_DIR, `barlow-condensed-latin-${w}-normal.woff2`), 'Barlow Condensed')
}
globalThis.Path2D = Path2D

export async function loadTools() {
  const vite = await createServer({ root: ROOT, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
  const { lookup } = await vite.ssrLoadModule('/src/data/index.js')
  const card = await vite.ssrLoadModule('/src/utils/matchupCard.js')
  const getCar = async ref => {
    const [make, model, year, trim] = ref.split('|')
    const specs = await lookup(make, model, year, trim)
    if (!specs) throw new Error(`No spec data for ${ref}`)
    return { make, model, year, trim, specs, label: `${year} ${make} ${model} ${trim}` }
  }
  return { vite, getCar, card }
}

export const newCanvas = (w = 1080, h = 1920) => {
  const canvas = createCanvas(w, h)
  return { canvas, ctx: canvas.getContext('2d') }
}
export const savePng = (canvas, file) => fs.writeFileSync(file, canvas.toBuffer('image/png'))

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [a, b, out = 'matchup.png'] = process.argv.slice(2)
  if (!a || !b) { console.error('usage: render-card.mjs "Make|Model|Year|Trim" "Make|Model|Year|Trim" [out.png]'); process.exit(1) }
  const { vite, getCar, card } = await loadTools()
  const cars = [await getCar(a), await getCar(b)]
  const { canvas, ctx } = newCanvas(card.CARD_W, card.CARD_H)
  card.drawMatchupCard(ctx, cars, { font: '"Barlow Condensed"' })
  savePng(canvas, out)
  console.log('wrote', out)
  await vite.close()
}
