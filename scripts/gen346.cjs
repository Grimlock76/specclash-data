'use strict';
// supplement346.json — 2026-10-25: Ford Mustang (S650) 2024, 2025, 2026 —
// EcoBoost, GT coupe (manual/auto), GT Convertible, Dark Horse (manual/auto;
// not listed by Carsales for 2025). Replaces stale rows. Specs + price when
// new: Carsales variant pages (base price incl GST & LCT). 0-100 not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 4, cylinders: 8, drivetrain: 'RWD', fuelType: 'petrol' };
const EB = { ...B, engine: '2.3L I4 Turbo Petrol (EcoBoost)', displacement: 2261, cylinders: 4, aspiration: 'Turbo', power: 232,
  torque: 475, transmission: '10-speed automatic', fc: 12.7, fh: 7.5, fx: 9.4, weight: 1746 };
const V8 = { ...B, engine: '5.0L V8 Petrol (Coyote)', displacement: 5038, aspiration: 'Naturally Aspirated', power: 345, torque: 550 };
const GM = { ...V8, transmission: '6-speed manual', fc: 20.0, fh: 9.9, fx: 13.6 };
const GA = { ...V8, transmission: '10-speed automatic', fc: 18.7, fh: 9.4, fx: 12.8 };
const DH = { ...V8, power: 349, torque: 548, fc: 18.7, fh: 9.4, fx: 12.8 };
const line = p => {
  const o = {
    'EcoBoost': { ...EB, price: $(p.eb) },
    'GT Manual': { ...GM, weight: p.gmw, price: $(p.gm) },
    'GT Auto': { ...GA, weight: p.gaw, price: $(p.ga) },
    'GT Convertible': { ...GA, weight: p.gcw, price: $(p.gc) },
  };
  if (p.dm) {
    o['Dark Horse Manual'] = { ...DH, transmission: '6-speed manual', weight: p.dmw, price: $(p.dm) };
    o['Dark Horse Auto'] = { ...DH, transmission: '10-speed automatic', weight: p.daw, price: $(p.da) };
  }
  return o;
};

writeLineups(346, {
  'Ford|Mustang|2024': line({ eb: 64990, gm: 77002, gmw: 1813, ga: 80902, gaw: 1841, gc: 86752, gcw: 1881, dm: 99102, dmw: 1822,
    da: 103002, daw: 1842 }),
  'Ford|Mustang|2025': line({ eb: 71990, gm: 86917, gmw: 1809, ga: 86917, gaw: 1817, gc: 92594, gcw: 1872 }),
  'Ford|Mustang|2026': line({ eb: 72990, gm: 84917, gmw: 1809, ga: 87917, gaw: 1817, gc: 93593, gcw: 1872, dm: 104917, dmw: 1817,
    da: 104917, daw: 1837 }),
});
