// gen107.cjs — Porsche expansion: Cayenne Coupe, Targa, Macan Turbo/GTS, Panamera Sport Turismo, 911 gap-fill
'use strict'
const fs = require('fs')

const specs = {}

function add(model, year, trim, data) {
  specs[`Porsche|${model}|${year}|${trim}`] = data
}

// ─── 911 GAP-FILL ─────────────────────────────────────────────────────────
// 997 generation (2005-2012) — fill Carrera S, Carrera 4, Carrera 4S, Cabriolet, GT3
const c997 = { engine: '3.6L Flat-6', displacement: 3596, cylinders: 6, power: 239, torque: 300, transmission: '6sp man / 5sp Tiptronic', drivetrain: 'RWD', acceleration: 5.0, topSpeed: 285, fc: 10.8, fh: 7.5, fx: 14.2, fuelType: 'petrol', weight: 1395, seats: 2, price: '~$187,000' }
const cs997 = { engine: '3.8L Flat-6', displacement: 3824, cylinders: 6, power: 261, torque: 400, transmission: '6sp man / 5sp Tiptronic', drivetrain: 'RWD', acceleration: 4.6, topSpeed: 293, fc: 11.5, fh: 7.9, fx: 15.2, fuelType: 'petrol', weight: 1415, seats: 2, price: '~$207,000' }
const c4_997 = { ...c997, drivetrain: 'AWD', acceleration: 4.8, price: '~$198,000', weight: 1450 }
const c4s997 = { ...cs997, drivetrain: 'AWD', acceleration: 4.5, price: '~$222,000', weight: 1470 }
const gt3_997 = { engine: '3.6L Flat-6 NA', displacement: 3600, cylinders: 6, power: 305, torque: 405, transmission: '6sp man', drivetrain: 'RWD', acceleration: 4.1, topSpeed: 310, fc: 13.9, fh: 9.0, fx: 18.5, fuelType: 'petrol', weight: 1395, seats: 2, price: '~$297,000' }
const gt3rs_997 = { ...gt3_997, power: 331, torque: 430, acceleration: 3.9, topSpeed: 310, price: '~$337,000', weight: 1375 }

for (const yr of [2005,2006,2007,2008,2009,2010,2011]) {
  if (yr !== 2005 && yr !== 2006) add('911', String(yr), 'Carrera', { ...c997, price: `~$${Math.round(187000 + (yr-2005)*2000).toLocaleString()}` })
  add('911', String(yr), 'Carrera S', { ...cs997, price: `~$${Math.round(207000 + (yr-2005)*2000).toLocaleString()}` })
  add('911', String(yr), 'Carrera 4', { ...c4_997, price: `~$${Math.round(198000 + (yr-2005)*2000).toLocaleString()}` })
  if (yr !== 2008) add('911', String(yr), 'Carrera 4S', { ...c4s997, price: `~$${Math.round(222000 + (yr-2005)*2000).toLocaleString()}` })
  add('911', String(yr), 'Carrera Cabriolet', { ...c997, weight: 1440, acceleration: 5.3, price: `~$${Math.round(205000 + (yr-2005)*2000).toLocaleString()}` })
}
// 997 GT3 gap years
for (const yr of [2006,2008,2010,2011]) {
  add('911', String(yr), 'GT3', { ...gt3_997, power: yr >= 2010 ? 331 : 305, torque: yr >= 2010 ? 430 : 405, price: yr >= 2010 ? '~$319,000' : '~$297,000' })
}
for (const yr of [2007,2008,2010]) {
  add('911', String(yr), 'GT3 RS', { ...gt3rs_997, power: yr >= 2010 ? 368 : 331, price: yr >= 2010 ? '~$368,000' : '~$337,000' })
}
// 997 Turbo gap years
for (const yr of [2006,2008,2010,2011]) {
  add('911', String(yr), 'Turbo', { engine: '3.6L Flat-6 Twin-Turbo', displacement: 3600, cylinders: 6, power: 353, torque: 620, transmission: '6sp man / 6sp Tiptronic', drivetrain: 'AWD', acceleration: 3.7, topSpeed: 312, fc: 12.8, fh: 8.5, fx: 17.2, fuelType: 'petrol', weight: 1585, seats: 4, price: '~$299,000' })
}

