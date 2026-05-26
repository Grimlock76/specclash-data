'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MASERATI GRANCABRIO (new gen A217, 2024-2026)
// Open-top sibling of the A290 GranTurismo; same Nettuno V6 / Folgore EV
// DB only has old gen (2010-2019); this adds the Modena platform gen
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { mod: 315990, tro: 405990, fol: 462990 }],
  [2025, { mod: 324990, tro: 415990, fol: 474990 }],
  [2026, { mod: 334990, tro: 425990, fol: 486990 }],
]) {
  specs[`Maserati|GranCabrio|${year}|Modena`] = {
    engine: '3.0L Nettuno V6 Twin-Turbo', fuelType: 'petrol', displacement: 2992,
    cylinders: 6, drivetrain: 'RWD', transmission: '8sp auto',
    power: 330, torque: 500, weight: 1990, seats: 4,
    fc: 12.5, fh: 9.5, fx: 16.0,
    acceleration: 4.3, topSpeed: 290, price: p(prices.mod), aspiration: 'Turbo'
  }
  specs[`Maserati|GranCabrio|${year}|Trofeo`] = {
    engine: '3.0L Nettuno V6 Twin-Turbo', fuelType: 'petrol', displacement: 2992,
    cylinders: 6, drivetrain: 'RWD', transmission: '8sp auto',
    power: 397, torque: 650, weight: 2025, seats: 4,
    fc: 12.5, fh: 9.5, fx: 16.0,
    acceleration: 3.8, topSpeed: 302, price: p(prices.tro), aspiration: 'Turbo'
  }
  specs[`Maserati|GranCabrio|${year}|Folgore`] = {
    engine: 'Electric Triple Motor', fuelType: 'electric', battery: '92 kWh', range: 430,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 560, torque: 820, weight: 2385, seats: 4,
    fc: null, fh: null, fx: null,
    acceleration: 3.6, topSpeed: 290, price: p(prices.fol), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// XPENG G6 (2024-2026) — new make entering AU market 2024
// Compact EV SUV; SEPA 2.0 platform; competes with Tesla Model Y
// Long Range RWD = 210 kW / 87.5 kWh / 570 km WLTP
// AWD Performance = 357 kW dual motor / 87.5 kWh / 520 km WLTP
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { rwd: 55990, awd: 64990 }],
  [2025, { rwd: 57490, awd: 66490 }],
  [2026, { rwd: 58990, awd: 67990 }],
]) {
  specs[`XPENG|G6|${year}|Long Range RWD`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '87.5 kWh', range: 570,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 210, torque: 440, weight: 2055, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 6.9, topSpeed: 200, price: p(prices.rwd), aspiration: 'Electric'
  }
  specs[`XPENG|G6|${year}|AWD Performance`] = {
    engine: 'Electric Dual Motor', fuelType: 'electric', battery: '87.5 kWh', range: 520,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 357, torque: 660, weight: 2190, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 3.9, topSpeed: 200, price: p(prices.awd), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// XPENG G9 (2024-2026)
// Mid-size EV SUV; 800V ultra-fast charging; competes with Tesla Model X
// Long Range RWD = 230 kW / 98 kWh / 560 km WLTP
// AWD Performance = 405 kW dual motor / 98 kWh / 520 km WLTP
// ─────────────────────────────────────────────────────────────
for (const [year, prices] of [
  [2024, { rwd: 69990, awd: 82990 }],
  [2025, { rwd: 71490, awd: 84490 }],
  [2026, { rwd: 72990, awd: 85990 }],
]) {
  specs[`XPENG|G9|${year}|Long Range RWD`] = {
    engine: 'Electric Single Motor', fuelType: 'electric', battery: '98 kWh', range: 560,
    drivetrain: 'RWD', transmission: '1sp auto',
    power: 230, torque: 430, weight: 2250, seats: 6,
    fc: null, fh: null, fx: null,
    acceleration: 7.0, topSpeed: 200, price: p(prices.rwd), aspiration: 'Electric'
  }
  specs[`XPENG|G9|${year}|AWD Performance`] = {
    engine: 'Electric Dual Motor', fuelType: 'electric', battery: '98 kWh', range: 520,
    drivetrain: 'AWD', transmission: '1sp auto',
    power: 405, torque: 725, weight: 2430, seats: 7,
    fc: null, fh: null, fx: null,
    acceleration: 3.9, topSpeed: 200, price: p(prices.awd), aspiration: 'Electric'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement167.json', JSON.stringify(out, null, 2))
console.log(`supplement167.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
