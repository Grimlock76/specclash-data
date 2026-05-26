'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PEUGEOT 5008 — 2024 gap (new gen; no 2024 in DB)
// Active/Allure: 1.2L PureTech; GT: 1.6L PHEV — ~$1-2k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|5008|2024|Active`] = {
  engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1545, seats: 7,
  fc: 6.5, fh: 5.0, fx: 8.9,
  acceleration: 10.2, topSpeed: 208, price: p(46990), aspiration: 'Turbo'
}
specs[`Peugeot|5008|2024|Allure`] = {
  engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1555, seats: 7,
  fc: 6.5, fh: 5.0, fx: 8.9,
  acceleration: 10.2, topSpeed: 208, price: p(51990), aspiration: 'Turbo'
}
specs[`Peugeot|5008|2024|GT`] = {
  engine: '1.6L I4 PHEV', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 133, torque: 320, weight: 1830, seats: 7,
  range: 60, fc: 1.6, fh: 1.2, fx: 2.0,
  acceleration: 7.9, topSpeed: 220, price: p(57990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 308 — 2024 trim gaps: Allure, GT
// Petrol trims missing from 2024 data (was only e-308); ~$2k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|308|2024|Allure`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1250, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.0, topSpeed: 188, price: p(39990), aspiration: 'Turbo'
}
specs[`Peugeot|308|2024|GT`] = {
  engine: '1.6 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 165, torque: 260, weight: 1290, seats: 5,
  fc: 7.2, fh: 5.6, fx: 10.2,
  acceleration: 7.8, topSpeed: 217, price: p(49990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 2008 — 2024 trim gaps: Allure, GT
// Petrol trims missing from 2024 data (was only e-2008); ~$2k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|2008|2024|Allure`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1230, seats: 5,
  fc: 6.1, fh: 4.7, fx: 8.7,
  acceleration: 11.5, topSpeed: 187, price: p(34990), aspiration: 'Turbo'
}
specs[`Peugeot|2008|2024|GT`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1245, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.2, topSpeed: 190, price: p(39990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN AMAROK — 2024 trim gap: TDI580 Style
// ~$2k cheaper than 2025 ($72,190)
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Amarok|2024|TDI580 Style`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 174, torque: 500, weight: 2296, seats: 5,
  fc: 9.8, fh: 7.6, fx: 13.6,
  acceleration: 8.0, topSpeed: 188, price: p(70190), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BENTLEY BENTAYGA — 2024 trim gaps: S, EWB
// S: 404 kW V8; EWB: long wheelbase; ~$15k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Bentley|Bentayga|2024|S`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 404, torque: 770, weight: 2440, seats: 5,
  fc: 14.3, fh: 10.8, fx: 20.1,
  acceleration: 4.4, topSpeed: 290, price: p(384990), aspiration: 'Turbo'
}
specs[`Bentley|Bentayga|2024|EWB`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 404, torque: 770, weight: 2550, seats: 5,
  fc: 14.6, fh: 11.0, fx: 20.5,
  acceleration: 4.5, topSpeed: 290, price: p(484990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA KODIAQ — 2024 trim gaps: Sportline, Style (new gen naming)
// ~$2k cheaper than 2025
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Kodiaq|2024|Sportline`] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1815, seats: 7,
  fc: 8.5, fh: 6.5, fx: 12.0,
  acceleration: 8.0, topSpeed: 210, price: p(54990), aspiration: 'Turbo'
}
specs[`Skoda|Kodiaq|2024|Style`] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1800, seats: 7,
  fc: 8.4, fh: 6.5, fx: 11.8,
  acceleration: 8.2, topSpeed: 210, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO EX90 — 2024 gap (launched AU 2024; no 2024 in DB)
// Twin Motor 300 kW / Twin Motor Performance 380 kW; 111 kWh
// ─────────────────────────────────────────────────────────────
specs[`Volvo|EX90|2024|Twin Motor`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '111 kWh', range: 600,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 300, torque: 770, weight: 2735, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 5.9, topSpeed: 180, price: p(117990), aspiration: 'Electric'
}
specs[`Volvo|EX90|2024|Twin Motor Performance`] = {
  engine: 'Dual Motor Electric Performance', fuelType: 'electric', battery: '111 kWh', range: 580,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 380, torque: 910, weight: 2790, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 180, price: p(137990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement172.json', JSON.stringify(out, null, 2))
console.log(`supplement172.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
