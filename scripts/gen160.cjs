'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// SKODA KAMIQ 2021-2023 — compact urban SUV (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2021, { amb: 29990, sty: 34990 }],
  [2022, { amb: 31490, sty: 36490 }],
  [2023, { amb: 32990, sty: 37990 }],
]) {
  specs[`Skoda|Kamiq|${year}|Ambition`] = {
    engine: '1.0L I3 TSI Turbo', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
    power: 85, torque: 175, weight: 1335, seats: 5,
    fc: 5.5, fh: 4.2, fx: 7.6,
    acceleration: 11.5, topSpeed: 196, price: p(prices.amb), aspiration: 'Turbo'
  }
  specs[`Skoda|Kamiq|${year}|Style`] = {
    engine: '1.5L I4 TSI Turbo', fuelType: 'petrol', displacement: 1498,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
    power: 110, torque: 250, weight: 1365, seats: 5,
    fc: 5.8, fh: 4.5, fx: 8.1,
    acceleration: 8.9, topSpeed: 213, price: p(prices.sty), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 3008 2nd GEN 2024-2026 — petrol compact SUV (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { act: 43490, all: 48490, gt: 54490 }],
  [2025, { act: 45490, all: 50490, gt: 56490 }],
  [2026, { act: 47490, all: 52490, gt: 58490 }],
]) {
  specs[`Peugeot|3008|${year}|Active`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 96, torque: 230, weight: 1425, seats: 5,
    fc: 6.2, fh: 4.8, fx: 8.5,
    acceleration: 9.5, topSpeed: 210, price: p(prices.act), aspiration: 'Turbo'
  }
  specs[`Peugeot|3008|${year}|Allure`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 96, torque: 230, weight: 1435, seats: 5,
    fc: 6.2, fh: 4.8, fx: 8.6,
    acceleration: 9.5, topSpeed: 210, price: p(prices.all), aspiration: 'Turbo'
  }
  specs[`Peugeot|3008|${year}|GT`] = {
    engine: '1.6L I4 PHEV', fuelType: 'hybrid', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 133, torque: 320, weight: 1710, seats: 5,
    range: 62, fc: 1.4, fh: 1.1, fx: 1.9,
    acceleration: 7.5, topSpeed: 225, price: p(prices.gt), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 5008 3rd GEN 2025-2026 — petrol large SUV / 7-seater (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2025, { act: 48990, all: 53990, gt: 59990 }],
  [2026, { act: 50990, all: 55990, gt: 61990 }],
]) {
  specs[`Peugeot|5008|${year}|Active`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 96, torque: 230, weight: 1545, seats: 7,
    fc: 6.5, fh: 5.0, fx: 8.9,
    acceleration: 10.2, topSpeed: 208, price: p(prices.act), aspiration: 'Turbo'
  }
  specs[`Peugeot|5008|${year}|Allure`] = {
    engine: '1.2L I3 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
    cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 96, torque: 230, weight: 1555, seats: 7,
    fc: 6.5, fh: 5.0, fx: 8.9,
    acceleration: 10.2, topSpeed: 208, price: p(prices.all), aspiration: 'Turbo'
  }
  specs[`Peugeot|5008|${year}|GT`] = {
    engine: '1.6L I4 PHEV', fuelType: 'hybrid', displacement: 1598,
    cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
    power: 133, torque: 320, weight: 1830, seats: 7,
    range: 60, fc: 1.6, fh: 1.2, fx: 2.0,
    acceleration: 7.9, topSpeed: 220, price: p(prices.gt), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement160.json', JSON.stringify(out, null, 2))
console.log(`supplement160.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
