// e2e for supplement244: Duster (new model), Superb gen4 (replaced trims),
// Audi Q5 gen3 (replaced 2026 trims incl. e-hybrid PHEV).
import { chromium } from 'playwright'

const BASE = process.env.E2E_URL || 'http://localhost:5173'
let pass = 0, fail = 0
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  PASS ${name}`) }
  else { fail++; console.log(`  FAIL ${name} ${extra}`) }
}

const browser = await chromium.launch()
const page = await browser.newPage()
// Pro unlocks slots 3+4 (client-side flag)
await page.addInitScript(() => { try { localStorage.setItem('sc_pro', '1') } catch {} })
await page.goto(BASE, { waitUntil: 'networkidle' })

const yearSelect = n => page.locator('select').nth(n * 3 + 2)
const bodySelect = n => page.locator('select').nth(n * 3)
const trimSelect = n => page.locator('select').nth(n * 3 + 1)
const pickModel = async (n, query, optionText) => {
  await page.locator('.mms-input').nth(n).fill(query)
  await page.locator('.mms-option', { hasText: optionText }).first().click()
  await page.waitForTimeout(300)
}
const loadSlot = async n => {
  await page.locator('button', { hasText: 'LOAD' }).nth(n).click()
  await page.waitForFunction(c => document.body.innerText.split('✓ Loaded').length - 1 >= c,
    n + 1, { timeout: 15000 }).catch(() => {})
}

// --- Renault Duster: new model, SUV body, 4x4 trim loads ---
await pickModel(0, 'renault duster', 'Duster')
const dOpts = await bodySelect(0).locator('option').allTextContents()
check('Duster body options are SUV only', dOpts.length === 2 && dOpts.includes('SUV'), JSON.stringify(dOpts))
await yearSelect(0).selectOption('2026')
await page.waitForTimeout(200)
const dTrims = await trimSelect(0).locator('option').allTextContents()
check('Duster 2026 has 4 trims', dTrims.length === 5, JSON.stringify(dTrims))
await trimSelect(0).selectOption('Techno 4x4')
await loadSlot(0)
check('Duster Techno 4x4 loads', await page.locator('text=✓ Loaded').count() === 1)

// --- Superb gen4: 2026 = Sportline sedan + wagon only, no Style/iV ---
await pickModel(1, 'skoda superb', 'Superb')
await yearSelect(1).selectOption('2026')
await page.waitForTimeout(200)
const sTrims = await trimSelect(1).locator('option').allTextContents()
check('Superb 2026 trims are gen4 Sportline pair',
  sTrims.includes('Sportline') && sTrims.includes('Sportline Wagon') &&
  !sTrims.includes('Style') && !sTrims.includes('iV'), JSON.stringify(sTrims))
const sBodies = await bodySelect(1).locator('option').allTextContents()
check('Superb offers Sedan + Wagon bodies', sBodies.includes('Sedan') && sBodies.includes('Wagon'), JSON.stringify(sBodies))
await trimSelect(1).selectOption('Sportline')
await loadSlot(1)
check('Superb gen4 Sportline loads', await page.locator('text=✓ Loaded').count() === 2)
check('Superb shows 195 kW', (await page.locator('body').innerText()).includes('195'))

// --- Audi Q5 gen3: 2026 e-hybrid quattro loads; gen2 trims gone ---
await pickModel(2, 'audi q5', 'Q5')
await yearSelect(2).selectOption('2026')
await page.waitForTimeout(200)
const qTrims = await trimSelect(2).locator('option').allTextContents()
check('Q5 2026 trims are gen3 (no 40/45 TFSI)',
  qTrims.includes('e-hybrid quattro') && !qTrims.some(t => /^4[05] TFSI/.test(t)), JSON.stringify(qTrims))
await trimSelect(2).selectOption('e-hybrid quattro')
await loadSlot(2)
check('Q5 e-hybrid quattro loads', await page.locator('text=✓ Loaded').count() === 3)

// --- SQ5 gen3 edition one loads ---
await pickModel(3, 'audi sq5', 'SQ5')
await yearSelect(3).selectOption('2026')
await page.waitForTimeout(200)
await trimSelect(3).selectOption('TFSI edition one')
await loadSlot(3)
check('SQ5 TFSI edition one loads', await page.locator('text=✓ Loaded').count() === 4)

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
