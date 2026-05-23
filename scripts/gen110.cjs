// gen110.cjs — CUPRA, Polestar, BYD, Renault, Genesis, RAM expansion
'use strict'
const fs = require('fs')

const specs = {}
function add(make, model, year, trim, data) {
  specs[`${make}|${model}|${year}|${trim}`] = data
}

// ─── CUPRA ────────────────────────────────────────────────────────────────────
// Formentor (2021-2026)
const formentor_14 = { engine: '1.4L TSI e-Hybrid', displacement: 1395, cylinders: 4, power: 180, torque: 400, transmission: '6sp DSG', drivetrain: 'FWD', acceleration: 7.5, topSpeed: 205, fc: 1.5, fh: null, fx: null, fuelType: 'hybrid', weight: 1650, seats: 5 }
const formentor_20 = { engine: '2.0L TSI', displacement: 1984, cylinders: 4, power: 228, torque: 400, transmission: '7sp DSG', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 250, fc: 8.5, fh: 7.1, fx: 10.5, fuelType: 'petrol', weight: 1570, seats: 5 }
const formentor_vz5 = { engine: '2.5L TSI Five Cylinder', displacement: 2480, cylinders: 5, power: 294, torque: 500, transmission: '7sp DSG', drivetrain: 'AWD', acceleration: 4.2, topSpeed: 250, fc: 10.5, fh: 8.4, fx: 13.2, fuelType: 'petrol', weight: 1650, seats: 5 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('CUPRA','Formentor',String(yr),'1.4 e-Hybrid', { ...formentor_14, price: `~$${Math.round(52990+(yr-2021)*1500).toLocaleString()}` })
  add('CUPRA','Formentor',String(yr),'VZ 2.0 TSI 4Drive', { ...formentor_20, price: `~$${Math.round(62990+(yr-2021)*1500).toLocaleString()}` })
  add('CUPRA','Formentor',String(yr),'VZ5', { ...formentor_vz5, price: `~$${Math.round(79990+(yr-2021)*1500).toLocaleString()}` })
}

// Born (2022-2026) — EV
const born_58 = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.3, topSpeed: 160, range: 420, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1965, seats: 5, battery: '58 kWh' }
const born_77 = { ...born_58, power: 170, torque: 310, acceleration: 6.6, topSpeed: 160, range: 550, battery: '77 kWh', weight: 2070 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('CUPRA','Born',String(yr),'58 kWh', { ...born_58, price: `~$${Math.round(55990+(yr-2022)*1500).toLocaleString()}` })
  add('CUPRA','Born',String(yr),'77 kWh', { ...born_77, price: `~$${Math.round(63990+(yr-2022)*1500).toLocaleString()}` })
  add('CUPRA','Born',String(yr),'VZ 77 kWh', { ...born_77, power: 185, acceleration: 6.0, price: `~$${Math.round(68990+(yr-2022)*1500).toLocaleString()}` })
}

// Terramar (2024-2026)
const terramar_15 = { engine: '1.5L TSI e-Hybrid', displacement: 1498, cylinders: 4, power: 204, torque: 400, transmission: '6sp DSG', drivetrain: 'FWD', acceleration: 7.5, topSpeed: 210, fc: 1.4, fh: null, fx: null, fuelType: 'hybrid', weight: 1700, seats: 5 }
const terramar_20 = { engine: '2.0L TSI', displacement: 1984, cylinders: 4, power: 265, torque: 400, transmission: '7sp DSG', drivetrain: 'AWD', acceleration: 5.7, topSpeed: 250, fc: 8.3, fh: 6.9, fx: 10.3, fuelType: 'petrol', weight: 1665, seats: 5 }
for (const yr of [2024,2025,2026]) {
  add('CUPRA','Terramar',String(yr),'1.5 e-Hybrid', { ...terramar_15, price: `~$${Math.round(58990+(yr-2024)*1500).toLocaleString()}` })
  add('CUPRA','Terramar',String(yr),'VZ 2.0 4Drive', { ...terramar_20, price: `~$${Math.round(69990+(yr-2024)*1500).toLocaleString()}` })
}

