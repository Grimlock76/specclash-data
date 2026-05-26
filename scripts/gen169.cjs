'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES S-CLASS — 2025 trim gaps
// S 450, S 580 4MATIC, S 63 AMG e Performance, Maybach S 580 4MATIC
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|S-Class|2025|S 450`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 270, torque: 550, weight: 2165, seats: 5,
  fc: 9.3, fh: 7.1, fx: 13.5,
  acceleration: 5.9, topSpeed: 250, price: p(264900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2025|S 580 4MATIC`] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2300, seats: 5,
  fc: 11.9, fh: 9.1, fx: 16.7,
  acceleration: 4.3, topSpeed: 250, price: p(354900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2025|S 63 AMG e Performance`] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 500, torque: 1150, weight: 2655, seats: 5,
  fc: 2.8, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 250, price: p(524900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2025|Maybach S 580 4MATIC`] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2395, seats: 4,
  fc: 12.3, fh: 9.4, fx: 17.3,
  acceleration: 4.8, topSpeed: 250, price: p(694900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES SL — 2025 trim gaps
// SL 43, SL 63 AMG 4MATIC+
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|SL|2025|SL 43`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 280, torque: 480, weight: 1835, seats: 2,
  fc: 9.8, fh: 7.5, fx: 14.1,
  acceleration: 4.9, topSpeed: 275, price: p(214900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SL|2025|SL 63 AMG 4MATIC+`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 430, torque: 900, weight: 1990, seats: 2,
  fc: 12.9, fh: 9.9, fx: 18.2,
  acceleration: 3.6, topSpeed: 275, price: p(454900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES AMG GT — 2025 trim gaps
// AMG GT 55 4MATIC+, AMG GT 63 S E Performance
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2025|AMG GT 55 4MATIC+`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 320, torque: 700, weight: 1870, seats: 4,
  fc: 12.2, fh: 9.3, fx: 17.1,
  acceleration: 4.0, topSpeed: 290, price: p(274900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2025|AMG GT 63 S E Performance`] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 620, torque: 1400, weight: 2370, seats: 4,
  fc: 2.4, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 316, price: p(494900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2025 trim gap
// Carrera GTS
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2025|Carrera GTS`] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 398, torque: 570, weight: 1510, seats: 2,
  fc: 12.0, fh: 9.5, fx: 16.0,
  acceleration: 3.3, topSpeed: 312, price: p(294000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — 2025 trim gap
// Turbo GT
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Taycan|2025|Turbo GT`] = {
  engine: 'Electric Quad Motor', fuelType: 'electric', battery: '105 kWh', range: 555,
  drivetrain: 'AWD', transmission: '2-speed auto',
  power: 760, torque: 1340, weight: 2370, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 2.2, topSpeed: 305, price: p(544000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// AUDI A5 — 2025 trim gaps
// 45 TFSI quattro, S5
// ─────────────────────────────────────────────────────────────
specs[`Audi|A5|2025|45 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 195, torque: 370, weight: 1680, seats: 5,
  fc: 8.0, fh: 6.0, fx: 11.3,
  acceleration: 6.2, topSpeed: 250, price: p(74900), aspiration: 'Turbo'
}
specs[`Audi|A5|2025|S5`] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 260, torque: 500, weight: 1770, seats: 5,
  fc: 9.0, fh: 6.9, fx: 12.8,
  acceleration: 4.5, topSpeed: 250, price: p(104900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement169.json', JSON.stringify(out, null, 2))
console.log(`supplement169.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
