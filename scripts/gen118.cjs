'use strict'
const fs = require('fs')
const specs = {}

const p = n => `~$${n.toLocaleString()}`

// ─── TOYOTA bZ4X (2022-2025) ─────────────────────────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000 }[yr]
  const fwd = { engine: 'Single Electric Motor', fuelType: 'electric', battery: '71.4 kWh', range: 470, drivetrain: 'FWD', power: 150, torque: 266, weight: 1925, seats: 5, transmission: 'Auto', acceleration: 8.4, topSpeed: 160, fc: null, fh: null, fx: null }
  const awd = { ...fwd, engine: 'Dual Electric Motor', drivetrain: 'AWD', power: 160, torque: 336, weight: 2065, range: 460, acceleration: 6.5 }
  specs[`Toyota|bZ4X|${yr}|FWD`] = { ...fwd, price: p(59990 + adj) }
  specs[`Toyota|bZ4X|${yr}|AWD`] = { ...awd, price: p(67990 + adj) }
}

// ─── MAZDA CX-30 (2020-2025) ─────────────────────────────────────────────
for (const yr of ['2020','2021','2022','2023','2024','2025']) {
  const adj = { '2020':0,'2021':500,'2022':1000,'2023':1500,'2024':2000,'2025':2500 }[yr]
  const g20 = { engine: '2.0L Skyactiv-G', displacement: 1998, cylinders: 4, transmission: '6AT', drivetrain: 'FWD', fuelType: 'petrol', power: 114, torque: 200, weight: 1375, seats: 5, fc: 6.7, fh: 7.8, fx: 5.2, acceleration: 10.0, topSpeed: 185 }
  const g25 = { ...g20, engine: '2.5L Skyactiv-G', displacement: 2488, power: 140, torque: 252, weight: 1445, drivetrain: 'AWD', fc: 7.7, fh: 8.8, fx: 6.3, acceleration: 8.7 }
  const x20 = { ...g20, engine: '2.0L Skyactiv-X', power: 137, torque: 224, weight: 1510, drivetrain: 'AWD', fc: 7.2, acceleration: 8.5 }
  specs[`Mazda|CX-30|${yr}|Pure`]      = { ...g20, price: p(29990 + adj) }
  specs[`Mazda|CX-30|${yr}|Evolve`]    = { ...g20, price: p(33990 + adj) }
  specs[`Mazda|CX-30|${yr}|Astute`]    = { ...g25, price: p(38490 + adj) }
  specs[`Mazda|CX-30|${yr}|GT`]        = { ...g25, price: p(42490 + adj) }
  specs[`Mazda|CX-30|${yr}|X20 Astina`] = { ...x20, price: p(49990 + adj) }
}

// ─── MAZDA CX-3 (2022-2025) ──────────────────────────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':500,'2024':1000,'2025':1500 }[yr]
  const base = { engine: '2.0L Skyactiv-G', displacement: 1998, cylinders: 4, transmission: '6AT', drivetrain: 'FWD', fuelType: 'petrol', power: 114, torque: 200, weight: 1250, seats: 5, fc: 6.5, fh: 7.6, fx: 5.1, acceleration: 9.3, topSpeed: 185 }
  specs[`Mazda|CX-3|${yr}|Maxx`]       = { ...base, price: p(26290 + adj) }
  specs[`Mazda|CX-3|${yr}|Maxx Sport`] = { ...base, price: p(30290 + adj) }
  specs[`Mazda|CX-3|${yr}|sTouring`]   = { ...base, price: p(36490 + adj) }
}

// ─── SUBARU CROSSTREK (2023-2025) ────────────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':1000,'2025':2000 }[yr]
  const b20 = { engine: '2.0L Flat-4 DOHC', displacement: 1995, cylinders: 4, transmission: 'CVT', drivetrain: 'AWD', fuelType: 'petrol', power: 115, torque: 196, weight: 1470, seats: 5, fc: 7.1, fh: 8.2, fx: 5.6, acceleration: 10.6, topSpeed: 188 }
  const b25 = { ...b20, engine: '2.5L Flat-4 DOHC', displacement: 2498, power: 136, torque: 245, weight: 1487, fc: 7.3, fh: 8.4, fx: 5.9, acceleration: 9.5, topSpeed: 190 }
  specs[`Subaru|Crosstrek|${yr}|2.0i`]         = { ...b20, price: p(32990 + adj) }
  specs[`Subaru|Crosstrek|${yr}|2.0i-L`]       = { ...b20, price: p(35990 + adj) }
  specs[`Subaru|Crosstrek|${yr}|2.5i Sport`]   = { ...b25, price: p(42990 + adj) }
  specs[`Subaru|Crosstrek|${yr}|2.5i Premium`] = { ...b25, price: p(46490 + adj) }
}

