#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs

function add(key, spec) { S[key] = spec }

// ── Nissan Silvia S12 (1983–1988) ─────────────────────────────────────────
for (let y = 1983; y <= 1988; y++) {
  const base = Math.round(14500 + (y - 1983) * 600)
  add(`Nissan|Silvia|${y}|Turbo`, {
    engine: 'CA18ET 1.8L SOHC Turbo I4', displacement: 1809, cylinders: 4,
    power: 98, torque: 196, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 10.2, fh: 8.4, fx: 13.0, seats: 4,
    weight: 1060, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Silvia|${y}|ZX`, {
    engine: 'CA18E 1.8L SOHC I4', displacement: 1809, cylinders: 4,
    power: 78, torque: 143, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.6, fh: 7.8, fx: 12.2, seats: 4,
    weight: 1040, bodyStyle: 'Coupe', price: `~$${(base - 2000).toLocaleString()}`
  })
}

// ── Nissan Silvia S13 (1989–1993) ─────────────────────────────────────────
for (let y = 1989; y <= 1993; y++) {
  const base = Math.round(22000 + (y - 1989) * 1500)
  add(`Nissan|Silvia|${y}|Q's`, {
    engine: 'CA18DE 1.8L DOHC I4', displacement: 1809, cylinders: 4,
    power: 102, torque: 165, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.4, fh: 7.6, fx: 11.8, seats: 4,
    weight: 1090, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}

// ── Nissan Silvia S14 (1993–1998) ─────────────────────────────────────────
for (let y = 1993; y <= 1998; y++) {
  const base = Math.round(33500 + (y - 1993) * 1200)
  add(`Nissan|Silvia|${y}|Q's`, {
    engine: 'SR20DE 2.0L DOHC I4', displacement: 1998, cylinders: 4,
    power: 118, torque: 178, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 4,
    weight: 1150, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Silvia|${y}|K's`, {
    engine: 'SR20DET 2.0L DOHC Turbo I4', displacement: 1998, cylinders: 4,
    power: 147, torque: 245, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.0, fh: 9.0, fx: 13.8, seats: 4,
    weight: 1185, bodyStyle: 'Coupe', price: `~$${(base + 6000).toLocaleString()}`
  })
}

// ── Nissan Silvia S15 (1999–2002) ─────────────────────────────────────────
for (let y = 1999; y <= 2002; y++) {
  const base = Math.round(40000 + (y - 1999) * 800)
  add(`Nissan|Silvia|${y}|Spec-S`, {
    engine: 'SR20DE 2.0L DOHC I4', displacement: 1998, cylinders: 4,
    power: 118, torque: 187, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 9.6, fh: 8.0, fx: 12.2, seats: 4,
    weight: 1170, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Silvia|${y}|Spec-R`, {
    engine: 'SR20DET 2.0L DOHC Turbo I4', displacement: 1998, cylinders: 4,
    power: 165, torque: 265, transmission: '6-speed manual',
    fuelType: 'petrol', fc: 11.4, fh: 9.4, fx: 14.4, seats: 4,
    weight: 1200, bodyStyle: 'Coupe', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Nissan 200SX S13 (1989–1993) ──────────────────────────────────────────
for (let y = 1989; y <= 1993; y++) {
  const base = Math.round(27000 + (y - 1989) * 1200)
  add(`Nissan|200SX|${y}|Turbo`, {
    engine: 'CA18DET 1.8L DOHC Turbo I4', displacement: 1809, cylinders: 4,
    power: 131, torque: 216, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.0, fh: 9.0, fx: 13.8, seats: 4,
    weight: 1100, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}

// ── Nissan 200SX S14 (1994–1998) ──────────────────────────────────────────
for (let y = 1994; y <= 1998; y++) {
  const base = Math.round(38000 + (y - 1994) * 1200)
  add(`Nissan|200SX|${y}|SR20DET`, {
    engine: 'SR20DET 2.0L DOHC Turbo I4', displacement: 1998, cylinders: 4,
    power: 147, torque: 245, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.2, fh: 9.2, fx: 14.0, seats: 4,
    weight: 1185, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}

// ── Nissan 180SX (1989–1998) ──────────────────────────────────────────────
for (let y = 1989; y <= 1990; y++) {
  const base = Math.round(28000 + (y - 1989) * 1500)
  add(`Nissan|180SX|${y}|Type X`, {
    engine: 'CA18DET 1.8L DOHC Turbo I4', displacement: 1809, cylinders: 4,
    power: 131, torque: 216, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.0, fh: 9.0, fx: 13.8, seats: 4,
    weight: 1100, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}
for (let y = 1991; y <= 1998; y++) {
  const base = Math.round(31000 + (y - 1991) * 1500)
  add(`Nissan|180SX|${y}|Type X`, {
    engine: 'SR20DET 2.0L DOHC Turbo I4', displacement: 1998, cylinders: 4,
    power: 147, torque: 245, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 11.4, fh: 9.4, fx: 14.2, seats: 4,
    weight: 1130, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|180SX|${y}|Type S`, {
    engine: 'SR20DE 2.0L DOHC I4', displacement: 1998, cylinders: 4,
    power: 118, torque: 178, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 4,
    weight: 1100, bodyStyle: 'Coupe', price: `~$${(base - 3000).toLocaleString()}`
  })
}

// ── Nissan 240Z (1969–1973) ───────────────────────────────────────────────
for (let y = 1969; y <= 1973; y++) {
  const base = Math.round(4800 + (y - 1969) * 200)
  add(`Nissan|240Z|${y}|240Z`, {
    engine: 'L24 2.4L SOHC I6', displacement: 2393, cylinders: 6,
    power: 107, torque: 190, transmission: '4-speed manual',
    fuelType: 'petrol', fc: 13.5, fh: 10.8, fx: 17.0, seats: 2,
    weight: 1000, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
}

// ── Nissan 280ZX (1978–1983) ──────────────────────────────────────────────
for (let y = 1978; y <= 1983; y++) {
  const base = Math.round(12000 + (y - 1978) * 600)
  add(`Nissan|280ZX|${y}|280ZX`, {
    engine: 'L28E 2.8L SOHC I6', displacement: 2753, cylinders: 6,
    power: 110, torque: 222, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 14.0, fh: 11.2, fx: 17.5, seats: 2,
    weight: 1200, bodyStyle: 'Coupe', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|280ZX|${y}|280ZX Turbo`, {
    engine: 'L28ET 2.8L SOHC Turbo I6', displacement: 2753, cylinders: 6,
    power: 120, torque: 254, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 15.2, fh: 12.0, fx: 18.8, seats: 2,
    weight: 1240, bodyStyle: 'Coupe', price: `~$${(base + 3000).toLocaleString()}`
  })
}

// ── Nissan Stagea WC34 (1996–2001) ───────────────────────────────────────
for (let y = 1996; y <= 2001; y++) {
  const base = Math.round(37000 + (y - 1996) * 1500)
  add(`Nissan|Stagea|${y}|25RX`, {
    engine: 'RB25DE 2.5L DOHC I6', displacement: 2498, cylinders: 6,
    power: 118, torque: 225, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 12.8, fh: 10.4, fx: 16.0, seats: 5,
    weight: 1530, bodyStyle: 'Wagon', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Stagea|${y}|25RS`, {
    engine: 'RB25DET 2.5L DOHC Turbo I6', displacement: 2498, cylinders: 6,
    power: 147, torque: 294, transmission: '4-speed automatic',
    fuelType: 'petrol', fc: 14.0, fh: 11.2, fx: 17.5, seats: 5,
    weight: 1570, bodyStyle: 'Wagon', price: `~$${(base + 5000).toLocaleString()}`
  })
}

// ── Nissan Stagea M35 (2001–2007) ────────────────────────────────────────
for (let y = 2001; y <= 2007; y++) {
  const base = Math.round(42000 + (y - 2001) * 1200)
  add(`Nissan|Stagea|${y}|25X`, {
    engine: 'VQ25DED 2.5L DOHC I6', displacement: 2499, cylinders: 6,
    power: 143, torque: 255, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 12.0, fh: 9.8, fx: 15.2, seats: 5,
    weight: 1620, bodyStyle: 'Wagon', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Stagea|${y}|250RS`, {
    engine: 'VQ30DET 3.0L DOHC Turbo V6', displacement: 2988, cylinders: 6,
    power: 206, torque: 363, transmission: '5-speed automatic',
    fuelType: 'petrol', fc: 14.5, fh: 11.8, fx: 18.0, seats: 5,
    weight: 1680, bodyStyle: 'Wagon', price: `~$${(base + 10000).toLocaleString()}`
  })
}

// ── Nissan Leaf ZE0 (2012–2015) — 24 kWh ────────────────────────────────
for (let y = 2012; y <= 2015; y++) {
  const base = Math.round(51500 - (y - 2012) * 2000)
  add(`Nissan|Leaf|${y}|ST`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 80, torque: 254, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 172, battery: '24 kWh', seats: 5,
    weight: 1476, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Leaf|${y}|ST+`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 80, torque: 254, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 172, battery: '24 kWh', seats: 5,
    weight: 1476, bodyStyle: 'Hatch', price: `~$${(base + 3500).toLocaleString()}`
  })
}

// ── Nissan Leaf ZE0 (2016–2017) — 30 kWh ────────────────────────────────
for (let y = 2016; y <= 2017; y++) {
  const base = Math.round(40990 + (y - 2016) * 1000)
  add(`Nissan|Leaf|${y}|ST`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 80, torque: 254, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 250, battery: '30 kWh', seats: 5,
    weight: 1530, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Leaf|${y}|ST+`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 80, torque: 254, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 250, battery: '30 kWh', seats: 5,
    weight: 1530, bodyStyle: 'Hatch', price: `~$${(base + 3500).toLocaleString()}`
  })
}

// ── Nissan Leaf ZE1 (2018–2026) — 40 kWh / 62 kWh ──────────────────────
for (let y = 2018; y <= 2026; y++) {
  const base = Math.round(49990 + (y - 2018) * 700)
  add(`Nissan|Leaf|${y}|ST`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 110, torque: 320, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 270, battery: '40 kWh', seats: 5,
    weight: 1558, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Leaf|${y}|ST+`, {
    engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
    power: 110, torque: 320, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 270, battery: '40 kWh', seats: 5,
    weight: 1558, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
  if (y >= 2019) {
    add(`Nissan|Leaf|${y}|e+`, {
      engine: 'EM57 AC Synchronous Motor', displacement: 0, cylinders: 0,
      power: 150, torque: 340, transmission: 'Single-speed reduction gear',
      fuelType: 'electric', fc: null, fh: null, fx: null,
      range: 385, battery: '62 kWh', seats: 5,
      weight: 1695, bodyStyle: 'Hatch', price: `~$${(base + 12000).toLocaleString()}`
    })
  }
}

// ── Nissan Kicks P15 (2020–2026) ─────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(24990 + (y - 2020) * 700)
  add(`Nissan|Kicks|${y}|ST`, {
    engine: 'HR16DE 1.6L DOHC I4', displacement: 1598, cylinders: 4,
    power: 84, torque: 155, transmission: 'CVT',
    fuelType: 'petrol', fc: 6.8, fh: 5.8, fx: 8.4, seats: 5,
    weight: 1256, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Kicks|${y}|ST-L`, {
    engine: 'HR16DE 1.6L DOHC I4', displacement: 1598, cylinders: 4,
    power: 84, torque: 155, transmission: 'CVT',
    fuelType: 'petrol', fc: 6.8, fh: 5.8, fx: 8.4, seats: 5,
    weight: 1265, bodyStyle: 'SUV', price: `~$${(base + 3000).toLocaleString()}`
  })
  add(`Nissan|Kicks|${y}|Ti`, {
    engine: 'HR16DE 1.6L DOHC I4', displacement: 1598, cylinders: 4,
    power: 84, torque: 155, transmission: 'CVT',
    fuelType: 'petrol', fc: 6.8, fh: 5.8, fx: 8.4, seats: 5,
    weight: 1270, bodyStyle: 'SUV', price: `~$${(base + 7000).toLocaleString()}`
  })
}

// ── Nissan Ariya FE0 (2022–2026) ─────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(59990 + (y - 2022) * 1500)
  add(`Nissan|Ariya|${y}|Engage`, {
    engine: 'AC Synchronous Motor FWD', displacement: 0, cylinders: 0,
    power: 160, torque: 300, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 403, battery: '66 kWh', seats: 5,
    weight: 1965, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Ariya|${y}|Engage+`, {
    engine: 'AC Synchronous Motor FWD', displacement: 0, cylinders: 0,
    power: 178, torque: 300, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 533, battery: '87 kWh', seats: 5,
    weight: 2080, bodyStyle: 'SUV', price: `~$${(base + 12000).toLocaleString()}`
  })
  add(`Nissan|Ariya|${y}|Engage+ e-4ORCE`, {
    engine: 'Dual AC Synchronous Motor AWD', displacement: 0, cylinders: 0,
    power: 290, torque: 600, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 496, battery: '87 kWh', seats: 5,
    weight: 2230, bodyStyle: 'SUV', price: `~$${(base + 22000).toLocaleString()}`
  })
}

// ── Nissan Juke F16 (2022–2026) ──────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(32990 + (y - 2022) * 800)
  add(`Nissan|Juke|${y}|ST`, {
    engine: 'HR13DDT 1.3L DOHC Turbo I4', displacement: 1332, cylinders: 4,
    power: 103, torque: 240, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.6, fh: 5.4, fx: 8.4, seats: 5,
    weight: 1269, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Nissan|Juke|${y}|ST-L`, {
    engine: 'HR13DDT 1.3L DOHC Turbo I4', displacement: 1332, cylinders: 4,
    power: 103, torque: 240, transmission: '7-speed DCT',
    fuelType: 'petrol', fc: 6.6, fh: 5.4, fx: 8.4, seats: 5,
    weight: 1272, bodyStyle: 'SUV', price: `~$${(base + 4000).toLocaleString()}`
  })
}

const count = Object.keys(S).length
fs.writeFileSync('src/data/supplement30.json', JSON.stringify(out, null, 2))
console.log(`supplement30.json: ${count} entries`)
const byModel = {}
for (const k of Object.keys(S)) {
  const parts = k.split('|')
  const model = parts[1]
  byModel[model] = (byModel[model] || 0) + 1
}
Object.entries(byModel).sort().forEach(([m, c]) => console.log(`  ${m}: ${c}`))
