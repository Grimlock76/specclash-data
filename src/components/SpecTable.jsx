import { Fragment, useState } from 'react'
import config from '../data/config.json'
import { downloadMatchupCard } from '../utils/matchupCard.js'
import CountUp from './CountUp.jsx'
import UltimateClash from './UltimateClash.jsx'

const { slotColors: COLORS, groups: GROUPS, labels: S } = config

const LOWER = ['z1', 'qm', 'fc', 'fh', 'fx', 'wt', 'pr']
const HIGHER = ['hp', 'tq', 'ts']
// Rows whose values count up and get a bar (engine names like "1GD-FTV" must not count)
const COUNT_KEYS = new Set([...LOWER, ...HIGHER, 'se', 'ca', 'pc'])
const BAR_KEYS = new Set([...LOWER, ...HIGHER])

// First number only: "317 kW (425 hp)" is 317, not 317425
const firstNum = v => {
  const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : NaN
}

// Reveal timing (ms): rows stagger in, numbers count, then the winner slowly lights up
const ROW_STAGGER = 70, COUNT_MS = 1300, GLOW_AFTER = 1150

function getBest(key, loaded) {
  if (loaded.length < 2) return null
  const allEV = loaded.every(c => c.specs?.ft === 'Electric')
  const someEV = loaded.some(c => c.specs?.ft === 'Electric')
  if (key === 'fc' && someEV && !allEV) return null
  const vals = loaded.map(c => {
    const n = firstNum(c.specs?.[key])
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
  return best.length === 1 ? best[0] : null
}

// Percent difference vs the best value, signed as the raw number moves:
// less power reads −x%, slower 0-100 reads +x%.
function deltaPct(specVal, bestN) {
  const n = firstNum(specVal)
  if (isNaN(n) || !bestN) return null
  const pct = ((n - bestN) / bestN) * 100
  if (Math.abs(pct) < 0.5) return null
  return `${pct > 0 ? '+' : '−'}${Math.abs(pct).toFixed(Math.abs(pct) < 10 ? 1 : 0)}%`
}

export default function SpecTable({ loaded, onShare }) {
  const [showDelta, setShowDelta] = useState(false)
  const [clash, setClash] = useState(false)
  if (loaded.length === 0) return null

  const allSame = key => loaded.length > 1 && loaded.every(c => c.specs?.[key] === loaded[0].specs?.[key])
  const hasEV = loaded.some(c => c.specs?.ft === 'Electric')
  const allEV = loaded.length > 0 && loaded.every(c => c.specs?.ft === 'Electric')

  // Replays the reveal whenever the set of compared cars changes (not on Δ % toggles)
  const playKey = loaded.map(c => `${c.idx}:${c.label}`).join('|')
  let rowNo = 0

  const getLabel = key => {
    if (hasEV && key === 'di') return allEV ? 'Battery' : 'Displacement / Battery'
    if (hasEV && key === 'fc') return allEV ? 'Range (WLTP)' : 'City / Range'
    return S[key] || key
  }

  return (
    <div style={{ padding: '20px 24px 60px' }}>
      {/* Toolbar */}
      <div className="no-print" style={{ display: 'flex', gap: 8, marginBottom: 14, justifyContent: 'flex-end' }}>
        {loaded.length > 1 && (
          <button className="tbl-btn clash-btn" onClick={() => setClash(true)}
            title={loaded.length > 2 ? 'Play an animated face-off of the first two cars' : 'Play an animated face-off'}>▶ Clash</button>
        )}
        {loaded.length > 1 && (
          <button className="tbl-btn card-btn" onClick={() => downloadMatchupCard(loaded)}
            title="Download a story-format matchup card (1080×1920) for TikTok / Instagram">⬇ Card</button>
        )}
        {loaded.length > 1 && (
          <button className="tbl-btn" onClick={() => setShowDelta(d => !d)}
            style={showDelta ? { color: '#C8F04A', borderColor: '#C8F04A44' } : undefined}>Δ %</button>
        )}
        <button className="tbl-btn" onClick={() => window.print()}>⎙ Print</button>
        {onShare && <button className="tbl-btn" onClick={onShare}>↗ Share</button>}
      </div>

      {clash && loaded.length > 1 && <UltimateClash cars={loaded.slice(0, 2)} onClose={() => setClash(false)} />}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
          <thead>
            <tr>
              <th style={{ width: 140, textAlign: 'left', padding: '10px 12px', color: '#999', fontSize: 14, letterSpacing: 3, fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', borderBottom: '1px solid #181818', fontWeight: 600 }}>SPEC</th>
              {loaded.map(c => (
                <th key={c.idx} style={{ padding: '10px 12px', textAlign: 'center', borderBottom: `2px solid ${COLORS[c.idx]}`, borderLeft: '1px solid #141414', minWidth: 140 }}>
                  <div style={{ color: COLORS[c.idx], fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>{c.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody key={playKey}>
            {GROUPS.map(g => (
              <Fragment key={g.label}>
                <tr>
                  <td colSpan={loaded.length + 1} style={{ padding: '14px 12px 5px', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, letterSpacing: 3, color: '#C8F04A', textTransform: 'uppercase', borderTop: '1px solid #141414' }}>{g.label}</td>
                </tr>
                {g.keys.map(key => {
                  const best = getBest(key, loaded)
                  const same = allSame(key)
                  const rowDelay = rowNo++ * ROW_STAGGER
                  const counts = COUNT_KEYS.has(key)
                  const nums = loaded.map(c => firstNum(c.specs?.[key]))
                  const max = Math.max(...nums.filter(n => !isNaN(n)), 0)
                  const showBars = BAR_KEYS.has(key) && loaded.length > 1 && !same && max > 0
                  return (
                    <tr key={key} className="spec-row" style={{ borderBottom: '1px solid #0f0f0f', '--rd': `${rowDelay}ms` }}>
                      <td style={{ padding: '8px 12px', fontSize: 13, color: '#888', whiteSpace: 'nowrap' }}>{getLabel(key)}</td>
                      {loaded.map((c, ci) => {
                        const val = c.specs?.[key] || '—'
                        const isBest = best?.idx === c.idx
                        const win = isBest && !same
                        const delta = showDelta && !same && best && !isBest ? deltaPct(c.specs?.[key], best.n) : null
                        const n = nums[ci]
                        return (
                          <td key={c.idx} className={win ? 'sv-win' : undefined}
                            style={{ padding: '8px 12px', textAlign: 'center', borderLeft: '1px solid #0f0f0f', fontSize: 15, fontWeight: isBest ? 600 : 400,
                              color: same ? '#484848' : win ? COLORS[c.idx] : '#d8d8d8',
                              '--c': COLORS[c.idx], '--gd': `${rowDelay + GLOW_AFTER}ms` }}>
                            {win && <span className="sv-arrow" style={{ fontSize: 10, marginRight: 4, color: COLORS[c.idx] }}>▲</span>}
                            {counts && val !== '—' ? <CountUp text={val} delay={rowDelay + 150} duration={COUNT_MS} /> : val}
                            {delta && <span className="delta-pct" style={{ fontSize: 11, marginLeft: 5, color: '#666' }}>{delta}</span>}
                            {showBars && (
                              <span className="sbar-track" aria-hidden="true">
                                <span className={win ? 'sbar sbar-win' : 'sbar'} style={{ width: isNaN(n) ? 0 : `${(n / max) * 100}%` }} />
                              </span>
                            )}
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
        <p style={{ color: '#1e1e1e', fontSize: 11, marginTop: 16, textAlign: 'center' }}>▲ = best value · greyed = identical · estimated prices are indicative only</p>
      </div>
    </div>
  )
}
