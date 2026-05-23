// gen115.cjs — MG, Aston Martin, BYD, SsangYong, RAM, Polestar expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── MG ───────────────────────────────────────────────────────────────────────
// MG3 (2011-2026) — fill trims
const mg3_core = { engine: '1.5L VTi', displacement: 1498, cylinders: 4, power: 83, torque: 150, transmission: '5sp man / 4sp auto', drivetrain: 'FWD', acceleration: 12.0, topSpeed: 175, fc: 6.8, fh: 5.6, fx: 8.5, fuelType: 'petrol', weight: 1090, seats: 5 }
const mg3_hybrid = { engine: '1.5L + Electric', displacement: 1498, cylinders: 4, power: 135, torque: 250, transmission: 'e-CVT', drivetrain: 'FWD', acceleration: 8.5, topSpeed: 170, fc: 4.4, fh: 3.8, fx: 5.3, fuelType: 'hybrid', weight: 1360, seats: 5 }
for (const yr of [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]) {
  add('MG','MG3',String(yr),'Core', { ...mg3_core, price: `~$${Math.round(14990+(yr-2011)*400).toLocaleString()}` })
  add('MG','MG3',String(yr),'Excite', { ...mg3_core, price: `~$${Math.round(16990+(yr-2011)*400).toLocaleString()}` })
  add('MG','MG3',String(yr),'Essence', { ...mg3_core, price: `~$${Math.round(18990+(yr-2011)*400).toLocaleString()}` })
}
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('MG','MG3',String(yr),'Core', { ...mg3_core, price: `~$${Math.round(18990+(yr-2021)*500).toLocaleString()}` })
  add('MG','MG3',String(yr),'Excite', { ...mg3_core, price: `~$${Math.round(21990+(yr-2021)*500).toLocaleString()}` })
  if (yr >= 2024) add('MG','MG3',String(yr),'Hybrid+', { ...mg3_hybrid, price: `~$${Math.round(28990+(yr-2024)*500).toLocaleString()}` })
}

// ZS (2018-2026)
const zs_excite = { engine: '1.5L VTi', displacement: 1498, cylinders: 4, power: 82, torque: 150, transmission: '4sp auto', drivetrain: 'FWD', acceleration: 11.0, topSpeed: 170, fc: 7.0, fh: 5.8, fx: 8.8, fuelType: 'petrol', weight: 1267, seats: 5 }
const zs_essence = { ...zs_excite, price: '~$24,990' }
const zs_turbo = { engine: '1.3L Turbo', displacement: 1299, cylinders: 4, power: 100, torque: 230, transmission: '6sp DCT', drivetrain: 'FWD', acceleration: 8.8, topSpeed: 185, fc: 6.5, fh: 5.3, fx: 8.1, fuelType: 'petrol', weight: 1350, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('MG','ZS',String(yr),'Excite', { ...zs_excite, price: `~$${Math.round(21990+(yr-2018)*600).toLocaleString()}` })
  add('MG','ZS',String(yr),'Essence', { ...zs_excite, price: `~$${Math.round(24990+(yr-2018)*600).toLocaleString()}` })
  if (yr >= 2021) add('MG','ZS',String(yr),'Excite+ Turbo', { ...zs_turbo, price: `~$${Math.round(27990+(yr-2021)*600).toLocaleString()}` })
  if (yr >= 2021) add('MG','ZS',String(yr),'Essence Turbo', { ...zs_turbo, price: `~$${Math.round(31990+(yr-2021)*600).toLocaleString()}` })
}

// ZS EV (2021-2026)
const zsev_sr = { engine: 'Electric', displacement: null, cylinders: null, power: 105, torque: 280, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.5, topSpeed: 175, range: 320, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1562, seats: 5, battery: '44.5 kWh' }
const zsev_lr = { ...zsev_sr, power: 115, range: 440, battery: '72.6 kWh', weight: 1677, acceleration: 8.2 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('MG','ZS EV',String(yr),'Excite SR', { ...zsev_sr, price: `~$${Math.round(38990+(yr-2021)*1000).toLocaleString()}` })
  add('MG','ZS EV',String(yr),'Essence SR', { ...zsev_sr, price: `~$${Math.round(42990+(yr-2021)*1000).toLocaleString()}` })
  add('MG','ZS EV',String(yr),'Excite LR', { ...zsev_lr, price: `~$${Math.round(46990+(yr-2021)*1000).toLocaleString()}` })
  add('MG','ZS EV',String(yr),'Essence LR', { ...zsev_lr, price: `~$${Math.round(50990+(yr-2021)*1000).toLocaleString()}` })
}

