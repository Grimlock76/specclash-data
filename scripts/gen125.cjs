'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN GOLF R (2021–2026) — hot hatch
// ─────────────────────────────────────────────────────────────
const golfR = {
  engine: '2.0L 4-cyl TSI 4MOTION', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
  power: 235, torque: 420, weight: 1570, seats: 5,
  fc: 8.0, fh: null, fx: null,
  acceleration: 4.7, topSpeed: 270
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1500,'2023':3000,'2024':4500,'2025':6000,'2026':7500 }[yr]
  specs[`Volkswagen|Golf|${yr}|R`] = { ...golfR, price: p(64990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN TOUAREG R (2021–2026) — PHEV SUV
// ─────────────────────────────────────────────────────────────
const touaregR = {
  engine: '3.0L V6 TSI PHEV 4MOTION', fuelType: 'hybrid', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 340, torque: 700, weight: 2290, seats: 5,
  fc: 3.0, fh: null, fx: null,
  acceleration: 5.1, topSpeed: 250,
  range: 48
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':2000,'2023':4000,'2024':6000,'2025':8000,'2026':10000 }[yr]
  specs[`Volkswagen|Touareg|${yr}|Touareg R`] = { ...touaregR, price: p(139990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// BMW X2 M35i / M35i xDrive (2022–2026)
// ─────────────────────────────────────────────────────────────
const x2M35iGen1 = {
  engine: '2.0L 4-cyl TwinPower Turbo xDrive', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 225, torque: 450, weight: 1605, seats: 5,
  fc: 7.6, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250
}
const x2M35iGen2 = {
  engine: '2.0L 4-cyl TwinPower Turbo M xDrive', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DCT',
  power: 233, torque: 400, weight: 1720, seats: 5,
  fc: 7.4, fh: null, fx: null,
  acceleration: 5.4, topSpeed: 250
}
for (const yr of ['2022','2023']) {
  const adj = { '2022':0,'2023':2000 }[yr]
  specs[`BMW|X2|${yr}|M35i`] = { ...x2M35iGen1, price: p(79900 + adj) }
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':2000,'2026':4000 }[yr]
  specs[`BMW|X2|${yr}|M35i xDrive`] = { ...x2M35iGen2, price: p(89900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA N (2022–2026) — performance hot SUV
// ─────────────────────────────────────────────────────────────
const konaN = {
  engine: '2.0L 4-cyl Turbo N', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-spd DCT',
  power: 213, torque: 392, weight: 1490, seats: 5,
  fc: 8.0, fh: null, fx: null,
  acceleration: 5.5, topSpeed: 240
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':3000,'2025':4500,'2026':6000 }[yr]
  specs[`Hyundai|Kona N|${yr}|Kona N`] = { ...konaN, price: p(48990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// SKODA ENYAQ RS / 85 / 60 (2022–2026) — all trims
// ─────────────────────────────────────────────────────────────
const enyaq60 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '62.0 kWh', range: 412,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 132, torque: 310, weight: 2080, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 160
}
const enyaq85 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '82.0 kWh', range: 550,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 2175, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.2, topSpeed: 160
}
const enyaqRS = {
  engine: 'Dual Electric Motor RS', fuelType: 'electric',
  battery: '82.0 kWh', range: 490,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 220, torque: 460, weight: 2275, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.5, topSpeed: 180
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000,'2026':8000 }[yr]
  specs[`Skoda|Enyaq|${yr}|60`] = { ...enyaq60, price: p(59990 + adj) }
  specs[`Skoda|Enyaq|${yr}|85`] = { ...enyaq85, price: p(69990 + adj) }
  specs[`Skoda|Enyaq|${yr}|RS`] = { ...enyaqRS, price: p(79990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// HONDA JAZZ e:HEV (2021–2026) — hybrid hatchback
// ─────────────────────────────────────────────────────────────
const jazzHEV = {
  engine: '1.5L 4-cyl e:HEV Hybrid', fuelType: 'hybrid', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'Auto',
  power: 96, torque: 253, weight: 1230, seats: 5,
  fc: 4.5, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 165
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1000,'2023':2000,'2024':3000,'2025':4000,'2026':5000 }[yr]
  specs[`Honda|Jazz|${yr}|e:HEV Vibe`] = { ...jazzHEV, price: p(29990 + adj) }
  specs[`Honda|Jazz|${yr}|e:HEV Luxe`] = { ...jazzHEV, price: p(33990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// LEXUS LM (2023–2026) — ultra-luxury MPV
// ─────────────────────────────────────────────────────────────
const lm300h = {
  engine: '2.5L 4-cyl Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 176, torque: 239, weight: 2200, seats: 4,
  fc: 6.8, fh: null, fx: null,
  acceleration: 10.0, topSpeed: 175
}
const lm500h = {
  engine: '2.4L 4-cyl Turbo Hybrid AWD', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Auto',
  power: 273, torque: 630, weight: 2490, seats: 4,
  fc: 8.5, fh: null, fx: null,
  acceleration: 6.4, topSpeed: 180
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':5000,'2025':8000,'2026':11000 }[yr]
  specs[`Lexus|LM|${yr}|LM 300h`] = { ...lm300h, price: p(199990 + adj) }
  specs[`Lexus|LM|${yr}|LM 500h`] = { ...lm500h, price: p(249990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// AUDI SQ8 e-tron (2023–2026) — performance EV SUV trim
// Spec for existing "SQ8" trim on Q8 e-tron model
// ─────────────────────────────────────────────────────────────
const sq8etron = {
  engine: 'Tri Electric Motor SQ8 quattro', fuelType: 'electric',
  battery: '114.0 kWh', range: 494,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 370, torque: 973, weight: 2730, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 210
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':5000,'2025':8000,'2026':11000 }[yr]
  specs[`Audi|Q8 e-tron|${yr}|SQ8`] = { ...sq8etron, price: p(194900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA C-HR HYBRID / PHEV specs (2024–2026)
// Existing trims: GX Hybrid, GXL Hybrid, GXL PHEV, Koba PHEV
// ─────────────────────────────────────────────────────────────
const chrHybrid = {
  engine: '1.8L 4-cyl Hybrid', fuelType: 'hybrid', displacement: 1797,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 103, torque: 142, weight: 1460, seats: 5,
  fc: 4.3, fh: null, fx: null,
  acceleration: 9.0, topSpeed: 180
}
const chrPHEV = {
  engine: '2.0L 4-cyl PHEV', fuelType: 'hybrid', displacement: 1987,
  cylinders: 4, drivetrain: 'FWD', transmission: 'Auto',
  power: 164, torque: 208, weight: 1600, seats: 5,
  fc: 1.0, fh: null, fx: null,
  acceleration: 7.2, topSpeed: 160,
  range: 66
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':1500,'2026':3000 }[yr]
  specs[`Toyota|C-HR|${yr}|GX Hybrid`] = { ...chrHybrid, price: p(39990 + adj) }
  specs[`Toyota|C-HR|${yr}|GXL Hybrid`] = { ...chrHybrid, price: p(44990 + adj) }
  specs[`Toyota|C-HR|${yr}|GXL PHEV`] = { ...chrPHEV, price: p(49990 + adj) }
  specs[`Toyota|C-HR|${yr}|Koba PHEV`] = { ...chrPHEV, price: p(54990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// NISSAN QASHQAI e-Power specs (2023–2026)
// Existing trims: ST e-Power, ST-L e-Power, Ti e-Power
// ─────────────────────────────────────────────────────────────
const qashqaiEP = {
  engine: '1.5L 3-cyl Turbo e-Power', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: 'Auto',
  power: 140, torque: 330, weight: 1700, seats: 5,
  fc: 6.1, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 170
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':1500,'2025':3000,'2026':4500 }[yr]
  specs[`Nissan|Qashqai|${yr}|ST e-Power`] = { ...qashqaiEP, price: p(44990 + adj) }
  specs[`Nissan|Qashqai|${yr}|ST-L e-Power`] = { ...qashqaiEP, price: p(49990 + adj) }
  specs[`Nissan|Qashqai|${yr}|Ti e-Power`] = { ...qashqaiEP, price: p(54990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// NISSAN LEAF e+ (2022–2026) — existing trim needs spec
// ─────────────────────────────────────────────────────────────
const leafEplus = {
  engine: 'Single Electric Motor e+', fuelType: 'electric',
  battery: '60.0 kWh', range: 385,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 160, torque: 340, weight: 1750, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 157
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':3000,'2025':4500,'2026':6000 }[yr]
  specs[`Nissan|Leaf|${yr}|e+`] = { ...leafEplus, price: p(58990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement125.json', JSON.stringify(out, null, 2))
console.log(`supplement125.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
