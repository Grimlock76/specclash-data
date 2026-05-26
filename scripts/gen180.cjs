'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HONDA CIVIC — 2022 11th-gen (FE/FL4) trims
// ─────────────────────────────────────────────────────────────
specs[`Honda|Civic|2022|VTi`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 131, torque: 240, weight: 1290, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.4,
  acceleration: 9.0, topSpeed: 195, price: p(37900), aspiration: 'Turbo'
}
specs[`Honda|Civic|2022|VTi-S`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 131, torque: 240, weight: 1295, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.4,
  acceleration: 9.0, topSpeed: 195, price: p(41900), aspiration: 'Turbo'
}
specs[`Honda|Civic|2022|RS`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 131, torque: 240, weight: 1300, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.4,
  acceleration: 9.0, topSpeed: 195, price: p(44900), aspiration: 'Turbo'
}
specs[`Honda|Civic|2022|e:HEV RS`] = {
  engine: '2.0L I4 i-MMD Hybrid', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 135, torque: 315, weight: 1415, seats: 5,
  fc: 4.8, fh: 4.0, fx: 6.1,
  acceleration: 8.0, topSpeed: 195, price: p(48900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HONDA HR-V — 2022 3rd-gen (ZR5) trims
// ─────────────────────────────────────────────────────────────
specs[`Honda|HR-V|2022|VTi`] = {
  engine: '1.5L I4 NA', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 96, torque: 145, weight: 1200, seats: 5,
  fc: 6.4, fh: 5.3, fx: 8.3,
  acceleration: 12.0, topSpeed: 175, price: p(29900), aspiration: 'NA'
}
specs[`Honda|HR-V|2022|VTi-S`] = {
  engine: '1.5L I4 NA', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 96, torque: 145, weight: 1210, seats: 5,
  fc: 6.4, fh: 5.3, fx: 8.3,
  acceleration: 12.0, topSpeed: 175, price: p(34900), aspiration: 'NA'
}
specs[`Honda|HR-V|2022|e:HEV L`] = {
  engine: '1.5L I4 Atkinson e:HEV', fuelType: 'hybrid', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 96, torque: 253, weight: 1380, seats: 5,
  fc: 4.7, fh: 3.9, fx: 6.1,
  acceleration: 9.5, topSpeed: 175, price: p(39900), aspiration: 'NA'
}
specs[`Honda|HR-V|2022|e:HEV RS`] = {
  engine: '1.5L I4 Atkinson e:HEV', fuelType: 'hybrid', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 96, torque: 253, weight: 1385, seats: 5,
  fc: 4.7, fh: 3.9, fx: 6.1,
  acceleration: 9.5, topSpeed: 175, price: p(43900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER — 2022 new L460 gen
// SE, SV, P510e SE, P510e Autobiography
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Range Rover|2022|SE`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 250, torque: 550, weight: 2510, seats: 5,
  fc: 13.0, fh: 9.8, fx: 18.2,
  acceleration: 6.0, topSpeed: 225, price: p(195000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover|2022|SV`] = {
  engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 390, torque: 750, weight: 2640, seats: 5,
  fc: 15.0, fh: 11.5, fx: 20.8,
  acceleration: 4.4, topSpeed: 250, price: p(398000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover|2022|P510e SE`] = {
  engine: '3.0L I6 Turbo PHEV', fuelType: 'PHEV', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 375, torque: 700, weight: 2810, seats: 5,
  fc: 2.5, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 220, price: p(267000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover|2022|P510e Autobiography`] = {
  engine: '3.0L I6 Turbo PHEV', fuelType: 'PHEV', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 375, torque: 700, weight: 2820, seats: 5,
  fc: 2.5, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 220, price: p(323000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER SPORT — 2022 new L461 gen
// S, Dynamic SE, Dynamic HSE, P530
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Range Rover Sport|2022|S`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 250, torque: 550, weight: 2345, seats: 5,
  fc: 12.5, fh: 9.4, fx: 17.5,
  acceleration: 6.5, topSpeed: 225, price: p(165000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover Sport|2022|Dynamic SE`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 250, torque: 550, weight: 2360, seats: 5,
  fc: 12.5, fh: 9.4, fx: 17.5,
  acceleration: 6.0, topSpeed: 225, price: p(199000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover Sport|2022|Dynamic HSE`] = {
  engine: '3.0L I6 Twin-Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 294, torque: 600, weight: 2380, seats: 5,
  fc: 13.0, fh: 9.8, fx: 18.2,
  acceleration: 5.5, topSpeed: 240, price: p(225000), aspiration: 'Turbo'
}
specs[`Land Rover|Range Rover Sport|2022|P530`] = {
  engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 390, torque: 750, weight: 2480, seats: 5,
  fc: 15.0, fh: 11.5, fx: 20.8,
  acceleration: 4.5, topSpeed: 250, price: p(285000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI OUTLANDER — 2022 new-gen PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|Outlander|2022|PHEV ES`] = {
  engine: '2.4L I4 PHEV', fuelType: 'PHEV', displacement: 2359,
  cylinders: 4, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 165, torque: 350, weight: 1930, seats: 7,
  fc: 1.8, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 200, price: p(62490), aspiration: 'NA'
}
specs[`Mitsubishi|Outlander|2022|PHEV LS`] = {
  engine: '2.4L I4 PHEV', fuelType: 'PHEV', displacement: 2359,
  cylinders: 4, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 165, torque: 350, weight: 1935, seats: 7,
  fc: 1.8, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 200, price: p(68490), aspiration: 'NA'
}
specs[`Mitsubishi|Outlander|2022|PHEV Exceed`] = {
  engine: '2.4L I4 PHEV', fuelType: 'PHEV', displacement: 2359,
  cylinders: 4, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 165, torque: 350, weight: 1940, seats: 7,
  fc: 1.8, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 200, price: p(74490), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement180.json', JSON.stringify(out, null, 2))
console.log(`supplement180.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