// ─── POLESTAR ─────────────────────────────────────────────────────────────────
// Polestar 2 (2021-2026)
const p2_sr = { engine: 'Electric Single Motor', displacement: null, cylinders: null, power: 170, torque: 330, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.4, topSpeed: 160, range: 518, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2030, seats: 5, battery: '69 kWh' }
const p2_lr = { ...p2_sr, power: 220, torque: 490, acceleration: 6.2, range: 635, battery: '82 kWh', weight: 2070 }
const p2_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 310, torque: 740, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 205, range: 562, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2185, seats: 5, battery: '82 kWh' }
const p2_bst = { ...p2_awd, power: 350, torque: 740, acceleration: 4.2, range: 490 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Polestar','2',String(yr),'Standard Range', { ...p2_sr, price: `~$${Math.round(62990+(yr-2021)*1500).toLocaleString()}` })
  add('Polestar','2',String(yr),'Long Range Single Motor', { ...p2_lr, price: `~$${Math.round(72990+(yr-2021)*1500).toLocaleString()}` })
  add('Polestar','2',String(yr),'Long Range AWD', { ...p2_awd, price: `~$${Math.round(82990+(yr-2021)*1500).toLocaleString()}` })
  if (yr >= 2022) add('Polestar','2',String(yr),'BST Edition 270', { ...p2_bst, price: `~$${Math.round(99990+(yr-2022)*2000).toLocaleString()}` })
}

// Polestar 3 (2024-2026)
const p3_lr = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 360, torque: 840, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.7, topSpeed: 210, range: 560, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2584, seats: 5, battery: '111 kWh' }
const p3_perf = { ...p3_lr, power: 380, torque: 910, acceleration: 4.2 }
for (const yr of [2024,2025,2026]) {
  add('Polestar','3',String(yr),'Long Range AWD', { ...p3_lr, price: `~$${Math.round(119990+(yr-2024)*2000).toLocaleString()}` })
  add('Polestar','3',String(yr),'Long Range AWD Performance', { ...p3_perf, price: `~$${Math.round(129990+(yr-2024)*2000).toLocaleString()}` })
}

// Polestar 4 (2024-2026)
const p4_sr = { engine: 'Electric Single Motor', displacement: null, cylinders: null, power: 200, torque: 343, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.4, topSpeed: 180, range: 580, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2170, seats: 5, battery: '94 kWh' }
const p4_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 400, torque: 686, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 200, range: 560, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2365, seats: 5, battery: '100 kWh' }
for (const yr of [2024,2025,2026]) {
  add('Polestar','4',String(yr),'Standard Range', { ...p4_sr, price: `~$${Math.round(79990+(yr-2024)*2000).toLocaleString()}` })
  add('Polestar','4',String(yr),'Long Range AWD', { ...p4_awd, price: `~$${Math.round(99990+(yr-2024)*2000).toLocaleString()}` })
}

// ─── BYD ──────────────────────────────────────────────────────────────────────
// Atto 3 (2022-2026)
const atto3_sr = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 7.3, topSpeed: 160, range: 420, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1750, seats: 5, battery: '49.9 kWh' }
const atto3_er = { ...atto3_sr, range: 521, battery: '60.5 kWh', weight: 1790 }
for (const yr of [2022,2023,2024,2025,2026]) {
  add('BYD','Atto 3',String(yr),'Standard Range', { ...atto3_sr, price: `~$${Math.round(44990+(yr-2022)*1000).toLocaleString()}` })
  add('BYD','Atto 3',String(yr),'Extended Range', { ...atto3_er, price: `~$${Math.round(48990+(yr-2022)*1000).toLocaleString()}` })
}

// Seal (2023-2026)
const seal_rwd = { engine: 'Electric', displacement: null, cylinders: null, power: 150, torque: 310, transmission: '1sp auto', drivetrain: 'RWD', acceleration: 7.5, topSpeed: 180, range: 570, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2150, seats: 5, battery: '61.4 kWh' }
const seal_awd = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 390, torque: 670, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 3.8, topSpeed: 200, range: 570, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2305, seats: 5, battery: '82.6 kWh' }
for (const yr of [2023,2024,2025,2026]) {
  add('BYD','Seal',String(yr),'RWD Standard Range', { ...seal_rwd, price: `~$${Math.round(54990+(yr-2023)*1500).toLocaleString()}` })
  add('BYD','Seal',String(yr),'RWD Extended Range', { ...seal_rwd, range: 650, battery: '82.6 kWh', weight: 2205, price: `~$${Math.round(61990+(yr-2023)*1500).toLocaleString()}` })
  add('BYD','Seal',String(yr),'AWD Performance', { ...seal_awd, price: `~$${Math.round(69990+(yr-2023)*1500).toLocaleString()}` })
}

