#!/usr/bin/env node
// add-makes.cjs — Add Mazda and Nissan to makes.json
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

function range(a, b) { return Array.from({length: b-a+1}, (_, i) => a + i) }

// ────────────────────────── MAZDA ──────────────────────────────────────────
const mazda = {}

// 323
const m323 = {}
range(1981,1985).forEach(y => m323[y] = ['Standard','DX'])
range(1986,1988).forEach(y => m323[y] = ['SE','GTX'])
range(1989,1993).forEach(y => m323[y] = ['E','Astina'])
range(1994,1997).forEach(y => m323[y] = ['LXi','Astina'])
range(1998,2003).forEach(y => m323[y] = ['LXi','Astina','SP20'])
mazda['323'] = m323

// 626
const m626 = {}
range(1980,1982).forEach(y => m626[y] = ['GX'])
range(1983,1987).forEach(y => m626[y] = ['GX','LX'])
range(1988,1991).forEach(y => m626[y] = ['GLX','LX'])
range(1992,1997).forEach(y => m626[y] = ['Classic','Luxury','V6'])
range(1998,2002).forEach(y => m626[y] = ['Classic','Luxury','V6'])
mazda['626'] = m626

// RX-7
const rx7 = {}
range(1979,1983).forEach(y => rx7[y] = ['GS'])
range(1984,1985).forEach(y => rx7[y] = ['GS','SE'])
range(1986,1991).forEach(y => rx7[y] = ['1.3','Turbo II'])
range(1992,2002).forEach(y => rx7[y] = ['SP','RZ'])
mazda['RX-7'] = rx7

// RX-8
const rx8 = {}
range(2003,2008).forEach(y => rx8[y] = ['Luxury','Sports'])
range(2009,2012).forEach(y => rx8[y] = ['Sports','R3'])
mazda['RX-8'] = rx8

// MX-5
const mx5 = {}
range(1989,1993).forEach(y => mx5[y] = ['Classic'])
range(1994,1997).forEach(y => mx5[y] = ['Classic','SE'])
range(1998,2005).forEach(y => mx5[y] = ['Classic','SE'])
range(2006,2014).forEach(y => mx5[y] = ['Classic','GT'])
mx5[2015] = ['MX-5','GT']
range(2016,2023).forEach(y => mx5[y] = ['MX-5','GT','RF GT'])
mazda['MX-5'] = mx5

// MX-6
const mx6 = {}
range(1987,1991).forEach(y => mx6[y] = ['Classic'])
range(1992,1997).forEach(y => mx6[y] = ['Classic','V6'])
mazda['MX-6'] = mx6

// Mazda 2
const m2 = {}
range(2007,2010).forEach(y => m2[y] = ['Neo','Maxx'])
range(2011,2014).forEach(y => m2[y] = ['Neo','Maxx','GT'])
range(2015,2023).forEach(y => m2[y] = ['Neo','Maxx','GT','Genki'])
mazda['2'] = m2

// Mazda 3
const m3 = {}
range(2003,2005).forEach(y => m3[y] = ['Neo','Maxx','SP23'])
range(2006,2008).forEach(y => m3[y] = ['Neo','Maxx','SP23','MPS'])
range(2009,2013).forEach(y => m3[y] = ['Neo','Maxx','SP25','MPS'])
range(2014,2018).forEach(y => m3[y] = ['Neo','Maxx','SP25','Astina'])
range(2019,2023).forEach(y => m3[y] = ['G20 Pure','G20 Evolve','G25 GT','Astina'])
mazda['3'] = m3

// Mazda 6
const m6 = {}
range(2002,2007).forEach(y => m6[y] = ['Classic','Luxury','V6'])
range(2008,2012).forEach(y => m6[y] = ['Classic','Luxury','Sports'])
range(2013,2017).forEach(y => m6[y] = ['Sport','Touring','Atenza'])
range(2018,2023).forEach(y => m6[y] = ['Sport','Touring','GT','Atenza'])
mazda['6'] = m6

// CX-3
const cx3 = {}
range(2015,2018).forEach(y => cx3[y] = ['Maxx','sTouring','Akari'])
range(2019,2021).forEach(y => cx3[y] = ['Maxx','sTouring+','Akari'])
mazda['CX-3'] = cx3

// CX-5
const cx5 = {}
range(2012,2016).forEach(y => cx5[y] = ['Maxx','Maxx Sport','GT'])
range(2017,2023).forEach(y => cx5[y] = ['Maxx','Touring','GT','Akera'])
mazda['CX-5'] = cx5

// CX-8
const cx8 = {}
range(2018,2020).forEach(y => cx8[y] = ['Sport','Touring','Asaki'])
range(2021,2023).forEach(y => cx8[y] = ['Sport','Touring','GT','Asaki'])
mazda['CX-8'] = cx8

// CX-9
const cx9 = {}
range(2007,2012).forEach(y => cx9[y] = ['Classic','Luxury','Grand Touring'])
range(2013,2016).forEach(y => cx9[y] = ['Classic','Luxury','GT'])
range(2017,2023).forEach(y => cx9[y] = ['Sport','Touring','GT','Azami'])
mazda['CX-9'] = cx9

