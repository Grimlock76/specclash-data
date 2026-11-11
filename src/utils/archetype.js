// Silhouette archetype selection — non-component logic kept out of
// CarSilhouette.jsx so fast refresh works (react-refresh/only-export-components).

const EXOTIC_MAKES = new Set([
  'Ferrari', 'Lamborghini', 'McLaren', 'Bugatti', 'Pagani', 'Koenigsegg',
  'De Tomaso', 'Noble', 'Rimac',
])
const BOXY_4X4 = /landcruiser 70|patrol|defender|grenadier|wrangler|jimny|coaster|70 series|musso|rocsta/i
const CAR_UTE = /^ute$|commodore|falcon|maloo|kingswood|wb |jumbuck|brumby|proceed|crewman|one tonner|el camino|ranchero|sandman/i

// Open-top cars, whatever bodyType says (most are filed as Coupe/Sedan/Hatch)
const OPEN_TOP = /convertible|cabrio|roadster|spider|spyder|volante|barchetta|speedster|targa|\bmx-5\b|\bmx5\b|s2000|\bz3\b|\bz4\b|boxster|elise|exige|\bslk\b|\bslc\b|\bs660\b|\bcopen\b|\bmr2 spyder\b|\b124 spider\b/i
// Coupes that read as muscle/pony cars at any age
const MUSCLE = /mustang|camaro|challenger|charger|monaro|\bgto\b|torana|firebird|trans am|corvette|chevelle|barracuda|cuda|hsv|fpv|falcon gt|falcon xb|falcon xa|coupe gt/i

// Pick a v2 silhouette shape (see utils/silhouettePaths.js) from body type +
// context. Era-specific old-school versions are coming; classic years
// currently share the modern art.
export function pickArchetype(bodyType, { year, make, model, trim } = {}) {
  const y = +year || 2015
  const m = (model || '').toLowerCase()
  const mt = `${model || ''} ${trim || ''}`
  const notTall = !['SUV', 'Ute', 'Van', 'Wagon'].includes(bodyType)
  if (notTall && OPEN_TOP.test(mt)) return 'convertible'
  // Exotic makes get the wedge whatever their nominal body type (except
  // genuine SUVs/utes/vans like the Purosangue or Urus).
  if (notTall && (EXOTIC_MAKES.has(make) || /gt40|miura|countach|diablo|911 gt|gt3|gt2|carrera gt|918|zonda|huayra|veyron|chiron/i.test(m))) return 'sportsCar'
  switch (bodyType) {
    case 'Sedan': return 'sedan'
    case 'Coupe': return (y < 1990 || MUSCLE.test(mt)) ? 'muscleCoupe' : 'sportsCar'
    case 'Hatch': return 'hotHatch'
    case 'Wagon': return 'wagon'
    case 'SUV': return (y < 1996 || BOXY_4X4.test(m)) ? 'fourWD' : 'suv'
    case 'Ute': return (CAR_UTE.test(m) || y < 1985) ? 'streetUte' : 'dualCab'
    case 'Van': return 'van'
    default: return 'sedan'
  }
}
