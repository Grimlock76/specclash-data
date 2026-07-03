// Stylised side-profile silhouettes — the "image slot" for every make/model.
// All paths are hand-authored original vector art (NOT traced from photos),
// so there is no image licensing or copyright exposure. Tinted via `color`.
// viewBox 200x76, ground y=64, front of car faces right.
// Each archetype = body (currentColor) + windows (punched dark) + lite
// (head/tail lights, lightened) + deco (body-coloured accents) + dark
// (dark accents) + rimmed wheels + ground shadow.

const DARK = '#0d0d0d'
const poly = pts => (pts.startsWith('M') ? pts : 'M' + pts.split(' ').join(' L') + ' Z')

// Era/style archetypes give each car a period-correct shape without
// needing per-model artwork. Keyed by pickArchetype() below.
const PATHS = {
  // ── Sedans ──
  sedanClassic: { // 60s-70s chrome era: long flat bonnet & boot, upright cabin
    body: 'M4,64 L4,50 Q4,46 14,46 L62,44 L72,31 Q74,28 82,28 L112,28 Q117,28 120,32 L130,44 L188,46 Q196,48 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['97,32 112,32 118,43 97,43', '93,32 79,32 72,43 93,43'],
    lite: ['188,48 196,49 196,54 188,53', '4,48 9,48 9,53 4,53'],
  },
  sedanBox: { // 80s-90s angular three-box
    body: 'M6,64 L8,48 L36,45 L56,31 L70,28 L116,28 L127,32 L140,45 L184,47 L194,53 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['98,31 115,31 125,43 98,43', '94,31 68,31 56,43 94,43'],
    lite: ['186,48 194,50 194,55 186,54', '6,49 11,49 11,54 6,54'],
  },
  sedanModern: { // 2000s+ curvy
    body: 'M6,64 L9,52 Q11,48 30,46 L52,32 Q57,28 68,28 L112,28 Q121,28 127,34 L141,46 L172,48 Q192,50 194,58 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['98,31 113,31 123,43 98,43', '94,31 69,31 59,43 94,43'],
    lite: ['186,49 194,51 194,56 186,55', '6,50 12,50 12,55 6,55'],
  },

  // ── Coupes ──
  coupeClassic: { // muscle era: cab set back, long bonnet, fastback tail + scoop
    body: 'M6,64 L10,50 Q13,45 26,44 L40,43 L62,31 Q68,27 80,27 L98,27 Q110,28 120,38 L130,44 L184,47 Q196,49 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['92,31 102,30 113,41 92,41', '88,31 72,31 61,41 88,41'],
    lite: ['188,48 196,50 196,55 188,54', '6,47 12,47 12,52 6,52'],
    deco: ['146,46 149,42 163,42 166,46'],
  },
  coupeModern: { // sleek 2+2
    body: 'M6,64 L10,53 Q13,49 36,45 L62,31 Q69,26 84,26 L102,26 Q118,27 133,38 L149,46 L178,50 Q193,53 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['96,30 107,29 122,41 96,41', '92,30 74,30 65,41 92,41'],
    lite: ['186,51 194,53 194,58 186,57', '6,50 12,50 12,55 6,55'],
  },
  supercar: { // low mid-engine wedge: teardrop canopy, rear wing
    body: 'M4,64 L4,52 Q4,48 12,47 L24,46 Q28,39 44,35 Q60,31 78,31 L90,31 Q110,32 128,40 Q142,45 160,48 L186,51 Q195,53 195,60 L195,64 L164,64 A12,12 0 0 0 140,64 L60,64 A12,12 0 0 0 36,64 Z',
    windows: ['M78,34 L92,34 Q104,35 114,40 L106,42 L78,42 Z', 'M74,34 Q60,35 52,39 L64,42 L74,42 Z'],
    lite: ['184,51 193,53 193,56 184,55', '4,48 10,48 10,52 4,52'],
    deco: ['4,41 26,41 26,43 4,43', '12,43 16,43 16,47 12,47'],
  },

  // ── Hatches ──
  hatchClassic: { // boxy 70s-80s two-box
    body: 'M22,64 L22,34 L28,30 L80,28 L88,30 L110,32 L126,44 L180,47 L192,51 L192,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['92,33 106,34 117,43 92,43', '88,33 58,32 56,43 88,43', '52,32 30,33 28,43 52,43'],
    lite: ['184,49 192,52 192,56 184,55', '22,35 26,34 26,40 22,40'],
  },
  hatchModern: { // stubby tall
    body: 'M26,64 L26,42 Q26,31 38,29 L88,26 Q98,26 104,29 L128,33 L146,46 L180,49 Q193,52 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['96,31 109,32 122,44 96,44', '92,31 48,30 42,44 92,44'],
    lite: ['184,50 193,53 193,58 184,57', '26,43 31,42 31,48 26,48'],
  },

  // ── Wagons ──
  wagonClassic: { // long flat roof to an upright tail
    body: 'M4,64 L4,38 Q4,32 12,31 L52,29 L120,29 L130,33 L142,46 L186,48 Q196,50 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['114,33 126,34 136,44 114,44', '110,33 68,32 68,44 110,44', '64,32 12,33 10,44 64,44'],
    lite: ['188,49 196,51 196,56 188,55', '4,39 9,39 9,45 4,45'],
  },
  wagonModern: {
    body: 'M8,64 L8,42 Q8,33 20,31 L48,28 L116,28 Q124,28 130,34 L142,45 L176,48 Q193,51 194,59 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
    windows: ['100,31 114,31 126,44 100,44', '96,31 58,31 54,44 96,44', '50,31 22,33 16,44 50,44'],
    lite: ['186,49 194,52 194,57 186,56', '8,43 13,42 13,48 8,48'],
  },

  // ── SUVs / 4x4s ──
  fourWheelDriveBox: { // LC70/Patrol/Defender: flat roof + snorkel + roof rack
    body: 'M8,64 L8,32 Q8,26 18,26 L102,24 L112,26 L124,38 L182,41 Q194,43 194,58 L194,64 L167,64 A15,15 0 0 0 137,64 L63,64 A15,15 0 0 0 33,64 Z',
    windows: ['104,28 111,29 119,39 104,39', '100,28 64,28 64,39 100,39', '60,28 18,29 16,39 60,39'],
    lite: ['184,42 194,44 194,50 184,49', '8,33 13,33 13,39 8,39'],
    deco: ['112,26 115,26 115,40 112,40', '22,21 98,21 98,24 22,24'],
  },
  suvModern: { // crossover
    body: 'M8,64 L9,36 Q10,27 22,26 L64,23 L124,24 Q132,25 138,32 L150,42 L184,45 Q194,48 194,59 L194,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',
    windows: ['106,28 120,28 133,42 106,42', '102,27 66,26 62,42 102,42', '58,26 26,29 20,42 58,42'],
    lite: ['184,46 194,48 194,53 184,52', '8,37 13,36 13,42 8,42'],
  },

  // ── Utes ──
  uteCar: { // Aussie sedan-based ute: car nose, low open tray + tray rail
    body: 'M4,64 L4,42 L10,40 L84,40 L84,30 Q86,26 94,26 L114,26 Q122,27 128,33 L141,44 L184,47 Q196,49 196,58 L196,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',
    windows: ['108,29 116,29 126,42 108,42', '104,29 90,29 88,42 104,42'],
    lite: ['186,48 195,50 195,55 186,54', '4,43 9,43 9,48 4,48'],
    dark: ['12,42 82,42 82,44 12,44'],
  },
  uteDualcab: { // modern 4x4 dual-cab: tall cab, high short tray + sports bar
    body: 'M6,64 L6,36 L12,34 L78,34 L80,24 Q82,20 90,20 L122,20 Q130,21 135,28 L146,38 L186,41 Q195,44 195,58 L195,64 L167,64 A15,15 0 0 0 137,64 L63,64 A15,15 0 0 0 33,64 Z',
    windows: ['112,24 121,23 131,36 112,36', '108,23 88,23 86,36 108,36'],
    lite: ['186,42 195,44 195,50 186,49', '6,37 11,37 11,43 6,43'],
    deco: ['M60,34 L63,26 L77,26 L80,34 L76,34 L74,30 L66,30 L64,34 Z'],
  },

  // ── Vans ──
  vanClassic: { // cab-over box (old HiAce/Kombi style)
    body: 'M8,64 L8,24 Q8,18 18,18 L148,18 Q156,18 160,24 L168,36 L190,40 Q196,44 196,58 L196,64 L166,64 A13,13 0 0 0 140,64 L62,64 A13,13 0 0 0 36,64 Z',
    windows: ['140,22 150,21 158,35 140,35', '136,22 108,22 108,35 136,35'],
    lite: ['188,42 196,44 196,50 188,49', '8,25 13,25 13,31 8,31'],
  },
  vanModern: { // semi-bonneted aero van
    body: 'M8,64 L8,28 Q8,20 20,20 L118,20 Q126,20 131,26 L144,38 L186,42 Q194,45 194,58 L194,64 L166,64 A13,13 0 0 0 140,64 L62,64 A13,13 0 0 0 36,64 Z',
    windows: ['120,24 127,25 139,39 120,39', '116,23 94,23 94,39 116,39'],
    lite: ['186,44 194,46 194,52 186,51', '8,29 13,29 13,35 8,35'],
  },
}

