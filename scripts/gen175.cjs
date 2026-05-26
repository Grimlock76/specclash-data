'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2023 trim gaps
// Carrera (base RWD saloon), Dakar, GT3
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2023|Carrera`] = {
  engine: '3.0L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed PDK',
  power: 283, torque: 450, weight: 1415, seats: 2,
  fc: 10.3, fh: 7.4, fx: 14.9,
  acceleration: 4.0, topSpeed: 293, price: p(245200), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|Dakar`] = {
  engine: '3.0L Flat-6 Twin-Turbo', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 283, torque: 450, weight: 1605, seats: 2,
  fc: 12.6, fh: 9.4, fx: 17.6,
  acceleration: 3.4, topSpeed: 240, price: p(349000), aspiration: 'Turbo'
}
specs[`Porsche|911|2023|GT3`] = {
  engine: '4.0L Flat-6 NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 375, torque: 470, weight: 1418, seats: 2,
  fc: 13.0, fh: 9.6, fx: 18.0,
  acceleration: 3.4, topSpeed: 318, price: p(453000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — 2023 trim gaps
// Taycan 4S, Taycan Sport Turismo (AWD wagon)
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Taycan|2023|Taycan 4S`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 418,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 320, torque: 640, weight: 2195, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.0, topSpeed: 250, price: p(232000), aspiration: 'Electric'
}
specs[`Porsche|Taycan|2023|Taycan Sport Turismo`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 400,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 350, torque: 500, weight: 2215, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 230, price: p(180000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES S-CLASS — 2023 trim gaps
// S 350d (diesel), S 500 (I6 petrol MHEV)
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|S-Class|2023|S 350d`] = {
  engine: '3.0L I6 Diesel MHEV', fuelType: 'diesel', displacement: 2999,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 210, torque: 600, weight: 2165, seats: 5,
  fc: 7.4, fh: 5.7, fx: 10.5,
  acceleration: 6.4, topSpeed: 250, price: p(289900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|S-Class|2023|S 500`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 320, torque: 520, weight: 2195, seats: 5,
  fc: 10.1, fh: 7.8, fx: 14.4,
  acceleration: 4.9, topSpeed: 250, price: p(299900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES AMG GT — 2023 trim gaps
// AMG GT 43, AMG GT 55, AMG GT 63 (4-door X290 GT)
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2023|AMG GT 43`] = {
  engine: '2.0L I4 Turbo MHEV AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 270, torque: 500, weight: 1920, seats: 4,
  fc: 9.6, fh: 7.4, fx: 13.7,
  acceleration: 4.6, topSpeed: 270, price: p(199900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2023|AMG GT 55`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed AMG Speedshift',
  power: 320, torque: 700, weight: 1870, seats: 4,
  fc: 12.0, fh: 9.2, fx: 16.9,
  acceleration: 4.0, topSpeed: 290, price: p(249900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|AMG GT|2023|AMG GT 63`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 430, torque: 800, weight: 2000, seats: 4,
  fc: 12.3, fh: 9.5, fx: 17.2,
  acceleration: 3.2, topSpeed: 315, price: p(379900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA CR-V — 2023 new trims (6th gen launch)
// VTi-L petrol, RS e:HEV, e:HEV VTi-L, e:HEV VTi-LX, e:PHEV
// ─────────────────────────────────────────────────────────────
specs[`Honda|CR-V|2023|VTi-L`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 140, torque: 240, weight: 1500, seats: 5,
  fc: 7.2, fh: 6.0, fx: 9.0,
  acceleration: 9.5, topSpeed: 180, price: p(49900), aspiration: 'Turbo'
}
specs[`Honda|CR-V|2023|RS e:HEV`] = {
  engine: '2.0L I4 Atkinson e:HEV', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 135, torque: 335, weight: 1605, seats: 5,
  fc: 5.0, fh: 4.3, fx: 6.2,
  acceleration: 8.2, topSpeed: 180, price: p(56900), aspiration: 'NA'
}
specs[`Honda|CR-V|2023|e:HEV VTi-L`] = {
  engine: '2.0L I4 Atkinson e:HEV', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 135, torque: 335, weight: 1600, seats: 5,
  fc: 5.0, fh: 4.3, fx: 6.2,
  acceleration: 8.4, topSpeed: 180, price: p(53900), aspiration: 'NA'
}
specs[`Honda|CR-V|2023|e:HEV VTi-LX`] = {
  engine: '2.0L I4 Atkinson e:HEV AWD', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 135, torque: 335, weight: 1660, seats: 5,
  fc: 5.5, fh: 4.7, fx: 6.9,
  acceleration: 8.2, topSpeed: 180, price: p(58900), aspiration: 'NA'
}
specs[`Honda|CR-V|2023|e:PHEV`] = {
  engine: '2.0L I4 e:PHEV', fuelType: 'PHEV', displacement: 1993,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 135, torque: 335, weight: 1820, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 175, price: p(67900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// NISSAN X-TRAIL — 2023 e-Power trims
// ST/ST-L/Ti e-Power (FWD) + Ti-L e-4ORCE (AWD dual motor)
// ─────────────────────────────────────────────────────────────
specs[`Nissan|X-Trail|2023|ST e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 330, weight: 1745, seats: 5,
  fc: 6.2, fh: 5.2, fx: 7.8,
  acceleration: 7.5, topSpeed: 170, price: p(46990), aspiration: 'Turbo'
}
specs[`Nissan|X-Trail|2023|ST-L e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 330, weight: 1745, seats: 5,
  fc: 6.2, fh: 5.2, fx: 7.8,
  acceleration: 7.5, topSpeed: 170, price: p(52490), aspiration: 'Turbo'
}
specs[`Nissan|X-Trail|2023|Ti e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 330, weight: 1745, seats: 5,
  fc: 6.2, fh: 5.2, fx: 7.8,
  acceleration: 7.5, topSpeed: 170, price: p(57990), aspiration: 'Turbo'
}
specs[`Nissan|X-Trail|2023|Ti-L e-4ORCE`] = {
  engine: '1.5L I3 VC-Turbo e-POWER e-4ORCE', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 150, torque: 330, weight: 1895, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.2,
  acceleration: 6.0, topSpeed: 180, price: p(63990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RX — 2023 trim gap: RX 500h (base performance hybrid)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|RX|2023|RX 500h`] = {
  engine: '2.4L I4 Turbo Hybrid AWD', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 272, torque: 460, weight: 2105, seats: 5,
  fc: 7.0, fh: 5.5, fx: 9.5,
  acceleration: 6.0, topSpeed: 200, price: p(96990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement175.json', JSON.stringify(out, null, 2))
console.log(`supplement175.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
