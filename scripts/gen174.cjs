'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2023 trim gaps
// Carrera GTS, GT3 RS, Turbo, Turbo Cabriolet, Turbo S, Turbo S Cabriolet
// All ~$10-15k cheaper than 2024 equivalents
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2023|Carrera GTS`] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 398, torque: 570, weight: 1510, seats: 2,
  fc: 12.0, fh: 9.5, fx: 16.0,
  acceleration: 3.3, topSpeed: 312, price: p(264000), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|GT3 RS`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 386, torque: 465, weight: 1450, seats: 2,
  fc: 13.2, fh: 9.8, fx: 18.5,
  acceleration: 3.2, topSpeed: 296, price: p(530000), aspiration: 'NA'
}
specs[`Porsche|911|2023|Turbo`] = {
  engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 382, torque: 570, weight: 1601, seats: 4,
  fc: 11.8, fh: 8.8, fx: 16.6,
  acceleration: 3.0, topSpeed: 320, price: p(365000), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|Turbo Cabriolet`] = {
  engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 382, torque: 570, weight: 1635, seats: 4,
  fc: 12.0, fh: 9.0, fx: 16.9,
  acceleration: 3.1, topSpeed: 320, price: p(385000), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|Turbo S`] = {
  engine: '3.7 Flat-6 Biturbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 480, torque: 800, weight: 1640, seats: 2,
  fc: 13.1, fh: 10.1, fx: 18.0,
  acceleration: 2.7, topSpeed: 330, price: p(454000), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|Turbo S Cabriolet`] = {
  engine: '3.8L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 478, torque: 800, weight: 1656, seats: 4,
  fc: 12.0, fh: 9.1, fx: 16.9,
  acceleration: 2.7, topSpeed: 330, price: p(445000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — 2023 trim gaps
// Sport Turismo, Taycan 4, Taycan Turbo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Taycan|2023|Sport Turismo`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 420,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 300, torque: 345, weight: 2195, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.5, topSpeed: 230, price: p(151000), aspiration: 'Electric'
}
specs[`Porsche|Taycan|2023|Taycan 4`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 404,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 350, torque: 500, weight: 2180, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 230, price: p(163000), aspiration: 'Electric'
}
specs[`Porsche|Taycan|2023|Taycan Turbo`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 395,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 500, torque: 910, weight: 2235, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 2.8, topSpeed: 260, price: p(282000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES S-CLASS — 2023 trim gaps
// S 450, S 580 4MATIC, S 63 AMG e Performance, Maybach S 580 4MATIC
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|S-Class|2023|S 450`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 270, torque: 550, weight: 2165, seats: 5,
  fc: 9.3, fh: 7.1, fx: 13.5,
  acceleration: 5.9, topSpeed: 250, price: p(249900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2023|S 580 4MATIC`] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2300, seats: 5,
  fc: 11.9, fh: 9.1, fx: 16.7,
  acceleration: 4.3, topSpeed: 250, price: p(339900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2023|S 63 AMG e Performance`] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 500, torque: 1150, weight: 2655, seats: 5,
  fc: 2.8, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 250, price: p(509900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2023|Maybach S 580 4MATIC`] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2395, seats: 4,
  fc: 12.3, fh: 9.4, fx: 17.3,
  acceleration: 4.8, topSpeed: 250, price: p(679900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES AMG GT — 2023 trim gaps
// AMG GT 55 4MATIC+, AMG GT 63 S E Performance
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2023|AMG GT 55 4MATIC+`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 320, torque: 700, weight: 1870, seats: 4,
  fc: 12.2, fh: 9.3, fx: 17.1,
  acceleration: 4.0, topSpeed: 290, price: p(259900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2023|AMG GT 63 S E Performance`] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 620, torque: 1400, weight: 2370, seats: 4,
  fc: 2.4, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 316, price: p(479900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS ES — 2023 trim gaps: ES 300h F Sport, ES 300h Sports Luxury
// ─────────────────────────────────────────────────────────────
specs[`Lexus|ES|2023|ES 300h F Sport`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1730, seats: 5,
  fc: 4.5, fh: 3.6, fx: 5.9,
  acceleration: 8.1, topSpeed: 180, price: p(76990), aspiration: 'NA'
}
specs[`Lexus|ES|2023|ES 300h Sports Luxury`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1720, seats: 5,
  fc: 4.4, fh: 3.6, fx: 5.8,
  acceleration: 8.1, topSpeed: 180, price: p(71990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LEXUS LX — 2023 trim gaps: LX 600 F Sport, LX 600 Sports Luxury
// ─────────────────────────────────────────────────────────────
specs[`Lexus|LX|2023|LX 600 F Sport`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2730, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(209990), aspiration: 'Turbo'
}
specs[`Lexus|LX|2023|LX 600 Sports Luxury`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2720, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(199990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RX — 2023 trim gaps: RX 350h, RX 350h F Sport, RX 500h F Sport Performance
// ─────────────────────────────────────────────────────────────
specs[`Lexus|RX|2023|RX 350h`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 179, torque: 221, weight: 1920, seats: 5,
  fc: 5.8, fh: 4.7, fx: 7.8,
  acceleration: 7.9, topSpeed: 180, price: p(74990), aspiration: 'NA'
}
specs[`Lexus|RX|2023|RX 350h F Sport`] = {
  engine: '2.5L I4 Atkinson Hybrid AWD', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 215, torque: 239, weight: 2020, seats: 5,
  fc: 6.0, fh: 4.9, fx: 8.1,
  acceleration: 7.2, topSpeed: 200, price: p(85990), aspiration: 'NA'
}
specs[`Lexus|RX|2023|RX 500h F Sport Performance`] = {
  engine: '2.4L I4 Turbo Hybrid AWD', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 272, torque: 460, weight: 2120, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.7,
  acceleration: 5.0, topSpeed: 200, price: p(112990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BENTLEY BENTAYGA — 2023 trim gaps: S, EWB
// ─────────────────────────────────────────────────────────────
specs[`Bentley|Bentayga|2023|S`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 404, torque: 770, weight: 2440, seats: 5,
  fc: 14.3, fh: 10.8, fx: 20.1,
  acceleration: 4.4, topSpeed: 290, price: p(354990), aspiration: 'Turbo'
}
specs[`Bentley|Bentayga|2023|EWB`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 404, torque: 770, weight: 2550, seats: 5,
  fc: 14.6, fh: 11.0, fx: 20.5,
  acceleration: 4.5, topSpeed: 290, price: p(454990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement174.json', JSON.stringify(out, null, 2))
console.log(`supplement174.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
