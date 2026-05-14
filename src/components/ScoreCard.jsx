import { useRef, useEffect } from 'react'
import config from '../data/config.json'

const { slotColors: COLORS, scoring: CATEGORIES } = config

export default function ScoreCard({ loaded }) {
  if (loaded.length < 2) return null

  const scores = loaded.map(c => ({ idx: c.idx, label: c.label, score: 0, wins: 0, cats: [] }))
  const allEV = loaded.every(c => c.specs?.ft === 'Electric')
  const someEV = loaded.some(c => c.specs?.ft === 'Electric')

  CATEGORIES.forEach(cat => {
    if (cat.key === 'fc' && someEV && !allEV) return
    const higher = (cat.key === 'fc' && allEV) ? true : cat.higher
    const vals = loaded.map(c => {
      const n = parseFloat((c.specs?.[cat.key] || '').replace(/[^0-9.]/g, ''))
      return isNaN(n) ? null : { idx: c.idx, n }
    }).filter(Boolean)
    if (vals.length < 2) return
    const bestVal = higher ? Math.max(...vals.map(v => v.n)) : Math.min(...vals.map(v => v.n))
    const winners = vals.filter(v => v.n === bestVal)
    if (winners.length === 1) {
      const winner = scores.find(s => s.idx === winners[0].idx)
      if (winner) { winner.score += cat.weight; winner.wins++; winner.cats.push(cat.label) }
    }
  })

  const maxScore = Math.max(...scores.map(s => s.score), 1)
  const ranked = [...scores].sort((a, b) => b.score - a.score)

  return (
    <div style={{ padding: '20px 24px 0' }}>
      <div style={{ fontSize: 13, letterSpacing: 3, color: '#444', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Barlow Condensed', sans-serif" }}>HEAD-TO-HEAD</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ranked.map((s, rank) => {
          const c = loaded.find(x => x.idx === s.idx)
          const pct = Math.round((s.score / maxScore) * 100)
          return <ScoreRow key={s.idx} s={s} rank={rank} c={c} pct={pct} />
        })}
      </div>
      {ranked[0]?.score > 0 && (
        <div style={{ marginTop: 10, padding: '10px 14px', background: '#0a0a0a', borderRadius: 10, border: '1px solid #181818' }}>
          <span style={{ color: COLORS[ranked[0].idx], fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>
            🏁 {loaded.find(c => c.idx === ranked[0].idx)?.label || 'Car'} WINS THE CLASH
          </span>
        </div>
      )}
    </div>
  )
}

function ScoreRow({ s, rank, c, pct }) {
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    barRef.current.style.width = '0%'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (barRef.current) barRef.current.style.width = `${pct}%`
      })
    })
  }, [pct])

  return (
    <div style={{ background: '#0d0d0d', borderRadius: 10, padding: '10px 14px', border: `1px solid ${rank === 0 ? '#252525' : '#111'}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: rank === 0 ? COLORS[s.idx] : '#333' }}>#{rank + 1}</span>
          <span style={{ color: COLORS[s.idx], fontSize: 13, fontWeight: 600 }}>{c?.label || `Car ${s.idx + 1}`}</span>
        </div>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: rank === 0 ? COLORS[s.idx] : '#555' }}>
          {s.wins} WIN{s.wins !== 1 ? 'S' : ''}
        </span>
      </div>
      <div style={{ background: '#111', borderRadius: 4, height: 6, overflow: 'hidden' }}>
        <div ref={barRef} style={{ height: '100%', width: '0%', background: rank === 0 ? COLORS[s.idx] : '#222', borderRadius: 4, transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>
      {s.cats.length > 0 && (
        <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {s.cats.map(cat => (
            <span key={cat} style={{ fontSize: 10, color: COLORS[s.idx], background: COLORS[s.idx] + '18', border: `1px solid ${COLORS[s.idx]}33`, borderRadius: 4, padding: '2px 5px', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 1, textTransform: 'uppercase' }}>{cat}</span>
          ))}
        </div>
      )}
    </div>
  )
}
