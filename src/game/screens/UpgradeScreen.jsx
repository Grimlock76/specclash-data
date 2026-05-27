import { useGame } from '../context/GameContext.jsx'
import { CHARACTERS } from '../data/characters.js'
import { ELEMENTS } from '../data/elements.js'
import { UPGRADES } from '../data/upgrades.js'
import { getEffectiveStats } from '../utils/combat.js'
import ElementBadge from '../components/ElementBadge.jsx'
import HealthBar from '../components/HealthBar.jsx'

function effectLabel(effect) {
  if (!effect) return ''
  if (Array.isArray(effect)) return effect.map(effectLabel).join(', ')
  if (effect.type === 'stat') return `+${effect.value} ${effect.stat}`
  if (effect.type === 'moveStat') return `Enhances ${effect.moveId}`
  if (effect.type === 'passive') {
    const labels = { dodge: `+${Math.round(effect.value * 100)}% dodge`, regen: `+${effect.value} HP/turn regen`, lifeSteal: `+${Math.round(effect.value * 100)}% life steal`, counter: `+${effect.value} counter dmg`, phoenixRevive: `Revive: +${effect.value} HP`, postBattleHeal: `+${Math.round(effect.value * 100)}% post-battle heal` }
    return labels[effect.id] || effect.id
  }
  return ''
}

export default function UpgradeScreen() {
  const { state, dispatch } = useGame()
  const heroId = state.activeHeroId
  if (!heroId) {
    dispatch({ type: 'SET_SCREEN', screen: 'roster' })
    return null
  }

  const char = CHARACTERS[heroId]
  const el = ELEMENTS[char.element]
  const heroState = state.heroes[heroId]
  const tree = UPGRADES[heroId]
  const { upgrades: unlocked, chosenPath } = heroState
  const stats = getEffectiveStats(heroId, heroState)

  function canAfford(cost) { return state.gold >= cost }
  function isUnlocked(id) { return unlocked.includes(id) }
  function unlock(node, path) {
    if (!canAfford(node.cost) || isUnlocked(node.id)) return
    dispatch({ type: 'UNLOCK_UPGRADE', heroId, upgradeId: node.id, cost: node.cost, pathChosen: path || null })
  }

  function NodeCard({ node, path, tier, isUlt = false }) {
    const locked = isUnlocked(node.id)
    const affordable = canAfford(node.cost)
    const pathLocked = path && chosenPath && chosenPath !== path
    return (
      <div style={{
        background: locked ? el.color + '22' : '#111',
        border: `2px solid ${locked ? el.color : pathLocked ? '#1a1a1a' : affordable ? '#2a2a2a' : '#1a1a1a'}`,
        borderRadius: 10,
        padding: '10px 14px',
        opacity: pathLocked ? 0.35 : 1,
        position: 'relative',
      }}>
        {isUlt && (
          <div style={{ position: 'absolute', top: -9, left: 10, background: el.color, color: '#000', fontSize: 9, fontWeight: 900, padding: '1px 6px', borderRadius: 4, letterSpacing: 1 }}>ULTIMATE</div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: locked ? el.lightColor : '#ddd' }}>{node.name}</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>{node.desc}</div>
            <div style={{ fontSize: 11, color: el.color + 'aa', marginTop: 3 }}>{effectLabel(node.effect)}</div>
          </div>
          {!locked && !pathLocked && (
            <button onClick={() => unlock(node, path)} disabled={!affordable} style={{
              background: affordable ? el.color : '#1a1a1a',
              border: 'none', color: affordable ? '#000' : '#444',
              borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700,
              cursor: affordable ? 'pointer' : 'not-allowed', flexShrink: 0,
              whiteSpace: 'nowrap',
            }}>
              {node.cost}g
            </button>
          )}
          {locked && <div style={{ color: el.color, fontSize: 18 }}>✓</div>}
        </div>
      </div>
    )
  }

  function PathSection({ path }) {
    const p = tree[path]
    const isChosen = chosenPath === path
    const isBlocked = chosenPath && chosenPath !== path
    return (
      <div style={{
        background: isBlocked ? '#0d0d0d' : '#0f0f14',
        border: `2px solid ${isChosen ? el.color : isBlocked ? '#111' : '#222'}`,
        borderRadius: 14,
        padding: 16,
        opacity: isBlocked ? 0.5 : 1,
      }}>
        <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: isChosen ? el.lightColor : '#bbb', letterSpacing: 1, textTransform: 'uppercase' }}>
            Path {path}: {p.name}
          </div>
          {isChosen && <div style={{ background: el.color, color: '#000', fontSize: 10, fontWeight: 900, padding: '2px 8px', borderRadius: 4 }}>CHOSEN</div>}
          {!chosenPath && <div style={{ color: '#555', fontSize: 12 }}>— choose one path</div>}
        </div>
        <div style={{ color: '#555', fontSize: 12, marginBottom: 12 }}>{p.description}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {p.nodes.map(node => <NodeCard key={node.id} node={node} path={path} tier={node.tier} />)}
          <NodeCard node={p.ultimate} path={path} isUlt />
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: el.bgColor + 'cc', fontFamily: "'Barlow Condensed', sans-serif", color: '#fff' }}
      // overlay dark
    >
      <div style={{ minHeight: '100vh', background: 'rgba(5,5,8,0.92)' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'roster' })} style={{ background: 'none', border: '1px solid #2a2a2a', color: '#888', borderRadius: 8, padding: '6px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>
            ← Back
          </button>
          <div style={{ fontSize: 28, background: el.bgColor, borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{char.emoji}</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>{char.name}</div>
            <ElementBadge element={char.element} size="sm" />
          </div>
          <div style={{ marginLeft: 'auto', background: '#1a1a00', border: '1px solid #E0A80033', borderRadius: 10, padding: '6px 14px', fontSize: 14, fontWeight: 700, color: '#E0A800' }}>
            {state.gold}g
          </div>
        </div>

        <div style={{ padding: '16px 20px', maxWidth: 700, margin: '0 auto' }}>
          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20 }}>
            {[['Lv', heroState.level], ['ATK', stats.attack], ['DEF', stats.defense], ['SPD', stats.speed]].map(([k, v]) => (
              <div key={k} style={{ background: '#111', borderRadius: 10, padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#555', fontWeight: 600 }}>{k}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: el.lightColor }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: 20 }}>
            <HealthBar current={heroState.currentHp} max={stats.maxHp} color={el.color} label="HP" />
          </div>

          {/* Shared upgrades */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Base Upgrades</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {tree.shared.map(node => <NodeCard key={node.id} node={node} path={null} />)}
            </div>
          </div>

          {/* Path upgrades */}
          <div style={{ fontWeight: 700, fontSize: 13, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Upgrade Paths {!chosenPath && <span style={{ color: '#666', fontSize: 11, fontWeight: 400, textTransform: 'none', marginLeft: 4 }}>(choose A or B — you cannot change later)</span>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <PathSection path="A" />
            <PathSection path="B" />
          </div>

          {/* Flavor */}
          <div style={{ marginTop: 24, textAlign: 'center', color: '#333', fontSize: 13, fontStyle: 'italic' }}>
            {char.flavorText}
          </div>
        </div>
      </div>
    </div>
  )
}
