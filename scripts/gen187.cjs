'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HYUNDAI TUCSON — 2021 (NX4 4th gen): Active, Hybrid, PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Tucson|2021|Active`] = {
  engine: '2.0L I4 NA MPI', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 115, torque: 192, weight: 1450, seats: 5,
  fc: 8.3, fh: 6.7, fx: 11.0,
  acceleration: 11.2, topSpeed: 185, price: p(35300), aspiration: 'NA'
}
specs[`Hyundai|Tucson|2021|Elite Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 265, weight: 1685, seats: 5,
  fc: 5.7, fh: 4.6, fx: 7.5,
  acceleration: 8.5, topSpeed: 195, price: p(52300), aspiration: 'Turbo'
}
specs[`Hyundai|Tucson|2021|Elite PHEV`] = {
  engine: '1.6L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1895, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 8.1, topSpeed: 195, price: p(59000), aspiration: 'Turbo'
}
specs[`Hyundai|Tucson|2021|Highlander Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 265, weight: 1695, seats: 5,
  fc: 5.7, fh: 4.6, fx: 7.5,
  acceleration: 8.5, topSpeed: 195, price: p(57800), aspiration: 'Turbo'
}
specs[`Hyundai|Tucson|2021|Highlander PHEV`] = {
  engine: '1.6L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1905, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 8.1, topSpeed: 195, price: p(64800), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI SANTA FE — 2021 (TM facelift): Hybrid trims
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Santa Fe|2021|Elite Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 350, weight: 1919, seats: 7,
  fc: 6.3, fh: 5.1, fx: 8.3,
  acceleration: 9.0, topSpeed: 190, price: p(58800), aspiration: 'Turbo'
}
specs[`Hyundai|Santa Fe|2021|Calligraphy Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 350, weight: 1935, seats: 7,
  fc: 6.3, fh: 5.1, fx: 8.3,
  acceleration: 9.0, topSpeed: 190, price: p(63000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI ELANTRA — 2021 (CN7 7th gen): Elite, N Line
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Elantra|2021|Elite`] = {
  engine: '2.0L I4 NA MPI', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 115, torque: 192, weight: 1365, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.3,
  acceleration: 10.5, topSpeed: 195, price: p(31500), aspiration: 'NA'
}
specs[`Hyundai|Elantra|2021|N Line`] = {
  engine: '1.6L I4 T-GDi Turbo', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 150, torque: 265, weight: 1400, seats: 5,
  fc: 7.6, fh: 6.1, fx: 10.0,
  acceleration: 8.0, topSpeed: 200, price: p(38500), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA — 2021: Hybrid
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Kona|2021|Hybrid`] = {
  engine: '1.6L I4 GDI Hybrid', fuelType: 'hybrid', displacement: 1580,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
  power: 104, torque: 147, weight: 1535, seats: 5,
  fc: 4.9, fh: 4.0, fx: 6.1,
  acceleration: 11.6, topSpeed: 162, price: p(37500), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI i20 — 2021 (BC3): N Line
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|i20|2021|N Line`] = {
  engine: '1.0L I3 T-GDi', fuelType: 'petrol', displacement: 998,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 88, torque: 200, weight: 1150, seats: 5,
  fc: 5.9, fh: 4.7, fx: 7.7,
  acceleration: 10.0, topSpeed: 195, price: p(26000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI i30 N — 2021: Fastback
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|i30 N|2021|Fastback`] = {
  engine: '2.0L I4 T-GDi Performance', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed DCT',
  power: 206, torque: 392, weight: 1405, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.1,
  acceleration: 5.9, topSpeed: 250, price: p(54990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// KIA CARNIVAL — 2021 (KA4 3rd gen): S, SLi, Platinum
// ─────────────────────────────────────────────────────────────
specs[`Kia|Carnival|2021|S`] = {
  engine: '3.5L V6 GDi', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 216, torque: 355, weight: 1964, seats: 8,
  fc: 11.0, fh: 8.5, fx: 14.5,
  acceleration: 9.0, topSpeed: 200, price: p(51900), aspiration: 'NA'
}
specs[`Kia|Carnival|2021|SLi`] = {
  engine: '3.5L V6 GDi', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 216, torque: 355, weight: 1980, seats: 8,
  fc: 11.0, fh: 8.5, fx: 14.5,
  acceleration: 9.0, topSpeed: 200, price: p(59900), aspiration: 'NA'
}
specs[`Kia|Carnival|2021|Platinum`] = {
  engine: '3.5L V6 GDi', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 216, torque: 355, weight: 2010, seats: 8,
  fc: 11.0, fh: 8.5, fx: 14.5,
  acceleration: 9.0, topSpeed: 200, price: p(69900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// KIA SORENTO — 2021 (MQ4): Hybrid and PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Kia|Sorento|2021|Si Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 350, weight: 1825, seats: 7,
  fc: 6.4, fh: 5.2, fx: 8.3,
  acceleration: 8.7, topSpeed: 193, price: p(50900), aspiration: 'Turbo'
}
specs[`Kia|Sorento|2021|SLi Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 350, weight: 1835, seats: 7,
  fc: 6.4, fh: 5.2, fx: 8.3,
  acceleration: 8.7, topSpeed: 193, price: p(56900), aspiration: 'Turbo'
}
specs[`Kia|Sorento|2021|GT-Line Hybrid`] = {
  engine: '1.6L I4 Turbo Hybrid', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 169, torque: 350, weight: 1840, seats: 7,
  fc: 6.4, fh: 5.2, fx: 8.3,
  acceleration: 8.7, topSpeed: 193, price: p(62900), aspiration: 'Turbo'
}
specs[`Kia|Sorento|2021|GT-Line PHEV`] = {
  engine: '1.6L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1960, seats: 7,
  fc: 1.6, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 193, price: p(70900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// KIA SPORTAGE — 2021: GT-Line (QL facelift)
// ─────────────────────────────────────────────────────────────
specs[`Kia|Sportage|2021|GT-Line`] = {
  engine: '2.0L I4 T-GDi Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 176, torque: 353, weight: 1640, seats: 5,
  fc: 9.6, fh: 7.5, fx: 12.8,
  acceleration: 7.8, topSpeed: 205, price: p(41990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement187.json', JSON.stringify(out, null, 2))
console.log(`supplement187.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
