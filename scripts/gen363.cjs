'use strict';
// supplement363.json — 2026-10-25: Kia Cerato 2024 (BD MY24 sedan + hatch; the
// K4 replaced it for 2025) and Kia Stonic 2024 (YB MY24), 2025 + 2026 (YB PE2
// MY26 facelift, 1.0T only). Replaces stale rows (~ prices). Specs + price when
// new: Carsales variant pages (base price incl GST & LCT). Tare-only / below-
// tare weights null. Stonic MY26 power: Carsales spec table says 88.3 kW but
// its overview says 74 kW -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const C = { engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 112, torque: 192, transmission: '6-speed automatic', drivetrain: 'FWD', seats: 5, fuelTank: 50, weight: null,
  topSpeed: null, acceleration: null, fh: 5.7, fx: 7.4 };
const CS = { ...C, fc: 10.4, cargo: 502 }, CH = { ...C, fc: 10.2, cargo: 428 };
const GT = { ...C, engine: '1.6L I4 Turbo Petrol', displacement: 1591, aspiration: 'Turbo', power: 150, torque: 265,
  transmission: '7-speed dual-clutch' };
const ST = { cylinders: 4, fuelType: 'petrol', drivetrain: 'FWD', seats: 5, fuelTank: 45, cargo: 332, weight: null, topSpeed: null,
  acceleration: null };
const S14 = { ...ST, engine: '1.4L I4 Petrol', displacement: 1368, aspiration: 'Naturally Aspirated', power: 74, torque: 133 };
const S14M = { ...S14, transmission: '6-speed manual', fc: 7.4, fh: 5.2, fx: 6.0 };
const S14A = { ...S14, transmission: '6-speed automatic', fc: 8.6, fh: 5.6, fx: 6.7 };
const S10 = { ...ST, engine: '1.0L I3 Turbo Petrol', displacement: 998, cylinders: 3, aspiration: 'Turbo', power: 74, torque: 172,
  transmission: '7-speed dual-clutch', fc: 6.4, fh: 4.9, fx: 5.4 };
const S26 = { ...S10, power: null, fc: 5.8, fh: 4.5, fx: 5.0, cargo: 352 };
const st26 = () => ({ 'S': { ...S26, price: $(28180) }, 'Sport': { ...S26, price: $(32290) }, 'GT-Line': { ...S26, price: $(35740) } });

writeLineups(363, {
  'Kia|Cerato|2024': {
    'S Sedan': { ...CS, price: $(27060) }, 'Sport Sedan': { ...CS, price: $(29160) }, 'Sport+ Sedan': { ...CS, price: $(32210) },
    'GT Sedan': { ...GT, fc: 9.3, fh: 5.5, fx: 6.9, cargo: 502, price: $(36860) },
    'S Hatch': { ...CH, price: $(27060) }, 'Sport Hatch': { ...CH, price: $(29160) }, 'Sport+ Hatch': { ...CH, price: $(32210) },
    'GT Hatch': { ...GT, fc: 8.9, fh: 5.5, fx: 6.8, cargo: 428, price: $(36860) },
  },
  'Kia|Stonic|2024': {
    'S Manual': { ...S14M, price: $(22290) }, 'S Auto': { ...S14A, price: $(23790) },
    'Sport Manual': { ...S14M, price: $(25290) }, 'Sport Auto': { ...S14A, price: $(26790) },
    'GT-Line': { ...S10, price: $(30790) },
  },
  'Kia|Stonic|2025': st26(),
  'Kia|Stonic|2026': st26(),
});
