'use strict';
// supplement267.json — 2026-10-23: 2026 (AU) Hyundai Kona (SX2). Specs:
// Carsales variant pages (base petrol, Premium N Line, Hybrid, Electric,
// Electric Premium); prices: Carsales "price when new" / CarsGuide 2026 MSRP.
// Weights only where Carsales showed that grade. Electric range is WLTP
// (Carsales lists no ADR figure). Electric Elite / Std Range / N Line grades
// left out: CarsGuide prices conflict and their battery isn't confirmed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, topSpeed: null, acceleration: null, cargo: 407, weight: null };
const PET = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  transmission: 'CVT', drivetrain: 'FWD', power: 110, torque: 180, fc: 8.6, fh: 5.5, fx: 6.6, towing: 1300, fuelTank: 47 };
const HYB = { ...B, engine: '1.6L I4 Hybrid', displacement: 1580, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  transmission: '6-speed dual-clutch', drivetrain: 'FWD', power: 104, torque: null, fc: 3.9, fh: 4.0, fx: 3.9, towing: 1300, fuelTank: 38 };
const EV = { ...B, engine: 'Single Motor Electric', fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic',
  drivetrain: 'FWD', cylinders: null, displacement: null, power: 150, torque: 255, battery: '64.8 kWh', fc: null, fh: null, fx: null,
  towing: 750, weight: 1795 };
writeLineups(267, {
  'Hyundai|Kona|2026': {
    'Kona': { ...PET, weight: 1335, price: $(33700) },
    'Elite': { ...PET, price: $(36700) },
    'Elite N Line': { ...PET, price: $(40200) },
    'Premium': { ...PET, price: $(42700) },
    'Premium N Line': { ...PET, weight: 1455, price: $(45700) },
    'Hybrid': { ...HYB, weight: 1525, price: $(36950) },
    'Hybrid Elite': { ...HYB, price: $(39950) },
    'Hybrid Elite N Line': { ...HYB, price: $(43450) },
    'Hybrid Premium': { ...HYB, price: $(45950) },
    'Hybrid Premium N Line': { ...HYB, price: $(48950) },
    'Electric': { ...EV, range: 505, price: $(58000) },
    'Electric Premium': { ...EV, range: 444, price: $(68000) },
  },
});
