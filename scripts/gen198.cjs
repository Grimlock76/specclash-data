'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MAZDA 3 & CX-3 — 2019 (BP gen new)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|3|2019|G20 Pure`] = {
  engine: '2.0L I4 NA Skyactiv-G 20', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 115, torque: 213, weight: 1305, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 9.5, topSpeed: 195, price: p(24990), aspiration: 'NA'
}
specs[`Mazda|3|2019|G20 Evolve`] = {
  engine: '2.0L I4 NA Skyactiv-G 20', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 115, torque: 213, weight: 1325, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.5,
  acceleration: 9.8, topSpeed: 195, price: p(29990), aspiration: 'NA'
}
specs[`Mazda|3|2019|G25 GT`] = {
  engine: '2.5L I4 NA Skyactiv-G 25', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 139, torque: 252, weight: 1455, seats: 5,
  fc: 7.4, fh: 5.9, fx: 9.9,
  acceleration: 8.7, topSpeed: 200, price: p(39990), aspiration: 'NA'
}
specs[`Mazda|CX-3|2019|sTouring+`] = {
  engine: '2.0L I4 NA Skyactiv-G', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 115, torque: 196, weight: 1310, seats: 5,
  fc: 7.0, fh: 5.5, fx: 9.2,
  acceleration: 9.8, topSpeed: 185, price: p(30990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ CLA & CLS & GLE — 2019 (new gen W118/C257/W167)
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|CLA|2019|CLA35 AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT AMG',
  power: 225, torque: 400, weight: 1570, seats: 5,
  fc: 8.7, fh: 6.8, fx: 11.6,
  acceleration: 4.9, topSpeed: 250, price: p(82900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|CLA|2019|CLA45 S AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed DCT AMG',
  power: 310, torque: 500, weight: 1640, seats: 5,
  fc: 9.3, fh: 7.2, fx: 12.5,
  acceleration: 4.0, topSpeed: 270, price: p(109900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|CLS|2019|AMG CLS 53 4MATIC+`] = {
  engine: '3.0L I6 Turbo MHEV AMG', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed MCT AMG',
  power: 320, torque: 520, weight: 2015, seats: 5,
  fc: 9.7, fh: 7.5, fx: 13.1,
  acceleration: 4.5, topSpeed: 270, price: p(189900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|CLS|2019|CLS 450 4MATIC`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 270, torque: 500, weight: 1980, seats: 5,
  fc: 8.0, fh: 6.2, fx: 10.8,
  acceleration: 4.8, topSpeed: 250, price: p(139900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2019|GLE300d`] = {
  engine: '2.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 1950,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 180, torque: 500, weight: 2060, seats: 5,
  fc: 6.7, fh: 5.2, fx: 9.0,
  acceleration: 7.2, topSpeed: 225, price: p(109900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2019|GLE350de`] = {
  engine: '2.0L I4 Turbo Diesel PHEV', fuelType: 'PHEV', displacement: 1950,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 235, torque: 650, weight: 2425, seats: 5,
  fc: 1.6, fh: null, fx: null,
  acceleration: 6.8, topSpeed: 210, price: p(139900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLE|2019|GLE450`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 270, torque: 500, weight: 2140, seats: 5,
  fc: 9.7, fh: 7.5, fx: 13.1,
  acceleration: 5.7, topSpeed: 245, price: p(129900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT — 2019: Black Series
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2019|AMG GT Black Series`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT AMG',
  power: 537, torque: 800, weight: 1625, seats: 2,
  fc: 13.0, fh: 9.5, fx: 18.0,
  acceleration: 3.2, topSpeed: 325, price: p(749900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI TRITON — 2019: GSR
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|Triton|2019|GSR`] = {
  engine: '2.4L I4 MIVEC Turbo Diesel', fuelType: 'diesel', displacement: 2442,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 133, torque: 430, weight: 1985, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.3,
  acceleration: 11.5, topSpeed: 175, price: p(55990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// NISSAN LEAF — 2019: e+ (62kWh)
// ─────────────────────────────────────────────────────────────
specs[`Nissan|Leaf|2019|e+`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '62 kWh', range: 385,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 160, torque: 340, weight: 1777, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 150, price: p(54990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// OPEL CORSA — 2019: 1.2 Turbo, Electric (F gen)
// ─────────────────────────────────────────────────────────────
specs[`Opel|Corsa|2019|1.2 Turbo`] = {
  engine: '1.2L I3 Turbo PureTech', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 205, weight: 1160, seats: 5,
  fc: 5.4, fh: 4.2, fx: 7.1,
  acceleration: 9.7, topSpeed: 190, price: p(31990), aspiration: 'Turbo'
}
specs[`Opel|Corsa|2019|Electric`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '50 kWh', range: 337,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 100, torque: 260, weight: 1452, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.1, topSpeed: 150, price: p(44990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 208 & 2008 — 2019: e-208, e-2008 (Electric)
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|208|2019|e-208`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '50 kWh', range: 362,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 100, torque: 260, weight: 1520, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.1, topSpeed: 150, price: p(45990), aspiration: 'Electric'
}
specs[`Peugeot|2008|2019|e-2008`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '50 kWh', range: 322,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 100, torque: 260, weight: 1580, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 150, price: p(50990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement198.json', JSON.stringify(out, null, 2))
console.log(`supplement198.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
