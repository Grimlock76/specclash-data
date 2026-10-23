'use strict';
// supplement275.json — 2026-10-23: 2026 (AU) Mercedes-Benz GLA, GLC (X254
// facelift + GLC electric), GLE. Specs + price when new: Carsales variant
// pages (Carsales slugs: gla-class / glc-class / gle-class). CarsGuide 2026
// MSRP where Carsales shows only drive-away (GLC200, GLC400 electric, GLC53,
// GLE350 d). Mercedes mostly publishes tare only -> weight null. PHEV system
// torque null. GLC electric range is WLTP (no ADR published).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const I4 = (cc, extra) => ({ ...B, engine: `${(cc / 1000).toFixed(1)}L I4 Turbo Petrol`, displacement: cc, cylinders: 4,
  aspiration: 'Turbo', fuelType: 'petrol', ...extra });
const GLA = { transmission: '8-speed dual-clutch', drivetrain: 'AWD' };
const GLC = { transmission: '9-speed automatic', drivetrain: 'AWD', towing: 2400 };
const GLE = { transmission: '9-speed automatic', drivetrain: 'AWD', towing: 2700 };
const I6P = { ...B, engine: '3.0L I6 Turbo Petrol (MHEV)', displacement: 2999, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol' };
const I6D = { ...B, engine: '3.0L I6 Turbo Diesel', displacement: 2989, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel' };

writeLineups(275, {
  'Mercedes-Benz|GLA|2026': {
    'GLA200': I4(1332, { transmission: '7-speed dual-clutch', drivetrain: 'FWD', power: 120, torque: 270, fc: 9.6, fh: 6.0, fx: 7.4,
      acceleration: 8.9, topSpeed: 210, fuelTank: 43, cargo: 425, price: $(64300) }),
    'GLA250 e': I4(1332, { engine: '1.3L I4 Turbo PHEV', fuelType: 'plug-in hybrid', transmission: '8-speed dual-clutch',
      drivetrain: 'FWD', power: 160, torque: null, fc: null, fh: null, fx: 1.2, battery: '13 kWh', range: 65, acceleration: 7.9,
      topSpeed: 210, price: $(78800) }),
    'GLA250 4MATIC': I4(1991, { ...GLA, power: 165, torque: 350, fc: 10.8, fh: 6.1, fx: 7.9, acceleration: 6.8, topSpeed: 240,
      weight: 1736, price: $(81527) }),
    'GLA35 AMG 4MATIC': I4(1991, { ...GLA, power: 225, torque: 400, fc: 12.2, fh: 7.1, fx: 9.0, acceleration: 5.2, topSpeed: 250,
      price: $(100026) }),
  },
  'Mercedes-Benz|GLC|2026': {
    'GLC200 4MATIC': I4(1999, { ...GLC, power: 150, torque: 320, fc: 9.8, fh: 6.2, fx: 7.5, acceleration: 7.8, topSpeed: 221,
      weight: 1976, fuelTank: 62, cargo: 620, price: $(90127) }),
    'GLC300 4MATIC': I4(1999, { ...GLC, power: 190, torque: 400, fc: 9.9, fh: 6.4, fx: 7.7, acceleration: 6.3, topSpeed: 240,
      weight: 1998, price: $(118427) }),
    'GLC350 e 4MATIC': I4(1999, { ...GLC, engine: '2.0L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 230, torque: null, fc: null,
      fh: null, fx: 1.2, battery: '25.3 kWh', range: 132, acceleration: 6.7, price: $(99900) }),
    'GLC400 4MATIC Electric': { ...B, ...GLC, engine: 'Dual-Motor Electric', displacement: null, cylinders: null, aspiration: null,
      fuelType: 'electric', transmission: '2-speed automatic', power: 360, torque: null, fc: null, fh: null, fx: null, battery: '94.4 kWh',
      range: 630, acceleration: 4.3, topSpeed: 210, weight: 2535, price: $(112200) },
    'GLC43 AMG 4MATIC': I4(1991, { ...GLC, power: 310, torque: 500, fc: 13.5, fh: 8.0, fx: 10.0, acceleration: 4.8, topSpeed: 250,
      weight: 2037, towing: 1800, price: $(149300) }),
    'GLC53 AMG 4MATIC+': { ...I6P, ...GLC, power: 330, torque: 600, fc: null, fh: null, fx: 9.6, acceleration: 4.2, topSpeed: 250,
      price: $(140600) },
    'GLC63 S E Performance': I4(1991, { ...GLC, engine: '2.0L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 500, torque: null,
      fc: null, fh: null, fx: 7.3, battery: '6.1 kWh', range: 14, acceleration: 3.5, topSpeed: 275, weight: 2374, towing: null,
      price: $(203000) }),
  },
  'Mercedes-Benz|GLE|2026': {
    'GLE300 d 4MATIC': { ...B, ...GLE, engine: '2.0L I4 Turbo Diesel', displacement: 1993, cylinders: 4, aspiration: 'Turbo',
      fuelType: 'diesel', power: 198, torque: 550, fc: 7.8, fh: 5.7, fx: 6.6, acceleration: 6.9, topSpeed: 230, fuelTank: 85,
      price: $(138828) },
    'GLE350 d 4MATIC': { ...I6D, ...GLE, power: 210, torque: 650, fc: null, fh: null, fx: 8.2, acceleration: 6.2, topSpeed: 235,
      price: $(142300) },
    'GLE450 d 4MATIC': { ...I6D, ...GLE, power: 270, torque: 750, fc: 9.2, fh: 6.4, fx: 7.4, acceleration: 5.6, topSpeed: 250,
      price: $(156528) },
    'GLE450 4MATIC': { ...I6P, ...GLE, displacement: 2998, power: 280, torque: 500, fc: 12.4, fh: 7.8, fx: 9.5, acceleration: 5.6,
      price: $(165328) },
    'GLE53 AMG 4MATIC+': { ...I6P, ...GLE, power: 320, torque: 560, fc: null, fh: null, fx: 10.1, acceleration: 5.0, topSpeed: 250,
      price: $(197327) },
    'GLE63 S AMG 4MATIC+': { ...B, ...GLE, engine: '4.0L V8 Twin-Turbo Petrol (MHEV)', displacement: 3982, cylinders: 8,
      aspiration: 'Twin-Turbo', fuelType: 'petrol', power: 450, torque: 850, fc: 18.1, fh: 10.0, fx: 13.0, acceleration: 3.9,
      topSpeed: 280, price: $(278128) },
  },
});
