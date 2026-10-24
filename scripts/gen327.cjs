'use strict';
// supplement327.json — 2026-10-25: Skoda Kodiaq (PS, 2nd gen) 2025 + 2026 and
// Karoq 2025. Replaces stale 1st-gen rows. Specs: Carsales 2025 variant pages
// (MY25/MY26 PS; Carsales files the MY26 cars under 2025). Prices: 2026 =
// CarsGuide 2026 MSRP; 2025 = Carsales base price where shown (PHEV), else
// drive-away only / CarsGuide used ranges -> null. All pages list tare only
// -> weight null. PHEV range WLTP (no ADR); PHEV system torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, cargo: null, weight: null };
const MH = { ...B, engine: '1.5L I4 Turbo Petrol (48V MHEV)', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 110, torque: 250, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 7.0, fh: 5.4, fx: 6.0, acceleration: 9.7,
  towing: 1800 };
const PH = { ...B, engine: '1.5L I4 Turbo PHEV', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
  power: 150, torque: null, transmission: '6-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, fx: 1.9, battery: '25.7 kWh',
  range: 110, acceleration: 8.4, seats: 5 };
const T140 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 140,
  torque: 320, transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 12.2, fh: 7.4, fx: 9.2, acceleration: 7.9, seats: 7,
  towing: 2300 };
const RS = { ...T140, power: 195, torque: 400, fc: 10.2, fh: 7.0, fx: 8.1, acceleration: 6.3 };
const kod = p => ({
  'Select mHEV 5-seat': { ...MH, seats: 5, price: p.m5 },
  'Select mHEV 7-seat': { ...MH, seats: 7, price: p.m7 },
  'Select PHEV': { ...PH, price: p.ph },
  '140TSI Select': { ...T140, price: p.s },
  '140TSI Sportline': { ...T140, price: p.sl },
  'RS': { ...RS, price: p.rs },
});
const KQ = { ...B, seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', price: null };
const K110 = { ...KQ, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, transmission: '8-speed automatic',
  drivetrain: 'FWD', fc: 8.1, fh: 5.7, fx: 6.6, acceleration: 9.2, towing: 1500 };

writeLineups(327, {
  'Skoda|Kodiaq|2025': kod({ m5: null, m7: null, ph: $(63490), s: null, sl: null, rs: null }),
  'Skoda|Kodiaq|2026': kod({ m5: $(49990), m7: $(51990), ph: $(63490), s: $(54990), sl: $(58990), rs: $(70590) }),
  'Skoda|Karoq|2025': {
    '110TSI Select': { ...K110 },
    '110TSI Sportline': { ...K110 },
    '140TSI Sportline': { ...KQ, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 140, torque: 320,
      transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.6, fh: 6.3, fx: 7.2, acceleration: 7.0, towing: 1900 },
  },
});
