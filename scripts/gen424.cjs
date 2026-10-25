'use strict';
// supplement424.json — 2026-10-25: Audi SQ5 (FY) 2024 (MY24) + 2025 (MY25) —
// AU got the 3.0 V6 TDI only (251 kW / 700 Nm, 8-spd tiptronic). Replaces stale
// "SQ5" rows (petrol 260 kW, ~ price). The new-gen TFSI cars Carsales also files
// under 2025 are the 2026 rows. Specs + price when new: Carsales variant pages
// (base price incl GST & LCT). Tare-only weight null; cargo not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const TDI = { engine: '3.0L V6 Turbo Diesel', displacement: 2967, cylinders: 6, aspiration: 'Turbo + electric compressor',
  fuelType: 'diesel', drivetrain: 'AWD', transmission: '8-speed automatic', power: 251, torque: 700, fc: 8.7, fh: 6.0, fx: 7.0,
  acceleration: 5.1, topSpeed: null, weight: null, seats: 5, cargo: null, fuelTank: 70, towing: 2000, accelClaimed: true,
  price: $(124315) };

writeLineups(424, { 'Audi|SQ5|2024': { 'TDI': TDI }, 'Audi|SQ5|2025': { 'TDI': TDI } });
