'use strict';
// supplement365.json — 2026-10-25: Mazda CX-90 (KK) 2024, 2025, 2026 —
// G50e / D50e x Touring / GT / Azami. Replaces stale rows ("GT SP", ~ prices).
// Specs: Carsales variant pages. Prices: 2024 = Carsales price when new (base
// price incl GST & LCT); 2025 = Carsales, using the listing with a tare mass
// (the MY25 one — each 2025 badge has three listings with different prices);
// 2026 = CarsGuide MSRP (Carsales shows drive-away only). G50e / D50e are 48V
// mild hybrids. 0-100 not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { transmission: '8-speed automatic', seats: 7, cargo: 608, topSpeed: null, acceleration: null, fuelTank: 74, displacement: 3283,
  cylinders: 6, aspiration: 'Turbo', drivetrain: 'AWD' };
const G50 = { ...B, engine: '3.3L I6 Turbo Petrol Mild Hybrid', fuelType: 'petrol', power: 254, torque: 500, fc: 10.5, fh: 7.4, fx: 8.2,
  towing: 2500 };
const D50 = { ...B, engine: '3.3L I6 Turbo Diesel Mild Hybrid', fuelType: 'diesel', power: 187, torque: 550, fc: 5.7, fh: 5.3, fx: 5.4,
  towing: 2000 };
const G = ['Touring', 'GT', 'Azami'];
const build = (pg, pd, wg) => Object.fromEntries([
  ...G.map((g, i) => [`G50e ${g}`, { ...G50, weight: wg[i], price: $(pg[i]) }]),
  ...G.map((g, i) => [`D50e ${g}`, { ...D50, weight: [2211, 2241, 2241][i], price: $(pd[i]) }]),
]);

writeLineups(365, {
  'Mazda|CX-90|2024': build([74550, 85530, 94630], [76550, 85550, 93515], [2190, 2220, 2220]),
  'Mazda|CX-90|2025': build([68800, 78300, 86720], [71300, 80300, 89320], [2190, 2220, 2226]),
  'Mazda|CX-90|2026': build([66100, 75100, 82487], [66100, 75100, 82487], [2190, 2220, 2226]),
});
