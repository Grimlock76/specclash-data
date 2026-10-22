// Verify WM Series I Statesman/Caprice (2006-2010) against Carsales (v1.34)
//
// The WM Statesman V6 was listed at 175 kW / 320 Nm (the WL figure) for most
// years. Carsales spec tables have the WM V6 at 195 kW / 340 Nm with a 5-speed
// auto, then 210 kW / 350 Nm with a 6-speed from MY10. The Caprice V8 was
// 270 kW until MY09.5, then 260 kW / 517 Nm (AFM). Prices and fuel figures
// also corrected to Carsales "price when new" and spec-table values.
//
// 0-100 / quarter mile / top speed are not published on Carsales, so they're
// nulled rather than kept as unverified figures. Weight is kerb where listed,
// otherwise tare. Duplicate copies in supplement3/6 are removed so holden.json
// is the only source for these keys.
const fs = require('fs')
const path = require('path')
const DATA = path.join(__dirname, '..', 'src', 'data')
const rd = f => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'))
const wr = (f, o) => fs.writeFileSync(path.join(DATA, f), JSON.stringify(o, null, 2) + (f === 'holden.json' ? '\n' : ''))

const L = v => (v == null ? null : `${v.toFixed(1)}L`)
const mk = o => ({
  en: o.en, di: o.di, cy: o.cy, hp: `${o.kw} kW (${Math.round(o.kw * 1.34102)} hp)`, tq: `${o.nm} Nm`,
  tx: o.tx, dr: 'RWD', z1: null, qm: null, ts: null,
  fc: L(o.city), fh: L(o.hwy), fx: L(o.comb), ft: 'Petrol',
  wt: `${o.wt.toLocaleString('en-US')} kg`, se: '5', ca: '535 L',
  pr: `$${o.pr.toLocaleString('en-US')}`, aspiration: 'NA',
})

const V6_5 = { en: '3.6L V6', di: '3.6L', cy: '6', kw: 195, nm: 340, tx: '5sp auto', city: null, hwy: null }
const V6_6 = { en: '3.6L V6', di: '3.6L', cy: '6', kw: 210, nm: 350, tx: '6sp auto', city: 14.2, hwy: 8.1, comb: 10.3 }
const V8_270 = { en: '6.0L V8 (L76)', di: '6.0L', cy: '8', kw: 270, nm: 530, tx: '6sp auto', city: null, hwy: null, comb: 14.4 }
const V8_260 = { en: '6.0L V8', di: '6.0L', cy: '8', kw: 260, nm: 517, tx: '6sp auto' }

const FIX = {
  // Carsales 2006 Statesman WM 3.6i (tare)
  'Statesman|2006|WM Statesman': mk({ ...V6_5, comb: 11.7, wt: 1786, pr: 58990 }),
  // Carsales 2007 / 2008 Statesman WM 3.6i (tare)
  'Statesman|2007|WM Statesman': mk({ ...V6_5, comb: 12.2, wt: 1786, pr: 60990 }),
  'Statesman|2008|WM Statesman': mk({ ...V6_5, comb: 12.2, wt: 1786, pr: 61990 }),
  // Carsales 2009 Statesman WM MY09.5 3.6i (kerb)
  'Statesman|2009|WM Statesman': mk({ ...V6_5, comb: 12.2, wt: 1802, pr: 63990 }),
  // Carsales 2009/2010 Statesman WM MY10 3.6i 6-speed (kerb from MY10 page)
  'Statesman|2010|WM Statesman': mk({ ...V6_6, wt: 1802, pr: 63990 }),
  // Carsales 2007 / 2008 Caprice WM 6.0i (tare)
  'Statesman|2007|WM Caprice': mk({ ...V8_270, wt: 1878, pr: 70990 }),
  'Statesman|2008|WM Caprice': mk({ ...V8_270, wt: 1878, pr: 73490 }),
  // Carsales 2009 Caprice WM MY09.5 6.0i (kerb)
  'Statesman|2009|WM Caprice': mk({ ...V8_260, city: 18.6, hwy: 9.7, comb: 13.0, wt: 1889, pr: 75490 }),
  // Carsales 2009/2010 Caprice WM MY10 6.0i (kerb from MY10 page)
  'Statesman|2010|WM Caprice': mk({ ...V8_260, en: '6.0L V8 (L76)', city: 18.3, hwy: 9.3, comb: 12.6, wt: 1889, pr: 75490 }),
}

const holden = rd('holden.json')
for (const [k, v] of Object.entries(FIX)) holden.specs[k] = v
wr('holden.json', holden)

for (const f of ['supplement3.json', 'supplement6.json']) {
  const s = rd(f)
  for (const k of Object.keys(FIX)) delete s.specs[k]
  wr(f, s)
}
console.log('done')
