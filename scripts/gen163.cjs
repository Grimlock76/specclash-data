'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// OMODA 5 2023-2026 (AU) — Chery's global sub-brand
// 1.5L I4 TGDI, FWD, 7-speed wet DCT
// Style (entry) and Sport (mid-high)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2023, { sty: 31990, spt: 35990 }],
  [2024, { sty: 33490, spt: 37490 }],
  [2025, { sty: 34990, spt: 38990 }],
  [2026, { sty: 36490, spt: 40490 }],
]) {
  specs[`Omoda|5|${year}|Style`] = {
    engine: '1.5L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1456,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 113, torque: 230, weight: 1415, seats: 5,
    fc: 7.8, fh: 6.2, fx: 10.5,
    acceleration: 9.5, topSpeed: 190, price: p(prices.sty), aspiration: 'Turbo'
  }
  specs[`Omoda|5|${year}|Sport`] = {
    engine: '1.5L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1456,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 113, torque: 230, weight: 1430, seats: 5,
    fc: 7.8, fh: 6.2, fx: 10.5,
    acceleration: 9.5, topSpeed: 190, price: p(prices.spt), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// OMODA E5 2024-2026 (AU) — electric compact SUV
// Single motor, FWD, 61.1kWh
// ─────────────────────────────────────────────────────────────
for (const [year, price] of [
  [2024, 44990],
  [2025, 46490],
  [2026, 47990],
]) {
  specs[`Omoda|E5|${year}|E5`] = {
    engine: 'Single Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'FWD', transmission: '1-speed',
    power: 150, torque: 340, weight: 1630, seats: 5,
    battery: 61, range: 430,
    acceleration: 7.5, topSpeed: 175, price: p(price), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// JAECOO 7 2024-2026 (AU) — Chery's premium SUV sub-brand
// 1.6L I4 TGDI Turbo, AWD, 7-speed DCT
// Active (entry) and Lux (top)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { act: 38990, lux: 43990 }],
  [2025, { act: 40490, lux: 45490 }],
  [2026, { act: 41990, lux: 46990 }],
]) {
  specs[`Jaecoo|7|${year}|Active`] = {
    engine: '1.6L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1588,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
    power: 145, torque: 290, weight: 1708, seats: 5,
    fc: 8.8, fh: 7.0, fx: 11.5,
    acceleration: 9.5, topSpeed: 195, price: p(prices.act), aspiration: 'Turbo'
  }
  specs[`Jaecoo|7|${year}|Lux`] = {
    engine: '1.6L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1588,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
    power: 145, torque: 290, weight: 1718, seats: 5,
    fc: 8.8, fh: 7.0, fx: 11.5,
    acceleration: 9.5, topSpeed: 195, price: p(prices.lux), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// CHANGAN CS55 PLUS 2024-2026 (AU)
// 1.5L I4 TGDI Blue Core engine, FWD, 7-speed DCT
// S (entry) and Pro (top)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { s: 33990, pro: 38990 }],
  [2025, { s: 35490, pro: 40490 }],
  [2026, { s: 36990, pro: 41990 }],
]) {
  specs[`Changan|CS55 Plus|${year}|S`] = {
    engine: '1.5L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1459,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 120, torque: 255, weight: 1590, seats: 5,
    fc: 7.5, fh: 6.0, fx: 9.8,
    acceleration: 10.0, topSpeed: 190, price: p(prices.s), aspiration: 'Turbo'
  }
  specs[`Changan|CS55 Plus|${year}|Pro`] = {
    engine: '1.5L I4 TGDI Turbo', fuelType: 'petrol', displacement: 1459,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 120, torque: 255, weight: 1605, seats: 5,
    fc: 7.5, fh: 6.0, fx: 9.8,
    acceleration: 10.0, topSpeed: 190, price: p(prices.pro), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement163.json', JSON.stringify(out, null, 2))
console.log(`supplement163.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
