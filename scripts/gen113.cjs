// gen113.cjs — Volvo, Infiniti, Dodge, Maserati, Jeep expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── VOLVO ────────────────────────────────────────────────────────────────────
// XC40 (2018-2026)
const xc40_t4 = { engine: '2.0L Turbo T4', displacement: 1969, cylinders: 4, power: 140, torque: 300, transmission: '8sp auto', drivetrain: 'FWD', acceleration: 8.5, topSpeed: 200, fc: 7.9, fh: 6.4, fx: 9.9, fuelType: 'petrol', weight: 1580, seats: 5 }
const xc40_t5 = { ...xc40_t4, engine: '2.0L Turbo T5', power: 187, torque: 350, acceleration: 6.5, topSpeed: 220, fc: 8.3, drivetrain: 'AWD', weight: 1648 }
const xc40_recharge = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 660, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 180, range: 418, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2040, seats: 5, battery: '78 kWh' }
const xc40_phev = { engine: '1.5L Turbo PHEV', displacement: 1477, cylinders: 3, power: 183, torque: 330, transmission: '7sp DCT', drivetrain: 'FWD', acceleration: 7.4, topSpeed: 195, fc: 1.7, range: 55, fuelType: 'hybrid', weight: 1868, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Volvo','XC40',String(yr),'T4 Momentum', { ...xc40_t4, price: `~$${Math.round(48990+(yr-2018)*1500).toLocaleString()}` })
  add('Volvo','XC40',String(yr),'T5 AWD R-Design', { ...xc40_t5, price: `~$${Math.round(61990+(yr-2018)*1500).toLocaleString()}` })
  add('Volvo','XC40',String(yr),'T5 AWD Inscription', { ...xc40_t5, price: `~$${Math.round(67990+(yr-2018)*1500).toLocaleString()}` })
  if (yr >= 2022) add('Volvo','XC40',String(yr),'Recharge Pure Electric', { ...xc40_recharge, price: `~$${Math.round(79990+(yr-2022)*2000).toLocaleString()}` })
  if (yr >= 2020) add('Volvo','XC40',String(yr),'Recharge T5 PHEV', { ...xc40_phev, price: `~$${Math.round(64990+(yr-2020)*1500).toLocaleString()}` })
}

// XC60 (2017-2026) — popular
const xc60_t5 = { engine: '2.0L Turbo T5', displacement: 1969, cylinders: 4, power: 187, torque: 350, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.2, topSpeed: 220, fc: 9.1, fh: 7.2, fx: 11.5, fuelType: 'petrol', weight: 1878, seats: 5 }
const xc60_t6 = { ...xc60_t5, engine: '2.0L TwinEngine T6', power: 228, torque: 480, acceleration: 6.3, fc: 9.8, drivetrain: 'AWD' }
const xc60_b5 = { ...xc60_t5, engine: '2.0L B5 Mild Hybrid', power: 183, torque: 350, fc: 8.3 }
const xc60_t8 = { engine: '2.0L TwinEngine T8 PHEV', displacement: 1969, cylinders: 4, power: 335, torque: 709, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 230, fc: 2.1, range: 59, fuelType: 'hybrid', weight: 2120, seats: 5 }
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Volvo','XC60',String(yr),'T5 Momentum', { ...xc60_t5, price: `~$${Math.round(69990+(yr-2017)*1500).toLocaleString()}` })
  add('Volvo','XC60',String(yr),'T5 R-Design', { ...xc60_t5, price: `~$${Math.round(76990+(yr-2017)*1500).toLocaleString()}` })
  add('Volvo','XC60',String(yr),'T5 Inscription', { ...xc60_t5, price: `~$${Math.round(79990+(yr-2017)*1500).toLocaleString()}` })
  add('Volvo','XC60',String(yr),'T8 Twin Engine AWD', { ...xc60_t8, price: `~$${Math.round(99990+(yr-2017)*1500).toLocaleString()}` })
  if (yr >= 2021) add('Volvo','XC60',String(yr),'B5 AWD', { ...xc60_b5, price: `~$${Math.round(74990+(yr-2021)*1500).toLocaleString()}` })
  if (yr >= 2021) add('Volvo','XC60',String(yr),'T8 Recharge', { ...xc60_t8, range: 65, price: `~$${Math.round(109990+(yr-2021)*1500).toLocaleString()}` })
}