// ─── TOYOTA COROLLA CROSS HYBRID (2022-2025) ─────────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':1000,'2024':2000,'2025':3000 }[yr]
  const fwd = { engine: '2.0L Hybrid', displacement: 1987, cylinders: 4, transmission: 'CVT', fuelType: 'hybrid', drivetrain: 'FWD', power: 112, torque: 199, weight: 1435, seats: 5, fc: 4.8, fh: 5.3, fx: 4.1, acceleration: 8.9, topSpeed: 180 }
  const awd = { ...fwd, drivetrain: 'AWD', weight: 1530, power: 135, acceleration: 8.1 }
  specs[`Toyota|Corolla Cross|${yr}|GX Hybrid`]     = { ...fwd, price: p(38990 + adj) }
  specs[`Toyota|Corolla Cross|${yr}|GXL Hybrid`]    = { ...fwd, price: p(42990 + adj) }
  specs[`Toyota|Corolla Cross|${yr}|ZR Hybrid AWD`] = { ...awd, price: p(49990 + adj) }
}

// ─── TOYOTA C-HR NEW GEN (2024-2025, hybrid-only AU) ─────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 2000 : 0
  const h18 = { engine: '1.8L Hybrid', displacement: 1798, cylinders: 4, transmission: 'CVT', drivetrain: 'FWD', fuelType: 'hybrid', power: 90, torque: 142, weight: 1425, seats: 5, fc: 4.3, fh: 4.8, fx: 3.6, acceleration: 10.5, topSpeed: 180 }
  const ph  = { ...h18, engine: '2.0L PHEV', displacement: 1987, power: 135, torque: 221, weight: 1545, fc: 1.0, fh: 1.2, fx: 0.9, range: 66, acceleration: 6.7 }
  specs[`Toyota|C-HR|${yr}|GX Hybrid`]  = { ...h18, price: p(38990 + adj) }
  specs[`Toyota|C-HR|${yr}|GXL Hybrid`] = { ...h18, price: p(42990 + adj) }
  specs[`Toyota|C-HR|${yr}|GXL PHEV`]   = { ...ph,  price: p(48990 + adj) }
  specs[`Toyota|C-HR|${yr}|Koba PHEV`]  = { ...ph,  price: p(53990 + adj) }
}

// ─── TOYOTA HiLux SR5+ AND GR SPORT (2020-2025) ──────────────────────────
for (const yr of ['2020','2021','2022','2023','2024','2025']) {
  const base = { engine: '2.8L Turbo Diesel Inline-4', displacement: 2755, cylinders: 4, transmission: '6AT', drivetrain: 'AWD', fuelType: 'diesel', power: 150, torque: 500, weight: 2095, seats: 5, fc: 8.5, fh: 10.0, fx: 6.5, acceleration: 10.5, topSpeed: 180 }
  const priceSR5p = parseInt(yr) >= 2022 ? 67990 : 62990
  specs[`Toyota|HiLux|${yr}|SR5+`] = { ...base, price: p(priceSR5p) }
  if (parseInt(yr) >= 2023) {
    specs[`Toyota|HiLux|${yr}|GR Sport`] = { ...base, power: 165, torque: 550, price: p(73990) }
  }
}

// ─── TOYOTA YARIS CROSS HYBRID TRIMS (2021-2025) ─────────────────────────
for (const yr of ['2021','2022','2023','2024','2025']) {
  const adj = { '2021':0,'2022':500,'2023':1000,'2024':1500,'2025':2000 }[yr]
  const fwd = { engine: '1.5L Hybrid Inline-3', displacement: 1490, cylinders: 3, transmission: 'CVT', fuelType: 'hybrid', drivetrain: 'FWD', power: 85, torque: 141, weight: 1340, seats: 5, fc: 4.7, fh: 5.2, fx: 4.0, acceleration: 11.2, topSpeed: 170 }
  const awd = { ...fwd, drivetrain: 'AWD', weight: 1385, power: 91, fc: 5.1, acceleration: 10.4 }
  specs[`Toyota|Yaris Cross|${yr}|GX Hybrid`]     = { ...fwd, price: p(30990 + adj) }
  specs[`Toyota|Yaris Cross|${yr}|GXL Hybrid`]    = { ...fwd, price: p(34990 + adj) }
  specs[`Toyota|Yaris Cross|${yr}|ZR Hybrid AWD`] = { ...awd, price: p(42990 + adj) }
}

