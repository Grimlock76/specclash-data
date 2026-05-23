'use strict'
const fs = require('fs')
const specs = {}
const p = n => `~$${n.toLocaleString()}`

// ─── VOLKSWAGEN T-CROSS (2019-2025) ──────────────────────────────────────
for (const yr of ['2019','2020','2021','2022','2023','2024','2025']) {
  const adj = { '2019':0,'2020':500,'2021':1000,'2022':2000,'2023':3000,'2024':4000,'2025':5000 }[yr]
  const s85  = { engine: '1.0L TSI Inline-3', displacement: 999, cylinders: 3, transmission: '7DSG', drivetrain: 'FWD', fuelType: 'petrol', power: 70, torque: 200, weight: 1210, seats: 5, fc: 6.0, fh: 7.0, fx: 4.9, acceleration: 10.9, topSpeed: 180 }
  const s110 = { ...s85, engine: '1.5L TSI Inline-4', displacement: 1498, cylinders: 4, power: 110, torque: 250, weight: 1300, fc: 5.8, fh: 6.8, fx: 4.7, acceleration: 9.5, topSpeed: 195 }
  specs[`Volkswagen|T-Cross|${yr}|85TSI Life`]    = { ...s85,  price: p(29490 + adj) }
  specs[`Volkswagen|T-Cross|${yr}|110TSI Style`]  = { ...s110, price: p(35490 + adj) }
  specs[`Volkswagen|T-Cross|${yr}|110TSI R-Line`] = { ...s110, price: p(39490 + adj) }
}

// ─── VOLKSWAGEN ID.BUZZ (2024-2025) ──────────────────────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 3000 : 0
  const pro = { engine: 'Single Electric Motor', fuelType: 'electric', battery: '77 kWh', range: 423, drivetrain: 'RWD', power: 150, torque: 310, weight: 2475, seats: 5, transmission: 'Auto', acceleration: 10.2, topSpeed: 160, fc: null, fh: null, fx: null }
  const lwb = { ...pro, battery: '91 kWh', range: 459, seats: 7, weight: 2740 }
  const gtx = { ...lwb, engine: 'Dual Electric Motor', drivetrain: 'AWD', power: 250, torque: 560, weight: 2790, acceleration: 6.0 }
  specs[`Volkswagen|ID.Buzz|${yr}|Pro`]     = { ...pro, price: p(79990 + adj) }
  specs[`Volkswagen|ID.Buzz|${yr}|Pro LWB`] = { ...lwb, price: p(89990 + adj) }
  specs[`Volkswagen|ID.Buzz|${yr}|GTX`]     = { ...gtx, price: p(109990 + adj) }
}

// ─── TOYOTA ALPHARD (2021-2025) ──────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024','2025']) {
  const adj = { '2021':0,'2022':3000,'2023':0,'2024':5000,'2025':10000 }[yr]
  if (parseInt(yr) <= 2022) {
    const v6  = { engine: '3.5L V6 DOHC', displacement: 3456, cylinders: 6, transmission: '8AT', drivetrain: 'FWD', fuelType: 'petrol', power: 220, torque: 380, weight: 2100, seats: 8, fc: 12.5, fh: 14.0, fx: 10.5, acceleration: 9.2, topSpeed: 180 }
    const hyb = { ...v6, engine: '2.5L Hybrid Inline-4', displacement: 2494, cylinders: 4, transmission: 'CVT', power: 135, torque: 270, weight: 2110, fc: 7.0, fh: 7.8, fx: 6.0, acceleration: 11.5, fuelType: 'hybrid' }
    specs[`Toyota|Alphard|${yr}|Ti`]        = { ...v6,  price: p(109990 + adj) }
    specs[`Toyota|Alphard|${yr}|Hybrid Ti`] = { ...hyb, price: p(99990 + adj) }
  } else {
    const h = { engine: '2.5L Hybrid Inline-4', displacement: 2494, cylinders: 4, transmission: 'CVT', fuelType: 'hybrid', power: 134, torque: 270, weight: 2110, seats: 7, fc: 7.0, fh: 8.0, fx: 5.8, acceleration: 10.8, topSpeed: 175 }
    specs[`Toyota|Alphard|${yr}|Executive`]       = { ...h, drivetrain: 'FWD', price: p(109990 + adj) }
    specs[`Toyota|Alphard|${yr}|Executive Lounge`] = { ...h, drivetrain: 'AWD', price: p(139990 + adj) }
  }
}

