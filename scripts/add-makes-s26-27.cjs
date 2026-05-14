#!/usr/bin/env node
// Adds all new Mitsubishi models from supplement26+27 to makes.json
const fs = require('fs')
const s26 = JSON.parse(fs.readFileSync('src/data/supplement26.json', 'utf8'))
const s27 = JSON.parse(fs.readFileSync('src/data/supplement27.json', 'utf8'))
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

// Collect all Mitsubishi entries from both supplements
const allSpecs = { ...s26.specs, ...s27.specs }

// Build model→year→Set(trims) index
const newModels = {}
for (const key of Object.keys(allSpecs)) {
  const [make, model, year, ...trimParts] = key.split('|')
  if (make !== 'Mitsubishi') continue
  const trim = trimParts.join('|')
  if (!newModels[model]) newModels[model] = {}
  if (!newModels[model][year]) newModels[model][year] = new Set()
  newModels[model][year].add(trim)
}

// Merge into makes.Mitsubishi
const mits = makes.Mitsubishi
for (const [model, years] of Object.entries(newModels)) {
  if (!mits[model]) mits[model] = {}
  for (const [year, trimSet] of Object.entries(years)) {
    const existing = new Set(mits[model][year] || [])
    for (const t of trimSet) existing.add(t)
    mits[model][year] = [...existing]
  }
}

// Sort years numerically for each model
for (const model of Object.keys(mits)) {
  const sorted = {}
  for (const y of Object.keys(mits[model]).sort((a, b) => +a - +b)) {
    sorted[y] = mits[model][y]
  }
  mits[model] = sorted
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('Updated makes.json. New Mitsubishi models:')
for (const [m, yrs] of Object.entries(mits)) {
  const yearKeys = Object.keys(yrs)
  console.log(` ${m}: ${yearKeys[0]}–${yearKeys[yearKeys.length-1]} (${yearKeys.length} years)`)
}
