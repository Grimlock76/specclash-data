'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MINI ACEMAN — electric crossover (2024-2026)
// New model not yet in DB; Gen 4 platform; E = 135 kW / SE = 160 kW
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { e: 55990, se: 65990 }],
  [2025, { e: 57490, se: 67490 }],
  [2026, { e: 58990, se: 68990 }],
]) {
  specs[`Mini|Aceman|${year}|Aceman E`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '42.5 kWh', range: 305,
    drivetrain: 'FWD', transmission: '1-speed auto',
    power: 135, torque: 290, weight: 1755, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 7.9, topSpeed: 160, price: p(prices.e), aspiration: 'Electric'
  }
  specs[`Mini|Aceman|${year}|Aceman SE`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '54.2 kWh', range: 406,
    drivetrain: 'FWD', transmission: '1-speed auto',
    power: 160, torque: 290, weight: 1800, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.8, topSpeed: 170, price: p(prices.se), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// MERCEDES G 580 EQ (2025-2026) — extending 2024 coverage
// Quad-motor electric G-Wagen; 432 kW / 883 Nm / 116 kWh / 473 km
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2025, 465000],
  [2026, 479990],
]) {
  specs[`Mercedes-Benz|G-Class|${year}|G 580 EQ`] = {
    engine: 'Quad Electric Motor', fuelType: 'electric', battery: '116 kWh', range: 473,
    drivetrain: 'AWD', transmission: '2-speed',
    power: 432, torque: 883, weight: 3085, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 4.7, topSpeed: 200, price: p(price), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// LEXUS 2025 TRIM GAPS — trims present in 2026 but missing from 2025
// All specs identical to 2026 (same gen); prices ~$3-5k lower
// ─────────────────────────────────────────────────────────────

// GX 550 F Sport + Sports Luxury
specs[`Lexus|GX|2025|GX 550 F Sport`] = {
  engine: '3.4L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3444,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 260, torque: 650, weight: 2400, seats: 7,
  fc: 12.4, fh: 9.7, fx: 16.9,
  acceleration: 6.3, topSpeed: 200, price: p(124990), aspiration: 'Turbo'
}
specs[`Lexus|GX|2025|GX 550 Sports Luxury`] = {
  engine: '3.4L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3444,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 260, torque: 650, weight: 2390, seats: 7,
  fc: 12.4, fh: 9.7, fx: 16.9,
  acceleration: 6.3, topSpeed: 200, price: p(114990), aspiration: 'Turbo'
}

// LX 600 F Sport + Sports Luxury
specs[`Lexus|LX|2025|LX 600 F Sport`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2730, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(224990), aspiration: 'Turbo'
}
specs[`Lexus|LX|2025|LX 600 Sports Luxury`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2720, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(214990), aspiration: 'Turbo'
}

// ES 300h F Sport + Sports Luxury
specs[`Lexus|ES|2025|ES 300h F Sport`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1730, seats: 5,
  fc: 4.5, fh: 3.6, fx: 5.9,
  acceleration: 8.1, topSpeed: 180, price: p(85990), aspiration: 'NA'
}
specs[`Lexus|ES|2025|ES 300h Sports Luxury`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1720, seats: 5,
  fc: 4.4, fh: 3.6, fx: 5.8,
  acceleration: 8.1, topSpeed: 180, price: p(80990), aspiration: 'NA'
}

// RX 350h F Sport + RX 500h F Sport Performance
specs[`Lexus|RX|2025|RX 350h F Sport`] = {
  engine: '2.5L I4 Atkinson Hybrid AWD', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 215, torque: 239, weight: 2020, seats: 5,
  fc: 6.0, fh: 4.9, fx: 8.1,
  acceleration: 7.2, topSpeed: 200, price: p(94990), aspiration: 'NA'
}
specs[`Lexus|RX|2025|RX 500h F Sport Performance`] = {
  engine: '2.4L I4 Turbo Hybrid AWD', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 272, torque: 460, weight: 2120, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.7,
  acceleration: 5.0, topSpeed: 200, price: p(121990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement168.json', JSON.stringify(out, null, 2))
console.log(`supplement168.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
