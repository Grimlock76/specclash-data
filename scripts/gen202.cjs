'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHEVROLET EQUINOX, MALIBU & TRAVERSE — 2018
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Equinox|2018|L`] = {
  engine: '1.5L I4 Turbo LFV', fuelType: 'petrol', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 125, torque: 240, weight: 1575, seats: 5,
  fc: 9.0, fh: 7.1, fx: 11.8,
  acceleration: 9.9, topSpeed: 185, price: p(29990), aspiration: 'Turbo'
}
specs[`Chevrolet|Equinox|2018|Premier`] = {
  engine: '2.0L I4 Turbo LTG', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 190, torque: 350, weight: 1700, seats: 5,
  fc: 10.3, fh: 8.1, fx: 13.6,
  acceleration: 7.2, topSpeed: 200, price: p(45990), aspiration: 'Turbo'
}
specs[`Chevrolet|Malibu|2018|RS`] = {
  engine: '1.5L I4 Turbo LFV', fuelType: 'petrol', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 125, torque: 250, weight: 1580, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.2,
  acceleration: 9.5, topSpeed: 195, price: p(28990), aspiration: 'Turbo'
}
specs[`Chevrolet|Traverse|2018|RS`] = {
  engine: '3.6L V6 NA LGX', fuelType: 'petrol', displacement: 3649,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 228, torque: 361, weight: 2060, seats: 8,
  fc: 12.0, fh: 9.4, fx: 15.8,
  acceleration: 7.0, topSpeed: 195, price: p(54990), aspiration: 'NA'
}
specs[`Chevrolet|Traverse|2018|Premier`] = {
  engine: '3.6L V6 NA LGX', fuelType: 'petrol', displacement: 3649,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 228, torque: 361, weight: 2065, seats: 8,
  fc: 12.0, fh: 9.4, fx: 15.8,
  acceleration: 7.0, topSpeed: 195, price: p(59990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// DACIA DUSTER — 2018 (2nd gen)
// ─────────────────────────────────────────────────────────────
specs[`Dacia|Duster|2018|1.0 TCe`] = {
  engine: '1.0L I3 Turbo TCe 100', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '5-speed manual',
  power: 74, torque: 160, weight: 1165, seats: 5,
  fc: 5.5, fh: 4.4, fx: 7.2,
  acceleration: 12.5, topSpeed: 163, price: p(18990), aspiration: 'Turbo'
}
specs[`Dacia|Duster|2018|Essential TCe 130`] = {
  engine: '1.3L I4 Turbo TCe 130', fuelType: 'petrol', displacement: 1333,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 96, torque: 240, weight: 1220, seats: 5,
  fc: 6.3, fh: 5.0, fx: 8.3,
  acceleration: 10.2, topSpeed: 176, price: p(22990), aspiration: 'Turbo'
}
specs[`Dacia|Duster|2018|Prestige TCe 130`] = {
  engine: '1.3L I4 Turbo TCe 130', fuelType: 'petrol', displacement: 1333,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DCT',
  power: 96, torque: 240, weight: 1230, seats: 5,
  fc: 6.3, fh: 5.0, fx: 8.3,
  acceleration: 10.5, topSpeed: 176, price: p(26990), aspiration: 'Turbo'
}
specs[`Dacia|Duster|2018|Comfort TCe 130 4WD`] = {
  engine: '1.3L I4 Turbo TCe 130', fuelType: 'petrol', displacement: 1333,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 96, torque: 240, weight: 1370, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.6,
  acceleration: 10.9, topSpeed: 172, price: p(28990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// DODGE CHALLENGER SRT DEMON & CHARGER HELLCAT REDEYE — 2018
// ─────────────────────────────────────────────────────────────
specs[`Dodge|Challenger|2018|SRT Demon`] = {
  engine: '6.2L V8 SC SRT Demon', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 617, torque: 1044, weight: 2010, seats: 2,
  fc: 18.5, fh: 14.0, fx: 25.0,
  acceleration: 3.7, topSpeed: 274, price: p(109900), aspiration: 'Supercharged'
}
specs[`Dodge|Charger|2018|Hellcat Redeye`] = {
  engine: '6.2L V8 SC Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'RWD', transmission: '8-speed auto TorqueFlite',
  power: 527, torque: 880, weight: 2080, seats: 5,
  fc: 18.0, fh: 13.5, fx: 24.0,
  acceleration: 3.6, topSpeed: 328, price: p(109900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG — 2018: Bullitt
// ─────────────────────────────────────────────────────────────
specs[`Ford|Mustang|2018|Bullitt`] = {
  engine: '5.0L V8 NA Coyote Ti-VCT', fuelType: 'petrol', displacement: 4951,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 338, torque: 556, weight: 1700, seats: 4,
  fc: 15.0, fh: 11.5, fx: 20.0,
  acceleration: 4.6, topSpeed: 261, price: p(79990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HONDA CIVIC — 2018: VTi-S
// ─────────────────────────────────────────────────────────────
specs[`Honda|Civic|2018|VTi-S`] = {
  engine: '1.5L I4 Turbo L15B7 VTEC', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 127, torque: 240, weight: 1335, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.7,
  acceleration: 8.4, topSpeed: 215, price: p(28490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA — 2018: Electric Active, Electric Highlander
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Kona|2018|Electric Active`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64 kWh', range: 449,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 395, weight: 1535, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 167, price: p(52490), aspiration: 'Electric'
}
specs[`Hyundai|Kona|2018|Electric Highlander`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64 kWh', range: 449,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 395, weight: 1545, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 167, price: p(58490), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// JEEP WRANGLER — 2018: Rubicon 4dr (JL gen)
// ─────────────────────────────────────────────────────────────
specs[`Jeep|Wrangler|2018|Rubicon 4dr`] = {
  engine: '3.6L V6 NA Pentastar', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 209, torque: 347, weight: 2100, seats: 5,
  fc: 13.5, fh: 10.5, fx: 17.8,
  acceleration: 7.2, topSpeed: 185, price: p(72990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// KIA CERATO & NIRO — 2018
// ─────────────────────────────────────────────────────────────
specs[`Kia|Cerato|2018|Sport+`] = {
  engine: '2.0L I4 NA NU MPI', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 120, torque: 192, weight: 1395, seats: 5,
  fc: 8.1, fh: 6.4, fx: 10.8,
  acceleration: 9.0, topSpeed: 190, price: p(26990), aspiration: 'NA'
}
specs[`Kia|Cerato|2018|GT`] = {
  engine: '1.6L I4 Turbo T-GDI', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 150, torque: 265, weight: 1385, seats: 5,
  fc: 8.6, fh: 6.7, fx: 11.5,
  acceleration: 7.5, topSpeed: 215, price: p(31990), aspiration: 'Turbo'
}
specs[`Kia|Niro|2018|Electric Si`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '64 kWh', range: 455,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 395, weight: 1625, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.8, topSpeed: 167, price: p(64990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement202.json', JSON.stringify(out, null, 2))
console.log(`supplement202.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
