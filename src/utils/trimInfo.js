import rules from '../data/trimInfo.json'

// Rules are scoped by make + model (+ year range), so a trim name only gets facts
// that are true for that car ("GR" on a GR Yaris ≠ "GR Sport" on an 86).
// First match wins; specific rules sit above generic ones in the data.
const compiled = rules.map(r => ({
  rule: r,
  models: r.models?.map(p => new RegExp(`^(?:${p})$`, 'i')),
  match: r.match.map(p => new RegExp(p, 'i')),
  exclude: r.exclude?.map(p => new RegExp(p, 'i')),
}))

export function getTrimInfo(trim = '', make = '', model = '', year = '') {
  if (!make || !trim) return null
  const y = parseInt(year, 10)
  for (const c of compiled) {
    const { rule } = c
    if (rule.makes && !rule.makes.includes(make)) continue
    if (c.models && !c.models.some(re => re.test(model))) continue
    if (rule.years && !(y >= rule.years[0] && y <= rule.years[1])) continue
    if (c.exclude?.some(re => re.test(trim))) continue
    if (c.match.some(re => re.test(trim))) return rule
  }
  return null
}
