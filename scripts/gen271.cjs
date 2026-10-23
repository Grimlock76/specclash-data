'use strict';
// supplement271.json — 2026-10-23: 2026 (AU) VW Amarok, Tayron, Polo,
// Touareg; Skoda Octavia, Karoq. Specs: Carsales variant pages (Redbook).
// Price when new: CarsGuide 2026 MSRP lists. Tare-only weights null; PHEV
// system torque null. Amarok TSI452 Aventura / TDI600 Aventura, PanAmericana,
// Dark Label share the Style powertrain + ADR fuel figures; their weight,
// payload and clearance stay null (no own page fetched). Touareg 210TDI
// Elegance weight null (Carsales kerb 2129 < tare 2242, inconsistent).
// Karoq prices use the CarsGuide rows that name the 110TSI badge.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
// Amarok
const AM = { ...B, cylinders: 4, aspiration: 'Twin-Turbo', fuelType: 'diesel', transmission: '10-speed automatic', drivetrain: '4WD',
  seats: 5, towing: 3500, fuelTank: 80 };
const TDI405 = { ...AM, engine: '2.0L I4 Turbo Diesel', displacement: 1996, aspiration: 'Turbo', power: 125, torque: 405,
  transmission: '6-speed automatic', fc: 10.0, fh: 6.9, fx: 8.0 };
const TDI500 = { ...AM, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, power: 154, torque: 500, fc: 7.7, fh: 6.9, fx: 7.2 };
const TSI452 = { ...AM, engine: '2.3L I4 Turbo Petrol', displacement: 2261, aspiration: 'Turbo', fuelType: 'petrol', power: 222, torque: 452,
  fc: 12.7, fh: 8.2, fx: 9.7, fuelTank: 82 };
const TDI600 = { ...AM, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600,
  fc: 10.0, fh: 7.5, fx: 8.4 };
