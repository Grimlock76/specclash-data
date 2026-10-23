'use strict';
// supplement265.json — 2026-10-23: 2026 (AU) Mercedes-Benz C-Class, E-Class,
// A-Class; Audi Q5 (B10); VW Golf (8.5), Tiguan (CT). Replaces estimated and
// stale-generation data. Specs + claimed 0-100 + "price when new": Carsales
// variant pages; CarsGuide 2026 MSRP where Carsales shows only drive-away
// (E200/E300/E53, C43 Edition R+, A-Class). Mercedes/Audi/VW often publish
// tare mass only → weight null. Hybrid system torque null unless the Carsales
// overview states it (Q5 e-hybrid 500 Nm).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cargo: null, topSpeed: null, acceleration: null, weight: null };
const t4 = (cc, extra) => ({ ...B, engine: `${(cc / 1000).toFixed(1)}L I4 Turbo Petrol`, displacement: cc, cylinders: 4, aspiration: 'Turbo',
  fuelType: 'petrol', ...extra });
const phev = (cc, extra) => ({ ...B, engine: `${(cc / 1000).toFixed(1)}L I4 Turbo PHEV`, displacement: cc, cylinders: 4, aspiration: 'Turbo',
  fuelType: 'plug-in hybrid', fc: null, fh: null, torque: null, ...extra });
