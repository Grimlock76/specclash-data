// Towing / payload / fuel tank / ground clearance for 2026 4x4s & utes.
// Historical one-off: several of these trims were later rebuilt in full by
// gen249–gen253, so missing keys are skipped rather than fatal.
// Every figure from the Carsales variant spec page (Redbook data), Oct 2026.
// Left out where Carsales doesn't list it, or where its own numbers disagree
// (LC300 GR Sport payload: listed 800 kg but GVM 3,280 − kerb 2,620 = 660).
const fs = require('fs')
const path = require('path')
const T = (towing, payload, fuelTank, groundClearance) => ({ towing, payload, fuelTank, groundClearance })
const PATCH = {
  supplement246: {
    'Toyota|LandCruiser 300|2026|GX': T(3500, 800, 110, 245),
    'Toyota|LandCruiser 300|2026|GXL': T(3500, 735, 110, 245),
    'Toyota|LandCruiser 300|2026|VX': T(3500, 660, 110, 245),
    'Toyota|LandCruiser 300|2026|Sahara': T(3500, 660, 110, 245),
    'Toyota|LandCruiser 300|2026|GR Sport': T(3500, null, 110, 245),
    'Toyota|LandCruiser 300|2026|Sahara ZX': T(3500, 680, 110, 245),
    'Toyota|LandCruiser 300|2026|Performance Hybrid Sahara ZX': T(3500, null, 98, 231),
    'Toyota|LandCruiser 300|2026|Performance Hybrid GR Sport': T(3500, null, 98, 231),
  },
  supplement245: {
    'Nissan|Patrol|2026|Ti': T(3500, 714, 140, 272),
    'Nissan|Patrol|2026|Ti-L': T(3500, 653, 140, 272),
    'Nissan|Patrol|2026|Warrior': T(3500, 736, 140, 323),
    'Nissan|Patrol|2026|Y63 Ti+': T(3700, null, null, null),
    'Nissan|Patrol|2026|Y63 Ti-L+': T(3700, null, null, null),
    'Nissan|Patrol|2026|Y63 PRO-4X': T(3700, null, null, null),
    'Nissan|Patrol|2026|Y63 Ti-L Reserve': T(3700, null, null, null),
  },
  supplement248: {
    'Toyota|HiLux|2026|Workmate': T(3500, 960, 80, 224),
    'Toyota|HiLux|2026|SR 4x2': T(2900, 935, 80, 224),
    'Toyota|HiLux|2026|SR 48V': T(3500, 965, 80, 224),
    'Toyota|HiLux|2026|SR5': T(3500, 970, 80, 224),
    'Toyota|HiLux|2026|SR5 48V': T(3500, 965, 80, 224),
    'Toyota|HiLux|2026|Rugged X 48V': T(3500, 793, 80, 224),
    'Toyota|HiLux|2026|Rogue 48V': T(3500, 778, 80, 229),
    'Toyota|HiLux|2026|SR BEV': T(2000, 725, null, null),
    'Toyota|HiLux|2026|SR5 BEV': T(2000, 715, null, null),
  },
}
for (const [file, rows] of Object.entries(PATCH)) {
  const p = path.join(__dirname, '../src/data', file + '.json')
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw)
  for (const [key, vals] of Object.entries(rows)) {
    const s = data.specs[key]
    if (!s) { console.warn('skip (since replaced by a newer lineup):', key); continue }
    for (const [k, v] of Object.entries(vals)) if (v != null) s[k] = v
  }
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + (raw.endsWith('\n') ? '\n' : ''))
  console.log(file, Object.keys(rows).length)
}

// ── Round 2: other 2026 utes/4x4s. Payload only where Carsales' shown variant
// matches our trim's engine/drive; towing/tank/clearance where they're common to the badge.
const R2 = {
  supplement150: {
    'Ford|Ranger|2026|P703 XL': T(3500, null, 80, null),
    'Ford|Ranger|2026|P703 XLT': T(3500, null, 80, null),
    'Ford|Ranger|2026|P703 Wildtrak': T(3500, null, 80, null),
    'Ford|Ranger|2026|P703 Raptor': T(2500, null, 80, 272),
  },
  supplement240: { 'Ford|Ranger|2026|P703 PHEV XLT': T(3500, 830, 70, 215) },
  supplement151: {
    'Ford|Everest|2026|Ambiente': T(3500, 731, 80, 226),
    'Ford|Everest|2026|Trend': T(3500, 717, 80, 226),
    'Ford|Everest|2026|Sport': T(3500, null, 80, 226),
  },
  supplement146: { 'Ford|Everest|2026|Platinum': T(3500, 638, 80, 226) },
  supplement242: { 'Ford|Everest|2026|UB Tremor': T(3500, 690, 80, 255) },
  supplement61: { 'BYD|Shark|2026|Premium': T(2500, 790, 60, 230) },
  supplement131: {
    'Kia|Tasman|2026|S': T(3500, null, 80, 206),
    'Kia|Tasman|2026|SX+': T(3500, 917, 80, 206),
  },
  supplement145: { 'Mitsubishi|Triton|2026|GLX+': T(3500, null, 75, 228) },
}
// Old-format entries store display strings
const kg = n => n.toLocaleString('en-AU') + ' kg'
const OLD = {
  supplement28: {
    'Mitsubishi|Triton|2026|GLS': { tw: kg(3500), tk: '75 L', gc: '228 mm' },
    'Mitsubishi|Triton|2026|GSR': { tw: kg(3500), tk: '75 L', gc: '228 mm' },
  },
}
function apply(file, rows) {
  const p = path.join(__dirname, '../src/data', file + '.json')
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw)
  for (const [key, vals] of Object.entries(rows)) {
    const s = data.specs[key]
    if (!s) { console.warn('skip (since replaced by a newer lineup):', key); continue }
    for (const [k, v] of Object.entries(vals)) if (v != null) s[k] = v
  }
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + (raw.endsWith('\n') ? '\n' : ''))
  console.log(file, Object.keys(rows).length)
}
for (const [f, rows] of Object.entries({ ...R2, ...OLD })) apply(f, rows)
