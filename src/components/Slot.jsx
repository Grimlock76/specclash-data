import { useState } from 'react'
import { MAKES, lookup } from '../data/index.js'
import { BODY_TYPES, getBodyType } from '../utils/bodyType.js'
import TrimBadge from './TrimBadge.jsx'

const COLORS = ['#C8F04A', '#60C8FF', '#FF7043', '#B39DFF']

const BODY_LABELS = { All: '— Body Type —', Sedan: 'Sedan', Wagon: 'Wagon', Ute: 'Ute', SUV: 'SUV', Coupe: 'Coupe', Hatch: 'Hatchback', Van: 'Van / Commercial' }

export default function Slot({ index, onResult, onClear }) {
  const color = COLORS[index]
  const [make, setMake]         = useState('Holden')
  const [bodyType, setBodyType] = useState('All')
  const [model, setModel]       = useState('')
  const [year, setYear]         = useState('')
  const [trim, setTrim]         = useState('')
  const [err, setErr]           = useState('')
  const [ok, setOk]             = useState(false)

  const makes  = Object.keys(MAKES).sort()
  const models = make
    ? Object.keys(MAKES[make] || {})
        .filter(m => bodyType === 'All' ||
          Object.values(MAKES[make][m] || {}).some(trims =>
            trims.some(t => getBodyType(m, t) === bodyType)
          )
        )
        .sort((a, b) => a.localeCompare(b))
    : []
  const years  = model ? Object.keys(MAKES[make]?.[model] || {}).sort() : []
  const trims  = model && year
    ? (MAKES[make]?.[model]?.[year] || []).filter(t =>
        bodyType === 'All' || getBodyType(model, t) === bodyType
      )
    : []

  const clear = () => {
    setMake('Holden'); setBodyType('All'); setModel(''); setYear(''); setTrim('')
    setErr(''); setOk(false); onClear(index)
  }

  const load = () => {
    setErr('')
    const label = `${year} ${make} ${model}${trim ? ' ' + trim : ''}`
    const specs = lookup(make, model, year, trim)
    if (specs) { setOk(true); onResult(index, { label, specs }) }
    else setErr('Specs for this exact trim not yet in DB. Try a nearby year or different trim.')
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
      flex: '1 1 140px', minWidth: 140,
      boxShadow: ok ? `0 0 20px ${color}18` : 'none',
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{
        fontFamily: "'Barlow Condensed'", fontSize: 13, fontWeight: 800,
        letterSpacing: 2.5, color: ok ? color : '#2a2a2a',
        textTransform: 'uppercase', marginBottom: 10
      }}>CAR {index + 1}</div>

      <select value={make} onChange={e => { setMake(e.target.value); setModel(''); setYear(''); setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        {makes.map(m => <option key={m} value={m}>{m}</option>)}
      </select>

      <select value={bodyType} onChange={e => { setBodyType(e.target.value); setModel(''); setYear(''); setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        {BODY_TYPES.map(bt => <option key={bt} value={bt}>{BODY_LABELS[bt]}</option>)}
      </select>

      <select value={model} onChange={e => { setModel(e.target.value); setYear(''); setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        <option value="">— Model —</option>
        {models.map(m => <option key={m} value={m}>{m}</option>)}
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
        <button onClick={load} disabled={!model || !year || !trim} style={{
          flex: 1, background: (!model || !year || !trim) ? '#111' : color,
          color: (!model || !year || !trim) ? '#2a2a2a' : '#000',
          border: 'none', borderRadius: 7, padding: '10px 0',
          fontSize: 14, fontWeight: 700, fontFamily: "'Barlow Condensed'",
          letterSpacing: 1.5, textTransform: 'uppercase',
          cursor: (!model || !year || !trim) ? 'default' : 'pointer',
          transition: 'background 0.15s'
        }}>LOAD</button>
        <button onClick={clear} style={{
          background: '#111', color: '#333', border: '1px solid #1a1a1a',
          borderRadius: 7, padding: '10px 11px', fontSize: 15, cursor: 'pointer'
        }}>✕</button>
      </div>
      {err && <p style={{ color: '#ff4444', fontSize: 12, marginTop: 6, lineHeight: 1.3 }}>{err}</p>}
      {ok  && <p style={{ color, fontSize: 12, marginTop: 6 }}>✓ Loaded</p>}
      {ok  && <TrimBadge trim={trim} color={color} />}
    </div>
  )
}