// 991 generation (2012-2018) — fill Carrera 4, Carrera 4S, Targa, Cabriolet, GT3 Touring
const c991 = { engine: '3.4L Flat-6', displacement: 3436, cylinders: 6, power: 257, torque: 390, transmission: '7sp PDK / 6sp man', drivetrain: 'RWD', acceleration: 4.6, topSpeed: 289, fc: 8.9, fh: 6.4, fx: 11.7, fuelType: 'petrol', weight: 1380, seats: 4, price: '~$218,000' }
const cs991 = { engine: '3.8L Flat-6', displacement: 3800, cylinders: 6, power: 294, torque: 440, transmission: '7sp PDK / 7sp man', drivetrain: 'RWD', acceleration: 4.3, topSpeed: 308, fc: 9.8, fh: 7.0, fx: 12.8, fuelType: 'petrol', weight: 1395, seats: 4, price: '~$244,000' }
// 991.2 (2016+) uses 3.0L turbo
const c9912 = { engine: '3.0L Flat-6 Twin-Turbo', displacement: 3000, cylinders: 6, power: 283, torque: 450, transmission: '7sp PDK', drivetrain: 'RWD', acceleration: 4.2, topSpeed: 293, fc: 8.3, fh: 6.4, fx: 10.3, fuelType: 'petrol', weight: 1390, seats: 4, price: '~$228,000' }
const cs9912 = { ...c9912, power: 331, torque: 530, acceleration: 3.7, topSpeed: 308, price: '~$268,000' }

for (const yr of [2012,2013,2014,2015]) {
  add('911', String(yr), 'Carrera 4', { ...c991, drivetrain: 'AWD', acceleration: 4.4, weight: 1430, price: `~$${Math.round(228000 + (yr-2012)*3000).toLocaleString()}` })
  if (yr !== 2014) add('911', String(yr), 'Carrera 4S', { ...cs991, drivetrain: 'AWD', acceleration: 4.1, weight: 1445, price: `~$${Math.round(255000 + (yr-2012)*3000).toLocaleString()}` })
  add('911', String(yr), 'Targa 4', { ...c991, drivetrain: 'AWD', weight: 1445, acceleration: 4.4, price: `~$${Math.round(243000 + (yr-2012)*3000).toLocaleString()}` })
  add('911', String(yr), 'Targa 4S', { ...cs991, drivetrain: 'AWD', weight: 1460, acceleration: 4.1, price: `~$${Math.round(270000 + (yr-2012)*3000).toLocaleString()}` })
  add('911', String(yr), 'Carrera Cabriolet', { ...c991, weight: 1425, acceleration: 4.9, price: `~$${Math.round(238000 + (yr-2012)*3000).toLocaleString()}` })
  add('911', String(yr), 'Carrera S Cabriolet', { ...cs991, weight: 1440, acceleration: 4.6, price: `~$${Math.round(265000 + (yr-2012)*3000).toLocaleString()}` })
}
for (const yr of [2016,2017,2018]) {
  add('911', String(yr), 'Carrera 4', { ...c9912, drivetrain: 'AWD', weight: 1430, acceleration: 4.0, price: `~$${Math.round(242000 + (yr-2016)*4000).toLocaleString()}` })
  add('911', String(yr), 'Carrera 4S', { ...cs9912, drivetrain: 'AWD', weight: 1445, acceleration: 3.5, price: `~$${Math.round(278000 + (yr-2016)*4000).toLocaleString()}` })
  add('911', String(yr), 'Targa 4', { ...c9912, drivetrain: 'AWD', weight: 1450, acceleration: 4.0, price: `~$${Math.round(258000 + (yr-2016)*4000).toLocaleString()}` })
  add('911', String(yr), 'Targa 4S', { ...cs9912, drivetrain: 'AWD', weight: 1465, acceleration: 3.6, price: '~$302,000' })
  add('911', String(yr), 'Carrera GTS', { ...cs9912, power: 338, torque: 460, acceleration: 3.6, topSpeed: 312, price: `~$${Math.round(315000 + (yr-2016)*4000).toLocaleString()}` })
  if (yr === 2018) add('911', String(yr), 'GT3 Touring', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 368, torque: 460, transmission: '6sp man', drivetrain: 'RWD', acceleration: 3.9, topSpeed: 320, fc: 12.9, fh: 8.8, fx: 17.0, fuelType: 'petrol', weight: 1430, seats: 4, price: '~$378,000' })
}

