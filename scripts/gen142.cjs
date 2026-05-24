'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// SKODA SUPERB 2026 — Style / Sportline (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Superb|2026|Style'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 150, torque: 310, weight: 1490, seats: 5,
  fc: 7.5, fh: 5.6, fx: 10.6,
  acceleration: 8.3, topSpeed: 228, price: p(51990)
}
specs['Skoda|Superb|2026|Sportline'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 195, torque: 400, weight: 1640, seats: 5,
  fc: 8.0, fh: 5.9, fx: 11.3,
  acceleration: 7.0, topSpeed: 248, price: p(59990)
}

// ─────────────────────────────────────────────────────────────
// SKODA KAROQ 2026 — Style / Sportline (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Karoq|2026|Style'] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1382, seats: 5,
  fc: 6.3, fh: 4.7, fx: 8.9,
  acceleration: 9.2, topSpeed: 210, price: p(40990)
}
specs['Skoda|Karoq|2026|Sportline'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 140, torque: 320, weight: 1534, seats: 5,
  fc: 7.5, fh: 5.6, fx: 10.6,
  acceleration: 7.6, topSpeed: 217, price: p(47990)
}

// ─────────────────────────────────────────────────────────────
// SKODA KODIAQ 2023 — Style / Sportline (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Kodiaq|2023|Style'] = {
  engine: '2.0 TDI', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 140, torque: 340, weight: 1650, seats: 7,
  fc: 6.0, fh: 4.6, fx: 7.9,
  acceleration: 9.5, topSpeed: 206, price: p(46990)
}
specs['Skoda|Kodiaq|2023|Sportline'] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 180, torque: 370, weight: 1700, seats: 7,
  fc: 8.3, fh: 6.1, fx: 11.7,
  acceleration: 7.8, topSpeed: 215, price: p(54990)
}

// ─────────────────────────────────────────────────────────────
// SKODA FABIA 2026 — Style / Monte Carlo (AU)
// ─────────────────────────────────────────────────────────────
specs['Skoda|Fabia|2026|Style'] = {
  engine: '1.0 TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 81, torque: 175, weight: 1175, seats: 5,
  fc: 5.8, fh: 4.3, fx: 8.2,
  acceleration: 9.9, topSpeed: 192, price: p(31990)
}
specs['Skoda|Fabia|2026|Monte Carlo'] = {
  engine: '1.0 TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 81, torque: 175, weight: 1185, seats: 5,
  fc: 5.8, fh: 4.3, fx: 8.2,
  acceleration: 9.9, topSpeed: 192, price: p(35990)
}

// ─────────────────────────────────────────────────────────────
// LDV T60 2026 — S / Luxe (AU)
// ─────────────────────────────────────────────────────────────
specs['LDV|T60|2026|S'] = {
  engine: '2.0L Turbo Diesel', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed manual',
  power: 120, torque: 400, weight: 2130, seats: 5,
  fc: 9.2, fh: 7.1, fx: 12.1,
  acceleration: 11.5, topSpeed: 175, price: p(35590)
}
specs['LDV|T60|2026|Luxe'] = {
  engine: '2.0L Turbo Diesel', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed auto',
  power: 120, torque: 400, weight: 2175, seats: 5,
  fc: 9.5, fh: 7.3, fx: 12.5,
  acceleration: 11.8, topSpeed: 172, price: p(40590)
}

