'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TESLA CYBERTRUCK (2025–2026) — extend AWD/Cyberbeast/RWD (AU)
// ─────────────────────────────────────────────────────────────
const ctAWD = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '123 kWh', range: 547,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 440, torque: 749, weight: 3040, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.1, topSpeed: 193
}
const ctBeast = {
  engine: 'Tri Motor Electric', fuelType: 'electric',
  battery: '123 kWh', range: 515,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 630, torque: 1122, weight: 3175, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 2.6, topSpeed: 210
}
const ctRWD = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '123 kWh', range: 483,
  drivetrain: 'RWD', transmission: 'Single-speed',
  power: 280, torque: 532, weight: 2977, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 177
}
const ctPrices = {
  AWD:        { '2025':124990,'2026':129990 },
  Cyberbeast: { '2025':154990,'2026':159990 },
  RWD:        { '2025':103990,'2026':107990 },
}
for (const yr of ['2025','2026']) {
  specs[`Tesla|Cybertruck|${yr}|AWD`]        = { ...ctAWD,   price: p(ctPrices.AWD[yr]) }
  specs[`Tesla|Cybertruck|${yr}|Cyberbeast`] = { ...ctBeast, price: p(ctPrices.Cyberbeast[yr]) }
  specs[`Tesla|Cybertruck|${yr}|RWD`]        = { ...ctRWD,   price: p(ctPrices.RWD[yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DISCOVERY SPORT (2025–2026) — extend SE/HSE/R-Dynamic (AU)
// ─────────────────────────────────────────────────────────────
const dsSE = {
  engine: '2.0L I4 D200 Ingenium', fuelType: 'diesel', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed automatic',
  power: 147, torque: 430, weight: 1910, seats: 5,
  fc: 6.8, fh: 5.9, fx: 8.8,
  acceleration: 9.5, topSpeed: 195
}
const dsHSE = {
  engine: '2.0L I4 P250 Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed automatic',
  power: 183, torque: 365, weight: 1945, seats: 5,
  fc: 9.4, fh: 8.2, fx: 12.1,
  acceleration: 7.5, topSpeed: 200
}
const dsRDyn = { ...dsHSE, weight: 1950 }
const dsPrices = {
  SE:        { '2025':58990,'2026':60990 },
  HSE:       { '2025':68990,'2026':70990 },
  'R-Dynamic': { '2025':73990,'2026':75990 },
}
for (const yr of ['2025','2026']) {
  specs[`Land Rover|Discovery Sport|${yr}|SE`]        = { ...dsSE,    price: p(dsPrices.SE[yr]) }
  specs[`Land Rover|Discovery Sport|${yr}|HSE`]       = { ...dsHSE,   price: p(dsPrices.HSE[yr]) }
  specs[`Land Rover|Discovery Sport|${yr}|R-Dynamic`] = { ...dsRDyn,  price: p(dsPrices['R-Dynamic'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER EVOQUE (2025–2026) — extend S/SE/R-Dynamic (AU)
// ─────────────────────────────────────────────────────────────
const evqS = {
  engine: '2.0L I4 D165 Ingenium', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'FWD', transmission: '9-speed automatic',
  power: 120, torque: 380, weight: 1870, seats: 5,
  fc: 6.3, fh: 5.5, fx: 8.1,
  acceleration: 10.5, topSpeed: 185
}
const evqSE = {
  engine: '2.0L I4 P200 Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed automatic',
  power: 147, torque: 320, weight: 1905, seats: 5,
  fc: 8.5, fh: 7.4, fx: 10.9,
  acceleration: 8.8, topSpeed: 195
}
const evqRDyn = {
  engine: '2.0L I4 P250 Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed automatic',
  power: 183, torque: 365, weight: 1965, seats: 5,
  fc: 9.2, fh: 8.0, fx: 11.8,
  acceleration: 7.3, topSpeed: 210
}
const evqPrices = {
  S:           { '2025':64990,'2026':66990 },
  SE:          { '2025':74990,'2026':76990 },
  'R-Dynamic': { '2025':79990,'2026':81990 },
}
for (const yr of ['2025','2026']) {
  specs[`Land Rover|Range Rover Evoque|${yr}|S`]         = { ...evqS,    price: p(evqPrices.S[yr]) }
  specs[`Land Rover|Range Rover Evoque|${yr}|SE`]        = { ...evqSE,   price: p(evqPrices.SE[yr]) }
  specs[`Land Rover|Range Rover Evoque|${yr}|R-Dynamic`] = { ...evqRDyn, price: p(evqPrices['R-Dynamic'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DISCOVERY (2025–2026) — extend SE/HSE (AU)
// ─────────────────────────────────────────────────────────────
const discSE = {
  engine: '3.0L I6 D300 Ingenium', fuelType: 'diesel', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 221, torque: 650, weight: 2195, seats: 7,
  fc: 8.2, fh: 7.1, fx: 10.5,
  acceleration: 7.0, topSpeed: 200
}
const discHSE = {
  engine: '3.0L I6 P360 Mild Hybrid', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 265, torque: 550, weight: 2230, seats: 7,
  fc: 12.8, fh: 11.1, fx: 16.5,
  acceleration: 6.3, topSpeed: 220
}
const discPrices = {
  SE:  { '2025':87990,'2026':90990 },
  HSE: { '2025':102990,'2026':105990 },
}
for (const yr of ['2025','2026']) {
  specs[`Land Rover|Discovery|${yr}|SE`]  = { ...discSE,  price: p(discPrices.SE[yr]) }
  specs[`Land Rover|Discovery|${yr}|HSE`] = { ...discHSE, price: p(discPrices.HSE[yr]) }
}

// ─────────────────────────────────────────────────────────────
// JAGUAR F-PACE (2025–2026) — Prestige/R-Dynamic S/R-Dynamic SE (AU)
// ─────────────────────────────────────────────────────────────
const fpPrestige = {
  engine: '2.0D Turbo Diesel', fuelType: 'diesel', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 150, torque: 430, weight: 1935, seats: 5,
  fc: 6.5, fh: 5.0, fx: 8.6,
  acceleration: 8.5, topSpeed: 213
}
const fpRDS = {
  engine: '2.0T Turbo P250', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 184, torque: 365, weight: 1990, seats: 5,
  fc: 9.0, fh: 6.7, fx: 12.7,
  acceleration: 6.8, topSpeed: 222
}
const fpRDSE = {
  engine: '2.0T Turbo P300', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 221, torque: 400, weight: 2020, seats: 5,
  fc: 9.3, fh: 6.9, fx: 13.1,
  acceleration: 6.3, topSpeed: 235
}
const fpPrices = {
  Prestige:      { '2025':84490,'2026':85990 },
  'R-Dynamic S':  { '2025':93990,'2026':95490 },
  'R-Dynamic SE': { '2025':105990,'2026':107490 },
}
for (const yr of ['2025','2026']) {
  specs[`Jaguar|F-Pace|${yr}|Prestige`]       = { ...fpPrestige, price: p(fpPrices.Prestige[yr]) }
  specs[`Jaguar|F-Pace|${yr}|R-Dynamic S`]    = { ...fpRDS,      price: p(fpPrices['R-Dynamic S'][yr]) }
  specs[`Jaguar|F-Pace|${yr}|R-Dynamic SE`]   = { ...fpRDSE,     price: p(fpPrices['R-Dynamic SE'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// GENESIS GV80 COUPE (2024–2026) — new model, coupe-SUV (AU)
// ─────────────────────────────────────────────────────────────
const gv80Coupe = {
  engine: '3.5L V6 Twin Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 279, torque: 530, weight: 2150, seats: 5,
  fc: 11.7, fh: null, fx: null,
  acceleration: 5.1, topSpeed: 250
}
const gv80cPrices = { '2024':145000,'2025':150000,'2026':155000 }
for (const yr of ['2024','2025','2026']) {
  specs[`Genesis|GV80 Coupe|${yr}|3.5T Sport+`] = { ...gv80Coupe, price: p(gv80cPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// KIA EV9 (2025–2026) — Air Long Range/Earth Long Range/GT-Line (AU)
// ─────────────────────────────────────────────────────────────
const ev9AirLR = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '99.8 kWh', range: 563,
  drivetrain: 'RWD', transmission: 'Single-speed',
  power: 150, torque: 350, weight: 2640, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 9.4, topSpeed: 185
}
const ev9EarthLR = { ...ev9AirLR, range: 561, weight: 2665 }
const ev9GTLine = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '99.8 kWh', range: 501,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 283, torque: 600, weight: 2740, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 200
}
const ev9Prices = {
  'Air Long Range':   { '2025':91990,'2026':93990 },
  'Earth Long Range': { '2025':101990,'2026':103990 },
  'GT-Line':          { '2025':111990,'2026':113990 },
}
for (const yr of ['2025','2026']) {
  specs[`Kia|EV9|${yr}|Air Long Range`]   = { ...ev9AirLR,   price: p(ev9Prices['Air Long Range'][yr]) }
  specs[`Kia|EV9|${yr}|Earth Long Range`] = { ...ev9EarthLR, price: p(ev9Prices['Earth Long Range'][yr]) }
  specs[`Kia|EV9|${yr}|GT-Line`]          = { ...ev9GTLine,  price: p(ev9Prices['GT-Line'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement138.json', JSON.stringify(out, null, 2))
console.log(`supplement138.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
