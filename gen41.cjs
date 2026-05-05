#!/usr/bin/env node
// gen41.cjs — All hybrid/PHEV models missing from the dataset
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
const add = (k, v) => { S[k] = v }

// ─── Toyota Camry Hybrid ──────────────────────────────────────────────────────
// 2012-2017: hybrid coexisted with petrol; 2018+ AU Camry is hybrid-only
// (2018+ petrol trims already exist; adding explicit Hybrid trims for 2012-2017)
for (let y = 2012; y <= 2017; y++) {
  const pr = y <= 2014 ? `~$${34990 + (y-2012)*500}` : `~$${36490 + (y-2015)*800}`
  add(`Toyota|Camry|${y}|Altise Hybrid`, {
    engine: '2AR-FXE 2.5L Atkinson I4 + Electric', displacement: 2494, cylinders: 4,
    power: 118, torque: 213, transmission: 'CVT (e-CVT)',
    fuelType: 'hybrid', fc: 5.2, fh: 4.8, fx: 5.0,
    seats: 5, weight: 1560, bodyStyle: 'Sedan', price: pr
  })
  add(`Toyota|Camry|${y}|Atara SL Hybrid`, {
    engine: '2AR-FXE 2.5L Atkinson I4 + Electric', displacement: 2494, cylinders: 4,
    power: 118, torque: 213, transmission: 'CVT (e-CVT)',
    fuelType: 'hybrid', fc: 4.9, fh: 4.5, fx: 4.7,
    seats: 5, weight: 1575, bodyStyle: 'Sedan', price: `~$${parseInt(pr.replace(/[^0-9]/g,''))+4000}`
  })
}
// 2018+ Camry hybrid specs for the existing petrol trim names
for (let y = 2018; y <= 2026; y++) {
  const base = 38000 + (y - 2018) * 700
  const trims = [
    ['Ascent',       100, 202, 5.4, 4.7, 5.1, 1595, base],
    ['Ascent Sport', 118, 202, 5.2, 4.5, 4.9, 1605, base + 3500],
    ['SX',           118, 202, 5.2, 4.5, 4.9, 1615, base + 8000],
    ['SXL',          118, 202, 5.2, 4.5, 4.9, 1625, base + 14000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Toyota|Camry|${y}|${trim} Hybrid`, {
      engine: '2AR-FXE 2.5L Atkinson I4 + Electric', displacement: 2494, cylinders: 4,
      power: pw, torque: tq, transmission: 'CVT (e-CVT)',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 5, weight: wt, bodyStyle: 'Sedan', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Toyota Corolla Hybrid ────────────────────────────────────────────────────
// 2019-2021: 1.8L hybrid; 2022+: 2.0L hybrid
for (let y = 2019; y <= 2026; y++) {
  const is2L = y >= 2022
  const eng = is2L ? 'M20A-FXS 2.0L Atkinson I4 + Electric' : '2ZR-FXE 1.8L Atkinson I4 + Electric'
  const disp = is2L ? 1987 : 1798
  const pw = is2L ? 112 : 90
  const tq = is2L ? 190 : 163
  const base = 29000 + (y - 2019) * 800
  const trims = [
    ['Ascent Sport Hybrid', 7.9, 5.2, 6.6, 1370],
    ['ZR Hybrid',           7.9, 5.2, 6.6, 1370],
  ]
  for (const [trim, fc, fh, fx, wt] of trims) {
    const pr = trim.startsWith('ZR') ? base + 5000 : base
    add(`Toyota|Corolla|${y}|${trim}`, {
      engine: eng, displacement: disp, cylinders: 4,
      power: pw, torque: tq, transmission: 'CVT (e-CVT)',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 5, weight: wt, bodyStyle: 'Hatch', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Toyota RAV4 Hybrid ───────────────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = 43000 + (y - 2019) * 900
  const trims = [
    ['GX Hybrid',      163, null, 5.8, 6.5, 6.2, 1865, 'AWD', base],
    ['GXL Hybrid',     163, null, 5.8, 6.5, 6.2, 1875, 'AWD', base + 5000],
    ['Cruiser Hybrid', 163, null, 5.8, 6.5, 6.2, 1890, 'AWD', base + 12000],
    ['Edge Hybrid',    163, null, 5.8, 6.5, 6.2, 1895, 'AWD', base + 20000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, dr, pr] of trims) {
    add(`Toyota|RAV4|${y}|${trim}`, {
      engine: 'A25A-FXS 2.5L Atkinson I4 + E-Four AWD', displacement: 2487, cylinders: 4,
      power: pw, torque: tq, transmission: 'CVT (e-CVT)',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 5, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}
// RAV4 PHEV (2021+)
for (let y = 2021; y <= 2026; y++) {
  const base = 59000 + (y - 2021) * 1000
  const trims = [
    ['GX PHEV',      225, null, 2.0, null, null, 1985, base],
    ['GXL PHEV',     225, null, 2.0, null, null, 1995, base + 5000],
    ['Cruiser PHEV', 225, null, 2.0, null, null, 2010, base + 11000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Toyota|RAV4|${y}|${trim}`, {
      engine: 'A25A-FXS 2.5L Atkinson I4 + PHEV E-Four AWD', displacement: 2487, cylinders: 4,
      power: pw, torque: tq, transmission: 'CVT (e-CVT)',
      fuelType: 'plug-in hybrid', fc, fh: fh, fx: fx,
      range: 95, battery: '18.1 kWh',
      seats: 5, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Toyota Kluger Hybrid ─────────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 55000 + (y - 2021) * 900
  const trims = [
    ['GX Hybrid',      183, null, 6.0, 7.1, 6.5, 1990, base],
    ['GXL Hybrid',     183, null, 6.0, 7.1, 6.5, 2005, base + 5000],
    ['Grande Hybrid',  183, null, 6.0, 7.1, 6.5, 2020, base + 12000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Toyota|Kluger|${y}|${trim}`, {
      engine: 'A25A-FXS 2.5L Atkinson I4 + E-Four AWD', displacement: 2487, cylinders: 4,
      power: pw, torque: tq, transmission: 'CVT (e-CVT)',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Mazda CX-60 PHEV ────────────────────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = 69990 + (y - 2023) * 1200
  const trims = [
    ['GT',     241, 500, 1.8, null, null, 1945, base],
    ['GT SP',  241, 500, 1.8, null, null, 1955, base + 10000],
    ['Azami',  241, 500, 1.8, null, null, 1960, base + 18000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Mazda|CX-60|${y}|${trim}`, {
      engine: 'PE-VPS 2.5L SkyActiv-G + PHEV AWD', displacement: 2488, cylinders: 4,
      power: pw, torque: tq, transmission: '8-speed automatic',
      fuelType: 'plug-in hybrid', fc, fh, fx,
      range: 63, battery: '17.8 kWh',
      seats: 5, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Mazda CX-90 PHEV ────────────────────────────────────────────────────────
for (let y = 2024; y <= 2026; y++) {
  const base = 79990 + (y - 2024) * 1500
  const trims = [
    ['GT',     241, 500, 2.0, null, null, 2090, base],
    ['GT SP',  241, 500, 2.0, null, null, 2105, base + 10000],
    ['Azami',  241, 500, 2.0, null, null, 2110, base + 18000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Mazda|CX-90|${y}|${trim}`, {
      engine: 'PE-VPS 2.5L SkyActiv-G + PHEV AWD', displacement: 2488, cylinders: 4,
      power: pw, torque: tq, transmission: '8-speed automatic',
      fuelType: 'plug-in hybrid', fc, fh, fx,
      range: 59, battery: '17.8 kWh',
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Mazda MX-30 R-EV ────────────────────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = 62990 + (y - 2023) * 1200
  add(`Mazda|MX-30|${y}|R-EV`, {
    engine: '1.0L Rotary Generator + Electric Motor', displacement: 830, cylinders: 1,
    power: 125, torque: 260, transmission: 'Single-speed reduction gear',
    fuelType: 'plug-in hybrid', fc: 1.0, fh: null, fx: null,
    range: 85, battery: '17.8 kWh',
    seats: 4, weight: 1840, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Nissan Qashqai e-Power ───────────────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = 42990 + (y - 2023) * 1000
  const trims = [
    ['ST e-Power',   140, 330, 5.8, 5.2, 5.5, 1565, base],
    ['ST-L e-Power', 140, 330, 5.8, 5.2, 5.5, 1580, base + 6000],
    ['Ti e-Power',   140, 330, 5.8, 5.2, 5.5, 1595, base + 14000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Nissan|Qashqai|${y}|${trim}`, {
      engine: 'KR15DDT 1.5L Turbo (generator) + Electric', displacement: 1498, cylinders: 3,
      power: pw, torque: tq, transmission: 'Single-speed reduction gear',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 5, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Nissan X-Trail e-Power ───────────────────────────────────────────────────
for (let y = 2023; y <= 2026; y++) {
  const base = 47990 + (y - 2023) * 1000
  const trims = [
    ['ST e-Power',         157, 330, 6.4, 5.8, 6.1, 1701, base],
    ['ST-L e-Power',       157, 330, 6.4, 5.8, 6.1, 1716, base + 6000],
    ['Ti e-Power',         157, 330, 6.4, 5.8, 6.1, 1731, base + 13000],
    ['Ti-L e-4ORCE',       225, 460, 6.9, 6.3, 6.6, 1825, base + 20000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Nissan|X-Trail|${y}|${trim}`, {
      engine: trim.includes('e-4ORCE')
        ? 'KR15DDT 1.5T (gen) + Dual Electric AWD e-4ORCE'
        : 'KR15DDT 1.5L Turbo (generator) + Electric FWD',
      displacement: 1498, cylinders: 3,
      power: pw, torque: tq, transmission: 'Single-speed reduction gear',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Hyundai Tucson Hybrid ────────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 44500 + (y - 2021) * 900
  add(`Hyundai|Tucson|${y}|Elite Hybrid`, {
    engine: 'T-GDi 1.6L Turbo + 44.2 kW Motor AWD', displacement: 1598, cylinders: 4,
    power: 169, torque: 265, transmission: '6-speed automatic',
    fuelType: 'hybrid', fc: 6.3, fh: 5.8, fx: 6.0,
    seats: 5, weight: 1711, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Highlander Hybrid`, {
    engine: 'T-GDi 1.6L Turbo + 44.2 kW Motor AWD', displacement: 1598, cylinders: 4,
    power: 169, torque: 265, transmission: '6-speed automatic',
    fuelType: 'hybrid', fc: 6.3, fh: 5.8, fx: 6.0,
    seats: 5, weight: 1725, bodyStyle: 'SUV', price: `~$${Math.round(base + 7000).toLocaleString()}`
  })
}
// Tucson PHEV
for (let y = 2021; y <= 2026; y++) {
  const base = 52000 + (y - 2021) * 900
  add(`Hyundai|Tucson|${y}|Elite PHEV`, {
    engine: 'T-GDi 1.6L Turbo + 66.9 kW Motor PHEV AWD', displacement: 1598, cylinders: 4,
    power: 195, torque: 350, transmission: '6-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.6, fh: null, fx: null,
    range: 62, battery: '13.8 kWh',
    seats: 5, weight: 1852, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
  add(`Hyundai|Tucson|${y}|Highlander PHEV`, {
    engine: 'T-GDi 1.6L Turbo + 66.9 kW Motor PHEV AWD', displacement: 1598, cylinders: 4,
    power: 195, torque: 350, transmission: '6-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.6, fh: null, fx: null,
    range: 62, battery: '13.8 kWh',
    seats: 5, weight: 1865, bodyStyle: 'SUV', price: `~$${Math.round(base + 7000).toLocaleString()}`
  })
}

// ─── Hyundai Santa Fe Hybrid ──────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 57000 + (y - 2021) * 1000
  for (const [trim, wt, pr] of [['Elite Hybrid', 1830, base], ['Calligraphy Hybrid', 1840, base + 9000]]) {
    add(`Hyundai|Santa Fe|${y}|${trim}`, {
      engine: 'T-GDi 1.6L Turbo + 44.2 kW Motor AWD', displacement: 1598, cylinders: 4,
      power: 169, torque: 265, transmission: '6-speed automatic',
      fuelType: 'hybrid', fc: 7.0, fh: 6.3, fx: 6.6,
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}
// Santa Fe PHEV
for (let y = 2022; y <= 2026; y++) {
  const base = 66000 + (y - 2022) * 1000
  for (const [trim, wt, pr] of [['Elite PHEV', 1970, base], ['Calligraphy PHEV', 1985, base + 9000]]) {
    add(`Hyundai|Santa Fe|${y}|${trim}`, {
      engine: 'T-GDi 1.6L Turbo + 66.9 kW Motor PHEV AWD', displacement: 1598, cylinders: 4,
      power: 195, torque: 350, transmission: '6-speed automatic',
      fuelType: 'plug-in hybrid', fc: 1.7, fh: null, fx: null,
      range: 52, battery: '13.8 kWh',
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}

// ─── Hyundai Sonata Hybrid ────────────────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = 42000 + (y - 2020) * 800
  add(`Hyundai|Sonata|${y}|Hybrid`, {
    engine: 'Nu 2.0L MPI + 38 kW Motor', displacement: 1999, cylinders: 4,
    power: 135, torque: 189, transmission: '6-speed automatic',
    fuelType: 'hybrid', fc: 5.0, fh: 4.6, fx: 4.8,
    seats: 5, weight: 1615, bodyStyle: 'Sedan', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Hyundai Kona Hybrid ──────────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 33500 + (y - 2021) * 700
  add(`Hyundai|Kona|${y}|Hybrid`, {
    engine: 'Kappa 1.6L GDi + 32 kW Motor FWD', displacement: 1580, cylinders: 4,
    power: 104, torque: 147, transmission: '6-speed DCT',
    fuelType: 'hybrid', fc: 5.0, fh: 4.5, fx: 4.8,
    seats: 5, weight: 1463, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Kia Sportage Hybrid ──────────────────────────────────────────────────────
for (let y = 2022; y <= 2026; y++) {
  const base = 41000 + (y - 2022) * 900
  const trims = [
    ['S Hybrid',       169, 265, 6.2, 5.7, 5.9, 1593, base],
    ['SX Hybrid',      169, 265, 6.2, 5.7, 5.9, 1603, base + 5000],
    ['GT-Line Hybrid', 169, 265, 6.2, 5.7, 5.9, 1613, base + 10000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Kia|Sportage|${y}|${trim}`, {
      engine: 'Smartstream G1.6T-GDi HEV + 44 kW Motor AWD', displacement: 1598, cylinders: 4,
      power: pw, torque: tq, transmission: '6-speed automatic',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 5, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}
// Sportage PHEV
for (let y = 2022; y <= 2026; y++) {
  const base = 52000 + (y - 2022) * 900
  add(`Kia|Sportage|${y}|GT-Line PHEV`, {
    engine: 'G1.6T-GDi PHEV + 66.9 kW Motor AWD', displacement: 1598, cylinders: 4,
    power: 195, torque: 350, transmission: '6-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.6, fh: null, fx: null,
    range: 70, battery: '13.8 kWh',
    seats: 5, weight: 1765, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Kia Sorento Hybrid ───────────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 55000 + (y - 2021) * 900
  const trims = [
    ['Si Hybrid',       172, 265, 6.9, 6.3, 6.6, 1843, base],
    ['SLi Hybrid',      172, 265, 6.9, 6.3, 6.6, 1854, base + 6000],
    ['GT-Line Hybrid',  172, 265, 6.9, 6.3, 6.6, 1864, base + 12000],
  ]
  for (const [trim, pw, tq, fc, fh, fx, wt, pr] of trims) {
    add(`Kia|Sorento|${y}|${trim}`, {
      engine: 'Smartstream G1.6T-GDi HEV + 44 kW Motor AWD', displacement: 1598, cylinders: 4,
      power: pw, torque: tq, transmission: '6-speed automatic',
      fuelType: 'hybrid', fc, fh, fx,
      seats: 7, weight: wt, bodyStyle: 'SUV', price: `~$${Math.round(pr).toLocaleString()}`
    })
  }
}
// Sorento PHEV
for (let y = 2021; y <= 2026; y++) {
  const base = 65000 + (y - 2021) * 900
  add(`Kia|Sorento|${y}|GT-Line PHEV`, {
    engine: 'G1.6T-GDi PHEV + 66.9 kW Motor AWD', displacement: 1598, cylinders: 4,
    power: 195, torque: 350, transmission: '6-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.7, fh: null, fx: null,
    range: 67, battery: '13.8 kWh',
    seats: 7, weight: 1995, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Volkswagen Golf GTE ──────────────────────────────────────────────────────
for (let y = 2021; y <= 2026; y++) {
  const base = 54990 + (y - 2021) * 1000
  add(`Volkswagen|Golf|${y}|GTE`, {
    engine: 'EA211 1.4L TSI PHEV + 80 kW Motor', displacement: 1395, cylinders: 4,
    power: 180, torque: 350, transmission: '6-speed DSG',
    fuelType: 'plug-in hybrid', fc: 1.5, fh: null, fx: null,
    range: 66, battery: '13 kWh',
    seats: 5, weight: 1622, bodyStyle: 'Hatch', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Volkswagen Passat GTE ────────────────────────────────────────────────────
for (let y = 2020; y <= 2023; y++) {
  const base = 59990 + (y - 2020) * 800
  add(`Volkswagen|Passat|${y}|GTE`, {
    engine: 'EA211 1.4L TSI PHEV + 85 kW Motor', displacement: 1395, cylinders: 4,
    power: 160, torque: 400, transmission: '6-speed DSG',
    fuelType: 'plug-in hybrid', fc: 1.7, fh: null, fx: null,
    range: 55, battery: '13 kWh',
    seats: 5, weight: 1720, bodyStyle: 'Sedan', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── BMW 330e PHEV ────────────────────────────────────────────────────────────
for (let y = 2019; y <= 2026; y++) {
  const base = 79900 + (y - 2019) * 1200
  add(`BMW|3 Series|${y}|330e`, {
    engine: 'B46 2.0L TwinPower Turbo + 80 kW Motor', displacement: 1998, cylinders: 4,
    power: 215, torque: 420, transmission: '8-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.8, fh: null, fx: null,
    range: 60, battery: '12 kWh',
    seats: 5, weight: 1760, bodyStyle: 'Sedan', price: `~$${Math.round(base).toLocaleString()}`
  })
  add(`BMW|3 Series|${y}|330e xDrive`, {
    engine: 'B46 2.0L TwinPower Turbo + 80 kW Motor AWD', displacement: 1998, cylinders: 4,
    power: 215, torque: 420, transmission: '8-speed automatic',
    fuelType: 'plug-in hybrid', fc: 1.9, fh: null, fx: null,
    range: 58, battery: '12 kWh',
    seats: 5, weight: 1810, bodyStyle: 'Sedan', price: `~$${Math.round(base + 4000).toLocaleString()}`
  })
}

// ─── BMW 530e PHEV ────────────────────────────────────────────────────────────
for (let y = 2017; y <= 2026; y++) {
  const base = 109900 + (y - 2017) * 1200
  add(`BMW|5 Series|${y}|530e`, {
    engine: 'B48 2.0L TwinPower Turbo + 83 kW Motor', displacement: 1998, cylinders: 4,
    power: 185, torque: 420, transmission: '8-speed automatic',
    fuelType: 'plug-in hybrid', fc: 2.0, fh: null, fx: null,
    range: 50, battery: '12 kWh',
    seats: 5, weight: 1880, bodyStyle: 'Sedan', price: `~$${Math.round(base).toLocaleString()}`
  })
  add(`BMW|5 Series|${y}|545e xDrive`, {
    engine: 'B58 3.0L + 80 kW Motor AWD', displacement: 2998, cylinders: 6,
    power: 290, torque: 600, transmission: '8-speed automatic',
    fuelType: 'plug-in hybrid', fc: 2.5, fh: null, fx: null,
    range: 54, battery: '12 kWh',
    seats: 5, weight: 1990, bodyStyle: 'Sedan', price: `~$${Math.round(base + 35000).toLocaleString()}`
  })
}

// ─── BMW X5 45e PHEV ──────────────────────────────────────────────────────────
for (let y = 2020; y <= 2026; y++) {
  const base = 139900 + (y - 2020) * 1500
  add(`BMW|X5|${y}|xDrive45e`, {
    engine: 'B58 3.0L TwinPower Turbo + 83 kW Motor AWD', displacement: 2998, cylinders: 6,
    power: 290, torque: 600, transmission: '8-speed automatic',
    fuelType: 'plug-in hybrid', fc: 2.8, fh: null, fx: null,
    range: 87, battery: '24.5 kWh',
    seats: 5, weight: 2390, bodyStyle: 'SUV', price: `~$${Math.round(base).toLocaleString()}`
  })
}

// ─── Summary ──────────────────────────────────────────────────────────────────
const total = Object.keys(S).length
const byMake = {}
for (const k of Object.keys(S)) {
  const make = k.split('|')[0]
  byMake[make] = (byMake[make] || 0) + 1
}
console.log(`gen41: ${total} entries`)
for (const [m, c] of Object.entries(byMake)) console.log('  ', m, ':', c)
fs.writeFileSync('src/data/supplement41.json', JSON.stringify(out, null, 2))
console.log('Written supplement41.json')
