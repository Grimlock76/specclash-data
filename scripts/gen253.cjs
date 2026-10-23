'use strict';
// supplement253.json — 2026-10-23: Ford Ranger 2026 (P703, AU) full lineup,
// dual-cab 4x4. Replaces estimated 2026 data (e.g. Wildtrak 12.1 L/100km city,
// Raptor 19.7) and drops FX4 Max / PHEV Stormtrak (not in the 2026 range).
// Sources: Carsales variant spec pages (specs, "price when new"); CarsGuide
// 2026 price list where Carsales shows no new price. Grades that come with
// both engines get separate trims ("XLT" = 2.0 bi-turbo, "XLT V6" = 3.0 V6).
//  - 2.0 bi-turbo: 154 kW/500 Nm. 2.0 single-turbo (XL): 125 kW/405 Nm.
//  - 3.0 V6 turbo-diesel: 184 kW/600 Nm. Raptor: 3.0 twin-turbo petrol V6.
//  - XLT / Wildtrak 2.0 fuel: same 2.0 bi-turbo 4x4 ADR figures Carsales lists
//    for XLS and Sport. Weights Carsales gives only as tare → null.
//  - PHEV torque 697 Nm is Ford's system figure (Carsales lists engine-only 411).
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const $ = n => `$${n.toLocaleString('en-US')}`;
const base = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', seats: 5, cargo: null,
  acceleration: null, topSpeed: null, towing: 3500, fuelTank: 80 };
const BIT = { ...base, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo', power: 154, torque: 500 };
const BIT_FUEL = { fc: 7.7, fh: 6.9, fx: 7.2 };
const V6 = { ...base, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600 };
const V6_FUEL = { fc: 9.6, fh: 7.5, fx: 8.3 };
const PHEV = { ...base, fuelType: 'plug-in hybrid', engine: '2.3L I4 Turbo PHEV', displacement: 2261, cylinders: 4, aspiration: 'Turbo',
  power: 207, torque: 697, battery: '11.8 kWh', fuelTank: 70, fc: null, fh: null };
const R = {
  'P703 XL': { ...base, engine: '2.0L I4 Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Turbo', power: 125, torque: 405,
    fc: null, fh: null, fx: null, weight: null, price: $(54630) },
  'P703 XLS': { ...BIT, ...BIT_FUEL, weight: 2247, price: $(57880), payload: 983, groundClearance: 234 },
  'P703 XLT': { ...BIT, ...BIT_FUEL, weight: null, price: $(63890) },
  'P703 XLT V6': { ...V6, ...V6_FUEL, weight: 2345, price: $(67990), payload: 1005, groundClearance: 234 },
  'P703 Sport': { ...BIT, ...BIT_FUEL, weight: 2296, price: $(66390), payload: 934, groundClearance: 234 },
  'P703 Wildtrak': { ...BIT, ...BIT_FUEL, weight: null, price: $(69890) },
  'P703 Wildtrak V6': { ...V6, ...V6_FUEL, weight: 2427, price: $(75090), payload: 923, groundClearance: 234 },
  'P703 Wolftrak': { ...V6, ...V6_FUEL, weight: 2345, price: $(70990), payload: 1005, groundClearance: 234 },
  'P703 Black Edition V6': { ...V6, ...V6_FUEL, weight: null, price: $(59990) },
  'P703 Tremor': { ...V6, fc: 10.6, fh: 8.7, fx: 9.4, weight: 2415, price: $(75090), payload: 935, groundClearance: 261 },
  'P703 Platinum': { ...V6, fc: 9.7, fh: 7.6, fx: 8.4, weight: null, price: $(80890) },
  'P703 Raptor': { ...base, fuelType: 'petrol', engine: '3.0L V6 Twin-Turbo Petrol (EcoBoost)', displacement: 2956, cylinders: 6,
    aspiration: 'Twin-Turbo', power: 292, torque: 583, fc: 14.0, fh: 10.0, fx: 11.5, weight: null, price: $(90690),
    towing: 2500, groundClearance: 272 },
  'P703 PHEV XLT': { ...PHEV, fx: 2.9, range: 49, weight: 2670, price: $(71990), payload: 830, groundClearance: 215 },
  'P703 PHEV Wildtrak': { ...PHEV, fx: 3.1, range: 50, weight: 2695, price: $(72000), payload: 805, groundClearance: 226 },
};
const specs = Object.fromEntries(Object.entries(R).map(([t, d]) => [`Ford|Ranger|2026|${t}`, d]));
fs.writeFileSync(path.join(DATA, 'supplement253.json'), JSON.stringify({ specs }, null, 2) + '\n');
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Ford.Ranger['2026'] = Object.keys(R);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Ford.includes(253)) supps.Ford.push(253);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement253.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Ford\|)?Ranger\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
