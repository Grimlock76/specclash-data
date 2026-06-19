import { useState, useEffect } from 'react'
import { MAKES, lookup, preloadMake } from '../data/index.js'
import { BODY_TYPES, getBodyType } from '../utils/bodyType.js'
import TrimBadge from './TrimBadge.jsx'
import MakeModelSearch from './MakeModelSearch.jsx'

const COLORS = ['#C8F04A', '#60C8FF', '#FF7043', '#B39DFF']
const BODY_LABELS = {
  All: '— Body Type —', Sedan: 'Sedan', Wagon: 'Wagon',
  Ute: 'Ute', SUV: 'SUV', Coupe: 'Coupe', Hatch: 'Hatchback', Van: 'Van / Commercial'
}

export default function Slot({ index, initial, onResult, onClear }) {
  const color = COLORS[index]
  const [make, setMake]         = useState(initial?.make || 'Holden')
  const [bodyType, setBodyType] = useState('All')
  const [model, setModel]       = useState(initial?.model || '')
  const [year, setYear]         = useState(initial?.year || '')
  const [trim, setTrim]         = useState(initial?.trim || '')
  const [err, setErr]           = useState('')
  const [ok, setOk]             = useState(false)
  const [loading, setLoading]   = useState(false)

  const years = model
    ? Object.keys(MAKES[make]?.[model] || {})
        .filter(y => bodyType === 'All' ||
          (MAKES[make]?.[model]?.[y] || []).some(t => getBodyType(model, t) === bodyType))
        .sort()
    : []
  const trims = model && year
    ? (MAKES[make]?.[model]?.[year] || []).filter(t =>
        bodyType === 'All' || getBodyType(model, t) === bodyType
      )
    : []

  useEffect(() => {
    if (!initial?.make || !initial?.model || !initial?.year || !initial?.trim) return
    let cancelled = false
    lookup(initial.make, initial.model, initial.year, initial.trim).then(specs => {
      if (cancelled || !specs) return
      setOk(true)
      const label = `${initial.year} ${initial.make} ${initial.model}${initial.trim ? ' ' + initial.trim : ''}`
      onResult(index, { make: initial.make, model: initial.model, year: initial.year, trim: initial.trim, label, specs })
    })
    return () => { cancelled = true }
  }, [])

  const clear = () => {
    setMake('Holden'); setBodyType('All'); setModel(''); setYear(''); setTrim('')
    setErr(''); setOk(false); onClear(index)
  }

  const load = async () => {
    setErr('')
    setLoading(true)
    try {
      const label = `${year} ${make} ${model}${trim ? ' ' + trim : ''}`
      const specs = await lookup(make, model, year, trim)
      if (specs) {
        setOk(true)
        onResult(index, { make, model, year, trim, label, specs })
      } else {
        setErr('Specs not found. Try a nearby year or different trim.')
      }
    } finally {
      setLoading(false)
    }
  }

  const sel = {
    width: '100%', background: '#050505',
    border: `1px solid ${ok ? color + '44' : '#1a1a1a'}`,
    borderRadius: 6, padding: '9px 10px', color: '#d0d0d0', fontSize: 14,
    marginBottom: 7, appearance: 'none', WebkitAppearance: 'none',
    outline: 'none', cursor: 'pointer'
  }

  return (
    <div style={{
      background: '#0c0c0c',
      border: `1px solid ${ok ? color + '55' : '#1a1a1a'}`,
      borderTop: `3px solid ${ok ? color : '#1e1e1e'}`,
      borderRadius: 12, padding: '14px 14px 12px',
      boxShadow: ok ? `0 0 20px ${color}18` : 'none',
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{
        fontSize: 13, fontWeight: 800, letterSpacing: 2.5,
        color: ok ? color : '#2a2a2a', textTransform: 'uppercase', marginBottom: 10
      }}>CAR {index + 1}</div>

      <MakeModelSearch
        value={make && model ? { make, model } : null}
        bodyType={bodyType}
        loadedColor={ok ? color : null}
        onChange={({ make: mk, model: md }) => {
          setMake(mk); setModel(md); setBodyType('All'); setYear(''); setTrim('')
          setErr(''); setOk(false); onClear(index); preloadMake(mk)
        }}
      />

      <select value={bodyType} onChange={e => { setBodyType(e.target.value); setYear(''); setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        {BODY_TYPES.map(bt => <option key={bt} value={bt}>{BODY_LABELS[bt]}</option>)}
      </select>

      <select value={year} onChange={e => { setYear(e.target.value); setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        <option value="">— Year —</option>
        {years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>

      <select value={trim} onChange={e => { setTrim(e.target.value); setErr(''); setOk(false); onClear(index) }} style={sel}>
        <option value="">— Trim —</option>
        {trims.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <div style={{ display: 'flex', gap: 7, marginTop: 4 }}>
        <button onClick={load} disabled={!model || !year || !trim || loading} style={{
          flex: 1, background: (!model || !year || !trim || loading) ? '#111' : color,
          color: (!model || !year || !trim || loading) ? '#2a2a2a' : '#000',
          border: 'none', borderRadius: 7, padding: '10px 0',
          fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
          cursor: (!model || !year || !trim || loading) ? 'default' : 'pointer',
          transition: 'background 0.15s'
        }}>{loading ? '...' : 'LOAD'}</button>
        <button onClick={clear} style={{
          background: '#111', color: '#333', border: '1px solid #1a1a1a',
          borderRadius: 7, padding: '10px 11px', fontSize: 15, cursor: 'pointer'
        }}>✕</button>
      </div>
      {err && <p style={{ color: '#ff4444', fontSize: 12, marginTop: 6, lineHeight: 1.3 }}>{err}</p>}
      {ok  && <p style={{ color, fontSize: 12, marginTop: 6 }}>✓ Loaded</p>}
      {ok  && <TrimBadge trim={trim} make={make} color={color} />}
    </div>
  )
}
