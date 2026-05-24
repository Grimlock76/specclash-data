'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FORD RANGER P703 — missing trims (XL, XLT, Wildtrak, Raptor)
// FX4 Max spec already exists; adding the remaining 2022–2024 trims
// ─────────────────────────────────────────────────────────────
const rangerXL = {
  engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 125, torque: 400, weight: 2055, seats: 5,
  fc: 7.5, fh: null, fx: null,
  acceleration: 11.5, topSpeed: 170
}
const rangerXLT = {
  engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 154, torque: 500, weight: 2130, seats: 5,
  fc: 7.8, fh: null, fx: null,
  acceleration: 10.0, topSpeed: 185
}
const rangerWildtrak = {
  engine: '2.0L 4-cyl Bi-Turbo TDCi', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 154, torque: 500, weight: 2165, seats: 5,
  fc: 7.9, fh: null, fx: null,
  acceleration: 10.0, topSpeed: 185
}
const rangerRaptor = {
  engine: '3.0L V6 EcoBoost Petrol', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 224, torque: 491, weight: 2283, seats: 5,
  fc: 12.6, fh: null, fx: null,
  acceleration: 7.0, topSpeed: 200
}
const rangerPrices = {
  'P703 XL':       { '2022': 42490, '2023': 44490, '2024': 46490 },
  'P703 XLT':      { '2022': 54490, '2023': 56490, '2024': 58490 },
  'P703 Wildtrak': { '2022': 59990, '2023': 62490, '2024': 64990 },
  'P703 Raptor':   { '2022': 83990, '2023': 85990, '2024': 87990 },
}
const rangerSpecs = {
  'P703 XL': rangerXL, 'P703 XLT': rangerXLT,
  'P703 Wildtrak': rangerWildtrak, 'P703 Raptor': rangerRaptor,
}
for (const yr of ['2022','2023','2024']) {
  for (const [trim, spc] of Object.entries(rangerSpecs)) {
    specs[`Ford|Ranger|${yr}|${trim}`] = { ...spc, price: p(rangerPrices[trim][yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI VENUE (2020–2026) — subcompact SUV
// ─────────────────────────────────────────────────────────────
const venueBase = {
  engine: '1.6L 4-cyl MPI', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'FWD', transmission: 'IVT',
  power: 88, torque: 151, weight: 1155, seats: 5,
  fc: 6.8, fh: null, fx: null,
  acceleration: 11.5, topSpeed: 171
}
const venuePrices = {
  Active:  { '2020': 24990,'2021': 25990,'2022': 26990,'2023': 27990,'2024': 28990,'2025': 29990,'2026': 30990 },
  Elite:   { '2020': 29490,'2021': 30490,'2022': 31490,'2023': 32490,'2024': 33490,'2025': 34490,'2026': 35490 },
  'N Line':{ '2020': 33990,'2021': 34990,'2022': 35990,'2023': 36990,'2024': 37990,'2025': 38990,'2026': 39990 },
}
for (const yr of ['2020','2021','2022','2023','2024','2025','2026']) {
  for (const [trim, prices] of Object.entries(venuePrices)) {
    specs[`Hyundai|Venue|${yr}|${trim}`] = { ...venueBase, price: p(prices[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// KIA STONIC (2018–2024) — subcompact crossover
// ─────────────────────────────────────────────────────────────
const stonicBase = {
  engine: '1.0L 3-cyl T-GDi Turbo', fuelType: 'petrol', displacement: 998,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-spd DCT',
  power: 74, torque: 171, weight: 1170, seats: 5,
  fc: 6.2, fh: null, fx: null,
  acceleration: 11.9, topSpeed: 185
}
const stonicPrices = {
  S:        { '2018': 24990,'2019': 25490,'2020': 25990,'2021': 26490,'2022': 27490,'2023': 28490,'2024': 29490 },
  Sport:    { '2018': 27990,'2019': 28490,'2020': 28990,'2021': 29490,'2022': 30490,'2023': 31490,'2024': 32490 },
  'GT-Line':{ '2018': 30990,'2019': 31490,'2020': 31990,'2021': 32490,'2022': 33490,'2023': 34490,'2024': 35490 },
}
for (const yr of ['2018','2019','2020','2021','2022','2023','2024']) {
  for (const [trim, prices] of Object.entries(stonicPrices)) {
    specs[`Kia|Stonic|${yr}|${trim}`] = { ...stonicBase, price: p(prices[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-80 (2024–2026) — 3-row large SUV
// ─────────────────────────────────────────────────────────────
const cx80Diesel = {
  engine: '3.3L 6-cyl e-Skyactiv D Turbo Diesel', fuelType: 'diesel', displacement: 3283,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 187, torque: 550, weight: 2175, seats: 7,
  fc: 6.6, fh: null, fx: null,
  acceleration: 8.8, topSpeed: 200
}
const cx80Petrol = {
  engine: '2.5L 4-cyl e-Skyactiv G', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 141, torque: 252, weight: 2040, seats: 7,
  fc: 8.0, fh: null, fx: null,
  acceleration: 10.8, topSpeed: 195
}
const cx80PHEV = {
  engine: '2.5L 4-cyl e-Skyactiv PHEV', fuelType: 'hybrid', displacement: 2488,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 241, torque: 500, weight: 2290, seats: 6,
  fc: 1.4, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 200, range: 74
}
const cx80Prices = {
  'GT Diesel':       { '2024': 61990, '2025': 63990, '2026': 65990 },
  'GT SP Diesel':    { '2024': 69990, '2025': 71990, '2026': 73990 },
  'Azami Diesel':    { '2024': 79990, '2025': 81990, '2026': 83990 },
  'GT Petrol':       { '2024': 57990, '2025': 59990, '2026': 61990 },
  'Azami PHEV':      { '2024': 89990, '2025': 91990, '2026': 93990 },
}
const cx80SpecMap = {
  'GT Diesel': cx80Diesel, 'GT SP Diesel': cx80Diesel,
  'Azami Diesel': cx80Diesel, 'GT Petrol': cx80Petrol,
  'Azami PHEV': cx80PHEV,
}
for (const yr of ['2024','2025','2026']) {
  for (const [trim, prices] of Object.entries(cx80Prices)) {
    specs[`Mazda|CX-80|${yr}|${trim}`] = { ...cx80SpecMap[trim], price: p(prices[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement127.json', JSON.stringify(out, null, 2))
console.log(`supplement127.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
