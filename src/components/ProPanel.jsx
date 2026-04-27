export default function ProPanel({ isPro, onClose, onActivate, onDowngrade }) {
  return (
    <div style={{ margin: '0 24px', marginTop: 16, background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: 14, padding: '20px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontFamily: "'Barlow Condensed'", fontSize: 18, fontWeight: 800, letterSpacing: 3, color: '#C8F04A', textTransform: 'uppercase' }}>SPEC CLASH PRO</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', fontSize: 22, cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}>×</button>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        {[
          { tier: 'FREE', features: ['2 car slots', 'Head-to-head', 'Full specs'], active: !isPro, color: '#555' },
          { tier: 'PRO',  features: ['4 car slots', 'Head-to-head', 'Full specs', 'All makes'], active: isPro, color: '#C8F04A' }
        ].map(t => (
          <div key={t.tier} style={{ flex: 1, background: t.active ? '#141408' : '#0a0a0a', border: `1px solid ${t.active ? t.color : '#1a1a1a'}`, borderRadius: 10, padding: '12px 14px' }}>
            <div style={{ fontFamily: "'Barlow Condensed'", fontSize: 16, fontWeight: 700, letterSpacing: 2, color: t.color, marginBottom: 8, textTransform: 'uppercase' }}>{t.tier}</div>
            {t.features.map(f => (
              <div key={f} style={{ fontSize: 12, color: t.active ? '#bbb' : '#444', marginBottom: 3, display: 'flex', gap: 6 }}>
                <span style={{ color: t.color }}>✓</span>{f}
              </div>
            ))}
          </div>
        ))}
      </div>
      {!isPro
        ? <button onClick={onActivate} style={{ width: '100%', background: '#C8F04A', color: '#000', border: 'none', borderRadius: 10, padding: '13px 0', fontSize: 15, fontWeight: 700, fontFamily: "'Barlow Condensed'", letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>ACTIVATE PRO — FREE 🏁</button>
        : <button onClick={onDowngrade} style={{ width: '100%', background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', borderRadius: 10, padding: '13px 0', fontSize: 13, fontWeight: 700, fontFamily: "'Barlow Condensed'", letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>DOWNGRADE TO FREE</button>
      }
    </div>
  )
}
