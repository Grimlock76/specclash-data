'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// SUBARU CROSSTREK 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Subaru|Crosstrek|2026|2.0i'] = {
  engine: '2.0L Boxer', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'FWD', transmission: 'Lineartronic CVT',
  power: 114, torque: 196, weight: 1440, seats: 5,
  fc: 7.0, fh: 5.5, fx: 9.9,
  acceleration: 10.8, topSpeed: 190, price: p(33990)
}
specs['Subaru|Crosstrek|2026|2.0i-L'] = {
  engine: '2.0L Boxer', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'FWD', transmission: 'Lineartronic CVT',
  power: 114, torque: 196, weight: 1445, seats: 5,
  fc: 7.0, fh: 5.5, fx: 9.9,
  acceleration: 10.8, topSpeed: 190, price: p(37990)
}
specs['Subaru|Crosstrek|2026|2.5i Premium'] = {
  engine: '2.5L Boxer', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Lineartronic CVT',
  power: 136, torque: 241, weight: 1545, seats: 5,
  fc: 7.7, fh: 6.1, fx: 10.8,
  acceleration: 10.4, topSpeed: 195, price: p(43990)
}
specs['Subaru|Crosstrek|2026|2.5i Sport'] = {
  engine: '2.5L Boxer', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Lineartronic CVT',
  power: 136, torque: 241, weight: 1555, seats: 5,
  fc: 7.7, fh: 6.1, fx: 10.8,
  acceleration: 10.4, topSpeed: 195, price: p(47990)
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN T-CROSS 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Volkswagen|T-Cross|2026|85TSI Life'] = {
  engine: '1.0 TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 85, torque: 200, weight: 1195, seats: 5,
  fc: 6.1, fh: 4.7, fx: 8.6,
  acceleration: 10.7, topSpeed: 185, price: p(37990)
}
specs['Volkswagen|T-Cross|2026|110TSI Style'] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1225, seats: 5,
  fc: 6.5, fh: 5.0, fx: 9.1,
  acceleration: 9.6, topSpeed: 200, price: p(44490)
}
specs['Volkswagen|T-Cross|2026|110TSI R-Line'] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1235, seats: 5,
  fc: 6.5, fh: 5.0, fx: 9.1,
  acceleration: 9.6, topSpeed: 200, price: p(47490)
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN ID.BUZZ 2026 — completing the lineup (AU)
// ─────────────────────────────────────────────────────────────
specs['Volkswagen|ID.Buzz|2026|Pro'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '79 kWh', range: 425,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 150, torque: 310, weight: 2564, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.9, topSpeed: 145, price: p(75990)
}
specs['Volkswagen|ID.Buzz|2026|Pro LWB'] = {
  engine: 'Electric Single Motor', fuelType: 'electric',
  battery: '79 kWh', range: 428,
  drivetrain: 'RWD', transmission: '1sp auto',
  power: 150, torque: 310, weight: 2741, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 7.9, topSpeed: 145, price: p(79990)
}
specs['Volkswagen|ID.Buzz|2026|GTX'] = {
  engine: 'Electric Dual Motor', fuelType: 'electric',
  battery: '79 kWh', range: 400,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 250, torque: 560, weight: 2716, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 160, price: p(88990)
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DEFENDER 2026 — 90 V8, 110 P400e (AU)
// ─────────────────────────────────────────────────────────────
specs['Land Rover|Defender|2026|90 V8'] = {
  engine: '4.4L V8 Biturbo', fuelType: 'petrol', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 386, torque: 750, weight: 2455, seats: 5,
  fc: 16.6, fh: 12.9, fx: 22.7,
  acceleration: 4.9, topSpeed: 240, price: p(209900)
}
specs['Land Rover|Defender|2026|110 P400e'] = {
  engine: '2.0L I4 PHEV', fuelType: 'PHEV', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 294, torque: 640, weight: 2485, seats: 7,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 209, price: p(119900)
}

// ─────────────────────────────────────────────────────────────
// PORSCHE PANAMERA 2026 — Sport Turismo variants (AU)
// ─────────────────────────────────────────────────────────────
specs['Porsche|Panamera|2026|Sport Turismo'] = {
  engine: '2.9L V6 Biturbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 294, torque: 520, weight: 1985, seats: 5,
  fc: 10.2, fh: 7.8, fx: 14.5,
  acceleration: 4.0, topSpeed: 290, price: p(239000)
}
specs['Porsche|Panamera|2026|4S Sport Turismo'] = {
  engine: '2.9L V6 Biturbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 324, torque: 550, weight: 2005, seats: 5,
  fc: 10.5, fh: 8.0, fx: 14.9,
  acceleration: 3.7, topSpeed: 296, price: p(289000)
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET CORVETTE 2026 — Stingray, Z06 (AU)
// ─────────────────────────────────────────────────────────────
specs['Chevrolet|Corvette|2026|Stingray'] = {
  engine: '6.2L V8 LT2', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 370, torque: 637, weight: 1530, seats: 2,
  fc: 12.7, fh: 9.8, fx: 17.7,
  acceleration: 3.5, topSpeed: 290, price: p(99990)
}
specs['Chevrolet|Corvette|2026|Z06'] = {
  engine: '5.5L Flat-Plane V8 LT6', fuelType: 'petrol', displacement: 5468,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 500, torque: 623, weight: 1570, seats: 2,
  fc: 16.1, fh: 12.5, fx: 22.2,
  acceleration: 2.9, topSpeed: 311, price: p(199990)
}

// ─────────────────────────────────────────────────────────────
// AUDI RS6 2026 — RS6 Avant (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|RS6|2026|RS6 Avant'] = {
  engine: '4.0 TFSI V8 biturbo MHEV', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 441, torque: 800, weight: 2200, seats: 5,
  fc: 11.7, fh: 8.9, fx: 16.5,
  acceleration: 3.6, topSpeed: 250, price: p(229900)
}

// ─────────────────────────────────────────────────────────────
// AUDI A6 ALLROAD 2026 — 50 TDI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A6 allroad|2026|50 TDI quattro'] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 210, torque: 620, weight: 2075, seats: 5,
  fc: 7.5, fh: 5.8, fx: 10.5,
  acceleration: 5.2, topSpeed: 250, price: p(147900)
}

