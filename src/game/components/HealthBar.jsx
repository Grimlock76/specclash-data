export default function HealthBar({ current, max, color = '#4CAF50', label, showNumbers = true }) {
  const pct = Math.max(0, Math.min(100, (current / max) * 100))
  const barColor = pct > 50 ? color : pct > 25 ? '#E0A800' : '#E53935'
  return (
    <div>
      {(label || showNumbers) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12, color: '#aaa', fontWeight: 600 }}>
          {label && <span>{label}</span>}
          {showNumbers && <span style={{ color: barColor }}>{current} / {max}</span>}
        </div>
      )}
      <div style={{ background: '#1a1a1a', borderRadius: 6, height: 10, overflow: 'hidden', border: '1px solid #2a2a2a' }}>
        <div style={{
          width: `${pct}%`,
          height: '100%',
          background: barColor,
          borderRadius: 6,
          transition: 'width 0.4s ease, background 0.3s ease',
        }} />
      </div>
    </div>
  )
}
