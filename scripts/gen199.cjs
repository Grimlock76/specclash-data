'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE — 2019: 718 GTS 4.0 variants, Boxster Spyder, Cayman GT4
//                 911 (992 gen: Carrera/Carrera S/GT3 RS)
//                 Cayenne Coupe variants, Panamera GTS/Turbo S E-Hybrid
// ─────────────────────────────────────────────────────────────
specs[`Porsche|718|2019|718 Boxster GTS 4.0`] = {
  engine: '4.0L F6 NA 718', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 294, torque: 420, weight: 1380, seats: 2,
  fc: 10.3, fh: 8.0, fx: 13.9,
  acceleration: 4.5, topSpeed: 293, price: p(189900), aspiration: 'NA'
}
specs[`Porsche|718|2019|718 Cayman GTS 4.0`] = {
  engine: '4.0L F6 NA 718', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 294, torque: 420, weight: 1380, seats: 2,
  fc: 10.3, fh: 8.0, fx: 13.9,
  acceleration: 4.5, topSpeed: 295, price: p(184900), aspiration: 'NA'
}
specs[`Porsche|718|2019|Boxster Spyder`] = {
  engine: '4.0L F6 NA 718', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 309, torque: 420, weight: 1348, seats: 2,
  fc: 10.3, fh: 8.0, fx: 13.9,
  acceleration: 4.4, topSpeed: 301, price: p(194900), aspiration: 'NA'
}
specs[`Porsche|718|2019|Cayman GT4`] = {
  engine: '4.0L F6 NA 718', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 309, torque: 420, weight: 1420, seats: 2,
  fc: 10.3, fh: 8.0, fx: 13.9,
  acceleration: 4.4, topSpeed: 304, price: p(189900), aspiration: 'NA'
}
specs[`Porsche|911|2019|Carrera`] = {
  engine: '3.0L F6 Biturbo 992', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 283, torque: 450, weight: 1518, seats: 4,
  fc: 10.5, fh: 8.1, fx: 14.2,
  acceleration: 4.2, topSpeed: 293, price: p(249900), aspiration: 'Turbo'
}
specs[`Porsche|911|2019|Carrera Cabriolet`] = {
  engine: '3.0L F6 Biturbo 992', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 283, torque: 450, weight: 1600, seats: 4,
  fc: 10.5, fh: 8.1, fx: 14.2,
  acceleration: 4.3, topSpeed: 291, price: p(279900), aspiration: 'Turbo'
}
specs[`Porsche|911|2019|Carrera S`] = {
  engine: '3.0L F6 Biturbo 992', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 331, torque: 530, weight: 1530, seats: 4,
  fc: 10.8, fh: 8.4, fx: 14.6,
  acceleration: 3.7, topSpeed: 308, price: p(299900), aspiration: 'Turbo'
}
specs[`Porsche|911|2019|Carrera S Cabriolet`] = {
  engine: '3.0L F6 Biturbo 992', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 331, torque: 530, weight: 1620, seats: 4,
  fc: 10.8, fh: 8.4, fx: 14.6,
  acceleration: 3.9, topSpeed: 306, price: p(329900), aspiration: 'Turbo'
}
specs[`Porsche|911|2019|GT3 RS`] = {
  engine: '4.0L F6 NA 991.2', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 383, torque: 470, weight: 1430, seats: 4,
  fc: 13.0, fh: 10.0, fx: 17.5,
  acceleration: 3.3, topSpeed: 312, price: p(599900), aspiration: 'NA'
}
specs[`Porsche|Cayenne|2019|Coupe`] = {
  engine: '3.0L V6 Turbo', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 250, torque: 450, weight: 2020, seats: 5,
  fc: 9.7, fh: 7.5, fx: 13.1,
  acceleration: 6.0, topSpeed: 245, price: p(129900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2019|E-Hybrid`] = {
  engine: '3.0L V6 Turbo PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 340, torque: 700, weight: 2295, seats: 5,
  fc: 3.4, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 253, price: p(139900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2019|E-Hybrid Coupe`] = {
  engine: '3.0L V6 Turbo PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 340, torque: 700, weight: 2310, seats: 5,
  fc: 3.4, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 252, price: p(149900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2019|GTS Coupe`] = {
  engine: '4.0L V8 Biturbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 338, torque: 620, weight: 2110, seats: 5,
  fc: 13.2, fh: 10.2, fx: 17.8,
  acceleration: 4.5, topSpeed: 272, price: p(229900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2019|S Coupe`] = {
  engine: '2.9L V6 Biturbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 324, torque: 550, weight: 2040, seats: 5,
  fc: 10.5, fh: 8.1, fx: 14.3,
  acceleration: 5.1, topSpeed: 265, price: p(189900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2019|Turbo Coupe`] = {
  engine: '4.0L V8 Biturbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 404, torque: 770, weight: 2155, seats: 5,
  fc: 12.5, fh: 9.7, fx: 17.0,
  acceleration: 3.9, topSpeed: 286, price: p(279900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2019|Panamera GTS`] = {
  engine: '4.0L V8 Biturbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 338, torque: 620, weight: 1980, seats: 4,
  fc: 11.5, fh: 8.9, fx: 15.5,
  acceleration: 4.1, topSpeed: 290, price: p(259900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2019|Panamera Turbo S E-Hybrid`] = {
  engine: '4.0L V8 Biturbo PHEV', fuelType: 'PHEV', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 500, torque: 870, weight: 2340, seats: 4,
  fc: 3.0, fh: null, fx: null,
  acceleration: 3.2, topSpeed: 310, price: p(449900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// RENAULT KOLEOS — 2019: Life
// ─────────────────────────────────────────────────────────────
specs[`Renault|Koleos|2019|Life`] = {
  engine: '2.5L I4 NA QR25DE', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT X-Tronic',
  power: 127, torque: 226, weight: 1680, seats: 5,
  fc: 9.7, fh: 7.6, fx: 12.8,
  acceleration: 10.5, topSpeed: 185, price: p(34990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement199.json', JSON.stringify(out, null, 2))
console.log(`supplement199.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