// Dolphin (2023-2026)
const dolphin_sr = { engine: 'Electric', displacement: null, cylinders: null, power: 70, torque: 180, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 10.9, topSpeed: 150, range: 340, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1465, seats: 5, battery: '44.9 kWh' }
const dolphin_er = { ...dolphin_sr, power: 130, torque: 290, acceleration: 7.0, range: 451, battery: '60.4 kWh', weight: 1585 }
for (const yr of [2023,2024,2025,2026]) {
  add('BYD','Dolphin',String(yr),'Standard Range', { ...dolphin_sr, price: `~$${Math.round(38990+(yr-2023)*1000).toLocaleString()}` })
  add('BYD','Dolphin',String(yr),'Extended Range', { ...dolphin_er, price: `~$${Math.round(43990+(yr-2023)*1000).toLocaleString()}` })
}

// Shark (2024-2026) — ute PHEV
const byd_shark = { engine: '1.5L Turbo + Electric', displacement: 1497, cylinders: 4, power: 321, torque: 650, transmission: '3sp DHT', drivetrain: 'AWD', acceleration: 5.7, topSpeed: 180, fc: 2.0, range: 100, fuelType: 'hybrid', weight: 2800, seats: 5 }
for (const yr of [2024,2025,2026]) {
  add('BYD','Shark',String(yr),'6', { ...byd_shark, price: `~$${Math.round(69990+(yr-2024)*1500).toLocaleString()}` })
}

// Sealion 6 (2024-2026) PHEV
const sealion6 = { engine: '1.5L + Electric', displacement: 1497, cylinders: 4, power: 160, torque: 300, transmission: 'e-CVT', drivetrain: 'FWD', acceleration: 7.9, topSpeed: 175, fc: 1.0, range: 100, fuelType: 'hybrid', weight: 1940, seats: 5 }
const sealion6_awd = { ...sealion6, drivetrain: 'AWD', power: 195, torque: 350, acceleration: 6.6, weight: 2020 }
for (const yr of [2024,2025,2026]) {
  add('BYD','Sealion 6',String(yr),'Premium FWD', { ...sealion6, price: `~$${Math.round(48990+(yr-2024)*1500).toLocaleString()}` })
  add('BYD','Sealion 6',String(yr),'Premium AWD', { ...sealion6_awd, price: `~$${Math.round(54990+(yr-2024)*1500).toLocaleString()}` })
}

// ─── GENESIS ──────────────────────────────────────────────────────────────────
// G70 (2019-2026)
const g70_20t = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 180, torque: 353, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 6.0, topSpeed: 230, fc: 8.2, fh: 6.5, fx: 10.5, fuelType: 'petrol', weight: 1575, seats: 5 }
const g70_33t = { engine: '3.3L Twin-Turbo V6', displacement: 3342, cylinders: 6, power: 272, torque: 510, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 4.7, topSpeed: 270, fc: 11.0, fh: 8.4, fx: 14.2, fuelType: 'petrol', weight: 1660, seats: 5 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('Genesis','G70',String(yr),'2.0T Sport', { ...g70_20t, price: `~$${Math.round(59990+(yr-2019)*1500).toLocaleString()}` })
  add('Genesis','G70',String(yr),'3.3T Sport+', { ...g70_33t, price: `~$${Math.round(79990+(yr-2019)*1500).toLocaleString()}` })
  if (yr >= 2022) add('Genesis','G70',String(yr),'Shooting Brake 2.0T', { ...g70_20t, drivetrain: 'AWD', price: `~$${Math.round(69990+(yr-2022)*1500).toLocaleString()}` })
}