const EXOTIC_MAKES = new Set([
  'Ferrari', 'Lamborghini', 'McLaren', 'Bugatti', 'Pagani', 'Koenigsegg',
  'De Tomaso', 'Noble', 'Rimac',
])
const BOXY_4X4 = /landcruiser 70|patrol|defender|grenadier|wrangler|jimny|coaster|70 series|musso|rocsta/i
const CAR_UTE = /^ute$|commodore|falcon|maloo|kingswood|wb |jumbuck|brumby|proceed|crewman|one tonner|el camino|ranchero|sandman/i

// Pick a period/style archetype from body type + context.
export function pickArchetype(bodyType, { year, make, model } = {}) {
  const y = +year || 2015
  const m = model || ''
  // Exotic makes get the wedge whatever their nominal body type (except
  // genuine SUVs/utes/vans like the Purosangue or Urus).
  if ((EXOTIC_MAKES.has(make) || /gt40|miura|countach|diablo|911 gt|gt3|gt2|carrera gt|918|zonda|huayra|veyron|chiron/i.test(m)) &&
      !['SUV', 'Ute', 'Van', 'Wagon'].includes(bodyType)) return 'supercar'
  switch (bodyType) {
    case 'Sedan': return y < 1982 ? 'sedanClassic' : y < 2002 ? 'sedanBox' : 'sedanModern'
    case 'Coupe':
      return y < 1990 ? 'coupeClassic' : 'coupeModern'
    case 'Hatch': return y < 1998 ? 'hatchClassic' : 'hatchModern'
    case 'Wagon': return y < 1995 ? 'wagonClassic' : 'wagonModern'
    case 'SUV': return (y < 1996 || BOXY_4X4.test(m)) ? 'fourWheelDriveBox' : 'suvModern'
    case 'Ute': return (CAR_UTE.test(m) || y < 1985) ? 'uteCar' : 'uteDualcab'
    case 'Van': return y < 1996 ? 'vanClassic' : 'vanModern'
    default: return 'sedanModern'
  }
}

