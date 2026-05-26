'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHEVROLET TRAX — 2023: ACTIV, RS (3rd gen RS-platform)
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Trax|2023|ACTIV`] = {
  engine: '1.2L I3 Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 96, torque: 200, weight: 1350, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.2,
  acceleration: 9.5, topSpeed: 185, price: p(35990), aspiration: 'Turbo'
}
specs[`Chevrolet|Trax|2023|RS`] = {
  engine: '1.2L I3 Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 96, torque: 200, weight: 1355, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.2,
  acceleration: 9.5, topSpeed: 185, price: p(39990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD F-150 — 2023 Raptor R
// ─────────────────────────────────────────────────────────────
specs[`Ford|F-150|2023|Raptor R`] = {
  engine: '5.2L V8 Supercharged Predator', fuelType: 'petrol', displacement: 5204,
  cylinders: 8, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 524, torque: 868, weight: 2470, seats: 5,
  fc: 18.0, fh: 14.2, fx: 23.5,
  acceleration: 5.0, topSpeed: 185, price: p(249990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI ASX — 2023 MK2 Exceed (Renault Captur platform)
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|ASX|2023|MK2 Exceed`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1330,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 103, torque: 240, weight: 1340, seats: 5,
  fc: 6.2, fh: 5.0, fx: 8.0,
  acceleration: 8.7, topSpeed: 195, price: p(47490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA — 2023 Active petrol (SX2 new-gen)
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Kona|2023|Active petrol`] = {
  engine: '2.0L I4 MPI', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 115, torque: 180, weight: 1350, seats: 5,
  fc: 7.2, fh: 6.0, fx: 9.2,
  acceleration: 10.0, topSpeed: 185, price: p(30990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// BMW X1 — 2023 M35i xDrive (U11 new-gen hot variant)
// ─────────────────────────────────────────────────────────────
specs[`BMW|X1|2023|M35i xDrive`] = {
  engine: '2.0L I4 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 225, torque: 420, weight: 1770, seats: 5,
  fc: 9.0, fh: 7.0, fx: 12.4,
  acceleration: 5.4, topSpeed: 240, price: p(89900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI A5 — 2023 40 TFSI quattro (B9.5 gen)
// ─────────────────────────────────────────────────────────────
specs[`Audi|A5|2023|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 140, torque: 320, weight: 1540, seats: 5,
  fc: 7.7, fh: 5.8, fx: 10.8,
  acceleration: 7.2, topSpeed: 237, price: p(79900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 718 — 2023 718 Cayman (base 2.0L flat-4)
// ─────────────────────────────────────────────────────────────
specs[`Porsche|718|2023|718 Cayman`] = {
  engine: '2.0L Flat-4 Turbo', fuelType: 'petrol', displacement: 1988,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed PDK',
  power: 220, torque: 380, weight: 1380, seats: 2,
  fc: 9.0, fh: 6.7, fx: 12.5,
  acceleration: 4.9, topSpeed: 275, price: p(165500), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER SPORT — 2023 P510e SE (PHEV)
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Range Rover Sport|2023|P510e SE`] = {
  engine: '3.0L I6 Turbo PHEV', fuelType: 'PHEV', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 375, torque: 640, weight: 2590, seats: 5,
  fc: 1.9, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 225, price: p(265000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MG HS — 2023 PHEV
// ─────────────────────────────────────────────────────────────
specs[`MG|MG HS|2023|PHEV`] = {
  engine: '1.5L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 163, torque: 370, weight: 1875, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 175, price: p(54990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// GENESIS GV70 — 2023 Electrified (pure EV)
// ─────────────────────────────────────────────────────────────
specs[`Genesis|GV70|2023|Electrified`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '77.4 kWh', range: 396,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 320, torque: 605, weight: 2255, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.2, topSpeed: 235, price: p(109000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// CHERY TIGGO 7 PRO / TIGGO 8 PRO — 2023 Turbo
// ─────────────────────────────────────────────────────────────
specs[`Chery|Tiggo 7 Pro|2023|Turbo`] = {
  engine: '1.6L I4 Turbo', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 250, weight: 1505, seats: 5,
  fc: 7.5, fh: 6.1, fx: 9.7,
  acceleration: 9.5, topSpeed: 185, price: p(38990), aspiration: 'Turbo'
}
specs[`Chery|Tiggo 8 Pro|2023|Turbo`] = {
  engine: '1.6L I4 Turbo', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 250, weight: 1650, seats: 7,
  fc: 7.8, fh: 6.3, fx: 10.1,
  acceleration: 9.5, topSpeed: 185, price: p(42990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET COLORADO — 2023 Trail Boss (3rd gen)
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Colorado|2023|Trail Boss`] = {
  engine: '2.7L I4 Turbo', fuelType: 'petrol', displacement: 2694,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 230, torque: 500, weight: 2100, seats: 5,
  fc: 11.2, fh: 8.9, fx: 15.0,
  acceleration: 6.5, topSpeed: 175, price: p(62990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// ASTON MARTIN VANTAGE — 2023 V12 Vantage
// ─────────────────────────────────────────────────────────────
specs[`Aston Martin|Vantage|2023|V12 Vantage`] = {
  engine: '5.2L V12 Twin-Turbo', fuelType: 'petrol', displacement: 5204,
  cylinders: 12, drivetrain: 'RWD', transmission: '8-speed ZF auto',
  power: 515, torque: 753, weight: 1550, seats: 2,
  fc: 15.0, fh: 11.5, fx: 20.5,
  acceleration: 3.5, topSpeed: 338, price: p(850000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LOTUS EMIRA — 2023 I4 AMG (2.0L AMG engine)
// ─────────────────────────────────────────────────────────────
specs[`Lotus|Emira|2023|I4 AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed DCT',
  power: 265, torque: 430, weight: 1405, seats: 2,
  fc: 9.5, fh: 7.2, fx: 13.0,
  acceleration: 4.4, topSpeed: 290, price: p(152000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement178.json', JSON.stringify(out, null, 2))
console.log(`supplement178.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
