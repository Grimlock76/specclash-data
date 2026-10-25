'use strict';
// supplement338.json — 2026-10-25: Honda Civic 2025 + 2026 (11th gen: e:HEV L,
// e:HEV LX, Type R), ZR-V 2026 and HR-V 2026. Replaces stale petrol/RS rows.
// Specs: Carsales variant pages. Prices: 2026 = CarsGuide 2026 MSRP (Carsales
// shows Honda's drive-away figure); Civic 2025 = drive-away only and CarsGuide
// used ranges -> null. e:HEV power/torque = drive motor (Civic 135 kW /
// 315 Nm; ZR-V motor torque not listed -> null). Tare-only weights null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4, drivetrain: 'FWD' };
const CEH = { ...B, engine: '2.0L I4 e:HEV (motor-driven hybrid)', displacement: 1993, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 135, torque: 315, transmission: '1-speed automatic', fc: 2.0, fh: 5.5, fx: 4.2, fuelTank: 40 };
const CTR = { ...B, engine: '2.0L I4 Turbo Petrol (K20C)', displacement: 1996, aspiration: 'Turbo', fuelType: 'petrol', power: 235,
  torque: 420, transmission: '6-speed manual', fc: 11.8, fh: 6.9, fx: 8.7, weight: 1429, seats: 4, fuelTank: 47 };
const civic = p => ({
  'e:HEV L': { ...CEH, weight: 1465, price: p.l },
  'e:HEV LX': { ...CEH, weight: 1497, price: p.lx },
  'Type R': { ...CTR, price: p.r },
});
const ZT = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, aspiration: 'Turbo', fuelType: 'petrol', power: 131, torque: 240,
  transmission: 'CVT', fuelTank: 57 };
const ZX = { ...ZT, fc: 8.9, fh: 5.8, fx: 7.0, weight: 1470 };
const ZL = { ...ZT, fc: 9.3, fh: 6.2, fx: 7.4 };
const ZH = { ...B, engine: '2.0L I4 e:HEV (motor-driven hybrid)', displacement: 1993, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 135, torque: null, transmission: '1-speed automatic', fc: 2.5, fh: 6.5, fx: 5.0 };

writeLineups(338, {
  'Honda|Civic|2025': civic({ l: null, lx: null, r: null }),
  'Honda|Civic|2026': civic({ l: $(49900), lx: $(55900), r: $(85000) }),
  'Honda|ZR-V|2026': {
    'VTi X+': { ...ZX, price: $(37900) },
    'VTi X': { ...ZX, price: $(39900) },
    'VTi L+': { ...ZL, weight: 1488, price: $(43400) },
    'e:HEV X': { ...ZH, weight: 1561, price: $(43400) },
    'e:HEV L': { ...ZH, weight: 1579, price: $(45900) },
    'VTi LX': { ...ZL, weight: 1510, price: $(49000) },
    'e:HEV LX': { ...ZH, weight: 1586, price: $(51900) },
  },
  'Honda|HR-V|2026': {
    'Vi X': { ...existing('Honda', 'HR-V', 2025, 'Vi X'), price: $(32900) },
    'e:HEV X': { ...existing('Honda', 'HR-V', 2025, 'e:HEV X'), price: $(39900) },
    'e:HEV L': { ...existing('Honda', 'HR-V', 2025, 'e:HEV L'), price: $(42900) },
    'e:HEV RS': { ...existing('Honda', 'HR-V', 2025, 'e:HEV L'), weight: null, price: $(44400) },
  },
});
