'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TOYOTA LAND CRUISER 70 — 2025 gap (new 2.8L gen, no 2025 in DB)
// New gen launched AU late 2024; GX/GXL/WorkMate same as 2026 ~$2k cheaper
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Land Cruiser 70|2025|WorkMate`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2045, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.0, topSpeed: 175, price: p(65990), aspiration: 'Turbo'
}
specs[`Toyota|Land Cruiser 70|2025|GX`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2065, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.0, topSpeed: 175, price: p(72990), aspiration: 'Turbo'
}
specs[`Toyota|Land Cruiser 70|2025|GXL`] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'AWD', transmission: '6-speed manual',
  power: 150, torque: 500, weight: 2080, seats: 5,
  fc: 9.7, fh: 7.7, fx: 13.0,
  acceleration: 12.2, topSpeed: 175, price: p(78990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// TOYOTA VELLFIRE — 2025 gap (new gen, no 2025 in DB)
// New gen launched 2024; 2025 ~$4k cheaper than 2026
// ─────────────────────────────────────────────────────────────
specs[`Toyota|Vellfire|2025|Executive`] = {
  engine: '2.5L I4 Hybrid Atkinson', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 134, torque: 221, weight: 2160, seats: 7,
  fc: 7.0, fh: 5.6, fx: 10.0,
  acceleration: 9.5, topSpeed: 180, price: p(145990), aspiration: 'NA'
}
specs[`Toyota|Vellfire|2025|Executive Lounge`] = {
  engine: '2.5L I4 Hybrid Atkinson', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'E-Four AWD', transmission: 'e-CVT',
  power: 134, torque: 221, weight: 2195, seats: 7,
  fc: 7.3, fh: 5.8, fx: 10.4,
  acceleration: 9.7, topSpeed: 180, price: p(163990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// POLESTAR 5 — 2025 gap (no 2025 in DB; launched 2024-25)
// Standard: 400 kW, Performance: 500 kW; 100 kWh; ~$5k cheaper than 2026
// ─────────────────────────────────────────────────────────────
specs[`Polestar|5|2025|Standard`] = {
  engine: 'Electric Dual Motor', fuelType: 'electric', battery: '100 kWh', range: 600,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 400, torque: 850, weight: 2400, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.8, topSpeed: 250, price: p(144990), aspiration: 'Electric'
}
specs[`Polestar|5|2025|Performance`] = {
  engine: 'Electric Dual Motor', fuelType: 'electric', battery: '100 kWh', range: 560,
  drivetrain: 'AWD', transmission: '1sp auto',
  power: 500, torque: 1000, weight: 2450, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.2, topSpeed: 250, price: p(174990), aspiration: 'Electric'
}

// ─────────────────────────────────────────────────────────────
// BMW X2 — 2025 trim gap: xDrive20i
// ─────────────────────────────────────────────────────────────
specs[`BMW|X2|2025|xDrive20i`] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 170, torque: 300, weight: 1770, seats: 5,
  fc: 7.7, fh: 6.0, fx: 10.9,
  acceleration: 6.8, topSpeed: 235, price: p(61900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// AUDI — 2025 trim gaps: A7, A8, Q2, A4 allroad
// ─────────────────────────────────────────────────────────────
specs[`Audi|A7|2025|50 TFSI e quattro`] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 340, torque: 670, weight: 2175, seats: 5,
  fc: 1.8, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 250, price: p(154900), aspiration: 'Turbo'
}
specs[`Audi|A8|2025|60 TFSI e quattro L`] = {
  engine: '3.0 TFSI V6 PHEV', fuelType: 'PHEV', displacement: 2995,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 340, torque: 700, weight: 2350, seats: 5,
  fc: 2.0, fh: null, fx: null,
  acceleration: 4.1, topSpeed: 250, price: p(284900), aspiration: 'Turbo'
}
specs[`Audi|Q2|2025|40 TFSI quattro`] = {
  engine: '2.0 TFSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed S-tronic',
  power: 140, torque: 320, weight: 1445, seats: 5,
  fc: 7.8, fh: 5.9, fx: 10.8,
  acceleration: 7.1, topSpeed: 224, price: p(62900), aspiration: 'Turbo'
}
specs[`Audi|A4 allroad|2025|50 TDI quattro`] = {
  engine: '3.0 TDI V6', fuelType: 'diesel', displacement: 2967,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed tiptronic',
  power: 210, torque: 620, weight: 1750, seats: 5,
  fc: 6.8, fh: 5.2, fx: 9.5,
  acceleration: 4.8, topSpeed: 250, price: p(106900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// SKODA — 2025 trim gaps: Octavia Ambition, Kodiaq Sportline + Style
// ─────────────────────────────────────────────────────────────
specs[`Skoda|Octavia|2025|Ambition`] = {
  engine: '1.5 TSI', fuelType: 'petrol', displacement: 1498,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-speed DSG',
  power: 110, torque: 250, weight: 1325, seats: 5,
  fc: 6.3, fh: 4.8, fx: 8.8,
  acceleration: 8.7, topSpeed: 213, price: p(36990), aspiration: 'Turbo'
}
specs[`Skoda|Kodiaq|2025|Style`] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1800, seats: 7,
  fc: 8.4, fh: 6.5, fx: 11.8,
  acceleration: 8.2, topSpeed: 210, price: p(50990), aspiration: 'Turbo'
}
specs[`Skoda|Kodiaq|2025|Sportline`] = {
  engine: '2.0 TSI', fuelType: 'petrol', displacement: 1984,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DSG',
  power: 142, torque: 320, weight: 1815, seats: 7,
  fc: 8.5, fh: 6.5, fx: 12.0,
  acceleration: 8.0, topSpeed: 210, price: p(56990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// LEXUS RX — 2025 trim gap: RX 350h (base hybrid, FWD)
// ─────────────────────────────────────────────────────────────
specs[`Lexus|RX|2025|RX 350h`] = {
  engine: '2.5L I4 Atkinson Hybrid', fuelType: 'hybrid', displacement: 2487,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 179, torque: 221, weight: 1920, seats: 5,
  fc: 5.8, fh: 4.7, fx: 7.8,
  acceleration: 7.9, topSpeed: 180, price: p(83990), aspiration: 'NA'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 308 — 2025 trim gaps: Allure, GT
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|308|2025|Allure`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1250, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.0, topSpeed: 188, price: p(41990), aspiration: 'Turbo'
}
specs[`Peugeot|308|2025|GT`] = {
  engine: '1.6 PureTech Turbo', fuelType: 'petrol', displacement: 1598,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 165, torque: 260, weight: 1290, seats: 5,
  fc: 7.2, fh: 5.6, fx: 10.2,
  acceleration: 7.8, topSpeed: 217, price: p(51990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// PEUGEOT 2008 — 2025 trim gaps: Allure, GT
// ─────────────────────────────────────────────────────────────
specs[`Peugeot|2008|2025|Allure`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1230, seats: 5,
  fc: 6.1, fh: 4.7, fx: 8.7,
  acceleration: 11.5, topSpeed: 187, price: p(36990), aspiration: 'Turbo'
}
specs[`Peugeot|2008|2025|GT`] = {
  engine: '1.2 PureTech Turbo', fuelType: 'petrol', displacement: 1199,
  cylinders: 3, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 96, torque: 230, weight: 1245, seats: 5,
  fc: 6.2, fh: 4.8, fx: 8.8,
  acceleration: 11.2, topSpeed: 190, price: p(41990), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// MINI COUNTRYMAN — 2025 trim gaps: Cooper (FWD), Cooper S ALL4 (AWD)
// ─────────────────────────────────────────────────────────────
specs[`Mini|Countryman|2025|Cooper`] = {
  engine: '1.5L I3 TwinPower Turbo', fuelType: 'petrol', displacement: 1499,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 115, torque: 230, weight: 1705, seats: 5,
  fc: 6.3, fh: 4.9, fx: 8.9,
  acceleration: 8.9, topSpeed: 199, price: p(55900), aspiration: 'Turbo'
}
specs[`Mini|Countryman|2025|Cooper S ALL4`] = {
  engine: '2.0L I4 TwinPower Turbo', fuelType: 'petrol', displacement: 1998,
  cylinders: 4, drivetrain: 'AWD', transmission: '7-speed DCT',
  power: 170, torque: 300, weight: 1840, seats: 5,
  fc: 7.2, fh: 5.6, fx: 10.2,
  acceleration: 6.4, topSpeed: 228, price: p(64900), aspiration: 'Turbo'
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement170.json', JSON.stringify(out, null, 2))
console.log(`supplement170.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
