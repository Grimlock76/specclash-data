// One-off sweep: load every Pontiac model (first + last year, first trim) and
// report which fail to reach "✓ Loaded".
import { chromium } from 'playwright'

const BASE = process.env.E2E_URL || 'http://localhost:5173'
const browser = await chromium.launch()
const page = await browser.newPage()
page.on('pageerror', e => console.log('  PAGEERROR:', e.message))

const models = ['Firebird', 'GTO', 'Grand Prix', 'Bonneville', 'Grand Am', 'Catalina',
  'Ventura', 'Phoenix', 'Tempest', 'LeMans', 'Safari', 'Aztek', 'Vibe', 'Solstice',
  'Montana', 'Sunbird', 'Sunfire']

const yearSelect = page.locator('select').nth(2)
const trimSelect = page.locator('select').nth(1)

for (const model of models) {
  for (const which of ['first', 'last']) {
    await page.goto(BASE, { waitUntil: 'networkidle' })
    await page.locator('.mms-input').first().fill('pontiac ' + model.toLowerCase())
    const opt = page.locator('.mms-option', { hasText: model }).first()
    if (!(await opt.count())) { console.log(`FAIL ${model}: no search result`); break }
    await opt.click()
    await page.waitForTimeout(300)
    const years = (await yearSelect.locator('option').allTextContents()).filter(y => /^\d{4}$/.test(y))
    if (!years.length) { console.log(`FAIL ${model}: no years`); break }
    const yr = which === 'first' ? years[0] : years[years.length - 1]
    await yearSelect.selectOption(yr)
    await page.waitForTimeout(200)
    const trims = await trimSelect.locator('option').allTextContents()
    if (trims.length < 2) { console.log(`FAIL ${model} ${yr}: no trims`); continue }
    await trimSelect.selectOption({ index: 1 })
    await page.locator('button', { hasText: 'LOAD' }).first().click()
    const ok = await page.waitForFunction(() => document.body.innerText.includes('✓ Loaded'),
      null, { timeout: 8000 }).then(() => true).catch(() => false)
    const err = await page.locator('text=Specs not found').count()
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${model} ${yr} "${trims[1]}"${err ? ' [Specs not found]' : ''}`)
  }
}
await browser.close()