// Tayron
const TAY = { ...B, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', transmission: '7-speed dual-clutch', cargo: 345 };
const T150 = { ...TAY, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 150, torque: 320, drivetrain: 'AWD', fc: 9.5, fh: 6.7,
  fx: 7.7, acceleration: 7.4, towing: 2500, fuelTank: 58 };
const TPH = { ...TAY, engine: '1.5L I4 Turbo PHEV', displacement: 1498, fuelType: 'plug-in hybrid', torque: null,
  transmission: '6-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, battery: '19.7 kWh', seats: 5 };
// Polo
const POLO = { ...B, engine: '1.0L I3 Turbo Petrol', displacement: 999, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  power: 85, torque: 200, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 6.4, fh: 4.9, fx: 5.4, acceleration: 10.4,
  seats: 5, fuelTank: 40, cargo: 351 };
// Octavia
const OCT = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 110, torque: 250, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 8.1, fh: 4.9, fx: 6.1, acceleration: 8.7, seats: 5,
  towing: 1500, fuelTank: 45, cargo: 600 };
const ORS = { ...OCT, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 195, torque: 370, transmission: '7-speed dual-clutch',
  fc: 9.3, fh: 5.6, fx: 7.0, acceleration: 6.4, towing: 1600, fuelTank: 50 };
// Karoq
const KQ = { ...OCT, fc: 8.1, fh: 5.7, fx: 6.6, acceleration: 9.2, fuelTank: 50, cargo: 521 };
// Touareg
const TG = { ...B, engine: '3.0L V6 Turbo Diesel', displacement: 2967, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel',
  transmission: '8-speed automatic', drivetrain: 'AWD', seats: 5, towing: 3500, fuelTank: 90, cargo: 810 };

writeLineups(271, {
  'Volkswagen|Amarok|2026': {
    'TDI405 Core': { ...TDI405, weight: 2283, payload: 967, groundClearance: 220, price: $(55490) },
    'TDI500 Life': { ...TDI500, weight: 2317, payload: 913, groundClearance: 235, price: $(59490) },
    'TDI500 Style': { ...TDI500, weight: 2345, payload: 935, groundClearance: 233, price: $(69740) },
    'TSI452 Style': { ...TSI452, groundClearance: 233, price: $(73740) },
    'TSI452 Aventura': { ...TSI452, price: $(79990) },
    'TDI600 Style': { ...TDI600, groundClearance: 233, price: $(73740) },
    'TDI600 Dark Label': { ...TDI600, price: $(77990) },
    'TDI600 PanAmericana': { ...TDI600, price: $(78990) },
    'TDI600 Aventura': { ...TDI600, price: $(82990) },
    'TDI600 W600': { ...TDI600, groundClearance: 232, price: $(91900) },
  },
  'Volkswagen|Tayron|2026': {
    '110TSI Life': { ...TAY, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, drivetrain: 'FWD',
      fc: 9.8, fh: 6.3, fx: 7.6, weight: 1669, seats: 7, towing: 1800, fuelTank: 55, price: $(48950) },
    '150TSI Life': { ...T150, seats: 5, price: $(54790) },
    '150TSI Elegance': { ...T150, weight: 1828, seats: 7, price: $(60390) },
    '150TSI eHybrid Elegance': { ...TPH, power: 150, fx: 1.7, range: 116, acceleration: 8.6, topSpeed: 210, towing: 1800, price: $(62390) },
    '195TSI R-Line': { ...T150, power: 195, torque: 400, fc: 10.6, fh: 7.5, fx: 8.6, acceleration: 6.1, weight: 1844, seats: 7,
      price: $(74550) },
    '200TSI eHybrid R-Line': { ...TPH, power: 200, fx: 1.8, range: 113, acceleration: 7.3, topSpeed: 215, towing: 2000, price: $(76550) },
  },
  'Volkswagen|Polo|2026': {
    '85TSI Life': { ...POLO, weight: 1168, price: $(30990) },
    '85TSI CityLife': { ...POLO, weight: 1168, price: $(32790) },
    '85TSI Style': { ...POLO, price: $(34990) },
    'GTI': { ...POLO, engine: '2.0L I4 Turbo Petrol', displacement: 1984, cylinders: 4, power: 147, torque: 320,
      transmission: '6-speed dual-clutch', fc: 8.7, fh: 5.6, fx: 6.7, acceleration: 6.8, cargo: 305, price: $(41790) },
  },
  'Volkswagen|Touareg|2026': {
    '170TDI': { ...TG, power: 170, torque: 500, fc: 9.8, fh: 6.4, fx: 7.6, acceleration: 8.0, weight: 2224, price: $(89490) },
    '210TDI Elegance': { ...TG, power: 210, torque: 600, fc: 9.8, fh: 6.6, fx: 7.7, acceleration: 6.0, price: $(103490) },
    'R eHybrid': { ...TG, engine: '3.0L V6 Turbo PHEV', displacement: 2995, fuelType: 'plug-in hybrid', power: 340, torque: null,
      fc: null, fh: null, fx: 5.7, battery: '17.9 kWh', range: 46, acceleration: 5.1, weight: 2463, fuelTank: null, cargo: null,
      price: $(133490) },
  },
  'Skoda|Octavia|2026': {
    '110TSI Select Liftback': { ...OCT, price: $(39590) },
    'Select mHEV Liftback': { ...OCT, engine: '1.5L I4 Turbo Petrol (MHEV)', displacement: 1498, transmission: '7-speed dual-clutch',
      fc: null, fh: null, fx: 5.4, acceleration: 8.5, price: $(41990) },
    '110TSI Sportline Liftback': { ...OCT, price: $(44490) },
    'RS Liftback': { ...ORS, price: $(58490) },
    '110TSI Select Wagon': { ...OCT, fh: 5.0, fx: 6.2, cargo: 640, price: $(41090) },
    'RS Wagon': { ...ORS, fc: 9.4, fh: 5.7, acceleration: 6.5, cargo: 640, price: $(59990) },
  },
  'Skoda|Karoq|2026': {
    '110TSI Select': { ...KQ, groundClearance: 161, price: $(38490) },
    '110TSI Sportline': { ...KQ, price: $(44490) },
    '140TSI Sportline': { ...KQ, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 140, torque: 320,
      transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.6, fh: 6.3, fx: 7.2, acceleration: 7.0, towing: 1900, fuelTank: 55,
      groundClearance: 170, price: $(52990) },
  },
});
