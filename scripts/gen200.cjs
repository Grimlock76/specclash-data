'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HONDA CIVIC — 2019: Type R FK8 Limited Edition
// ─────────────────────────────────────────────────────────────
specs[`Honda|Civic|2019|Type R FK8 Limited Edition`] = {
  engine: '2.0L I4 VTEC Turbo K20C1', fuelType: 'petrol', displacement: 1996,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 228, torque: 400, weight: 1385, seats: 5,
  fc: 10.5, fh: 8.1, fx: 14.0,
  acceleration: 5.7, topSpeed: 272, price: p(64990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA KAROQ — 2019: 110 TSI Ambition, 110 TSI Style
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Karoq|2019|110 TSI Ambition`] = {
  engine: '1.5L I4 Turbo TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1425, seats: 5,
  fc: 6.4, fh: 5.0, fx: 8.4,
  acceleration: 9.2, topSpeed: 204, price: p(32990), aspiration: 'Turbo'
}
specs[`Skoda|Karoq|2019|110 TSI Style`] = {
  engine: '1.5L I4 Turbo TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1430, seats: 5,
  fc: 6.4, fh: 5.0, fx: 8.4,
  acceleration: 9.2, topSpeed: 204, price: p(38990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SSANGYONG KORANDO — 2019: ELX, Ultimate
// ─────────────────────────────────────────────────────────────
specs[`SsangYong|Korando|2019|ELX`] = {
  engine: '1.5L I4 Turbo GDI', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 120, torque: 280, weight: 1525, seats: 5,
  fc: 7.8, fh: 6.1, fx: 10.3,
  acceleration: 10.2, topSpeed: 180, price: p(28990), aspiration: 'Turbo'
}
specs[`SsangYong|Korando|2019|Ultimate`] = {
  engine: '1.5L I4 Turbo GDI', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 120, torque: 280, weight: 1540, seats: 5,
  fc: 7.8, fh: 6.1, fx: 10.3,
  acceleration: 10.2, topSpeed: 180, price: p(34990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUZUKI JIMNY & VITARA — 2019
// ─────────────────────────────────────────────────────────────
specs[`Suzuki|Jimny|2019|Lite`] = {
  engine: '1.5L I4 NA K15B', fuelType: 'petrol', displacement: 1462,
  cylinders: 4, drivetrain: 'AWD', transmission: '5-speed manual',
  power: 75, torque: 130, weight: 1075, seats: 4,
  fc: 6.4, fh: 5.4, fx: 8.1,
  acceleration: 14.0, topSpeed: 145, price: p(21990), aspiration: 'NA'
}
specs[`Suzuki|Vitara|2019|GL`] = {
  engine: '1.6L I4 NA M16A', fuelType: 'petrol', displacement: 1586,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 88, torque: 156, weight: 1120, seats: 5,
  fc: 6.2, fh: 5.0, fx: 8.1,
  acceleration: 10.5, topSpeed: 175, price: p(22990), aspiration: 'NA'
}
specs[`Suzuki|Vitara|2019|GLX`] = {
  engine: '1.6L I4 NA M16A', fuelType: 'petrol', displacement: 1586,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 88, torque: 156, weight: 1125, seats: 5,
  fc: 6.2, fh: 5.0, fx: 8.1,
  acceleration: 10.5, topSpeed: 175, price: p(26990), aspiration: 'NA'
}
specs[`Suzuki|Vitara|2019|GLX Turbo`] = {
  engine: '1.4L I4 Turbo K14C', fuelType: 'petrol', displacement: 1373,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 103, torque: 220, weight: 1190, seats: 5,
  fc: 7.1, fh: 5.5, fx: 9.4,
  acceleration: 9.7, topSpeed: 185, price: p(31490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL 3 — 2019: Long Range AWD, Standard Range Plus
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model 3|2019|Long Range AWD`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '82 kWh', range: 568,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 283, torque: 493, weight: 1847, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.2, topSpeed: 225, price: p(76990), aspiration: 'Electric'
}
specs[`Tesla|Model 3|2019|Standard Range Plus`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '54 kWh', range: 448,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 175, torque: 340, weight: 1611, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 225, price: p(59990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA 86, COROLLA & RAV4 — 2019
// ─────────────────────────────────────────────────────────────
specs[`Toyota|86|2019|GR Sport`] = {
  engine: '2.0L F4 NA 4U-GSE', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 152, torque: 212, weight: 1265, seats: 4,
  fc: 8.0, fh: 6.5, fx: 10.5,
  acceleration: 7.6, topSpeed: 226, price: p(41990), aspiration: 'NA'
}
specs[`Toyota|Corolla|2019|Ascent Sport Hybrid`] = {
  engine: '1.8L I4 Hybrid 2ZR-FXE', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 90, torque: 163, weight: 1445, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.2,
  acceleration: 11.2, topSpeed: 180, price: p(31990), aspiration: 'NA'
}
specs[`Toyota|Corolla|2019|ZR Hybrid`] = {
  engine: '1.8L I4 Hybrid 2ZR-FXE', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT eCVT',
  power: 90, torque: 163, weight: 1450, seats: 5,
  fc: 4.2, fh: 3.6, fx: 5.2,
  acceleration: 11.2, topSpeed: 180, price: p(37990), aspiration: 'NA'
}
specs[`Toyota|RAV4|2019|GX Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT eCVT',
  power: 163, torque: 221, weight: 1895, seats: 5,
  fc: 4.7, fh: 4.0, fx: 5.8,
  acceleration: 8.4, topSpeed: 180, price: p(38990), aspiration: 'NA'
}
specs[`Toyota|RAV4|2019|GXL Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT eCVT',
  power: 163, torque: 221, weight: 1900, seats: 5,
  fc: 4.7, fh: 4.0, fx: 5.8,
  acceleration: 8.4, topSpeed: 180, price: p(42990), aspiration: 'NA'
}
specs[`Toyota|RAV4|2019|Edge Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT eCVT',
  power: 163, torque: 221, weight: 1905, seats: 5,
  fc: 4.7, fh: 4.0, fx: 5.8,
  acceleration: 8.4, topSpeed: 180, price: p(48990), aspiration: 'NA'
}
specs[`Toyota|RAV4|2019|Cruiser Hybrid`] = {
  engine: '2.5L I4 Hybrid A25A-FXS', fuelType: 'petrol', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT eCVT',
  power: 163, torque: 221, weight: 1910, seats: 5,
  fc: 4.7, fh: 4.0, fx: 5.8,
  acceleration: 8.4, topSpeed: 180, price: p(55990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VOLVO S60 & V60 — 2019: T6 AWD
// ─────────────────────────────────────────────────────────────
specs[`Volvo|S60|2019|T6`] = {
  engine: '2.0L I4 Turbo+SC B4204T19', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 235, torque: 400, weight: 1810, seats: 5,
  fc: 8.4, fh: 6.5, fx: 11.2,
  acceleration: 5.8, topSpeed: 250, price: p(79990), aspiration: 'Turbo'
}
specs[`Volvo|V60|2019|T6`] = {
  engine: '2.0L I4 Turbo+SC B4204T19', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 235, torque: 400, weight: 1890, seats: 5,
  fc: 8.5, fh: 6.6, fx: 11.3,
  acceleration: 6.0, topSpeed: 250, price: p(82990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement200.json', JSON.stringify(out, null, 2))
console.log(`supplement200.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
