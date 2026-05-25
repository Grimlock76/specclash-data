'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — missing variants 2025-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [[2025, { t4: 173000, turbo: 292000, st: 161000 }], [2026, { t4: 178000, turbo: 301000, st: 166000 }]]) {
  specs[`Porsche|Taycan|${year}|Taycan 4`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 350, torque: 500, weight: 2180, seats: 5,
    battery: 93, range: 404,
    acceleration: 4.8, topSpeed: 230, price: p(prices.t4), aspiration: 'Electric'
  }
  specs[`Porsche|Taycan|${year}|Taycan Turbo`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 500, torque: 910, weight: 2235, seats: 5,
    battery: 93, range: 395,
    acceleration: 2.8, topSpeed: 260, price: p(prices.turbo), aspiration: 'Electric'
  }
  specs[`Porsche|Taycan|${year}|Sport Turismo`] = {
    engine: 'Single Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'RWD', transmission: '1-speed',
    power: 300, torque: 345, weight: 2195, seats: 5,
    battery: 93, range: 420,
    acceleration: 5.5, topSpeed: 230, price: p(prices.st), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 718 EV — 4S Cayman & Boxster 2025-2026 + extend 4 to 2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [[2025, { c4s: 186000, b4s: 196000 }], [2026, { c4s: 191000, b4s: 201000 }]]) {
  specs[`Porsche|718|${year}|718 Cayman 4S`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 430, torque: 690, weight: 1880, seats: 2,
    battery: 79, range: 244,
    acceleration: 3.5, topSpeed: 270, price: p(prices.c4s), aspiration: 'Electric'
  }
  specs[`Porsche|718|${year}|718 Boxster 4S`] = {
    engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
    cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
    power: 430, torque: 690, weight: 1910, seats: 2,
    battery: 79, range: 234,
    acceleration: 3.5, topSpeed: 270, price: p(prices.b4s), aspiration: 'Electric'
  }
}
// Extend existing Cayman 4 / Boxster 4 to 2026
specs['Porsche|718|2026|718 Cayman 4'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
  cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
  power: 320, torque: 560, weight: 1830, seats: 2,
  battery: 79, range: 285,
  acceleration: 4.5, topSpeed: 250, price: p(159000), aspiration: 'Electric'
}
specs['Porsche|718|2026|718 Boxster 4'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
  cylinders: 0, drivetrain: 'AWD', transmission: '1-speed',
  power: 320, torque: 560, weight: 1860, seats: 2,
  battery: 79, range: 275,
  acceleration: 4.6, topSpeed: 250, price: p(169000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// McLAREN ARTURA SPIDER 2024-2026 — V6 PHEV convertible (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2024, 439900], [2025, 459900], [2026, 479900]]) {
  specs[`McLaren|Artura|${year}|Spider`] = {
    engine: '3.0L V6 Twin-Turbo + Electric', fuelType: 'hybrid', displacement: 2993,
    cylinders: 6, drivetrain: 'RWD', transmission: '8-speed SSG',
    power: 500, torque: 720, weight: 1440, seats: 2,
    range: 30, fc: 9.8, fh: 7.4, fx: 13.8,
    acceleration: 3.0, topSpeed: 330, price: p(pr), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI URUS SE 2024-2026 — V8 PHEV SUV (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2024, 449990], [2025, 464990], [2026, 479990]]) {
  specs[`Lamborghini|Urus|${year}|SE`] = {
    engine: '4.0L V8 Twin-Turbo + Electric', fuelType: 'hybrid', displacement: 3996,
    cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 493, torque: 950, weight: 2355, seats: 5,
    range: 60, fc: 9.5, fh: 7.2, fx: 13.8,
    acceleration: 3.4, topSpeed: 312, price: p(pr), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI REVUELTO SPIDER 2025-2026 — V12 hybrid spider (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, pr] of [[2025, 1149000], [2026, 1199000]]) {
  specs[`Lamborghini|Revuelto|${year}|Spider`] = {
    engine: '6.5L V12 NA + 3 Electric Motors', fuelType: 'hybrid', displacement: 6498,
    cylinders: 12, drivetrain: 'AWD', transmission: '8-speed DCT',
    power: 710, torque: 850, weight: 1780, seats: 2,
    fc: 15.8, fh: 12.2, fx: 21.5,
    acceleration: 2.5, topSpeed: 350, price: p(pr), aspiration: 'NA'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement159.json', JSON.stringify(out, null, 2))
console.log(`supplement159.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
