#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── Mercedes-Benz A-Class W168 (1998–2004) ────────────────────────────────
for (let y = 1998; y <= 2004; y++) {
  const base = Math.round(28990 + (y - 1998) * 500)
  add(`Mercedes-Benz|A-Class|${y}|A160`, {
    engine: 'M166.940 1.6L I4', displacement: 1598, cylinders: 4,
    power: 70, torque: 140, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.2, seats: 5,
    weight: 1020, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A190`, {
    engine: 'M166.990 1.9L I4', displacement: 1898, cylinders: 4,
    power: 92, torque: 180, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.2, seats: 5,
    weight: 1040, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Mercedes-Benz A-Class W169 (2004–2012) ────────────────────────────────
for (let y = 2004; y <= 2012; y++) {
  const base = Math.round(32990 + (y - 2004) * 600)
  add(`Mercedes-Benz|A-Class|${y}|A150`, {
    engine: 'M266.920 1.5L I4', displacement: 1499, cylinders: 4,
    power: 70, torque: 130, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.6, fh: 5.6, fx: 11.0, seats: 5,
    weight: 1090, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A170`, {
    engine: 'M266.940 1.7L I4', displacement: 1699, cylinders: 4,
    power: 85, torque: 155, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.0, fh: 5.8, fx: 11.6, seats: 5,
    weight: 1110, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A200`, {
    engine: 'M266.960 2.0L I4', displacement: 1991, cylinders: 4,
    power: 100, torque: 185, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.2, seats: 5,
    weight: 1130, bodyStyle: 'Hatch', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Mercedes-Benz A-Class W176 (2012–2018) ────────────────────────────────
for (let y = 2012; y <= 2018; y++) {
  const base = Math.round(36990 + (y - 2012) * 800)
  add(`Mercedes-Benz|A-Class|${y}|A180`, {
    engine: 'M270.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 90, torque: 200, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.0, fh: 4.4, fx: 8.8, seats: 5,
    weight: 1365, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A200`, {
    engine: 'M270.920 1.6T I4', displacement: 1595, cylinders: 4,
    power: 115, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.2, seats: 5,
    weight: 1385, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A250`, {
    engine: 'M270.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 155, torque: 350, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1445, bodyStyle: 'Hatch', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A45 AMG`, {
    engine: 'M133.980 2.0T I4 AWD', displacement: 1991, cylinders: 4,
    power: 265, torque: 450, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.6, fh: 6.6, fx: 12.0, seats: 5,
    weight: 1620, bodyStyle: 'Hatch', price: `~$${(base + 28000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A180 CDI`, {
    engine: 'OM651.901 1.5L TDI I4', displacement: 1461, cylinders: 4,
    power: 80, torque: 200, transmission: '7-speed DCT',
    fuelType: 'diesel', fc: 4.6, fh: 3.6, fx: 6.4, seats: 5,
    weight: 1415, bodyStyle: 'Hatch', price: `~$${(base + 2000).toLocaleString()}`
  })
}

// ── Mercedes-Benz A-Class W177 (2018–2026) ────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(44990 + (y - 2018) * 900)
  add(`Mercedes-Benz|A-Class|${y}|A180`, {
    engine: 'M282.914 1.3T I4', displacement: 1332, cylinders: 4,
    power: 100, torque: 200, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.2, seats: 5,
    weight: 1390, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A200`, {
    engine: 'M282.914 1.3T I4', displacement: 1332, cylinders: 4,
    power: 120, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.0, fh: 4.6, fx: 8.6, seats: 5,
    weight: 1415, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A250`, {
    engine: 'M260.920 2.0T I4 AWD', displacement: 1991, cylinders: 4,
    power: 165, torque: 350, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1520, bodyStyle: 'Hatch', price: `~$${(base + 11000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A35 AMG`, {
    engine: 'M260.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 225, torque: 400, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.8, seats: 5,
    weight: 1625, bodyStyle: 'Hatch', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`Mercedes-Benz|A-Class|${y}|A45 S AMG`, {
    engine: 'M139.980 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 310, torque: 500, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 9.4, fh: 7.0, fx: 13.4, seats: 5,
    weight: 1735, bodyStyle: 'Hatch', price: `~$${(base + 38000).toLocaleString()}`
  })
}

// ── Mercedes-Benz C-Class W204 (2007–2014) ────────────────────────────────
for (let y = 2007; y <= 2014; y++) {
  const base = Math.round(56990 + (y - 2007) * 1000)
  add(`Mercedes-Benz|C-Class|${y}|C180`, {
    engine: 'M271.910 1.8T I4', displacement: 1796, cylinders: 4,
    power: 95, torque: 200, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.2, seats: 5,
    weight: 1510, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C200`, {
    engine: 'M271.920 1.8T I4', displacement: 1796, cylinders: 4,
    power: 135, torque: 270, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.0, fx: 11.8, seats: 5,
    weight: 1545, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C250`, {
    engine: 'M271.920 1.8T I4', displacement: 1796, cylinders: 4,
    power: 150, torque: 310, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.0, seats: 5,
    weight: 1575, bodyStyle: 'Sedan', price: `~$${(base + 9000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C300`, {
    engine: 'M272.948 3.0L V6', displacement: 2996, cylinders: 6,
    power: 170, torque: 300, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 10.8, fh: 7.6, fx: 15.6, seats: 5,
    weight: 1625, bodyStyle: 'Sedan', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C63 AMG`, {
    engine: 'M156.983 6.2L V8', displacement: 6208, cylinders: 8,
    power: 336, torque: 600, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 15.8, fh: 11.0, fx: 22.8, seats: 5,
    weight: 1750, bodyStyle: 'Sedan', price: `~$${(base + 60000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C200 CDI`, {
    engine: 'OM651.913 2.2L TDI I4', displacement: 2143, cylinders: 4,
    power: 100, torque: 300, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 6.0, fh: 4.6, fx: 8.4, seats: 5,
    weight: 1580, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C220 CDI`, {
    engine: 'OM651.916 2.2L TDI I4', displacement: 2143, cylinders: 4,
    power: 125, torque: 350, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 6.2, fh: 4.8, fx: 8.6, seats: 5,
    weight: 1600, bodyStyle: 'Sedan', price: `~$${(base + 2000).toLocaleString()}`
  })
}

// ── Mercedes-Benz C-Class W205 (2014–2021) ────────────────────────────────
for (let y = 2014; y <= 2021; y++) {
  const base = Math.round(64990 + (y - 2014) * 1200)
  add(`Mercedes-Benz|C-Class|${y}|C180`, {
    engine: 'M274.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 115, torque: 230, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 5,
    weight: 1440, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C200`, {
    engine: 'M274.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 135, torque: 300, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1470, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C300`, {
    engine: 'M274.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 180, torque: 370, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1545, bodyStyle: 'Sedan', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C43 AMG`, {
    engine: 'M276.823 3.0T V6 AWD', displacement: 2996, cylinders: 6,
    power: 270, torque: 520, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 7.2, fx: 14.0, seats: 5,
    weight: 1755, bodyStyle: 'Sedan', price: `~$${(base + 36000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C63 AMG`, {
    engine: 'M177.980 4.0T V8 Biturbo', displacement: 3982, cylinders: 8,
    power: 350, torque: 700, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 11.6, fh: 8.4, fx: 16.8, seats: 5,
    weight: 1785, bodyStyle: 'Sedan', price: `~$${(base + 56000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C220d`, {
    engine: 'OM654.916 2.0L TDI I4', displacement: 1950, cylinders: 4,
    power: 125, torque: 400, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 5.2, fh: 4.0, fx: 7.2, seats: 5,
    weight: 1530, bodyStyle: 'Sedan', price: `~$${(base - 3000).toLocaleString()}`
  })
}

// ── Mercedes-Benz C-Class W206 (2021–2026) ────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(72990 + (y - 2021) * 1500)
  add(`Mercedes-Benz|C-Class|${y}|C200`, {
    engine: 'M254.920 1.5T MHEV I4', displacement: 1496, cylinders: 4,
    power: 150, torque: 300, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.6, seats: 5,
    weight: 1590, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C300`, {
    engine: 'M254.920 2.0T MHEV I4', displacement: 1999, cylinders: 4,
    power: 190, torque: 400, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1640, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C43 AMG`, {
    engine: 'M139.L20 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 300, torque: 500, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 6.8, fx: 12.8, seats: 5,
    weight: 1860, bodyStyle: 'Sedan', price: `~$${(base + 35000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C63 S AMG`, {
    engine: 'M139.L20 2.0T AWD PHEV I4', displacement: 1991, cylinders: 4,
    power: 500, torque: 1020, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: null, fx: null, seats: 5,
    weight: 2111, bodyStyle: 'Sedan', price: `~$${(base + 88000).toLocaleString()}`
  })
  add(`Mercedes-Benz|C-Class|${y}|C220d`, {
    engine: 'OM654.920 2.0L TDI I4', displacement: 1993, cylinders: 4,
    power: 145, torque: 440, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 5.0, fh: 3.8, fx: 7.0, seats: 5,
    weight: 1635, bodyStyle: 'Sedan', price: `~$${(base - 4000).toLocaleString()}`
  })
}

// ── Mercedes-Benz E-Class W211 (2002–2009) ────────────────────────────────
for (let y = 2002; y <= 2009; y++) {
  const base = Math.round(79990 + (y - 2002) * 1200)
  add(`Mercedes-Benz|E-Class|${y}|E200 Kompressor`, {
    engine: 'M271.940 1.8T I4', displacement: 1796, cylinders: 4,
    power: 120, torque: 230, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 7.0, fx: 14.2, seats: 5,
    weight: 1620, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E280`, {
    engine: 'M272.943 3.0L V6', displacement: 2996, cylinders: 6,
    power: 170, torque: 300, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 10.8, fh: 7.6, fx: 15.6, seats: 5,
    weight: 1680, bodyStyle: 'Sedan', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E350`, {
    engine: 'M272.964 3.5L V6', displacement: 3498, cylinders: 6,
    power: 200, torque: 350, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 11.6, fh: 8.2, fx: 16.8, seats: 5,
    weight: 1710, bodyStyle: 'Sedan', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E500`, {
    engine: 'M113.967 5.0L V8', displacement: 4966, cylinders: 8,
    power: 225, torque: 460, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 14.8, fh: 10.4, fx: 21.0, seats: 5,
    weight: 1810, bodyStyle: 'Sedan', price: `~$${(base + 38000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E63 AMG`, {
    engine: 'M156.985 6.2L V8', displacement: 6208, cylinders: 8,
    power: 378, torque: 630, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 16.6, fh: 11.4, fx: 23.8, seats: 5,
    weight: 1875, bodyStyle: 'Sedan', price: `~$${(base + 72000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E220 CDI`, {
    engine: 'OM646.961 2.2L TDI I4', displacement: 2148, cylinders: 4,
    power: 110, torque: 340, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1670, bodyStyle: 'Sedan', price: `~$${(base - 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E320 CDI`, {
    engine: 'OM642.920 3.0L TDI V6', displacement: 2987, cylinders: 6,
    power: 165, torque: 540, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1735, bodyStyle: 'Sedan', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Mercedes-Benz E-Class W212 (2009–2016) ────────────────────────────────
for (let y = 2009; y <= 2016; y++) {
  const base = Math.round(89990 + (y - 2009) * 1400)
  add(`Mercedes-Benz|E-Class|${y}|E200`, {
    engine: 'M271.860 1.8T I4', displacement: 1796, cylinders: 4,
    power: 135, torque: 270, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 12.0, seats: 5,
    weight: 1665, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E250`, {
    engine: 'M271.860 1.8T I4', displacement: 1796, cylinders: 4,
    power: 150, torque: 310, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.4, seats: 5,
    weight: 1680, bodyStyle: 'Sedan', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E300`, {
    engine: 'M276.952 3.0L V6', displacement: 2996, cylinders: 6,
    power: 185, torque: 300, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 10.4, fh: 7.4, fx: 15.0, seats: 5,
    weight: 1780, bodyStyle: 'Sedan', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E350`, {
    engine: 'M276.955 3.5L V6', displacement: 3498, cylinders: 6,
    power: 215, torque: 350, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 11.2, fh: 7.8, fx: 16.2, seats: 5,
    weight: 1810, bodyStyle: 'Sedan', price: `~$${(base + 24000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E63 AMG`, {
    engine: 'M157.983 5.5T V8 Biturbo', displacement: 5461, cylinders: 8,
    power: 386, torque: 700, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 13.8, fh: 9.8, fx: 20.0, seats: 5,
    weight: 1950, bodyStyle: 'Sedan', price: `~$${(base + 90000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E220 CDI`, {
    engine: 'OM651.913 2.2L TDI I4', displacement: 2143, cylinders: 4,
    power: 125, torque: 400, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1715, bodyStyle: 'Sedan', price: `~$${(base - 6000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E300 Bluetec Hybrid`, {
    engine: 'OM642.858 3.0L TDI Hybrid V6', displacement: 2987, cylinders: 6,
    power: 150, torque: 440, transmission: '7-speed automatic',
    fuelType: 'diesel', fc: 5.6, fh: 4.2, fx: 7.8, seats: 5,
    weight: 1850, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Mercedes-Benz E-Class W213 (2016–2023) ────────────────────────────────
for (let y = 2016; y <= 2023; y++) {
  const base = Math.round(97990 + (y - 2016) * 1600)
  add(`Mercedes-Benz|E-Class|${y}|E200`, {
    engine: 'M264.914 1.5T MHEV I4', displacement: 1496, cylinders: 4,
    power: 135, torque: 300, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.0, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1710, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E250`, {
    engine: 'M274.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 155, torque: 370, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.4, seats: 5,
    weight: 1740, bodyStyle: 'Sedan', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E300`, {
    engine: 'M274.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 180, torque: 400, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.8, seats: 5,
    weight: 1760, bodyStyle: 'Sedan', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E350`, {
    engine: 'M276.952 3.0T V6', displacement: 2996, cylinders: 6,
    power: 215, torque: 350, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 7.0, fx: 14.2, seats: 5,
    weight: 1855, bodyStyle: 'Sedan', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E43 AMG`, {
    engine: 'M276.823 3.0T V6 AWD', displacement: 2996, cylinders: 6,
    power: 295, torque: 520, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 7.4, fx: 14.6, seats: 5,
    weight: 1970, bodyStyle: 'Sedan', price: `~$${(base + 40000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E63 S AMG`, {
    engine: 'M177.980 4.0T V8 AWD Biturbo', displacement: 3982, cylinders: 8,
    power: 450, torque: 850, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 13.2, fh: 9.4, fx: 19.0, seats: 5,
    weight: 2060, bodyStyle: 'Sedan', price: `~$${(base + 110000).toLocaleString()}`
  })
  add(`Mercedes-Benz|E-Class|${y}|E220d`, {
    engine: 'OM654.916 2.0L TDI I4', displacement: 1950, cylinders: 4,
    power: 143, torque: 400, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 5.4, fh: 4.0, fx: 7.6, seats: 5,
    weight: 1790, bodyStyle: 'Sedan', price: `~$${(base - 8000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLA X156 (2013–2019) ───────────────────────────────────
for (let y = 2013; y <= 2019; y++) {
  const base = Math.round(44990 + (y - 2013) * 900)
  add(`Mercedes-Benz|GLA|${y}|GLA180`, {
    engine: 'M270.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 90, torque: 200, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.6, fh: 5.0, fx: 9.4, seats: 5,
    weight: 1455, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA200`, {
    engine: 'M270.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 115, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1480, bodyStyle: 'SUV', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA250`, {
    engine: 'M270.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 155, torque: 350, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1610, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA45 AMG`, {
    engine: 'M133.980 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 265, torque: 450, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.4, seats: 5,
    weight: 1680, bodyStyle: 'SUV', price: `~$${(base + 28000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLA H247 (2020–2026) ───────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(49990 + (y - 2020) * 1000)
  add(`Mercedes-Benz|GLA|${y}|GLA180`, {
    engine: 'M282.914 1.3T I4', displacement: 1332, cylinders: 4,
    power: 100, torque: 200, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1565, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA200`, {
    engine: 'M282.914 1.3T I4', displacement: 1332, cylinders: 4,
    power: 120, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1590, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA250`, {
    engine: 'M260.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 165, torque: 350, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.8, seats: 5,
    weight: 1720, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA35 AMG`, {
    engine: 'M260.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 225, torque: 400, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.8, fh: 6.8, fx: 12.4, seats: 5,
    weight: 1815, bodyStyle: 'SUV', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLA|${y}|GLA45 S AMG`, {
    engine: 'M139.980 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 310, torque: 500, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 10.0, fh: 7.6, fx: 14.2, seats: 5,
    weight: 1875, bodyStyle: 'SUV', price: `~$${(base + 40000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLC X253 (2015–2022) ───────────────────────────────────
for (let y = 2015; y <= 2022; y++) {
  const base = Math.round(63990 + (y - 2015) * 1200)
  add(`Mercedes-Benz|GLC|${y}|GLC200`, {
    engine: 'M274.920 2.0T I4', displacement: 1991, cylinders: 4,
    power: 135, torque: 300, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1720, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC250`, {
    engine: 'M274.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 155, torque: 370, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 12.0, seats: 5,
    weight: 1840, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC300`, {
    engine: 'M274.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 180, torque: 400, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 6.6, fx: 12.2, seats: 5,
    weight: 1875, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC43 AMG`, {
    engine: 'M276.823 3.0T V6 AWD', displacement: 2996, cylinders: 6,
    power: 270, torque: 520, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 10.6, fh: 7.8, fx: 15.2, seats: 5,
    weight: 2030, bodyStyle: 'SUV', price: `~$${(base + 36000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC63 S AMG`, {
    engine: 'M177.980 4.0T V8 AWD', displacement: 3982, cylinders: 8,
    power: 375, torque: 730, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 13.4, fh: 9.8, fx: 19.2, seats: 5,
    weight: 2130, bodyStyle: 'SUV', price: `~$${(base + 68000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC220d`, {
    engine: 'OM654.916 2.0L TDI AWD I4', displacement: 1950, cylinders: 4,
    power: 143, torque: 400, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1825, bodyStyle: 'SUV', price: `~$${(base - 3000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLC X254 (2022–2026) ───────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(76990 + (y - 2022) * 1500)
  add(`Mercedes-Benz|GLC|${y}|GLC200`, {
    engine: 'M254.920 1.5T MHEV I4', displacement: 1496, cylinders: 4,
    power: 150, torque: 300, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.0, seats: 5,
    weight: 1930, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC300`, {
    engine: 'M254.920 2.0T AWD MHEV I4', displacement: 1999, cylinders: 4,
    power: 190, torque: 400, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.8, seats: 5,
    weight: 2045, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC300e`, {
    engine: 'M254.920 2.0T PHEV AWD I4', displacement: 1999, cylinders: 4,
    power: 245, torque: 550, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 1.8, fh: null, fx: null, seats: 5,
    weight: 2290, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC43 AMG`, {
    engine: 'M139.L20 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 280, torque: 560, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 7.4, fx: 14.0, seats: 5,
    weight: 2090, bodyStyle: 'SUV', price: `~$${(base + 34000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLC|${y}|GLC63 S E AMG`, {
    engine: 'M139.L20 2.0T PHEV AWD I4', displacement: 1991, cylinders: 4,
    power: 500, torque: 1020, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 3.2, fh: null, fx: null, seats: 5,
    weight: 2415, bodyStyle: 'SUV', price: `~$${(base + 82000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLE W166 (2015–2018) ───────────────────────────────────
for (let y = 2015; y <= 2018; y++) {
  const base = Math.round(94990 + (y - 2015) * 1500)
  add(`Mercedes-Benz|GLE|${y}|GLE250d`, {
    engine: 'OM642.826 3.0L TDI AWD V6', displacement: 2987, cylinders: 6,
    power: 150, torque: 500, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.2, fx: 11.2, seats: 5,
    weight: 2090, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE350d`, {
    engine: 'OM642.820 3.0L TDI AWD V6', displacement: 2987, cylinders: 6,
    power: 190, torque: 620, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 8.2, fh: 6.4, fx: 11.4, seats: 5,
    weight: 2156, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE400`, {
    engine: 'M276.956 3.0T V6 AWD', displacement: 2996, cylinders: 6,
    power: 245, torque: 480, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 11.2, fh: 8.0, fx: 16.0, seats: 5,
    weight: 2178, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE63 S AMG`, {
    engine: 'M157.983 5.5T V8 AWD', displacement: 5461, cylinders: 8,
    power: 430, torque: 760, transmission: '7-speed automatic',
    fuelType: 'petrol', fc: 14.6, fh: 10.6, fx: 21.0, seats: 5,
    weight: 2380, bodyStyle: 'SUV', price: `~$${(base + 84000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLE V167 (2019–2026) ───────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(102990 + (y - 2019) * 1800)
  add(`Mercedes-Benz|GLE|${y}|GLE300d`, {
    engine: 'OM654.920 2.0L TDI AWD I4', displacement: 1993, cylinders: 4,
    power: 180, torque: 500, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 2145, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE350de`, {
    engine: 'OM654.916 2.0L TDI PHEV AWD I4', displacement: 1950, cylinders: 4,
    power: 230, torque: 700, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 1.8, fh: null, fx: null, seats: 5,
    weight: 2590, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE450`, {
    engine: 'M256.930 3.0T I6 MHEV AWD', displacement: 2999, cylinders: 6,
    power: 270, torque: 500, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 10.4, fh: 7.8, fx: 14.8, seats: 5,
    weight: 2280, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLE|${y}|GLE63 S AMG`, {
    engine: 'M177.980 4.0T V8 AWD', displacement: 3982, cylinders: 8,
    power: 450, torque: 850, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 13.8, fh: 10.0, fx: 19.8, seats: 5,
    weight: 2432, bodyStyle: 'SUV', price: `~$${(base + 106000).toLocaleString()}`
  })
}

// ── Mercedes-Benz GLS X167 (2019–2026) ───────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(134990 + (y - 2019) * 2000)
  add(`Mercedes-Benz|GLS|${y}|GLS400d`, {
    engine: 'OM656.929 3.0L TDI AWD I6', displacement: 2925, cylinders: 6,
    power: 243, torque: 700, transmission: '9-speed automatic',
    fuelType: 'diesel', fc: 9.2, fh: 7.0, fx: 13.2, seats: 7,
    weight: 2505, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|GLS|${y}|GLS450`, {
    engine: 'M256.930 3.0T I6 MHEV AWD', displacement: 2999, cylinders: 6,
    power: 270, torque: 500, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 9.0, fx: 17.4, seats: 7,
    weight: 2600, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLS|${y}|GLS580`, {
    engine: 'M176.981 4.0T V8 MHEV AWD', displacement: 3982, cylinders: 8,
    power: 360, torque: 730, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 14.0, fh: 10.2, fx: 19.8, seats: 7,
    weight: 2640, bodyStyle: 'SUV', price: `~$${(base + 58000).toLocaleString()}`
  })
  add(`Mercedes-Benz|GLS|${y}|AMG GLS63`, {
    engine: 'M177.980 4.0T V8 AWD', displacement: 3982, cylinders: 8,
    power: 450, torque: 900, transmission: '9-speed automatic',
    fuelType: 'petrol', fc: 15.0, fh: 11.0, fx: 21.4, seats: 7,
    weight: 2680, bodyStyle: 'SUV', price: `~$${(base + 124000).toLocaleString()}`
  })
}

// ── Mercedes-Benz CLA Shooting Brake X117 (2013–2019) ────────────────────
for (let y = 2013; y <= 2019; y++) {
  const base = Math.round(48990 + (y - 2013) * 900)
  add(`Mercedes-Benz|CLA|${y}|CLA180`, {
    engine: 'M270.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 90, torque: 200, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.2, seats: 5,
    weight: 1445, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA200`, {
    engine: 'M270.910 1.6T I4', displacement: 1595, cylinders: 4,
    power: 115, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.8, seats: 5,
    weight: 1470, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA250`, {
    engine: 'M270.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 155, torque: 350, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.4, seats: 5,
    weight: 1580, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA45 AMG`, {
    engine: 'M133.980 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 265, torque: 450, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 9.0, fh: 6.8, fx: 12.8, seats: 5,
    weight: 1630, bodyStyle: 'Sedan', price: `~$${(base + 28000).toLocaleString()}`
  })
}

// ── Mercedes-Benz CLA C118 (2019–2026) ────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(52990 + (y - 2019) * 1000)
  add(`Mercedes-Benz|CLA|${y}|CLA200`, {
    engine: 'M282.914 1.3T I4', displacement: 1332, cylinders: 4,
    power: 120, torque: 250, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1530, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA250`, {
    engine: 'M260.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 165, torque: 350, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.8, seats: 5,
    weight: 1655, bodyStyle: 'Sedan', price: `~$${(base + 11000).toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA35 AMG`, {
    engine: 'M260.920 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 225, torque: 400, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.6, fh: 6.6, fx: 12.2, seats: 5,
    weight: 1710, bodyStyle: 'Sedan', price: `~$${(base + 22000).toLocaleString()}`
  })
  add(`Mercedes-Benz|CLA|${y}|CLA45 S AMG`, {
    engine: 'M139.980 2.0T AWD I4', displacement: 1991, cylinders: 4,
    power: 310, torque: 500, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 10.0, fh: 7.6, fx: 14.2, seats: 5,
    weight: 1780, bodyStyle: 'Sedan', price: `~$${(base + 42000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
console.log(`Generated ${count} Mercedes-Benz specs`)
fs.writeFileSync('src/data/supplement38.json', JSON.stringify(out, null, 2))
console.log('Written to src/data/supplement38.json')
