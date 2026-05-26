'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FORD RANGER — 2016 (PX Mk2 facelift)
// ─────────────────────────────────────────────────────────────
specs[`Ford|Ranger|2016|PX Mk2 XL`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2100, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 11.0, topSpeed: 178, price: p(37990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2016|PX Mk2 XLS`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2115, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 11.0, topSpeed: 178, price: p(43990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2016|PX Mk2 XLT`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2155, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 10.8, topSpeed: 178, price: p(51990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2016|PX Mk2 Wildtrak`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2160, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 10.8, topSpeed: 178, price: p(57990), aspiration: 'Turbo'
}
specs[`Ford|Ranger|2016|PX Mk2 FX4`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2165, seats: 5,
  fc: 8.8, fh: 6.9, fx: 11.7,
  acceleration: 10.8, topSpeed: 178, price: p(60990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HOLDEN COMMODORE VF II & HSV — 2016
// ─────────────────────────────────────────────────────────────
specs[`Holden|Commodore (VF)|2016|VF II Sportwagon SV6 Black`] = {
  engine: '3.6L V6 NA LFX Sidi', fuelType: 'petrol', displacement: 3564,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 210, torque: 350, weight: 1780, seats: 5,
  fc: 11.5, fh: 9.0, fx: 15.4,
  acceleration: 7.2, topSpeed: 250, price: p(47990), aspiration: 'NA'
}
specs[`Holden|Commodore (VF)|2016|VF II Sportwagon SS Black`] = {
  engine: '6.2L V8 NA LS3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 304, torque: 570, weight: 1870, seats: 5,
  fc: 14.2, fh: 10.9, fx: 19.2,
  acceleration: 5.0, topSpeed: 260, price: p(62990), aspiration: 'NA'
}
specs[`HSV|GTSR|2016|VF II GTSR Maloo`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 560, torque: 818, weight: 1900, seats: 2,
  fc: 14.0, fh: 10.8, fx: 19.1,
  acceleration: 3.9, topSpeed: 305, price: p(189990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// HONDA ACCORD, CIVIC & JAZZ — 2016
// ─────────────────────────────────────────────────────────────
specs[`Honda|Accord|2016|VTi-L`] = {
  engine: '2.4L I4 NA K24Z3 i-VTEC', fuelType: 'petrol', displacement: 2354,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 137, torque: 225, weight: 1510, seats: 5,
  fc: 8.3, fh: 6.6, fx: 11.1,
  acceleration: 9.2, topSpeed: 210, price: p(42990), aspiration: 'NA'
}
specs[`Honda|Civic|2016|VTi-L`] = {
  engine: '1.5L I4 Turbo L15B7 VTEC', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 127, torque: 240, weight: 1295, seats: 5,
  fc: 6.7, fh: 5.3, fx: 8.8,
  acceleration: 8.4, topSpeed: 215, price: p(27990), aspiration: 'Turbo'
}
specs[`Honda|Jazz|2016|VTi-S`] = {
  engine: '1.5L I4 NA L15A VTEC', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 88, torque: 145, weight: 1100, seats: 5,
  fc: 5.7, fh: 4.6, fx: 7.4,
  acceleration: 10.5, topSpeed: 175, price: p(22990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI ELANTRA — 2016: Sport (AD gen new)
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Elantra|2016|Sport`] = {
  engine: '1.6L I4 Turbo T-GDI', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 150, torque: 265, weight: 1335, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.0,
  acceleration: 7.9, topSpeed: 215, price: p(30990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LADA NIVA — 2016: 1.7i 4WD
// ─────────────────────────────────────────────────────────────
specs[`Lada|Niva|2016|1.7i 4WD`] = {
  engine: '1.7L I4 NA 21214', fuelType: 'petrol', displacement: 1690,
  cylinders: 4, drivetrain: 'AWD', transmission: '5-speed manual',
  power: 59, torque: 127, weight: 1550, seats: 4,
  fc: 12.3, fh: 9.8, fx: 16.3,
  acceleration: 17.0, topSpeed: 130, price: p(18990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI AVENTADOR — 2016: LP740-4 S, SVJ, SVJ Roadster, Ultimae
// ─────────────────────────────────────────────────────────────
specs[`Lamborghini|Aventador|2016|LP740-4 S`] = {
  engine: '6.5L V12 NA L539', fuelType: 'petrol', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '7-speed ISR',
  power: 544, torque: 690, weight: 1575, seats: 2,
  fc: 23.3, fh: 17.0, fx: 30.0,
  acceleration: 2.9, topSpeed: 350, price: p(899900), aspiration: 'NA'
}
specs[`Lamborghini|Aventador|2016|SVJ`] = {
  engine: '6.5L V12 NA ALA2.0', fuelType: 'petrol', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '7-speed ISR',
  power: 566, torque: 720, weight: 1525, seats: 2,
  fc: 23.3, fh: 17.0, fx: 30.0,
  acceleration: 2.8, topSpeed: 350, price: p(1200000), aspiration: 'NA'
}
specs[`Lamborghini|Aventador|2016|SVJ Roadster`] = {
  engine: '6.5L V12 NA ALA2.0', fuelType: 'petrol', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '7-speed ISR',
  power: 566, torque: 720, weight: 1550, seats: 2,
  fc: 23.3, fh: 17.0, fx: 30.0,
  acceleration: 2.9, topSpeed: 349, price: p(1350000), aspiration: 'NA'
}
specs[`Lamborghini|Aventador|2016|Ultimae`] = {
  engine: '6.5L V12 NA LP780-4', fuelType: 'petrol', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '7-speed ISR',
  power: 578, torque: 720, weight: 1550, seats: 2,
  fc: 23.3, fh: 17.0, fx: 30.0,
  acceleration: 2.8, topSpeed: 355, price: p(1500000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LEXUS IS — 2016: IS 200t (refresh)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|IS|2016|IS 200t`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1650, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.1,
  acceleration: 7.5, topSpeed: 250, price: p(56990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement209.json', JSON.stringify(out, null, 2))
console.log(`supplement209.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
