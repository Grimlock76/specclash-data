// gen109.cjs — Lexus expansion: IS, GS, RC, RX, NX year-gap fill
'use strict'
const fs = require('fs')

const specs = {}
function add(model, year, trim, data) {
  specs[`Lexus|${model}|${year}|${trim}`] = data
}

// ─── IS ───────────────────────────────────────────────────────────────────
// IS 300h (2013-2020) — fill year gaps
const is300h = { engine: '2.5L Atkinson + Electric', displacement: 2494, cylinders: 4, power: 164, torque: 221, transmission: 'e-CVT', drivetrain: 'RWD', acceleration: 8.3, topSpeed: 200, fc: 5.2, fh: 4.5, fx: 6.3, fuelType: 'hybrid', weight: 1625, seats: 5 }
for (const yr of [2014,2015,2016,2017,2018,2019]) {
  add('IS', String(yr), 'IS 300h', { ...is300h, price: `~$${Math.round(62900 + (yr-2013)*1500).toLocaleString()}` })
}

// IS 350 (2013-2018) — fill year gaps
const is350 = { engine: '3.5L V6', displacement: 3456, cylinders: 6, power: 233, torque: 380, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.6, topSpeed: 230, fc: 9.9, fh: 7.4, fx: 13.0, fuelType: 'petrol', weight: 1695, seats: 5 }
for (const yr of [2014,2015,2017,2018]) {
  add('IS', String(yr), 'IS 350', { ...is350, price: `~$${Math.round(73900 + (yr-2013)*1500).toLocaleString()}` })
}

// IS 350 F Sport (2013-2018)
for (const yr of [2014,2015,2016,2017,2018]) {
  add('IS', String(yr), 'IS 350 F Sport', { ...is350, price: `~$${Math.round(81900 + (yr-2013)*1500).toLocaleString()}` })
}

// IS F (2008-2014) — fill year gaps
const isF = { engine: '5.0L V8', displacement: 4969, cylinders: 8, power: 311, torque: 505, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.8, topSpeed: 270, fc: 13.5, fh: 9.5, fx: 17.8, fuelType: 'petrol', weight: 1768, seats: 5 }
for (const yr of [2010,2011,2012,2013,2014]) {
  add('IS', String(yr), 'IS F', { ...isF, price: `~$${Math.round(112000 + (yr-2008)*2000).toLocaleString()}` })
}

// IS 200t (2016-2017) — fill gap
add('IS', '2017', 'IS 200t', { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 175, torque: 350, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.5, topSpeed: 215, fc: 7.8, fh: 6.2, fx: 9.8, fuelType: 'petrol', weight: 1625, seats: 5, price: '~$59,900' })
add('IS', '2017', 'IS 350', { ...is350, price: '~$77,400' })
add('IS', '2018', 'IS 200t', { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 175, torque: 350, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.5, topSpeed: 215, fc: 7.8, fh: 6.2, fx: 9.8, fuelType: 'petrol', weight: 1625, seats: 5, price: '~$61,900' })

// IS 300 (2019-2026) — add F Sport variant
const is300 = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 175, torque: 350, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.5, topSpeed: 215, fc: 7.8, fh: 6.2, fx: 9.8, fuelType: 'petrol', weight: 1625, seats: 5 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('IS', String(yr), 'IS 300 F Sport', { ...is300, price: `~$${Math.round(68000 + (yr-2019)*1500).toLocaleString()}` })
}
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('IS', String(yr), 'IS 300h', { ...is300h, price: `~$${Math.round(71500 + (yr-2021)*1500).toLocaleString()}` })
}

// ─── GS ───────────────────────────────────────────────────────────────────
// GS 300h (2013-2018)
const gs300h = { engine: '2.5L Atkinson + Electric', displacement: 2494, cylinders: 4, power: 164, torque: 221, transmission: 'e-CVT', drivetrain: 'RWD', acceleration: 8.5, topSpeed: 200, fc: 5.7, fh: 5.0, fx: 6.8, fuelType: 'hybrid', weight: 1790, seats: 5 }
for (const yr of [2013,2014,2015,2016,2017,2018]) {
  add('GS', String(yr), 'GS 300h', { ...gs300h, price: `~$${Math.round(82900 + (yr-2013)*2000).toLocaleString()}` })
}

