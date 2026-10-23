'use strict';
// supplement307.json — 2026-10-23: 2025 (AU) GWM Haval H6 (B01). Carsales'
// 2025 listing mixes the outgoing 150 kW / 7-speed DCT cars with the updated
// 170 kW / 9-speed DCT Lux and Ultra; the older grades carry "(150kW)".
// Specs + price when new: Carsales 2025 variant pages (spec tables; the 9DCT
// pages' overview text repeats the old 150 kW figures). Hybrid/PHEV system
// torque null; tare-only weights null. The "Ultra Hybrid AWD 268kW" listing
// duplicates the AWD PHEV powertrain and is left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const OLD = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 150, torque: 320, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 9.3, fh: 6.3, fx: 7.4, towing: 2000, fuelTank: 61 };
const NEW = { ...OLD, power: 170, torque: 380, transmission: '9-speed dual-clutch', fc: null, fh: null, weight: 1630 };
const HY = { ...B, engine: '1.5L I4 Turbo Hybrid', displacement: 1499, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 179, torque: null, transmission: '2-speed DHT', drivetrain: 'FWD', fc: 3.5, fh: 6.2, fx: 5.2, towing: 1500 };
const PH = { ...HY, engine: '1.5L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 240, fc: null, fh: null, fx: 1.0,
  battery: '19.1 kWh', range: 106, weight: 1895 };

writeLineups(307, {
  'GWM|Haval H6|2025': {
    'Premium': { ...OLD, price: $(33990) },
    'Vanta': { ...OLD, price: $(36990) },
    'Lux (150kW)': { ...OLD, weight: 1630, price: $(36990) },
    'Ultra (150kW)': { ...OLD, weight: 1630, price: $(39990) },
    'Ultra AWD (150kW)': { ...OLD, drivetrain: 'AWD', fc: 10.2, fh: 7.2, fx: 8.3, price: $(42990) },
    'Lux': { ...NEW, price: $(35990) },
    'Ultra': { ...NEW, price: $(38990) },
    'Lux Hybrid': { ...HY, price: $(42490) },
    'Ultra Hybrid': { ...HY, weight: 1720, price: $(43990) },
    'Lux PHEV': { ...PH, price: $(44990) },
    'Ultra PHEV': { ...PH, price: $(47990) },
    'Ultra PHEV AWD': { ...PH, power: 268, transmission: '6-speed automatic', drivetrain: 'AWD', fx: 1.1, range: 100, weight: 1980,
      price: $(50990) },
  },
});