// XC90 (2015-2026)
const xc90_t5 = { engine: '2.0L Turbo T5', displacement: 1969, cylinders: 4, power: 187, torque: 350, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 210, fc: 9.7, fh: 7.8, fx: 12.2, fuelType: 'petrol', weight: 2037, seats: 7 }
const xc90_t8 = { engine: '2.0L TwinEngine T8 PHEV', displacement: 1969, cylinders: 4, power: 335, torque: 709, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.6, topSpeed: 230, fc: 2.5, range: 49, fuelType: 'hybrid', weight: 2310, seats: 7 }
for (const yr of [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Volvo','XC90',String(yr),'T5 Momentum', { ...xc90_t5, price: `~$${Math.round(82990+(yr-2015)*1500).toLocaleString()}` })
  add('Volvo','XC90',String(yr),'T6 Inscription', { ...xc90_t5, engine: '2.0L TwinEngine T6', power: 228, torque: 480, acceleration: 7.0, price: `~$${Math.round(95990+(yr-2015)*1500).toLocaleString()}` })
  add('Volvo','XC90',String(yr),'T8 Twin Engine Excellence', { ...xc90_t8, price: `~$${Math.round(129990+(yr-2015)*2000).toLocaleString()}` })
  if (yr >= 2022) add('Volvo','XC90',String(yr),'Recharge T8', { ...xc90_t8, range: 57, price: `~$${Math.round(139990+(yr-2022)*2000).toLocaleString()}` })
}

// S60 (2018-2026)
const s60_t5 = { engine: '2.0L Turbo T5', displacement: 1969, cylinders: 4, power: 187, torque: 350, transmission: '8sp auto', drivetrain: 'FWD', acceleration: 6.5, topSpeed: 230, fc: 7.8, fh: 6.2, fx: 9.9, fuelType: 'petrol', weight: 1665, seats: 5 }
const s60_t8 = { engine: '2.0L PHEV T8', displacement: 1969, cylinders: 4, power: 335, torque: 709, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.4, topSpeed: 250, fc: 1.9, range: 57, fuelType: 'hybrid', weight: 1960, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Volvo','S60',String(yr),'T5 Momentum', { ...s60_t5, price: `~$${Math.round(62990+(yr-2018)*1500).toLocaleString()}` })
  add('Volvo','S60',String(yr),'T5 R-Design', { ...s60_t5, price: `~$${Math.round(69990+(yr-2018)*1500).toLocaleString()}` })
  add('Volvo','S60',String(yr),'T8 Recharge', { ...s60_t8, price: `~$${Math.round(94990+(yr-2018)*1500).toLocaleString()}` })
}

// ─── INFINITI ─────────────────────────────────────────────────────────────────
// Q50 (2014-2024)
const q50_20t = { engine: '2.0L Turbo', displacement: 1991, cylinders: 4, power: 155, torque: 350, transmission: '7sp auto', drivetrain: 'RWD', acceleration: 6.9, topSpeed: 230, fc: 8.2, fh: 6.5, fx: 10.5, fuelType: 'petrol', weight: 1635, seats: 5 }
const q50_30t = { engine: '3.0L V6 Twin-Turbo', displacement: 2997, cylinders: 6, power: 224, torque: 400, transmission: '7sp auto', drivetrain: 'AWD', acceleration: 5.3, topSpeed: 250, fc: 10.2, fh: 8.0, fx: 13.0, fuelType: 'petrol', weight: 1750, seats: 5 }
const q50_red = { ...q50_30t, power: 298, torque: 475, acceleration: 4.5, topSpeed: 270 }
for (const yr of [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]) {
  add('Infiniti','Q50',String(yr),'2.0t Luxe', { ...q50_20t, price: `~$${Math.round(57990+(yr-2014)*1000).toLocaleString()}` })
  add('Infiniti','Q50',String(yr),'3.0t GT', { ...q50_30t, price: `~$${Math.round(67990+(yr-2014)*1000).toLocaleString()}` })
  add('Infiniti','Q50',String(yr),'3.0t Sport', { ...q50_30t, price: `~$${Math.round(74990+(yr-2014)*1000).toLocaleString()}` })
  add('Infiniti','Q50',String(yr),'Red Sport 400', { ...q50_red, price: `~$${Math.round(89990+(yr-2014)*1000).toLocaleString()}` })
}

// QX50 (2019-2026)
const qx50_vc = { engine: '2.0L VC-Turbo', displacement: 1997, cylinders: 4, power: 200, torque: 380, transmission: 'CVT', drivetrain: 'AWD', acceleration: 7.3, topSpeed: 210, fc: 8.3, fh: 6.7, fx: 10.5, fuelType: 'petrol', weight: 1815, seats: 5 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Infiniti','QX50',String(yr),'Luxe', { ...qx50_vc, price: `~$${Math.round(64990+(yr-2019)*1500).toLocaleString()}` })
  add('Infiniti','QX50',String(yr),'Sport', { ...qx50_vc, price: `~$${Math.round(72990+(yr-2019)*1500).toLocaleString()}` })
  add('Infiniti','QX50',String(yr),'Sensory', { ...qx50_vc, price: `~$${Math.round(79990+(yr-2019)*1500).toLocaleString()}` })
}

// QX80 (2014-2026)
const qx80 = { engine: '5.6L V8', displacement: 5552, cylinders: 8, power: 298, torque: 560, transmission: '7sp auto', drivetrain: 'AWD', acceleration: 7.0, topSpeed: 210, fc: 14.8, fh: 11.5, fx: 18.5, fuelType: 'petrol', weight: 2638, seats: 7 }
for (const yr of [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Infiniti','QX80',String(yr),'Luxe', { ...qx80, price: `~$${Math.round(112990+(yr-2014)*2000).toLocaleString()}` })
  add('Infiniti','QX80',String(yr),'Premium Select', { ...qx80, price: `~$${Math.round(129990+(yr-2014)*2000).toLocaleString()}` })
}

// ─── DODGE ────────────────────────────────────────────────────────────────────
// Challenger (2008-2023) — AU grey imports
const chall_392 = { engine: '6.4L HEMI V8', displacement: 6424, cylinders: 8, power: 376, torque: 644, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 280, fc: 14.0, fh: 10.5, fx: 17.8, fuelType: 'petrol', weight: 1921, seats: 5 }
const chall_hellcat = { engine: '6.2L Supercharged HEMI V8', displacement: 6166, cylinders: 8, power: 527, torque: 880, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.6, topSpeed: 327, fc: 16.8, fh: 12.5, fx: 21.5, fuelType: 'petrol', weight: 2019, seats: 5 }
const chall_demon = { ...chall_hellcat, power: 770, torque: 1044, acceleration: 2.3, topSpeed: 326, weight: 1982, seats: 2 }
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]) {
  add('Dodge','Challenger',String(yr),'R/T Scat Pack 392', { ...chall_392, price: `~$${Math.round(79990+(yr-2008)*2000).toLocaleString()}` })
  if (yr >= 2015) add('Dodge','Challenger',String(yr),'SRT Hellcat', { ...chall_hellcat, price: `~$${Math.round(119990+(yr-2015)*2000).toLocaleString()}` })
  if (yr >= 2018) add('Dodge','Challenger',String(yr),'SRT Demon', { ...chall_demon, price: `~$${Math.round(169990+(yr-2018)*2000).toLocaleString()}` })
  if (yr >= 2019) add('Dodge','Challenger',String(yr),'SRT Hellcat Redeye', { ...chall_hellcat, power: 631, torque: 881, acceleration: 3.4, price: `~$${Math.round(149990+(yr-2019)*2000).toLocaleString()}` })
}

