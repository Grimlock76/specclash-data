// Spec-Clash silhouette lineup (v2, Nov 2026). Original vector art drawn and
// signed off shape by shape with Sam — NOT traced from any real car, so there
// is no image licensing or copyright exposure.
//
// Shared by CarSilhouette.jsx (SVG) and matchupCard.js / render-carousel.mjs
// (canvas, via Path2D, which accepts the same path strings).
//
// Coordinate system: every shape is drawn in its own local space, then moved
// by [dx, dy] so it sits centred on x=150 with its tyres on the ground at
// y=100. The shared viewBox is VIEWBOX below, so tall vehicles (4WD, dual-cab)
// really do stand taller than a sedan when shown side by side. Front of the
// car faces right.

export const DARK = '#0d0d0d'
export const VIEWBOX = { x: 0, y: -20, w: 300, h: 126 }
export const TAIL = '#FF2A2A'

// ── element helpers ───────────────────────────────────────────────────────
// f: fill ('body' = the slot colour), o: fill opacity, s: stroke colour,
// so: stroke opacity, w: stroke width, dash, cap, join
const LINE = d => ({ d, s: '#000', so: 0.38, w: 1, join: 'round' })
const rect = (x, y, w, h, r = 0) => r
  ? `M${x + r},${y} L${x + w - r},${y} A${r},${r} 0 0 1 ${x + w},${y + r} L${x + w},${y + h - r} A${r},${r} 0 0 1 ${x + w - r},${y + h} L${x + r},${y + h} A${r},${r} 0 0 1 ${x},${y + h - r} L${x},${y + r} A${r},${r} 0 0 1 ${x + r},${y} Z`
  : `M${x},${y} L${x + w},${y} L${x + w},${y + h} L${x},${y + h} Z`
const circle = (cx, cy, r) => `M${cx + r},${cy} A${r},${r} 0 1 0 ${cx - r},${cy} A${r},${r} 0 1 0 ${cx + r},${cy} Z`
const HANDLES = (...xy) => ({ d: xy.map(([x, y]) => rect(x, y, 10, 2.5, 1.2)).join(' '), f: '#000', o: 0.45 })
const FUEL = (cx, cy) => ({ d: circle(cx, cy, 3.2), s: '#000', so: 0.38, w: 1 })
const HEAD = d => ({ d, f: '#fff', o: 0.75 })
const TAILL = d => ({ d, f: TAIL, s: '#141414', w: 1.5 })
const TRIM = (d, f = '#1c1c1c') => ({ d, f })
const RAILS = d => ({ d, s: '#1c1c1c', w: 2.5 })
const FLARES = (d, w = 4) => ({ d, s: '#141414', w })

// Wheel styles: tyre radius, rim radius, spoke length/width, hub, tread ring
export const WHEELS = {
  std: { r: 19, rim: 13, spoke: 12, sw: 2.2, hub: 3 },
  van: { r: 20, rim: 13, spoke: 12, sw: 2.4, hub: 3 },
  suv: { r: 22, rim: 14.5, spoke: 13.5, sw: 2.4, hub: 3 },
  mud: { r: 24, rim: 13, spoke: 12, sw: 2.8, hub: 3.5, tread: true },
  mud25: { r: 25, rim: 13, spoke: 12, sw: 2.8, hub: 3.5, tread: true },
}

