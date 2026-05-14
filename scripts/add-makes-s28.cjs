#!/usr/bin/env node
const fs = require('fs')
const s28 = JSON.parse(fs.readFileSync('src/data/supplement28.json', 'utf8'))
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

// Add Nissan 400Z as a new model
if (!makes.Nissan['400Z']) makes.Nissan['400Z'] = {}

for (const [key, spec] of Object.entries(s28.specs)) {
  const [make, model, year, ...trimParts] = key.split('|')
  const trim = trimParts.join('|')
  if (!makes[make]) continue
  if (!makes[make][model]) makes[make][model] = {}
  if (!makes[make][model][year]) makes[make][model][year] = []
  if (!makes[make][model][year].includes(trim)) makes[make][model][year].push(trim)
}

// Sort years for each model
for (const make of Object.keys(makes)) {
  for (const model of Object.keys(makes[make])) {
    const sorted = {}
    for (const y of Object.keys(makes[make][model]).sort((a, b) => +a - +b)) {
      sorted[y] = makes[make][model][y]
    }
    makes[make][model] = sorted
  }
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))

// Report what was added
const byMake = {}
for (const k of Object.keys(s28.specs)) {
  const make = k.split('|')[0]
  byMake[make] = (byMake[make] || 0) + 1
}
console.log('Updated makes.json. Entries by make:')
Object.entries(byMake).forEach(([m, c]) => console.log(' ', m + ':', c))
