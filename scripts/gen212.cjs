'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// FORD TERRITORY — 2015 (SZ Mk2): SR, TS, TX, Titanium
// ─────────────────────────────────────────────────────────────
specs[`Ford|Territory|2015|SZ Mk2 SR`] = {
  engine: '2.7L V6 Turbo Diesel TDCi', fuelType: 'diesel', displacement: 2720,
  cylinders: 6, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 145, torque: 440, weight: 2190, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 9.8, topSpeed: 195, price: p(37990), aspiration: 'Turbo'
}
specs[`Ford|Territory|2015|SZ Mk2 TS`] = {
  engine: '2.7L V6 Turbo Diesel TDCi', fuelType: 'diesel', displacement: 2720,
  cylinders: 6, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 145, torque: 440, weight: 2200, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 9.8, topSpeed: 195, price: p(44990), aspiration: 'Turbo'
}
specs[`Ford|Territory|2015|SZ Mk2 TX`] = {
  engine: '2.7L V6 Turbo Diesel TDCi', fuelType: 'diesel', displacement: 2720,
  cylinders: 6, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 145, torque: 440, weight: 2205, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 9.8, topSpeed: 195, price: p(48990), aspiration: 'Turbo'
}
specs[`Ford|Territory|2015|SZ Mk2 Titanium`] = {
  engine: '2.7L V6 Turbo Diesel TDCi', fuelType: 'diesel', displacement: 2720,
  cylinders: 6, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 145, torque: 440, weight: 2210, seats: 7,
  fc: 9.0, fh: 7.1, fx: 12.0,
  acceleration: 9.8, topSpeed: 195, price: p(54990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST — 2015 (UA): Ambiente, Titanium, Trend
// ─────────────────────────────────────────────────────────────
specs[`Ford|Everest|2015|UA Ambiente`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2148, seats: 7,
  fc: 9.7, fh: 7.6, fx: 12.9,
  acceleration: 11.0, topSpeed: 175, price: p(44990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2015|UA Titanium`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2170, seats: 7,
  fc: 9.7, fh: 7.6, fx: 12.9,
  acceleration: 10.8, topSpeed: 175, price: p(58990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2015|UA Trend`] = {
  engine: '3.2L I5 Turbo Diesel P4AT', fuelType: 'diesel', displacement: 3198,
  cylinders: 5, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 147, torque: 470, weight: 2155, seats: 7,
  fc: 9.7, fh: 7.6, fx: 12.9,
  acceleration: 10.8, topSpeed: 175, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// HSV — 2015: GTS GEN-F2, GTS 25th Anniversary, Clubsport R8, Maloo R8, GTSR
// ─────────────────────────────────────────────────────────────
specs[`HSV|GTS|2015|VF II GTS GEN-F2`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 430, torque: 671, weight: 1872, seats: 5,
  fc: 14.0, fh: 10.8, fx: 19.0,
  acceleration: 4.2, topSpeed: 290, price: p(139990), aspiration: 'Supercharged'
}
specs[`HSV|GTS|2015|VF II GTS GEN-F2 25th Anniversary`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 430, torque: 671, weight: 1875, seats: 5,
  fc: 14.0, fh: 10.8, fx: 19.0,
  acceleration: 4.2, topSpeed: 290, price: p(159990), aspiration: 'Supercharged'
}
specs[`HSV|Clubsport|2015|VF II Clubsport R8`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 430, torque: 671, weight: 1855, seats: 5,
  fc: 14.0, fh: 10.8, fx: 19.0,
  acceleration: 4.4, topSpeed: 290, price: p(82990), aspiration: 'Supercharged'
}
specs[`HSV|Maloo|2015|VF II Maloo R8`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 430, torque: 671, weight: 1875, seats: 2,
  fc: 14.0, fh: 10.8, fx: 19.0,
  acceleration: 4.5, topSpeed: 285, price: p(97990), aspiration: 'Supercharged'
}
specs[`HSV|GTSR|2015|VF II GTSR`] = {
  engine: '6.2L V8 SC LSA', fuelType: 'petrol', displacement: 6162,
  cylinders: 8, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 430, torque: 671, weight: 1880, seats: 5,
  fc: 14.0, fh: 10.8, fx: 19.0,
  acceleration: 4.3, topSpeed: 290, price: p(119990), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA FORTUNER — 2015: Crusade, GX, GXL (TGN gen)
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Fortuner|2015|Crusade`] = {
  engine: '2.7L I4 NA 2TR-FE', fuelType: 'petrol', displacement: 2694,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 122, torque: 245, weight: 1970, seats: 7,
  fc: 11.5, fh: 9.2, fx: 15.3,
  acceleration: 13.0, topSpeed: 178, price: p(53990), aspiration: 'NA'
}
specs[`Toyota|Fortuner|2015|GX`] = {
  engine: '2.7L I4 NA 2TR-FE', fuelType: 'petrol', displacement: 2694,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 122, torque: 245, weight: 1900, seats: 7,
  fc: 11.3, fh: 9.0, fx: 15.0,
  acceleration: 13.5, topSpeed: 178, price: p(38990), aspiration: 'NA'
}
specs[`Toyota|Fortuner|2015|GXL`] = {
  engine: '2.7L I4 NA 2TR-FE', fuelType: 'petrol', displacement: 2694,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 122, torque: 245, weight: 1950, seats: 7,
  fc: 11.5, fh: 9.2, fx: 15.3,
  acceleration: 13.0, topSpeed: 178, price: p(46990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA HILUX — 2015: Rogue (SR5+ special)
// ─────────────────────────────────────────────────────────────
specs[`Toyota|HiLux|2015|Rogue`] = {
  engine: '3.0L I4 Turbo Diesel 1KD-FTV', fuelType: 'diesel', displacement: 2982,
  cylinders: 4, drivetrain: 'AWD', transmission: '5-speed auto',
  power: 126, torque: 343, weight: 1980, seats: 5,
  fc: 9.5, fh: 7.5, fx: 12.8,
  acceleration: 11.5, topSpeed: 175, price: p(55990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA PRIUS C — 2015: Plus
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Prius C|2015|Prius C Plus`] = {
  engine: '1.5L I4 NA 1NZ-FXE + Electric HSD', fuelType: 'petrol', displacement: 1497,
  cylinders: 4, drivetrain: 'FWD', transmission: 'CVT e-CVT',
  power: 74, torque: 111, weight: 1090, seats: 5,
  fc: 3.9, fh: 3.2, fx: 4.8,
  acceleration: 11.5, topSpeed: 165, price: p(28990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MAZDA 2 — 2015: Genki (DJ gen)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|2|2015|Genki`] = {
  engine: '1.5L I4 NA P5-VP Skyactiv-G', fuelType: 'petrol', displacement: 1496,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 82, torque: 142, weight: 1005, seats: 5,
  fc: 5.7, fh: 4.6, fx: 7.5,
  acceleration: 10.5, topSpeed: 175, price: p(19990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MAZDA MX-5 — 2015: MX-5 (ND gen)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|MX-5|2015|MX-5`] = {
  engine: '2.0L I4 NA PE-VPS Skyactiv-G', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 118, torque: 200, weight: 1075, seats: 2,
  fc: 7.6, fh: 6.0, fx: 10.1,
  acceleration: 8.3, topSpeed: 214, price: p(34990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-3 — 2015: Akari, Maxx, sTouring (DJ new gen)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|CX-3|2015|Akari`] = {
  engine: '2.0L I4 NA PE Skyactiv-G', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto Skyactiv-Drive',
  power: 110, torque: 195, weight: 1369, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.5,
  acceleration: 10.2, topSpeed: 185, price: p(32990), aspiration: 'NA'
}
specs[`Mazda|CX-3|2015|Maxx`] = {
  engine: '2.0L I4 NA PE Skyactiv-G', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto Skyactiv-Drive',
  power: 110, torque: 195, weight: 1280, seats: 5,
  fc: 6.8, fh: 5.4, fx: 9.0,
  acceleration: 10.5, topSpeed: 185, price: p(23990), aspiration: 'NA'
}
specs[`Mazda|CX-3|2015|sTouring`] = {
  engine: '2.0L I4 NA PE Skyactiv-G', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed auto Skyactiv-Drive',
  power: 110, torque: 195, weight: 1356, seats: 5,
  fc: 7.2, fh: 5.7, fx: 9.5,
  acceleration: 10.2, topSpeed: 185, price: p(27990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement212.json', JSON.stringify(out, null, 2))
console.log(`supplement212.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