// G80 (2017-2026)
const g80_20t = { engine: '2.0L Turbo', displacement: 1998, cylinders: 4, power: 180, torque: 353, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 7.2, topSpeed: 220, fc: 8.5, fh: 6.8, fx: 10.8, fuelType: 'petrol', weight: 1840, seats: 5 }
const g80_33t = { engine: '3.3L Twin-Turbo V6', displacement: 3342, cylinders: 6, power: 272, torque: 510, transmission: '8sp auto', drivetrain: 'RWD', acceleration: 5.1, topSpeed: 250, fc: 11.5, fh: 8.8, fx: 14.8, fuelType: 'petrol', weight: 1920, seats: 5 }
const g80_elec = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 272, torque: 516, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.9, topSpeed: 225, range: 500, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2365, seats: 5, battery: '87.2 kWh' }
for (const yr of [2017,2018,2019,2020]) {
  add('Genesis','G80',String(yr),'2.0T', { ...g80_20t, price: `~$${Math.round(65990+(yr-2017)*1500).toLocaleString()}` })
  add('Genesis','G80',String(yr),'3.3T', { ...g80_33t, price: `~$${Math.round(89990+(yr-2017)*1500).toLocaleString()}` })
}
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Genesis','G80',String(yr),'2.5T Sport', { ...g80_20t, engine: '2.5L Turbo', displacement: 2497, power: 224, torque: 422, acceleration: 6.2, price: `~$${Math.round(89990+(yr-2021)*2000).toLocaleString()}` })
  add('Genesis','G80',String(yr),'3.5T Sport+', { ...g80_33t, price: `~$${Math.round(109990+(yr-2021)*2000).toLocaleString()}` })
  if (yr >= 2022) add('Genesis','G80',String(yr),'Electrified', { ...g80_elec, price: `~$${Math.round(119990+(yr-2022)*2000).toLocaleString()}` })
}

// GV70 (2021-2026)
const gv70_25t = { engine: '2.5L Turbo', displacement: 2497, cylinders: 4, power: 224, torque: 422, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 6.2, topSpeed: 235, fc: 9.8, fh: 7.9, fx: 12.3, fuelType: 'petrol', weight: 1890, seats: 5 }
const gv70_35t = { engine: '3.5L Twin-Turbo V6', displacement: 3342, cylinders: 6, power: 279, torque: 530, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.0, topSpeed: 250, fc: 12.0, fh: 9.5, fx: 15.0, fuelType: 'petrol', weight: 1980, seats: 5 }
const gv70_elec = { engine: 'Electric Dual Motor', displacement: null, cylinders: null, power: 360, torque: 605, transmission: '1sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 235, range: 455, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 2465, seats: 5, battery: '77.4 kWh' }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Genesis','GV70',String(yr),'2.5T Sport', { ...gv70_25t, price: `~$${Math.round(79990+(yr-2021)*2000).toLocaleString()}` })
  add('Genesis','GV70',String(yr),'3.5T Sport+', { ...gv70_35t, price: `~$${Math.round(99990+(yr-2021)*2000).toLocaleString()}` })
  if (yr >= 2023) add('Genesis','GV70',String(yr),'Electrified', { ...gv70_elec, price: `~$${Math.round(109990+(yr-2023)*2000).toLocaleString()}` })
}

// GV80 (2021-2026)
const gv80_25t = { engine: '2.5L Turbo', displacement: 2497, cylinders: 4, power: 224, torque: 422, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 7.0, topSpeed: 220, fc: 10.2, fh: 8.3, fx: 12.8, fuelType: 'petrol', weight: 2090, seats: 5 }
const gv80_35t = { engine: '3.5L Twin-Turbo V6', displacement: 3342, cylinders: 6, power: 279, torque: 530, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 5.5, topSpeed: 250, fc: 12.5, fh: 9.8, fx: 15.8, fuelType: 'petrol', weight: 2160, seats: 7 }
for (const yr of [2021,2022,2023,2024,2025,2026]) {
  add('Genesis','GV80',String(yr),'2.5T Sport', { ...gv80_25t, price: `~$${Math.round(94990+(yr-2021)*2000).toLocaleString()}` })
  add('Genesis','GV80',String(yr),'3.5T Sport+', { ...gv80_35t, price: `~$${Math.round(119990+(yr-2021)*2000).toLocaleString()}` })
}

