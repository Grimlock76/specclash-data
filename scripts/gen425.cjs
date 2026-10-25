'use strict';
// supplement425.json — 2026-10-25: Audi Q4 e-tron + Q4 Sportback e-tron 2024,
// 2025, 2026 (MY24–MY26 update: 45 RWD 210 kW / 82 kWh, 55 e-quattro 250 kW).
// Replaces stale "40" / "50 quattro" rows. Specs + price when new: Carsales
// variant pages (base price incl GST & LCT) — the priced variant is the
// Sportback body, so Sportback rows carry prices; the SUV body has only
// CarsGuide ranges → price null. Range ADR (2026 45: 531 km). Kerb < tare →
// weight null. Dual-motor torque null. MY27 cars filed under 2026 (150 kW base,
// performance S line) are left for 2027.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, weight: null, battery: '82 kWh', accelClaimed: true, ...o });
const R45 = (range, price) => ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 210, torque: 545, range, acceleration: 6.7,
  towing: 1000, price });
const Q55 = (price) => ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 250, torque: null, range: 503, acceleration: 5.4,
  towing: 1200, price });
const yr = (r45, p45, p55) => ({
  suv: { '45': R45(r45, null), '55 quattro': Q55(null) },
  sb: { '45': R45(r45, $(p45)), '55 quattro': Q55($(p55)) },
});
const y24 = yr(540, 86500, 109500), y25 = yr(540, 86500, 107500), y26 = yr(531, 86500, 99818);

writeLineups(425, {
  'Audi|Q4 e-tron|2024': y24.suv, 'Audi|Q4 Sportback e-tron|2024': y24.sb,
  'Audi|Q4 e-tron|2025': y25.suv, 'Audi|Q4 Sportback e-tron|2025': y25.sb,
  'Audi|Q4 e-tron|2026': y26.suv, 'Audi|Q4 Sportback e-tron|2026': y26.sb,
});
