'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// JAGUAR F-PACE & I-PACE — 2019
// ─────────────────────────────────────────────────────────────
specs[`Jaguar|F-Pace|2019|P400e R-Dynamic SE`] = {
  engine: '2.0L I4 Turbo PHEV Ingenium', fuelType: 'PHEV', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 298, torque: 640, weight: 2150, seats: 5,
  fc: 2.7, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 209, price: p(119900), aspiration: 'Turbo'
}
specs[`Jaguar|I-Pace|2019|EV400 S`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '90 kWh', range: 470,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 294, torque: 696, weight: 2208, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 200, price: p(119900), aspiration: 'Electric'
}
specs[`Jaguar|I-Pace|2019|EV400 HSE`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '90 kWh', range: 470,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 294, torque: 696, weight: 2208, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 200, price: p(139900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// KIA NIRO — 2019: EV, PHEV Sport
// ─────────────────────────────────────────────────────────────
specs[`Kia|Niro|2019|EV`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64 kWh', range: 455,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 395, weight: 1737, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.8, topSpeed: 167, price: p(65990), aspiration: 'Electric'
}
specs[`Kia|Niro|2019|PHEV Sport`] = {
  engine: '1.6L I4 GDI Hybrid PHEV', fuelType: 'PHEV', displacement: 1580,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
  power: 104, torque: 265, weight: 1545, seats: 5,
  fc: 1.3, fh: null, fx: null,
  acceleration: 9.8, topSpeed: 162, price: p(45990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI HURACAN — 2019: Evo, Evo Spyder, STO, Tecnica
// ─────────────────────────────────────────────────────────────
specs[`Lamborghini|Huracan|2019|Evo`] = {
  engine: '5.2L V10 NA', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 470, torque: 560, weight: 1422, seats: 2,
  fc: 14.5, fh: 11.0, fx: 19.5,
  acceleration: 2.9, topSpeed: 325, price: p(499000), aspiration: 'NA'
}
specs[`Lamborghini|Huracan|2019|Evo Spyder`] = {
  engine: '5.2L V10 NA', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 470, torque: 560, weight: 1509, seats: 2,
  fc: 14.5, fh: 11.0, fx: 19.5,
  acceleration: 3.1, topSpeed: 324, price: p(559000), aspiration: 'NA'
}
specs[`Lamborghini|Huracan|2019|STO`] = {
  engine: '5.2L V10 NA', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 470, torque: 565, weight: 1339, seats: 2,
  fc: 14.3, fh: 10.9, fx: 19.2,
  acceleration: 3.0, topSpeed: 310, price: p(599000), aspiration: 'NA'
}
specs[`Lamborghini|Huracan|2019|Tecnica`] = {
  engine: '5.2L V10 NA', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 470, torque: 560, weight: 1379, seats: 2,
  fc: 14.0, fh: 10.7, fx: 18.8,
  acceleration: 3.2, topSpeed: 325, price: p(549000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER EVOQUE — 2019: S, SE, R-Dynamic (2nd gen)
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Range Rover Evoque|2019|S`] = {
  engine: '2.0L I4 Turbo Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 184, torque: 365, weight: 1870, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.2,
  acceleration: 8.0, topSpeed: 210, price: p(59900), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover Evoque|2019|SE`] = {
  engine: '2.0L I4 Turbo Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 184, torque: 365, weight: 1880, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.2,
  acceleration: 8.0, topSpeed: 210, price: p(69900), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover Evoque|2019|R-Dynamic`] = {
  engine: '2.0L I4 Turbo Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 221, torque: 400, weight: 1890, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.9,
  acceleration: 7.3, topSpeed: 217, price: p(79900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS — 2019: GS 300, IS 300, IS 300 F Sport
// ─────────────────────────────────────────────────────────────
specs[`Lexus|GS|2019|GS 300`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1715, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 7.5, topSpeed: 230, price: p(75990), aspiration: 'Turbo'
}
specs[`Lexus|IS|2019|IS 300`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1610, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 7.5, topSpeed: 230, price: p(63990), aspiration: 'Turbo'
}
specs[`Lexus|IS|2019|IS 300 F Sport`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1625, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 7.4, topSpeed: 230, price: p(71990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MASERATI GHIBLI & LEVANTE — 2019: Trofeo (3.8L V8)
// ─────────────────────────────────────────────────────────────
specs[`Maserati|Ghibli|2019|Trofeo`] = {
  engine: '3.8L V8 Biturbo Ferrari', fuelType: 'petrol', displacement: 3799,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed ZF auto',
  power: 441, torque: 730, weight: 1965, seats: 5,
  fc: 14.0, fh: 10.6, fx: 19.2,
  acceleration: 4.3, topSpeed: 326, price: p(339900), aspiration: 'Turbo'
}
specs[`Maserati|Levante|2019|Trofeo`] = {
  engine: '3.8L V8 Biturbo Ferrari', fuelType: 'petrol', displacement: 3799,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed ZF auto',
  power: 441, torque: 730, weight: 2195, seats: 5,
  fc: 14.5, fh: 11.0, fx: 19.8,
  acceleration: 4.3, topSpeed: 304, price: p(379900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement197.json', JSON.stringify(out, null, 2))
console.log(`supplement197.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
