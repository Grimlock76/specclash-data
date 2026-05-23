'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// HYUNDAI IONIQ 9 (2025–2026) — 3-row electric SUV
// ─────────────────────────────────────────────────────────────
const i9LR = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '110.3 kWh', range: 620,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 160, torque: 350, weight: 2625, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 9.4, topSpeed: 185
}
const i9AWD = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '110.3 kWh', range: 570,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 283, torque: 605, weight: 2810, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 5.5, topSpeed: 185
}
for (const yr of ['2025','2026']) {
  const adj = { '2025':0,'2026':3000 }[yr]
  specs[`Hyundai|Ioniq 9|${yr}|Premium`] = { ...i9LR, price: p(99990 + adj) }
  specs[`Hyundai|Ioniq 9|${yr}|Calligraphy`] = { ...i9LR, price: p(114990 + adj) }
  specs[`Hyundai|Ioniq 9|${yr}|AWD Performance`] = { ...i9AWD, price: p(119990 + adj) }
  specs[`Hyundai|Ioniq 9|${yr}|Calligraphy AWD`] = { ...i9AWD, price: p(129990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// BMW 2 SERIES GRAN COUPE (2020–2026) — compact 4-door
// ─────────────────────────────────────────────────────────────
const bmw218i = {
  engine: '1.5L 3-cyl Turbo', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-spd DCT',
  power: 103, torque: 220, weight: 1430, seats: 5,
  fc: 5.5, fh: null, fx: null,
  acceleration: 9.2, topSpeed: 205
}
const bmw220i = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DCT',
  power: 131, torque: 300, weight: 1460, seats: 5,
  fc: 6.1, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 233
}
const bmwM235i = {
  engine: '2.0L 4-cyl Turbo xDrive', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 225, torque: 450, weight: 1605, seats: 5,
  fc: 7.5, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250
}
for (const yr of ['2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2020':0,'2021':1000,'2022':2500,'2023':3500,'2024':4500,'2025':5500,'2026':6500 }[yr]
  specs[`BMW|2 Series Gran Coupe|${yr}|218i`] = { ...bmw218i, price: p(44900 + adj) }
  specs[`BMW|2 Series Gran Coupe|${yr}|220i`] = { ...bmw220i, price: p(52900 + adj) }
  specs[`BMW|2 Series Gran Coupe|${yr}|M235i xDrive`] = { ...bmwM235i, price: p(72900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// JEEP AVENGER (2023–2026) — small crossover SUV (EV + petrol)
// ─────────────────────────────────────────────────────────────
const avengEV = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 400,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 260, weight: 1530, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 150
}
const avengPetrol = {
  engine: '1.2L 3-cyl Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-spd Auto',
  power: 96, torque: 205, weight: 1365, seats: 5,
  fc: 5.8, fh: null, fx: null,
  acceleration: 10.2, topSpeed: 182
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':2000,'2025':3500,'2026':5000 }[yr]
  specs[`Jeep|Avenger|${yr}|Longitude`] = { ...avengPetrol, price: p(36990 + adj) }
  specs[`Jeep|Avenger|${yr}|Altitude`] = { ...avengPetrol, price: p(41990 + adj) }
  specs[`Jeep|Avenger|${yr}|Summit`] = { ...avengPetrol, price: p(46990 + adj) }
  specs[`Jeep|Avenger|${yr}|Electric`] = { ...avengEV, price: p(54990 + adj) }
  specs[`Jeep|Avenger|${yr}|Electric Summit`] = { ...avengEV, price: p(59990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// HONDA e:Ny1 (2024–2026) — small electric crossover
// ─────────────────────────────────────────────────────────────
const eny1Base = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '68.8 kWh', range: 415,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 1815, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 160
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':2000,'2026':3500 }[yr]
  specs[`Honda|e:Ny1|${yr}|e:Ny1`] = { ...eny1Base, price: p(56990 + adj) }
  specs[`Honda|e:Ny1|${yr}|Advance`] = { ...eny1Base, price: p(62990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// GWM ORA (2022–2026) — compact electric hatchback
// (sold as Ora Funky Cat / Ora Good Cat in AU)
// ─────────────────────────────────────────────────────────────
const oraSR = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '48.0 kWh', range: 310,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 105, torque: 210, weight: 1530, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 140
}
const oraLR = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '63.0 kWh', range: 420,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 126, torque: 250, weight: 1635, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 155
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':2500,'2025':3500,'2026':4500 }[yr]
  specs[`GWM|Ora|${yr}|Standard Range`] = { ...oraSR, price: p(37990 + adj) }
  specs[`GWM|Ora|${yr}|Long Range`] = { ...oraLR, price: p(43990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// BYD SEAL U (2023–2026) — PHEV/pure-electric mid SUV
// DM-i = PHEV; EV = pure electric
// ─────────────────────────────────────────────────────────────
const sealUDMi = {
  engine: '1.5L 4-cyl DM-i PHEV', fuelType: 'hybrid',
  displacement: 1498, cylinders: 4, drivetrain: 'FWD', transmission: 'Auto',
  power: 160, torque: 310, weight: 2085, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 7.9, topSpeed: 185,
  range: 110
}
const sealUEV = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '87.0 kWh', range: 500,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 230, torque: 535, weight: 2185, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.9, topSpeed: 185
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':2000,'2025':3500,'2026':5000 }[yr]
  specs[`BYD|Seal U|${yr}|DM-i`] = { ...sealUDMi, price: p(49990 + adj) }
  specs[`BYD|Seal U|${yr}|DM-i Premium`] = { ...sealUDMi, price: p(54990 + adj) }
  specs[`BYD|Seal U|${yr}|EV`] = { ...sealUEV, price: p(62990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT e-308 (2023–2026) — electric hatchback
// ─────────────────────────────────────────────────────────────
const e308 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 415,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 260, weight: 1570, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.8, topSpeed: 170
}
const e308SW = { ...e308, weight: 1620 }
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':2000,'2025':3500,'2026':5000 }[yr]
  specs[`Peugeot|308|${yr}|e-308`] = { ...e308, price: p(53990 + adj) }
  specs[`Peugeot|308|${yr}|e-308 SW`] = { ...e308SW, price: p(57990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// KIA SELTOS hybrid (2024–2026) — X-Line HEV
// ─────────────────────────────────────────────────────────────
const seltosHEV = {
  engine: '1.6L 4-cyl Hybrid', fuelType: 'hybrid',
  displacement: 1598, cylinders: 4, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 104, torque: 264, weight: 1575, seats: 5,
  fc: 5.3, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 175
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':1500,'2026':2500 }[yr]
  specs[`Kia|Seltos|${yr}|X-Line HEV`] = { ...seltosHEV, price: p(47990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI KONA electric (2021–2026) — electric SUV trims
// Trims in makes.json: Electric, Electric Active, Electric Highlander
// Need spec entries for these
// ─────────────────────────────────────────────────────────────
const konaEV39 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '39.2 kWh', range: 305,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 100, torque: 255, weight: 1545, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 9.9, topSpeed: 155
}
const konaEV64 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '64.8 kWh', range: 490,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 150, torque: 255, weight: 1685, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.6, topSpeed: 167
}
// 2021-2023 gen 1 Kona EV (64 kWh only sold in AU)
for (const yr of ['2021','2022','2023']) {
  const adj = { '2021':0,'2022':2000,'2023':3500 }[yr]
  specs[`Hyundai|Kona|${yr}|Electric`] = { ...konaEV39, price: p(49990 + adj) }
  specs[`Hyundai|Kona|${yr}|Electric Active`] = { ...konaEV64, price: p(59990 + adj) }
  specs[`Hyundai|Kona|${yr}|Electric Highlander`] = { ...konaEV64, price: p(67990 + adj) }
}
// 2024+ gen 2 Kona EV
const konaEV2Gen = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '65.4 kWh', range: 514,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 160, torque: 255, weight: 1685, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.8, topSpeed: 162
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':1500,'2026':2500 }[yr]
  specs[`Hyundai|Kona|${yr}|Electric`] = { ...konaEV2Gen, price: p(52990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN ID.3 (2021–2026) — electric hatchback
// (already exists? Let me just include it since it's popular)
// ─────────────────────────────────────────────────────────────
const id3Base = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '58.0 kWh', range: 420,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 1820, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.3, topSpeed: 160
}
const id3Pro = {
  engine: 'Single Electric Motor Pro', fuelType: 'electric',
  battery: '77.0 kWh', range: 549,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 1920, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.9, topSpeed: 160
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1500,'2023':3000,'2024':4000,'2025':5000,'2026':6000 }[yr]
  specs[`Volkswagen|ID.3|${yr}|Pro`] = { ...id3Base, price: p(54990 + adj) }
  specs[`Volkswagen|ID.3|${yr}|Pro S`] = { ...id3Pro, price: p(64990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement122.json', JSON.stringify(out, null, 2))
console.log(`supplement122.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
