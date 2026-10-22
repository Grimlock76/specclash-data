// Field-level gap report → gaps.json
//
// Mirrors src/data/index.js exactly: core files (supplement1-8, holden, ford,
// supplement9) then that make's lazy supplements from makeSupps.json, with the
// same exact → no-make → ±2 year lookup. So a trim reported here is a trim
// that shows "—" in the live app, not just a key that's missing somewhere.
//
// Usage: node scripts/spec-gaps.cjs            (writes gaps.json, prints summary)
//        node scripts/spec-gaps.cjs Holden     (also lists that make's gaps)
const fs = require('fs')
const path = require('path')
const DATA = path.join(__dirname, '..', 'src', 'data')
const read = f => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'))

const makes = read('makes.json')
const makeSupps = read('makeSupps.json')
const CORE = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `supplement${n}.json`)
  .concat(['holden.json', 'ford.json', 'supplement9.json'])
const fileCache = {}
const specsOf = f => (fileCache[f] ??= read(f).specs)
const core = Object.assign({}, ...CORE.map(specsOf))

// Old-format key, new-format alias
const FIELDS = {
  power: ['hp', 'power'], torque: ['tq', 'torque'], '0-100': ['z1', 'acceleration'],
  weight: ['wt', 'weight'], price: ['pr', 'price'], fuel: ['fx'],
}
const empty = v => v === null || v === undefined || v === '' || v === '—' || v === '-'
const has = (spec, aliases) => aliases.some(a => !empty(spec[a]))
const isEV = s => s.fuelType === 'electric' || s.ft === 'Electric'

function lookup(cache, make, model, year, trim) {
  const yr = parseInt(year)
  for (const y of [yr, yr - 1, yr + 1, yr - 2, yr + 2]) {
    const hit = cache[`${make}|${model}|${y}|${trim}`] || cache[`${model}|${y}|${trim}`]
    if (hit) return hit
  }
  return null
}

const rows = []
const byMake = {}
let total = 0
for (const [make, models] of Object.entries(makes)) {
  const cache = Object.assign({}, core,
    ...(makeSupps[make] || []).slice().sort((a, b) => a - b).map(n => specsOf(`supplement${n}.json`)))
  const m = byMake[make] = { trims: 0, noEntry: 0, blank: 0, missing: {} }
  for (const [model, years] of Object.entries(models)) {
    for (const [year, trims] of Object.entries(years)) {
      for (const trim of trims) {
        total++; m.trims++
        const spec = lookup(cache, make, model, year, trim)
        if (!spec) { m.noEntry++; rows.push({ make, model, year, trim, problem: 'no entry' }); continue }
        if (!has(spec, FIELDS.power)) { m.blank++; rows.push({ make, model, year, trim, problem: 'blank' }); continue }
        const missing = Object.entries(FIELDS)
          .filter(([f, al]) => !(f === 'fuel' && isEV(spec)) && !has(spec, al))
          .map(([f]) => f)
        for (const f of missing) m.missing[f] = (m.missing[f] || 0) + 1
        if (missing.length) rows.push({ make, model, year, trim, problem: 'missing', fields: missing })
      }
    }
  }
}

const totals = {}
for (const m of Object.values(byMake)) for (const [f, n] of Object.entries(m.missing)) totals[f] = (totals[f] || 0) + n
const noEntry = rows.filter(r => r.problem === 'no entry').length
const blank = rows.filter(r => r.problem === 'blank').length

// Summary pretty-printed, rows one per line so the file stays diff-friendly
const head = JSON.stringify({
  generated: new Date().toISOString().slice(0, 10),
  trims: total, noEntry, blank, missingFieldCounts: totals,
  byMake: Object.fromEntries(Object.entries(byMake).filter(([, m]) => m.noEntry || m.blank || Object.keys(m.missing).length)),
}, null, 2)
fs.writeFileSync(path.join(__dirname, '..', 'gaps.json'),
  head.slice(0, -2) + ',\n  "rows": [\n' + rows.map(r => '    ' + JSON.stringify(r)).join(',\n') + '\n  ]\n}\n')

console.log(`${total} trims · ${noEntry} with no entry · ${blank} blank · missing fields:`, totals)
const worst = Object.entries(byMake)
  .map(([mk, m]) => [mk, Object.values(m.missing).reduce((a, b) => a + b, 0) + m.noEntry + m.blank])
  .filter(([, n]) => n).sort((a, b) => b[1] - a[1]).slice(0, 10)
console.log('Most gaps:', worst.map(([mk, n]) => `${mk} ${n}`).join(', '))
const only = process.argv[2]
if (only) for (const r of rows.filter(r => r.make === only)) console.log(' ', r.year, r.model, r.trim, '→', r.problem, r.fields?.join(', ') || '')
