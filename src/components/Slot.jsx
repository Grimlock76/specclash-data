import { useState, useEffect } from 'react'
import { MAKES, lookup, preloadMake } from '../data/index.js'
import { BODY_TYPES, getBodyType } from '../utils/bodyType.js'
import TrimBadge from './TrimBadge.jsx'
import MakeModelSearch from './MakeModelSearch.jsx'
import CarSilhouette, { pickArchetype } from './CarSilhouette.jsx'

const COLORS = ['#C8F04A', '#60C8FF', '#FF7043', '#B39DFF']

// Group trims by generation code (leading short token: VB, VF, ZB, WN, MkIV…).
// Returns ordered [{gen, trims}] when grouping genuinely consolidates the list
// (gen-prefixed cars like Commodore), or null to render a flat list (Corolla).
function buildTrimGroups(trims, modelYears) {
  if (trims.length < 8) return null
  const isGen = tok => /^[A-Z0-9]{1,4}$/.test(tok) && /[A-Z]/.test(tok)
  const groups = new Map()
  for (const t of trims) {
    const tok = t.split(' ')[0]
    const key = isGen(tok) ? tok : '—'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(t)
  }
  // Evidence must come from gen-keyed groups only — the '—' bucket doesn't count,
  // otherwise plain trim names (SX, ZR…) drag Corolla-style lists into bogus groups.
  const genGroups = [...groups.entries()].filter(([k]) => k !== '—')
  const multi = genGroups.filter(([, a]) => a.length >= 2)
  const inGen = genGroups.reduce((s, [, a]) => s + a.length, 0)
  if (genGroups.length < 2 || multi.length < 2 || inGen < trims.length * 0.5) return null
  const minYear = {}
  for (const y of Object.keys(modelYears)) for (const t of modelYears[y]) {
    const yn = +y; if (minYear[t] === undefined || yn < minYear[t]) minYear[t] = yn
  }
  const genYear = g => Math.min(...groups.get(g).map(t => minYear[t] ?? 9999))
  return [...groups.keys()]
    .sort((a, b) => genYear(a) - genYear(b))
    .map(gen => ({ gen, trims: groups.get(gen) }))
}
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

  const modelYears = MAKES[make]?.[model] || {}
  const matchesBody = t => bodyType === 'All' || getBodyType(model, t) === bodyType

  // Years available — narrowed to those containing the selected trim (if any).
  const years = model
    ? Object.keys(modelYears)
        .filter(y => (modelYears[y] || []).some(t => matchesBody(t) && (!trim || t === trim)))
        .sort()
    : []
  // Trims available WITHOUT requiring a year: union across all years (or just the
  // selected year). Year is optional — picking a trim implies its year range.
  const trims = model
    ? [...new Set(
        (year ? [year] : Object.keys(modelYears))
          .flatMap(y => modelYears[y] || [])
          .filter(matchesBody)
      )].sort()
    : []

  // Latest year that offers the chosen trim — used when no year is picked.
  const resolveYear = () => year ||
    Object.keys(modelYears).filter(y => (modelYears[y] || []).includes(trim)).sort().pop() || ''

  // Group the trim list by generation when it helps (e.g. Commodore VB…ZB).
  const trimGroups = year ? null : buildTrimGroups(trims, modelYears)

  // Body types this specific car actually comes in (Camaro → Coupe; Commodore → Sedan/Wagon).
  // Before a model is picked, fall back to all types so it can still pre-filter the search.
  const modelBodies = make && model
    ? BODY_TYPES.filter(bt => bt !== 'All' &&
        Object.values(MAKES[make]?.[model] || {}).some(ts => ts.some(t => getBodyType(model, t) === bt)))
    : BODY_TYPES.filter(bt => bt !== 'All')
  const bodyOptions = ['All', ...modelBodies]

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
      const useYear = resolveYear()
      const label = `${useYear} ${make} ${model}${trim ? ' ' + trim : ''}`
      const specs = await lookup(make, model, useYear, trim)
      if (specs) {
        setOk(true)
        onResult(index, { make, model, year: useYear, trim, label, specs })
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

      {/* Era-specific silhouette — near-invisible until a model is picked, slot colour once loaded */}
      <div className="car-silhouette" style={{ margin: '0 6px 8px' }}>
        <CarSilhouette
          archetype={model
            ? pickArchetype(getBodyType(model, trim), {
                year: year || resolveYear() || Object.keys(modelYears).sort().pop(),
                make, model,
              })
            : 'sedanModern'}
          color={ok ? color : model ? '#3a3a3a' : '#161616'}
        />
      </div>

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
        {bodyOptions.map(bt => <option key={bt} value={bt}>{BODY_LABELS[bt]}</option>)}
      </select>

      <select value={trim} onChange={e => { const v = e.target.value; setTrim(v); if (v && year && !(modelYears[year] || []).includes(v)) setYear(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        <option value="">— Trim —</option>
        {trimGroups
          ? trimGroups.map(({ gen, trims: gts }) =>
              gen === '—'
                ? gts.map(t => <option key={t} value={t}>{t}</option>)
                : <optgroup key={gen} label={gen}>
                    {gts.map(t => <option key={t} value={t}>{t}</option>)}
                  </optgroup>
            )
          : trims.map(t => <option key={t} value={t}>{t}</option>)
        }
      </select>

      <select value={year} onChange={e => { const v = e.target.value; setYear(v); if (v && trim && !(modelYears[v] || []).includes(trim)) setTrim(''); setErr(''); setOk(false); onClear(index) }} style={sel}>
        <option value="">{trim ? '— Year · auto —' : '— Year (optional) —'}</option>
        {years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>

      <div style={{ display: 'flex', gap: 7, marginTop: 4 }}>
        <button onClick={load} disabled={!model || !trim || loading} style={{
          flex: 1, background: (!model || !trim || loading) ? '#111' : color,
          color: (!model || !trim || loading) ? '#2a2a2a' : '#000',
          border: 'none', borderRadius: 7, padding: '10px 0',
          fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
          cursor: (!model || !trim || loading) ? 'default' : 'pointer',
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
