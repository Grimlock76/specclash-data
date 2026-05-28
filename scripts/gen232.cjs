'use strict';
// supplement232.json — Delahaye, Talbot-Lago, Hotchkiss, Bugatti (pre-war), Invicta, Lagonda, Bentley vintage
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Delahaye ───────────────────────────────────────────────────────────────
for (const yr of [1934,1935,1936,1937,1938,1939,1940]) {
  add('Delahaye','135',yr,'Competition', {
    engine:'3.6L I6 Camshaff', fuelType:'petrol', displacement:3557, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:93, torque:270, weight:1100, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:185, price:'~$7,500' });
  add('Delahaye','135',yr,'Grand Sport', {
    engine:'3.6L I6 Triple Carb', fuelType:'petrol', displacement:3557, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:119, torque:305, weight:1150, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:200, price:'~$9,000' });
}
for (const yr of [1946,1947,1948,1949,1950,1951]) {
  add('Delahaye','135M',yr,'Cabriolet', {
    engine:'3.6L I6 Triple Carb', fuelType:'petrol', displacement:3557, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:119, torque:305, weight:1250, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:190, price:'~$12,000' });
}
for (const yr of [1938,1939,1940,1946,1947,1948,1949,1950,1951]) {
  add('Delahaye','175',yr,'Torpedo', {
    engine:'4.5L I6', fuelType:'petrol', displacement:4455, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:149, torque:373, weight:1450, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:210, price:'~$16,000' });
}

// ── Talbot-Lago ────────────────────────────────────────────────────────────
for (const yr of [1937,1938,1939,1946,1947,1948,1949,1950,1951]) {
  add('Talbot-Lago','T26 Grand Sport',yr,'Coupe', {
    engine:'4.5L I6 Triple Carb', fuelType:'petrol', displacement:4482, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:149, torque:373, weight:1300, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:200, price:'~$10,000' });
  add('Talbot-Lago','T26 Grand Sport',yr,'Cabriolet', {
    engine:'4.5L I6 Triple Carb', fuelType:'petrol', displacement:4482, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:149, torque:373, weight:1400, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:195, price:'~$11,500' });
}
for (const yr of [1951,1952,1953,1954]) {
  add('Talbot-Lago','T26 Record',yr,'Sedan', {
    engine:'2.7L I6', fuelType:'petrol', displacement:2692, cylinders:6,
    aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
    power:93, torque:220, weight:1600, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:165, price:'~$7,500' });
}

// ── Hotchkiss ──────────────────────────────────────────────────────────────
for (const yr of [1935,1936,1937,1938,1939]) {
  add('Hotchkiss','686',yr,'Sedan', {
    engine:'3.0L I6 OHV', fuelType:'petrol', displacement:2998, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:93, torque:220, weight:1450, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.0, topSpeed:150, price:'~$5,000' });
}
for (const yr of [1946,1947,1948,1949,1950,1951,1952,1953,1954]) {
  add('Hotchkiss','686',yr,'Cabriolet', {
    engine:'3.0L I6 OHV', fuelType:'petrol', displacement:2998, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:93, torque:220, weight:1400, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.5, topSpeed:148, price:'~$5,500' });
  add('Hotchkiss','2050',yr,'Grand Sport', {
    engine:'3.5L I6 OHV', fuelType:'petrol', displacement:3485, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:270, weight:1350, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:175, price:'~$7,000' });
}

// ── Bugatti (pre-war) ──────────────────────────────────────────────────────
for (const yr of [1924,1925,1926,1927,1928,1929,1930]) {
  add('Bugatti','Type 35',yr,'Grand Prix', {
    engine:'2.0L I8 SOHC', fuelType:'petrol', displacement:1991, cylinders:8,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:75, torque:147, weight:750, seats:1, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.0, topSpeed:195, price:'~$5,000' });
  add('Bugatti','Type 35B',yr,'Supercharged', {
    engine:'2.3L I8 SOHC Supercharged', fuelType:'petrol', displacement:2262, cylinders:8,
    aspiration:'Roots Supercharged', transmission:'4-speed manual', drivetrain:'RWD',
    power:119, torque:220, weight:750, seats:1, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.5, topSpeed:218, price:'~$6,500' });
}
for (const yr of [1926,1927,1928,1929,1930,1931,1932,1933,1934,1935]) {
  add('Bugatti','Type 43',yr,'Grand Sport', {
    engine:'2.3L I8 SOHC Supercharged', fuelType:'petrol', displacement:2262, cylinders:8,
    aspiration:'Roots Supercharged', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:203, weight:950, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:200, price:'~$8,000' });
}
for (const yr of [1929,1930,1931,1932,1933,1934,1935,1936,1937]) {
  add('Bugatti','Type 41 Royale',yr,'Torpedo', {
    engine:'12.8L I8 SOHC', fuelType:'petrol', displacement:12763, cylinders:8,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:224, torque:814, weight:3175, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:200, price:'~$42,000' });
}
for (const yr of [1934,1935,1936,1937,1938,1939,1940]) {
  add('Bugatti','Type 57',yr,'Galibier', {
    engine:'3.3L I8 DOHC', fuelType:'petrol', displacement:3257, cylinders:8,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:288, weight:1200, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:190, price:'~$8,500' });
  add('Bugatti','Type 57SC',yr,'Atlantic', {
    engine:'3.3L I8 DOHC Supercharged', fuelType:'petrol', displacement:3257, cylinders:8,
    aspiration:'Roots Supercharged', transmission:'4-speed manual', drivetrain:'RWD',
    power:193, torque:373, weight:1000, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:225, price:'~$15,000' });
}

