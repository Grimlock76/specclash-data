#!/usr/bin/env node
// gen28.cjs — 2024-2026 extensions for all active models
// Strategy: load existing specs, extend continuing models automatically; write new-gen specs explicitly
const fs = require('fs')
const specs = {}

// Load all existing specs so we can extend them
const files = ['holden','ford','supplement1','supplement2','supplement3','supplement4','supplement5','supplement6','supplement7','supplement8','supplement9','supplement10','supplement11','supplement12','supplement13','supplement14','supplement15','supplement16','supplement17','supplement18','supplement19','supplement20','supplement21','supplement22','supplement23','supplement24','supplement25','supplement26','supplement27']
const SPECS = {}
for (const f of files) {
  const d = JSON.parse(fs.readFileSync('src/data/'+f+'.json','utf8'))
  Object.assign(SPECS, d.specs || {})
}

function priceStr(n) { return '~$' + Math.round(n).toLocaleString() }
function bumpPrice(prStr, pct) {
  const n = parseFloat((prStr || '0').replace(/[^0-9]/g, ''))
  return priceStr(n * (1 + pct))
}

// Extend a model's trims from a base year into target years with price inflation per step
function extend(make, model, baseYear, targetYears, trimList, pctPerYear = 0.025) {
  for (const trim of trimList) {
    const baseKey = `${make}|${model}|${baseYear}|${trim}`
    const base = SPECS[baseKey]
    if (!base) { console.warn('  MISSING base:', baseKey); continue }
    const basePrice = parseFloat((base.pr || '0').replace(/[^0-9]/g, ''))
    for (const yr of targetYears) {
      const delta = yr - baseYear
      const p = priceStr(basePrice * Math.pow(1 + pctPerYear, delta))
      specs[`${make}|${model}|${yr}|${trim}`] = { ...base, pr: p }
    }
  }
}

// ── TOYOTA — models continuing unchanged ──────────────────────────────────────
const toyotaYears = [2024, 2025, 2026]

// Corolla (Ascent Sport, SX, ZR, GR Sport) — same 2.0L hybrid / 2.0L petrol
extend('Toyota','Corolla', 2023, toyotaYears, ['Ascent Sport','SX','ZR','GR Sport'])

// Corolla Cross (GX, GXL, ZR) — continuing
extend('Toyota','Corolla Cross', 2023, toyotaYears, ['GX','GXL','ZR'])

// RAV4 (GX, GXL, Cruiser, Edge) — continuing
extend('Toyota','RAV4', 2023, toyotaYears, ['GX','GXL','Cruiser','Edge'])

// Kluger (GX, GXL, Grande) — continuing
extend('Toyota','Kluger', 2023, toyotaYears, ['GX','GXL','Grande'])

// LandCruiser 300 (GX, GXL, VX, Sahara, ZX) — continuing
extend('Toyota','LandCruiser', 2023, toyotaYears, ['GX','GXL','VX','Sahara','ZX'])

// LandCruiser 70 (Workmate, GX, GXL) — continuing
extend('Toyota','LandCruiser 70', 2023, toyotaYears, ['Workmate','GX','GXL'])

// HiLux (Workmate, SR, SR5, Rogue) — continuing
extend('Toyota','HiLux', 2023, toyotaYears, ['Workmate','SR','SR5','Rogue'])

// HiAce (Standard, LWB, Commuter) — continuing
extend('Toyota','HiAce', 2023, toyotaYears, ['Standard','LWB','Commuter'])

// Fortuner (GX, GXL, Crusade) — continuing
extend('Toyota','Fortuner', 2023, toyotaYears, ['GX','GXL','Crusade'])

// GR86 (GTS, GTS Auto) — continuing
extend('Toyota','GR86', 2023, toyotaYears, ['GTS','GTS Auto'])

// GR Corolla — continuing
extend('Toyota','GR Corolla', 2023, toyotaYears, ['GR Corolla'])

// Yaris (Ascent, SX, GR) — continuing
extend('Toyota','Yaris', 2023, toyotaYears, ['Ascent','SX','GR'])

// Yaris Cross (GX, GXL, ZR, GR Sport) — continuing
extend('Toyota','Yaris Cross', 2023, toyotaYears, ['GX','GXL','ZR','GR Sport'])

// Supra (GTS, GTS 2.0) — continuing (A90 still in production 2024)
extend('Toyota','Supra', 2023, toyotaYears, ['GTS','GTS 2.0'])

