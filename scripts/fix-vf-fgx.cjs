'use strict';
// fix-vf-fgx.cjs — 2026-10-22 audit of the last Aussie V8/I6 sedans,
// Carsales spec tables (manual variants, which Carsales details in full):
//  - Holden Commodore VF II 2016/2017 SS, SS V Redline, SV6. App had estimated
//    prices (~$58,690 Redline) and fuel (12.2 L) and an auto-only SV6 price.
//  - Ford Falcon FG X 2016 XR8, XR6 Turbo, XR6. App called the XR8 a "Boss
//    335" (it's the supercharged 5.0 "Miami") and had 10.8 L fuel.
// Weight: VF II pages list tare only (kept as tare); FG X pages list kerb.
// 0-100 / quarter / top speed not on Carsales → null (previous values were
// unverified).
const fs = require('fs'), path = require('path');
const specs = {};
const $ = n => `$${n.toLocaleString('en-US')}`;
const L = v => `${v.toFixed(1)}L`;
const old = o => ({
  en: o.en, di: o.di, cy: o.cy, hp: `${o.kw} kW (${Math.round(o.kw * 1.34102)} hp)`, tq: `${o.nm} Nm`,
  tx: o.tx, dr: 'RWD', z1: null, qm: null, ts: null,
  fc: L(o.city), fh: L(o.hwy), fx: L(o.comb), ft: 'Petrol',
  wt: `${o.wt.toLocaleString('en-US')} kg`, se: '5', ca: null, pr: $(o.pr), aspiration: o.asp || 'NA',
});

const LS3 = { en: '6.2L V8 (LS3)', di: '6.2L', cy: '8', kw: 304, nm: 570, tx: '6sp manual', city: 17.9, hwy: 9.5, comb: 12.6 };
const SV6 = { en: '3.6L V6', di: '3.6L', cy: '6', kw: 210, nm: 350 };
const VF = {
  2016: {
    'VF II SS V REDLINE': { ...LS3, wt: 1748, pr: 54490 },
    'VF II SS': { ...LS3, wt: 1703, pr: 44990 },
    'VF II SV6': { ...SV6, tx: '6sp manual', city: 12.2, hwy: 7.1, comb: 9.0, wt: 1643, pr: 37290 },
  },
  2017: {
    'VF II SS V REDLINE': { ...LS3, wt: 1748, pr: 54990 },
    'VF II SS': { ...LS3, wt: 1703, pr: 47490 },
    'VF II SV6': { ...SV6, tx: '6sp auto', city: 12.4, hwy: 7.1, comb: 9.1, wt: 1640, pr: 40490 },
  },
};
for (const [yr, trims] of Object.entries(VF)) {
  for (const [trim, o] of Object.entries(trims)) specs[`Commodore|${yr}|${trim}`] = old(o);
}

const FGX = {
  XR8: { en: '5.0L V8 Supercharged (Miami)', di: '5.0L', cy: '8', kw: 335, nm: 570, tx: '6sp manual',
    city: 19.4, hwy: 10.3, comb: 13.6, wt: 1858, pr: 53490, asp: 'Supercharged' },
  'XR6 Turbo': { en: '4.0L I6 Turbo (Barra 270T)', di: '4.0L', cy: '6', kw: 270, nm: 533, tx: '6sp manual',
    city: 17.2, hwy: 9.0, comb: 12.0, wt: 1764, pr: 43490, asp: 'Turbo' },
  XR6: { en: '4.0L I6 (Barra 195)', di: '4.0L', cy: '6', kw: 195, nm: 391, tx: '6sp manual',
    city: 15.8, hwy: 8.3, comb: 11.1, wt: 1740, pr: 36090 },
};
for (const [trim, o] of Object.entries(FGX)) specs[`Ford|Falcon (FG X)|2016|${trim}`] = old(o);

// Patch in place (holden.json / ford.json own these keys) so no stale copy
// lingers to shadow or conflict.
const DATA = path.join(__dirname, '..', 'src', 'data');
for (const f of ['holden.json', 'ford.json']) {
  const file = path.join(DATA, f);
  const raw = fs.readFileSync(file, 'utf8');
  const o = JSON.parse(raw);
  let n = 0;
  for (const [k, v] of Object.entries(specs)) if (k in o.specs) { o.specs[k] = v; n++ }
  fs.writeFileSync(file, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'updated', n);
}

// ─── Halo cars (same audit) ──────────────────────────────────────────────────
// HSV GTSR W1 2017 — CarsGuide: 6.2 V8 (LSA) 474 kW/815 Nm, 6sp manual,
// 16.5 L/100km combined, kerb 1,850 kg. No price listed → null (was ~$169,990
// estimate). FPV GT F 351 2014 (FG MkII) — Carsales: 351 kW/570 Nm, 6sp manual,
// 13.6/19.4/10.3 L, tare 1,828 kg, $77,990. It was missing from the catalogue.
{
  const s7 = path.join(DATA, 'supplement7.json')
  const raw = fs.readFileSync(s7, 'utf8'); const o = JSON.parse(raw)
  const w1 = o.specs['HSV|W1|2017|VF II W1']
  Object.assign(w1, { tx: '6sp manual', z1: null, qm: null, ts: null, fc: null, fh: null, fx: '16.5L', wt: '1,850 kg', pr: null })
  fs.writeFileSync(s7, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''))

  const s8 = path.join(DATA, 'supplement8.json')
  const raw8 = fs.readFileSync(s8, 'utf8'); const o8 = JSON.parse(raw8)
  o8.specs['FPV|GT|2014|GT F 351'] = old({ en: '5.0L V8 Supercharged (Boss 351)', di: '5.0L', cy: '8', kw: 351, nm: 570,
    tx: '6sp manual', city: 19.4, hwy: 10.3, comb: 13.6, wt: 1828, pr: 77990, asp: 'Supercharged' })
  fs.writeFileSync(s8, JSON.stringify(o8, null, 2) + (raw8.endsWith('\n') ? '\n' : ''))

  const mf = path.join(DATA, 'makes.json'); const makes = JSON.parse(fs.readFileSync(mf, 'utf8'))
  const gt14 = makes.FPV.GT['2014']
  if (!gt14.includes('GT F 351')) { gt14.push('GT F 351'); gt14.sort() }
  fs.writeFileSync(mf, JSON.stringify(makes, null, 2) + '\n')
  console.log('W1 + GT F 351 done')
}
