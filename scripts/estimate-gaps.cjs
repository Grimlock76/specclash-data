'use strict'
// Best-guess fill for missing specs (everything EXCEPT price), 2026-11-10.
//
// Every value written here is an ESTIMATE and is marked so the app shows it
// with a leading "~":
//   old-format entries (strings)  → the string itself starts with "~"
//   new-format entries (numbers)  → the field name is added to spec.est[]
//                                   (normalizeSpec in src/data/index.js adds "~")
//   new-format acceleration       → already shows "~" unless accelClaimed
//
// Method, in order (later steps use earlier results):
//   weight   median of nearest sibling trims (same make+model, ±3 years)
//   torque   sibling with the same power, else typical Nm-per-kW for that
//            fuel/aspiration class
//   0-100    power-to-weight + torque-to-weight curve fitted on the existing
//            data (by EV / AWD / diesel / 2WD, with era terms), then nudged
//            toward what sibling trims of the same model actually do
//   1/4 mile from 0-100, using the curve the existing data follows
//   top speed power+weight curve fitted on existing data, sibling-nudged
//   fuel     power+weight+year curve per fuel type, sibling-nudged
//   cargo    only when every sibling of that model agrees (one body shape)
//
// Idempotent: only fills blanks, never overwrites an existing value.
//   node scripts/estimate-gaps.cjs          dry run (prints counts + samples)
//   node scripts/estimate-gaps.cjs --write  write the data files
const fs = require('fs')
const path = require('path')
const DATA = path.join(__dirname, '..', 'src', 'data')
const WRITE = process.argv.includes('--write')

const raw = {}
const files = {}
const load = f => {
  if (!files[f]) { raw[f] = fs.readFileSync(path.join(DATA, f), 'utf8'); files[f] = JSON.parse(raw[f]) }
  return files[f]
}
const makes = load('makes.json')
const makeSupps = load('makeSupps.json')
const CORE = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `supplement${n}.json`).concat(['holden.json', 'ford.json', 'supplement9.json'])

const num = v => {
  if (v == null) return NaN
  if (typeof v === 'number') return v
  const m = String(v).replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : NaN
}
const blank = v => v === null || v === undefined || v === '' || v === '—' || v === '-'
const median = a => { const s = a.slice().sort((x, y) => x - y); const n = s.length; return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : NaN }
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

// ── Resolve every catalogue trim to the entry the app actually shows ────────
const entries = new Map() // file|key → entry
for (const [make, models] of Object.entries(makes)) {
  const order = CORE.concat((makeSupps[make] || []).slice().sort((a, b) => a - b).map(n => `supplement${n}.json`))
  const where = {}
  for (const f of order) for (const k of Object.keys(load(f).specs)) where[k] = f
  for (const [model, years] of Object.entries(models)) for (const [year, trims] of Object.entries(years)) for (const trim of trims) {
    const yr = +year
    let hit = null
    for (const y of [yr, yr - 1, yr + 1, yr - 2, yr + 2]) {
      for (const k of [`${make}|${model}|${y}|${trim}`, `${model}|${y}|${trim}`]) if (where[k]) { hit = { file: where[k], key: k }; break }
      if (hit) break
    }
    if (!hit) continue
    const id = hit.file + '|' + hit.key
    if (!entries.has(id)) entries.set(id, { ...hit, make, model, year: yr, trim, spec: files[hit.file].specs[hit.key] })
  }
}