// 992 generation (2019-2025) — fill Carrera 4, Targa, Cabriolet, GT3 Touring, Dakar, Sport Classic
const c992 = { engine: '3.0L Flat-6 Twin-Turbo', displacement: 3000, cylinders: 6, power: 283, torque: 450, transmission: '8sp PDK', drivetrain: 'RWD', acceleration: 4.2, topSpeed: 293, fc: 8.1, fh: 6.3, fx: 10.0, fuelType: 'petrol', weight: 1430, seats: 4, price: '~$235,000' }
const cs992 = { ...c992, power: 331, torque: 530, acceleration: 3.7, topSpeed: 308, price: '~$285,000' }
const c4_992 = { ...c992, drivetrain: 'AWD', acceleration: 4.0, weight: 1480, price: '~$247,000' }
const c4s992 = { ...cs992, drivetrain: 'AWD', acceleration: 3.6, weight: 1495, price: '~$297,000' }

for (const yr of [2019,2020,2021,2022,2023,2024,2025]) {
  if (yr !== 2019 && yr !== 2020 && yr !== 2023 && yr !== 2024 && yr !== 2025) {
    add('911', String(yr), 'Carrera S', { ...cs992, price: `~$${Math.round(285000 + (yr-2019)*3000).toLocaleString()}` })
  }
  add('911', String(yr), 'Carrera 4', { ...c4_992, price: `~$${Math.round(247000 + (yr-2019)*3000).toLocaleString()}` })
  if (yr !== 2020) add('911', String(yr), 'Carrera 4S', { ...c4s992, price: `~$${Math.round(297000 + (yr-2019)*3000).toLocaleString()}` })
  add('911', String(yr), 'Carrera Cabriolet', { ...c992, weight: 1480, acceleration: 4.4, price: `~$${Math.round(253000 + (yr-2019)*3000).toLocaleString()}` })
  add('911', String(yr), 'Carrera S Cabriolet', { ...cs992, weight: 1495, acceleration: 3.9, price: `~$${Math.round(305000 + (yr-2019)*3000).toLocaleString()}` })
  if (yr >= 2021) {
    add('911', String(yr), 'Targa 4', { ...c4_992, weight: 1510, acceleration: 4.0, price: `~$${Math.round(265000 + (yr-2021)*3000).toLocaleString()}` })
    add('911', String(yr), 'Targa 4S', { ...c4s992, weight: 1525, acceleration: 3.6, price: `~$${Math.round(317000 + (yr-2021)*3000).toLocaleString()}` })
  }
  if (yr >= 2022) {
    add('911', String(yr), 'GT3 Touring', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 375, torque: 470, transmission: '6sp man / 7sp PDK', drivetrain: 'RWD', acceleration: 3.9, topSpeed: 318, fc: 13.0, fh: 8.9, fx: 17.2, fuelType: 'petrol', weight: 1435, seats: 4, price: '~$397,000' })
  }
  if (yr >= 2023 && yr <= 2025) {
    add('911', String(yr), 'Dakar', { engine: '3.0L Flat-6 Twin-Turbo', displacement: 3000, cylinders: 6, power: 353, torque: 570, transmission: '8sp PDK', drivetrain: 'AWD', acceleration: 3.4, topSpeed: 240, fc: 10.8, fh: 8.0, fx: 13.5, fuelType: 'petrol', weight: 1605, seats: 4, price: '~$378,000' })
  }
  if (yr === 2022) {
    add('911', String(yr), 'Sport Classic', { engine: '3.7L Flat-6 Twin-Turbo', displacement: 3745, cylinders: 6, power: 404, torque: 550, transmission: '7sp man', drivetrain: 'RWD', acceleration: 4.0, topSpeed: 309, fc: 11.2, fh: 8.0, fx: 14.5, fuelType: 'petrol', weight: 1605, seats: 4, price: '~$436,000' })
  }
}

