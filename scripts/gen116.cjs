// gen116.cjs — Hyundai, Kia, Mini expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── HYUNDAI ──────────────────────────────────────────────────────────────────
// i20 (2010-2026) — fill trims
const i20_active = { engine: '1.4L MPI', displacement: 1368, cylinders: 4, power: 74, torque: 132, transmission: '6sp man / 4sp auto', drivetrain: 'FWD', acceleration: 12.5, topSpeed: 165, fc: 6.3, fh: 5.1, fx: 7.9, fuelType: 'petrol', weight: 1025, seats: 5 }
const i20_n = { engine: '1.6L Turbo', displacement: 1598, cylinders: 4, power: 150, torque: 275, transmission: '6sp man / 7sp DCT', drivetrain: 'FWD', acceleration: 6.6, topSpeed: 230, fc: 7.3, fh: 5.8, fx: 9.2, fuelType: 'petrol', weight: 1167, seats: 5 }
for (const yr of [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]) {
  add('Hyundai','i20',String(yr),'Active', { ...i20_active, price: `~$${Math.round(16990+(yr-2010)*400).toLocaleString()}` })
  add('Hyundai','i20',String(yr),'Elite', { ...i20_active, price: `~$${Math.round(19490+(yr-2010)*400).toLocaleString()}` })
}
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','i20',String(yr),'Active', { ...i20_active, engine: '1.0L T-GDi', displacement: 998, cylinders: 3, power: 74, torque: 172, fc: 5.7, price: `~$${Math.round(22990+(yr-2021)*500).toLocaleString()}` })
  add('Hyundai','i20',String(yr),'Elite', { ...i20_active, engine: '1.0L T-GDi', displacement: 998, cylinders: 3, power: 74, torque: 172, fc: 5.7, price: `~$${Math.round(25990+(yr-2021)*500).toLocaleString()}` })
  add('Hyundai','i20',String(yr),'N Line', { ...i20_n, price: `~$${Math.round(30990+(yr-2021)*500).toLocaleString()}` })
}

// i30 N (2018-2026) — fill trims
const i30n_std = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 202, torque: 353, transmission: '6sp man / 8sp DCT', drivetrain: 'FWD', acceleration: 6.1, topSpeed: 250, fc: 8.5, fh: 6.8, fx: 10.8, fuelType: 'petrol', weight: 1408, seats: 5 }
const i30n_perf = { ...i30n_std, power: 213, torque: 392, acceleration: 5.9 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','i30 N',String(yr),'Standard', { ...i30n_std, price: `~$${Math.round(39990+(yr-2018)*1000).toLocaleString()}` })
  add('Hyundai','i30 N',String(yr),'Performance', { ...i30n_perf, price: `~$${Math.round(44990+(yr-2018)*1000).toLocaleString()}` })
  if (yr >= 2021) add('Hyundai','i30 N',String(yr),'Fastback', { ...i30n_std, price: `~$${Math.round(42990+(yr-2021)*1000).toLocaleString()}` })
}

// Ioniq 5 (2021-2026) — fill trims
const i5_sr_rwd = { engine: 'Electric', displacement: null, cylinders: null, power: 125, torque: 350, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 8.5, topSpeed: 185, range: 384, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1985, seats: 5, battery: '58 kWh' }
const i5_lr_rwd = { ...i5_sr_rwd, power: 160, torque: 350, acceleration: 7.4, range: 507, battery: '77.4 kWh', weight: 2100 }
const i5_lr_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 225, torque: 605, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.1, topSpeed: 185, range: 430, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2215, seats: 5, battery: '77.4 kWh' }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','Ioniq 5',String(yr),'Standard Range RWD', { ...i5_sr_rwd, price: `~$${Math.round(66990+(yr-2021)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 5',String(yr),'Long Range RWD', { ...i5_lr_rwd, price: `~$${Math.round(74990+(yr-2021)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 5',String(yr),'Long Range AWD', { ...i5_lr_awd, price: `~$${Math.round(82990+(yr-2021)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 5',String(yr),'Techniq AWD', { ...i5_lr_awd, price: `~$${Math.round(89990+(yr-2021)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 5',String(yr),'Epiq AWD', { ...i5_lr_awd, price: `~$${Math.round(96990+(yr-2021)*1500).toLocaleString()}` })
}

// Ioniq 5 N (2024-2026)
const i5n = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 478, torque: 770, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.4, topSpeed: 260, range: 448, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2280, seats: 5, battery: '84 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Hyundai','Ioniq 5 N',String(yr),'N', { ...i5n, price: `~$${Math.round(109990+(yr-2024)*2000).toLocaleString()}` })
}

