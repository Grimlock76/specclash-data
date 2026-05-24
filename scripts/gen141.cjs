'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// POLESTAR 2 (old model key) 2026 — Long Range Dual/Single Motor (AU)
// ─────────────────────────────────────────────────────────────
specs['Polestar|Polestar 2|2026|Long Range Dual Motor'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '82 kWh', range: 562,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 310, torque: 740, weight: 2185, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 205, price: p(90990)
}
specs['Polestar|Polestar 2|2026|Long Range Single Motor'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '82 kWh', range: 635,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 220, torque: 490, weight: 2070, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.2, topSpeed: 160, price: p(80990)
}

// ─────────────────────────────────────────────────────────────
// POLESTAR 3 (old model key) 2026 — Long Range Dual Motor / Performance Pack (AU)
// ─────────────────────────────────────────────────────────────
specs['Polestar|Polestar 3|2026|Long Range Dual Motor'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '111 kWh', range: 560,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 360, torque: 840, weight: 2584, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.7, topSpeed: 210, price: p(126990)
}
specs['Polestar|Polestar 3|2026|Performance Pack'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '111 kWh', range: 560,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 380, torque: 910, weight: 2584, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.2, topSpeed: 210, price: p(136990)
}

// ─────────────────────────────────────────────────────────────
// POLESTAR 4 (old model key) 2026 — Long Range Dual/Single Motor (AU)
// ─────────────────────────────────────────────────────────────
specs['Polestar|Polestar 4|2026|Long Range Dual Motor'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '100 kWh', range: 560,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 400, torque: 686, weight: 2365, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.8, topSpeed: 200, price: p(106990)
}
specs['Polestar|Polestar 4|2026|Long Range Single Motor'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '94 kWh', range: 580,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 200, torque: 343, weight: 2170, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 180, price: p(86990)
}

// ─────────────────────────────────────────────────────────────
// JEEP GLADIATOR 2026 — Rubicon / Sport S (AU)
// ─────────────────────────────────────────────────────────────
specs['Jeep|Gladiator|2026|Rubicon'] = {
  engine: '3.6L V6 Pentastar', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: '4WD', transmission: '8-speed auto',
  power: 213, torque: 347, weight: 2161, seats: 5,
  fc: 13.8, fh: 10.2, fx: 19.5,
  acceleration: 9.0, topSpeed: 178, price: p(83990)
}
specs['Jeep|Gladiator|2026|Sport S'] = {
  engine: '3.6L V6 Pentastar', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: '4WD', transmission: '8-speed auto',
  power: 213, torque: 347, weight: 2060, seats: 5,
  fc: 13.3, fh: 9.8, fx: 18.8,
  acceleration: 8.5, topSpeed: 185, price: p(66990)
}

// ─────────────────────────────────────────────────────────────
// JAGUAR F-TYPE 2026 — P300 / R (AU)
// ─────────────────────────────────────────────────────────────
specs['Jaguar|F-Type|2026|P300'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 221, torque: 400, weight: 1575, seats: 2,
  fc: 9.8, fh: 7.3, fx: 13.8,
  acceleration: 5.7, topSpeed: 262, price: p(112990)
}
specs['Jaguar|F-Type|2026|R'] = {
  engine: '5.0 SC V8', fuelType: 'petrol', displacement: 5000,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 404, torque: 625, weight: 1745, seats: 2,
  fc: 13.5, fh: 10.0, fx: 19.0,
  acceleration: 4.2, topSpeed: 300, price: p(174990)
}

// ─────────────────────────────────────────────────────────────
// JAGUAR E-PACE 2026 — P200 / P300 (AU)
// ─────────────────────────────────────────────────────────────
specs['Jaguar|E-Pace|2026|P200'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '9-speed auto',
  power: 147, torque: 320, weight: 1700, seats: 5,
  fc: 8.0, fh: 5.9, fx: 11.3,
  acceleration: 8.6, topSpeed: 208, price: p(58490)
}
specs['Jaguar|E-Pace|2026|P300'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 221, torque: 400, weight: 1795, seats: 5,
  fc: 9.3, fh: 6.9, fx: 13.1,
  acceleration: 7.0, topSpeed: 230, price: p(73490)
}

// ─────────────────────────────────────────────────────────────
// CUPRA FORMENTOR 2026 — V1 / VZ (AU)
// ─────────────────────────────────────────────────────────────
specs['CUPRA|Formentor|2026|V1'] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1500, seats: 5,
  fc: 7.0, fh: 5.2, fx: 9.9,
  acceleration: 8.5, topSpeed: 222, price: p(46990)
}
specs['CUPRA|Formentor|2026|VZ'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 228, torque: 400, weight: 1610, seats: 5,
  fc: 8.5, fh: 6.3, fx: 12.0,
  acceleration: 5.9, topSpeed: 245, price: p(56990)
}

// ─────────────────────────────────────────────────────────────
// ALFA ROMEO GIULIA 2026 — Ti / Veloce (AU)
// ─────────────────────────────────────────────────────────────
specs['Alfa Romeo|Giulia|2026|Ti'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 206, torque: 400, weight: 1524, seats: 5,
  fc: 7.4, fh: 5.5, fx: 10.4,
  acceleration: 5.9, topSpeed: 240, price: p(81900)
}
specs['Alfa Romeo|Giulia|2026|Veloce'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 206, torque: 400, weight: 1545, seats: 5,
  fc: 7.4, fh: 5.5, fx: 10.4,
  acceleration: 5.9, topSpeed: 240, price: p(91900)
}

// ─────────────────────────────────────────────────────────────
// ALFA ROMEO STELVIO 2026 — Ti / Veloce (AU)
// ─────────────────────────────────────────────────────────────
specs['Alfa Romeo|Stelvio|2026|Ti'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 206, torque: 400, weight: 1660, seats: 5,
  fc: 8.0, fh: 5.9, fx: 11.3,
  acceleration: 5.7, topSpeed: 230, price: p(74900)
}
specs['Alfa Romeo|Stelvio|2026|Veloce'] = {
  engine: '2.0T Turbo', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 206, torque: 400, weight: 1680, seats: 5,
  fc: 8.0, fh: 5.9, fx: 11.3,
  acceleration: 5.7, topSpeed: 230, price: p(86900)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement141.json', JSON.stringify(out, null, 2))
console.log(`supplement141.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