// ─── MAZDA CX-60 PHEV ADDITIONS (2023-2025) ──────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':2000,'2025':4000 }[yr]
  const phev = { engine: '2.5L PHEV Inline-4 + Motor', displacement: 2488, cylinders: 4, transmission: '8AT', drivetrain: 'AWD', fuelType: 'hybrid', power: 241, torque: 500, weight: 2157, seats: 5, fc: 1.6, fh: 1.8, fx: 1.3, range: 67, acceleration: 5.8, topSpeed: 200 }
  specs[`Mazda|CX-60|${yr}|PHEV GT`]    = { ...phev, price: p(74990 + adj) }
  specs[`Mazda|CX-60|${yr}|PHEV Azami`] = { ...phev, price: p(83990 + adj) }
}

// ─── MAZDA MX-30 R-EV ROTARY PHEV (2023-2025) ────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':2000,'2025':4000 }[yr]
  const rev = { engine: '8C Rotary Range Extender PHEV', fuelType: 'hybrid', battery: '17.8 kWh', range: 85, drivetrain: 'FWD', power: 125, torque: 224, weight: 1890, seats: 5, transmission: 'Auto', fc: 1.0, fh: 1.2, fx: 0.9, acceleration: 9.1, topSpeed: 150 }
  specs[`Mazda|MX-30|${yr}|R-EV Evolve`] = { ...rev, price: p(64990 + adj) }
  specs[`Mazda|MX-30|${yr}|R-EV Astute`] = { ...rev, price: p(70990 + adj) }
}

// ─── MITSUBISHI OUTLANDER PHEV TRIM DETAIL (2022-2025) ───────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':1000,'2024':2000,'2025':3000 }[yr]
  const phev = { engine: '2.4L PHEV Inline-4 + Dual Motor', displacement: 2360, cylinders: 4, transmission: 'Auto', drivetrain: 'AWD', fuelType: 'hybrid', power: 165, torque: 332, weight: 2030, seats: 7, fc: 1.9, fh: 2.1, fx: 1.6, range: 84, acceleration: 5.8, topSpeed: 180 }
  specs[`Mitsubishi|Outlander|${yr}|PHEV ES`]     = { ...phev, price: p(54490 + adj) }
  specs[`Mitsubishi|Outlander|${yr}|PHEV LS`]     = { ...phev, price: p(59490 + adj) }
  specs[`Mitsubishi|Outlander|${yr}|PHEV Exceed`] = { ...phev, price: p(64490 + adj) }
}

// ─── MITSUBISHI ECLIPSE CROSS PHEV (2022-2024) ───────────────────────────
for (const yr of ['2022','2023','2024']) {
  const adj = { '2022':0,'2023':500,'2024':1000 }[yr]
  const phev = { engine: '2.4L PHEV Inline-4 + Dual Motor', displacement: 2360, cylinders: 4, transmission: 'Auto', drivetrain: 'AWD', fuelType: 'hybrid', power: 165, torque: 332, weight: 1945, seats: 5, fc: 1.9, fh: 2.1, fx: 1.6, range: 55, acceleration: 6.2, topSpeed: 190 }
  specs[`Mitsubishi|Eclipse Cross|${yr}|PHEV ES`]     = { ...phev, price: p(44490 + adj) }
  specs[`Mitsubishi|Eclipse Cross|${yr}|PHEV Exceed`] = { ...phev, price: p(51490 + adj) }
}

// ─── NISSAN JUKE FULL TRIM DETAIL (2021-2024) ────────────────────────────
for (const yr of ['2021','2022','2023','2024']) {
  const adj = { '2021':0,'2022':500,'2023':1000,'2024':1500 }[yr]
  const base = { engine: '1.0L Turbo Inline-3 DIG-T', displacement: 999, cylinders: 3, transmission: '7DCT', drivetrain: 'FWD', fuelType: 'petrol', power: 84, torque: 180, weight: 1220, seats: 5, fc: 6.2, fh: 7.1, fx: 5.0, acceleration: 10.5, topSpeed: 190 }
  specs[`Nissan|Juke|${yr}|ST`]   = { ...base, price: p(30990 + adj) }
  specs[`Nissan|Juke|${yr}|ST-L`] = { ...base, price: p(35990 + adj) }
  specs[`Nissan|Juke|${yr}|Ti`]   = { ...base, price: p(39990 + adj) }
}

// ─── HONDA ZR-V e:HEV (2023-2025) ────────────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':2000,'2025':4000 }[yr]
  const base = { engine: '2.0L e:HEV Inline-4', displacement: 1993, cylinders: 4, transmission: 'Auto', drivetrain: 'FWD', fuelType: 'hybrid', power: 135, torque: 315, weight: 1585, seats: 5, fc: 4.9, fh: 5.5, fx: 4.1, acceleration: 9.2, topSpeed: 180 }
  specs[`Honda|ZR-V|${yr}|VTi-S e:HEV`]  = { ...base, price: p(42490 + adj) }
  specs[`Honda|ZR-V|${yr}|VTi-LX e:HEV`] = { ...base, price: p(48490 + adj) }
}