// ── Common view over both entry formats ─────────────────────────────────────
function view(s) {
  const old = s.en !== undefined
  const ft = String(old ? s.ft || '' : s.fuelType || s.ft || '').toLowerCase()
  const en = String(old ? s.en || '' : s.engine || '')
  const asp = String(s.aspiration || '')
  const dr = String(old ? s.dr || '' : s.drivetrain || '')
  const txt = `${en} ${asp}`
  return {
    old, ft, en, asp, dr,
    kw: num(old ? s.hp : s.power), nm: num(old ? s.tq : s.torque), kg: num(old ? s.wt : s.weight),
    z: num(old ? s.z1 : s.acceleration), qm: num(old ? s.qm : s.quarterMile), ts: num(old ? s.ts : s.topSpeed),
    fc: num(s.fc), fh: num(s.fh), fx: num(s.fx),
    ca: old ? s.ca : s.cargo, se: old ? s.se : s.seats,
    zClaimed: old ? !/~/.test(String(s.z1 || '')) : !!s.accelClaimed,
    ev: /electric/.test(ft) && !/hybrid|phev|plug/.test(ft),
    hybrid: /hybrid|phev|plug|e-power/i.test(`${ft} ${en}`),
    diesel: /diesel/.test(ft) || /\bTDI\b|diesel|\bCDI\b|\bHDi\b|\bdCi\b/i.test(en),
    awd: /AWD|4WD|4x4|4MOTION|XDRIVE|QUATTRO/i.test(`${dr} ${en}`),
    forced: /turbo|supercharg|twin-?scroll|biturbo|kompressor|\bTSI\b|\bTFSI\b|ecoboost/i.test(txt) && !/^NA\b/i.test(asp),
  }
}
const rows = [...entries.values()]
for (const r of rows) r.v = view(r.spec)
const byModel = {}
for (const r of rows) (byModel[r.make + '|' + r.model] ||= []).push(r)

// Was this value written by an earlier run of this script (i.e. itself a guess)?
// Guesses must never seed further guesses, or re-runs would keep spreading.
const isEst = (o, field, oldKey) => o.v.old ? /^~/.test(String(o.spec[oldKey] || '')) : (o.spec.est || []).includes(field)

// Nearest siblings (same make+model, within ±span years) that pass `ok`
function siblings(r, ok, span = 3, max = 5) {
  return (byModel[r.make + '|' + r.model] || [])
    .filter(o => o !== r && Math.abs(o.year - r.year) <= span && ok(o))
    .sort((a, b) => (Math.abs(a.year - r.year) - Math.abs(b.year - r.year)) ||
      (Math.abs((a.v.kw || 0) - (r.v.kw || 0)) - Math.abs((b.v.kw || 0) - (r.v.kw || 0))))
    .slice(0, max)
}

// ── Tiny least-squares (normal equations, Gauss-Jordan) ─────────────────────
function fit(X0, y0) {
  const keep = X0.map((x, i) => x.every(Number.isFinite) && Number.isFinite(y0[i]))
  const X = X0.filter((_, i) => keep[i]), y = y0.filter((_, i) => keep[i])
  const k = X[0].length
  const A = Array.from({ length: k }, () => new Array(k + 1).fill(0))
  for (let i = 0; i < X.length; i++) for (let a = 0; a < k; a++) {
    A[a][k] += X[i][a] * y[i]
    for (let b = 0; b < k; b++) A[a][b] += X[i][a] * X[i][b]
  }
  // Tiny ridge: an era with no cars in a class (e.g. 1960s diesels) leaves an
  // all-zero column, which would otherwise make the solve divide by zero.
  for (let a = 0; a < k; a++) A[a][a] += 1e-6
  for (let c = 0; c < k; c++) {
    let p = c
    for (let r2 = c + 1; r2 < k; r2++) if (Math.abs(A[r2][c]) > Math.abs(A[p][c])) p = r2
    ;[A[c], A[p]] = [A[p], A[c]]
    const d = A[c][c]
    for (let j = c; j <= k; j++) A[c][j] /= d
    for (let r2 = 0; r2 < k; r2++) if (r2 !== c) { const f = A[r2][c]; for (let j = c; j <= k; j++) A[r2][j] -= f * A[c][j] }
  }
  return A.map(r2 => r2[k])
}
const dot = (b, x) => b.reduce((s, bi, i) => s + bi * x[i], 0)

// ── Torque per kW by class (fallback when no sibling shares the power) ──────
const tqClass = v => v.ev ? 'ev' : v.hybrid ? 'hybrid' : v.diesel ? 'diesel' : v.forced ? 'forced' : 'na'
const tqRatio = {}
for (const c of ['ev', 'hybrid', 'diesel', 'forced', 'na']) tqRatio[c] = median(rows.filter(r => r.v.kw > 0 && r.v.nm > 0 && tqClass(r.v) === c).map(r => r.v.nm / r.v.kw))

