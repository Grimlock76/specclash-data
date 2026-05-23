// gen114.cjs — Chery expansion, Zeekr (new), VinFast (new), Alpine, Lotus modern
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── CHERY ────────────────────────────────────────────────────────────────────
// Omoda 5 (2023-2026)
const omoda5_15t = { engine: '1.5L Turbo', displacement: 1497, cylinders: 4, power: 113, torque: 210, transmission: '7sp DCT', drivetrain: 'FWD', acceleration: 9.5, topSpeed: 185, fc: 6.8, fh: 5.6, fx: 8.5, fuelType: 'petrol', weight: 1465, seats: 5 }
const omoda5_20t = { ...omoda5_15t, engine: '2.0L Turbo', displacement: 1984, power: 145, torque: 290, drivetrain: 'AWD', acceleration: 7.8, fc: 8.2, weight: 1550 }
for (const yr of [2023,2024,2025,2026]) {
  add('Chery','Omoda 5',String(yr),'Base', { ...omoda5_15t, price: `~$${Math.round(28990+(yr-2023)*1000).toLocaleString()}` })
  add('Chery','Omoda 5',String(yr),'Premium', { ...omoda5_15t, price: `~$${Math.round(33990+(yr-2023)*1000).toLocaleString()}` })
  add('Chery','Omoda 5',String(yr),'AWD Premium', { ...omoda5_20t, price: `~$${Math.round(39990+(yr-2023)*1000).toLocaleString()}` })
  add('Chery','Omoda 5',String(yr),'GT AWD', { ...omoda5_20t, price: `~$${Math.round(44990+(yr-2023)*1000).toLocaleString()}` })
}

// Omoda 5 EV (2024-2026)
const omoda5_ev = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 340, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.8, topSpeed: 175, range: 450, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1735, seats: 5, battery: '61 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Chery','Omoda 5 EV',String(yr),'Premium', { ...omoda5_ev, price: `~$${Math.round(44990+(yr-2024)*1000).toLocaleString()}` })
  add('Chery','Omoda 5 EV',String(yr),'GT', { ...omoda5_ev, price: `~$${Math.round(49990+(yr-2024)*1000).toLocaleString()}` })
}

// Omoda 7 (2024-2026)
const omoda7 = { engine: '2.0L Turbo', displacement: 1984, cylinders: 4, power: 145, torque: 290, transmission: '7sp DCT', drivetrain: 'AWD', acceleration: 7.5, topSpeed: 190, fc: 8.0, fh: 6.5, fx: 10.0, fuelType: 'petrol', weight: 1650, seats: 5 }
for (const yr of [2024,2025,2026]) {
  add('Chery','Omoda 7',String(yr),'Premium', { ...omoda7, price: `~$${Math.round(44990+(yr-2024)*1500).toLocaleString()}` })
  add('Chery','Omoda 7',String(yr),'GT', { ...omoda7, price: `~$${Math.round(51990+(yr-2024)*1500).toLocaleString()}` })
}

// Tiggo 7 Pro (2022-2026)
const tiggo7 = { engine: '1.6L Turbo', displacement: 1598, cylinders: 4, power: 145, torque: 290, transmission: '7sp DCT', drivetrain: 'FWD', acceleration: 8.8, topSpeed: 185, fc: 7.2, fh: 5.9, fx: 9.0, fuelType: 'petrol', weight: 1550, seats: 5 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Chery','Tiggo 7 Pro',String(yr),'Base', { ...tiggo7, price: `~$${Math.round(29990+(yr-2022)*1000).toLocaleString()}` })
  add('Chery','Tiggo 7 Pro',String(yr),'Premium', { ...tiggo7, price: `~$${Math.round(35990+(yr-2022)*1000).toLocaleString()}` })
}

