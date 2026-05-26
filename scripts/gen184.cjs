'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// ASTON MARTIN DBX — 2022: 707
// ─────────────────────────────────────────────────────────────
specs[`Aston Martin|DBX|2022|707`] = {
  engine: '4.0L V8 Twin-Turbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 520, torque: 900, weight: 2245, seats: 5,
  fc: 13.5, fh: 10.3, fx: 18.5,
  acceleration: 3.3, topSpeed: 310, price: p(429900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A3 — 2022: 40 TFSI quattro
// ─────────────────────────────────────────────────────────────
specs[`Audi|A3|2022|40 TFSI quattro`] = {
  engine: '2.0L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 140, torque: 320, weight: 1435, seats: 5,
  fc: 7.3, fh: 5.7, fx: 9.9,
  acceleration: 7.1, topSpeed: 230, price: p(52900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI Q3 — 2022: 35 TFSI
// ─────────────────────────────────────────────────────────────
specs[`Audi|Q3|2022|35 TFSI`] = {
  engine: '1.5L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed S tronic',
  power: 110, torque: 250, weight: 1490, seats: 5,
  fc: 6.6, fh: 5.2, fx: 8.9,
  acceleration: 9.5, topSpeed: 210, price: p(54900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW M2 — 2022: M2 Coupe (G87 new-gen)
// ─────────────────────────────────────────────────────────────
specs[`BMW|M2|2022|M2 Coupe`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed M-DCT',
  power: 338, torque: 550, weight: 1755, seats: 4,
  fc: 10.5, fh: 7.9, fx: 14.3,
  acceleration: 4.1, topSpeed: 250, price: p(129900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW M3 — 2022: Touring Competition xDrive
// ─────────────────────────────────────────────────────────────
specs[`BMW|M3|2022|Touring Competition xDrive`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed M-DCT',
  power: 375, torque: 650, weight: 1840, seats: 5,
  fc: 10.9, fh: 8.3, fx: 14.9,
  acceleration: 3.5, topSpeed: 280, price: p(199900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// DODGE CHALLENGER — 2022: SXT, R/T
// ─────────────────────────────────────────────────────────────
specs[`Dodge|Challenger|2022|SXT`] = {
  engine: '3.6L V6 Pentastar', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 224, torque: 353, weight: 1764, seats: 5,
  fc: 12.6, fh: 9.7, fx: 16.7,
  acceleration: 6.8, topSpeed: 230, price: p(59990), aspiration: 'NA'
}
specs[`Dodge|Challenger|2022|R/T`] = {
  engine: '5.7L V8 HEMI', fuelType: 'petrol', displacement: 5654,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 269, torque: 529, weight: 1841, seats: 5,
  fc: 14.6, fh: 10.9, fx: 19.6,
  acceleration: 5.5, topSpeed: 250, price: p(74990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// GWM HAVAL H6 — 2022: Ultra
// ─────────────────────────────────────────────────────────────
specs[`GWM|Haval H6|2022|Ultra`] = {
  engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 150, torque: 320, weight: 1830, seats: 5,
  fc: 8.4, fh: 6.7, fx: 11.0,
  acceleration: 7.5, topSpeed: 210, price: p(47990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// GENESIS G70 — 2022: Shooting Brake 2.0T
// ─────────────────────────────────────────────────────────────
specs[`Genesis|G70|2022|Shooting Brake 2.0T`] = {
  engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 185, torque: 353, weight: 1720, seats: 5,
  fc: 9.2, fh: 7.2, fx: 12.5,
  acceleration: 6.5, topSpeed: 240, price: p(74900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI SANTA FE — 2022: PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Santa Fe|2022|Elite PHEV`] = {
  engine: '1.6L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1980, seats: 7,
  fc: 1.6, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 195, price: p(67300), aspiration: 'Turbo'
}
specs[`Hyundai|Santa Fe|2022|Calligraphy PHEV`] = {
  engine: '1.6L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1985, seats: 7,
  fc: 1.6, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 195, price: p(76300), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// ISUZU MU-X — 2022: X-Terrain
// ─────────────────────────────────────────────────────────────
specs[`Isuzu|MU-X|2022|X-Terrain`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2185, seats: 7,
  fc: 8.8, fh: 7.1, fx: 11.8,
  acceleration: 10.5, topSpeed: 185, price: p(66900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// KIA NIRO — 2022: Sport Hybrid, GT-Line EV
// ─────────────────────────────────────────────────────────────
specs[`Kia|Niro|2022|Sport Hybrid`] = {
  engine: '1.6L I4 GDI Hybrid', fuelType: 'hybrid', displacement: 1580,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
  power: 104, torque: 147, weight: 1565, seats: 5,
  fc: 4.8, fh: 4.0, fx: 5.9,
  acceleration: 11.0, topSpeed: 162, price: p(47990), aspiration: 'NA'
}
specs[`Kia|Niro|2022|GT-Line EV`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64.8 kWh', range: 460,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 255, weight: 1813, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.8, topSpeed: 167, price: p(67990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// LEXUS LS — 2022: LS 500 (V6 Turbo)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|LS|2022|LS 500`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 310, torque: 600, weight: 2115, seats: 5,
  fc: 10.5, fh: 8.1, fx: 14.8,
  acceleration: 4.5, topSpeed: 250, price: p(249990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LOTUS EMIRA — 2022: V6 Sport, i4 AMG First Edition
// ─────────────────────────────────────────────────────────────
specs[`Lotus|Emira|2022|V6 Sport`] = {
  engine: '3.5L V6 Supercharged', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 298, torque: 430, weight: 1420, seats: 2,
  fc: 12.3, fh: 9.2, fx: 17.2,
  acceleration: 4.3, topSpeed: 290, price: p(145900), aspiration: 'Supercharged'
}
specs[`Lotus|Emira|2022|i4 AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 265, torque: 430, weight: 1405, seats: 2,
  fc: 9.4, fh: 7.1, fx: 13.2,
  acceleration: 4.4, topSpeed: 290, price: p(139900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MG MG HS — 2022: PHEV Trophy
// ─────────────────────────────────────────────────────────────
specs[`MG|MG HS|2022|PHEV Trophy`] = {
  engine: '1.5L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '10-speed auto',
  power: 185, torque: 440, weight: 1835, seats: 5,
  fc: 1.7, fh: null, fx: null,
  acceleration: 6.9, topSpeed: 200, price: p(47990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement184.json', JSON.stringify(out, null, 2))
console.log(`supplement184.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
