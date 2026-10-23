// Sanity checks over every trim exactly as the app shows it (uses the app's
// own lookup), flagging numbers that can't be right. Writes sanity.json.
//   node scripts/spec-sanity.mjs            summary
//   node scripts/spec-sanity.mjs fuel-order list one check's hits
import fs from 'node:fs'
import { createServer } from 'vite'
const s = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { lookup, MAKES } = await s.ssrLoadModule('/src/data/index.js')
const num = v => { const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN }
const hits = {}
const flag = (check, car, detail) => (hits[check] ||= []).push(`${car} — ${detail}`)
const groups = {}
for (const [mk, models] of Object.entries(MAKES)) for (const [md, yrs] of Object.entries(models)) for (const [y, ts] of Object.entries(yrs)) for (const t of ts) {
  const r = await lookup(mk, md, y, t); if (!r) continue
  const car = `${y} ${mk} ${md} ${t}`
  const kw = num(r.hp), nm = num(r.tq), kg = num(r.wt), fc = num(r.fc), fh = num(r.fh), fx = num(r.fx)
  const z1 = num(r.z1), ts = num(r.ts)
  const ev = r.ft === 'Electric', hyb = /hybrid|phev|plug|e-power/i.test(`${r.ft} ${r.en} ${t}`)
  if (!ev && !hyb && fc > 0 && fh > 0 && fc < fh) flag('fuel-order', car, `city ${fc} < highway ${fh}`)
  if (!ev && !hyb && fc > 0 && fh > 0 && fx > 0 && (fx > Math.max(fc, fh) + 0.3 || fx < Math.min(fc, fh) - 0.3)) flag('fuel-combined', car, `combined ${fx} not between ${fh}–${fc}`)
  if (!ev && !hyb && fx > 0 && (fx < 2.5 || fx > 30) && +y > 1945) flag('fuel-range', car, `combined ${fx}`)
  if (kg > 0 && (kg < 380 || kg > 4500)) flag('weight-range', car, `${kg} kg`)
  if (kw > 0 && kg > 450 && (kw / kg) * 1000 > 1100) flag('p2w', car, `${Math.round(kw / kg * 1000)} kW/t (${kw} kW / ${kg} kg)`)
  if (z1 > 0 && (z1 < 1.75 || z1 > 40)) flag('0-100', car, `${z1} s`)
  if (ts > 0 && (ts < 40 || ts > 500)) flag('top-speed', car, `${ts} km/h`)
  if (kw > 0 && nm > 0 && nm < kw * 0.6) flag('torque-low', car, `${nm} Nm for ${kw} kW`)
  if (kw > 0 && nm > 0 && nm > kw * 8 && !ev) flag('torque-high', car, `${nm} Nm for ${kw} kW`)
  if (+y >= 2024 && String(r.pr).startsWith('~')) flag('est-price-current', `${mk} ${md}`, `${y} ${t} ${r.pr}`)
  const g = `${y} ${mk} ${md}`; (groups[g] ||= []).push({ t, sig: [r.hp, r.tq, r.wt, r.fx, r.z1].join('|'), est: String(r.pr).startsWith('~') })
}
// Info only — equipment grades often genuinely share a drivetrain.
// Copy-paste fills: ≥4 trims in one model-year with identical power/torque/weight/fuel/0-100
for (const [g, rows] of Object.entries(groups)) {
  const by = {}; rows.forEach(r => (by[r.sig] ||= []).push(r.t))
  for (const [sig, ts] of Object.entries(by)) if (ts.length >= 4 && !sig.startsWith('—')) flag('clone-trims', g, `${ts.length} trims identical (${ts.slice(0, 5).join(', ')}${ts.length > 5 ? '…' : ''})`)
}
await s.close()
fs.writeFileSync('sanity.json', JSON.stringify(hits, null, 1) + '\n')
const only = process.argv[2]
if (only) console.log((hits[only] || []).join('\n'))
else console.log(Object.fromEntries(Object.entries(hits).map(([k, v]) => [k, v.length])))
