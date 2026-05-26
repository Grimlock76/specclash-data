'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FIAT 600 — petrol MHEV (2024-2026)
// New B-segment hatch launched in AU mid-2024; 1.2 PureTech MHEV + 6DCT
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2024, 38990],
  [2025, 40490],
  [2026, 41990],
]) {
  specs[`Fiat|600|${year}|La Prima`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '6-speed DCT',
    power: 74, torque: 205, weight: 1350, seats: 5,
    fc: 5.7, fh: 4.2, fx: 7.8,
    acceleration: 10.9, topSpeed: 185, price: p(price), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// FIAT 600e — electric (2024-2026)
// 115 kW single motor, 54 kWh, FWD, ~405 km WLTP; follows 500e naming
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2024, 50990],
  [2025, 52490],
  [2026, 53990],
]) {
  specs[`Fiat|600e|${year}|600e`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '54 kWh', range: 405,
    drivetrain: 'FWD', transmission: '1-speed auto',
    power: 115, torque: 270, weight: 1560, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 9.0, topSpeed: 150, price: p(price), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// ABARTH 600e (2024-2026)
// 177 kW electric hot hatch based on Fiat 600e; FWD, 54 kWh, ~320 km WLTP
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2024, 67990],
  [2025, 69490],
  [2026, 70990],
]) {
  specs[`Abarth|600e|${year}|600e`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '54 kWh', range: 320,
    drivetrain: 'FWD', transmission: '1-speed auto',
    power: 177, torque: 345, weight: 1640, seats: 4,
    fc: null, fh: null, fx: null,
    acceleration: 5.7, topSpeed: 200, price: p(price), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// SMART #1 (2025-2026) — extending existing 2024 coverage
// Premium/Pro+ = 200 kW RWD  |  Brabus = 315 kW AWD  |  66 kWh
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2025, { prem: 54490, proplus: 47490, brabus: 61490 }],
  [2026, { prem: 55990, proplus: 48990, brabus: 62990 }],
]) {
  specs[`Smart|#1|${year}|Premium`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '66 kWh', range: 440,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 200, torque: 343, weight: 1820, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.7, topSpeed: 180, price: p(prices.prem), aspiration: 'Electric'
  }
  specs[`Smart|#1|${year}|Pro+`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '66 kWh', range: 440,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 200, torque: 343, weight: 1820, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.7, topSpeed: 180, price: p(prices.proplus), aspiration: 'Electric'
  }
  specs[`Smart|#1|${year}|Brabus`] = {
    engine: 'Electric Dual Motor', fuelType: 'electric', battery: '66 kWh', range: 400,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 315, torque: 584, weight: 1970, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 3.9, topSpeed: 180, price: p(prices.brabus), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// SMART #3 (2025-2026) — extending existing 2024 coverage
// Pro+ = 200 kW RWD  |  Brabus = 315 kW AWD  |  66 kWh
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2025, { proplus: 49490, brabus: 65490 }],
  [2026, { proplus: 50990, brabus: 66990 }],
]) {
  specs[`Smart|#3|${year}|Pro+`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '66 kWh', range: 455,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 200, torque: 343, weight: 1845, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.7, topSpeed: 180, price: p(prices.proplus), aspiration: 'Electric'
  }
  specs[`Smart|#3|${year}|Brabus`] = {
    engine: 'Electric Dual Motor', fuelType: 'electric', battery: '66 kWh', range: 420,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 315, torque: 584, weight: 2000, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 3.7, topSpeed: 180, price: p(prices.brabus), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement166.json', JSON.stringify(out, null, 2))
console.log(`supplement166.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
