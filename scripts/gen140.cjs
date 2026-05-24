'use strict'
const fs = require('fs')

const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─────────────────────────────────────────────────────────────
// VOLVO XC40 — 2023 B3/B5/Recharge P8 + 2026 B4/Recharge (AU)
// ─────────────────────────────────────────────────────────────
specs['Volvo|XC40|2023|B3'] = {
  engine: '1.5L I3 Mild Hybrid', fuelType: 'petrol', displacement: 1477,
  cylinders: 3, drivetrain: 'FWD', transmission: '7-speed DCT',
  power: 120, torque: 265, weight: 1680, seats: 5,
  fc: 7.0, fh: 5.2, fx: 9.9,
  acceleration: 10.5, topSpeed: 195, price: p(51990)
}
specs['Volvo|XC40|2023|B5'] = {
  engine: '2.0L I4 Mild Hybrid', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 350, weight: 1760, seats: 5,
  fc: 8.2, fh: 6.1, fx: 11.6,
  acceleration: 6.4, topSpeed: 210, price: p(58990)
}
specs['Volvo|XC40|2023|Recharge P8'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '75 kWh', range: 418,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 300, torque: 660, weight: 2232, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 4.9, topSpeed: 180, price: p(76990)
}
specs['Volvo|XC40|2026|B4'] = {
  engine: '2.0L I4 Mild Hybrid', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 145, torque: 300, weight: 1700, seats: 5,
  fc: 7.4, fh: 5.5, fx: 10.4,
  acceleration: 8.9, topSpeed: 200, price: p(57990)
}
specs['Volvo|XC40|2026|Recharge'] = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '69 kWh', range: 460,
  drivetrain: 'FWD', transmission: 'Single-speed',
  power: 170, torque: 330, weight: 2025, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 160, price: p(72990)
}

// ─────────────────────────────────────────────────────────────
// LAND ROVER DEFENDER 2023 — 90 S / 110 S / 110 P400 / 110 V8 (AU)
// ─────────────────────────────────────────────────────────────
specs['Land Rover|Defender|2023|90 S'] = {
  engine: '2.0L I4 P300 Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 221, torque: 400, weight: 2105, seats: 5,
  fc: 10.8, fh: 8.9, fx: 14.5,
  acceleration: 6.1, topSpeed: 191, price: p(82990)
}
specs['Land Rover|Defender|2023|110 S'] = {
  engine: '2.0L I4 P300 Ingenium', fuelType: 'petrol', displacement: 1997,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 221, torque: 400, weight: 2210, seats: 7,
  fc: 11.4, fh: 9.4, fx: 15.3,
  acceleration: 6.5, topSpeed: 191, price: p(86990)
}
specs['Land Rover|Defender|2023|110 P400'] = {
  engine: '3.0L I6 P400 Mild Hybrid', fuelType: 'petrol', displacement: 2997,
  cylinders: 6, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 294, torque: 550, weight: 2275, seats: 7,
  fc: 11.4, fh: 9.4, fx: 15.3,
  acceleration: 5.4, topSpeed: 191, price: p(122990)
}
specs['Land Rover|Defender|2023|110 V8'] = {
  engine: '5.0L V8 P525 Supercharged', fuelType: 'petrol', displacement: 5000,
  cylinders: 8, drivetrain: 'AWD', transmission: '8-speed automatic',
  power: 386, torque: 625, weight: 2450, seats: 5,
  fc: 17.5, fh: 14.4, fx: 23.4,
  acceleration: 5.4, topSpeed: 240, price: p(174990)
}

// ─────────────────────────────────────────────────────────────
// SUZUKI VITARA 2026 — GL / GLX / GLX Turbo (AU)
// ─────────────────────────────────────────────────────────────
const vitaraBase = {
  engine: '1.4L I4 Boosterjet Mild Hybrid', fuelType: 'petrol', displacement: 1373,
  cylinders: 4, transmission: '6-speed automatic',
  fc: 5.8, fh: 5.0, fx: 7.9, acceleration: 9.5, topSpeed: 185, seats: 5
}
specs['Suzuki|Vitara|2026|GL']        = { ...vitaraBase, drivetrain:'FWD', power:95, torque:220, weight:1115, price:p(28990) }
specs['Suzuki|Vitara|2026|GLX']       = { ...vitaraBase, drivetrain:'FWD', power:95, torque:220, weight:1125, price:p(33990) }
specs['Suzuki|Vitara|2026|GLX Turbo'] = { ...vitaraBase, drivetrain:'AWD', power:103, torque:220, weight:1180, fc:6.2, fh:5.4, fx:8.4, acceleration:9.0, price:p(39990) }

