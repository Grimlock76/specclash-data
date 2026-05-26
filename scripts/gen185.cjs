'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2021 (992.1): Carrera S, Carrera GTS, GT3, Targa 4, Targa 4S, Turbo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2021|Carrera S`] = {
  engine: '3.0L H6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 309, torque: 530, weight: 1480, seats: 4,
  fc: 10.5, fh: 8.2, fx: 14.2,
  acceleration: 3.5, topSpeed: 308, price: p(289900), aspiration: 'Turbo'
}
specs[`Porsche|911|2021|Carrera GTS`] = {
  engine: '3.0L H6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 353, torque: 570, weight: 1515, seats: 4,
  fc: 11.0, fh: 8.5, fx: 15.0,
  acceleration: 3.3, topSpeed: 311, price: p(380900), aspiration: 'Turbo'
}
specs[`Porsche|911|2021|GT3`] = {
  engine: '4.0L H6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 375, torque: 470, weight: 1408, seats: 4,
  fc: 13.9, fh: 10.4, fx: 19.3,
  acceleration: 3.4, topSpeed: 320, price: p(429900), aspiration: 'NA'
}
specs[`Porsche|911|2021|Targa 4`] = {
  engine: '3.0L H6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 283, torque: 450, weight: 1640, seats: 4,
  fc: 10.8, fh: 8.4, fx: 14.3,
  acceleration: 4.2, topSpeed: 296, price: p(279900), aspiration: 'Turbo'
}
specs[`Porsche|911|2021|Targa 4S`] = {
  engine: '3.0L H6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 309, torque: 530, weight: 1650, seats: 4,
  fc: 10.8, fh: 8.4, fx: 14.3,
  acceleration: 3.6, topSpeed: 304, price: p(319900), aspiration: 'Turbo'
}
specs[`Porsche|911|2021|Turbo`] = {
  engine: '3.8L H6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 427, torque: 750, weight: 1625, seats: 4,
  fc: 11.6, fh: 8.8, fx: 15.8,
  acceleration: 2.7, topSpeed: 320, price: p(499900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 718 — 2021: Boxster, Cayman, Boxster/Cayman GTS 4.0, Cayman GT4 RS
// ─────────────────────────────────────────────────────────────
specs[`Porsche|718|2021|718 Boxster`] = {
  engine: '2.0L H4 Turbo', fuelType: 'petrol', displacement: 1988,
  cylinders: 4, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 220, torque: 380, weight: 1360, seats: 2,
  fc: 8.1, fh: 6.4, fx: 10.8,
  acceleration: 5.1, topSpeed: 272, price: p(129900), aspiration: 'Turbo'
}
specs[`Porsche|718|2021|718 Cayman`] = {
  engine: '2.0L H4 Turbo', fuelType: 'petrol', displacement: 1988,
  cylinders: 4, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 220, torque: 380, weight: 1340, seats: 4,
  fc: 8.0, fh: 6.3, fx: 10.6,
  acceleration: 5.1, topSpeed: 270, price: p(124900), aspiration: 'Turbo'
}
specs[`Porsche|718|2021|Boxster GTS 4.0`] = {
  engine: '4.0L H6 NA', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 294, torque: 420, weight: 1375, seats: 2,
  fc: 12.1, fh: 9.2, fx: 16.3,
  acceleration: 4.5, topSpeed: 293, price: p(189900), aspiration: 'NA'
}
specs[`Porsche|718|2021|Cayman GTS 4.0`] = {
  engine: '4.0L H6 NA', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 294, torque: 420, weight: 1360, seats: 4,
  fc: 12.0, fh: 9.1, fx: 16.1,
  acceleration: 4.5, topSpeed: 293, price: p(183900), aspiration: 'NA'
}
specs[`Porsche|718|2021|718 Cayman GT4 RS`] = {
  engine: '4.0L H6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 368, torque: 450, weight: 1415, seats: 4,
  fc: 12.7, fh: 9.5, fx: 17.2,
  acceleration: 3.4, topSpeed: 315, price: p(299900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE CAYENNE — 2021: S, GTS 4.0
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Cayenne|2021|S`] = {
  engine: '2.9L V6 Twin-Turbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 250, torque: 500, weight: 2010, seats: 5,
  fc: 10.2, fh: 7.7, fx: 13.7,
  acceleration: 5.0, topSpeed: 263, price: p(169900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2021|GTS 4.0`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 338, torque: 620, weight: 2120, seats: 5,
  fc: 13.0, fh: 9.9, fx: 17.9,
  acceleration: 3.7, topSpeed: 286, price: p(259900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE PANAMERA — 2021: Panamera 4S, Panamera Turbo S
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Panamera|2021|Panamera 4S`] = {
  engine: '2.9L V6 Twin-Turbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 324, torque: 550, weight: 1885, seats: 4,
  fc: 9.8, fh: 7.5, fx: 13.5,
  acceleration: 4.2, topSpeed: 291, price: p(289900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2021|Panamera Turbo S`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 463, torque: 850, weight: 2135, seats: 4,
  fc: 13.3, fh: 10.2, fx: 18.2,
  acceleration: 3.1, topSpeed: 315, price: p(489900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — 2021: Cross Turismo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Taycan|2021|Taycan Cross Turismo`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93.4 kWh', range: 388,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 320, torque: 460, weight: 2285, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.4, topSpeed: 220, price: p(239000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA RAV4 — 2021 PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Toyota|RAV4|2021|GX PHEV`] = {
  engine: '2.5L I4 Atkinson PHEV', fuelType: 'PHEV', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 225, torque: 270, weight: 1990, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 180, price: p(49900), aspiration: 'NA'
}
specs[`Toyota|RAV4|2021|GXL PHEV`] = {
  engine: '2.5L I4 Atkinson PHEV', fuelType: 'PHEV', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 225, torque: 270, weight: 1995, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 180, price: p(55900), aspiration: 'NA'
}
specs[`Toyota|RAV4|2021|Cruiser PHEV`] = {
  engine: '2.5L I4 Atkinson PHEV', fuelType: 'PHEV', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 225, torque: 270, weight: 2000, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 180, price: p(67900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA SUPRA — 2021: GTS 2.0 (4-cylinder)
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Supra|2021|GTS 2.0`] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 190, torque: 400, weight: 1395, seats: 2,
  fc: 7.1, fh: 5.6, fx: 9.5,
  acceleration: 5.2, topSpeed: 250, price: p(74900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement185.json', JSON.stringify(out, null, 2))
console.log(`supplement185.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
