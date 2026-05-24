'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// BMW M3 G80 (2021–2026) — Competition & Competition xDrive
// ─────────────────────────────────────────────────────────────
const m3Comp = {
  engine: '3.0L 6-cyl S58 TwinPower Turbo', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-spd M DCT',
  power: 375, torque: 650, weight: 1730, seats: 5,
  fc: 10.8, fh: null, fx: null,
  acceleration: 3.9, topSpeed: 290
}
const m3CompX = {
  engine: '3.0L 6-cyl S58 TwinPower Turbo xDrive', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-spd M DCT',
  power: 375, torque: 650, weight: 1795, seats: 5,
  fc: 11.1, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 290
}
const m3BasePrice = { '2021': 155900, '2022': 159900, '2023': 163900, '2024': 167900, '2025': 171900, '2026': 175900 }
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const base = m3BasePrice[yr]
  specs[`BMW|M3|${yr}|Competition`] = { ...m3Comp, price: p(base) }
  specs[`BMW|M3|${yr}|Competition xDrive`] = { ...m3CompX, price: p(base + 8000) }
}

// ─────────────────────────────────────────────────────────────
// BMW M3 CS (2023–2024) — track-focused homologation special
// ─────────────────────────────────────────────────────────────
const m3CS = {
  engine: '3.0L 6-cyl S58 TwinPower Turbo M xDrive', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-spd M DCT',
  power: 405, torque: 650, weight: 1808, seats: 4,
  fc: 11.5, fh: null, fx: null,
  acceleration: 3.4, topSpeed: 302
}
specs['BMW|M3|2023|CS'] = { ...m3CS, price: p(239900) }
specs['BMW|M3|2024|CS'] = { ...m3CS, price: p(249900) }

// ─────────────────────────────────────────────────────────────
// TOYOTA LAND CRUISER 300 (2022–2026) — J300 generation
// Diesel 3.3L V6 twin-turbo trims
// ─────────────────────────────────────────────────────────────
const lc300d = {
  engine: '3.3L V6 Twin-Turbo Diesel', fuelType: 'diesel', displacement: 3346,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 227, torque: 700, weight: 2580, seats: 8,
  fc: 8.9, fh: null, fx: null,
  acceleration: 9.9, topSpeed: 210
}
const lc300dPrices = {
  GX:        { '2022': 89990,  '2023': 93990,  '2024': 97990,  '2025': 101990, '2026': 105990 },
  GXL:       { '2022': 109990, '2023': 113990, '2024': 117990, '2025': 121990, '2026': 125990 },
  VX:        { '2022': 129990, '2023': 133990, '2024': 137990, '2025': 141990, '2026': 145990 },
  Sahara:    { '2022': 149990, '2023': 153990, '2024': 157990, '2025': 161990, '2026': 165990 },
  'Sahara ZX':{ '2022': 169990,'2023': 173990, '2024': 177990, '2025': 181990, '2026': 185990 },
}
const lc300dWeights = { GX: 2565, GXL: 2575, VX: 2585, Sahara: 2595, 'Sahara ZX': 2605 }
for (const yr of ['2022','2023','2024','2025','2026']) {
  for (const [trim, prices] of Object.entries(lc300dPrices)) {
    specs[`Toyota|Land Cruiser 300|${yr}|${trim} Diesel`] = {
      ...lc300d,
      weight: lc300dWeights[trim],
      price: p(prices[yr])
    }
  }
}

// Toyota Land Cruiser 300 Petrol 3.5L V6 Twin-Turbo trims (VX, Sahara, Sahara ZX)
const lc300p = {
  engine: '3.5L V6 Twin-Turbo Petrol', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-spd Auto',
  power: 305, torque: 650, weight: 2600, seats: 8,
  fc: 11.5, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 225
}
const lc300pPrices = {
  VX:        { '2022': 134990, '2023': 138990, '2024': 142990, '2025': 146990, '2026': 150990 },
  Sahara:    { '2022': 154990, '2023': 158990, '2024': 162990, '2025': 166990, '2026': 170990 },
  'Sahara ZX':{ '2022': 174990,'2023': 178990, '2024': 182990, '2025': 186990, '2026': 190990 },
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  for (const [trim, prices] of Object.entries(lc300pPrices)) {
    specs[`Toyota|Land Cruiser 300|${yr}|${trim} Petrol`] = {
      ...lc300p,
      price: p(prices[yr])
    }
  }
}

