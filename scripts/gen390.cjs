'use strict';
// supplement390.json — 2026-10-25: Suzuki Swift 2024 (run-out AZ Series II: GL,
// GL Plus, GL Shadow, GLX Turbo (+ Shadow), Sport; + the new AZ/UZ Hybrid
// range), 2025 + 2026 (Hybrid manual/auto, Hybrid Plus, Hybrid GLX). Replaces
// stale rows ("GLX", ~ prices). Specs + price when new: Carsales variant pages
// (base price incl GST & LCT). Kerb below tare -> null (GL auto). The Hybrid
// is a 12V mild hybrid: 61 kW / 112 Nm engine output.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { fuelType: 'petrol', drivetrain: 'FWD', seats: 5, fuelTank: 37, topSpeed: null, acceleration: null };
const GL = { ...B, engine: '1.2L I4 Petrol', displacement: 1242, cylinders: 4, aspiration: 'Naturally Aspirated', power: 66, torque: 120,
  cargo: 242 };
const GLA = { ...GL, transmission: 'CVT', fc: 5.8, fh: 4.2, fx: 4.8, weight: null };
const GLM = { ...GL, transmission: '5-speed manual', fc: 5.8, fh: 3.9, fx: 4.6, weight: 870 };
const GLXT = { ...B, engine: '1.0L I3 Turbo Petrol', displacement: 998, cylinders: 3, aspiration: 'Turbo', power: 82, torque: 160,
  transmission: '6-speed automatic', fc: 6.6, fh: 4.3, fx: 5.1, weight: 945, cargo: 242 };
const SP = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1373, cylinders: 4, aspiration: 'Turbo', power: 103, torque: 230,
  cargo: 265 };
const H = { ...B, engine: '1.2L I3 Petrol Mild Hybrid', displacement: 1197, cylinders: 3, aspiration: 'Naturally Aspirated', power: 61,
  torque: 112, cargo: 265 };
const HA = { ...H, transmission: 'CVT', fc: 4.3, fh: 3.8, fx: 4.0, weight: 957 };
const HM = { ...H, transmission: '5-speed manual', fc: 4.1, fh: 3.6, fx: 3.8, weight: 919 };
const hyb = p => ({ 'Hybrid Manual': { ...HM, price: $(p[0]) }, 'Hybrid Auto': { ...HA, price: $(p[1]) },
  'Hybrid Plus': { ...HA, price: $(p[2]) }, 'Hybrid GLX': { ...HA, price: $(p[3]) } });

writeLineups(390, {
  'Suzuki|Swift|2024': {
    'GL Manual': { ...GLM, price: $(23490) }, 'GL Auto': { ...GLA, price: $(24490) },
    'GL Plus': { ...GLA, price: $(25990) }, 'GL Shadow': { ...GLA, price: $(26990) },
    'GLX Turbo': { ...GLXT, price: $(29790) }, 'GLX Turbo Shadow': { ...GLXT, price: $(32490) },
    'Sport Manual': { ...SP, transmission: '6-speed manual', fc: 7.6, fh: 5.2, fx: 6.1, weight: 970, price: $(29990) },
    'Sport Auto': { ...SP, transmission: '6-speed automatic', fc: 7.9, fh: 5.0, fx: 6.1, weight: 990, price: $(31990) },
    ...hyb([24490, 25490, 26990, 27990]),
  },
  'Suzuki|Swift|2025': hyb([24990, 25990, 27490, 29490]),
  'Suzuki|Swift|2026': hyb([24990, 25990, 27490, 29490]),
});
