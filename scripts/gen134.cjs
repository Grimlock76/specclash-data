'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// MERCEDES-BENZ VITO W447 (2018–2026) — medium van (AU market)
// ─────────────────────────────────────────────────────────────
const vito114 = {
  engine: '2.1L 4-cyl OM651 CDI', fuelType: 'diesel', displacement: 2143,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-spd 7G-Tronic',
  power: 100, torque: 330, weight: 2020, seats: 9,
  fc: 8.3, fh: null, fx: null,
  acceleration: 13.5, topSpeed: 155
}
const vito116 = {
  ...vito114,
  power: 120, torque: 380, weight: 2040
}
const vitoPrices = {
  '114 CDI': { '2018':54990,'2019':55990,'2020':56990,'2021':57990,'2022':58990,'2023':60990,'2024':62990,'2025':64990,'2026':66990 },
  '116 CDI': { '2018':59990,'2019':60990,'2020':61990,'2021':62990,'2022':63990,'2023':65990,'2024':67990,'2025':69990,'2026':71990 },
}
for (const yr of ['2018','2019','2020','2021','2022','2023','2024','2025','2026']) {
  specs[`Mercedes-Benz|Vito|${yr}|114 CDI`] = { ...vito114, price: p(vitoPrices['114 CDI'][yr]) }
  specs[`Mercedes-Benz|Vito|${yr}|116 CDI`] = { ...vito116, price: p(vitoPrices['116 CDI'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// VOLKSWAGEN CRAFTER SY30 (2019–2026) — large van (AU market)
// ─────────────────────────────────────────────────────────────
const crafter35 = {
  engine: '2.0L 4-cyl TDI 410', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-spd DSG',
  power: 103, torque: 340, weight: 2505, seats: 3,
  fc: 8.6, fh: null, fx: null,
  acceleration: 14.0, topSpeed: 155
}
const crafter50 = {
  ...crafter35,
  power: 130, torque: 400, weight: 2580,
  fc: 9.0
}
const crafterPrices = {
  '35 TDI': { '2019':65990,'2020':66990,'2021':67990,'2022':68990,'2023':70990,'2024':72990,'2025':74990,'2026':76990 },
  '50 TDI': { '2019':77990,'2020':78990,'2021':79990,'2022':80990,'2023':82990,'2024':84990,'2025':86990,'2026':88990 },
}
for (const yr of ['2019','2020','2021','2022','2023','2024','2025','2026']) {
  specs[`Volkswagen|Crafter|${yr}|35 TDI`] = { ...crafter35, price: p(crafterPrices['35 TDI'][yr]) }
  specs[`Volkswagen|Crafter|${yr}|50 TDI`] = { ...crafter50, price: p(crafterPrices['50 TDI'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// FIAT DUCATO III (2018–2026) — large van/RV base (AU market)
// ─────────────────────────────────────────────────────────────
const ducato120 = {
  engine: '2.3L 4-cyl MultiJet II', fuelType: 'diesel', displacement: 2287,
  cylinders: 4, drivetrain: 'FWD', transmission: '6-spd Manual',
  power: 120, torque: 380, weight: 2260, seats: 3,
  fc: 8.8, fh: null, fx: null,
  acceleration: 14.0, topSpeed: 160
}
const ducato140 = {
  ...ducato120,
  power: 140, torque: 400, weight: 2300, seats: 3,
  transmission: '8-spd Auto',
  fc: 9.2
}
const ducatoPrices = {
  'LWB 120':  { '2018':61990,'2019':62990,'2020':63990,'2021':64990,'2022':65990,'2023':67990,'2024':69990,'2025':71990,'2026':73990 },
  'LWB 140':  { '2018':69990,'2019':70990,'2020':71990,'2021':72990,'2022':73990,'2023':75990,'2024':77990,'2025':79990,'2026':81990 },
}
for (const yr of ['2018','2019','2020','2021','2022','2023','2024','2025','2026']) {
  specs[`Fiat|Ducato|${yr}|LWB 120`] = { ...ducato120, price: p(ducatoPrices['LWB 120'][yr]) }
  specs[`Fiat|Ducato|${yr}|LWB 140`] = { ...ducato140, price: p(ducatoPrices['LWB 140'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// VW TRANSPORTER T7 (2025–2026) — new-gen van (AU market)
// ─────────────────────────────────────────────────────────────
const t7_110 = {
  engine: '2.0L 4-cyl TDI 110', fuelType: 'diesel', displacement: 1968,
  cylinders: 4, drivetrain: 'FWD', transmission: '7-spd DSG',
  power: 110, torque: 340, weight: 2070, seats: 9,
  fc: 8.0, fh: null, fx: null,
  acceleration: 12.0, topSpeed: 185
}
const t7_150 = {
  ...t7_110,
  power: 150, torque: 400, drivetrain: 'AWD', weight: 2210,
  fc: 8.6,
  acceleration: 10.5, topSpeed: 195
}
for (const yr of ['2025','2026']) {
  const adj = yr === '2026' ? 2000 : 0
  specs[`Volkswagen|Transporter|${yr}|Trendline TDI`]  = { ...t7_110, price: p(68990 + adj) }
  specs[`Volkswagen|Transporter|${yr}|Highline TDI 4M`] = { ...t7_150, price: p(82990 + adj) }
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement134.json', JSON.stringify(out, null, 2))
console.log(`supplement134.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
