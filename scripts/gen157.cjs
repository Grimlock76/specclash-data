'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW 8 SERIES GRAN COUPE (G16) 2021-2026 — 4-door fastback (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2021, { i840: 183900, m850: 258900, m8: 329900 }],
  [2022, { i840: 189900, m850: 268900, m8: 340900 }],
  [2023, { i840: 195900, m850: 278900, m8: 351900 }],
  [2024, { i840: 201900, m850: 288900, m8: 362900 }],
  [2025, { i840: 207900, m850: 298900, m8: 374900 }],
  [2026, { i840: 213900, m850: 308900, m8: 386900 }],
]) {
  specs[`BMW|8 Series Gran Coupe|${year}|840i Gran Coupe`] = {
    engine: '3.0L I6 Turbo', fuelType: 'petrol', displacement: 2998,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed auto',
    power: 210, torque: 400, weight: 1885, seats: 4,
    fc: 8.0, fh: 6.0, fx: 11.5,
    acceleration: 5.0, topSpeed: 250, price: p(prices.i840), aspiration: 'Turbo'
  }
  specs[`BMW|8 Series Gran Coupe|${year}|M850i xDrive Gran Coupe`] = {
    engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 390, torque: 750, weight: 1985, seats: 4,
    fc: 10.5, fh: 7.8, fx: 14.8,
    acceleration: 3.9, topSpeed: 250, price: p(prices.m850), aspiration: 'Turbo'
  }
  specs[`BMW|8 Series Gran Coupe|${year}|M8 Competition Gran Coupe`] = {
    engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed M DCT',
    power: 460, torque: 750, weight: 1940, seats: 4,
    fc: 11.0, fh: 8.0, fx: 15.4,
    acceleration: 3.3, topSpeed: 305, price: p(prices.m8), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 718 EV AWD (Gen 2 electric) 2025 — Cayman 4 & Boxster 4 (AU)
// ─────────────────────────────────────────────────────────────
specs['Porsche|718|2025|718 Cayman 4'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
  cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
  power: 320, torque: 560, weight: 1830, seats: 2,
  battery: 79, range: 285,
  acceleration: 4.5, topSpeed: 250, price: p(155000), aspiration: 'Electric'
}
specs['Porsche|718|2025|718 Boxster 4'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
  cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
  power: 320, torque: 560, weight: 1860, seats: 2,
  battery: 79, range: 275,
  acceleration: 4.6, topSpeed: 250, price: p(165000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement157.json', JSON.stringify(out, null, 2))
console.log(`supplement157.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