// ─────────────────────────────────────────────────────────────
// NISSAN Z (Z34, 2023–2026) — 3.0L V6 twin-turbo sports car
// ─────────────────────────────────────────────────────────────
const nzManual = {
  engine: '3.0L V6 Twin-Turbo VR30DDTT', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-spd Manual',
  power: 298, torque: 475, weight: 1497, seats: 2,
  fc: 10.5, fh: null, fx: null,
  acceleration: 5.1, topSpeed: 250
}
const nzAuto = {
  engine: '3.0L V6 Twin-Turbo VR30DDTT', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-spd Auto',
  power: 298, torque: 475, weight: 1533, seats: 2,
  fc: 10.8, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 250
}
const nzProto = {
  engine: '3.0L V6 Twin-Turbo VR30DDTT Proto Spec', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-spd Auto',
  power: 298, torque: 475, weight: 1533, seats: 2,
  fc: 10.8, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 250
}
const nzPrices = {
  '2023': { manual: 74990, auto: 76990, proto: 82990 },
  '2024': { manual: 77990, auto: 79990, proto: null },
  '2025': { manual: 79990, auto: 81990, proto: null },
  '2026': { manual: 82990, auto: 84990, proto: null },
}
for (const yr of ['2023','2024','2025','2026']) {
  const pr = nzPrices[yr]
  specs[`Nissan|Z|${yr}|ST Manual`] = { ...nzManual, price: p(pr.manual) }
  specs[`Nissan|Z|${yr}|ST Auto`] = { ...nzAuto, price: p(pr.auto) }
  if (pr.proto) specs[`Nissan|Z|2023|Proto Spec`] = { ...nzProto, price: p(pr.proto) }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE TAYCAN GTS (2022–2026) — performance mid-spec
// ─────────────────────────────────────────────────────────────
const taycanGTSgen1 = {
  engine: 'Dual Electric Motor GTS AWD', fuelType: 'electric',
  battery: '93.4 kWh', range: 504,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 380, torque: 850, weight: 2270, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 3.7, topSpeed: 250
}
const taycanGTSgen2 = {
  engine: 'Dual Electric Motor GTS AWD', fuelType: 'electric',
  battery: '105.0 kWh', range: 558,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 400, torque: 870, weight: 2310, seats: 4,
  fc: null, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 250
}
specs['Porsche|Taycan|2022|GTS'] = { ...taycanGTSgen1, price: p(245900) }
specs['Porsche|Taycan|2023|GTS'] = { ...taycanGTSgen1, price: p(252900) }
specs['Porsche|Taycan|2024|GTS'] = { ...taycanGTSgen2, price: p(259900) }
specs['Porsche|Taycan|2025|GTS'] = { ...taycanGTSgen2, price: p(265900) }
specs['Porsche|Taycan|2026|GTS'] = { ...taycanGTSgen2, price: p(271900) }

// ─────────────────────────────────────────────────────────────
// LAND ROVER DEFENDER 130 (2022–2026) — extended 8-seat body
// ─────────────────────────────────────────────────────────────
const def130S = {
  engine: '3.0L 6-cyl MHEV P300', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 221, torque: 550, weight: 2325, seats: 8,
  fc: 10.2, fh: null, fx: null,
  acceleration: 7.8, topSpeed: 191
}
const def130X = {
  engine: '3.0L 6-cyl MHEV P400', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 294, torque: 550, weight: 2380, seats: 8,
  fc: 11.1, fh: null, fx: null,
  acceleration: 5.9, topSpeed: 209
}
const def130V8 = {
  engine: '5.0L V8 Supercharged V8', fuelType: 'petrol', displacement: 5000,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 386, torque: 625, weight: 2415, seats: 8,
  fc: 17.5, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 240
}
const def130Prices = {
  '130 S':  { '2022': 119490, '2023': 123490, '2024': 127490, '2025': 131490, '2026': 135490 },
  '130 X':  { '2022': 149490, '2023': 153490, '2024': 157490, '2025': 161490, '2026': 165490 },
  '130 V8': { '2022': 259490, '2023': 265490, '2024': 271490, '2025': 277490, '2026': 283490 },
}
const def130Specs = { '130 S': def130S, '130 X': def130X, '130 V8': def130V8 }
for (const yr of ['2022','2023','2024','2025','2026']) {
  for (const [trim, base] of Object.entries(def130Prices)) {
    specs[`Land Rover|Defender|${yr}|${trim}`] = { ...def130Specs[trim], price: p(base[yr]) }
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement126.json', JSON.stringify(out, null, 2))
console.log(`supplement126.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
