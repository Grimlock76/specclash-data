'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// VOLVO XC40 — 2021: B3, B5, Recharge P8
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC40|2021|B3`] = {
  engine: '1.5L I3 Turbo MHEV', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 120, torque: 265, weight: 1700, seats: 5,
  fc: 7.1, fh: 5.6, fx: 9.4,
  acceleration: 9.7, topSpeed: 195, price: p(56990), aspiration: 'Turbo'
}
specs[`Volvo|XC40|2021|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 350, weight: 1845, seats: 5,
  fc: 8.5, fh: 6.6, fx: 11.4,
  acceleration: 6.4, topSpeed: 210, price: p(69990), aspiration: 'Turbo'
}
specs[`Volvo|XC40|2021|Recharge P8`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '78 kWh', range: 418,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 300, torque: 660, weight: 2040, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 180, price: p(79990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC60 — 2021: B5 AWD
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC60|2021|B5 AWD`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 420, weight: 1900, seats: 5,
  fc: 7.9, fh: 6.2, fx: 10.6,
  acceleration: 6.4, topSpeed: 230, price: p(83490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO S90 & V90 — 2021: B5
// ─────────────────────────────────────────────────────────────
specs[`Volvo|S90|2021|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 400, weight: 1867, seats: 5,
  fc: 7.6, fh: 6.0, fx: 10.3,
  acceleration: 6.4, topSpeed: 230, price: p(109990), aspiration: 'Turbo'
}
specs[`Volvo|V90|2021|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 400, weight: 1885, seats: 5,
  fc: 7.6, fh: 6.0, fx: 10.3,
  acceleration: 6.4, topSpeed: 230, price: p(113990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU FORESTER — 2021: Hybrid L, Hybrid S (e-BOXER)
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Forester|2021|Hybrid L`] = {
  engine: '2.0L I4 Boxer e-BOXER Hybrid', fuelType: 'hybrid', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 110, torque: 196, weight: 1560, seats: 5,
  fc: 6.7, fh: 5.4, fx: 8.7,
  acceleration: 11.5, topSpeed: 195, price: p(44990), aspiration: 'NA'
}
specs[`Subaru|Forester|2021|Hybrid S`] = {
  engine: '2.0L I4 Boxer e-BOXER Hybrid', fuelType: 'hybrid', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 110, torque: 196, weight: 1570, seats: 5,
  fc: 6.7, fh: 5.4, fx: 8.7,
  acceleration: 11.5, topSpeed: 195, price: p(50990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// SUBARU LEVORG — 2021 (VN gen): 1.8GT, 1.8GT-H
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Levorg|2021|1.8GT`] = {
  engine: '1.8L I4 Turbo FA18', fuelType: 'petrol', displacement: 1795,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 130, torque: 300, weight: 1540, seats: 5,
  fc: 7.5, fh: 6.0, fx: 10.1,
  acceleration: 8.6, topSpeed: 225, price: p(54990), aspiration: 'Turbo'
}
specs[`Subaru|Levorg|2021|1.8GT-H`] = {
  engine: '1.8L I4 Turbo FA18', fuelType: 'petrol', displacement: 1795,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 130, torque: 300, weight: 1550, seats: 5,
  fc: 7.5, fh: 6.0, fx: 10.1,
  acceleration: 8.6, topSpeed: 225, price: p(57990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS IS — 2021 (XE30 facelift): IS 300, IS 350 F Sport
// ─────────────────────────────────────────────────────────────
specs[`Lexus|IS|2021|IS 300`] = {
  engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1605, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 7.2, topSpeed: 230, price: p(65990), aspiration: 'Turbo'
}
specs[`Lexus|IS|2021|IS 350 F Sport`] = {
  engine: '3.5L V6 NA', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 233, torque: 377, weight: 1675, seats: 5,
  fc: 11.1, fh: 8.8, fx: 14.6,
  acceleration: 5.5, topSpeed: 230, price: p(85990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RC — 2021: RC 300
// ─────────────────────────────────────────────────────────────
specs[`Lexus|RC|2021|RC 300`] = {
  engine: '2.0L I4 Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1640, seats: 4,
  fc: 8.9, fh: 7.0, fx: 12.0,
  acceleration: 7.2, topSpeed: 230, price: p(72990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS UX — 2021: UX 300e (Electric)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|UX|2021|UX 300e`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '54.3 kWh', range: 305,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 300, weight: 1760, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 160, price: p(74990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// SKODA OCTAVIA — 2021 (NX gen): Ambition 110 TSI, Style 140 TSI, RS Combi
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Octavia|2021|Ambition 110 TSI`] = {
  engine: '1.5L I4 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1350, seats: 5,
  fc: 5.9, fh: 4.7, fx: 7.8,
  acceleration: 8.8, topSpeed: 210, price: p(34990), aspiration: 'Turbo'
}
specs[`Skoda|Octavia|2021|Style 140 TSI`] = {
  engine: '2.0L I4 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 140, torque: 320, weight: 1415, seats: 5,
  fc: 6.6, fh: 5.2, fx: 8.8,
  acceleration: 7.5, topSpeed: 220, price: p(43990), aspiration: 'Turbo'
}
specs[`Skoda|Octavia|2021|RS Combi`] = {
  engine: '2.0L I4 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 180, torque: 370, weight: 1500, seats: 5,
  fc: 7.7, fh: 6.1, fx: 10.3,
  acceleration: 6.8, topSpeed: 250, price: p(52990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL 3 — 2021: Standard Range RWD
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model 3|2021|Standard Range RWD`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '54 kWh', range: 448,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 204, torque: 345, weight: 1752, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 225, price: p(63900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// MG ZS — 2021: Excite+ Turbo, Essence Turbo
// ─────────────────────────────────────────────────────────────
specs[`MG|ZS|2021|Excite+ Turbo`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1300,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 230, weight: 1240, seats: 5,
  fc: 7.4, fh: 5.9, fx: 9.7,
  acceleration: 9.5, topSpeed: 195, price: p(28990), aspiration: 'Turbo'
}
specs[`MG|ZS|2021|Essence Turbo`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1300,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 230, weight: 1255, seats: 5,
  fc: 7.4, fh: 5.9, fx: 9.7,
  acceleration: 9.5, topSpeed: 195, price: p(31990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement189.json', JSON.stringify(out, null, 2))
console.log(`supplement189.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
