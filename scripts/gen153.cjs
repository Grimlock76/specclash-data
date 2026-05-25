'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// AUDI RS3 2025-2026 — 8Y Sedan (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 5000]]) {
  specs[`Audi|RS3|${year}|RS3`] = {
    engine: '2.5L 5-cyl TFSI', fuelType: 'petrol', displacement: 2480,
    cylinders: 5, drivetrain: 'AWD', transmission: '7-speed S-tronic',
    power: 294, torque: 500, weight: 1680, seats: 4,
    fc: 10.6, fh: 8.0, fx: 14.9,
    acceleration: 3.8, topSpeed: 290, price: p(99900 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 2025-2026 — Turbo and GT3 RS additions (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 10000]]) {
  specs[`Porsche|911|${year}|Turbo`] = {
    engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
    power: 382, torque: 570, weight: 1601, seats: 4,
    fc: 11.8, fh: 8.8, fx: 16.6,
    acceleration: 3.0, topSpeed: 320, price: p(390000 + inc), aspiration: 'Turbo'
  }
  specs[`Porsche|911|${year}|GT3 RS`] = {
    engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
    cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
    power: 386, torque: 465, weight: 1450, seats: 2,
    fc: 13.2, fh: 9.8, fx: 18.5,
    acceleration: 3.2, topSpeed: 296, price: p(570000 + inc), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// MASERATI MC20 2025-2026 — Coupe + Cielo (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 15000]]) {
  specs[`Maserati|MC20|${year}|Coupe`] = {
    engine: '3.0L V6 Twin-Turbo Nettuno', fuelType: 'petrol', displacement: 2992,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed DCT',
    power: 460, torque: 730, weight: 1516, seats: 2,
    fc: 12.0, fh: 9.2, fx: 16.9,
    acceleration: 2.9, topSpeed: 325, price: p(399990 + inc), aspiration: 'Turbo'
  }
  specs[`Maserati|MC20|${year}|Cielo`] = {
    engine: '3.0L V6 Twin-Turbo Nettuno', fuelType: 'petrol', displacement: 2992,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed DCT',
    power: 460, torque: 730, weight: 1566, seats: 2,
    fc: 12.2, fh: 9.3, fx: 17.2,
    acceleration: 2.9, topSpeed: 320, price: p(449990 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// ROLLS-ROYCE SPECTRE 2024-2026 — all-electric (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2024, 780000], [2025, 800000], [2026, 820000]]) {
  specs[`Rolls-Royce|Spectre|${year}|Standard`] = {
    engine: 'Electric Dual Motor', fuelType: 'electric',
    battery: '102 kWh', range: 520,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 430, torque: 900, weight: 2975, seats: 4,
    fc: null, fh: null, fx: null,
    acceleration: 4.5, topSpeed: 250, price: p(pr), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// McLAREN GTS 2025-2026 — GT replacement (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 10000]]) {
  specs[`McLaren|GTS|${year}|GTS`] = {
    engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3994,
    cylinders: 8, drivetrain: 'RWD', transmission: '7-speed SSG',
    power: 470, torque: 620, weight: 1420, seats: 2,
    fc: 11.4, fh: 8.8, fx: 15.9,
    acceleration: 3.1, topSpeed: 326, price: p(380000 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// BENTLEY BENTAYGA 2025-2026 — S and EWB variants (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 15000]]) {
  specs[`Bentley|Bentayga|${year}|S`] = {
    engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 404, torque: 770, weight: 2440, seats: 5,
    fc: 14.3, fh: 10.8, fx: 20.1,
    acceleration: 4.4, topSpeed: 290, price: p(399990 + inc), aspiration: 'Turbo'
  }
  specs[`Bentley|Bentayga|${year}|EWB`] = {
    engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 404, torque: 770, weight: 2550, seats: 5,
    fc: 14.6, fh: 11.0, fx: 20.5,
    acceleration: 4.5, topSpeed: 290, price: p(499990 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI TEMERARIO 2025-2026 — Huracan replacement (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 20000]]) {
  specs[`Lamborghini|Temerario|${year}|Coupe`] = {
    engine: '4.0L V8 Twin-Turbo Hybrid', fuelType: 'hybrid', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed DCT',
    power: 545, torque: 730, weight: 1650, seats: 2,
    fc: 12.8, fh: 9.8, fx: 18.0,
    acceleration: 2.7, topSpeed: 340, price: p(620000 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement153.json', JSON.stringify(out, null, 2))
console.log(`supplement153.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