// Charger (2011-2023)
const charg_scat = { engine: '6.4L HEMI V8', displacement: 6424, cylinders: 8, power: 376, torque: 644, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.5, topSpeed: 280, fc: 14.2, fh: 10.8, fx: 18.0, fuelType: 'petrol', weight: 2002, seats: 5 }
const charg_hellcat = { engine: '6.2L Supercharged HEMI V8', displacement: 6166, cylinders: 8, power: 527, torque: 880, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.6, topSpeed: 327, fc: 17.0, fh: 12.8, fx: 21.8, fuelType: 'petrol', weight: 2107, seats: 5 }
for (const yr of [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]) {
  add('Dodge','Charger',String(yr),'R/T Scat Pack 392', { ...charg_scat, price: `~$${Math.round(74990+(yr-2011)*2000).toLocaleString()}` })
  if (yr >= 2015) add('Dodge','Charger',String(yr),'SRT Hellcat', { ...charg_hellcat, price: `~$${Math.round(109990+(yr-2015)*2000).toLocaleString()}` })
  if (yr >= 2019) add('Dodge','Charger',String(yr),'SRT Hellcat Redeye', { ...charg_hellcat, power: 631, torque: 881, acceleration: 3.5, price: `~$${Math.round(139990+(yr-2019)*2000).toLocaleString()}` })
}

