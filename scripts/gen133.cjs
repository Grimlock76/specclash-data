'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHERY TIGGO 4 PRO (2023–2026) — compact SUV (AU market)
// ─────────────────────────────────────────────────────────────
const tiggo4Base = {
  engine: '1.5L 4-cyl Turbo', fuelType: 'petrol', displacement: 1490,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-spd DCT',
  power: 115, torque: 215, weight: 1445, seats: 5,
  fc: 7.2, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 185
}
const tiggo4Prem = { ...tiggo4Base, weight: 1470 }
const tiggo4Prices = {
  Lite:    { '2023':28990,'2024':29990,'2025':30990,'2026':31990 },
  Premium: { '2023':32990,'2024':33990,'2025':34990,'2026':35990 },
}
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Chery|Tiggo 4 Pro|${yr}|Lite`]    = { ...tiggo4Base, price: p(tiggo4Prices.Lite[yr]) }
  specs[`Chery|Tiggo 4 Pro|${yr}|Premium`] = { ...tiggo4Prem, price: p(tiggo4Prices.Premium[yr]) }
}

// ─────────────────────────────────────────────────────────────
// BMW 4 SERIES GRAN COUPE G26 (2022–2026) — 4-door fastback (AU)
// ─────────────────────────────────────────────────────────────
const gcBase420i = {
  engine: '2.0L 4-cyl TwinPower Turbo B48', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-spd Steptronic',
  power: 135, torque: 300, weight: 1605, seats: 5,
  fc: 6.7, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 235
}
const gcBase430i = {
  ...gcBase420i,
  power: 190, torque: 400, weight: 1650,
  fc: 7.1,
  acceleration: 5.8, topSpeed: 250
}
const gcM440i = {
  engine: '3.0L 6-cyl TwinPower Turbo B58', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Steptronic',
  power: 275, torque: 500, weight: 1840, seats: 5,
  fc: 8.0, fh: null, fx: null,
  acceleration: 4.7, topSpeed: 250
}
const gc4Prices = {
  '420i Gran Coupe':        { '2022':82900,'2023':85900,'2024':87900,'2025':89900,'2026':91900 },
  '430i Gran Coupe':        { '2022':97900,'2023':100900,'2024':103900,'2025':106900,'2026':109900 },
  'M440i Gran Coupe xDrive':{ '2022':119900,'2023':124900,'2024':129900,'2025':134900,'2026':139900 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`BMW|4 Series Gran Coupe|${yr}|420i Gran Coupe`]         = { ...gcBase420i, price: p(gc4Prices['420i Gran Coupe'][yr]) }
  specs[`BMW|4 Series Gran Coupe|${yr}|430i Gran Coupe`]         = { ...gcBase430i, price: p(gc4Prices['430i Gran Coupe'][yr]) }
  specs[`BMW|4 Series Gran Coupe|${yr}|M440i Gran Coupe xDrive`] = { ...gcM440i,    price: p(gc4Prices['M440i Gran Coupe xDrive'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ SPRINTER VS30 (2019–2026) — commercial van (AU)
// ─────────────────────────────────────────────────────────────
const sprinter314 = {
  engine: '2.0L 4-cyl OM654 CDI', fuelType: 'diesel', displacement: 1950,
  cylinders: 4, drivetrain: 'FWD', transmission: '9-spd G-Tronic',
  power: 100, torque: 330, weight: 2275, seats: 3,
  fc: 8.5, fh: null, fx: null,
  acceleration: 14.5, topSpeed: 155
}
const sprinter316 = {
  ...sprinter314,
  power: 120, torque: 340
}
const sprinter319 = {
  engine: '3.0L V6 OM642 CDI', fuelType: 'diesel', displacement: 2987,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-spd G-Tronic',
  power: 140, torque: 440, weight: 2440, seats: 3,
  fc: 9.8, fh: null, fx: null,
  acceleration: 12.5, topSpeed: 165
}
const spPrices = {
  '314 CDI': { '2019':65990,'2020':66990,'2021':67990,'2022':68990,'2023':69990,'2024':71990,'2025':73990,'2026':75990 },
  '316 CDI': { '2019':72990,'2020':73990,'2021':74990,'2022':75990,'2023':76990,'2024':78990,'2025':80990,'2026':82990 },
  '319 CDI': { '2019':85990,'2020':86990,'2021':87990,'2022':88990,'2023':89990,'2024':91990,'2025':93990,'2026':95990 },
}
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  specs[`Mercedes-Benz|Sprinter|${yr}|314 CDI`] = { ...sprinter314, price: p(spPrices['314 CDI'][yr]) }
  specs[`Mercedes-Benz|Sprinter|${yr}|316 CDI`] = { ...sprinter316, price: p(spPrices['316 CDI'][yr]) }
  specs[`Mercedes-Benz|Sprinter|${yr}|319 CDI`] = { ...sprinter319, price: p(spPrices['319 CDI'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement133.json', JSON.stringify(out, null, 2))
console.log(`supplement133.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