// ── 0-100 model: ln(z) ~ ln(kg/kW), ln(kg/Nm), era — per drivetrain class ───
// Fitted on every 0-100 already in the data, so estimates sit on the same
// curve as the cars around them. Era terms matter: older cars ran gross power
// ratings, 3-speed boxes and skinny tyres, so they're slower for the same
// paper power-to-weight.
const zClass = v => v.ev ? 'ev' : v.awd ? 'awd' : v.diesel ? 'diesel' : '2wd'
const ERAS = [1960, 1972, 1990, 2010]
const eraDummies = y => ERAS.map((e, i) => (y >= e && (i === ERAS.length - 1 || y < ERAS[i + 1])) ? 1 : 0)
const nmOf = v => v.nm > 0 ? v.nm : v.kw * tqRatio[tqClass(v)]
const zX = (v, year) => [1, Math.log(v.kg / v.kw), Math.log(v.kg / nmOf(v)), ...(v.ev ? [] : eraDummies(year))]
const zFit = {}
for (const c of ['ev', 'awd', 'diesel', '2wd']) {
  const d = rows.filter(r => r.v.z > 1.5 && r.v.z < 40 && r.v.kw > 0 && r.v.kg > 300 && zClass(r.v) === c)
  zFit[c] = fit(d.map(r => zX(r.v, r.year)), d.map(r => Math.log(r.v.z)))
  zFit[c].n = d.length
}
const zModel = (v, year) => Math.exp(dot(zFit[zClass(v)], zX(v, year)))

// ── Quarter mile from 0-100 (knots follow the existing data's curve) ────────
const QM = [[1.8, 9.6], [3, 11.05], [4, 12.28], [6, 14.34], [9, 16.93], [13, 19.4], [20, 22.5], [30, 26.6], [40, 30.7]]
function qmFromZ(z) {
  if (z <= QM[0][0]) return QM[0][1]
  for (let i = 1; i < QM.length; i++) if (z <= QM[i][0]) {
    const [x0, y0] = QM[i - 1], [x1, y1] = QM[i]
    return y0 + (y1 - y0) * (z - x0) / (x1 - x0)
  }
  return QM[QM.length - 1][1]
}

// ── Top speed: ln(ts) ~ ln(kW), ln(kg), year ────────────────────────────────
const tsX = r => [1, Math.log(r.v.kw), Math.log(r.v.kg), (r.year - 2000) / 50]
const tsFit = {}
for (const c of ['ev', 'ice']) {
  const d = rows.filter(r => r.v.ts > 40 && r.v.ts < 500 && r.v.kw > 0 && r.v.kg > 300 && (c === 'ev') === r.v.ev)
  tsFit[c] = fit(d.map(tsX), d.map(r => Math.log(r.v.ts)))
}
// Utes, pickups, vans and ladder-frame 4WDs are speed-limited well below what
// their power would allow; without a sibling to calibrate on, cap them.
const TRUCK = /\b(ute|pickup|van|silverado|avalanche|colorado|s-10|blazer|suburban|tahoe|shark|ranger|hilux|navara|triton|d-max|bt-50|amarok|f-150|f-250|f-350|ram|tundra|tacoma|titan|sierra|canyon|cannon|t60|musso|gladiator|hiace|transit|sprinter|express|econoline|bronco|wrangler|landcruiser 70|patrol|defender)\b/i
let bodyOf = () => ''
const isTruck = r => /^(ute|van)$/i.test(r.spec.bodyStyle || bodyOf(r.model, r.trim)) || TRUCK.test(r.model)
const tsModel = r => Math.exp(dot(tsFit[r.v.ev ? 'ev' : 'ice'], tsX(r)))

// ── Fuel (combined): ln(fx) ~ ln(kW), ln(kg), year, per fuel class ──────────
const fuelClass = v => v.hybrid ? 'hybrid' : v.diesel ? 'diesel' : 'petrol'
const fxX = r => [1, Math.log(r.v.kw), Math.log(r.v.kg), (r.year - 2000) / 50]
const fxFit = {}, cityRatio = {}, hwyRatio = {}
for (const c of ['hybrid', 'diesel', 'petrol']) {
  const d = rows.filter(r => !r.v.ev && fuelClass(r.v) === c && r.v.fx > 1 && r.v.fx < 40 && r.v.kw > 0 && r.v.kg > 300)
  fxFit[c] = fit(d.map(fxX), d.map(r => Math.log(r.v.fx)))
  const both = d.filter(r => r.v.fc > 0 && r.v.fh > 0 && (c === 'hybrid' || (r.v.fc >= r.v.fx && r.v.fh <= r.v.fx)))
  cityRatio[c] = median(both.map(r => r.v.fc / r.v.fx))
  hwyRatio[c] = median(both.map(r => r.v.fh / r.v.fx))
}
const fxModel = r => Math.exp(dot(fxFit[fuelClass(r.v)], fxX(r)))

