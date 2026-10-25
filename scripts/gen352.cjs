'use strict';
// supplement352.json — 2026-10-25: 2024 (AU) Hyundai Ioniq 5 (NE.V4 MY24,
// pre-facelift; the NE.V5 MY25 N Line cars Carsales also files under 2024 are
// left to 2025) and Ioniq 5 N 2024 (NE N.V1). Replaces stale rows ("Active",
// "Techniq", "Ultimate"). Specs + price when new: Carsales MY24 variant pages
// (base price incl GST & LCT). Range = ADR, else WLTP. Tare-only / below-tare
// weights null; dual-motor torque null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, weight: null, engine: 'Single Motor Electric', drivetrain: 'RWD',
  accelClaimed: true, ...o });
const LR = { power: 168, torque: 350, battery: '77.4 kWh', range: 476, acceleration: 7.3 };
const AW = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 239, torque: null, battery: '77.4 kWh', range: 454, acceleration: 5.1 };

writeLineups(352, {
  'Hyundai|Ioniq 5|2024': {
    'Standard Range RWD': ev({ power: 125, torque: 350, battery: '58 kWh', range: 384, acceleration: 8.5, price: $(67500) }),
    'Long Range RWD': ev({ ...LR, range: 507, price: $(73500) }),
    'Dynamiq RWD': ev({ ...LR, price: $(78500) }),
    'Dynamiq AWD': ev({ ...AW, price: $(83000) }),
    'Epiq RWD': ev({ ...LR, price: $(82000) }),
    'Epiq AWD': ev({ ...AW, price: $(86500) }),
  },
  'Hyundai|Ioniq 5 N|2024': { 'N': { ...existing('Hyundai', 'Ioniq 5 N', 2026, 'N'), price: $(110383) } },
});
