// e2e check for generation-grouped trim dropdown (Slot.jsx buildTrimGroups)
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

const slot = n => page.locator('.mms-input').nth(n)
const pickModel = async (n, query, optionText) => {
  await slot(n).fill(query)
  await page.locator('.mms-option', { hasText: optionText }).first().click()
}
// selects per slot card: [bodyType, trim, year]
const trimSelect = n => page.locator('select').nth(n * 3 + 1)
const yearSelect = n => page.locator('select').nth(n * 3 + 2)

// --- Slot 1: Holden Commodore → grouped trims ---
await pickModel(0, 'holden commodore', 'Commodore')
await page.waitForTimeout(400)

const groups = await trimSelect(0).locator('optgroup').evaluateAll(
  els => els.map(e => ({ label: e.label, count: e.querySelectorAll('option').length }))
)
check('Commodore trim list is grouped (optgroups present)', groups.length >= 5, `got ${groups.length}`)

const labels = groups.map(g => g.label)
const iVB = labels.indexOf('VB'), iVF = labels.indexOf('VF'), iZB = labels.indexOf('ZB')
check('has VB, VF, ZB generation groups', iVB >= 0 && iVF >= 0 && iZB >= 0, JSON.stringify(labels))
check('groups ordered by first year (VB < VF < ZB)', iVB < iVF && iVF < iZB, JSON.stringify(labels))
check('every group holds >= 1 trim', groups.every(g => g.count >= 1))

const totalOpts = await trimSelect(0).locator('option').count()
const flatTop = await trimSelect(0).locator('> option').count() // placeholder + ungrouped '—' bucket
console.log(`  info: ${groups.length} groups, ${totalOpts - flatTop} grouped / ${totalOpts - 1} total trims, ${flatTop - 1} ungrouped`)

// pick a grouped trim and LOAD
await trimSelect(0).selectOption('VF SS')
await page.locator('button', { hasText: 'LOAD' }).first().click()
await page.waitForTimeout(1500)
check('VF SS loads specs (✓ Loaded)', await page.locator('text=✓ Loaded').count() >= 1)

// picking a year should collapse back to a flat list
await yearSelect(0).selectOption({ index: 1 })
await page.waitForTimeout(200)
const groupsWithYear = await trimSelect(0).locator('optgroup').count()
check('selecting a year reverts to flat trim list', groupsWithYear === 0, `got ${groupsWithYear} optgroups`)

// --- Slot 2: Toyota Corolla → flat list (no bogus grouping) ---
await pickModel(1, 'toyota corolla', 'Corolla')
await page.waitForTimeout(400)
const corollaGroups = await trimSelect(1).locator('optgroup').count()
const corollaOpts = await trimSelect(1).locator('option').count()
check('Corolla trim list stays flat', corollaGroups === 0, `got ${corollaGroups} optgroups`)
check('Corolla trims populated', corollaOpts > 10, `got ${corollaOpts}`)

// flat-model load still works (slot 1's ✓ cleared when its year changed, so expect 1)
await trimSelect(1).selectOption({ index: 1 })
await page.locator('button', { hasText: 'LOAD' }).nth(1).click()
await page.waitForTimeout(1500)
check('Corolla trim loads specs', await page.locator('text=✓ Loaded').count() >= 1)

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
