'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BENTLEY CONTINENTAL GTC 2024-2026 — 3rd gen convertible (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { v8: 349990, w12: 399990 }],
  [2025, { v8: 369990, w12: 419990 }],
  [2026, { v8: 389990, w12: 439990 }],
]) {
  specs[`Bentley|Continental GTC|${year}|V8`] = {
    engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 404, torque: 770, weight: 2440, seats: 4,
    fc: 13.5, fh: 10.2, fx: 19.0,
    acceleration: 4.0, topSpeed: 318, price: p(prices.v8), aspiration: 'Turbo'
  }
  specs[`Bentley|Continental GTC|${year}|W12`] = {
    engine: '6.0L W12 Twin-Turbo', fuelType: 'petrol', displacement: 5950,
    cylinders: 12, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 467, torque: 900, weight: 2470, seats: 4,
    fc: 14.5, fh: 11.0, fx: 20.3,
    acceleration: 3.9, topSpeed: 333, price: p(prices.w12), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// FERRARI ROMA 2024-2026 — Coupe + Spider (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { base: 349990, spider: 399990 }],
  [2025, { base: 369990, spider: 419990 }],
  [2026, { base: 389990, spider: 439990 }],
]) {
  specs[`Ferrari|Roma|${year}|base`] = {
    engine: '3.9L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3902,
    cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
    power: 456, torque: 760, weight: 1570, seats: 4,
    fc: 11.5, fh: 8.8, fx: 16.1,
    acceleration: 3.4, topSpeed: 320, price: p(prices.base), aspiration: 'Turbo'
  }
  specs[`Ferrari|Roma|${year}|Spider`] = {
    engine: '3.9L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3902,
    cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
    power: 456, torque: 760, weight: 1640, seats: 4,
    fc: 11.8, fh: 9.0, fx: 16.5,
    acceleration: 3.4, topSpeed: 315, price: p(prices.spider), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 2025-2026 — Turbo Cabriolet + Turbo S Cabriolet (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 10000]]) {
  specs[`Porsche|911|${year}|Turbo Cabriolet`] = {
    engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
    power: 382, torque: 570, weight: 1635, seats: 4,
    fc: 12.0, fh: 9.0, fx: 16.9,
    acceleration: 3.1, topSpeed: 320, price: p(410000 + inc), aspiration: 'Turbo'
  }
  specs[`Porsche|911|${year}|Turbo S Cabriolet`] = {
    engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
    power: 478, torque: 800, weight: 1656, seats: 4,
    fc: 12.0, fh: 9.1, fx: 16.9,
    acceleration: 2.7, topSpeed: 330, price: p(480000 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// BENTLEY FLYING SPUR SPEED 2024-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2024, 509990], [2025, 529990], [2026, 549990]]) {
  specs[`Bentley|Flying Spur|${year}|Speed`] = {
    engine: '6.0L W12 Twin-Turbo', fuelType: 'petrol', displacement: 5950,
    cylinders: 12, drivetrain: 'AWD', transmission: '8-speed DCT',
    power: 478, torque: 1000, weight: 2438, seats: 4,
    fc: 14.8, fh: 11.2, fx: 20.8,
    acceleration: 3.7, topSpeed: 335, price: p(pr), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// BUGATTI TOURBILLON 2025-2026 — V16+electric hypercar (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2025, 7500000], [2026, 7800000]]) {
  specs[`Bugatti|Tourbillon|${year}|Standard`] = {
    engine: '8.3L V16 NA + Electric', fuelType: 'hybrid', displacement: 8300,
    cylinders: 16, drivetrain: 'AWD', transmission: '8-speed DCT',
    power: 1103, torque: 1100, weight: 1750, seats: 2,
    fc: 26.0, fh: 20.0, fx: 36.0,
    acceleration: 2.0, topSpeed: 445, price: p(pr), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement155.json', JSON.stringify(out, null, 2))
console.log(`supplement155.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