// Tiggo 8 Pro (2022-2026)
const tiggo8 = { engine: '2.0L Turbo', displacement: 1984, cylinders: 4, power: 185, torque: 390, transmission: '7sp DCT', drivetrain: 'AWD', acceleration: 7.5, topSpeed: 200, fc: 8.5, fh: 7.0, fx: 10.5, fuelType: 'petrol', weight: 1760, seats: 7 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Chery','Tiggo 8 Pro',String(yr),'Base', { ...tiggo8, price: `~$${Math.round(39990+(yr-2022)*1000).toLocaleString()}` })
  add('Chery','Tiggo 8 Pro',String(yr),'Premium', { ...tiggo8, price: `~$${Math.round(46990+(yr-2022)*1000).toLocaleString()}` })
  add('Chery','Tiggo 8 Pro',String(yr),'Max', { ...tiggo8, price: `~$${Math.round(52990+(yr-2022)*1000).toLocaleString()}` })
}

// ─── ZEEKR (new make) ─────────────────────────────────────────────────────────
// 001 (2024-2026) — shooting brake EV
const zeekr001 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 686, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 200, range: 590, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2220, seats: 5, battery: '100 kWh' }
const zeekr001_sr = { ...zeekr001, power: 200, torque: 343, drivetrain: 'RWD', acceleration: 6.2, range: 620, weight: 2090, battery: '75 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Zeekr','001',String(yr),'Single Motor RWD', { ...zeekr001_sr, price: `~$${Math.round(69990+(yr-2024)*2000).toLocaleString()}` })
  add('Zeekr','001',String(yr),'Dual Motor AWD', { ...zeekr001, price: `~$${Math.round(84990+(yr-2024)*2000).toLocaleString()}` })
  add('Zeekr','001',String(yr),'Performance AWD', { ...zeekr001, power: 544, torque: 810, acceleration: 3.2, range: 550, price: `~$${Math.round(94990+(yr-2024)*2000).toLocaleString()}` })
}

// 009 (2024-2026) — luxury MPV
const zeekr009 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 686, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 190, range: 702, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2855, seats: 6, battery: '140 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Zeekr','009',String(yr),'Standard', { ...zeekr009, range: 620, battery: '116 kWh', price: `~$${Math.round(119990+(yr-2024)*2000).toLocaleString()}` })
  add('Zeekr','009',String(yr),'Premium', { ...zeekr009, price: `~$${Math.round(139990+(yr-2024)*2000).toLocaleString()}` })
}

// X (2024-2026) — compact SUV
const zeekrX = { engine: 'Electric', displacement: null, cylinders: null, power: 200, torque: 343, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 5.9, topSpeed: 180, range: 440, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1820, seats: 5, battery: '66 kWh' }
const zeekrX_awd = { ...zeekrX, power: 315, torque: 440, drivetrain: 'AWD', acceleration: 3.7, range: 418, weight: 1980, battery: '66 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Zeekr','X',String(yr),'RWD', { ...zeekrX, price: `~$${Math.round(54990+(yr-2024)*1500).toLocaleString()}` })
  add('Zeekr','X',String(yr),'AWD Performance', { ...zeekrX_awd, price: `~$${Math.round(64990+(yr-2024)*1500).toLocaleString()}` })
}

// ─── VinFast (new make) ───────────────────────────────────────────────────────
// VF 6 (2024-2026) — compact SUV
const vf6_eco = { engine: 'Electric', displacement: null, cylinders: null, power: 130, torque: 260, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 9.0, topSpeed: 175, range: 381, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1710, seats: 5, battery: '59.6 kWh' }
const vf6_plus = { ...vf6_eco, power: 175, torque: 310, acceleration: 7.3, range: 399 }
for (const yr of [2024,2025,2026]) {
  add('VinFast','VF 6',String(yr),'Eco', { ...vf6_eco, price: `~$${Math.round(39990+(yr-2024)*1000).toLocaleString()}` })
  add('VinFast','VF 6',String(yr),'Plus', { ...vf6_plus, price: `~$${Math.round(44990+(yr-2024)*1000).toLocaleString()}` })
}

