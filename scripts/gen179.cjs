'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2022 new trims
// Carrera T, GT3 RS, GT3 Touring, Sport Classic, Turbo S
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2022|Carrera T`] = {
  engine: '3.0L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed manual',
  power: 283, torque: 450, weight: 1415, seats: 2,
  fc: 10.1, fh: 7.2, fx: 14.8,
  acceleration: 4.5, topSpeed: 291, price: p(279500), aspiration: 'Turbo'
}
specs[`Porsche|911|2022|GT3 RS`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 386, torque: 465, weight: 1450, seats: 2,
  fc: 13.2, fh: 9.8, fx: 18.5,
  acceleration: 3.2, topSpeed: 296, price: p(545000), aspiration: 'NA'
}
specs[`Porsche|911|2022|GT3 Touring`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 375, torque: 470, weight: 1418, seats: 2,
  fc: 13.0, fh: 9.6, fx: 18.0,
  acceleration: 3.4, topSpeed: 318, price: p(455000), aspiration: 'NA'
}
specs[`Porsche|911|2022|Sport Classic`] = {
  engine: '3.7L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed manual',
  power: 392, torque: 610, weight: 1575, seats: 2,
  fc: 12.8, fh: 9.5, fx: 18.0,
  acceleration: 3.7, topSpeed: 315, price: p(700000), aspiration: 'Turbo'
}
specs[`Porsche|911|2022|Turbo S`] = {
  engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 478, torque: 800, weight: 1640, seats: 2,
  fc: 12.4, fh: 9.5, fx: 17.4,
  acceleration: 2.7, topSpeed: 330, price: p(467000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST — 2022 new-gen UB trims
// ─────────────────────────────────────────────────────────────
specs[`Ford|Everest|2022|UB Ambiente`] = {
  engine: '2.0L I4 Bi-Turbo Diesel', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 154, torque: 500, weight: 2105, seats: 7,
  fc: 8.5, fh: 6.8, fx: 11.4,
  acceleration: 11.0, topSpeed: 185, price: p(49990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2022|UB Trend`] = {
  engine: '2.0L I4 Bi-Turbo Diesel', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 154, torque: 500, weight: 2130, seats: 7,
  fc: 8.5, fh: 6.8, fx: 11.4,
  acceleration: 10.5, topSpeed: 185, price: p(55990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2022|UB Sport`] = {
  engine: '2.0L I4 Bi-Turbo Diesel', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 154, torque: 500, weight: 2150, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 10.0, topSpeed: 185, price: p(65990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2022|UB Titanium`] = {
  engine: '2.0L I4 Bi-Turbo Diesel', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 154, torque: 500, weight: 2160, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 10.0, topSpeed: 185, price: p(71990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// KIA SPORTAGE — 2022 NQ5 Hybrid/PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Kia|Sportage|2022|S Hybrid`] = {
  engine: '1.6L I4 T-GDi Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed DCT',
  power: 134, torque: 265, weight: 1740, seats: 5,
  fc: 6.4, fh: 5.3, fx: 8.3,
  acceleration: 9.0, topSpeed: 185, price: p(38990), aspiration: 'Turbo'
}
specs[`Kia|Sportage|2022|SX Hybrid`] = {
  engine: '1.6L I4 T-GDi Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed DCT',
  power: 134, torque: 265, weight: 1745, seats: 5,
  fc: 6.4, fh: 5.3, fx: 8.3,
  acceleration: 9.0, topSpeed: 185, price: p(44990), aspiration: 'Turbo'
}
specs[`Kia|Sportage|2022|GT-Line Hybrid`] = {
  engine: '1.6L I4 T-GDi Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed DCT',
  power: 134, torque: 265, weight: 1750, seats: 5,
  fc: 6.4, fh: 5.3, fx: 8.3,
  acceleration: 9.0, topSpeed: 185, price: p(48990), aspiration: 'Turbo'
}
specs[`Kia|Sportage|2022|GT-Line PHEV`] = {
  engine: '1.6L I4 T-GDi PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed AT',
  power: 195, torque: 350, weight: 1890, seats: 5,
  fc: 1.6, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 175, price: p(58990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU WRX — 2022 VB new-gen trims
// ─────────────────────────────────────────────────────────────
specs[`Subaru|WRX|2022|WRX`] = {
  engine: '2.4L H4 Turbo', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 202, torque: 350, weight: 1480, seats: 5,
  fc: 9.2, fh: 7.1, fx: 12.5,
  acceleration: 6.0, topSpeed: 240, price: p(46990), aspiration: 'Turbo'
}
specs[`Subaru|WRX|2022|WRX Premium`] = {
  engine: '2.4L H4 Turbo', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 202, torque: 350, weight: 1490, seats: 5,
  fc: 9.2, fh: 7.1, fx: 12.5,
  acceleration: 6.0, topSpeed: 240, price: p(51990), aspiration: 'Turbo'
}
specs[`Subaru|WRX|2022|WRX SportTech`] = {
  engine: '2.4L H4 Turbo', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 202, torque: 350, weight: 1505, seats: 5,
  fc: 9.2, fh: 7.1, fx: 12.5,
  acceleration: 6.0, topSpeed: 240, price: p(59990), aspiration: 'Turbo'
}
specs[`Subaru|WRX|2022|WRX tS`] = {
  engine: '2.4L H4 Turbo', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 202, torque: 350, weight: 1490, seats: 5,
  fc: 9.2, fh: 7.1, fx: 12.5,
  acceleration: 5.9, topSpeed: 240, price: p(65990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 718 — 2022 GTS 4.0 & Cayman GT4 RS
// ─────────────────────────────────────────────────────────────
specs[`Porsche|718|2022|718 Cayman GTS 4.0`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 294, torque: 420, weight: 1340, seats: 2,
  fc: 11.2, fh: 8.4, fx: 15.3,
  acceleration: 4.0, topSpeed: 293, price: p(218000), aspiration: 'NA'
}
specs[`Porsche|718|2022|Cayman GT4 RS`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 368, torque: 450, weight: 1415, seats: 2,
  fc: 12.5, fh: 9.3, fx: 17.4,
  acceleration: 3.4, topSpeed: 315, price: p(383000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement179.json', JSON.stringify(out, null, 2))
console.log(`supplement179.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
