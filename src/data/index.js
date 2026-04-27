import makesData from './makes.json'
import holden from './holden.json'
import ford from './ford.json'
import supplement1 from './supplement1.json'
import supplement2 from './supplement2.json'
import supplement3 from './supplement3.json'
import supplement4 from './supplement4.json'
import supplement5 from './supplement5.json'
import supplement6 from './supplement6.json'
import supplement7 from './supplement7.json'
import supplement8 from './supplement8.json'
import supplement9 from './supplement9.json'
import supplement10 from './supplement10.json'
import supplement11 from './supplement11.json'
import supplement12 from './supplement12.json'
import supplement13 from './supplement13.json'
import supplement14 from './supplement14.json'
import supplement15 from './supplement15.json'
import supplement16 from './supplement16.json'
import supplement17 from './supplement17.json'
import supplement18 from './supplement18.json'
import supplement19 from './supplement19.json'
import supplement20 from './supplement20.json'
import supplement21 from './supplement21.json'
import supplement22 from './supplement22.json'
import supplement23 from './supplement23.json'
import supplement24 from './supplement24.json'
import supplement25 from './supplement25.json'
import supplement26 from './supplement26.json'
import supplement27 from './supplement27.json'
import supplement28 from './supplement28.json'
import supplement29 from './supplement29.json'
import supplement30 from './supplement30.json'
import supplement31 from './supplement31.json'
import supplement32 from './supplement32.json'
import supplement33 from './supplement33.json'

export const MAKES = makesData

// supplements 1-8 fill gaps; holden/ford are authoritative; supplement9 corrects errors in source data
// supplement20 overrides confirmed spec errors across supplements 10-19
// supplements 21-24: Mazda (classic + modern) and Nissan (classic + utility/SUV)
// supplement25: Mitsubishi classics (Sigma, Galant, Lancer, Starion, 3000GT, Colt)
// supplement26: Mitsubishi AU-market (Pajero, Magna, Verada, Triton, Outlander, ASX, Eclipse Cross, Mirage, L300/Express)
// supplement27: Mitsubishi global (Eclipse, FTO, GTO, Diamante, Delica, Space Star, i-MiEV, RVR, Carisma, Challenger)
// supplement28: 2024-2026 extensions (all active makes) + Nissan 400Z
// supplement29: Toyota missing models (Prius all gens, Prius C, Prius V, BZ4X, Crown crossover, Granvia)
// supplement30: Nissan missing models (Silvia S12-S15, 200SX, 180SX, 240Z, 280ZX, Stagea, Leaf, Kicks, Ariya, Juke F16)
// supplement31: Mitsubishi missing models (Pajero Sport, Lancer Ralliart/Sportback, Colt Z30, Grandis)
// supplement32: Hyundai (Excel, Getz, Accent, i20, i30, i30 N, Elantra, Sonata, i45, i40, Veloster, Coupe, Genesis Coupe, Terracan, ix35, Tucson, Santa Fe, Kona, Ioniq, Ioniq 5, Ioniq 6, Palisade, Staria)
// supplement33: Kia (Sportage, Sorento, Rio, Cerato, Carnival, Stinger, EV6, Seltos, Niro, Picanto, Soul, Optima, Telluride)
export const SPECS = Object.assign({}, supplement1.specs, supplement2.specs, supplement3.specs, supplement4.specs, supplement5.specs, supplement6.specs, supplement7.specs, supplement8.specs, holden.specs, ford.specs, supplement9.specs, supplement10.specs, supplement11.specs, supplement12.specs, supplement13.specs, supplement14.specs, supplement15.specs, supplement16.specs, supplement17.specs, supplement18.specs, supplement19.specs, supplement20.specs, supplement21.specs, supplement22.specs, supplement23.specs, supplement24.specs, supplement25.specs, supplement26.specs, supplement27.specs, supplement28.specs, supplement29.specs, supplement30.specs, supplement31.specs, supplement32.specs, supplement33.specs)

export function lookup(make, model, year, trim) {
  const exact = `${make}|${model}|${year}|${trim}`
  if (SPECS[exact]) return SPECS[exact]
  const noMake = `${model}|${year}|${trim}`
  if (SPECS[noMake]) return SPECS[noMake]
  const yr = parseInt(year)
  for (let delta = 1; delta <= 2; delta++) {
    for (const sign of [-1, 1]) {
      const tryYear = (yr + sign * delta).toString()
      const k1 = `${make}|${model}|${tryYear}|${trim}`
      if (SPECS[k1]) return SPECS[k1]
      const k2 = `${model}|${tryYear}|${trim}`
      if (SPECS[k2]) return SPECS[k2]
    }
  }
  return null
}