// ─── RAM ──────────────────────────────────────────────────────────────────────
// 1500 (2019-2026)
const ram1500_57 = { engine: '5.7L V8 HEMI', displacement: 5654, cylinders: 8, power: 291, torque: 556, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 6.5, topSpeed: 180, fc: 14.5, fh: 10.8, fx: 18.2, fuelType: 'petrol', weight: 2267, seats: 5 }
const ram1500_etorque = { ...ram1500_57, engine: '5.7L V8 HEMI eTorque', power: 298, torque: 576, fc: 13.8 }
for (const yr of [2019,2020,2021,2022,2023,2024,2025,2026]) {
  add('RAM','1500',String(yr),'Express', { ...ram1500_57, price: `~$${Math.round(69990+(yr-2019)*2000).toLocaleString()}` })
  add('RAM','1500',String(yr),'Laramie', { ...ram1500_57, price: `~$${Math.round(82990+(yr-2019)*2000).toLocaleString()}` })
  add('RAM','1500',String(yr),'Longhorn', { ...ram1500_57, price: `~$${Math.round(95990+(yr-2019)*2000).toLocaleString()}` })
  add('RAM','1500',String(yr),'Limited', { ...ram1500_etorque, price: `~$${Math.round(109990+(yr-2019)*2000).toLocaleString()}` })
  if (yr >= 2021) add('RAM','1500',String(yr),'TRX', { engine: '6.2L Supercharged V8', displacement: 6166, cylinders: 8, power: 523, torque: 881, transmission: '8sp auto', drivetrain: 'AWD', acceleration: 4.5, topSpeed: 190, fc: 17.5, fh: 14.0, fx: 21.5, fuelType: 'petrol', weight: 2740, seats: 5, price: `~$${Math.round(179990+(yr-2021)*3000).toLocaleString()}` })
}

// 2500 (2020-2026)
const ram2500_cummins = { engine: '6.7L Cummins Turbo Diesel', displacement: 6690, cylinders: 6, power: 276, torque: 1153, transmission: '6sp auto', drivetrain: 'AWD', acceleration: 8.5, topSpeed: 160, fc: 11.5, fh: 9.5, fx: 13.8, fuelType: 'diesel', weight: 3130, seats: 5 }
for (const yr of [2020,2021,2022,2023,2024,2025,2026]) {
  add('RAM','2500',String(yr),'Laramie', { ...ram2500_cummins, price: `~$${Math.round(119990+(yr-2020)*3000).toLocaleString()}` })
  add('RAM','2500',String(yr),'Longhorn', { ...ram2500_cummins, price: `~$${Math.round(139990+(yr-2020)*3000).toLocaleString()}` })
  add('RAM','2500',String(yr),'Limited', { ...ram2500_cummins, price: `~$${Math.round(155990+(yr-2020)*3000).toLocaleString()}` })
}

// ─── RENAULT ──────────────────────────────────────────────────────────────────
// Megane (2012-2022)
const megane_gt = { engine: '1.6L Turbo', displacement: 1618, cylinders: 4, power: 151, torque: 280, transmission: '7sp DSG', drivetrain: 'FWD', acceleration: 7.0, topSpeed: 225, fc: 7.8, fh: 6.2, fx: 9.8, fuelType: 'petrol', weight: 1400, seats: 5 }
const megane_rs = { engine: '1.8L Turbo', displacement: 1798, cylinders: 4, power: 205, torque: 390, transmission: '6sp man', drivetrain: 'FWD', acceleration: 5.8, topSpeed: 250, fc: 8.7, fh: 6.9, fx: 11.0, fuelType: 'petrol', weight: 1450, seats: 5 }
for (const yr of [2017,2018,2019,2020,2021]) {
  add('Renault','Megane',String(yr),'GT', { ...megane_gt, price: `~$${Math.round(37990+(yr-2017)*1000).toLocaleString()}` })
  add('Renault','Megane',String(yr),'RS 280', { ...megane_rs, price: `~$${Math.round(47990+(yr-2017)*1000).toLocaleString()}` })
  add('Renault','Megane',String(yr),'RS 300 Trophy', { ...megane_rs, power: 221, torque: 420, acceleration: 5.4, price: `~$${Math.round(55990+(yr-2017)*1000).toLocaleString()}` })
}

