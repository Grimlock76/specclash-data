'use strict';
// Programmatic SEO: generates static /vs/{a}-vs-{b}/ comparison pages into
// dist/ AFTER vite build (wired into `npm run build`). Each page carries a
// real spec table, unique intro copy with actual figures, a CTA into the live
// app with both cars pre-loaded, and cross-links. Also writes /vs/ index and
// /sitemap.xml. Pages are written post-build so the service worker never
// precaches them; runtime navigations are excluded via navigateFallbackDenylist.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'data');
const OUT = path.join(ROOT, 'dist');
const SITE = 'https://spec-clash.vercel.app';

// ── curated segments (popular AU search matchups) ───────────────────────────
const SEGMENTS = {
  'Utes': [['Toyota','HiLux'],['Ford','Ranger'],['Isuzu','D-MAX'],['Mazda','BT-50'],['Mitsubishi','Triton'],['Nissan','Navara'],['Volkswagen','Amarok'],['GWM','Cannon'],['LDV','T60'],['BYD','Shark'],['Kia','Tasman'],['Toyota','LandCruiser 70']],
  'Mid-size SUVs': [['Toyota','RAV4'],['Mazda','CX-5'],['Hyundai','Tucson'],['Kia','Sportage'],['Nissan','X-Trail'],['Mitsubishi','Outlander'],['Subaru','Forester'],['Honda','CR-V'],['GWM','Haval H6'],['MG','HS'],['Volkswagen','Tayron'],['Chery','Tiggo 7 Pro'],['Jaecoo','7']],
  'Small SUVs': [['Mazda','CX-30'],['Hyundai','Kona'],['Kia','Seltos'],['MG','ZS'],['Toyota','Corolla Cross'],['GWM','Haval Jolion'],['Omoda','5'],['Suzuki','Jimny'],['Chery','Tiggo 4'],['KGM','Torres'],['Mahindra','XUV 3XO']],
  'Small cars': [['Toyota','Corolla'],['Mazda','3'],['Hyundai','i30'],['Kia','Cerato'],['Kia','K4'],['Volkswagen','Golf'],['Subaru','Impreza'],['MG','MG3']],
  'Electric cars': [['Tesla','Model Y'],['Tesla','Model 3'],['BYD','Atto 3'],['BYD','Seal'],['BYD','Sealion 7'],['Kia','EV6'],['Kia','EV5'],['Hyundai','Ioniq 5'],['Polestar','Polestar 2'],['Geely','EX5'],['MG','MG4'],['Zeekr','7X'],['Smart','#5'],['Leapmotor','C10']],
  'Large SUVs & 4x4s': [['Toyota','LandCruiser 300'],['Nissan','Patrol'],['Ford','Everest'],['Isuzu','MU-X'],['Toyota','Prado'],['Mitsubishi','Pajero Sport'],['Kia','Sorento'],['Hyundai','Santa Fe'],['Toyota','Kluger'],['Jaecoo','J8'],['Chery','Tiggo 8'],['GWM','Tank 500'],['Toyota','Fortuner']],
  'Performance': [['Toyota','GR86'],['Subaru','BRZ'],['Ford','Mustang'],['Subaru','WRX'],['Toyota','GR Corolla'],['Holden','Commodore'],['Ford','Falcon (FG X)'],['Toyota','Camry']],
};

// ── data: merge specs in app order (s1-8, holden, ford, s9, s10+) ───────────
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json')));
const suppFiles = fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f))
  .sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0]);
const SPECS = {};
for (const f of suppFiles) {
  const n = +f.match(/\d+/)[0];
  if (n === 9) for (const core of ['holden.json', 'ford.json']) {
    const j = JSON.parse(fs.readFileSync(path.join(DATA, core)));
    Object.assign(SPECS, j.specs || j);
  }
  Object.assign(SPECS, JSON.parse(fs.readFileSync(path.join(DATA, f))).specs);
}
const findSpec = (make, model, year, trim) =>
  SPECS[`${make}|${model}|${year}|${trim}`] ??
  (make === 'Holden' ? SPECS[`${model}|${year}|${trim}`] : undefined);

