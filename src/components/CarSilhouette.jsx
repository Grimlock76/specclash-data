// Stylised side-profile silhouettes per body type — the "image slot" for every
// make/model without any photo licensing. Tinted via the `color` prop.
// viewBox 200x72, ground at y=64, wheel arches cut with arc segments.

const WHEELS = (
  <>
    <circle cx="48" cy="64" r="9" />
    <circle cx="152" cy="64" r="9" />
  </>
)

// Front of car faces right.
const BODY_PATHS = {
  Sedan:
    'M6,64 L9,52 Q11,48 30,46 L52,32 Q57,28 68,28 L112,28 Q121,28 127,34 L141,46 L172,48 Q192,50 194,58 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  Coupe:
    'M6,64 L10,53 Q13,49 36,45 L62,31 Q69,26 84,26 L102,26 Q118,27 133,38 L149,46 L178,50 Q193,53 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  Hatch:
    'M26,64 L26,42 Q26,31 38,29 L88,26 Q98,26 104,29 L128,33 L146,46 L180,49 Q193,52 194,60 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  Wagon:
    'M8,64 L8,42 Q8,33 20,31 L48,28 L116,28 Q124,28 130,34 L142,45 L176,48 Q193,51 194,59 L194,64 L165,64 A13,13 0 0 0 139,64 L61,64 A13,13 0 0 0 35,64 Z',
  SUV:
    'M8,64 L9,36 Q10,27 22,26 L64,23 L124,24 Q132,25 138,32 L150,42 L184,45 Q194,48 194,59 L194,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',
  Ute:
    'M6,64 L6,42 L12,40 L76,40 L76,28 Q77,24 84,24 L112,24 Q120,24 125,30 L138,42 L184,45 Q194,48 194,59 L194,64 L166,64 A14,14 0 0 0 138,64 L62,64 A14,14 0 0 0 34,64 Z',
  Van:
    'M8,64 L8,28 Q8,20 20,20 L118,20 Q126,20 131,26 L144,38 L186,42 Q194,45 194,58 L194,64 L166,64 A13,13 0 0 0 140,64 L62,64 A13,13 0 0 0 36,64 Z',
}

export const SILHOUETTE_TYPES = Object.keys(BODY_PATHS)

export default function CarSilhouette({ bodyType, color = '#333', height = 52 }) {
  const d = BODY_PATHS[bodyType] || BODY_PATHS.Sedan
  return (
    <svg viewBox="0 0 200 76" height={height} width="100%"
      style={{ display: 'block', color, transition: 'color 0.3s' }} aria-hidden>
      <g fill="currentColor">
        <path d={d} />
        {WHEELS}
      </g>
    </svg>
  )
}