// GS 350 — fill gaps
const gs350 = { engine: '3.5L V6', displacement: 3456, cylinders: 6, power: 233, torque: 380, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.9, topSpeed: 230, fc: 9.9, fh: 7.4, fx: 12.9, fuelType: 'petrol', weight: 1790, seats: 5 }
for (const yr of [2013,2014,2015,2016,2017]) {
  add('GS', String(yr), 'GS 350', { ...gs350, price: `~$${Math.round(93900 + (yr-2012)*2000).toLocaleString()}` })
}

// GS F (2015-2018)
const gsF = { engine: '5.0L V8', displacement: 4969, cylinders: 8, power: 351, torque: 530, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.6, topSpeed: 270, fc: 13.5, fh: 9.5, fx: 17.7, fuelType: 'petrol', weight: 1845, seats: 5 }
for (const yr of [2016,2017,2018]) {
  add('GS', String(yr), 'GS F', { ...gsF, price: `~$${Math.round(139000 + (yr-2015)*2000).toLocaleString()}` })
}

// ─── RC ───────────────────────────────────────────────────────────────────
// RC 200t (2016-2018)
const rc200t = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 175, torque: 350, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.5, topSpeed: 230, fc: 8.2, fh: 6.5, fx: 10.4, fuelType: 'petrol', weight: 1660, seats: 4 }
for (const yr of [2016,2017,2018]) {
  add('RC', String(yr), 'RC 200t', { ...rc200t, price: `~$${Math.round(63000 + (yr-2015)*2000).toLocaleString()}` })
}

// RC 300h (2016-2020)
const rc300h = { engine: '2.5L Atkinson + Electric', displacement: 2494, cylinders: 4, power: 164, torque: 221, transmission: 'e-CVT', drivetrain: 'RWD', acceleration: 8.6, topSpeed: 200, fc: 5.9, fh: 5.2, fx: 7.0, fuelType: 'hybrid', weight: 1750, seats: 4 }
for (const yr of [2016,2017,2018,2019,2020]) {
  add('RC', String(yr), 'RC 300h', { ...rc300h, price: `~$${Math.round(67000 + (yr-2015)*2000).toLocaleString()}` })
}

// RC 350 (2016-2020)
const rc350 = { engine: '3.5L V6', displacement: 3456, cylinders: 6, power: 233, torque: 380, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.9, topSpeed: 230, fc: 10.1, fh: 7.6, fx: 13.1, fuelType: 'petrol', weight: 1725, seats: 4 }
for (const yr of [2016,2017,2018,2019,2020]) {
  add('RC', String(yr), 'RC 350', { ...rc350, price: `~$${Math.round(76000 + (yr-2014)*2000).toLocaleString()}` })
}

// RC F (2016-2017, 2019)
const rcF = { engine: '5.0L V8', displacement: 4969, cylinders: 8, power: 351, torque: 530, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 270, fc: 13.0, fh: 9.3, fx: 17.0, fuelType: 'petrol', weight: 1785, seats: 4 }
for (const yr of [2016,2017,2019]) {
  add('RC', String(yr), 'RC F', { ...rcF, price: `~$${Math.round(120000 + (yr-2015)*3000).toLocaleString()}` })
}

// ─── NX ───────────────────────────────────────────────────────────────────
// NX 350 F Sport (2022+)
const nx350 = { engine: '2.4L Turbo', displacement: 2393, cylinders: 4, power: 201, torque: 430, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.0, topSpeed: 200, fc: 9.0, fh: 6.9, fx: 11.5, fuelType: 'petrol', weight: 1760, seats: 5 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('NX', String(yr), 'NX 350 F Sport', { ...nx350, price: `~$${Math.round(71000 + (yr-2022)*1500).toLocaleString()}` })
}

