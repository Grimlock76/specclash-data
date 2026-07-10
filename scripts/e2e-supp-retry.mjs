// Repro/regression test: a failed supplement chunk import must not be memoized.
// 1) Block supplement77 → LOAD a Pontiac → expect a visible error (not silence).
// 2) Unblock → LOAD again (same session, no reload) → expect ✓ Loaded.
import { chromium } from 'playwright'

const BASE = process.env.E2E_URL || 'http://localhost:5173'
let pass = 0, fail = 0
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  PASS ${name}`) }
  else { fail++; console.log(`  FAIL ${name} ${extra}`) }
}

const browser = await chromium.launch()
// SW fetches bypass route interception — block SW so aborts hit the app itself.
const context = await browser.newContext({ serviceWorkers: 'block' })
const page = await context.newPage()

let blocked = true
// Abort the chunk import AND the raw-asset fallback fetch, but never the ?url
// string module (in dev it's part of the main module graph — app won't boot).
await page.route('**/*supplement77*', route => {
  const u = route.request().url()
  if (blocked && !/[?&]url(&|$)/.test(u)) return route.abort()
  return route.continue()
})

await page.goto(BASE, { waitUntil: 'networkidle' })
await page.locator('.mms-input').first().fill('pontiac firebird')
await page.locator('.mms-option', { hasText: 'Firebird' }).first().click()
await page.waitForTimeout(400)
await page.locator('select').nth(1).selectOption({ index: 1 })
await page.locator('button', { hasText: 'LOAD' }).first().click()
await page.waitForTimeout(2500)

const bodyText = await page.locator('body').innerText()
check('blocked import shows an error message (not silence)',
  /error|failed|connection|try again/i.test(bodyText), 'no error text found')
check('blocked import does not show ✓ Loaded', !bodyText.includes('✓ Loaded'))

// restore the network and retry WITHOUT reloading the page
blocked = false
await page.locator('button', { hasText: 'LOAD' }).first().click()
const ok = await page.waitForFunction(() => document.body.innerText.includes('✓ Loaded'),
  null, { timeout: 10000 }).then(() => true).catch(() => false)
check('retry after network recovery loads specs (no memoized failure)', ok)

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
