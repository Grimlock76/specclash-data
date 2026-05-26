'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// JAGUAR XE — 2015: 20d, P250, P300 R-Sport, S, SV Project 8
// ─────────────────────────────────────────────────────────────
specs[`Jaguar|XE|2015|20d`] = {
  engine: '2.0L I4 Turbo Diesel Ingenium d200', fuelType: 'diesel', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 132, torque: 380, weight: 1527, seats: 5,
  fc: 4.9, fh: 3.9, fx: 6.5,
  acceleration: 8.1, topSpeed: 225, price: p(57990), aspiration: 'Turbo'
}
specs[`Jaguar|XE|2015|P250`] = {
  engine: '2.0L I4 Turbo Ingenium P250', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 184, torque: 365, weight: 1558, seats: 5,
  fc: 7.7, fh: 6.1, fx: 10.4,
  acceleration: 6.5, topSpeed: 250, price: p(64990), aspiration: 'Turbo'
}
specs[`Jaguar|XE|2015|P300 R-Sport`] = {
  engine: '2.0L I4 Turbo Ingenium P300', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto ZF',
  power: 221, torque: 400, weight: 1630, seats: 5,
  fc: 8.3, fh: 6.6, fx: 11.1,
  acceleration: 5.9, topSpeed: 250, price: p(77990), aspiration: 'Turbo'
}
specs[`Jaguar|XE|2015|S`] = {
  engine: '3.0L V6 SC AJ126', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 280, torque: 450, weight: 1663, seats: 5,
  fc: 9.7, fh: 7.6, fx: 13.0,
  acceleration: 4.9, topSpeed: 250, price: p(99990), aspiration: 'Supercharged'
}
specs[`Jaguar|XE|2015|SV Project 8`] = {
  engine: '5.0L V8 SC AJ133', fuelType: 'petrol', displacement: 4999,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 441, torque: 700, weight: 1745, seats: 4,
  fc: 14.5, fh: 11.2, fx: 19.5,
  acceleration: 3.3, topSpeed: 320, price: p(299990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// SKODA OCTAVIA — 2015: 110 TSI, 110 TSI Ambition, RS 230, RS 245
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Octavia|2015|110 TSI`] = {
  engine: '1.4L I4 Turbo TSI EA211', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1280, seats: 5,
  fc: 6.0, fh: 4.8, fx: 8.0,
  acceleration: 9.5, topSpeed: 206, price: p(27990), aspiration: 'Turbo'
}
specs[`Skoda|Octavia|2015|110 TSI Ambition`] = {
  engine: '1.4L I4 Turbo TSI EA211', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1285, seats: 5,
  fc: 6.0, fh: 4.8, fx: 8.0,
  acceleration: 9.5, topSpeed: 206, price: p(31990), aspiration: 'Turbo'
}
specs[`Skoda|Octavia|2015|RS 230`] = {
  engine: '2.0L I4 Turbo TSI EA888', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
  power: 169, torque: 350, weight: 1415, seats: 5,
  fc: 7.8, fh: 6.1, fx: 10.5,
  acceleration: 6.8, topSpeed: 248, price: p(44990), aspiration: 'Turbo'
}
specs[`Skoda|Octavia|2015|RS 245`] = {
  engine: '2.0L I4 Turbo TSI EA888 gen3', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 180, torque: 370, weight: 1425, seats: 5,
  fc: 7.6, fh: 6.0, fx: 10.3,
  acceleration: 6.4, topSpeed: 250, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// DODGE CHALLENGER — 2015: SRT Hellcat; CHARGER — 2015: Hellcat, SRT Hellcat, Scat Pack
// ─────────────────────────────────────────────────────────────
specs[`Dodge|Challenger|2015|SRT Hellcat`] = {
  engine: '6.2L V8 SC Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 527, torque: 881, weight: 1923, seats: 4,
  fc: 17.9, fh: 13.6, fx: 24.5,
  acceleration: 3.7, topSpeed: 325, price: p(89990), aspiration: 'Supercharged'
}
specs[`Dodge|Charger|2015|Hellcat`] = {
  engine: '6.2L V8 SC Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 527, torque: 881, weight: 2056, seats: 5,
  fc: 17.9, fh: 13.6, fx: 24.5,
  acceleration: 3.7, topSpeed: 328, price: p(84990), aspiration: 'Supercharged'
}
specs[`Dodge|Charger|2015|SRT Hellcat`] = {
  engine: '6.2L V8 SC Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 527, torque: 881, weight: 2059, seats: 5,
  fc: 17.9, fh: 13.6, fx: 24.5,
  acceleration: 3.7, topSpeed: 328, price: p(89990), aspiration: 'Supercharged'
}
specs[`Dodge|Charger|2015|Scat Pack`] = {
  engine: '6.4L V8 NA SRT 392 Apache', fuelType: 'petrol', displacement: 6424,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 365, torque: 637, weight: 1938, seats: 5,
  fc: 14.8, fh: 11.2, fx: 20.0,
  acceleration: 4.4, topSpeed: 280, price: p(69990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET COLORADO — 2015: LT, WT, Z71, ZR2 (5th gen new)
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Colorado|2015|LT`] = {
  engine: '3.6L V6 NA LGX', fuelType: 'petrol', displacement: 3649,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 232, torque: 370, weight: 1935, seats: 5,
  fc: 12.4, fh: 9.8, fx: 16.5,
  acceleration: 7.5, topSpeed: 185, price: p(42990), aspiration: 'NA'
}
specs[`Chevrolet|Colorado|2015|WT`] = {
  engine: '2.5L I4 NA LCV Ecotec', fuelType: 'petrol', displacement: 2457,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 155, torque: 305, weight: 1846, seats: 5,
  fc: 11.0, fh: 8.7, fx: 14.6,
  acceleration: 9.5, topSpeed: 175, price: p(31990), aspiration: 'NA'
}
specs[`Chevrolet|Colorado|2015|Z71`] = {
  engine: '3.6L V6 NA LGX', fuelType: 'petrol', displacement: 3649,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 232, torque: 370, weight: 1954, seats: 5,
  fc: 12.4, fh: 9.8, fx: 16.5,
  acceleration: 7.5, topSpeed: 185, price: p(46990), aspiration: 'NA'
}
specs[`Chevrolet|Colorado|2015|ZR2`] = {
  engine: '2.8L I4 Turbo Diesel LWN Duramax', fuelType: 'diesel', displacement: 2807,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto Hydra-Matic',
  power: 147, torque: 500, weight: 2110, seats: 5,
  fc: 9.2, fh: 7.3, fx: 12.2,
  acceleration: 10.8, topSpeed: 175, price: p(59990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement217.json', JSON.stringify(out, null, 2))
console.log(`supplement217.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
