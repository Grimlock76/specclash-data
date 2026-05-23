// gen117.cjs — Mercedes EQ, BMW i-series, VW ID, Toyota EV/GR expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── MERCEDES-BENZ EQ ─────────────────────────────────────────────────────────
// EQA (2021-2026)
const eqa_250 = { engine: 'Electric', displacement: null, cylinders: null, power: 140, torque: 375, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.9, topSpeed: 160, range: 426, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2040, seats: 5, battery: '66.5 kWh' }
const eqa_300 = { ...eqa_250, power: 168, torque: 520, drivetrain: 'AWD', acceleration: 6.0, range: 400, weight: 2175 }
const eqa_350 = { ...eqa_300, power: 215, torque: 520, acceleration: 4.9, range: 394 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Mercedes-Benz','EQA',String(yr),'EQA 250', { ...eqa_250, price: `~$${Math.round(74990+(yr-2021)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQA',String(yr),'EQA 300 4MATIC', { ...eqa_300, price: `~$${Math.round(84990+(yr-2021)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQA',String(yr),'EQA 350 4MATIC', { ...eqa_350, price: `~$${Math.round(94990+(yr-2021)*2000).toLocaleString()}` })
}

// EQB (2021-2026)
const eqb_250 = { engine: 'Electric', displacement: null, cylinders: null, power: 140, torque: 375, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 8.9, topSpeed: 160, range: 419, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2175, seats: 7, battery: '66.5 kWh' }
const eqb_300 = { ...eqb_250, power: 168, torque: 520, drivetrain: 'AWD', acceleration: 6.2, range: 390, weight: 2310 }
const eqb_350 = { ...eqb_300, power: 215, torque: 520, acceleration: 5.1, range: 395 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Mercedes-Benz','EQB',String(yr),'EQB 250', { ...eqb_250, price: `~$${Math.round(84990+(yr-2021)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQB',String(yr),'EQB 300 4MATIC', { ...eqb_300, price: `~$${Math.round(94990+(yr-2021)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQB',String(yr),'EQB 350 4MATIC', { ...eqb_350, price: `~$${Math.round(104990+(yr-2021)*2000).toLocaleString()}` })
}

// EQC (2019-2024)
const eqc_400 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 765, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.1, topSpeed: 180, range: 445, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2495, seats: 5, battery: '80 kWh' }
for (const yr of [2019,2020,2021,2022,2023,2024]) {
  add('Mercedes-Benz','EQC',String(yr),'EQC 400 4MATIC', { ...eqc_400, price: `~$${Math.round(119990+(yr-2019)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQC',String(yr),'EQC 400 4MATIC Edition 1886', { ...eqc_400, price: `~$${Math.round(134990+(yr-2019)*2000).toLocaleString()}` })
}

// EQE (2022-2026)
const eqe_300 = { engine: 'Electric', displacement: null, cylinders: null, power: 180, torque: 565, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.3, topSpeed: 210, range: 654, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2430, seats: 5, battery: '90.6 kWh' }
const eqe_350 = { ...eqe_300, power: 215, torque: 565, acceleration: 6.4, range: 660 }
const eqe_500 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 858, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.7, topSpeed: 210, range: 571, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2575, seats: 5, battery: '90.6 kWh' }
const eqe_amg = { ...eqe_500, power: 460, torque: 950, acceleration: 3.3, range: 499 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Mercedes-Benz','EQE',String(yr),'EQE 300', { ...eqe_300, price: `~$${Math.round(124990+(yr-2022)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQE',String(yr),'EQE 350+', { ...eqe_350, price: `~$${Math.round(134990+(yr-2022)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQE',String(yr),'EQE 500 4MATIC', { ...eqe_500, price: `~$${Math.round(154990+(yr-2022)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQE',String(yr),'AMG EQE 53 4MATIC+', { ...eqe_amg, price: `~$${Math.round(199990+(yr-2022)*3000).toLocaleString()}` })
}

// EQE SUV (2023-2026)
const eqe_suv_350 = { engine: 'Electric', displacement: null, cylinders: null, power: 215, torque: 565, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 6.6, topSpeed: 210, range: 590, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2760, seats: 5, battery: '90.6 kWh' }
const eqe_suv_500 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 300, torque: 858, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 210, range: 548, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2900, seats: 7, battery: '90.6 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('Mercedes-Benz','EQE SUV',String(yr),'EQE 350 4MATIC', { ...eqe_suv_350, drivetrain: 'AWD', price: `~$${Math.round(149990+(yr-2023)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQE SUV',String(yr),'EQE 500 4MATIC', { ...eqe_suv_500, price: `~$${Math.round(169990+(yr-2023)*2000).toLocaleString()}` })
  add('Mercedes-Benz','EQE SUV',String(yr),'AMG EQE 53 4MATIC+', { ...eqe_suv_500, power: 460, torque: 950, acceleration: 3.9, range: 461, price: `~$${Math.round(219990+(yr-2023)*3000).toLocaleString()}` })
}

// EQS SUV (2023-2026)
const eqs_suv_450 = { engine: 'Electric', displacement: null, cylinders: null, power: 265, torque: 568, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 6.0, topSpeed: 210, range: 660, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2895, seats: 7, battery: '107.8 kWh' }
const eqs_suv_580 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 858, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.6, topSpeed: 210, range: 607, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 3075, seats: 7, battery: '107.8 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('Mercedes-Benz','EQS SUV',String(yr),'EQS 450 4MATIC', { ...eqs_suv_450, drivetrain: 'AWD', price: `~$${Math.round(189990+(yr-2023)*3000).toLocaleString()}` })
  add('Mercedes-Benz','EQS SUV',String(yr),'EQS 580 4MATIC', { ...eqs_suv_580, price: `~$${Math.round(219990+(yr-2023)*3000).toLocaleString()}` })
  add('Mercedes-Benz','EQS SUV',String(yr),'AMG EQS 53 4MATIC+', { ...eqs_suv_580, power: 484, torque: 1000, acceleration: 3.8, range: 516, price: `~$${Math.round(279990+(yr-2023)*3000).toLocaleString()}` })
}

// CLS (2019-2026) — fill
const cls_350 = { engine: '2.0L Turbo', displacement: 1991, cylinders: 4, power: 215, torque: 400, transmission: '9sp auto', drivetrain: 'RWD', acceleration: 6.0, topSpeed: 250, fc: 8.0, fh: 6.4, fx: 10.2, fuelType: 'petrol', weight: 1730, seats: 4 }
const cls_450 = { engine: '3.0L Turbo I6', displacement: 2999, cylinders: 6, power: 270, torque: 500, transmission: '9sp auto', drivetrain: 'AWD', acceleration: 5.0, topSpeed: 250, fc: 9.5, fh: 7.5, fx: 12.0, fuelType: 'petrol', weight: 1840, seats: 4 }
const cls_53 = { engine: '3.0L AMG Turbo I6', displacement: 2999, cylinders: 6, power: 320, torque: 520, transmission: '9sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 250, fc: 10.0, fh: 8.0, fx: 12.7, fuelType: 'petrol', weight: 1900, seats: 4 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Mercedes-Benz','CLS',String(yr),'CLS 350', { ...cls_350, price: `~$${Math.round(129990+(yr-2019)*2000).toLocaleString()}` })
  add('Mercedes-Benz','CLS',String(yr),'CLS 450 4MATIC', { ...cls_450, price: `~$${Math.round(149990+(yr-2019)*2000).toLocaleString()}` })
  add('Mercedes-Benz','CLS',String(yr),'AMG CLS 53 4MATIC+', { ...cls_53, price: `~$${Math.round(184990+(yr-2019)*2000).toLocaleString()}` })
}

// ─── BMW i-SERIES ─────────────────────────────────────────────────────────────
// i4 (2021-2026)
const i4_edrive40 = { engine: 'Electric', displacement: null, cylinders: null, power: 250, torque: 430, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 5.7, topSpeed: 225, range: 590, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2050, seats: 5, battery: '83.9 kWh' }
const i4_m50 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 795, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.9, topSpeed: 225, range: 510, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2290, seats: 5, battery: '83.9 kWh' }
const i4_edrive35 = { ...i4_edrive40, power: 210, torque: 400, acceleration: 6.0, range: 483, battery: '70.2 kWh', weight: 1965 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('BMW','i4',String(yr),'eDrive35', { ...i4_edrive35, price: `~$${Math.round(89990+(yr-2021)*2000).toLocaleString()}` })
  add('BMW','i4',String(yr),'eDrive40', { ...i4_edrive40, price: `~$${Math.round(99990+(yr-2021)*2000).toLocaleString()}` })
  add('BMW','i4',String(yr),'M50 xDrive', { ...i4_m50, price: `~$${Math.round(129990+(yr-2021)*2000).toLocaleString()}` })
}

// iX3 (2020-2026)
const ix3 = { engine: 'Electric', displacement: null, cylinders: null, power: 210, torque: 400, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 6.8, topSpeed: 180, range: 461, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2185, seats: 5, battery: '80 kWh' }
for (const yr of [2020,2021,2022,2023,2024,2025,2026]) {
  add('BMW','iX3',String(yr),'Impressive', { ...ix3, price: `~$${Math.round(94990+(yr-2020)*2000).toLocaleString()}` })
  add('BMW','iX3',String(yr),'M Sport', { ...ix3, price: `~$${Math.round(104990+(yr-2020)*2000).toLocaleString()}` })
}

// iX (2021-2026)
const ix_40 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 240, torque: 600, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 6.1, topSpeed: 200, range: 425, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2440, seats: 5, battery: '76.6 kWh' }
const ix_50 = { ...ix_40, power: 385, torque: 765, acceleration: 4.6, range: 630, battery: '111.5 kWh', weight: 2585 }
const ix_m60 = { ...ix_50, power: 455, torque: 1100, acceleration: 3.8, range: 566 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('BMW','iX',String(yr),'xDrive40', { ...ix_40, price: `~$${Math.round(129990+(yr-2021)*2000).toLocaleString()}` })
  add('BMW','iX',String(yr),'xDrive50', { ...ix_50, price: `~$${Math.round(154990+(yr-2021)*2000).toLocaleString()}` })
  add('BMW','iX',String(yr),'M60', { ...ix_m60, price: `~$${Math.round(194990+(yr-2021)*2000).toLocaleString()}` })
}

// i5 (2023-2026)
const i5_edrive40 = { engine: 'Electric', displacement: null, cylinders: null, power: 250, torque: 430, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 6.0, topSpeed: 193, range: 582, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2100, seats: 5, battery: '84 kWh' }
const i5_m60 = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 442, torque: 820, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 250, range: 516, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2390, seats: 5, battery: '84 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('BMW','i5',String(yr),'eDrive40', { ...i5_edrive40, price: `~$${Math.round(124990+(yr-2023)*2000).toLocaleString()}` })
  add('BMW','i5',String(yr),'xDrive40', { ...i5_edrive40, drivetrain: 'AWD', power: 295, torque: 620, acceleration: 4.9, price: `~$${Math.round(134990+(yr-2023)*2000).toLocaleString()}` })
  add('BMW','i5',String(yr),'M60 xDrive', { ...i5_m60, price: `~$${Math.round(174990+(yr-2023)*2000).toLocaleString()}` })
}

// i7 (2022-2026)
const i7_edrive60 = { engine: 'Electric', displacement: null, cylinders: null, power: 335, torque: 550, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 4.7, topSpeed: 240, range: 625, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2640, seats: 5, battery: '101.7 kWh' }
const i7_xdrive60 = { ...i7_edrive60, power: 400, torque: 745, drivetrain: 'AWD', acceleration: 4.5, range: 591, weight: 2755 }
const i7_m70 = { ...i7_xdrive60, power: 485, torque: 1100, acceleration: 3.7, range: 560 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('BMW','i7',String(yr),'eDrive60', { ...i7_edrive60, price: `~$${Math.round(219990+(yr-2022)*3000).toLocaleString()}` })
  add('BMW','i7',String(yr),'xDrive60', { ...i7_xdrive60, price: `~$${Math.round(239990+(yr-2022)*3000).toLocaleString()}` })
  add('BMW','i7',String(yr),'M70 xDrive', { ...i7_m70, price: `~$${Math.round(299990+(yr-2022)*3000).toLocaleString()}` })
}

// M2 (2016-2026) — fill trims
const m2_cs = { engine: '3.0L TwinPower Turbo I6', displacement: 2979, cylinders: 6, power: 302, torque: 550, transmission: '7sp DCT', drivetrain: 'RWD', acceleration: 4.2, topSpeed: 250, fc: 10.5, fh: 8.0, fx: 13.5, fuelType: 'petrol', weight: 1550, seats: 4 }
const m2_g = { engine: '3.0L TwinPower Turbo I6', displacement: 2979, cylinders: 6, power: 338, torque: 550, transmission: '6sp man / 8sp auto', drivetrain: 'RWD', acceleration: 4.1, topSpeed: 250, fc: 10.8, fh: 8.5, fx: 14.0, fuelType: 'petrol', weight: 1730, seats: 4 }
for (const yr of [2016,2017,2018,2019,2020]) {
  add('BMW','M2',String(yr),'Competition', { ...m2_cs, price: `~$${Math.round(99990+(yr-2016)*2000).toLocaleString()}` })
  add('BMW','M2',String(yr),'CS', { ...m2_cs, power: 331, torque: 550, acceleration: 4.0, price: `~$${Math.round(129990+(yr-2016)*2000).toLocaleString()}` })
}
for (const yr of [2023,2024,2025,2026]) {
  add('BMW','M2',String(yr),'Coupe', { ...m2_g, price: `~$${Math.round(129990+(yr-2023)*2000).toLocaleString()}` })
  add('BMW','M2',String(yr),'CS', { ...m2_g, power: 373, acceleration: 3.9, price: `~$${Math.round(159990+(yr-2023)*2000).toLocaleString()}` })
}

// ─── VOLKSWAGEN ID ────────────────────────────────────────────────────────────
// ID.3 (2021-2026)
const id3_pro = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.3, topSpeed: 160, range: 426, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1841, seats: 5, battery: '58 kWh' }
const id3_pro_s = { ...id3_pro, power: 150, range: 549, battery: '77 kWh', weight: 1897, acceleration: 7.9 }
const id3_gtx = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 210, torque: 545, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 5.7, topSpeed: 180, range: 490, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2020, seats: 5, battery: '77 kWh' }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Volkswagen','ID.3',String(yr),'Pro', { ...id3_pro, price: `~$${Math.round(54990+(yr-2021)*1500).toLocaleString()}` })
  add('Volkswagen','ID.3',String(yr),'Pro S', { ...id3_pro_s, price: `~$${Math.round(62990+(yr-2021)*1500).toLocaleString()}` })
  if (yr >= 2023) add('Volkswagen','ID.3',String(yr),'GTX', { ...id3_gtx, price: `~$${Math.round(72990+(yr-2023)*1500).toLocaleString()}` })
}