const MB = { transmission: '9-speed automatic' };
writeLineups(265, {
  'Mercedes-Benz|C-Class|2026': {
    'C200': t4(1496, { ...MB, power: 150, torque: 300, drivetrain: 'RWD', fc: 9.1, fh: 5.5, fx: 6.8, acceleration: 7.3, topSpeed: 246, fuelTank: 66, cargo: 455, price: $(88928) }),
    'C300': t4(1999, { ...MB, power: 190, torque: 400, drivetrain: 'RWD', fc: 9.7, fh: 5.5, fx: 7.1, acceleration: 6.0, topSpeed: 250, fuelTank: 66, cargo: 455, price: $(99428) }),
    'C300 AMG Line Plus Edition': t4(1999, { ...MB, power: 190, torque: 400, drivetrain: 'RWD', fc: 9.7, fh: 5.5, fx: 7.1, acceleration: 6.0, topSpeed: 250, fuelTank: 66, cargo: 455, price: $(95327) }),
    'C350 e': phev(1999, { ...MB, power: 230, drivetrain: 'RWD', fx: 1.5, battery: '25.4 kWh', range: 104, acceleration: 6.1, price: $(99418) }),
    'C400 electric': { ...B, fuelType: 'electric', engine: 'Dual Motor Electric', aspiration: 'Electric', transmission: '1-speed automatic',
      cylinders: null, displacement: null, power: 360, torque: null, drivetrain: 'AWD', fc: null, fh: null, fx: null, battery: '94.4 kWh',
      range: 687, acceleration: 4.0, topSpeed: 210, weight: 2460, price: null },
    'C43 AMG': t4(1991, { ...MB, power: 310, torque: 500, drivetrain: 'AWD', fc: 12.2, fh: 7.2, fx: 9.1, acceleration: 4.3, topSpeed: 250, weight: 1856, price: $(125229) }),
    'C43 AMG Edition R+': t4(1991, { ...MB, power: 310, torque: 500, drivetrain: 'AWD', fc: 12.2, fh: 7.2, fx: 9.1, acceleration: 4.3, topSpeed: 250, weight: 1856, price: $(121127) }),
    'C63 S AMG E Performance': phev(1991, { ...MB, power: 500, drivetrain: 'AWD', fx: 6.4, battery: '6.1 kWh', acceleration: 3.4, topSpeed: 250, weight: 2165, price: $(195228) }),
  },
  'Mercedes-Benz|E-Class|2026': {
    'E200': t4(1999, { ...MB, power: 150, torque: 320, drivetrain: 'RWD', fc: 10.1, fh: 5.4, fx: 7.2, acceleration: 7.5, weight: 1825, fuelTank: 66, cargo: 540, price: $(119400) }),
    'E300': t4(1999, { ...MB, power: 190, torque: 400, drivetrain: 'RWD', fc: 10.1, fh: 5.4, fx: 7.2, acceleration: 6.3, weight: 1865, fuelTank: 66, cargo: 540, price: $(133600) }),
    'E300 AMG Night Edition': t4(1999, { ...MB, power: 190, torque: 400, drivetrain: 'RWD', fc: null, fh: null, fx: 7.5, acceleration: 6.3, cargo: 540, price: $(129400) }),
    'E53 AMG': { ...B, ...MB, engine: '3.0L I6 Turbo PHEV', displacement: 2999, cylinders: 6, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
      power: 450, torque: null, drivetrain: 'AWD', fc: null, fh: null, fx: 1.7, battery: '28.6 kWh', range: 100, acceleration: 3.8, topSpeed: 280, price: $(202100) },
    'E53 AMG Dark Carbon Edition': { ...B, ...MB, engine: '3.0L I6 Turbo PHEV', displacement: 2999, cylinders: 6, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
      power: 450, torque: null, drivetrain: 'AWD', fc: null, fh: null, fx: 1.7, battery: '28.6 kWh', range: 100, acceleration: 3.8, topSpeed: 280, price: $(206900) },
  },
  'Mercedes-Benz|A-Class|2026': {
    'A200': t4(1332, { transmission: '7-speed dual-clutch', power: 120, torque: 270, drivetrain: 'FWD', fc: 9.2, fh: 5.1, fx: 6.6, acceleration: 8.2, topSpeed: 225, fuelTank: 43, cargo: 350, price: $(58100) }),
    'A200 Special Edition': t4(1332, { transmission: '7-speed dual-clutch', power: 120, torque: 270, drivetrain: 'FWD', fc: 9.2, fh: 5.1, fx: 6.6, acceleration: 8.2, topSpeed: 225, fuelTank: 43, cargo: 350, price: $(58100) }),
    'A250 Special Edition': t4(1991, { transmission: '7-speed dual-clutch', power: 165, torque: 350, drivetrain: 'AWD', fc: 10.3, fh: 5.1, fx: 7.0, acceleration: 6.3, topSpeed: 250, cargo: 350, price: $(74600) }),
    'A35 AMG Edition R': t4(1991, { transmission: '7-speed dual-clutch', power: 225, torque: 400, drivetrain: 'AWD', fc: 11.1, fh: 6.4, fx: 8.2, acceleration: 4.7, topSpeed: 250, price: $(87327) }),
    'A45 S AMG Edition R+': t4(1991, { transmission: '8-speed dual-clutch', power: 310, torque: 500, drivetrain: 'AWD', fc: 11.7, fh: 7.3, fx: 8.9, acceleration: 3.9, topSpeed: 270, price: $(123927) }),
  },
  'Audi|Q5|2026': {
    'TFSI 150kW': t4(1984, { engine: '2.0L I4 Turbo Petrol mild hybrid', transmission: '7-speed dual-clutch', power: 150, torque: 340, drivetrain: 'FWD',
      fc: 5.0, fh: 6.1, fx: 5.7, acceleration: 8.6, topSpeed: 226, towing: 2000, price: $(85927) }),
    'TDI 150kW': { ...B, engine: '2.0L I4 Turbo Diesel', displacement: 1968, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', transmission: '7-speed dual-clutch',
      power: 150, torque: 400, drivetrain: 'AWD', fc: 5.4, fh: 5.4, fx: 5.4, acceleration: 7.4, towing: 2400, price: $(88527) },
    'TDI 150kW sport': { ...B, engine: '2.0L I4 Turbo Diesel', displacement: 1968, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', transmission: '7-speed dual-clutch',
      power: 150, torque: 400, drivetrain: 'AWD', fc: 5.4, fh: 5.4, fx: 5.4, acceleration: 7.4, towing: 2400, price: $(98527) },
    'e-hybrid 270kW': phev(1984, { transmission: '7-speed dual-clutch', power: 270, torque: 500, drivetrain: 'AWD', fx: 3.3, battery: '25.9 kWh', range: 82,
      acceleration: 5.1, topSpeed: 250, towing: 2000, price: $(100318) }),
    'TFSI 200kW sport': t4(1984, { transmission: '7-speed dual-clutch', power: 200, torque: 400, drivetrain: null, fc: 10.7, fh: 6.4, fx: 7.9,
      acceleration: 6.2, topSpeed: 250, price: $(100327) }),
  },
  'Volkswagen|Golf|2026': {
    '110TSI Life': t4(1395, { transmission: '8-speed automatic', power: 110, torque: 250, drivetrain: 'FWD', fc: 8.1, fh: 5.2, fx: 6.3, fuelTank: 50, cargo: 374, price: $(39290) }),
    '110TSI Style': t4(1395, { transmission: '8-speed automatic', power: 110, torque: 250, drivetrain: 'FWD', fc: 8.1, fh: 5.2, fx: 6.3, weight: 1319, fuelTank: 50, cargo: 374, price: $(44350) }),
    '110TSI R-Line': t4(1395, { transmission: '8-speed automatic', power: 110, torque: 250, drivetrain: 'FWD', fc: 8.1, fh: 5.2, fx: 6.3, weight: 1319, fuelTank: 50, cargo: 374, price: $(48690) }),
    'GTI': t4(1984, { transmission: '7-speed DSG', power: 195, torque: 370, drivetrain: 'FWD', fc: 9.4, fh: 5.9, fx: 7.2, acceleration: 5.9, weight: 1435, price: $(59890) }),
    'R': t4(1984, { transmission: '7-speed DSG', power: 245, torque: 420, drivetrain: 'AWD', fc: 10.6, fh: 7.0, fx: 8.3, acceleration: 4.6, weight: 1527, price: $(71990) }),
  },
  'Volkswagen|Tiguan|2026': {
    '110TSI Life': t4(1395, { transmission: '7-speed DSG', power: 110, torque: 250, drivetrain: 'FWD', fc: 9.8, fh: 6.3, fx: 7.6, towing: 1800, fuelTank: 55, cargo: 652, price: $(45650) }),
    '110TSI Elegance': t4(1395, { transmission: '7-speed DSG', power: 110, torque: 250, drivetrain: 'FWD', fc: 9.8, fh: 6.3, fx: 7.6, weight: 1559, towing: 1800, fuelTank: 55, cargo: 652, price: $(51450) }),
    '150TSI R-Line': t4(1984, { transmission: '7-speed DSG', power: 150, torque: 320, drivetrain: 'AWD', fc: 9.4, fh: 6.6, fx: 7.6, acceleration: 7.1, weight: 1723, towing: 2300, price: $(56850) }),
    '150TSI Elegance': t4(1984, { transmission: '7-speed DSG', power: 150, torque: 320, drivetrain: 'AWD', fc: 9.4, fh: 6.6, fx: 7.6, acceleration: 7.1, weight: 1723, towing: 2300, price: $(61590) }),
    '150TSI eHybrid Elegance': phev(1498, { transmission: '6-speed DSG', power: 150, drivetrain: 'FWD', fx: 1.6, battery: '19.7 kWh', range: 117, acceleration: 8.2, towing: 1800, price: $(64590) }),
    '195TSI R-Line': t4(1984, { transmission: '7-speed DSG', power: 195, torque: 400, drivetrain: 'AWD', fc: 10.5, fh: 7.4, fx: 8.5, acceleration: 5.9, weight: 1754, towing: 2300, price: $(71550) }),
    '200TSI eHybrid R-Line': phev(1498, { transmission: '6-speed DSG', power: 200, drivetrain: 'FWD', fx: 1.7, battery: '19.7 kWh', range: 113, acceleration: 7.2, towing: 2000, price: $(74550) }),
  },
});