// normalise both entry formats to display strings + numeric values
const num = v => { const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null; };
function view(s) {
  const isNew = s.en === undefined && s.hp === undefined;
  const ev = /electric/i.test(s.ft || s.fuelType || '');
  const v = isNew ? {
    engine: s.engine || '—',
    power: s.power ? `${s.power} kW` : '—',
    torque: s.torque ? `${s.torque} Nm` : '—',
    z1: s.acceleration ? `${s.acceleration} s` : '—',
    ts: s.topSpeed ? `${s.topSpeed} km/h` : '—',
    fuel: ev ? (s.range ? `${s.range} km range` : '—') : (s.fx != null ? `${s.fx} L/100km` : '—'),
    weight: s.weight ? `${s.weight} kg` : '—',
    price: s.price || '—',
  } : {
    engine: s.en || '—', power: s.hp || '—', torque: s.tq || '—',
    z1: s.z1 || '—', ts: s.ts || '—',
    fuel: /electric/i.test(s.ft || '') ? (s.fc || '—') : (s.fx || '—'),
    weight: s.wt || '—', price: s.pr || '—',
  };
  v.ev = ev;
  return v;
}

const PREFERRED_TRIM = /gxl|xlt|sr5|gt-line|gt\b|ultra|elite|st-l|touring|xtr|ls-u|gls|st-x|excite|sport|premium|vf ss|xr6/i;
function pickCar(make, model) {
  const years = Object.keys(makes[make]?.[model] || {}).sort();
  for (const year of years.slice().reverse()) {
    const trims = makes[make][model][year];
    const ordered = [...trims.filter(t => PREFERRED_TRIM.test(t)), ...trims];
    for (const trim of ordered) {
      const s = findSpec(make, model, year, trim);
      if (s && num((view(s)).power) != null) return { make, model, year, trim, spec: s, v: view(s) };
    }
  }
  return null;
}

const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s*\(.*?\)\s*/g, ' ')
  .replace(/&/g, 'and').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ROWS = [
  ['engine', 'Engine', null], ['power', 'Power', 'hi'], ['torque', 'Torque', 'hi'],
  ['z1', '0–100 km/h', 'lo'], ['ts', 'Top speed', 'hi'], ['fuel', 'Fuel (combined)', 'lo'],
  ['weight', 'Weight', 'lo'], ['price', 'Price when new', 'lo'],
];

function intro(a, b) {
  const pa = num(a.v.power), pb = num(b.v.power);
  const za = num(a.v.z1), zb = num(b.v.z1);
  const bits = [];
  if (pa && pb) {
    bits.push(pa === pb
      ? `The ${a.make} ${a.model} and ${b.make} ${b.model} are evenly matched on power at ${pa} kW apiece.`
      : `The ${pa > pb ? a.make + ' ' + a.model : b.make + ' ' + b.model} holds the power advantage — ${Math.max(pa, pb)} kW against ${Math.min(pa, pb)} kW.`);
  }
  if (za && zb && za !== zb) {
    const q = za < zb ? a : b;
    bits.push(`In the 0–100 km/h sprint the ${q.make} ${q.model} gets there first (${Math.min(za, zb)} s vs ${Math.max(za, zb)} s).`);
  }
  bits.push(`Below is the full side-by-side, or load both cars in the live comparison tool for every spec, trim and year.`);
  return bits.join(' ');
}