// Koleos (2017-2024)
const koleos_20 = { engine: '2.0L Turbo Diesel', displacement: 1995, cylinders: 4, power: 130, torque: 380, transmission: 'X-Tronic CVT', drivetrain: 'AWD', acceleration: 9.5, topSpeed: 185, fc: 6.8, fh: 5.5, fx: 8.5, fuelType: 'diesel', weight: 1740, seats: 5 }
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024]) {
  add('Renault','Koleos',String(yr),'Zen', { ...koleos_20, drivetrain: 'FWD', price: `~$${Math.round(38990+(yr-2017)*1000).toLocaleString()}` })
  add('Renault','Koleos',String(yr),'Intens', { ...koleos_20, price: `~$${Math.round(45990+(yr-2017)*1000).toLocaleString()}` })
  add('Renault','Koleos',String(yr),'Signature', { ...koleos_20, price: `~$${Math.round(52990+(yr-2017)*1000).toLocaleString()}` })
}

// Clio (2013-2024)
const clio4_rs = { engine: '1.6L Turbo', displacement: 1618, cylinders: 4, power: 147, torque: 280, transmission: '6sp man / EDC', drivetrain: 'FWD', acceleration: 6.7, topSpeed: 230, fc: 7.1, fh: 5.6, fx: 9.0, fuelType: 'petrol', weight: 1228, seats: 5 }
const clio5_rs_line = { engine: '1.0L Turbo', displacement: 999, cylinders: 3, power: 74, torque: 160, transmission: 'CVT', drivetrain: 'FWD', acceleration: 11.5, topSpeed: 175, fc: 5.6, fh: 4.8, fx: 6.8, fuelType: 'petrol', weight: 1270, seats: 5 }
for (const yr of [2013,2014,2015,2016,2017,2018]) {
  add('Renault','Clio',String(yr),'RS 200', { ...clio4_rs, price: `~$${Math.round(32990+(yr-2013)*800).toLocaleString()}` })
  add('Renault','Clio',String(yr),'RS 220 Trophy', { ...clio4_rs, power: 162, torque: 280, acceleration: 6.5, price: `~$${Math.round(38990+(yr-2013)*800).toLocaleString()}` })
}
for (const yr of [2020,2021,2022,2023,2024]) {
  add('Renault','Clio',String(yr),'RS Line', { ...clio5_rs_line, price: `~$${Math.round(28990+(yr-2020)*800).toLocaleString()}` })
}

// Zoe (2020-2024) — EV
const zoe = { engine: 'Electric', displacement: null, cylinders: null, power: 100, torque: 245, transmission: '1sp auto', drivetrain: 'FWD', acceleration: 9.5, topSpeed: 140, range: 395, fc: null, fh: null, fx: null, fuelType: 'electric', weight: 1536, seats: 5, battery: '52 kWh' }
for (const yr of [2020,2021,2022,2023,2024]) {
  add('Renault','Zoe',String(yr),'Life', { ...zoe, price: `~$${Math.round(48990+(yr-2020)*1000).toLocaleString()}` })
  add('Renault','Zoe',String(yr),'Intens', { ...zoe, price: `~$${Math.round(54990+(yr-2020)*1000).toLocaleString()}` })
}

const out = { specs }
fs.writeFileSync('src/data/supplement110.json', JSON.stringify(out, null, 2))
console.log('supplement110.json written —', Object.keys(specs).length, 'entries')
console.log('  CUPRA:', Object.keys(specs).filter(k=>k.startsWith('CUPRA')).length)
console.log('  Polestar:', Object.keys(specs).filter(k=>k.startsWith('Polestar')).length)
console.log('  BYD:', Object.keys(specs).filter(k=>k.startsWith('BYD')).length)
console.log('  Genesis:', Object.keys(specs).filter(k=>k.startsWith('Genesis')).length)
console.log('  RAM:', Object.keys(specs).filter(k=>k.startsWith('RAM')).length)
console.log('  Renault:', Object.keys(specs).filter(k=>k.startsWith('Renault')).length)
