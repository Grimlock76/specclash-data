// gen112.cjs — Jaguar, LDV, FPV, McLaren, Abarth, DS expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── JAGUAR ───────────────────────────────────────────────────────────────────
// F-Pace — additional trims
const fpace_p250 = { engine: '2.0L Turbo', displacement: 1997, cylinders: 4, power: 184, torque: 365, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 6.6, topSpeed: 217, fc: 8.3, fh: 6.5, fx: 10.7, fuelType: 'petrol', weight: 1820, seats: 5 }
const fpace_p400e = { engine: '2.0L Turbo PHEV', displacement: 1997, cylinders: 4, power: 297, torque: 640, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.3, topSpeed: 220, fc: 2.5, range: 53, fuelType: 'hybrid', weight: 2145, seats: 5 }
const fpace_svr = { engine: '5.0L V8 Supercharged', displacement: 5000, cylinders: 8, power: 405, torque: 700, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.3, topSpeed: 283, fc: 13.9, fh: 10.5, fx: 17.8, fuelType: 'petrol', weight: 1990, seats: 5 }
for (const yr of [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Jaguar','F-Pace',String(yr),'P250 S', { ...fpace_p250, price: `~$${Math.round(78990+(yr-2016)*1500).toLocaleString()}` })
  add('Jaguar','F-Pace',String(yr),'P300 R-Dynamic SE', { ...fpace_p250, power: 221, torque: 400, acceleration: 6.2, price: `~$${Math.round(92990+(yr-2016)*1500).toLocaleString()}` })
  if (yr >= 2019) add('Jaguar','F-Pace',String(yr),'P400e R-Dynamic SE', { ...fpace_p400e, price: `~$${Math.round(105990+(yr-2019)*1500).toLocaleString()}` })
  add('Jaguar','F-Pace',String(yr),'SVR', { ...fpace_svr, price: `~$${Math.round(139990+(yr-2016)*2000).toLocaleString()}` })
}

// F-Type — additional trims
const ftype_p300 = { engine: '2.0L Turbo', displacement: 1997, cylinders: 4, power: 221, torque: 400, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.4, topSpeed: 250, fc: 8.1, fh: 6.3, fx: 10.5, fuelType: 'petrol', weight: 1614, seats: 2 }
const ftype_p450 = { engine: '3.0L V6 Supercharged', displacement: 2995, cylinders: 6, power: 331, torque: 460, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.8, topSpeed: 275, fc: 10.5, fh: 8.0, fx: 13.5, fuelType: 'petrol', weight: 1672, seats: 2 }
const ftype_p575r = { engine: '5.0L V8 Supercharged', displacement: 5000, cylinders: 8, power: 423, torque: 700, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 3.5, topSpeed: 300, fc: 13.0, fh: 9.8, fx: 16.7, fuelType: 'petrol', weight: 1785, seats: 2 }
for (const yr of [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Jaguar','F-Type',String(yr),'P300 Coupe', { ...ftype_p300, price: `~$${Math.round(89990+(yr-2013)*1500).toLocaleString()}` })
  add('Jaguar','F-Type',String(yr),'P300 Convertible', { ...ftype_p300, price: `~$${Math.round(98990+(yr-2013)*1500).toLocaleString()}` })
  add('Jaguar','F-Type',String(yr),'P450 R Coupe', { ...ftype_p450, price: `~$${Math.round(129990+(yr-2013)*2000).toLocaleString()}` })
  add('Jaguar','F-Type',String(yr),'P575 R Coupe', { ...ftype_p575r, price: `~$${Math.round(189990+(yr-2013)*2000).toLocaleString()}` })
}

// XF additional trims
const xf_p250 = { engine: '2.0L Turbo', displacement: 1997, cylinders: 4, power: 184, torque: 365, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.3, topSpeed: 234, fc: 7.7, fh: 6.0, fx: 10.0, fuelType: 'petrol', weight: 1740, seats: 5 }
const xf_d200 = { engine: '2.0L Turbo Diesel', displacement: 1999, cylinders: 4, power: 147, torque: 430, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.8, topSpeed: 230, fc: 5.3, fh: 4.5, fx: 6.5, fuelType: 'diesel', weight: 1755, seats: 5 }
for (const yr of [2016,2017,2018,2019,2020,2021]) {
  add('Jaguar','XF',String(yr),'P250 S', { ...xf_p250, price: `~$${Math.round(78990+(yr-2016)*1500).toLocaleString()}` })
  add('Jaguar','XF',String(yr),'D200 SE', { ...xf_d200, price: `~$${Math.round(74990+(yr-2016)*1500).toLocaleString()}` })
  add('Jaguar','XF',String(yr),'P300 R-Sport', { ...xf_p250, power: 221, torque: 400, acceleration: 5.9, price: `~$${Math.round(95990+(yr-2016)*1500).toLocaleString()}` })
}

// XE additional trims
const xe_p250 = { engine: '2.0L Turbo', displacement: 1997, cylinders: 4, power: 184, torque: 365, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.9, topSpeed: 240, fc: 7.5, fh: 5.8, fx: 9.7, fuelType: 'petrol', weight: 1595, seats: 5 }
for (const yr of [2015,2016,2017,2018,2019]) {
  add('Jaguar','XE',String(yr),'P300 R-Sport', { ...xe_p250, power: 221, torque: 400, acceleration: 5.4, price: `~$${Math.round(74990+(yr-2015)*1500).toLocaleString()}` })
  add('Jaguar','XE',String(yr),'SV Project 8', { engine: '5.0L V8 Supercharged', displacement: 5000, cylinders: 8, power: 441, torque: 700, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 3.3, topSpeed: 322, fc: 13.5, fh: 10.0, fx: 17.5, fuelType: 'petrol', weight: 1748, seats: 4, price: '~$299,990' })
}

// ─── LDV ──────────────────────────────────────────────────────────────────────
// T60 — additional trims
const ldv_t60_base = { engine: '2.0L Turbo Diesel', displacement: 1996, cylinders: 4, power: 110, torque: 360, transmission: '6sp man / 6sp auto', drivetrain: 'AWD', acceleration: 12.5, topSpeed: 170, fc: 9.0, fh: 7.5, fx: 11.0, fuelType: 'diesel', weight: 1970, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('LDV','T60',String(yr),'Base', { ...ldv_t60_base, drivetrain: 'RWD', price: `~$${Math.round(29990+(yr-2018)*800).toLocaleString()}` })
  add('LDV','T60',String(yr),'Trailrider', { ...ldv_t60_base, price: `~$${Math.round(36990+(yr-2018)*800).toLocaleString()}` })
}

// eT60 (2024-2026) — EV ute
for (const yr of [2024,2025,2026]) {
  add('LDV','eT60',String(yr),'EV', { engine: 'Electric', displacement: null, cylinders: null, power: 160, torque: 350, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 9.0, topSpeed: 150, range: 330, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2350, seats: 5, battery: '88 kWh', price: `~$${Math.round(69990+(yr-2024)*1500).toLocaleString()}` })
}

// Deliver 9 (2021-2026) — van
const ldv_d9 = { engine: '2.0L Turbo Diesel', displacement: 1996, cylinders: 4, power: 110, torque: 360, transmission: '6sp auto', drivetrain: 'FWD', acceleration: 14.0, topSpeed: 170, fc: 9.5, fh: 8.0, fx: 11.5, fuelType: 'diesel', weight: 2200, seats: 3 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('LDV','Deliver 9',String(yr),'LWB', { ...ldv_d9, price: `~$${Math.round(42990+(yr-2021)*1000).toLocaleString()}` })
  add('LDV','Deliver 9',String(yr),'LWB Plus', { ...ldv_d9, price: `~$${Math.round(48990+(yr-2021)*1000).toLocaleString()}` })
}

// MIFA 9 — additional trims
const mifa9 = { engine: 'Electric', displacement: null, cylinders: null, power: 180, torque: 350, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 9.0, topSpeed: 170, range: 520, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2450, seats: 7, battery: '90 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('LDV','MIFA 9',String(yr),'EV Premium', { ...mifa9, price: `~$${Math.round(69990+(yr-2023)*1500).toLocaleString()}` })
  add('LDV','MIFA 9',String(yr),'EV Signature', { ...mifa9, price: `~$${Math.round(77990+(yr-2023)*1500).toLocaleString()}` })
}

// ─── FPV ──────────────────────────────────────────────────────────────────────
// GT additional trims
const fpv_gt_fg = { engine: '5.4L V8 Supercharged', displacement: 5408, cylinders: 8, power: 335, torque: 570, transmission: '6sp man / 6sp auto', drivetrain: 'RWD', acceleration: 5.0, topSpeed: 280, fc: 13.5, fh: 9.8, fx: 17.5, fuelType: 'petrol', weight: 1780, seats: 5 }
const fpv_gt_fgx = { ...fpv_gt_fg, power: 335, torque: 570 }
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015]) {
  add('FPV','GT',String(yr),'FG GT', { ...fpv_gt_fg, price: `~$${Math.round(65000+(yr-2008)*2000).toLocaleString()}` })
  add('FPV','GT',String(yr),'FG GT RSPEC', { ...fpv_gt_fg, price: `~$${Math.round(75000+(yr-2008)*2000).toLocaleString()}` })
}

