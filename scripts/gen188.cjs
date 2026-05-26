'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// ISUZU D-MAX — 2021 (RG 3rd gen): SX Space Cab, LS-M/T/U/X-Terrain Crew Cab
// ─────────────────────────────────────────────────────────────
specs[`Isuzu|D-Max|2021|SX Space Cab`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 140, torque: 450, weight: 1960, seats: 4,
  fc: 8.7, fh: 7.0, fx: 11.7,
  acceleration: 12.5, topSpeed: 170, price: p(43900), aspiration: 'Turbo'
}
specs[`Isuzu|D-Max|2021|RG LS-M Crew Cab`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2175, seats: 5,
  fc: 8.9, fh: 7.1, fx: 11.9,
  acceleration: 12.0, topSpeed: 170, price: p(52900), aspiration: 'Turbo'
}
specs[`Isuzu|D-Max|2021|RG LS-T Crew Cab`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2195, seats: 5,
  fc: 8.9, fh: 7.1, fx: 11.9,
  acceleration: 12.0, topSpeed: 170, price: p(58900), aspiration: 'Turbo'
}
specs[`Isuzu|D-Max|2021|RG LS-U Crew Cab`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2200, seats: 5,
  fc: 8.9, fh: 7.1, fx: 11.9,
  acceleration: 12.0, topSpeed: 170, price: p(65900), aspiration: 'Turbo'
}
specs[`Isuzu|D-Max|2021|RG X-Terrain Crew Cab`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2220, seats: 5,
  fc: 8.9, fh: 7.1, fx: 11.9,
  acceleration: 12.0, topSpeed: 170, price: p(71900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// ISUZU MU-X — 2021 (RG): LS-M, LS-T, LS-U
// ─────────────────────────────────────────────────────────────
specs[`Isuzu|MU-X|2021|RG LS-M`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2175, seats: 7,
  fc: 9.0, fh: 7.2, fx: 12.1,
  acceleration: 12.5, topSpeed: 170, price: p(53900), aspiration: 'Turbo'
}
specs[`Isuzu|MU-X|2021|RG LS-T`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2190, seats: 7,
  fc: 9.0, fh: 7.2, fx: 12.1,
  acceleration: 12.5, topSpeed: 170, price: p(61900), aspiration: 'Turbo'
}
specs[`Isuzu|MU-X|2021|RG LS-U`] = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 140, torque: 450, weight: 2200, seats: 7,
  fc: 9.0, fh: 7.2, fx: 12.1,
  acceleration: 12.5, topSpeed: 170, price: p(69900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD ESCAPE — 2021 (ZH 4th gen): Ambiente, Trend, ST-Line, Titanium
// ─────────────────────────────────────────────────────────────
specs[`Ford|Escape|2021|ZH Ambiente`] = {
  engine: '1.5L I3 EcoBoost Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 138, torque: 243, weight: 1560, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 9.5, topSpeed: 195, price: p(35490), aspiration: 'Turbo'
}
specs[`Ford|Escape|2021|ZH Trend`] = {
  engine: '1.5L I3 EcoBoost Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 138, torque: 243, weight: 1565, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 9.5, topSpeed: 195, price: p(38990), aspiration: 'Turbo'
}
specs[`Ford|Escape|2021|ZH ST-Line`] = {
  engine: '2.0L I4 EcoBoost Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 387, weight: 1620, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.4,
  acceleration: 8.0, topSpeed: 210, price: p(46990), aspiration: 'Turbo'
}
specs[`Ford|Escape|2021|ZH Titanium`] = {
  engine: '2.0L I4 EcoBoost Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 387, weight: 1630, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.4,
  acceleration: 8.0, topSpeed: 210, price: p(50990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG — 2021: Mach 1
// ─────────────────────────────────────────────────────────────
specs[`Ford|Mustang|2021|Mach 1`] = {
  engine: '5.0L V8 Coyote NA', fuelType: 'petrol', displacement: 4951,
  cylinders: 8, drivetrain: 'RWD', transmission: '10-speed auto',
  power: 338, torque: 568, weight: 1727, seats: 4,
  fc: 13.5, fh: 10.1, fx: 18.1,
  acceleration: 4.4, topSpeed: 265, price: p(89990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// GENESIS G80 — 2021 (RG3 3rd gen): 2.5T, 2.5T Sport, 3.5T, 3.5T Sport+, Electrified
// ─────────────────────────────────────────────────────────────
specs[`Genesis|G80|2021|2.5T`] = {
  engine: '2.5L I4 Turbo', fuelType: 'petrol', displacement: 2497,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 224, torque: 422, weight: 1870, seats: 5,
  fc: 9.5, fh: 7.4, fx: 12.8,
  acceleration: 6.0, topSpeed: 240, price: p(89900), aspiration: 'Turbo'
}
specs[`Genesis|G80|2021|2.5T Sport`] = {
  engine: '2.5L I4 Turbo', fuelType: 'petrol', displacement: 2497,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 224, torque: 422, weight: 1875, seats: 5,
  fc: 9.5, fh: 7.4, fx: 12.8,
  acceleration: 6.0, topSpeed: 240, price: p(99900), aspiration: 'Turbo'
}
specs[`Genesis|G80|2021|3.5T`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 279, torque: 530, weight: 2015, seats: 5,
  fc: 11.4, fh: 8.8, fx: 15.3,
  acceleration: 5.1, topSpeed: 250, price: p(115900), aspiration: 'Turbo'
}
specs[`Genesis|G80|2021|3.5T Sport+`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 279, torque: 530, weight: 2020, seats: 5,
  fc: 11.4, fh: 8.8, fx: 15.3,
  acceleration: 5.1, topSpeed: 250, price: p(129900), aspiration: 'Turbo'
}
specs[`Genesis|G80|2021|Electrified`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '87.2 kWh', range: 427,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 272, torque: 700, weight: 2205, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 225, price: p(139900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// HONDA CR-V — 2021: VTi-LX (AWD)
// ─────────────────────────────────────────────────────────────
specs[`Honda|CR-V|2021|VTi-LX`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 140, torque: 240, weight: 1685, seats: 5,
  fc: 7.6, fh: 6.1, fx: 10.2,
  acceleration: 10.5, topSpeed: 195, price: p(47990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA HR-V — 2021: VTi-LX (AWD)
// ─────────────────────────────────────────────────────────────
specs[`Honda|HR-V|2021|VTi-LX`] = {
  engine: '1.8L I4 NA SOHC i-VTEC', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 105, torque: 162, weight: 1348, seats: 5,
  fc: 7.5, fh: 6.0, fx: 9.9,
  acceleration: 10.5, topSpeed: 185, price: p(32990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement188.json', JSON.stringify(out, null, 2))
console.log(`supplement188.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
