import rules from '../data/trimInfo.json'

export function getTrimInfo(trim = '', make = '') {
  if (!make) return null
  for (const rule of rules) {
    if (rule.makes && !rule.makes.includes(make)) continue
    for (const pattern of rule.match) {
      const re = new RegExp(pattern, 'i')
      if (re.test(trim)) return rule
    }
  }
  return null
}
