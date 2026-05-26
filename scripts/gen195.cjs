'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// AUDI A6 ALLROAD & Q2 & Q7 — 2019
// ─────────────────────────────────────────────────────────────
specs[`Audi|A6 allroad|2019|50 TDI quattro`] = {
  engine: '3.0L V6 TDI Turbo Diesel', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 210, torque: 620, weight: 1935, seats: 5,
  fc: 6.6, fh: 5.2, fx: 8.9,
  acceleration: 5.3, topSpeed: 250, price: p(129900), aspiration: 'Turbo'
}
specs[`Audi|A6 allroad|2019|55 TFSI quattro`] = {
  engine: '3.0L V6 Turbo TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 250, torque: 500, weight: 1945, seats: 5,
  fc: 9.2, fh: 7.2, fx: 12.4,
  acceleration: 5.1, topSpeed: 250, price: p(139900), aspiration: 'Turbo'
}
specs[`Audi|Q2|2019|35 TFSI`] = {
  engine: '1.4L I4 Turbo TFSI', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed S tronic',
  power: 110, torque: 250, weight: 1315, seats: 5,
  fc: 6.2, fh: 4.9, fx: 8.3,
  acceleration: 8.3, topSpeed: 205, price: p(37900), aspiration: 'Turbo'
}
specs[`Audi|Q7|2019|50 TDI quattro`] = {
  engine: '3.0L V6 TDI Turbo Diesel', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 210, torque: 600, weight: 2060, seats: 7,
  fc: 7.4, fh: 5.8, fx: 10.0,
  acceleration: 6.1, topSpeed: 232, price: p(109900), aspiration: 'Turbo'
}
specs[`Audi|Q7|2019|55 TFSI quattro`] = {
  engine: '3.0L V6 Turbo TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 250, torque: 500, weight: 2090, seats: 7,
  fc: 9.5, fh: 7.4, fx: 12.8,
  acceleration: 5.9, topSpeed: 245, price: p(129900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW — 2019: 1 Series F40 (120i, M135i), 3 Series 330e/330e xDrive,
//             M2 Competition, X5 xDrive45e, X6 (M50i, xDrive40i)
// ─────────────────────────────────────────────────────────────
specs[`BMW|1 Series|2019|120i`] = {
  engine: '2.0L I4 Turbo B48', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 131, torque: 280, weight: 1360, seats: 5,
  fc: 6.1, fh: 4.7, fx: 8.1,
  acceleration: 7.8, topSpeed: 237, price: p(47900), aspiration: 'Turbo'
}
specs[`BMW|1 Series|2019|M135i xDrive`] = {
  engine: '2.0L I4 Turbo B48 M Performance', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed Steptronic',
  power: 225, torque: 450, weight: 1555, seats: 5,
  fc: 7.6, fh: 5.9, fx: 10.3,
  acceleration: 4.8, topSpeed: 250, price: p(72900), aspiration: 'Turbo'
}
specs[`BMW|3 Series|2019|330e`] = {
  engine: '2.0L I4 Turbo PHEV B48', fuelType: 'PHEV', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed Steptronic',
  power: 215, torque: 420, weight: 1765, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 5.8, topSpeed: 230, price: p(79900), aspiration: 'Turbo'
}
specs[`BMW|3 Series|2019|330e xDrive`] = {
  engine: '2.0L I4 Turbo PHEV B48', fuelType: 'PHEV', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed Steptronic',
  power: 215, torque: 420, weight: 1830, seats: 5,
  fc: 2.0, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 225, price: p(84900), aspiration: 'Turbo'
}
specs[`BMW|M2|2019|M2 Competition`] = {
  engine: '3.0L I6 Biturbo S55', fuelType: 'petrol', displacement: 2979,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 302, torque: 550, weight: 1625, seats: 4,
  fc: 10.1, fh: 7.8, fx: 13.7,
  acceleration: 4.2, topSpeed: 250, price: p(129900), aspiration: 'Turbo'
}
specs[`BMW|X5|2019|xDrive45e`] = {
  engine: '3.0L I6 Turbo PHEV B58', fuelType: 'PHEV', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Steptronic',
  power: 290, torque: 600, weight: 2295, seats: 5,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 235, price: p(149900), aspiration: 'Turbo'
}
specs[`BMW|X6|2019|M50i`] = {
  engine: '4.4L V8 Biturbo N63', fuelType: 'petrol', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Steptronic',
  power: 390, torque: 750, weight: 2235, seats: 5,
  fc: 11.5, fh: 8.9, fx: 15.5,
  acceleration: 4.3, topSpeed: 250, price: p(179900), aspiration: 'Turbo'
}
specs[`BMW|X6|2019|xDrive40i`] = {
  engine: '3.0L I6 Turbo B58', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Steptronic',
  power: 250, torque: 450, weight: 2135, seats: 5,
  fc: 9.3, fh: 7.2, fx: 12.5,
  acceleration: 5.5, topSpeed: 250, price: p(129900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BENTLEY FLYING SPUR — 2019: Hybrid (W2 3rd gen)
// ─────────────────────────────────────────────────────────────
specs[`Bentley|Flying Spur|2019|Hybrid`] = {
  engine: '2.9L V6 Turbo PHEV', fuelType: 'PHEV', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed ZF auto',
  power: 335, torque: 750, weight: 2475, seats: 5,
  fc: 2.8, fh: null, fx: null,
  acceleration: 4.0, topSpeed: 285, price: p(429000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET CORVETTE ZR1 & SILVERADO — 2019
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Corvette|2019|ZR1`] = {
  engine: '6.2L V8 Supercharged LT5', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 530, torque: 969, weight: 1525, seats: 2,
  fc: 15.3, fh: 11.2, fx: 21.2,
  acceleration: 3.1, topSpeed: 340, price: p(249000), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// DS DS3 — 2019: E-Tense (Electric)
// ─────────────────────────────────────────────────────────────
specs[`DS|DS3|2019|E-Tense`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '50 kWh', range: 320,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 100, torque: 260, weight: 1580, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 150, price: p(49990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// DODGE CHALLENGER & CHARGER — 2019: SRT Hellcat Redeye
// ─────────────────────────────────────────────────────────────
specs[`Dodge|Challenger|2019|SRT Hellcat Redeye`] = {
  engine: '6.2L V8 Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed TorqueFlite',
  power: 526, torque: 896, weight: 1979, seats: 5,
  fc: 15.8, fh: 11.6, fx: 22.1,
  acceleration: 3.4, topSpeed: 327, price: p(129950), aspiration: 'Supercharged'
}
specs[`Dodge|Charger|2019|SRT Hellcat Redeye`] = {
  engine: '6.2L V8 Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed TorqueFlite',
  power: 526, torque: 881, weight: 2007, seats: 5,
  fc: 16.0, fh: 11.8, fx: 22.4,
  acceleration: 3.6, topSpeed: 319, price: p(119950), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement195.json', JSON.stringify(out, null, 2))
console.log(`supplement195.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
