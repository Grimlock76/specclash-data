'use strict';
// supplement323.json — 2026-10-23: 2023 (AU) Suzuki Jimny (3-door GJ + the
// 5-door XL that arrived late 2023). Replaces non-AU grades "JLX"/"JLX-L".
// Specs + price when new: Carsales 2023 variant pages. "XG" (JDM import)
// left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const JM = { engine: '1.5L I4 Petrol', displacement: 1462, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 75,
  torque: 130, drivetrain: '4WD', topSpeed: null, acceleration: null, cargo: null, towing: 1300, fuelTank: 40, seats: 4 };
const JMM = { ...JM, transmission: '5-speed manual', fc: 7.7, fh: 5.7, fx: 6.4 };
const JMA = { ...JM, transmission: '4-speed automatic' };

writeLineups(323, {
  'Suzuki|Jimny|2023': {
    'Lite Manual': { ...JMM, weight: 1075, price: $(30490) },
    'GLX Manual': { ...JMM, weight: 1095, price: $(31990) },
    'Heritage Edition Manual': { ...JMM, weight: 1095, price: $(33490) },
    'GLX Auto': { ...JMA, fc: 8.2, fh: 6.1, fx: 6.9, weight: 1110, price: $(33490) },
    'XL Manual': { ...JMM, fc: 7.6, weight: 1185, price: $(34990) },
    'XL Auto': { ...JMA, fc: 8.1, fh: 6.3, fx: 6.9, weight: 1200, price: $(36490) },
  },
});
