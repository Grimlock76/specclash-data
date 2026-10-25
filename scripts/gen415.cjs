'use strict';
// supplement415.json — 2026-10-25: 2025 (AU) BMW iX1 (U11: eDrive20 xLine,
// xDrive30 xLine, xDrive30 M Sport) and iX2 (U10: eDrive20 M Sport, xDrive30 M
// Sport). Replaces stale rows ("eDrive20", "sDrive20", ~ prices). Specs +
// price when new: Carsales 2025 variant pages (base price incl GST & LCT; both
// iX1 xDrive30 grades list $86,800). Range ADR; dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, accelClaimed: true, ...o });
const FWD = { engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 250, acceleration: 8.6 };
const AWD = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 230, torque: null, acceleration: 5.6 };

writeLineups(415, {
  'BMW|iX1|2025': {
    'eDrive20 xLine': ev({ ...FWD, battery: '66.5 kWh', range: 464, weight: 1865, price: $(80600) }),
    'xDrive30 xLine': ev({ ...AWD, battery: '66.5 kWh', range: 400, weight: 2010, price: $(86800) }),
    'xDrive30 M Sport': ev({ ...AWD, battery: '66.5 kWh', range: 400, weight: 2010, price: $(86800) }),
  },
  'BMW|iX2|2025': {
    'eDrive20 M Sport': ev({ ...FWD, battery: '67 kWh', range: 427, weight: 1885, price: $(84700) }),
    'xDrive30 M Sport': ev({ ...AWD, battery: '67 kWh', range: 395, weight: 2020, price: $(87600) }),
  },
});
