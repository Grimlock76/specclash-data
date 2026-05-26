'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HYUNDAI i30 & IONIQ — 2017
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|i30|2017|N Line`] = {
  engine: '1.4L I4 Turbo T-GDI', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 103, torque: 242, weight: 1340, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 8.5, topSpeed: 210, price: p(28990), aspiration: 'Turbo'
}
specs[`Hyundai|Ioniq|2017|Elite Electric`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '28 kWh', range: 231,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 88, torque: 295, weight: 1530, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 10.2, topSpeed: 165, price: p(44990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// KIA PICANTO & RIO — 2017 (3rd/4th gen new)
// ─────────────────────────────────────────────────────────────
specs[`Kia|Picanto|2017|GT-Line`] = {
  engine: '1.2L I4 NA G4LA', fuelType: 'petrol', displacement: 1248,
  cylinders: 4, drivetrain: 'FWD', transmission: '5-speed manual',
  power: 62, torque: 122, weight: 935, seats: 5,
  fc: 5.4, fh: 4.4, fx: 7.0,
  acceleration: 11.5, topSpeed: 165, price: p(18990), aspiration: 'NA'
}
specs[`Kia|Rio|2017|Sport`] = {
  engine: '1.4L I4 NA G4LC', fuelType: 'petrol', displacement: 1368,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 74, torque: 133, weight: 1080, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 11.5, topSpeed: 180, price: p(19990), aspiration: 'NA'
}
specs[`Kia|Rio|2017|GT-Line`] = {
  engine: '1.4L I4 NA G4LC', fuelType: 'petrol', displacement: 1368,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 74, torque: 133, weight: 1085, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 11.5, topSpeed: 180, price: p(22990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DISCOVERY — 2017 (5th gen new): SE, HSE
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Discovery|2017|SE`] = {
  engine: '3.0L V6 Turbo Diesel SDV6', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto ZF',
  power: 190, torque: 600, weight: 2355, seats: 7,
  fc: 8.1, fh: 6.3, fx: 10.8,
  acceleration: 8.1, topSpeed: 209, price: p(86990), aspiration: 'Turbo'
}
specs[`Land Rover|Discovery|2017|HSE`] = {
  engine: '3.0L V6 SC Si6 Ingenium', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto ZF',
  power: 250, torque: 450, weight: 2385, seats: 7,
  fc: 12.0, fh: 9.4, fx: 16.0,
  acceleration: 7.1, topSpeed: 215, price: p(119990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// LEXUS NX — 2017: NX 300 (refresh)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|NX|2017|NX 300`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 175, torque: 350, weight: 1770, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.1,
  acceleration: 7.2, topSpeed: 200, price: p(56990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LOTUS EVORA 400 — 2017: Sport 410
// ─────────────────────────────────────────────────────────────
specs[`Lotus|Evora 400|2017|Sport 410`] = {
  engine: '3.5L V6 SC Toyota 2GR-FE', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 306, torque: 430, weight: 1238, seats: 4,
  fc: 10.2, fh: 8.2, fx: 13.6,
  acceleration: 4.0, topSpeed: 300, price: p(219900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-5 & CX-9 — 2017 (new KF/TC gen)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|CX-5|2017|Touring`] = {
  engine: '2.5L I4 NA Skyactiv-G 25', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 140, torque: 252, weight: 1570, seats: 5,
  fc: 8.0, fh: 6.3, fx: 10.6,
  acceleration: 8.6, topSpeed: 195, price: p(35490), aspiration: 'NA'
}
specs[`Mazda|CX-5|2017|Akera`] = {
  engine: '2.5L I4 NA Skyactiv-G 25', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 252, weight: 1620, seats: 5,
  fc: 8.4, fh: 6.6, fx: 11.1,
  acceleration: 8.7, topSpeed: 193, price: p(43490), aspiration: 'NA'
}
specs[`Mazda|CX-9|2017|Sport`] = {
  engine: '2.5L I4 Turbo Skyactiv-G 2.5T', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 170, torque: 420, weight: 1885, seats: 7,
  fc: 9.1, fh: 7.2, fx: 12.1,
  acceleration: 8.3, topSpeed: 195, price: p(46990), aspiration: 'Turbo'
}
specs[`Mazda|CX-9|2017|Touring`] = {
  engine: '2.5L I4 Turbo Skyactiv-G 2.5T', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 170, torque: 420, weight: 1935, seats: 7,
  fc: 9.5, fh: 7.5, fx: 12.6,
  acceleration: 8.4, topSpeed: 195, price: p(53990), aspiration: 'Turbo'
}
specs[`Mazda|CX-9|2017|Azami`] = {
  engine: '2.5L I4 Turbo Skyactiv-G 2.5T', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 170, torque: 420, weight: 1940, seats: 7,
  fc: 9.5, fh: 7.5, fx: 12.6,
  acceleration: 8.4, topSpeed: 195, price: p(63490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 5008 — 2017 (2nd gen): GT
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|5008|2017|GT`] = {
  engine: '1.6L I4 Turbo PureTech 165', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto EAT6',
  power: 121, torque: 240, weight: 1520, seats: 7,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 9.7, topSpeed: 200, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2017 (991.2): GT3
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2017|GT3`] = {
  engine: '4.0L F6 NA 991.2', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 368, torque: 460, weight: 1430, seats: 4,
  fc: 13.0, fh: 10.0, fx: 17.5,
  acceleration: 3.9, topSpeed: 320, price: p(399900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement206.json', JSON.stringify(out, null, 2))
console.log(`supplement206.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
