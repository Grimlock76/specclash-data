'use strict';
// supplement326.json — 2026-10-25: 2025 (AU) Alfa Romeo Giulia, Stelvio,
// Tonale; 2026 Stelvio + Tonale; 2025 GWM Tank 300. Replaces stale guessed
// rows ("200hp", "280hp Sport", a 206 kW/400 Nm "PHEV" Tonale). Specs:
// Carsales variant pages. Prices: Carsales "price when new" (base incl GST &
// LCT) where shown; 2026 Stelvio Veloce from CarsGuide 2026 MSRP (Carsales
// drive-away only). Tank 300 2025: drive-away only and CarsGuide used ranges
// -> price null. Tare-only weights null; hybrid system torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { cargo: null, seats: 5 };
const A20 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1995, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 206,
  torque: 400, transmission: '8-speed automatic', acceleration: 5.7 };
const GI = { ...A20, drivetrain: 'RWD', fc: 8.2, fh: 4.9, fx: 6.1, topSpeed: 240, cargo: 480 };
const ST = { ...A20, drivetrain: 'AWD', fc: 8.9, fh: 5.9, fx: 7.0, topSpeed: 230, towing: 2300, weight: null };
const QV = { ...B, engine: '2.9L V6 Twin-Turbo Petrol', displacement: 2891, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  power: 375, torque: 600, transmission: '8-speed automatic' };
const TOM = { ...B, engine: '1.5L I4 Turbo Petrol (48V MHEV)', displacement: 1469, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  torque: null, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 5.3, fh: 5.5, fx: 5.4, topSpeed: null, weight: null };
const TOP = { ...B, engine: '1.3L I4 Turbo PHEV', displacement: 1332, cylinders: 4, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
  torque: null, transmission: '6-speed automatic', drivetrain: 'AWD', fc: null, fh: null, battery: '15.5 kWh', topSpeed: null,
  weight: null };
const TK = { topSpeed: null, acceleration: null, cargo: null, seats: 5, drivetrain: '4WD', towing: 3000, price: null };
const TKP = { ...TK, engine: '2.0L I4 Turbo Petrol', displacement: 1967, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 162,
  torque: 380, transmission: '8-speed automatic', fc: 11.8, fh: 8.1, fx: 9.5, weight: 2155 };
const TKD = { ...TK, engine: '2.4L I4 Turbo Diesel', displacement: 2370, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 135,
  torque: 480, transmission: '9-speed automatic', fc: 9.3, fh: 7.0, fx: 7.8, weight: 2280 };
const TKH = { ...TK, engine: '2.0L I4 Turbo Hybrid', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid', power: 255,
  torque: null, transmission: '9-speed automatic', fc: 7.8, fh: 8.8, fx: 8.4, weight: 2305 };

writeLineups(326, {
  'Alfa Romeo|Giulia|2025': {
    'Tributo Italiano': { ...GI, weight: null, price: $(80450) },
    'Intensa': { ...GI, weight: 1445, price: $(84990) },
    'Quadrifoglio': { ...QV, drivetrain: 'RWD', fc: 12.4, fh: 5.7, fx: 8.2, acceleration: 3.9, topSpeed: 307, weight: 1660,
      price: $(156990) },
  },
  'Alfa Romeo|Stelvio|2025': {
    'Tributo Italiano': { ...ST, price: $(88450) },
    'Intensa': { ...ST, price: $(94490) },
    'Quadrifoglio': { ...QV, drivetrain: 'AWD', fc: 13.6, fh: 8.2, fx: 10.2, acceleration: 3.8, topSpeed: 283, weight: 1830,
      towing: 2300, price: $(165990) },
  },
  'Alfa Romeo|Stelvio|2026': {
    'Veloce': { ...ST, price: $(89990) },
  },
  'Alfa Romeo|Tonale|2025': {
    'Intensa': { ...TOM, power: 118, acceleration: 8.8, price: $(69990) },
    'Tributo Italiano PHEV': { ...TOP, power: 208, fx: 1.5, range: 61, acceleration: 6.2, price: $(79000) },
  },
  'Alfa Romeo|Tonale|2026': {
    'Veloce': { ...TOM, power: 128, acceleration: 8.5, price: $(64990) },
    'Sport Speciale': { ...TOM, power: 128, acceleration: 8.5, price: $(69990) },
    'Veloce PHEV Q4': { ...TOP, power: 198, fx: 1.7, range: 60, acceleration: 6.6, price: $(78990) },
  },
  'GWM|Tank 300|2025': {
    'Lux Petrol': { ...TKP },
    'Lux Diesel': { ...TKD },
    'Ultra Petrol': { ...TKP },
    'Lux Hybrid': { ...TKH },
    'Ultra Hybrid': { ...TKH },
  },
});
