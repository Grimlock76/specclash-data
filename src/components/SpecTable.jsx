import { Fragment } from 'react'
import config from '../data/config.json'

const { slotColors: COLORS, groups: GROUPS, labels: S } = config

const LOWER = ['z1', 'qm', 'fc', 'fh', 'fx', 'wt', 'pr']
const HIGHER = ['hp', 'tq', 'ts']

function getBest(key, loaded) {
  if (loaded.length < 2) return null
  const allEV = loaded.every(c => c.specs?.ft === 'Electric')
  const someEV = loaded.some(c => c.specs?.ft === 'Electric')
  if (key === 'fc' && someEV && !allEV) return null
  const vals = loaded.map(c => {
    const n = parseFloat((c.specs?.[key] || '').replace(/[^0-9.]/g, ''))
    return isNaN(n) ? null : { idx: c.idx, n }
  }).filter(Boolean)
  if (vals.length < 2) return null
  const isLower = LOWER.includes(key) && !(key === 'fc' && allEV)
  const isHigher = HIGHER.includes(key) || (key === 'fc' && allEV)
  let best
  if (isLower) {
    const min = Math.min(...vals.map(v => v.n))
    best = vals.filter(v => v.n === min)
  } else if (isHigher) {
    const max = Math.max(...vals.map(v => v.n))
    best = vals.filter(v => v.n === max)
  } else return null
  return best.length === 1 ? best[0].idx : null
}

export default function SpecTable({ loaded }) {
  if (loaded.length === 0) return null

  const allSame = key => loaded.length > 1 && loaded.every(c => c.specs?.[key] === loaded[0].specs?.[key])
  const hasEV = loaded.some(c => c.specs?.ft === 'Electric')
  const allEV = loaded.length > 0 && loaded.every(c => c.specs?.ft === 'Electric')
  const getLabel = key => {
    if (hasEV && key === 'di') return allEV ? 'Battery' : 'Displacement / Battery'
    if (hasEV && key === 'fc') return allEV ? 'Range (WLTP)' : 'City / Range'
    return S[key] || key
  }

  return (
    <div style={{ padding: '28px 24px 60px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
        <thead>
          <tr>
            <th style={{ width: 140, textAlign: 'left', padding: '10px 12px', color: '#999', fontSize: 14, letterSpacing: 3, fontFamily: "'Barlow Condensed'", textTransform: 'uppercase', borderBottom: '1px solid #181818' }}>SPEC</th>
            {loaded.map(c => (
              <th key={c.idx} style={{ padding: '10px 12px', textAlign: 'center', borderBottom: `2px solid ${COLORS[c.idx]}`, borderLeft: '1px solid #141414', minWidth: 140 }}>
                <div style={{ color: COLORS[c.idx], fontFamily: "'Barlow Condensed'", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>{c.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GROUPS.map(g => (
            <Fragment key={g.label}>
              <tr>
                <td colSpan={loaded.length + 1} style={{ padding: '14px 12px 5px', fontFamily: "'Barlow Condensed'", fontSize: 14, letterSpacing: 3, color: '#C8F04A', textTransform: 'uppercase', borderTop: '1px solid #141414' }}>{g.label}</td>
              </tr>
              {g.keys.map(key => {
                const best = getBest(key, loaded)
                const same = allSame(key)
                return (
                  <tr key={key} style={{ borderBottom: '1px solid #0f0f0f' }}>
                    <td style={{ padding: '8px 12px', fontSize: 13, color: '#888', whiteSpace: 'nowrap' }}>{getLabel(key)}</td>
                    {loaded.map(c => {
                      const val = c.specs?.[key] || '—'
                      const isBest = best === c.idx
                      return (
                        <td key={c.idx} style={{ padding: '8px 12px', textAlign: 'center', borderLeft: '1px solid #0f0f0f', fontSize: 15, fontWeight: isBest ? 600 : 400, color: same ? '#484848' : isBest ? COLORS[c.idx] : '#d8d8d8' }}>
                          {isBest && !same && <span style={{ fontSize: 10, marginRight: 4, color: COLORS[c.idx] }}>▲</span>}
                          {val}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
      <p style={{ color: '#1a1a1a', fontSize: 11, marginTop: 16, textAlign: 'center' }}>▲ = best value. Greyed = identical.</p>
    </div>
  )
}
