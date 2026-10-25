'use strict';
// supplement389.json — 2026-10-25: VW ID.4 + ID.5 (E2) 2024-2026. AU sells Pro
// (RWD 210 kW, 82 kWh) and GTX (4MOTION 250 kW); there is no "Pro 4MOTION".
// Carsales files the MY25 launch cars under 2024 (ID.4 Pro only / ID.5 GTX
// only). Replaces stale rows (~ prices). Specs + price when new: Carsales
// variant pages (base price incl GST & LCT); 2026 = CarsGuide MSRP (Carsales
// 2026 shows drive-away only; MY27 2026 range figures not used). Range ADR.
// Kerb below tare -> weight null; dual-motor torque null. 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, weight: null, battery: '82 kWh', accelClaimed: true, ...o });
const PRO = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 210, torque: 545, acceleration: 6.7, towing: 1200 };
const GTX = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 250, torque: null, acceleration: 5.4, towing: 1400 };
const id4 = { pro: ev({ ...PRO, range: 544, cargo: 543 }), gtx: ev({ ...GTX, range: 511, cargo: 543 }) };
const id5 = { pro: ev({ ...PRO, range: 543, cargo: 549 }), gtx: ev({ ...GTX, battery: '84 kWh', range: 522, cargo: 549 }) };
const pr = (o, p) => ({ ...o, price: $(p) });

writeLineups(389, {
  'Volkswagen|ID.4|2024': { 'Pro': pr(id4.pro, 59990) },
  'Volkswagen|ID.4|2025': { 'Pro': pr(id4.pro, 59990), 'GTX': pr(id4.gtx, 69990) },
  'Volkswagen|ID.4|2026': { 'Pro': pr(id4.pro, 60990), 'GTX': pr(id4.gtx, 70990) },
  'Volkswagen|ID.5|2024': { 'GTX': pr(id5.gtx, 72990) },
  'Volkswagen|ID.5|2025': { 'Pro': pr(id5.pro, 62990), 'GTX': pr(id5.gtx, 72990) },
  'Volkswagen|ID.5|2026': { 'Pro': pr(id5.pro, 62990), 'GTX': pr(id5.gtx, 72990) },
});
