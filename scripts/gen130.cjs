'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PEUGEOT e-3008 (2024–2026) — electric compact SUV (AU market)
// ─────────────────────────────────────────────────────────────
const e3008GT = {
  engine: '157kW Single Electric Motor', fuelType: 'electric',
  battery: '73.0 kWh', range: 527,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 157, torque: 260, weight: 2080, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.8, topSpeed: 170
}
const e3008GTlr = {
  engine: '170kW Single Electric Motor', fuelType: 'electric',
  battery: '97.0 kWh', range: 700,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 170, torque: 260, weight: 2160, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 9.0, topSpeed: 170
}
const e3008GT4x4 = {
  engine: 'Dual Electric Motor 4x4', fuelType: 'electric',
  battery: '97.0 kWh', range: 590,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 240, torque: 520, weight: 2260, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 190
}
const e3008Prices = {
  'GT':              { '2024': 72990, '2025': 75990, '2026': 78990 },
  'GT Long Range':   { '2024': 82990, '2025': 85990, '2026': 88990 },
  'GT Long Range 4x4': { '2024': 92990, '2025': 95990, '2026': 98990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Peugeot|e-3008|${yr}|GT`]              = { ...e3008GT,    price: p(e3008Prices['GT'][yr]) }
  specs[`Peugeot|e-3008|${yr}|GT Long Range`]   = { ...e3008GTlr,  price: p(e3008Prices['GT Long Range'][yr]) }
  specs[`Peugeot|e-3008|${yr}|GT Long Range 4x4`] = { ...e3008GT4x4, price: p(e3008Prices['GT Long Range 4x4'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// GWM CANNON (2022–2026) — dual-cab ute (AU market)
// ─────────────────────────────────────────────────────────────
const cannonAdv = {
  engine: '2.0L 4-cyl Diesel Turbo', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 120, torque: 400, weight: 2150, seats: 5,
  fc: 8.9, fh: null, fx: null,
  acceleration: 11.5, topSpeed: 180
}
const cannonPrem = {
  ...cannonAdv,
  power: 120, torque: 400, weight: 2180
}
const cannonPrices = {
  Adventure: { '2022':49990,'2023':51990,'2024':53990,'2025':55990,'2026':57990 },
  Premium:   { '2022':59990,'2023':61990,'2024':63990,'2025':65990,'2026':67990 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`GWM|Cannon|${yr}|Adventure`] = { ...cannonAdv,  price: p(cannonPrices.Adventure[yr]) }
  specs[`GWM|Cannon|${yr}|Premium`]   = { ...cannonPrem, price: p(cannonPrices.Premium[yr]) }
}

// ─────────────────────────────────────────────────────────────
// CHERY OMODA E5 (2024–2026) — electric compact SUV (AU market)
// ─────────────────────────────────────────────────────────────
const omodaE5Base = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '61.1 kWh', range: 420,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 150, torque: 340, weight: 1840, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 172
}
const omodaE5Prem = { ...omodaE5Base, weight: 1870 }
const omodaE5Prices = {
  Lite:    { '2024':44990,'2025':46990,'2026':48990 },
  Premium: { '2024':50990,'2025':52990,'2026':54990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Chery|Omoda E5|${yr}|Lite`]    = { ...omodaE5Base, price: p(omodaE5Prices.Lite[yr]) }
  specs[`Chery|Omoda E5|${yr}|Premium`] = { ...omodaE5Prem, price: p(omodaE5Prices.Premium[yr]) }
}

// ─────────────────────────────────────────────────────────────
// LEAPMOTOR C10 (2025–2026) — electric mid-size SUV (AU market)
// ─────────────────────────────────────────────────────────────
const leapmotorC10Std = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '69.9 kWh', range: 420,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 160, torque: 320, weight: 1940, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.3, topSpeed: 172
}
const leapmotorC10Plus = {
  ...leapmotorC10Std,
  battery: '84.6 kWh', range: 520,
  power: 170, torque: 340, weight: 1990,
  acceleration: 6.9
}
for (const yr of ['2025','2026']) {
  const adj = yr === '2026' ? 2000 : 0
  specs[`Leapmotor|C10|${yr}|Prestige`]      = { ...leapmotorC10Std,  price: p(44990 + adj) }
  specs[`Leapmotor|C10|${yr}|Prestige Plus`] = { ...leapmotorC10Plus, price: p(52990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// FORD CAPRI EV (2025–2026) — electric crossover coupe (AU market)
// ─────────────────────────────────────────────────────────────
const capriRWD = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '77.0 kWh', range: 620,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 210, torque: 545, weight: 2050, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.4, topSpeed: 180
}
const capriAWD = {
  engine: 'Dual Electric Motor AWD', fuelType: 'electric',
  battery: '77.0 kWh', range: 590,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 250, torque: 680, weight: 2170, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 180
}
for (const yr of ['2025','2026']) {
  const adj = yr === '2026' ? 2000 : 0
  specs[`Ford|Capri|${yr}|Standard`] = { ...capriRWD, price: p(59990 + adj) }
  specs[`Ford|Capri|${yr}|AWD`]      = { ...capriAWD, price: p(69990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// CADILLAC LYRIQ (2024–2026) — luxury electric SUV
// ─────────────────────────────────────────────────────────────
const lyriqRWD = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '102.0 kWh', range: 530,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 255, torque: 440, weight: 2580, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 210
}
const lyriqAWD = {
  engine: 'Dual Electric Motor AWD', fuelType: 'electric',
  battery: '102.0 kWh', range: 490,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 373, torque: 610, weight: 2720, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.6, topSpeed: 210
}
const lyriqPrices = {
  'RWD':       { '2024':115000,'2025':119000,'2026':123000 },
  'Sport AWD': { '2024':135000,'2025':139000,'2026':143000 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Cadillac|Lyriq|${yr}|RWD`]       = { ...lyriqRWD, price: p(lyriqPrices['RWD'][yr]) }
  specs[`Cadillac|Lyriq|${yr}|Sport AWD`] = { ...lyriqAWD, price: p(lyriqPrices['Sport AWD'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement130.json', JSON.stringify(out, null, 2))
console.log(`supplement130.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
