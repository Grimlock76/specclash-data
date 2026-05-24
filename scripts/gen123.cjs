'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW XM (2023–2026) — standalone performance PHEV SUV
// ─────────────────────────────────────────────────────────────
const xmBase = {
  engine: '4.4L V8 TwinPower PHEV xDrive', fuelType: 'hybrid',
  displacement: 4395, cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 360, torque: 800, weight: 2710, seats: 5,
  fc: 3.1, fh: null, fx: null,
  acceleration: 4.3, topSpeed: 250,
  range: 88
}
const xmLabelRed = { ...xmBase, power: 460, torque: 900, acceleration: 3.8 }
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':5000,'2025':8000,'2026':11000 }[yr]
  specs[`BMW|XM|${yr}|XM`] = { ...xmBase, price: p(249900 + adj) }
  specs[`BMW|XM|${yr}|XM Label Red`] = { ...xmLabelRed, price: p(329900 + adj) }
  specs[`BMW|XM|${yr}|XM Label Gold`] = { ...xmLabelRed, price: p(369900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// LEXUS TX (2024–2026) — 3-row luxury SUV
// ─────────────────────────────────────────────────────────────
const tx350 = {
  engine: '2.4L 4-cyl Turbo', fuelType: 'petrol', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 210, torque: 430, weight: 2145, seats: 8,
  fc: 9.6, fh: null, fx: null,
  acceleration: 7.0, topSpeed: 200
}
const tx500h = {
  engine: '2.4L 4-cyl Turbo Hybrid', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Auto',
  power: 273, torque: 630, weight: 2350, seats: 8,
  fc: 7.1, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 200
}
const tx550h = {
  engine: '2.4L 4-cyl Turbo PHEV', fuelType: 'hybrid', displacement: 2393,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Auto',
  power: 280, torque: 680, weight: 2455, seats: 7,
  fc: 2.8, fh: null, fx: null,
  acceleration: 5.9, topSpeed: 200,
  range: 84
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Lexus|TX|${yr}|TX 350`] = { ...tx350, price: p(99990 + adj) }
  specs[`Lexus|TX|${yr}|TX 500h`] = { ...tx500h, price: p(114990 + adj) }
  specs[`Lexus|TX|${yr}|TX 550h+`] = { ...tx550h, price: p(129990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// LEXUS GX 550 (2024–2026) — spec for existing trim
// ─────────────────────────────────────────────────────────────
const gx550 = {
  engine: '3.4L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3444,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 260, torque: 550, weight: 2560, seats: 7,
  fc: 12.0, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 210
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Lexus|GX|${yr}|GX 550`] = { ...gx550, price: p(119990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE CAYENNE E-HYBRID trims (2019–2026)
// Cayenne E-Hybrid (base), E-Hybrid Coupe, Turbo E-Hybrid
// ─────────────────────────────────────────────────────────────
const cayEH = {
  engine: '3.0L V6 Turbo E-Hybrid', fuelType: 'hybrid', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd tiptronic',
  power: 340, torque: 700, weight: 2225, seats: 5,
  fc: 3.4, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 253,
  range: 42
}
const cayTurboEH = {
  engine: '4.0L V8 TwinTurbo E-Hybrid', fuelType: 'hybrid', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd tiptronic',
  power: 500, torque: 900, weight: 2355, seats: 5,
  fc: 3.9, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 295,
  range: 42
}
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2019':0,'2020':2000,'2021':4000,'2022':6000,'2023':8000,'2024':10000,'2025':12000,'2026':14000 }[yr]
  specs[`Porsche|Cayenne|${yr}|E-Hybrid`] = { ...cayEH, price: p(149900 + adj) }
  specs[`Porsche|Cayenne|${yr}|E-Hybrid Coupe`] = { ...cayEH, weight: 2255, price: p(156900 + adj) }
  if (parseInt(yr) >= 2024) {
    specs[`Porsche|Cayenne|${yr}|Turbo E-Hybrid`] = { ...cayTurboEH, price: p(299900 + adj) }
  }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE PANAMERA E-HYBRID specs (existing trims in makes.json)
// "Turbo S E-Hybrid Sport Turismo", "Panamera Turbo E-Hybrid", "4S Sport Turismo"
// ─────────────────────────────────────────────────────────────
const panEH4 = {
  engine: '2.9L V6 TwinTurbo E-Hybrid', fuelType: 'hybrid', displacement: 2894,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd PDK',
  power: 346, torque: 700, weight: 2190, seats: 4,
  fc: 2.9, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 294,
  range: 68
}
const panTurboEH = {
  engine: '4.0L V8 TwinTurbo E-Hybrid', fuelType: 'hybrid', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd PDK',
  power: 544, torque: 1050, weight: 2340, seats: 4,
  fc: 3.5, fh: null, fx: null,
  acceleration: 3.2, topSpeed: 315,
  range: 68
}
const panTurboSEH = {
  engine: '4.0L V8 TwinTurbo E-Hybrid Sport Turismo', fuelType: 'hybrid', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd PDK',
  power: 544, torque: 1050, weight: 2380, seats: 4,
  fc: 3.7, fh: null, fx: null,
  acceleration: 3.2, topSpeed: 310,
  range: 61
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':3000,'2023':6000,'2024':9000,'2025':12000,'2026':15000 }[yr]
  specs[`Porsche|Panamera|${yr}|Turbo S E-Hybrid Sport Turismo`] = { ...panTurboSEH, price: p(399900 + adj) }
  if (parseInt(yr) >= 2024) {
    specs[`Porsche|Panamera|${yr}|Panamera Turbo E-Hybrid`] = { ...panTurboEH, price: p(369900 + adj) }
    specs[`Porsche|Panamera|${yr}|4 E-Hybrid`] = { ...panEH4, price: p(249900 + adj) }
  }
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN ID.4 specs (2022–2026) — existing trims need data
// ─────────────────────────────────────────────────────────────
const id4Pro = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '77.0 kWh', range: 530,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 2155, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 160
}
const id4Pro4M = {
  engine: 'Dual Electric Motor 4MOTION', fuelType: 'electric',
  battery: '77.0 kWh', range: 490,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 195, torque: 460, weight: 2270, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.2, topSpeed: 180
}
const id4GTX = {
  engine: 'Dual Electric Motor GTX 4MOTION', fuelType: 'electric',
  battery: '77.0 kWh', range: 480,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 250, torque: 679, weight: 2320, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.2, topSpeed: 180
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000,'2026':8000 }[yr]
  specs[`Volkswagen|ID.4|${yr}|Pro`] = { ...id4Pro, price: p(69990 + adj) }
  specs[`Volkswagen|ID.4|${yr}|Pro 4MOTION`] = { ...id4Pro4M, price: p(79990 + adj) }
  specs[`Volkswagen|ID.4|${yr}|GTX`] = { ...id4GTX, price: p(89990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// KIA EV9 GT spec (2024–2026) — exists as trim, needs data
// ─────────────────────────────────────────────────────────────
const ev9GT = {
  engine: 'Dual Electric Motor GT', fuelType: 'electric',
  battery: '99.8 kWh', range: 480,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 430, torque: 700, weight: 2610, seats: 6,
  fc: null, fh: null, fx: null,
  acceleration: 4.3, topSpeed: 206
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Kia|EV9|${yr}|GT`] = { ...ev9GT, price: p(109990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ E300e (2024–2026) — PHEV trim on E-Class
// ─────────────────────────────────────────────────────────────
const e300e = {
  engine: '2.0L 4-cyl Turbo PHEV', fuelType: 'hybrid', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-spd Auto',
  power: 230, torque: 550, weight: 2135, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 240,
  range: 100
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Mercedes-Benz|E-Class|${yr}|E300e`] = { ...e300e, price: p(129900 + adj) }
  specs[`Mercedes-Benz|E-Class|${yr}|E400e 4MATIC`] = { ...e300e, drivetrain: 'AWD', power: 260, torque: 600, price: p(144900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI TUCSON PHEV specs (2021–2026) — existing trims
// ─────────────────────────────────────────────────────────────
const tucsonPHEV = {
  engine: '1.6L 4-cyl T-GDi PHEV', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 195, torque: 350, weight: 1938, seats: 5,
  fc: 1.6, fh: null, fx: null,
  acceleration: 8.3, topSpeed: 193,
  range: 62
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1500,'2023':3000,'2024':4000,'2025':5000,'2026':6000 }[yr]
  specs[`Hyundai|Tucson|${yr}|Elite PHEV`] = { ...tucsonPHEV, price: p(56990 + adj) }
  specs[`Hyundai|Tucson|${yr}|Highlander PHEV`] = { ...tucsonPHEV, price: p(62990 + adj) }
  if (yr === '2021') {
    specs[`Hyundai|Tucson|${yr}|Active X`] = { ...tucsonPHEV, price: p(49990) }
  }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI SANTA FE PHEV specs (2022–2026) — existing trims
// ─────────────────────────────────────────────────────────────
const sfPHEV = {
  engine: '1.6L 4-cyl T-GDi PHEV', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 195, torque: 350, weight: 2005, seats: 7,
  fc: 1.7, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 193,
  range: 55
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':3000,'2025':4000,'2026':5000 }[yr]
  specs[`Hyundai|Santa Fe|${yr}|Elite PHEV`] = { ...sfPHEV, price: p(64990 + adj) }
  specs[`Hyundai|Santa Fe|${yr}|Calligraphy PHEV`] = { ...sfPHEV, price: p(72990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement123.json', JSON.stringify(out, null, 2))
console.log(`supplement123.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