// ─────────────────────────────────────────────────────────────
// AUDI A6 2026 — 55 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|A6|2026|55 TFSI quattro'] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 250, torque: 500, weight: 1870, seats: 5,
  fc: 9.2, fh: 7.0, fx: 13.2,
  acceleration: 5.1, topSpeed: 250, price: p(122900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q3 2026 — 40 TFSI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q3|2026|40 TFSI quattro'] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 132, torque: 320, weight: 1560, seats: 5,
  fc: 8.4, fh: 6.4, fx: 11.5,
  acceleration: 7.9, topSpeed: 209, price: p(55900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q5 SPORTBACK 2026 — SQ5 Sportback (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q5 Sportback|2026|SQ5 Sportback'] = {
  engine: '3.0 TFSI V6', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 270, torque: 600, weight: 1985, seats: 5,
  fc: 9.8, fh: 7.5, fx: 14.0,
  acceleration: 4.9, topSpeed: 250, price: p(112900)
}

// ─────────────────────────────────────────────────────────────
// AUDI Q7 2026 — 45 TDI quattro (AU)
// ─────────────────────────────────────────────────────────────
specs['Audi|Q7|2026|45 TDI quattro'] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 170, torque: 600, weight: 2170, seats: 7,
  fc: 7.3, fh: 5.6, fx: 10.1,
  acceleration: 6.5, topSpeed: 230, price: p(107900)
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ G-CLASS 2026 — G 63 AMG (AU)
// ─────────────────────────────────────────────────────────────
specs['Mercedes-Benz|G-Class|2026|G 63 AMG'] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 430, torque: 850, weight: 2490, seats: 5,
  fc: 14.4, fh: 11.2, fx: 20.0,
  acceleration: 4.5, topSpeed: 220, price: p(419000)
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT 2026 — AMG GT 43 (AU)
// ─────────────────────────────────────────────────────────────
specs['Mercedes-Benz|AMG GT|2026|AMG GT 43'] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 320, torque: 500, weight: 1765, seats: 4,
  fc: 11.0, fh: 8.6, fx: 15.5,
  acceleration: 4.6, topSpeed: 250, price: p(199900)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement147.json', JSON.stringify(out, null, 2))
console.log(`supplement147.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
