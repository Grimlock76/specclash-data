#!/usr/bin/env node
// gen40.cjs — Missing VW models: ID.3, ID.5
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
function add(k, v) { S[k] = v }

// ── VW ID.3 (2021–2023) ───────────────────────────────────────────────────
for (let y = 2021; y <= 2023; y++) {
  const base = Math.round(49990 + (y - 2021) * 1500)
  add(`Volkswagen|ID.3|${y}|Pure`, {
    engine: 'AC Motor (Rear) 110kW', displacement: 0, cylinders: 0,
    power: 110, torque: 270, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 340, battery: '45 kWh', seats: 5,
    weight: 1719, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|ID.3|${y}|Pro`, {
    engine: 'AC Motor (Rear) 150kW', displacement: 0, cylinders: 0,
    power: 150, torque: 310, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 420, battery: '58 kWh', seats: 5,
    weight: 1752, bodyStyle: 'Hatch', price: `~$${(base + 10000).toLocaleString()}`
  })
  add(`Volkswagen|ID.3|${y}|Pro S`, {
    engine: 'AC Motor (Rear) 150kW', displacement: 0, cylinders: 0,
    power: 150, torque: 310, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 550, battery: '77 kWh', seats: 5,
    weight: 1813, bodyStyle: 'Hatch', price: `~$${(base + 20000).toLocaleString()}`
  })
}

// ── VW ID.3 Facelift (2024–2026) ─────────────────────────────────────────
for (let y = 2024; y <= 2026; y++) {
  const base = Math.round(54990 + (y - 2024) * 1500)
  add(`Volkswagen|ID.3|${y}|Pro`, {
    engine: 'AC Motor (Rear) 150kW', displacement: 0, cylinders: 0,
    power: 150, torque: 310, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 420, battery: '58 kWh', seats: 5,
    weight: 1752, bodyStyle: 'Hatch', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|ID.3|${y}|Pro S`, {
    engine: 'AC Motor (Rear) 210kW — GTX variant', displacement: 0, cylinders: 0,
    power: 210, torque: 400, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 555, battery: '77 kWh', seats: 5,
    weight: 1813, bodyStyle: 'Hatch', price: `~$${(base + 17000).toLocaleString()}`
  })
}

// ── VW ID.5 (2022–2026) ───────────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = Math.round(74990 + (y - 2022) * 1500)
  add(`Volkswagen|ID.5|${y}|Pro`, {
    engine: 'AC Motor (Rear) 150kW', displacement: 0, cylinders: 0,
    power: 150, torque: 310, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 520, battery: '77 kWh', seats: 5,
    weight: 2148, bodyStyle: 'SUV', price: `~$${base.toLocaleString()}`
  })
  add(`Volkswagen|ID.5|${y}|GTX`, {
    engine: 'Dual AC Motors AWD — 220kW combined', displacement: 0, cylinders: 0,
    power: 220, torque: 460, transmission: 'Single-speed reduction gear',
    fuelType: 'electric', fc: null, fh: null, fx: null,
    range: 490, battery: '77 kWh', seats: 5,
    weight: 2221, bodyStyle: 'SUV', price: `~$${(base + 14000).toLocaleString()}`
  })
}

const total = Object.keys(S).length
const makes = [...new Set(Object.keys(S).map(k => k.split('|')[0]))]
console.log(`gen40: ${total} entries, makes: ${makes.join(', ')}`)
fs.writeFileSync('src/data/supplement40.json', JSON.stringify(out, null, 2))
console.log('Written supplement40.json')
