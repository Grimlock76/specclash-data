'use strict';
// supplement377.json — 2026-10-25: MG Cyberster 2024 (AWD only at launch),
// 2025 + 2026 (RWD 250 kW + AWD 375 kW) and MG MG5 sedan 2024-2026 (Vibe 1.5
// CVT / Essence 1.5T DCT; Vibe gone for 2026). Replaces stale rows ("Trophy";
// MG5 "Standard Range" / "Long Range" — that's the fleet-only MG5 EV wagon).
// Specs + price when new: Carsales variant pages (base price incl GST & LCT).
// MG5 2025: Carsales shows drive-away only, CarsGuide only ranges -> null;
// MG5 2026 = CarsGuide MSRP. Cyberster range: ADR (AWD), WLTP (RWD; no ADR).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const CY = { fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 2, cargo: null, battery: '77 kWh', accelClaimed: true };
const RWD = { ...CY, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 250, torque: 475, range: 507, acceleration: 5.2,
  topSpeed: 199, weight: 1885, price: $(99900) };
const AWD = { ...CY, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 375, torque: null, range: 443, acceleration: 3.2,
  topSpeed: 208, weight: 1985, price: $(115000) };
const M5 = { cylinders: 4, fuelType: 'petrol', drivetrain: 'FWD', seats: 5, cargo: 401, fuelTank: 50, topSpeed: null,
  acceleration: null };
const VIBE = { ...M5, engine: '1.5L I4 Petrol', displacement: 1498, aspiration: 'Naturally Aspirated', power: 84, torque: 150,
  transmission: 'CVT', fc: 8.9, fh: 5.3, fx: 6.6, weight: 1260 };
const ESS = { ...M5, engine: '1.5L I4 Turbo Petrol', displacement: 1490, aspiration: 'Turbo', power: 119, torque: 250,
  transmission: '7-speed dual-clutch', fc: 8.9, fh: 5.0, fx: 6.4, weight: 1318 };

writeLineups(377, {
  'MG|Cyberster|2024': { 'AWD': AWD },
  'MG|Cyberster|2025': { 'RWD': RWD, 'AWD': AWD },
  'MG|Cyberster|2026': { 'RWD': RWD, 'AWD': AWD },
  'MG|MG5|2024': { 'Vibe': { ...VIBE, price: $(24990) }, 'Essence': { ...ESS, price: $(28990) } },
  'MG|MG5|2025': { 'Vibe': { ...VIBE, price: null }, 'Essence': { ...ESS, price: null } },
  'MG|MG5|2026': { 'Essence': { ...ESS, price: $(31990) } },
});
