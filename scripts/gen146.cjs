'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MAZDA CX-30 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Mazda|CX-30|2026|Pure'] = {
  engine: '2.0L SKYACTIV-X', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 132, torque: 224, weight: 1355, seats: 5,
  fc: 5.8, fh: 4.4, fx: 8.3,
  acceleration: 8.7, topSpeed: 200, price: p(33490)
}
specs['Mazda|CX-30|2026|Evolve'] = {
  engine: '2.0L SKYACTIV-X', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 132, torque: 224, weight: 1365, seats: 5,
  fc: 5.8, fh: 4.4, fx: 8.3,
  acceleration: 8.7, topSpeed: 200, price: p(36990)
}
specs['Mazda|CX-30|2026|Astute'] = {
  engine: '2.0L SKYACTIV-X', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 132, torque: 224, weight: 1440, seats: 5,
  fc: 6.4, fh: 4.9, fx: 9.1,
  acceleration: 9.2, topSpeed: 195, price: p(40990)
}
specs['Mazda|CX-30|2026|GT'] = {
  engine: '2.0L SKYACTIV-X', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 137, torque: 224, weight: 1445, seats: 5,
  fc: 6.5, fh: 5.0, fx: 9.2,
  acceleration: 9.0, topSpeed: 200, price: p(43490)
}
specs['Mazda|CX-30|2026|X20 Astina'] = {
  engine: '2.5L SKYACTIV-G Turbo', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 162, torque: 320, weight: 1545, seats: 5,
  fc: 7.7, fh: 6.0, fx: 10.8,
  acceleration: 7.7, topSpeed: 215, price: p(47990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA HILUX 2026 — GR Sport, SR5+ (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|HiLux|2026|GR Sport'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2155, seats: 5,
  fc: 9.3, fh: 7.4, fx: 12.9,
  acceleration: 9.5, topSpeed: 180, price: p(74990)
}
specs['Toyota|HiLux|2026|SR5+'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2065, seats: 5,
  fc: 9.3, fh: 7.4, fx: 12.9,
  acceleration: 9.5, topSpeed: 180, price: p(72990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA bZ4X 2026 — AWD, FWD (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|bZ4X|2026|FWD'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '71.4 kWh', range: 450,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 150, torque: 265, weight: 2065, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.4, topSpeed: 160, price: p(59990)
}
specs['Toyota|bZ4X|2026|AWD'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '71.4 kWh', range: 420,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 160, torque: 336, weight: 2170, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.7, topSpeed: 160, price: p(64990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA ALPHARD 2026 — Executive, Executive Lounge (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Alphard|2026|Executive'] = {
  engine: '2.5L I4 Hybrid E-Four', fuelType: 'petrol hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 176, torque: 270, weight: 2080, seats: 7,
  fc: 6.5, fh: 5.2, fx: 9.1,
  acceleration: 7.5, topSpeed: 170, price: p(113990)
}
specs['Toyota|Alphard|2026|Executive Lounge'] = {
  engine: '2.5L I4 Hybrid E-Four', fuelType: 'petrol hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 176, torque: 270, weight: 2090, seats: 4,
  fc: 6.5, fh: 5.2, fx: 9.1,
  acceleration: 7.5, topSpeed: 170, price: p(127990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA GR YARIS 2026 — GR Yaris, Rallye (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|GR Yaris|2026|GR Yaris'] = {
  engine: '1.6L I3 Turbo', fuelType: 'petrol', displacement: 1618,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 200, torque: 370, weight: 1280, seats: 4,
  fc: 8.1, fh: 6.5, fx: 11.1,
  acceleration: 5.5, topSpeed: 230, price: p(44990)
}
specs['Toyota|GR Yaris|2026|Rallye'] = {
  engine: '1.6L I3 Turbo', fuelType: 'petrol', displacement: 1618,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 200, torque: 370, weight: 1295, seats: 4,
  fc: 8.1, fh: 6.5, fx: 11.1,
  acceleration: 5.5, topSpeed: 230, price: p(54990)
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST 2026 — Platinum, Platinum+ (AU)
// ─────────────────────────────────────────────────────────────
specs['Ford|Everest|2026|Platinum'] = {
  engine: '3.0L V6 Turbo Diesel', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: '4WD', transmission: '10-speed auto',
  power: 184, torque: 600, weight: 2340, seats: 7,
  fc: 10.1, fh: 8.1, fx: 14.0,
  acceleration: 8.5, topSpeed: 200, price: p(85990)
}
specs['Ford|Everest|2026|Platinum+'] = {
  engine: '3.0L V6 Turbo Diesel', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: '4WD', transmission: '10-speed auto',
  power: 184, torque: 600, weight: 2355, seats: 7,
  fc: 10.1, fh: 8.1, fx: 14.0,
  acceleration: 8.5, topSpeed: 200, price: p(88990)
}

// ─────────────────────────────────────────────────────────────
// BMW M5 2026 — M5 Sedan, M5 Touring (AU)
// ─────────────────────────────────────────────────────────────
specs['BMW|M5|2026|M5 Sedan'] = {
  engine: '4.4L V8 Biturbo PHEV', fuelType: 'PHEV', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 441, torque: 750, weight: 2440, seats: 5,
  fc: 10.1, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 305, price: p(299900)
}
specs['BMW|M5|2026|M5 Touring'] = {
  engine: '4.4L V8 Biturbo PHEV', fuelType: 'PHEV', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 441, torque: 750, weight: 2495, seats: 5,
  fc: 10.3, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 305, price: p(319900)
}

// ─────────────────────────────────────────────────────────────
// BMW iX2 2026 — sDrive20, xDrive30 (AU)
// ─────────────────────────────────────────────────────────────
specs['BMW|iX2|2026|sDrive20'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '65.7 kWh', range: 449,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 150, torque: 250, weight: 2085, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 170, price: p(84900)
}
specs['BMW|iX2|2026|xDrive30'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '65.7 kWh', range: 417,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 230, torque: 494, weight: 2180, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 180, price: p(96900)
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 2026 — Carrera Cabriolet, GT3 Touring (AU)
// ─────────────────────────────────────────────────────────────
specs['Porsche|911|2026|Carrera Cabriolet'] = {
  engine: '3.0 Flat-6 Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 290, torque: 450, weight: 1450, seats: 2,
  fc: 11.5, fh: 9.0, fx: 15.3,
  acceleration: 4.5, topSpeed: 293, price: p(240000)
}
specs['Porsche|911|2026|GT3 Touring'] = {
  engine: '4.0 Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 375, torque: 470, weight: 1435, seats: 2,
  fc: 13.7, fh: 10.5, fx: 18.4,
  acceleration: 3.9, topSpeed: 320, price: p(399000)
}

// ─────────────────────────────────────────────────────────────
// AUDI A3 2026 — 40 TFSI quattro (AU) — adds to makes.json 2026
// ─────────────────────────────────────────────────────────────
specs['Audi|A3|2026|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 147, torque: 320, weight: 1415, seats: 5,
  fc: 7.6, fh: 5.8, fx: 10.7,
  acceleration: 7.3, topSpeed: 236, price: p(62900)
}

// ─────────────────────────────────────────────────────────────
// AUDI A4 2026 — 40 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A4|2026|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 183, torque: 370, weight: 1625, seats: 5,
  fc: 8.2, fh: 6.3, fx: 11.4,
  acceleration: 6.3, topSpeed: 250, price: p(78900)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement146.json', JSON.stringify(out, null, 2))
console.log(`supplement146.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
