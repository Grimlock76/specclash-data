const PRO_FEATURES = [
  '4-car head-to-head comparison',
  `All makes & models`,
  'Shareable comparison link',
  'Print-ready export',
]

import { useState } from 'react'

export default function ProPanel({ isPro, onClose, onUnlock, onLock }) {
  const [showCode, setShowCode] = useState(false)
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const submit = async e => {
    e.preventDefault()
    if (!code.trim() || busy) return
    setBusy(true); setErr('')
    const msg = await onUnlock(code)
    setBusy(false)
    if (msg) setErr(msg)
  }

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
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 4, color: '#A970FF', textTransform: 'uppercase', marginBottom: 4 }}>
          SPEC CLASH PRO
        </div>
        <div style={{ fontSize: 13, color: '#555', letterSpacing: 1 }}>Unlock the full garage</div>
      </div>

      {isPro ? (
        <>
          <div style={{ background: '#110d17', border: '1px solid #A970FF33', borderRadius: 12, padding: '16px 18px', marginBottom: 18 }}>
            <div style={{ color: '#A970FF', fontSize: 15, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>✓ PRO ACTIVE · OWNER</div>
            {PRO_FEATURES.map(f => (
              <div key={f} style={{ fontSize: 13, color: '#777', marginBottom: 5, display: 'flex', gap: 8 }}>
                <span style={{ color: '#A970FF', flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>
          <button onClick={onLock} style={{
            width: '100%', background: '#1a1a1a', color: '#555',
            border: '1px solid #2a2a2a', borderRadius: 10, padding: '13px 0',
            fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer'
          }}>LOCK THIS DEVICE</button>
        </>
      ) : (
        <>
          <div style={{ marginBottom: 22 }}>
            {PRO_FEATURES.map(f => (
              <div key={f} style={{ fontSize: 14, color: '#888', marginBottom: 7, display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ color: '#A970FF', fontSize: 10, flexShrink: 0 }}>▲</span>{f}
              </div>
            ))}
          </div>

          <div style={{
            width: '100%', background: '#1a1a1a', color: '#A970FF',
            border: '1px solid #A970FF55', borderRadius: 10, padding: '15px 0', textAlign: 'center',
            fontSize: 17, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase',
          }}>PRO COMING SOON</div>

          {!showCode ? (
            <button onClick={() => setShowCode(true)} style={{
              display: 'block', margin: '16px auto 0', background: 'none', border: 'none',
              color: '#555', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer',
            }}>Owner access</button>
          ) : (
            <form onSubmit={submit} style={{ marginTop: 16, display: 'grid', gap: 8 }}>
              <input
                type="password" autoComplete="current-password" autoCapitalize="characters" spellCheck={false}
                placeholder="Owner code" value={code} onChange={e => setCode(e.target.value)} maxLength={64} autoFocus
                aria-label="Owner code"
                style={{
                  background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 10, color: '#e8e8e8',
                  padding: '12px 14px', fontSize: 16, letterSpacing: 2, fontFamily: 'inherit',
                }}
              />
              <button type="submit" disabled={busy} style={{
                background: '#A970FF', color: '#000', border: 'none', borderRadius: 10, padding: '12px 0',
                fontSize: 14, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', opacity: busy ? 0.6 : 1,
              }}>{busy ? 'Checking…' : 'Unlock'}</button>
              {err && <div role="alert" style={{ color: '#ff6b5a', fontSize: 13 }}>{err}</div>}
            </form>
          )}
        </>
      )}
    </div>
  )
}
