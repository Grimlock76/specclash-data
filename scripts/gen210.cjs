'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// LOTUS EXIGE S3 — 2016: Cup 380, Cup 430, Sport 380
// ─────────────────────────────────────────────────────────────
specs[`Lotus|Exige|2016|Cup 380`] = {
  engine: '3.5L V6 SC Toyota 2GR-FE', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 280, torque: 390, weight: 931, seats: 2,
  fc: 10.5, fh: 8.2, fx: 14.0,
  acceleration: 3.8, topSpeed: 274, price: p(139900), aspiration: 'Supercharged'
}
specs[`Lotus|Exige|2016|Cup 430`] = {
  engine: '3.5L V6 SC Toyota 2GR-FE', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 316, torque: 440, weight: 926, seats: 2,
  fc: 10.5, fh: 8.2, fx: 14.0,
  acceleration: 3.3, topSpeed: 290, price: p(189900), aspiration: 'Supercharged'
}
specs[`Lotus|Exige|2016|Sport 380`] = {
  engine: '3.5L V6 SC Toyota 2GR-FE', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 280, torque: 390, weight: 955, seats: 2,
  fc: 10.5, fh: 8.2, fx: 14.0,
  acceleration: 3.8, topSpeed: 274, price: p(119900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MAZDA MX-5 — 2016: RF GT
// ─────────────────────────────────────────────────────────────
specs[`Mazda|MX-5|2016|RF GT`] = {
  engine: '2.0L I4 NA PE-VPS', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 118, torque: 200, weight: 1110, seats: 2,
  fc: 7.6, fh: 6.0, fx: 10.1,
  acceleration: 7.9, topSpeed: 214, price: p(49990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT & E-CLASS & SLC — 2016
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2016|AMG GT R`] = {
  engine: '4.0L V8 Biturbo M178', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT AMG Speedshift',
  power: 430, torque: 700, weight: 1555, seats: 2,
  fc: 12.4, fh: 9.3, fx: 16.7,
  acceleration: 3.6, topSpeed: 318, price: p(299900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|E-Class|2016|E 220 d`] = {
  engine: '2.0L I4 Turbo Diesel OM654', fuelType: 'diesel', displacement: 1950,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed auto 9G-Tronic',
  power: 143, torque: 400, weight: 1630, seats: 5,
  fc: 4.6, fh: 3.7, fx: 6.1,
  acceleration: 7.3, topSpeed: 240, price: p(79900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|E-Class|2016|E 43 AMG`] = {
  engine: '3.0L V6 Biturbo M276', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 295, torque: 520, weight: 1830, seats: 5,
  fc: 9.3, fh: 7.2, fx: 12.6,
  acceleration: 4.6, topSpeed: 250, price: p(149900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|E-Class|2016|E 63 S AMG`] = {
  engine: '4.0L V8 Biturbo M177', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto AMG Speedshift',
  power: 450, torque: 850, weight: 2045, seats: 5,
  fc: 11.3, fh: 8.5, fx: 15.4,
  acceleration: 3.4, topSpeed: 300, price: p(269900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SLC|2016|SLC 180`] = {
  engine: '1.6L I4 Turbo M270', fuelType: 'petrol', displacement: 1595,
  cylinders: 4, drivetrain: 'RWD', transmission: '7-speed auto 7G-Tronic',
  power: 115, torque: 250, weight: 1370, seats: 2,
  fc: 6.5, fh: 5.2, fx: 8.7,
  acceleration: 7.6, topSpeed: 230, price: p(64900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SLC|2016|SLC 300`] = {
  engine: '2.0L I4 Turbo M274', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed auto 9G-Tronic',
  power: 180, torque: 300, weight: 1395, seats: 2,
  fc: 6.8, fh: 5.5, fx: 9.1,
  acceleration: 5.8, topSpeed: 250, price: p(84900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|SLC|2016|SLC 43 AMG`] = {
  engine: '3.0L V6 Biturbo M276', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'RWD', transmission: '9-speed auto 9G-Tronic',
  power: 270, torque: 520, weight: 1575, seats: 2,
  fc: 8.1, fh: 6.4, fx: 10.8,
  acceleration: 4.7, topSpeed: 250, price: p(114900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI ASX — 2016: Exceed
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|ASX|2016|Exceed`] = {
  engine: '2.0L I4 NA 4B11 MIVEC', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT',
  power: 110, torque: 197, weight: 1520, seats: 5,
  fc: 7.9, fh: 6.3, fx: 10.5,
  acceleration: 11.0, topSpeed: 185, price: p(32990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 3008 — 2016: GT (2nd gen)
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|3008|2016|GT`] = {
  engine: '2.0L I4 Turbo Diesel DW10FC', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto EAT8',
  power: 133, torque: 400, weight: 1640, seats: 5,
  fc: 5.8, fh: 4.6, fx: 7.8,
  acceleration: 9.2, topSpeed: 210, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2016 (991.2): Carrera, Carrera GTS, GT2 RS, R, Turbo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2016|Carrera`] = {
  engine: '3.0L H6 Turbo MA175', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 272, torque: 450, weight: 1415, seats: 4,
  fc: 8.1, fh: 6.6, fx: 10.7,
  acceleration: 4.2, topSpeed: 293, price: p(182900), aspiration: 'Turbo'
}
specs[`Porsche|911|2016|Carrera GTS`] = {
  engine: '3.0L H6 Turbo MA175/S', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 331, torque: 500, weight: 1430, seats: 4,
  fc: 8.2, fh: 6.7, fx: 10.9,
  acceleration: 3.8, topSpeed: 308, price: p(239900), aspiration: 'Turbo'
}
specs[`Porsche|911|2016|GT2 RS`] = {
  engine: '3.8L H6 Biturbo MA176', fuelType: 'petrol', displacement: 3800,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 515, torque: 750, weight: 1470, seats: 2,
  fc: 11.8, fh: 9.3, fx: 15.9,
  acceleration: 2.8, topSpeed: 340, price: p(499900), aspiration: 'Turbo'
}
specs[`Porsche|911|2016|R`] = {
  engine: '4.0L H6 NA MA104', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 368, torque: 460, weight: 1370, seats: 2,
  fc: 12.7, fh: 10.3, fx: 16.7,
  acceleration: 3.8, topSpeed: 323, price: p(399900), aspiration: 'NA'
}
specs[`Porsche|911|2016|Turbo`] = {
  engine: '3.8L H6 Biturbo MA176', fuelType: 'petrol', displacement: 3800,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed PDK',
  power: 397, torque: 660, weight: 1600, seats: 4,
  fc: 9.7, fh: 7.5, fx: 13.2,
  acceleration: 3.0, topSpeed: 318, price: p(349900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL S — 2016: 75D
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model S|2016|75D`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', displacement: 0,
  cylinders: 0, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 280, torque: 525, weight: 2239, seats: 5,
  fc: null, fh: null, fx: null,
  battery: '75 kWh', range: 490,
  acceleration: 4.2, topSpeed: 225, price: p(119990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA PRIUS — 2016: Prime, i-Tech
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Prius|2016|Prime`] = {
  engine: '1.8L I4 NA + Electric PHEV 2ZR-FXE', fuelType: 'PHEV', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT e-CVT',
  power: 90, torque: 142, weight: 1540, seats: 5,
  fc: 1.0, fh: null, fx: null,
  acceleration: 11.2, topSpeed: 160, price: p(38990), aspiration: 'NA'
}
specs[`Toyota|Prius|2016|i-Tech`] = {
  engine: '1.8L I4 NA Toyota 2ZR-FXE HSD', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT e-CVT',
  power: 90, torque: 142, weight: 1380, seats: 5,
  fc: 3.4, fh: 2.8, fx: 4.2,
  acceleration: 10.6, topSpeed: 180, price: p(42990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VAUXHALL ASTRA — 2016: VXR
// ─────────────────────────────────────────────────────────────
specs[`Vauxhall|Astra|2016|VXR`] = {
  engine: '2.0L I4 Turbo A20NFT OPC', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 206, torque: 400, weight: 1455, seats: 5,
  fc: 10.2, fh: 7.8, fx: 13.7,
  acceleration: 6.2, topSpeed: 250, price: p(52990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN PASSAT & TIGUAN — 2016
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Passat|2016|132TSI Comfortline`] = {
  engine: '1.8L I4 Turbo TFSI EA888', fuelType: 'petrol', displacement: 1798,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 132, torque: 280, weight: 1455, seats: 5,
  fc: 7.5, fh: 5.9, fx: 9.9,
  acceleration: 7.9, topSpeed: 225, price: p(43990), aspiration: 'Turbo'
}
specs[`Volkswagen|Passat|2016|140TDI Comfortline`] = {
  engine: '2.0L I4 Turbo Diesel TDI EA288', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
  power: 140, torque: 340, weight: 1510, seats: 5,
  fc: 5.0, fh: 4.0, fx: 6.6,
  acceleration: 8.2, topSpeed: 224, price: p(47990), aspiration: 'Turbo'
}
specs[`Volkswagen|Passat|2016|162TSI Highline`] = {
  engine: '2.0L I4 Turbo TFSI EA888 gen3', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 162, torque: 350, weight: 1480, seats: 5,
  fc: 7.3, fh: 5.8, fx: 9.6,
  acceleration: 6.9, topSpeed: 240, price: p(52990), aspiration: 'Turbo'
}
specs[`Volkswagen|Passat|2016|206TDI Alltrack`] = {
  engine: '2.0L I4 Biturbo Diesel TDI EA896', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed DSG',
  power: 176, torque: 500, weight: 1720, seats: 5,
  fc: 5.9, fh: 4.7, fx: 7.9,
  acceleration: 6.5, topSpeed: 235, price: p(61990), aspiration: 'Turbo'
}
specs[`Volkswagen|Tiguan|2016|110TSI Comfortline`] = {
  engine: '1.4L I4 Turbo TSI EA211', fuelType: 'petrol', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1487, seats: 5,
  fc: 7.1, fh: 5.6, fx: 9.5,
  acceleration: 9.9, topSpeed: 195, price: p(35990), aspiration: 'Turbo'
}
specs[`Volkswagen|Tiguan|2016|140TDI Highline`] = {
  engine: '2.0L I4 Turbo Diesel TDI EA288', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 140, torque: 340, weight: 1628, seats: 5,
  fc: 5.7, fh: 4.6, fx: 7.5,
  acceleration: 9.7, topSpeed: 205, price: p(46990), aspiration: 'Turbo'
}
specs[`Volkswagen|Tiguan|2016|162TSI R-Line`] = {
  engine: '2.0L I4 Turbo TSI EA888', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 162, torque: 350, weight: 1570, seats: 5,
  fc: 8.4, fh: 6.6, fx: 11.2,
  acceleration: 7.5, topSpeed: 210, price: p(49990), aspiration: 'Turbo'
}
specs[`Volkswagen|Tiguan|2016|162TSI Sportline`] = {
  engine: '2.0L I4 Turbo TSI EA888', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 162, torque: 350, weight: 1570, seats: 5,
  fc: 8.4, fh: 6.6, fx: 11.2,
  acceleration: 7.5, topSpeed: 210, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC90 — 2016: T8 Recharge
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC90|2016|T8 Recharge`] = {
  engine: '2.0L I4 Turbo+SC + Electric PHEV B4204T39', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto Geartronic',
  power: 298, torque: 640, weight: 2320, seats: 7,
  fc: 2.1, fh: null, fx: null,
  acceleration: 5.6, topSpeed: 230, price: p(129990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement210.json', JSON.stringify(out, null, 2))
console.log(`supplement210.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