export const SILHOUETTE_TYPES = Object.keys(PATHS)

function Wheel({ cx, r }) {
  return (
    <>
      <circle cx={cx} cy="64" r={r} />
      <circle cx={cx} cy="64" r={r - 4} fill={DARK} />
      <circle cx={cx} cy="64" r={r - 7} />
    </>
  )
}

export default function CarSilhouette({ archetype, bodyType, color = '#333', height = 52 }) {
  const key = archetype || pickArchetype(bodyType)
  const { body, windows, lite = [], deco = [], dark = [] } = PATHS[key] || PATHS.sedanModern
  const wheelR = /fourWheelDriveBox|uteDualcab/.test(key) ? 10.5 : 9.5
  return (
    <svg viewBox="0 0 200 76" height={height} width="100%"
      style={{ display: 'block', color, transition: 'color 0.3s' }} aria-hidden>
      <ellipse cx="100" cy="72" rx="92" ry="2.5" fill="#000" opacity="0.5" />
      <g fill="currentColor">
        {deco.length > 0 && <path d={deco.map(poly).join(' ')} />}
        <path d={body} />
        <path d={windows.map(poly).join(' ')} fill={DARK} />
        {dark.length > 0 && <path d={dark.map(poly).join(' ')} fill={DARK} />}
        {lite.length > 0 && <path d={lite.map(poly).join(' ')} fill="#fff" opacity="0.4" />}
        <Wheel cx={48} r={wheelR} />
        <Wheel cx={152} r={wheelR} />
      </g>
    </svg>
  )
}
