#!/usr/bin/env node
// gen39.cjs — Missing BMW models: 4 Series, M2, M4, X2, X4, X6, X7, i3, i4, iX, iX3
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── BMW 4 Series F32 Phase 1 (2013–2016) ─────────────────────────────────
for (let y = 2013; y <= 2016; y++) {
  const base = Math.round(58900 + (y - 2013) * 1200)
  add(`BMW|4 Series|${y}|420i`, {
    engine: 'N20B20 2.0L Turbo I4', displacement: 1997, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 5.4, fx: 10.6, seats: 4,
    weight: 1440, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|428i`, {
    engine: 'N20B20 2.0L Turbo I4 (high tune)', displacement: 1997, cylinders: 4,
    power: 180, torque: 350, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.6, fh: 5.6, fx: 10.8, seats: 4,
    weight: 1490, bodyStyle: 'Coupe', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|420d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 135, torque: 380, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.2, fh: 4.0, fx: 7.2, seats: 4,
    weight: 1530, bodyStyle: 'Coupe', price: `~$${(base + 6000).toLocaleString()}`
  })
}

// ── BMW 4 Series F32 LCI Phase 2 (2017–2020) ─────────────────────────────
for (let y = 2017; y <= 2020; y++) {
  const base = Math.round(66900 + (y - 2017) * 1200)
  add(`BMW|4 Series|${y}|420i`, {
    engine: 'B48B20 2.0L Turbo I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.2, fx: 10.2, seats: 4,
    weight: 1440, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|430i`, {
    engine: 'B48B20 2.0L Turbo I4 (high tune)', displacement: 1998, cylinders: 4,
    power: 185, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.2, fx: 10.4, seats: 4,
    weight: 1490, bodyStyle: 'Coupe', price: `~$${(base + 13000).toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|440i`, {
    engine: 'B58B30 3.0L Turbo I6', displacement: 2998, cylinders: 6,
    power: 240, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.0, fx: 12.0, seats: 4,
    weight: 1540, bodyStyle: 'Coupe', price: `~$${(base + 33000).toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|420d`, {
    engine: 'B47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 140, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.0, fh: 3.8, fx: 7.0, seats: 4,
    weight: 1535, bodyStyle: 'Coupe', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── BMW 4 Series G22 (2021–2026) ─────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(74900 + (y - 2021) * 1500)
  add(`BMW|4 Series|${y}|420i`, {
    engine: 'B48B20 2.0L Turbo I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 4,
    weight: 1490, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|430i`, {
    engine: 'B48B20 2.0L Turbo I4 (high tune)', displacement: 1998, cylinders: 4,
    power: 190, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.0, seats: 4,
    weight: 1500, bodyStyle: 'Coupe', price: `~$${(base + 15000).toLocaleString()}`
  })
  add(`BMW|4 Series|${y}|M440i xDrive`, {
    engine: 'B58B30 3.0L Turbo I6 + 48V MHEV', displacement: 2998, cylinders: 6,
    power: 275, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 5.8, fx: 11.4, seats: 4,
    weight: 1710, bodyStyle: 'Coupe', price: `~$${(base + 55000).toLocaleString()}`
  })
}

// ── BMW M2 F87 (2016–2021) ────────────────────────────────────────────────
for (let y = 2016; y <= 2018; y++) {
  add(`BMW|M2|${y}|M2 Coupe`, {
    engine: 'N55B30 3.0L Turbo I6', displacement: 2979, cylinders: 6,
    power: 272, torque: 465, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.6, fh: 7.0, fx: 13.4, seats: 4,
    weight: 1495, bodyStyle: 'Coupe', price: '~$99,900'
  })
}
for (let y = 2019; y <= 2021; y++) {
  add(`BMW|M2|${y}|M2 Competition`, {
    engine: 'S55B30 3.0L Twin-Turbo I6', displacement: 2979, cylinders: 6,
    power: 302, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.8, fh: 7.2, fx: 13.6, seats: 4,
    weight: 1580, bodyStyle: 'Coupe', price: '~$109,900'
  })
}

// ── BMW M2 G87 (2022–2026) ────────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(149900 + (y - 2022) * 2000)
  add(`BMW|M2|${y}|M2 Coupe`, {
    engine: 'S58B30 3.0L Twin-Turbo I6', displacement: 2993, cylinders: 6,
    power: 338, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.4, fh: 7.6, fx: 14.4, seats: 4,
    weight: 1725, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}

// ── BMW M4 F82 (2014–2020) ────────────────────────────────────────────────
for (let y = 2014; y <= 2020; y++) {
  const base = Math.round(119900 + (y - 2014) * 1500)
  add(`BMW|M4|${y}|M4`, {
    engine: 'S55B30 3.0L Twin-Turbo I6', displacement: 2979, cylinders: 6,
    power: 317, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.2, seats: 4,
    weight: 1497, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  if (y >= 2016) {
    add(`BMW|M4|${y}|M4 Competition`, {
      engine: 'S55B30 3.0L Twin-Turbo I6 (Competition)', displacement: 2979, cylinders: 6,
      power: 331, torque: 550, transmission: '7-speed DCT',
      fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.2, seats: 4,
      weight: 1495, bodyStyle: 'Coupe', price: `~$${(base + 10000).toLocaleString()}`
    })
  }
}

// ── BMW M4 G82 (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(159900 + (y - 2021) * 2000)
  add(`BMW|M4|${y}|M4 Competition`, {
    engine: 'S58B30 3.0L Twin-Turbo I6', displacement: 2993, cylinders: 6,
    power: 375, torque: 650, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.6, fh: 7.8, fx: 14.8, seats: 4,
    weight: 1725, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|M4|${y}|M4 Competition xDrive`, {
    engine: 'S58B30 3.0L Twin-Turbo I6 + xDrive AWD', displacement: 2993, cylinders: 6,
    power: 375, torque: 650, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.8, fh: 7.8, fx: 15.2, seats: 4,
    weight: 1810, bodyStyle: 'Coupe', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── BMW X2 F39 (2018–2023) ────────────────────────────────────────────────
for (let y = 2018; y <= 2023; y++) {
  const base = Math.round(44900 + (y - 2018) * 1200)
  add(`BMW|X2|${y}|sDrive18i`, {
    engine: 'B38B15 1.5L Turbo I3', displacement: 1499, cylinders: 3,
    power: 103, torque: 220, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.4, seats: 5,
    weight: 1395, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X2|${y}|xDrive20i`, {
    engine: 'B48B20 2.0L Turbo I4', displacement: 1998, cylinders: 4,
    power: 141, torque: 280, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.4, seats: 5,
    weight: 1525, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|X2|${y}|M35i`, {
    engine: 'B48B20 2.0L Turbo I4 (M Performance)', displacement: 1998, cylinders: 4,
    power: 225, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 11.8, seats: 5,
    weight: 1615, bodyStyle: 'SUV', price: `~$${(base + 40000).toLocaleString()}`
  })
}

// ── BMW X2 U10 (2024–2026) ───────────────────────────────────────────────
for (let y = 2024; y <= 2026; y++) {
  const base = Math.round(52900 + (y - 2024) * 1500)
  add(`BMW|X2|${y}|sDrive18i`, {
    engine: 'B38B15 1.5L Turbo I3', displacement: 1499, cylinders: 3,
    power: 103, torque: 230, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.6, fh: 5.0, fx: 9.2, seats: 5,
    weight: 1490, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X2|${y}|M35i xDrive`, {
    engine: 'B48B20 2.0L Turbo I4 (M Performance)', displacement: 1998, cylinders: 4,
    power: 220, torque: 400, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.2, seats: 5,
    weight: 1615, bodyStyle: 'SUV', price: `~$${(base + 37000).toLocaleString()}`
  })
}

// ── BMW X4 F26 (2014–2018) ────────────────────────────────────────────────
for (let y = 2014; y <= 2017; y++) {
  const base = Math.round(66900 + (y - 2014) * 1500)
  add(`BMW|X4|${y}|xDrive20i`, {
    engine: 'N20B20 2.0L Turbo I4', displacement: 1997, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 11.6, seats: 5,
    weight: 1760, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X4|${y}|xDrive28i`, {
    engine: 'N20B20 2.0L Turbo I4 (high tune)', displacement: 1997, cylinders: 4,
    power: 180, torque: 350, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.0, seats: 5,
    weight: 1790, bodyStyle: 'SUV', price: `~$${(base + 13000).toLocaleString()}`
  })
  add(`BMW|X4|${y}|xDrive35i`, {
    engine: 'N55B30 3.0L Turbo I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.0, fx: 12.6, seats: 5,
    weight: 1810, bodyStyle: 'SUV', price: `~$${(base + 23000).toLocaleString()}`
  })
}

// ── BMW X4 G02 (2018–2026) ────────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(72900 + (y - 2018) * 1500)
  add(`BMW|X4|${y}|xDrive20i`, {
    engine: 'B48B20 2.0L Turbo I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.2, seats: 5,
    weight: 1760, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X4|${y}|xDrive30i`, {
    engine: 'B48B20 2.0L Turbo I4 (high tune)', displacement: 1998, cylinders: 4,
    power: 185, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.2, fx: 11.4, seats: 5,
    weight: 1790, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|X4|${y}|M40i`, {
    engine: 'B58B30 3.0L Turbo I6', displacement: 2998, cylinders: 6,
    power: 265, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 6.6, fx: 12.4, seats: 5,
    weight: 1880, bodyStyle: 'SUV', price: `~$${(base + 37000).toLocaleString()}`
  })
}

// ── BMW X6 E71 (2008–2013) ────────────────────────────────────────────────
for (let y = 2008; y <= 2013; y++) {
  const base = Math.round(89900 + (y - 2008) * 2000)
  add(`BMW|X6|${y}|xDrive35i`, {
    engine: 'N55B30 3.0L Turbo I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.8, fh: 8.4, fx: 16.2, seats: 5,
    weight: 2155, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X6|${y}|xDrive50i`, {
    engine: 'N63B44 4.4L Twin-Turbo V8', displacement: 4395, cylinders: 8,
    power: 300, torque: 600, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 14.0, fh: 10.0, fx: 18.8, seats: 5,
    weight: 2215, bodyStyle: 'SUV', price: `~$${(base + 50000).toLocaleString()}`
  })
  add(`BMW|X6|${y}|xDrive30d`, {
    engine: 'M57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 180, torque: 520, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 9.4, fh: 6.8, fx: 12.6, seats: 5,
    weight: 2185, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── BMW X6 F16 (2014–2019) ────────────────────────────────────────────────
for (let y = 2014; y <= 2019; y++) {
  const base = Math.round(109900 + (y - 2014) * 2000)
  add(`BMW|X6|${y}|xDrive35i`, {
    engine: 'N55B30 3.0L Turbo I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.0, fh: 7.4, fx: 13.8, seats: 5,
    weight: 2090, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X6|${y}|xDrive30d`, {
    engine: 'N57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 190, torque: 560, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 5.4, fx: 10.2, seats: 5,
    weight: 2080, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`BMW|X6|${y}|M50d`, {
    engine: 'N57S 3.0L Tri-Turbo TDI I6', displacement: 2993, cylinders: 6,
    power: 280, torque: 740, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 5.4, fx: 10.2, seats: 5,
    weight: 2130, bodyStyle: 'SUV', price: `~$${(base + 40000).toLocaleString()}`
  })
}

// ── BMW X6 G06 (2019–2026) ────────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(129900 + (y - 2019) * 2000)
  add(`BMW|X6|${y}|xDrive30d`, {
    engine: 'B57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 210, torque: 620, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.2, fh: 5.2, fx: 9.8, seats: 5,
    weight: 2120, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X6|${y}|xDrive40i`, {
    engine: 'B58B30 3.0L Turbo I6', displacement: 2998, cylinders: 6,
    power: 240, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.2, fh: 6.8, fx: 12.8, seats: 5,
    weight: 2120, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`BMW|X6|${y}|M50i`, {
    engine: 'S63B44 4.4L Twin-Turbo V8', displacement: 4395, cylinders: 8,
    power: 390, torque: 750, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.6, fh: 9.2, fx: 17.4, seats: 5,
    weight: 2235, bodyStyle: 'SUV', price: `~$${(base + 80000).toLocaleString()}`
  })
}

// ── BMW X7 G07 (2019–2026) ────────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(129900 + (y - 2019) * 2500)
  add(`BMW|X7|${y}|xDrive30d`, {
    engine: 'B57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 210, torque: 620, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 5.8, fx: 10.8, seats: 7,
    weight: 2450, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X7|${y}|xDrive40i`, {
    engine: 'B58B30 3.0L Turbo I6', displacement: 2998, cylinders: 6,
    power: 240, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.2, seats: 7,
    weight: 2455, bodyStyle: 'SUV', price: `~$${(base + 25000).toLocaleString()}`
  })
  add(`BMW|X7|${y}|M50i`, {
    engine: 'S63B44 4.4L Twin-Turbo V8', displacement: 4395, cylinders: 8,
    power: 390, torque: 750, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 13.4, fh: 9.6, fx: 18.2, seats: 7,
    weight: 2560, bodyStyle: 'SUV', price: `~$${(base + 90000).toLocaleString()}`
  })
}

// ── BMW i3 60Ah (2013–2017) ───────────────────────────────────────────────
for (let y = 2013; y <= 2017; y++) {
  const base = Math.round(51900 + (y - 2013) * 1000)
  add(`BMW|i3|${y}|i3`, {
    engine: 'AC Synchronous Motor (Rear)', displacement: 0, cylinders: 0,
    power: 125, torque: 250, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 160, battery: '22 kWh', seats: 4,
    weight: 1195, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|i3|${y}|i3 REx`, {
    engine: 'AC Motor + 650cc REx Generator', displacement: 647, cylinders: 2,
    power: 125, torque: 250, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 320, battery: '22 kWh', seats: 4,
    weight: 1315, bodyStyle: 'Hatch', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── BMW i3/i3s 94Ah/120Ah (2018–2022) ────────────────────────────────────
for (let y = 2018; y <= 2022; y++) {
  const base = Math.round(63900 + (y - 2018) * 1000)
  add(`BMW|i3|${y}|i3s`, {
    engine: 'AC Synchronous Motor (Rear) — i3s tune', displacement: 0, cylinders: 0,
    power: 135, torque: 270, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 260, battery: '42.2 kWh', seats: 4,
    weight: 1245, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|i3|${y}|i3s REx`, {
    engine: 'AC Motor + 650cc REx Generator — i3s tune', displacement: 647, cylinders: 2,
    power: 135, torque: 270, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 400, battery: '42.2 kWh', seats: 4,
    weight: 1360, bodyStyle: 'Hatch', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── BMW i4 G26 (2021–2026) ───────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(99900 + (y - 2021) * 2000)
  add(`BMW|i4|${y}|eDrive40`, {
    engine: 'AC Motor (Rear) 250kW', displacement: 0, cylinders: 0,
    power: 250, torque: 430, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 590, battery: '80.7 kWh', seats: 5,
    weight: 2050, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|i4|${y}|M50`, {
    engine: 'Dual AC Motors AWD — 400kW combined', displacement: 0, cylinders: 0,
    power: 400, torque: 795, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 510, battery: '80.7 kWh', seats: 5,
    weight: 2215, bodyStyle: 'Sedan', price: `~$${(base + 50000).toLocaleString()}`
  })
}

// ── BMW iX I20 (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(139900 + (y - 2021) * 2500)
  add(`BMW|iX|${y}|xDrive40`, {
    engine: 'Dual AC Motors AWD — 240kW combined', displacement: 0, cylinders: 0,
    power: 240, torque: 590, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 425, battery: '76.6 kWh', seats: 5,
    weight: 2440, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|iX|${y}|xDrive50`, {
    engine: 'Dual AC Motors AWD — 385kW combined', displacement: 0, cylinders: 0,
    power: 385, torque: 765, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 630, battery: '111.5 kWh', seats: 5,
    weight: 2585, bodyStyle: 'SUV', price: `~$${(base + 35000).toLocaleString()}`
  })
  add(`BMW|iX|${y}|M60`, {
    engine: 'Dual AC Motors AWD — 455kW combined', displacement: 0, cylinders: 0,
    power: 455, torque: 1015, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 565, battery: '111.5 kWh', seats: 5,
    weight: 2660, bodyStyle: 'SUV', price: `~$${(base + 70000).toLocaleString()}`
  })
}

// ── BMW iX3 G08 (2020–2026) ──────────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(95900 + (y - 2020) * 2000)
  add(`BMW|iX3|${y}|M Sport`, {
    engine: 'AC Motor (Rear) 210kW', displacement: 0, cylinders: 0,
    power: 210, torque: 400, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 458, battery: '80 kWh', seats: 5,
    weight: 2185, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
}

const total = Object.keys(S).length
const makes = [...new Set(Object.keys(S).map(k => k.split('|')[0]))]
console.log(`gen39: ${total} entries, makes: ${makes.join(', ')}`)
fs.writeFileSync('src/data/supplement39.json', JSON.stringify(out, null, 2))
console.log('Written supplement39.json')
