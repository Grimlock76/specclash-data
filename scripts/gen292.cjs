'use strict';
// supplement292.json — 2026-10-23: Toyota LandCruiser 300 2022-2024 (AU).
// The old lists carried "Petrol" grades — the LC300 was never sold here with
// a petrol engine — and no GR Sport. Rebuilt from Carsales 2022/2023/2024
// variant pages (all FJA300R 3.3 twin-turbo diesel); price = Carsales
// "price when new" for that year.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const LC = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', cargo: null, acceleration: null,
  topSpeed: null, towing: 3500, fuelTank: 110, engine: '3.3L V6 Twin-Turbo Diesel', displacement: 3346, cylinders: 6,
  aspiration: 'Twin-Turbo', power: 227, torque: 700, fc: 11.3, fh: 7.6, fx: 8.9 };
const year = p => ({
  'GX': { ...LC, weight: 2495, seats: 5, payload: 785, groundClearance: 245, price: $(p[0]) },
  'GXL': { ...LC, weight: 2580, seats: 7, price: $(p[1]) },
  'VX': { ...LC, weight: 2630, seats: 7, price: $(p[2]) },
  'Sahara': { ...LC, weight: 2630, seats: 7, price: $(p[3]) },
  'GR Sport': { ...LC, weight: 2630, seats: 5, groundClearance: 245, price: $(p[4]) },
  'Sahara ZX': { ...LC, weight: 2610, seats: 5, groundClearance: 245, price: $(p[5]) },
});
const MY23 = [96991, 108791, 120991, 138191, 144791, 145791];
writeLineups(292, {
  'Toyota|LandCruiser 300|2022': year([94301, 106101, 118301, 135501, 142101, 143101]),
  'Toyota|LandCruiser 300|2023': year(MY23),
  'Toyota|LandCruiser 300|2024': year(MY23),
});
