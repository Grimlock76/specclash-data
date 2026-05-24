'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// ABARTH 500e (2023–2026) — electric hot hatch (AU market)
// ─────────────────────────────────────────────────────────────
const abarth500e = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '42.0 kWh', range: 233,
  drivetrain: 'FWD', transmission: 'Single-speed Auto',
  power: 113, torque: 235, weight: 1385, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 7.0, topSpeed: 155
}
const a500ePrices = { '2023':60490,'2024':62490,'2025':64490,'2026':66490 }
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Abarth|500e|${yr}|500e`] = { ...abarth500e, price: p(a500ePrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// DS DS 3 (2024–2026) — new-gen all-electric DS 3 (AU)
// ─────────────────────────────────────────────────────────────
const ds3etense = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 430,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 260, weight: 1570, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 150
}
const ds3Prices = { '2024':54990,'2025':56990,'2026':58990 }
for (const yr of ['2024','2025','2026']) {
  specs[`DS|DS 3|${yr}|E-Tense`] = { ...ds3etense, price: p(ds3Prices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI INSTER 2026 — micro EV range extension (AU)
// ─────────────────────────────────────────────────────────────
const insterSR = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '42.0 kWh', range: 300,
  drivetrain: 'FWD', transmission: 'Single-speed Auto',
  power: 71, torque: 147, weight: 1300, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 11.7, topSpeed: 150
}
const insterLR = { ...insterSR, battery: '49.0 kWh', range: 355, power: 84, weight: 1350 }
specs[`Hyundai|Inster|2026|Standard Range`]    = { ...insterSR, price: p(34990) }
specs[`Hyundai|Inster|2026|Long Range`]         = { ...insterLR, price: p(40990) }
specs[`Hyundai|Inster|2026|Long Range Premium`] = { ...insterLR, price: p(45990) }

// ─────────────────────────────────────────────────────────────
// VOLVO EX30 (2025–2026) — fill Twin Motor + 2026 gap (AU)
// ─────────────────────────────────────────────────────────────
const ex30ExtRange = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '69 kWh', range: 480,
  drivetrain: 'RWD', transmission: 'Single-speed',
  power: 200, torque: 343, weight: 1870, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.7, topSpeed: 180
}
const ex30TwinMotor = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '69 kWh', range: 480,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 315, torque: 543, weight: 1945, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.6, topSpeed: 180
}
specs[`Volvo|EX30|2025|Twin Motor`]        = { ...ex30TwinMotor, price: p(57990) }
specs[`Volvo|EX30|2026|Extended Range`]    = { ...ex30ExtRange,  price: p(50990) }
specs[`Volvo|EX30|2026|Twin Motor`]        = { ...ex30TwinMotor, price: p(60990) }

// ─────────────────────────────────────────────────────────────
// ORA FUNKY CAT (2023–2026) — new make, Chinese EV (AU)
// ─────────────────────────────────────────────────────────────
const oraBase = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '63.0 kWh', range: 420,
  drivetrain: 'FWD', transmission: 'Single-speed Auto',
  power: 126, torque: 250, weight: 1665, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.3, topSpeed: 160
}
const oraGT = { ...oraBase, weight: 1700 }
const oraCatPrices = {
  Cat:    { '2023':44990,'2024':46490,'2025':47990,'2026':49490 },
  'Cat GT': { '2023':48990,'2024':50490,'2025':51990,'2026':53490 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Ora|Funky Cat|${yr}|Cat`]    = { ...oraBase, price: p(oraCatPrices.Cat[yr]) }
  specs[`Ora|Funky Cat|${yr}|Cat GT`] = { ...oraGT,   price: p(oraCatPrices['Cat GT'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// BYD SEALION 7 2026 — range extension (AU)
// ─────────────────────────────────────────────────────────────
const s7SR = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '71.8 kWh', range: 482,
  drivetrain: 'FWD', transmission: 'Single-speed',
  power: 160, torque: 310, weight: 2185, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 170
}
const s7LR = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '82.9 kWh', range: 502,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 390, torque: 620, weight: 2360, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 185
}
specs[`BYD|Sealion 7|2026|Standard Range`]   = { ...s7SR, price: p(50490) }
specs[`BYD|Sealion 7|2026|Long Range AWD`]   = { ...s7LR, price: p(58490) }

// ─────────────────────────────────────────────────────────────
// BYD SEALION 6 2026 — PHEV variants extension (AU)
// ─────────────────────────────────────────────────────────────
const s6Phev = {
  engine: '1.5L I4 PHEV', fuelType: 'hybrid', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-spd Auto',
  power: 160, torque: 300, weight: 1865, seats: 5,
  fc: 1.0, fh: 0.8, fx: 1.2,
  acceleration: 6.9, topSpeed: 180
}
const s6PhevAWD = { ...s6Phev, drivetrain: 'AWD', power: 220, torque: 400, weight: 1955, acceleration: 5.9 }
specs[`BYD|Sealion 6|2026|PHEV`]     = { ...s6Phev,    price: p(48490) }
specs[`BYD|Sealion 6|2026|PHEV AWD`] = { ...s6PhevAWD, price: p(55490) }

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI URUS (2025–2026) — extend S & Performante (AU)
// ─────────────────────────────────────────────────────────────
const urusS = {
  engine: '4.0L V8 twin-turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 478, torque: 850, weight: 2197, seats: 5,
  fc: 14.5, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 305
}
const urusPerformante = { ...urusS, power: 490, weight: 2150, acceleration: 3.3, topSpeed: 306 }
const urusPrices = {
  S:            { '2025':575000,'2026':590000 },
  Performante:  { '2025':600000,'2026':615000 },
}
for (const yr of ['2025','2026']) {
  specs[`Lamborghini|Urus|${yr}|S`]           = { ...urusS,           price: p(urusPrices.S[yr]) }
  specs[`Lamborghini|Urus|${yr}|Performante`] = { ...urusPerformante, price: p(urusPrices.Performante[yr]) }
}

// ─────────────────────────────────────────────────────────────
// FERRARI SF90 STRADALE (2024–2026) — PHEV hypercar (AU)
// ─────────────────────────────────────────────────────────────
const sf90Stradale = {
  engine: '4.0L V8 twin-turbo + 3 electric motors PHEV', fuelType: 'hybrid', displacement: 3990,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Dual Clutch',
  power: 735, torque: 800, weight: 1570, seats: 2,
  fc: 5.7, fh: null, fx: null,
  acceleration: 2.5, topSpeed: 340, range: 25
}
const sf90Spider = { ...sf90Stradale, weight: 1640 }
const sf90Prices = {
  Stradale: { '2024':1280000,'2025':1320000,'2026':1360000 },
  Spider:   { '2024':1430000,'2025':1470000,'2026':1510000 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Ferrari|SF90 Stradale|${yr}|Stradale`] = { ...sf90Stradale, price: p(sf90Prices.Stradale[yr]) }
  specs[`Ferrari|SF90 Stradale|${yr}|Spider`]   = { ...sf90Spider,   price: p(sf90Prices.Spider[yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement137.json', JSON.stringify(out, null, 2))
console.log(`supplement137.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
