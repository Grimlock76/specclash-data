'use strict';
// supplement358.json — 2026-10-25: Kia EV3 2025 + 2026 (SV MY25/MY26 FWD —
// same specs and base prices both years). Replaces stale rows ("Standard
// Range", "Long Range", "GT-Line", ~ prices). Specs + price when new: Carsales
// variant pages (base price incl GST & LCT). Range ADR. Kerb below tare on
// every variant -> weight null. 0-100 claimed. The 2026 GT-Line AWD (195 kW)
// page returned a server error -> not added yet.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: 170, cargo: 460, weight: null, engine: 'Single Motor Electric', drivetrain: 'FWD',
  power: 150, torque: 283, battery: '81.4 kWh', towing: 750, accelClaimed: true, ...o });
const line = () => ({
  'Air Standard Range': ev({ battery: '58.3 kWh', range: 436, acceleration: 7.5, towing: 500, price: $(47600) }),
  'Air Long Range': ev({ range: 604, acceleration: 7.7, price: $(53315) }),
  'Earth Long Range': ev({ range: 563, acceleration: 7.9, price: $(58600) }),
  'GT-Line Long Range': ev({ range: 563, acceleration: 7.9, price: $(63950) }),
});

writeLineups(358, { 'Kia|EV3|2025': line(), 'Kia|EV3|2026': line() });