// ─── CAYENNE COUPE ────────────────────────────────────────────────────────
// Introduced 2019, 958 chassis Cayenne Coupe
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Cayenne', String(yr), 'Coupe', { engine: '3.0L V6 Turbo', displacement: 2995, cylinders: 6, power: 250, torque: 450, transmission: '8sp Tiptronic', drivetrain: 'AWD', acceleration: 6.0, topSpeed: 243, fc: 10.0, fh: 7.3, fx: 12.7, fuelType: 'petrol', weight: 2020, seats: 4, price: `~$${Math.round(135000 + (yr-2019)*3000).toLocaleString()}` })
  add('Cayenne', String(yr), 'S Coupe', { engine: '2.9L V6 Biturbo', displacement: 2895, cylinders: 6, power: 324, torque: 600, transmission: '8sp Tiptronic', drivetrain: 'AWD', acceleration: 5.0, topSpeed: 263, fc: 11.0, fh: 7.7, fx: 14.3, fuelType: 'petrol', weight: 2075, seats: 4, price: `~$${Math.round(191000 + (yr-2019)*3000).toLocaleString()}` })
  add('Cayenne', String(yr), 'GTS Coupe', { engine: '4.0L V8 Biturbo', displacement: 3996, cylinders: 8, power: 338, torque: 620, transmission: '8sp Tiptronic', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 270, fc: 13.1, fh: 9.1, fx: 17.2, fuelType: 'petrol', weight: 2155, seats: 4, price: `~$${Math.round(231000 + (yr-2019)*3000).toLocaleString()}` })
  add('Cayenne', String(yr), 'Turbo Coupe', { engine: '4.0L V8 Biturbo', displacement: 3996, cylinders: 8, power: 404, torque: 770, transmission: '8sp Tiptronic', drivetrain: 'AWD', acceleration: 3.9, topSpeed: 286, fc: 13.5, fh: 9.3, fx: 17.8, fuelType: 'petrol', weight: 2245, seats: 4, price: `~$${Math.round(287000 + (yr-2019)*3000).toLocaleString()}` })
  if (yr >= 2022) {
    add('Cayenne', String(yr), 'Turbo GT', { engine: '4.0L V8 Biturbo', displacement: 3996, cylinders: 8, power: 474, torque: 850, transmission: '8sp Tiptronic', drivetrain: 'AWD', acceleration: 3.3, topSpeed: 300, fc: 14.0, fh: 9.8, fx: 18.3, fuelType: 'petrol', weight: 2235, seats: 4, price: `~$${Math.round(330000 + (yr-2022)*4000).toLocaleString()}` })
  }
}

// ─── MACAN EXPANSION ─────────────────────────────────────────────────────
// Macan Turbo and GTS (2014-2023 ICE gen, then EV from 2024)
for (const yr of [2014,2015,2016,2017,2018,2019]) {
  add('Macan', String(yr), 'S', { engine: '3.0L V6 Turbo', displacement: 2995, cylinders: 6, power: 260, torque: 480, transmission: '7sp PDK', drivetrain: 'AWD', acceleration: 5.1, topSpeed: 254, fc: 8.8, fh: 6.5, fx: 11.3, fuelType: 'petrol', weight: 1870, seats: 5, price: `~$${Math.round(97000 + (yr-2014)*3000).toLocaleString()}` })
  add('Macan', String(yr), 'Turbo', { engine: '3.6L V6 Biturbo', displacement: 3604, cylinders: 6, power: 294, torque: 550, transmission: '7sp PDK', drivetrain: 'AWD', acceleration: 4.6, topSpeed: 266, fc: 9.3, fh: 6.8, fx: 12.0, fuelType: 'petrol', weight: 1945, seats: 5, price: `~$${Math.round(130000 + (yr-2014)*3000).toLocaleString()}` })
}
for (const yr of [2016,2017,2018,2019,2020,2021]) {
  add('Macan', String(yr), 'GTS', { engine: '2.9L V6 Biturbo', displacement: 2895, cylinders: 6, power: 324, torque: 460, transmission: '7sp PDK', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 270, fc: 9.3, fh: 6.7, fx: 12.0, fuelType: 'petrol', weight: 1935, seats: 5, price: `~$${Math.round(127000 + (yr-2016)*3000).toLocaleString()}` })
}
for (const yr of [2019,2020,2021,2022,2023]) {
  add('Macan', String(yr), 'S', { engine: '2.9L V6 Biturbo', displacement: 2895, cylinders: 6, power: 260, torque: 480, transmission: '7sp PDK', drivetrain: 'AWD', acceleration: 5.0, topSpeed: 254, fc: 9.1, fh: 6.6, fx: 11.7, fuelType: 'petrol', weight: 1890, seats: 5, price: `~$${Math.round(108000 + (yr-2019)*3000).toLocaleString()}` })
}

