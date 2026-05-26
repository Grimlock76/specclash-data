'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// AUDI A3 & Q7 — 2020: 40 TFSI quattro, 45 TFSI quattro
// ─────────────────────────────────────────────────────────────
specs[`Audi|A3|2020|40 TFSI quattro`] = {
  engine: '2.0L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 140, torque: 320, weight: 1400, seats: 5,
  fc: 7.4, fh: 5.8, fx: 10.0,
  acceleration: 7.1, topSpeed: 225, price: p(52900), aspiration: 'Turbo'
}
specs[`Audi|A3|2020|45 TFSI quattro`] = {
  engine: '2.0L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 170, torque: 370, weight: 1420, seats: 5,
  fc: 8.0, fh: 6.3, fx: 10.8,
  acceleration: 6.3, topSpeed: 250, price: p(59900), aspiration: 'Turbo'
}
specs[`Audi|Q7|2020|45 TFSI quattro`] = {
  engine: '2.0L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 180, torque: 370, weight: 2010, seats: 7,
  fc: 9.3, fh: 7.2, fx: 12.5,
  acceleration: 6.7, topSpeed: 230, price: p(109900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BENTLEY BENTAYGA — 2020: Hybrid (V6 PHEV)
// ─────────────────────────────────────────────────────────────
specs[`Bentley|Bentayga|2020|Hybrid`] = {
  engine: '3.0L V6 Turbo PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed ZF auto',
  power: 330, torque: 700, weight: 2540, seats: 5,
  fc: 3.5, fh: null, fx: null,
  acceleration: 5.2, topSpeed: 254, price: p(429000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET BOLT EV & EQUINOX — 2020
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Bolt EV|2020|2LT`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '65 kWh', range: 417,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 360, weight: 1616, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 145, price: p(57000), aspiration: 'Electric'
}
specs[`Chevrolet|Equinox|2020|RS`] = {
  engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 170, torque: 350, weight: 1726, seats: 5,
  fc: 9.8, fh: 7.6, fx: 13.1,
  acceleration: 7.8, topSpeed: 190, price: p(45990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA ACCORD — 2020: VTi-LX (10th gen)
// ─────────────────────────────────────────────────────────────
specs[`Honda|Accord|2020|VTi-LX`] = {
  engine: '1.5L I4 Turbo VTEC', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 127, torque: 203, weight: 1415, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.1,
  acceleration: 9.3, topSpeed: 195, price: p(38900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI SONATA — 2020: Hybrid (DN8 gen)
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Sonata|2020|Hybrid`] = {
  engine: '2.0L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 151, torque: 264, weight: 1565, seats: 5,
  fc: 5.0, fh: 4.2, fx: 6.3,
  acceleration: 9.5, topSpeed: 185, price: p(50990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// ISUZU D-MAX — 2020: X-Terrain (RG gen)
// ─────────────────────────────────────────────────────────────
specs[`Isuzu|D-MAX|2020|X-Terrain`] = {
  engine: '3.0L I4 TD 4JJ3-TCX', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2100, seats: 5,
  fc: 8.6, fh: 6.8, fx: 11.4,
  acceleration: 10.5, topSpeed: 175, price: p(62990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// JAGUAR F-TYPE — 2020: P300, R (P550)
// ─────────────────────────────────────────────────────────────
specs[`Jaguar|F-Type|2020|P300`] = {
  engine: '2.0L I4 Turbo Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 221, torque: 400, weight: 1595, seats: 2,
  fc: 9.1, fh: 7.1, fx: 12.2,
  acceleration: 5.7, topSpeed: 250, price: p(119900), aspiration: 'Turbo'
}
specs[`Jaguar|F-Type|2020|R`] = {
  engine: '5.0L V8 Supercharged', fuelType: 'petrol', displacement: 4999,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 405, torque: 680, weight: 1665, seats: 2,
  fc: 13.2, fh: 9.8, fx: 18.1,
  acceleration: 3.7, topSpeed: 300, price: p(274900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// JEEP COMPASS — 2020: Longitude, 4xe PHEV
// ─────────────────────────────────────────────────────────────
specs[`Jeep|Compass|2020|Longitude`] = {
  engine: '2.4L I4 NA Tigershark', fuelType: 'petrol', displacement: 2360,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 128, torque: 229, weight: 1505, seats: 5,
  fc: 9.7, fh: 7.6, fx: 12.9,
  acceleration: 9.8, topSpeed: 185, price: p(35990), aspiration: 'NA'
}
specs[`Jeep|Compass|2020|4xe`] = {
  engine: '1.3L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1332,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 177, torque: 270, weight: 1710, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 200, price: p(49990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// JEEP GRAND CHEROKEE — 2020 (WK2): Laredo, Limited, SRT, Summit, 4xe
// ─────────────────────────────────────────────────────────────
specs[`Jeep|Grand Cherokee|2020|Laredo`] = {
  engine: '3.6L V6 Pentastar NA', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 209, torque: 353, weight: 2059, seats: 5,
  fc: 11.2, fh: 8.6, fx: 15.1,
  acceleration: 7.9, topSpeed: 195, price: p(69950), aspiration: 'NA'
}
specs[`Jeep|Grand Cherokee|2020|Limited`] = {
  engine: '3.6L V6 Pentastar NA', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 209, torque: 353, weight: 2088, seats: 5,
  fc: 11.2, fh: 8.6, fx: 15.1,
  acceleration: 7.9, topSpeed: 195, price: p(79950), aspiration: 'NA'
}
specs[`Jeep|Grand Cherokee|2020|SRT`] = {
  engine: '6.4L V8 HEMI NA', fuelType: 'petrol', displacement: 6424,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 347, torque: 624, weight: 2235, seats: 5,
  fc: 14.7, fh: 10.7, fx: 20.5,
  acceleration: 4.8, topSpeed: 257, price: p(129950), aspiration: 'NA'
}
specs[`Jeep|Grand Cherokee|2020|Summit`] = {
  engine: '5.7L V8 HEMI NA', fuelType: 'petrol', displacement: 5654,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 265, torque: 556, weight: 2160, seats: 5,
  fc: 13.8, fh: 10.2, fx: 18.8,
  acceleration: 6.3, topSpeed: 210, price: p(99950), aspiration: 'NA'
}
specs[`Jeep|Grand Cherokee|2020|4xe`] = {
  engine: '2.0L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 280, torque: 637, weight: 2460, seats: 5,
  fc: 3.0, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 210, price: p(94950), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement192.json', JSON.stringify(out, null, 2))
console.log(`supplement192.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
