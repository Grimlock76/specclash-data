// Fix WM/WN Statesman-Caprice data (v1.33)
//
// Problems found 2026-10-22:
//  1. Price-only stub entries in supplement3/6 (e.g. Statesman|2010|WM Caprice)
//     won exact-key lookups, so 7 trims rendered completely blank in the app.
//  2. WN Caprice V was listed as a 317 kW 6.2 LS3 every year (and the stubs
//     claimed an Eaton supercharger). Real: 6.0 V8 260 kW until WN Series II,
//     then 6.2 LS3 304 kW. WN Caprice (no badge) was a 180 kW LPG-only V6, not
//     the 210 kW petrol V6 (that was WM Series II).
//  3. No-badge Caprice wasn't sold in 2016-2017 (Carsales lists V only), so
//     those two catalogue trims are removed.
//
// All figures from Carsales research spec tables (Redbook data). 0-100,
// quarter mile and top speed aren't published there, so they're left null
// rather than guessed. Weight is kerb where listed, otherwise tare.
//
// The catalogue still labels 2011-2012 trims "WN"; those years were actually
// WM Series II, so they get WM II specs under the existing trim names.
const fs = require('fs')
const path = require('path')
const DATA = path.join(__dirname, '..', 'src', 'data')
const rd = f => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'))
const wr = (f, o) => fs.writeFileSync(path.join(DATA, f), JSON.stringify(o, null, 2) + (f === 'holden.json' ? '\n' : ''))

const hp = kw => `${kw} kW (${Math.round(kw * 1.34102)} hp)`
const L = v => (v == null ? null : `${v}L`)
const mk = o => ({
  en: o.en, di: o.di, cy: o.cy, hp: hp(o.kw), tq: `${o.nm} Nm`, tx: '6sp auto', dr: 'RWD',
  z1: null, qm: null, ts: null,
  fc: L(o.city), fh: L(o.hwy), fx: L(o.comb), ft: o.ft,
  wt: o.wt ? `${o.wt.toLocaleString('en-US')} kg` : null, se: '5', ca: `${o.boot} L`,
  pr: o.pr ? `$${o.pr.toLocaleString('en-US')}` : null, aspiration: 'NA',
})

// Carsales: 2010 Caprice WM Auto MY10 6.0i (wt = tare)
const WM_V8 = { en: '6.0L V8 (L76)', di: '6.0L', cy: '8', kw: 260, nm: 517, city: 18.3, hwy: 9.3, comb: 12.6, ft: 'Petrol', wt: 1807, boot: 535, pr: 75490 }
// Carsales: 2010/2011/2012 Caprice V WM Series II
const WM2_V8 = { en: '6.0L V8', di: '6.0L', cy: '8', kw: 260, nm: 517, city: 17.4, hwy: 9.3, comb: 12.3, ft: 'Petrol', wt: 1873, boot: 535, pr: 69990 }
// Carsales: 2010/2012 Caprice WM Series II 3.6i
const WM2_V6 = { en: '3.6L V6 SIDI', di: '3.6L', cy: '6', kw: 210, nm: 350, city: 13.3, hwy: 7.9, comb: 9.9, ft: 'Petrol', wt: 1788, boot: 535, pr: 61990 }
// Carsales: 2014 Caprice WN MY14 3.6Gi (LPG only)
const WN_V6 = { en: '3.6L V6 (LPG only)', di: '3.6L', cy: '6', kw: 180, nm: 320, city: 16.8, hwy: 9.4, comb: 12.1, ft: 'LPG', wt: 1816, boot: 531, pr: 54990 }
// Carsales: 2013 Caprice V WN MY14 / 2014 Caprice V WN MY15
const WN_V8 = { en: '6.0L V8', di: '6.0L', cy: '8', kw: 260, nm: 517, city: 17.2, hwy: 8.5, comb: 11.7, ft: 'Petrol', wt: 1851, boot: 531 }
// Carsales: 2015 (MY16) / 2016 / 2017 Caprice V WN Series II (wt = tare)
const WN2_V8 = { en: '6.2L V8 (LS3)', di: '6.2L', cy: '8', kw: 304, nm: 570, city: 18.4, hwy: 9.7, comb: 12.9, ft: 'Petrol', wt: 1804, boot: 531 }

const FIX = {
  'Statesman|2010|WM Caprice':   mk(WM_V8),
  'Statesman|2011|WN Caprice':   mk(WM2_V6),
  'Statesman|2012|WN Caprice':   mk(WM2_V6),
  'Statesman|2013|WN Caprice':   mk(WN_V6),
  'Statesman|2014|WN Caprice':   mk(WN_V6),
  'Statesman|2015|WN Caprice':   mk({ ...WN_V6, city: null, hwy: null, comb: null, wt: null, pr: null }),
  'Statesman|2011|WN Caprice V': mk(WM2_V8),
  'Statesman|2012|WN Caprice V': mk(WM2_V8),
  'Statesman|2013|WN Caprice V': mk({ ...WN_V8, pr: 59990 }),
  'Statesman|2014|WN Caprice V': mk({ ...WN_V8, pr: 60490 }),
  'Statesman|2015|WN Caprice V': mk({ ...WN2_V8, pr: 60490 }),
  'Statesman|2016|WN Caprice V': mk({ ...WN2_V8, pr: 60990 }),
  'Statesman|2017|WN Caprice V': mk({ ...WN2_V8, pr: 61490 }),
}
// 2015 WN Caprice: Carsales lists the 3.6Gi LPG variant but no spec table, so
// only the engine figures (same 3.6 LPG unit as MY14) are filled.

const DROP = ['Statesman|2016|WN Caprice', 'Statesman|2017|WN Caprice']

const holden = rd('holden.json')
for (const [k, v] of Object.entries(FIX)) holden.specs[k] = v
for (const k of DROP) delete holden.specs[k]
wr('holden.json', holden)

// Remove every WM/WN Statesman-model stub so nothing shadows holden.json
for (const f of ['supplement3.json', 'supplement6.json']) {
  const s = rd(f)
  for (const k of Object.keys(s.specs)) {
    if (/^Statesman\|(20(0[7-9]|1\d))\|W[MN] /.test(k) && !s.specs[k].hp) delete s.specs[k]
  }
  wr(f, s)
}

const makes = rd('makes.json')
const st = makes.Holden.Statesman
for (const y of ['2016', '2017']) st[y] = st[y].filter(t => t !== 'WN Caprice')
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n')
console.log('done')
