#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── BMW 1 Series E87 (2004–2011) ─────────────────────────────────────────
for (let y = 2004; y <= 2011; y++) {
  const base = Math.round(32990 + (y - 2004) * 800)
  add(`BMW|1 Series|${y}|116i`, {
    engine: 'N43B16 1.6L I4', displacement: 1596, cylinders: 4,
    power: 90, torque: 175, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 7.6, fh: 5.4, fx: 11.2, seats: 5,
    weight: 1260, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|118i`, {
    engine: 'N43B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 105, torque: 200, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 5.8, fx: 12.0, seats: 5,
    weight: 1295, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|120i`, {
    engine: 'N46B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 125, torque: 200, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.0, fx: 12.4, seats: 5,
    weight: 1330, bodyStyle: 'Hatch', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|130i`, {
    engine: 'N52B30 3.0L I6', displacement: 2996, cylinders: 6,
    power: 195, torque: 300, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.0, fh: 7.2, fx: 14.2, seats: 5,
    weight: 1410, bodyStyle: 'Hatch', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|118d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 105, torque: 260, transmission: '6-speed manual',
    fuelType: 'diesel', fc: 5.6, fh: 4.2, fx: 7.8, seats: 5,
    weight: 1370, bodyStyle: 'Hatch', price: `~$${(base + 2000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|M135i`, {
    engine: 'N55B30 3.0T I6 Turbo', displacement: 2979, cylinders: 6,
    power: 235, torque: 320, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.6, fh: 7.0, fx: 13.4, seats: 5,
    weight: 1430, bodyStyle: 'Hatch', price: `~$${(base + 26000).toLocaleString()}`
  })
}

// ── BMW 1 Series F20 (2012–2019) ─────────────────────────────────────────
for (let y = 2012; y <= 2019; y++) {
  const base = Math.round(36990 + (y - 2012) * 900)
  add(`BMW|1 Series|${y}|116i`, {
    engine: 'N13B16 1.6T I4', displacement: 1598, cylinders: 4,
    power: 100, torque: 180, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 6.4, fh: 4.6, fx: 9.2, seats: 5,
    weight: 1260, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|118i`, {
    engine: 'N13B16 1.6T I4', displacement: 1598, cylinders: 4,
    power: 100, torque: 180, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.4, fh: 4.6, fx: 9.2, seats: 5,
    weight: 1285, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|125i`, {
    engine: 'N20B20 2.0T I4', displacement: 1997, cylinders: 4,
    power: 160, torque: 250, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.6, fh: 5.6, fx: 10.8, seats: 5,
    weight: 1360, bodyStyle: 'Hatch', price: `~$${(base + 15000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|M140i`, {
    engine: 'B58B30 3.0T I6 Turbo', displacement: 2998, cylinders: 6,
    power: 250, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.0, seats: 5,
    weight: 1510, bodyStyle: 'Hatch', price: `~$${(base + 28000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|118d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 105, torque: 260, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 4.8, fh: 3.8, fx: 6.6, seats: 5,
    weight: 1365, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
}

// ── BMW 1 Series F40 (2019–2026) ─────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(44490 + (y - 2019) * 1000)
  add(`BMW|1 Series|${y}|118i`, {
    engine: 'B38A15M 1.5T I3', displacement: 1499, cylinders: 3,
    power: 103, torque: 220, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1360, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|120i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 131, torque: 300, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1400, bodyStyle: 'Hatch', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`BMW|1 Series|${y}|M135i xDrive`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 225, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.0, seats: 5,
    weight: 1610, bodyStyle: 'Hatch', price: `~$${(base + 26000).toLocaleString()}`
  })
}

// ── BMW 2 Series F22/F87 Coupe (2014–2021) ────────────────────────────────
for (let y = 2014; y <= 2021; y++) {
  const base = Math.round(49990 + (y - 2014) * 1000)
  add(`BMW|2 Series|${y}|218i Coupe`, {
    engine: 'B38B15M 1.5T I3', displacement: 1499, cylinders: 3,
    power: 100, torque: 220, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 4,
    weight: 1360, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|2 Series|${y}|220i Coupe`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 4,
    weight: 1390, bodyStyle: 'Coupe', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`BMW|2 Series|${y}|M240i Coupe`, {
    engine: 'B58B30 3.0T I6 Turbo', displacement: 2998, cylinders: 6,
    power: 250, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 11.8, seats: 4,
    weight: 1530, bodyStyle: 'Coupe', price: `~$${(base + 24000).toLocaleString()}`
  })
  add(`BMW|2 Series|${y}|M2 Coupe`, {
    engine: 'S55B30 3.0T I6 Turbo', displacement: 2979, cylinders: 6,
    power: 272, torque: 465, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.6, fh: 7.2, fx: 13.6, seats: 4,
    weight: 1600, bodyStyle: 'Coupe', price: `~$${(base + 46000).toLocaleString()}`
  })
}

// ── BMW 2 Series G42 Coupe (2021–2026) ────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(57990 + (y - 2021) * 1200)
  add(`BMW|2 Series|${y}|220i Coupe`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 4,
    weight: 1505, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|2 Series|${y}|M240i xDrive Coupe`, {
    engine: 'B58B30 3.0T AWD I6', displacement: 2998, cylinders: 6,
    power: 275, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.2, fx: 11.6, seats: 4,
    weight: 1700, bodyStyle: 'Coupe', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`BMW|2 Series|${y}|M2 Coupe`, {
    engine: 'S58B30 3.0T I6 Turbo', displacement: 2993, cylinders: 6,
    power: 338, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.2, fh: 7.6, fx: 14.2, seats: 4,
    weight: 1730, bodyStyle: 'Coupe', price: `~$${(base + 50000).toLocaleString()}`
  })
}

// ── BMW 3 Series E46 (1998–2005) ─────────────────────────────────────────
for (let y = 1998; y <= 2005; y++) {
  const base = Math.round(48990 + (y - 1998) * 800)
  add(`BMW|3 Series|${y}|318i`, {
    engine: 'N42B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 85, torque: 175, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.0, fh: 6.4, fx: 13.0, seats: 5,
    weight: 1380, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320i`, {
    engine: 'N46B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 110, torque: 200, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 7.0, fx: 14.2, seats: 5,
    weight: 1400, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|325i`, {
    engine: 'M54B25 2.5L I6', displacement: 2494, cylinders: 6,
    power: 141, torque: 245, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 10.8, fh: 7.6, fx: 15.4, seats: 5,
    weight: 1450, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|330i`, {
    engine: 'M54B30 3.0L I6', displacement: 2979, cylinders: 6,
    power: 170, torque: 300, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 11.6, fh: 8.0, fx: 16.8, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320d`, {
    engine: 'M47D20 2.0L TDI I4', displacement: 1951, cylinders: 4,
    power: 110, torque: 280, transmission: '5-speed manual',
    fuelType: 'diesel', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1440, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|M3`, {
    engine: 'S54B32 3.2L I6', displacement: 3246, cylinders: 6,
    power: 252, torque: 365, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 13.2, fh: 9.2, fx: 19.2, seats: 5,
    weight: 1570, bodyStyle: 'Sedan', price: `~$${(base + 40000).toLocaleString()}`
  })
}

// ── BMW 3 Series E90 (2005–2012) ─────────────────────────────────────────
for (let y = 2005; y <= 2012; y++) {
  const base = Math.round(52990 + (y - 2005) * 900)
  add(`BMW|3 Series|${y}|318i`, {
    engine: 'N46B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 95, torque: 180, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.2, fh: 6.6, fx: 13.4, seats: 5,
    weight: 1395, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320i`, {
    engine: 'N43B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 110, torque: 200, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 6.8, fx: 13.6, seats: 5,
    weight: 1420, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|325i`, {
    engine: 'N52B25 2.5L I6', displacement: 2497, cylinders: 6,
    power: 160, torque: 250, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.6, fh: 7.4, fx: 15.2, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|330i`, {
    engine: 'N52B30 3.0L I6', displacement: 2996, cylinders: 6,
    power: 190, torque: 270, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 11.2, fh: 7.8, fx: 16.0, seats: 5,
    weight: 1540, bodyStyle: 'Sedan', price: `~$${(base + 17000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|335i`, {
    engine: 'N54B30 3.0T I6 Twin Turbo', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.8, fh: 7.8, fx: 15.4, seats: 5,
    weight: 1580, bodyStyle: 'Sedan', price: `~$${(base + 25000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 130, torque: 300, transmission: '6-speed manual',
    fuelType: 'diesel', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1480, bodyStyle: 'Sedan', price: `~$${(base - 1000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|M3`, {
    engine: 'S65B40 4.0L V8', displacement: 3999, cylinders: 8,
    power: 309, torque: 400, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 14.8, fh: 10.2, fx: 21.4, seats: 5,
    weight: 1655, bodyStyle: 'Sedan', price: `~$${(base + 55000).toLocaleString()}`
  })
}

// ── BMW 3 Series F30 (2012–2019) ─────────────────────────────────────────
for (let y = 2012; y <= 2019; y++) {
  const base = Math.round(55990 + (y - 2012) * 1000)
  add(`BMW|3 Series|${y}|318i`, {
    engine: 'B38B15 1.5T I3', displacement: 1499, cylinders: 3,
    power: 100, torque: 220, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.6, fh: 4.8, fx: 9.4, seats: 5,
    weight: 1435, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1475, bodyStyle: 'Sedan', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|328i`, {
    engine: 'N20B20 2.0T I4', displacement: 1997, cylinders: 4,
    power: 180, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.0, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|330i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 185, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1515, bodyStyle: 'Sedan', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|335i`, {
    engine: 'N55B30 3.0T I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.4, seats: 5,
    weight: 1605, bodyStyle: 'Sedan', price: `~$${(base + 26000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|340i`, {
    engine: 'B58B30 3.0T I6', displacement: 2998, cylinders: 6,
    power: 240, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.2, seats: 5,
    weight: 1655, bodyStyle: 'Sedan', price: `~$${(base + 30000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 135, torque: 380, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.0, fh: 3.8, fx: 6.8, seats: 5,
    weight: 1535, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|M3`, {
    engine: 'S55B30 3.0T I6 Turbo', displacement: 2979, cylinders: 6,
    power: 317, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 11.0, fh: 8.0, fx: 15.6, seats: 5,
    weight: 1755, bodyStyle: 'Sedan', price: `~$${(base + 66000).toLocaleString()}`
  })
}

// ── BMW 3 Series G20 (2019–2026) ─────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(63990 + (y - 2019) * 1200)
  add(`BMW|3 Series|${y}|318i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 115, torque: 250, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.6, fh: 4.8, fx: 9.4, seats: 5,
    weight: 1505, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 5,
    weight: 1530, bodyStyle: 'Sedan', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|330i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 190, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1595, bodyStyle: 'Sedan', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|340i`, {
    engine: 'B58B30 3.0T I6', displacement: 2998, cylinders: 6,
    power: 250, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.0, fx: 11.6, seats: 5,
    weight: 1720, bodyStyle: 'Sedan', price: `~$${(base + 24000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|320d`, {
    engine: 'B47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 140, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.0, fh: 3.8, fx: 6.8, seats: 5,
    weight: 1595, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|M3`, {
    engine: 'S58B30 3.0T I6 Turbo', displacement: 2993, cylinders: 6,
    power: 353, torque: 550, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 11.2, fh: 8.2, fx: 15.8, seats: 5,
    weight: 1730, bodyStyle: 'Sedan', price: `~$${(base + 90000).toLocaleString()}`
  })
  if (y >= 2021) {
    add(`BMW|3 Series|${y}|M3 Competition`, {
      engine: 'S58B30 3.0T I6 Turbo', displacement: 2993, cylinders: 6,
      power: 375, torque: 650, transmission: '8-speed automatic',
      fuelType: 'petrol', fc: 11.4, fh: 8.4, fx: 16.0, seats: 5,
      weight: 1750, bodyStyle: 'Sedan', price: `~$${(base + 104000).toLocaleString()}`
    })
  }
}

// ── BMW 5 Series E60 (2003–2010) ─────────────────────────────────────────
for (let y = 2003; y <= 2010; y++) {
  const base = Math.round(79990 + (y - 2003) * 1200)
  add(`BMW|5 Series|${y}|520i`, {
    engine: 'N43B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 110, torque: 200, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.2, fx: 14.8, seats: 5,
    weight: 1600, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|523i`, {
    engine: 'N52B25 2.5L I6', displacement: 2497, cylinders: 6,
    power: 130, torque: 230, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.8, fh: 7.6, fx: 15.6, seats: 5,
    weight: 1660, bodyStyle: 'Sedan', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|530i`, {
    engine: 'N52B30 3.0L I6', displacement: 2996, cylinders: 6,
    power: 190, torque: 270, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 11.6, fh: 8.2, fx: 16.6, seats: 5,
    weight: 1720, bodyStyle: 'Sedan', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|550i`, {
    engine: 'N62B48 4.8L V8', displacement: 4799, cylinders: 8,
    power: 270, torque: 490, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 14.8, fh: 10.6, fx: 20.6, seats: 5,
    weight: 1820, bodyStyle: 'Sedan', price: `~$${(base + 38000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|520d`, {
    engine: 'M47D20 2.0L TDI I4', displacement: 1951, cylinders: 4,
    power: 130, torque: 300, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 7.2, fh: 5.4, fx: 10.0, seats: 5,
    weight: 1660, bodyStyle: 'Sedan', price: `~$${(base - 4000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|M5`, {
    engine: 'S85B50 5.0L V10', displacement: 4999, cylinders: 10,
    power: 373, torque: 520, transmission: '7-speed SMG',
    fuelType: 'petrol', fc: 18.8, fh: 13.0, fx: 27.8, seats: 5,
    weight: 1830, bodyStyle: 'Sedan', price: `~$${(base + 100000).toLocaleString()}`
  })
}

// ── BMW 5 Series F10 (2010–2017) ─────────────────────────────────────────
for (let y = 2010; y <= 2017; y++) {
  const base = Math.round(84990 + (y - 2010) * 1400)
  add(`BMW|5 Series|${y}|520i`, {
    engine: 'N20B20 2.0T I4', displacement: 1997, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1610, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|528i`, {
    engine: 'N20B20 2.0T I4', displacement: 1997, cylinders: 4,
    power: 180, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.8, seats: 5,
    weight: 1660, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|535i`, {
    engine: 'N55B30 3.0T I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 6.6, fx: 12.8, seats: 5,
    weight: 1760, bodyStyle: 'Sedan', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|550i`, {
    engine: 'N63B44 4.4T V8 Twin Turbo', displacement: 4395, cylinders: 8,
    power: 300, torque: 600, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.4, fh: 9.0, fx: 17.4, seats: 5,
    weight: 1920, bodyStyle: 'Sedan', price: `~$${(base + 46000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|520d`, {
    engine: 'N47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 135, torque: 380, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.6, fh: 4.2, fx: 7.8, seats: 5,
    weight: 1660, bodyStyle: 'Sedan', price: `~$${(base - 6000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|M5`, {
    engine: 'S63B44 4.4T V8 AWD', displacement: 4395, cylinders: 8,
    power: 412, torque: 680, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 14.0, fh: 10.0, fx: 19.4, seats: 5,
    weight: 1870, bodyStyle: 'Sedan', price: `~$${(base + 120000).toLocaleString()}`
  })
}

// ── BMW 5 Series G30 (2017–2026) ─────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = Math.round(89990 + (y - 2017) * 1500)
  add(`BMW|5 Series|${y}|520i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 5,
    weight: 1640, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|530i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 185, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1720, bodyStyle: 'Sedan', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|540i`, {
    engine: 'B58B30 3.0T I6', displacement: 2998, cylinders: 6,
    power: 250, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1820, bodyStyle: 'Sedan', price: `~$${(base + 28000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|M550i`, {
    engine: 'N63B44 4.4T V8 AWD', displacement: 4395, cylinders: 8,
    power: 340, torque: 750, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.0, fh: 8.0, fx: 15.6, seats: 5,
    weight: 1970, bodyStyle: 'Sedan', price: `~$${(base + 68000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|520d`, {
    engine: 'B47D20 2.0L TDI I4', displacement: 1995, cylinders: 4,
    power: 140, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.2, fh: 3.8, fx: 7.2, seats: 5,
    weight: 1700, bodyStyle: 'Sedan', price: `~$${(base - 8000).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|M5`, {
    engine: 'S63B44 4.4T V8 AWD', displacement: 4395, cylinders: 8,
    power: 441, torque: 750, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 13.2, fh: 9.4, fx: 18.6, seats: 5,
    weight: 1960, bodyStyle: 'Sedan', price: `~$${(base + 130000).toLocaleString()}`
  })
  if (y >= 2021) {
    add(`BMW|5 Series|${y}|M5 Competition`, {
      engine: 'S63B44 4.4T V8 AWD', displacement: 4395, cylinders: 8,
      power: 460, torque: 750, transmission: '8-speed automatic',
      fuelType: 'petrol', fc: 13.4, fh: 9.6, fx: 18.8, seats: 5,
      weight: 1975, bodyStyle: 'Sedan', price: `~$${(base + 150000).toLocaleString()}`
    })
  }
}

// ── BMW X1 E84 (2009–2015) ───────────────────────────────────────────────
for (let y = 2009; y <= 2015; y++) {
  const base = Math.round(44990 + (y - 2009) * 800)
  add(`BMW|X1|${y}|sDrive18i`, {
    engine: 'N46B20 2.0L I4', displacement: 1995, cylinders: 4,
    power: 105, torque: 200, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 6.4, fx: 12.6, seats: 5,
    weight: 1465, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive20i`, {
    engine: 'N20B20 2.0T AWD I4', displacement: 1997, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.0, seats: 5,
    weight: 1600, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive25i`, {
    engine: 'N52B25 2.5L AWD I6', displacement: 2497, cylinders: 6,
    power: 160, torque: 250, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.0, fh: 7.2, fx: 14.4, seats: 5,
    weight: 1660, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive20d`, {
    engine: 'N47D20 2.0L TDI AWD I4', displacement: 1995, cylinders: 4,
    power: 130, torque: 300, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1620, bodyStyle: 'SUV', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── BMW X1 F48 (2015–2022) ───────────────────────────────────────────────
for (let y = 2015; y <= 2022; y++) {
  const base = Math.round(47990 + (y - 2015) * 900)
  add(`BMW|X1|${y}|sDrive18i`, {
    engine: 'B38A15 1.5T I3', displacement: 1499, cylinders: 3,
    power: 103, torque: 220, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1460, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive20i`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 141, torque: 280, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1600, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive25i`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 170, torque: 350, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1640, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive20d`, {
    engine: 'B47D20 2.0L TDI AWD I4', displacement: 1995, cylinders: 4,
    power: 140, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 5.4, fh: 4.0, fx: 7.6, seats: 5,
    weight: 1655, bodyStyle: 'SUV', price: `~$${(base + 3000).toLocaleString()}`
  })
}

// ── BMW X1 U11 (2022–2026) ───────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(54990 + (y - 2022) * 1000)
  add(`BMW|X1|${y}|sDrive20i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 125, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1590, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X1|${y}|xDrive23i`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 170, torque: 400, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1810, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|X1|${y}|iX1 xDrive30`, {
    engine: 'EM1 64.7kWh Dual Motor AWD', displacement: 0, cylinders: 0,
    power: 230, torque: 494, transmission: 'single-speed',
    fuelType: 'electric', fc: null, fh: null, fx: null, range: 440, battery: '64.7 kWh',
    seats: 5, weight: 2020, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
}

// ── BMW X3 E83 (2003–2010) ───────────────────────────────────────────────
for (let y = 2003; y <= 2010; y++) {
  const base = Math.round(56990 + (y - 2003) * 900)
  add(`BMW|X3|${y}|2.5i`, {
    engine: 'M54B25 2.5L AWD I6', displacement: 2494, cylinders: 6,
    power: 141, torque: 245, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 11.4, fh: 8.0, fx: 16.2, seats: 5,
    weight: 1720, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X3|${y}|3.0i`, {
    engine: 'M54B30 3.0L AWD I6', displacement: 2979, cylinders: 6,
    power: 170, torque: 300, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 12.4, fh: 8.6, fx: 17.6, seats: 5,
    weight: 1770, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|X3|${y}|3.0d`, {
    engine: 'M57D30 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 160, torque: 350, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 9.0, fh: 6.6, fx: 12.8, seats: 5,
    weight: 1810, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── BMW X3 F25 (2010–2017) ───────────────────────────────────────────────
for (let y = 2010; y <= 2017; y++) {
  const base = Math.round(64990 + (y - 2010) * 1100)
  add(`BMW|X3|${y}|xDrive20i`, {
    engine: 'N20B20 2.0T AWD I4', displacement: 1997, cylinders: 4,
    power: 135, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.0, seats: 5,
    weight: 1700, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X3|${y}|xDrive28i`, {
    engine: 'N52B30 3.0L AWD I6', displacement: 2996, cylinders: 6,
    power: 190, torque: 270, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 11.0, fh: 8.0, fx: 15.6, seats: 5,
    weight: 1800, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`BMW|X3|${y}|xDrive35i`, {
    engine: 'N55B30 3.0T AWD I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.6, seats: 5,
    weight: 1870, bodyStyle: 'SUV', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`BMW|X3|${y}|xDrive20d`, {
    engine: 'N47D20 2.0L TDI AWD I4', displacement: 1995, cylinders: 4,
    power: 135, torque: 380, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 6.6, fh: 5.0, fx: 9.4, seats: 5,
    weight: 1760, bodyStyle: 'SUV', price: `~$${(base - 4000).toLocaleString()}`
  })
}

// ── BMW X3 G01 (2017–2026) ───────────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = Math.round(73990 + (y - 2017) * 1400)
  add(`BMW|X3|${y}|xDrive20i`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 135, torque: 300, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.0, seats: 5,
    weight: 1780, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X3|${y}|xDrive30i`, {
    engine: 'B48B20 2.0T AWD I4', displacement: 1998, cylinders: 4,
    power: 185, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1830, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`BMW|X3|${y}|M40i`, {
    engine: 'B58B30 3.0T AWD I6', displacement: 2998, cylinders: 6,
    power: 265, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.6, fh: 7.2, fx: 13.6, seats: 5,
    weight: 2010, bodyStyle: 'SUV', price: `~$${(base + 34000).toLocaleString()}`
  })
  add(`BMW|X3|${y}|xDrive20d`, {
    engine: 'B47D20 2.0L TDI AWD I4', displacement: 1995, cylinders: 4,
    power: 140, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1840, bodyStyle: 'SUV', price: `~$${(base - 6000).toLocaleString()}`
  })
}

// ── BMW X5 E53 (2000–2006) ───────────────────────────────────────────────
for (let y = 2000; y <= 2006; y++) {
  const base = Math.round(84990 + (y - 2000) * 1200)
  add(`BMW|X5|${y}|3.0i`, {
    engine: 'M54B30 3.0L AWD I6', displacement: 2979, cylinders: 6,
    power: 170, torque: 300, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 13.8, fh: 9.6, fx: 19.6, seats: 5,
    weight: 2065, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X5|${y}|4.4i`, {
    engine: 'N62B44 4.4L V8 AWD', displacement: 4398, cylinders: 8,
    power: 235, torque: 450, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 16.4, fh: 11.4, fx: 23.2, seats: 5,
    weight: 2165, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|3.0d`, {
    engine: 'M57D30 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 160, torque: 350, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 10.4, fh: 7.6, fx: 14.6, seats: 5,
    weight: 2125, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── BMW X5 E70 (2007–2013) ───────────────────────────────────────────────
for (let y = 2007; y <= 2013; y++) {
  const base = Math.round(94990 + (y - 2007) * 1500)
  add(`BMW|X5|${y}|xDrive30i`, {
    engine: 'N52B30 3.0L AWD I6', displacement: 2996, cylinders: 6,
    power: 190, torque: 270, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 12.6, fh: 9.0, fx: 17.8, seats: 5,
    weight: 2065, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive35i`, {
    engine: 'N54B30 3.0T AWD I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 12.4, fh: 8.8, fx: 17.6, seats: 5,
    weight: 2115, bodyStyle: 'SUV', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive48i`, {
    engine: 'N62B48 4.8L AWD V8', displacement: 4799, cylinders: 8,
    power: 261, torque: 490, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 16.0, fh: 11.2, fx: 22.4, seats: 7,
    weight: 2245, bodyStyle: 'SUV', price: `~$${(base + 28000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive30d`, {
    engine: 'M57D30 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 173, torque: 400, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 9.8, fh: 7.2, fx: 13.8, seats: 5,
    weight: 2155, bodyStyle: 'SUV', price: `~$${(base - 4000).toLocaleString()}`
  })
}

// ── BMW X5 F15 (2013–2018) ───────────────────────────────────────────────
for (let y = 2013; y <= 2018; y++) {
  const base = Math.round(99990 + (y - 2013) * 1600)
  add(`BMW|X5|${y}|xDrive25i`, {
    engine: 'N20B20 2.0T AWD I4', displacement: 1997, cylinders: 4,
    power: 155, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.6, seats: 5,
    weight: 1965, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive35i`, {
    engine: 'N55B30 3.0T AWD I6', displacement: 2979, cylinders: 6,
    power: 225, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.6, seats: 5,
    weight: 2085, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive30d`, {
    engine: 'N57D30 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 190, torque: 560, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.6, fh: 5.6, fx: 10.8, seats: 5,
    weight: 2150, bodyStyle: 'SUV', price: `~$${(base - 6000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|M50d`, {
    engine: 'N57D30S 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 280, torque: 740, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.4, fh: 6.2, fx: 12.0, seats: 5,
    weight: 2254, bodyStyle: 'SUV', price: `~$${(base + 40000).toLocaleString()}`
  })
}

// ── BMW X5 G05 (2018–2026) ───────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(106990 + (y - 2018) * 1800)
  add(`BMW|X5|${y}|xDrive25d`, {
    engine: 'B47D20 2.0L TDI AWD I4', displacement: 1995, cylinders: 4,
    power: 170, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.0, fh: 5.2, fx: 10.0, seats: 5,
    weight: 2105, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive30d`, {
    engine: 'B57D30 3.0L TDI AWD I6', displacement: 2993, cylinders: 6,
    power: 210, torque: 620, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 2195, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|xDrive40i`, {
    engine: 'B58B30 3.0T AWD I6', displacement: 2998, cylinders: 6,
    power: 250, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.6, fx: 14.4, seats: 5,
    weight: 2165, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`BMW|X5|${y}|M50i`, {
    engine: 'N63B44 4.4T AWD V8', displacement: 4395, cylinders: 8,
    power: 390, torque: 750, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 13.2, fh: 9.8, fx: 18.8, seats: 5,
    weight: 2310, bodyStyle: 'SUV', price: `~$${(base + 56000).toLocaleString()}`
  })
  if (y >= 2019) {
    add(`BMW|X5|${y}|xDrive45e`, {
      engine: 'B58B30 3.0T AWD PHEV I6', displacement: 2998, cylinders: 6,
      power: 290, torque: 600, transmission: '8-speed automatic',
      fuelType: 'petrol', fc: 2.5, fh: null, fx: null, seats: 5,
      weight: 2455, bodyStyle: 'SUV', price: `~$${(base + 22000).toLocaleString()}`
    })
  }
}

// ── BMW Z4 E85 (2002–2009) ───────────────────────────────────────────────
for (let y = 2002; y <= 2009; y++) {
  const base = Math.round(68990 + (y - 2002) * 1000)
  add(`BMW|Z4|${y}|2.2i Roadster`, {
    engine: 'M54B22 2.2L I6', displacement: 2171, cylinders: 6,
    power: 125, torque: 210, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 10.6, fh: 7.4, fx: 15.4, seats: 2,
    weight: 1300, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|Z4|${y}|3.0i Roadster`, {
    engine: 'M54B30 3.0L I6', displacement: 2979, cylinders: 6,
    power: 170, torque: 300, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 11.8, fh: 8.2, fx: 17.0, seats: 2,
    weight: 1365, bodyStyle: 'Coupe', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`BMW|Z4|${y}|3.0si Roadster`, {
    engine: 'N52B30 3.0L I6', displacement: 2996, cylinders: 6,
    power: 195, torque: 270, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 11.2, fh: 7.8, fx: 16.0, seats: 2,
    weight: 1340, bodyStyle: 'Coupe', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`BMW|Z4|${y}|M Roadster`, {
    engine: 'S54B32 3.2L I6', displacement: 3246, cylinders: 6,
    power: 252, torque: 365, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 13.0, fh: 9.0, fx: 18.8, seats: 2,
    weight: 1395, bodyStyle: 'Coupe', price: `~$${(base + 38000).toLocaleString()}`
  })
}

// ── BMW Z4 G29 (2018–2026) ───────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(79990 + (y - 2018) * 1200)
  add(`BMW|Z4|${y}|sDrive20i`, {
    engine: 'B46B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 145, torque: 320, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 2,
    weight: 1470, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|Z4|${y}|sDrive30i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 190, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 2,
    weight: 1495, bodyStyle: 'Coupe', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`BMW|Z4|${y}|M40i`, {
    engine: 'B58B30 3.0T I6', displacement: 2998, cylinders: 6,
    power: 250, torque: 500, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.2, seats: 2,
    weight: 1535, bodyStyle: 'Coupe', price: `~$${(base + 26000).toLocaleString()}`
  })
}

// ── BMW 7 Series F01 (2008–2015) ─────────────────────────────────────────
for (let y = 2008; y <= 2015; y++) {
  const base = Math.round(159990 + (y - 2008) * 2000)
  add(`BMW|7 Series|${y}|730i`, {
    engine: 'N52B30 3.0L I6', displacement: 2996, cylinders: 6,
    power: 190, torque: 270, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.0, fh: 7.8, fx: 15.8, seats: 5,
    weight: 1875, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|740i`, {
    engine: 'N54B30 3.0T I6', displacement: 2979, cylinders: 6,
    power: 240, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.8, fh: 8.4, fx: 16.8, seats: 5,
    weight: 1945, bodyStyle: 'Sedan', price: `~$${(base + 30000).toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|750i`, {
    engine: 'N63B44 4.4T V8', displacement: 4395, cylinders: 8,
    power: 300, torque: 600, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 14.0, fh: 10.0, fx: 19.8, seats: 5,
    weight: 2060, bodyStyle: 'Sedan', price: `~$${(base + 60000).toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|730d`, {
    engine: 'N57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 180, torque: 540, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1940, bodyStyle: 'Sedan', price: `~$${(base - 10000).toLocaleString()}`
  })
}

// ── BMW 7 Series G11 (2015–2022) ─────────────────────────────────────────
for (let y = 2015; y <= 2022; y++) {
  const base = Math.round(182990 + (y - 2015) * 2500)
  add(`BMW|7 Series|${y}|730i`, {
    engine: 'B48B20 2.0T I4', displacement: 1998, cylinders: 4,
    power: 190, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.0, seats: 5,
    weight: 1975, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|740i`, {
    engine: 'B58B30 3.0T I6', displacement: 2998, cylinders: 6,
    power: 240, torque: 450, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.2, fx: 11.6, seats: 5,
    weight: 2075, bodyStyle: 'Sedan', price: `~$${(base + 36000).toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|750i`, {
    engine: 'N63B44 4.4T V8', displacement: 4395, cylinders: 8,
    power: 330, torque: 650, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 8.8, fx: 17.4, seats: 5,
    weight: 2235, bodyStyle: 'Sedan', price: `~$${(base + 76000).toLocaleString()}`
  })
  add(`BMW|7 Series|${y}|730d`, {
    engine: 'B57D30 3.0L TDI I6', displacement: 2993, cylinders: 6,
    power: 195, torque: 620, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 6.6, fh: 5.0, fx: 9.4, seats: 5,
    weight: 2045, bodyStyle: 'Sedan', price: `~$${(base - 14000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
console.log(`Generated ${count} BMW specs`)
fs.writeFileSync('src/data/supplement37.json', JSON.stringify(out, null, 2))
console.log('Written to src/data/supplement37.json')
