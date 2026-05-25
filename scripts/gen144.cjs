'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// SMART #1 2024 — Pro+, Premium, Brabus (AU)
// ─────────────────────────────────────────────────────────────
specs['Smart|#1|2024|Pro+'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '66 kWh', range: 440,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 200, torque: 343, weight: 1820, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 180, price: p(45990)
}
specs['Smart|#1|2024|Premium'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '66 kWh', range: 440,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 200, torque: 343, weight: 1820, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 180, price: p(52990)
}
specs['Smart|#1|2024|Brabus'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '66 kWh', range: 400,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 315, torque: 584, weight: 1970, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.9, topSpeed: 180, price: p(59990)
}

// ─────────────────────────────────────────────────────────────
// SMART #3 2024 — Pro+, Brabus (AU)
// ─────────────────────────────────────────────────────────────
specs['Smart|#3|2024|Pro+'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '66 kWh', range: 455,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 200, torque: 343, weight: 1845, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 180, price: p(47990)
}
specs['Smart|#3|2024|Brabus'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '66 kWh', range: 420,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 315, torque: 584, weight: 2000, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 180, price: p(63990)
}

// ─────────────────────────────────────────────────────────────
// AUDI A3 2025 — 40 TFSI quattro (AU) — covers 2024/25/26 via ±1
// ─────────────────────────────────────────────────────────────
specs['Audi|A3|2025|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 147, torque: 320, weight: 1415, seats: 5,
  fc: 7.6, fh: 5.8, fx: 10.7,
  acceleration: 7.3, topSpeed: 236, price: p(62900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q3 2025 — 40 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q3|2025|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 132, torque: 320, weight: 1560, seats: 5,
  fc: 8.4, fh: 6.4, fx: 11.5,
  acceleration: 7.9, topSpeed: 209, price: p(55900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q5 SPORTBACK 2025 — SQ5 Sportback (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q5 Sportback|2025|SQ5 Sportback'] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 270, torque: 600, weight: 1985, seats: 5,
  fc: 9.8, fh: 7.5, fx: 14.0,
  acceleration: 4.9, topSpeed: 250, price: p(112900)
}

// ─────────────────────────────────────────────────────────────
// AUDI A4 2025 — 40 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A4|2025|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 183, torque: 370, weight: 1625, seats: 5,
  fc: 8.2, fh: 6.3, fx: 11.4,
  acceleration: 6.3, topSpeed: 250, price: p(78900)
}

// ─────────────────────────────────────────────────────────────
// AUDI A6 2025 — 55 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A6|2025|55 TFSI quattro'] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 250, torque: 500, weight: 1870, seats: 5,
  fc: 9.2, fh: 7.0, fx: 13.2,
  acceleration: 5.1, topSpeed: 250, price: p(122900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q7 2025 — 45 TDI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q7|2025|45 TDI quattro'] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 170, torque: 600, weight: 2170, seats: 7,
  fc: 7.3, fh: 5.6, fx: 10.1,
  acceleration: 6.5, topSpeed: 230, price: p(107900)
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 2026 — completing the 2026 lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Porsche|911|2026|Carrera S Cabriolet'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 331, torque: 570, weight: 1455, seats: 2,
  fc: 11.6, fh: 9.1, fx: 15.5,
  acceleration: 3.7, topSpeed: 308, price: p(291000)
}
specs['Porsche|911|2026|Carrera 4'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 290, torque: 450, weight: 1490, seats: 2,
  fc: 11.5, fh: 9.0, fx: 15.3,
  acceleration: 4.2, topSpeed: 290, price: p(249000)
}
specs['Porsche|911|2026|Carrera 4S'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 331, torque: 570, weight: 1510, seats: 2,
  fc: 11.7, fh: 9.2, fx: 15.7,
  acceleration: 3.6, topSpeed: 308, price: p(289000)
}
specs['Porsche|911|2026|Carrera GTS'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 398, torque: 570, weight: 1510, seats: 2,
  fc: 12.0, fh: 9.5, fx: 16.0,
  acceleration: 3.3, topSpeed: 312, price: p(299000)
}
specs['Porsche|911|2026|Dakar'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 398, torque: 570, weight: 1660, seats: 2,
  fc: 12.3, fh: 9.7, fx: 16.7,
  acceleration: 3.4, topSpeed: 240, price: p(382000)
}
specs['Porsche|911|2026|Targa 4'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 290, torque: 450, weight: 1515, seats: 2,
  fc: 11.7, fh: 9.2, fx: 15.5,
  acceleration: 4.4, topSpeed: 290, price: p(278000)
}
specs['Porsche|911|2026|Targa 4S'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 331, torque: 570, weight: 1535, seats: 2,
  fc: 12.0, fh: 9.4, fx: 16.1,
  acceleration: 3.8, topSpeed: 308, price: p(315000)
}
specs['Porsche|911|2026|Turbo S'] = {
  engine: '3.7 Flat-6 Biturbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 480, torque: 800, weight: 1640, seats: 2,
  fc: 13.1, fh: 10.1, fx: 18.0,
  acceleration: 2.7, topSpeed: 330, price: p(499000)
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN 2026 — 4S, Turbo GT (AU)
// ─────────────────────────────────────────────────────────────
specs['Porsche|Taycan|2026|Taycan 4S'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '93.4 kWh', range: 532,
  drivetrain: 'AWD', transmission: '2-speed auto',
  power: 390, torque: 650, weight: 2295, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 4.0, topSpeed: 250, price: p(199900)
}
specs['Porsche|Taycan|2026|Taycan Turbo GT'] = {
  engine: 'Electric Quad Motor', fuelType: 'electric',
  battery: '105 kWh', range: 555,
  drivetrain: 'AWD', transmission: '2-speed auto',
  power: 760, torque: 1340, weight: 2370, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 2.2, topSpeed: 305, price: p(549000)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement144.json', JSON.stringify(out, null, 2))
console.log(`supplement144.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