// ─── SUBARU FORESTER e-BOXER HYBRID (2021-2024) ───────────────────────────
for (const yr of ['2021','2022','2023','2024']) {
  const adj = { '2021':0,'2022':500,'2023':1000,'2024':1500 }[yr]
  const h = { engine: '2.0L e-Boxer Hybrid Flat-4', displacement: 1995, cylinders: 4, transmission: 'CVT', drivetrain: 'AWD', fuelType: 'hybrid', power: 118, torque: 196, weight: 1655, seats: 5, fc: 6.7, fh: 7.5, fx: 5.6, acceleration: 11.8, topSpeed: 180 }
  specs[`Subaru|Forester|${yr}|Hybrid L`] = { ...h, price: p(47990 + adj) }
  specs[`Subaru|Forester|${yr}|Hybrid S`] = { ...h, price: p(52990 + adj) }
}

// ─── FORD EVEREST PLATINUM (2023-2025) ───────────────────────────────────
for (const yr of ['2023','2024','2025']) {
  const adj = { '2023':0,'2024':2000,'2025':4000 }[yr]
  const v6d = { engine: '3.0L TDCi V6 Diesel', displacement: 2993, cylinders: 6, transmission: '10AT', drivetrain: 'AWD', fuelType: 'diesel', power: 184, torque: 600, weight: 2350, seats: 7, fc: 9.1, fh: 10.5, fx: 7.4, acceleration: 9.0, topSpeed: 180 }
  specs[`Ford|Everest|${yr}|Platinum`]  = { ...v6d, price: p(79990 + adj) }
  specs[`Ford|Everest|${yr}|Platinum+`] = { ...v6d, price: p(85990 + adj) }
}

// ─── TOYOTA PRADO 250 SERIES NEW TRIMS (2024-2025) ───────────────────────
for (const yr of ['2024','2025']) {
  const adj = yr === '2025' ? 3000 : 0
  const hyb = { engine: '2.4L Turbo Petrol Hybrid', displacement: 2393, cylinders: 4, transmission: '8AT', drivetrain: 'AWD', fuelType: 'hybrid', power: 201, torque: 550, weight: 2230, seats: 7, fc: 7.4, fh: 8.5, fx: 6.0, acceleration: 8.5, topSpeed: 175 }
  const dsl = { engine: '2.8L Turbo Diesel Inline-4', displacement: 2755, cylinders: 4, transmission: '8AT', drivetrain: 'AWD', fuelType: 'diesel', power: 150, torque: 500, weight: 2150, seats: 7, fc: 7.9, fh: 9.1, fx: 6.3, acceleration: 10.5, topSpeed: 175 }
  specs[`Toyota|Prado|${yr}|GR Sport Hybrid`] = { ...hyb, price: p(91990 + adj) }
  specs[`Toyota|Prado|${yr}|Sahara Hybrid`]   = { ...hyb, price: p(99990 + adj) }
  specs[`Toyota|Prado|${yr}|GR Sport Diesel`] = { ...dsl, price: p(87990 + adj) }
  specs[`Toyota|Prado|${yr}|Sahara Diesel`]   = { ...dsl, price: p(95990 + adj) }
}

// ─── TOYOTA LANDCRUISER 300 GR SPORT (2022-2025) ─────────────────────────
for (const yr of ['2022','2023','2024','2025']) {
  const adj = { '2022':0,'2023':2000,'2024':4000,'2025':6000 }[yr]
  const v6 = { engine: '3.3L Twin-Turbo V6 Diesel', displacement: 3346, cylinders: 6, transmission: '10AT', drivetrain: 'AWD', fuelType: 'diesel', power: 227, torque: 700, weight: 2630, seats: 8, fc: 9.5, fh: 11.0, fx: 7.7, acceleration: 6.7, topSpeed: 210 }
  specs[`Toyota|LandCruiser|${yr}|GR Sport`] = { ...v6, price: p(129990 + adj) }
}

fs.writeFileSync('src/data/supplement118.json', JSON.stringify({ specs }, null, 2))
console.log('supplement118.json written:', Object.keys(specs).length, 'entries')
const byMake = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[0]; byMake[m] = (byMake[m]||0)+1 })
Object.entries(byMake).sort().forEach(([m,n]) => console.log(`  ${m}: ${n}`))
