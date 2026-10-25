'use strict';
// supplement404.json — 2026-10-25: Lexus RZ 2024 + 2025 (RZ450e Luxury /
// Sports Luxury, 230 kW, 71.4 kWh) and 2026 (updated RZ500e Luxury / Sports
// Luxury 280 kW, RZ550e F Sport 300 kW, RZ600e F Sport Performance 313 kW; the
// 500e/550e Carsales also files under 2025 belong to this update). Replaces
// stale rows ("RZ 300e", ~ prices). Specs: Carsales variant pages. Prices:
// 2024/25 = Carsales price when new (base price incl GST & LCT); 2026 = null
// (Carsales shows drive-away only / "not available"; CarsGuide page failed).
// Range ADR; dual-motor torque null; kerb below tare -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, engine: 'Dual Motor Electric', drivetrain: 'AWD', torque: null,
  accelClaimed: true, ...o });
const R450 = { power: 230, battery: '71.4 kWh', range: 470, acceleration: 5.3 };
const old = () => ({
  'RZ450e Luxury': ev({ ...R450, weight: null, price: $(121059) }),
  'RZ450e Sports Luxury': ev({ ...R450, weight: 2110, price: $(133059) }),
});

writeLineups(404, {
  'Lexus|RZ|2024': old(),
  'Lexus|RZ|2025': old(),
  'Lexus|RZ|2026': {
    'RZ500e Luxury': ev({ power: 280, battery: '74.7 kWh', range: 460, acceleration: 4.6, weight: 2095, price: null }),
    'RZ500e Sports Luxury': ev({ power: 280, battery: '74.7 kWh', range: 460, acceleration: 4.6, weight: null, price: null }),
    'RZ550e F Sport': ev({ power: 300, battery: '77 kWh', range: 437, acceleration: 4.4, weight: 2155, price: null }),
    'RZ600e F Sport Performance': ev({ power: 313, battery: '77 kWh', range: 420, acceleration: 4.4, weight: 2150, price: null }),
  },
});