function page(a, b, segment, related) {
  const title = `${a.make} ${a.model} vs ${b.make} ${b.model}: specs compared`;
  const appUrl = `/?c0=${encodeURIComponent([a.make, a.model, a.year, a.trim].join('|'))}&c1=${encodeURIComponent([b.make, b.model, b.year, b.trim].join('|'))}`;
  const desc = `${a.year} ${a.make} ${a.model} ${a.trim} vs ${b.year} ${b.make} ${b.model} ${b.trim} — power (${a.v.power} vs ${b.v.power}), 0–100, fuel and price compared side by side.`;
  const rows = ROWS.map(([key, label, dir]) => {
    const va = a.v[key], vb = b.v[key];
    let wa = '', wb = '';
    if (dir && key !== 'fuel' || (key === 'fuel' && !a.v.ev && !b.v.ev)) {
      const na = num(va), nb = num(vb);
      if (dir && na != null && nb != null && na !== nb) {
        const aWins = dir === 'hi' ? na > nb : na < nb;
        if (aWins) wa = ' class="win"'; else wb = ' class="win"';
      }
    }
    return `<tr><td${wa}>${esc(va)}</td><th>${esc(label)}</th><td${wb}>${esc(vb)}</td></tr>`;
  }).join('\n      ');
  const relLinks = related.map(([s, t]) => `<li><a href="/vs/${s}/">${esc(t)}</a></li>`).join('\n      ');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}/vs/${slug(a.make + ' ' + a.model)}-vs-${slug(b.make + ' ' + b.model)}/">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<style>
  body{background:#0a0a0a;color:#d8d8d8;font-family:'Barlow Condensed',system-ui,sans-serif;margin:0;padding:24px;line-height:1.5}
  main{max-width:720px;margin:0 auto}
  .logo{font-size:26px;font-weight:800;letter-spacing:3px;color:#fff;text-decoration:none}
  .logo b{color:#C8F04A}
  h1{font-size:34px;line-height:1.15;margin:24px 0 8px}
  .seg{color:#555;font-size:13px;letter-spacing:2px;text-transform:uppercase}
  p{color:#9a9a9a;font-size:16px}
  table{width:100%;border-collapse:collapse;margin:22px 0;font-size:16px}
  th,td{padding:9px 10px;border-bottom:1px solid #181818;text-align:center}
  th{color:#666;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600}
  thead td{color:#C8F04A;font-weight:700;font-size:17px}
  thead td:last-child{color:#60C8FF}
  .win{color:#C8F04A;font-weight:700}
  td:last-child.win{color:#60C8FF}
  .cta{display:block;text-align:center;background:#C8F04A;color:#000;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:14px;border-radius:8px;text-decoration:none;margin:26px 0}
  ul{columns:2;padding-left:18px}
  li{margin:4px 0}
  a{color:#8ab4f8}
  footer{color:#333;font-size:12px;margin-top:40px}
  /* Two ~165px columns on a phone split names like "Mitsubishi Triton vs
     Toyota LandCruiser 70" across four wrapped lines each. The table can't
     shrink below its widest unbreakable word ("LandCruiser" at 17px bold), so
     the tighter cells are what keep long-named pages from scrolling sideways. */
  @media(max-width:520px){
    ul{columns:1}
    body{padding:16px}
    table{font-size:15px}
    th,td{padding:8px 5px}
    th{letter-spacing:.5px}
    thead td{font-size:15px}
  }
</style>
</head>
<body>
<main>
  <a class="logo" href="/">SPEC<b>CLASH</b></a>
  <div class="seg">${esc(segment)} · head-to-head</div>
  <h1>${esc(a.make)} ${esc(a.model)} vs ${esc(b.make)} ${esc(b.model)}</h1>
  <p>${intro(a, b)}</p>
  <table>
    <thead><tr><td>${esc(a.year)} ${esc(a.make)} ${esc(a.model)}<br>${esc(a.trim)}</td><th>vs</th><td>${esc(b.year)} ${esc(b.make)} ${esc(b.model)}<br>${esc(b.trim)}</td></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  <a class="cta" href="${appUrl}">⚡ Compare live — every trim &amp; year</a>
  <h2 style="font-size:20px">More ${esc(segment.toLowerCase())} comparisons</h2>
  <ul>
      ${relLinks}
  </ul>
  <footer>Specifications compiled from public sources and may contain errors — verify with the manufacturer before purchase decisions. Highlighted values indicate the better figure. <a href="/">Spec Clash</a> · <a href="/vs/">All comparisons</a></footer>
</main>
</body>
</html>
`;
}

// ── generate ─────────────────────────────────────────────────────────────────
if (!fs.existsSync(OUT)) { console.error('dist/ missing — run vite build first'); process.exit(1); }
const vsDir = path.join(OUT, 'vs');
fs.mkdirSync(vsDir, { recursive: true });

const cars = new Map();
for (const models of Object.values(SEGMENTS)) for (const [mk, md] of models) {
  if (!cars.has(mk + '|' + md)) {
    const c = pickCar(mk, md);
    if (!c) console.log('  SKIP (no usable spec):', mk, md);
    cars.set(mk + '|' + md, c);
  }
}

const urls = [];
const bySegment = {};
for (const [segment, models] of Object.entries(SEGMENTS)) {
  const list = models.map(([mk, md]) => cars.get(mk + '|' + md)).filter(Boolean);
  bySegment[segment] = [];
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j];
    const s = `${slug(a.make + ' ' + a.model)}-vs-${slug(b.make + ' ' + b.model)}`;
    bySegment[segment].push([s, `${a.make} ${a.model} vs ${b.make} ${b.model}`, a, b, i, j]);
  }
}
// Related links: other comparisons featuring one of the two cars on this page,
// taken alternately from each so a HiLux-vs-Ranger page doesn't spend all eight
// slots on HiLux. Within a car, the most popular opponent comes first. Taking
// pairs in segment order instead — as this did — gave every page in a segment
// the same eight links, since the pair list starts with the leader's matchups.
function relatedFor(pair, pairs, n) {
  const [s, , a, b] = pair;
  const rest = pairs.filter(p => p[0] !== s);
  const has = (p, car) => p[2] === car || p[3] === car;
  const opponent = (p, car) => (p[2] === car ? p[5] : p[4]);
  const queueFor = car => rest.filter(p => has(p, car))
    .sort((x, y) => opponent(x, car) - opponent(y, car));
  const qa = queueFor(a), qb = queueFor(b);
  const picked = [], seen = new Set();
  const take = p => { if (p && !seen.has(p[0]) && picked.length < n) { seen.add(p[0]); picked.push(p); } };
  while (picked.length < n && (qa.length || qb.length)) { take(qa.shift()); take(qb.shift()); }
  // Small segments can run out of shared-car pairs; top up by popularity.
  for (const p of rest.slice().sort((x, y) => (x[4] + x[5]) - (y[4] + y[5]))) {
    if (picked.length >= n) break;
    take(p);
  }
  return picked.map(([s2, t2]) => [s2, t2]);
}

for (const [segment, pairs] of Object.entries(bySegment)) {
  for (const pair of pairs) {
    const [s, , a, b] = pair;
    fs.mkdirSync(path.join(vsDir, s), { recursive: true });
    fs.writeFileSync(path.join(vsDir, s, 'index.html'), page(a, b, segment, relatedFor(pair, pairs, 8)));
    urls.push(`/vs/${s}/`);
  }
}

// /vs/ index page — each segment shows a shortlist, the rest stay in the HTML
// behind a <details> so every page keeps an internal link from the index.
const TOP_N = 5;
const DIVERSITY = 1.5;
// Segment arrays are ordered most-popular-first, so a pair ranks by its two
// models' combined position. The per-model usage penalty is what stops the
// segment leader from taking every slot — without it the utes shortlist is
// five rows of "Toyota HiLux vs ...".
function topPairs(pairs, n) {
  const remaining = pairs.slice(), uses = new Map(), picked = [];
  const key = c => c.make + '|' + c.model;
  const cnt = c => uses.get(key(c)) || 0;
  while (picked.length < n && remaining.length) {
    let bi = 0, bs = Infinity;
    remaining.forEach((p, k) => {
      const s = p[4] + p[5] + DIVERSITY * (cnt(p[2]) + cnt(p[3]));
      if (s < bs) { bs = s; bi = k; }
    });
    const [p] = remaining.splice(bi, 1);
    for (const c of [p[2], p[3]]) uses.set(key(c), cnt(c) + 1);
    picked.push(p);
  }
  return picked;
}

const li = ([s, t]) => `<li><a href="/vs/${s}/">${esc(t)}</a></li>`;
const sections = Object.entries(bySegment).map(([segment, pairs]) => {
  const top = topPairs(pairs, TOP_N);
  const shown = new Set(top.map(p => p[0]));
  const rest = pairs.filter(p => !shown.has(p[0]));
  return `<h2>${esc(segment)}</h2>\n<ul class="top">` + top.map(li).join('\n') + '</ul>' +
    (rest.length
      ? `\n<details><summary>+${rest.length} more</summary>\n<ul>` + rest.map(li).join('\n') + '</ul></details>'
      : '');
}).join('\n');
fs.writeFileSync(path.join(vsDir, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Car comparisons — Spec Clash</title>
<meta name="description" content="Side-by-side spec comparisons of Australia's most popular utes, SUVs, EVs and performance cars.">
<link rel="canonical" href="${SITE}/vs/"><link rel="icon" type="image/svg+xml" href="/favicon.svg">
<style>body{background:#0a0a0a;color:#d8d8d8;font-family:'Barlow Condensed',system-ui,sans-serif;margin:0;padding:24px}main{max-width:860px;margin:0 auto}.logo{font-size:26px;font-weight:800;letter-spacing:3px;color:#fff;text-decoration:none}.logo b{color:#C8F04A}h2{color:#C8F04A;font-size:20px;letter-spacing:1px;margin-top:28px;margin-bottom:8px}ul{columns:2;padding-left:18px;font-size:15px}ul.top{columns:1;font-size:17px}li{margin:4px 0}a{color:#8ab4f8}details{margin-top:10px}summary{color:#8ab4f8;cursor:pointer;font-size:14px;letter-spacing:1px;padding:4px 0}details ul{margin-top:8px}@media(max-width:520px){ul{columns:1}}</style>
</head><body><main><a class="logo" href="/">SPEC<b>CLASH</b></a><h1>Popular car comparisons</h1>
${sections}
</main></body></html>\n`);
urls.unshift('/vs/');

// sitemap
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ['/', ...urls].map(u => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  '\n</urlset>\n');

console.log(`generated ${urls.length - 1} comparison pages + /vs/ index + sitemap.xml`);
