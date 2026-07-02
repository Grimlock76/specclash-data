import { useState, useCallback, useEffect, useMemo } from 'react'
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

// Any makes.json entry is loadable (gap-check guarantees makes ⊆ SPECS).
function randomCar() {
  const pick = a => a[Math.floor(Math.random() * a.length)]
  const make = pick(Object.keys(MAKES))
  const model = pick(Object.keys(MAKES[make]))
  const year = pick(Object.keys(MAKES[make][model]))
  return { make, model, year, trim: pick(MAKES[make][model][year]) }
}

function readRecents() {
  try { return JSON.parse(localStorage.getItem('sc_recent')) || [] } catch { return [] }
}

export default function App() {
  const [cars, setCars]       = useState(Array(4).fill(null))
  const [seeds, setSeeds]     = useState(parseUrlCars)
  const [epoch, setEpoch]     = useState(0) // bump to remount slots with new seeds
  const [isPro, setIsPro]     = useState(readPro)
  const [showPro, setShowPro] = useState(false)
  const [toast, setToast]     = useState(false)

  const onResult = useCallback((i, r) => setCars(p => { const n = [...p]; n[i] = r; return n }), [])
  const onClear  = useCallback((i)    => setCars(p => { const n = [...p]; n[i] = null; return n }), [])

  const seedSlots = useCallback(picks => {
    setCars(Array(4).fill(null))
    setSeeds([...picks, null, null, null, null].slice(0, 4))
    setEpoch(e => e + 1)
  }, [])

  const randomMatchup = () => seedSlots([randomCar(), randomCar()])

  // Record a comparison once 2+ cars are loaded; newest first, deduped, keep 5.
  // localStorage is the source of truth — recents only render when nothing is
  // loaded, so re-reading on the next cars change is always fresh enough.
  useEffect(() => {
    const active = cars.filter(Boolean)
    if (active.length < 2) return
    const entry = {
      cars: active.map(({ make, model, year, trim }) => ({ make, model, year, trim })),
      labels: active.map(c => c.label),
    }
    const sig = entry.labels.join(' vs ')
    const next = [entry, ...readRecents().filter(r => r.labels.join(' vs ') !== sig)].slice(0, 5)
    try { localStorage.setItem('sc_recent', JSON.stringify(next)) } catch { /* private mode */ }
  }, [cars])
  // `cars` is the deliberate trigger to re-read localStorage after the effect above writes it.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const recents = useMemo(() => readRecents(), [cars])

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
          <button className="hdr-btn" onClick={randomMatchup} title="Random matchup">
            <span style={{ fontSize: 13 }}>🎲</span> Random
          </button>
          {anyLoaded && (
            <button className="hdr-btn" onClick={share}>
              <span style={{ fontSize: 12 }}>↗</span> Share
            </button>
          )}
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
            <Slot key={`${i}-${epoch}`} index={i} initial={seeds[i]} onResult={onResult} onClear={onClear} />
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
        {!anyLoaded && recents.length > 0 && (
          <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: 2, color: '#333', textTransform: 'uppercase', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>Recent</span>
            {recents.map(r => (
              <button key={r.labels.join(' vs ')} className="recent-chip" onClick={() => seedSlots(r.cars)} style={{
                background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 6,
                color: '#666', fontSize: 12, padding: '5px 10px', cursor: 'pointer',
                maxWidth: 340, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
              }}>{r.labels.join(' vs ')}</button>
            ))}
          </div>
        )}
      </div>

      {loaded.length >= 2 && <ScoreCard loaded={loaded} isPro={isPro} onProGate={() => setShowPro(true)} />}
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