// ─────────────────────────────────────────────────────────────
// RENAULT CLIO 2026 — Intens / RS Line (AU)
// ─────────────────────────────────────────────────────────────
specs['Renault|Clio|2026|Intens'] = {
  engine: '1.0 TCe', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 66, torque: 160, weight: 1109, seats: 5,
  fc: 5.7, fh: 4.2, fx: 8.0,
  acceleration: 12.0, topSpeed: 175, price: p(34990)
}
specs['Renault|Clio|2026|RS Line'] = {
  engine: '1.0L Turbo', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: 'CVT',
  power: 74, torque: 160, weight: 1270, seats: 5,
  fc: 5.6, fh: 4.8, fx: 6.8,
  acceleration: 11.5, topSpeed: 175, price: p(34190)
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET CORVETTE 2025 — Stingray / Z06 (AU)
// ─────────────────────────────────────────────────────────────
specs['Chevrolet|Corvette|2025|Stingray'] = {
  engine: '6.2L V8 LT2 Mid-Engine', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 370, torque: 637, weight: 1527, seats: 2,
  fc: 16.8, fh: 10.2, fx: 13.8,
  acceleration: 2.9, topSpeed: 312, price: p(99990)
}
specs['Chevrolet|Corvette|2025|Z06'] = {
  engine: '5.5L V8 LT6 Flat-Plane', fuelType: 'petrol', displacement: 5500,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 500, torque: 623, weight: 1571, seats: 2,
  fc: 20.3, fh: 12.4, fx: 16.7,
  acceleration: 2.6, topSpeed: 312, price: p(199990)
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET EQUINOX 2024 — L / LT (AU)
// ─────────────────────────────────────────────────────────────
specs['Chevrolet|Equinox|2024|L'] = {
  engine: '1.5L I4 Turbo', fuelType: 'petrol', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed automatic',
  power: 130, torque: 260, weight: 1640, seats: 5,
  fc: 9.5, fh: 6.5, fx: 8.5,
  acceleration: 9.5, topSpeed: 180, price: p(38990)
}
specs['Chevrolet|Equinox|2024|LT'] = {
  engine: '1.5L I4 Turbo', fuelType: 'petrol', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed automatic',
  power: 130, torque: 260, weight: 1660, seats: 5,
  fc: 9.5, fh: 6.5, fx: 8.5,
  acceleration: 9.5, topSpeed: 180, price: p(43990)
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET TRAVERSE 2024 — LS / LT (AU)
// ─────────────────────────────────────────────────────────────
specs['Chevrolet|Traverse|2024|LS'] = {
  engine: '3.6L V6 DI', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'FWD', transmission: '9-speed automatic',
  power: 224, torque: 369, weight: 2050, seats: 7,
  fc: 12.5, fh: 8.5, fx: 11.0,
  acceleration: 8.5, topSpeed: 185, price: p(56990)
}
specs['Chevrolet|Traverse|2024|LT'] = {
  engine: '3.6L V6 DI', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'FWD', transmission: '9-speed automatic',
  power: 224, torque: 369, weight: 2070, seats: 7,
  fc: 12.5, fh: 8.5, fx: 11.0,
  acceleration: 8.5, topSpeed: 185, price: p(61990)
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG 2024 — Fastback EcoBoost (AU)
// ─────────────────────────────────────────────────────────────
specs['Ford|Mustang|2024|Fastback EcoBoost'] = {
  engine: '2.3L I4 EcoBoost High Performance', fuelType: 'petrol', displacement: 2300,
  cylinders: 4, drivetrain: 'RWD', transmission: '10-speed auto',
  power: 232, torque: 475, weight: 1620, seats: 4,
  fc: 10.0, fh: 7.0, fx: 8.4,
  acceleration: 5.3, topSpeed: 250, price: p(58990)
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST 2024 — UB Sport (AU)
// ─────────────────────────────────────────────────────────────
specs['Ford|Everest|2024|UB Sport'] = {
  engine: '2.0L Bi-Turbo Diesel I4', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: '4WD', transmission: '10-speed auto',
  power: 154, torque: 500, weight: 2300, seats: 7,
  fc: 9.0, fh: 7.2, fx: 7.9,
  acceleration: 10.8, topSpeed: 178, price: p(69990)
}

// ─────────────────────────────────────────────────────────────
// FORD ESCAPE 2023 — ZH Titanium (AU)
// ─────────────────────────────────────────────────────────────
specs['Ford|Escape|2023|ZH Titanium'] = {
  engine: '2.0L EcoBoost Turbo I4', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 387, weight: 1676, seats: 5,
  fc: 9.5, fh: 6.8, fx: 7.9,
  acceleration: 7.8, topSpeed: 210, price: p(50990)
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN ID.7 2026 — Pro S (AU)
// ─────────────────────────────────────────────────────────────
specs['Volkswagen|ID.7|2026|Pro S'] = {
  engine: 'Electric', fuelType: 'electric',
  battery: '91 kWh', range: 700,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 210, torque: 545, weight: 2356, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 180, price: p(109990)
}

// ─────────────────────────────────────────────────────────────
// AUDI S-CARS — S3 2026, RS3 2024, S4 2026, S5 2026, S6 2026 (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|S3|2026|S3'] = {
  engine: '2.0 TFSI quattro', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 245, torque: 400, weight: 1465, seats: 5,
  fc: 9.1, fh: 6.7, fx: 12.8,
  acceleration: 4.8, topSpeed: 250, price: p(70900)
}
specs['Audi|RS3|2024|RS3'] = {
  engine: '2.5 TFSI', fuelType: 'petrol', displacement: 2480,
  cylinders: 5, drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 294, torque: 500, weight: 1570, seats: 5,
  fc: 10.5, fh: 7.8, fx: 14.8,
  acceleration: 3.8, topSpeed: 290, price: p(84990)
}
specs['Audi|S4|2026|S4'] = {
  engine: '3.0 TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 260, torque: 500, weight: 1705, seats: 5,
  fc: 8.4, fh: 6.2, fx: 11.8,
  acceleration: 4.7, topSpeed: 250, price: p(122900)
}
specs['Audi|S5|2026|S5'] = {
  engine: '3.0 TFSI', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 260, torque: 500, weight: 1720, seats: 4,
  fc: 10.0, fh: 7.4, fx: 14.1,
  acceleration: 4.7, topSpeed: 250, price: p(112900)
}
specs['Audi|S6|2026|S6'] = {
  engine: '2.9 V6 TFSI biturbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 324, torque: 600, weight: 1985, seats: 5,
  fc: 9.5, fh: 7.0, fx: 13.4,
  acceleration: 4.5, topSpeed: 250, price: p(180000)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement142.json', JSON.stringify(out, null, 2))
console.log(`supplement142.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
