'use strict';
// supplement411.json — 2026-10-25: 2024 (AU) Volvo XC60 + XC90 (MY24 grades:
// Plus / Ultimate B5 Bright, B6 (XC90), Recharge Plus / Ultimate T8, T8 Black
// Edition). Replaces stale rows ("T5 Momentum", "T6 Inscription", "T8 Twin
// Engine", ~ prices). Specs as the 2025 rows (gen305; same Carsales spec
// tables) + price when new: Carsales MY24 variant pages (base price incl GST
// & LCT). Tare-only weights null. XC90 B6: 220 kW / 420 Nm, 8.2 L combined.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const x6 = t => ({ ...existing('Volvo', 'XC60', 2025, t), weight: null });
const x9 = t => ({ ...existing('Volvo', 'XC90', 2025, t), weight: null });

writeLineups(411, {
  // XC90 2023 rows "B5" / "T8 Recharge" leaned on the stale 2024 rows -> same-gen specs, price unchecked -> null
  'Volvo|XC90|2023': { 'B5': { ...x9('Ultra B5 Bright'), price: null }, 'T8 Recharge': { ...x9('Ultra T8 PHEV'), price: null } },
  'Volvo|XC60|2024': {
    'Plus B5': { ...x6('Plus B5 Bright'), price: $(73990) },
    'Ultimate B5 Bright': { ...x6('Ultra B5 Bright'), price: $(80090) },
    'Recharge Plus T8': { ...x6('Plus T8 PHEV'), price: $(92390) },
    'Recharge Ultimate T8': { ...x6('Ultra T8 PHEV'), price: $(101390) },
    'Recharge T8 Black Edition': { ...x6('Ultra T8 PHEV'), price: $(103390) },
  },
  'Volvo|XC90|2024': {
    'Ultimate B5 Bright': { ...x9('Ultra B5 Bright'), price: $(99940) },
    'Ultimate B6 Bright': { ...x9('Ultra B5 Bright'), power: 220, torque: 420, fx: 8.2, acceleration: null, accelClaimed: false,
      price: $(107940) },
    'Recharge Ultimate T8': { ...x9('Ultra T8 PHEV'), price: $(128390) },
  },
});
