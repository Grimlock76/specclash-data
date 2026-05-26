'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// JAGUAR I-PACE — EV400 S + EV400 HSE 2019-2023 (AU)
// EV400 SE was already in the database
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2019, { s: 107900, hse: 127900 }],
  [2020, { s: 109900, hse: 129900 }],
  [2021, { s: 112900, hse: 132900 }],
  [2022, { s: 118900, hse: 138900 }],
  [2023, { s: 123900, hse: 143900 }],
]) {
  specs[`Jaguar|I-Pace|${year}|EV400 S`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 294, torque: 696, weight: 2208, seats: 5,
    battery: 90, range: 420,
    acceleration: 4.8, topSpeed: 200, price: p(prices.s), aspiration: 'Electric'
  }
  specs[`Jaguar|I-Pace|${year}|EV400 HSE`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 294, torque: 696, weight: 2228, seats: 5,
    battery: 90, range: 415,
    acceleration: 4.8, topSpeed: 200, price: p(prices.hse), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// RANGE ROVER SPORT (L461) — Dynamic SE + Dynamic HSE 2022-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2022, { dse: 165900, dhse: 178900 }],
  [2023, { dse: 172900, dhse: 185900 }],
  [2024, { dse: 179900, dhse: 192900 }],
  [2025, { dse: 186900, dhse: 199900 }],
  [2026, { dse: 193900, dhse: 206900 }],
]) {
  specs[`Land Rover|Range Rover Sport|${year}|Dynamic SE`] = {
    engine: '3.0L I6 MHEV', fuelType: 'petrol', displacement: 2996,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 294, torque: 550, weight: 2430, seats: 5,
    fc: 10.3, fh: 7.8, fx: 14.5,
    acceleration: 5.8, topSpeed: 242, price: p(prices.dse), aspiration: 'Turbo'
  }
  specs[`Land Rover|Range Rover Sport|${year}|Dynamic HSE`] = {
    engine: '3.0L I6 MHEV', fuelType: 'petrol', displacement: 2996,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 294, torque: 550, weight: 2440, seats: 5,
    fc: 10.3, fh: 7.8, fx: 14.6,
    acceleration: 5.8, topSpeed: 242, price: p(prices.dhse), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement161.json', JSON.stringify(out, null, 2))
console.log(`supplement161.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