// F6 Typhoon / Sprint
const fpv_f6 = { engine: '4.0L Turbo 6', displacement: 3984, cylinders: 6, power: 270, torque: 533, transmission: '6sp man', drivetrain: 'RWD', acceleration: 4.8, topSpeed: 280, fc: 13.0, fh: 9.5, fx: 17.0, fuelType: 'petrol', weight: 1720, seats: 5 }
for (const yr of [2004,2005,2006,2007,2008,2009,2010,2011,2012]) {
  add('FPV','F6',String(yr),'Typhoon Sedan', { ...fpv_f6, price: `~$${Math.round(55000+(yr-2004)*2000).toLocaleString()}` })
  add('FPV','F6',String(yr),'Typhoon Ute', { ...fpv_f6, weight: 1750, seats: 2, price: `~$${Math.round(52000+(yr-2004)*2000).toLocaleString()}` })
}

// Boss 260/290/315
const boss_260 = { engine: '5.4L V8', displacement: 5408, cylinders: 8, power: 195, torque: 391, transmission: '6sp man', drivetrain: 'RWD', acceleration: 5.5, topSpeed: 250, fc: 13.0, fh: 9.5, fx: 16.5, fuelType: 'petrol', weight: 1740, seats: 5 }
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015]) {
  add('FPV','Boss',String(yr),'290', { ...boss_260, power: 216, torque: 416, acceleration: 5.2, price: `~$${Math.round(58000+(yr-2008)*2000).toLocaleString()}` })
  add('FPV','Boss',String(yr),'315', { ...boss_260, power: 235, torque: 431, acceleration: 5.0, price: `~$${Math.round(62000+(yr-2008)*2000).toLocaleString()}` })
}

