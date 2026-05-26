'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ G-CLASS & AMG GT — 2015
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|G-Class|2015|G 500`] = {
  engine: '4.0L V8 Biturbo M176 E40', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 310, torque: 610, weight: 2490, seats: 5,
  fc: 13.2, fh: 10.0, fx: 17.9,
  acceleration: 5.9, topSpeed: 210, price: p(299900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2015|AMG GT`] = {
  engine: '4.0L V8 Biturbo M178 DE40', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT AMG Speedshift',
  power: 340, torque: 600, weight: 1530, seats: 2,
  fc: 11.4, fh: 8.7, fx: 15.3,
  acceleration: 4.0, topSpeed: 304, price: p(239900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2015|AMG GT S`] = {
  engine: '4.0L V8 Biturbo M178 DE40 AL', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT AMG Speedshift',
  power: 375, torque: 650, weight: 1570, seats: 2,
  fc: 11.5, fh: 8.7, fx: 15.5,
  acceleration: 3.8, topSpeed: 310, price: p(279900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI — 2015: A4, A6, R8, A1, A7, S3, RS6 Avant, RS Q3
// ─────────────────────────────────────────────────────────────
specs[`Audi|A4|2015|2.0 TFSI`] = {
  engine: '2.0L I4 Turbo TFSI EA888', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed S tronic',
  power: 165, torque: 350, weight: 1510, seats: 5,
  fc: 6.7, fh: 5.3, fx: 9.0,
  acceleration: 7.3, topSpeed: 238, price: p(59900), aspiration: 'Turbo'
}
specs[`Audi|A6|2015|3.0 TFSI quattro`] = {
  engine: '3.0L V6 SC TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 228, torque: 440, weight: 1790, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 5.5, topSpeed: 250, price: p(109900), aspiration: 'Supercharged'
}
specs[`Audi|R8|2015|V10`] = {
  engine: '5.2L V10 NA FSI', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 397, torque: 540, weight: 1595, seats: 2,
  fc: 13.7, fh: 10.1, fx: 18.6,
  acceleration: 3.5, topSpeed: 323, price: p(319900), aspiration: 'NA'
}
specs[`Audi|R8|2015|V10 Plus`] = {
  engine: '5.2L V10 NA FSI', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 449, torque: 560, weight: 1560, seats: 2,
  fc: 13.7, fh: 10.1, fx: 18.6,
  acceleration: 3.2, topSpeed: 330, price: p(399900), aspiration: 'NA'
}
specs[`Audi|A1|2015|1.4 TFSI`] = {
  engine: '1.4L I4 Turbo TFSI EA211', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed S tronic',
  power: 92, torque: 200, weight: 1130, seats: 5,
  fc: 5.6, fh: 4.5, fx: 7.5,
  acceleration: 9.2, topSpeed: 195, price: p(29900), aspiration: 'Turbo'
}
specs[`Audi|A7|2015|3.0 TFSI quattro`] = {
  engine: '3.0L V6 SC TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 228, torque: 440, weight: 1895, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 5.3, topSpeed: 250, price: p(129900), aspiration: 'Supercharged'
}
specs[`Audi|S3|2015|S3`] = {
  engine: '2.0L I4 Turbo EA888 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed S tronic',
  power: 221, torque: 380, weight: 1425, seats: 5,
  fc: 7.6, fh: 5.9, fx: 10.4,
  acceleration: 4.9, topSpeed: 250, price: p(79900), aspiration: 'Turbo'
}
specs[`Audi|RS6|2015|RS6 Avant`] = {
  engine: '4.0L V8 Biturbo TFSI EA825', fuelType: 'petrol', displacement: 3993,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 412, torque: 700, weight: 2005, seats: 5,
  fc: 10.9, fh: 8.3, fx: 14.8,
  acceleration: 3.9, topSpeed: 280, price: p(219900), aspiration: 'Turbo'
}
specs[`Audi|RS Q3|2015|RS Q3`] = {
  engine: '2.5L I5 Turbo TFSI EA855', fuelType: 'petrol', displacement: 2480,
  cylinders: 5, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 228, torque: 420, weight: 1650, seats: 5,
  fc: 9.4, fh: 7.3, fx: 12.8,
  acceleration: 4.8, topSpeed: 250, price: p(89900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2015: GT3 RS, Turbo S (991.1 final)
// PORSCHE CAYENNE — 2015: Turbo S; MACAN — 2015: GTS
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2015|GT3 RS`] = {
  engine: '4.0L H6 NA MA104', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 368, torque: 460, weight: 1370, seats: 2,
  fc: 12.7, fh: 10.3, fx: 16.7,
  acceleration: 3.3, topSpeed: 310, price: p(399900), aspiration: 'NA'
}
specs[`Porsche|911|2015|Turbo S`] = {
  engine: '3.8L H6 Biturbo 9A1', fuelType: 'petrol', displacement: 3800,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed PDK',
  power: 412, torque: 660, weight: 1600, seats: 4,
  fc: 9.7, fh: 7.6, fx: 12.9,
  acceleration: 2.9, topSpeed: 318, price: p(399900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2015|Turbo S`] = {
  engine: '4.8L V8 Biturbo M48.71', fuelType: 'petrol', displacement: 4806,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Tiptronic S',
  power: 404, torque: 770, weight: 2245, seats: 5,
  fc: 12.5, fh: 9.6, fx: 16.9,
  acceleration: 4.1, topSpeed: 289, price: p(349900), aspiration: 'Turbo'
}
specs[`Porsche|Macan|2015|GTS`] = {
  engine: '3.0L V6 Biturbo M46.21 TFSI', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed PDK',
  power: 265, torque: 480, weight: 1955, seats: 5,
  fc: 9.4, fh: 7.3, fx: 12.7,
  acceleration: 5.2, topSpeed: 256, price: p(149900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUZUKI VITARA — 2015: RT, RT-S, S Turbo (LY new gen)
// ─────────────────────────────────────────────────────────────
specs[`Suzuki|Vitara|2015|RT`] = {
  engine: '1.6L I4 NA K16B', fuelType: 'petrol', displacement: 1586,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 86, torque: 151, weight: 1110, seats: 5,
  fc: 6.6, fh: 5.3, fx: 8.8,
  acceleration: 11.5, topSpeed: 175, price: p(22990), aspiration: 'NA'
}
specs[`Suzuki|Vitara|2015|RT-S`] = {
  engine: '1.6L I4 NA K16B', fuelType: 'petrol', displacement: 1586,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 86, torque: 151, weight: 1190, seats: 5,
  fc: 7.0, fh: 5.6, fx: 9.4,
  acceleration: 12.0, topSpeed: 170, price: p(29990), aspiration: 'NA'
}
specs[`Suzuki|Vitara|2015|S Turbo`] = {
  engine: '1.4L I4 Turbo K14C Boosterjet', fuelType: 'petrol', displacement: 1373,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 103, torque: 220, weight: 1230, seats: 5,
  fc: 6.4, fh: 5.1, fx: 8.6,
  acceleration: 9.5, topSpeed: 185, price: p(33990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement215.json', JSON.stringify(out, null, 2))
console.log(`supplement215.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
