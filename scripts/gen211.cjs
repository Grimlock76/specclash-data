'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HOLDEN COMMODORE VF II — 2015: sedan & Sportwagon lineup
// ─────────────────────────────────────────────────────────────
specs[`Holden|Commodore (VF)|2015|VF II Calais`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1750, seats: 5,
  fc: 10.8, fh: 8.3, fx: 14.7,
  acceleration: 7.8, topSpeed: 250, price: p(46990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Calais V`] = {
  engine: '6.0L V8 NA L77', fuelType: 'petrol', displacement: 5967,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 270, torque: 530, weight: 1835, seats: 5,
  fc: 13.8, fh: 10.6, fx: 18.8,
  acceleration: 5.6, topSpeed: 260, price: p(56990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Equipe`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1730, seats: 5,
  fc: 10.8, fh: 8.3, fx: 14.7,
  acceleration: 8.0, topSpeed: 250, price: p(33990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Evoke`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 195, torque: 350, weight: 1735, seats: 5,
  fc: 10.8, fh: 8.3, fx: 14.7,
  acceleration: 8.0, topSpeed: 250, price: p(36990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II SS`] = {
  engine: '6.2L V8 NA LS3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 304, torque: 570, weight: 1800, seats: 5,
  fc: 14.2, fh: 10.9, fx: 19.2,
  acceleration: 5.2, topSpeed: 260, price: p(48990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II SS V REDLINE`] = {
  engine: '6.2L V8 NA LS3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 304, torque: 570, weight: 1810, seats: 5,
  fc: 14.2, fh: 10.9, fx: 19.2,
  acceleration: 5.0, topSpeed: 260, price: p(57990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II SV6`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 210, torque: 350, weight: 1760, seats: 5,
  fc: 11.5, fh: 9.0, fx: 15.4,
  acceleration: 7.2, topSpeed: 250, price: p(42990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Sportwagon SS`] = {
  engine: '6.2L V8 NA LS3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 304, torque: 570, weight: 1870, seats: 5,
  fc: 14.2, fh: 10.9, fx: 19.2,
  acceleration: 5.2, topSpeed: 260, price: p(51990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Sportwagon SS V Redline`] = {
  engine: '6.2L V8 NA LS3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 304, torque: 570, weight: 1875, seats: 5,
  fc: 14.2, fh: 10.9, fx: 19.2,
  acceleration: 5.1, topSpeed: 260, price: p(60990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2015|VF II Sportwagon SV6`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 210, torque: 350, weight: 1780, seats: 5,
  fc: 11.5, fh: 9.0, fx: 15.4,
  acceleration: 7.3, topSpeed: 250, price: p(45990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG — 2015: Fastback GT, Fastback EcoBoost (S550 new gen)
// ─────────────────────────────────────────────────────────────
specs[`Ford|Mustang|2015|Fastback 5.0 GT`] = {
  engine: '5.0L V8 NA Coyote Ti-VCT', fuelType: 'petrol', displacement: 4951,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto SelectShift',
  power: 339, torque: 529, weight: 1697, seats: 4,
  fc: 13.8, fh: 10.4, fx: 18.6,
  acceleration: 4.6, topSpeed: 250, price: p(55990), aspiration: 'NA'
}
specs[`Ford|Mustang|2015|Fastback EcoBoost`] = {
  engine: '2.3L I4 Turbo EcoBoost', fuelType: 'petrol', displacement: 2261,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto SelectShift',
  power: 231, torque: 433, weight: 1626, seats: 4,
  fc: 9.7, fh: 7.5, fx: 13.1,
  acceleration: 6.1, topSpeed: 250, price: p(45990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD FOCUS — 2015 (LZ): Ambiente, ST, Titanium, Trend
// ─────────────────────────────────────────────────────────────
specs[`Ford|Focus|2015|LZ Ambiente`] = {
  engine: '1.5L I4 Turbo EcoBoost', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed PowerShift DCT',
  power: 110, torque: 220, weight: 1295, seats: 5,
  fc: 6.3, fh: 5.0, fx: 8.4,
  acceleration: 10.8, topSpeed: 198, price: p(23990), aspiration: 'Turbo'
}
specs[`Ford|Focus|2015|LZ ST`] = {
  engine: '2.0L I4 Turbo EcoBoost ST200', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 184, torque: 360, weight: 1385, seats: 5,
  fc: 8.6, fh: 6.8, fx: 11.4,
  acceleration: 6.5, topSpeed: 248, price: p(39990), aspiration: 'Turbo'
}
specs[`Ford|Focus|2015|LZ Titanium`] = {
  engine: '1.5L I4 Turbo EcoBoost', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed PowerShift DCT',
  power: 134, torque: 240, weight: 1315, seats: 5,
  fc: 6.3, fh: 5.0, fx: 8.4,
  acceleration: 9.5, topSpeed: 215, price: p(31990), aspiration: 'Turbo'
}
specs[`Ford|Focus|2015|LZ Trend`] = {
  engine: '1.5L I4 Turbo EcoBoost', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed PowerShift DCT',
  power: 110, torque: 220, weight: 1300, seats: 5,
  fc: 6.3, fh: 5.0, fx: 8.4,
  acceleration: 10.8, topSpeed: 198, price: p(26990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD RANGER — 2015 (PX): FX4, Wildtrak, XL, XLS, XLT
// ─────────────────────────────────────────────────────────────
specs[`Ford|Ranger|2015|PX FX4`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2040, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 10.8, topSpeed: 178, price: p(58990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2015|PX Wildtrak`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2025, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 10.8, topSpeed: 178, price: p(52990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2015|PX XL`] = {
  engine: '2.2L I4 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 2198,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 118, torque: 385, weight: 1920, seats: 5,
  fc: 7.7, fh: 6.0, fx: 10.2,
  acceleration: 12.0, topSpeed: 172, price: p(30990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2015|PX XLS`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 1990, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 11.0, topSpeed: 178, price: p(40990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2015|PX XLT`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2010, seats: 5,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 11.0, topSpeed: 178, price: p(47990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement211.json', JSON.stringify(out, null, 2))
console.log(`supplement211.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
