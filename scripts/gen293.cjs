'use strict';
// supplement293.json — 2026-10-23: 2025 (AU) Isuzu D-MAX (crew-cab 4x4 utes)
// and MU-X, 3.0 turbo-diesel auto 4x4. Specs + price when new: Carsales 2025
// variant pages (LS-M / LS-U utes are MY24 stock with the older ADR fuel
// figures; the rest MY25.5).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const I = { engine: '3.0L I4 Turbo Diesel (4JJ3-TCX)', displacement: 2999, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 140, torque: 450, transmission: '6-speed automatic', drivetrain: '4WD', acceleration: null, topSpeed: null, cargo: null,
  towing: 3500 };
const DM = { ...I, seats: 5, fuelTank: 76, fc: 8.3, fh: 6.5, fx: 7.1 };
const DM24 = { ...DM, fc: 9.8, fh: 6.9, fx: 8.0 };
const XR = { ...DM, fc: 8.4, fh: 7.4, fx: 7.8 };
const MU = { ...I, seats: 7, fuelTank: 80, fc: 8.6, fh: 7.1, fx: 7.6 };

writeLineups(293, {
  'Isuzu|D-MAX|2025': {
    'SX': { ...DM, weight: 2035, payload: 1065, groundClearance: 235, price: $(54200) },
    'LS-M': { ...DM24, weight: 2030, payload: 1070, groundClearance: 235, price: $(55800) },
    'X-Rider': { ...XR, weight: 2060, payload: 1040, groundClearance: 235, price: $(61500) },
    'LS-U': { ...DM24, weight: 2105, payload: 995, groundClearance: 240, price: $(62500) },
    'LS-U+': { ...DM, weight: 2105, payload: 995, groundClearance: 240, price: $(68000) },
    'X-Terrain': { ...XR, weight: 2170, payload: 930, groundClearance: 240, price: $(73000) },
    'Blade': { ...DM, weight: 2199, payload: 901, groundClearance: 244, price: $(80900) },
  },
  'Isuzu|MU-X|2025': {
    'LS-M': { ...MU, weight: 2140, payload: 660, groundClearance: 230, price: $(57900) },
    'LS-U': { ...MU, weight: 2160, payload: 640, price: $(64900) },
    'LS-T': { ...MU, weight: 2185, payload: 615, price: $(73400) },
    'X-Terrain': { ...MU, weight: 2195, payload: 605, groundClearance: 235, price: $(77100) },
  },
});
