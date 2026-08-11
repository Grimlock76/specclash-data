import { CHARACTERS } from '../data/characters.js'
import { ELEMENTS } from '../data/elements.js'
import { getEffectiveStats } from '../utils/combat.js'
import ElementBadge from './ElementBadge.jsx'
import HealthBar from './HealthBar.jsx'

export default function CharacterCard({ heroId, heroState, selected, onClick, compact = false }) {
  const char = CHARACTERS[heroId]
  const el = ELEMENTS[char.element]
  const stats = getEffectiveStats(heroId, heroState)
  const hpPct = heroState.currentHp / stats.maxHp

  const borderColor = selected ? el.color : '#2a2a2a'

  if (compact) {
    return (
      <div onClick={onClick} style={{
        background: '#111',
        border: `2px solid ${borderColor}`,
        borderRadius: 12,
        padding: '10px 14px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex', alignItems: 'center', gap: 12,
        transition: 'border-color 0.2s, transform 0.1s',
        transform: selected ? 'scale(1.02)' : 'scale(1)',
      }}>
        <div style={{ fontSize: 28, background: el.bgColor, borderRadius: 8, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {char.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{char.name}</div>
          <ElementBadge element={char.element} size="sm" />
        </div>
        <div style={{ textAlign: 'right', fontSize: 12, color: '#888' }}>
          <div>Lv {heroState.level}</div>
          <div style={{ color: hpPct > 0.5 ? '#4CAF50' : hpPct > 0.25 ? '#E0A800' : '#E53935' }}>
            {heroState.currentHp}/{stats.maxHp}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div onClick={onClick} style={{
      background: `linear-gradient(160deg, ${el.bgColor} 0%, #111 60%)`,
      border: `2px solid ${borderColor}`,
      borderRadius: 16,
      padding: 20,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'border-color 0.2s, transform 0.15s',
      transform: selected ? 'scale(1.03)' : 'scale(1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {selected && (
        <div style={{ position: 'absolute', top: 8, right: 8, background: el.color, color: '#000', borderRadius: 20, fontSize: 10, fontWeight: 800, padding: '2px 8px', letterSpacing: 1 }}>
          ACTIVE
        </div>
      )}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 54, lineHeight: 1, background: el.bgColor, borderRadius: 12, display: 'inline-block', padding: '8px 16px' }}>
          {char.emoji}
        </div>
        <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', marginTop: 8 }}>{char.name}</div>
        <div style={{ marginTop: 4 }}><ElementBadge element={char.element} size="sm" /></div>
        <div style={{ color: '#666', fontSize: 11, marginTop: 4 }}>Level {heroState.level}</div>
      </div>

      <HealthBar current={heroState.currentHp} max={stats.maxHp} color={el.color} label="HP" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 12, fontSize: 12 }}>
        {[['ATK', stats.attack], ['DEF', stats.defense], ['SPD', stats.speed], ['MAX HP', stats.maxHp]].map(([k, v]) => (
          <div key={k} style={{ background: '#1a1a1a', borderRadius: 8, padding: '5px 8px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666' }}>{k}</span>
            <span style={{ color: el.lightColor, fontWeight: 700 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