// ID.4 (2022-2026)
const id4_pro = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 8.5, topSpeed: 160, range: 523, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2124, seats: 5, battery: '77 kWh' }
const id4_gtx = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 220, torque: 460, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 6.2, topSpeed: 180, range: 490, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2232, seats: 5, battery: '77 kWh' }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Volkswagen','ID.4',String(yr),'Pro', { ...id4_pro, price: `~$${Math.round(64990+(yr-2022)*1500).toLocaleString()}` })
  add('Volkswagen','ID.4',String(yr),'Pro 4MOTION', { ...id4_pro, drivetrain: 'AWD', price: `~$${Math.round(72990+(yr-2022)*1500).toLocaleString()}` })
  add('Volkswagen','ID.4',String(yr),'GTX', { ...id4_gtx, price: `~$${Math.round(79990+(yr-2022)*1500).toLocaleString()}` })
}

// ID.5 (2022-2026) — fastback SUV
const id5_pro = { ...id4_pro, weight: 2180, range: 519, seats: 5 }
const id5_gtx = { ...id4_gtx, weight: 2270, range: 480 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Volkswagen','ID.5',String(yr),'Pro', { ...id5_pro, price: `~$${Math.round(69990+(yr-2022)*1500).toLocaleString()}` })
  add('Volkswagen','ID.5',String(yr),'Pro 4MOTION', { ...id5_pro, drivetrain: 'AWD', price: `~$${Math.round(77990+(yr-2022)*1500).toLocaleString()}` })
  add('Volkswagen','ID.5',String(yr),'GTX', { ...id5_gtx, price: `~$${Math.round(84990+(yr-2022)*1500).toLocaleString()}` })
}

