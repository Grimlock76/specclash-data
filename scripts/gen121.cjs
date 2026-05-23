'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// GENESIS GV60 (2022–2026) — electric luxury SUV
// ─────────────────────────────────────────────────────────────
const gv60Sport = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '77.4 kWh', range: 470,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 234, torque: 605, weight: 2035, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.0, topSpeed: 235
}
const gv60Master = {
  ...gv60Sport,
  power: 270, torque: 605,
  acceleration: 4.0, topSpeed: 235,
  battery: '77.4 kWh', range: 440
}
const gv60SportPlus = {
  ...gv60Sport,
  power: 234, torque: 605
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':3000,'2025':4000,'2026':5000 }[yr]
  specs[`Genesis|GV60|${yr}|Sport`] = { ...gv60Sport, price: p(79990 + adj) }
  specs[`Genesis|GV60|${yr}|Sport Plus`] = { ...gv60SportPlus, price: p(89990 + adj) }
  specs[`Genesis|GV60|${yr}|Master`] = { ...gv60Master, price: p(104990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// FORD MUSTANG MACH-E (2021–2026) — electric SUV
// ─────────────────────────────────────────────────────────────
const macheRWD = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '75.7 kWh', range: 480,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 198, torque: 430, weight: 2065, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.1, topSpeed: 180
}
const macheERAWD = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '91.0 kWh', range: 490,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 258, torque: 580, weight: 2215, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.1, topSpeed: 180
}
const macheGT = {
  engine: 'Dual Electric Motor GT', fuelType: 'electric',
  battery: '91.0 kWh', range: 440,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 358, torque: 860, weight: 2290, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.8, topSpeed: 200
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':2000,'2023':3000,'2024':4000,'2025':5000,'2026':6000 }[yr]
  specs[`Ford|Mustang Mach-E|${yr}|Select`] = { ...macheRWD, battery: '68.0 kWh', range: 400, power: 198, price: p(74990 + adj) }
  specs[`Ford|Mustang Mach-E|${yr}|Premium`] = { ...macheRWD, price: p(84990 + adj) }
  specs[`Ford|Mustang Mach-E|${yr}|Premium ER`] = { ...macheERAWD, price: p(94990 + adj) }
  specs[`Ford|Mustang Mach-E|${yr}|GT`] = { ...macheGT, price: p(109990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// BMW iX1 (2023–2026) — electric compact SUV
// ─────────────────────────────────────────────────────────────
const ix1FWD = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '64.7 kWh', range: 440,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 150, torque: 250, weight: 1880, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.6, topSpeed: 160
}
const ix1AWD = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '64.7 kWh', range: 417,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 230, torque: 494, weight: 2045, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.7, topSpeed: 180
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':2000,'2025':3500,'2026':5000 }[yr]
  specs[`BMW|iX1|${yr}|eDrive20`] = { ...ix1FWD, price: p(69900 + adj) }
  specs[`BMW|iX1|${yr}|xDrive30`] = { ...ix1AWD, price: p(79900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// KIA EV3 (2025–2026) — compact electric crossover
// ─────────────────────────────────────────────────────────────
for (const yr of ['2025','2026']) {
  const adj = { '2025':0,'2026':1500 }[yr]
  specs[`Kia|EV3|${yr}|Standard Range`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '58.3 kWh', range: 430,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 150, torque: 283, weight: 1785, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 7.7, topSpeed: 170,
    price: p(44990 + adj)
  }
  specs[`Kia|EV3|${yr}|Long Range`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '81.4 kWh', range: 600,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 150, torque: 283, weight: 1895, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 7.7, topSpeed: 170,
    price: p(52990 + adj)
  }
  specs[`Kia|EV3|${yr}|GT-Line`] = {
    engine: 'Single Electric Motor', fuelType: 'electric',
    battery: '81.4 kWh', range: 600,
    drivetrain: 'FWD', transmission: 'Auto',
    power: 150, torque: 283, weight: 1895, seats: 5,
    fc: null, fh: null, fx: null,
    acceleration: 7.7, topSpeed: 170,
    price: p(57990 + adj)
  }
}

// ─────────────────────────────────────────────────────────────
// AUDI Q4 SPORTBACK e-tron (2021–2026) — coupe body EV
// ─────────────────────────────────────────────────────────────
const q4sb40 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '82.0 kWh', range: 530,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 2135, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 160
}
const q4sb50 = {
  engine: 'Dual Electric Motor quattro', fuelType: 'electric',
  battery: '82.0 kWh', range: 497,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 220, torque: 460, weight: 2235, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.2, topSpeed: 180
}
for (const yr of ['2021','2022','2023','2024','2025','2026']) {
  const adj = { '2021':0,'2022':1500,'2023':3000,'2024':4000,'2025':5000,'2026':6000 }[yr]
  specs[`Audi|Q4 Sportback e-tron|${yr}|40`] = { ...q4sb40, price: p(82900 + adj) }
  specs[`Audi|Q4 Sportback e-tron|${yr}|50 quattro`] = { ...q4sb50, price: p(97900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// AUDI A6 e-tron (2024–2026) — electric executive sedan/Avant
// ─────────────────────────────────────────────────────────────
const a6etronRWD = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '94.9 kWh', range: 720,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 185, torque: 330, weight: 2285, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.0, topSpeed: 210
}
const a6etronAWD = {
  engine: 'Dual Electric Motor quattro', fuelType: 'electric',
  battery: '94.9 kWh', range: 670,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 270, torque: 765, weight: 2385, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 210
}
const rs6etron = {
  engine: 'Dual Electric Motor RS quattro', fuelType: 'electric',
  battery: '94.9 kWh', range: 600,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 400, torque: 855, weight: 2475, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.4, topSpeed: 240
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Audi|A6 e-tron|${yr}|e-tron`] = { ...a6etronRWD, price: p(109900 + adj) }
  specs[`Audi|A6 e-tron|${yr}|performance quattro`] = { ...a6etronAWD, price: p(124900 + adj) }
  specs[`Audi|A6 e-tron|${yr}|Avant e-tron`] = { ...a6etronRWD, weight: 2320, price: p(114900 + adj) }
  specs[`Audi|A6 e-tron|${yr}|RS6 e-tron`] = { ...rs6etron, price: p(199900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ CLE (2024–2026) — coupe/cabriolet
// ─────────────────────────────────────────────────────────────
const cle200 = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-spd Auto',
  power: 150, torque: 300, weight: 1720, seats: 4,
  fc: 7.5, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 240
}
const cle300 = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-spd Auto',
  power: 190, torque: 400, weight: 1755, seats: 4,
  fc: 7.9, fh: null, fx: null,
  acceleration: 6.3, topSpeed: 250
}
const cle450 = {
  engine: '3.0L 6-cyl Turbo 4MATIC', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-spd Auto',
  power: 270, torque: 500, weight: 1870, seats: 4,
  fc: 8.5, fh: null, fx: null,
  acceleration: 4.8, topSpeed: 250
}
const cleAMG53 = {
  engine: '3.0L 6-cyl Turbo AMG 4MATIC+', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-spd AMG Speedshift',
  power: 320, torque: 560, weight: 1935, seats: 4,
  fc: 8.8, fh: null, fx: null,
  acceleration: 4.4, topSpeed: 270
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Mercedes-Benz|CLE|${yr}|CLE200`] = { ...cle200, price: p(109900 + adj) }
  specs[`Mercedes-Benz|CLE|${yr}|CLE300`] = { ...cle300, price: p(119900 + adj) }
  specs[`Mercedes-Benz|CLE|${yr}|CLE450 4MATIC`] = { ...cle450, price: p(139900 + adj) }
  specs[`Mercedes-Benz|CLE|${yr}|AMG CLE53 4MATIC+`] = { ...cleAMG53, price: p(164900 + adj) }
  // Cabriolet variants
  specs[`Mercedes-Benz|CLE|${yr}|CLE200 Cabriolet`] = { ...cle200, weight: 1820, price: p(124900 + adj) }
  specs[`Mercedes-Benz|CLE|${yr}|CLE300 Cabriolet`] = { ...cle300, weight: 1855, price: p(134900 + adj) }
  specs[`Mercedes-Benz|CLE|${yr}|CLE450 4MATIC Cabriolet`] = { ...cle450, weight: 1975, price: p(154900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLVO EX40 (2024–2026) — electric small SUV (rebrand of XC40 BEV)
// ─────────────────────────────────────────────────────────────
const ex40Single = {
  engine: 'Single Electric Motor Recharge', fuelType: 'electric',
  battery: '69.0 kWh', range: 475,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 185, torque: 330, weight: 2000, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 160
}
const ex40Twin = {
  engine: 'Dual Electric Motor Twin Motor Performance', fuelType: 'electric',
  battery: '82.0 kWh', range: 480,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 300, torque: 670, weight: 2185, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.7, topSpeed: 180
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':2000,'2026':3500 }[yr]
  specs[`Volvo|EX40|${yr}|Single Motor`] = { ...ex40Single, price: p(71990 + adj) }
  specs[`Volvo|EX40|${yr}|Twin Motor Performance`] = { ...ex40Twin, price: p(84990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// VOLVO EC40 (2024–2026) — electric coupe SUV (rebrand of C40 Recharge)
// ─────────────────────────────────────────────────────────────
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':2000,'2026':3500 }[yr]
  specs[`Volvo|EC40|${yr}|Single Motor`] = { ...ex40Single, weight: 2020, price: p(74990 + adj) }
  specs[`Volvo|EC40|${yr}|Twin Motor Performance`] = { ...ex40Twin, weight: 2205, price: p(87990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// AUDI RS Q8 e-tron (2023–2026) — performance EV SUV
// Also add Q8 Sportback e-tron as separate model
// ─────────────────────────────────────────────────────────────
const q8eSB55 = {
  engine: 'Dual Electric Motor quattro', fuelType: 'electric',
  battery: '104.0 kWh', range: 500,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 300, torque: 664, weight: 2585, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 200
}
const q8eSB60 = {
  ...q8eSB55, power: 370, torque: 750, acceleration: 4.5
}
const rsQ8e = {
  ...q8eSB55,
  power: 440, torque: 973, acceleration: 3.5, topSpeed: 210
}
for (const yr of ['2023','2024','2025','2026']) {
  const adj = { '2023':0,'2024':3000,'2025':5000,'2026':7000 }[yr]
  specs[`Audi|Q8 e-tron Sportback|${yr}|55 quattro`] = { ...q8eSB55, price: p(139900 + adj) }
  specs[`Audi|Q8 e-tron Sportback|${yr}|60 quattro`] = { ...q8eSB60, price: p(154900 + adj) }
  specs[`Audi|RS Q8 e-tron|${yr}|RS Q8 e-tron`] = { ...rsQ8e, price: p(199900 + adj) }
}

// ─────────────────────────────────────────────────────────────
// TOYOTA COROLLA GR SPORT — spec entries for existing trim
// ─────────────────────────────────────────────────────────────
const corollaGRS = {
  engine: '2.0L 4-cyl Dynamic Force Hybrid', fuelType: 'hybrid',
  displacement: 1987, cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 135, torque: 190, weight: 1470, seats: 5,
  fc: 4.4, fh: null, fx: null,
  acceleration: 7.5, topSpeed: 180
}
for (const yr of ['2022','2023','2024','2025','2026']) {
  const adj = { '2022':0,'2023':1500,'2024':2500,'2025':3500,'2026':4500 }[yr]
  specs[`Toyota|Corolla|${yr}|GR Sport`] = { ...corollaGRS, price: p(41990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// PORSCHE MACAN EV spec entries for existing trims in makes.json
// Already has 4 Electric, 4S Electric, Turbo Electric in makes.json
// ─────────────────────────────────────────────────────────────
const macan4e = {
  engine: 'Dual Electric Motor', fuelType: 'electric',
  battery: '100.0 kWh', range: 613,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 300, torque: 650, weight: 2330, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.2, topSpeed: 220
}
const macan4Se = {
  ...macan4e, power: 380, torque: 820, acceleration: 3.8, topSpeed: 240, range: 567
}
const macanTurbo = {
  ...macan4e, power: 470, torque: 1130, acceleration: 3.3, topSpeed: 260, range: 528
}
for (const yr of ['2024','2025','2026']) {
  const adj = { '2024':0,'2025':3000,'2026':5000 }[yr]
  specs[`Porsche|Macan|${yr}|4 Electric`] = { ...macan4e, price: p(109900 + adj) }
  specs[`Porsche|Macan|${yr}|4S Electric`] = { ...macan4Se, price: p(134900 + adj) }
  if (yr === '2024') {
    specs[`Porsche|Macan|${yr}|Turbo Electric`] = { ...macanTurbo, price: p(159900) }
  }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement121.json', JSON.stringify(out, null, 2))
console.log(`supplement121.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
