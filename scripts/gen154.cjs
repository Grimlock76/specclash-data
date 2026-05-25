'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// LAND ROVER DISCOVERY 2025-2026 — Dynamic SE + Dynamic HSE (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 5000]]) {
  specs[`Land Rover|Discovery|${year}|Dynamic SE`] = {
    engine: '3.0L I6 MHEV P360 Petrol', fuelType: 'petrol', displacement: 2996,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 265, torque: 500, weight: 2398, seats: 7,
    fc: 11.6, fh: 8.9, fx: 16.3,
    acceleration: 6.4, topSpeed: 230, price: p(99900 + inc), aspiration: 'Turbo'
  }
  specs[`Land Rover|Discovery|${year}|Dynamic HSE`] = {
    engine: '3.0L I6 MHEV P360 Petrol', fuelType: 'petrol', displacement: 2996,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 265, torque: 500, weight: 2425, seats: 7,
    fc: 11.6, fh: 8.9, fx: 16.3,
    acceleration: 6.4, topSpeed: 230, price: p(109900 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// RENAULT MEGANE E-TECH 2025-2026 — EV40 (missing trim, AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 2000]]) {
  specs[`Renault|Megane E-Tech|${year}|EV40`] = {
    engine: 'Electric 40 kWh', fuelType: 'electric',
    battery: '40 kWh', range: 298,
    drivetrain: 'FWD', transmission: '1sp auto',
    power: 96, torque: 250, weight: 1624, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 8.7, topSpeed: 150, price: p(49990 + inc), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// AUDI RS5 2023-2024 — B9.5 final years (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2023, 0], [2024, 10000]]) {
  specs[`Audi|RS5|${year}|RS5`] = {
    engine: '2.9L V6 biturbo TFSI', fuelType: 'petrol', displacement: 2894,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
    power: 331, torque: 600, weight: 1810, seats: 5,
    fc: 10.8, fh: 8.2, fx: 15.2,
    acceleration: 3.9, topSpeed: 280, price: p(149900 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE MACAN ELECTRIC 2025-2026 — missing variants (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 5000]]) {
  specs[`Porsche|Macan|${year}|Electric`] = {
    engine: 'Electric Single Motor 95 kWh', fuelType: 'electric',
    battery: '95 kWh', range: 405,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 200, torque: 350, weight: 2200, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.0, topSpeed: 220, price: p(98200 + inc), aspiration: 'Electric'
  }
  specs[`Porsche|Macan|${year}|Turbo Electric`] = {
    engine: 'Electric Dual Motor 100 kWh', fuelType: 'electric',
    battery: '100 kWh', range: 500,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 470, torque: 1130, weight: 2350, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 3.3, topSpeed: 260, price: p(167500 + inc), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE CAYENNE GTS 2025-2026 — non-Coupe (missing, AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 10000]]) {
  specs[`Porsche|Cayenne|${year}|GTS`] = {
    engine: '4.0L V8 biturbo', fuelType: 'petrol', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
    power: 368, torque: 730, weight: 2220, seats: 5,
    fc: 14.2, fh: 10.7, fx: 19.9,
    acceleration: 4.5, topSpeed: 270, price: p(249000 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// MINI CONVERTIBLE 2026 — F57 final year (AU)
// ─────────────────────────────────────────────────────────────
specs['Mini|Convertible|2026|Cooper'] = {
  engine: '1.5L I3 TwinPower Turbo', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 100, torque: 190, weight: 1275, seats: 4,
  fc: 6.1, fh: 4.7, fx: 8.6,
  acceleration: 9.2, topSpeed: 204, price: p(48900), aspiration: 'Turbo'
}
specs['Mini|Convertible|2026|Cooper S'] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 131, torque: 280, weight: 1330, seats: 4,
  fc: 7.1, fh: 5.5, fx: 10.0,
  acceleration: 7.1, topSpeed: 228, price: p(56900), aspiration: 'Turbo'
}
specs['Mini|Convertible|2026|JCW'] = {
  engine: '2.0L I4 TwinPower Turbo JCW', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 170, torque: 320, weight: 1355, seats: 4,
  fc: 7.4, fh: 5.8, fx: 10.4,
  acceleration: 6.5, topSpeed: 247, price: p(67900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW M4 CS 2024-2025 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2024, 0], [2025, 10000]]) {
  specs[`BMW|M4|${year}|M4 CS`] = {
    engine: '3.0L I6 TwinPower Turbo S58', fuelType: 'petrol', displacement: 2993,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed M DCT',
    power: 405, torque: 650, weight: 1727, seats: 4,
    fc: 10.7, fh: 8.1, fx: 15.1,
    acceleration: 3.4, topSpeed: 302, price: p(329990 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement154.json', JSON.stringify(out, null, 2))
console.log(`supplement154.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
