'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW 4 SERIES (2021–2026) — 420i, 430i, M440i xDrive
// ─────────────────────────────────────────────────────────────
const bmw420i = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-spd Auto',
  power: 135, torque: 300, weight: 1560, seats: 4,
  fc: 6.7, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 235
}
const bmw430i = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-spd Auto',
  power: 190, torque: 400, weight: 1595, seats: 4,
  fc: 7.1, fh: null, fx: null,
  acceleration: 5.8, topSpeed: 250
}
const bmwM440i = {
  engine: '3.0L I6 TwinPower Turbo xDrive', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 275, torque: 500, weight: 1755, seats: 4,
  fc: 7.7, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 250
}
// Cabriolet variants (slightly heavier)
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':2000,'2023':4000,'2024':6000,'2025':8000,'2026':10000 }[yr]
  specs[`BMW|4 Series|${yr}|420i`] = { ...bmw420i, price: p(79900 + adj) }
  specs[`BMW|4 Series|${yr}|430i`] = { ...bmw430i, price: p(89900 + adj) }
  specs[`BMW|4 Series|${yr}|M440i xDrive`] = { ...bmwM440i, price: p(114900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// BMW iX xDrive50 (2021–2026) — large electric SUV
// ─────────────────────────────────────────────────────────────
const ixXD40 = {
  engine: 'Dual Electric Motor xDrive40', fuelType: 'electric',
  battery: '71.0 kWh', range: 426,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 240, torque: 600, weight: 2355, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 200
}
const ixXD50 = {
  engine: 'Dual Electric Motor xDrive50', fuelType: 'electric',
  battery: '111.5 kWh', range: 630,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 385, torque: 765, weight: 2510, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.6, topSpeed: 200
}
const ixM60 = {
  engine: 'Dual Electric Motor M60 xDrive', fuelType: 'electric',
  battery: '111.5 kWh', range: 560,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 455, torque: 1015, weight: 2640, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.8, topSpeed: 250
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':3000,'2023':6000,'2024':9000,'2025':11000,'2026':13000 }[yr]
  specs[`BMW|iX|${yr}|xDrive40`] = { ...ixXD40, price: p(129900 + adj) }
  specs[`BMW|iX|${yr}|xDrive50`] = { ...ixXD50, price: p(159900 + adj) }
  specs[`BMW|iX|${yr}|M60`] = { ...ixM60, price: p(189900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// AUDI e-tron GT (2021–2026) — electric GT
// ─────────────────────────────────────────────────────────────
const etronGT = {
  engine: 'Dual Electric Motor quattro', fuelType: 'electric',
  battery: '93.4 kWh', range: 488,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 350, torque: 630, weight: 2320, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 4.1, topSpeed: 245
}
const rsEtronGT = {
  engine: 'Dual Electric Motor RS quattro', fuelType: 'electric',
  battery: '93.4 kWh', range: 472,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 440, torque: 830, weight: 2370, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 250
}
const rsEtronGTPerfGen2 = {
  engine: 'Dual Electric Motor RS Performance quattro', fuelType: 'electric',
  battery: '105.0 kWh', range: 600,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 630, torque: 1020, weight: 2430, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 2.5, topSpeed: 270
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':3000,'2023':6000,'2024':9000,'2025':11000,'2026':13000 }[yr]
  specs[`Audi|e-tron GT|${yr}|e-tron GT`] = { ...etronGT, price: p(189900 + adj) }
  specs[`Audi|e-tron GT|${yr}|RS e-tron GT`] = { ...rsEtronGT, price: p(249900 + adj) }
  if (parseInt(yr) >= 2024) {
    specs[`Audi|e-tron GT|${yr}|RS e-tron GT Performance`] = { ...rsEtronGTPerfGen2, price: p(329900 + adj) }
  }
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG C63e (2024–2026) — PHEV hot C-Class
// ─────────────────────────────────────────────────────────────
const c63e = {
  engine: '2.0L 4-cyl Turbo AMG PHEV', fuelType: 'hybrid', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-spd AMG Speedshift',
  power: 500, torque: 750, weight: 2110, seats: 5,
  fc: 6.1, fh: null, fx: null,
  acceleration: 3.4, topSpeed: 280,
  range: 13
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':5000,'2026':8000 }[yr]
  specs[`Mercedes-Benz|C-Class|${yr}|AMG C63 S E Performance`] = { ...c63e, price: p(249900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLVO S60 T8 Recharge (2019–2026) — PHEV sedan
// ─────────────────────────────────────────────────────────────
const s60T8 = {
  engine: '2.0L 4-cyl Turbo + Supercharger T8 PHEV', fuelType: 'hybrid', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 287, torque: 670, weight: 1910, seats: 5,
  fc: 2.1, fh: null, fx: null,
  acceleration: 4.4, topSpeed: 250,
  range: 59
}
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2019':0,'2020':1500,'2021':3000,'2022':5000,'2023':7000,'2024':9000,'2025':11000,'2026':13000 }[yr]
  specs[`Volvo|S60|${yr}|T8 Recharge`] = { ...s60T8, price: p(82990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLVO V90 T8 Recharge (2019–2026) — PHEV estate
// ─────────────────────────────────────────────────────────────
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2019':0,'2020':1500,'2021':3000,'2022':5000,'2023':7000,'2024':9000,'2025':11000,'2026':13000 }[yr]
  specs[`Volvo|V90|${yr}|T8 Recharge`] = { ...s60T8, weight: 1960, price: p(89990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// SUBARU BRZ tS (2022–2026) — track-oriented variant
// ─────────────────────────────────────────────────────────────
const brzTS = {
  engine: '2.4L H4 Naturally Aspirated', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-spd Manual',
  power: 174, torque: 250, weight: 1285, seats: 4,
  fc: 8.4, fh: null, fx: null,
  acceleration: 6.2, topSpeed: 226
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':3000,'2025':4000,'2026':5000 }[yr]
  specs[`Subaru|BRZ|${yr}|BRZ tS`] = { ...brzTS, price: p(43490 + adj) }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA CROWN KLUGER (2023–2026) — 3-row hybrid SUV
// ─────────────────────────────────────────────────────────────
const ckBase = {
  engine: '2.5L 4-cyl Hybrid AWD', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 176, torque: 239, weight: 2030, seats: 8,
  fc: 5.8, fh: null, fx: null,
  acceleration: 7.7, topSpeed: 180
}
const ckGX = { ...ckBase }
const ckGXL = { ...ckBase }
const ckEdge = { ...ckBase }
const ckCruiser = { ...ckBase }
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2023':0,'2024':2000,'2025':4000,'2026':6000 }[yr]
  specs[`Toyota|Crown Kluger|${yr}|GX`] = { ...ckGX, price: p(66990 + adj) }
  specs[`Toyota|Crown Kluger|${yr}|GXL`] = { ...ckGXL, price: p(74990 + adj) }
  specs[`Toyota|Crown Kluger|${yr}|Edge`] = { ...ckEdge, price: p(82990 + adj) }
  specs[`Toyota|Crown Kluger|${yr}|Cruiser`] = { ...ckCruiser, price: p(89990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA bZ3C (2025–2026) — compact EV crossover
// ─────────────────────────────────────────────────────────────
const bz3cBase = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '72.8 kWh', range: 535,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 160, torque: 310, weight: 1870, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.0, topSpeed: 160
}
for (const yr of ['2025','2026']) {
  const adj = { '2025':0,'2026':2000 }[yr]
  specs[`Toyota|bZ3C|${yr}|FWD`] = { ...bz3cBase, price: p(54990 + adj) }
  specs[`Toyota|bZ3C|${yr}|AWD`] = { ...bz3cBase, drivetrain: 'AWD', power: 220, torque: 430, battery: '72.8 kWh', range: 490, weight: 1960, acceleration: 5.5, price: p(64990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement124.json', JSON.stringify(out, null, 2))
console.log(`supplement124.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