// ─────────────────────────────────────────────────────────────
// GWM UTE 2026 — Standard / Premium / Cannon-L (AU)
// ─────────────────────────────────────────────────────────────
const gwmBase = {
  engine: '2.0L I4 Turbo Diesel', fuelType: 'diesel', displacement: 1996,
  cylinders: 4, drivetrain: '4WD', transmission: '8-speed auto',
  seats: 5, acceleration: 12.0, topSpeed: 170
}
specs['GWM|Ute|2026|Standard']  = { ...gwmBase, power:120, torque:400, weight:2025, fc:8.8, fh:6.8, fx:11.7, price:p(34990) }
specs['GWM|Ute|2026|Premium']   = { ...gwmBase, power:120, torque:400, weight:2065, fc:8.8, fh:6.8, fx:11.7, price:p(39990) }
specs['GWM|Ute|2026|Cannon-L']  = { ...gwmBase, power:160, torque:480, weight:2190, fc:9.3, fh:7.2, fx:12.3, acceleration:10.8, topSpeed:177, price:p(43990) }

// ─────────────────────────────────────────────────────────────
// JEEP WRANGLER 2023–2024 — Sahara / Sport S / Rubicon 392 (AU)
// ─────────────────────────────────────────────────────────────
const wrSahara  = { engine:'3.6L V6 Pentastar', fuelType:'petrol', displacement:3604, cylinders:6, drivetrain:'4WD', transmission:'8-speed auto', power:213, torque:347, weight:1948, seats:4, fc:13.2, fh:9.8, fx:18.6, acceleration:8.7, topSpeed:182 }
const wrSportS  = { engine:'3.6L V6 Pentastar', fuelType:'petrol', displacement:3604, cylinders:6, drivetrain:'4WD', transmission:'8-speed auto', power:213, torque:347, weight:1905, seats:4, fc:13.0, fh:9.6, fx:18.3, acceleration:8.5, topSpeed:183 }
const wrRub392  = { engine:'6.4L HEMI V8', fuelType:'petrol', displacement:6424, cylinders:8, drivetrain:'4WD', transmission:'8-speed auto', power:331, torque:617, weight:2222, seats:4, fc:19.6, fh:14.5, fx:27.6, acceleration:6.7, topSpeed:190 }
const wrPrices = {
  Sahara:      { '2023':61990, '2024':63990 },
  'Sport S':   { '2023':54990, '2024':56990 },
  'Rubicon 392':{ '2023':112990,'2024':114990 },
}
for (const yr of ['2023','2024']) {
  specs[`Jeep|Wrangler|${yr}|Sahara`]       = { ...wrSahara,  price: p(wrPrices.Sahara[yr]) }
  specs[`Jeep|Wrangler|${yr}|Sport S`]      = { ...wrSportS,  price: p(wrPrices['Sport S'][yr]) }
  specs[`Jeep|Wrangler|${yr}|Rubicon 392`]  = { ...wrRub392,  price: p(wrPrices['Rubicon 392'][yr]) }
}

// ─────────────────────────────────────────────────────────────
// SUZUKI GRAND VITARA 2026 — GL / GLX (AU)
// ─────────────────────────────────────────────────────────────
specs['Suzuki|Grand Vitara|2026|GL']  = { engine:'1.5L I4 Mild Hybrid', fuelType:'petrol', displacement:1462, cylinders:4, drivetrain:'FWD', transmission:'6-speed automatic', power:77, torque:137, weight:1335, seats:5, fc:5.8, fh:5.2, fx:7.5, acceleration:12.5, topSpeed:170, price:p(34990) }
specs['Suzuki|Grand Vitara|2026|GLX'] = { engine:'1.5L I4 Mild Hybrid', fuelType:'petrol', displacement:1462, cylinders:4, drivetrain:'AWD', transmission:'6-speed automatic', power:77, torque:137, weight:1370, seats:5, fc:6.0, fh:5.4, fx:7.8, acceleration:12.8, topSpeed:165, price:p(39990) }

// ─────────────────────────────────────────────────────────────
// VOLVO S90 2026 — B5 / T8 Recharge (AU)
// ─────────────────────────────────────────────────────────────
specs['Volvo|S90|2026|B5'] = {
  engine: '2.0L I4 Mild Hybrid', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'FWD', transmission: '8-speed auto',
  power: 183, torque: 350, weight: 1775, seats: 5,
  fc: 7.8, fh: 5.8, fx: 11.0,
  acceleration: 7.4, topSpeed: 230, price: p(79990)
}
specs['Volvo|S90|2026|T8 Recharge'] = {
  engine: '2.0L I4 PHEV', fuelType: 'phev', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 335, torque: 660, weight: 2240, seats: 5,
  fc: 1.6, fh: 1.3, fx: 2.0,
  acceleration: 4.5, topSpeed: 250, price: p(101990)
}

