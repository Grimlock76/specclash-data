import rules from '../data/trimInfo.json'

export function getTrimInfo(trim = '') {
  for (const rule of rules) {
    for (const pattern of rule.match) {
      const re = new RegExp(pattern, 'i')
      if (re.test(trim)) return rule
    }
  }
  return null
}