// MG HS (2020-2026)
const hs_15t = { engine: '1.5L Turbo', displacement: 1498, cylinders: 4, power: 110, torque: 250, transmission: '6sp DCT', drivetrain: 'FWD', acceleration: 9.0, topSpeed: 185, fc: 7.0, fh: 5.8, fx: 8.7, fuelType: 'petrol', weight: 1520, seats: 5 }
const hs_20t = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 165, torque: 360, transmission: '6sp DCT', drivetrain: 'FWD', acceleration: 7.5, topSpeed: 195, fc: 7.8, fh: 6.4, fx: 9.7, fuelType: 'petrol', weight: 1600, seats: 5 }
const hs_phev = { engine: '1.5L Turbo PHEV', displacement: 1498, cylinders: 4, power: 162, torque: 370, transmission: 'e-CVT', drivetrain: 'FWD', acceleration: 6.9, topSpeed: 190, fc: 1.7, range: 60, fuelType: 'hybrid', weight: 1836, seats: 5 }
for (const yr of [2020,2021,2022,2023,2024,2025,2026]) {
  add('MG','MG HS',String(yr),'Excite', { ...hs_15t, price: `~$${Math.round(32990+(yr-2020)*800).toLocaleString()}` })
  add('MG','MG HS',String(yr),'Essence', { ...hs_20t, price: `~$${Math.round(37990+(yr-2020)*800).toLocaleString()}` })
  add('MG','MG HS',String(yr),'PHEV Essence', { ...hs_phev, price: `~$${Math.round(44990+(yr-2020)*800).toLocaleString()}` })
  if (yr >= 2022) add('MG','MG HS',String(yr),'PHEV Trophy', { ...hs_phev, price: `~$${Math.round(49990+(yr-2022)*800).toLocaleString()}` })
}

// MG4 (2023-2026)
const mg4_51 = { engine: 'Electric', displacement: null, cylinders: null, power: 125, torque: 250, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.7, topSpeed: 160, range: 350, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1715, seats: 5, battery: '51 kWh' }
const mg4_64 = { ...mg4_51, power: 150, torque: 250, range: 435, battery: '64 kWh', weight: 1775, acceleration: 7.9 }
const mg4_xpower = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 320, torque: 600, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 200, range: 385, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1950, seats: 5, battery: '64 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('MG','MG4',String(yr),'Excite 51', { ...mg4_51, price: `~$${Math.round(38990+(yr-2023)*1000).toLocaleString()}` })
  add('MG','MG4',String(yr),'Excite 64', { ...mg4_64, price: `~$${Math.round(42990+(yr-2023)*1000).toLocaleString()}` })
  add('MG','MG4',String(yr),'Essence 64', { ...mg4_64, price: `~$${Math.round(46990+(yr-2023)*1000).toLocaleString()}` })
  add('MG','MG4',String(yr),'X-Power', { ...mg4_xpower, price: `~$${Math.round(54990+(yr-2023)*1000).toLocaleString()}` })
}

// MG6 (2012-2018)
const mg6_std = { engine: '1.8L Turbo', displacement: 1798, cylinders: 4, power: 118, torque: 220, transmission: '6sp man / CVT', drivetrain: 'FWD', acceleration: 9.5, topSpeed: 195, fc: 7.5, fh: 6.0, fx: 9.5, fuelType: 'petrol', weight: 1385, seats: 5 }
for (const yr of [2012,2013,2014,2015,2016,2017,2018]) {
  add('MG','MG6',String(yr),'Standard', { ...mg6_std, price: `~$${Math.round(22990+(yr-2012)*500).toLocaleString()}` })
  add('MG','MG6',String(yr),'Magnette', { ...mg6_std, price: `~$${Math.round(26990+(yr-2012)*500).toLocaleString()}` })
  add('MG','MG6',String(yr),'GT 2.0 Turbo', { ...mg6_std, engine: '2.0L Turbo', displacement: 1998, power: 131, torque: 250, price: `~$${Math.round(29990+(yr-2012)*500).toLocaleString()}` })
}