// ─────────────────────────────────────────────────────────────
// VOLVO XC90 2026 — B5 / T8 Recharge (AU)
// ─────────────────────────────────────────────────────────────
specs['Volvo|XC90|2026|B5'] = {
  engine: '2.0L I4 Mild Hybrid', fuelType: 'petrol', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 183, torque: 350, weight: 2100, seats: 7,
  fc: 9.0, fh: 6.7, fx: 12.7,
  acceleration: 7.7, topSpeed: 210, price: p(92990)
}
specs['Volvo|XC90|2026|T8 Recharge'] = {
  engine: '2.0L I4 PHEV', fuelType: 'phev', displacement: 1969,
  cylinders: 4, drivetrain: 'AWD', transmission: '8-speed auto',
  power: 335, torque: 660, weight: 2580, seats: 7,
  fc: 1.9, fh: 1.6, fx: 2.3,
  acceleration: 5.3, topSpeed: 230, price: p(109990)
}

// ─────────────────────────────────────────────────────────────
// VOLVO C40 RECHARGE 2024 Single Motor + 2026 Twin Motor (AU)
// ─────────────────────────────────────────────────────────────
specs['Volvo|C40 Recharge|2024|Single Motor'] = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '69 kWh', range: 460,
  drivetrain: 'FWD', transmission: 'Single-speed',
  power: 170, torque: 330, weight: 2090, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.4, topSpeed: 160, price: p(67990)
}
specs['Volvo|C40 Recharge|2026|Twin Motor'] = {
  engine: 'Dual Motor Electric', fuelType: 'electric',
  battery: '78 kWh', range: 444,
  drivetrain: 'AWD', transmission: 'Single-speed',
  power: 300, torque: 660, weight: 2232, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 3.3, topSpeed: 200, price: p(80990)
}

// ─────────────────────────────────────────────────────────────
// MG ZS EV 2026 — Long Range / Standard Range (AU)
// ─────────────────────────────────────────────────────────────
specs['MG|ZS EV|2026|Long Range'] = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '72.6 kWh', range: 490,
  drivetrain: 'FWD', transmission: 'Single-speed',
  power: 130, torque: 280, weight: 1720, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 7.9, topSpeed: 175, price: p(43990)
}
specs['MG|ZS EV|2026|Standard Range'] = {
  engine: 'Single Motor Electric', fuelType: 'electric',
  battery: '51 kWh', range: 320,
  drivetrain: 'FWD', transmission: 'Single-speed',
  power: 115, torque: 280, weight: 1590, seats: 5,
  fc: null, fh: null, fx: null,
  acceleration: 8.2, topSpeed: 160, price: p(38990)
}

// ─────────────────────────────────────────────────────────────
// GENESIS G80 2023 — 2.5T / 3.5T (AU)
// ─────────────────────────────────────────────────────────────
specs['Genesis|G80|2023|2.5T'] = {
  engine: '2.5L I4 Twin Scroll Turbo', fuelType: 'petrol', displacement: 2497,
  cylinders: 4, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 224, torque: 422, weight: 1890, seats: 5,
  fc: 9.9, fh: 7.3, fx: 14.0,
  acceleration: 6.0, topSpeed: 240, price: p(79900)
}
specs['Genesis|G80|2023|3.5T'] = {
  engine: '3.5L V6 Twin Turbo', fuelType: 'petrol', displacement: 3470,
  cylinders: 6, drivetrain: 'RWD', transmission: '8-speed auto',
  power: 280, torque: 530, weight: 2000, seats: 5,
  fc: 11.1, fh: 8.2, fx: 15.7,
  acceleration: 4.9, topSpeed: 270, price: p(95900)
}

// ─────────────────────────────────────────────────────────────
// Output
// ─────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement140.json', JSON.stringify(out, null, 2))
console.log(`supplement140.json written — ${Object.keys(specs).length} entries`)

const byMake = {}
for (const k of Object.keys(specs)) {
  const mk = k.split('|')[0]
  byMake[mk] = (byMake[mk] || 0) + 1
}
for (const [mk, cnt] of Object.entries(byMake).sort()) {
  console.log(`  ${mk}: ${cnt}`)
}