// BT-50
const bt50 = {}
range(2006,2010).forEach(y => bt50[y] = ['XT','XTR','GT'])
range(2011,2020).forEach(y => bt50[y] = ['XT','XTR','GT'])
range(2021,2023).forEach(y => bt50[y] = ['XT','XTR','GT'])
mazda['BT-50'] = bt50

// MX-30
const mx30 = {}
range(2021,2023).forEach(y => mx30[y] = ['Pure','GT'])
mazda['MX-30'] = mx30

makes['Mazda'] = mazda

// ────────────────────────── NISSAN ─────────────────────────────────────────
const nissan = {}

// Skyline
const sky = {}
range(1989,1993).forEach(y => sky[y] = ['GTS','GTS-T','GT-R'])
range(1994,1998).forEach(y => sky[y] = ['GTS','GTS-T','GT-R'])
range(1999,2002).forEach(y => sky[y] = ['GT-T','GT-R'])
range(2003,2006).forEach(y => sky[y] = ['350GT'])
range(2007,2014).forEach(y => sky[y] = ['370GT'])
nissan['Skyline'] = sky

// 300ZX
const z300 = {}
range(1984,1989).forEach(y => z300[y] = ['Base','2+2'])
range(1990,1996).forEach(y => z300[y] = ['NA','Turbo'])
nissan['300ZX'] = z300

// 370Z
const z370 = {}
range(2009,2021).forEach(y => z370[y] = ['ST','NISMO'])
nissan['370Z'] = z370

// GT-R
const gtr = {}
range(2008,2023).forEach(y => gtr[y] = ['Premium','Track Edition'])
nissan['GT-R'] = gtr

// Pulsar
const pulsar = {}
range(1982,1986).forEach(y => pulsar[y] = ['CS','TS'])
range(1987,1990).forEach(y => pulsar[y] = ['Q','Ti','SSS'])
range(1991,1994).forEach(y => pulsar[y] = ['LX','Q','SSS'])
range(1995,2000).forEach(y => pulsar[y] = ['Q','Ti','SSS'])
nissan['Pulsar'] = pulsar

// Maxima
const maxima = {}
range(1985,1988).forEach(y => maxima[y] = ['GL','GX'])
range(1989,1994).forEach(y => maxima[y] = ['GL','TRX'])
range(1994,1999).forEach(y => maxima[y] = ['ST','Ti'])
range(2000,2003).forEach(y => maxima[y] = ['Ti'])
nissan['Maxima'] = maxima

// Patrol
const patrol = {}
range(1987,1997).forEach(y => patrol[y] = ['DX','GL','GX'])
range(1998,2004).forEach(y => patrol[y] = ['DX','ST'])
range(2005,2012).forEach(y => patrol[y] = ['DX','ST','Ti'])
range(2013,2023).forEach(y => patrol[y] = ['ST','ST-L','Ti','Ti-L'])
nissan['Patrol'] = patrol

// Navara
const navara = {}
range(1986,1997).forEach(y => navara[y] = ['DX','SE'])
range(1997,2005).forEach(y => navara[y] = ['DX','ST','ST-R'])  // D22 (1997 appears in both D21/D22 but gap check will handle)
range(2005,2015).forEach(y => navara[y] = ['ST','ST-X','LE'])
range(2015,2023).forEach(y => navara[y] = ['ST','ST-X','PRO-4X'])
nissan['Navara'] = navara

// X-Trail
const xtrail = {}
range(2001,2007).forEach(y => xtrail[y] = ['ST','Ti','TS'])
range(2007,2013).forEach(y => xtrail[y] = ['ST','Ti','Ti-S'])
range(2014,2023).forEach(y => xtrail[y] = ['ST','ST-L','Ti','Ti-L'])
nissan['X-Trail'] = xtrail

// Pathfinder
const pf = {}
range(1986,1995).forEach(y => pf[y] = ['DX','ST'])
range(1995,2005).forEach(y => pf[y] = ['ST','Ti'])
range(2005,2013).forEach(y => pf[y] = ['ST','Ti'])
range(2013,2023).forEach(y => pf[y] = ['ST','Ti','Ti-L'])
nissan['Pathfinder'] = pf

// Qashqai
const qashqai = {}
range(2007,2013).forEach(y => qashqai[y] = ['ST','Ti'])
range(2014,2021).forEach(y => qashqai[y] = ['ST','ST-L','Ti'])
range(2022,2023).forEach(y => qashqai[y] = ['ST','ST-L','Ti'])
nissan['Qashqai'] = qashqai

// Juke
const juke = {}
range(2011,2019).forEach(y => juke[y] = ['ST','ST-S','Ti'])
nissan['Juke'] = juke

// Micra
const micra = {}
range(2003,2010).forEach(y => micra[y] = ['ST'])
range(2010,2018).forEach(y => micra[y] = ['ST','ST-L'])
nissan['Micra'] = micra

// Dualis
const dualis = {}
range(2007,2013).forEach(y => dualis[y] = ['ST','ST+2','Ti'])
nissan['Dualis'] = dualis

makes['Nissan'] = nissan

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('makes.json updated')
console.log('Makes:', Object.keys(makes).join(', '))
Object.entries(makes).forEach(([mk, models]) => {
  const total = Object.values(models).reduce((s, yrs) =>
    s + Object.values(yrs).reduce((t, trims) => t + trims.length, 0), 0)
  console.log(` ${mk}: ${Object.keys(models).length} models, ${total} trim-year combos`)
})
