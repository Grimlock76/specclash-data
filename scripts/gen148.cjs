'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ S-CLASS 2026 — expanding the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Mercedes-Benz|S-Class|2026|S 450'] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 270, torque: 550, weight: 2165, seats: 5,
  fc: 9.3, fh: 7.1, fx: 13.5,
  acceleration: 5.9, topSpeed: 250, price: p(269900), aspiration: 'Turbo'
}
specs['Mercedes-Benz|S-Class|2026|S 580 4MATIC'] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2300, seats: 5,
  fc: 11.9, fh: 9.1, fx: 16.7,
  acceleration: 4.3, topSpeed: 250, price: p(359900), aspiration: 'Turbo'
}
specs['Mercedes-Benz|S-Class|2026|S 63 AMG e Performance'] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 500, torque: 1150, weight: 2655, seats: 5,
  fc: 2.8, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 250, price: p(529900), aspiration: 'Turbo'
}
specs['Mercedes-Benz|S-Class|2026|Maybach S 580 4MATIC'] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2395, seats: 4,
  fc: 12.3, fh: 9.4, fx: 17.3,
  acceleration: 4.8, topSpeed: 250, price: p(699900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ SL 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Mercedes-Benz|SL|2026|SL 43'] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 280, torque: 480, weight: 1835, seats: 2,
  fc: 9.8, fh: 7.5, fx: 14.1,
  acceleration: 4.9, topSpeed: 275, price: p(219900), aspiration: 'Turbo'
}
specs['Mercedes-Benz|SL|2026|SL 63 AMG 4MATIC+'] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 430, torque: 900, weight: 1990, seats: 2,
  fc: 12.9, fh: 9.9, fx: 18.2,
  acceleration: 3.6, topSpeed: 275, price: p(459900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Mercedes-Benz|AMG GT|2026|AMG GT 55 4MATIC+'] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 320, torque: 700, weight: 1870, seats: 4,
  fc: 12.2, fh: 9.3, fx: 17.1,
  acceleration: 4.0, topSpeed: 290, price: p(279900), aspiration: 'Turbo'
}
specs['Mercedes-Benz|AMG GT|2026|AMG GT 63 S E Performance'] = {
  engine: '4.0L V8 PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 620, torque: 1400, weight: 2370, seats: 4,
  fc: 2.4, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 316, price: p(499900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA VELLFIRE 2026 (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Vellfire|2026|Executive'] = {
  engine: '2.5L I4 Hybrid Atkinson', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 134, torque: 221, weight: 2160, seats: 7,
  fc: 7.0, fh: 5.6, fx: 10.0,
  acceleration: 9.5, topSpeed: 180, price: p(149990), aspiration: 'NA'
}
specs['Toyota|Vellfire|2026|Executive Lounge'] = {
  engine: '2.5L I4 Hybrid Atkinson', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'E-Four AWD', transmission: 'e-CVT',
  power: 134, torque: 221, weight: 2195, seats: 7,
  fc: 7.3, fh: 5.8, fx: 10.4,
  acceleration: 9.7, topSpeed: 180, price: p(167990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA CENTURY 2026 — Century SUV (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Century|2026|Century'] = {
  engine: '3.5L V6 PHEV', fuelType: 'PHEV', displacement: 3456,
  cylinders: 6, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 305, torque: 335, weight: 2490, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 180, price: p(519900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA LAND CRUISER 70 2026 (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Land Cruiser 70|2026|WorkMate'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2045, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.0, topSpeed: 175, price: p(67990), aspiration: 'Turbo'
}
specs['Toyota|Land Cruiser 70|2026|GX'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2065, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.0, topSpeed: 175, price: p(74990), aspiration: 'Turbo'
}
specs['Toyota|Land Cruiser 70|2026|GXL'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2080, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.2, topSpeed: 175, price: p(80990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A5 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A5|2026|45 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 195, torque: 370, weight: 1680, seats: 5,
  fc: 8.0, fh: 6.0, fx: 11.3,
  acceleration: 6.2, topSpeed: 250, price: p(79900), aspiration: 'Turbo'
}
specs['Audi|A5|2026|S5'] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 260, torque: 500, weight: 1770, seats: 5,
  fc: 9.0, fh: 6.9, fx: 12.8,
  acceleration: 4.5, topSpeed: 250, price: p(109900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A7 2026 — PHEV variant (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A7|2026|50 TFSI e quattro'] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 340, torque: 670, weight: 2175, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250, price: p(159900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A8 2026 — PHEV L variant (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A8|2026|60 TFSI e quattro L'] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 340, torque: 700, weight: 2350, seats: 5,
  fc: 2.0, fh: null, fx: null,
  acceleration: 4.1, topSpeed: 250, price: p(289900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// RENAULT AUSTRAL 2026 (AU)
// ─────────────────────────────────────────────────────────────
specs['Renault|Austral|2026|Intens'] = {
  engine: '1.3 TCe', fuelType: 'petrol', displacement: 1332,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed EDC',
  power: 116, torque: 270, weight: 1440, seats: 5,
  fc: 7.1, fh: 5.5, fx: 10.0,
  acceleration: 9.8, topSpeed: 185, price: p(44990), aspiration: 'Turbo'
}
specs['Renault|Austral|2026|Iconic'] = {
  engine: '1.3 TCe', fuelType: 'petrol', displacement: 1332,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed EDC',
  power: 116, torque: 270, weight: 1450, seats: 5,
  fc: 7.1, fh: 5.5, fx: 10.0,
  acceleration: 9.8, topSpeed: 185, price: p(49990), aspiration: 'Turbo'
}
specs['Renault|Austral|2026|E-Tech Iconic'] = {
  engine: '1.2 TCe E-Tech Full Hybrid', fuelType: 'hybrid', displacement: 1199,
  cylinders: 4, drivetrain: 'FWD', transmission: 'Multi-Mode Hybrid',
  power: 147, torque: 230, weight: 1660, seats: 5,
  fc: 5.7, fh: 4.5, fx: 8.0,
  acceleration: 9.0, topSpeed: 180, price: p(56990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// RENAULT SCENIC 2026 — E-Tech Electric (AU)
// ─────────────────────────────────────────────────────────────
specs['Renault|Scenic|2026|E-Tech Intens'] = {
  engine: 'Electric 60 kWh', fuelType: 'electric',
  battery: '60 kWh', range: 430,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 125, torque: 300, weight: 1840, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.4, topSpeed: 150, price: p(61990), aspiration: 'Electric'
}
specs['Renault|Scenic|2026|E-Tech Iconic'] = {
  engine: 'Electric 87 kWh', fuelType: 'electric',
  battery: '87 kWh', range: 600,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 160, torque: 300, weight: 1950, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.4, topSpeed: 170, price: p(71990), aspiration: 'Electric'
}
specs['Renault|Scenic|2026|E-Tech LR Iconic'] = {
  engine: 'Electric 87 kWh', fuelType: 'electric',
  battery: '87 kWh', range: 620,
  drivetrain: 'FWD', transmission: '1sp auto',
  power: 160, torque: 300, weight: 1970, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 170, price: p(77990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement148.json', JSON.stringify(out, null, 2))
console.log(`supplement148.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
