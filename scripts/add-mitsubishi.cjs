#!/usr/bin/env node
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

const mitsubishi = {
  Sigma: {},
  Galant: {},
  Lancer: {},
  Starion: {},
  '3000GT': {},
  Colt: {}
}

// Sigma
for (let y = 1977; y <= 1979; y++) mitsubishi.Sigma[y] = ['GL']
for (let y = 1980; y <= 1983; y++) mitsubishi.Sigma[y] = ['SE', 'GXL']

// Galant
for (let y = 1977; y <= 1979; y++) mitsubishi.Galant[y] = ['GLS']
for (let y = 1980; y <= 1984; y++) mitsubishi.Galant[y] = ['GL', 'GLS']
for (let y = 1985; y <= 1993; y++) mitsubishi.Galant[y] = ['GL', 'GLX']

// Lancer
for (let y = 1974; y <= 1977; y++) mitsubishi.Lancer[y] = ['GL']
for (let y = 1978; y <= 1984; y++) mitsubishi.Lancer[y] = ['GL', 'GSR']
for (let y = 1985; y <= 1991; y++) mitsubishi.Lancer[y] = ['GLi']
for (let y = 1992; y <= 1995; y++) mitsubishi.Lancer[y] = ['GLi', 'VRX']
for (let y = 1996; y <= 2002; y++) mitsubishi.Lancer[y] = ['GLi', 'VRX', 'Evolution']
for (let y = 2003; y <= 2006; y++) mitsubishi.Lancer[y] = ['LS', 'VRX', 'Evolution']
mitsubishi.Lancer[2007] = ['LS', 'VRX', 'Evolution', 'ES']
for (let y = 2008; y <= 2015; y++) mitsubishi.Lancer[y] = ['ES', 'VRX', 'Evolution X']
for (let y = 2016; y <= 2017; y++) mitsubishi.Lancer[y] = ['ES', 'VRX']

// Starion
for (let y = 1982; y <= 1986; y++) mitsubishi.Starion[y] = ['GSR']
for (let y = 1987; y <= 1989; y++) mitsubishi.Starion[y] = ['GSR', 'ESi-R']

// 3000GT
for (let y = 1991; y <= 2001; y++) mitsubishi['3000GT'][y] = ['SL', 'VR-4']

// Colt
for (let y = 1978; y <= 1983; y++) mitsubishi.Colt[y] = ['GL']
for (let y = 1984; y <= 1992; y++) mitsubishi.Colt[y] = ['GL', 'GLS']

makes.Mitsubishi = mitsubishi
fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('Added Mitsubishi to makes.json')
const total = Object.entries(mitsubishi).reduce((sum, [, years]) =>
  sum + Object.values(years).reduce((s, trims) => s + trims.length, 0), 0)
console.log('Total Mitsubishi make/model/year/trim combos:', total)
