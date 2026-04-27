#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── Excel X1 (1985–1989) ──────────────────────────────────────────────────
for (let y = 1985; y <= 1989; y++) {
  const base = Math.round(9490 + (y - 1985) * 400)
  add(`Hyundai|Excel|${y}|GL`, {
    engine: '4G33 1.5L SOHC I4', displacement: 1468, cylinders: 4,
    power: 53, torque: 108, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 820, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
}

// ── Excel X2 (1990–1994) ──────────────────────────────────────────────────
for (let y = 1990; y <= 1994; y++) {
  const base = Math.round(12990 + (y - 1990) * 500)
  add(`Hyundai|Excel|${y}|GL`, {
    engine: 'G4AJ 1.5L SOHC I4', displacement: 1468, cylinders: 4,
    power: 60, torque: 118, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.8, seats: 5,
    weight: 870, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Excel|${y}|GX`, {
    engine: 'G4AJ 1.5L SOHC I4', displacement: 1468, cylinders: 4,
    power: 60, torque: 118, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 890, bodyStyle: 'Hatch', price: `~$${(base + 2000).toLocaleString()}`
  })
}

// ── Excel X3 (1994–2000) ──────────────────────────────────────────────────
for (let y = 1994; y <= 2000; y++) {
  const base = Math.round(14990 + (y - 1994) * 400)
  add(`Hyundai|Excel|${y}|GL`, {
    engine: 'G4AJ 1.5L SOHC I4', displacement: 1468, cylinders: 4,
    power: 62, torque: 122, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.2, fh: 6.6, fx: 10.6, seats: 5,
    weight: 910, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Excel|${y}|GX`, {
    engine: 'G4EK 1.5L DOHC I4', displacement: 1495, cylinders: 4,
    power: 74, torque: 132, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 940, bodyStyle: 'Hatch', price: `~$${(base + 2500).toLocaleString()}`
  })
}

// ── Getz TB (2002–2011) ───────────────────────────────────────────────────
for (let y = 2002; y <= 2011; y++) {
  const base = Math.round(16990 + (y - 2002) * 400)
  add(`Hyundai|Getz|${y}|GL`, {
    engine: 'G4EA 1.3L DOHC I4', displacement: 1341, cylinders: 4,
    power: 58, torque: 119, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.2, fh: 5.8, fx: 9.4, seats: 5,
    weight: 1010, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Getz|${y}|GX`, {
    engine: 'G4EE 1.4L DOHC I4', displacement: 1399, cylinders: 4,
    power: 71, torque: 133, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.6, fh: 6.2, fx: 9.8, seats: 5,
    weight: 1030, bodyStyle: 'Hatch', price: `~$${(base + 2000).toLocaleString()}`
  })
  add(`Hyundai|Getz|${y}|SX`, {
    engine: 'G4ED 1.6L DOHC I4', displacement: 1599, cylinders: 4,
    power: 82, torque: 150, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 5,
    weight: 1060, bodyStyle: 'Hatch', price: `~$${(base + 4500).toLocaleString()}`
  })
}

// ── Accent LC (2000–2005) ─────────────────────────────────────────────────
for (let y = 2000; y <= 2005; y++) {
  const base = Math.round(17990 + (y - 2000) * 400)
  add(`Hyundai|Accent|${y}|GL`, {
    engine: 'G4EB 1.5L SOHC I4', displacement: 1495, cylinders: 4,
    power: 65, torque: 125, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.2, fh: 6.8, fx: 10.4, seats: 5,
    weight: 1040, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Accent|${y}|GX`, {
    engine: 'G4ED 1.6L DOHC I4', displacement: 1599, cylinders: 4,
    power: 82, torque: 150, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 1060, bodyStyle: 'Hatch', price: `~$${(base + 2500).toLocaleString()}`
  })
}

// ── Accent MC (2006–2010) ─────────────────────────────────────────────────
for (let y = 2006; y <= 2010; y++) {
  const base = Math.round(17990 + (y - 2006) * 400)
  add(`Hyundai|Accent|${y}|Active`, {
    engine: 'G4EE 1.4L DOHC I4', displacement: 1399, cylinders: 4,
    power: 71, torque: 133, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.6, fh: 6.2, fx: 9.8, seats: 5,
    weight: 1030, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Accent|${y}|Elite`, {
    engine: 'G4ED 1.6L DOHC I4', displacement: 1599, cylinders: 4,
    power: 82, torque: 150, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.6, seats: 5,
    weight: 1060, bodyStyle: 'Hatch', price: `~$${(base + 3000).toLocaleString()}`
  })
}

// ── Accent RB (2011–2017) ─────────────────────────────────────────────────
for (let y = 2011; y <= 2017; y++) {
  const base = Math.round(16990 + (y - 2011) * 400)
  add(`Hyundai|Accent|${y}|Active`, {
    engine: 'G4FA 1.4L DOHC I4', displacement: 1368, cylinders: 4,
    power: 74, torque: 134, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 7.0, fh: 5.7, fx: 9.0, seats: 5,
    weight: 1090, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Accent|${y}|Elite`, {
    engine: 'G4FG 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 95, torque: 157, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 6.0, fx: 9.4, seats: 5,
    weight: 1120, bodyStyle: 'Hatch', price: `~$${(base + 3500).toLocaleString()}`
  })
  add(`Hyundai|Accent|${y}|SR`, {
    engine: 'G4FG 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 95, torque: 157, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 7.2, fh: 5.8, fx: 9.2, seats: 5,
    weight: 1110, bodyStyle: 'Hatch', price: `~$${(base + 5500).toLocaleString()}`
  })
}

// ── i20 PB (2010–2015) ────────────────────────────────────────────────────
for (let y = 2010; y <= 2015; y++) {
  const base = Math.round(18990 + (y - 2010) * 400)
  add(`Hyundai|i20|${y}|Active`, {
    engine: 'G4FA 1.4L DOHC I4', displacement: 1368, cylinders: 4,
    power: 74, torque: 134, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 6.8, fh: 5.5, fx: 8.8, seats: 5,
    weight: 1080, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i20|${y}|Elite`, {
    engine: 'G4FD 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 94, torque: 151, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 6.0, fx: 9.4, seats: 5,
    weight: 1110, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── i20 BC3 (2021–2026) ───────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(22990 + (y - 2021) * 500)
  add(`Hyundai|i20|${y}|Active`, {
    engine: 'G4LC 1.4L MPI I4', displacement: 1368, cylinders: 4,
    power: 74, torque: 133, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 6.6, fh: 5.4, fx: 8.4, seats: 5,
    weight: 1080, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i20|${y}|N Line`, {
    engine: 'G3LC 1.0T GDi Turbo I3', displacement: 998, cylinders: 3,
    power: 88, torque: 172, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.2, fh: 5.0, fx: 8.0, seats: 5,
    weight: 1145, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── i30 FD (2007–2012) ────────────────────────────────────────────────────
for (let y = 2007; y <= 2012; y++) {
  const base = Math.round(21990 + (y - 2007) * 500)
  add(`Hyundai|i30|${y}|SX`, {
    engine: 'G4FC 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 91, torque: 157, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 10.0, seats: 5,
    weight: 1250, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i30|${y}|SLX`, {
    engine: 'G4GC 2.0L DOHC I4', displacement: 1975, cylinders: 4,
    power: 107, torque: 184, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 1290, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── i30 GD (2012–2017) ────────────────────────────────────────────────────
for (let y = 2012; y <= 2017; y++) {
  const base = Math.round(22990 + (y - 2012) * 400)
  add(`Hyundai|i30|${y}|Active`, {
    engine: 'G4FG 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 95, torque: 160, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 7.8, fh: 6.3, fx: 10.0, seats: 5,
    weight: 1260, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i30|${y}|Elite`, {
    engine: 'G4NB 1.8L DOHC I4', displacement: 1796, cylinders: 4,
    power: 110, torque: 178, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.8, fx: 10.4, seats: 5,
    weight: 1300, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Hyundai|i30|${y}|Trophy`, {
    engine: 'G4NB 1.8L DOHC I4', displacement: 1796, cylinders: 4,
    power: 110, torque: 178, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.8, fx: 10.4, seats: 5,
    weight: 1310, bodyStyle: 'Hatch', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── i30 PD (2017–2026) ────────────────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = Math.round(23490 + (y - 2017) * 400)
  add(`Hyundai|i30|${y}|Active`, {
    engine: 'G4NC 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 112, torque: 192, transmission: 'CVT',
    fuelType: 'petrol', fc: 7.6, fh: 6.2, fx: 9.8, seats: 5,
    weight: 1310, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i30|${y}|Elite`, {
    engine: 'G4LD 1.4T GDi Turbo I4', displacement: 1353, cylinders: 4,
    power: 103, torque: 211, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.0, fh: 5.8, fx: 8.8, seats: 5,
    weight: 1340, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Hyundai|i30|${y}|N Line`, {
    engine: 'G4LD 1.4T GDi Turbo I4', displacement: 1353, cylinders: 4,
    power: 103, torque: 211, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.0, fh: 5.8, fx: 8.8, seats: 5,
    weight: 1355, bodyStyle: 'Hatch', price: `~$${(base + 7500).toLocaleString()}`
  })
}

// ── i30 N (2018–2026) ─────────────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(44990 + (y - 2018) * 500)
  add(`Hyundai|i30 N|${y}|N`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 202, torque: 353, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 5,
    weight: 1430, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i30 N|${y}|N Performance`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 206, torque: 353, transmission: '8-speed DCT',
    fuelType: 'petrol', fc: 9.6, fh: 8.0, fx: 12.0, seats: 5,
    weight: 1455, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Elantra HD (2006–2011) ────────────────────────────────────────────────
for (let y = 2006; y <= 2011; y++) {
  const base = Math.round(21990 + (y - 2006) * 500)
  add(`Hyundai|Elantra|${y}|SX`, {
    engine: 'G4FC 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 91, torque: 157, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.0, fh: 6.5, fx: 10.2, seats: 5,
    weight: 1280, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Elantra|${y}|SLX`, {
    engine: 'G4GC 2.0L DOHC I4', displacement: 1975, cylinders: 4,
    power: 107, torque: 184, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 1320, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Elantra MD (2011–2016) ────────────────────────────────────────────────
for (let y = 2011; y <= 2016; y++) {
  const base = Math.round(22990 + (y - 2011) * 400)
  add(`Hyundai|Elantra|${y}|Active`, {
    engine: 'G4NB 1.8L DOHC I4', displacement: 1796, cylinders: 4,
    power: 110, torque: 178, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 5,
    weight: 1280, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Elantra|${y}|Elite`, {
    engine: 'G4NC 2.0L DOHC I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 196, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 1330, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Elantra AD (2016–2021) ────────────────────────────────────────────────
for (let y = 2016; y <= 2021; y++) {
  const base = Math.round(24990 + (y - 2016) * 400)
  add(`Hyundai|Elantra|${y}|Active`, {
    engine: 'G4NC 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 112, torque: 192, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.7, fx: 10.4, seats: 5,
    weight: 1305, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Elantra|${y}|Sport`, {
    engine: 'G4FJ 1.6T GDi Turbo I4', displacement: 1591, cylinders: 4,
    power: 130, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.6, seats: 5,
    weight: 1380, bodyStyle: 'Sedan', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Elantra CN7 (2021–2026) ───────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(27490 + (y - 2021) * 500)
  add(`Hyundai|Elantra|${y}|Active`, {
    engine: 'G4NL 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 200, transmission: 'CVT',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 5,
    weight: 1325, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Elantra|${y}|Elite`, {
    engine: 'G4NL 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 200, transmission: 'CVT',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 5,
    weight: 1340, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Hyundai|Elantra|${y}|N Line`, {
    engine: 'G4FJ 1.6T GDi Turbo I4', displacement: 1591, cylinders: 4,
    power: 147, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 5,
    weight: 1400, bodyStyle: 'Sedan', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── i45/Sonata YF (2010–2014) ─────────────────────────────────────────────
for (let y = 2010; y <= 2014; y++) {
  const base = Math.round(37990 + (y - 2010) * 500)
  add(`Hyundai|i45|${y}|Elite`, {
    engine: 'G4KJ 2.0L GDi I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 205, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 1460, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i45|${y}|Premium`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 128, torque: 231, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Sonata NF (2005–2010) ─────────────────────────────────────────────────
for (let y = 2005; y <= 2010; y++) {
  const base = Math.round(33990 + (y - 2005) * 600)
  add(`Hyundai|Sonata|${y}|Elite`, {
    engine: 'G4KE 2.4L DOHC I4', displacement: 2359, cylinders: 4,
    power: 125, torque: 225, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 9.6, fh: 7.8, fx: 12.2, seats: 5,
    weight: 1485, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Sonata|${y}|V6 Elite`, {
    engine: 'G6DB 3.3L DOHC V6', displacement: 3342, cylinders: 6,
    power: 180, torque: 310, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 11.8, fh: 9.4, fx: 15.0, seats: 5,
    weight: 1560, bodyStyle: 'Sedan', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Sonata LF (2015–2019) ─────────────────────────────────────────────────
for (let y = 2015; y <= 2019; y++) {
  const base = Math.round(36990 + (y - 2015) * 500)
  add(`Hyundai|Sonata|${y}|Active`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 138, torque: 241, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Sonata|${y}|Elite`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 177, torque: 353, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.2, fh: 7.6, fx: 11.8, seats: 5,
    weight: 1530, bodyStyle: 'Sedan', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── Sonata DN8 (2020–2026) ────────────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(39990 + (y - 2020) * 500)
  add(`Hyundai|Sonata|${y}|Active`, {
    engine: 'G4KL 2.5L MPI I4', displacement: 2497, cylinders: 4,
    power: 143, torque: 245, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 5,
    weight: 1520, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Sonata|${y}|Elite`, {
    engine: 'G4KL 2.5L MPI I4', displacement: 2497, cylinders: 4,
    power: 143, torque: 245, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 5,
    weight: 1540, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── i40 VF (2011–2015) ────────────────────────────────────────────────────
for (let y = 2011; y <= 2015; y++) {
  const base = Math.round(27990 + (y - 2011) * 500)
  add(`Hyundai|i40|${y}|Active`, {
    engine: 'G4NC 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 196, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 1460, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|i40|${y}|Active Tourer`, {
    engine: 'D4FD 1.7L CRDi Diesel I4', displacement: 1685, cylinders: 4,
    power: 100, torque: 325, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 6.2, fh: 5.0, fx: 8.0, seats: 5,
    weight: 1530, bodyStyle: 'Wagon', price: `~$${(base + 3000).toLocaleString()}`
  })
}

// ── Veloster FS (2012–2018) ───────────────────────────────────────────────
for (let y = 2012; y <= 2018; y++) {
  const base = Math.round(23990 + (y - 2012) * 400)
  add(`Hyundai|Veloster|${y}|SR`, {
    engine: 'G4FD 1.6L GDi I4', displacement: 1591, cylinders: 4,
    power: 103, torque: 163, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 4,
    weight: 1240, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Veloster|${y}|SR Turbo`, {
    engine: 'G4FJ 1.6T GDi Turbo I4', displacement: 1591, cylinders: 4,
    power: 150, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 4,
    weight: 1305, bodyStyle: 'Coupe', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── Veloster JS (2019–2021) ───────────────────────────────────────────────
for (let y = 2019; y <= 2021; y++) {
  const base = Math.round(34990 + (y - 2019) * 500)
  add(`Hyundai|Veloster|${y}|Turbo`, {
    engine: 'G4FJ 1.6T GDi Turbo I4', displacement: 1591, cylinders: 4,
    power: 150, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 4,
    weight: 1319, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Veloster|${y}|N`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 202, torque: 353, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 4,
    weight: 1415, bodyStyle: 'Coupe', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Hyundai Coupe GK (2002–2008) ──────────────────────────────────────────
for (let y = 2002; y <= 2008; y++) {
  const base = Math.round(28990 + (y - 2002) * 500)
  add(`Hyundai|Coupe|${y}|FX`, {
    engine: 'G4GC 2.0L DOHC I4', displacement: 1975, cylinders: 4,
    power: 107, torque: 184, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 4,
    weight: 1250, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Coupe|${y}|SE V6`, {
    engine: 'G6BA 2.7L DOHC V6', displacement: 2656, cylinders: 6,
    power: 136, torque: 248, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.2, fh: 9.0, fx: 14.2, seats: 4,
    weight: 1290, bodyStyle: 'Coupe', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Genesis Coupe BK (2009–2014) ──────────────────────────────────────────
for (let y = 2009; y <= 2014; y++) {
  const base = Math.round(36990 + (y - 2009) * 500)
  add(`Hyundai|Genesis Coupe|${y}|2.0T`, {
    engine: 'G4KD 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 150, torque: 264, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 10.4, fh: 8.4, fx: 13.2, seats: 4,
    weight: 1466, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Genesis Coupe|${y}|3.8 V6`, {
    engine: 'G6DA 3.8L DOHC V6', displacement: 3778, cylinders: 6,
    power: 232, torque: 368, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 12.2, fh: 9.8, fx: 15.4, seats: 4,
    weight: 1543, bodyStyle: 'Coupe', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── Terracan HP (2001–2006) ───────────────────────────────────────────────
for (let y = 2001; y <= 2006; y++) {
  const base = Math.round(43990 + (y - 2001) * 600)
  add(`Hyundai|Terracan|${y}|Standard`, {
    engine: 'J2 2.9L CRDi Diesel I4', displacement: 2902, cylinders: 4,
    power: 103, torque: 314, transmission: '5-speed manual',
    fuelType: 'diesel', fc: 10.2, fh: 8.4, fx: 12.8, seats: 7,
    weight: 1820, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Terracan|${y}|GLX`, {
    engine: 'J2 2.9L CRDi Diesel I4', displacement: 2902, cylinders: 4,
    power: 103, torque: 314, transmission: '5-speed automatic',
    fuelType: 'diesel', fc: 11.0, fh: 9.0, fx: 13.8, seats: 7,
    weight: 1860, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── ix35 LM (2010–2015) ───────────────────────────────────────────────────
for (let y = 2010; y <= 2015; y++) {
  const base = Math.round(28990 + (y - 2010) * 500)
  add(`Hyundai|ix35|${y}|Active`, {
    engine: 'G4KD 2.0L MPI I4', displacement: 1998, cylinders: 4,
    power: 122, torque: 209, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.6, fx: 12.0, seats: 5,
    weight: 1460, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|ix35|${y}|Elite`, {
    engine: 'G4KD 2.0L MPI I4 AWD', displacement: 1998, cylinders: 4,
    power: 122, torque: 209, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1530, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Hyundai|ix35|${y}|Highlander`, {
    engine: 'D4HA 2.0L CRDi Diesel I4 AWD', displacement: 1995, cylinders: 4,
    power: 100, torque: 310, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 6.0, fx: 9.4, seats: 5,
    weight: 1580, bodyStyle: 'SUV', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── Tucson TL (2015–2021) ─────────────────────────────────────────────────
for (let y = 2015; y <= 2021; y++) {
  const base = Math.round(27990 + (y - 2015) * 500)
  add(`Hyundai|Tucson|${y}|Active X`, {
    engine: 'G4NA 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 122, torque: 205, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.2, fh: 7.4, fx: 11.8, seats: 5,
    weight: 1478, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Elite`, {
    engine: 'G4FJ 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 130, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 1540, bodyStyle: 'SUV', price: `~$${(base + 5500).toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Highlander`, {
    engine: 'D4HA 2.0L CRDi Diesel I4 AWD', displacement: 1995, cylinders: 4,
    power: 136, torque: 400, transmission: '7-speed DCT',
    fuelType: 'diesel', fc: 7.2, fh: 5.8, fx: 9.2, seats: 5,
    weight: 1610, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── Tucson NX4 (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(32490 + (y - 2021) * 600)
  add(`Hyundai|Tucson|${y}|Active`, {
    engine: 'G4NH 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 115, torque: 192, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 1515, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Elite`, {
    engine: 'G4FP 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 132, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.8, seats: 5,
    weight: 1610, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Highlander`, {
    engine: 'T-GDi 1.6T Hybrid I4 AWD', displacement: 1591, cylinders: 4,
    power: 169, torque: 265, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 6.4, fh: 5.4, fx: 7.8, seats: 5,
    weight: 1770, bodyStyle: 'SUV', price: `~$${(base + 13000).toLocaleString()}`
  })
}

// ── Santa Fe CM (2006–2012) ───────────────────────────────────────────────
for (let y = 2006; y <= 2012; y++) {
  const base = Math.round(39990 + (y - 2006) * 600)
  add(`Hyundai|Santa Fe|${y}|SX`, {
    engine: 'G6EA 2.7L DOHC V6', displacement: 2656, cylinders: 6,
    power: 138, torque: 248, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 12.4, fh: 10.0, fx: 15.6, seats: 7,
    weight: 1785, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Santa Fe|${y}|Elite`, {
    engine: 'D4EB 2.2L CRDi Diesel I4 AWD', displacement: 2188, cylinders: 4,
    power: 114, torque: 343, transmission: '5-speed automatic',
    fuelType: 'diesel', fc: 8.8, fh: 7.2, fx: 11.2, seats: 7,
    weight: 1870, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Santa Fe DM (2012–2018) ───────────────────────────────────────────────
for (let y = 2012; y <= 2018; y++) {
  const base = Math.round(33990 + (y - 2012) * 600)
  add(`Hyundai|Santa Fe|${y}|Active`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 135, torque: 241, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 8.4, fx: 12.8, seats: 7,
    weight: 1740, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Santa Fe|${y}|Elite`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 145, torque: 422, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.4, fx: 10.2, seats: 7,
    weight: 1890, bodyStyle: 'SUV', price: `~$${(base + 9000).toLocaleString()}`
  })
  add(`Hyundai|Santa Fe|${y}|Highlander`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 145, torque: 422, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.4, fx: 10.2, seats: 7,
    weight: 1920, bodyStyle: 'SUV', price: `~$${(base + 16000).toLocaleString()}`
  })
}

// ── Santa Fe TM (2018–2026) ───────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(41490 + (y - 2018) * 700)
  add(`Hyundai|Santa Fe|${y}|Active`, {
    engine: 'G4KJ 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 138, torque: 241, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.4, fh: 8.6, fx: 13.0, seats: 7,
    weight: 1770, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Santa Fe|${y}|Elite`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.6, fh: 6.2, fx: 9.6, seats: 7,
    weight: 1955, bodyStyle: 'SUV', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Hyundai|Santa Fe|${y}|Highlander`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 7.6, fh: 6.2, fx: 9.6, seats: 7,
    weight: 1975, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
}

// ── Kona OS petrol (2017–2023) ────────────────────────────────────────────
for (let y = 2017; y <= 2023; y++) {
  const base = Math.round(24990 + (y - 2017) * 500)
  add(`Hyundai|Kona|${y}|Active`, {
    engine: 'G4NH 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 110, torque: 179, transmission: 'CVT',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.8, seats: 5,
    weight: 1303, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Kona|${y}|Elite`, {
    engine: 'G4FJ 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 130, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 1442, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Hyundai|Kona|${y}|Highlander`, {
    engine: 'G4FJ 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 130, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 1460, bodyStyle: 'SUV', price: `~$${(base + 11000).toLocaleString()}`
  })
}

// ── Kona Electric OS (2018–2023) ──────────────────────────────────────────
for (let y = 2018; y <= 2023; y++) {
  const base = Math.round(59990 + (y - 2018) * 500)
  add(`Hyundai|Kona|${y}|Electric Active`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 100, torque: 395, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 301, battery: '39.2 kWh', seats: 5,
    weight: 1534, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Kona|${y}|Electric Highlander`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 150, torque: 395, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 484, battery: '64 kWh', seats: 5,
    weight: 1680, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
}

// ── Kona SX2 (2023–2026) ─────────────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = Math.round(33990 + (y - 2023) * 700)
  add(`Hyundai|Kona|${y}|Active petrol`, {
    engine: 'G3LC 1.0T GDi Turbo I3', displacement: 998, cylinders: 3,
    power: 88, torque: 172, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.0, fh: 5.6, fx: 9.0, seats: 5,
    weight: 1356, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Kona|${y}|Electric`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 160, torque: 255, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 490, battery: '65.4 kWh', seats: 5,
    weight: 1750, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
}

// ── Ioniq AE Hybrid (2016–2022) ───────────────────────────────────────────
for (let y = 2016; y <= 2022; y++) {
  const base = Math.round(30490 + (y - 2016) * 400)
  add(`Hyundai|Ioniq|${y}|Elite Hybrid`, {
    engine: 'G4LE 1.6L GDi + Electric Motor', displacement: 1580, cylinders: 4,
    power: 104, torque: 264, transmission: '6-speed DCT',
    fuelType: 'petrol', fc: 4.4, fh: 3.8, fx: 5.2, seats: 5,
    weight: 1380, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Ioniq|${y}|Premium Hybrid`, {
    engine: 'G4LE 1.6L GDi + Electric Motor', displacement: 1580, cylinders: 4,
    power: 104, torque: 264, transmission: '6-speed DCT',
    fuelType: 'petrol', fc: 4.4, fh: 3.8, fx: 5.2, seats: 5,
    weight: 1400, bodyStyle: 'Hatch', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Ioniq AE Electric (2017–2022) ─────────────────────────────────────────
for (let y = 2017; y <= 2022; y++) {
  const base = Math.round(44990 + (y - 2017) * 400)
  add(`Hyundai|Ioniq|${y}|Elite Electric`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 88, torque: 295, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 311, battery: '38.3 kWh', seats: 5,
    weight: 1420, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
}

// ── Ioniq 5 NE (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(71900 + (y - 2021) * 800)
  add(`Hyundai|Ioniq 5|${y}|Active`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 125, torque: 350, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 360, battery: '58 kWh', seats: 5,
    weight: 1985, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Ioniq 5|${y}|Elite`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 160, torque: 350, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 481, battery: '72.6 kWh', seats: 5,
    weight: 2050, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Hyundai|Ioniq 5|${y}|Ultimate AWD`, {
    engine: 'Dual BLDC Motor AWD', displacement: 0, cylinders: 0,
    power: 225, torque: 605, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 430, battery: '72.6 kWh', seats: 5,
    weight: 2185, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
}

// ── Ioniq 6 CE (2022–2026) ────────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(67900 + (y - 2022) * 800)
  add(`Hyundai|Ioniq 6|${y}|Active`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 168, torque: 350, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 614, battery: '77.4 kWh', seats: 5,
    weight: 1985, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Ioniq 6|${y}|Ultimate AWD`, {
    engine: 'Dual BLDC Motor AWD', displacement: 0, cylinders: 0,
    power: 239, torque: 605, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 519, battery: '77.4 kWh', seats: 5,
    weight: 2170, bodyStyle: 'Sedan', price: `~$${(base + 15000).toLocaleString()}`
  })
}

// ── Palisade LX2 (2019–2026) ──────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(53990 + (y - 2019) * 700)
  add(`Hyundai|Palisade|${y}|Active`, {
    engine: 'G6DP 3.8L MPI V6 AWD', displacement: 3778, cylinders: 6,
    power: 216, torque: 355, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.0, fh: 9.8, fx: 15.2, seats: 8,
    weight: 2075, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Palisade|${y}|Elite`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.8, fh: 7.2, fx: 11.2, seats: 8,
    weight: 2115, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Hyundai|Palisade|${y}|Highlander`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.8, fh: 7.2, fx: 11.2, seats: 8,
    weight: 2130, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
}

// ── Staria US4 (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(54990 + (y - 2021) * 700)
  add(`Hyundai|Staria|${y}|Active`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 130, torque: 430, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.6, fh: 7.0, fx: 10.8, seats: 11,
    weight: 2175, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Hyundai|Staria|${y}|Elite`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 130, torque: 430, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.6, fh: 7.0, fx: 10.8, seats: 8,
    weight: 2165, bodyStyle: 'Van', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Hyundai|Staria|${y}|Lounge`, {
    engine: 'G6DK 3.5L MPI V6', displacement: 3470, cylinders: 6,
    power: 205, torque: 331, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 10.0, fx: 15.4, seats: 7,
    weight: 2175, bodyStyle: 'Van', price: `~$${(base + 20000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
fs.writeFileSync('src/data/supplement32.json', JSON.stringify(out, null, 2))
console.log(`supplement32.json: ${count} entries`)
const byModel = {}
for (const k of Object.keys(S)) { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 }
Object.entries(byModel).sort().forEach(([m, c]) => console.log(`  ${m}: ${c}`))
