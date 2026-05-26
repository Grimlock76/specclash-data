'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// DACIA LOGAN & SANDERO — 2021 (MK3 gen): new 1.0 TCe variants
// ─────────────────────────────────────────────────────────────
specs[`Dacia|Logan|2021|1.0 TCe`] = {
  engine: '1.0L I3 Turbo TCe 90', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 67, torque: 160, weight: 1089, seats: 5,
  fc: 5.2, fh: 4.1, fx: 6.9,
  acceleration: 11.5, topSpeed: 181, price: p(14990), aspiration: 'Turbo'
}
specs[`Dacia|Sandero|2021|1.0 TCe`] = {
  engine: '1.0L I3 Turbo TCe 90', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 67, torque: 160, weight: 1049, seats: 5,
  fc: 5.2, fh: 4.1, fx: 6.9,
  acceleration: 11.8, topSpeed: 178, price: p(13990), aspiration: 'Turbo'
}
specs[`Dacia|Sandero|2021|Stepway TCe 90`] = {
  engine: '1.0L I3 Turbo TCe 90', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 67, torque: 160, weight: 1120, seats: 5,
  fc: 5.4, fh: 4.3, fx: 7.1,
  acceleration: 12.0, topSpeed: 175, price: p(18490), aspiration: 'Turbo'
}
specs[`Dacia|Sandero|2021|TCe 90`] = {
  engine: '1.0L I3 Turbo TCe 90', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '6-speed manual',
  power: 67, torque: 160, weight: 1059, seats: 5,
  fc: 5.2, fh: 4.1, fx: 6.9,
  acceleration: 11.6, topSpeed: 178, price: p(16490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// JEEP GRAND CHEROKEE — 2021 (WL): Trailhawk L (3-row off-road)
// ─────────────────────────────────────────────────────────────
specs[`Jeep|Grand Cherokee|2021|Trailhawk L`] = {
  engine: '3.6L V6 Pentastar NA', fuelType: 'petrol', displacement: 3604,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 209, torque: 353, weight: 2245, seats: 7,
  fc: 12.8, fh: 9.8, fx: 17.2,
  acceleration: 8.5, topSpeed: 195, price: p(99950), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DEFENDER — 2021: 90 V8 (5.0L Supercharged)
// ─────────────────────────────────────────────────────────────
specs[`Land Rover|Defender|2021|90 V8`] = {
  engine: '5.0L V8 Supercharged', fuelType: 'petrol', displacement: 4999,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 386, torque: 625, weight: 2185, seats: 5,
  fc: 15.6, fh: 11.4, fx: 21.2,
  acceleration: 5.0, topSpeed: 240, price: p(269900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ AMG GT — 2021: Black Series (4.0L V8, 537kW)
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|AMG GT|2021|AMG GT Black Series`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT AMG',
  power: 537, torque: 800, weight: 1625, seats: 2,
  fc: 13.0, fh: 9.5, fx: 18.0,
  acceleration: 3.2, topSpeed: 325, price: p(749900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ C-CLASS — 2021 (W205 final): C63 S AMG
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|C-Class|2021|C63 S AMG`] = {
  engine: '4.0L V8 Biturbo AMG', fuelType: 'petrol', displacement: 3982,
  cylinders: 8, drivetrain: 'RWD', transmission: '9-speed MCT AMG',
  power: 375, torque: 700, weight: 1790, seats: 5,
  fc: 9.3, fh: 7.1, fx: 12.7,
  acceleration: 3.9, topSpeed: 290, price: p(149900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ CLS — 2021 (C257): CLS 450 MHEV
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|CLS|2021|CLS 450`] = {
  engine: '3.0L I6 Turbo MHEV', fuelType: 'petrol', displacement: 2999,
  cylinders: 6, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 270, torque: 500, weight: 1980, seats: 5,
  fc: 8.1, fh: 6.3, fx: 10.9,
  acceleration: 5.0, topSpeed: 250, price: p(139900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PAGANI HUAYRA — 2021: R (track-only, 6.0L V12 NA)
// ─────────────────────────────────────────────────────────────
specs[`Pagani|Huayra|2021|R`] = {
  engine: '6.0L V12 NA AMG-based', fuelType: 'petrol', displacement: 5980,
  cylinders: 12, drivetrain: 'RWD', transmission: '6-speed sequential',
  power: 634, torque: 750, weight: 1020, seats: 2,
  fc: null, fh: null, fx: null,
  acceleration: 2.5, topSpeed: 340, price: p(4500000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// RAM 1500 — 2021: TRX (6.2L Hellcat Supercharged)
// ─────────────────────────────────────────────────────────────
specs[`RAM|1500|2021|TRX`] = {
  engine: '6.2L V8 Supercharged Hellcat', fuelType: 'petrol', displacement: 6166,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed TorqueFlite',
  power: 523, torque: 881, weight: 2720, seats: 5,
  fc: 16.8, fh: 12.4, fx: 22.9,
  acceleration: 4.5, topSpeed: 190, price: p(175000), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// SSANGYONG KORANDO — 2021: e-Motion (Electric)
// ─────────────────────────────────────────────────────────────
specs[`SsangYong|Korando|2021|e-Motion`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '61.5 kWh', range: 339,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 140, torque: 360, weight: 1770, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.5, topSpeed: 150, price: p(59000), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// ROLLS-ROYCE GHOST (2ND GEN) — 2021: Standard, EWB, Black Badge
// ─────────────────────────────────────────────────────────────
specs[`Rolls-Royce|Ghost (2nd Gen)|2021|Standard`] = {
  engine: '6.75L V12 Biturbo MHEV', fuelType: 'petrol', displacement: 6749,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 420, torque: 850, weight: 2490, seats: 5,
  fc: 15.7, fh: 12.0, fx: 20.8,
  acceleration: 4.8, topSpeed: 250, price: p(499000), aspiration: 'Turbo'
}
specs[`Rolls-Royce|Ghost (2nd Gen)|2021|Extended Wheelbase`] = {
  engine: '6.75L V12 Biturbo MHEV', fuelType: 'petrol', displacement: 6749,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 420, torque: 850, weight: 2560, seats: 5,
  fc: 16.0, fh: 12.2, fx: 21.2,
  acceleration: 4.9, topSpeed: 250, price: p(619000), aspiration: 'Turbo'
}
specs[`Rolls-Royce|Ghost (2nd Gen)|2021|Black Badge`] = {
  engine: '6.75L V12 Biturbo MHEV', fuelType: 'petrol', displacement: 6749,
  cylinders: 12, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 441, torque: 900, weight: 2500, seats: 5,
  fc: 16.2, fh: 12.4, fx: 21.6,
  acceleration: 4.7, topSpeed: 250, price: p(565000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FERRARI 812 GTS — 2021: GTS (6.5L V12 NA, open top)
// ─────────────────────────────────────────────────────────────
specs[`Ferrari|812 GTS|2021|GTS`] = {
  engine: '6.5L V12 NA', fuelType: 'petrol', displacement: 6496,
  cylinders: 12, drivetrain: 'RWD', transmission: '7-speed DCT F1',
  power: 588, torque: 718, weight: 1630, seats: 2,
  fc: 15.4, fh: 11.8, fx: 20.3,
  acceleration: 3.0, topSpeed: 340, price: p(799000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI HURACAN — 2021: STO (Super Trofeo Omologata)
// ─────────────────────────────────────────────────────────────
specs[`Lamborghini|Huracan|2021|STO`] = {
  engine: '5.2L V10 NA', fuelType: 'petrol', displacement: 5204,
  cylinders: 10, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 470, torque: 565, weight: 1339, seats: 2,
  fc: 14.3, fh: 10.9, fx: 19.2,
  acceleration: 3.0, topSpeed: 310, price: p(599000), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// McLAREN 765LT — 2021: Coupe & Spider
// ─────────────────────────────────────────────────────────────
specs[`McLaren|765LT|2021|Coupe`] = {
  engine: '4.0L V8 Biturbo M840T', fuelType: 'petrol', displacement: 3994,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT SSG',
  power: 566, torque: 800, weight: 1229, seats: 2,
  fc: 13.0, fh: 9.8, fx: 17.5,
  acceleration: 2.8, topSpeed: 330, price: p(599000), aspiration: 'Turbo'
}
specs[`McLaren|765LT|2021|Spider`] = {
  engine: '4.0L V8 Biturbo M840T', fuelType: 'petrol', displacement: 3994,
  cylinders: 8, drivetrain: 'RWD', transmission: '7-speed DCT SSG',
  power: 566, torque: 800, weight: 1338, seats: 2,
  fc: 13.2, fh: 10.0, fx: 17.9,
  acceleration: 2.9, topSpeed: 330, price: p(679000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement191.json', JSON.stringify(out, null, 2))
console.log(`supplement191.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