// ── TOYOTA C-HR 2024+ — new gen, hybrid-only ─────────────────────────────────
// M20A-FXS 2.0L Hybrid system, combined ~144 kW
for (const yr of toyotaYears) {
  specs[`Toyota|C-HR|${yr}|GX`] = {
    en: 'M20A-FXS 2.0L Hybrid', di: '2.0L', cy: '4',
    hp: '144 kW (193 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.2 sec', qm: '~16.3 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,510 kg', se: '5', ca: '318 L',
    pr: priceStr(33990 + (yr - 2024) * 900)
  }
  specs[`Toyota|C-HR|${yr}|GXL`] = {
    en: 'M20A-FXS 2.0L Hybrid', di: '2.0L', cy: '4',
    hp: '144 kW (193 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.2 sec', qm: '~16.3 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,525 kg', se: '5', ca: '318 L',
    pr: priceStr(38990 + (yr - 2024) * 900)
  }
  specs[`Toyota|C-HR|${yr}|Koba`] = {
    en: 'M20A-FXS 2.0L Hybrid', di: '2.0L', cy: '4',
    hp: '144 kW (193 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.2 sec', qm: '~16.3 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,540 kg', se: '5', ca: '318 L',
    pr: priceStr(44990 + (yr - 2024) * 1000)
  }
}

// ── TOYOTA CAMRY XV90 (2024+) — all-new, hybrid-only ─────────────────────────
// A25A-FXS 2.5L 4cyl Hybrid, system output 160 kW
for (const yr of toyotaYears) {
  specs[`Toyota|Camry|${yr}|Ascent`] = {
    en: 'A25A-FXS 2.5L Hybrid', di: '2.5L', cy: '4',
    hp: '160 kW (215 hp) combined', tq: '221 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,640 kg', se: '5', ca: '493 L',
    pr: priceStr(38990 + (yr - 2024) * 1000)
  }
  specs[`Toyota|Camry|${yr}|Ascent Sport`] = {
    en: 'A25A-FXS 2.5L Hybrid', di: '2.5L', cy: '4',
    hp: '160 kW (215 hp) combined', tq: '221 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,660 kg', se: '5', ca: '493 L',
    pr: priceStr(43490 + (yr - 2024) * 1100)
  }
  specs[`Toyota|Camry|${yr}|SX`] = {
    en: 'A25A-FXS 2.5L Hybrid', di: '2.5L', cy: '4',
    hp: '160 kW (215 hp) combined', tq: '221 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,680 kg', se: '5', ca: '493 L',
    pr: priceStr(46990 + (yr - 2024) * 1200)
  }
  specs[`Toyota|Camry|${yr}|SXL`] = {
    en: 'A25A-FXS 2.5L Hybrid', di: '2.5L', cy: '4',
    hp: '160 kW (215 hp) combined', tq: '221 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '3.8L', fx: '5.2L', ft: '91 RON',
    wt: '1,710 kg', se: '5', ca: '493 L',
    pr: priceStr(52490 + (yr - 2024) * 1300)
  }
}

// ── TOYOTA PRADO J250 (2024+) — all-new, 2.8L diesel or hybrid ───────────────
// 1GD-FTV 2.8L DOHC Turbo Diesel: 150 kW, 500 Nm
// T24A-FTS 2.4L Turbo Hybrid (VX/Kakadu): 229 kW combined
for (const yr of toyotaYears) {
  specs[`Toyota|Prado|${yr}|GX`] = {
    en: '1GD-FTV 2.8L DOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '8-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,325 kg', se: '7', ca: '1,288 L',
    pr: priceStr(67400 + (yr - 2024) * 1700)
  }
  specs[`Toyota|Prado|${yr}|GXL`] = {
    en: '1GD-FTV 2.8L DOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '8-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,375 kg', se: '7', ca: '1,288 L',
    pr: priceStr(77900 + (yr - 2024) * 1900)
  }
  specs[`Toyota|Prado|${yr}|VX`] = {
    en: 'T24A-FTS 2.4L DOHC Turbo + Electric', di: '2.4L', cy: '4',
    hp: '229 kW (307 hp) combined', tq: '630 Nm combined',
    tx: '8-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '7.4L', fh: '6.0L', fx: '9.8L', ft: '95 RON',
    wt: '2,445 kg', se: '7', ca: '1,288 L',
    pr: priceStr(96900 + (yr - 2024) * 2400)
  }
  specs[`Toyota|Prado|${yr}|Kakadu`] = {
    en: 'T24A-FTS 2.4L DOHC Turbo + Electric', di: '2.4L', cy: '4',
    hp: '229 kW (307 hp) combined', tq: '630 Nm combined',
    tx: '8-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '7.4L', fh: '6.0L', fx: '9.8L', ft: '95 RON',
    wt: '2,480 kg', se: '7', ca: '1,288 L',
    pr: priceStr(109900 + (yr - 2024) * 2700)
  }
}