// VF 8 (2023-2026) — midsize SUV
const vf8_eco = { engine: 'Electric', displacement: null, cylinders: null, power: 175, torque: 375, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 8.9, topSpeed: 176, range: 450, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2095, seats: 5, battery: '82.7 kWh' }
const vf8_plus = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 620, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.9, topSpeed: 200, range: 400, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2160, seats: 5, battery: '82.7 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('VinFast','VF 8',String(yr),'Eco', { ...vf8_eco, price: `~$${Math.round(56990+(yr-2023)*1000).toLocaleString()}` })
  add('VinFast','VF 8',String(yr),'Plus', { ...vf8_plus, price: `~$${Math.round(63990+(yr-2023)*1000).toLocaleString()}` })
}

// VF 9 (2024-2026) — large SUV 7-seat
const vf9 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 620, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 6.5, topSpeed: 200, range: 594, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2630, seats: 7, battery: '123 kWh' }
for (const yr of [2024,2025,2026]) {
  add('VinFast','VF 9',String(yr),'Eco', { ...vf9, range: 524, price: `~$${Math.round(79990+(yr-2024)*1500).toLocaleString()}` })
  add('VinFast','VF 9',String(yr),'Plus', { ...vf9, price: `~$${Math.round(89990+(yr-2024)*1500).toLocaleString()}` })
}

// ─── ALPINE ───────────────────────────────────────────────────────────────────
// A110 (2018-2026)
const a110_pure = { engine: '1.8L Turbo', displacement: 1798, cylinders: 4, power: 185, torque: 320, transmission: '7sp DCT', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 250, fc: 6.4, fh: 5.2, fx: 8.1, fuelType: 'petrol', weight: 1103, seats: 2 }
const a110_s = { ...a110_pure, power: 221, torque: 400, acceleration: 3.9, topSpeed: 260 }
const a110_r = { ...a110_s, power: 221, torque: 400, acceleration: 3.9, weight: 1082 }
const a110_gt = { ...a110_pure, power: 185, torque: 320, weight: 1120, acceleration: 4.5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Alpine','A110',String(yr),'Pure', { ...a110_pure, price: `~$${Math.round(89990+(yr-2018)*2000).toLocaleString()}` })
  add('Alpine','A110',String(yr),'Légende', { ...a110_pure, price: `~$${Math.round(99990+(yr-2018)*2000).toLocaleString()}` })
  add('Alpine','A110',String(yr),'S', { ...a110_s, price: `~$${Math.round(109990+(yr-2018)*2000).toLocaleString()}` })
  if (yr >= 2022) add('Alpine','A110',String(yr),'R', { ...a110_r, price: `~$${Math.round(129990+(yr-2022)*2000).toLocaleString()}` })
  if (yr >= 2022) add('Alpine','A110',String(yr),'GT', { ...a110_gt, price: `~$${Math.round(104990+(yr-2022)*2000).toLocaleString()}` })
}

// A310 (1971-1984) — classic
const a310_v6 = { engine: '2.7L V6', displacement: 2664, cylinders: 6, power: 103, torque: 210, transmission: '5sp man', drivetrain: 'RWD', acceleration: 7.0, topSpeed: 215, fc: 11.5, fh: 8.5, fx: 14.5, fuelType: 'petrol', weight: 970, seats: 4 }
for (const yr of [1977,1978,1979,1980,1981,1982,1983,1984]) {
  add('Alpine','A310',String(yr),'V6', { ...a310_v6, price: `~$${Math.round(35000+(yr-1977)*500).toLocaleString()}` })
}

// A610 (1991-1995)
const a610 = { engine: '3.0L V6 Turbo', displacement: 2975, cylinders: 6, power: 176, torque: 350, transmission: '5sp man', drivetrain: 'RWD', acceleration: 5.7, topSpeed: 270, fc: 13.0, fh: 9.5, fx: 16.5, fuelType: 'petrol', weight: 1280, seats: 4 }
for (const yr of [1991,1992,1993,1994,1995]) {
  add('Alpine','A610',String(yr),'Turbo', { ...a610, price: `~$${Math.round(89990+(yr-1991)*3000).toLocaleString()}` })
}

