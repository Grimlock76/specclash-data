import { useState } from 'react'
import { getTrimInfo } from '../utils/trimInfo.js'

export default function TrimBadge({ trim, make, color }) {
  const [open, setOpen] = useState(false)
  const info = getTrimInfo(trim, make)
  if (!info) return null

  return (
    <div style={{ marginTop: 8 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'transparent',
          border: `1px solid ${color}33`, borderRadius: 6,
          padding: '6px 10px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 12, letterSpacing: 1.5, color, textTransform: 'uppercase' }}>
          Trim Details
        </span>
        <span style={{ fontSize: 10, color, opacity: 0.7 }}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div style={{ marginTop: 4, background: '#0a0a0a', border: `1px solid ${color}22`, borderRadius: 6, padding: '10px 12px' }}>
          <div style={{ fontFamily: "'Barlow Condensed'", fontSize: 14, fontWeight: 700, color, letterSpacing: 1, marginBottom: 2 }}>
            {info.title}
          </div>
          {info.base && (
            <div style={{ fontSize: 11, color: '#555', marginBottom: 6 }}>
              Upgrades over: <span style={{ color: '#666' }}>{info.base}</span>
            </div>
          )}
          <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5, marginBottom: 8 }}>
            {info.summary}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {info.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 4 }}>
                <span style={{ color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: '#bbb', lineHeight: 1.4 }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
