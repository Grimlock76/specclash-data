'use strict';
// One-time repair of field-shifted entries found by validate-specs.cjs
// (2026-07-03) plus the Torana|2010 year typo. Fuel figures written in each
// file's PRE-migration convention (s45/s46 are pattern B: fc = combined) —
// run BEFORE fix-fuel-conventions.cjs.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

const load = f => JSON.parse(fs.readFileSync(path.join(DATA, f)));
const save = (f, j) => fs.writeFileSync(path.join(DATA, f), JSON.stringify(j, null, 2) + '\n');

// --- supplement45: Audi S3 entries had everything after `acceleration`
// shifted one field left (quarterMile got topSpeed, topSpeed got fc, ...).
// Correct figures: 8V S3 206 kW/1430 kg, 8V FL 213 kW, 8Y 213 kW/1505 kg.
const s45 = load('supplement45.json');
const S3 = {
  'Audi|A3|2013|S3': { power: 206, weight: 1430, fc: 7.0, price: '~$62,200' },
  'Audi|A3|2015|S3': { power: 206, weight: 1430, fc: 7.0, price: '~$62,200' },
  'Audi|A3|2017|S3': { power: 213, weight: 1430, fc: 7.0, price: '~$64,900' },
  'Audi|A3|2020|S3': { power: 213, weight: 1505, fc: 7.4, price: '~$70,800' },
  'Audi|A3|2022|S3': { power: 213, weight: 1505, fc: 7.4, price: '~$70,800' },
};
for (const [key, fix] of Object.entries(S3)) {
  const e = s45.specs[key];
  if (!e) { console.error('MISSING', key); process.exit(1); }
  Object.assign(e, {
    power: fix.power, weight: fix.weight, price: fix.price,
    quarterMile: '~13.1 sec', topSpeed: 250,
    fc: fix.fc, fh: null, fx: null, fuelType: 'petrol',
  });
  console.log('fixed', key);
}
save('supplement45.json', s45);

// --- supplement46: Cayenne GTS 4.0 2021 shifted from `engine` onward.
const s46 = load('supplement46.json');
const cay = s46.specs['Porsche|Cayenne|2021|GTS 4.0'];
if (!cay) { console.error('MISSING Cayenne'); process.exit(1); }
s46.specs['Porsche|Cayenne|2021|GTS 4.0'] = {
  engine: '4.0L V8 Twin-Turbo', displacement: 3996, cylinders: 8,
  power: 338, torque: 620, transmission: '8-speed Tiptronic S',
  drivetrain: 'AWD', acceleration: 4.5, quarterMile: '~12.6 sec',
  topSpeed: 270, fc: 13.5, fh: null, fx: null, fuelType: 'petrol',
  weight: 2245, seats: 5, cargo: 770, price: '$180,000',
  bodyStyle: 'SUV', aspiration: 'Twin-Turbo',
};
console.log('fixed Porsche|Cayenne|2021|GTS 4.0');
save('supplement46.json', s46);

// --- holden.json: UC Torana ran 1978-79; the 2010 key is a typo and is
// unreachable from makes.json. Move it to 1978 and reference it.
const holden = load('holden.json');
const hs = holden.specs || holden;
if (hs['Torana|2010|UC SL'] && !hs['Torana|1978|UC SL']) {
  hs['Torana|1978|UC SL'] = hs['Torana|2010|UC SL'];
  delete hs['Torana|2010|UC SL'];
  console.log('renamed Torana|2010|UC SL -> Torana|1978|UC SL');
  save('holden.json', holden);
}
const makes = load('makes.json');
const t78 = makes.Holden.Torana['1978'];
if (t78 && !t78.includes('UC SL')) { t78.push('UC SL'); t78.sort(); save('makes.json', makes); console.log('makes.json: added UC SL to Torana 1978'); }
