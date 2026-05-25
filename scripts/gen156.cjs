'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW 4 SERIES CONVERTIBLE (G23) 2021-2026 — soft-top cabriolet (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2021, { i420: 74900, i430: 88900, m440: 118900 }],
  [2022, { i420: 78900, i430: 92900, m440: 122900 }],
  [2023, { i420: 82900, i430: 96900, m440: 126900 }],
  [2024, { i420: 86900, i430: 100900, m440: 131900 }],
  [2025, { i420: 90900, i430: 104900, m440: 136900 }],
  [2026, { i420: 94900, i430: 108900, m440: 141900 }],
]) {
  specs[`BMW|4 Series Convertible|${year}|420i Convertible`] = {
    engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
    cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
    power: 135, torque: 300, weight: 1655, seats: 4,
    fc: 7.2, fh: 5.5, fx: 10.2,
    acceleration: 8.5, topSpeed: 235, price: p(prices.i420), aspiration: 'Turbo'
  }
  specs[`BMW|4 Series Convertible|${year}|430i Convertible`] = {
    engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
    cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
    power: 190, torque: 400, weight: 1675, seats: 4,
    fc: 7.5, fh: 5.7, fx: 10.6,
    acceleration: 5.9, topSpeed: 250, price: p(prices.i430), aspiration: 'Turbo'
  }
  specs[`BMW|4 Series Convertible|${year}|M440i xDrive Convertible`] = {
    engine: '3.0L I6 Twin-Scroll Turbo', fuelType: 'petrol', displacement: 2998,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 275, torque: 500, weight: 1835, seats: 4,
    fc: 8.7, fh: 6.5, fx: 12.3,
    acceleration: 4.5, topSpeed: 250, price: p(prices.m440), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// LEXUS LC 500 CONVERTIBLE (Z100) 2025-2026 — V8 soft-top (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2025, 264900], [2026, 274900]]) {
  specs[`Lexus|LC|${year}|LC 500 Convertible`] = {
    engine: '5.0L V8 NA', fuelType: 'petrol', displacement: 4969,
    cylinders: 8, drivetrain: 'RWD', transmission: '10-speed auto',
    power: 351, torque: 540, weight: 1985, seats: 2,
    fc: 12.4, fh: 9.6, fx: 16.5,
    acceleration: 4.6, topSpeed: 270, price: p(pr), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement156.json', JSON.stringify(out, null, 2))
console.log(`supplement156.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
