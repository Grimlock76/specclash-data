import { useState, useRef, useEffect } from 'react'

export default function SearchSelect({ options = [], value, onChange, placeholder, disabled, loadedColor }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [hi, setHi] = useState(-1)
  const wrapRef = useRef(null)
  const listRef = useRef(null)

  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    if (!open) return
    const handler = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false); setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (hi >= 0 && listRef.current) {
      listRef.current.children[hi]?.scrollIntoView({ block: 'nearest' })
    }
  }, [hi])

  const select = opt => { onChange(opt); setOpen(false); setQuery(''); setHi(-1) }

  const onKey = e => {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') { setOpen(true); setHi(0) }
      return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setHi(h => Math.min(h + 1, filtered.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi(h => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (hi >= 0 && filtered[hi]) select(filtered[hi]) }
    else if (e.key === 'Escape') { setOpen(false); setQuery(''); setHi(-1) }
  }

  const borderColor = loadedColor ? loadedColor + '55' : open ? '#333' : '#1a1a1a'

  return (
    <div className="ss-wrap" ref={wrapRef}>
      <input
        className="ss-input"
        style={{ borderColor }}
        value={open ? query : (value || '')}
        placeholder={value || placeholder}
        disabled={disabled}
        onChange={e => { setQuery(e.target.value); setHi(0) }}
        onFocus={() => { if (!disabled) { setOpen(true); setQuery('') } }}
        onKeyDown={onKey}
        readOnly={!open}
      />
      {open && !disabled && (
        <div className="ss-dropdown" ref={listRef}>
          {filtered.length === 0
            ? <div className="ss-empty">No results</div>
            : filtered.map((o, i) => (
              <div
                key={o}
                className={`ss-option${i === hi ? ' hi' : ''}`}
                onMouseDown={() => select(o)}
                onMouseEnter={() => setHi(i)}
              >{o}</div>
            ))
          }
        </div>
      )}
    </div>
  )
}
