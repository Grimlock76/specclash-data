'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ GLE — 2015: GLE250d, GLE350d, GLE400, GLE63 S AMG (W166)
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|GLE|2015|GLE250d`] = {
  engine: '2.1L I4 Turbo Diesel OM651 BlueTEC', fuelType: 'diesel', displacement: 2143,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 150, torque: 500, weight: 2025, seats: 5,
  fc: 6.4, fh: 5.1, fx: 8.5,
  acceleration: 8.0, topSpeed: 213, price: p(87900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2015|GLE350d`] = {
  engine: '3.0L V6 Turbo Diesel OM642 BlueTEC', fuelType: 'diesel', displacement: 2987,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 190, torque: 620, weight: 2150, seats: 5,
  fc: 7.4, fh: 5.9, fx: 9.8,
  acceleration: 6.8, topSpeed: 230, price: p(104900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2015|GLE400`] = {
  engine: '3.0L V6 Biturbo M276', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 245, torque: 480, weight: 2145, seats: 5,
  fc: 9.7, fh: 7.6, fx: 13.1,
  acceleration: 5.9, topSpeed: 235, price: p(119900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2015|GLE63 S AMG`] = {
  engine: '5.5L V8 Biturbo M157 E55', fuelType: 'petrol', displacement: 5461,
  cylinders: 8, drivetrain: 'AWD', transmission: '7-speed auto AMG Speedshift',
  power: 430, torque: 760, weight: 2360, seats: 5,
  fc: 12.0, fh: 9.0, fx: 16.4,
  acceleration: 4.2, topSpeed: 280, price: p(224900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ B-CLASS — 2015: B 200; CLS — 2015: CLS 400; SLK — 2015: SLK 200, SLK 350
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|B-Class|2015|B 200`] = {
  engine: '1.6L I4 Turbo M270', fuelType: 'petrol', displacement: 1595,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 250, weight: 1510, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.1,
  acceleration: 8.9, topSpeed: 215, price: p(48900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|CLS|2015|CLS 400`] = {
  engine: '3.0L V6 Biturbo M276', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed auto 7G-Tronic',
  power: 245, torque: 480, weight: 1810, seats: 5,
  fc: 8.4, fh: 6.5, fx: 11.5,
  acceleration: 5.5, topSpeed: 250, price: p(134900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SLK|2015|SLK 200`] = {
  engine: '1.8L I4 SC M271 EVO', fuelType: 'petrol', displacement: 1796,
  cylinders: 4, drivetrain: 'RWD', transmission: '7-speed auto 7G-Tronic',
  power: 135, torque: 270, weight: 1455, seats: 2,
  fc: 7.0, fh: 5.6, fx: 9.4,
  acceleration: 6.5, topSpeed: 240, price: p(69900), aspiration: 'Supercharged'
}
specs[`Mercedes-Benz|SLK|2015|SLK 350`] = {
  engine: '3.5L V6 NA M272', fuelType: 'petrol', displacement: 3498,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed auto 7G-Tronic',
  power: 225, torque: 360, weight: 1510, seats: 2,
  fc: 8.3, fh: 6.5, fx: 11.2,
  acceleration: 5.6, topSpeed: 250, price: p(99900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// SUBARU LEVORG — 2015: 2.0 GT, 2.0 GT-S (VM new gen)
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Levorg|2015|2.0 GT`] = {
  engine: '2.0L H4 Turbo FA20DIT', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 197, torque: 350, weight: 1490, seats: 5,
  fc: 8.2, fh: 6.5, fx: 10.9,
  acceleration: 6.5, topSpeed: 230, price: p(42990), aspiration: 'Turbo'
}
specs[`Subaru|Levorg|2015|2.0 GT-S`] = {
  engine: '2.0L H4 Turbo FA20DIT', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 197, torque: 350, weight: 1500, seats: 5,
  fc: 8.2, fh: 6.5, fx: 10.9,
  acceleration: 6.5, topSpeed: 230, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA CIVIC FK2 — 2015: Type R; ACCORD — 2015: VTi-S; HR-V — 2015: VTi-S
// ─────────────────────────────────────────────────────────────
specs[`Honda|Civic|2015|Type R FK2`] = {
  engine: '2.0L I4 Turbo K20C1 VTEC', fuelType: 'petrol', displacement: 1996,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 228, torque: 400, weight: 1380, seats: 4,
  fc: 8.2, fh: 6.4, fx: 11.0,
  acceleration: 5.7, topSpeed: 270, price: p(49990), aspiration: 'Turbo'
}
specs[`Honda|Accord|2015|VTi-S`] = {
  engine: '3.5L V6 NA J35Z2 i-VTEC', fuelType: 'petrol', displacement: 3471,
  cylinders: 6, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 201, torque: 339, weight: 1605, seats: 5,
  fc: 10.3, fh: 8.1, fx: 13.8,
  acceleration: 7.5, topSpeed: 220, price: p(47990), aspiration: 'NA'
}
specs[`Honda|HR-V|2015|VTi-S`] = {
  engine: '1.8L I4 NA R18Z1 i-VTEC', fuelType: 'petrol', displacement: 1799,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 104, torque: 172, weight: 1295, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.6,
  acceleration: 10.5, topSpeed: 185, price: p(28990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HONDA JAZZ — 2015: VTi, VTi-L, VTi-LX (GK gen)
// ─────────────────────────────────────────────────────────────
specs[`Honda|Jazz|2015|VTi`] = {
  engine: '1.5L I4 NA L15B5 i-VTEC', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 89, torque: 145, weight: 1080, seats: 5,
  fc: 5.8, fh: 4.7, fx: 7.5,
  acceleration: 10.5, topSpeed: 175, price: p(18990), aspiration: 'NA'
}
specs[`Honda|Jazz|2015|VTi-L`] = {
  engine: '1.5L I4 NA L15B5 i-VTEC', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 89, torque: 145, weight: 1090, seats: 5,
  fc: 5.8, fh: 4.7, fx: 7.5,
  acceleration: 10.5, topSpeed: 175, price: p(21990), aspiration: 'NA'
}
specs[`Honda|Jazz|2015|VTi-LX`] = {
  engine: '1.5L I4 NA L15B5 i-VTEC', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 89, torque: 145, weight: 1095, seats: 5,
  fc: 5.8, fh: 4.7, fx: 7.5,
  acceleration: 10.5, topSpeed: 175, price: p(24990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LEXUS GS F — 2015: GS F; NX — 2015: NX 300h; RC — 2015: RC 200t, RC 300h, RC F
// ─────────────────────────────────────────────────────────────
specs[`Lexus|GS|2015|GS F`] = {
  engine: '5.0L V8 NA 2UR-GSE', fuelType: 'petrol', displacement: 4969,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 351, torque: 530, weight: 1840, seats: 5,
  fc: 13.2, fh: 10.3, fx: 17.7,
  acceleration: 4.6, topSpeed: 270, price: p(149990), aspiration: 'NA'
}
specs[`Lexus|NX|2015|NX 300h`] = {
  engine: '2.5L I4 NA 2AR-FXE + Electric HSD', fuelType: 'petrol', displacement: 2494,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT e-CVT',
  power: 133, torque: 213, weight: 1840, seats: 5,
  fc: 5.8, fh: 4.5, fx: 7.8,
  acceleration: 9.2, topSpeed: 180, price: p(68990), aspiration: 'NA'
}
specs[`Lexus|RC|2015|RC 200t`] = {
  engine: '2.0L I4 Turbo 8AR-FTS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 180, torque: 350, weight: 1700, seats: 4,
  fc: 8.3, fh: 6.5, fx: 11.1,
  acceleration: 7.5, topSpeed: 230, price: p(72990), aspiration: 'Turbo'
}
specs[`Lexus|RC|2015|RC 300h`] = {
  engine: '2.5L I4 NA 2AR-FXE + Electric HSD', fuelType: 'petrol', displacement: 2494,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT e-CVT',
  power: 133, torque: 213, weight: 1710, seats: 4,
  fc: 5.9, fh: 4.7, fx: 7.9,
  acceleration: 8.6, topSpeed: 200, price: p(75990), aspiration: 'NA'
}
specs[`Lexus|RC|2015|RC F`] = {
  engine: '5.0L V8 NA 2UR-GSE', fuelType: 'petrol', displacement: 4969,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 351, torque: 530, weight: 1795, seats: 4,
  fc: 13.3, fh: 10.4, fx: 17.8,
  acceleration: 4.5, topSpeed: 270, price: p(139990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement214.json', JSON.stringify(out, null, 2))
console.log(`supplement214.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
