'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW 2 SERIES ACTIVE TOURER (U06) 2022-2026 (AU)
// New generation replacing the F45; MLA Flex platform
// 4 variants: 218i FWD | 220i xDrive | 225e xDrive PHEV | M235i xDrive
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2022, { i218: 59900, i220: 69900, e225: 74900, m235: 89900 }],
  [2023, { i218: 61900, i220: 71900, e225: 76900, m235: 91900 }],
  [2024, { i218: 63900, i220: 73900, e225: 78900, m235: 93900 }],
  [2025, { i218: 65900, i220: 75900, e225: 80900, m235: 95900 }],
  [2026, { i218: 67900, i220: 77900, e225: 82900, m235: 97900 }],
]) {
  specs[`BMW|2 Series Active Tourer|${year}|218i`] = {
    engine: '1.5L I3 TwinPower Turbo', fuelType: 'petrol', displacement: 1499,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 100, torque: 200, weight: 1505, seats: 5,
    fc: 6.4, fh: 4.9, fx: 8.8,
    acceleration: 10.0, topSpeed: 210, price: p(prices.i218), aspiration: 'Turbo'
  }
  specs[`BMW|2 Series Active Tourer|${year}|220i xDrive`] = {
    engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed Steptronic',
    power: 135, torque: 300, weight: 1605, seats: 5,
    fc: 7.0, fh: 5.3, fx: 9.5,
    acceleration: 7.5, topSpeed: 230, price: p(prices.i220), aspiration: 'Turbo'
  }
  specs[`BMW|2 Series Active Tourer|${year}|225e xDrive`] = {
    engine: '1.5L I3 TwinPower Turbo + Electric', fuelType: 'hybrid', displacement: 1499,
    cylinders: 3, drivetrain: 'AWD', transmission: '6-speed Steptronic',
    power: 165, torque: 350, weight: 1760, seats: 5,
    range: 62, fc: 1.5, fh: 0.6, fx: 1.8,
    acceleration: 6.7, topSpeed: 215, price: p(prices.e225), aspiration: 'Turbo'
  }
  specs[`BMW|2 Series Active Tourer|${year}|M235i xDrive`] = {
    engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
    cylinders: 4, drivetrain: 'AWD', transmission: '8-speed Steptronic',
    power: 225, torque: 400, weight: 1660, seats: 5,
    fc: 8.2, fh: 6.4, fx: 11.0,
    acceleration: 4.9, topSpeed: 250, price: p(prices.m235), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement164.json', JSON.stringify(out, null, 2))
console.log(`supplement164.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
