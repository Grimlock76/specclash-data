'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PEUGEOT 208 2024-2026 — extension of B9 gen (AU)
// Same 4 trims as 2023: Active, Allure, GT, e-208
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { act: 31990, all: 36990, gt: 42990, ev: 51990 }],
  [2025, { act: 33490, all: 38490, gt: 44490, ev: 53490 }],
  [2026, { act: 34990, all: 39990, gt: 45990, ev: 54990 }],
]) {
  specs[`Peugeot|208|${year}|Active`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 74, torque: 205, weight: 1240, seats: 5,
    fc: 5.6, fh: 4.2, fx: 7.9,
    acceleration: 11.8, topSpeed: 186, price: p(prices.act), aspiration: 'Turbo'
  }
  specs[`Peugeot|208|${year}|Allure`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 74, torque: 205, weight: 1250, seats: 5,
    fc: 5.6, fh: 4.2, fx: 7.9,
    acceleration: 11.8, topSpeed: 186, price: p(prices.all), aspiration: 'Turbo'
  }
  specs[`Peugeot|208|${year}|GT`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 96, torque: 230, weight: 1260, seats: 5,
    fc: 5.9, fh: 4.5, fx: 8.3,
    acceleration: 9.0, topSpeed: 200, price: p(prices.gt), aspiration: 'Turbo'
  }
  specs[`Peugeot|208|${year}|e-208`] = {
    engine: 'Single Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'FWD', transmission: '1-speed',
    power: 115, torque: 260, weight: 1530, seats: 5,
    battery: 50, range: 362,
    acceleration: 8.1, topSpeed: 150, price: p(prices.ev), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 508 2024-2026 — extension (sedan + SW wagon) (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { act: 58990, all: 63990, gt: 71990, sw: 66990 }],
  [2025, { act: 60990, all: 65990, gt: 73990, sw: 68990 }],
  [2026, { act: 62990, all: 67990, gt: 75990, sw: 70990 }],
]) {
  specs[`Peugeot|508|${year}|Active`] = {
    engine: '1.6L I4 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 132, torque: 250, weight: 1450, seats: 5,
    fc: 7.1, fh: 5.4, fx: 10.0,
    acceleration: 8.8, topSpeed: 228, price: p(prices.act), aspiration: 'Turbo'
  }
  specs[`Peugeot|508|${year}|Allure`] = {
    engine: '1.6L I4 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 132, torque: 250, weight: 1460, seats: 5,
    fc: 7.1, fh: 5.4, fx: 10.0,
    acceleration: 8.8, topSpeed: 228, price: p(prices.all), aspiration: 'Turbo'
  }
  specs[`Peugeot|508|${year}|GT`] = {
    engine: '1.6L I4 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 165, torque: 300, weight: 1470, seats: 5,
    fc: 7.3, fh: 5.6, fx: 10.3,
    acceleration: 7.3, topSpeed: 240, price: p(prices.gt), aspiration: 'Turbo'
  }
  specs[`Peugeot|508|${year}|SW`] = {
    engine: '1.6L I4 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 132, torque: 250, weight: 1485, seats: 5,
    fc: 7.2, fh: 5.5, fx: 10.1,
    acceleration: 9.0, topSpeed: 225, price: p(prices.sw), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement162.json', JSON.stringify(out, null, 2))
console.log(`supplement162.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
