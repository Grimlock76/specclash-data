'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHEVROLET SILVERADO — 2019: WT, Custom, RST, Trail Boss, ZR2
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Silverado|2019|WT`] = {
  engine: '5.3L V8 NA EcoTec3', fuelType: 'petrol', displacement: 5328,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 265, torque: 520, weight: 2176, seats: 5,
  fc: 14.0, fh: 10.4, fx: 18.9,
  acceleration: 7.5, topSpeed: 185, price: p(59990), aspiration: 'NA'
}
specs[`Chevrolet|Silverado|2019|Custom`] = {
  engine: '5.3L V8 NA EcoTec3', fuelType: 'petrol', displacement: 5328,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 265, torque: 520, weight: 2186, seats: 5,
  fc: 14.0, fh: 10.4, fx: 18.9,
  acceleration: 7.5, topSpeed: 185, price: p(69990), aspiration: 'NA'
}
specs[`Chevrolet|Silverado|2019|RST`] = {
  engine: '5.3L V8 NA EcoTec3', fuelType: 'petrol', displacement: 5328,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 265, torque: 520, weight: 2196, seats: 5,
  fc: 14.0, fh: 10.4, fx: 18.9,
  acceleration: 7.5, topSpeed: 185, price: p(79990), aspiration: 'NA'
}
specs[`Chevrolet|Silverado|2019|Trail Boss`] = {
  engine: '5.3L V8 NA EcoTec3', fuelType: 'petrol', displacement: 5328,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 265, torque: 520, weight: 2210, seats: 5,
  fc: 14.5, fh: 10.8, fx: 19.6,
  acceleration: 7.8, topSpeed: 180, price: p(89990), aspiration: 'NA'
}
specs[`Chevrolet|Silverado|2019|ZR2`] = {
  engine: '6.2L V8 NA EcoTec3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 313, torque: 624, weight: 2450, seats: 5,
  fc: 15.5, fh: 11.5, fx: 21.0,
  acceleration: 6.5, topSpeed: 185, price: p(129990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG — 2019: GT350, Shelby GT500
// ─────────────────────────────────────────────────────────────
specs[`Ford|Mustang|2019|GT350`] = {
  engine: '5.2L V8 NA Voodoo Flat-Plane', fuelType: 'petrol', displacement: 5163,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 381, torque: 582, weight: 1655, seats: 4,
  fc: 15.0, fh: 10.9, fx: 20.9,
  acceleration: 4.3, topSpeed: 290, price: p(129990), aspiration: 'NA'
}
specs[`Ford|Mustang|2019|Shelby GT500`] = {
  engine: '5.2L V8 Supercharged Predator', fuelType: 'petrol', displacement: 5163,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 530, torque: 847, weight: 1837, seats: 4,
  fc: 16.2, fh: 11.8, fx: 22.6,
  acceleration: 3.5, topSpeed: 290, price: p(179990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// GENESIS G80 — 2019: 3.3T Sport, 5.0
// ─────────────────────────────────────────────────────────────
specs[`Genesis|G80|2019|3.3T Sport`] = {
  engine: '3.3L V6 Biturbo Lambda II', fuelType: 'petrol', displacement: 3342,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 272, torque: 510, weight: 1970, seats: 5,
  fc: 11.3, fh: 8.8, fx: 15.3,
  acceleration: 5.5, topSpeed: 250, price: p(99990), aspiration: 'Turbo'
}
specs[`Genesis|G80|2019|5.0`] = {
  engine: '5.0L V8 NA Tau', fuelType: 'petrol', displacement: 4969,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 309, torque: 521, weight: 2010, seats: 5,
  fc: 13.8, fh: 10.5, fx: 18.7,
  acceleration: 5.1, topSpeed: 250, price: p(119990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HONDA CR-V & HR-V & CIVIC — 2019
// ─────────────────────────────────────────────────────────────
specs[`Honda|CR-V|2019|VTi-LX`] = {
  engine: '1.5L I4 Turbo VTEC', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 140, torque: 240, weight: 1597, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 9.5, topSpeed: 195, price: p(46990), aspiration: 'Turbo'
}
specs[`Honda|HR-V|2019|VTi-LX`] = {
  engine: '1.8L I4 NA i-VTEC', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 105, torque: 172, weight: 1261, seats: 5,
  fc: 6.5, fh: 5.2, fx: 8.7,
  acceleration: 10.8, topSpeed: 185, price: p(33490), aspiration: 'NA'
}
specs[`Honda|Civic|2019|Type R FK8 Limited Edition`] = {
  engine: '2.0L I4 Turbo K20C1', fuelType: 'petrol', displacement: 1996,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 235, torque: 420, weight: 1390, seats: 5,
  fc: 9.0, fh: 7.1, fx: 11.9,
  acceleration: 5.7, topSpeed: 272, price: p(74990), aspiration: 'Turbo'
}
specs[`Honda|Civic|2019|VTi-LX`] = {
  engine: '1.5L I4 Turbo VTEC', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 127, torque: 203, weight: 1310, seats: 5,
  fc: 6.5, fh: 5.1, fx: 8.6,
  acceleration: 8.8, topSpeed: 200, price: p(35490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA ELECTRIC & VELOSTER — 2019
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Kona|2019|Electric`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64 kWh', range: 484,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 395, weight: 1743, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 167, price: p(59990), aspiration: 'Electric'
}
specs[`Hyundai|Veloster|2019|N`] = {
  engine: '2.0L I4 Turbo Gamma', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 202, torque: 353, weight: 1419, seats: 4,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 5.9, topSpeed: 250, price: p(49990), aspiration: 'Turbo'
}
specs[`Hyundai|Veloster|2019|Turbo`] = {
  engine: '1.6L I4 Turbo Gamma', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 150, torque: 265, weight: 1361, seats: 4,
  fc: 7.3, fh: 5.7, fx: 9.7,
  acceleration: 7.4, topSpeed: 220, price: p(37990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// INFINITI QX50 — 2019: Sport (2nd gen)
// ─────────────────────────────────────────────────────────────
specs[`Infiniti|QX50|2019|Sport`] = {
  engine: '2.0L I4 Turbo VC-Turbo', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 200, torque: 380, weight: 1825, seats: 5,
  fc: 9.2, fh: 7.2, fx: 12.4,
  acceleration: 7.7, topSpeed: 200, price: p(79990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement196.json', JSON.stringify(out, null, 2))
console.log(`supplement196.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
