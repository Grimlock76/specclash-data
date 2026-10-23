'use strict';
// supplement255.json — 2026-10-23: 2026 lineups for Mazda BT-50, Kia Tasman,
// BYD Shark 6 (AU). Replaces estimated "~" data (e.g. Tasman listed at
// 147 kW / 441 Nm; real 154 / 440) and non-existent grades (Tasman "GT-Line").
// Specs + "price when new": Carsales variant pages (dual-cab utes; drive as
// shown by Carsales — "4x2" trims are the 4x2 variant).
// Shark 6: system output (321 kW / 650 Nm; Performance 350 kW / 700 Nm) from
// the Carsales overview — its spec table lists engine-only torque.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const $ = n => `$${n.toLocaleString('en-US')}`;
const ute = { fuelType: 'diesel', cargo: null, acceleration: null, topSpeed: null, seats: 5, towing: 3500 };
const BT30 = { ...ute, engine: '3.0L I4 Turbo Diesel (4JJ3-TCX)', displacement: 2999, cylinders: 4, aspiration: 'Turbo',
  power: 140, torque: 450, transmission: '6-speed automatic', fuelTank: 76 };
const BT_FUEL = { fc: 8.3, fh: 6.5, fx: 7.1 };
const TAS = { ...ute, engine: '2.2L I4 Turbo Diesel', displacement: 2151, cylinders: 4, aspiration: 'Turbo',
  power: 154, torque: 440, transmission: '8-speed automatic', fuelTank: 80 };
const SHARK = { fuelType: 'plug-in hybrid', cargo: null, acceleration: null, topSpeed: null, seats: 5,
  drivetrain: 'AWD', transmission: '1-speed automatic', aspiration: 'Turbo', cylinders: 4, battery: '29.6 kWh',
  fuelTank: 60, groundClearance: 230, fc: null, fh: null };
const L = {
  'Mazda|BT-50': {
    'XS 4x2': { ...ute, engine: '2.2L I4 Turbo Diesel (RZ4F-TC)', displacement: 2184, cylinders: 4, aspiration: 'Turbo',
      power: 120, torque: 400, transmission: '8-speed automatic', fuelTank: 76, drivetrain: 'RWD',
      fc: 7.8, fh: 5.5, fx: 6.3, weight: 1888, price: $(47210), payload: 1112, groundClearance: 235 },
    'XT 4x2': { ...BT30, ...BT_FUEL, drivetrain: 'RWD', weight: 1929, price: $(49710), payload: 1071, groundClearance: 235 },
    'XTR 4x2': { ...BT30, ...BT_FUEL, drivetrain: 'RWD', weight: 2012, price: $(55780), payload: 988, groundClearance: 240 },
    'Boss': { ...BT30, ...BT_FUEL, drivetrain: '4WD', weight: 2067, price: $(60220), payload: 1033, groundClearance: 235 },
    'GT': { ...BT30, ...BT_FUEL, drivetrain: '4WD', weight: 2102, price: $(68160), payload: 998, groundClearance: 240 },
    'SP': { ...BT30, fc: 8.4, fh: 7.4, fx: 7.8, drivetrain: '4WD', weight: 2176, price: $(73490), payload: 924, groundClearance: 240 },
    'Thunder': { ...BT30, ...BT_FUEL, drivetrain: '4WD', weight: 2213, price: $(79490), payload: 887, groundClearance: 240 },
  },
  'Kia|Tasman': {
    'S 4x2': { ...TAS, drivetrain: 'RWD', fc: 9.1, fh: 6.4, fx: 7.4, weight: 2126, price: $(42990), payload: 1124, groundClearance: 206 },
    'SX': { ...TAS, drivetrain: '4WD', fc: 9.3, fh: 6.6, fx: 7.6, weight: 2283, price: $(54490), payload: 917, groundClearance: 206 },
    'SX+': { ...TAS, drivetrain: '4WD', fc: 9.3, fh: 6.6, fx: 7.6, weight: 2283, price: $(62390), payload: 917, groundClearance: 206 },
    'X-Line': { ...TAS, drivetrain: '4WD', fc: 9.5, fh: 6.8, fx: 7.8, weight: 2223, price: $(67990), payload: 1027, groundClearance: 224 },
    'X-Pro': { ...TAS, drivetrain: '4WD', fc: 9.4, fh: 7.3, fx: 8.1, weight: 2237, price: $(74990), payload: 1013, groundClearance: 252 },
  },
  'BYD|Shark': {
  'Dynamic': { ...SHARK, engine: '1.5L I4 Turbo PHEV', displacement: 1497, power: 321, torque: 650, fx: 2.0, range: 100,
    weight: 2600, price: $(55900), towing: 2500, payload: 900 },
  'Premium': { ...SHARK, engine: '1.5L I4 Turbo PHEV', displacement: 1497, power: 321, torque: 650, fx: 1.2, range: 85,
    weight: 2710, price: $(57900), towing: 2500, payload: 790 },
  'Performance': { ...SHARK, engine: '2.0L I4 Turbo PHEV', displacement: 1997, power: 350, torque: 700, fx: 1.3, range: 80,
    weight: 2775, price: $(62900), towing: 3500, payload: 725 },
  },
};
const specs = {};
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
for (const [mm, rows] of Object.entries(L)) {
  const [make, model] = mm.split('|');
  for (const [t, d] of Object.entries(rows)) specs[`${make}|${model}|2026|${t}`] = d;
  makes[make][model]['2026'] = Object.keys(rows);
  if (!supps[make].includes(255)) supps[make].push(255);
}
fs.writeFileSync(path.join(DATA, 'supplement255.json'), JSON.stringify({ specs }, null, 2) + '\n');
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement255.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^((Mazda\|)?BT-50|(Kia\|)?Tasman|(BYD\|)?Shark)\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
