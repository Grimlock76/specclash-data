// e2e for the body-type filter: contextual options per model, trim narrowing,
// and search pre-filtering.
import { chromium } from 'playwright'

const BASE = process.env.E2E_URL || 'http://localhost:5173'
let pass = 0, fail = 0
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  PASS ${name}`) }
  else { fail++; console.log(`  FAIL ${name} ${extra}`) }
}

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(BASE, { waitUntil: 'networkidle' })

const bodySelect = n => page.locator('select').nth(n * 3)
const trimSelect = n => page.locator('select').nth(n * 3 + 1)
const pickModel = async (n, query, optionText) => {
  await page.locator('.mms-input').nth(n).fill(query)
  await page.locator('.mms-option', { hasText: optionText }).first().click()
  await page.waitForTimeout(300)
}

// --- Contextual body options: Commodore offers Sedan/Wagon/Ute, not Coupe ---
await pickModel(0, 'holden commodore', 'Commodore')
const opts = await bodySelect(0).locator('option').allTextContents()
check('Commodore body options include Sedan+Wagon+Ute',
  ['Sedan', 'Wagon', 'Ute'].every(b => opts.includes(b)), JSON.stringify(opts))
check('Commodore body options exclude Coupe/Van', !opts.includes('Coupe') && !opts.includes('Van / Commercial'), JSON.stringify(opts))

// --- Filtering narrows trims: Wagon-only shows wagon trims ---
const allTrims = await trimSelect(0).locator('option').count()
await bodySelect(0).selectOption('Wagon')
await page.waitForTimeout(200)
const wagonTrims = await trimSelect(0).locator('option').allTextContents()
check('Wagon filter narrows the trim list', wagonTrims.length > 1 && wagonTrims.length < allTrims,
  `${wagonTrims.length} vs ${allTrims}`)
check('Wagon trims look like wagons', wagonTrims.slice(1).every(t => /sportwagon|wagon|adventra/i.test(t)),
  wagonTrims.slice(1, 4).join(', '))

// wagon trim loads
await trimSelect(0).selectOption({ index: 1 })
await page.locator('button', { hasText: 'LOAD' }).first().click()
await page.waitForFunction(() => document.body.innerText.includes('✓ Loaded'), null, { timeout: 15000 }).catch(() => {})
check('filtered wagon trim loads', await page.locator('text=✓ Loaded').count() === 1)

// --- Single-body model: Ferrari 488 GTB offers only Coupe (audit fix) ---
await pickModel(1, 'ferrari 488', '488 GTB')
const fOpts = await bodySelect(1).locator('option').allTextContents()
check('488 GTB offers only Coupe', fOpts.length === 2 && fOpts.includes('Coupe'), JSON.stringify(fOpts))

// --- Search pre-filter: body=Ute then searching "kia" surfaces Tasman ---
await page.goto(BASE, { waitUntil: 'networkidle' })
await bodySelect(0).selectOption('Ute')
await page.locator('.mms-input').first().fill('kia')
await page.waitForTimeout(400)
const results = await page.locator('.mms-option').allTextContents()
check('Ute pre-filter: kia → Tasman present', results.some(r => /Tasman/.test(r)), results.slice(0, 3).join(' | '))
check('Ute pre-filter: kia sedans absent', !results.some(r => /Stinger|Optima/.test(r)), results.slice(0, 5).join(' | '))

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
