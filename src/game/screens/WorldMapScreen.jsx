import { useGame } from '../context/GameContext.jsx'
import { STORY } from '../data/story.js'
import { ELEMENTS } from '../data/elements.js'
import { CHARACTERS } from '../data/characters.js'
import { getEffectiveStats } from '../utils/combat.js'

function LevelNode({ level, chapterElement, completed, isNext, onPlay, isBoss, isFinalBoss }) {
  const el = ELEMENTS[chapterElement]
  return (
    <div onClick={isNext || completed ? onPlay : undefined} style={{
      background: completed ? el.color + '22' : isBoss ? '#1a0a0a' : '#111',
      border: `2px solid ${completed ? el.color : isNext ? el.color + '88' : '#1a1a1a'}`,
      borderRadius: 10,
      padding: '10px 14px',
      cursor: isNext || completed ? 'pointer' : 'default',
      display: 'flex', alignItems: 'center', gap: 10,
      opacity: !isNext && !completed ? 0.4 : 1,
      transition: 'transform 0.1s',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        background: completed ? el.color : isBoss ? '#E5393522' : '#1a1a1a',
        border: `2px solid ${completed ? el.color : isBoss ? '#E53935' : '#2a2a2a'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14,
      }}>
        {completed ? '✓' : isBoss ? '💀' : isFinalBoss ? '👑' : el.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: completed ? el.lightColor : isNext ? '#ddd' : '#555' }}>
          {level.name}
          {isBoss && <span style={{ marginLeft: 6, fontSize: 10, background: '#E5393522', border: '1px solid #E53935', color: '#E53935', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>BOSS</span>}
        </div>
        {isNext && <div style={{ fontSize: 11, color: '#555', marginTop: 1 }}>Tap to battle</div>}
      </div>
      {isNext && <div style={{ color: el.color, fontSize: 16 }}>▶</div>}
    </div>
  )
}

export default function WorldMapScreen() {
  const { state, dispatch } = useGame()

  function isCompleted(id) { return state.completedLevels.includes(id) }
  function isChapterUnlocked(chapter) {
    if (chapter.unlocked) return true
    if (!chapter.unlockAfterChapter) return false
    const prev = STORY.chapters.find(c => c.id === chapter.unlockAfterChapter)
    if (!prev) return false
    return prev.levels.every(l => isCompleted(l.id))
  }
  function isQuestUnlocked(quest) {
    if (quest.unlocked) return true
    if (!quest.unlockAfterChapter) return false
    const prev = STORY.chapters.find(c => c.id === quest.unlockAfterChapter)
    if (!prev) return false
    return isCompleted(prev.levels[0].id)
  }

  function getNextLevelInSection(levels) {
    for (const lv of levels) {
      if (!isCompleted(lv.id)) return lv.id
    }
    return null
  }

  function startBattle(levelId, sectionElement) {
    if (!state.activeHeroId) {
      dispatch({ type: 'SET_SCREEN', screen: 'roster' })
      return
    }
    dispatch({ type: 'SET_SCREEN', screen: 'battle', battleContext: { levelId, sectionElement } })
  }

  const activeHero = state.activeHeroId ? CHARACTERS[state.activeHeroId] : null
  const activeEl = activeHero ? ELEMENTS[activeHero.element] : null

  return (
    <div style={{ minHeight: '100vh', background: '#050508', fontFamily: "'Barlow Condensed', sans-serif", color: '#fff' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'home' })} style={{ background: 'none', border: '1px solid #2a2a2a', color: '#888', borderRadius: 8, padding: '6px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>
          ← Home
        </button>
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: 2 }}>WORLD MAP</div>
          <div style={{ fontSize: 12, color: '#444', letterSpacing: 1 }}>{state.crystals.length}/8 Crystals · {state.gold} Gold</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {/* Active hero */}
          {activeHero ? (
            <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'roster' })} style={{
              background: activeEl.bgColor, border: `1px solid ${activeEl.color}55`,
              color: activeEl.lightColor, borderRadius: 10, padding: '6px 14px',
              fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {activeHero.emoji} {activeHero.name} <span style={{ opacity: 0.6, fontWeight: 400 }}>Lv{state.heroes[state.activeHeroId].level}</span>
            </button>
          ) : (
            <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'roster' })} style={{
              background: '#1a1a1a', border: '1px solid #E53935', color: '#E53935',
              borderRadius: 10, padding: '6px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
            }}>
              ⚠ No Hero Selected
            </button>
          )}
          <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'roster' })} style={{
            background: '#111', border: '1px solid #2a2a2a', color: '#888',
            borderRadius: 10, padding: '6px 14px', fontSize: 13, cursor: 'pointer',
          }}>
            Roster
          </button>
        </div>
      </div>

      <div style={{ padding: '20px', maxWidth: 700, margin: '0 auto' }}>
        {/* Crystals row */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {Object.entries(ELEMENTS).map(([key, el]) => (
            <div key={key} title={`${el.name} Crystal`} style={{
              width: 34, height: 34, borderRadius: '50%',
              background: state.crystals.includes(key) ? el.color + '44' : '#111',
              border: `2px solid ${state.crystals.includes(key) ? el.color : '#222'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, opacity: state.crystals.includes(key) ? 1 : 0.25,
            }}>
              {el.icon}
            </div>
          ))}
        </div>

        {/* Story chapters */}
        <div style={{ fontWeight: 700, fontSize: 13, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>Story Chapters</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {STORY.chapters.map(chapter => {
            const unlocked = isChapterUnlocked(chapter)
            const el = ELEMENTS[chapter.element]
            const nextId = unlocked ? getNextLevelInSection(chapter.levels) : null
            const allDone = chapter.levels.every(l => isCompleted(l.id))
            return (
              <div key={chapter.id} style={{
                background: '#0d0d12',
                border: `2px solid ${allDone ? el.color + '66' : unlocked ? '#1e1e2a' : '#111'}`,
                borderRadius: 14,
                overflow: 'hidden',
                opacity: !unlocked ? 0.5 : 1,
              }}>
                <div style={{ padding: '12px 16px', background: el.bgColor, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 22 }}>{el.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: allDone ? el.lightColor : '#ddd' }}>
                      Ch. {chapter.id}: {chapter.name}
                      {allDone && <span style={{ marginLeft: 8, fontSize: 11, color: el.color }}>✓ COMPLETE</span>}
                    </div>
                    <div style={{ fontSize: 12, color: '#555', marginTop: 2 }}>{chapter.description}</div>
                  </div>
                  {!unlocked && <div style={{ marginLeft: 'auto', color: '#333', fontSize: 18 }}>🔒</div>}
                </div>
                {unlocked && (
                  <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {chapter.levels.map(lv => (
                      <LevelNode
                        key={lv.id}
                        level={lv}
                        chapterElement={chapter.element}
                        completed={isCompleted(lv.id)}
                        isNext={lv.id === nextId}
                        isBoss={!!lv.isBoss}
                        isFinalBoss={!!lv.isFinalBoss}
                        onPlay={() => startBattle(lv.id, chapter.element)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Side quests */}
        <div style={{ fontWeight: 700, fontSize: 13, color: '#555', letterSpacing: 2, textTransform: 'uppercase', margin: '28px 0 14px' }}>Side Quests</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {STORY.sideQuests.map(quest => {
            const unlocked = isQuestUnlocked(quest)
            const el = ELEMENTS[quest.element]
            const nextId = unlocked ? getNextLevelInSection(quest.levels) : null
            const allDone = quest.levels.every(l => isCompleted(l.id))
            return (
              <div key={quest.id} style={{
                background: '#0d0d12',
                border: `2px solid ${allDone ? el.color + '66' : unlocked ? '#1e1e2a' : '#111'}`,
                borderRadius: 14,
                overflow: 'hidden',
                opacity: !unlocked ? 0.5 : 1,
              }}>
                <div style={{ padding: '12px 16px', background: el.bgColor, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 22 }}>⚔️</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: allDone ? el.lightColor : '#ddd' }}>
                      {quest.name}
                      {allDone && <span style={{ marginLeft: 8, fontSize: 11, color: el.color }}>✓ COMPLETE</span>}
                    </div>
                    <div style={{ fontSize: 12, color: '#555', marginTop: 2 }}>{quest.description}</div>
                  </div>
                  {!unlocked && <div style={{ marginLeft: 'auto', color: '#333', fontSize: 18 }}>🔒</div>}
                </div>
                {unlocked && (
                  <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {quest.levels.map(lv => (
                      <LevelNode
                        key={lv.id}
                        level={lv}
                        chapterElement={quest.element}
                        completed={isCompleted(lv.id)}
                        isNext={lv.id === nextId}
                        isBoss={!!lv.isBoss}
                        onPlay={() => startBattle(lv.id, quest.element)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