// A523 / GTA (2026+)
add('Alpine','A290',String('2025'),'EV', { engine: 'Electric', displacement: null, cylinders: null, power: 220, torque: 300, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 6.4, topSpeed: 200, range: 380, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1480, seats: 4, battery: '52 kWh', price: '~$69,990' })
add('Alpine','A290',String('2026'),'EV', { engine: 'Electric', displacement: null, cylinders: null, power: 220, torque: 300, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 6.4, topSpeed: 200, range: 380, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1480, seats: 4, battery: '52 kWh', price: '~$71,990' })
add('Alpine','A290',String('2025'),'GT EV', { engine: 'Electric', displacement: null, cylinders: null, power: 220, torque: 300, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 5.9, topSpeed: 210, range: 380, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1480, seats: 4, battery: '52 kWh', price: '~$79,990' })
add('Alpine','A290',String('2026'),'GT EV', { engine: 'Electric', displacement: null, cylinders: null, power: 220, torque: 300, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 5.9, topSpeed: 210, range: 380, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1480, seats: 4, battery: '52 kWh', price: '~$81,990' })

// ─── LOTUS ────────────────────────────────────────────────────────────────────
// Emira (2022-2026) — last petrol Lotus
const emira_v6 = { engine: '3.5L V6 Supercharged', displacement: 3456, cylinders: 6, power: 298, torque: 420, transmission: '6sp man / 6sp auto', drivetrain: 'RWD', acceleration: 4.3, topSpeed: 290, fc: 12.0, fh: 9.0, fx: 15.5, fuelType: 'petrol', weight: 1405, seats: 2 }
const emira_20 = { engine: '2.0L AMG Turbo', displacement: 1991, cylinders: 4, power: 265, torque: 430, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.4, topSpeed: 290, fc: 8.5, fh: 6.8, fx: 10.8, fuelType: 'petrol', weight: 1395, seats: 2 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Lotus','Emira',String(yr),'V6 First Edition', { ...emira_v6, price: `~$${Math.round(139990+(yr-2022)*3000).toLocaleString()}` })
  add('Lotus','Emira',String(yr),'V6 Sport', { ...emira_v6, price: `~$${Math.round(124990+(yr-2022)*3000).toLocaleString()}` })
  add('Lotus','Emira',String(yr),'i4 AMG', { ...emira_20, price: `~$${Math.round(114990+(yr-2022)*3000).toLocaleString()}` })
}

// Eletre (2023-2026) — electric SUV
const eletre_s = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 450, torque: 710, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 258, range: 600, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2477, seats: 5, battery: '112 kWh' }
const eletre_r = { ...eletre_s, power: 675, torque: 985, acceleration: 2.95, range: 490, topSpeed: 265 }
for (const yr of [2023,2024,2025,2026]) {
  add('Lotus','Eletre',String(yr),'Standard', { ...eletre_s, price: `~$${Math.round(189990+(yr-2023)*5000).toLocaleString()}` })
  add('Lotus','Eletre',String(yr),'S', { ...eletre_s, price: `~$${Math.round(219990+(yr-2023)*5000).toLocaleString()}` })
  add('Lotus','Eletre',String(yr),'R', { ...eletre_r, price: `~$${Math.round(289990+(yr-2023)*5000).toLocaleString()}` })
}

// Emeya (2024-2026) — electric sedan
const emeya_r = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 675, torque: 985, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 2.78, topSpeed: 256, range: 490, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2585, seats: 5, battery: '102 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Lotus','Emeya',String(yr),'R', { ...emeya_r, price: `~$${Math.round(249990+(yr-2024)*5000).toLocaleString()}` })
  add('Lotus','Emeya',String(yr),'S', { ...emeya_r, power: 450, torque: 710, acceleration: 4.2, range: 610, price: `~$${Math.round(189990+(yr-2024)*5000).toLocaleString()}` })
}

