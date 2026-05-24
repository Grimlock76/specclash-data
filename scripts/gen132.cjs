'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MG MG5 EV (2022–2026) — electric estate/sedan (AU market)
// ─────────────────────────────────────────────────────────────
const mg5Std = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '50.3 kWh', range: 320,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 280, weight: 1685, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.3, topSpeed: 185
}
const mg5LR = {
  ...mg5Std,
  battery: '61.1 kWh', range: 400,
  weight: 1735
}
const mg5Prices = {
  'Standard Range': { '2022':42990,'2023':43990,'2024':44990,'2025':45990,'2026':46990 },
  'Long Range':     { '2022':49990,'2023':50990,'2024':51990,'2025':52990,'2026':53990 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`MG|MG5|${yr}|Standard Range`] = { ...mg5Std, price: p(mg5Prices['Standard Range'][yr]) }
  specs[`MG|MG5|${yr}|Long Range`]     = { ...mg5LR,  price: p(mg5Prices['Long Range'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// RENAULT KANGOO E-TECH ELECTRIC (2022–2026) — electric van (AU)
// ─────────────────────────────────────────────────────────────
const kangooETech = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '45.0 kWh', range: 285,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 90, torque: 245, weight: 1835, seats: 3,
  fc: null, fh: null, fx: null,
  acceleration: 11.0, topSpeed: 132
}
const kangooMaxi = {
  ...kangooETech,
  battery: '45.0 kWh', range: 255,
  weight: 1920
}
const kangooPrices = {
  'Van':      { '2022':54990,'2023':56990,'2024':58990,'2025':60990,'2026':62990 },
  'Maxi Van': { '2022':59990,'2023':61990,'2024':63990,'2025':65990,'2026':67990 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`Renault|Kangoo E-Tech|${yr}|Van`]      = { ...kangooETech, price: p(kangooPrices['Van'][yr]) }
  specs[`Renault|Kangoo E-Tech|${yr}|Maxi Van`] = { ...kangooMaxi,  price: p(kangooPrices['Maxi Van'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// RENAULT 5 E-TECH (2024–2026) — electric supermini (AU market)
// ─────────────────────────────────────────────────────────────
const r5Std = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '52.0 kWh', range: 410,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 90, torque: 245, weight: 1449, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 9.4, topSpeed: 150
}
const r5LR = {
  ...r5Std,
  battery: '70.0 kWh', range: 520,
  power: 110, torque: 245, weight: 1499,
  acceleration: 8.0
}
for (const yr of ['2024','2025','2026']) {
  const adj = (parseInt(yr) - 2024) * 1500
  specs[`Renault|5 E-Tech|${yr}|Standard Range`] = { ...r5Std, price: p(42990 + adj) }
  specs[`Renault|5 E-Tech|${yr}|Long Range`]      = { ...r5LR,  price: p(49990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN TRANSPORTER T6.1 (2020–2024) — commercial van (AU)
// ─────────────────────────────────────────────────────────────
const transpTDI110 = {
  engine: '2.0L 4-cyl TDI 110', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
  power: 110, torque: 340, weight: 2025, seats: 9,
  fc: 8.0, fh: null, fx: null,
  acceleration: 12.0, topSpeed: 185
}
const transpTDI150 = {
  engine: '2.0L 4-cyl TDI 150', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
  power: 150, torque: 400, weight: 2160, seats: 9,
  fc: 8.6, fh: null, fx: null,
  acceleration: 10.5, topSpeed: 195
}
const transpPrices = {
  Trendline:   { '2020':55990,'2021':57990,'2022':59990,'2023':61990,'2024':63990 },
  Comfortline: { '2020':63990,'2021':65990,'2022':67990,'2023':69990,'2024':71990 },
  Highline:    { '2020':72990,'2021':74990,'2022':76990,'2023':78990,'2024':80990 },
}
for (const yr of ['2020','2021','2022','2023','2024']) {
  specs[`Volkswagen|Transporter|${yr}|Trendline`]   = { ...transpTDI110, price: p(transpPrices.Trendline[yr]) }
  specs[`Volkswagen|Transporter|${yr}|Comfortline`] = { ...transpTDI110, price: p(transpPrices.Comfortline[yr]) }
  specs[`Volkswagen|Transporter|${yr}|Highline`]    = { ...transpTDI150, price: p(transpPrices.Highline[yr]) }
}

// ─────────────────────────────────────────────────────────────
// FORD TRANSIT CUSTOM (2023–2026) — light commercial van (AU)
// ─────────────────────────────────────────────────────────────
const tcDiesel = {
  engine: '2.0L 4-cyl EcoBlue Diesel', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-spd Auto',
  power: 125, torque: 385, weight: 2060, seats: 9,
  fc: 7.8, fh: null, fx: null,
  acceleration: 11.5, topSpeed: 175
}
const tcPHEV = {
  engine: '2.5L iVCT Atkinson PHEV', fuelType: 'hybrid', displacement: 2488,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 97, torque: 210, weight: 2335, seats: 9,
  fc: 2.4, fh: null, fx: null,
  acceleration: 13.0, topSpeed: 160, range: 65
}
const tcPrices = {
  Trend:        { '2023':69990,'2024':71990,'2025':73990,'2026':75990 },
  Sport:        { '2023':79990,'2024':81990,'2025':83990,'2026':85990 },
  'Trend PHEV': { '2023':79990,'2024':81990,'2025':83990,'2026':85990 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Ford|Transit Custom|${yr}|Trend`]       = { ...tcDiesel, price: p(tcPrices.Trend[yr]) }
  specs[`Ford|Transit Custom|${yr}|Sport`]        = { ...tcDiesel, price: p(tcPrices.Sport[yr]) }
  specs[`Ford|Transit Custom|${yr}|Trend PHEV`]  = { ...tcPHEV,   price: p(tcPrices['Trend PHEV'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement132.json', JSON.stringify(out, null, 2))
console.log(`supplement132.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
