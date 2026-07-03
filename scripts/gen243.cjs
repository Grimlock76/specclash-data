'use strict';
// supplement243.json — Lexus LBX Morizo RR (AU April 2025): the GR Corolla
// drivetrain in a Lexus. Web-verified: 206 kW, $76,490 (CarExpert/Chasing Cars).
const fs = require('fs'), path = require('path');
const specs = {};
for (const yr of [2025, 2026]) {
  specs[`Lexus|LBX|${yr}|Morizo RR`] = {
    engine: '1.6L I3 Turbo G16E-GTS', displacement: 1618, cylinders: 3, aspiration: 'Turbo',
    drivetrain: 'AWD', transmission: '8-speed auto', power: 206, torque: 390,
    fc: 11.0, fh: 7.2, fx: 8.6, fuelType: 'petrol',
    acceleration: 5.2, topSpeed: 230, weight: 1455, seats: 5, cargo: 315,
    price: '~$76,490',
  };
}
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement243.json'),
  JSON.stringify({ specs }, null, 2) + '\n');
console.log('wrote supplement243.json with', Object.keys(specs).length, 'entries');