// Ioniq 6 (2022-2026)
const i6_sr = { engine: 'Electric', displacement: null, cylinders: null, power: 111, torque: 350, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.4, topSpeed: 185, range: 429, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1985, seats: 5, battery: '53 kWh' }
const i6_lr_rwd = { ...i6_sr, power: 168, torque: 350, acceleration: 5.1, range: 614, battery: '77.4 kWh', weight: 2090 }
const i6_lr_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 239, torque: 605, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.1, topSpeed: 185, range: 519, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2195, seats: 5, battery: '77.4 kWh' }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Hyundai','Ioniq 6',String(yr),'Standard Range RWD', { ...i6_sr, price: `~$${Math.round(64990+(yr-2022)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 6',String(yr),'Long Range RWD', { ...i6_lr_rwd, price: `~$${Math.round(72990+(yr-2022)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 6',String(yr),'Long Range AWD', { ...i6_lr_awd, price: `~$${Math.round(80990+(yr-2022)*1500).toLocaleString()}` })
  add('Hyundai','Ioniq 6',String(yr),'Techniq AWD', { ...i6_lr_awd, price: `~$${Math.round(88990+(yr-2022)*1500).toLocaleString()}` })
}

// Kona (2017-2026) — fill trims
const kona_20 = { engine: '2.0L MPI', displacement: 1999, cylinders: 4, power: 110, torque: 179, transmission: '6sp auto', drivetrain: 'FWD', acceleration: 10.5, topSpeed: 185, fc: 8.0, fh: 6.5, fx: 10.0, fuelType: 'petrol', weight: 1290, seats: 5 }
const kona_16t = { engine: '1.6L T-GDi', displacement: 1591, cylinders: 4, power: 130, torque: 265, transmission: '7sp DCT', drivetrain: 'AWD', acceleration: 7.7, topSpeed: 195, fc: 7.4, fh: 6.0, fx: 9.4, fuelType: 'petrol', weight: 1440, seats: 5 }
const kona_ev = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 395, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.6, topSpeed: 167, range: 484, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1743, seats: 5, battery: '64 kWh' }
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','Kona',String(yr),'Active', { ...kona_20, price: `~$${Math.round(24990+(yr-2017)*800).toLocaleString()}` })
  add('Hyundai','Kona',String(yr),'Elite', { ...kona_20, price: `~$${Math.round(28990+(yr-2017)*800).toLocaleString()}` })
  add('Hyundai','Kona',String(yr),'Highlander 1.6 T-GDi', { ...kona_16t, price: `~$${Math.round(34990+(yr-2017)*800).toLocaleString()}` })
  if (yr >= 2019) add('Hyundai','Kona',String(yr),'Electric', { ...kona_ev, price: `~$${Math.round(49990+(yr-2019)*1000).toLocaleString()}` })
}

// Palisade (2019-2026) — fill trims
const pal_elite = { engine: '3.5L V6', displacement: 3470, cylinders: 6, power: 199, torque: 331, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 195, fc: 10.8, fh: 8.9, fx: 13.5, fuelType: 'petrol', weight: 2060, seats: 8 }
const pal_d = { engine: '2.2L Turbo Diesel', displacement: 2151, cylinders: 4, power: 148, torque: 440, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 9.5, topSpeed: 195, fc: 7.8, fh: 6.5, fx: 9.8, fuelType: 'diesel', weight: 2145, seats: 8 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','Palisade',String(yr),'Elite Petrol', { ...pal_elite, price: `~$${Math.round(57990+(yr-2019)*1500).toLocaleString()}` })
  add('Hyundai','Palisade',String(yr),'Highlander Petrol', { ...pal_elite, price: `~$${Math.round(65990+(yr-2019)*1500).toLocaleString()}` })
  add('Hyundai','Palisade',String(yr),'Elite Diesel', { ...pal_d, price: `~$${Math.round(61990+(yr-2019)*1500).toLocaleString()}` })
  add('Hyundai','Palisade',String(yr),'Highlander Diesel', { ...pal_d, price: `~$${Math.round(69990+(yr-2019)*1500).toLocaleString()}` })
}

// Staria (2021-2026) — fill trims
const staria = { engine: '2.2L Turbo Diesel', displacement: 2151, cylinders: 4, power: 130, torque: 430, transmission: '8sp auto', drivetrain: 'FWD', acceleration: 12.0, topSpeed: 180, fc: 8.5, fh: 7.2, fx: 10.5, fuelType: 'diesel', weight: 2235, seats: 9 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Hyundai','Staria',String(yr),'Load', { ...staria, seats: 3, price: `~$${Math.round(43990+(yr-2021)*1000).toLocaleString()}` })
  add('Hyundai','Staria',String(yr),'Elite', { ...staria, price: `~$${Math.round(54990+(yr-2021)*1000).toLocaleString()}` })
  add('Hyundai','Staria',String(yr),'Highlander', { ...staria, price: `~$${Math.round(62990+(yr-2021)*1000).toLocaleString()}` })
}

// ─── KIA ──────────────────────────────────────────────────────────────────────
// EV6 (2021-2026) — fill trims
const ev6_sr_rwd = { engine: 'Electric', displacement: null, cylinders: null, power: 125, torque: 350, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 8.5, topSpeed: 185, range: 394, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1960, seats: 5, battery: '58 kWh' }
const ev6_lr_rwd = { ...ev6_sr_rwd, power: 168, torque: 350, acceleration: 7.3, range: 528, battery: '77.4 kWh', weight: 2060 }
const ev6_lr_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 239, torque: 605, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.1, topSpeed: 185, range: 484, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2175, seats: 5, battery: '77.4 kWh' }
const ev6_gt = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 430, torque: 740, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.5, topSpeed: 260, range: 424, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2280, seats: 5, battery: '77.4 kWh' }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Kia','EV6',String(yr),'Air RWD', { ...ev6_sr_rwd, price: `~$${Math.round(64990+(yr-2021)*1500).toLocaleString()}` })
  add('Kia','EV6',String(yr),'GT-Line RWD', { ...ev6_lr_rwd, price: `~$${Math.round(74990+(yr-2021)*1500).toLocaleString()}` })
  add('Kia','EV6',String(yr),'GT-Line AWD', { ...ev6_lr_awd, price: `~$${Math.round(82990+(yr-2021)*1500).toLocaleString()}` })
  add('Kia','EV6',String(yr),'GT', { ...ev6_gt, price: `~$${Math.round(99990+(yr-2021)*1500).toLocaleString()}` })
}

// EV9 (2024-2026) — fill trims
const ev9_sr = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 350, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 9.4, topSpeed: 185, range: 443, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2585, seats: 7, battery: '76.1 kWh' }
const ev9_lr = { ...ev9_sr, power: 160, torque: 350, range: 563, battery: '99.8 kWh', weight: 2670, acceleration: 9.4 }
const ev9_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 283, torque: 700, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.3, topSpeed: 200, range: 505, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2795, seats: 7, battery: '99.8 kWh' }
const ev9_gt = { ...ev9_awd, power: 380, torque: 700, acceleration: 4.3, range: 473 }
for (const yr of [2024,2025,2026]) {
  add('Kia','EV9',String(yr),'Air RWD', { ...ev9_lr, price: `~$${Math.round(89990+(yr-2024)*2000).toLocaleString()}` })
  add('Kia','EV9',String(yr),'Earth AWD', { ...ev9_awd, price: `~$${Math.round(99990+(yr-2024)*2000).toLocaleString()}` })
  add('Kia','EV9',String(yr),'GT-Line AWD', { ...ev9_awd, price: `~$${Math.round(109990+(yr-2024)*2000).toLocaleString()}` })
  add('Kia','EV9',String(yr),'GT', { ...ev9_gt, price: `~$${Math.round(124990+(yr-2024)*2000).toLocaleString()}` })
}

// Telluride (2019-2026)
const tel = { engine: '3.8L V6', displacement: 3778, cylinders: 6, power: 213, torque: 355, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.5, topSpeed: 200, fc: 11.5, fh: 9.5, fx: 14.2, fuelType: 'petrol', weight: 2025, seats: 8 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Kia','Telluride',String(yr),'EX', { ...tel, price: `~$${Math.round(62990+(yr-2019)*1500).toLocaleString()}` })
  add('Kia','Telluride',String(yr),'SX', { ...tel, price: `~$${Math.round(72990+(yr-2019)*1500).toLocaleString()}` })
  add('Kia','Telluride',String(yr),'SX Prestige', { ...tel, price: `~$${Math.round(79990+(yr-2019)*1500).toLocaleString()}` })
}

// Stinger (2017-2023) — fill trims
const stinger_24t = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 184, torque: 353, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.8, topSpeed: 230, fc: 9.0, fh: 7.2, fx: 11.5, fuelType: 'petrol', weight: 1715, seats: 5 }
const stinger_33t = { engine: '3.3L V6 Twin-Turbo', displacement: 3342, cylinders: 6, power: 272, torque: 510, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 270, fc: 11.2, fh: 8.9, fx: 14.2, fuelType: 'petrol', weight: 1825, seats: 5 }
for (const yr of [2017,2018,2019,2020,2021,2022,2023]) {
  add('Kia','Stinger',String(yr),'GT-Line 2.0T', { ...stinger_24t, price: `~$${Math.round(49990+(yr-2017)*1200).toLocaleString()}` })
  add('Kia','Stinger',String(yr),'GT 3.3T', { ...stinger_33t, price: `~$${Math.round(64990+(yr-2017)*1200).toLocaleString()}` })
  add('Kia','Stinger',String(yr),'GT S 3.3T', { ...stinger_33t, price: `~$${Math.round(72990+(yr-2017)*1200).toLocaleString()}` })
}

// Niro (2017-2026) — fill trims
const niro_hybrid = { engine: '1.6L GDi + Electric', displacement: 1580, cylinders: 4, power: 104, torque: 265, transmission: '6sp DCT', drivetrain: 'FWD', acceleration: 11.1, topSpeed: 162, fc: 4.7, fh: 4.0, fx: 5.8, fuelType: 'hybrid', weight: 1425, seats: 5 }
const niro_phev = { ...niro_hybrid, power: 104, torque: 265, fc: 1.4, range: 58, fuelType: 'hybrid', weight: 1545 }
const niro_ev = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 255, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.8, topSpeed: 167, range: 460, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1737, seats: 5, battery: '64.8 kWh' }
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Kia','Niro',String(yr),'Hybrid S', { ...niro_hybrid, price: `~$${Math.round(30990+(yr-2017)*800).toLocaleString()}` })
  add('Kia','Niro',String(yr),'Hybrid Sport', { ...niro_hybrid, price: `~$${Math.round(35990+(yr-2017)*800).toLocaleString()}` })
  if (yr >= 2019) add('Kia','Niro',String(yr),'PHEV Sport', { ...niro_phev, price: `~$${Math.round(40990+(yr-2019)*800).toLocaleString()}` })
  if (yr >= 2019) add('Kia','Niro',String(yr),'EV', { ...niro_ev, price: `~$${Math.round(59990+(yr-2019)*1000).toLocaleString()}` })
}

// Soul (2019-2024) — fill trims
const soul_20 = { engine: '2.0L MPI', displacement: 1999, cylinders: 4, power: 110, torque: 180, transmission: '6sp auto', drivetrain: 'FWD', acceleration: 10.5, topSpeed: 185, fc: 8.2, fh: 6.7, fx: 10.3, fuelType: 'petrol', weight: 1368, seats: 5 }
const soul_ev = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 395, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.9, topSpeed: 167, range: 452, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1682, seats: 5, battery: '64 kWh' }
for (const yr of [2019,2020,2021,2022,2023,2024]) {
  add('Kia','Soul',String(yr),'S', { ...soul_20, price: `~$${Math.round(28990+(yr-2019)*800).toLocaleString()}` })
  add('Kia','Soul',String(yr),'Sport', { ...soul_20, price: `~$${Math.round(32990+(yr-2019)*800).toLocaleString()}` })
  add('Kia','Soul',String(yr),'EV', { ...soul_ev, price: `~$${Math.round(59990+(yr-2019)*1000).toLocaleString()}` })
}

// ─── MINI ─────────────────────────────────────────────────────────────────────
// Countryman (2017-2026) — fill trims
const cman_one = { engine: '1.5L TwinPower Turbo', displacement: 1499, cylinders: 3, power: 100, torque: 180, transmission: '7sp DCT', drivetrain: 'FWD', acceleration: 10.0, topSpeed: 190, fc: 6.0, fh: 4.9, fx: 7.6, fuelType: 'petrol', weight: 1395, seats: 5 }
const cman_s = { engine: '2.0L TwinPower Turbo', displacement: 1998, cylinders: 4, power: 141, torque: 280, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.2, topSpeed: 215, fc: 7.5, fh: 6.1, fx: 9.5, fuelType: 'petrol', weight: 1565, seats: 5 }
const cman_jcw = { ...cman_s, power: 180, torque: 360, acceleration: 6.1, topSpeed: 230 }
const cman_phev = { engine: '1.5L TwinPower + Electric', displacement: 1499, cylinders: 3, power: 165, torque: 385, transmission: '6sp auto', drivetrain: 'AWD', acceleration: 6.8, topSpeed: 200, fc: 2.1, range: 61, fuelType: 'hybrid', weight: 1830, seats: 5 }
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024]) {
  add('Mini','Countryman',String(yr),'One', { ...cman_one, price: `~$${Math.round(38990+(yr-2017)*1000).toLocaleString()}` })
  add('Mini','Countryman',String(yr),'Cooper S ALL4', { ...cman_s, price: `~$${Math.round(49990+(yr-2017)*1000).toLocaleString()}` })
  add('Mini','Countryman',String(yr),'JCW ALL4', { ...cman_jcw, price: `~$${Math.round(62990+(yr-2017)*1000).toLocaleString()}` })
  if (yr >= 2018) add('Mini','Countryman',String(yr),'Cooper SE ALL4 PHEV', { ...cman_phev, price: `~$${Math.round(54990+(yr-2018)*1000).toLocaleString()}` })
}
// New gen Countryman (2024-2026) — EV
for (const yr of [2024,2025,2026]) {
  add('Mini','Countryman',String(yr),'E', { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.6, topSpeed: 170, range: 462, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1980, seats: 5, battery: '64.7 kWh', price: `~$${Math.round(64990+(yr-2024)*1500).toLocaleString()}` })
  add('Mini','Countryman',String(yr),'SE ALL4', { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 230, torque: 494, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.6, topSpeed: 180, range: 433, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2130, seats: 5, battery: '64.7 kWh', price: `~$${Math.round(74990+(yr-2024)*1500).toLocaleString()}` })
}

// Electric (2020-2023) — fill trims
const mini_e = { engine: 'Electric', displacement: null, cylinders: null, power: 135, torque: 270, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.3, topSpeed: 150, range: 233, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1365, seats: 4, battery: '32.6 kWh' }
for (const yr of [2020,2021,2022,2023]) {
  add('Mini','Electric',String(yr),'Level 1', { ...mini_e, price: `~$${Math.round(48990+(yr-2020)*1000).toLocaleString()}` })
  add('Mini','Electric',String(yr),'Level 2', { ...mini_e, price: `~$${Math.round(52990+(yr-2020)*1000).toLocaleString()}` })
  add('Mini','Electric',String(yr),'Level 3', { ...mini_e, price: `~$${Math.round(58990+(yr-2020)*1000).toLocaleString()}` })
}

// Cooper Electric (2024-2026)
const cooper_e = { engine: 'Electric', displacement: null, cylinders: null, power: 135, torque: 290, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 6.7, topSpeed: 160, range: 305, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1440, seats: 4, battery: '40.7 kWh' }
const cooper_se = { ...cooper_e, power: 160, torque: 330, acceleration: 5.9, range: 402, battery: '54.2 kWh', weight: 1510 }
for (const yr of [2024,2025,2026]) {
  add('Mini','Hatch',String(yr),'Cooper E', { ...cooper_e, price: `~$${Math.round(49990+(yr-2024)*1500).toLocaleString()}` })
  add('Mini','Hatch',String(yr),'Cooper SE', { ...cooper_se, price: `~$${Math.round(57990+(yr-2024)*1500).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement116.json', JSON.stringify(out, null, 2))
console.log('supplement116.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