// ── Fill ────────────────────────────────────────────────────────────────────
;(async () => {
// The app's own body-type classifier (ESM), so "is it a ute/van" matches the UI
try { bodyOf = (await import('../src/utils/bodyType.js')).getBodyType || bodyOf } catch { /* fall back to the regex */ }
const stats = {}
const samples = {}
const touched = new Set()
const bump = (field, r, val) => {
  stats[field] = (stats[field] || 0) + 1
  touched.add(r.file)
  const s = (samples[field] ||= [])
  if (s.length < 400) s.push(`${r.year} ${r.make} ${r.model} ${r.trim} → ${val}`)
}
const markEst = (spec, field) => { if (!spec.est) spec.est = []; if (!spec.est.includes(field)) spec.est.push(field) }
const r1 = v => Math.round(v * 10) / 10

for (const r of rows) {
  const s = r.spec, v = r.v

  // Weight
  if (!(v.kg > 0)) {
    const sib = siblings(r, o => o.v.kg > 300 && !o.kgFilled && !isEst(o, 'weight', 'wt'), 3, 3)
    if (sib.length) {
      const kg = Math.round(median(sib.map(o => o.v.kg)) / 5) * 5
      if (v.old) s.wt = `~${kg.toLocaleString('en-AU')} kg`; else { s.weight = kg; markEst(s, 'weight') }
      v.kg = kg; r.kgFilled = true; bump('weight', r, kg + ' kg')
    }
  }

  // Torque
  if (!(v.nm > 0) && v.kw > 0) {
    const same = siblings(r, o => o.v.nm > 0 && Math.abs(o.v.kw - v.kw) / v.kw < 0.03 && tqClass(o.v) === tqClass(v), 3, 3)
    const nm = Math.round((same.length ? median(same.map(o => o.v.nm)) : v.kw * tqRatio[tqClass(v)]) / 5) * 5
    if (nm > 0) {
      if (v.old) s.tq = `~${nm} Nm`; else { s.torque = nm; markEst(s, 'torque') }
      v.nm = nm; bump('torque', r, nm + ' Nm')
    }
  }

  // 0-100
  if (!(v.z > 0) && v.kw > 0 && v.kg > 300) {
    let z = zModel(v, r.year)
    const sib = siblings(r, o => o.v.z > 1.5 && o.v.kw > 0 && o.v.kg > 300 && !o.zFilled)
    if (sib.length) z *= clamp(median(sib.map(o => o.v.z / zModel(o.v, o.year))), 0.75, 1.3)
    z = r1(clamp(z, v.ev ? 1.9 : 2.3, 45))
    if (Number.isFinite(z)) {
      if (v.old) s.z1 = `~${z.toFixed(1)} sec`; else { s.acceleration = z; delete s.accelClaimed }
      v.z = z; v.zClaimed = false; r.zFilled = true; bump('0-100', r, `~${z.toFixed(1)} s (${v.kw} kW / ${v.kg} kg)`)
    }
  }

  // Quarter mile
  if (!(v.qm > 0) && v.z > 0) {
    const qm = r1(qmFromZ(v.z))
    const str = `~${qm.toFixed(1)} sec`
    if (v.old) s.qm = str; else s.quarterMile = str
    v.qm = qm; bump('quarter', r, `${str} (0-100 ${v.z})`)
  }

  // Top speed
  if (!(v.ts > 0) && v.kw > 0 && v.kg > 300) {
    let ts = tsModel(r)
    const sib = siblings(r, o => o.v.ts > 40 && o.v.kw > 0 && o.v.kg > 300 && !o.tsFilled)
    if (sib.length) ts *= clamp(median(sib.map(o => o.v.ts / tsModel(o))), 0.8, 1.2)
    else if (isTruck(r)) ts = Math.min(ts, 180)
    ts = Math.round(clamp(ts, 45, 420) / 5) * 5
    if (Number.isFinite(ts)) {
      if (v.old) s.ts = `~${ts} km/h`; else { s.topSpeed = ts; markEst(s, 'topSpeed') }
      v.ts = ts; r.tsFilled = true; bump('topSpeed', r, `~${ts} km/h (${v.kw} kW)`)
    }
  }

  // Fuel: combined first, then city/highway from it
  if (!v.ev && v.kw > 0 && v.kg > 300 && (!(v.fx > 0) || !(v.fc > 0) || !(v.fh > 0))) {
    const c = fuelClass(v)
    const set = (key, val) => {
      const n = r1(val)
      if (!Number.isFinite(n) || n <= 0) return
      if (v.old) s[key] = `~${n.toFixed(1)}L`; else { s[key] = n; markEst(s, key) }
      v[key] = n; bump('fuel-' + key, r, `~${n} L/100km (${c})`)
    }
    if (!(v.fx > 0)) {
      let fx
      if (v.fc > 0 && v.fh > 0) fx = 0.55 * v.fc + 0.45 * v.fh
      else {
        fx = fxModel(r)
        const sib = siblings(r, o => !o.v.ev && fuelClass(o.v) === c && o.v.fx > 1 && o.v.kw > 0 && o.v.kg > 300 && !o.fxFilled)
        if (sib.length) fx *= clamp(median(sib.map(o => o.v.fx / fxModel(o))), 0.7, 1.4)
      }
      r.fxFilled = true
      set('fx', clamp(fx, 1.0, 35))
    }
    if (!(v.fc > 0)) set('fc', v.fh > 0 && v.fh < v.fx ? (v.fx - 0.45 * v.fh) / 0.55 : v.fx * cityRatio[c])
    if (!(v.fh > 0)) set('fh', v.fc > v.fx ? Math.max((v.fx - 0.55 * v.fc) / 0.45, v.fx * 0.6) : v.fx * hwyRatio[c])
  }

  // Cargo: only when all siblings agree (one body shape)
  if (blank(v.ca)) {
    const sib = siblings(r, o => num(o.v.ca) > 0 && !o.caFilled && !isEst(o, 'cargo', 'ca'), 2, 12).map(o => num(o.v.ca))
    if (sib.length && Math.max(...sib) <= Math.min(...sib) * 1.1) {
      const ca = Math.round(median(sib))
      if (v.old) s.ca = `~${ca} L`; else { s.cargo = ca; markEst(s, 'cargo') }
      r.caFilled = true; bump('cargo', r, `~${ca} L`)
    }
  }
}

// Self-check: how close does the 0-100 method land on cars we already know?
if (!WRITE) {
  const known = rows.filter(r => !r.zFilled && r.v.z > 1.5 && r.v.kw > 0 && r.v.kg > 300).filter((_, i) => i % 7 === 0)
  // Curve only, no sibling nudge: siblings are often same-engine clones, which
  // would make this check trivially perfect.
  const ratio = known.map(r => zModel(r.v, r.year) / r.v.z).filter(Number.isFinite).sort((a, b) => a - b)
  const q = p => ratio[Math.floor(ratio.length * p)].toFixed(2)
  console.log(`0-100 curve self-check on ${ratio.length} known cars (estimate ÷ actual, before sibling nudge): p10 ${q(0.1)} · median ${q(0.5)} · p90 ${q(0.9)}`)
}
console.log('entries', rows.length, '· models fitted on', Object.fromEntries(Object.entries(zFit).map(([k, b]) => [k, b.n])))
console.log('filled', stats, '· files touched', touched.size)
if (!WRITE) {
  for (const [f, list] of Object.entries(samples)) {
    console.log(`\n── ${f}`)
    const step = Math.max(1, Math.floor(list.length / 12))
    list.filter((_, i) => i % step === 0).slice(0, 12).forEach(x => console.log('  ', x))
  }
  console.log('\n(dry run — pass --write to save)')
} else {
  for (const f of touched) {
    const indent = /^\{\r?\n/.test(raw[f]) ? (raw[f].match(/^\{\r?\n(\s+)/) || [, '  '])[1].length : 0
    const out = JSON.stringify(files[f], null, indent || undefined) + (raw[f].endsWith('\n') ? '\n' : '')
    fs.writeFileSync(path.join(DATA, f), out)
  }
  console.log('written')
}
})()