// ─── TOYOTA VELLFIRE (2021-2024) ─────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024']) {
  const adj = { '2021':0,'2022':3000,'2023':0,'2024':5000 }[yr]
  const base = { engine: '2.5L Hybrid Inline-4', displacement: 2494, cylinders: 4, transmission: 'CVT', drivetrain: 'AWD', fuelType: 'hybrid', power: 134, torque: 270, weight: 2120, seats: 7, fc: 7.2, fh: 8.2, fx: 5.9, acceleration: 11.2, topSpeed: 175 }
  specs[`Toyota|Vellfire|${yr}|Executive`]        = { ...base, price: p(119990 + adj) }
  specs[`Toyota|Vellfire|${yr}|Executive Lounge`] = { ...base, price: p(149990 + adj) }
}

// ─── TOYOTA GR YARIS (2021-2025) ─────────────────────────────────────────
for (const yr of ['2021','2022','2023','2024','2025']) {
  const adj = { '2021':0,'2022':5000,'2023':8000,'2024':12000,'2025':15000 }[yr]
  const kw = parseInt(yr) >= 2024 ? 221 : 200
  const base = { engine: '1.6L Turbo G16E-GTS Inline-3', displacement: 1618, cylinders: 3, transmission: '6MT', drivetrain: 'AWD', fuelType: 'petrol', power: kw, torque: 360, weight: 1280, seats: 4, fc: 8.8, fh: 10.2, fx: 7.1, acceleration: 5.5, topSpeed: 230 }
  specs[`Toyota|GR Yaris|${yr}|GR Yaris`] = { ...base, price: p(49990 + adj) }
  if (parseInt(yr) >= 2023) {
    specs[`Toyota|GR Yaris|${yr}|Rallye`] = { ...base, price: p(64990 + adj) }
  }
}

// ─── MITSUBISHI ASX MK2 (2023-2025) ─────────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':1000,'2025':2000 }[yr]
  const b10  = { engine: '1.0L Turbo Inline-3', displacement: 999, cylinders: 3, transmission: 'CVT', drivetrain: 'FWD', fuelType: 'petrol', power: 74, torque: 160, weight: 1355, seats: 5, fc: 5.8, fh: 6.7, fx: 4.6, acceleration: 12.2, topSpeed: 175 }
  const b13  = { ...b10, engine: '1.3L Turbo Inline-4', displacement: 1332, cylinders: 4, transmission: '7DCT', power: 103, torque: 270, weight: 1415, fc: 6.5, fh: 7.5, fx: 5.3, acceleration: 10.3, topSpeed: 195 }
  specs[`Mitsubishi|ASX|${yr}|MK2 ES`]     = { ...b10, price: p(29990 + adj) }
  specs[`Mitsubishi|ASX|${yr}|MK2 LS`]     = { ...b13, price: p(34990 + adj) }
  specs[`Mitsubishi|ASX|${yr}|MK2 Exceed`] = { ...b13, price: p(39990 + adj) }
}

// ─── BMW M5 G90 NEW GEN (2024-2025) ──────────────────────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 10000 : 0
  const base = { engine: '4.4L V8 Biturbo PHEV', displacement: 4395, cylinders: 8, transmission: '8AT', drivetrain: 'AWD', fuelType: 'hybrid', power: 535, torque: 750, weight: 2370, seats: 5, fc: 3.3, range: 67, fh: 3.8, fx: 2.8, acceleration: 3.5, topSpeed: 305 }
  specs[`BMW|M5|${yr}|M5 Sedan`]   = { ...base, price: p(349900 + adj) }
  specs[`BMW|M5|${yr}|M5 Touring`] = { ...base, weight: 2430, price: p(389900 + adj) }
}