// ─── RX ───────────────────────────────────────────────────────────────────
// RX 350 F Sport (2016-2024)
const rx350 = { engine: '3.5L V6', displacement: 3456, cylinders: 6, power: 218, torque: 350, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 8.0, topSpeed: 200, fc: 10.2, fh: 7.6, fx: 13.2, fuelType: 'petrol', weight: 2015, seats: 5 }
for (const yr of [2016,2017,2018,2019,2020,2021]) {
  add('RX', String(yr), 'RX 350 F Sport', { ...rx350, price: `~$${Math.round(86000 + (yr-2016)*2000).toLocaleString()}` })
  add('RX', String(yr), 'RX 450h F Sport', { engine: '3.5L V6 Hybrid', displacement: 3456, cylinders: 6, power: 230, torque: 335, transmission: 'e-CVT', drivetrain: 'AWD', acceleration: 7.7, topSpeed: 200, fc: 6.7, fh: 5.8, fx: 8.0, fuelType: 'hybrid', weight: 2100, seats: 5, price: `~$${Math.round(95000 + (yr-2016)*2000).toLocaleString()}` })
}

// ─── UX ───────────────────────────────────────────────────────────────────
// UX 250h F Sport (2019+)
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('UX', String(yr), 'UX 250h F Sport', { engine: '2.0L Atkinson + Electric', displacement: 1987, cylinders: 4, power: 135, torque: 187, transmission: 'e-CVT', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 180, fc: 4.9, fh: 4.3, fx: 5.8, fuelType: 'hybrid', weight: 1540, seats: 5, price: `~$${Math.round(54000 + (yr-2019)*1000).toLocaleString()}` })
}

// ─── LS ───────────────────────────────────────────────────────────────────
// LS 460 fill years (2008-2012)
const ls460 = { engine: '4.6L V8', displacement: 4608, cylinders: 8, power: 280, torque: 493, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.7, topSpeed: 250, fc: 11.8, fh: 8.3, fx: 15.4, fuelType: 'petrol', weight: 2020, seats: 5 }
for (const yr of [2008,2009,2010,2011,2012]) {
  add('LS', String(yr), 'LS 460', { ...ls460, price: `~$${Math.round(175000 + (yr-2007)*3000).toLocaleString()}` })
}
// LS 600h (2008-2012)
const ls600h = { engine: '5.0L V8 Hybrid', displacement: 4969, cylinders: 8, power: 327, torque: 520, transmission: 'e-CVT', drivetrain: 'AWD', acceleration: 6.3, topSpeed: 250, fc: 9.3, fh: 7.7, fx: 11.4, fuelType: 'hybrid', weight: 2425, seats: 5 }
for (const yr of [2008,2009,2010,2011,2012]) {
  add('LS', String(yr), 'LS 600h', { ...ls600h, price: `~$${Math.round(250000 + (yr-2007)*3000).toLocaleString()}` })
}
// LS 500h (2018-2022)
for (const yr of [2018,2019,2020,2021]) {
  add('LS', String(yr), 'LS 500h', { engine: '3.5L V6 Hybrid', displacement: 3456, cylinders: 6, power: 264, torque: 350, transmission: 'e-CVT', drivetrain: 'AWD', acceleration: 5.4, topSpeed: 250, fc: 7.0, fh: 5.8, fx: 8.7, fuelType: 'hybrid', weight: 2305, seats: 5, price: `~$${Math.round(200000 + (yr-2018)*3000).toLocaleString()}` })
}
// LS 500 F Sport (2018-2026)
const ls500 = { engine: '3.5L V6 Twin-Turbo', displacement: 3456, cylinders: 6, power: 310, torque: 600, transmission: '10sp auto', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 250, fc: 9.8, fh: 7.1, fx: 12.8, fuelType: 'petrol', weight: 2205, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('LS', String(yr), 'LS 500 F Sport', { ...ls500, price: `~$${Math.round(215000 + (yr-2018)*3000).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement109.json', JSON.stringify(out, null, 2))
console.log('supplement109.json written —', Object.keys(specs).length, 'Lexus entries')
