'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// NISSAN NAVARA — 2015: PRO-4X (D23 NP300 new gen)
// ─────────────────────────────────────────────────────────────
specs[`Nissan|Navara|2015|PRO-4X`] = {
  engine: '2.3L I4 Biturbo Diesel YD25DDTi', fuelType: 'diesel', displacement: 2298,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed auto',
  power: 140, torque: 450, weight: 2065, seats: 5,
  fc: 7.5, fh: 5.9, fx: 9.9,
  acceleration: 10.8, topSpeed: 183, price: p(55990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI TRITON — 2015: Exceed (MQ new gen)
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|Triton|2015|Exceed`] = {
  engine: '2.4L I4 Turbo Diesel 4N15 MIVEC', fuelType: 'diesel', displacement: 2442,
  cylinders: 4, drivetrain: 'AWD', transmission: '5-speed auto',
  power: 133, torque: 430, weight: 1880, seats: 5,
  fc: 7.5, fh: 5.9, fx: 9.9,
  acceleration: 11.0, topSpeed: 175, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI SONATA — 2015: Active, Elite (LF 7th gen)
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Sonata|2015|Active`] = {
  engine: '2.0L I4 NA G4NC Nu', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 119, torque: 196, weight: 1519, seats: 5,
  fc: 8.1, fh: 6.4, fx: 10.8,
  acceleration: 10.0, topSpeed: 205, price: p(29990), aspiration: 'NA'
}
specs[`Hyundai|Sonata|2015|Elite`] = {
  engine: '2.0L I4 NA G4NC Nu', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 119, torque: 196, weight: 1532, seats: 5,
  fc: 8.1, fh: 6.4, fx: 10.8,
  acceleration: 10.0, topSpeed: 205, price: p(34990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// HYUNDAI TUCSON — 2015: Active X, Elite, Highlander (TL new gen)
// ─────────────────────────────────────────────────────────────
specs[`Hyundai|Tucson|2015|Active X`] = {
  engine: '2.0L I4 NA G4NA Nu', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 121, torque: 196, weight: 1618, seats: 5,
  fc: 8.9, fh: 7.0, fx: 11.8,
  acceleration: 10.5, topSpeed: 193, price: p(35990), aspiration: 'NA'
}
specs[`Hyundai|Tucson|2015|Elite`] = {
  engine: '2.0L I4 NA G4NA Nu', fuelType: 'petrol', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 121, torque: 196, weight: 1625, seats: 5,
  fc: 8.9, fh: 7.0, fx: 11.8,
  acceleration: 10.5, topSpeed: 193, price: p(38990), aspiration: 'NA'
}
specs[`Hyundai|Tucson|2015|Highlander`] = {
  engine: '1.6L I4 Turbo G4FJ T-GDI', fuelType: 'petrol', displacement: 1591,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 130, torque: 265, weight: 1637, seats: 5,
  fc: 7.8, fh: 6.1, fx: 10.5,
  acceleration: 8.3, topSpeed: 205, price: p(44990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// KIA SPORTAGE — 2015: Sport; KIA OPTIMA — 2015: GT (3rd gen)
// ─────────────────────────────────────────────────────────────
specs[`Kia|Sportage|2015|Sport`] = {
  engine: '2.0L I4 NA G4KD Theta II', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 122, torque: 198, weight: 1605, seats: 5,
  fc: 9.2, fh: 7.3, fx: 12.3,
  acceleration: 10.5, topSpeed: 188, price: p(32990), aspiration: 'NA'
}
specs[`Kia|Optima|2015|GT`] = {
  engine: '2.0L I4 Turbo G4KH Theta II T-GDI', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 180, torque: 353, weight: 1594, seats: 5,
  fc: 9.3, fh: 7.3, fx: 12.4,
  acceleration: 7.0, topSpeed: 230, price: p(43990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN MULTIVAN — 2015: TDI340, TDI450
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Multivan|2015|TDI340`] = {
  engine: '2.0L I4 Turbo Diesel TDI BiTDI', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 340, weight: 2300, seats: 7,
  fc: 7.5, fh: 6.0, fx: 9.9,
  acceleration: 12.0, topSpeed: 193, price: p(64990), aspiration: 'Turbo'
}
specs[`Volkswagen|Multivan|2015|TDI450`] = {
  engine: '2.0L I4 Biturbo Diesel TDI', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 150, torque: 450, weight: 2320, seats: 7,
  fc: 7.9, fh: 6.3, fx: 10.5,
  acceleration: 10.0, topSpeed: 205, price: p(79990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW 2 SERIES ACTIVE TOURER — 2015: 218i, 220i (F45 new gen)
// ─────────────────────────────────────────────────────────────
specs[`BMW|2 Series Active Tourer|2015|218i`] = {
  engine: '1.5L I3 Turbo B38A15A', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 100, torque: 220, weight: 1395, seats: 5,
  fc: 5.9, fh: 4.7, fx: 7.9,
  acceleration: 9.7, topSpeed: 205, price: p(44900), aspiration: 'Turbo'
}
specs[`BMW|2 Series Active Tourer|2015|220i`] = {
  engine: '2.0L I4 Turbo B48A20A', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 141, torque: 280, weight: 1450, seats: 5,
  fc: 6.4, fh: 5.1, fx: 8.6,
  acceleration: 7.1, topSpeed: 235, price: p(52900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ GLC — 2015: GLC200, GLC220d, GLC250, GLC300, GLC43 AMG, GLC63 S AMG
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|GLC|2015|GLC200`] = {
  engine: '2.0L I4 Turbo M274 de16', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 135, torque: 300, weight: 1740, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.5,
  acceleration: 7.4, topSpeed: 218, price: p(67900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2015|GLC220d`] = {
  engine: '2.0L I4 Turbo Diesel OM651', fuelType: 'diesel', displacement: 2143,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 125, torque: 400, weight: 1755, seats: 5,
  fc: 5.6, fh: 4.5, fx: 7.5,
  acceleration: 7.5, topSpeed: 212, price: p(69900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2015|GLC250`] = {
  engine: '2.0L I4 Turbo M274', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 155, torque: 370, weight: 1760, seats: 5,
  fc: 7.8, fh: 6.2, fx: 10.4,
  acceleration: 6.5, topSpeed: 235, price: p(77900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2015|GLC300`] = {
  engine: '2.0L I4 Turbo M274', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto 9G-Tronic',
  power: 180, torque: 370, weight: 1775, seats: 5,
  fc: 7.9, fh: 6.3, fx: 10.5,
  acceleration: 5.8, topSpeed: 250, price: p(87900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2015|GLC43 AMG`] = {
  engine: '3.0L V6 Biturbo M276 DE30', fuelType: 'petrol', displacement: 2996,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto AMG Speedshift',
  power: 270, torque: 520, weight: 1935, seats: 5,
  fc: 9.5, fh: 7.4, fx: 12.8,
  acceleration: 4.7, topSpeed: 250, price: p(119900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2015|GLC63 S AMG`] = {
  engine: '4.0L V8 Biturbo M177 DE40', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'AWD', transmission: '9-speed auto AMG Speedshift',
  power: 375, torque: 700, weight: 2030, seats: 5,
  fc: 11.9, fh: 8.9, fx: 16.1,
  acceleration: 3.8, topSpeed: 270, price: p(179900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement213.json', JSON.stringify(out, null, 2))
console.log(`supplement213.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
