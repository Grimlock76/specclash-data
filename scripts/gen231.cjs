'use strict';
// supplement231.json — Cord, Duesenberg, Auburn, Pierce-Arrow, Stutz, Marmon
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Cord ───────────────────────────────────────────────────────────────────
for (const yr of [1929,1930,1931,1932]) {
  add('Cord','L-29',yr,'Sedan', {
    engine:'Lycoming 4.9L I8 OHV', fuelType:'petrol', displacement:4934, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'FWD',
    power:75, torque:271, weight:1905, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:20.0, topSpeed:128, price:'~$3,095' });
  add('Cord','L-29',yr,'Cabriolet', {
    engine:'Lycoming 4.9L I8 OHV', fuelType:'petrol', displacement:4934, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'FWD',
    power:75, torque:271, weight:1950, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:20.0, topSpeed:128, price:'~$3,295' });
}
for (const yr of [1936,1937]) {
  add('Cord','810',yr,'Westchester', {
    engine:'Lycoming V8 4.7L Supercharged', fuelType:'petrol', displacement:4728, cylinders:8,
    aspiration:'Schwitzer-Cummins Supercharged', transmission:'4-speed pre-select', drivetrain:'FWD',
    power:119, torque:339, weight:1729, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:177, price:'~$1,995' });
  add('Cord','810',yr,'Phaeton', {
    engine:'Lycoming V8 4.7L Supercharged', fuelType:'petrol', displacement:4728, cylinders:8,
    aspiration:'Schwitzer-Cummins Supercharged', transmission:'4-speed pre-select', drivetrain:'FWD',
    power:119, torque:339, weight:1770, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.5, topSpeed:177, price:'~$2,145' });
  add('Cord','812',yr,'Supercharged', {
    engine:'Lycoming V8 4.7L Supercharged', fuelType:'petrol', displacement:4728, cylinders:8,
    aspiration:'Schwitzer-Cummins Supercharged', transmission:'4-speed pre-select', drivetrain:'FWD',
    power:149, torque:373, weight:1750, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:193, price:'~$2,945' });
}

// ── Duesenberg ─────────────────────────────────────────────────────────────
for (const yr of [1921,1922,1923,1924,1925,1926]) {
  add('Duesenberg','Model A',yr,'Touring', {
    engine:'Lycoming 4.3L I8 DOHC', fuelType:'petrol', displacement:4261, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:60, torque:203, weight:1814, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:18.0, topSpeed:145, price:'~$6,500' });
}
for (const yr of [1929,1930,1931,1932,1933,1934,1935,1936,1937]) {
  add('Duesenberg','Model J',yr,'Dual Cowl Phaeton', {
    engine:'Lycoming 6.9L I8 DOHC', fuelType:'petrol', displacement:6882, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:194, torque:651, weight:2268, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.5, topSpeed:185, price:'~$13,500' });
  add('Duesenberg','Model J',yr,'Sedan', {
    engine:'Lycoming 6.9L I8 DOHC', fuelType:'petrol', displacement:6882, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:194, torque:651, weight:2450, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:180, price:'~$14,750' });
}
for (const yr of [1932,1933,1934,1935,1936,1937]) {
  add('Duesenberg','Model SJ',yr,'Speedster', {
    engine:'Lycoming 6.9L I8 DOHC Supercharged', fuelType:'petrol', displacement:6882, cylinders:8,
    aspiration:'Centrifugal Supercharged', transmission:'3-speed manual', drivetrain:'RWD',
    power:261, torque:813, weight:2200, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.0, topSpeed:225, price:'~$20,000' });
}

