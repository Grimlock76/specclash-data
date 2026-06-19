'use strict';
// supplement239.json — HSV Grange (long-wheelbase luxury sedan, 1996–2017)
// Missing from the HSV lineup. Based on Holden Statesman/Caprice (VS→WN).
// Sources: australiancar.reviews / whichcar.com.au
const fs = require('fs'), path = require('path');
const specs = {};
function add(year, trim, d) { specs[`HSV|Grange|${year}|${trim}`] = { aspiration: 'NA', ...d, fuelType: 'petrol' }; }

// VS Grange — 5.0L V8 (Holden 304)
for (const yr of [1996, 1997, 1998]) {
  add(yr, 'VS', {
    engine: '5.0L V8', displacement: 4987, cylinders: 8, drivetrain: 'RWD',
    transmission: '4-speed auto', power: 185, torque: 400, weight: 1780, seats: 5,
    fc: 14.5, fh: 11.5, fx: 19.5, acceleration: 7.5, topSpeed: 235, price: '~$69,950' });
}
// WH Grange — 5.7L LS1 V8
for (const yr of [1999, 2000, 2001, 2002]) {
  add(yr, 'WH', {
    engine: '5.7L V8 LS1', displacement: 5665, cylinders: 8, drivetrain: 'RWD',
    transmission: '4-speed auto', power: 250, torque: 473, weight: 1820, seats: 5,
    fc: 14.8, fh: 11.6, fx: 20.1, acceleration: 6.5, topSpeed: 250, price: '~$78,500' });
}
// WK Grange — 5.7L LS1
add(2003, 'WK', {
  engine: '5.7L V8 LS1', displacement: 5665, cylinders: 8, drivetrain: 'RWD',
  transmission: '4-speed auto', power: 260, torque: 475, weight: 1830, seats: 5,
  fc: 14.8, fh: 11.6, fx: 20.1, acceleration: 6.4, topSpeed: 250, price: '~$80,950' });
// WL Grange — 5.7L LS1, 6-speed auto
for (const yr of [2004, 2005]) {
  add(yr, 'WL', {
    engine: '5.7L V8 LS1', displacement: 5665, cylinders: 8, drivetrain: 'RWD',
    transmission: '6-speed auto', power: 260, torque: 475, weight: 1850, seats: 5,
    fc: 14.5, fh: 11.3, fx: 19.8, acceleration: 6.3, topSpeed: 250, price: '~$82,950' });
}
// WM Grange — 6.0L LS2 V8
for (const yr of [2006, 2007, 2008, 2009, 2010]) {
  add(yr, 'WM', {
    engine: '6.0L V8 LS2', displacement: 5967, cylinders: 8, drivetrain: 'RWD',
    transmission: '6-speed auto', power: 307, torque: 550, weight: 1900, seats: 5,
    fc: 15.3, fh: 11.9, fx: 21.2, acceleration: 5.8, topSpeed: 250, price: '~$84,990' });
}
// WM Series 2/3 Grange — 6.2L LS3 V8
for (const yr of [2011, 2012, 2013]) {
  add(yr, 'WM Series 2', {
    engine: '6.2L V8 LS3', displacement: 6162, cylinders: 8, drivetrain: 'RWD',
    transmission: '6-speed auto', power: 325, torque: 550, weight: 1910, seats: 5,
    fc: 15.0, fh: 11.6, fx: 20.8, acceleration: 5.4, topSpeed: 250, price: '~$88,990' });
}
// WN Grange — 6.2L LS3 V8 (final)
for (const yr of [2014, 2015, 2016, 2017]) {
  add(yr, 'WN', {
    engine: '6.2L V8 LS3', displacement: 6162, cylinders: 8, drivetrain: 'RWD',
    transmission: '6-speed auto', power: 340, torque: 570, weight: 1920, seats: 5,
    fc: 14.8, fh: 11.4, fx: 20.5, acceleration: 5.0, topSpeed: 250, price: '~$94,990' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement239.json'), JSON.stringify(out, null, 2));
console.log(`supplement239.json written — ${Object.keys(specs).length} HSV Grange entries (${Object.keys(specs).length ? '1996–2017' : ''})`);
