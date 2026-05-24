'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FERRARI 296 GTB (2022–2026) — V6 hybrid sports car
// ─────────────────────────────────────────────────────────────
const f296GTB = {
  engine: '3.0L V6 Twin-Turbo Plug-In Hybrid', fuelType: 'hybrid', displacement: 2992,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-spd F1 DCT',
  power: 610, torque: 740, weight: 1470, seats: 2,
  fc: 8.1, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 330, range: 25
}
const f296GTBPrices = { '2022':599000,'2023':625000,'2024':649000,'2025':669000,'2026':689000 }
for (const yr of ['2022','2023','2024','2025','2026']) {
  specs[`Ferrari|296 GTB|${yr}|GTB`] = { ...f296GTB, price: p(f296GTBPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// FERRARI 296 GTS (2023–2026) — open-top version
// ─────────────────────────────────────────────────────────────
const f296GTS = {
  engine: '3.0L V6 Twin-Turbo Plug-In Hybrid', fuelType: 'hybrid', displacement: 2992,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-spd F1 DCT',
  power: 610, torque: 740, weight: 1560, seats: 2,
  fc: 8.3, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 320, range: 25
}
const f296GTSPrices = { '2023':679000,'2024':699000,'2025':719000,'2026':739000 }
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Ferrari|296 GTS|${yr}|GTS`] = { ...f296GTS, price: p(f296GTSPrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// FERRARI PUROSANGUE (2023–2026) — V12 FUV/SUV
// ─────────────────────────────────────────────────────────────
const purosangue = {
  engine: '6.5L V12 NA F140IA', fuelType: 'petrol', displacement: 6496,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-spd F1 DCT',
  power: 533, torque: 716, weight: 2033, seats: 4,
  fc: 14.5, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 310
}
const puroSanguePrices = { '2023':680000,'2024':710000,'2025':735000,'2026':760000 }
for (const yr of ['2023','2024','2025','2026']) {
  specs[`Ferrari|Purosangue|${yr}|Purosangue`] = { ...purosangue, price: p(puroSanguePrices[yr]) }
}

// ─────────────────────────────────────────────────────────────
// FERRARI 12Cilindri (2024–2026) — V12 gran turismo
// ─────────────────────────────────────────────────────────────
const f12CilCoupe = {
  engine: '6.5L V12 NA F140HD', fuelType: 'petrol', displacement: 6496,
  cylinders: 12, drivetrain: 'RWD', transmission: '8-spd F1 DCT',
  power: 572, torque: 678, weight: 1560, seats: 2,
  fc: 14.9, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 340
}
const f12CilSpider = { ...f12CilCoupe, weight: 1670, topSpeed: 330 }
const f12Prices = {
  'Coupé':  { '2024':719900,'2025':745000,'2026':769000 },
  'Spider': { '2024':789900,'2025':815000,'2026':839000 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Ferrari|12Cilindri|${yr}|Coupé`] = { ...f12CilCoupe, price: p(f12Prices['Coupé'][yr]) }
  specs[`Ferrari|12Cilindri|${yr}|Spider`] = { ...f12CilSpider, price: p(f12Prices['Spider'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI REVUELTO (2025–2026) — fill missing years
// ─────────────────────────────────────────────────────────────
const revuelto = {
  engine: '6.5L V12 Hybrid Revuelto', fuelType: 'hybrid', displacement: 6498,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-spd DCT',
  power: 696, torque: 750, weight: 1772, seats: 2,
  fc: 12.7, fh: null, fx: null,
  acceleration: 2.5, topSpeed: 350
}
specs['Lamborghini|Revuelto|2025|base'] = { ...revuelto, price: p(1150000) }
specs['Lamborghini|Revuelto|2026|base'] = { ...revuelto, price: p(1200000) }

// ─────────────────────────────────────────────────────────────
// BYD SEAGULL (2025–2026) — ultra-affordable mini EV
// ─────────────────────────────────────────────────────────────
const seagullStd = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '38.0 kWh', range: 305,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 55, torque: 135, weight: 1360, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.9, topSpeed: 130
}
const seagullExt = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '56.0 kWh', range: 430,
  drivetrain: 'FWD', transmission: 'Auto',
  power: 75, torque: 175, weight: 1420, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 150
}
for (const yr of ['2025','2026']) {
  const adj = yr === '2026' ? 1000 : 0
  specs[`BYD|Seagull|${yr}|Standard Range`] = { ...seagullStd, price: p(25990 + adj) }
  specs[`BYD|Seagull|${yr}|Extended Range`] = { ...seagullExt, price: p(31990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// SKODA ELROQ (2024–2026) — electric compact SUV
// ─────────────────────────────────────────────────────────────
const elroq60 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '59.0 kWh', range: 375,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 2060, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.7, topSpeed: 160
}
const elroq85 = {
  engine: 'Single Electric Motor', fuelType: 'electric',
  battery: '82.0 kWh', range: 560,
  drivetrain: 'RWD', transmission: 'Auto',
  power: 150, torque: 310, weight: 2140, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.4, topSpeed: 160
}
const elroqRS = {
  engine: 'Dual Electric Motor RS', fuelType: 'electric',
  battery: '82.0 kWh', range: 530,
  drivetrain: 'AWD', transmission: 'Auto',
  power: 220, torque: 460, weight: 2240, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 5.4, topSpeed: 180
}
const elroqPrices = {
  '60':  { '2024':59990,'2025':61990,'2026':63990 },
  '85':  { '2024':69990,'2025':71990,'2026':73990 },
  'RS':  { '2024':79990,'2025':81990,'2026':83990 },
}
for (const yr of ['2024','2025','2026']) {
  specs[`Skoda|Elroq|${yr}|60`] = { ...elroq60, price: p(elroqPrices['60'][yr]) }
  specs[`Skoda|Elroq|${yr}|85`] = { ...elroq85, price: p(elroqPrices['85'][yr]) }
  specs[`Skoda|Elroq|${yr}|RS`] = { ...elroqRS, price: p(elroqPrices['RS'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// GENESIS G90 — fill odd/missing years
// ─────────────────────────────────────────────────────────────
const g90v6tt = {
  engine: '3.3L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3342,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 270, torque: 510, weight: 2150, seats: 5,
  fc: 12.3, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 240
}
const g90v8 = {
  engine: '5.0L V8 GDi', fuelType: 'petrol', displacement: 4999,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 313, torque: 520, weight: 2290, seats: 5,
  fc: 14.2, fh: null, fx: null,
  acceleration: 5.4, topSpeed: 240
}
const g90v6ttMk2 = {
  engine: '3.5L V6 Twin-Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-spd Auto',
  power: 309, torque: 530, weight: 2270, seats: 5,
  fc: 12.8, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250
}
for (const yr of ['2019','2021','2022']) {
  specs[`Genesis|G90|${yr}|3.3T`] = { ...g90v6tt, price: p(119990 + (parseInt(yr)-2017)*3000) }
  specs[`Genesis|G90|${yr}|5.0`] = { ...g90v8, price: p(145990 + (parseInt(yr)-2017)*3000) }
}
for (const yr of ['2024','2026']) {
  specs[`Genesis|G90|${yr}|3.5T`] = { ...g90v6ttMk2, price: p(199990 + (parseInt(yr)-2023)*4000) }
  specs[`Genesis|G90|${yr}|3.5T e-AWD`] = { ...g90v6ttMk2, price: p(219990 + (parseInt(yr)-2023)*4000) }
}

// ─────────────────────────────────────────────────────────────
// JEEP CHEROKEE KL — representative years (2014–2021)
// ─────────────────────────────────────────────────────────────
const cherokeeBase = {
  engine: '2.4L 4-cyl MultiAir', fuelType: 'petrol', displacement: 2360,
  cylinders: 4, drivetrain: 'FWD', transmission: '9-spd Auto',
  power: 129, torque: 229, weight: 1800, seats: 5,
  fc: 8.3, fh: null, fx: null,
  acceleration: 10.5, topSpeed: 195
}
const cherokeeTurbo = {
  engine: '2.0L 4-cyl Turbo', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-spd Auto',
  power: 177, torque: 353, weight: 1900, seats: 5,
  fc: 9.1, fh: null, fx: null,
  acceleration: 8.0, topSpeed: 205
}
const cherokeeKLPrices = {
  Sport:       { '2014':36490,'2016':37990,'2018':39490,'2020':41490,'2021':43490 },
  Limited:     { '2014':49990,'2016':52990,'2018':54990,'2020':57990,'2021':59990 },
  Trailhawk:   { '2014':52990,'2016':55990,'2018':57990,'2020':60990,'2021':62990 },
}
for (const yr of ['2014','2016','2018','2020','2021']) {
  specs[`Jeep|Cherokee|${yr}|Sport`] = { ...cherokeeBase, price: p(cherokeeKLPrices.Sport[yr]) }
  specs[`Jeep|Cherokee|${yr}|Limited`] = { ...cherokeeTurbo, price: p(cherokeeKLPrices.Limited[yr]) }
  specs[`Jeep|Cherokee|${yr}|Trailhawk`] = { ...cherokeeTurbo, drivetrain: 'AWD', price: p(cherokeeKLPrices.Trailhawk[yr]) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement129.json', JSON.stringify(out, null, 2))
console.log(`supplement129.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
