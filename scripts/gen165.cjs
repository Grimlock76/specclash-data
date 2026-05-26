'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// VW POLO 70TSI Life + 85TSI Style (2023-2026)
// MY2023 refresh renamed Trendline→Life and Comfortline→Style (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2023, { life: 25990, sty: 29990 }],
  [2024, { life: 27490, sty: 31490 }],
  [2025, { life: 28990, sty: 32990 }],
  [2026, { life: 30490, sty: 34490 }],
]) {
  specs[`Volkswagen|Polo|${year}|70TSI Life`] = {
    engine: '1.0L I3 TSI Turbo', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
    power: 70, torque: 160, weight: 1155, seats: 5,
    fc: 5.7, fh: 4.2, fx: 7.9,
    acceleration: 11.5, topSpeed: 185, price: p(prices.life), aspiration: 'Turbo'
  }
  specs[`Volkswagen|Polo|${year}|85TSI Style`] = {
    engine: '1.0L I3 TSI Turbo', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
    power: 85, torque: 200, weight: 1165, seats: 5,
    fc: 5.9, fh: 4.4, fx: 8.2,
    acceleration: 9.9, topSpeed: 200, price: p(prices.sty), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// VW TIGUAN 110TSI Life + 132TSI Elegance (2024-2026)
// Mk3 gen (Rg1) new trim names replacing Comfortline/Highline (AU)
// Life: 1.5 eTSI MHEV FWD  |  Elegance: 2.0 TSI 4Motion AWD
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { life: 47990, ele: 57990 }],
  [2025, { life: 49490, ele: 59490 }],
  [2026, { life: 50990, ele: 60990 }],
]) {
  specs[`Volkswagen|Tiguan|${year}|110TSI Life`] = {
    engine: '1.5L I4 eTSI Turbo', fuelType: 'petrol', displacement: 1498,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
    power: 110, torque: 250, weight: 1545, seats: 5,
    fc: 7.0, fh: 5.4, fx: 9.5,
    acceleration: 9.9, topSpeed: 207, price: p(prices.life), aspiration: 'Turbo'
  }
  specs[`Volkswagen|Tiguan|${year}|132TSI Elegance`] = {
    engine: '2.0L I4 TSI Turbo', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
    power: 132, torque: 300, weight: 1705, seats: 5,
    fc: 8.2, fh: 6.4, fx: 10.9,
    acceleration: 7.8, topSpeed: 215, price: p(prices.ele), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// SKODA SUPERB iV PHEV (2024-2026)
// NMS2 gen PHEV added to AU lineup alongside Style/Sportline
// 1.5 TSI e-Hybrid, 110kW petrol + 85kW motor, FWD, 6AT
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2024, 66990],
  [2025, 68990],
  [2026, 70990],
]) {
  specs[`Skoda|Superb|${year}|iV`] = {
    engine: '1.5L I4 TSI Turbo + Electric', fuelType: 'hybrid', displacement: 1498,
    cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
    power: 150, torque: 250, weight: 1780, seats: 5,
    range: 100, fc: 1.2, fh: 0.6, fx: 1.6,
    acceleration: 7.5, topSpeed: 225, price: p(price), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// VW MULTIVAN T7 eHybrid (2022-2026)
// T7 launched in AU with TDI diesel and eHybrid PHEV variants
// 1.4 TSI + 85kW electric, FWD, 6AT, 50km EV range
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2022, 89990],
  [2023, 91990],
  [2024, 93990],
  [2025, 95990],
  [2026, 97990],
]) {
  specs[`Volkswagen|Multivan|${year}|eHybrid`] = {
    engine: '1.4L I4 TSI Turbo + Electric', fuelType: 'hybrid', displacement: 1395,
    cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
    power: 160, torque: 400, weight: 2415, seats: 7,
    range: 50, fc: 2.0, fh: 0.8, fx: 2.6,
    acceleration: 9.0, topSpeed: 215, price: p(price), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement165.json', JSON.stringify(out, null, 2))
console.log(`supplement165.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
