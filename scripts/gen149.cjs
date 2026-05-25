'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// LEXUS LX 600 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Lexus|LX|2026|LX 600 Sports Luxury'] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2720, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(219990), aspiration: 'Turbo'
}
specs['Lexus|LX|2026|LX 600 F Sport'] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3446,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 305, torque: 650, weight: 2730, seats: 7,
  fc: 13.3, fh: 10.5, fx: 18.2,
  acceleration: 7.4, topSpeed: 210, price: p(229990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS GX 550 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Lexus|GX|2026|GX 550 Sports Luxury'] = {
  engine: '3.4L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3444,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 260, torque: 650, weight: 2390, seats: 7,
  fc: 12.4, fh: 9.7, fx: 16.9,
  acceleration: 6.3, topSpeed: 200, price: p(119990), aspiration: 'Turbo'
}
specs['Lexus|GX|2026|GX 550 F Sport'] = {
  engine: '3.4L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3444,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 260, torque: 650, weight: 2400, seats: 7,
  fc: 12.4, fh: 9.7, fx: 16.9,
  acceleration: 6.3, topSpeed: 200, price: p(129990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS ES 300h 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Lexus|ES|2026|ES 300h Sports Luxury'] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1720, seats: 5,
  fc: 4.4, fh: 3.6, fx: 5.8,
  acceleration: 8.1, topSpeed: 180, price: p(84990), aspiration: 'NA'
}
specs['Lexus|ES|2026|ES 300h F Sport'] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 160, torque: 221, weight: 1730, seats: 5,
  fc: 4.5, fh: 3.6, fx: 5.9,
  acceleration: 8.1, topSpeed: 180, price: p(89990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RX 2026 — additional trims (AU)
// ─────────────────────────────────────────────────────────────
specs['Lexus|RX|2026|RX 350h F Sport'] = {
  engine: '2.5L I4 Atkinson Hybrid AWD', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 215, torque: 239, weight: 2020, seats: 5,
  fc: 6.0, fh: 4.9, fx: 8.1,
  acceleration: 7.2, topSpeed: 200, price: p(97990), aspiration: 'NA'
}
specs['Lexus|RX|2026|RX 500h F Sport Performance'] = {
  engine: '2.4L I4 Turbo Hybrid AWD', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 272, torque: 460, weight: 2120, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.7,
  acceleration: 5.0, topSpeed: 200, price: p(124990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW X2 2026 — xDrive20i (AU)
// ─────────────────────────────────────────────────────────────
specs['BMW|X2|2026|xDrive20i'] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 170, torque: 300, weight: 1770, seats: 5,
  fc: 7.7, fh: 6.0, fx: 10.9,
  acceleration: 6.8, topSpeed: 235, price: p(63900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI ASX 2026 MK2 Exceed (AU)
// ─────────────────────────────────────────────────────────────
specs['Mitsubishi|ASX|2026|MK2 Exceed'] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1332,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 116, torque: 270, weight: 1310, seats: 5,
  fc: 6.7, fh: 5.3, fx: 9.6,
  acceleration: 9.5, topSpeed: 185, price: p(38490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 308 2026 — petrol variants (AU)
// ─────────────────────────────────────────────────────────────
specs['Peugeot|308|2026|Allure'] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1250, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.0, topSpeed: 188, price: p(43990), aspiration: 'Turbo'
}
specs['Peugeot|308|2026|GT'] = {
  engine: '1.6 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 165, torque: 260, weight: 1290, seats: 5,
  fc: 7.2, fh: 5.6, fx: 10.2,
  acceleration: 7.8, topSpeed: 217, price: p(53990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 2008 2026 — petrol variants (AU)
// ─────────────────────────────────────────────────────────────
specs['Peugeot|2008|2026|Allure'] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1230, seats: 5,
  fc: 6.1, fh: 4.7, fx: 8.7,
  acceleration: 11.5, topSpeed: 187, price: p(38990), aspiration: 'Turbo'
}
specs['Peugeot|2008|2026|GT'] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1245, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.2, topSpeed: 190, price: p(43990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA KODIAQ 2026 — adding 2026 explicit entries (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Kodiaq|2026|Style'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1800, seats: 7,
  fc: 8.4, fh: 6.5, fx: 11.8,
  acceleration: 8.2, topSpeed: 210, price: p(52990), aspiration: 'Turbo'
}
specs['Skoda|Kodiaq|2026|Sportline'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1815, seats: 7,
  fc: 8.5, fh: 6.5, fx: 12.0,
  acceleration: 8.0, topSpeed: 210, price: p(58990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA OCTAVIA 2026 (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Octavia|2026|Ambition'] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1325, seats: 5,
  fc: 6.3, fh: 4.8, fx: 8.8,
  acceleration: 8.7, topSpeed: 213, price: p(38990), aspiration: 'Turbo'
}
specs['Skoda|Octavia|2026|RS'] = {
  engine: '2.0 TSI RS', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 180, torque: 370, weight: 1390, seats: 5,
  fc: 7.6, fh: 5.9, fx: 10.8,
  acceleration: 6.6, topSpeed: 250, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement149.json', JSON.stringify(out, null, 2))
console.log(`supplement149.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
