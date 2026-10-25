'use strict';
// supplement359.json — 2026-10-25: Kia EV4 sedan 2025 + 2026 (CT MY26 — same
// variants and base prices under both years). Replaces stale rows ("Air",
// "GT-Line", ~ prices). Specs + price when new: Carsales variant pages (base
// price incl GST & LCT). Range ADR. Kerb = tare (kept). 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: 170, cargo: 490, engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150,
  torque: 283, battery: '81.4 kWh', range: 612, acceleration: 7.8, weight: 1912, towing: 1000, accelClaimed: true, ...o });
const line = () => ({
  'Air Standard Range': ev({ battery: '58.3 kWh', range: 456, acceleration: 7.4, weight: 1805, towing: 500, price: $(49990) }),
  'Earth Long Range': ev({ price: $(59190) }),
  'GT-Line Long Range': ev({ price: $(64690) }),
});

writeLineups(359, { 'Kia|EV4|2025': line(), 'Kia|EV4|2026': line() });
