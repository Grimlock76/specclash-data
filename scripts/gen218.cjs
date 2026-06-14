'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHEVROLET CORVETTE Z06 — 2015; SUBURBAN Premier, TAHOE Premier, TRAX Premier
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Corvette|2015|Z06`] = {
  engine: '6.2L V8 SC LT4 Supercharged', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 485, torque: 881, weight: 1607, seats: 2,
  fc: 14.7, fh: 11.2, fx: 19.8,
  acceleration: 3.5, topSpeed: 315, price: p(119990), aspiration: 'Supercharged'
}
specs[`Chevrolet|Suburban|2015|Premier`] = {
  engine: '6.2L V8 NA L86 EcoTec3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 313, torque: 624, weight: 2810, seats: 8,
  fc: 15.6, fh: 12.0, fx: 21.0,
  acceleration: 7.5, topSpeed: 185, price: p(89990), aspiration: 'NA'
}
specs[`Chevrolet|Tahoe|2015|Premier`] = {
  engine: '6.2L V8 NA L86 EcoTec3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 313, torque: 624, weight: 2567, seats: 8,
  fc: 15.3, fh: 11.8, fx: 20.6,
  acceleration: 7.0, topSpeed: 185, price: p(79990), aspiration: 'NA'
}
specs[`Chevrolet|Trax|2015|Premier`] = {
  engine: '1.4L I4 Turbo LUV Ecotec', fuelType: 'petrol', displacement: 1364,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 103, torque: 200, weight: 1430, seats: 5,
  fc: 8.3, fh: 6.6, fx: 11.1,
  acceleration: 10.9, topSpeed: 175, price: p(32990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FIAT 500X — 2015: Cross, Lounge, Pop, Sport
// FIAT TIPO — 2015: Cross, Easy, Lounge, Sport
// ─────────────────────────────────────────────────────────────
specs[`Fiat|500X|2015|Cross`] = {
  engine: '1.4L I4 Turbo MultiAir Fire', fuelType: 'petrol', displacement: 1368,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 103, torque: 230, weight: 1418, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.6,
  acceleration: 9.5, topSpeed: 187, price: p(35990), aspiration: 'Turbo'
}
specs[`Fiat|500X|2015|Lounge`] = {
  engine: '1.4L I4 Turbo MultiAir Fire', fuelType: 'petrol', displacement: 1368,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
  power: 103, torque: 230, weight: 1380, seats: 5,
  fc: 6.9, fh: 5.5, fx: 9.3,
  acceleration: 9.7, topSpeed: 185, price: p(31990), aspiration: 'Turbo'
}
specs[`Fiat|500X|2015|Pop`] = {
  engine: '1.6L I4 NA E-Torq', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 84, torque: 142, weight: 1320, seats: 5,
  fc: 7.0, fh: 5.6, fx: 9.4,
  acceleration: 12.0, topSpeed: 173, price: p(24990), aspiration: 'NA'
}
specs[`Fiat|500X|2015|Sport`] = {
  engine: '2.4L I4 NA Tigershark MultiAir2', fuelType: 'petrol', displacement: 2360,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 130, torque: 224, weight: 1447, seats: 5,
  fc: 9.0, fh: 7.2, fx: 12.0,
  acceleration: 8.8, topSpeed: 190, price: p(40990), aspiration: 'NA'
}
specs[`Fiat|Tipo|2015|Cross`] = {
  engine: '1.6L I4 NA E6', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto DDC',
  power: 88, torque: 152, weight: 1325, seats: 5,
  fc: 7.5, fh: 6.0, fx: 10.0,
  acceleration: 11.5, topSpeed: 195, price: p(23990), aspiration: 'NA'
}
specs[`Fiat|Tipo|2015|Easy`] = {
  engine: '1.6L I4 NA E6', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 88, torque: 152, weight: 1275, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 11.0, topSpeed: 195, price: p(18990), aspiration: 'NA'
}
specs[`Fiat|Tipo|2015|Lounge`] = {
  engine: '1.6L I4 NA E6', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto DDC',
  power: 88, torque: 152, weight: 1300, seats: 5,
  fc: 7.5, fh: 6.0, fx: 10.0,
  acceleration: 11.5, topSpeed: 195, price: p(22490), aspiration: 'NA'
}
specs[`Fiat|Tipo|2015|Sport`] = {
  engine: '1.4L I4 Turbo T-Jet Mair', fuelType: 'petrol', displacement: 1368,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 110, torque: 230, weight: 1310, seats: 5,
  fc: 7.5, fh: 5.9, fx: 10.0,
  acceleration: 9.3, topSpeed: 205, price: p(26990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FERRARI 488 GTB — 2015: GTB, Pista, Spider
// ─────────────────────────────────────────────────────────────
specs[`Ferrari|488 GTB|2015|GTB`] = {
  engine: '3.9L V8 Biturbo F154CB', fuelType: 'petrol', displacement: 3902,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT F1',
  power: 492, torque: 760, weight: 1475, seats: 2,
  fc: 11.4, fh: 8.6, fx: 15.4,
  acceleration: 3.0, topSpeed: 330, price: p(399900), aspiration: 'Turbo'
}
specs[`Ferrari|488 GTB|2015|Pista`] = {
  engine: '3.9L V8 Biturbo F154CB Pista', fuelType: 'petrol', displacement: 3902,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT F1',
  power: 530, torque: 770, weight: 1385, seats: 2,
  fc: 11.4, fh: 8.6, fx: 15.4,
  acceleration: 2.85, topSpeed: 340, price: p(549900), aspiration: 'Turbo'
}
specs[`Ferrari|488 GTB|2015|Spider`] = {
  engine: '3.9L V8 Biturbo F154CB', fuelType: 'petrol', displacement: 3902,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT F1',
  power: 492, torque: 760, weight: 1540, seats: 2,
  fc: 11.4, fh: 8.6, fx: 15.4,
  acceleration: 3.0, topSpeed: 325, price: p(449900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// ROLLS-ROYCE DAWN — 2015: Black Badge, Standard
// BENTLEY BENTAYGA — 2015: W12
// ─────────────────────────────────────────────────────────────
specs[`Rolls-Royce|Dawn|2015|Black Badge`] = {
  engine: '6.6L V12 Biturbo N74B66', fuelType: 'petrol', displacement: 6592,
  cylinders: 12, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 471, torque: 900, weight: 2495, seats: 4,
  fc: 15.4, fh: 11.4, fx: 21.1,
  acceleration: 4.9, topSpeed: 250, price: p(599900), aspiration: 'Turbo'
}
specs[`Rolls-Royce|Dawn|2015|Standard`] = {
  engine: '6.6L V12 Biturbo N74B66', fuelType: 'petrol', displacement: 6592,
  cylinders: 12, drivetrain: 'RWD', transmission: '8-speed auto ZF',
  power: 420, torque: 780, weight: 2490, seats: 4,
  fc: 15.4, fh: 11.4, fx: 21.1,
  acceleration: 5.0, topSpeed: 250, price: p(499900), aspiration: 'Turbo'
}
specs[`Bentley|Bentayga|2015|W12`] = {
  engine: '6.0L W12 Biturbo TSI', fuelType: 'petrol', displacement: 5950,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-speed auto ZF',
  power: 447, torque: 900, weight: 2440, seats: 5,
  fc: 14.7, fh: 11.0, fx: 20.0,
  acceleration: 4.1, topSpeed: 301, price: p(449900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement218.json', JSON.stringify(out, null, 2))
console.log(`supplement218.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
