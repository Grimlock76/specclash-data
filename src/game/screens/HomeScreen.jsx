import { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { CHARACTERS } from '../data/characters.js'
import { ELEMENTS } from '../data/elements.js'
import { STORY } from '../data/story.js'
import ElementBadge from '../components/ElementBadge.jsx'

export default function HomeScreen() {
  const { state, dispatch } = useGame()
  const [showStory, setShowStory] = useState(false)
  const [showReset, setShowReset] = useState(false)

  const crystalCount = state.crystals.length
  const totalLevels = STORY.chapters.reduce((a, c) => a + c.levels.length, 0)
    + STORY.sideQuests.reduce((a, q) => a + q.levels.length, 0)

  function startGame() {
    dispatch({ type: 'SET_SCREEN', screen: 'worldmap' })
  }
  function goRoster() {
    dispatch({ type: 'SET_SCREEN', screen: 'roster' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: "'Barlow Condensed', sans-serif" }}>
      {/* Stars bg */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(60)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? 3 : 2,
            height: Math.random() > 0.8 ? 3 : 2,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: 0.1 + Math.random() * 0.4,
          }} />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 520, width: '100%' }}>
        {/* Title */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: '#666', textTransform: 'uppercase', marginBottom: 8 }}>The Portal Master's Quest</div>
          <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: 2, lineHeight: 1, color: '#fff', textShadow: '0 0 60px #9C27B055' }}>
            SKY<span style={{ color: '#9C27B0' }}>HEROES</span>
          </div>
          <div style={{ fontSize: 14, color: '#555', letterSpacing: 3, marginTop: 6, textTransform: 'uppercase' }}>Rise. Battle. Upgrade.</div>
        </div>

        {/* Element icons strip */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap' }}>
          {Object.values(ELEMENTS).map(el => (
            <div key={el.name} style={{
              width: 38, height: 38, borderRadius: '50%',
              background: el.color + '22',
              border: `1px solid ${el.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>
              {el.icon}
            </div>
          ))}
        </div>

        {/* Progress */}
        {crystalCount > 0 && (
          <div style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: 12, padding: '12px 20px', marginBottom: 20, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 13, color: '#888' }}>
              <span style={{ color: '#FFD700', fontWeight: 700 }}>{crystalCount}</span>/8 Crystals
            </div>
            <div style={{ fontSize: 13, color: '#888' }}>
              <span style={{ color: '#C8F04A', fontWeight: 700 }}>{state.completedLevels.length}</span>/{totalLevels} Levels
            </div>
            <div style={{ fontSize: 13, color: '#888' }}>
              <span style={{ color: '#E0A800', fontWeight: 700 }}>{state.gold}</span> Gold
            </div>
          </div>
        )}

        {/* Crystals display */}
        {crystalCount > 0 && (
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            {Object.keys(ELEMENTS).map(el => (
              <div key={el} style={{
                width: 28, height: 28, borderRadius: '50%',
                background: state.crystals.includes(el) ? ELEMENTS[el].color + '44' : '#1a1a1a',
                border: `2px solid ${state.crystals.includes(el) ? ELEMENTS[el].color : '#2a2a2a'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, opacity: state.crystals.includes(el) ? 1 : 0.3,
              }}>
                {ELEMENTS[el].icon}
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <button onClick={startGame} style={{
            background: 'linear-gradient(135deg, #9C27B0, #6A1B9A)',
            color: '#fff', border: 'none', borderRadius: 12,
            padding: '14px 48px', fontSize: 18, fontWeight: 800,
            letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer',
            width: '100%', maxWidth: 300,
            boxShadow: '0 4px 20px #9C27B055',
          }}>
            {state.completedLevels.length > 0 ? 'Continue Quest' : 'Begin Quest'}
          </button>
          <button onClick={goRoster} style={{
            background: 'transparent', color: '#9C27B0',
            border: '2px solid #9C27B055', borderRadius: 12,
            padding: '10px 48px', fontSize: 15, fontWeight: 700,
            letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer',
            width: '100%', maxWidth: 300,
          }}>
            Hero Roster
          </button>
          <button onClick={() => setShowStory(s => !s)} style={{
            background: 'transparent', color: '#555',
            border: 'none', padding: '6px', fontSize: 13, cursor: 'pointer', letterSpacing: 1,
          }}>
            {showStory ? 'Hide Story ▲' : 'Read Story ▼'}
          </button>
          {showStory && (
            <div style={{ background: '#0f0f15', border: '1px solid #1e1e2e', borderRadius: 12, padding: 16, textAlign: 'left', color: '#888', fontSize: 13, lineHeight: 1.7, maxWidth: 420 }}>
              {STORY.intro}
            </div>
          )}
        </div>

        {/* Active hero reminder */}
        {state.activeHeroId && (
          <div style={{ marginTop: 20, fontSize: 13, color: '#555' }}>
            Active Hero: <span style={{ color: ELEMENTS[CHARACTERS[state.activeHeroId].element].color, fontWeight: 700 }}>
              {CHARACTERS[state.activeHeroId].emoji} {CHARACTERS[state.activeHeroId].name}
            </span>
          </div>
        )}

        {/* Reset */}
        <div style={{ marginTop: 32 }}>
          {!showReset
            ? <button onClick={() => setShowReset(true)} style={{ background: 'none', border: 'none', color: '#2a2a2a', fontSize: 11, cursor: 'pointer', letterSpacing: 1 }}>reset save</button>
            : (
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: '#666', fontSize: 12 }}>Erase all progress?</span>
                <button onClick={() => { dispatch({ type: 'RESET_GAME' }); setShowReset(false) }} style={{ background: '#E53935', border: 'none', color: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>Yes, Reset</button>
                <button onClick={() => setShowReset(false)} style={{ background: 'none', border: '1px solid #333', color: '#888', borderRadius: 6, padding: '4px 12px', fontSize: 12, cursor: 'pointer' }}>Cancel</button>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
