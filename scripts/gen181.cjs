'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TOYOTA HIACE — 2022 new-variant trims
// ─────────────────────────────────────────────────────────────
specs[`Toyota|HiAce|2022|Van SWB Diesel`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2120, seats: 3,
  fc: 9.5, fh: 7.6, fx: 12.8,
  acceleration: 12.0, topSpeed: 175, price: p(59900), aspiration: 'Turbo'
}
specs[`Toyota|HiAce|2022|Commuter GL`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2225, seats: 12,
  fc: 10.2, fh: 8.1, fx: 13.6,
  acceleration: 13.0, topSpeed: 170, price: p(72900), aspiration: 'Turbo'
}
specs[`Toyota|HiAce|2022|Commuter Deluxe`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2230, seats: 12,
  fc: 10.2, fh: 8.1, fx: 13.6,
  acceleration: 13.0, topSpeed: 170, price: p(78900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW X1 — 2022 new U11-gen: sDrive20i, xDrive23i, iX1 xDrive30
// ─────────────────────────────────────────────────────────────
specs[`BMW|X1|2022|sDrive20i`] = {
  engine: '1.5L I3 Turbo TwinPower', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 125, torque: 230, weight: 1705, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.6,
  acceleration: 8.5, topSpeed: 210, price: p(57900), aspiration: 'Turbo'
}
specs[`BMW|X1|2022|xDrive23i`] = {
  engine: '2.0L I4 Twin-Turbo TwinPower', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 180, torque: 360, weight: 1800, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.2,
  acceleration: 7.0, topSpeed: 225, price: p(72900), aspiration: 'Turbo'
}
specs[`BMW|X1|2022|iX1 xDrive30`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '64.7 kWh', range: 440,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 230, torque: 494, weight: 2065, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.7, topSpeed: 180, price: p(82900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// BMW 2 SERIES ACTIVE TOURER — 2022 new U06-gen
// 220i xDrive, 225e xDrive PHEV, M235i xDrive
// ─────────────────────────────────────────────────────────────
specs[`BMW|2 Series Active Tourer|2022|220i xDrive`] = {
  engine: '2.0L I4 Turbo TwinPower', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 130, torque: 300, weight: 1595, seats: 5,
  fc: 7.4, fh: 5.8, fx: 9.9,
  acceleration: 7.9, topSpeed: 228, price: p(66900), aspiration: 'Turbo'
}
specs[`BMW|2 Series Active Tourer|2022|225e xDrive`] = {
  engine: '1.5L I3 Turbo PHEV', fuelType: 'PHEV', displacement: 1499,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 165, torque: 350, weight: 1740, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 215, price: p(76900), aspiration: 'Turbo'
}
specs[`BMW|2 Series Active Tourer|2022|M235i xDrive`] = {
  engine: '2.0L I4 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 225, torque: 450, weight: 1655, seats: 5,
  fc: 8.5, fh: 6.7, fx: 11.4,
  acceleration: 5.9, topSpeed: 250, price: p(84900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RX — 2022 new 6th-gen: RX 350, RX 350h, RX 450h+
// ─────────────────────────────────────────────────────────────
specs[`Lexus|RX|2022|RX 350`] = {
  engine: '2.4L I4 Turbo', fuelType: 'petrol', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 181, torque: 430, weight: 2000, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 7.2, topSpeed: 200, price: p(69990), aspiration: 'Turbo'
}
specs[`Lexus|RX|2022|RX 350h`] = {
  engine: '2.5L I4 Atkinson Hybrid AWD', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 215, torque: 239, weight: 2020, seats: 5,
  fc: 6.0, fh: 4.9, fx: 8.1,
  acceleration: 7.2, topSpeed: 200, price: p(79990), aspiration: 'NA'
}
specs[`Lexus|RX|2022|RX 450h+`] = {
  engine: '2.5L I4 Atkinson PHEV', fuelType: 'PHEV', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 225, torque: 270, weight: 2175, seats: 5,
  fc: 1.3, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 180, price: p(109990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DEFENDER 130 — 2022 new long-WB 8-seat variant
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Defender|2022|130 S`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 294, torque: 550, weight: 2505, seats: 8,
  fc: 11.5, fh: 8.7, fx: 16.2,
  acceleration: 6.0, topSpeed: 210, price: p(169900), aspiration: 'Turbo'
}
specs[`Land Rover|Defender|2022|130 X`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 294, torque: 550, weight: 2530, seats: 8,
  fc: 11.5, fh: 8.7, fx: 16.2,
  acceleration: 6.0, topSpeed: 210, price: p(202900), aspiration: 'Turbo'
}
specs[`Land Rover|Defender|2022|130 V8`] = {
  engine: '5.0L V8 Supercharged', fuelType: 'petrol', displacement: 4999,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 386, torque: 625, weight: 2550, seats: 8,
  fc: 15.5, fh: 12.0, fx: 21.5,
  acceleration: 5.2, topSpeed: 240, price: p(259900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ SL — 2022 new R232 gen: SL 43, SL 63 AMG
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|SL|2022|SL 43`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed MCT',
  power: 260, torque: 480, weight: 1815, seats: 2,
  fc: 9.8, fh: 7.6, fx: 13.8,
  acceleration: 4.9, topSpeed: 275, price: p(229900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SL|2022|SL 63 AMG`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 430, torque: 800, weight: 1985, seats: 2,
  fc: 12.8, fh: 10.0, fx: 18.0,
  acceleration: 3.6, topSpeed: 315, price: p(419900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN — 2022: GTS, Taycan Turbo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Taycan|2022|GTS`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 504,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 380, torque: 850, weight: 2280, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 250, price: p(277000), aspiration: 'Electric'
}
specs[`Porsche|Taycan|2022|Taycan Turbo`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '93 kWh', range: 395,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 500, torque: 910, weight: 2295, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 2.8, topSpeed: 260, price: p(320000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement181.json', JSON.stringify(out, null, 2))
console.log(`supplement181.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
