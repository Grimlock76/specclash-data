'use strict';
// supplement392.json — 2026-10-25: Suzuki Vitara (LY Series II) 2024 (1.6 base
// manual / auto, Shadow, 1.4 Turbo 2WD / ALLGRIP, Turbo Shadow) and 2025 + 2026
// (1.4 Turbo Hybrid 2WD / ALLGRIP, 48V mild hybrid 81 kW / 235 Nm). Replaces
// stale rows ("GL", "GLX", "GLX Turbo", ~ prices). Specs: Carsales variant
// pages. Prices: 2024 = Carsales price when new (base price incl GST & LCT);
// 2025 = null (Carsales shows drive-away only, CarsGuide only ranges); 2026 =
// CarsGuide MSRP. Turbo Hybrid: combined fuel only (5.8) listed; ALLGRIP
// weight not checked -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { fuelType: 'petrol', seats: 5, cargo: 375, fuelTank: 47, topSpeed: null, acceleration: null, cylinders: 4 };
const P16 = { ...B, engine: '1.6L I4 Petrol', displacement: 1586, aspiration: 'Naturally Aspirated', power: 86, torque: 156,
  drivetrain: 'FWD' };
const P16A = { ...P16, transmission: '6-speed automatic', fc: 7.9, fh: 5.2, fx: 6.2, weight: 1180 };
const T14 = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1373, aspiration: 'Turbo', power: 103, torque: 220,
  transmission: '6-speed automatic', drivetrain: 'FWD', fc: 7.6, fh: 4.9, fx: 5.9, weight: 1185 };
const TH = { ...B, engine: '1.4L I4 Turbo Petrol Mild Hybrid', displacement: 1373, aspiration: 'Turbo', power: 81, torque: 235,
  transmission: '6-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: 5.8, cargo: 362, weight: 1195 };
const th = p => ({ 'Turbo Hybrid': { ...TH, price: p ? $(p[0]) : null },
  'Turbo Hybrid ALLGRIP': { ...TH, drivetrain: 'AWD', weight: null, fx: null, price: p ? $(p[1]) : null } });

const y24 = {
    'Vitara Manual': { ...P16, transmission: '5-speed manual', fc: 7.1, fh: 5.1, fx: 5.8, weight: 1165, price: $(29990) },
    'Vitara Auto': { ...P16A, price: $(31990) },
    'Shadow': { ...P16A, price: $(35990) },
    'Turbo': { ...T14, price: $(36490) },
    'Turbo ALLGRIP': { ...T14, drivetrain: 'AWD', fc: 7.9, fh: 5.2, fx: 6.2, weight: 1260, price: $(40490) },
    'Turbo Shadow': { ...T14, price: $(40990) },
};
const noPrice = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, { ...v, price: null }]));

writeLineups(392, {
  // 2023 (same LY Series II) leaned on the stale 2024 rows -> 2024 specs, price unchecked -> null
  'Suzuki|Vitara|2023': noPrice(y24),
  'Suzuki|Vitara|2024': y24,
  'Suzuki|Vitara|2025': th(null),
  'Suzuki|Vitara|2026': th([38990, 44990]),
});
