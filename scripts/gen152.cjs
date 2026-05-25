'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// JEEP COMPASS 2025-2026 — third-gen MP platform (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 1500]]) {
  specs[`Jeep|Compass|${year}|Sport`] = {
    engine: '1.3L 4-cyl Turbo', fuelType: 'petrol', displacement: 1332,
    cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
    power: 96, torque: 230, weight: 1497, seats: 5,
    fc: 6.8, fh: 5.2, fx: 9.7,
    acceleration: 10.5, topSpeed: 190, price: p(37950 + inc), aspiration: 'Turbo'
  }
  specs[`Jeep|Compass|${year}|Longitude`] = {
    engine: '1.3L 4-cyl Turbo', fuelType: 'petrol', displacement: 1332,
    cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
    power: 96, torque: 230, weight: 1520, seats: 5,
    fc: 6.8, fh: 5.2, fx: 9.7,
    acceleration: 10.5, topSpeed: 190, price: p(43450 + inc), aspiration: 'Turbo'
  }
  specs[`Jeep|Compass|${year}|Limited`] = {
    engine: '1.3L 4-cyl Turbo AWD', fuelType: 'petrol', displacement: 1332,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
    power: 130, torque: 270, weight: 1602, seats: 5,
    fc: 7.4, fh: 5.7, fx: 10.4,
    acceleration: 8.4, topSpeed: 200, price: p(49450 + inc), aspiration: 'Turbo'
  }
  specs[`Jeep|Compass|${year}|Trailhawk`] = {
    engine: '1.3L 4-cyl Turbo AWD', fuelType: 'petrol', displacement: 1332,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
    power: 130, torque: 270, weight: 1641, seats: 5,
    fc: 7.8, fh: 6.0, fx: 11.0,
    acceleration: 8.4, topSpeed: 195, price: p(52450 + inc), aspiration: 'Turbo'
  }
  specs[`Jeep|Compass|${year}|4xe`] = {
    engine: '1.3L 4-cyl Turbo PHEV', fuelType: 'phev', displacement: 1332,
    cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
    power: 177, torque: 385, weight: 1850, seats: 5,
    fc: 2.1, fh: null, fx: null, range: 50,
    acceleration: 6.6, topSpeed: 210, price: p(58450 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// VW AMAROK 2025-2026 — TDI580 Style (missing trim, AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 2000]]) {
  specs[`Volkswagen|Amarok|${year}|TDI580 Style`] = {
    engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2967,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
    power: 174, torque: 500, weight: 2296, seats: 5,
    fc: 9.8, fh: 7.6, fx: 13.6,
    acceleration: 8.0, topSpeed: 188, price: p(72190 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// NISSAN JUKE 2025-2026 — Ti trim (missing, AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 2000]]) {
  specs[`Nissan|Juke|${year}|Ti`] = {
    engine: '1.0L I3 DIG-T Turbo', fuelType: 'petrol', displacement: 999,
    cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
    power: 84, torque: 180, weight: 1228, seats: 5,
    fc: 6.0, fh: 4.7, fx: 8.5,
    acceleration: 10.7, topSpeed: 182, price: p(42190 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// MASERATI GRECALE 2025-2026 (AU)
// ─────────────────────────────────────────────────────────────
for (const [year, inc] of [[2025, 0], [2026, 5000]]) {
  specs[`Maserati|Grecale|${year}|GT`] = {
    engine: '2.0L 4-cyl Twin-Turbo mHEV', fuelType: 'petrol', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 243, torque: 450, weight: 2002, seats: 5,
    fc: 9.2, fh: 7.1, fx: 13.0,
    acceleration: 5.3, topSpeed: 240, price: p(149990 + inc), aspiration: 'Turbo'
  }
  specs[`Maserati|Grecale|${year}|Modena`] = {
    engine: '2.0L 4-cyl Twin-Turbo mHEV', fuelType: 'petrol', displacement: 1997,
    cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 264, torque: 450, weight: 2050, seats: 5,
    fc: 9.6, fh: 7.4, fx: 13.5,
    acceleration: 5.0, topSpeed: 250, price: p(168990 + inc), aspiration: 'Turbo'
  }
  specs[`Maserati|Grecale|${year}|Trofeo`] = {
    engine: '3.0L V6 Twin-Turbo Nettuno', fuelType: 'petrol', displacement: 2992,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
    power: 390, torque: 600, weight: 2100, seats: 5,
    fc: 12.5, fh: 9.6, fx: 17.5,
    acceleration: 3.8, topSpeed: 285, price: p(226990 + inc), aspiration: 'Turbo'
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement152.json', JSON.stringify(out, null, 2))
console.log(`supplement152.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