// ─── BMW iX2 (2024-2025) ─────────────────────────────────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 3000 : 0
  const fwd = { engine: 'Single Electric Motor', fuelType: 'electric', battery: '66.5 kWh', range: 449, drivetrain: 'FWD', power: 150, torque: 250, weight: 1895, seats: 5, transmission: 'Auto', acceleration: 8.6, topSpeed: 180, fc: null, fh: null, fx: null }
  const awd = { ...fwd, battery: '64.8 kWh', range: 417, drivetrain: 'AWD', power: 230, torque: 494, weight: 2060, acceleration: 5.6 }
  specs[`BMW|iX2|${yr}|sDrive20`] = { ...fwd, price: p(69900 + adj) }
  specs[`BMW|iX2|${yr}|xDrive30`] = { ...awd, price: p(79900 + adj) }
}

// ─── LAND ROVER DEFENDER ADDITIONAL TRIMS (2021-2025) ────────────────────
for (const yr of ['2021','2022','2023','2024','2025']) {
  const adj = { '2021':0,'2022':3000,'2023':6000,'2024':9000,'2025':12000 }[yr]
  const phev = { engine: '2.0L Turbo PHEV Inline-4', displacement: 1997, cylinders: 4, transmission: '8AT', drivetrain: 'AWD', fuelType: 'hybrid', power: 300, torque: 640, weight: 2510, seats: 5, fc: 2.4, range: 43, fh: 2.8, fx: 1.9, acceleration: 5.6, topSpeed: 209 }
  const v8   = { engine: '5.0L Supercharged V8', displacement: 5000, cylinders: 8, transmission: '8AT', drivetrain: 'AWD', fuelType: 'petrol', power: 386, torque: 625, weight: 2575, seats: 5, fc: 17.0, fh: 19.5, fx: 13.8, acceleration: 4.9, topSpeed: 240 }
  specs[`Land Rover|Defender|${yr}|110 P400e`] = { ...phev, price: p(109000 + adj) }
  specs[`Land Rover|Defender|${yr}|90 V8`]     = { ...v8,   price: p(198000 + adj) }
}

// ─── SUBARU OUTBACK WILDERNESS (2022-2025) ────────────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000 }[yr]
  const spec = { engine: '2.4L Turbo Flat-4', displacement: 2387, cylinders: 4, transmission: 'CVT', drivetrain: 'AWD', fuelType: 'petrol', power: 194, torque: 376, weight: 1730, seats: 5, fc: 9.5, fh: 10.8, fx: 7.8, acceleration: 7.5, topSpeed: 188 }
  specs[`Subaru|Outback|${yr}|Wilderness`] = { ...spec, price: p(61990 + adj) }
}

// ─── HYUNDAI INSTER (2025) ───────────────────────────────────────────────
{
  const sr = { engine: 'Single Electric Motor', fuelType: 'electric', battery: '42 kWh', range: 300, drivetrain: 'FWD', power: 71, torque: 147, weight: 1080, seats: 5, transmission: 'Auto', acceleration: 11.7, topSpeed: 150, fc: null, fh: null, fx: null }
  const lr = { ...sr, battery: '49 kWh', range: 355, power: 84, weight: 1140 }
  specs['Hyundai|Inster|2025|Standard Range']     = { ...sr, price: '~$32,990' }
  specs['Hyundai|Inster|2025|Long Range']         = { ...lr, price: '~$38,990' }
  specs['Hyundai|Inster|2025|Long Range Premium'] = { ...lr, price: '~$43,990' }
}

