'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// VOLVO V60 — 2022: B5 MHEV, T8 Recharge PHEV
// ─────────────────────────────────────────────────────────────
specs[`Volvo|V60|2022|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 400, weight: 1655, seats: 5,
  fc: 7.6, fh: 5.9, fx: 10.4,
  acceleration: 6.4, topSpeed: 230, price: p(84990), aspiration: 'Turbo'
}
specs[`Volvo|V60|2022|T8 Recharge`] = {
  engine: '2.0L I4 T8 PHEV', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 287, torque: 670, weight: 1920, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 4.6, topSpeed: 250, price: p(109990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC40 — 2022: Recharge Pure Electric
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC40|2022|Recharge Pure Electric`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '78 kWh', range: 418,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 300, torque: 660, weight: 2040, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 180, price: p(79990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC60 — 2022: B5 MHEV
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC60|2022|B5`] = {
  engine: '2.0L I4 Turbo MHEV', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 420, weight: 1895, seats: 5,
  fc: 8.0, fh: 6.2, fx: 10.8,
  acceleration: 6.4, topSpeed: 230, price: p(86990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC90 — 2022: Recharge T8 PHEV
// ─────────────────────────────────────────────────────────────
specs[`Volvo|XC90|2022|Recharge T8`] = {
  engine: '2.0L I4 T8 PHEV', fuelType: 'PHEV', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 288, torque: 680, weight: 2200, seats: 7,
  fc: 2.1, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 230, price: p(119990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA LANDCRUISER — 2022: GR Sport (300-series)
// ─────────────────────────────────────────────────────────────
specs[`Toyota|LandCruiser|2022|GR Sport`] = {
  engine: '3.3L V6 Twin-Turbo Diesel', fuelType: 'diesel', displacement: 3346,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 227, torque: 700, weight: 2475, seats: 5,
  fc: 9.5, fh: 7.8, fx: 13.2,
  acceleration: 8.5, topSpeed: 210, price: p(175900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA YARIS CROSS — 2022: GR Sport
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Yaris Cross|2022|GR Sport`] = {
  engine: '1.5L I3 Hybrid', fuelType: 'hybrid', displacement: 1490,
  cylinders: 3, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 85, torque: 141, weight: 1395, seats: 5,
  fc: 4.3, fh: 3.5, fx: 5.8,
  acceleration: 11.2, topSpeed: 170, price: p(40490), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL S — 2022: Long Range AWD
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model S|2022|Long Range AWD`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 652,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 405, torque: 635, weight: 2162, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.2, topSpeed: 250, price: p(155500), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// TESLA MODEL X — 2022: Long Range AWD
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model X|2022|Long Range AWD`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '100 kWh', range: 547,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 406, torque: 660, weight: 2459, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 3.9, topSpeed: 250, price: p(160000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// POLESTAR 2 — 2022: BST Edition 270
// ─────────────────────────────────────────────────────────────
specs[`Polestar|2|2022|BST Edition 270`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '78 kWh', range: 432,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 350, torque: 680, weight: 2100, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.2, topSpeed: 205, price: p(89900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT — 2022: AMG GT 63 S E Performance PHEV
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2022|AMG GT 63 S E Performance`] = {
  engine: '4.0L V8 Biturbo PHEV AMG', fuelType: 'PHEV', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 630, torque: 1400, weight: 2350, seats: 4,
  fc: 8.6, fh: null, fx: null,
  acceleration: 2.9, topSpeed: 316, price: p(599000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ B-CLASS — 2022: B 200
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|B-Class|2022|B 200`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1332,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 120, torque: 250, weight: 1525, seats: 5,
  fc: 6.0, fh: 4.8, fx: 7.9,
  acceleration: 8.7, topSpeed: 212, price: p(48900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ G-CLASS — 2022: G 500
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|G-Class|2022|G 500`] = {
  engine: '4.0L V8 Biturbo', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 310, torque: 610, weight: 2467, seats: 5,
  fc: 14.7, fh: 11.4, fx: 20.0,
  acceleration: 5.9, topSpeed: 210, price: p(299900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ S-CLASS — 2022: S 580 MHEV
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|S-Class|2022|S 580`] = {
  engine: '4.0L V8 Biturbo MHEV', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 350, torque: 700, weight: 2215, seats: 5,
  fc: 11.2, fh: 8.5, fx: 15.2,
  acceleration: 4.4, topSpeed: 250, price: p(325900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA CR-V — 2022: VTi (5th-gen RT)
// ─────────────────────────────────────────────────────────────
specs[`Honda|CR-V|2022|VTi`] = {
  engine: '1.5L I4 VTEC Turbo', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT',
  power: 140, torque: 240, weight: 1625, seats: 5,
  fc: 7.3, fh: 5.9, fx: 9.5,
  acceleration: 10.0, topSpeed: 195, price: p(35990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HONDA ACCORD — 2022: e:HEV Sport
// ─────────────────────────────────────────────────────────────
specs[`Honda|Accord|2022|e:HEV Sport`] = {
  engine: '2.0L I4 e:HEV Atkinson', fuelType: 'hybrid', displacement: 1993,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 145, torque: 315, weight: 1570, seats: 5,
  fc: 4.9, fh: 4.1, fx: 6.2,
  acceleration: 7.8, topSpeed: 200, price: p(52900), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// FORD F-150 — 2022: Lightning (Extended Range)
// ─────────────────────────────────────────────────────────────
specs[`Ford|F-150|2022|Lightning`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '131 kWh', range: 515,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 426, torque: 1050, weight: 3000, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.5, topSpeed: 160, price: p(109950), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// FORD BRONCO — 2022: Raptor
// ─────────────────────────────────────────────────────────────
specs[`Ford|Bronco|2022|Raptor`] = {
  engine: '3.0L V6 EcoBoost Twin-Turbo', fuelType: 'petrol', displacement: 2994,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 235, torque: 563, weight: 2355, seats: 4,
  fc: 14.7, fh: 11.2, fx: 20.1,
  acceleration: 6.5, topSpeed: 180, price: p(115990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU OUTBACK — 2022: Wilderness
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Outback|2022|Wilderness`] = {
  engine: '2.5L I4 Boxer NA', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 136, torque: 239, weight: 1755, seats: 5,
  fc: 8.1, fh: 6.5, fx: 10.8,
  acceleration: 9.5, topSpeed: 185, price: p(47990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN MULTIVAN — 2022: eHybrid PHEV
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Multivan|2022|eHybrid`] = {
  engine: '1.4L I4 TSI PHEV', fuelType: 'PHEV', displacement: 1395,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed DSG',
  power: 160, torque: 350, weight: 2275, seats: 7,
  fc: 1.8, fh: null, fx: null,
  acceleration: 9.5, topSpeed: 200, price: p(95990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement183.json', JSON.stringify(out, null, 2))
console.log(`supplement183.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
