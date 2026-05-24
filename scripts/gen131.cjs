'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW X1 M35i xDrive (2023–2026) — hot U11 X1 (AU market)
// ─────────────────────────────────────────────────────────────
const x1m35i = {
  engine: '2.0L 4-cyl Twin-Turbo B48A20T3', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-spd Steptronic DCT',
  power: 221, torque: 400, weight: 1835, seats: 5,
  fc: 8.0, fh: null, fx: null,
  acceleration: 5.4, topSpeed: 250
}
const x1m35iPrices = { '2023':87900,'2024':90900,'2025':93900,'2026':96900 }
for (const yr of ['2023','2024','2025','2026']) {
  specs[`BMW|X1|${yr}|M35i xDrive`] = { ...x1m35i, price: p(x1m35iPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// SUZUKI FRONX (2024–2026) — compact crossover (AU market)
// ─────────────────────────────────────────────────────────────
const fronxGL = {
  engine: '1.5L 4-cyl Dual Jet', fuelType: 'petrol', displacement: 1462,
  cylinders: 4, drivetrain: 'FWD', transmission: '5-spd Manual',
  power: 77, torque: 138, weight: 970, seats: 5,
  fc: 5.9, fh: null, fx: null,
  acceleration: 13.0, topSpeed: 165
}
const fronxGLX = {
  ...fronxGL,
  transmission: '6-spd Auto',
  acceleration: 13.5
}
const fronxGLXP = { ...fronxGLX, weight: 990 }
const fronxPrices = {
  GL:         { '2024':24990,'2025':25990,'2026':26990 },
  GLX:        { '2024':27990,'2025':28990,'2026':29990 },
  'GLX+':     { '2024':30990,'2025':31990,'2026':32990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Suzuki|Fronx|${yr}|GL`]   = { ...fronxGL,   price: p(fronxPrices.GL[yr]) }
  specs[`Suzuki|Fronx|${yr}|GLX`]  = { ...fronxGLX,  price: p(fronxPrices.GLX[yr]) }
  specs[`Suzuki|Fronx|${yr}|GLX+`] = { ...fronxGLXP, price: p(fronxPrices['GLX+'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// ALFA ROMEO JUNIOR (2025–2026) — compact EV/hybrid SUV (AU)
// ─────────────────────────────────────────────────────────────
const juniorMHEV = {
  engine: '1.2L 3-cyl PureTech 48V Mild Hybrid', fuelType: 'hybrid', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-spd DCT',
  power: 96, torque: 230, weight: 1350, seats: 5,
  fc: 5.5, fh: null, fx: null,
  acceleration: 9.4, topSpeed: 200
}
const juniorEV = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 410,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 150, torque: 270, weight: 1590, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 200
}
for (const yr of ['2025','2026']) {
  const adj = yr === '2026' ? 2000 : 0
  specs[`Alfa Romeo|Junior|${yr}|Junior`]            = { ...juniorMHEV, price: p(46990 + adj) }
  specs[`Alfa Romeo|Junior|${yr}|Junior Elettrica`]  = { ...juniorEV,   price: p(59990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 408 (2023–2026) — fastback SUV (AU market)
// ─────────────────────────────────────────────────────────────
const p408petrol = {
  engine: '1.2L 3-cyl PureTech 130', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-spd EAT8 Auto',
  power: 96, torque: 230, weight: 1520, seats: 5,
  fc: 6.0, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 210
}
const p408phev = {
  engine: '1.6L 4-cyl PureTech PHEV HYbrid4', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-spd EAT8 Auto',
  power: 133, torque: 360, weight: 1720, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 7.7, topSpeed: 225, range: 62
}
const p408Prices = {
  '408':      { '2023':48990,'2024':50990,'2025':52990,'2026':54990 },
  '408 GT':   { '2023':55990,'2024':57990,'2025':59990,'2026':61990 },
  '408 PHEV': { '2023':63990,'2024':65990,'2025':67990,'2026':69990 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Peugeot|408|${yr}|408`]      = { ...p408petrol, price: p(p408Prices['408'][yr]) }
  specs[`Peugeot|408|${yr}|408 GT`]   = { ...p408petrol, price: p(p408Prices['408 GT'][yr]) }
  specs[`Peugeot|408|${yr}|408 PHEV`] = { ...p408phev,   price: p(p408Prices['408 PHEV'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 2008 e-2008 refresh (2024–2026) — updated EV trim
// ─────────────────────────────────────────────────────────────
const e2008refresh = {
  engine: '115kW Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 406,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 260, weight: 1590, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.9, topSpeed: 150
}
const e2008rPrices = { '2024':57990,'2025':59990,'2026':61990 }
for (const yr of ['2024','2025','2026']) {
  specs[`Peugeot|2008|${yr}|e-2008`] = { ...e2008refresh, price: p(e2008rPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// KIA TASMAN (2025–2026) — dual-cab ute (AU market)
// ─────────────────────────────────────────────────────────────
const tasmanS = {
  engine: '2.2L 4-cyl CRDi Diesel', fuelType: 'diesel', displacement: 2151,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 147, torque: 441, weight: 2230, seats: 5,
  fc: 8.5, fh: null, fx: null,
  acceleration: 10.5, topSpeed: 185
}
const tasmanGTLine = { ...tasmanS, power: 154, weight: 2280 }
const tasmanPrices = {
  S:         { '2025':50990,'2026':52990 },
  'GT-Line': { '2025':61990,'2026':63990 },
  'SX+':     { '2025':72990,'2026':74990 },
}
for (const yr of ['2025','2026']) {
  specs[`Kia|Tasman|${yr}|S`]       = { ...tasmanS,      price: p(tasmanPrices.S[yr]) }
  specs[`Kia|Tasman|${yr}|GT-Line`] = { ...tasmanGTLine, price: p(tasmanPrices['GT-Line'][yr]) }
  specs[`Kia|Tasman|${yr}|SX+`]     = { ...tasmanGTLine, weight: 2310, price: p(tasmanPrices['SX+'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-70 (2024–2026) — large 6-cyl AWD SUV (AU market)
// ─────────────────────────────────────────────────────────────
const cx70diesel = {
  engine: '3.3L 6-cyl SH-VPTR Diesel', fuelType: 'diesel', displacement: 3283,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 187, torque: 550, weight: 2100, seats: 5,
  fc: 7.8, fh: null, fx: null,
  acceleration: 6.8, topSpeed: 210
}
const cx70phev = {
  engine: '2.5L 4-cyl PHEV', fuelType: 'hybrid', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-Skyactiv Auto',
  power: 241, torque: 500, weight: 2290, seats: 5,
  fc: 2.3, fh: null, fx: null,
  acceleration: 5.8, topSpeed: 200, range: 82
}
const cx70Prices = {
  'GT':      { '2024':79990,'2025':82990,'2026':85990 },
  'GT SP':   { '2024':89990,'2025':92990,'2026':95990 },
  'GT PHEV': { '2024':99990,'2025':102990,'2026':105990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Mazda|CX-70|${yr}|GT`]      = { ...cx70diesel, price: p(cx70Prices['GT'][yr]) }
  specs[`Mazda|CX-70|${yr}|GT SP`]   = { ...cx70diesel, price: p(cx70Prices['GT SP'][yr]) }
  specs[`Mazda|CX-70|${yr}|GT PHEV`] = { ...cx70phev,   price: p(cx70Prices['GT PHEV'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement131.json', JSON.stringify(out, null, 2))
console.log(`supplement131.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
