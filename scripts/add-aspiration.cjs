'use strict'
const fs = require('fs')
const path = require('path')

function inferAspiration(engine, fuelType) {
  if (!engine && !fuelType) return null // old holden format — skip
  const e = String(engine || '').toLowerCase()
  const f = String(fuelType || '').toLowerCase()

  if (f === 'electric') return 'Electric'

  // Supercharged
  if (/supercharg|kompressor|\bsc\b.*v8|\bsc v|\bblower/.test(e)) return 'Supercharged'
  if (/supercharg/.test(e)) return 'Supercharged'

  // Turbo/forced induction
  if (/turbo|biturbo|twin.turbo|\btsi\b|\btdi\b|\btfsi\b|\btce\b|\bdci\b|\bcdi\b|twinpower|\btti\b|\bgtdi\b|ecoboost|ecoturbo|active8|crdi|jtdm|puretech.*turbo|1\.4t\b|2\.0t\b|t-gdi|t-gdi|kryotec|firehawk|diesel/.test(e)) return 'Turbo'
  if (f === 'diesel') return 'Turbo' // all modern diesels are turbocharged
  if (f === 'phev') {
    // PHEV: check ICE part for aspiration
    if (/turbo|biturbo|tsi|tfsi|tce|ecoboost/.test(e)) return 'Turbo'
    return 'Turbo' // most PHEVs pair with turbocharged engines
  }

  // Hybrid — check ICE part
  if (f === 'hybrid' || f === 'mild hybrid') {
    if (/turbo|biturbo|tsi|tfsi|tce/.test(e)) return 'Turbo'
    // Atkinson/naturally aspirated hybrids
    return 'NA'
  }

  // Known naturally aspirated patterns
  if (/naturally aspirated|\bna\b|atkinson|pentastar|\blt2\b|\blt1\b|\blt6\b|flat.plan|boxer|flat.6|flat.4|vvt-i(?! turbo)|inline.6 na|straight.6 na|v6 na|v8 na/.test(e)) return 'NA'
  // Subaru boxer without turbo designation = NA
  if (/boxer/.test(e) && !/turbo/.test(e)) return 'NA'
  // Toyota/Lexus 2UR, 3UR, 2GR-FE (NA V8/V6)
  if (/2ur|3ur|2gr-fe|1gr-fe|1ur|3vz|5vz/.test(e)) return 'NA'
  // Rover V8
  if (/rover v8/.test(e)) return 'NA'
  // Generic V8/V6 without turbo keyword — check context
  if (/v8|v6|inline.6|straight.6/.test(e) && !/turbo|biturbo|twin.turbo|supercharg|kompressor/.test(e)) {
    // Could be NA or forced — be conservative: NA for non-diesel non-turbo
    return 'NA'
  }
  // 4-cylinder without turbo keyword
  if (/\bi4\b|inline.4|straight.4/.test(e) && !/turbo/.test(e)) return 'NA'

  return 'NA' // safe default
}

let totalModified = 0
let totalSkipped = 0

function processSupp(filePath, makeFilter) {
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let modified = 0
  let skipped = 0

  for (const key of Object.keys(raw.specs)) {
    const spec = raw.specs[key]
    if (spec.aspiration) continue // already set

    const engine = spec.engine || spec.en || null
    const fuelType = spec.fuelType || spec.ft || null

    if (!engine && !fuelType) {
      skipped++
      continue
    }

    const asp = inferAspiration(engine, fuelType)
    if (asp) {
      spec.aspiration = asp
      modified++
    } else {
      skipped++
    }
  }

  if (modified > 0) {
    fs.writeFileSync(filePath, JSON.stringify(raw, null, 2))
  }
  return { modified, skipped }
}

// Process supplements 1-147 (skipping 34 and 35)
const dataDir = path.join(__dirname, '..', 'src', 'data')
for (let i = 1; i <= 147; i++) {
  if (i === 34 || i === 35) continue
  const fp = path.join(dataDir, `supplement${i}.json`)
  if (!fs.existsSync(fp)) continue
  const { modified, skipped } = processSupp(fp)
  totalModified += modified
  totalSkipped += skipped
  if (modified > 0) process.stdout.write(`s${i}: +${modified}\n`)
}

// Process holden.json — uses old format (en/ft etc), no engine/fuelType
// We'll try anyway using en/ft
const holdenPath = path.join(dataDir, 'holden.json')
if (fs.existsSync(holdenPath)) {
  const { modified, skipped } = processSupp(holdenPath)
  totalModified += modified
  totalSkipped += skipped
  if (modified > 0) console.log(`holden: +${modified}`)
  if (skipped > 0) console.log(`holden: ${skipped} skipped (old format)`)
}

// Process ford.json — same 3-part key but new-format fields
const fordPath = path.join(dataDir, 'ford.json')
if (fs.existsSync(fordPath)) {
  const { modified, skipped } = processSupp(fordPath)
  totalModified += modified
  totalSkipped += skipped
  if (modified > 0) console.log(`ford: +${modified}`)
}

console.log(`\nDone. ${totalModified} entries updated, ${totalSkipped} skipped.`)
