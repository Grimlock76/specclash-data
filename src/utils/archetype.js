// Silhouette archetype selection — non-component logic kept out of
// CarSilhouette.jsx so fast refresh works (react-refresh/only-export-components).

const EXOTIC_MAKES = new Set([
  'Ferrari', 'Lamborghini', 'McLaren', 'Bugatti', 'Pagani', 'Koenigsegg',
  'De Tomaso', 'Noble', 'Rimac',
])
const BOXY_4X4 = /landcruiser 70|patrol|defender|grenadier|wrangler|jimny|coaster|70 series|musso|rocsta/i
const CAR_UTE = /^ute$|commodore|falcon|maloo|kingswood|wb |jumbuck|brumby|proceed|crewman|one tonner|el camino|ranchero|sandman/i

// Pick a period/style archetype from body type + context.
export function pickArchetype(bodyType, { year, make, model } = {}) {
  const y = +year || 2015
  const m = (model || '').toLowerCase()
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
