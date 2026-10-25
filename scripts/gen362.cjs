'use strict';
// supplement362.json — 2026-10-25: Kia Niro (SG2) 2024, 2025, 2026 — HEV S,
// HEV GT-Line, EV S, EV GT-Line. Replaces stale rows ("PHEV Sport", "Sport
// Hybrid", ~ prices; no PHEV in AU). Specs: Carsales MY24/MY25 variant pages.
// Prices: 2024 + 2025 HEV = Carsales price when new (base price incl GST &
// LCT); 2025 EV = null (Carsales doesn't list it, CarsGuide has used ranges
// only); 2026 = CarsGuide MSRP (Carsales page has no data). HEV power = 104 kW
// system; system torque not stated -> null. EV range WLTP (no ADR). Tare-only
// weights null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const HEV = { engine: '1.6L I4 Petrol Hybrid', displacement: 1580, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 104, torque: null, transmission: '6-speed dual-clutch', drivetrain: 'FWD', fc: 4.0, fh: 4.0, fx: 4.0, seats: 5, cargo: 425,
  fuelTank: 42, towing: 1300, weight: null, topSpeed: null, acceleration: null };
const EV = { engine: 'Single Motor Electric', displacement: null, cylinders: null, aspiration: 'Electric', fuelType: 'electric',
  power: 150, torque: 255, transmission: '1-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null, seats: 5, cargo: 475,
  battery: '64.8 kWh', range: 460, towing: 750, weight: null, topSpeed: null, acceleration: 7.8, accelClaimed: true };
const line = (hs, hg, es, eg) => ({
  'HEV S': { ...HEV, price: $(hs) }, 'HEV GT-Line': { ...HEV, price: $(hg) },
  'EV S': { ...EV, price: es ? $(es) : null }, 'EV GT-Line': { ...EV, price: eg ? $(eg) : null },
});

writeLineups(362, {
  'Kia|Niro|2024': line(44930, 50580, 66590, 72360),
  'Kia|Niro|2025': line(45000, 50650, null, null),
  'Kia|Niro|2026': line(45000, 50650, 66590, 72360),
});