// ── MAZDA — models continuing ─────────────────────────────────────────────────
const mazdaYears = [2024, 2025, 2026]
extend('Mazda','2', 2023, mazdaYears, ['Neo','Maxx','GT','Genki'])
extend('Mazda','3', 2023, mazdaYears, ['G20 Pure','G20 Evolve','G25 GT','Astina'])
extend('Mazda','CX-5', 2023, mazdaYears, ['Maxx','Touring','GT','Akera'])
extend('Mazda','CX-8', 2023, [2024], ['Sport','Touring','GT','Asaki']) // 2024 final year
extend('Mazda','MX-5', 2023, mazdaYears, ['MX-5','GT','RF GT'])
extend('Mazda','BT-50', 2023, mazdaYears, ['XT','XTR','GT'])
extend('Mazda','MX-30', 2023, mazdaYears, ['Pure','GT'])

// ── NISSAN — models continuing ────────────────────────────────────────────────
const nissanYears = [2024, 2025, 2026]
extend('Nissan','Patrol', 2023, nissanYears, ['ST','ST-L','Ti','Ti-L'])
extend('Nissan','X-Trail', 2023, nissanYears, ['ST','ST-L','Ti','Ti-L'])
extend('Nissan','Qashqai', 2023, nissanYears, ['ST','ST-L','Ti'])
extend('Nissan','Navara', 2023, nissanYears, ['ST','ST-X','PRO-4X'])
extend('Nissan','Pathfinder', 2023, nissanYears, ['ST','Ti','Ti-L'])

// ── MITSUBISHI — 2025-2026 extension (2024 already covered in s26) ────────────
const mitsYears = [2025, 2026]
extend('Mitsubishi','Triton', 2024, mitsYears, ['GL','GLS','GSR','Exceed'])
extend('Mitsubishi','Outlander', 2024, mitsYears, ['ES','LS','Exceed','PHEV'])
extend('Mitsubishi','ASX', 2024, mitsYears, ['MK2 ES','MK2 LS'])
extend('Mitsubishi','Eclipse Cross', 2024, mitsYears, ['PHEV ES','PHEV Exceed'])
extend('Mitsubishi','Mirage', 2024, mitsYears, ['ES','LS'])

// ── FORD ESCAPE (2024) — final year in AU
extend('Ford','Escape', 2023, [2024], ['ZH Ambiente','ZH Trend','ZH ST-Line'])

// ── NISSAN 400Z (2022-2026) — replaced 370Z ───────────────────────────────────
// VR30DDTT 3.0L twin turbo V6, 298 kW (400 hp)
for (const yr of [2022, 2023, 2024, 2025, 2026]) {
  specs[`Nissan|400Z|${yr}|Coupe`] = {
    en: 'VR30DDTT 3.0L Twin Turbo V6', di: '3.0L', cy: '6',
    hp: '298 kW (400 hp)', tq: '475 Nm',
    tx: '9-speed auto', dr: 'RWD',
    z1: '~5.0 sec', qm: '~13.3 sec', ts: '~250 km/h (limited)',
    fc: '12.8L', fh: '9.0L', fx: '16.8L', ft: '98 RON',
    wt: '1,598 kg', se: '2', ca: '155 L',
    pr: priceStr(63990 + (yr - 2022) * 1500)
  }
  specs[`Nissan|400Z|${yr}|Proto Spec`] = {
    en: 'VR30DDTT 3.0L Twin Turbo V6', di: '3.0L', cy: '6',
    hp: '298 kW (400 hp)', tq: '475 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~5.0 sec', qm: '~13.3 sec', ts: '~250 km/h (limited)',
    fc: '13.0L', fh: '9.2L', fx: '17.0L', ft: '98 RON',
    wt: '1,581 kg', se: '2', ca: '155 L',
    pr: priceStr(69990 + (yr - 2022) * 1600)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement28.json', JSON.stringify({ specs }, null, 2))
console.log('supplement28.json:', Object.keys(specs).length, 'entries')
const byMake = {}
Object.keys(specs).forEach(k => {
  const make = k.split('|')[0]
  byMake[make] = (byMake[make] || 0) + 1
})
Object.entries(byMake).forEach(([m, c]) => console.log(' ', m + ':', c))