// ── the lineup ────────────────────────────────────────────────────────────
export const SHAPES = {
  sedan: {
    dx: 12, dy: 0, shadow: [138, 101, 132],
    body: 'M10,84 L10,64 C10,58 14,56 22,55 L42,54 C54,52 62,47 72,40 C86,30 100,26 116,26 L142,26 C156,27 168,34 182,46 L192,53 L240,56 C258,58 266,62 266,68 L266,84 L238,84 A24,24 0 0 0 190,84 L84,84 A24,24 0 0 0 36,84 Z',
    glass: 'M80,48 C90,38 100,31 114,30 L124,30 L124,48 Z M130,30 L140,30 C152,31 162,37 174,46 L176,48 L130,48 Z',
    post: [
      LINE('M79,49 L82,74 M127,48 L127,80 M182,50 L182,80 M84,80 L190,80 M194,56 L246,59 M10,73 L37,73 M237,74 L266,74'),
      HANDLES([106, 53], [160, 53]),
      HEAD('M255,59 L264,62 L266,68 L255,66 Z'), TAILL('M12,59 L20,57 L20,67 L12,68 Z'),
    ],
    wheels: [{ x: 60, y: 81, k: 'std' }, { x: 214, y: 81, k: 'std' }],
  },

  wagon: {
    dx: 18, dy: 0, shadow: [132, 101, 126],
    pre: [RAILS('M26,23 L150,23 M34,23 L34,26 M90,23 L90,26 M146,23 L146,26')],
    body: 'M10,84 L10,62 L14,36 C15,29 19,26 26,26 L142,26 C156,27 168,34 182,46 L190,51 L228,53 C246,55 254,60 254,66 L254,84 L232,84 A24,24 0 0 0 184,84 L84,84 A24,24 0 0 0 36,84 Z',
    glass: 'M22,31 L70,30 L70,48 L17,48 Z M76,30 L124,30 L124,48 L76,48 Z M130,30 L140,30 C152,31 162,37 174,46 L176,48 L130,48 Z',
    post: [
      LINE('M73,48 L73,64 M127,48 L127,80 M179,50 L179,80 M84,80 L184,80 M192,54 L236,56 M10,73 L37,73 M231,74 L254,74'),
      HANDLES([106, 53], [158, 53]),
      HEAD('M243,57 L252,60 L254,66 L243,64 Z'), TAILL('M14,44 L19,44 L18,60 L12,60 Z'),
    ],
    wheels: [{ x: 60, y: 81, k: 'std' }, { x: 208, y: 81, k: 'std' }],
  },

  hotHatch: {
    dx: 25, dy: 0, shadow: [125, 101, 120],
    body: 'M10,84 C8,70 10,56 16,48 L29,31 L19,28 L21,23 L132,23 C146,24 158,30 172,44 L212,52 C228,55 238,62 240,72 L240,84 L224,84 A24,24 0 0 0 176,84 L82,84 A24,24 0 0 0 34,84 Z',
    glass: 'M38,31 L94,28 L94,46 L28,46 Z M100,28 L130,28 C142,29 152,34 164,46 L100,46 Z',
    post: [
      LINE('M97,46 L97,80 M170,48 L170,80 M82,80 L176,80 M178,49 L216,56 M10,72 L37,72 M223,73 L240,73'),
      HANDLES([150, 51]),
      HEAD('M230,58 L239,62 L240,68 L230,64 Z'), TAILL('M15,53 L21,51 L21,62 L13,63 Z'),
    ],
    wheels: [{ x: 58, y: 81, k: 'std' }, { x: 200, y: 81, k: 'std' }],
  },

  muscleCoupe: {
    dx: 0, dy: 0, shadow: [150, 101, 146],
    pre: [TRIM('M198,53 L204,47 L232,47 L238,54 Z', 'body'), TRIM('M229,48 L232,47 L238,54 L233,54 Z', DARK)],
    body: 'M8,84 C6,76 6,64 10,56 L12,50 L40,51 C62,40 82,29 106,28 L128,28 C142,29 152,37 162,50 L176,52 C200,50 240,52 264,56 C282,59 292,65 294,74 L294,84 L264,84 A24,24 0 0 0 216,84 L82,84 A24,24 0 0 0 34,84 Z',
    glass: 'M70,49 C84,39 96,33 108,32 L126,32 C136,33 144,39 152,49 Z',
    post: [
      TRIM(rect(110, 32, 4, 17), 'body'),
      LINE('M112,49 L112,80 M166,52 L166,80 M82,80 L216,80 M178,54 C204,53 240,55 268,59 M9,72 L37,72 M261,74 L294,74'),
      HANDLES([146, 55]),
      TRIM(rect(104, 82, 74, 3.5, 1.7), '#9a9a9a'),
      HEAD('M284,63 L293,66 L294,71 L284,69 Z'), TAILL('M9,56 L16,54 L16,65 L8,66 Z'),
    ],
    wheels: [{ x: 58, y: 79, k: 'std', s: 1.1 }, { x: 240, y: 81, k: 'std' }],
  },

  sportsCar: {
    dx: -1, dy: 0, shadow: [150, 101, 146],
    pre: [TRIM('M10,44 L38,44 L40,48 L22,48 L22,57 L16,57 L16,48 L10,48 Z')],
    body: 'M10,84 L10,66 C10,60 13,58 18,57 L56,50 C78,42 96,36 116,36 L148,36 C162,37 176,45 190,55 C204,52 222,51 240,54 C262,57 282,63 290,70 L292,84 L258,84 A24,24 0 0 0 210,84 L90,84 A24,24 0 0 0 42,84 Z',
    glass: 'M100,54 C108,45 116,40 124,40 L146,40 C158,41 170,47 182,55 Z M96,64 L116,60 L112,76 L96,76 Z',
    post: [
      LINE('M130,55 L128,80 M188,57 L186,80 M90,80 L210,80 M10,74 L41,74 M261,76 L292,76'),
      HANDLES([166, 60]),
      HEAD('M272,63 L288,69 L289,73 L270,67 Z'), TAILL('M12,61 L19,59 L19,68 L11,69 Z'),
    ],
    wheels: [{ x: 66, y: 81, k: 'std' }, { x: 234, y: 81, k: 'std' }],
  },

  convertible: {
    dx: 30, dy: 0, shadow: [120, 101, 114],
    pre: [
      TRIM('M84,55 L84,43 C84,39 94,39 94,43 L94,55 Z'),
      { d: 'M104,56 C104,45 116,45 116,56', s: '#9a9a9a', w: 2 },
      { d: 'M140,55 L122,36', s: '#cfcfcf', w: 3, cap: 'round' },
    ],
    body: 'M10,84 L10,64 C10,59 14,57 20,57 L44,56 C50,47 70,47 76,55 L136,55 L196,58 C214,60 226,64 228,70 L230,84 L200,84 A24,24 0 0 0 152,84 L78,84 A24,24 0 0 0 30,84 Z',
    post: [
      LINE('M92,56 L92,80 M146,57 L146,80 M78,80 L152,80 M150,58 L204,61 M10,73 L30,73 M198,75 L230,75'),
      HANDLES([126, 61]),
      HEAD('M214,63 L227,67 L228,72 L212,68 Z'), TAILL('M12,61 L19,60 L19,68 L11,69 Z'),
    ],
    wheels: [{ x: 54, y: 81, k: 'std' }, { x: 176, y: 81, k: 'std' }],
  },

  streetUte: {
    dx: 12, dy: 0, shadow: [138, 101, 132],
    body: 'M10,84 L10,58 C10,55 12,54 16,54 L104,54 L108,32 C109,28 112,26 118,26 L142,26 C156,27 168,34 182,46 L192,53 L240,56 C258,58 266,62 266,68 L266,84 L238,84 A24,24 0 0 0 190,84 L84,84 A24,24 0 0 0 36,84 Z',
    glass: 'M114,31 L140,30 C152,31 162,37 174,46 L176,48 L112,48 Z',
    post: [
      LINE('M104,54 L104,80 M111,48 L111,80 M182,46 L182,80 M84,80 L190,80 M10,58 L104,58 M188,50 L255,59 M10,73 L38.7,73 M235.8,74 L266,74'),
      FUEL(90, 66), HANDLES([158, 53]),
      HEAD('M255,59 L264,62 L266,68 L255,66 Z'), TAILL('M12,60 L18,60 L18,69 L12,69 Z'),
    ],
    wheels: [{ x: 60, y: 81, k: 'std' }, { x: 214, y: 81, k: 'std' }],
  },

  van: {
    dx: 3.5, dy: -4, shadow: [146, 105, 142],
    body: 'M8,78 L8,16 C8,10 12,6 20,6 L196,6 C208,6 216,10 224,20 L240,40 L270,44 C280,45 284,50 284,58 L284,78 L257.3,78 A26,26 0 0 0 206.7,78 L87.3,78 A26,26 0 0 0 36.7,78 Z',
    glass: 'M120,14 L176,14 L176,40 L120,40 Z M184,14 L200,14 C208,15 213,19 218,25 L230,40 L184,40 Z',
    post: [
      LINE('M14,10 L14,64 M114,10 L114,74 M180,10 L180,74 M236,42 L238,58 M20,46 L112,46 M88,74 L206,74 M242,46 L272,50'),
      HANDLES([164, 48], [188, 48]),
      TRIM(rect(266, 62, 22, 18, 3)), TRIM(rect(5, 66, 18, 14, 3)),
      HEAD('M274,48 L284,50 L284,59 L274,58 Z'), TAILL('M8,26 L13,26 L13,48 L8,48 Z'),
    ],
    wheels: [{ x: 62, y: 84, k: 'van' }, { x: 232, y: 84, k: 'van' }],
  },

  suv: {
    // body drawn 4px lower than the wheels' frame (signed off that way)
    dx: 10, dy: -7, bodyDy: 4, shadow: [140, 107, 134],
    pre: [RAILS('M50,6 L146,5 M58,6 L58,9 M100,6 L100,8 M140,5 L140,8')],
    body: 'M10,76 L10,44 C10,36 13,30 20,26 L36,14 C42,10 48,9 58,9 L146,8 C158,8 168,14 178,24 L194,40 L240,42 C258,43 268,48 270,54 L270,76 L248.7,76 A27,27 0 0 0 195.3,76 L90.7,76 A27,27 0 0 0 37.3,76 Z',
    glass: 'M28,26 L40,16 L66,13 L66,37 L20,36 Z M72,13 L118,12 L118,40 L72,38 Z M124,12 L144,12 C154,12 162,17 170,25 L184,40 L124,40 Z',
    post: [
      LINE('M69,37 L69,54 M121,40 L121,72 M190,42 L190,68 M91,72 L195,72 M198,43 L258,46 M10,66 L37,66 M247,66 L270,66'),
      HANDLES([104, 44], [166, 44]),
      FLARES('M35.3,76 A29,29 0 0 1 92.7,76 M193.3,76 A29,29 0 0 1 250.7,76', 3.5),
      TRIM(rect(93, 74, 100, 3), '#141414'),
      HEAD('M259,46 L268,50 L270,56 L259,54 Z'), TAILL('M12,44 L18,44 L18,58 L12,58 Z'),
    ],
    wheels: [{ x: 64, y: 85, k: 'suv' }, { x: 222, y: 85, k: 'suv' }],
  },

  dualCab: {
    dx: 1, dy: -18, shadow: [150, 119, 146],
    pre: [TRIM('M92,44 L98,26 L104,26 L104,44 Z')],
    body: 'M6,80 L6,44 L104,44 L108,16 C109,12 112,10 118,10 L176,10 C186,10 192,14 200,22 L216,40 L272,44 C286,45 292,50 292,58 L292,76 L286,80 L264.1,80 A31,31 0 0 0 207.9,80 L96.1,80 A31,31 0 0 0 39.9,80 Z',
    glass: 'M114,16 L150,16 L150,38 L112,38 Z M156,16 L182,16 C188,16 192,19 196,24 L208,38 L156,38 Z',
    post: [
      LINE('M105,44 L105,80 M111,38 L111,76 L206,76 L208,38 M153,38 L153,76 M216,47 L286,51 M14,46 L14,79'),
      HANDLES([138, 43], [192, 43]), FUEL(84, 54),
      FLARES('M37.7,80 A33,33 0 0 1 98.3,80 M205.7,80 A33,33 0 0 1 266.3,80', 4.5),
      TRIM(rect(102, 82, 100, 4, 2), '#2b2b2b'),
      TRIM('M270,76 L292,72 L292,78 L284,84 L268,84 Z'),
      HEAD('M283,49 L292,52 L292,58 L283,56 Z'), TAILL('M6,46 L12,46 L12,57 L6,57 Z'),
    ],
    wheels: [{ x: 68, y: 93, k: 'mud25' }, { x: 236, y: 93, k: 'mud25' }],
  },

  fourWD: {
    dx: 0, dy: -18, shadow: [148, 119, 146],
    pre: [RAILS('M40,1 L170,1 M48,1 L48,4 M108,1 L108,4 M164,1 L164,4')],
    body: 'M8,80 L8,40 C8,30 12,22 20,17 L32,9 C36,6 40,4 48,4 L170,4 C180,4 186,7 192,12 L214,40 L266,44 C284,46 292,52 292,60 L292,76 L286,80 L264.3,80 A30,30 0 0 0 207.7,80 L96.3,80 A30,30 0 0 0 39.7,80 Z',
    glass: 'M24,20 L36,11 L62,10 L62,38 L16,38 Z M68,10 L122,10 L122,38 L68,38 Z M128,10 L168,10 C176,10 182,13 186,18 L202,38 L128,38 Z',
    post: [
      LINE('M65,38 L65,58 M125,38 L125,76 M205,40 L205,72 M97,76 L207,76 M214,46 L284,50 M8,70 L38,70'),
      HANDLES([108, 43], [186, 43]),
      FLARES('M37.6,80 A32,32 0 0 1 98.4,80 M205.6,80 A32,32 0 0 1 266.4,80', 4),
      TRIM(rect(102, 82, 100, 4, 2), '#2b2b2b'),
      TRIM('M272,74 L292,70 L292,78 L284,84 L270,84 Z'),
      HEAD('M282,50 L292,54 L292,60 L282,58 Z'), TAILL('M10,42 L16,42 L16,58 L10,58 Z'),
    ],
    wheels: [{ x: 68, y: 94, k: 'mud' }, { x: 236, y: 94, k: 'mud' }],
  },
}