// ─── MASERATI ─────────────────────────────────────────────────────────────────
// Ghibli (2013-2023)
const ghib_s = { engine: '3.0L V6 Twin-Turbo', displacement: 2979, cylinders: 6, power: 257, torque: 500, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.5, topSpeed: 267, fc: 11.5, fh: 8.5, fx: 15.0, fuelType: 'petrol', weight: 1840, seats: 5 }
const ghib_sq4 = { ...ghib_s, drivetrain: 'AWD', acceleration: 4.9, weight: 1940 }
const ghib_trofeo = { engine: '3.8L V8 Twin-Turbo', displacement: 3799, cylinders: 8, power: 374, torque: 580, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.3, topSpeed: 326, fc: 13.5, fh: 10.0, fx: 17.5, fuelType: 'petrol', weight: 1915, seats: 5 }
for (const yr of [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]) {
  add('Maserati','Ghibli',String(yr),'S Q4', { ...ghib_sq4, price: `~$${Math.round(149990+(yr-2013)*2000).toLocaleString()}` })
  add('Maserati','Ghibli',String(yr),'S', { ...ghib_s, price: `~$${Math.round(139990+(yr-2013)*2000).toLocaleString()}` })
  if (yr >= 2019) add('Maserati','Ghibli',String(yr),'Trofeo', { ...ghib_trofeo, price: `~$${Math.round(229990+(yr-2019)*3000).toLocaleString()}` })
}

// Levante (2016-2026)
const lev_s = { engine: '3.0L V6 Twin-Turbo', displacement: 2979, cylinders: 6, power: 257, torque: 500, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.5, topSpeed: 263, fc: 12.5, fh: 9.5, fx: 16.0, fuelType: 'petrol', weight: 2105, seats: 5 }
const lev_trofeo = { engine: '3.8L V8 Twin-Turbo', displacement: 3799, cylinders: 8, power: 430, torque: 580, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.1, topSpeed: 301, fc: 14.5, fh: 11.0, fx: 18.5, fuelType: 'petrol', weight: 2255, seats: 5 }
for (const yr of [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Maserati','Levante',String(yr),'S', { ...lev_s, price: `~$${Math.round(159990+(yr-2016)*2000).toLocaleString()}` })
  add('Maserati','Levante',String(yr),'S GranSport', { ...lev_s, price: `~$${Math.round(179990+(yr-2016)*2000).toLocaleString()}` })
  if (yr >= 2019) add('Maserati','Levante',String(yr),'Trofeo', { ...lev_trofeo, price: `~$${Math.round(249990+(yr-2019)*3000).toLocaleString()}` })
}

// GranTurismo (2008-2019, 2022-2026)
const grantour = { engine: '4.7L V8', displacement: 4691, cylinders: 8, power: 323, torque: 490, transmission: '6sp auto', drivetrain: 'RWD', acceleration: 5.2, topSpeed: 295, fc: 14.8, fh: 10.8, fx: 19.5, fuelType: 'petrol', weight: 1880, seats: 4 }
const grantour_mc = { ...grantour, power: 338, torque: 520, acceleration: 4.7, topSpeed: 303 }
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]) {
  add('Maserati','GranTurismo',String(yr),'S', { ...grantour, price: `~$${Math.round(249990+(yr-2008)*3000).toLocaleString()}` })
  add('Maserati','GranTurismo',String(yr),'MC Stradale', { ...grantour_mc, price: `~$${Math.round(289990+(yr-2008)*3000).toLocaleString()}` })
}
const grantour_trofeo = { engine: '3.0L Nettuno V6 Twin-Turbo', displacement: 2992, cylinders: 6, power: 397, torque: 650, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 3.5, topSpeed: 320, fc: 12.0, fh: 9.2, fx: 15.5, fuelType: 'petrol', weight: 1955, seats: 4 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Maserati','GranTurismo',String(yr),'Modena', { ...grantour_trofeo, power: 330, torque: 500, acceleration: 4.0, price: `~$${Math.round(289990+(yr-2022)*5000).toLocaleString()}` })
  add('Maserati','GranTurismo',String(yr),'Trofeo', { ...grantour_trofeo, price: `~$${Math.round(379990+(yr-2022)*5000).toLocaleString()}` })
  add('Maserati','GranTurismo',String(yr),'Folgore', { engine: 'Electric Triple Motor', displacement: null, cylinders: null, power: 560, torque: 820, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 2.7, topSpeed: 320, range: 450, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2340, seats: 4, battery: '92 kWh', price: `~$${Math.round(429990+(yr-2022)*5000).toLocaleString()}` })
}

