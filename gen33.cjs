#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── Kia Sportage SL (2010–2015) ───────────────────────────────────────────
for (let y = 2010; y <= 2015; y++) {
  const base = Math.round(27990 + (y - 2010) * 500)
  add(`Kia|Sportage|${y}|Si`, {
    engine: 'G4NA 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 122, torque: 205, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.4, fh: 7.6, fx: 12.0, seats: 5,
    weight: 1478, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|SLi`, {
    engine: 'G4NA 2.0L MPI I4 AWD', displacement: 1999, cylinders: 4,
    power: 122, torque: 205, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1540, bodyStyle: 'SUV', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|Platinum`, {
    engine: 'D4HA 2.0L CRDi Diesel I4 AWD', displacement: 1995, cylinders: 4,
    power: 100, torque: 310, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 7.4, fh: 6.0, fx: 9.4, seats: 5,
    weight: 1600, bodyStyle: 'SUV', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── Kia Sportage QL (2015–2021) ───────────────────────────────────────────
for (let y = 2015; y <= 2021; y++) {
  const base = Math.round(27990 + (y - 2015) * 500)
  add(`Kia|Sportage|${y}|Sport`, {
    engine: 'G4NA 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 122, torque: 205, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.2, fh: 7.4, fx: 11.8, seats: 5,
    weight: 1470, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|SLi`, {
    engine: 'G4FJ 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 130, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 1545, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|Platinum`, {
    engine: 'D4HA 2.0L CRDi Diesel I4 AWD', displacement: 1995, cylinders: 4,
    power: 136, torque: 400, transmission: '7-speed DCT',
    fuelType: 'diesel', fc: 7.2, fh: 5.8, fx: 9.2, seats: 5,
    weight: 1620, bodyStyle: 'SUV', price: `~$${(base + 11000).toLocaleString()}`
  })
}

// ── Kia Sportage NQ5 (2021–2026) ─────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(31490 + (y - 2021) * 600)
  add(`Kia|Sportage|${y}|Sport`, {
    engine: 'G4NH 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 115, torque: 192, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.2, seats: 5,
    weight: 1513, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|GT-Line`, {
    engine: 'G4FP 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 132, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.8, seats: 5,
    weight: 1610, bodyStyle: 'SUV', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Kia|Sportage|${y}|Platinum`, {
    engine: 'T-GDi 1.6T Hybrid I4 AWD', displacement: 1591, cylinders: 4,
    power: 169, torque: 265, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 6.4, fh: 5.4, fx: 7.8, seats: 5,
    weight: 1760, bodyStyle: 'SUV', price: `~$${(base + 13000).toLocaleString()}`
  })
}

// ── Kia Sorento XM (2009–2014) ────────────────────────────────────────────
for (let y = 2009; y <= 2014; y++) {
  const base = Math.round(36990 + (y - 2009) * 600)
  add(`Kia|Sorento|${y}|SI`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 128, torque: 231, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.4, fh: 8.6, fx: 13.2, seats: 7,
    weight: 1740, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|SLi`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 145, torque: 422, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 8.2, fh: 6.6, fx: 10.4, seats: 7,
    weight: 1880, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|Platinum`, {
    engine: 'G6DC 3.5L DOHC V6 AWD', displacement: 3471, cylinders: 6,
    power: 191, torque: 333, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 13.2, fh: 10.6, fx: 16.8, seats: 7,
    weight: 1930, bodyStyle: 'SUV', price: `~$${(base + 16000).toLocaleString()}`
  })
}

// ── Kia Sorento UM (2015–2020) ────────────────────────────────────────────
for (let y = 2015; y <= 2020; y++) {
  const base = Math.round(39490 + (y - 2015) * 600)
  add(`Kia|Sorento|${y}|SI`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 138, torque: 241, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 10.4, fh: 8.6, fx: 13.2, seats: 7,
    weight: 1774, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|SLi`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.4, fx: 10.2, seats: 7,
    weight: 1930, bodyStyle: 'SUV', price: `~$${(base + 9000).toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|Platinum`, {
    engine: 'G6DH 3.3L DOHC V6 AWD', displacement: 3342, cylinders: 6,
    power: 199, torque: 318, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 12.6, fh: 10.2, fx: 16.0, seats: 7,
    weight: 1920, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
}

// ── Kia Sorento MQ4 (2020–2026) ───────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(44990 + (y - 2020) * 700)
  add(`Kia|Sorento|${y}|Sport`, {
    engine: 'G4KL 2.5L MPI I4 AWD', displacement: 2497, cylinders: 4,
    power: 143, torque: 245, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 10.2, fh: 8.4, fx: 12.8, seats: 7,
    weight: 1900, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|Sport+`, {
    engine: 'D4HB 2.2L CRDi Diesel I4 AWD', displacement: 2199, cylinders: 4,
    power: 147, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.0, fh: 6.4, fx: 10.2, seats: 7,
    weight: 2000, bodyStyle: 'SUV', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Kia|Sorento|${y}|GT-Line X`, {
    engine: 'T-GDi 1.6T Hybrid I4 AWD', displacement: 1591, cylinders: 4,
    power: 169, torque: 265, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 6.8, fh: 5.6, fx: 8.4, seats: 7,
    weight: 1985, bodyStyle: 'SUV', price: `~$${(base + 18000).toLocaleString()}`
  })
}

// ── Kia Rio QB (2011–2017) ────────────────────────────────────────────────
for (let y = 2011; y <= 2017; y++) {
  const base = Math.round(15490 + (y - 2011) * 400)
  add(`Kia|Rio|${y}|S`, {
    engine: 'G4FA 1.4L DOHC I4', displacement: 1368, cylinders: 4,
    power: 74, torque: 134, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 6.8, fh: 5.5, fx: 8.8, seats: 5,
    weight: 1074, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Rio|${y}|SLS`, {
    engine: 'G4FG 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 95, torque: 157, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 7.4, fh: 6.0, fx: 9.4, seats: 5,
    weight: 1110, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Kia Rio YB (2017–2026) ────────────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = Math.round(16490 + (y - 2017) * 400)
  add(`Kia|Rio|${y}|S`, {
    engine: 'G4LC 1.4L MPI I4', displacement: 1368, cylinders: 4,
    power: 74, torque: 133, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 6.8, fh: 5.5, fx: 8.8, seats: 5,
    weight: 1100, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Rio|${y}|Sport`, {
    engine: 'G3LC 1.0T GDi Turbo I3', displacement: 998, cylinders: 3,
    power: 74, torque: 172, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.4, fh: 5.2, fx: 8.2, seats: 5,
    weight: 1120, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Kia|Rio|${y}|GT-Line`, {
    engine: 'G4LD 1.4T GDi Turbo I4', displacement: 1353, cylinders: 4,
    power: 103, torque: 172, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.8, fh: 5.6, fx: 8.8, seats: 5,
    weight: 1150, bodyStyle: 'Hatch', price: `~$${(base + 7500).toLocaleString()}`
  })
}

// ── Kia Cerato TD (2007–2013) ─────────────────────────────────────────────
for (let y = 2007; y <= 2013; y++) {
  const base = Math.round(20990 + (y - 2007) * 400)
  add(`Kia|Cerato|${y}|Si`, {
    engine: 'G4FC 1.6L DOHC I4', displacement: 1591, cylinders: 4,
    power: 92, torque: 157, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 8.2, fh: 6.7, fx: 10.4, seats: 5,
    weight: 1270, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Cerato|${y}|SLi`, {
    engine: 'G4GC 2.0L DOHC I4', displacement: 1975, cylinders: 4,
    power: 107, torque: 184, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 1310, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Kia Cerato YD (2013–2018) ─────────────────────────────────────────────
for (let y = 2013; y <= 2018; y++) {
  const base = Math.round(21990 + (y - 2013) * 400)
  add(`Kia|Cerato|${y}|S`, {
    engine: 'G4NB 1.8L DOHC I4', displacement: 1796, cylinders: 4,
    power: 110, torque: 178, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 5,
    weight: 1285, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Cerato|${y}|Sport`, {
    engine: 'G4NC 2.0L DOHC I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 196, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 8.6, fh: 7.0, fx: 10.8, seats: 5,
    weight: 1330, bodyStyle: 'Sedan', price: `~$${(base + 4500).toLocaleString()}`
  })
}

// ── Kia Cerato BD (2018–2026) ─────────────────────────────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(21990 + (y - 2018) * 400)
  add(`Kia|Cerato|${y}|S`, {
    engine: 'G4NC 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 196, transmission: 'CVT',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 5,
    weight: 1310, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Cerato|${y}|Sport+`, {
    engine: 'G4NC 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 120, torque: 196, transmission: 'CVT',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 5,
    weight: 1330, bodyStyle: 'Sedan', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Kia|Cerato|${y}|GT`, {
    engine: 'G4FJ 1.6T GDi Turbo I4', displacement: 1591, cylinders: 4,
    power: 150, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.0, fh: 6.6, fx: 10.2, seats: 5,
    weight: 1410, bodyStyle: 'Sedan', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── Kia Grand Carnival VQ (2006–2014) ─────────────────────────────────────
for (let y = 2006; y <= 2014; y++) {
  const base = Math.round(38990 + (y - 2006) * 600)
  add(`Kia|Carnival|${y}|Si`, {
    engine: 'G6EA 2.7L DOHC V6', displacement: 2656, cylinders: 6,
    power: 135, torque: 248, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 9.8, fx: 15.4, seats: 8,
    weight: 1950, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Carnival|${y}|SLi`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 114, torque: 343, transmission: '5-speed automatic',
    fuelType: 'diesel', fc: 9.2, fh: 7.4, fx: 11.8, seats: 8,
    weight: 2020, bodyStyle: 'Van', price: `~$${(base + 8000).toLocaleString()}`
  })
}

// ── Kia Grand Carnival YP (2014–2020) ─────────────────────────────────────
for (let y = 2014; y <= 2020; y++) {
  const base = Math.round(43490 + (y - 2014) * 600)
  add(`Kia|Carnival|${y}|Si YP`, {
    engine: 'G6DH 3.3L DOHC V6', displacement: 3342, cylinders: 6,
    power: 199, torque: 318, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 12.8, fh: 10.2, fx: 16.2, seats: 8,
    weight: 2017, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Carnival|${y}|SLi YP`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 136, torque: 400, transmission: '6-speed automatic',
    fuelType: 'diesel', fc: 9.0, fh: 7.2, fx: 11.4, seats: 8,
    weight: 2090, bodyStyle: 'Van', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── Kia Carnival KA4 (2021–2026) ──────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(44990 + (y - 2021) * 700)
  add(`Kia|Carnival|${y}|S`, {
    engine: 'G6DK 3.5L MPI V6', displacement: 3470, cylinders: 6,
    power: 216, torque: 336, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.4, fh: 10.0, fx: 15.6, seats: 8,
    weight: 2070, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Carnival|${y}|SLi`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 148, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.4, fh: 6.8, fx: 10.6, seats: 8,
    weight: 2140, bodyStyle: 'Van', price: `~$${(base + 6000).toLocaleString()}`
  })
  add(`Kia|Carnival|${y}|Platinum`, {
    engine: 'D4HB 2.2L CRDi Diesel I4', displacement: 2199, cylinders: 4,
    power: 148, torque: 440, transmission: '8-speed automatic',
    fuelType: 'diesel', fc: 8.4, fh: 6.8, fx: 10.6, seats: 8,
    weight: 2160, bodyStyle: 'Van', price: `~$${(base + 14000).toLocaleString()}`
  })
}

// ── Kia Stinger CK (2017–2023) ────────────────────────────────────────────
for (let y = 2017; y <= 2023; y++) {
  const base = Math.round(44990 + (y - 2017) * 500)
  add(`Kia|Stinger|${y}|GT`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 181, torque: 353, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1700, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Stinger|${y}|GT-Line`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 181, torque: 353, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1720, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
  add(`Kia|Stinger|${y}|GT Sport`, {
    engine: 'G6DP 3.3T BiTurbo V6', displacement: 3342, cylinders: 6,
    power: 272, torque: 510, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 11.8, fh: 9.4, fx: 15.0, seats: 5,
    weight: 1854, bodyStyle: 'Sedan', price: `~$${(base + 15000).toLocaleString()}`
  })
}

// ── Kia EV6 CV (2021–2026) ────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = Math.round(67990 + (y - 2021) * 800)
  add(`Kia|EV6|${y}|Air`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 125, torque: 350, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 394, battery: '58 kWh', seats: 5,
    weight: 1960, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|EV6|${y}|Earth`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 168, torque: 350, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 528, battery: '77.4 kWh', seats: 5,
    weight: 2020, bodyStyle: 'SUV', price: `~$${(base + 7000).toLocaleString()}`
  })
  add(`Kia|EV6|${y}|GT-Line AWD`, {
    engine: 'Dual BLDC Motor AWD', displacement: 0, cylinders: 0,
    power: 239, torque: 605, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 484, battery: '77.4 kWh', seats: 5,
    weight: 2135, bodyStyle: 'SUV', price: `~$${(base + 15000).toLocaleString()}`
  })
}

// ── Kia Seltos SP2 (2019–2026) ────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(25490 + (y - 2019) * 600)
  add(`Kia|Seltos|${y}|S`, {
    engine: 'G4NH 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 110, torque: 179, transmission: 'CVT',
    fuelType: 'petrol', fc: 8.4, fh: 6.8, fx: 10.8, seats: 5,
    weight: 1392, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Seltos|${y}|Sport`, {
    engine: 'G4LD 1.4T GDi Turbo I4', displacement: 1353, cylinders: 4,
    power: 103, torque: 211, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 7.8, fh: 6.4, fx: 9.8, seats: 5,
    weight: 1432, bodyStyle: 'SUV', price: `~$${(base + 4000).toLocaleString()}`
  })
  add(`Kia|Seltos|${y}|Sport+`, {
    engine: 'G4FP 1.6T GDi Turbo I4 AWD', displacement: 1591, cylinders: 4,
    power: 132, torque: 265, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 8.2, fh: 6.6, fx: 10.4, seats: 5,
    weight: 1520, bodyStyle: 'SUV', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── Kia Niro DE Hybrid (2017–2022) ────────────────────────────────────────
for (let y = 2017; y <= 2022; y++) {
  const base = Math.round(33490 + (y - 2017) * 400)
  add(`Kia|Niro|${y}|Si Hybrid`, {
    engine: 'G4LE 1.6L GDi + Electric Motor', displacement: 1580, cylinders: 4,
    power: 104, torque: 264, transmission: '6-speed DCT',
    fuelType: 'petrol', fc: 4.4, fh: 3.8, fx: 5.2, seats: 5,
    weight: 1451, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Niro|${y}|SLi Hybrid`, {
    engine: 'G4LE 1.6L GDi + Electric Motor', displacement: 1580, cylinders: 4,
    power: 104, torque: 264, transmission: '6-speed DCT',
    fuelType: 'petrol', fc: 4.4, fh: 3.8, fx: 5.2, seats: 5,
    weight: 1468, bodyStyle: 'SUV', price: `~$${(base + 4500).toLocaleString()}`
  })
}

// ── Kia Niro DE Electric (2018–2022) ──────────────────────────────────────
for (let y = 2018; y <= 2022; y++) {
  const base = Math.round(63990 + (y - 2018) * 500)
  add(`Kia|Niro|${y}|Electric Si`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 150, torque: 395, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 455, battery: '64 kWh', seats: 5,
    weight: 1737, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
}

// ── Kia Niro SG2 (2022–2026) ──────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(37990 + (y - 2022) * 500)
  add(`Kia|Niro|${y}|Sport Hybrid`, {
    engine: 'G4LE 1.6L GDi + Electric Motor', displacement: 1580, cylinders: 4,
    power: 104, torque: 264, transmission: '6-speed DCT',
    fuelType: 'petrol', fc: 4.4, fh: 3.8, fx: 5.2, seats: 5,
    weight: 1490, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Niro|${y}|GT-Line EV`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 150, torque: 255, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 460, battery: '64.8 kWh', seats: 5,
    weight: 1726, bodyStyle: 'SUV', price: `~$${(base + 20000).toLocaleString()}`
  })
}

// ── Kia Picanto TA (2011–2017) ────────────────────────────────────────────
for (let y = 2011; y <= 2017; y++) {
  const base = Math.round(12990 + (y - 2011) * 300)
  add(`Kia|Picanto|${y}|S`, {
    engine: 'G3LA 1.0L DOHC I3', displacement: 998, cylinders: 3,
    power: 49, torque: 94, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 5.4, fh: 4.4, fx: 6.8, seats: 5,
    weight: 835, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Picanto|${y}|Si`, {
    engine: 'G4LA 1.2L DOHC I4', displacement: 1248, cylinders: 4,
    power: 63, torque: 122, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 5.8, fh: 4.8, fx: 7.2, seats: 5,
    weight: 870, bodyStyle: 'Hatch', price: `~$${(base + 2500).toLocaleString()}`
  })
}

// ── Kia Picanto JA (2017–2026) ────────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = Math.round(14490 + (y - 2017) * 300)
  add(`Kia|Picanto|${y}|S`, {
    engine: 'G3LD 1.0L DOHC I3', displacement: 998, cylinders: 3,
    power: 49, torque: 95, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 5.2, fh: 4.2, fx: 6.6, seats: 5,
    weight: 905, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Picanto|${y}|GT-Line`, {
    engine: 'G3LC 1.0T GDi Turbo I3', displacement: 998, cylinders: 3,
    power: 74, torque: 172, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 5.6, fh: 4.6, fx: 7.0, seats: 5,
    weight: 960, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Kia Soul SK3 (2019–2024) ──────────────────────────────────────────────
for (let y = 2019; y <= 2024; y++) {
  const base = Math.round(26490 + (y - 2019) * 500)
  add(`Kia|Soul|${y}|Sport`, {
    engine: 'G4NH 2.0L MPI I4', displacement: 1999, cylinders: 4,
    power: 110, torque: 179, transmission: 'CVT',
    fuelType: 'petrol', fc: 8.2, fh: 6.6, fx: 10.4, seats: 5,
    weight: 1349, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Soul|${y}|Electric`, {
    engine: 'BLDC Motor FWD', displacement: 0, cylinders: 0,
    power: 150, torque: 395, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 452, battery: '64 kWh', seats: 5,
    weight: 1682, bodyStyle: 'Hatch', price: `~$${(base + 18000).toLocaleString()}`
  })
}

// ── Kia Optima TF (2010–2015) ─────────────────────────────────────────────
for (let y = 2010; y <= 2015; y++) {
  const base = Math.round(29490 + (y - 2010) * 500)
  add(`Kia|Optima|${y}|Si`, {
    engine: 'G4KA 2.0L DOHC I4', displacement: 1998, cylinders: 4,
    power: 120, torque: 196, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.0, fh: 7.4, fx: 11.4, seats: 5,
    weight: 1457, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Optima|${y}|SLi`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 128, torque: 231, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.6, fh: 7.8, fx: 12.2, seats: 5,
    weight: 1490, bodyStyle: 'Sedan', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Kia Optima JF (2015–2020) ─────────────────────────────────────────────
for (let y = 2015; y <= 2020; y++) {
  const base = Math.round(32490 + (y - 2015) * 500)
  add(`Kia|Optima|${y}|Si`, {
    engine: 'G4KE 2.4L GDi I4', displacement: 2359, cylinders: 4,
    power: 138, torque: 241, transmission: '6-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 5,
    weight: 1500, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Optima|${y}|GT`, {
    engine: 'G4KH 2.0T GDi Turbo I4', displacement: 1998, cylinders: 4,
    power: 177, torque: 353, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 9.4, fh: 7.8, fx: 11.8, seats: 5,
    weight: 1575, bodyStyle: 'Sedan', price: `~$${(base + 9000).toLocaleString()}`
  })
}

// ── Kia Telluride ON (2019–2026) ──────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = Math.round(55990 + (y - 2019) * 700)
  add(`Kia|Telluride|${y}|S`, {
    engine: 'G6DP 3.8L MPI V6 AWD', displacement: 3778, cylinders: 6,
    power: 216, torque: 355, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 9.8, fx: 15.4, seats: 8,
    weight: 2024, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Kia|Telluride|${y}|Sport+`, {
    engine: 'G6DP 3.8L MPI V6 AWD', displacement: 3778, cylinders: 6,
    power: 216, torque: 355, transmission: '8-speed automatic',
    fuelType: 'petrol', fc: 12.2, fh: 9.8, fx: 15.4, seats: 8,
    weight: 2055, bodyStyle: 'SUV', price: `~$${(base + 8000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
fs.writeFileSync('src/data/supplement33.json', JSON.stringify(out, null, 2))
console.log(`supplement33.json: ${count} entries`)
const byModel = {}
for (const k of Object.keys(S)) { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 }
Object.entries(byModel).sort().forEach(([m, c]) => console.log(`  ${m}: ${c}`))