// ── Auburn ─────────────────────────────────────────────────────────────────
for (const yr of [1928,1929,1930,1931,1932]) {
  add('Auburn','120',yr,'Speedster', {
    engine:'Lycoming 4.6L I8', fuelType:'petrol', displacement:4588, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:75, torque:237, weight:1360, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:15.0, topSpeed:160, price:'~$1,395' });
}
for (const yr of [1933,1934,1935]) {
  add('Auburn','850',yr,'Speedster', {
    engine:'Lycoming 4.6L I8', fuelType:'petrol', displacement:4588, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:100, torque:305, weight:1400, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.0, topSpeed:172, price:'~$945' });
}
for (const yr of [1935,1936]) {
  add('Auburn','851',yr,'Supercharged Speedster', {
    engine:'Lycoming 4.6L I8 Supercharged', fuelType:'petrol', displacement:4588, cylinders:8,
    aspiration:'Schwitzer-Cummins Supercharged', transmission:'3-speed manual', drivetrain:'RWD',
    power:112, torque:339, weight:1450, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:161, price:'~$2,245' });
  add('Auburn','852',yr,'Supercharged Phaeton', {
    engine:'Lycoming 4.6L I8 Supercharged', fuelType:'petrol', displacement:4588, cylinders:8,
    aspiration:'Schwitzer-Cummins Supercharged', transmission:'3-speed manual', drivetrain:'RWD',
    power:112, torque:339, weight:1680, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.0, topSpeed:155, price:'~$1,195' });
}

// ── Pierce-Arrow ───────────────────────────────────────────────────────────
for (const yr of [1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938]) {
  const p = yr <= 1924 ? '6,000' : yr <= 1929 ? '6,500' : '7,500';
  add('Pierce-Arrow','Model 33',yr,'Touring', {
    engine:'6.0L I6 OHV', fuelType:'petrol', displacement:6000, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:100, torque:339, weight:2268, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:15.0, topSpeed:145, price:`~$${p}` });
}
for (const yr of [1930,1931,1932,1933,1934,1935,1936,1937,1938]) {
  add('Pierce-Arrow','Model 41',yr,'Limousine', {
    engine:'7.6L V12 OHV', fuelType:'petrol', displacement:7570, cylinders:12,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:150, torque:475, weight:2722, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.0, topSpeed:153, price:'~$10,000' });
}

// ── Stutz ──────────────────────────────────────────────────────────────────
for (const yr of [1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925]) {
  add('Stutz','Bearcat',yr,'Roadster', {
    engine:'Wisconsin 6.2L T-head I4', fuelType:'petrol', displacement:6218, cylinders:4,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:60, torque:237, weight:1020, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:15.0, topSpeed:145, price:'~$2,000' });
}
for (const yr of [1926,1927,1928,1929,1930,1931,1932,1933,1934]) {
  add('Stutz','Black Hawk',yr,'Speedster', {
    engine:'Vertical Eight 4.7L I8 DOHC', fuelType:'petrol', displacement:4734, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:94, torque:305, weight:1519, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:177, price:'~$3,895' });
  add('Stutz','DV-32',yr,'Sedan', {
    engine:'Vertical Eight 5.3L I8 DOHC', fuelType:'petrol', displacement:5277, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:149, torque:407, weight:2041, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:185, price:'~$4,995' });
}

// ── Marmon ─────────────────────────────────────────────────────────────────
for (const yr of [1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924]) {
  add('Marmon','Model 41',yr,'Touring', {
    engine:'6.4L I6 OHV', fuelType:'petrol', displacement:6408, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:74, torque:271, weight:2041, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:17.0, topSpeed:130, price:'~$3,500' });
}
for (const yr of [1925,1926,1927,1928,1929,1930]) {
  add('Marmon','Model 68',yr,'Sedan', {
    engine:'5.5L I8 OHV', fuelType:'petrol', displacement:5473, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:100, torque:339, weight:1905, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:14.0, topSpeed:155, price:'~$2,495' });
}
for (const yr of [1931,1932,1933]) {
  add('Marmon','Sixteen',yr,'Sport Sedan', {
    engine:'8.0L V16 OHV', fuelType:'petrol', displacement:7999, cylinders:16,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:149, torque:508, weight:2495, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:185, price:'~$5,000' });
  add('Marmon','Sixteen',yr,'Limousine', {
    engine:'8.0L V16 OHV', fuelType:'petrol', displacement:7999, cylinders:16,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:149, torque:508, weight:2722, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:180, price:'~$6,500' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement231.json'), JSON.stringify(out, null, 2));
console.log('supplement231.json —', Object.keys(specs).length, 'entries (Cord/Duesenberg/Auburn/Pierce-Arrow/Stutz/Marmon)');
