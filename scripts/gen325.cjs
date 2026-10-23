'use strict';
// supplement325.json — 2026-10-23: 2025 (AU) GWM Haval Jolion (A01/A02) and
// 2026 GWM Tank 300 (P01). Replaces stale guessed rows. Specs: Carsales
// variant pages. Jolion: Carsales lists drive-away prices only and CarsGuide
// 2025 shows used ranges -> price null. Tank 300: CarsGuide 2026 MSRP
// (Carsales drive-away only); PHEV system torque 750 Nm from the Carsales
// overview; Hybrid system torque not stated -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const JOL = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, towing: 1500, fuelTank: 55, cargo: 337, price: null };
const JOL1 = { ...JOL, power: 105, torque: 210, fx: 6.7, weight: 1410 };
const JOL2 = { ...JOL, power: 130, torque: 270, weight: 1520 };
const JOLH = { ...JOL, engine: '1.5L I4 Hybrid', aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 140, torque: null,
  transmission: '2-speed DHT', towing: 1300 };
const TK = { ...B, drivetrain: '4WD', towing: 3000 };
const TKD = { ...TK, engine: '2.4L I4 Turbo Diesel', displacement: 2370, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 135,
  torque: 480, transmission: '9-speed automatic', fc: 9.3, fh: 7.0, fx: 7.8, weight: 2280 };
const TKP = { ...TK, cylinders: 4, aspiration: 'Turbo', displacement: 1998, fuelType: 'plug-in hybrid', engine: '2.0L I4 Turbo PHEV (Hi4-T)',
  power: 300, torque: 750, transmission: '9-speed automatic', fc: null, fh: null, fx: 1.9, battery: '37.1 kWh', range: 115, weight: 2615 };

writeLineups(325, {
  'GWM|Haval Jolion|2025': {
    'Premium': { ...JOL1 },
    'Lux': { ...JOL1 },
    'Ultra': { ...JOL2, fc: 9.7, fh: 6.2, fx: 7.5 },
    'Vanta': { ...JOL2, fx: 6.5 },
    'Premium Hybrid': { ...JOLH, fx: 4.8, weight: 1575 },
    'Lux Hybrid': { ...JOLH, fc: 3.7, fh: 6.0, fx: 5.1, weight: 1620 },
    'Ultra Hybrid': { ...JOLH, fc: 3.7, fh: 6.0, fx: 5.1, weight: 1620 },
    'Vanta Hybrid': { ...JOLH, fx: 4.8, weight: 1575 },
  },
  'GWM|Tank 300|2026': {
    'Lux Diesel': { ...TKD, price: $(46190) },
    'Ultra Petrol': { ...TK, engine: '2.0L I4 Turbo Petrol', displacement: 1967, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
      power: 162, torque: 380, transmission: '8-speed automatic', fc: 11.8, fh: 8.1, fx: 9.5, weight: 2155, price: $(48190) },
    'Ultra Diesel': { ...TKD, price: $(50190) },
    'Ultra Hybrid': { ...TK, engine: '2.0L I4 Turbo Hybrid', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
      power: 255, torque: null, transmission: '9-speed automatic', fc: 9.4, fh: 8.2, fx: 8.4, weight: 2335, price: $(55190) },
    'Lux PHEV': { ...TKP, price: $(55990) },
    'Ultra PHEV': { ...TKP, price: $(59990) },
  },
});
