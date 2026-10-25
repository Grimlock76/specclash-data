'use strict';
// supplement371.json — 2026-10-25: Subaru Impreza hatch (G6) 2024, 2025, 2026
// — AU grades 2.0L / 2.0R / 2.0S (+ 2025 2.0S S-Edition). Replaces stale rows
// ("2.0i", "2.0i-L", "2.0i-S", ~ prices). Specs + price when new: Carsales
// variant pages (base price incl GST & LCT); 2026 prices = CarsGuide MSRP.
// Weights tare-only -> null (S-Edition kerb 1488).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const I = { engine: '2.0L H4 Petrol (Boxer)', displacement: 1995, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 115, torque: 196, transmission: 'CVT', drivetrain: 'AWD', fc: 9.7, fh: 6.2, fx: 7.5, seats: 5, cargo: 291, fuelTank: 50,
  weight: null, topSpeed: null, acceleration: null };
const line = p => ({ '2.0L': { ...I, price: $(p[0]) }, '2.0R': { ...I, price: $(p[1]) }, '2.0S': { ...I, price: $(p[2]) } });

writeLineups(371, {
  'Subaru|Impreza|2024': line([31490, 34990, 37990]),
  'Subaru|Impreza|2025': { ...line([31990, 35490, 38490]), '2.0S S-Edition': { ...I, weight: 1488, price: $(42490) } },
  'Subaru|Impreza|2026': line([32490, 35990, 38990]),
});
