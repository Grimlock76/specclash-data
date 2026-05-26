'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE MACAN & PANAMERA — 2017 (G2 Sport Turismo new)
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Macan|2017|Macan`] = {
  engine: '2.0L I4 Turbo 718', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed PDK',
  power: 185, torque: 370, weight: 1865, seats: 5,
  fc: 9.4, fh: 7.3, fx: 12.6,
  acceleration: 6.7, topSpeed: 229, price: p(74900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2017|Sport Turismo`] = {
  engine: '3.0L V6 Turbo', fuelType: 'petrol', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 243, torque: 450, weight: 1990, seats: 5,
  fc: 9.0, fh: 6.9, fx: 12.2,
  acceleration: 5.4, topSpeed: 270, price: p(279900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2017|4S Sport Turismo`] = {
  engine: '2.9L V6 Biturbo', fuelType: 'petrol', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 325, torque: 550, weight: 2055, seats: 5,
  fc: 10.4, fh: 8.0, fx: 14.1,
  acceleration: 4.5, topSpeed: 289, price: p(329900), aspiration: 'Turbo'
}
specs[`Porsche|Panamera|2017|Turbo S E-Hybrid Sport Turismo`] = {
  engine: '4.0L V8 Biturbo PHEV', fuelType: 'PHEV', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 500, torque: 870, weight: 2395, seats: 5,
  fc: 3.0, fh: null, fx: null,
  acceleration: 3.4, topSpeed: 310, price: p(549900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SEAT IBIZA — 2017 (KJ gen new): 1.0 TSI
// ─────────────────────────────────────────────────────────────
specs[`SEAT|Ibiza|2017|1.0 TSI`] = {
  engine: '1.0L I3 Turbo TSI DKLA', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 85, torque: 200, weight: 1100, seats: 5,
  fc: 5.3, fh: 4.2, fx: 7.0,
  acceleration: 10.3, topSpeed: 196, price: p(21490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SSANGYONG REXTON — 2017: EX, Ultimate
// ─────────────────────────────────────────────────────────────
specs[`SsangYong|Rexton|2017|EX`] = {
  engine: '2.2L I4 Turbo Diesel e-XDi220', fuelType: 'diesel', displacement: 2157,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 133, torque: 420, weight: 2095, seats: 7,
  fc: 9.3, fh: 7.3, fx: 12.3,
  acceleration: 11.5, topSpeed: 180, price: p(39990), aspiration: 'Turbo'
}
specs[`SsangYong|Rexton|2017|Ultimate`] = {
  engine: '2.2L I4 Turbo Diesel e-XDi220', fuelType: 'diesel', displacement: 2157,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 133, torque: 420, weight: 2110, seats: 7,
  fc: 9.3, fh: 7.3, fx: 12.3,
  acceleration: 11.5, topSpeed: 180, price: p(47990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU IMPREZA & XV — 2017 (new gen GK/GT)
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Impreza|2017|2.0i-S`] = {
  engine: '2.0L H4 NA FB20', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 115, torque: 196, weight: 1425, seats: 5,
  fc: 7.8, fh: 6.2, fx: 10.4,
  acceleration: 9.5, topSpeed: 185, price: p(29990), aspiration: 'NA'
}
specs[`Subaru|XV|2017|2.0i Premium`] = {
  engine: '2.0L H4 NA FB20', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 115, torque: 196, weight: 1515, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.6,
  acceleration: 9.5, topSpeed: 195, price: p(30990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// SUZUKI S-CROSS & SWIFT — 2017 (Boosterjet)
// ─────────────────────────────────────────────────────────────
specs[`Suzuki|S-Cross|2017|GLX Turbo`] = {
  engine: '1.4L I4 Turbo Boosterjet K14C', fuelType: 'petrol', displacement: 1373,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 103, torque: 220, weight: 1180, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 10.0, topSpeed: 185, price: p(30990), aspiration: 'Turbo'
}
specs[`Suzuki|Swift|2017|GLX Turbo`] = {
  engine: '1.0L I3 Turbo Boosterjet K10C', fuelType: 'petrol', displacement: 998,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 82, torque: 160, weight: 920, seats: 5,
  fc: 4.7, fh: 3.7, fx: 6.1,
  acceleration: 10.7, topSpeed: 180, price: p(24490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN AMAROK & GOLF — 2017
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Amarok|2017|TDI580 Ultimate`] = {
  engine: '3.0L V6 Turbo Diesel TDI', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto ZF',
  power: 190, torque: 580, weight: 2160, seats: 5,
  fc: 9.1, fh: 7.2, fx: 12.1,
  acceleration: 7.3, topSpeed: 211, price: p(76990), aspiration: 'Turbo'
}
specs[`Volkswagen|Golf|2017|70TSI Trendline`] = {
  engine: '1.0L I3 Turbo MPI TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '5-speed manual',
  power: 70, torque: 175, weight: 1280, seats: 5,
  fc: 5.5, fh: 4.4, fx: 7.3,
  acceleration: 12.4, topSpeed: 182, price: p(22990), aspiration: 'Turbo'
}
specs[`Volkswagen|Golf|2017|110TSI Comfortline`] = {
  engine: '1.4L I4 Turbo TSI', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1345, seats: 5,
  fc: 5.8, fh: 4.6, fx: 7.7,
  acceleration: 8.5, topSpeed: 210, price: p(29990), aspiration: 'Turbo'
}
specs[`Volkswagen|Golf|2017|GTI Performance`] = {
  engine: '2.0L I4 Turbo TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
  power: 180, torque: 380, weight: 1405, seats: 5,
  fc: 7.5, fh: 5.9, fx: 9.9,
  acceleration: 5.9, topSpeed: 250, price: p(53990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC60 — 2017 (2nd gen SPA new)
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC60|2017|T5 Momentum`] = {
  engine: '2.0L I4 Turbo T5 B4204T23', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 187, torque: 350, weight: 1899, seats: 5,
  fc: 7.8, fh: 6.1, fx: 10.5,
  acceleration: 6.5, topSpeed: 230, price: p(56990), aspiration: 'Turbo'
}
specs[`Volvo|XC60|2017|T5 R-Design`] = {
  engine: '2.0L I4 Turbo T5 B4204T23', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 187, torque: 350, weight: 1945, seats: 5,
  fc: 8.0, fh: 6.2, fx: 10.8,
  acceleration: 6.7, topSpeed: 230, price: p(63990), aspiration: 'Turbo'
}
specs[`Volvo|XC60|2017|T5 Inscription`] = {
  engine: '2.0L I4 Turbo T5 B4204T23', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 187, torque: 350, weight: 1950, seats: 5,
  fc: 8.0, fh: 6.2, fx: 10.8,
  acceleration: 6.7, topSpeed: 230, price: p(67990), aspiration: 'Turbo'
}
specs[`Volvo|XC60|2017|T8 Twin Engine AWD`] = {
  engine: '2.0L I4 Turbo+SC + Electric PHEV', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 292, torque: 640, weight: 2215, seats: 5,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 210, price: p(89990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement207.json', JSON.stringify(out, null, 2))
console.log(`supplement207.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