// ─── JEEP ─────────────────────────────────────────────────────────────────────
// Wrangler additional trims (2018-2026)
const wrangl_rubicon = { engine: '2.0L Turbo', displacement: 1995, cylinders: 4, power: 198, torque: 400, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.2, topSpeed: 175, fc: 11.5, fh: 9.0, fx: 14.5, fuelType: 'petrol', weight: 1948, seats: 5 }
const wrangl_392 = { engine: '6.4L HEMI V8', displacement: 6424, cylinders: 8, power: 376, torque: 644, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 195, fc: 16.0, fh: 12.5, fx: 20.5, fuelType: 'petrol', weight: 2249, seats: 5 }
const wrangl_4xe = { engine: '2.0L Turbo PHEV', displacement: 1995, cylinders: 4, power: 280, torque: 637, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 6.4, topSpeed: 175, fc: 3.4, range: 36, fuelType: 'hybrid', weight: 2348, seats: 5 }
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Jeep','Wrangler',String(yr),'Rubicon', { ...wrangl_rubicon, price: `~$${Math.round(69990+(yr-2018)*2000).toLocaleString()}` })
  add('Jeep','Wrangler',String(yr),'Rubicon 4dr', { ...wrangl_rubicon, weight: 2065, price: `~$${Math.round(74990+(yr-2018)*2000).toLocaleString()}` })
  if (yr >= 2021) add('Jeep','Wrangler',String(yr),'4xe', { ...wrangl_4xe, price: `~$${Math.round(79990+(yr-2021)*2000).toLocaleString()}` })
  if (yr >= 2021) add('Jeep','Wrangler',String(yr),'392', { ...wrangl_392, price: `~$${Math.round(99990+(yr-2021)*2000).toLocaleString()}` })
}

// Grand Cherokee (2021-2026) — new generation
const gc_ltd = { engine: '3.6L Pentastar V6', displacement: 3604, cylinders: 6, power: 210, torque: 347, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 195, fc: 11.8, fh: 9.5, fx: 14.8, fuelType: 'petrol', weight: 2150, seats: 5 }
const gc_4xe = { engine: '2.0L Turbo PHEV', displacement: 1995, cylinders: 4, power: 280, torque: 637, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 6.4, topSpeed: 195, fc: 3.4, range: 40, fuelType: 'hybrid', weight: 2538, seats: 5 }
const gc_trailhawk = { engine: '3.6L V6', displacement: 3604, cylinders: 6, power: 210, torque: 347, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 190, fc: 12.5, fh: 10.0, fx: 15.5, fuelType: 'petrol', weight: 2230, seats: 7 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Jeep','Grand Cherokee',String(yr),'Limited', { ...gc_ltd, price: `~$${Math.round(69990+(yr-2021)*2000).toLocaleString()}` })
  add('Jeep','Grand Cherokee',String(yr),'Overland', { ...gc_ltd, price: `~$${Math.round(84990+(yr-2021)*2000).toLocaleString()}` })
  add('Jeep','Grand Cherokee',String(yr),'Summit', { ...gc_ltd, price: `~$${Math.round(94990+(yr-2021)*2000).toLocaleString()}` })
  add('Jeep','Grand Cherokee',String(yr),'Trailhawk L', { ...gc_trailhawk, price: `~$${Math.round(89990+(yr-2021)*2000).toLocaleString()}` })
  add('Jeep','Grand Cherokee',String(yr),'4xe', { ...gc_4xe, price: `~$${Math.round(99990+(yr-2021)*2000).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement113.json', JSON.stringify(out, null, 2))
console.log('supplement113.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
