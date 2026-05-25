'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW 8 SERIES CONVERTIBLE (G14) 2021-2026 — soft-top cabriolet (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2021, { i840: 195900, m850: 268900, m8: 349900 }],
  [2022, { i840: 201900, m850: 278900, m8: 360900 }],
  [2023, { i840: 207900, m850: 288900, m8: 371900 }],
  [2024, { i840: 213900, m850: 298900, m8: 382900 }],
  [2025, { i840: 219900, m850: 309900, m8: 394900 }],
  [2026, { i840: 225900, m850: 319900, m8: 406900 }],
]) {
  specs[`BMW|8 Series Convertible|${year}|840i Convertible`] = {
    engine: '3.0L I6 Turbo', fuelType: 'petrol', displacement: 2998,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed auto',
    power: 210, torque: 400, weight: 1965, seats: 4,
    fc: 8.3, fh: 6.2, fx: 12.0,
    acceleration: 5.3, topSpeed: 250, price: p(prices.i840), aspiration: 'Turbo'
  }
  specs[`BMW|8 Series Convertible|${year}|M850i xDrive Convertible`] = {
    engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 390, torque: 750, weight: 2055, seats: 4,
    fc: 10.8, fh: 8.0, fx: 15.2,
    acceleration: 3.9, topSpeed: 250, price: p(prices.m850), aspiration: 'Turbo'
  }
  specs[`BMW|8 Series Convertible|${year}|M8 Competition Convertible`] = {
    engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed M DCT',
    power: 460, torque: 750, weight: 2005, seats: 4,
    fc: 11.3, fh: 8.2, fx: 15.8,
    acceleration: 3.3, topSpeed: 305, price: p(prices.m8), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// FERRARI 812 GTS 2021-2022 — 6.5L V12 NA spider (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2021, 659900], [2022, 689900]]) {
  specs[`Ferrari|812 GTS|${year}|GTS`] = {
    engine: '6.5L V12 NA', fuelType: 'petrol', displacement: 6496,
    cylinders: 12, drivetrain: 'RWD', transmission: '7-speed DCT',
    power: 588, torque: 718, weight: 1630, seats: 2,
    fc: 16.5, fh: 12.8, fx: 22.1,
    acceleration: 3.0, topSpeed: 340, price: p(pr), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement158.json', JSON.stringify(out, null, 2))
console.log(`supplement158.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
