'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MAZDA MX-30 — 2023 R-EV trims (Wankel rotary range extender)
// ─────────────────────────────────────────────────────────────
specs[`Mazda|MX-30|2023|R-EV`] = {
  engine: '0.83L Rotary + Electric', fuelType: 'PHEV', displacement: 830,
  cylinders: 1, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 125, torque: 260, weight: 1840, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 9.7, topSpeed: 155, price: p(52490), aspiration: 'NA'
}
specs[`Mazda|MX-30|2023|R-EV Astute`] = {
  engine: '0.83L Rotary + Electric', fuelType: 'PHEV', displacement: 830,
  cylinders: 1, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 125, torque: 260, weight: 1840, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 9.7, topSpeed: 155, price: p(57490), aspiration: 'NA'
}
specs[`Mazda|MX-30|2023|R-EV Evolve`] = {
  engine: '0.83L Rotary + Electric', fuelType: 'PHEV', displacement: 830,
  cylinders: 1, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 125, torque: 260, weight: 1840, seats: 5,
  fc: 1.5, fh: null, fx: null,
  acceleration: 9.7, topSpeed: 155, price: p(62490), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// NISSAN QASHQAI — 2023 e-Power trims
// ─────────────────────────────────────────────────────────────
specs[`Nissan|Qashqai|2023|ST e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 140, torque: 330, weight: 1665, seats: 5,
  fc: 6.3, fh: 5.2, fx: 8.1,
  acceleration: 7.5, topSpeed: 170, price: p(41990), aspiration: 'Turbo'
}
specs[`Nissan|Qashqai|2023|ST-L e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 140, torque: 330, weight: 1665, seats: 5,
  fc: 6.3, fh: 5.2, fx: 8.1,
  acceleration: 7.5, topSpeed: 170, price: p(44990), aspiration: 'Turbo'
}
specs[`Nissan|Qashqai|2023|Ti e-Power`] = {
  engine: '1.5L I3 VC-Turbo e-POWER', fuelType: 'hybrid', displacement: 1497,
  cylinders: 3, drivetrain: 'FWD', transmission: '1-speed auto',
  power: 140, torque: 330, weight: 1665, seats: 5,
  fc: 6.3, fh: 5.2, fx: 8.1,
  acceleration: 7.5, topSpeed: 170, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// VW AMAROK — 2023 new-gen (NF) trims: Style, Aventura, PanAmericana
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Amarok|2023|TDI500 Style`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 186, torque: 500, weight: 2400, seats: 5,
  fc: 8.5, fh: 7.0, fx: 11.2,
  acceleration: 8.0, topSpeed: 193, price: p(62990), aspiration: 'Turbo'
}
specs[`Volkswagen|Amarok|2023|TDI600 Aventura`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 225, torque: 600, weight: 2435, seats: 5,
  fc: 8.8, fh: 7.2, fx: 11.8,
  acceleration: 7.5, topSpeed: 200, price: p(79990), aspiration: 'Turbo'
}
specs[`Volkswagen|Amarok|2023|TDI600 PanAmericana`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 225, torque: 600, weight: 2435, seats: 5,
  fc: 8.8, fh: 7.2, fx: 11.8,
  acceleration: 7.5, topSpeed: 200, price: p(75990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// FORD EVEREST — 2023 Platinum trims (V6 TDI top-spec)
// ─────────────────────────────────────────────────────────────
specs[`Ford|Everest|2023|Platinum`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 184, torque: 600, weight: 2455, seats: 7,
  fc: 8.8, fh: 7.1, fx: 11.5,
  acceleration: 8.4, topSpeed: 200, price: p(89990), aspiration: 'Turbo'
}
specs[`Ford|Everest|2023|Platinum+`] = {
  engine: '3.0L V6 TDI', fuelType: 'diesel', displacement: 2993,
  cylinders: 6, drivetrain: 'AWD', transmission: '10-speed auto',
  power: 184, torque: 600, weight: 2460, seats: 7,
  fc: 8.8, fh: 7.1, fx: 11.5,
  acceleration: 8.4, topSpeed: 200, price: p(99990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA PRIUS — 2023 new-gen (Z90) trims: GX, GXL
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Prius|2023|GX`] = {
  engine: '2.0L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 1987,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 144, torque: 208, weight: 1430, seats: 5,
  fc: 4.3, fh: 3.6, fx: 5.5,
  acceleration: 7.5, topSpeed: 180, price: p(43990), aspiration: 'NA'
}
specs[`Toyota|Prius|2023|GXL`] = {
  engine: '2.0L I4 Atkinson Hybrid AWD', fuelType: 'hybrid', displacement: 1987,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 164, torque: 208, weight: 1480, seats: 5,
  fc: 4.5, fh: 3.8, fx: 5.7,
  acceleration: 7.2, topSpeed: 180, price: p(48990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA ALPHARD — 2023 new-gen Executive trims
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Alphard|2023|Executive`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 200, torque: 221, weight: 2250, seats: 7,
  fc: 5.5, fh: 4.6, fx: 7.0,
  acceleration: 7.0, topSpeed: 180, price: p(113990), aspiration: 'NA'
}
specs[`Toyota|Alphard|2023|Executive Lounge`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 200, torque: 221, weight: 2270, seats: 7,
  fc: 5.5, fh: 4.6, fx: 7.0,
  acceleration: 7.0, topSpeed: 180, price: p(128990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// VW POLO — 2023 new trim names: 70TSI Life, 85TSI Style
// ─────────────────────────────────────────────────────────────
specs[`Volkswagen|Polo|2023|70TSI Life`] = {
  engine: '1.0L I3 TSI', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 70, torque: 175, weight: 1165, seats: 5,
  fc: 5.3, fh: 4.2, fx: 7.1,
  acceleration: 11.0, topSpeed: 190, price: p(31490), aspiration: 'Turbo'
}
specs[`Volkswagen|Polo|2023|85TSI Style`] = {
  engine: '1.0L I3 TSI Evo', fuelType: 'petrol', displacement: 999,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 85, torque: 200, weight: 1170, seats: 5,
  fc: 5.3, fh: 4.2, fx: 7.1,
  acceleration: 9.8, topSpeed: 200, price: p(35990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW 7 SERIES — 2023 new-gen (G70) trims
// ─────────────────────────────────────────────────────────────
specs[`BMW|7 Series|2023|740i xDrive`] = {
  engine: '3.0L I6 Twin-Turbo', fuelType: 'petrol', displacement: 2998,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 280, torque: 520, weight: 2100, seats: 5,
  fc: 9.5, fh: 7.3, fx: 13.4,
  acceleration: 4.7, topSpeed: 250, price: p(249900), aspiration: 'Turbo'
}
specs[`BMW|7 Series|2023|760i xDrive`] = {
  engine: '4.4L V8 Twin-Turbo', fuelType: 'petrol', displacement: 4395,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 390, torque: 750, weight: 2175, seats: 5,
  fc: 12.8, fh: 9.8, fx: 17.9,
  acceleration: 4.0, topSpeed: 250, price: p(349900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// BMW M2 — 2023 G87 new-gen Coupe + F87 M2 CS
// ─────────────────────────────────────────────────────────────
specs[`BMW|M2|2023|Coupe`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2993,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed M-DCT',
  power: 338, torque: 550, weight: 1730, seats: 4,
  fc: 10.8, fh: 8.2, fx: 14.8,
  acceleration: 4.1, topSpeed: 285, price: p(129900), aspiration: 'Turbo'
}
specs[`BMW|M2|2023|CS`] = {
  engine: '3.0L I6 Twin-Turbo M TwinPower', fuelType: 'petrol', displacement: 2979,
  cylinders: 6, drivetrain: 'RWD', transmission: '7-speed DCT',
  power: 331, torque: 550, weight: 1505, seats: 4,
  fc: 10.8, fh: 8.2, fx: 14.8,
  acceleration: 3.7, topSpeed: 280, price: p(159900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement176.json', JSON.stringify(out, null, 2))
console.log(`supplement176.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