// Exige (classic) — add more years
const exige_s = { engine: '1.8L Supercharged', displacement: 1796, cylinders: 4, power: 162, torque: 177, transmission: '6sp man', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 250, fc: 8.5, fh: 6.5, fx: 11.0, fuelType: 'petrol', weight: 901, seats: 2 }
const exige_v6 = { engine: '3.5L V6 Supercharged', displacement: 3456, cylinders: 6, power: 257, torque: 335, transmission: '6sp man', drivetrain: 'RWD', acceleration: 3.8, topSpeed: 274, fc: 12.0, fh: 9.0, fx: 15.0, fuelType: 'petrol', weight: 1001, seats: 2 }
for (const yr of [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]) {
  add('Lotus','Exige',String(yr),'S Roadster', { ...exige_s, price: `~$${Math.round(89990+(yr-2007)*2000).toLocaleString()}` })
}
for (const yr of [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]) {
  add('Lotus','Exige',String(yr),'V6 Cup', { ...exige_v6, price: `~$${Math.round(109990+(yr-2012)*2000).toLocaleString()}` })
  add('Lotus','Exige',String(yr),'V6 Sport', { ...exige_v6, power: 220, torque: 295, acceleration: 4.2, price: `~$${Math.round(99990+(yr-2012)*2000).toLocaleString()}` })
}

// ─── DACIA ────────────────────────────────────────────────────────────────────
// Duster (2018-2026) — popular budget SUV
const duster_tce = { engine: '1.3L TCe 130', displacement: 1333, cylinders: 4, power: 96, torque: 240, transmission: '6sp man / CVT', drivetrain: 'FWD', acceleration: 10.0, topSpeed: 190, fc: 6.5, fh: 5.2, fx: 8.3, fuelType: 'petrol', weight: 1210, seats: 5 }
const duster_4wd = { ...duster_tce, drivetrain: 'AWD', weight: 1310, acceleration: 10.5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Dacia','Duster',String(yr),'Essential TCe 130', { ...duster_tce, price: `~$${Math.round(22990+(yr-2018)*800).toLocaleString()}` })
  add('Dacia','Duster',String(yr),'Comfort TCe 130 4WD', { ...duster_4wd, price: `~$${Math.round(28990+(yr-2018)*800).toLocaleString()}` })
  add('Dacia','Duster',String(yr),'Prestige TCe 130', { ...duster_tce, price: `~$${Math.round(31990+(yr-2018)*800).toLocaleString()}` })
}

// Sandero / Sandero Stepway (2013-2024)
const sandero_tce = { engine: '1.0L TCe 90', displacement: 999, cylinders: 3, power: 67, torque: 160, transmission: '5sp man / CVT', drivetrain: 'FWD', acceleration: 12.5, topSpeed: 170, fc: 5.5, fh: 4.5, fx: 7.0, fuelType: 'petrol', weight: 1055, seats: 5 }
for (const yr of [2013,2014,2015,2016,2017,2018,2019,2020]) {
  add('Dacia','Sandero',String(yr),'SCe 75', { ...sandero_tce, engine: '0.9L TCe 75', power: 55, torque: 135, acceleration: 14.0, price: `~$${Math.round(14990+(yr-2013)*500).toLocaleString()}` })
  add('Dacia','Sandero',String(yr),'Stepway TCe 90 4WD', { ...sandero_tce, drivetrain: 'AWD', weight: 1120, price: `~$${Math.round(18990+(yr-2013)*500).toLocaleString()}` })
}
for (const yr of [2021,2022,2023,2024]) {
  add('Dacia','Sandero',String(yr),'TCe 90', { ...sandero_tce, price: `~$${Math.round(16990+(yr-2021)*500).toLocaleString()}` })
  add('Dacia','Sandero',String(yr),'Stepway TCe 90', { ...sandero_tce, price: `~$${Math.round(20990+(yr-2021)*500).toLocaleString()}` })
}

// Spring Electric (2021-2026)
const spring_ev = { engine: 'Electric', displacement: null, cylinders: null, power: 33, torque: 125, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 19.1, topSpeed: 125, range: 230, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 970, seats: 4, battery: '26.8 kWh' }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Dacia','Spring',String(yr),'Essential', { ...spring_ev, price: `~$${Math.round(21990+(yr-2021)*500).toLocaleString()}` })
  add('Dacia','Spring',String(yr),'Comfort Plus', { ...spring_ev, price: `~$${Math.round(25990+(yr-2021)*500).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement114.json', JSON.stringify(out, null, 2))
console.log('supplement114.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
