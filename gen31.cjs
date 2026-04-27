#!/usr/bin/env node
const fs = require('fs')
const out = { specs: {} }
const S = out.specs

function add(key, spec) { S[key] = spec }

// ── Mitsubishi Pajero Sport QF (2016–2026) ────────────────────────────────
const pjSportBase = {
  engine: '4N15 2.4L DOHC MIVEC Diesel I4', displacement: 2442, cylinders: 4,
  power: 133, torque: 430, fuelType: 'diesel', fc: 8.2, fh: 7.0, fx: 9.8,
  seats: 7, weight: 1930, bodyStyle: 'SUV'
}
for (let y = 2016; y <= 2019; y++) {
  const base = Math.round(39990 + (y - 2016) * 800)
  add(`Mitsubishi|Pajero Sport|${y}|GLX`, {
    ...pjSportBase, transmission: '6-speed manual',
    price: `~$${base.toLocaleString()}`
  })
  add(`Mitsubishi|Pajero Sport|${y}|GLS`, {
    ...pjSportBase, transmission: '8-speed automatic', weight: 1960,
    price: `~$${(base + 11000).toLocaleString()}`
  })
  add(`Mitsubishi|Pajero Sport|${y}|Exceed`, {
    ...pjSportBase, transmission: '8-speed automatic', weight: 1980,
    price: `~$${(base + 20000).toLocaleString()}`
  })
}
for (let y = 2020; y <= 2026; y++) {
  const base = Math.round(43990 + (y - 2020) * 1000)
  add(`Mitsubishi|Pajero Sport|${y}|GLX`, {
    ...pjSportBase, transmission: '6-speed manual',
    price: `~$${base.toLocaleString()}`
  })
  add(`Mitsubishi|Pajero Sport|${y}|GLX+`, {
    ...pjSportBase, transmission: '8-speed automatic',
    price: `~$${(base + 3000).toLocaleString()}`
  })
  add(`Mitsubishi|Pajero Sport|${y}|GLS`, {
    ...pjSportBase, transmission: '8-speed automatic', weight: 1960,
    price: `~$${(base + 9000).toLocaleString()}`
  })
  add(`Mitsubishi|Pajero Sport|${y}|Exceed`, {
    ...pjSportBase, transmission: '8-speed automatic', weight: 1980,
    price: `~$${(base + 19000).toLocaleString()}`
  })
}

// ── Mitsubishi Lancer Ralliart CJ (2008–2015) ────────────────────────────
for (let y = 2008; y <= 2015; y++) {
  const base = Math.round(39990 + (y - 2008) * 600)
  add(`Mitsubishi|Lancer|${y}|Ralliart`, {
    engine: '4B11 2.0L DOHC MIVEC Turbo I4', displacement: 1998, cylinders: 4,
    power: 179, torque: 343, transmission: 'TC-SST 6-speed DCT',
    fuelType: 'petrol', fc: 10.0, fh: 8.4, fx: 12.6, seats: 5,
    weight: 1465, bodyStyle: 'Sedan', price: `~$${base.toLocaleString()}`
  })
}

// ── Mitsubishi Lancer Sportback CJ (2008–2016) ───────────────────────────
for (let y = 2008; y <= 2016; y++) {
  const base = Math.round(25990 + (y - 2008) * 600)
  add(`Mitsubishi|Lancer|${y}|VRX Sportback`, {
    engine: '4B11 2.0L DOHC MIVEC I4', displacement: 1998, cylinders: 4,
    power: 113, torque: 197, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.8, fh: 7.2, fx: 11.4, seats: 5,
    weight: 1360, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  if (y >= 2010) {
    add(`Mitsubishi|Lancer|${y}|ES Sportback`, {
      engine: '4A91 1.5L DOHC MIVEC I4', displacement: 1468, cylinders: 4,
      power: 80, torque: 136, transmission: 'CVT',
      fuelType: 'petrol', fc: 7.2, fh: 5.9, fx: 9.2, seats: 5,
      weight: 1260, bodyStyle: 'Hatch', price: `~$${(base - 5000).toLocaleString()}`
    })
  }
}

// ── Mitsubishi Colt Z30 (2004–2012) ─────────────────────────────────────
for (let y = 2004; y <= 2012; y++) {
  const base = Math.round(17990 + (y - 2004) * 600)
  add(`Mitsubishi|Colt|${y}|1.5`, {
    engine: '4A91 1.5L DOHC MIVEC I4', displacement: 1468, cylinders: 4,
    power: 80, torque: 136, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 6.8, fh: 5.5, fx: 8.8, seats: 5,
    weight: 1050, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Mitsubishi|Colt|${y}|CZT`, {
    engine: '4G15T 1.5L SOHC Turbo I4', displacement: 1468, cylinders: 4,
    power: 100, torque: 177, transmission: '5-speed manual',
    fuelType: 'petrol', fc: 8.2, fh: 6.8, fx: 10.4, seats: 5,
    weight: 1060, bodyStyle: 'Hatch', price: `~$${(base + 4000).toLocaleString()}`
  })
}

// ── Mitsubishi Grandis BA (2004–2011) ────────────────────────────────────
for (let y = 2004; y <= 2011; y++) {
  const base = Math.round(29990 + (y - 2004) * 900)
  add(`Mitsubishi|Grandis|${y}|Grandis`, {
    engine: '4G69 2.4L SOHC MIVEC I4', displacement: 2378, cylinders: 4,
    power: 116, torque: 218, transmission: 'Invecs-II 4-speed automatic',
    fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 7,
    weight: 1680, bodyStyle: 'Van', price: `~$${base.toLocaleString()}`
  })
  if (y >= 2006) {
    add(`Mitsubishi|Grandis|${y}|VR-X`, {
      engine: '4G69 2.4L SOHC MIVEC I4', displacement: 2378, cylinders: 4,
      power: 116, torque: 218, transmission: 'Invecs-II 4-speed automatic',
      fuelType: 'petrol', fc: 9.8, fh: 8.0, fx: 12.4, seats: 7,
      weight: 1690, bodyStyle: 'Van', price: `~$${(base + 5000).toLocaleString()}`
    })
  }
}

const count = Object.keys(S).length
fs.writeFileSync('src/data/supplement31.json', JSON.stringify(out, null, 2))
console.log(`supplement31.json: ${count} entries`)
const byModel = {}
for (const k of Object.keys(S)) {
  const parts = k.split('|')
  const model = parts[1]
  byModel[model] = (byModel[model] || 0) + 1
}
Object.entries(byModel).sort().forEach(([m, c]) => console.log(`  ${m}: ${c}`))
