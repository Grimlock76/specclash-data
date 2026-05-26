'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// SUBARU XV — 2023 new-gen trims: 2.0i-L, 2.0i-S
// ─────────────────────────────────────────────────────────────
specs[`Subaru|XV|2023|2.0i-L`] = {
  engine: '2.0L H4 Boxer', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 110, torque: 196, weight: 1520, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.1,
  acceleration: 11.0, topSpeed: 185, price: p(37490), aspiration: 'NA'
}
specs[`Subaru|XV|2023|2.0i-S`] = {
  engine: '2.0L H4 Boxer', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 110, torque: 196, weight: 1530, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.1,
  acceleration: 11.0, topSpeed: 185, price: p(41490), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VOLVO S60 — 2023 MHEV trims: B4, B5
// ─────────────────────────────────────────────────────────────
specs[`Volvo|S60|2023|B4`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 145, torque: 300, weight: 1755, seats: 5,
  fc: 7.1, fh: 5.6, fx: 9.4,
  acceleration: 7.6, topSpeed: 225, price: p(67990), aspiration: 'Turbo'
}
specs[`Volvo|S60|2023|B5`] = {
  engine: '2.0L I4 Twin-Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 350, weight: 1850, seats: 5,
  fc: 7.7, fh: 6.1, fx: 10.1,
  acceleration: 5.8, topSpeed: 250, price: p(79990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// GENESIS G90 — 2023: 3.5T, 3.5T e-AWD
// ─────────────────────────────────────────────────────────────
specs[`Genesis|G90|2023|3.5T`] = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 380, torque: 530, weight: 2200, seats: 5,
  fc: 13.2, fh: 10.0, fx: 18.1,
  acceleration: 4.9, topSpeed: 250, price: p(199900), aspiration: 'Turbo'
}
specs[`Genesis|G90|2023|3.5T e-AWD`] = {
  engine: '3.5L V6 Twin-Turbo + Electric', fuelType: 'hybrid', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 382, torque: 550, weight: 2250, seats: 5,
  fc: 12.2, fh: 9.5, fx: 16.6,
  acceleration: 4.7, topSpeed: 250, price: p(229900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// CUPRA BORN — 2023: V1 (58 kWh), VZ (77 kWh)
// ─────────────────────────────────────────────────────────────
specs[`CUPRA|Born|2023|V1`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '58 kWh', range: 420,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 150, torque: 310, weight: 1535, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.3, topSpeed: 160, price: p(50990), aspiration: 'Electric'
}
specs[`CUPRA|Born|2023|VZ`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '77 kWh', range: 545,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 170, torque: 310, weight: 1565, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.6, topSpeed: 160, price: p(62990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 308 — 2023 e-308 (EV): standard and SW wagon
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|308|2023|e-308`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '54 kWh', range: 410,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 115, torque: 260, weight: 1500, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 10.2, topSpeed: 150, price: p(63990), aspiration: 'Electric'
}
specs[`Peugeot|308|2023|e-308 SW`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '54 kWh', range: 400,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 115, torque: 260, weight: 1550, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 10.2, topSpeed: 150, price: p(69990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG — 2023 Dark Horse
// ─────────────────────────────────────────────────────────────
specs[`Ford|Mustang|2023|Dark Horse`] = {
  engine: '5.0L Coyote V8 NA', fuelType: 'petrol', displacement: 4951,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 304, torque: 570, weight: 1745, seats: 4,
  fc: 14.9, fh: 11.2, fx: 20.6,
  acceleration: 4.3, topSpeed: 250, price: p(109900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA HILUX — 2023 GR Sport
// ─────────────────────────────────────────────────────────────
specs[`Toyota|HiLux|2023|GR Sport`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2120, seats: 5,
  fc: 8.9, fh: 7.1, fx: 11.9,
  acceleration: 9.0, topSpeed: 175, price: p(74490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA GR YARIS — 2023 Rallye
// ─────────────────────────────────────────────────────────────
specs[`Toyota|GR Yaris|2023|Rallye`] = {
  engine: '1.6L I3 Turbo G16E-GTS', fuelType: 'petrol', displacement: 1618,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 200, torque: 370, weight: 1280, seats: 4,
  fc: 9.5, fh: 7.2, fx: 13.0,
  acceleration: 5.5, topSpeed: 230, price: p(57990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA CIVIC — 2023 Type R FL5
// ─────────────────────────────────────────────────────────────
specs[`Honda|Civic|2023|Type R FL5`] = {
  engine: '2.0L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1996,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 228, torque: 420, weight: 1430, seats: 4,
  fc: 9.3, fh: 7.2, fx: 12.7,
  acceleration: 5.4, topSpeed: 275, price: p(69900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA ACCORD — 2023 e:HEV Touring
// ─────────────────────────────────────────────────────────────
specs[`Honda|Accord|2023|e:HEV Touring`] = {
  engine: '2.0L I4 i-MMD Hybrid', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 147, torque: 335, weight: 1640, seats: 5,
  fc: 5.1, fh: 4.3, fx: 6.4,
  acceleration: 7.8, topSpeed: 200, price: p(62900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// BMW M3 — 2023 CS (G80 Competition)
// ─────────────────────────────────────────────────────────────
specs[`BMW|M3|2023|CS`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed M-DCT',
  power: 375, torque: 650, weight: 1775, seats: 4,
  fc: 10.8, fh: 8.3, fx: 14.8,
  acceleration: 3.4, topSpeed: 302, price: p(249900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN ID.3 — 2023 GTX (dual motor AWD)
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|ID.3|2023|GTX`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '77 kWh', range: 533,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 220, torque: 545, weight: 1955, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.7, topSpeed: 180, price: p(74990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// LEXUS LS — 2023 LS 500h (Multi Stage Hybrid)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|LS|2023|LS 500h`] = {
  engine: '3.5L V6 Multi Stage Hybrid', fuelType: 'hybrid', displacement: 3456,
  cylinders: 6, drivetrain: 'AWD', transmission: '4-speed auto hybrid',
  power: 264, torque: 354, weight: 2275, seats: 5,
  fc: 8.4, fh: 6.7, fx: 11.3,
  acceleration: 5.3, topSpeed: 250, price: p(250000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// SUZUKI JIMNY — 2023 5-door
// ─────────────────────────────────────────────────────────────
specs[`Suzuki|Jimny|2023|5-door`] = {
  engine: '1.5L I4 NA', fuelType: 'petrol', displacement: 1462,
  cylinders: 4, drivetrain: 'AWD', transmission: '4-speed auto',
  power: 75, torque: 130, weight: 1135, seats: 5,
  fc: 6.9, fh: 5.6, fx: 8.9,
  acceleration: 14.0, topSpeed: 145, price: p(36990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement177.json', JSON.stringify(out, null, 2))
console.log(`supplement177.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