// ─── McLAREN ──────────────────────────────────────────────────────────────────
// 720S (2017-2023)
const p720s = { engine: '4.0L V8 Twin-Turbo', displacement: 3994, cylinders: 8, power: 530, torque: 770, transmission: '7sp DCT', drivetrain: 'RWD', acceleration: 2.9, topSpeed: 341, fc: 13.0, fh: 9.5, fx: 17.0, fuelType: 'petrol', weight: 1283, seats: 2 }
for (const yr of [2017,2018,2019,2020,2021,2022,2023]) {
  add('McLaren','720S',String(yr),'Coupe', { ...p720s, price: `~$${Math.round(419990+(yr-2017)*5000).toLocaleString()}` })
  add('McLaren','720S',String(yr),'Performance', { ...p720s, price: `~$${Math.round(469990+(yr-2017)*5000).toLocaleString()}` })
  add('McLaren','720S',String(yr),'Spider', { ...p720s, weight: 1332, price: `~$${Math.round(459990+(yr-2017)*5000).toLocaleString()}` })
}

// 570S / 570GT (2016-2020)
const p570s = { engine: '3.8L V8 Twin-Turbo', displacement: 3799, cylinders: 8, power: 425, torque: 600, transmission: '7sp DCT', drivetrain: 'RWD', acceleration: 3.2, topSpeed: 328, fc: 11.7, fh: 8.8, fx: 15.2, fuelType: 'petrol', weight: 1313, seats: 2 }
for (const yr of [2016,2017,2018,2019,2020]) {
  add('McLaren','570S',String(yr),'Coupe', { ...p570s, price: `~$${Math.round(289990+(yr-2016)*3000).toLocaleString()}` })
  add('McLaren','570S',String(yr),'Spider', { ...p570s, weight: 1359, price: `~$${Math.round(319990+(yr-2016)*3000).toLocaleString()}` })
  add('McLaren','570GT',String(yr),'GT', { ...p570s, price: `~$${Math.round(299990+(yr-2016)*3000).toLocaleString()}` })
}

// Artura (2022-2026) — PHEV
const artura = { engine: '3.0L V6 Twin-Turbo PHEV', displacement: 2993, cylinders: 6, power: 500, torque: 720, transmission: '8sp DCT', drivetrain: 'RWD', acceleration: 3.0, topSpeed: 330, fc: 3.5, range: 30, fuelType: 'hybrid', weight: 1498, seats: 2 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('McLaren','Artura',String(yr),'Coupe', { ...artura, price: `~$${Math.round(399990+(yr-2022)*8000).toLocaleString()}` })
}

// GT (2020-2024)
const mgt = { engine: '4.0L V8 Twin-Turbo', displacement: 3994, cylinders: 8, power: 457, torque: 630, transmission: '7sp DCT', drivetrain: 'RWD', acceleration: 3.2, topSpeed: 326, fc: 12.5, fh: 9.5, fx: 16.0, fuelType: 'petrol', weight: 1466, seats: 2 }
for (const yr of [2020,2021,2022,2023,2024]) {
  add('McLaren','GT',String(yr),'GT', { ...mgt, price: `~$${Math.round(299990+(yr-2020)*5000).toLocaleString()}` })
}