// ID.7 (2024-2026)
const id7_pro = { engine: 'Electric', displacement: null, cylinders: null, power: 210, torque: 545, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 6.5, topSpeed: 180, range: 621, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2296, seats: 5, battery: '82 kWh' }
const id7_tourer = { ...id7_pro, weight: 2390 }
for (const yr of [2024,2025,2026]) {
  add('Volkswagen','ID.7',String(yr),'Pro', { ...id7_pro, price: `~$${Math.round(89990+(yr-2024)*2000).toLocaleString()}` })
  add('Volkswagen','ID.7',String(yr),'Tourer Pro', { ...id7_tourer, price: `~$${Math.round(94990+(yr-2024)*2000).toLocaleString()}` })
  add('Volkswagen','ID.7',String(yr),'GTX', { ...id7_pro, power: 210, drivetrain: 'AWD', acceleration: 5.4, range: 560, weight: 2440, price: `~$${Math.round(104990+(yr-2024)*2000).toLocaleString()}` })
}

// ─── TOYOTA ───────────────────────────────────────────────────────────────────
// GR86 (2022-2026) — fill trims
const gr86_base = { engine: '2.4L Boxer', displacement: 2387, cylinders: 4, power: 171, torque: 250, transmission: '6sp man / 6sp auto', drivetrain: 'RWD', acceleration: 6.3, topSpeed: 226, fc: 9.3, fh: 7.2, fx: 11.9, fuelType: 'petrol', weight: 1270, seats: 4 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Toyota','GR86',String(yr),'GR86', { ...gr86_base, price: `~$${Math.round(33990+(yr-2022)*1000).toLocaleString()}` })
  add('Toyota','GR86',String(yr),'GR86 Premium', { ...gr86_base, price: `~$${Math.round(37990+(yr-2022)*1000).toLocaleString()}` })
  add('Toyota','GR86',String(yr),'GTS', { ...gr86_base, price: `~$${Math.round(41990+(yr-2022)*1000).toLocaleString()}` })
}

