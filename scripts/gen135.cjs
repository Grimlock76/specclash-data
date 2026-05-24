'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CITROËN C5 X (2022–2026) — flagship fastback SUV (AU market)
// ─────────────────────────────────────────────────────────────
const c5xPetrol = {
  engine: '1.2L 3-cyl PureTech 130', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-spd EAT8',
  power: 96, torque: 230, weight: 1580, seats: 5,
  fc: 6.1, fh: null, fx: null,
  acceleration: 9.8, topSpeed: 210
}
const c5xPHEV = {
  engine: '1.6L 4-cyl HYbrid4 PHEV', fuelType: 'hybrid', displacement: 1598,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd EAT8',
  power: 165, torque: 360, weight: 1850, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 7.2, topSpeed: 225, range: 55
}
const c5xPrices = {
  'Feel Pack':     { '2022':52990,'2023':54990,'2024':56990,'2025':58990,'2026':60990 },
  'Hybrid4 PHEV':  { '2022':65990,'2023':67990,'2024':69990,'2025':71990,'2026':73990 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`Citroën|C5 X|${yr}|Feel Pack`]    = { ...c5xPetrol, price: p(c5xPrices['Feel Pack'][yr]) }
  specs[`Citroën|C5 X|${yr}|Hybrid4 PHEV`] = { ...c5xPHEV,   price: p(c5xPrices['Hybrid4 PHEV'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// CITROËN C4 extension (2024–2026) — new-gen C4 / ë-C4 (AU)
// ─────────────────────────────────────────────────────────────
const c4Petrol = {
  engine: '1.2L 3-cyl PureTech 130', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-spd EAT8',
  power: 96, torque: 230, weight: 1445, seats: 5,
  fc: 5.7, fh: null, fx: null,
  acceleration: 9.7, topSpeed: 210
}
const c4Electric = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '54.0 kWh', range: 420,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 115, torque: 260, weight: 1570, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 150
}
const c4Prices = {
  Attraction: { '2024':45990,'2025':47990,'2026':49990 },
  Exclusive:  { '2024':51990,'2025':53990,'2026':55990 },
  Shine:      { '2024':54990,'2025':56990,'2026':58990 },
  'e-C4':     { '2024':57990,'2025':59990,'2026':61990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Citroën|C4|${yr}|Attraction`] = { ...c4Petrol,   price: p(c4Prices.Attraction[yr]) }
  specs[`Citroën|C4|${yr}|Exclusive`]  = { ...c4Petrol,   price: p(c4Prices.Exclusive[yr]) }
  specs[`Citroën|C4|${yr}|Shine`]      = { ...c4Petrol,   price: p(c4Prices.Shine[yr]) }
  specs[`Citroën|C4|${yr}|e-C4`]       = { ...c4Electric, price: p(c4Prices['e-C4'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// FORD E-TRANSIT (2023–2026) — electric Transit van (AU market)
// ─────────────────────────────────────────────────────────────
const eTransit350 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '68.0 kWh', range: 317,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 198, torque: 430, weight: 2985, seats: 3,
  fc: null, fh: null, fx: null,
  acceleration: 12.0, topSpeed: 100
}
const eTransitHR = {
  ...eTransit350,
  weight: 3100
}
const eTransitPrices = {
  '350 L2 H2':    { '2023':82990,'2024':84990,'2025':86990,'2026':88990 },
  '350 L3 H3':    { '2023':87990,'2024':89990,'2025':91990,'2026':93990 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Ford|E-Transit|${yr}|350 L2 H2`] = { ...eTransit350, price: p(eTransitPrices['350 L2 H2'][yr]) }
  specs[`Ford|E-Transit|${yr}|350 L3 H3`] = { ...eTransitHR,  price: p(eTransitPrices['350 L3 H3'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA COASTER (2019–2026) — 30-seat bus/minibus (AU market)
// ─────────────────────────────────────────────────────────────
const coasterDX = {
  engine: '4.0L 4-cyl 1GD-FTV Diesel', fuelType: 'diesel', displacement: 2982,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-spd Auto',
  power: 110, torque: 300, weight: 3900, seats: 21,
  fc: 10.8, fh: null, fx: null,
  acceleration: 18.0, topSpeed: 130
}
const coasterEX = { ...coasterDX, power: 130, torque: 400, weight: 4000, seats: 29 }
const coasterPrices = {
  DX: { '2019':79990,'2020':80990,'2021':81990,'2022':82990,'2023':83990,'2024':85990,'2025':87990,'2026':89990 },
  EX: { '2019':89990,'2020':90990,'2021':91990,'2022':92990,'2023':93990,'2024':95990,'2025':97990,'2026':99990 },
}
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  specs[`Toyota|Coaster|${yr}|DX`] = { ...coasterDX, price: p(coasterPrices.DX[yr]) }
  specs[`Toyota|Coaster|${yr}|EX`] = { ...coasterEX, price: p(coasterPrices.EX[yr]) }
}

// ─────────────────────────────────────────────────────────────
// BMW X3 M50 xDrive (2024–2026) — G45 performance X3 (AU)
// ─────────────────────────────────────────────────────────────
const x3m50 = {
  engine: '3.0L 6-cyl TwinPower Turbo B58', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Steptronic',
  power: 280, torque: 540, weight: 1990, seats: 5,
  fc: 9.1, fh: null, fx: null,
  acceleration: 4.6, topSpeed: 250
}
const x3m50Prices = { '2024':120900,'2025':124900,'2026':128900 }
for (const yr of ['2024','2025','2026']) {
  specs[`BMW|X3|${yr}|M50 xDrive`] = { ...x3m50, price: p(x3m50Prices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement135.json', JSON.stringify(out, null, 2))
console.log(`supplement135.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
