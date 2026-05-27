import { useState, useCallback, useEffect, useRef } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { CHARACTERS } from '../data/characters.js'
import { ENEMIES } from '../data/enemies.js'
import { ELEMENTS, getTypeLabel } from '../data/elements.js'
import { getLevelById } from '../data/story.js'
import { getEffectiveStats, getEffectiveMoves, getPassives, calculateDamage } from '../utils/combat.js'
import HealthBar from '../components/HealthBar.jsx'
import ElementBadge from '../components/ElementBadge.jsx'

const LOG_MAX = 6

function randChoice(arr) { return arr[Math.floor(Math.random() * arr.length)] }

export default function BattleScreen() {
  const { state, dispatch } = useGame()
  const { battleContext, activeHeroId } = state
  if (!battleContext || !activeHeroId) {
    dispatch({ type: 'SET_SCREEN', screen: 'worldmap' })
    return null
  }

  const { levelId, sectionElement } = battleContext
  const levelData = getLevelById(levelId)
  if (!levelData) { dispatch({ type: 'SET_SCREEN', screen: 'worldmap' }); return null }

  const { level } = levelData
  const enemyId = level.enemies[0]
  const enemyTemplate = ENEMIES[enemyId]
  const heroState = state.heroes[activeHeroId]
  const char = CHARACTERS[activeHeroId]
  const el = ELEMENTS[char.element]
  const enemyEl = ELEMENTS[enemyTemplate.element]

  const heroStats = getEffectiveStats(activeHeroId, heroState)
  const heroMoves = getEffectiveMoves(activeHeroId, heroState)
  const passives = getPassives(activeHeroId, heroState)

  const [heroHp, setHeroHp] = useState(heroState.currentHp)
  const [enemyHp, setEnemyHp] = useState(enemyTemplate.maxHp)
  const [phase, setPhase] = useState('player') // 'player' | 'enemy' | 'result'
  const [result, setResult] = useState(null) // 'win' | 'lose'
  const [log, setLog] = useState([`A wild ${enemyTemplate.name} appears!`])
  const [cooldowns, setCooldowns] = useState({})
  const [heroStatus, setHeroStatus] = useState([]) // [{type, value, duration}]
  const [enemyStatus, setEnemyStatus] = useState([])
  const [turret, setTurret] = useState(0)
  const [phoenixUsed, setPhoenixUsed] = useState(false)
  const [lastTypeMult, setLastTypeMult] = useState(null)
  const [animHero, setAnimHero] = useState(false)
  const [animEnemy, setAnimEnemy] = useState(false)

  const logRef = useRef(null)
  const addLog = useCallback((msg) => setLog(prev => [...prev.slice(-(LOG_MAX - 1)), msg]), [])

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [log])

  function getHeroStatusVal(type) {
    return heroStatus.find(s => s.type === type)
  }
  function getEnemyStatusVal(type) {
    return enemyStatus.find(s => s.type === type)
  }

  function applyStatusTick(statuses, name, isHero) {
    let hpDelta = 0
    const next = statuses.map(s => ({ ...s, duration: s.duration - 1 })).filter(s => s.duration > 0 || s.type === 'turret')
    statuses.forEach(s => {
      if (s.type === 'burn' || s.type === 'poison') {
        hpDelta -= s.value
        addLog(`${name} takes ${s.value} ${s.type} damage!`)
      }
      if (s.type === 'turret') {
        hpDelta -= s.value
        addLog(`Turret fires for ${s.value} damage!`)
      }
    })
    // Remove expired
    const cleaned = statuses
      .map(s => ({ ...s, duration: s.duration - 1 }))
      .filter(s => s.duration > 0)
    return { hpDelta, statuses: cleaned }
  }

  function applyPassiveDodge() {
    if (passives.dodge > 0 && Math.random() < passives.dodge) {
      addLog(`${char.name} dodged the attack!`)
      return true
    }
    return false
  }

  function applyPassiveCounter(attackerDmg) {
    if (passives.counter > 0) {
      addLog(`${char.name} counter-attacks for ${passives.counter}!`)
      return passives.counter
    }
    return 0
  }

  function handlePlayerMove(move) {
    if (phase !== 'player') return
    const cd = cooldowns[move.id] || 0
    if (cd > 0) return

    setAnimHero(true)
    setTimeout(() => setAnimHero(false), 400)

    let newEnemyHp = enemyHp
    let newHeroHp = heroHp
    let newEnemyStatus = [...enemyStatus]
    let newHeroStatus = [...heroStatus]
    let newCooldowns = { ...cooldowns }
    let newTurret = turret

    // Tick status effects before hero acts
    const heroTick = applyStatusTick(heroStatus, char.name, true)
    newHeroHp += heroTick.hpDelta
    newHeroStatus = heroTick.statuses

    const enemyTick = applyStatusTick(enemyStatus, enemyTemplate.name, false)
    newEnemyHp += enemyTick.hpDelta
    newEnemyStatus = enemyTick.statuses

    // Tick turret
    if (turret > 0) {
      addLog(`Turret fires for 20 damage at ${enemyTemplate.name}!`)
      newEnemyHp -= 20
      setTurret(t => Math.max(0, t - 1))
    }

    // Apply cooldown
    if (move.cooldown > 0) newCooldowns[move.id] = move.cooldown

    // Reduce all cooldowns by 1
    Object.keys(newCooldowns).forEach(k => {
      if (k !== move.id) newCooldowns[k] = Math.max(0, newCooldowns[k] - 1)
    })

    if (move.damage > 0) {
      const defendMod = getEnemyStatusVal('defend') ? 0.6 : 1
      const weakenMod = getHeroStatusVal('weaken') ? (1 - (getHeroStatusVal('weaken').value / 100)) : 1
      const { damage, typeMult } = calculateDamage(
        Math.round(heroStats.attack * weakenMod),
        Math.round(enemyTemplate.defense * defendMod),
        move,
        char.element,
        enemyTemplate.element,
      )
      const typeLabel = getTypeLabel(typeMult)
      if (typeLabel) { addLog(typeLabel); setLastTypeMult(typeMult) }
      addLog(`${char.name} uses ${move.name} for ${damage} damage!`)
      newEnemyHp -= damage
      setAnimEnemy(true)
      setTimeout(() => setAnimEnemy(false), 400)

      // Life steal
      const ls = (move.lifeSteal || 0) + passives.lifeSteal
      if (ls > 0) {
        const steal = Math.round(damage * ls)
        newHeroHp = Math.min(newHeroHp + steal, heroStats.maxHp)
        addLog(`${char.name} steals ${steal} HP!`)
      }
    }

    if (move.heal > 0) {
      const healed = Math.min(move.heal, heroStats.maxHp - newHeroHp)
      newHeroHp += healed
      addLog(`${char.name} heals for ${healed} HP!`)
    }

    // Apply regen passive
    if (passives.regen > 0) {
      newHeroHp = Math.min(newHeroHp + passives.regen, heroStats.maxHp)
    }

    // Move effects
    const effect = move.effect
    if (effect && effect.target === 'enemy') {
      if (effect.type === 'stun') {
        newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'stun'), { ...effect }]
        addLog(`${enemyTemplate.name} is stunned!`)
      } else if (effect.type === 'weaken') {
        newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'weaken'), { ...effect }]
        addLog(`${enemyTemplate.name}'s attack is weakened!`)
      } else if (effect.type === 'burn' || effect.type === 'poison') {
        newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== effect.type), { ...effect }]
        addLog(`${enemyTemplate.name} is ${effect.type}ed!`)
      } else if (effect.type === 'turret') {
        setTurret(effect.duration)
        addLog('Turret deployed!')
        newTurret = effect.duration
      }
    }
    if (effect && effect.target === 'self') {
      newHeroStatus = [...newHeroStatus.filter(s => s.type !== effect.type), { ...effect }]
      if (effect.type === 'defend') addLog(`${char.name} raises defenses!`)
    }

    // Extra effects from upgrades
    if (move.burnAdded) {
      newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'burn'), { ...move.burnAdded }]
    }
    if (move.poisonAdded) {
      newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'poison'), { ...move.poisonAdded }]
    }
    if (move.weakenAdded) {
      newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'weaken'), { ...move.weakenAdded }]
    }

    // effect2 for shadeWolf darkHowl
    const effect2 = move.effect2
    if (effect2 && effect2.target === 'enemy') {
      if (effect2.type === 'poison') {
        newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== 'poison'), { ...effect2 }]
        addLog(`${enemyTemplate.name} is poisoned!`)
      }
    }

    newHeroHp = Math.max(0, newHeroHp)
    newEnemyHp = Math.max(0, newEnemyHp)

    setHeroHp(newHeroHp)
    setEnemyHp(newEnemyHp)
    setHeroStatus(newHeroStatus)
    setEnemyStatus(newEnemyStatus)
    setCooldowns(newCooldowns)

    if (newEnemyHp <= 0) {
      handleVictory(newHeroHp)
      return
    }
    if (newHeroHp <= 0) {
      handleDefeat()
      return
    }

    // Check enemy stun
    const stunned = newEnemyStatus.find(s => s.type === 'stun')
    if (stunned) {
      addLog(`${enemyTemplate.name} is stunned and loses its turn!`)
      setEnemyStatus(prev => prev.map(s => s.type === 'stun' ? { ...s, duration: s.duration - 1 } : s).filter(s => s.duration > 0))
      setPhase('player')
      return
    }

    setPhase('enemy')
    setTimeout(() => doEnemyTurn(newHeroHp, newEnemyHp, newHeroStatus, newEnemyStatus, newCooldowns, newTurret), 900)
  }

  function doEnemyTurn(curHeroHp, curEnemyHp, curHeroStatus, curEnemyStatus, curCooldowns, curTurret) {
    const moves = enemyTemplate.moves
    const move = randChoice(moves)

    setAnimEnemy(true)
    setTimeout(() => setAnimEnemy(false), 400)

    let newHeroHp = curHeroHp
    let newEnemyHp = curEnemyHp
    let newHeroStatus = [...curHeroStatus]
    let newEnemyStatus = [...curEnemyStatus]

    // Enemy heal move
    if (move.heal) {
      const healed = Math.min(move.heal, enemyTemplate.maxHp - newEnemyHp)
      newEnemyHp += healed
      addLog(`${enemyTemplate.name} uses ${move.name} and heals ${healed} HP!`)
    } else if (move.damage > 0) {
      const defendMod = curHeroStatus.find(s => s.type === 'defend') ? 0.6 : 1
      const weakenMod = curEnemyStatus.find(s => s.type === 'weaken') ? (1 - (curEnemyStatus.find(s => s.type === 'weaken').value / 100)) : 1

      // Dodge check
      if (passives.dodge > 0 && Math.random() < passives.dodge) {
        addLog(`${char.name} dodged ${move.name}!`)
      } else {
        const { damage, typeMult } = calculateDamage(
          Math.round(enemyTemplate.attack * weakenMod),
          Math.round(heroStats.defense * defendMod),
          move,
          enemyTemplate.element,
          char.element,
        )
        const typeLabel = getTypeLabel(typeMult)
        if (typeLabel) addLog(typeLabel)

        addLog(`${enemyTemplate.name} uses ${move.name} for ${damage} damage!`)
        newHeroHp -= damage
        setAnimHero(true)
        setTimeout(() => setAnimHero(false), 400)

        // Counter passive
        if (passives.counter > 0) {
          addLog(`${char.name} counters for ${passives.counter}!`)
          newEnemyHp -= passives.counter
        }

        // Life steal from enemy move
        if (move.lifeSteal) {
          const steal = Math.round(damage * move.lifeSteal)
          newEnemyHp = Math.min(newEnemyHp + steal, enemyTemplate.maxHp)
        }
      }
    }

    // Enemy effects on hero
    if (move.effect && move.effect.target === 'enemy') {
      if (move.effect.type === 'weaken') {
        newHeroStatus = [...newHeroStatus.filter(s => s.type !== 'weaken'), { ...move.effect }]
        addLog(`${char.name}'s attack is weakened!`)
      } else if (move.effect.type === 'stun') {
        newHeroStatus = [...newHeroStatus.filter(s => s.type !== 'stun'), { ...move.effect }]
        addLog(`${char.name} is stunned!`)
      } else if (move.effect.type === 'burn' || move.effect.type === 'poison') {
        newHeroStatus = [...newHeroStatus.filter(s => s.type !== move.effect.type), { ...move.effect }]
        addLog(`${char.name} is ${move.effect.type}ed!`)
      }
    }
    if (move.effect && move.effect.target === 'self') {
      newEnemyStatus = [...newEnemyStatus.filter(s => s.type !== move.effect.type), { ...move.effect }]
      if (move.effect.type === 'defend') addLog(`${enemyTemplate.name} raises defenses!`)
    }

    newHeroHp = Math.max(0, newHeroHp)
    newEnemyHp = Math.max(0, newEnemyHp)

    // Phoenix revive
    if (newHeroHp === 0 && passives.phoenixRevive > 0 && !phoenixUsed) {
      newHeroHp = passives.phoenixRevive
      setPhoenixUsed(true)
      addLog(`Phoenix Flame activates! ${char.name} revives with ${passives.phoenixRevive} HP!`)
    }

    setHeroHp(newHeroHp)
    setEnemyHp(newEnemyHp)
    setHeroStatus(newHeroStatus)
    setEnemyStatus(newEnemyStatus)

    if (newHeroHp <= 0) {
      handleDefeat()
      return
    }
    if (newEnemyHp <= 0) {
      handleVictory(newHeroHp)
      return
    }

    // Check hero stun
    const stunned = newHeroStatus.find(s => s.type === 'stun')
    if (stunned) {
      addLog(`${char.name} is stunned and loses next turn!`)
      setHeroStatus(prev => prev.map(s => s.type === 'stun' ? { ...s, duration: s.duration - 1 } : s).filter(s => s.duration > 0))
    }
    setPhase('player')
  }

  function handleVictory(finalHeroHp) {
    const { reward } = enemyTemplate
    addLog(`Victory! +${reward.xp} XP, +${reward.gold} gold!`)
    if (level.crystalReward) addLog(`✨ ${ELEMENTS[level.crystalReward].name} Crystal recovered!`)
    setResult('win')
    setPhase('result')
    dispatch({ type: 'AWARD_BATTLE', heroId: activeHeroId, xpGained: reward.xp, goldGained: reward.gold, levelId, crystalReward: level.crystalReward || null })
    dispatch({ type: 'UPDATE_HERO_HP', heroId: activeHeroId, hp: Math.max(1, finalHeroHp) })
    if (passives.postBattleHeal > 0) {
      dispatch({ type: 'POST_BATTLE_HEAL', heroId: activeHeroId, fraction: passives.postBattleHeal })
    }
  }

  function handleDefeat() {
    addLog(`${char.name} was defeated...`)
    setResult('lose')
    setPhase('result')
    dispatch({ type: 'UPDATE_HERO_HP', heroId: activeHeroId, hp: Math.round(heroStats.maxHp * 0.25) })
  }

  const activeHeroStatusTypes = heroStatus.map(s => s.type)

  return (
    <div style={{ minHeight: '100vh', background: '#050508', fontFamily: "'Barlow Condensed', sans-serif", color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#555', letterSpacing: 2 }}>BATTLE</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#ddd' }}>{level.name}</div>
        </div>
        <ElementBadge element={enemyTemplate.element} size="sm" />
      </div>

      {/* Battle arena */}
      <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600, margin: '0 auto', width: '100%' }}>
        {/* Enemy */}
        <div style={{
          background: '#0d0d12', border: `2px solid ${enemyEl.color}33`, borderRadius: 14, padding: 16,
          transform: animEnemy ? 'translateX(-8px)' : 'translateX(0)',
          transition: 'transform 0.1s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 44, background: enemyEl.bgColor, borderRadius: 10, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {enemyTemplate.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{enemyTemplate.name}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                <ElementBadge element={enemyTemplate.element} size="sm" />
                {enemyTemplate.isBoss && <span style={{ background: '#E5393522', border: '1px solid #E53935', color: '#E53935', borderRadius: 4, fontSize: 10, fontWeight: 900, padding: '2px 6px', letterSpacing: 1 }}>BOSS</span>}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: enemyHp > enemyTemplate.maxHp * 0.5 ? '#4CAF50' : enemyHp > enemyTemplate.maxHp * 0.25 ? '#E0A800' : '#E53935', fontWeight: 700 }}>
                {enemyHp}/{enemyTemplate.maxHp}
              </div>
              <div style={{ fontSize: 11, color: '#555' }}>HP</div>
            </div>
          </div>
          <HealthBar current={enemyHp} max={enemyTemplate.maxHp} color={enemyEl.color} showNumbers={false} />
          <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            {enemyStatus.map(s => (
              <span key={s.type} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 4, fontSize: 10, padding: '1px 6px', color: s.type === 'burn' ? '#FF6B35' : s.type === 'poison' ? '#4CAF50' : s.type === 'stun' ? '#FFD700' : s.type === 'weaken' ? '#9C27B0' : '#888' }}>
                {s.type} ({s.duration}t)
              </span>
            ))}
          </div>
        </div>

        {/* VS */}
        <div style={{ textAlign: 'center', fontSize: 12, color: '#2a2a2a', fontWeight: 700, letterSpacing: 4 }}>— VS —</div>

        {/* Hero */}
        <div style={{
          background: el.bgColor + 'cc', border: `2px solid ${el.color}44`, borderRadius: 14, padding: 16,
          transform: animHero ? 'translateX(8px)' : 'translateX(0)',
          transition: 'transform 0.1s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 44, background: el.bgColor, borderRadius: 10, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {char.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{char.name}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                <ElementBadge element={char.element} size="sm" />
                <span style={{ fontSize: 11, color: '#666' }}>Lv {heroState.level}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: heroHp > heroStats.maxHp * 0.5 ? '#4CAF50' : heroHp > heroStats.maxHp * 0.25 ? '#E0A800' : '#E53935', fontWeight: 700 }}>
                {heroHp}/{heroStats.maxHp}
              </div>
              <div style={{ fontSize: 11, color: '#555' }}>HP</div>
            </div>
          </div>
          <HealthBar current={heroHp} max={heroStats.maxHp} color={el.color} showNumbers={false} />
          <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            {heroStatus.map(s => (
              <span key={s.type} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 4, fontSize: 10, padding: '1px 6px', color: s.type === 'burn' ? '#FF6B35' : s.type === 'poison' ? '#4CAF50' : s.type === 'stun' ? '#FFD700' : s.type === 'weaken' ? '#9C27B0' : s.type === 'defend' ? '#4FC3F7' : '#888' }}>
                {s.type} ({s.duration}t)
              </span>
            ))}
            {turret > 0 && <span style={{ background: '#1a1a1a', border: '1px solid #E0A800', borderRadius: 4, fontSize: 10, padding: '1px 6px', color: '#E0A800' }}>turret ({turret}t)</span>}
          </div>
        </div>

        {/* Battle log */}
        <div ref={logRef} style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 10, padding: '10px 14px', height: 90, overflowY: 'auto', fontSize: 13 }}>
          {log.map((msg, i) => (
            <div key={i} style={{ color: i === log.length - 1 ? '#ddd' : '#555', marginBottom: 2 }}>
              {msg}
            </div>
          ))}
        </div>

        {/* Story dialog */}
        {log.length <= 1 && level.dialog && (
          <div style={{ background: '#0f0f18', border: '1px solid #1e1e2e', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#666', fontStyle: 'italic' }}>
            "{level.dialog}"
          </div>
        )}

        {/* Move buttons */}
        {phase === 'player' && (
          <div>
            <div style={{ fontSize: 11, color: '#333', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>Choose your move</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
              {heroMoves.map(move => {
                const cd = cooldowns[move.id] || 0
                const disabled = cd > 0 || phase !== 'player'
                return (
                  <button key={move.id} onClick={() => !disabled && handlePlayerMove(move)} disabled={disabled} style={{
                    background: disabled ? '#0d0d0d' : el.bgColor,
                    border: `2px solid ${disabled ? '#1a1a1a' : el.color + '55'}`,
                    borderRadius: 10, padding: '10px 12px', textAlign: 'left',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    opacity: disabled ? 0.4 : 1,
                    transition: 'background 0.15s, border-color 0.15s',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: disabled ? '#444' : '#fff', marginBottom: 2 }}>
                      {move.name}
                      {move.cooldown > 0 && <span style={{ marginLeft: 6, fontSize: 10, color: '#555' }}>({cd > 0 ? `${cd}t` : `cd:${move.cooldown}`})</span>}
                    </div>
                    <div style={{ fontSize: 11, color: '#666' }}>{move.desc}</div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                      {move.damage > 0 && <span style={{ fontSize: 10, color: el.color, fontWeight: 700 }}>⚔ {move.damage * (move.multi || 1)}{move.multi > 1 ? `(${move.multi}×)` : ''}</span>}
                      {move.heal > 0 && <span style={{ fontSize: 10, color: '#4CAF50', fontWeight: 700 }}>♥ {move.heal}</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {phase === 'enemy' && (
          <div style={{ textAlign: 'center', padding: 20, color: '#555', fontSize: 14 }}>
            {enemyTemplate.name} is thinking...
          </div>
        )}

        {/* Result */}
        {phase === 'result' && (
          <div style={{ background: result === 'win' ? '#0a1a0a' : '#1a0a0a', border: `2px solid ${result === 'win' ? '#4CAF50' : '#E53935'}`, borderRadius: 14, padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: result === 'win' ? '#4CAF50' : '#E53935', marginBottom: 8 }}>
              {result === 'win' ? '⭐ VICTORY!' : '💀 DEFEATED'}
            </div>
            {result === 'win' && (
              <div style={{ fontSize: 14, color: '#888', marginBottom: 16 }}>
                +{enemyTemplate.reward.xp} XP · +{enemyTemplate.reward.gold} Gold
                {level.crystalReward && <span style={{ color: ELEMENTS[level.crystalReward].color }}> · ✨ {ELEMENTS[level.crystalReward].name} Crystal!</span>}
              </div>
            )}
            {result === 'lose' && (
              <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>Your hero has been returned to safety. Try again!</div>
            )}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'worldmap' })} style={{
                background: result === 'win' ? '#4CAF50' : '#333',
                border: 'none', color: '#fff', borderRadius: 10,
                padding: '12px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                {result === 'win' ? 'Continue →' : '← World Map'}
              </button>
              {result === 'win' && (
                <button onClick={() => dispatch({ type: 'SET_SCREEN', screen: 'upgrade' })} style={{
                  background: el.color, border: 'none', color: '#000',
                  borderRadius: 10, padding: '12px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
                }}>
                  ↑ Upgrade Hero
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