// ─── ASTON MARTIN ─────────────────────────────────────────────────────────────
// DB11 fill trims (2016-2022)
const db11_v8 = { engine: '4.0L V8 Twin-Turbo', displacement: 3982, cylinders: 8, power: 375, torque: 675, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.0, topSpeed: 301, fc: 13.0, fh: 9.8, fx: 16.7, fuelType: 'petrol', weight: 1760, seats: 4 }
const db11_v12 = { engine: '5.2L V12 Twin-Turbo', displacement: 5204, cylinders: 12, power: 447, torque: 700, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.7, topSpeed: 322, fc: 15.0, fh: 11.5, fx: 19.5, fuelType: 'petrol', weight: 1875, seats: 4 }
const db11_amr = { ...db11_v12, power: 456, torque: 700, acceleration: 3.7, topSpeed: 334 }
for (const yr of [2016,2017,2018,2019,2020,2021,2022]) {
  add('Aston Martin','DB11',String(yr),'V8', { ...db11_v8, price: `~$${Math.round(289990+(yr-2016)*5000).toLocaleString()}` })
  add('Aston Martin','DB11',String(yr),'V8 Volante', { ...db11_v8, weight: 1820, price: `~$${Math.round(319990+(yr-2016)*5000).toLocaleString()}` })
  add('Aston Martin','DB11',String(yr),'V12', { ...db11_v12, price: `~$${Math.round(349990+(yr-2016)*5000).toLocaleString()}` })
  add('Aston Martin','DB11',String(yr),'AMR', { ...db11_amr, price: `~$${Math.round(389990+(yr-2016)*5000).toLocaleString()}` })
}

// DB12 (2023-2026)
const db12 = { engine: '4.0L V8 Twin-Turbo', displacement: 3982, cylinders: 8, power: 480, torque: 800, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.6, topSpeed: 325, fc: 13.5, fh: 10.5, fx: 17.5, fuelType: 'petrol', weight: 1750, seats: 4 }
for (const yr of [2023,2024,2025,2026]) {
  add('Aston Martin','DB12',String(yr),'Coupe', { ...db12, price: `~$${Math.round(399990+(yr-2023)*8000).toLocaleString()}` })
  add('Aston Martin','DB12',String(yr),'Volante', { ...db12, weight: 1810, price: `~$${Math.round(429990+(yr-2023)*8000).toLocaleString()}` })
}

// Vantage (2018-2026)
const vantage_v8 = { engine: '4.0L V8 Twin-Turbo', displacement: 3982, cylinders: 8, power: 375, torque: 685, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.7, topSpeed: 314, fc: 13.8, fh: 10.8, fx: 17.8, fuelType: 'petrol', weight: 1530, seats: 2 }
const vantage_f1 = { ...vantage_v8, power: 376, torque: 685, acceleration: 3.5 }
const vantage_v12 = { engine: '5.2L V12 Twin-Turbo', displacement: 5204, cylinders: 12, power: 618, torque: 900, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.5, topSpeed: 330, fc: 16.0, fh: 12.5, fx: 20.5, fuelType: 'petrol', weight: 1600, seats: 2 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Aston Martin','Vantage',String(yr),'V8 Roadster', { ...vantage_v8, price: `~$${Math.round(299990+(yr-2018)*5000).toLocaleString()}` })
  add('Aston Martin','Vantage',String(yr),'AMR', { ...vantage_v8, power: 375, torque: 685, price: `~$${Math.round(329990+(yr-2018)*5000).toLocaleString()}` })
  if (yr >= 2021) add('Aston Martin','Vantage',String(yr),'F1 Edition', { ...vantage_f1, price: `~$${Math.round(349990+(yr-2021)*5000).toLocaleString()}` })
  if (yr >= 2023) add('Aston Martin','Vantage',String(yr),'V12 Vantage', { ...vantage_v12, price: `~$${Math.round(499990+(yr-2023)*8000).toLocaleString()}` })
}

