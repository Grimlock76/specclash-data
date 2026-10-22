// Animated 9:16 "video" deck for screen-recording TikToks — same look as the
// R34 vs Supra deck (black stage, lime grid fading top/bottom, blue vs red,
// Barlow Condensed + Inter, animated bars, tap/arrow navigation) — generated
// from a carousel config with every number pulled through the app's lookup.
//
//   node scripts/render-video-deck.mjs scripts/carousels/<name>.json out.html
//
// Uses the carousel config plus an optional "video" block:
//   { colors: [a, b], subs: [hook sub per car], kicker: "line<br><em>line</em>",
//     verdict: { title: "...<em>...</em>", text: "..." }, missingNote: "...",
//     rounds: { "<key>": { title, note, verdict } } }
import fs from 'node:fs'
import { loadTools } from './render-card.mjs'

const [cfgPath, out = 'deck.html'] = process.argv.slice(2)
if (!cfgPath) { console.error('usage: render-video-deck.mjs config.json [out.html]'); process.exit(1) }
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
const v = cfg.video || {}
const { vite, getCar } = await loadTools()
const cars = await Promise.all(cfg.cars.map(getCar))
await vite.close()

const names = cfg.names || cars.map(c => `${c.model} ${c.trim}`)
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const missing = x => x == null || x === '' || x === '—'
const num = x => { const m = String(x ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null }

// How each scored stat is shown: unit, label, which way wins, how to word the gap
const STAT = {
  hp: { title: 'Power', unit: 'kW', fmt: n => String(n), gap: d => `${d} kW more` },
  tq: { title: 'Torque', unit: 'Nm', fmt: n => String(n), gap: d => `${d} Nm more` },
  fx: { title: 'Fuel use', unit: 'L/100km', fmt: n => n.toFixed(1), gap: d => `${d.toFixed(1)} L/100km less`, note: 'Combined cycle. Lower is better.' },
  pr: { title: 'Price<br>when new', unit: '', fmt: n => '$' + n.toLocaleString('en-US'), gap: d => `$${d.toLocaleString('en-US')} cheaper`, note: 'Base price when new. Lower is better.' },
  se: { title: 'Seats', unit: 'seats', fmt: n => String(n), gap: d => `${d} more seat${d > 1 ? 's' : ''}` },
  wt: { title: 'Weight', unit: 'kg', fmt: n => n.toLocaleString('en-US'), gap: d => `${d.toLocaleString('en-US')} kg lighter`, note: 'Lower is better.' },
}

const tally = [0, 0]
const rounds = []
const spot = []
for (const slide of cfg.slides) {
  for (const [key, label, higher] of slide.rows) {
    if (higher == null || !STAT[key]) { spot.push([key, label]); continue }
    const st = STAT[key], o = (v.rounds || {})[key] || {}
    const raw = cars.map(c => c.specs?.[key])
    const n = raw.map(r => (missing(r) ? null : num(r)))
    let win = -1, verdict
    if (n[0] != null && n[1] != null) {
      if (n[0] === n[1]) verdict = o.verdict || `Dead heat &mdash; ${st.fmt(n[0])}${st.unit ? ' ' + st.unit : ''} each`
      else {
        win = (higher ? n[0] > n[1] : n[0] < n[1]) ? 0 : 1
        tally[win]++
        verdict = o.verdict || `${names[win]} &mdash; ${st.gap(Math.round(Math.abs(n[0] - n[1]) * 10) / 10)}`
      }
    } else verdict = o.verdict || v.missingNote || 'Not published yet'
    const max = Math.max(...n.filter(x => x != null), 1)
    rounds.push({ title: o.title || st.title, note: o.note || st.note, verdict, rows: cars.map((c, i) => ({
      name: names[i], cls: i ? 'b' : 'a',
      val: n[i] == null ? 'TBA' : st.fmt(n[i]), unit: n[i] == null ? '' : st.unit,
      w: n[i] == null ? 0 : Math.round(n[i] / max * 100), state: win === -1 && n[i] != null ? 'tie' : (win === i ? 'win' : (n[i] == null ? 'tba' : 'lose')),
    })) })
  }
}

const total = 2 + rounds.length + (spot.length ? 1 : 0)
let idx = 0
const foot = () => `<div class="foot"><span>${String(++idx).padStart(2, '0')} of ${String(total).padStart(2, '0')}</span><span>@specclash05</span></div>`
const [ca, cb] = v.colors || ['#3aa0ff', '#ff3b41']
const lead = tally[0] === tally[1] ? -1 : (tally[0] > tally[1] ? 0 : 1)
const partial = rounds.some(r => r.rows.some(x => x.state === 'tba'))
const vTitle = v.verdict?.title || (lead === -1 ? 'Dead heat<br><em>on paper.</em>'
  : `${esc(names[lead])}<br><em>${partial ? 'leads, for now.' : 'takes it.'}</em>`)
const vText = v.verdict?.text || `${tally[0]}&ndash;${tally[1]} on the specs we can compare.`

const slides = []
// Hook
slides.push(`<section class="slide on">
  <div class="eyebrow">Spec Clash</div>
  <div class="t-wrap">
    <div class="t-car a">${esc(names[0])}</div>
    <div class="t-sub">${esc((v.subs || [])[0] || `${cars[0].year} ${cars[0].make} ${cars[0].trim}`)}</div>
    <div class="vs">VS</div>
    <div class="t-car b">${esc(names[1])}</div>
    <div class="t-sub">${esc((v.subs || [])[1] || `${cars[1].year} ${cars[1].make} ${cars[1].trim}`)}</div>
    <div class="t-kicker">${v.kicker || esc(cfg.hook.join(' '))}</div>
  </div>
  <div class="foot"><span>Swipe</span><span>@specclash05</span></div>
</section>`); idx++
// Tale of the tape
if (spot.length) {
  slides.push(`<section class="slide">
  <div class="eyebrow">Tale of the tape</div>
  <div class="tape">${cars.map((c, i) => `<div class="tape-car">
      <div class="row-name ${i ? 'b' : 'a'}">${esc(names[i])}</div>
      ${spot.map(([k, l]) => `<div class="tape-row"><span>${esc(l)}</span><b>${esc(missing(c.specs?.[k]) ? 'TBA' : c.specs[k])}</b></div>`).join('')}
    </div>`).join('<div class="rule"></div>')}</div>
  ${foot()}
</section>`)
}
// Rounds
rounds.forEach((r, i) => {
  slides.push(`<section class="slide">
  <div class="eyebrow">Round ${String(i + 1).padStart(2, '0')}</div>
  <div class="stat-label">${r.title}</div>
  ${r.note ? `<div class="stat-note">${esc(r.note)}</div>` : ''}
  <div class="bars">${r.rows.map(x => `
    <div class="row ${x.state}">
      <div class="row-top"><span class="row-name ${x.cls}">${esc(x.name)}</span><span class="row-val">${x.state === 'win' ? '<i>&#9650;</i>' : ''}${esc(x.val)}<span>${esc(x.unit)}</span></span></div>
      <div class="track"><div class="fill ${x.state === 'tie' ? 'tie' : x.cls}" data-w="${x.w}"></div></div>
    </div>`).join('')}
  </div>
  <div class="verdict">${r.verdict}</div>
  ${foot()}
</section>`)
})
// Verdict
slides.push(`<section class="slide">
  <div class="eyebrow">Verdict</div>
  <div class="score"><span class="a">${tally[0]}</span><span class="dash">&ndash;</span><span class="b">${tally[1]}</span></div>
  <div class="big">
    <h2>${vTitle}</h2>
    <p>${vText}</p>
  </div>
  <div class="rule"></div>
  <div class="cta">Compare 43,000+ trims yourself<br><b>spec-clash.vercel.app</b></div>
  ${foot()}
</section>`)

const title = `${names[0]} vs ${names[1]}`
const html = `<title>${esc(title)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;700;900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  /* Layout: one 9:16 stage, screen-recordable; controls sit outside it so they stay out of the crop. Single dark look by design. */
  :root{
    --bg:#050505; --page:#000; --ink:#ffffff; --dim:#b4b4b4; --faint:#8f8f8f; --line:#2e2e2e; --track:#1b1b1b;
    --lime:#c6f135; --a:${ca}; --b:${cb};
    --display:'Barlow Condensed','Arial Narrow',Impact,sans-serif;
    --body:'Inter',system-ui,-apple-system,sans-serif;
    color-scheme:dark;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{height:100%}
  body{background:var(--page);color:var(--ink);font-family:var(--body);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;
    min-height:100%;padding-block:12px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
  .stage{position:relative;width:min(430px,100%);aspect-ratio:9/16;max-height:calc(100dvh - 90px);max-width:100%;background:var(--bg);overflow:hidden;user-select:none;container-type:size}
  .stage::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;
    background-image:linear-gradient(rgba(198,241,53,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(198,241,53,.16) 1px,transparent 1px);
    background-size:34px 34px;
    -webkit-mask-image:linear-gradient(to bottom,#000 0%,transparent 48%,transparent 52%,#000 100%);
    mask-image:linear-gradient(to bottom,#000 0%,transparent 48%,transparent 52%,#000 100%)}
  .glow{position:absolute;inset:-20px;z-index:0;pointer-events:none;
    background-image:linear-gradient(rgba(198,241,53,.30) 1px,transparent 1px),linear-gradient(90deg,rgba(198,241,53,.30) 1px,transparent 1px);
    background-size:34px 34px;filter:blur(4px);opacity:.42;
    -webkit-mask-image:linear-gradient(to bottom,#000 0%,transparent 45%,transparent 55%,#000 100%);
    mask-image:linear-gradient(to bottom,#000 0%,transparent 45%,transparent 55%,#000 100%)}
  .slide{position:absolute;inset:0;z-index:1;display:none;flex-direction:column;padding:44px 30px 30px}
  .slide.on{display:flex;animation:in .38s ease-out both}
  @keyframes in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  .eyebrow{font-size:9.5px;font-weight:700;letter-spacing:.42em;text-transform:uppercase;color:var(--lime)}
  .rule{height:1px;background:var(--line);margin:16px 0}
  .t-wrap{flex:1;display:flex;flex-direction:column;justify-content:center;text-align:center}
  .t-car{font-family:var(--display);font-weight:900;font-size:54px;line-height:.9;letter-spacing:-.015em;text-transform:uppercase;text-wrap:balance}
  .t-car.a{color:var(--a)} .t-car.b{color:var(--b)}
  .t-sub{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);margin-top:9px}
  .vs{width:56px;height:56px;margin:22px auto;border:2px solid var(--ink);border-radius:50%;display:flex;align-items:center;justify-content:center;
    font-family:var(--display);font-weight:900;font-size:22px;letter-spacing:.04em}
  .t-kicker{margin-top:30px;font-family:var(--display);font-weight:700;font-size:23px;line-height:1.12;text-transform:uppercase;text-wrap:balance}
  .t-kicker em{color:var(--lime);font-style:normal}
  .tape{flex:1;display:flex;flex-direction:column;justify-content:center;gap:4px}
  .tape-car{display:flex;flex-direction:column;gap:10px}
  .tape-row{display:flex;justify-content:space-between;gap:12px;align-items:baseline;border-bottom:1px solid var(--line);padding-bottom:7px}
  .tape-row span{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--faint)}
  .tape-row b{font-family:var(--display);font-weight:700;font-size:21px;text-align:right}
  .stat-label{font-family:var(--display);font-weight:900;font-size:46px;line-height:.95;text-transform:uppercase;margin-top:6px}
  .stat-note{font-size:11.5px;line-height:1.5;color:var(--dim);margin-top:10px}
  .bars{flex:1;display:flex;flex-direction:column;justify-content:center;gap:34px}
  .row-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:9px;gap:10px}
  .row-name{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
  .row-name.a{color:var(--a)} .row-name.b{color:var(--b)}
  .row-val{font-family:var(--display);font-weight:900;font-size:36px;line-height:1;letter-spacing:-.01em;font-variant-numeric:tabular-nums;white-space:nowrap}
  .row-val span{font-size:14px;font-weight:700;color:var(--dim);margin-left:4px}
  .row-val i{font-style:normal;font-size:18px;color:var(--lime);margin-right:6px;vertical-align:4px}
  .row.lose .row-val{color:var(--faint)}
  .row.tba .row-val{color:var(--faint)}
  .track{height:7px;background:var(--track);overflow:hidden}
  .row.tba .track{background:repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px)}
  .fill{height:100%;width:0;transition:width .85s cubic-bezier(.2,.8,.2,1)}
  .fill.a{background:var(--a)} .fill.b{background:var(--b)} .fill.tie{background:var(--lime)}
  .row.lose .fill{opacity:.45}
  .verdict{font-family:var(--display);font-weight:700;font-size:19px;text-transform:uppercase;border-top:2px solid var(--ink);padding-top:15px;letter-spacing:.02em}
  .score{display:flex;justify-content:center;align-items:baseline;gap:22px;margin-top:26px;font-family:var(--display);font-weight:900;font-size:96px;line-height:1;font-variant-numeric:tabular-nums}
  .score .a{color:var(--a)} .score .b{color:var(--b)} .score .dash{color:var(--line);font-size:60px}
  .big{flex:1;display:flex;flex-direction:column;justify-content:center}
  .big h2{font-family:var(--display);font-weight:900;font-size:50px;line-height:.92;text-transform:uppercase;letter-spacing:-.015em;text-wrap:balance}
  .big h2 em{color:var(--lime);font-style:normal}
  .big p{font-size:13.5px;line-height:1.62;color:var(--dim);margin-top:18px}
  .cta{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);text-align:center}
  .cta b{color:var(--lime);font-weight:700}
  .foot{display:flex;justify-content:space-between;align-items:center;font-size:8.5px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--faint);margin-top:16px}
  .tap{position:absolute;top:0;bottom:0;width:38%;z-index:5;cursor:pointer;background:transparent;border:0}
  .tap:focus-visible{outline:2px solid var(--lime);outline-offset:-4px}
  .tap.prev{left:0}.tap.next{right:0}
  .pips{position:absolute;top:20px;left:30px;right:30px;z-index:6;display:flex;gap:4px}
  .pip{flex:1;height:2px;background:#333}
  .pip.on{background:var(--ink)}
  .controls{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
  .controls button{font:600 12px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--ink);background:#141414;border:1px solid var(--line);padding:9px 14px;cursor:pointer}
  .controls button:hover{border-color:var(--lime)}
  .controls button:focus-visible{outline:2px solid var(--lime);outline-offset:2px}
  .controls button[aria-pressed="true"]{background:var(--lime);color:#000;border-color:var(--lime)}
  @media (prefers-reduced-motion:reduce){.slide.on{animation:none}.fill{transition:none}}
</style>
<div class="stage" id="stage">
  <div class="glow"></div>
  <div class="pips" id="pips"></div>
  <button class="tap prev" id="prev" aria-label="Previous slide"></button>
  <button class="tap next" id="next" aria-label="Next slide"></button>
  ${slides.join('\n  ')}
</div>
<div class="controls">
  <button id="restart" type="button">Restart</button>
  <button id="auto" type="button" aria-pressed="false">Auto-play</button>
</div>
<script>
(function(){
  var slides=[].slice.call(document.querySelectorAll('.slide')),pips=document.getElementById('pips'),i=0,timer=null;
  slides.forEach(function(){var p=document.createElement('div');p.className='pip';pips.appendChild(p)});
  var pipEls=[].slice.call(pips.children);
  function fill(el){el.querySelectorAll('.fill').forEach(function(f){f.style.width='0%';setTimeout(function(){f.style.width=f.dataset.w+'%'},120)})}
  function show(n){if(n<0||n>=slides.length)return;slides[i].classList.remove('on');i=n;slides[i].classList.add('on');
    pipEls.forEach(function(p,k){p.classList.toggle('on',k<=i)});fill(slides[i])}
  function stop(){clearInterval(timer);timer=null;auto.setAttribute('aria-pressed','false')}
  var auto=document.getElementById('auto');
  auto.addEventListener('click',function(){ if(timer){stop();return}
    show(0);auto.setAttribute('aria-pressed','true');
    timer=setInterval(function(){ if(i>=slides.length-1){stop();return} show(i+1)},3200)});
  document.getElementById('restart').addEventListener('click',function(){stop();show(0)});
  document.getElementById('next').addEventListener('click',function(){show(i+1)});
  document.getElementById('prev').addEventListener('click',function(){show(i-1)});
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();show(i+1)}
    if(e.key==='ArrowLeft')show(i-1);
    if(e.key==='a'||e.key==='A')auto.click()});
  pipEls[0].classList.add('on');fill(slides[0]);
})();
</script>
`
fs.writeFileSync(out, html)
console.log(`wrote ${out}: ${total} slides, score ${tally[0]}–${tally[1]}`)