// GR Corolla (2023-2026)
const grcor = { engine: '1.6L Turbo 3-cyl', displacement: 1618, cylinders: 3, power: 221, torque: 370, transmission: '6sp man / 8sp auto', drivetrain: 'AWD', acceleration: 5.0, topSpeed: 230, fc: 9.5, fh: 7.5, fx: 12.0, fuelType: 'petrol', weight: 1470, seats: 5 }
const grcor_morizo = { ...grcor, power: 224, torque: 400, acceleration: 4.7, seats: 2 }
for (const yr of [2023,2024,2025,2026]) {
  add('Toyota','GR Corolla',String(yr),'Core', { ...grcor, price: `~$${Math.round(59990+(yr-2023)*1500).toLocaleString()}` })
  add('Toyota','GR Corolla',String(yr),'Premium', { ...grcor, price: `~$${Math.round(65990+(yr-2023)*1500).toLocaleString()}` })
  add('Toyota','GR Corolla',String(yr),'Morizo Edition', { ...grcor_morizo, price: `~$${Math.round(74990+(yr-2023)*1500).toLocaleString()}` })
}

// bZ4X (2022-2026)
const bz4x_fwd = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 266, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.5, topSpeed: 160, range: 500, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2010, seats: 5, battery: '71.4 kWh' }
const bz4x_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 160, torque: 336, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 6.9, topSpeed: 160, range: 460, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2125, seats: 5, battery: '72.8 kWh' }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('Toyota','BZ4X',String(yr),'GX FWD', { ...bz4x_fwd, price: `~$${Math.round(59990+(yr-2022)*1500).toLocaleString()}` })
  add('Toyota','BZ4X',String(yr),'GXL FWD', { ...bz4x_fwd, price: `~$${Math.round(66990+(yr-2022)*1500).toLocaleString()}` })
  add('Toyota','BZ4X',String(yr),'GXL AWD', { ...bz4x_awd, price: `~$${Math.round(72990+(yr-2022)*1500).toLocaleString()}` })
  add('Toyota','BZ4X',String(yr),'Koba AWD', { ...bz4x_awd, price: `~$${Math.round(78990+(yr-2022)*1500).toLocaleString()}` })
}

// Prius C (2012-2019) — fill
const priusc = { engine: '1.5L Atkinson + Electric', displacement: 1497, cylinders: 4, power: 74, torque: 111, transmission: 'e-CVT', drivetrain: 'FWD', acceleration: 11.8, topSpeed: 165, fc: 3.9, fh: 3.5, fx: 4.5, fuelType: 'hybrid', weight: 1080, seats: 5 }
for (const yr of [2012,2013,2014,2015,2016,2017,2018,2019]) {
  add('Toyota','Prius C',String(yr),'i-Tech', { ...priusc, price: `~$${Math.round(24990+(yr-2012)*500).toLocaleString()}` })
  add('Toyota','Prius C',String(yr),'Q', { ...priusc, price: `~$${Math.round(27990+(yr-2012)*500).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement117.json', JSON.stringify(out, null, 2))
console.log('supplement117.json written —', Object.keys(specs).length, 'entries')
const makeCounts = {}
for (const k of Object.keys(specs)) { const m = k.split('|')[0]; makeCounts[m] = (makeCounts[m]||0)+1 }
Object.entries(makeCounts).sort().forEach(([m,c]) => console.log(`  ${m}: ${c}`))
