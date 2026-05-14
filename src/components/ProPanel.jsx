const PRO_FEATURES = [
  '4-car head-to-head comparison',
  `All makes & models`,
  'Shareable comparison link',
  'Print-ready export',
]

export default function ProPanel({ isPro, onClose, onActivate, onDeactivate }) {

  return (
    <div style={{
      background: '#111', border: '1px solid #252525', borderRadius: 18,
      padding: '28px 28px 24px', width: '100%', maxWidth: 380,
      position: 'relative', fontFamily: "'Barlow Condensed', sans-serif"
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 14, right: 16,
        background: 'none', border: 'none', color: '#444',
        fontSize: 24, cursor: 'pointer', lineHeight: 1, padding: '2px 6px'
      }}>×</button>

      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 4, color: '#C8F04A', textTransform: 'uppercase', marginBottom: 4 }}>
          SPEC CLASH PRO
        </div>
        <div style={{ fontSize: 13, color: '#555', letterSpacing: 1 }}>Unlock the full garage</div>
      </div>

      {isPro ? (
        <>
          <div style={{ background: '#141408', border: '1px solid #C8F04A33', borderRadius: 12, padding: '16px 18px', marginBottom: 18 }}>
            <div style={{ color: '#C8F04A', fontSize: 15, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>✓ PRO ACTIVE</div>
            {PRO_FEATURES.map(f => (
              <div key={f} style={{ fontSize: 13, color: '#777', marginBottom: 5, display: 'flex', gap: 8 }}>
                <span style={{ color: '#C8F04A', flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>
          <button onClick={onDeactivate} style={{
            width: '100%', background: '#1a1a1a', color: '#555',
            border: '1px solid #2a2a2a', borderRadius: 10, padding: '13px 0',
            fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer'
          }}>DEACTIVATE PRO</button>
        </>
      ) : (
        <>
          <div style={{ marginBottom: 22 }}>
            {PRO_FEATURES.map(f => (
              <div key={f} style={{ fontSize: 14, color: '#888', marginBottom: 7, display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ color: '#C8F04A', fontSize: 10, flexShrink: 0 }}>▲</span>{f}
              </div>
            ))}
          </div>

          <button onClick={onActivate} style={{
            width: '100%', background: '#C8F04A', color: '#000',
            border: 'none', borderRadius: 10, padding: '15px 0',
            fontSize: 17, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif"
          }}>ACTIVATE PRO — FREE</button>
        </>
      )}
    </div>
  )
}
