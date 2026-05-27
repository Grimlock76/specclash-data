import { useGame } from '../context/GameContext.jsx'
import { CHARACTERS } from '../data/characters.js'
import { ELEMENTS } from '../data/elements.js'
import CharacterCard from '../components/CharacterCard.jsx'

export default function RosterScreen() {
  const { state, dispatch } = useGame()

  function selectHero(id) {
    dispatch({ type: 'SELECT_HERO', heroId: id })
  }
  function openUpgrades(id) {
    dispatch({ type: 'SELECT_HERO', heroId: id })
    dispatch({ type: 'SET_SCREEN', screen: 'upgrade' })
  }
  function goBack() {
    dispatch({ type: 'SET_SCREEN', screen: state.completedLevels.length > 0 ? 'worldmap' : 'home' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', fontFamily: "'Barlow Condensed', sans-serif", color: '#fff' }}>
      {/* Header */}
      <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={goBack} style={{ background: 'none', border: '1px solid #2a2a2a', color: '#888', borderRadius: 8, padding: '6px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>
          ← Back
        </button>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 2 }}>HERO ROSTER</div>
          <div style={{ fontSize: 12, color: '#444', letterSpacing: 1 }}>Select a hero · Tap to activate · View upgrades</div>
        </div>
        <div style={{ marginLeft: 'auto', background: '#1a1a00', border: '1px solid #E0A80033', borderRadius: 10, padding: '6px 14px', fontSize: 14, fontWeight: 700, color: '#E0A800' }}>
          {state.gold} <span style={{ fontSize: 11, fontWeight: 400, color: '#888' }}>gold</span>
        </div>
      </div>

      {/* Active hero reminder */}
      {state.activeHeroId && (
        <div style={{ padding: '10px 24px', background: ELEMENTS[CHARACTERS[state.activeHeroId].element].bgColor, borderBottom: '1px solid #141414', fontSize: 13, color: '#888' }}>
          Active hero: <strong style={{ color: ELEMENTS[CHARACTERS[state.activeHeroId].element].color }}>
            {CHARACTERS[state.activeHeroId].emoji} {CHARACTERS[state.activeHeroId].name}
          </strong> — this hero will be used in battle
        </div>
      )}

      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {Object.keys(CHARACTERS).map(id => (
            <div key={id}>
              <CharacterCard
                heroId={id}
                heroState={state.heroes[id]}
                selected={state.activeHeroId === id}
                onClick={() => selectHero(id)}
              />
              <button onClick={() => openUpgrades(id)} style={{
                marginTop: 8, width: '100%',
                background: ELEMENTS[CHARACTERS[id].element].color + '22',
                border: `1px solid ${ELEMENTS[CHARACTERS[id].element].color}44`,
                color: ELEMENTS[CHARACTERS[id].element].color,
                borderRadius: 10, padding: '8px', fontSize: 13, fontWeight: 700,
                cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase',
              }}>
                ↑ Upgrades ({state.heroes[id].upgrades.length})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