// Old archetype keys (v1 lineup) → v2 shapes. Era-specific old-school shapes
// are next on the list; until then the classic keys share the modern art.
export const LEGACY = {
  sedanClassic: 'sedan', sedanBox: 'sedan', sedanModern: 'sedan',
  coupeClassic: 'muscleCoupe', coupeModern: 'sportsCar', supercar: 'sportsCar',
  hatchClassic: 'hotHatch', hatchModern: 'hotHatch',
  wagonClassic: 'wagon', wagonModern: 'wagon',
  fourWheelDriveBox: 'fourWD', suvModern: 'suv',
  uteCar: 'streetUte', uteDualcab: 'dualCab',
  vanClassic: 'van', vanModern: 'van',
}
export const shapeFor = key => SHAPES[key] || SHAPES[LEGACY[key]] || SHAPES.sedan

// Five spokes, first pointing straight up
export const spokePath = (len) => [0, 72, 144, 216, 288]
  .map(a => { const r = (a - 90) * Math.PI / 180; return `M0,0 L${(Math.cos(r) * len).toFixed(2)},${(Math.sin(r) * len).toFixed(2)}` })
  .join(' ')

// ── canvas renderer (matchup card + carousel script) ──────────────────────
// Draws `key` with the shared viewBox mapped to a box of width w at (x, y).
export function drawShape(ctx, key, color, x, y, w) {
  const S = shapeFor(key)
  const sc = w / VIEWBOX.w
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(sc, sc)
  ctx.translate(-VIEWBOX.x, -VIEWBOX.y)
  ctx.translate(S.dx, S.dy)
  const [scx, scy, srx] = S.shadow
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath(); ctx.ellipse(scx, scy, srx, 3, 0, 0, Math.PI * 2); ctx.fill()
  const el = e => {
    const p = new Path2D(e.d)
    if (e.f) { ctx.globalAlpha = e.o ?? 1; ctx.fillStyle = e.f === 'body' ? color : e.f; ctx.fill(p) }
    if (e.s) {
      ctx.globalAlpha = e.so ?? 1; ctx.strokeStyle = e.s; ctx.lineWidth = e.w || 1
      ctx.lineCap = e.cap || 'butt'; ctx.lineJoin = e.join || 'miter'
      ctx.setLineDash(e.dash || []); ctx.stroke(p); ctx.setLineDash([])
    }
    ctx.globalAlpha = 1
  }
  ctx.save(); ctx.translate(0, S.bodyDy || 0)
  ;(S.pre || []).forEach(el)
  el({ d: S.body, f: 'body' })
  if (S.glass) el({ d: S.glass, f: DARK })
  ;(S.post || []).forEach(el)
  ctx.restore()
  for (const wh of S.wheels) {
    const W = WHEELS[wh.k], s = wh.s || 1
    ctx.save(); ctx.translate(wh.x, wh.y); ctx.scale(s, s)
    ctx.fillStyle = '#141414'; ctx.beginPath(); ctx.arc(0, 0, W.r, 0, Math.PI * 2); ctx.fill()
    if (W.tread) {
      ctx.strokeStyle = '#3a3a3a'; ctx.lineWidth = 3; ctx.setLineDash([3, 3])
      ctx.beginPath(); ctx.arc(0, 0, W.r - 1.5, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([])
    }
    ctx.fillStyle = '#2b2b2b'; ctx.beginPath(); ctx.arc(0, 0, W.rim, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = '#9a9a9a'; ctx.lineWidth = W.sw; ctx.stroke(new Path2D(spokePath(W.spoke)))
    ctx.fillStyle = '#9a9a9a'; ctx.beginPath(); ctx.arc(0, 0, W.hub, 0, Math.PI * 2); ctx.fill()
    ctx.restore()
  }
  ctx.restore()
}
