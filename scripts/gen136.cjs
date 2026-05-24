'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// INEOS GRENADIER (2023–2026) — new make, ladder-frame 4x4 (AU)
// ─────────────────────────────────────────────────────────────
const grenadierPetrol = {
  engine: '3.0L 6-cyl B58 TwinPower Turbo', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: '4WD', transmission: '8-spd ZF Auto',
  power: 210, torque: 450, weight: 2350, seats: 5,
  fc: 12.7, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 161
}
const grenadierDiesel = {
  engine: '3.0L 6-cyl B57 TwinPower Turbo Diesel', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: '4WD', transmission: '8-spd ZF Auto',
  power: 183, torque: 550, weight: 2400, seats: 5,
  fc: 10.2, fh: null, fx: null,
  acceleration: 9.2, topSpeed: 161
}
const grenadierQDiesel = { ...grenadierDiesel, seats: 5, weight: 2570 }
const grenadierPrices = {
  'Trailmaster Petrol': { '2023':136000,'2024':139000,'2025':142000,'2026':145000 },
  'Trailmaster Diesel': { '2023':139000,'2024':142000,'2025':145000,'2026':148000 },
  'Quartermaster Diesel': { '2023':149000,'2024':152000,'2025':155000,'2026':158000 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`INEOS|Grenadier|${yr}|Trailmaster Petrol`]    = { ...grenadierPetrol, price: p(grenadierPrices['Trailmaster Petrol'][yr]) }
  specs[`INEOS|Grenadier|${yr}|Trailmaster Diesel`]    = { ...grenadierDiesel, price: p(grenadierPrices['Trailmaster Diesel'][yr]) }
  specs[`INEOS|Quartermaster|${yr}|Diesel`]            = { ...grenadierQDiesel, price: p(grenadierPrices['Quartermaster Diesel'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// BMW M3 TOURING G81 (2022–2026) — wagon body, AWD only (AU)
// ─────────────────────────────────────────────────────────────
const m3touring = {
  engine: '3.0L 6-cyl S58 Twin-Turbo', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd M Steptronic',
  power: 375, torque: 600, weight: 1730, seats: 5,
  fc: 10.8, fh: null, fx: null,
  acceleration: 3.6, topSpeed: 290
}
const m3tPrices = { '2022':199900,'2023':205900,'2024':211900,'2025':217900,'2026':223900 }
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`BMW|M3|${yr}|Touring Competition xDrive`] = { ...m3touring, price: p(m3tPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// BMW M4 COMPETITION CONVERTIBLE G83 (2022–2026) — soft-top (AU)
// ─────────────────────────────────────────────────────────────
const m4convBase = {
  engine: '3.0L 6-cyl S58 Twin-Turbo', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, transmission: '8-spd M Steptronic',
  power: 375, torque: 600, weight: 1895, seats: 4,
  fc: 10.5, fh: null, fx: null,
  topSpeed: 250
}
const m4convRWD = { ...m4convBase, drivetrain: 'RWD', acceleration: 4.2 }
const m4convAWD = { ...m4convBase, drivetrain: 'AWD', acceleration: 3.9, weight: 1975 }
const m4convPrices = {
  'M4 Competition Convertible':        { '2022':225900,'2023':231900,'2024':237900,'2025':243900,'2026':249900 },
  'M4 Competition xDrive Convertible': { '2022':244900,'2023':250900,'2024':256900,'2025':262900,'2026':268900 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`BMW|M4|${yr}|M4 Competition Convertible`]        = { ...m4convRWD, price: p(m4convPrices['M4 Competition Convertible'][yr]) }
  specs[`BMW|M4|${yr}|M4 Competition xDrive Convertible`] = { ...m4convAWD, price: p(m4convPrices['M4 Competition xDrive Convertible'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER P510e PHEV L460 (2022–2026) (AU)
// ─────────────────────────────────────────────────────────────
const rrPhevBase = {
  engine: '3.0L 6-cyl Ingenium Petrol PHEV', fuelType: 'hybrid', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 375, torque: 700, weight: 2520, seats: 5,
  fc: 0.8, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 225, range: 113
}
const rrPhevPrices = {
  'P510e SE':            { '2022':220000,'2023':228000,'2024':235000,'2025':242000,'2026':249000 },
  'P510e Autobiography': { '2022':265000,'2023':273000,'2024':281000,'2025':289000,'2026':297000 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`Land Rover|Range Rover|${yr}|P510e SE`]            = { ...rrPhevBase, price: p(rrPhevPrices['P510e SE'][yr]) }
  specs[`Land Rover|Range Rover|${yr}|P510e Autobiography`] = { ...rrPhevBase, price: p(rrPhevPrices['P510e Autobiography'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER RANGE ROVER SPORT P510e PHEV L461 (2023–2026) (AU)
// ─────────────────────────────────────────────────────────────
const rrsPhevBase = {
  engine: '3.0L 6-cyl Ingenium Petrol PHEV', fuelType: 'hybrid', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 375, torque: 700, weight: 2350, seats: 5,
  fc: 0.8, fh: null, fx: null,
  acceleration: 5.3, topSpeed: 220, range: 113
}
const rrsPrices = {
  'P510e SE': { '2023':170000,'2024':176000,'2025':182000,'2026':188000 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Land Rover|Range Rover Sport|${yr}|P510e SE`] = { ...rrsPhevBase, price: p(rrsPrices['P510e SE'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 GT3 992.2 (2024–2026) — NA flat-six track car (AU)
// ─────────────────────────────────────────────────────────────
const p911gt3 = {
  engine: '4.0L 6-cyl Flat-Six NA', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-spd PDK',
  power: 375, torque: 470, weight: 1418, seats: 4,
  fc: 13.0, fh: null, fx: null,
  acceleration: 3.4, topSpeed: 318
}
const gt3Prices = { '2024':518200,'2025':534900,'2026':551600 }
for (const yr of ['2024','2025','2026']) {
  specs[`Porsche|911|${yr}|GT3`] = { ...p911gt3, price: p(gt3Prices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement136.json', JSON.stringify(out, null, 2))
console.log(`supplement136.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