// DBX (2020-2026)
const dbx = { engine: '4.0L V8 Twin-Turbo', displacement: 3982, cylinders: 8, power: 404, torque: 700, transmission: '9sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 291, fc: 14.5, fh: 11.5, fx: 18.5, fuelType: 'petrol', weight: 2245, seats: 5 }
const dbx707 = { ...dbx, power: 520, torque: 900, acceleration: 3.3, topSpeed: 310, weight: 2270 }
for (const yr of [2020,2021,2022,2023,2024,2025,2026]) {
  add('Aston Martin','DBX',String(yr),'DBX', { ...dbx, price: `~$${Math.round(339990+(yr-2020)*5000).toLocaleString()}` })
  add('Aston Martin','DBX',String(yr),'DBX 707', { ...dbx707, price: `~$${Math.round(449990+(yr-2020)*5000).toLocaleString()}` })
}

// DBS Superleggera (2018-2022)
const dbs_sl = { engine: '5.2L V12 Twin-Turbo', displacement: 5204, cylinders: 12, power: 530, torque: 900, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.4, topSpeed: 340, fc: 16.5, fh: 13.0, fx: 21.5, fuelType: 'petrol', weight: 1693, seats: 4 }
for (const yr of [2018,2019,2020,2021,2022]) {
  add('Aston Martin','DBS Superleggera',String(yr),'Coupe', { ...dbs_sl, price: `~$${Math.round(459990+(yr-2018)*5000).toLocaleString()}` })
  add('Aston Martin','DBS Superleggera',String(yr),'Volante', { ...dbs_sl, weight: 1760, price: `~$${Math.round(489990+(yr-2018)*5000).toLocaleString()}` })
}

// ─── BYD expansion ────────────────────────────────────────────────────────────
// Han (2022-2026) — premium sedan
const han_rwd = { engine: 'Electric', displacement: null, cylinders: null, power: 180, torque: 350, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.9, topSpeed: 180, range: 506, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2185, seats: 5, battery: '85.4 kWh' }
const han_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 380, torque: 700, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.9, topSpeed: 180, range: 506, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2290, seats: 5, battery: '85.4 kWh' }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('BYD','Han',String(yr),'EV RWD', { ...han_rwd, price: `~$${Math.round(69990+(yr-2022)*1500).toLocaleString()}` })
  add('BYD','Han',String(yr),'EV AWD', { ...han_awd, price: `~$${Math.round(79990+(yr-2022)*1500).toLocaleString()}` })
}

// Tang (2023-2026) — 7-seat SUV
const tang = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 380, torque: 700, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.6, topSpeed: 180, range: 530, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2670, seats: 7, battery: '108.8 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('BYD','Tang',String(yr),'EV', { ...tang, price: `~$${Math.round(89990+(yr-2023)*1500).toLocaleString()}` })
  add('BYD','Tang',String(yr),'EV Premium', { ...tang, price: `~$${Math.round(99990+(yr-2023)*1500).toLocaleString()}` })
}

// Atto 2 (2025-2026) — small SUV
const atto2 = { engine: 'Electric', displacement: null, cylinders: null, power: 105, torque: 210, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 9.3, topSpeed: 150, range: 311, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1530, seats: 5, battery: '36.8 kWh' }
const atto2_er = { ...atto2, power: 130, range: 405, battery: '50.2 kWh', weight: 1580 }
for (const yr of [2025,2026]) {
  add('BYD','Atto 2',String(yr),'Standard Range', { ...atto2, price: `~$${Math.round(34990+(yr-2025)*1000).toLocaleString()}` })
  add('BYD','Atto 2',String(yr),'Extended Range', { ...atto2_er, price: `~$${Math.round(39990+(yr-2025)*1000).toLocaleString()}` })
}