// ─── RENAULT AUSTRAL (2023-2025) ─────────────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':2000,'2025':4000 }[yr]
  const mhev = { engine: '1.2L Mild Hybrid Inline-3', displacement: 1199, cylinders: 3, transmission: '7DCT', drivetrain: 'FWD', fuelType: 'hybrid', power: 96, torque: 205, weight: 1540, seats: 5, fc: 5.7, fh: 6.5, fx: 4.8, acceleration: 10.3, topSpeed: 185 }
  const fhev = { ...mhev, engine: '1.5L Full Hybrid Inline-4', displacement: 1499, cylinders: 4, transmission: 'Auto', power: 103, torque: 205, fc: 4.9, fh: 5.4, fx: 4.2, acceleration: 9.8 }
  specs[`Renault|Austral|${yr}|Intens`]       = { ...mhev, price: p(44990 + adj) }
  specs[`Renault|Austral|${yr}|Iconic`]       = { ...mhev, price: p(49990 + adj) }
  specs[`Renault|Austral|${yr}|E-Tech Iconic`] = { ...fhev, price: p(54990 + adj) }
}

// ─── RENAULT SCENIC E-TECH (2024-2025) ───────────────────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 3000 : 0
  const std = { engine: 'Single Electric Motor', fuelType: 'electric', battery: '60 kWh', range: 430, drivetrain: 'FWD', power: 115, torque: 300, weight: 1720, seats: 5, transmission: 'Auto', acceleration: 8.3, topSpeed: 170, fc: null, fh: null, fx: null }
  const lrv = { ...std, battery: '87 kWh', range: 620, power: 160, weight: 1920 }
  specs[`Renault|Scenic|${yr}|E-Tech Intens`]     = { ...std, price: p(57990 + adj) }
  specs[`Renault|Scenic|${yr}|E-Tech Iconic`]     = { ...std, price: p(63990 + adj) }
  specs[`Renault|Scenic|${yr}|E-Tech LR Iconic`]  = { ...lrv, price: p(73990 + adj) }
}

// ─── TOYOTA HiAce (2022-2025) ────────────────────────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000 }[yr]
  const dsl = { engine: '2.8L Turbo Diesel Inline-4', displacement: 2755, cylinders: 4, transmission: '6AT', drivetrain: 'RWD', fuelType: 'diesel', power: 110, torque: 300, weight: 2100, seats: 3, fc: 9.0, fh: 10.5, fx: 7.3, acceleration: 13.0, topSpeed: 165 }
  specs[`Toyota|HiAce|${yr}|Van SWB Diesel`]  = { ...dsl, price: p(54990 + adj) }
  specs[`Toyota|HiAce|${yr}|Commuter GL`]      = { ...dsl, seats: 12, price: p(67990 + adj) }
  specs[`Toyota|HiAce|${yr}|Commuter Deluxe`]  = { ...dsl, seats: 12, price: p(74990 + adj) }
}

// ─── MITSUBISHI TRITON 2024+ NEW TRIMS ───────────────────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 2000 : 0
  const base = { engine: '2.4L Turbo Diesel Inline-4', displacement: 2442, cylinders: 4, transmission: '6AT', drivetrain: 'AWD', fuelType: 'diesel', power: 136, torque: 430, weight: 1880, seats: 5, fc: 8.8, fh: 10.2, fx: 6.7, acceleration: 11.5, topSpeed: 180 }
  specs[`Mitsubishi|Triton|${yr}|GLX+`]  = { ...base, price: p(47990 + adj) }
  specs[`Mitsubishi|Triton|${yr}|Titan`] = { ...base, price: p(55990 + adj) }
}

// ─── TOYOTA CENTURY (2023-2025) ──────────────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':10000,'2025':20000 }[yr]
  const phev = { engine: '5.0L V8 + Electric PHEV', displacement: 4969, cylinders: 8, transmission: 'CVT', drivetrain: 'AWD', fuelType: 'hybrid', power: 290, torque: 540, weight: 2530, seats: 5, fc: 5.9, range: 40, fh: 6.5, fx: 5.1, acceleration: 6.4, topSpeed: 200 }
  specs[`Toyota|Century|${yr}|Century`] = { ...phev, price: p(280000 + adj) }
}

fs.writeFileSync('src/data/supplement119.json', JSON.stringify({ specs }, null, 2))
console.log('supplement119.json written:', Object.keys(specs).length, 'entries')
const byMake = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[0]; byMake[m] = (byMake[m]||0)+1 })
Object.entries(byMake).sort().forEach(([m,n]) => console.log(`  ${m}: ${n}`))
