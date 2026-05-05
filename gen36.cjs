#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── VW Golf Mk4 (1998–2004) ───────────────────────────────────────────────
for (let y = 1998; y <= 2004; y++) {
  const base = Math.round(22990 + (y - 1998) * 500)
  add(`Volkswagen|Golf|${y}|GL`, {
    engine: 'AXP 1.6L MPI I4', displacement: 1595, cylinders: 4,
    power: 74, torque: 148, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.2, fh: 7.0, fx: 12.4, seats: 5,
    weight: 1195, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|Sport`, {
    engine: 'AGN 1.8L MPI I4', displacement: 1781, cylinders: 4,
    power: 92, torque: 170, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.8, fh: 7.4, fx: 13.0, seats: 5,
    weight: 1215, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'AGU 1.8T I4 Turbo', displacement: 1781, cylinders: 4,
    power: 110, torque: 210, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 10.2, fh: 7.8, fx: 13.4, seats: 5,
    weight: 1255, bodyStyle: 'Hatch', price: `~$${(base + 7000).toLocaleString()}`
  })
  if (y >= 2000) {
    add(`Volkswagen|Golf|${y}|V6 4Motion`, {
      engine: 'AFP 2.8L VR6 AWD', displacement: 2792, cylinders: 6,
      power: 150, torque: 265, transmission: '5-speed automatic',
      fuelType: 'petrol', fc: 12.2, fh: 9.0, fx: 16.0, seats: 5,
      weight: 1430, bodyStyle: 'Hatch', price: `~$${(base + 16000).toLocaleString()}`
    })
  }
}

// ── VW Golf Mk5 (2004–2009) ───────────────────────────────────────────────
for (let y = 2004; y <= 2009; y++) {
  const base = Math.round(26990 + (y - 2004) * 600)
  add(`Volkswagen|Golf|${y}|Trendline`, {
    engine: 'BSE 1.6L MPI I4', displacement: 1595, cylinders: 4,
    power: 75, torque: 148, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.8, fh: 6.4, fx: 12.4, seats: 5,
    weight: 1270, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|Comfortline`, {
    engine: 'BLF 1.4 FSI I4', displacement: 1390, cylinders: 4,
    power: 66, torque: 130, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.4, seats: 5,
    weight: 1258, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|Highline`, {
    engine: 'BLG 1.4 TSI Twincharged I4', displacement: 1390, cylinders: 4,
    power: 125, torque: 220, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.0, seats: 5,
    weight: 1302, bodyStyle: 'Hatch', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'BYD 2.0T FSI Turbo I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.0, fh: 6.8, fx: 12.4, seats: 5,
    weight: 1390, bodyStyle: 'Hatch', price: `~$${(base + 15000).toLocaleString()}`
  })
  if (y >= 2007) {
    add(`Volkswagen|Golf|${y}|R32`, {
      engine: 'BHE 3.2L VR6 AWD', displacement: 3189, cylinders: 6,
      power: 184, torque: 320, transmission: '6-speed DSG',
      fuelType: 'petrol', fc: 11.4, fh: 8.6, fx: 15.4, seats: 5,
      weight: 1534, bodyStyle: 'Hatch', price: `~$${(base + 27000).toLocaleString()}`
    })
  }
}

// ── VW Golf Mk6 (2009–2013) ───────────────────────────────────────────────
for (let y = 2009; y <= 2013; y++) {
  const base = Math.round(28990 + (y - 2009) * 600)
  add(`Volkswagen|Golf|${y}|77TSI Comfortline`, {
    engine: 'CAXA 1.4T TSI I4', displacement: 1390, cylinders: 4,
    power: 77, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.8, fh: 5.0, fx: 9.8, seats: 5,
    weight: 1264, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|118TSI Highline`, {
    engine: 'CAWB 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 118, torque: 240, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.8, fh: 6.0, fx: 10.8, seats: 5,
    weight: 1370, bodyStyle: 'Hatch', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'CDLF 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 155, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.4, fh: 6.2, fx: 11.8, seats: 5,
    weight: 1390, bodyStyle: 'Hatch', price: `~$${(base + 14000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|R`, {
    engine: 'CDLH 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 188, torque: 330, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.6, fh: 6.6, fx: 12.0, seats: 5,
    weight: 1524, bodyStyle: 'Hatch', price: `~$${(base + 26000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|103TDI Highline`, {
    engine: 'CBDB 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 103, torque: 320, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 5.4, fh: 4.2, fx: 7.4, seats: 5,
    weight: 1416, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── VW Golf Mk7 (2013–2017) ───────────────────────────────────────────────
for (let y = 2013; y <= 2017; y++) {
  const base = Math.round(29990 + (y - 2013) * 600)
  add(`Volkswagen|Golf|${y}|90TSI Trendline`, {
    engine: 'CPVA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 90, torque: 200, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1196, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|90TSI Comfortline`, {
    engine: 'CPVA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 90, torque: 200, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1204, bodyStyle: 'Hatch', price: `~$${(base + 3500).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|110TSI Highline`, {
    engine: 'CPTA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.6, fh: 5.0, fx: 9.2, seats: 5,
    weight: 1238, bodyStyle: 'Hatch', price: `~$${(base + 7500).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'CHHA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 162, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.4, seats: 5,
    weight: 1368, bodyStyle: 'Hatch', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|R`, {
    engine: 'CJXB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 206, torque: 380, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.8, fh: 6.0, fx: 11.0, seats: 5,
    weight: 1482, bodyStyle: 'Hatch', price: `~$${(base + 27000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|110TDI Highline`, {
    engine: 'CRKB 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 110, torque: 340, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 4.8, fh: 3.8, fx: 6.6, seats: 5,
    weight: 1362, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── VW Golf Mk7.5 (2017–2020) ─────────────────────────────────────────────
for (let y = 2017; y <= 2020; y++) {
  const base = Math.round(32990 + (y - 2017) * 700)
  add(`Volkswagen|Golf|${y}|70TSI Trendline`, {
    engine: 'DKRF 1.0T TSI I3', displacement: 999, cylinders: 3,
    power: 70, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.0, seats: 5,
    weight: 1184, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|110TSI Comfortline`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1238, bodyStyle: 'Hatch', price: `~$${(base + 4500).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|110TSI Highline`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1248, bodyStyle: 'Hatch', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'DLBA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 169, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.4, seats: 5,
    weight: 1389, bodyStyle: 'Hatch', price: `~$${(base + 18000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI Performance`, {
    engine: 'DLBA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 180, torque: 320, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.6, seats: 5,
    weight: 1410, bodyStyle: 'Hatch', price: `~$${(base + 24000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|R`, {
    engine: 'DLHB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 213, torque: 380, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.8, fh: 6.0, fx: 11.0, seats: 5,
    weight: 1492, bodyStyle: 'Hatch', price: `~$${(base + 30000).toLocaleString()}`
  })
}

// ── VW Golf Mk8 (2021–2026) ───────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(36490 + (y - 2021) * 800)
  add(`Volkswagen|Golf|${y}|70TSI Life`, {
    engine: 'DKRF 1.0T TSI I3', displacement: 999, cylinders: 3,
    power: 70, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.0, seats: 5,
    weight: 1226, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|110TSI Life`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.2, fh: 4.6, fx: 8.8, seats: 5,
    weight: 1262, bodyStyle: 'Hatch', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI`, {
    engine: 'DLBA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 180, torque: 320, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.4, seats: 5,
    weight: 1408, bodyStyle: 'Hatch', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|GTI Clubsport`, {
    engine: 'DLBA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 221, torque: 370, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.8, fh: 5.8, fx: 11.2, seats: 5,
    weight: 1455, bodyStyle: 'Hatch', price: `~$${(base + 32000).toLocaleString()}`
  })
  add(`Volkswagen|Golf|${y}|R`, {
    engine: 'DLHB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 235, torque: 400, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.0, fh: 6.2, fx: 11.2, seats: 5,
    weight: 1543, bodyStyle: 'Hatch', price: `~$${(base + 38000).toLocaleString()}`
  })
}

// ── VW Golf Wagon (Mk7 2013–2020, Mk8 2021–2026) ─────────────────────────
for (let y = 2013; y <= 2017; y++) {
  const base = Math.round(33990 + (y - 2013) * 600)
  add(`Volkswagen|Golf Wagon|${y}|110TSI Comfortline`, {
    engine: 'CPVA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.6, fh: 5.0, fx: 9.2, seats: 5,
    weight: 1314, bodyStyle: 'Wagon', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf Wagon|${y}|110TSI Highline`, {
    engine: 'CPVA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.6, fh: 5.0, fx: 9.2, seats: 5,
    weight: 1330, bodyStyle: 'Wagon', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Volkswagen|Golf Wagon|${y}|103TDI Highline`, {
    engine: 'CRKB 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 103, torque: 340, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 5.0, fh: 3.9, fx: 6.8, seats: 5,
    weight: 1422, bodyStyle: 'Wagon', price: `~$${(base + 3000).toLocaleString()}`
  })
}
for (let y = 2017; y <= 2020; y++) {
  const base = Math.round(37490 + (y - 2017) * 700)
  add(`Volkswagen|Golf Wagon|${y}|110TSI Comfortline`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1330, bodyStyle: 'Wagon', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf Wagon|${y}|110TSI Highline`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1348, bodyStyle: 'Wagon', price: `~$${(base + 4500).toLocaleString()}`
  })
}
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(40990 + (y - 2021) * 800)
  add(`Volkswagen|Golf Wagon|${y}|110TSI Life`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1348, bodyStyle: 'Wagon', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Golf Wagon|${y}|110TSI Style`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1360, bodyStyle: 'Wagon', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Volkswagen|Golf Wagon|${y}|R`, {
    engine: 'DLHB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 235, torque: 400, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.2, fh: 6.4, fx: 11.4, seats: 5,
    weight: 1600, bodyStyle: 'Wagon', price: `~$${(base + 32000).toLocaleString()}`
  })
}

// ── VW Polo Mk4 (2005–2009) ───────────────────────────────────────────────
for (let y = 2005; y <= 2009; y++) {
  const base = Math.round(17490 + (y - 2005) * 400)
  add(`Volkswagen|Polo|${y}|Trendline`, {
    engine: 'BBY 1.4L MPI I4', displacement: 1390, cylinders: 4,
    power: 55, torque: 126, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.4, fh: 5.8, fx: 9.8, seats: 5,
    weight: 1033, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|Comfortline`, {
    engine: 'BTS 1.6L MPI I4', displacement: 1598, cylinders: 4,
    power: 77, torque: 148, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.2, seats: 5,
    weight: 1062, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
  if (y >= 2006) {
    add(`Volkswagen|Polo|${y}|GTI`, {
      engine: 'BME 1.8T Turbo I4', displacement: 1781, cylinders: 4,
      power: 110, torque: 200, transmission: '5-speed manual',
      fuelType: 'petrol', fc: 9.2, fh: 7.0, fx: 12.4, seats: 5,
      weight: 1162, bodyStyle: 'Hatch', price: `~$${(base + 8000).toLocaleString()}`
    })
  }
}

// ── VW Polo Mk5 (2009–2017) ───────────────────────────────────────────────
for (let y = 2009; y <= 2017; y++) {
  const base = Math.round(18990 + (y - 2009) * 400)
  add(`Volkswagen|Polo|${y}|66TSI Trendline`, {
    engine: 'CBZA 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 66, torque: 160, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.2, seats: 5,
    weight: 1086, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|81TSI Comfortline`, {
    engine: 'CBZB 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 81, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.2, seats: 5,
    weight: 1098, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|81TSI Highline`, {
    engine: 'CBZB 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 81, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.8, fh: 4.4, fx: 8.2, seats: 5,
    weight: 1108, bodyStyle: 'Hatch', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|GTI`, {
    engine: 'CAVE 1.4T TSI I4', displacement: 1390, cylinders: 4,
    power: 132, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.4, seats: 5,
    weight: 1219, bodyStyle: 'Hatch', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── VW Polo Mk6 (2018–2026) ───────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(22990 + (y - 2018) * 500)
  add(`Volkswagen|Polo|${y}|70TSI Trendline`, {
    engine: 'DKRF 1.0T TSI I3', displacement: 999, cylinders: 3,
    power: 70, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.6, fh: 4.2, fx: 7.8, seats: 5,
    weight: 1094, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|85TSI Comfortline`, {
    engine: 'DKLA 1.0T TSI I3', displacement: 999, cylinders: 3,
    power: 85, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 5.6, fh: 4.2, fx: 7.8, seats: 5,
    weight: 1108, bodyStyle: 'Hatch', price: `~$${(base + 3500).toLocaleString()}`
  })
  add(`Volkswagen|Polo|${y}|GTI`, {
    engine: 'DPCE 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 320, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 5,
    weight: 1264, bodyStyle: 'Hatch', price: `~$${(base + 14000).toLocaleString()}`
  })
}

// ── VW Passat B6 (2006–2010) ─────────────────────────────────────────────
for (let y = 2006; y <= 2010; y++) {
  const base = Math.round(38990 + (y - 2006) * 700)
  add(`Volkswagen|Passat|${y}|2.0T FSI Comfortline`, {
    engine: 'BPY 2.0T FSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.2, seats: 5,
    weight: 1452, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|2.0T FSI Highline`, {
    engine: 'BPY 2.0T FSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.2, seats: 5,
    weight: 1462, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|3.2 V6 FSI 4Motion`, {
    engine: 'BUB 3.2L V6 FSI AWD', displacement: 3189, cylinders: 6,
    power: 184, torque: 320, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 11.6, fh: 8.4, fx: 16.0, seats: 5,
    weight: 1660, bodyStyle: 'Sedan', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|2.0 TDI Comfortline`, {
    engine: 'BMP 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 103, torque: 320, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 6.0, fh: 4.6, fx: 8.2, seats: 5,
    weight: 1526, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
}

// ── VW Passat B7 (2011–2015) ─────────────────────────────────────────────
for (let y = 2011; y <= 2015; y++) {
  const base = Math.round(42990 + (y - 2011) * 700)
  add(`Volkswagen|Passat|${y}|118TSI Comfortline`, {
    engine: 'CAXA 1.8T TSI I4', displacement: 1798, cylinders: 4,
    power: 118, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.2, seats: 5,
    weight: 1407, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|132TSI Highline`, {
    engine: 'CCZA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 132, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.2, seats: 5,
    weight: 1457, bodyStyle: 'Sedan', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|103TDI Comfortline`, {
    engine: 'CFGB 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 103, torque: 320, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 5.6, fh: 4.4, fx: 7.6, seats: 5,
    weight: 1526, bodyStyle: 'Sedan', price: `~$${(base - 1000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|140TDI Highline`, {
    engine: 'CFFB 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 140, torque: 380, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 5.8, fh: 4.6, fx: 7.8, seats: 5,
    weight: 1540, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── VW Passat B8 (2016–2023) ─────────────────────────────────────────────
for (let y = 2016; y <= 2023; y++) {
  const base = Math.round(47990 + (y - 2016) * 800)
  add(`Volkswagen|Passat|${y}|132TSI Comfortline`, {
    engine: 'CZPA 1.8T TSI I4', displacement: 1798, cylinders: 4,
    power: 132, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.0, fh: 5.4, fx: 9.6, seats: 5,
    weight: 1430, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|162TSI Highline`, {
    engine: 'CJS 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 162, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.8, fh: 6.0, fx: 10.8, seats: 5,
    weight: 1506, bodyStyle: 'Sedan', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|140TDI Comfortline`, {
    engine: 'DFFA 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 140, torque: 400, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 5.2, fh: 4.2, fx: 7.0, seats: 5,
    weight: 1528, bodyStyle: 'Sedan', price: `~$${(base - 2000).toLocaleString()}`
  })
  add(`Volkswagen|Passat|${y}|206TDI Alltrack`, {
    engine: 'DFHA 2.0L TDI AWD I4', displacement: 1968, cylinders: 4,
    power: 176, torque: 500, transmission: '6-speed DSG',
    fuelType: 'diesel', fc: 6.0, fh: 4.8, fx: 8.0, seats: 5,
    weight: 1746, bodyStyle: 'Wagon', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── VW Tiguan Mk1 (2008–2016) ─────────────────────────────────────────────
for (let y = 2008; y <= 2016; y++) {
  const base = Math.round(34990 + (y - 2008) * 700)
  add(`Volkswagen|Tiguan|${y}|118TSI Comfortline`, {
    engine: 'CAWA 1.8T TSI I4', displacement: 1798, cylinders: 4,
    power: 118, torque: 250, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.6, seats: 5,
    weight: 1552, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|132TSI Highline`, {
    engine: 'CCZA 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 132, torque: 300, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 6.8, fx: 12.4, seats: 5,
    weight: 1684, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|103TDI Comfortline`, {
    engine: 'CFGB 2.0L TDI AWD I4', displacement: 1968, cylinders: 4,
    power: 103, torque: 320, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 7.2, fh: 5.6, fx: 9.6, seats: 5,
    weight: 1644, bodyStyle: 'SUV', price: `~$${(base + 2000).toLocaleString()}`
  })
}

// ── VW Tiguan Mk2 (2016–2026) ─────────────────────────────────────────────
for (let y = 2016; y <= 2026; y++) {
  const base = Math.round(39990 + (y - 2016) * 700)
  add(`Volkswagen|Tiguan|${y}|110TSI Comfortline`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.4, fh: 5.6, fx: 10.2, seats: 5,
    weight: 1575, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|132TSI Highline`, {
    engine: 'CZPA 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 132, torque: 320, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.0, fh: 6.2, fx: 11.0, seats: 5,
    weight: 1690, bodyStyle: 'SUV', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|162TSI Sportline`, {
    engine: 'DFG 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 162, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.4, seats: 5,
    weight: 1726, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|162TSI R-Line`, {
    engine: 'DFG 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 162, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.4, seats: 5,
    weight: 1744, bodyStyle: 'SUV', price: `~$${(base + 16000).toLocaleString()}`
  })
  add(`Volkswagen|Tiguan|${y}|140TDI Highline`, {
    engine: 'DFFA 2.0L TDI AWD I4', displacement: 1968, cylinders: 4,
    power: 140, torque: 400, transmission: '7-speed DSG',
    fuelType: 'diesel', fc: 6.2, fh: 4.8, fx: 8.4, seats: 5,
    weight: 1728, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  if (y >= 2018) {
    add(`Volkswagen|Tiguan|${y}|Allspace 132TSI`, {
      engine: 'CZPA 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
      power: 132, torque: 320, transmission: '7-speed DSG',
      fuelType: 'petrol', fc: 8.2, fh: 6.4, fx: 11.2, seats: 7,
      weight: 1786, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
    })
    add(`Volkswagen|Tiguan|${y}|Allspace 162TSI`, {
      engine: 'DFG 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
      power: 162, torque: 350, transmission: '7-speed DSG',
      fuelType: 'petrol', fc: 8.4, fh: 6.6, fx: 11.4, seats: 7,
      weight: 1810, bodyStyle: 'SUV', price: `~$${(base + 17000).toLocaleString()}`
    })
  }
}

// ── VW Touareg Mk1 (2003–2010) ────────────────────────────────────────────
for (let y = 2003; y <= 2010; y++) {
  const base = Math.round(69990 + (y - 2003) * 1000)
  add(`Volkswagen|Touareg|${y}|3.2 V6`, {
    engine: 'BKJ 3.2L V6 AWD', displacement: 3189, cylinders: 6,
    power: 177, torque: 310, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 13.8, fh: 10.2, fx: 18.6, seats: 5,
    weight: 2220, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|4.2 V8`, {
    engine: 'BAR 4.2L V8 AWD', displacement: 4163, cylinders: 8,
    power: 228, torque: 420, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 16.4, fh: 12.0, fx: 22.4, seats: 5,
    weight: 2310, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|3.0 TDI V6`, {
    engine: 'CASA 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 165, torque: 450, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 10.2, fh: 7.8, fx: 13.8, seats: 5,
    weight: 2258, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── VW Touareg Mk2 (2010–2018) ────────────────────────────────────────────
for (let y = 2010; y <= 2018; y++) {
  const base = Math.round(84990 + (y - 2010) * 1200)
  add(`Volkswagen|Touareg|${y}|190TSI`, {
    engine: 'CGEA 3.6L V6 FSI AWD', displacement: 3598, cylinders: 6,
    power: 190, torque: 360, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.8, fh: 8.8, fx: 16.2, seats: 5,
    weight: 2028, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|150TDI`, {
    engine: 'CRCA 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 150, torque: 450, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.2, fh: 6.2, fx: 11.2, seats: 5,
    weight: 2118, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|180TDI`, {
    engine: 'CGGA 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 180, torque: 550, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.4, fh: 6.4, fx: 11.4, seats: 5,
    weight: 2138, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── VW Touareg Mk3 (2018–2026) ────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(92990 + (y - 2018) * 1500)
  add(`Volkswagen|Touareg|${y}|190TSI`, {
    engine: 'DGBA 3.0L V6 TSI AWD', displacement: 2995, cylinders: 6,
    power: 190, torque: 400, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.6, fh: 7.8, fx: 14.6, seats: 5,
    weight: 2075, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|170TDI`, {
    engine: 'DHYB 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 170, torque: 500, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.8, fh: 6.0, fx: 10.6, seats: 5,
    weight: 2168, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Volkswagen|Touareg|${y}|210TDI`, {
    engine: 'DMXB 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 210, torque: 600, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.2, fx: 10.8, seats: 5,
    weight: 2188, bodyStyle: 'SUV', price: `~$${(base + 16000).toLocaleString()}`
  })
}

// ── VW Amarok 1st Gen (2011–2022) ─────────────────────────────────────────
for (let y = 2011; y <= 2022; y++) {
  const base = Math.round(43490 + (y - 2011) * 800)
  add(`Volkswagen|Amarok|${y}|TDI340 Trendline`, {
    engine: 'CAEB 2.0L BiTDI AWD I4', displacement: 1968, cylinders: 4,
    power: 90, torque: 340, transmission: '6-speed manual',
    fuelType: 'diesel', fc: 9.6, fh: 7.4, fx: 13.0, seats: 5,
    weight: 1948, bodyStyle: 'Ute', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Amarok|${y}|TDI400 Sportline`, {
    engine: 'CNEA 2.0L BiTDI AWD I4', displacement: 1968, cylinders: 4,
    power: 132, torque: 400, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 10.2, fh: 7.8, fx: 13.8, seats: 5,
    weight: 2010, bodyStyle: 'Ute', price: `~$${(base + 7000).toLocaleString()}`
  })
  if (y >= 2013) {
    add(`Volkswagen|Amarok|${y}|TDI550 Highline`, {
      engine: 'CSHA 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
      power: 165, torque: 550, transmission: '8-speed automatic',
      fuelType: 'diesel', fc: 9.8, fh: 7.4, fx: 13.2, seats: 5,
      weight: 2098, bodyStyle: 'Ute', price: `~$${(base + 16000).toLocaleString()}`
    })
  }
  if (y >= 2017) {
    add(`Volkswagen|Amarok|${y}|TDI580 Ultimate`, {
      engine: 'CGEA 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
      power: 190, torque: 580, transmission: '8-speed automatic',
      fuelType: 'diesel', fc: 10.0, fh: 7.6, fx: 13.4, seats: 5,
      weight: 2118, bodyStyle: 'Ute', price: `~$${(base + 24000).toLocaleString()}`
    })
  }
}

// ── VW Amarok 2nd Gen (2023–2026) ─────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = Math.round(60990 + (y - 2023) * 1000)
  add(`Volkswagen|Amarok|${y}|TDI500 Style`, {
    engine: 'DJD 2.0L BiTDI AWD I4', displacement: 1968, cylinders: 4,
    power: 154, torque: 500, transmission: '10-speed automatic',
    fuelType: 'diesel', fc: 9.4, fh: 7.2, fx: 12.8, seats: 5,
    weight: 2116, bodyStyle: 'Ute', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Amarok|${y}|TDI600 PanAmericana`, {
    engine: 'DXE 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 184, torque: 600, transmission: '10-speed automatic',
    fuelType: 'diesel', fc: 9.8, fh: 7.6, fx: 13.2, seats: 5,
    weight: 2212, bodyStyle: 'Ute', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Volkswagen|Amarok|${y}|TDI600 Aventura`, {
    engine: 'DXE 3.0L V6 TDI AWD', displacement: 2967, cylinders: 6,
    power: 184, torque: 600, transmission: '10-speed automatic',
    fuelType: 'diesel', fc: 9.8, fh: 7.6, fx: 13.2, seats: 5,
    weight: 2230, bodyStyle: 'Ute', price: `~$${(base + 20000).toLocaleString()}`
  })
}

// ── VW T-Roc (2018–2026) ─────────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(32490 + (y - 2018) * 600)
  add(`Volkswagen|T-Roc|${y}|110TSI Style`, {
    engine: 'DKZA 1.4T TSI I4', displacement: 1395, cylinders: 4,
    power: 110, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.6, seats: 5,
    weight: 1322, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|T-Roc|${y}|140TSI Sport`, {
    engine: 'CZPA 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 140, torque: 320, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.6, fh: 5.8, fx: 10.6, seats: 5,
    weight: 1440, bodyStyle: 'SUV', price: `~$${(base + 7000).toLocaleString()}`
  })
  if (y >= 2021) {
    add(`Volkswagen|T-Roc|${y}|R`, {
      engine: 'DJH 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
      power: 221, torque: 370, transmission: '7-speed DSG',
      fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.6, seats: 5,
      weight: 1558, bodyStyle: 'SUV', price: `~$${(base + 25000).toLocaleString()}`
    })
  }
}

// ── VW Multivan T5 (2004–2015) ────────────────────────────────────────────
for (let y = 2004; y <= 2015; y++) {
  const base = Math.round(54990 + (y - 2004) * 1000)
  add(`Volkswagen|Multivan|${y}|Comfortline TDI`, {
    engine: 'AXD 2.5L TDI I5', displacement: 2461, cylinders: 5,
    power: 96, torque: 300, transmission: '6-speed manual',
    fuelType: 'diesel', fc: 9.6, fh: 7.4, fx: 13.0, seats: 8,
    weight: 2040, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Multivan|${y}|Highline TDI`, {
    engine: 'AXE 2.5L TDI I5', displacement: 2461, cylinders: 5,
    power: 128, torque: 340, transmission: '7-speed DSG',
    fuelType: 'diesel', fc: 10.0, fh: 7.8, fx: 13.6, seats: 8,
    weight: 2068, bodyStyle: 'Van', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── VW Multivan T6 / T6.1 (2015–2026) ────────────────────────────────────
for (let y = 2015; y <= 2026; y++) {
  const base = Math.round(64990 + (y - 2015) * 1000)
  add(`Volkswagen|Multivan|${y}|TDI340`, {
    engine: 'CFCA 2.0L TDI I4', displacement: 1968, cylinders: 4,
    power: 84, torque: 340, transmission: '7-speed DSG',
    fuelType: 'diesel', fc: 8.6, fh: 6.6, fx: 11.8, seats: 8,
    weight: 2020, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Multivan|${y}|TDI450`, {
    engine: 'CFCC 2.0L BiTDI I4', displacement: 1968, cylinders: 4,
    power: 150, torque: 450, transmission: '7-speed DSG',
    fuelType: 'diesel', fc: 9.0, fh: 7.0, fx: 12.2, seats: 8,
    weight: 2098, bodyStyle: 'Van', price: `~$${(base + 15000).toLocaleString()}`
  })
}

// ── VW Beetle (New Beetle 1998–2011) ─────────────────────────────────────
for (let y = 1998; y <= 2011; y++) {
  const base = Math.round(26990 + (y - 1998) * 500)
  add(`Volkswagen|Beetle|${y}|2.0`, {
    engine: 'AQY 2.0L MPI I4', displacement: 1984, cylinders: 4,
    power: 85, torque: 170, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.6, fh: 7.2, fx: 13.2, seats: 5,
    weight: 1298, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Beetle|${y}|Turbo S`, {
    engine: 'AWP 1.8T Turbo I4', displacement: 1781, cylinders: 4,
    power: 132, torque: 235, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 10.4, fh: 7.8, fx: 14.2, seats: 5,
    weight: 1328, bodyStyle: 'Hatch', price: `~$${(base + 6000).toLocaleString()}`
  })
}

// ── VW Beetle A5 (2012–2019) ─────────────────────────────────────────────
for (let y = 2012; y <= 2019; y++) {
  const base = Math.round(26490 + (y - 2012) * 500)
  add(`Volkswagen|Beetle|${y}|1.2 TSI`, {
    engine: 'CBZB 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 77, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.8, fh: 5.2, fx: 9.6, seats: 5,
    weight: 1338, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Beetle|${y}|1.4 TSI`, {
    engine: 'CAVE 1.4T TSI I4', displacement: 1390, cylinders: 4,
    power: 118, torque: 250, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.4, fh: 5.8, fx: 10.2, seats: 5,
    weight: 1368, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Volkswagen|Beetle|${y}|2.0 TSI R-Line`, {
    engine: 'CCZA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.4, fh: 6.4, fx: 11.6, seats: 5,
    weight: 1430, bodyStyle: 'Hatch', price: `~$${(base + 11000).toLocaleString()}`
  })
}

// ── VW Jetta Mk6 (2011–2019) ─────────────────────────────────────────────
for (let y = 2011; y <= 2019; y++) {
  const base = Math.round(24990 + (y - 2011) * 500)
  add(`Volkswagen|Jetta|${y}|118TSI Comfortline`, {
    engine: 'CBZB 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 77, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1282, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Jetta|${y}|118TSI Highline`, {
    engine: 'CBZB 1.2T TSI I4', displacement: 1197, cylinders: 4,
    power: 77, torque: 175, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 6.4, fh: 4.8, fx: 9.0, seats: 5,
    weight: 1292, bodyStyle: 'Sedan', price: `~$${(base + 3500).toLocaleString()}`
  })
  add(`Volkswagen|Jetta|${y}|155TSI Sportline`, {
    engine: 'BYT 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.0, fh: 6.0, fx: 11.2, seats: 5,
    weight: 1402, bodyStyle: 'Sedan', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── VW Scirocco Mk3 (2009–2017) ───────────────────────────────────────────
for (let y = 2009; y <= 2017; y++) {
  const base = Math.round(34990 + (y - 2009) * 700)
  add(`Volkswagen|Scirocco|${y}|118TSI`, {
    engine: 'CAXA 1.4T TSI I4', displacement: 1390, cylinders: 4,
    power: 118, torque: 240, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 7.2, fh: 5.4, fx: 10.2, seats: 4,
    weight: 1322, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Scirocco|${y}|155TSI`, {
    engine: 'CCZA 2.0T TSI I4', displacement: 1984, cylinders: 4,
    power: 147, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.2, fh: 6.2, fx: 11.4, seats: 4,
    weight: 1408, bodyStyle: 'Coupe', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Volkswagen|Scirocco|${y}|R`, {
    engine: 'CDLG 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 188, torque: 280, transmission: '6-speed DSG',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.2, seats: 4,
    weight: 1452, bodyStyle: 'Coupe', price: `~$${(base + 18000).toLocaleString()}`
  })
}

// ── VW Arteon (2018–2023) ────────────────────────────────────────────────
for (let y = 2018; y <= 2023; y++) {
  const base = Math.round(59990 + (y - 2018) * 1000)
  add(`Volkswagen|Arteon|${y}|206TSI`, {
    engine: 'CJXB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 206, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.0, seats: 5,
    weight: 1668, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|Arteon|${y}|206TSI R-Line`, {
    engine: 'CJXB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 206, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.6, fh: 6.4, fx: 12.0, seats: 5,
    weight: 1682, bodyStyle: 'Sedan', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Volkswagen|Arteon|${y}|Shooting Brake 206TSI`, {
    engine: 'CJXB 2.0T TSI AWD I4', displacement: 1984, cylinders: 4,
    power: 206, torque: 350, transmission: '7-speed DSG',
    fuelType: 'petrol', fc: 8.8, fh: 6.6, fx: 12.2, seats: 5,
    weight: 1726, bodyStyle: 'Wagon', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── VW ID.4 (2022–2026) ──────────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(59990 + (y - 2022) * 1000)
  add(`Volkswagen|ID.4|${y}|Pro`, {
    engine: 'APP550 77kWh Rear Motor', displacement: 0, cylinders: 0,
    power: 150, torque: 310, transmission: 'single-speed',
    fuelType: 'electric', fc: null, fh: null, fx: null, range: 522, battery: '77 kWh',
    seats: 5, weight: 2124, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|ID.4|${y}|GTX`, {
    engine: 'APP550 77kWh Dual Motor AWD', displacement: 0, cylinders: 0,
    power: 220, torque: 460, transmission: 'single-speed',
    fuelType: 'electric', fc: null, fh: null, fx: null, range: 480, battery: '77 kWh',
    seats: 5, weight: 2218, bodyStyle: 'SUV', price: `~$${(base + 15000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
console.log(`Generated ${count} Volkswagen specs`)
fs.writeFileSync('src/data/supplement36.json', JSON.stringify(out, null, 2))
console.log('Written to src/data/supplement36.json')