// ─── SSANGYONG / KGM ──────────────────────────────────────────────────────────
// Musso (2018-2026) — ute
const musso = { engine: '2.2L Turbo Diesel', displacement: 2157, cylinders: 4, power: 131, torque: 400, transmission: '6sp auto', drivetrain: 'AWD', acceleration: 12.5, topSpeed: 185, fc: 8.2, fh: 7.0, fx: 10.0, fuelType: 'diesel', weight: 1980, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('SsangYong','Musso',String(yr),'ELX', { ...musso, price: `~$${Math.round(36990+(yr-2018)*1000).toLocaleString()}` })
  add('SsangYong','Musso',String(yr),'Ultimate', { ...musso, price: `~$${Math.round(44990+(yr-2018)*1000).toLocaleString()}` })
  add('SsangYong','Musso',String(yr),'Rhino', { ...musso, price: `~$${Math.round(49990+(yr-2018)*1000).toLocaleString()}` })
}

// Korando (2019-2024)
const korando = { engine: '1.5L Turbo', displacement: 1497, cylinders: 4, power: 120, torque: 280, transmission: '6sp auto', drivetrain: 'FWD', acceleration: 10.0, topSpeed: 185, fc: 7.2, fh: 5.9, fx: 9.0, fuelType: 'petrol', weight: 1540, seats: 5 }
const korando_e = { engine: 'Electric', displacement: null, cylinders: null, power: 140, torque: 360, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.5, topSpeed: 150, range: 339, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1745, seats: 5, battery: '61.5 kWh' }
for (const yr of [2019,2020,2021,2022,2023,2024]) {
  add('SsangYong','Korando',String(yr),'ELX', { ...korando, price: `~$${Math.round(31990+(yr-2019)*1000).toLocaleString()}` })
  add('SsangYong','Korando',String(yr),'Ultimate', { ...korando, price: `~$${Math.round(38990+(yr-2019)*1000).toLocaleString()}` })
  if (yr >= 2021) add('SsangYong','Korando',String(yr),'e-Motion', { ...korando_e, price: `~$${Math.round(44990+(yr-2021)*1000).toLocaleString()}` })
}

// Rexton (2018-2026) — large SUV
const rexton = { engine: '2.2L Turbo Diesel', displacement: 2157, cylinders: 4, power: 131, torque: 400, transmission: '7sp auto', drivetrain: 'AWD', acceleration: 12.0, topSpeed: 190, fc: 8.8, fh: 7.5, fx: 10.8, fuelType: 'diesel', weight: 2105, seats: 7 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('SsangYong','Rexton',String(yr),'ELX', { ...rexton, price: `~$${Math.round(48990+(yr-2018)*1000).toLocaleString()}` })
  add('SsangYong','Rexton',String(yr),'Ultimate', { ...rexton, price: `~$${Math.round(58990+(yr-2018)*1000).toLocaleString()}` })
}

// ─── POLESTAR expansion ───────────────────────────────────────────────────────
// Polestar 5 (2026) — GT sedan EV
add('Polestar','5','2026','Standard', { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 850, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 250, range: 600, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2400, seats: 5, battery: '100 kWh', price: '~$149,990' })
add('Polestar','5','2026','Performance', { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 500, torque: 1000, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.2, topSpeed: 250, range: 560, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2450, seats: 5, battery: '100 kWh', price: '~$179,990' })

// ─── RAM expansion ────────────────────────────────────────────────────────────
// 3500 (2020-2026)
const ram3500 = { engine: '6.7L Cummins Turbo Diesel HO', displacement: 6690, cylinders: 6, power: 313, torque: 1356, transmission: '6sp auto / Aisin 6sp', drivetrain: 'AWD', acceleration: 9.0, topSpeed: 160, fc: 13.0, fh: 11.0, fx: 15.5, fuelType: 'diesel', weight: 3765, seats: 5 }
for (const yr of [2020,2021,2022,2023,2024,2025,2026]) {
  add('RAM','3500',String(yr),'Laramie', { ...ram3500, price: `~$${Math.round(139990+(yr-2020)*3000).toLocaleString()}` })
  add('RAM','3500',String(yr),'Longhorn', { ...ram3500, price: `~$${Math.round(159990+(yr-2020)*3000).toLocaleString()}` })
  add('RAM','3500',String(yr),'Limited', { ...ram3500, price: `~$${Math.round(179990+(yr-2020)*3000).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement115.json', JSON.stringify(out, null, 2))
console.log('supplement115.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