// ── Invicta ────────────────────────────────────────────────────────────────
for (const yr of [1925,1926,1927,1928,1929,1930,1931,1932,1933,1934]) {
  add('Invicta','4.5-Litre',yr,'S-Type', {
    engine:'Meadows 4.5L I6', fuelType:'petrol', displacement:4467, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:305, weight:1270, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:177, price:'~$2,800' });
  add('Invicta','4.5-Litre',yr,'Tourer', {
    engine:'Meadows 4.5L I6', fuelType:'petrol', displacement:4467, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:100, torque:288, weight:1400, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:165, price:'~$2,200' });
}

// ── Lagonda ────────────────────────────────────────────────────────────────
for (const yr of [1933,1934,1935,1936,1937,1938,1939]) {
  add('Lagonda','M45',yr,'Tourer', {
    engine:'Meadows 4.5L I6', fuelType:'petrol', displacement:4467, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:305, weight:1450, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:170, price:'~$3,200' });
}
for (const yr of [1937,1938,1939,1946,1947,1948,1949,1950]) {
  add('Lagonda','V12',yr,'Drophead Coupe', {
    engine:'4.5L V12 DOHC', fuelType:'petrol', displacement:4480, cylinders:12,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:149, torque:373, weight:1600, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:195, price:'~$5,000' });
}
for (const yr of [1954,1955,1956,1957,1958]) {
  add('Lagonda','3-Litre',yr,'Saloon', {
    engine:'W.O. Bentley 3.0L I6 DOHC', fuelType:'petrol', displacement:2922, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:112, torque:237, weight:1520, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:175, price:'~$6,500' });
}

// ── Bentley vintage ────────────────────────────────────────────────────────
for (const yr of [1921,1922,1923,1924,1925,1926,1927]) {
  add('Bentley','3 Litre',yr,'Tourer', {
    engine:'3.0L I4 SOHC', fuelType:'petrol', displacement:2996, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:56, torque:183, weight:1168, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:14.0, topSpeed:153, price:'~$1,050' });
  add('Bentley','3 Litre',yr,'Speed', {
    engine:'3.0L I4 SOHC', fuelType:'petrol', displacement:2996, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:75, torque:203, weight:1100, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.5, topSpeed:165, price:'~$1,395' });
}
for (const yr of [1926,1927,1928,1929,1930]) {
  add('Bentley','6.5 Litre',yr,'Tourer', {
    engine:'6.5L I6 SOHC', fuelType:'petrol', displacement:6597, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:147, torque:508, weight:1814, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:177, price:'~$2,800' });
  add('Bentley','Speed Six',yr,'Roadster', {
    engine:'6.5L I6 SOHC (high compression)', fuelType:'petrol', displacement:6597, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:177, torque:576, weight:1700, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:193, price:'~$3,500' });
}
for (const yr of [1930,1931]) {
  add('Bentley','8 Litre',yr,'Limousine', {
    engine:'8.0L I6 SOHC', fuelType:'petrol', displacement:7983, cylinders:6,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
    power:200, torque:678, weight:2268, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:185, price:'~$5,800' });
}
for (const yr of [1929,1930,1931]) {
  add('Bentley','4.5 Litre Blower',yr,'Supercharged', {
    engine:'4.4L I4 SOHC Supercharged', fuelType:'petrol', displacement:4398, cylinders:4,
    aspiration:'Amherst Villiers Supercharged', transmission:'4-speed manual', drivetrain:'RWD',
    power:175, torque:475, weight:1450, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.0, topSpeed:197, price:'~$3,200' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement232.json'), JSON.stringify(out, null, 2));
console.log('supplement232.json —', Object.keys(specs).length, 'entries (Delahaye/Talbot-Lago/Hotchkiss/Bugatti pre-war/Invicta/Lagonda/Bentley vintage)');
