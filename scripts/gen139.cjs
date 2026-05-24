'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// CHEVROLET TAHOE (2023–2024) — 5.3L V8 / 6.2L V8 trims (AU)
// ─────────────────────────────────────────────────────────────
const tahoe53 = {
  engine: '5.3L V8 EcoTec3', fuelType: 'petrol', displacement: 5328,
  cylinders: 8, transmission: '10-speed automatic',
  power: 275, torque: 519, seats: 7,
  fc: 14.0, fh: 9.5, fx: 12.0,
  acceleration: 8.5, topSpeed: 185
}
const tahoe62 = {
  engine: '6.2L V8 EcoTec3', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, transmission: '10-speed automatic',
  power: 313, torque: 624, seats: 7,
  fc: 14.5, fh: 9.5, fx: 12.5,
  acceleration: 7.2, topSpeed: 195
}
const tahoePrices = {
  LS:           { '2023':84990,  '2024':87990  },
  LT:           { '2023':94990,  '2024':97990  },
  Z71:          { '2023':97990,  '2024':100990 },
  Premier:      { '2023':110990, '2024':113990 },
  LTZ:          { '2023':108990, '2024':111990 },
  'High Country':{ '2023':122990,'2024':125990 },
}
const tahoeWeights = {
  LS: 2450, LT: 2480, Z71: 2600, Premier: 2500, LTZ: 2510, 'High Country': 2530
}
const tahoeDrive = { LS:'RWD', LT:'RWD', Z71:'4WD', Premier:'RWD', LTZ:'RWD', 'High Country':'RWD' }
for (const yr of ['2023','2024']) {
  for (const trim of ['LS','LT','Z71','Premier','LTZ','High Country']) {
    const base = ['LTZ','High Country'].includes(trim) ? tahoe62 : tahoe53
    specs[`Chevrolet|Tahoe|${yr}|${trim}`] = {
      ...base,
      drivetrain: tahoeDrive[trim],
      weight: tahoeWeights[trim],
      price: p(tahoePrices[trim][yr])
    }
  }
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET SUBURBAN (2023–2024) — 5.3L V8 / 6.2L V8 (AU)
// ─────────────────────────────────────────────────────────────
const subPrices = {
  LS:           { '2023':88990,  '2024':91990  },
  LT:           { '2023':98990,  '2024':101990 },
  LTZ:          { '2023':113990, '2024':116990 },
  Premier:      { '2023':115990, '2024':118990 },
  'High Country':{ '2023':128990,'2024':131990 },
}
const subWeights = { LS: 2800, LT: 2840, LTZ: 2880, Premier: 2860, 'High Country': 2900 }
for (const yr of ['2023','2024']) {
  for (const trim of ['LS','LT','LTZ','Premier','High Country']) {
    const base = ['LTZ','High Country'].includes(trim) ? tahoe62 : tahoe53
    specs[`Chevrolet|Suburban|${yr}|${trim}`] = {
      ...base,
      drivetrain: 'RWD',
      weight: subWeights[trim],
      seats: 9,
      price: p(subPrices[trim][yr])
    }
  }
}

// ─────────────────────────────────────────────────────────────
// JEEP COMPASS (2023–2024) — Sport/Longitude/Limited/Trailhawk/4xe (AU)
// ─────────────────────────────────────────────────────────────
const compassSport = {
  engine: '2.4L I4 Tigershark', fuelType: 'petrol', displacement: 2360,
  cylinders: 4, transmission: '6-speed auto', drivetrain: 'FWD',
  power: 130, torque: 229, weight: 1518, seats: 5,
  fc: 9.0, fh: 6.7, fx: 12.7,
  acceleration: 10.2, topSpeed: 185
}
const compassLong = {
  ...compassSport, transmission: '9-speed auto', drivetrain: '4WD',
  weight: 1601, fc: 10.2, fh: 7.5, fx: 14.4, acceleration: 10.5, topSpeed: 183
}
const compassLtd = { ...compassLong, weight: 1625, acceleration: 10.8 }
const compassTH  = { ...compassLong, weight: 1649, fc: 10.5, fh: 7.8, fx: 14.8, acceleration: 11.0, topSpeed: 180 }
const compass4xe = {
  engine: '1.3L I4 Turbo PHEV', fuelType: 'phev', displacement: 1329,
  cylinders: 4, transmission: '6-speed auto', drivetrain: '4WD',
  power: 176, torque: 400, weight: 1836, seats: 5,
  fc: 1.5, fh: 1.2, fx: 1.8,
  acceleration: 7.5, topSpeed: 200
}
const compassPrices = {
  Sport:     { '2023':29990, '2024':31990 },
  Longitude: { '2023':34990, '2024':36990 },
  Limited:   { '2023':37990, '2024':39990 },
  Trailhawk: { '2023':41990, '2024':43990 },
  '4xe':     { '2023':56990, '2024':58990 },
}
const compassBase = { Sport:compassSport, Longitude:compassLong, Limited:compassLtd, Trailhawk:compassTH, '4xe':compass4xe }
for (const yr of ['2023','2024']) {
  for (const trim of ['Sport','Longitude','Limited','Trailhawk','4xe']) {
    specs[`Jeep|Compass|${yr}|${trim}`] = { ...compassBase[trim], price: p(compassPrices[trim][yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// SUZUKI JIMNY (2025–2026) — Lite/JLX/JLX-L/5-door (AU)
// ─────────────────────────────────────────────────────────────
const jimnyBase = {
  engine: '1.5L I4', fuelType: 'petrol', displacement: 1462,
  cylinders: 4, drivetrain: '4WD',
  power: 75, torque: 130
}
const jimnyLite = { ...jimnyBase, transmission: '5-speed manual', weight: 1090, seats: 4, fc: 6.4, fh: 5.7, fx: 8.3, acceleration: 12.0, topSpeed: 150 }
const jimnyJLX  = { ...jimnyBase, transmission: '5-speed manual', weight: 1100, seats: 4, fc: 6.4, fh: 5.7, fx: 8.3, acceleration: 12.0, topSpeed: 150 }
const jimnyJLXL = { ...jimnyBase, transmission: '4-speed automatic', weight: 1110, seats: 4, fc: 6.8, fh: 6.1, fx: 8.8, acceleration: 13.0, topSpeed: 145 }
const jimny5dr  = { ...jimnyBase, transmission: '5-speed manual', weight: 1195, seats: 5, fc: 6.6, fh: 5.9, fx: 8.5, acceleration: 12.5, topSpeed: 145 }
const jimnyPrices = {
  Lite:    { '2025':25990, '2026':26990 },
  JLX:     { '2025':29990, '2026':30990 },
  'JLX-L': { '2025':32490, '2026':33490 },
  '5-door':{ '2025':35990, '2026':36990 },
}
const jimnySpec = { Lite:jimnyLite, JLX:jimnyJLX, 'JLX-L':jimnyJLXL, '5-door':jimny5dr }
for (const yr of ['2025','2026']) {
  for (const trim of ['Lite','JLX','JLX-L','5-door']) {
    specs[`Suzuki|Jimny|${yr}|${trim}`] = { ...jimnySpec[trim], price: p(jimnyPrices[trim][yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// ISUZU D-MAX (2025–2026) — SX/LS/LS-U/X-Terrain (AU)
// ─────────────────────────────────────────────────────────────
const dmaxBase = {
  engine: '3.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2999,
  cylinders: 4, drivetrain: '4WD',
  power: 140, torque: 450, seats: 5,
  acceleration: 11.0, topSpeed: 175
}
const dmaxSX  = { ...dmaxBase, transmission: '6-speed manual', weight: 2010, fc: 8.5, fh: 6.5, fx: 11.3 }
const dmaxLS  = { ...dmaxBase, transmission: '6-speed auto',   weight: 2045, fc: 8.9, fh: 6.9, fx: 11.8, topSpeed: 173 }
const dmaxLSU = { ...dmaxBase, transmission: '6-speed auto',   weight: 2060, fc: 8.9, fh: 6.9, fx: 11.8, topSpeed: 173 }
const dmaxXT  = { ...dmaxBase, transmission: '6-speed auto',   weight: 2070, fc: 8.9, fh: 6.9, fx: 11.8, topSpeed: 173 }
const dmaxPrices = {
  SX:        { '2025':40990, '2026':42990 },
  LS:        { '2025':51990, '2026':53990 },
  'LS-U':    { '2025':56990, '2026':58990 },
  'X-Terrain':{ '2025':59990,'2026':61990 },
}
const dmaxSpec = { SX:dmaxSX, LS:dmaxLS, 'LS-U':dmaxLSU, 'X-Terrain':dmaxXT }
for (const yr of ['2025','2026']) {
  for (const trim of ['SX','LS','LS-U','X-Terrain']) {
    specs[`Isuzu|D-MAX|${yr}|${trim}`] = { ...dmaxSpec[trim], price: p(dmaxPrices[trim][yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// GENESIS GV80 (2022–2026) — 2.5T / 3.5T / Electrified gap fill (AU)
// ─────────────────────────────────────────────────────────────
const gv80_25t = {
  engine: '2.5L I4 Twin Scroll Turbo', fuelType: 'petrol', displacement: 2497,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 224, torque: 422, weight: 2170, seats: 7,
  fc: 10.8, fh: 8.0, fx: 15.2,
  acceleration: 6.8, topSpeed: 220
}
const gv80_35t = {
  engine: '3.5L V6 Twin Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 280, torque: 530, weight: 2310, seats: 7,
  fc: 11.9, fh: 8.8, fx: 16.8,
  acceleration: 5.4, topSpeed: 250
}
const gv80elec = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '87.2 kWh', range: 480,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 272, torque: 700, weight: 2630, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 5.1, topSpeed: 200
}
const gv80Prices = {
  '2.5T': {
    '2022':76900, '2023':77900, '2025':81900, '2026':83900
  },
  '3.5T': {
    '2022':91900, '2023':92900, '2025':96900, '2026':98900
  },
  Electrified: {
    '2025':131900, '2026':133900
  },
}
for (const yr of ['2022','2023','2025','2026']) {
  specs[`Genesis|GV80|${yr}|2.5T`] = { ...gv80_25t, price: p(gv80Prices['2.5T'][yr]) }
  specs[`Genesis|GV80|${yr}|3.5T`] = { ...gv80_35t, price: p(gv80Prices['3.5T'][yr]) }
}
for (const yr of ['2025','2026']) {
  specs[`Genesis|GV80|${yr}|Electrified`] = { ...gv80elec, price: p(gv80Prices.Electrified[yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement139.json', JSON.stringify(out, null, 2))
console.log(`supplement139.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
