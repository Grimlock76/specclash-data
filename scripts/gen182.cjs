'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TESLA MODEL Y — 2022 new trims
// ─────────────────────────────────────────────────────────────
specs[`Tesla|Model Y|2022|RWD`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '57.5 kWh', range: 455,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 220, torque: 340, weight: 1845, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.9, topSpeed: 217, price: p(69900), aspiration: 'Electric'
}
specs[`Tesla|Model Y|2022|Rear-Wheel Drive`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '57.5 kWh', range: 455,
  drivetrain: 'RWD', transmission: '1-speed auto',
  power: 220, torque: 340, weight: 1845, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.9, topSpeed: 217, price: p(67400), aspiration: 'Electric'
}
specs[`Tesla|Model Y|2022|Long Range 7-Seat`] = {
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '75 kWh', range: 533,
  drivetrain: 'AWD', transmission: '1-speed auto',
  power: 258, torque: 493, weight: 2115, seats: 7,
  fc: null, fh: null, fx: null,
  acceleration: 5.0, topSpeed: 217, price: p(91900), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// CHEVROLET BOLT EV — 2022: 1LT hatch, EUV LT, EUV Premier
// ─────────────────────────────────────────────────────────────
specs[`Chevrolet|Bolt EV|2022|1LT`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '65 kWh', range: 417,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 360, weight: 1626, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 145, price: p(47990), aspiration: 'Electric'
}
specs[`Chevrolet|Bolt EV|2022|EUV LT`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '65 kWh', range: 397,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 360, weight: 1680, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 145, price: p(52990), aspiration: 'Electric'
}
specs[`Chevrolet|Bolt EV|2022|EUV Premier`] = {
  engine: 'Single Motor Electric', fuelType: 'electric', battery: '65 kWh', range: 397,
  drivetrain: 'FWD', transmission: '1-speed auto',
  power: 150, torque: 360, weight: 1685, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 6.5, topSpeed: 145, price: p(57990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// BMW M4 — 2022 Competition Convertible (G83)
// ─────────────────────────────────────────────────────────────
specs[`BMW|M4|2022|M4 Competition Convertible`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed M-DCT',
  power: 375, torque: 650, weight: 1850, seats: 4,
  fc: 10.8, fh: 8.3, fx: 14.8,
  acceleration: 3.9, topSpeed: 250, price: p(189900), aspiration: 'Turbo'
}
specs[`BMW|M4|2022|M4 Competition xDrive Convertible`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed M-DCT',
  power: 375, torque: 650, weight: 1940, seats: 4,
  fc: 10.9, fh: 8.4, fx: 14.9,
  acceleration: 3.7, topSpeed: 250, price: p(199900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ GLC — 2022 W206: GLC300e PHEV, GLC63 S E AMG
// ─────────────────────────────────────────────────────────────
specs[`Mercedes-Benz|GLC|2022|GLC300e`] = {
  engine: '2.0L I4 Turbo PHEV', fuelType: 'PHEV', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed auto',
  power: 230, torque: 550, weight: 2095, seats: 5,
  fc: 1.2, fh: null, fx: null,
  acceleration: 6.6, topSpeed: 210, price: p(119900), aspiration: 'Turbo'
}
specs[`Mercedes-Benz|GLC|2022|GLC63 S E AMG`] = {
  engine: '2.0L I4 Twin-Turbo PHEV AMG', fuelType: 'PHEV', displacement: 1999,
  cylinders: 4, drivetrain: 'AWD', transmission: '9-speed MCT',
  power: 500, torque: 1020, weight: 2285, seats: 5,
  fc: 2.6, fh: null, fx: null,
  acceleration: 3.5, topSpeed: 250, price: p(249900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PORSCHE CAYENNE — 2022: Turbo GT, Turbo S
// ─────────────────────────────────────────────────────────────
specs[`Porsche|Cayenne|2022|Turbo GT`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed PDK',
  power: 471, torque: 850, weight: 2195, seats: 4,
  fc: 14.7, fh: 11.1, fx: 20.4,
  acceleration: 3.3, topSpeed: 300, price: p(499000), aspiration: 'Turbo'
}
specs[`Porsche|Cayenne|2022|Turbo S`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed Tiptronic',
  power: 404, torque: 770, weight: 2250, seats: 5,
  fc: 14.5, fh: 10.9, fx: 20.2,
  acceleration: 3.9, topSpeed: 286, price: p(395000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MAZDA CX-3 — 2022: Maxx Sport, sTouring
// ─────────────────────────────────────────────────────────────
specs[`Mazda|CX-3|2022|Maxx Sport`] = {
  engine: '2.0L I4 NA', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 110, torque: 195, weight: 1110, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.2,
  acceleration: 10.0, topSpeed: 180, price: p(33990), aspiration: 'NA'
}
specs[`Mazda|CX-3|2022|sTouring`] = {
  engine: '2.0L I4 NA', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-speed auto',
  power: 110, torque: 195, weight: 1115, seats: 5,
  fc: 7.0, fh: 5.7, fx: 9.2,
  acceleration: 10.0, topSpeed: 180, price: p(36990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI ASX — 2022 MK2 (new-gen, Captur platform)
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|ASX|2022|MK2 ES`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1330,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 103, torque: 240, weight: 1310, seats: 5,
  fc: 6.2, fh: 5.0, fx: 8.0,
  acceleration: 9.5, topSpeed: 195, price: p(37490), aspiration: 'Turbo'
}
specs[`Mitsubishi|ASX|2022|MK2 LS`] = {
  engine: '1.3L I4 Turbo', fuelType: 'petrol', displacement: 1330,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 103, torque: 240, weight: 1320, seats: 5,
  fc: 6.2, fh: 5.0, fx: 8.0,
  acceleration: 9.5, topSpeed: 195, price: p(41490), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI ECLIPSE CROSS — 2022 PHEV trims
// ─────────────────────────────────────────────────────────────
specs[`Mitsubishi|Eclipse Cross|2022|PHEV ES`] = {
  engine: '2.4L I4 PHEV', fuelType: 'PHEV', displacement: 2359,
  cylinders: 4, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 165, torque: 350, weight: 1840, seats: 5,
  fc: 1.9, fh: null, fx: null,
  acceleration: 9.3, topSpeed: 200, price: p(47490), aspiration: 'NA'
}
specs[`Mitsubishi|Eclipse Cross|2022|PHEV Exceed`] = {
  engine: '2.4L I4 PHEV', fuelType: 'PHEV', displacement: 2359,
  cylinders: 4, drivetrain: 'AWD', transmission: '1-speed auto',
  power: 165, torque: 350, weight: 1850, seats: 5,
  fc: 1.9, fh: null, fx: null,
  acceleration: 9.3, topSpeed: 200, price: p(52490), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// LAMBORGHINI URUS — 2022: S, Performante
// ─────────────────────────────────────────────────────────────
specs[`Lamborghini|Urus|2022|S`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 478, torque: 850, weight: 2150, seats: 5,
  fc: 15.0, fh: 11.3, fx: 20.5,
  acceleration: 3.5, topSpeed: 305, price: p(480000), aspiration: 'Turbo'
}
specs[`Lamborghini|Urus|2022|Performante`] = {
  engine: '4.0L V8 Twin-Turbo', fuelType: 'petrol', displacement: 3996,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 493, torque: 850, weight: 2097, seats: 5,
  fc: 15.2, fh: 11.5, fx: 20.9,
  acceleration: 3.3, topSpeed: 306, price: p(540000), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement182.json', JSON.stringify(out, null, 2))
console.log(`supplement182.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