// ─── ABARTH ───────────────────────────────────────────────────────────────────
// 595 (2013-2024)
const ab595 = { engine: '1.4L Turbo', displacement: 1368, cylinders: 4, power: 107, torque: 206, transmission: '5sp man / 6sp TCT', drivetrain: 'FWD', acceleration: 8.7, topSpeed: 200, fc: 6.7, fh: 5.4, fx: 8.5, fuelType: 'petrol', weight: 1050, seats: 4 }
const ab595c = { ...ab595, power: 121, torque: 212, acceleration: 8.0, topSpeed: 210 }
const ab695 = { ...ab595, power: 132, torque: 230, acceleration: 7.3, topSpeed: 218, engine: '1.4L Turbo T-Jet', weight: 1075 }
for (const yr of [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]) {
  add('Abarth','595',String(yr),'595', { ...ab595, price: `~$${Math.round(29990+(yr-2013)*800).toLocaleString()}` })
  add('Abarth','595',String(yr),'595C Convertible', { ...ab595c, price: `~$${Math.round(35990+(yr-2013)*800).toLocaleString()}` })
  add('Abarth','595',String(yr),'695', { ...ab695, price: `~$${Math.round(42990+(yr-2013)*800).toLocaleString()}` })
  add('Abarth','595',String(yr),'695 Biposto', { ...ab695, power: 132, torque: 250, acceleration: 6.7, topSpeed: 230, weight: 997, seats: 2, price: `~$${Math.round(69990+(yr-2013)*1000).toLocaleString()}` })
}

// ─── DS ───────────────────────────────────────────────────────────────────────
// DS 3 Crossback / DS 3 (2019-2026)
const ds3_pb = { engine: '1.2L PureTech 130', displacement: 1199, cylinders: 3, power: 96, torque: 230, transmission: '8sp auto', drivetrain: 'FWD', acceleration: 9.5, topSpeed: 192, fc: 5.7, fh: 4.6, fx: 7.3, fuelType: 'petrol', weight: 1255, seats: 5 }
const ds3_e = { engine: 'Electric', displacement: null, cylinders: null, power: 100, torque: 260, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.7, topSpeed: 150, range: 320, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1455, seats: 5, battery: '50 kWh' }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('DS','DS 3 Crossback',String(yr),'PureTech 130', { ...ds3_pb, price: `~$${Math.round(38990+(yr-2019)*1000).toLocaleString()}` })
  add('DS','DS 3 Crossback',String(yr),'E-Tense', { ...ds3_e, price: `~$${Math.round(49990+(yr-2019)*1000).toLocaleString()}` })
}

// DS 7 Crossback (2018-2026)
const ds7_20t = { engine: '1.6L PureTech', displacement: 1598, cylinders: 4, power: 180, torque: 300, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.5, topSpeed: 230, fc: 7.2, fh: 5.8, fx: 9.2, fuelType: 'petrol', weight: 1570, seats: 5 }
const ds7_phev = { engine: '1.6L PureTech PHEV', displacement: 1598, cylinders: 4, power: 265, torque: 520, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.9, topSpeed: 230, fc: 1.8, range: 65, fuelType: 'hybrid', weight: 1870, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('DS','DS 7 Crossback',String(yr),'PureTech 180', { ...ds7_20t, price: `~$${Math.round(59990+(yr-2018)*1000).toLocaleString()}` })
  add('DS','DS 7 Crossback',String(yr),'E-Tense 4x4 300', { ...ds7_phev, price: `~$${Math.round(79990+(yr-2018)*1000).toLocaleString()}` })
}

// DS 9 (2021-2026)
const ds9_phev = { engine: '1.6L PHEV', displacement: 1598, cylinders: 4, power: 225, torque: 450, transmission: '8sp auto', drivetrain: 'FWD', acceleration: 7.9, topSpeed: 230, fc: 1.5, range: 65, fuelType: 'hybrid', weight: 1980, seats: 5 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('DS','DS 9',String(yr),'E-Tense 225', { ...ds9_phev, price: `~$${Math.round(74990+(yr-2021)*1500).toLocaleString()}` })
  add('DS','DS 9',String(yr),'E-Tense 360 4x4', { ...ds9_phev, power: 260, torque: 520, drivetrain: 'AWD', acceleration: 5.7, weight: 2120, price: `~$${Math.round(89990+(yr-2021)*1500).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement112.json', JSON.stringify(out, null, 2))
console.log('supplement112.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
