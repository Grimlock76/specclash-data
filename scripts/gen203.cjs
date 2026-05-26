'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// LEXUS NX — 2018: NX 300h
// ─────────────────────────────────────────────────────────────
specs[`Lexus|NX|2018|NX 300h`] = {
  engine: '2.5L I4 Hybrid 2AR-FXE', fuelType: 'petrol', displacement: 2494,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT eCVT',
  power: 145, torque: 210, weight: 1905, seats: 5,
  fc: 5.8, fh: 5.1, fx: 6.8,
  acceleration: 8.9, topSpeed: 180, price: p(66990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LINCOLN NAVIGATOR — 2018: Black Label (4th gen)
// ─────────────────────────────────────────────────────────────
specs[`Lincoln|Navigator|2018|Black Label`] = {
  engine: '3.5L V6 Twin Turbo EcoBoost', fuelType: 'petrol', displacement: 3496,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 335, torque: 678, weight: 2871, seats: 8,
  fc: 15.7, fh: 12.3, fx: 20.8,
  acceleration: 5.6, topSpeed: 200, price: p(169900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LOTUS EVORA 400 — 2018: GT430
// ─────────────────────────────────────────────────────────────
specs[`Lotus|Evora 400|2018|GT430`] = {
  engine: '3.5L V6 SC Toyota 2GR-FE', fuelType: 'petrol', displacement: 3456,
  cylinders: 6, drivetrain: 'RWD', transmission: '6-speed manual',
  power: 320, torque: 440, weight: 1248, seats: 4,
  fc: 10.5, fh: 8.5, fx: 14.0,
  acceleration: 4.2, topSpeed: 305, price: p(249900), aspiration: 'Supercharged'
}

// ─────────────────────────────────────────────────────────────
// MAZDA 6 — 2018: GT
// ─────────────────────────────────────────────────────────────
specs[`Mazda|6|2018|GT`] = {
  engine: '2.5L I4 NA Skyactiv-G 25', fuelType: 'petrol', displacement: 2488,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 138, torque: 252, weight: 1535, seats: 5,
  fc: 7.8, fh: 6.2, fx: 10.4,
  acceleration: 8.5, topSpeed: 210, price: p(43990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ A-CLASS — 2018 (W177): A35 AMG, A45 S AMG
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|A-Class|2018|A35 AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT AMG',
  power: 225, torque: 400, weight: 1555, seats: 5,
  fc: 8.2, fh: 6.4, fx: 10.9,
  acceleration: 4.7, topSpeed: 250, price: p(77900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|A-Class|2018|A45 S AMG`] = {
  engine: '2.0L I4 Turbo AMG', fuelType: 'petrol', displacement: 1991,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed DCT AMG',
  power: 310, torque: 500, weight: 1625, seats: 5,
  fc: 9.0, fh: 7.0, fx: 12.0,
  acceleration: 3.9, topSpeed: 270, price: p(104900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MINI COUNTRYMAN — 2018: Cooper SE ALL4 PHEV
// ─────────────────────────────────────────────────────────────
specs[`Mini|Countryman|2018|Cooper SE ALL4 PHEV`] = {
  engine: '1.5L I3 Turbo B38 + Electric PHEV', fuelType: 'PHEV', displacement: 1499,
  cylinders: 3, drivetrain: 'AWD', transmission: '6-speed auto',
  power: 165, torque: 385, weight: 1820, seats: 5,
  fc: 2.3, fh: null, fx: null,
  acceleration: 7.7, topSpeed: 198, price: p(54990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 508 — 2018: SW (2nd gen)
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|508|2018|SW`] = {
  engine: '2.0L I4 Turbo Diesel BlueHDi 180', fuelType: 'diesel', displacement: 1997,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto EAT8',
  power: 133, torque: 400, weight: 1660, seats: 5,
  fc: 5.0, fh: 3.9, fx: 6.6,
  acceleration: 9.3, topSpeed: 230, price: p(57990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE 911 — 2018 (991.2): Carrera T, GT3 Touring, Turbo S
// ─────────────────────────────────────────────────────────────
specs[`Porsche|911|2018|Carrera T`] = {
  engine: '3.0L F6 Biturbo 991.2', fuelType: 'petrol', displacement: 2981,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 272, torque: 450, weight: 1395, seats: 4,
  fc: 9.5, fh: 7.4, fx: 12.9,
  acceleration: 4.2, topSpeed: 304, price: p(189900), aspiration: 'Turbo'
}
specs[`Porsche|911|2018|GT3 Touring`] = {
  engine: '4.0L F6 NA 991.2', fuelType: 'petrol', displacement: 3996,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed PDK',
  power: 368, torque: 460, weight: 1430, seats: 4,
  fc: 13.0, fh: 10.0, fx: 17.5,
  acceleration: 3.9, topSpeed: 320, price: p(449900), aspiration: 'NA'
}
specs[`Porsche|911|2018|Turbo S`] = {
  engine: '3.8L F6 Biturbo 991.2', fuelType: 'petrol', displacement: 3800,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed PDK',
  power: 427, torque: 750, weight: 1605, seats: 4,
  fc: 11.3, fh: 8.7, fx: 15.3,
  acceleration: 2.9, topSpeed: 330, price: p(499900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE PANAMERA — 2018: Turbo Sport Turismo
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Panamera|2018|Panamera Turbo Sport Turismo`] = {
  engine: '4.0L V8 Biturbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 404, torque: 770, weight: 2175, seats: 4,
  fc: 11.5, fh: 8.9, fx: 15.5,
  acceleration: 3.8, topSpeed: 305, price: p(379900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SSANGYONG REXTON — 2018 (2nd gen G4): ELX
// ─────────────────────────────────────────────────────────────
specs[`SsangYong|Rexton|2018|ELX`] = {
  engine: '2.2L I4 Turbo Diesel e-XDi220', fuelType: 'diesel', displacement: 2157,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed auto',
  power: 133, torque: 420, weight: 2180, seats: 7,
  fc: 8.7, fh: 6.8, fx: 11.5,
  acceleration: 11.0, topSpeed: 190, price: p(48990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SUBARU FORESTER — 2018 (SK gen new): 2.5i Premium, 2.5i-S Sport
// ─────────────────────────────────────────────────────────────
specs[`Subaru|Forester|2018|2.5i Premium`] = {
  engine: '2.5L H4 NA FB25', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 136, torque: 239, weight: 1580, seats: 5,
  fc: 8.3, fh: 6.6, fx: 11.0,
  acceleration: 9.5, topSpeed: 190, price: p(35990), aspiration: 'NA'
}
specs[`Subaru|Forester|2018|2.5i-S Sport`] = {
  engine: '2.5L H4 NA FB25', fuelType: 'petrol', displacement: 2498,
  cylinders: 4, drivetrain: 'AWD', transmission: 'CVT Lineartronic',
  power: 136, torque: 239, weight: 1595, seats: 5,
  fc: 8.3, fh: 6.6, fx: 11.0,
  acceleration: 9.5, topSpeed: 190, price: p(43990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN POLO — 2018 (AW gen): 70TSI Trendline, 85TSI Comfortline
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Polo|2018|70TSI Trendline`] = {
  engine: '1.0L I3 Turbo MPI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '5-speed manual',
  power: 70, torque: 175, weight: 1120, seats: 5,
  fc: 5.5, fh: 4.4, fx: 7.3,
  acceleration: 12.0, topSpeed: 180, price: p(18990), aspiration: 'Turbo'
}
specs[`Volkswagen|Polo|2018|85TSI Comfortline`] = {
  engine: '1.0L I3 Turbo TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 85, torque: 200, weight: 1175, seats: 5,
  fc: 5.2, fh: 4.1, fx: 6.9,
  acceleration: 10.9, topSpeed: 196, price: p(22990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement203.json', JSON.stringify(out, null, 2))
console.log(`supplement203.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
