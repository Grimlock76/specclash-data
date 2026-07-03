// Stylised side-profile silhouettes — the "image slot" for every make/model.
// All paths are hand-authored original vector art (NOT traced from photos),
// so there is no image licensing or copyright exposure. Tinted via `color`.
// viewBox 200x76, ground y=64, front of car faces right.

// Era/style archetypes give each car a period-correct shape without
// needing per-model artwork. Keyed by pickArchetype() below.
const PATHS = {
  // ── Sedans ──
  sedanClassic: // 60s-70s chrome era: long flat bonnet & boot, upright cabin
    'M4,64 L4,50 Q4,46 14,46 L62,44 L72,31 Q74,28 82,28 L112,28 Q117,28 120,32 L130,44 L188,46 Q196,48 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  sedanBox: // 80s-90s angular three-box
    'M6,64 L8,48 L36,45 L56,31 L70,28 L116,28 L127,32 L140,45 L184,47 L194,53 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  sedanModern: // 2000s+ curvy
    'M6,64 L9,52 Q11,48 30,46 L52,32 Q57,28 68,28 L112,28 Q121,28 127,34 L141,46 L172,48 Q192,50 194,58 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',

  // ── Coupes ──
  coupeClassic: // muscle era: cab set back, long bonnet, fastback tail
    'M6,64 L10,50 Q13,45 26,44 L40,43 L62,31 Q68,27 80,27 L98,27 Q110,28 120,38 L130,44 L184,47 Q196,49 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  coupeModern: // sleek 2+2
    'M6,64 L10,53 Q13,49 36,45 L62,31 Q69,26 84,26 L102,26 Q118,27 133,38 L149,46 L178,50 Q193,53 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  supercar: // low wedge, cab-forward, high rear deck
    'M4,64 L6,54 Q8,50 24,48 L44,40 Q58,33 76,33 L94,33 Q114,35 134,43 L158,47 L190,52 Q196,54 196,61 L196,64 L164,64 A12,12 0 0 0 140,64 L60,64 A12,12 0 0 0 36,64 Z',

  // ── Hatches ──
  hatchClassic: // boxy 70s-80s two-box
    'M22,64 L22,34 L28,30 L80,28 L88,30 L110,32 L126,44 L180,47 L192,51 L192,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  hatchModern: // stubby tall
    'M26,64 L26,42 Q26,31 38,29 L88,26 Q98,26 104,29 L128,33 L146,46 L180,49 Q193,52 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',

  // ── Wagons ──
  wagonClassic: // long flat roof to an upright tail
    'M4,64 L4,38 Q4,32 12,31 L52,29 L120,29 L130,33 L142,46 L186,48 Q196,50 196,58 L196,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  wagonModern:
    'M8,64 L8,42 Q8,33 20,31 L48,28 L116,28 Q124,28 130,34 L142,45 L176,48 Q193,51 194,59 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',

  // ── SUVs / 4x4s ──
  fourWheelDriveBox: // LC70/Patrol/Defender: flat roof, upright glass, tall
    'M8,64 L8,32 Q8,26 18,26 L102,24 L112,26 L124,38 L182,41 Q194,43 194,58 L194,64 L167,64 A15,15 0 0 0 137,64 L63,64 A15,15 0 0 0 33,64 Z',
  suvModern: // crossover
    'M8,64 L9,36 Q10,27 22,26 L64,23 L124,24 Q132,25 138,32 L150,42 L184,45 Q194,48 194,59 L194,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',

  // ── Utes ──
  uteCar: // Aussie sedan-based ute: car nose, low open tray
    'M4,64 L4,42 L10,40 L84,40 L84,30 Q86,26 94,26 L114,26 Q122,27 128,33 L141,44 L184,47 Q196,49 196,58 L196,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',
  uteDualcab: // modern 4x4 dual-cab: tall cab, high short tray
    'M6,64 L6,36 L12,34 L78,34 L80,24 Q82,20 90,20 L122,20 Q130,21 135,28 L146,38 L186,41 Q195,44 195,58 L195,64 L167,64 A15,15 0 0 0 137,64 L63,64 A15,15 0 0 0 33,64 Z',

  // ── Vans ──
  vanClassic: // cab-over box (old HiAce/Kombi style)
    'M8,64 L8,24 Q8,18 18,18 L148,18 Q156,18 160,24 L168,36 L190,40 Q196,44 196,58 L196,64 L166,64 A13,13 0 0 0 140,64 L62,64 A13,13 0 0 0 36,64 Z',
  vanModern: // semi-bonneted aero van
    'M8,64 L8,28 Q8,20 20,20 L118,20 Q126,20 131,26 L144,38 L186,42 Q194,45 194,58 L194,64 L166,64 A13,13 0 0 0 140,64 L62,64 A13,13 0 0 0 36,64 Z',
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

export default function CarSilhouette({ archetype, bodyType, color = '#333', height = 52 }) {
  const key = archetype || pickArchetype(bodyType)
  const d = PATHS[key] || PATHS.sedanModern
  const wheelR = /fourWheelDriveBox|uteDualcab/.test(key) ? 10 : 9
  return (
    <svg viewBox="0 0 200 76" height={height} width="100%"
      style={{ display: 'block', color, transition: 'color 0.3s' }} aria-hidden>
      <g fill="currentColor">
        <path d={d} />
        <circle cx="48" cy="64" r={wheelR} />
        <circle cx="152" cy="64" r={wheelR} />
      </g>
    </svg>
  )
}
