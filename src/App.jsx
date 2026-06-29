import { useState, useCallback } from 'react'
import './index.css'
import Slot from './components/Slot'
import ScoreCard from './components/ScoreCard'
import SpecTable from './components/SpecTable'
import ProPanel from './components/ProPanel'
import { MAKES } from './data/index.js'
import { VERSION } from './version.js'

const MAKES_COUNT = Object.keys(MAKES).length

function parseUrlCars() {
  try {
    const p = new URLSearchParams(window.location.search)
    return Array.from({ length: 4 }, (_, i) => {
      const v = p.get(`c${i}`)
      if (!v) return null
      const [make, model, year, trim] = v.split('|')
      return make && model && year && trim ? { make, model, year, trim } : null
    })
  } catch {
    return Array(4).fill(null)
  }
}

function readPro() {
  try { return localStorage.getItem('sc_pro') === '1' } catch { return false }
}

export default function App() {
  const [cars, setCars]       = useState(Array(4).fill(null))
  const [initials]            = useState(parseUrlCars)
  const [isPro, setIsPro]     = useState(readPro)
  const [showPro, setShowPro] = useState(false)
  const [toast, setToast]     = useState(false)

  const onResult = useCallback((i, r) => setCars(p => { const n = [...p]; n[i] = r; return n }), [])
  const onClear  = useCallback((i)    => setCars(p => { const n = [...p]; n[i] = null; return n }), [])

  const activatePro = () => {
    try { localStorage.setItem('sc_pro', '1') } catch {}
    setIsPro(true); setShowPro(false)
  }
  const deactivatePro = () => {
    try { localStorage.removeItem('sc_pro') } catch {}
    setIsPro(false); setShowPro(false)
  }

  const share = useCallback(() => {
    const params = cars
      .map((c, i) => c ? `c${i}=${encodeURIComponent([c.make, c.model, c.year, c.trim].join('|'))}` : null)
      .filter(Boolean).join('&')
    const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params : ''}`
    navigator.clipboard?.writeText(url).catch(() => {})
    window.history.replaceState(null, '', url)
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }, [cars])

  const loaded = cars
    .map((c, i) => c ? { ...c, idx: i } : null)
    .filter(Boolean)
    .filter(c => isPro || c.idx < 2)

  const activeSlots = isPro ? [0, 1, 2, 3] : [0, 1]
  const anyLoaded = loaded.length > 0

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e0e0e0', fontFamily: "'Barlow Condensed', sans-serif" }}>

      {/* Header */}
      <div className="no-print" style={{ padding: '20px 24px 16px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
            <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: 4, color: '#fff', textTransform: 'uppercase' }}>SPEC</span>
            <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: 4, color: '#C8F04A', textTransform: 'uppercase' }}>CLASH</span>
          </div>
          <p style={{ color: '#444', fontSize: 12, marginTop: 3, letterSpacing: 1 }}>
            {isPro ? `PRO · 4 cars · ${MAKES_COUNT} makes` : `FREE · 2 cars · ${MAKES_COUNT} makes`}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0, marginTop: 6 }}>
          {anyLoaded && (
            <button className="hdr-btn" onClick={share}>
              <span style={{ fontSize: 12 }}>↗</span> Share
            </button>
          )}
          <button className="hdr-btn" onClick={() => { window.location.hash = '#/editor' }}>
            <span style={{ fontSize: 12 }}>▶</span> Video Editor
          </button>
          <button className={`hdr-btn${isPro ? ' active' : ''}`} onClick={() => setShowPro(p => !p)}>
            <span>★</span>{isPro ? 'PRO ✓' : 'GO PRO'}
          </button>
        </div>
      </div>

      {/* Pro panel overlay */}
      {showPro && (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && setShowPro(false)}>
          <ProPanel
            isPro={isPro}
            onClose={() => setShowPro(false)}
            onActivate={activatePro}
            onDeactivate={deactivatePro}
          />
        </div>
      )}

      {/* Slots */}
      <div className="no-print" style={{ padding: '20px 24px 0' }}>
        <div className="slot-grid">
          {activeSlots.map(i => (
            <Slot key={i} index={i} initial={initials[i]} onResult={onResult} onClear={onClear} />
          ))}
          {!isPro && (
            <div className="pro-slot" onClick={() => setShowPro(true)}>
              <span style={{ fontSize: 22, color: '#2a2a2a' }}>+</span>
              <span style={{ fontSize: 11, letterSpacing: 2, color: '#2a2a2a', textTransform: 'uppercase', fontWeight: 700 }}>Pro Only</span>
            </div>
          )}
          {!isPro && (
            <div className="pro-slot" onClick={() => setShowPro(true)}>
              <span style={{ fontSize: 22, color: '#2a2a2a' }}>+</span>
              <span style={{ fontSize: 11, letterSpacing: 2, color: '#2a2a2a', textTransform: 'uppercase', fontWeight: 700 }}>Pro Only</span>
            </div>
          )}
        </div>
        {!anyLoaded && (
          <p style={{ color: '#252525', fontSize: 13, marginTop: 16, letterSpacing: 1 }}>
            Select a make, model, year and trim — then hit LOAD.
          </p>
        )}
      </div>

      {loaded.length >= 2 && <ScoreCard loaded={loaded} />}
      {loaded.length > 0 && <SpecTable loaded={loaded} onShare={share} />}

      {toast && <div key={Date.now()} className="toast">Link Copied ✓</div>}

      <span className="no-print" style={{
        position: 'fixed', left: 10, bottom: 8, zIndex: 40,
        fontSize: 11, letterSpacing: 1, color: '#2e2e2e',
        fontFamily: "'Barlow Condensed', sans-serif", pointerEvents: 'none', userSelect: 'none'
      }}>{VERSION}</span>
    </div>
  )
}