// ─── PANAMERA SPORT TURISMO ───────────────────────────────────────────────
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024,2025]) {
  add('Panamera', String(yr), 'Sport Turismo', { engine: '2.9L V6 Biturbo', displacement: 2895, cylinders: 6, power: 243, torque: 450, transmission: '8sp PDK', drivetrain: 'AWD', acceleration: 5.5, topSpeed: 270, fc: 8.5, fh: 6.2, fx: 11.0, fuelType: 'petrol', weight: 1865, seats: 4, cargo: 520, price: `~$${Math.round(200000 + (yr-2017)*4000).toLocaleString()}` })
  add('Panamera', String(yr), '4S Sport Turismo', { engine: '2.9L V6 Biturbo', displacement: 2895, cylinders: 6, power: 324, torque: 550, transmission: '8sp PDK', drivetrain: 'AWD', acceleration: 4.2, topSpeed: 289, fc: 9.4, fh: 6.9, fx: 12.1, fuelType: 'petrol', weight: 1900, seats: 4, cargo: 520, price: `~$${Math.round(248000 + (yr-2017)*5000).toLocaleString()}` })
  add('Panamera', String(yr), 'Turbo S E-Hybrid Sport Turismo', { engine: '4.0L V8 Biturbo + Electric', displacement: 3996, cylinders: 8, power: 500, torque: 870, transmission: '8sp PDK', drivetrain: 'AWD', acceleration: 3.2, topSpeed: 310, fc: 3.0, fh: 3.0, fx: 3.0, fuelType: 'hybrid', weight: 2385, seats: 4, cargo: 425, price: `~$${Math.round(395000 + (yr-2017)*5000).toLocaleString()}` })
}

// ─── 718 EXPANSION ────────────────────────────────────────────────────────
// GT4, Spyder, GT4 RS
for (const yr of [2019,2020,2021,2022,2023,2024,2025]) {
  add('718', String(yr), 'Cayman GT4', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 309, torque: 420, transmission: '6sp man / 7sp PDK', drivetrain: 'RWD', acceleration: 4.4, topSpeed: 304, fc: 11.7, fh: 8.4, fx: 15.2, fuelType: 'petrol', weight: 1435, seats: 2, price: `~$${Math.round(195000 + (yr-2019)*4000).toLocaleString()}` })
  add('718', String(yr), 'Boxster Spyder', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 309, torque: 420, transmission: '6sp man / 7sp PDK', drivetrain: 'RWD', acceleration: 4.4, topSpeed: 301, fc: 11.9, fh: 8.5, fx: 15.5, fuelType: 'petrol', weight: 1450, seats: 2, price: `~$${Math.round(200000 + (yr-2019)*4000).toLocaleString()}` })
  if (yr >= 2021) {
    add('718', String(yr), 'Cayman GTS 4.0', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 294, torque: 420, transmission: '6sp man / 7sp PDK', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 293, fc: 11.4, fh: 8.2, fx: 14.9, fuelType: 'petrol', weight: 1415, seats: 2, price: `~$${Math.round(172000 + (yr-2021)*4000).toLocaleString()}` })
    add('718', String(yr), 'Boxster GTS 4.0', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 294, torque: 420, transmission: '6sp man / 7sp PDK', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 291, fc: 11.6, fh: 8.3, fx: 15.1, fuelType: 'petrol', weight: 1430, seats: 2, price: `~$${Math.round(175000 + (yr-2021)*4000).toLocaleString()}` })
  }
  if (yr >= 2022) {
    add('718', String(yr), 'Cayman GT4 RS', { engine: '4.0L Flat-6 NA', displacement: 3996, cylinders: 6, power: 368, torque: 450, transmission: '7sp PDK', drivetrain: 'RWD', acceleration: 3.4, topSpeed: 315, fc: 12.8, fh: 8.7, fx: 17.2, fuelType: 'petrol', weight: 1415, seats: 2, price: `~$${Math.round(297000 + (yr-2022)*5000).toLocaleString()}` })
  }
}

const out = { specs }
fs.writeFileSync('src/data/supplement107.json', JSON.stringify(out, null, 2))
console.log('supplement107.json written —', Object.keys(specs).length, 'Porsche entries')
