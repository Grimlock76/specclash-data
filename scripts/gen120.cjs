'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// LEXUS LBX (2024–2026) — small luxury SUV, 1.5L hybrid FWD
// ─────────────────────────────────────────────────────────────
const lbxBase = {
  engine: '1.5L 3-cyl Hybrid', fuelType: 'petrol', displacement: 1490,
  cylinders: 3, drivetrain: 'FWD', transmission: 'CVT',
  power: 102, torque: 185, weight: 1415, seats: 5,
  fc: 4.7, fh: null, fx: null,
  acceleration: 8.3, topSpeed: 180
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024': 0, '2025': 1500, '2026': 2500 }[yr]
  specs[`Lexus|LBX|${yr}|LBX`] = { ...lbxBase, price: p(52990 + adj) }
  specs[`Lexus|LBX|${yr}|F Sport`] = { ...lbxBase, price: p(57990 + adj) }
  specs[`Lexus|LBX|${yr}|Luxury`] = { ...lbxBase, price: p(60990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// LEXUS RZ 300e (2024–2026) — single motor EV SUV
// ─────────────────────────────────────────────────────────────
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024': 0, '2025': 1500, '2026': 2500 }[yr]
  specs[`Lexus|RZ|${yr}|RZ 300e`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '71.4 kWh', range: 480,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 150, torque: 266, weight: 1995, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 8.3, topSpeed: 160,
    price: p(89990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// AUDI A3 SPORTBACK (2021–2026) — 5-door hatch
// ─────────────────────────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1500,'2023':2500,'2024':3000,'2025':3500,'2026':4000 }[yr]
  specs[`Audi|A3 Sportback|${yr}|35 TFSI`] = {
    engine: '1.5L 4-cyl TFSI', fuelType: 'petrol', displacement: 1498,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
    power: 110, torque: 250, weight: 1350, seats: 5,
    fc: 5.5, fh: null, fx: null,
    acceleration: 8.4, topSpeed: 220,
    price: p(45900 + adj)
  }
  specs[`Audi|A3 Sportback|${yr}|40 TFSI quattro`] = {
    engine: '2.0L 4-cyl TFSI quattro', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 140, torque: 320, weight: 1420, seats: 5,
    fc: 6.7, fh: null, fx: null,
    acceleration: 6.8, topSpeed: 237,
    price: p(52900 + adj)
  }
  specs[`Audi|A3 Sportback|${yr}|S3`] = {
    engine: '2.0L 4-cyl TFSI S quattro', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 228, torque: 400, weight: 1505, seats: 5,
    fc: 7.7, fh: null, fx: null,
    acceleration: 4.8, topSpeed: 250,
    price: p(68900 + adj)
  }
  specs[`Audi|A3 Sportback|${yr}|RS3`] = {
    engine: '2.5L 5-cyl TFSI RS quattro', fuelType: 'petrol', displacement: 2480,
    cylinders: 5, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 294, torque: 500, weight: 1555, seats: 5,
    fc: 9.3, fh: null, fx: null,
    acceleration: 3.8, topSpeed: 290,
    price: p(89900 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// AUDI Q5 extra trims (2019–2026)
// Currently only has 45 TFSI quattro; add 40 TFSI, PHEV, Black Edition
// ─────────────────────────────────────────────────────────────
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2019':0,'2020':1000,'2021':2000,'2022':3000,'2023':4000,'2024':5000,'2025':6000,'2026':7000 }[yr]
  specs[`Audi|Q5|${yr}|40 TFSI quattro`] = {
    engine: '2.0L 4-cyl TFSI quattro', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 140, torque: 320, weight: 1820, seats: 5,
    fc: 7.2, fh: null, fx: null,
    acceleration: 8.5, topSpeed: 215,
    price: p(68900 + adj)
  }
  specs[`Audi|Q5|${yr}|55 TFSI e quattro`] = {
    engine: '2.0L 4-cyl TFSI e quattro', fuelType: 'hybrid',
    displacement: 1984, cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 195, torque: 450, weight: 2065, seats: 5,
    fc: 1.8, fh: null, fx: null,
    acceleration: 5.3, topSpeed: 224,
    range: 68,
    price: p(88900 + adj)
  }
  specs[`Audi|Q5|${yr}|45 TFSI quattro Black Edition`] = {
    engine: '2.0L 4-cyl TFSI quattro', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 183, torque: 370, weight: 1840, seats: 5,
    fc: 7.8, fh: null, fx: null,
    acceleration: 5.9, topSpeed: 235,
    price: p(84900 + adj)
  }
}

// SQ5 specs (2019–2026) — separate model in makes.json
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  const adj = { '2019':0,'2020':1000,'2021':2000,'2022':3000,'2023':4000,'2024':5000,'2025':6000,'2026':7000 }[yr]
  specs[`Audi|SQ5|${yr}|SQ5`] = {
    engine: '3.0L V6 TFSI quattro', fuelType: 'petrol', displacement: 2995,
    cylinders: 6, drivetrain: 'AWD', transmission: '8-spd tiptronic',
    power: 260, torque: 500, weight: 1995, seats: 5,
    fc: 9.0, fh: null, fx: null,
    acceleration: 4.9, topSpeed: 250,
    price: p(104900 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// KIA EV5 (2024–2026) — mid-size electric SUV
// ─────────────────────────────────────────────────────────────
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024': 0, '2025': 1500, '2026': 2500 }[yr]
  specs[`Kia|EV5|${yr}|Standard Range`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '64.2 kWh', range: 400,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 160, torque: 310, weight: 1900, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 8.5, topSpeed: 185,
    price: p(54990 + adj)
  }
  specs[`Kia|EV5|${yr}|Long Range`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '84.0 kWh', range: 550,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 160, torque: 310, weight: 1970, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 8.5, topSpeed: 185,
    price: p(62990 + adj)
  }
  specs[`Kia|EV5|${yr}|Long Range AWD`] = {
    engine: 'Dual Electric Motor', fuelType: 'electric',
    battery: '84.0 kWh', range: 490,
    drivetrain: 'AWD', transmission: 'Auto',
    power: 230, torque: 605, weight: 2070, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 5.7, topSpeed: 185,
    price: p(71990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// CUPRA LEON (2021–2026) — hot hatch on MQB Evo platform
// ─────────────────────────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1000,'2023':2000,'2024':2500,'2025':3000,'2026':3500 }[yr]
  specs[`CUPRA|Leon|${yr}|1.5 eTSI`] = {
    engine: '1.5L 4-cyl eTSI Mild Hybrid', fuelType: 'petrol', displacement: 1498,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
    power: 110, torque: 250, weight: 1400, seats: 5,
    fc: 5.7, fh: null, fx: null,
    acceleration: 9.0, topSpeed: 210,
    price: p(44990 + adj)
  }
  specs[`CUPRA|Leon|${yr}|1.4 e-Hybrid`] = {
    engine: '1.4L 4-cyl e-Hybrid', fuelType: 'hybrid',
    displacement: 1395, cylinders: 4, drivetrain: 'FWD', transmission: '6-spd DSG',
    power: 150, torque: 350, weight: 1540, seats: 5,
    fc: 1.5, fh: null, fx: null,
    acceleration: 7.0, topSpeed: 220,
    range: 60,
    price: p(48990 + adj)
  }
  specs[`CUPRA|Leon|${yr}|VZ`] = {
    engine: '2.0L 4-cyl TSI', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
    power: 180, torque: 370, weight: 1455, seats: 5,
    fc: 7.1, fh: null, fx: null,
    acceleration: 6.8, topSpeed: 250,
    price: p(52990 + adj)
  }
  specs[`CUPRA|Leon|${yr}|VZ 4Drive`] = {
    engine: '2.0L 4-cyl TSI 4Drive', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'AWD', transmission: '7-spd DSG',
    power: 221, torque: 400, weight: 1570, seats: 5,
    fc: 8.0, fh: null, fx: null,
    acceleration: 5.8, topSpeed: 250,
    price: p(58990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA GR COROLLA — Circuit trim (new trim alongside existing)
// ─────────────────────────────────────────────────────────────
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':2000,'2025':3500,'2026':5000 }[yr]
  specs[`Toyota|GR Corolla|${yr}|Circuit`] = {
    engine: '1.6L 3-cyl Turbo GR-FOUR', fuelType: 'petrol', displacement: 1618,
    cylinders: 3, drivetrain: 'AWD', transmission: '6-spd Manual',
    power: 221, torque: 370, weight: 1420, seats: 4,
    fc: 8.2, fh: null, fx: null,
    acceleration: 5.9, topSpeed: 230,
    price: p(74990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-90 — match existing AU trim names in makes.json
// GT = 3.3 I6 Turbo; GT SP = 3.3 I6 Turbo S; Azami = PHEV
// ─────────────────────────────────────────────────────────────
const cx90GT = {
  engine: '3.3L I6 Turbo Skyactiv-G', fuelType: 'petrol',
  displacement: 3283, cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 209, torque: 450, weight: 2195, seats: 7,
  fc: 9.5, fh: null, fx: null,
  acceleration: 7.2, topSpeed: 210
}
const cx90Azami = {
  engine: '2.5L 4-cyl PHEV e-Skyactiv', fuelType: 'hybrid',
  displacement: 2488, cylinders: 4, drivetrain: 'AWD', transmission: 'Auto',
  power: 241, torque: 500, weight: 2260, seats: 7,
  fc: 2.3, fh: null, fx: null,
  acceleration: 6.0, topSpeed: 200,
  range: 79
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':2000,'2026':3500 }[yr]
  specs[`Mazda|CX-90|${yr}|GT`] = { ...cx90GT, price: p(74990 + adj) }
  specs[`Mazda|CX-90|${yr}|GT SP`] = { ...cx90GT, power: 230, torque: 500, acceleration: 6.5, price: p(84990 + adj) }
  specs[`Mazda|CX-90|${yr}|Azami`] = { ...cx90Azami, price: p(92990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// SKODA OCTAVIA RS (2021–2026) — missing hot variant
// ─────────────────────────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1000,'2023':2000,'2024':2500,'2025':3000,'2026':3500 }[yr]
  specs[`Skoda|Octavia|${yr}|RS`] = {
    engine: '2.0L 4-cyl TSI RS', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
    power: 180, torque: 370, weight: 1430, seats: 5,
    fc: 7.4, fh: null, fx: null,
    acceleration: 6.7, topSpeed: 248,
    price: p(52990 + adj)
  }
  specs[`Skoda|Octavia|${yr}|RS Combi`] = {
    engine: '2.0L 4-cyl TSI RS', fuelType: 'petrol', displacement: 1984,
    cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
    power: 180, torque: 370, weight: 1460, seats: 5,
    fc: 7.5, fh: null, fx: null,
    acceleration: 6.9, topSpeed: 248,
    price: p(55990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// HONDA CR-V e:PHEV (2023–2026)
// ─────────────────────────────────────────────────────────────
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':1500,'2025':2500,'2026':3500 }[yr]
  specs[`Honda|CR-V|${yr}|e:PHEV`] = {
    engine: '2.0L 4-cyl e:PHEV', fuelType: 'hybrid',
    displacement: 1993, cylinders: 4, drivetrain: 'AWD', transmission: 'Auto',
    power: 158, torque: 335, weight: 1945, seats: 5,
    fc: 1.4, fh: null, fx: null,
    acceleration: 7.7, topSpeed: 180,
    range: 81,
    price: p(63990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement120.json', JSON.stringify(out, null, 2))
console.log(`supplement120.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
