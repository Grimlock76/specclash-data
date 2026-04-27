import { useState } from 'react'
import './index.css'
import Slot from './components/Slot'
import ScoreCard from './components/ScoreCard'
import SpecTable from './components/SpecTable'
import ProPanel from './components/ProPanel'

const COLORS = ['#C8F04A', '#60C8FF', '#FF7043', '#B39DFF']

export default function App() {
  const [cars, setCars]             = useState(Array(4).fill(null))
  const [isPro, setIsPro]           = useState(false)
  const [showPro, setShowPro]       = useState(false)

  const onResult = (i, r) => setCars(p => { const n = [...p]; n[i] = r; return n })
  const onClear  = (i)    => setCars(p => { const n = [...p]; n[i] = null; return n })

  const activeSlots = isPro ? [0, 1, 2, 3] : [0, 1]
  const loaded = cars
    .map((c, i) => c ? { ...c, idx: i } : null)
    .filter((c, i) => c && activeSlots.includes(i))
    .filter(Boolean)

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#e0e0e0', fontFamily: "'Barlow Condensed', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: '22px 24px 16px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 28, fontWeight: 800, letterSpacing: 4, color: '#fff', textTransform: 'uppercase' }}>SPEC</span>
            <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 28, fontWeight: 400, letterSpacing: 4, color: '#C8F04A', textTransform: 'uppercase' }}>CLASH</span>
            <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 15, letterSpacing: 2, color: '#444', textTransform: 'uppercase', marginLeft: 8 }}>AU Edition</span>
          </div>
          <p style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
            {isPro ? 'PRO · 4 cars · Holden, Ford, Toyota, Mazda, Nissan & Mitsubishi' : 'FREE · 2 cars · Tap ★ for Pro'}
          </p>
        </div>
        <button onClick={() => setShowPro(p => !p)} style={{
          background: isPro ? '#1a1a0a' : '#0f0f0f',
          border: `1px solid ${isPro ? '#C8F04A' : '#2a2a2a'}`,
          borderRadius: 20, padding: '8px 16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 7, marginTop: 4, flexShrink: 0
        }}>
          <span style={{ fontSize: 14, color: isPro ? '#C8F04A' : '#666' }}>★</span>
          <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, color: isPro ? '#C8F04A' : '#666', textTransform: 'uppercase' }}>
            {isPro ? 'PRO ✓' : 'GO PRO'}
          </span>
        </button>
      </div>

      {/* Pro panel */}
      {showPro && (
        <ProPanel
          isPro={isPro}
          onClose={() => setShowPro(false)}
          onActivate={() => { setIsPro(true); setShowPro(false) }}
          onDowngrade={() => { setIsPro(false); setShowPro(false) }}
        />
      )}

      {/* Car slots */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {activeSlots.map(i => (
            <Slot key={i} index={i} onResult={onResult} onClear={onClear} />
          ))}
          {!isPro && (
            <div onClick={() => setShowPro(true)} style={{
              flex: '1 1 140px', minWidth: 140, background: '#0a0a0a',
              border: '1px dashed #1e1e1e', borderRadius: 12, padding: '16px 14px',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 6
            }}>
              <span style={{ fontSize: 22, color: '#333' }}>+</span>
              <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 11, letterSpacing: 2, color: '#333', textTransform: 'uppercase' }}>Pro Only</span>
            </div>
          )}
        </div>
        {loaded.length === 0 && (
          <p style={{ color: '#222', fontSize: 13, marginTop: 14 }}>Select make, model, year and trim — then hit Load.</p>
        )}
      </div>

      {loaded.length >= 2 && <ScoreCard loaded={loaded} />}
      <SpecTable loaded={loaded} />
    </div>
  )
}
