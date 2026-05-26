'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ CLS & GLA — 2020
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|CLS|2020|CLS 300d`] = {
  engine: '2.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 1950,
  cylinders: 4, drivetrain: 'RWD', transmission: '9-speed auto',
  power: 180, torque: 500, weight: 1910, seats: 5,
  fc: 6.3, fh: 4.9, fx: 8.5,
  acceleration: 7.5, topSpeed: 238, price: p(109900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLA|2020|GLA35 AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT AMG',
  power: 225, torque: 400, weight: 1665, seats: 5,
  fc: 8.7, fh: 6.8, fx: 11.6,
  acceleration: 5.1, topSpeed: 250, price: p(87900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLA|2020|GLA45 S AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed DCT AMG',
  power: 310, torque: 500, weight: 1735, seats: 5,
  fc: 9.3, fh: 7.2, fx: 12.5,
  acceleration: 4.3, topSpeed: 265, price: p(109900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MINI COUNTRYMAN — 2020: Cooper SE (PHEV)
// ─────────────────────────────────────────────────────────────
specs[`Mini|Countryman|2020|Cooper SE`] = {
  engine: '1.5L I3 Turbo PHEV', fuelType: 'PHEV', displacement: 1499,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 165, torque: 385, weight: 1870, seats: 5,
  fc: 2.3, fh: null, fx: null,
  acceleration: 6.8, topSpeed: 196, price: p(59900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI PAJERO SPORT — 2020: GLX+
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|Pajero Sport|2020|GLX+`] = {
  engine: '2.4L I4 MIVEC Turbo Diesel', fuelType: 'diesel', displacement: 2442,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 133, torque: 430, weight: 2115, seats: 7,
  fc: 7.8, fh: 6.2, fx: 10.4,
  acceleration: 11.5, topSpeed: 175, price: p(55990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// OPEL MOKKA — 2020: 1.2 Turbo, Electric
// ─────────────────────────────────────────────────────────────
specs[`Opel|Mokka|2020|1.2 Turbo`] = {
  engine: '1.2L I3 Turbo PureTech', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 96, torque: 230, weight: 1307, seats: 5,
  fc: 5.7, fh: 4.5, fx: 7.5,
  acceleration: 10.4, topSpeed: 190, price: p(35990), aspiration: 'Turbo'
}
specs[`Opel|Mokka|2020|Electric`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '50 kWh', range: 322,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 100, torque: 260, weight: 1593, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 9.0, topSpeed: 150, price: p(45990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE — 2020: 718 Spyder, 911 Turbo S, Cayenne Turbo S
// ─────────────────────────────────────────────────────────────
specs[`Porsche|718|2020|718 Spyder`] = {
  engine: '4.0L F6 NA 718', fuelType: 'petrol', displacement: 3995,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 309, torque: 420, weight: 1427, seats: 2,
  fc: 10.3, fh: 8.0, fx: 13.9,
  acceleration: 4.4, topSpeed: 301, price: p(199900), aspiration: 'NA'
}
specs[`Porsche|911|2020|Turbo S`] = {
  engine: '3.8L F6 Biturbo 992', fuelType: 'petrol', displacement: 3745,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 478, torque: 750, weight: 1640, seats: 4,
  fc: 11.5, fh: 8.9, fx: 15.5,
  acceleration: 2.7, topSpeed: 330, price: p(499900), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2020|Turbo S`] = {
  engine: '4.0L V8 Biturbo Hybrid', fuelType: 'PHEV', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 500, torque: 900, weight: 2395, seats: 5,
  fc: 3.1, fh: null, fx: null,
  acceleration: 3.8, topSpeed: 295, price: p(349900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SEAT LEON — 2020: 1.5 TSI, Cupra
// ─────────────────────────────────────────────────────────────
specs[`SEAT|Leon|2020|1.5 TSI`] = {
  engine: '1.5L I4 TSI EVO', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1330, seats: 5,
  fc: 5.5, fh: 4.3, fx: 7.3,
  acceleration: 8.9, topSpeed: 210, price: p(38990), aspiration: 'Turbo'
}
specs[`SEAT|Leon|2020|Cupra`] = {
  engine: '2.0L I4 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 221, torque: 350, weight: 1430, seats: 5,
  fc: 7.7, fh: 6.0, fx: 10.3,
  acceleration: 5.7, topSpeed: 247, price: p(58990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU — 2020: Impreza 2.0i-L, Liberty 2.5i Premium, Outback 2.4XT variants
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Impreza|2020|2.0i-L`] = {
  engine: '2.0L I4 Boxer NA FB20', fuelType: 'petrol', displacement: 1995,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 115, torque: 196, weight: 1340, seats: 5,
  fc: 7.2, fh: 5.8, fx: 9.5,
  acceleration: 10.5, topSpeed: 185, price: p(27990), aspiration: 'NA'
}
specs[`Subaru|Liberty|2020|2.5i Premium`] = {
  engine: '2.5L I4 Boxer NA FB25', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 129, torque: 235, weight: 1525, seats: 5,
  fc: 8.0, fh: 6.3, fx: 10.7,
  acceleration: 10.2, topSpeed: 190, price: p(39990), aspiration: 'NA'
}
specs[`Subaru|Outback|2020|2.4XT`] = {
  engine: '2.4L I4 Boxer Turbo FA24F', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 194, torque: 376, weight: 1730, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 6.4, topSpeed: 215, price: p(46990), aspiration: 'Turbo'
}
specs[`Subaru|Outback|2020|2.4XT Premium`] = {
  engine: '2.4L I4 Boxer Turbo FA24F', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 194, torque: 376, weight: 1735, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 6.4, topSpeed: 215, price: p(49990), aspiration: 'Turbo'
}
specs[`Subaru|Outback|2020|2.4XT Sport`] = {
  engine: '2.4L I4 Boxer Turbo FA24F', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 194, torque: 376, weight: 1740, seats: 5,
  fc: 9.0, fh: 7.1, fx: 12.1,
  acceleration: 6.4, topSpeed: 215, price: p(52990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL S & MODEL X — 2020: Long Range, Plaid
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model S|2020|Long Range`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 647,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 390, torque: 660, weight: 2241, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.1, topSpeed: 250, price: p(139990), aspiration: 'Electric'
}
specs[`Tesla|Model S|2020|Plaid`] = {
  engine: 'Tri Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 600,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 750, torque: 1020, weight: 2162, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 2.1, topSpeed: 322, price: p(174990), aspiration: 'Electric'
}
specs[`Tesla|Model X|2020|Long Range`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 580,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 390, torque: 660, weight: 2479, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 3.9, topSpeed: 250, price: p(149990), aspiration: 'Electric'
}
specs[`Tesla|Model X|2020|Plaid`] = {
  engine: 'Tri Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 543,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 760, torque: 1020, weight: 2459, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 2.5, topSpeed: 262, price: p(189990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA — 2020: HiLux SR5+, Yaris GR
// ─────────────────────────────────────────────────────────────
specs[`Toyota|HiLux|2020|SR5+`] = {
  engine: '2.8L I4 TD 1GD-FTV', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 150, torque: 500, weight: 2070, seats: 5,
  fc: 9.2, fh: 7.3, fx: 12.4,
  acceleration: 10.5, topSpeed: 175, price: p(65990), aspiration: 'Turbo'
}
specs[`Toyota|Yaris|2020|GR`] = {
  engine: '1.6L I3 Turbo G16E-GTS', fuelType: 'petrol', displacement: 1618,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 200, torque: 370, weight: 1280, seats: 4,
  fc: 7.4, fh: 6.0, fx: 9.7,
  acceleration: 5.5, topSpeed: 230, price: p(59990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN PASSAT — 2020: GTE (PHEV)
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Passat|2020|GTE`] = {
  engine: '1.4L I4 TSI PHEV', fuelType: 'PHEV', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
  power: 160, torque: 400, weight: 1720, seats: 5,
  fc: 1.7, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 222, price: p(62990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO — 2020: XC40 Recharge T5 PHEV, XC90 B5
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC40|2020|Recharge T5 PHEV`] = {
  engine: '1.5L I3 Turbo PHEV', fuelType: 'PHEV', displacement: 1477,
  cylinders: 3, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 195, torque: 425, weight: 1890, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 7.3, topSpeed: 195, price: p(72990), aspiration: 'Turbo'
}
specs[`Volvo|XC90|2020|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 420, weight: 2050, seats: 7,
  fc: 9.1, fh: 7.1, fx: 12.2,
  acceleration: 6.5, topSpeed: 220, price: p(99990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement194.json', JSON.stringify(out, null, 2))
console.log(`supplement194.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
