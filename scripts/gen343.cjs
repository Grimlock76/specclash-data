'use strict';
// supplement343.json — 2026-10-25: Mitsubishi ASX 2024 (XD) and Hyundai Venue
// 2024 + 2026. Specs as gen342 (same Carsales spec tables); price when new
// from the Carsales variant pages for each year (base price incl GST & LCT);
// 2026 Venue Elite page shows drive-away only -> CarsGuide 2026 MSRP. 2026
// Venue pages list tare only -> weight null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const a = (t, p, o = {}) => ({ ...existing('Mitsubishi', 'ASX', 2025, t), price: $(p), ...o });
const v = (t, p, o = {}) => ({ ...existing('Hyundai', 'Venue', 2025, t), price: $(p), ...o });

writeLineups(343, {
  'Mitsubishi|ASX|2024': {
    'ES': a('ES (XD)', 27990),
    'MR': a('MR (XD)', 29740),
    'LS': a('ES (XD)', 30490, { weight: 1389 }),
    'GSR': a('GSR (XD)', 32740),
    'Exceed': a('GSR (XD)', 35240, { weight: 1437 }),
  },
  'Hyundai|Venue|2024': {
    'Venue': v('Venue', 24750),
    'Active': v('Active', 27000),
    'Elite': v('Elite', 29500, { weight: 1225 }),
  },
  'Hyundai|Venue|2026': {
    'Venue': v('Venue', 26000, { weight: null }),
    'Active': v('Active', 28250, { weight: null }),
    'Elite': v('Elite', 30500, { weight: null }),
  },
});
