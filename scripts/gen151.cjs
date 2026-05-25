'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG 2025-2026 — S650 lineup (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 2000]]) {
  specs[`Ford|Mustang|${year}|Fastback EcoBoost`] = {
    engine: '2.3L I4 EcoBoost High Performance', fuelType: 'petrol', displacement: 2261,
    cylinders: 4, drivetrain: 'RWD', transmission: '10-speed auto',
    power: 232, torque: 475, weight: 1655, seats: 4,
    fc: 10.6, fh: 8.2, fx: 15.2,
    acceleration: 5.8, topSpeed: 230, price: p(62990 + inc), aspiration: 'Turbo'
  }
  specs[`Ford|Mustang|${year}|Fastback 5.0 GT`] = {
    engine: '5.0L V8 Gen 4 Coyote', fuelType: 'petrol', displacement: 4951,
    cylinders: 8, drivetrain: 'RWD', transmission: '10-speed auto',
    power: 339, torque: 556, weight: 1756, seats: 4,
    fc: 13.9, fh: 10.8, fx: 19.2,
    acceleration: 4.8, topSpeed: 250, price: p(81990 + inc), aspiration: 'NA'
  }
  specs[`Ford|Mustang|${year}|Dark Horse`] = {
    engine: '5.0L V8 Predator Coyote', fuelType: 'petrol', displacement: 4951,
    cylinders: 8, drivetrain: 'RWD', transmission: '6-speed Tremec',
    power: 358, torque: 569, weight: 1814, seats: 4,
    fc: 14.5, fh: 11.2, fx: 20.0,
    acceleration: 4.2, topSpeed: 260, price: p(101990 + inc), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST 2025-2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, base] of [[2025, 0], [2026, 2000]]) {
  specs[`Ford|Everest|${year}|Ambiente`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'RWD', transmission: '10-speed auto',
    power: 125, torque: 405, weight: 2140, seats: 7,
    fc: 8.5, fh: 6.7, fx: 11.9,
    acceleration: 11.0, topSpeed: 183, price: p(61990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Everest|${year}|Trend`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 154, torque: 500, weight: 2185, seats: 7,
    fc: 8.8, fh: 6.9, fx: 12.3,
    acceleration: 10.0, topSpeed: 185, price: p(65990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Everest|${year}|Sport`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 154, torque: 500, weight: 2195, seats: 7,
    fc: 9.0, fh: 7.1, fx: 12.6,
    acceleration: 10.0, topSpeed: 185, price: p(72990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Everest|${year}|Titanium`] = {
    engine: '3.0L V6 TDCi', fuelType: 'diesel', displacement: 2956,
    cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 184, torque: 600, weight: 2290, seats: 7,
    fc: 9.2, fh: 7.3, fx: 12.9,
    acceleration: 9.0, topSpeed: 195, price: p(79990 + base), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// FORD PUMA 2025-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 2000]]) {
  specs[`Ford|Puma|${year}|ST-Line`] = {
    engine: '1.0L I3 EcoBoost mHEV', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 92, torque: 170, weight: 1345, seats: 5,
    fc: 5.5, fh: 4.3, fx: 7.8,
    acceleration: 11.5, topSpeed: 195, price: p(39990 + inc), aspiration: 'Turbo'
  }
  specs[`Ford|Puma|${year}|ST-Line X`] = {
    engine: '1.0L I3 EcoBoost mHEV', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 92, torque: 170, weight: 1360, seats: 5,
    fc: 5.5, fh: 4.3, fx: 7.8,
    acceleration: 11.5, topSpeed: 195, price: p(42990 + inc), aspiration: 'Turbo'
  }
  specs[`Ford|Puma|${year}|ST`] = {
    engine: '1.5L I3 EcoBoost', fuelType: 'petrol', displacement: 1497,
    cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
    power: 147, torque: 320, weight: 1444, seats: 5,
    fc: 7.3, fh: 5.7, fx: 10.3,
    acceleration: 6.7, topSpeed: 222, price: p(49990 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement151.json', JSON.stringify(out, null, 2))
console.log(`supplement151.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
