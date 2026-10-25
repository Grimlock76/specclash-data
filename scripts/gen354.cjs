'use strict';
// supplement354.json — 2026-10-25: Hyundai Inster 2025 + 2026 (AX.V1 MY25/26 —
// same lineup and prices both years) and Ioniq 9 2025 (Carsales lists only the
// MY26 Calligraphy 7-seat under 2025; specs as the 2026 row). Replaces stale
// rows ("Long Range", "Long Range Premium", "Premium", "AWD Performance").
// Specs + price when new: Carsales variant pages (base price incl GST & LCT).
// Inster 0-100 / top speed not listed -> null. Cross: kerb below tare -> weight
// null; its two MY25 listings disagree on range (360 vs 293 km) -> null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 4, topSpeed: null, acceleration: null, cargo: 280, engine: 'Single Motor Electric',
  drivetrain: 'FWD', torque: 147, ...o });
const line = () => ({
  'Standard Range': ev({ power: 71, battery: '42 kWh', range: 327, weight: 1393, price: $(39000) }),
  'Extended Range': ev({ power: 84.5, battery: '49 kWh', range: 360, weight: 1423, price: $(42500) }),
  'Cross': ev({ power: 84.5, battery: '49 kWh', range: null, weight: null, price: $(45000) }),
});

writeLineups(354, {
  'Hyundai|Inster|2025': line(),
  'Hyundai|Inster|2026': line(),
  'Hyundai|Ioniq 9|2025': { 'Calligraphy AWD 7 Seat': existing('Hyundai', 'Ioniq 9', 2026, 'Calligraphy AWD 7 Seat') },
});
