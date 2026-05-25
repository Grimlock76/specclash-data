'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// TOYOTA PRADO 2026 — completing the lineup (AU)
// GR Sport Diesel, GR Sport Hybrid, Sahara Diesel, Sahara Hybrid
// ─────────────────────────────────────────────────────────────
specs['Toyota|Prado|2026|GR Sport Diesel'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: '4WD', transmission: '8-speed auto',
  power: 150, torque: 500, weight: 2215, seats: 7,
  fc: 8.8, fh: 6.9, fx: 12.4,
  acceleration: 9.8, topSpeed: 175, price: p(98990)
}
specs['Toyota|Prado|2026|GR Sport Hybrid'] = {
  engine: '2.4L I4 Turbo Hybrid', fuelType: 'petrol hybrid', displacement: 2393,
  cylinders: 4, drivetrain: '4WD', transmission: '8-speed auto',
  power: 204, torque: 630, weight: 2280, seats: 7,
  fc: 7.5, fh: 5.9, fx: 10.5,
  acceleration: 7.8, topSpeed: 180, price: p(107990)
}
specs['Toyota|Prado|2026|Sahara Diesel'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: '4WD', transmission: '8-speed auto',
  power: 150, torque: 500, weight: 2205, seats: 7,
  fc: 8.8, fh: 6.9, fx: 12.4,
  acceleration: 9.8, topSpeed: 175, price: p(96990)
}
specs['Toyota|Prado|2026|Sahara Hybrid'] = {
  engine: '2.4L I4 Turbo Hybrid', fuelType: 'petrol hybrid', displacement: 2393,
  cylinders: 4, drivetrain: '4WD', transmission: '8-speed auto',
  power: 204, torque: 630, weight: 2270, seats: 7,
  fc: 7.5, fh: 5.9, fx: 10.5,
  acceleration: 7.8, topSpeed: 180, price: p(105990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA YARIS CROSS 2026 — GX, GXL, ZR Hybrid AWD (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Yaris Cross|2026|GX Hybrid'] = {
  engine: '1.5L I3 Hybrid', fuelType: 'petrol hybrid', displacement: 1490,
  cylinders: 3, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 85, torque: 141, weight: 1175, seats: 5,
  fc: 4.2, fh: 3.5, fx: 5.3,
  acceleration: 11.2, topSpeed: 165, price: p(32990)
}
specs['Toyota|Yaris Cross|2026|GXL Hybrid'] = {
  engine: '1.5L I3 Hybrid', fuelType: 'petrol hybrid', displacement: 1490,
  cylinders: 3, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 85, torque: 141, weight: 1185, seats: 5,
  fc: 4.2, fh: 3.5, fx: 5.3,
  acceleration: 11.2, topSpeed: 165, price: p(35490)
}
specs['Toyota|Yaris Cross|2026|ZR Hybrid AWD'] = {
  engine: '1.5L I3 Hybrid AWD', fuelType: 'petrol hybrid', displacement: 1490,
  cylinders: 3, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 120, torque: 185, weight: 1295, seats: 5,
  fc: 4.5, fh: 3.8, fx: 5.7,
  acceleration: 9.7, topSpeed: 170, price: p(41490)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA HIACE 2026 — Commuter Deluxe, Commuter GL, Van SWB (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|HiAce|2026|Commuter Deluxe'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 150, torque: 400, weight: 2470, seats: 12,
  fc: 11.1, fh: 8.9, fx: 14.8,
  acceleration: 14.0, topSpeed: 165, price: p(67990)
}
specs['Toyota|HiAce|2026|Commuter GL'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 150, torque: 400, weight: 2445, seats: 12,
  fc: 11.1, fh: 8.9, fx: 14.8,
  acceleration: 14.0, topSpeed: 165, price: p(63990)
}
specs['Toyota|HiAce|2026|Van SWB Diesel'] = {
  engine: '2.8L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2755,
  cylinders: 4, drivetrain: 'RWD', transmission: '6-speed auto',
  power: 130, torque: 300, weight: 2090, seats: 3,
  fc: 8.8, fh: 7.0, fx: 12.3,
  acceleration: 13.0, topSpeed: 165, price: p(52990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA COROLLA CROSS 2026 — GX, GXL, ZR Hybrid AWD (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|Corolla Cross|2026|GX Hybrid'] = {
  engine: '1.8L I4 Hybrid', fuelType: 'petrol hybrid', displacement: 1797,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 90, torque: 163, weight: 1405, seats: 5,
  fc: 4.5, fh: 3.7, fx: 5.7,
  acceleration: 11.2, topSpeed: 170, price: p(36990)
}
specs['Toyota|Corolla Cross|2026|GXL Hybrid'] = {
  engine: '1.8L I4 Hybrid', fuelType: 'petrol hybrid', displacement: 1797,
  cylinders: 4, drivetrain: 'FWD', transmission: 'e-CVT',
  power: 90, torque: 163, weight: 1415, seats: 5,
  fc: 4.5, fh: 3.7, fx: 5.7,
  acceleration: 11.2, topSpeed: 170, price: p(40990)
}
specs['Toyota|Corolla Cross|2026|ZR Hybrid AWD'] = {
  engine: '1.8L I4 Hybrid AWD', fuelType: 'petrol hybrid', displacement: 1797,
  cylinders: 4, drivetrain: 'AWD', transmission: 'e-CVT',
  power: 107, torque: 163, weight: 1530, seats: 5,
  fc: 4.8, fh: 4.0, fx: 6.1,
  acceleration: 9.5, topSpeed: 170, price: p(44990)
}

// ─────────────────────────────────────────────────────────────
// TOYOTA LANDCRUISER 2026 — GR Sport (AU)
// ─────────────────────────────────────────────────────────────
specs['Toyota|LandCruiser|2026|GR Sport'] = {
  engine: '3.3L V6 Biturbo Diesel', fuelType: 'diesel', displacement: 3346,
  cylinders: 6, drivetrain: '4WD', transmission: '10-speed auto',
  power: 227, torque: 700, weight: 2475, seats: 5,
  fc: 9.4, fh: 7.4, fx: 13.2,
  acceleration: 6.7, topSpeed: 210, price: p(159990)
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI OUTLANDER 2026 — PHEV ES, PHEV LS, PHEV Exceed (AU)
// ─────────────────────────────────────────────────────────────
specs['Mitsubishi|Outlander|2026|PHEV ES'] = {
  engine: '2.4L PHEV Twin Motor AWD', fuelType: 'PHEV', displacement: 2360,
  cylinders: 4, drivetrain: 'AWD', transmission: '1sp auto',
  power: 177, torque: 360, weight: 2045, seats: 5,
  fc: 5.2, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 200, price: p(53490)
}
specs['Mitsubishi|Outlander|2026|PHEV LS'] = {
  engine: '2.4L PHEV Twin Motor AWD', fuelType: 'PHEV', displacement: 2360,
  cylinders: 4, drivetrain: 'AWD', transmission: '1sp auto',
  power: 177, torque: 360, weight: 2060, seats: 7,
  fc: 5.2, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 200, price: p(58490)
}
specs['Mitsubishi|Outlander|2026|PHEV Exceed'] = {
  engine: '2.4L PHEV Twin Motor AWD', fuelType: 'PHEV', displacement: 2360,
  cylinders: 4, drivetrain: 'AWD', transmission: '1sp auto',
  power: 177, torque: 360, weight: 2070, seats: 7,
  fc: 5.2, fh: null, fx: null,
  acceleration: 6.7, topSpeed: 200, price: p(63490)
}

// ─────────────────────────────────────────────────────────────
// MITSUBISHI TRITON 2026 — GLX+, Titan (AU)
// ─────────────────────────────────────────────────────────────
specs['Mitsubishi|Triton|2026|GLX+'] = {
  engine: '2.4L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2442,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed auto',
  power: 150, torque: 400, weight: 1965, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.7,
  acceleration: 9.8, topSpeed: 175, price: p(55490)
}
specs['Mitsubishi|Triton|2026|Titan'] = {
  engine: '2.4L I4 Turbo Diesel', fuelType: 'diesel', displacement: 2442,
  cylinders: 4, drivetrain: '4WD', transmission: '6-speed auto',
  power: 150, torque: 400, weight: 1980, seats: 5,
  fc: 8.3, fh: 6.5, fx: 11.7,
  acceleration: 9.8, topSpeed: 175, price: p(58490)
}

// ─────────────────────────────────────────────────────────────
// SUBARU OUTBACK 2026 — Wilderness (AU)
// ─────────────────────────────────────────────────────────────
specs['Subaru|Outback|2026|Wilderness'] = {
  engine: '2.4L DOHC Turbo', fuelType: 'petrol', displacement: 2387,
  cylinders: 4, drivetrain: 'AWD', transmission: 'Lineartronic CVT',
  power: 194, torque: 376, weight: 1730, seats: 5,
  fc: 10.8, fh: 8.4, fx: 14.8,
  acceleration: 6.1, topSpeed: 220, price: p(61490)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement145.json', JSON.stringify(out, null, 2))
console.log(`supplement145.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
