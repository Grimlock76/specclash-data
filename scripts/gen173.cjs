'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// AUDI — 2024 trim gaps (10 trims)
// All ~$2-5k cheaper than 2025 equivalents
// ─────────────────────────────────────────────────────────────
specs[`Audi|A3|2024|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 147, torque: 320, weight: 1415, seats: 5,
  fc: 7.6, fh: 5.8, fx: 10.7,
  acceleration: 7.3, topSpeed: 236, price: p(59900), aspiration: 'Turbo'
}
specs[`Audi|A4|2024|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 183, torque: 370, weight: 1625, seats: 5,
  fc: 8.2, fh: 6.3, fx: 11.4,
  acceleration: 6.3, topSpeed: 250, price: p(75900), aspiration: 'Turbo'
}
specs[`Audi|A6|2024|55 TFSI quattro`] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 250, torque: 500, weight: 1870, seats: 5,
  fc: 9.2, fh: 7.0, fx: 13.2,
  acceleration: 5.1, topSpeed: 250, price: p(119900), aspiration: 'Turbo'
}
specs[`Audi|Q3|2024|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 132, torque: 320, weight: 1560, seats: 5,
  fc: 8.4, fh: 6.4, fx: 11.5,
  acceleration: 7.9, topSpeed: 209, price: p(52900), aspiration: 'Turbo'
}
specs[`Audi|Q7|2024|45 TDI quattro`] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 170, torque: 600, weight: 2170, seats: 7,
  fc: 7.3, fh: 5.6, fx: 10.1,
  acceleration: 6.5, topSpeed: 230, price: p(104900), aspiration: 'Turbo'
}
specs[`Audi|Q5 Sportback|2024|SQ5 Sportback`] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 270, torque: 600, weight: 1985, seats: 5,
  fc: 9.8, fh: 7.5, fx: 14.0,
  acceleration: 4.9, topSpeed: 250, price: p(109900), aspiration: 'Turbo'
}
specs[`Audi|A7|2024|50 TFSI e quattro`] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 340, torque: 670, weight: 2175, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250, price: p(149900), aspiration: 'Turbo'
}
specs[`Audi|A8|2024|60 TFSI e quattro L`] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 340, torque: 700, weight: 2350, seats: 5,
  fc: 2.0, fh: null, fx: null,
  acceleration: 4.1, topSpeed: 250, price: p(279900), aspiration: 'Turbo'
}
specs[`Audi|Q2|2024|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 140, torque: 320, weight: 1445, seats: 5,
  fc: 7.8, fh: 5.9, fx: 10.8,
  acceleration: 7.1, topSpeed: 224, price: p(60900), aspiration: 'Turbo'
}
specs[`Audi|A4 allroad|2024|50 TDI quattro`] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 210, torque: 620, weight: 1750, seats: 5,
  fc: 6.8, fh: 5.2, fx: 9.5,
  acceleration: 4.8, topSpeed: 250, price: p(103900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA OCTAVIA — 2024 trim gap: Ambition
// ~$2k cheaper than 2025 ($36,990)
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Octavia|2024|Ambition`] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1325, seats: 5,
  fc: 6.3, fh: 4.8, fx: 8.8,
  acceleration: 8.7, topSpeed: 213, price: p(34990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE — 2024 trim gaps: Cayenne GTS, Macan Electric
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Cayenne|2024|GTS`] = {
  engine: '4.0L V8 biturbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 368, torque: 730, weight: 2220, seats: 5,
  fc: 14.2, fh: 10.7, fx: 19.9,
  acceleration: 4.5, topSpeed: 270, price: p(244000), aspiration: 'Turbo'
}
specs[`Porsche|Macan|2024|Electric`] = {
  engine: 'Electric Single Motor 95 kWh', fuelType: 'electric', battery: '95 kWh', range: 405,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 200, torque: 350, weight: 2200, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 220, price: p(95200), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// VOLVO — 2024 trim gaps: C40 Recharge Extended Range, EX30 Extended Range
// ~$2k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Volvo|C40 Recharge|2024|Extended Range`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '79 kWh', range: 554,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 252, torque: 545, weight: 2040, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.2, topSpeed: 180, price: p(67990), aspiration: 'Electric'
}
specs[`Volvo|EX30|2024|Extended Range`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '69 kWh', range: 480,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 200, torque: 343, weight: 1870, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.7, topSpeed: 180, price: p(45990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// GWM TANK 300 — 2024 trim gap: Ultra PHEV
// ~$2k cheaper than 2025 ($69,990)
// ─────────────────────────────────────────────────────────────
specs[`GWM|Tank 300|2024|Ultra PHEV`] = {
  engine: '2.0L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 220, torque: 530, weight: 2450, seats: 5,
  fc: 2.0, fh: 1.6, fx: 2.4,
  acceleration: 7.5, topSpeed: 195, price: p(67990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BYD SHARK — 2024 trim gap: Premium
// ~$2k cheaper than 2025 ($69,990)
// ─────────────────────────────────────────────────────────────
specs[`BYD|Shark|2024|Premium`] = {
  engine: '1.5L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1497,
  cylinders: 4, drivetrain: 'AWD', transmission: '3-speed DHT',
  power: 321, torque: 650, weight: 2680, seats: 5,
  fc: 5.3, fh: 4.3, fx: 6.5,
  acceleration: 5.7, topSpeed: 175, price: p(67990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// RENAULT MEGANE E-TECH — 2024 trim gap: EV40
// ~$2k cheaper than 2025 ($49,990)
// ─────────────────────────────────────────────────────────────
specs[`Renault|Megane E-Tech|2024|EV40`] = {
  engine: 'Electric 40 kWh', fuelType: 'electric', battery: '40 kWh', range: 298,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 96, torque: 250, weight: 1624, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 150, price: p(47990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI REVUELTO — 2024 trim gap: Spider
// ~$20k cheaper than 2025 ($1,149,000)
// ─────────────────────────────────────────────────────────────
specs[`Lamborghini|Revuelto|2024|Spider`] = {
  engine: '6.5L V12 NA + 3 Electric Motors', fuelType: 'hybrid', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-speed DCT',
  power: 710, torque: 850, weight: 1780, seats: 2,
  fc: 15.8, fh: 12.2, fx: 21.5,
  acceleration: 2.5, topSpeed: 350, price: p(1129000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement173.json', JSON.stringify(out, null, 2))
console.log(`supplement173.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
