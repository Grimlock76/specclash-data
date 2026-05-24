'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TOYOTA LAND CRUISER 200 (2008–2021) — J200 diesel V8
// Representative years; ±2 fuzzy covers adjacent years
// ─────────────────────────────────────────────────────────────
const lc200earlyDiesel = {
  engine: '4.5L V8 Twin-Turbo Diesel 1VD-FTV', fuelType: 'diesel', displacement: 4461,
  cylinders: 8, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 195, torque: 615, weight: 2760, seats: 8,
  fc: 11.5, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 200
}
const lc200lateDiesel = {
  engine: '4.5L V8 Twin-Turbo Diesel 1VD-FTV', fuelType: 'diesel', displacement: 4461,
  cylinders: 8, drivetrain: 'AWD', transmission: '6-spd Auto',
  power: 200, torque: 650, weight: 2790, seats: 8,
  fc: 11.5, fh: null, fx: null,
  acceleration: 9.2, topSpeed: 200
}
const lc200PricesEarly = {
  GX:     { '2008': 66990, '2010': 71990, '2013': 75990 },
  GXL:    { '2008': 77990, '2010': 82990, '2013': 86990 },
  VX:     { '2008': 93990, '2010': 98990, '2013': 101990 },
  Sahara: { '2008': 107990,'2010': 112990,'2013': 116990 },
}
const lc200PricesLate = {
  GX:     { '2016': 80990, '2019': 85990, '2021': 89990 },
  GXL:    { '2016': 91990, '2019': 95990, '2021': 98990 },
  VX:     { '2016': 108990,'2019': 113990,'2021': 119990 },
  Sahara: { '2016': 121990,'2019': 128990,'2021': 135990 },
}
for (const yr of ['2008','2010','2013']) {
  for (const [trim, prices] of Object.entries(lc200PricesEarly)) {
    const wt = trim === 'Sahara' ? 2820 : 2760
    specs[`Toyota|Land Cruiser 200|${yr}|${trim}`] = { ...lc200earlyDiesel, weight: wt, price: p(prices[yr]) }
  }
}
for (const yr of ['2016','2019','2021']) {
  for (const [trim, prices] of Object.entries(lc200PricesLate)) {
    const wt = trim === 'Sahara' ? 2840 : 2790
    specs[`Toyota|Land Cruiser 200|${yr}|${trim}`] = { ...lc200lateDiesel, weight: wt, price: p(prices[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA LAND CRUISER 70 SERIES (2008–2026) — working 4x4
// V8 diesel era; ±2 fuzzy covers adjacent years
// ─────────────────────────────────────────────────────────────
const lc70v8 = {
  engine: '4.5L V8 Twin-Turbo Diesel 1VD-FTV', fuelType: 'diesel', displacement: 4461,
  cylinders: 8, drivetrain: 'AWD', transmission: '5-spd Manual',
  power: 151, torque: 430, weight: 2165, seats: 5,
  fc: 11.8, fh: null, fx: null,
  acceleration: 11.5, topSpeed: 180
}
const lc70Prices = {
  WorkMate: { '2008': 44990,'2012': 50990,'2016': 55990,'2020': 61990,'2024': 72900 },
  GX:       { '2008': 52990,'2012': 58990,'2016': 63990,'2020': 67990,'2024': 80900 },
  GXL:      { '2008': 62990,'2012': 68990,'2016': 73990,'2020': 77990,'2024': 94900 },
}
for (const yr of ['2008','2012','2016','2020','2024']) {
  for (const [trim, prices] of Object.entries(lc70Prices)) {
    specs[`Toyota|Land Cruiser 70|${yr}|${trim}`] = { ...lc70v8, price: p(prices[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// FORD BRONCO (2021–2026) — 4-door off-road SUV
// ─────────────────────────────────────────────────────────────
const broncoBase = {
  engine: '2.3L 4-cyl EcoBoost', fuelType: 'petrol', displacement: 2295,
  cylinders: 4, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 224, torque: 430, weight: 2085, seats: 5,
  fc: 11.5, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 185
}
const broncoBigBend = { ...broncoBase, weight: 2110 }
const broncoWildtrak = {
  engine: '2.7L V6 EcoBoost', fuelType: 'petrol', displacement: 2694,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 250, torque: 542, weight: 2155, seats: 5,
  fc: 12.8, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 195
}
const broncoBadlands = { ...broncoBase, weight: 2130 }
const broncoRaptor = {
  engine: '3.0L V6 EcoBoost Raptor', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 302, torque: 570, weight: 2240, seats: 5,
  fc: 14.5, fh: null, fx: null,
  acceleration: 5.8, topSpeed: 200
}
const broncoPrices = {
  '2021': { Base: 44990, 'Big Bend': 51990, Wildtrak: 57990, Badlands: 59990 },
  '2022': { Base: 45990, 'Big Bend': 52990, Wildtrak: 58990, Badlands: 60990, Raptor: 79990 },
  '2023': { Base: 47490, 'Big Bend': 54490, Wildtrak: 60490, Badlands: 62490, Raptor: 82490 },
  '2024': { Base: 49990, 'Big Bend': 56990, Wildtrak: 62990, Badlands: 64990, Raptor: 85990 },
  '2025': { Base: 51990, 'Big Bend': 58990, Wildtrak: 64990, Badlands: 66990, Raptor: 88990 },
  '2026': { Base: 53990, 'Big Bend': 60990, Wildtrak: 66990, Badlands: 68990, Raptor: 91990 },
}
const broncoSpecMap = {
  Base: broncoBase, 'Big Bend': broncoBigBend, Wildtrak: broncoWildtrak,
  Badlands: broncoBadlands, Raptor: broncoRaptor,
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  for (const [trim, price] of Object.entries(broncoPrices[yr])) {
    specs[`Ford|Bronco|${yr}|${trim}`] = { ...broncoSpecMap[trim], price: p(price) }
  }
}

// ─────────────────────────────────────────────────────────────
// JEEP GRAND CHEROKEE — missing high-performance trims
// Trackhawk (2018–2021), 4xe PHEV (2021–2026), SRT (2014–2020)
// ─────────────────────────────────────────────────────────────
const jgcTrackhawk = {
  engine: '6.2L V8 Supercharged Trackhawk', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 522, torque: 868, weight: 2436, seats: 5,
  fc: 17.4, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 290
}
const jgc4xe = {
  engine: '2.0L 4-cyl Turbo PHEV 4xe', fuelType: 'hybrid', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 280, torque: 637, weight: 2449, seats: 5,
  fc: 3.4, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 210, range: 40
}
const jgcSRT = {
  engine: '6.4L V8 HEMI SRT', fuelType: 'petrol', displacement: 6424,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 347, torque: 624, weight: 2235, seats: 5,
  fc: 15.9, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 257
}
for (const yr of ['2018','2019','2020','2021']) {
  specs[`Jeep|Grand Cherokee|${yr}|Trackhawk`] = { ...jgcTrackhawk, price: p(125990 + (parseInt(yr)-2018)*3000) }
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  specs[`Jeep|Grand Cherokee|${yr}|4xe`] = { ...jgc4xe, price: p(89990 + (parseInt(yr)-2021)*2500) }
}
for (const yr of ['2014','2016','2018','2020']) {
  specs[`Jeep|Grand Cherokee|${yr}|SRT`] = { ...jgcSRT, price: p(87990 + (parseInt(yr)-2014)*2500) }
}

// ─────────────────────────────────────────────────────────────
// RAM 1500 WARLOCK (2020–2026) — sport appearance package
// ─────────────────────────────────────────────────────────────
const ramWarlock = {
  engine: '5.7L V8 HEMI', fuelType: 'petrol', displacement: 5654,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 291, torque: 556, weight: 2350, seats: 6,
  fc: 15.7, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 195
}
for (const yr of ['2020','2021','2022','2023','2024','2025','2026']) {
  specs[`RAM|1500|${yr}|Warlock`] = { ...ramWarlock, price: p(89990 + (parseInt(yr)-2020)*1500) }
}

// ─────────────────────────────────────────────────────────────
// FORD F-150 LIGHTNING (EV) and RAPTOR (2021–2024)
// ─────────────────────────────────────────────────────────────
const f150Lightning = {
  engine: 'Dual Electric Motor Lightning', fuelType: 'electric',
  battery: '131.0 kWh', range: 515,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 433, torque: 1050, weight: 2952, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 180
}
const f150Raptor = {
  engine: '3.5L V6 EcoBoost High Output', fuelType: 'petrol', displacement: 3497,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 336, torque: 678, weight: 2495, seats: 5,
  fc: 15.1, fh: null, fx: null,
  acceleration: 5.5, topSpeed: 200
}
const f150R3 = {
  engine: '5.2L V8 Supercharged R (Raptor R)', fuelType: 'petrol', displacement: 5198,
  cylinders: 8, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 526, torque: 868, weight: 2580, seats: 5,
  fc: 18.0, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 210
}
for (const yr of ['2022','2023','2024']) {
  specs[`Ford|F-150|${yr}|Lightning`] = { ...f150Lightning, price: p(89990 + (parseInt(yr)-2022)*3000) }
  specs[`Ford|F-150|${yr}|Raptor`] = { ...f150Raptor, price: p(109990 + (parseInt(yr)-2022)*2500) }
  if (parseInt(yr) >= 2023) {
    specs[`Ford|F-150|${yr}|Raptor R`] = { ...f150R3, price: p(149990 + (parseInt(yr)-2023)*3000) }
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement128.json', JSON.stringify(out, null, 2))
console.log(`supplement128.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
