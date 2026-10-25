'use strict';
// supplement364.json — 2026-10-25: Mazda CX-60 (KH) 2024, 2025, 2026 by
// engine + grade (G25 / G40e / D50e / P50e x Pure / Evolve / Touring / GT /
// Azami). Replaces stale rows ("GT SP", "PHEV GT", ~ prices). Specs: Carsales
// variant pages. Prices: 2024 + 2025 = Carsales price when new (base price incl
// GST & LCT); 2026 = CarsGuide MSRP (Carsales shows drive-away only).
// G40e / D50e are 48V mild hybrids (petrol / diesel). P50e PHEV: 241 kW
// system; system torque not listed -> null. 0-100 claimed where listed.
// 2025/26 D50e combined 5.0 (city/highway not listed) -> fc/fh null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { transmission: '8-speed automatic', seats: 5, cargo: 477, topSpeed: null, fuelTank: 58 };
const G25 = { ...B, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 138, torque: 250, drivetrain: 'RWD', fc: 9.3, fh: 6.4, fx: 7.5, acceleration: null, towing: 1800, weight: 1772 };
const G40 = { ...B, engine: '3.3L I6 Turbo Petrol Mild Hybrid', displacement: 3283, cylinders: 6, aspiration: 'Turbo',
  fuelType: 'petrol', power: 209, torque: 450, drivetrain: 'AWD', fc: 9.8, fh: 6.0, fx: 7.4, acceleration: 6.9, accelClaimed: true,
  towing: 2500 };
const D50 = { ...B, engine: '3.3L I6 Turbo Diesel Mild Hybrid', displacement: 3283, cylinders: 6, aspiration: 'Turbo',
  fuelType: 'diesel', power: 187, torque: 550, drivetrain: 'AWD', fc: 5.2, fh: 4.7, fx: 4.9, acceleration: 7.3, accelClaimed: true,
  towing: 2000 };
const D25 = { ...D50, fc: null, fh: null, fx: 5.0 };
const P50 = { ...B, engine: '2.5L I4 Petrol PHEV', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'plug-in hybrid', power: 241, torque: null, drivetrain: 'AWD', fc: null, fh: null, fx: 2.1, battery: '17.8 kWh',
  range: 76, acceleration: 5.8, accelClaimed: true, towing: 2500, fuelTank: 50 };
const G = ['Pure', 'Evolve', 'Touring', 'GT', 'Azami'];
// weights per grade (2025 Carsales; 2026 as 2025 except D50e GT 1998)
const W25 = { G40: [1930, 1930, 1930, 1949, 1958], D50: [1963, 1963, 1971, 1990, 1998], P50: [2111, 2118, 2111, 2139, 2139] };
const build = (p, w, D) => {
  const o = {};
  G.forEach((g, i) => { o[`G25 ${g}`] = p.G25?.[i] && { ...G25, price: $(p.G25[i]) }; });
  G.forEach((g, i) => { o[`G40e ${g}`] = p.G40[i] && { ...G40, weight: w.G40[i], price: $(p.G40[i]) }; });
  G.forEach((g, i) => { o[`D50e ${g}`] = p.D50[i] && { ...D, weight: w.D50[i], price: $(p.D50[i]) }; });
  G.forEach((g, i) => { o[`P50e ${g}`] = p.P50[i] && { ...P50, weight: w.P50[i], price: $(p.P50[i]) }; });
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v));
};

writeLineups(364, {
  // 2024: Evolve / GT / Azami only (no G25, Pure or Touring yet)
  'Mazda|CX-60|2024': build({ G40: [0, 60550, 0, 68550, 73750], D50: [0, 62550, 0, 70550, 75750], P50: [0, 73600, 0, 81600, 86800] },
    { G40: [0, 1921, 0, 1949, 1949], D50: [0, 1963, 0, 1990, 1990], P50: [0, 2111, 0, 2139, 2139] }, D50),
  'Mazda|CX-60|2025': build({ G25: [44240, 49240, 52240], G40: [50240, 55240, 58240, 68800, 68440],
    D50: [52240, 57240, 60240, 70800, 70440], P50: [63290, 68290, 71290, 81850, 81490] }, W25, D25),
  'Mazda|CX-60|2026': build({ G25: [45640, 50640, 53640], G40: [51640, 56640, 59640, 65640, 69840],
    D50: [51640, 56640, 59640, 65640, 69840], P50: [56640, 61640, 64640, 70640, 74840] },
  { ...W25, D50: [1963, 1963, 1971, 1998, 1998] }, D25),
});
