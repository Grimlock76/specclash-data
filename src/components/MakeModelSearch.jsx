import { useState, useRef, useEffect, useMemo } from 'react'
import { MODEL_INDEX, MAKES } from '../data/index.js'
import { getBodyType } from '../utils/bodyType.js'

// Does any trim of this model match the chosen body type?
function modelHasBody(make, model, bodyType) {
  const years = MAKES[make]?.[model] || {}
  for (const y in years) for (const t of years[y]) if (getBodyType(model, t) === bodyType) return true
  return false
}

// Lower rank = better match (model prefix beats make prefix beats substring)
function rank(e, q) {
  const model = e.model.toLowerCase(), make = e.make.toLowerCase()
  if (model.startsWith(q)) return 0
  if (make.startsWith(q)) return 1
  if (model.includes(q)) return 2
  return 3
}

export default function MakeModelSearch({ value, bodyType = 'All', onChange, loadedColor }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [hi, setHi] = useState(0)
  const wrapRef = useRef(null)
  const listRef = useRef(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = MODEL_INDEX
    if (bodyType !== 'All') list = list.filter(e => modelHasBody(e.make, e.model, bodyType))
    if (q) {
      const terms = q.split(/\s+/)
      list = list.filter(e => terms.every(t => e.hay.includes(t)))
      list = [...list].sort((a, b) => rank(a, q) - rank(b, q))
    }
    return list.slice(0, 60)
  }, [query, bodyType])

  useEffect(() => {
    if (!open) return
    const handler = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) { setOpen(false); setQuery('') }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (open && listRef.current) listRef.current.children[hi]?.scrollIntoView({ block: 'nearest' })
  }, [hi, open])

  const select = e => { onChange(e); setOpen(false); setQuery(''); setHi(0) }

  const onKey = e => {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') { setOpen(true); setHi(0) }
      return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setHi(h => Math.min(h + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi(h => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (results[hi]) select(results[hi]) }
    else if (e.key === 'Escape') { setOpen(false); setQuery('') }
  }

  const display = value ? `${value.make} · ${value.model}` : ''
  const borderColor = loadedColor ? loadedColor + '55' : open ? '#333' : '#1a1a1a'

  return (
    <div className="ss-wrap mms-wrap" ref={wrapRef}>
      <span className="mms-icon" aria-hidden>⌕</span>
      <input
        className="ss-input mms-input"
        style={{ borderColor }}
        value={open ? query : display}
        placeholder={display || 'Search make or model…'}
        onChange={e => { setQuery(e.target.value); setHi(0); if (!open) setOpen(true) }}
        onFocus={() => { setOpen(true); setQuery('') }}
        onKeyDown={onKey}
      />
      {open && (
        <div className="ss-dropdown" ref={listRef}>
          {results.length === 0
            ? <div className="ss-empty">No matches</div>
            : results.map((e, i) => (
              <div
                key={e.make + '|' + e.model}
                className={`ss-option mms-option${i === hi ? ' hi' : ''}`}
                onMouseDown={() => select(e)}
                onMouseEnter={() => setHi(i)}
              >
                <span className="mms-make">{e.make}</span>
                <span className="mms-dot"> · </span>
                <span className="mms-model">{e.model}</span>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}
