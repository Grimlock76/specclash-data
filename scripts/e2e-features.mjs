// e2e for v1.7 features: Δ% mode, scoring presets, recent comparisons, random matchup
import { chromium } from 'playwright'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const BASE = process.env.E2E_URL || 'http://localhost:5173'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const makes = JSON.parse(readFileSync(join(root, 'src/data/makes.json'), 'utf8'))

let pass = 0, fail = 0
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  PASS ${name}`) }
  else { fail++; console.log(`  FAIL ${name} ${extra}`) }
}

// Deterministic pair straight from the data
const vfYear = Object.keys(makes.Holden.Commodore).find(y => makes.Holden.Commodore[y].includes('VF SS'))
const zrYear = Object.keys(makes.Toyota.Corolla).find(y => makes.Toyota.Corolla[y].includes('ZR'))
const carUrl = `${BASE}/?c0=${encodeURIComponent(`Holden|Commodore|${vfYear}|VF SS`)}&c1=${encodeURIComponent(`Toyota|Corolla|${zrYear}|ZR`)}`

const browser = await chromium.launch()
const page = await browser.newPage()
const waitLoaded = async n => {
  await page.waitForFunction(
    n => document.body.innerText.split('✓ Loaded').length - 1 >= n,
    n, { timeout: 15000 }
  ).catch(() => {})
  return await page.locator('text=✓ Loaded').count()
}

// --- URL-seeded load (also covers the seeds/epoch refactor) ---
await page.goto(carUrl, { waitUntil: 'networkidle' })
check('URL params load both cars', await waitLoaded(2) >= 2)

// --- Δ% toggle ---
await page.locator('button', { hasText: 'Δ %' }).click()
await page.waitForTimeout(300)
const deltas = await page.locator('.delta-pct').count()
check('Δ% mode annotates non-best cells', deltas > 3, `got ${deltas}`)
await page.locator('button', { hasText: 'Δ %' }).click()
await page.waitForTimeout(200)
check('Δ% toggles back off', await page.locator('.delta-pct').count() === 0)

// --- Scoring presets ---
check('preset chips render', await page.locator('.sc-chip').count() === 4)
const winsBefore = await page.locator('text=WINS THE CLASH').textContent()
await page.locator('.sc-chip', { hasText: 'Economy' }).click()
await page.waitForTimeout(300)
const winsAfter = await page.locator('text=WINS THE CLASH').textContent()
check('Economy preset flips the verdict (VF SS vs Corolla)', winsBefore !== winsAfter,
  `before="${winsBefore}" after="${winsAfter}"`)
await page.locator('.sc-chip', { hasText: 'Balanced' }).click()

// Custom is Pro-gated: not Pro → opens the Pro panel instead of activating
await page.locator('.sc-chip', { hasText: 'Custom' }).click()
await page.waitForTimeout(300)
check('Custom chip opens Pro panel for free users', await page.locator('.modal-backdrop').count() === 1)
await page.keyboard.press('Escape')
await page.locator('.modal-backdrop').click({ position: { x: 5, y: 5 } }).catch(() => {})
await page.waitForTimeout(200)

// --- Recent comparisons ---
await page.goto(BASE, { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
const chipText = await page.locator('.recent-chip').first().textContent().catch(() => '')
check('recent chip recorded from previous comparison', chipText.includes('Commodore'), `got "${chipText}"`)
await page.locator('.recent-chip').first().click()
check('recent chip reloads the matchup', await waitLoaded(2) >= 2)

// --- Random matchup ---
await page.waitForTimeout(600) // let the recent-chip reload settle before clicking
await page.locator('button', { hasText: 'Random' }).click()
await page.waitForTimeout(400) // slots clear + remount
check('random matchup loads two cars', await waitLoaded(2) >= 2)

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
