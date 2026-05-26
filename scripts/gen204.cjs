'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TOYOTA CAMRY, COROLLA & RAV4 — 2018 (XV70 Camry new gen)
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Camry|2018|Ascent`] = {
  engine: '2.5L I4 NA A25A-FKS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 133, torque: 231, weight: 1505, seats: 5,
  fc: 7.9, fh: 6.2, fx: 10.7,
  acceleration: 9.0, topSpeed: 200, price: p(27990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|Ascent Sport`] = {
  engine: '2.5L I4 NA A25A-FKS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 133, torque: 231, weight: 1510, seats: 5,
  fc: 7.9, fh: 6.2, fx: 10.7,
  acceleration: 9.0, topSpeed: 200, price: p(30990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|SL`] = {
  engine: '3.5L V6 NA 2GR-FKS', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 218, torque: 362, weight: 1575, seats: 5,
  fc: 9.4, fh: 7.3, fx: 12.7,
  acceleration: 7.0, topSpeed: 220, price: p(47990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|Ascent Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 158, torque: 221, weight: 1655, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.0,
  acceleration: 8.3, topSpeed: 180, price: p(30990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|Ascent Sport Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 158, torque: 221, weight: 1660, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.0,
  acceleration: 8.3, topSpeed: 180, price: p(33990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|SX Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 158, torque: 221, weight: 1665, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.0,
  acceleration: 8.3, topSpeed: 180, price: p(36990), aspiration: 'NA'
}
specs[`Toyota|Camry|2018|SXL Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 158, torque: 221, weight: 1670, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.0,
  acceleration: 8.3, topSpeed: 180, price: p(44990), aspiration: 'NA'
}
specs[`Toyota|Corolla|2018|Ascent Sport`] = {
  engine: '1.8L I4 NA 2ZR-FAE', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 103, torque: 175, weight: 1290, seats: 5,
  fc: 7.0, fh: 5.5, fx: 9.3,
  acceleration: 9.8, topSpeed: 200, price: p(25990), aspiration: 'NA'
}
specs[`Toyota|RAV4|2018|Edge`] = {
  engine: '2.5L I4 NA 2AR-FE', fuelType: 'petrol', displacement: 2494,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 133, torque: 226, weight: 1680, seats: 5,
  fc: 8.4, fh: 6.7, fx: 11.1,
  acceleration: 9.8, topSpeed: 200, price: p(44990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN TIGUAN ALLSPACE & TOUAREG — 2018
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Tiguan|2018|Allspace 132TSI`] = {
  engine: '1.4L I4 Turbo TSI CZEA', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1710, seats: 7,
  fc: 6.7, fh: 5.3, fx: 8.9,
  acceleration: 9.0, topSpeed: 210, price: p(42990), aspiration: 'Turbo'
}
specs[`Volkswagen|Tiguan|2018|Allspace 162TSI`] = {
  engine: '2.0L I4 Turbo TSI DNFA', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 162, torque: 350, weight: 1860, seats: 7,
  fc: 8.3, fh: 6.5, fx: 11.1,
  acceleration: 7.2, topSpeed: 220, price: p(56990), aspiration: 'Turbo'
}
specs[`Volkswagen|Touareg|2018|170TDI`] = {
  engine: '3.0L V6 Turbo Diesel DCMA', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto Tiptronic',
  power: 170, torque: 500, weight: 1995, seats: 5,
  fc: 7.1, fh: 5.6, fx: 9.4,
  acceleration: 7.2, topSpeed: 234, price: p(89990), aspiration: 'Turbo'
}
specs[`Volkswagen|Touareg|2018|210TDI`] = {
  engine: '3.0L V6 Turbo Diesel DCMB', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto Tiptronic',
  power: 210, torque: 600, weight: 2035, seats: 5,
  fc: 7.4, fh: 5.9, fx: 9.8,
  acceleration: 6.1, topSpeed: 245, price: p(109990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO S60 & XC60 — 2018
// ─────────────────────────────────────────────────────────────
specs[`Volvo|S60|2018|T5 Momentum`] = {
  engine: '2.0L I4 Turbo B4204T11', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 187, torque: 350, weight: 1650, seats: 5,
  fc: 7.2, fh: 5.6, fx: 9.6,
  acceleration: 6.5, topSpeed: 250, price: p(59990), aspiration: 'Turbo'
}
specs[`Volvo|S60|2018|T5 R-Design`] = {
  engine: '2.0L I4 Turbo B4204T11', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 187, torque: 350, weight: 1660, seats: 5,
  fc: 7.2, fh: 5.6, fx: 9.6,
  acceleration: 6.5, topSpeed: 250, price: p(66990), aspiration: 'Turbo'
}
specs[`Volvo|S60|2018|T8 Recharge`] = {
  engine: '2.0L I4 Turbo+SC + Electric PHEV', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 292, torque: 640, weight: 2030, seats: 5,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 250, price: p(84990), aspiration: 'Turbo'
}
specs[`Volvo|XC60|2018|T8 Recharge`] = {
  engine: '2.0L I4 Turbo+SC + Electric PHEV', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 292, torque: 640, weight: 2140, seats: 5,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 210, price: p(89990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement204.json', JSON.stringify(out, null, 2))
console.log(`supplement204.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
