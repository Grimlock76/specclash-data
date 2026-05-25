'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CUPRA TAVASCAN 2024-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { v1: 64990, vz: 74990 }],
  [2025, { v1: 66990, vz: 76990 }],
  [2026, { v1: 68990, vz: 79990 }],
]) {
  specs[`CUPRA|Tavascan|${year}|V1`] = {
    engine: 'Electric 77 kWh', fuelType: 'electric',
    battery: '77 kWh', range: 430,
    drivetrain: 'FWD', transmission: '1sp auto',
    power: 210, torque: 310, weight: 2053, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 7.4, topSpeed: 160, price: p(prices.v1), aspiration: 'Electric'
  }
  specs[`CUPRA|Tavascan|${year}|VZ`] = {
    engine: 'Electric Dual Motor 77 kWh', fuelType: 'electric',
    battery: '77 kWh', range: 390,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 250, torque: 545, weight: 2199, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 5.6, topSpeed: 180, price: p(prices.vz), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// FORD RANGER 2025-2026 — P703 updated lineup (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, base] of [[2025, 0], [2026, 2000]]) {
  specs[`Ford|Ranger|${year}|P703 XL`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 125, torque: 405, weight: 2070, seats: 5,
    fc: 8.2, fh: 6.5, fx: 11.4,
    acceleration: 11.5, topSpeed: 175, price: p(50990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Ranger|${year}|P703 XLT`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 154, torque: 500, weight: 2135, seats: 5,
    fc: 8.5, fh: 6.7, fx: 11.8,
    acceleration: 10.5, topSpeed: 180, price: p(60990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Ranger|${year}|P703 Wildtrak`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 154, torque: 500, weight: 2165, seats: 5,
    fc: 8.7, fh: 6.9, fx: 12.1,
    acceleration: 10.5, topSpeed: 180, price: p(72990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Ranger|${year}|P703 FX4 Max`] = {
    engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 154, torque: 500, weight: 2200, seats: 5,
    fc: 9.0, fh: 7.1, fx: 12.6,
    acceleration: 10.5, topSpeed: 178, price: p(78990 + base), aspiration: 'Turbo'
  }
  specs[`Ford|Ranger|${year}|P703 Raptor`] = {
    engine: '3.0L V6 EcoBoost Petrol', fuelType: 'petrol', displacement: 2956,
    cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
    power: 212, torque: 583, weight: 2350, seats: 5,
    fc: 14.7, fh: 11.5, fx: 19.7,
    acceleration: 7.9, topSpeed: 180, price: p(87990 + base), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// MINI COUNTRYMAN 2026 — petrol variants (AU)
// ─────────────────────────────────────────────────────────────
specs['Mini|Countryman|2026|Cooper'] = {
  engine: '1.5L I3 TwinPower Turbo', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 230, weight: 1705, seats: 5,
  fc: 6.3, fh: 4.9, fx: 8.9,
  acceleration: 8.9, topSpeed: 199, price: p(57900), aspiration: 'Turbo'
}
specs['Mini|Countryman|2026|Cooper S ALL4'] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 170, torque: 300, weight: 1840, seats: 5,
  fc: 7.2, fh: 5.6, fx: 10.2,
  acceleration: 6.4, topSpeed: 228, price: p(66900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI Q2 2026 — 40 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q2|2026|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 140, torque: 320, weight: 1445, seats: 5,
  fc: 7.8, fh: 5.9, fx: 10.8,
  acceleration: 7.1, topSpeed: 224, price: p(64900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A4 ALLROAD 2026 — additional variants (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A4 allroad|2026|45 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 195, torque: 370, weight: 1690, seats: 5,
  fc: 8.4, fh: 6.4, fx: 11.8,
  acceleration: 5.9, topSpeed: 250, price: p(99900), aspiration: 'Turbo'
}
specs['Audi|A4 allroad|2026|50 TDI quattro'] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 210, torque: 620, weight: 1750, seats: 5,
  fc: 6.8, fh: 5.2, fx: 9.5,
  acceleration: 4.8, topSpeed: 250, price: p(109900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement150.json', JSON.stringify(out, null, 2))
console.log(`supplement150.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
