import { getTypeMultiplier } from '../data/elements.js'
import { CHARACTERS } from '../data/characters.js'
import { UPGRADES } from '../data/upgrades.js'

export function getEffectiveStats(heroId, heroState) {
  const char = CHARACTERS[heroId]
  if (!char) return null
  const { level = 1, upgrades: unlockedIds = [] } = heroState
  const gains = char.levelGains

  const stats = {
    maxHp: char.baseStats.hp + gains.hp * (level - 1),
    attack: char.baseStats.attack + gains.attack * (level - 1),
    defense: char.baseStats.defense + gains.defense * (level - 1),
    speed: char.baseStats.speed + gains.speed * (level - 1),
  }

  for (const uid of unlockedIds) {
    const effect = findUpgradeEffect(heroId, uid)
    if (!effect) continue
    applyStatEffects(effect, stats)
  }
  return stats
}

function applyStatEffects(effect, stats) {
  if (Array.isArray(effect)) {
    effect.forEach(e => applyStatEffects(e, stats))
    return
  }
  if (effect.type === 'stat') {
    stats[effect.stat] = (stats[effect.stat] || 0) + effect.value
  }
}

export function getPassives(heroId, heroState) {
  const { upgrades: unlockedIds = [] } = heroState
  const passives = { dodge: 0, regen: 0, lifeSteal: 0, counter: 0, phoenixRevive: 0, postBattleHeal: 0 }

  for (const uid of unlockedIds) {
    const effect = findUpgradeEffect(heroId, uid)
    collectPassives(effect, passives)
  }
  return passives
}

function collectPassives(effect, passives) {
  if (Array.isArray(effect)) { effect.forEach(e => collectPassives(e, passives)); return }
  if (!effect) return
  if (effect.type === 'passive') {
    passives[effect.id] = Math.max(passives[effect.id] || 0, effect.value)
  }
}

export function getEffectiveMoves(heroId, heroState) {
  const char = CHARACTERS[heroId]
  if (!char) return []
  const { upgrades: unlockedIds = [] } = heroState

  const moves = char.moves.map(m => ({ ...m }))
  const moveMap = Object.fromEntries(moves.map(m => [m.id, m]))

  for (const uid of unlockedIds) {
    const effect = findUpgradeEffect(heroId, uid)
    applyMoveEffects(effect, moveMap, moves)
  }
  return moves
}

function applyMoveEffects(effect, moveMap, moves) {
  if (Array.isArray(effect)) { effect.forEach(e => applyMoveEffects(e, moveMap, moves)); return }
  if (!effect) return
  if (effect.type === 'moveStat') {
    const mv = moveMap[effect.moveId]
    if (!mv) return
    if (effect.prop === 'damage')         mv.damage = (mv.damage || 0) + effect.value
    if (effect.prop === 'heal')           mv.heal = (mv.heal || 0) + effect.value
    if (effect.prop === 'multi')          mv.multi = effect.value
    if (effect.prop === 'cooldown')       mv.cooldown = Math.max(0, (mv.cooldown || 0) + effect.value)
    if (effect.prop === 'ignoreDef')      mv.ignoreDef = effect.value
    if (effect.prop === 'lifeSteal')      mv.lifeSteal = effect.value
    if (effect.prop === 'effectValue')    mv.effect = mv.effect ? { ...mv.effect, value: effect.value } : mv.effect
    if (effect.prop === 'effectDuration') mv.effect = mv.effect ? { ...mv.effect, duration: (mv.effect.duration || 0) + effect.value } : mv.effect
    if (effect.prop === 'addBurn') {
      mv.burnAdded = { type: 'burn', target: 'enemy', value: effect.value, duration: 2 }
    }
    if (effect.prop === 'addPoison') {
      mv.poisonAdded = { type: 'poison', target: 'enemy', value: effect.value, duration: 2 }
    }
    if (effect.prop === 'addWeaken') {
      mv.weakenAdded = { type: 'weaken', target: 'enemy', value: effect.value, duration: 2 }
    }
  }
  if (effect.type === 'newMove') {
    moves.push({ ...effect.move })
    moveMap[effect.move.id] = moves[moves.length - 1]
  }
}

function findUpgradeEffect(heroId, upgradeId) {
  const tree = UPGRADES[heroId]
  if (!tree) return null
  for (const node of tree.shared) {
    if (node.id === upgradeId) return node.effect
  }
  for (const path of ['A', 'B']) {
    for (const node of tree[path].nodes) {
      if (node.id === upgradeId) return node.effect
    }
    if (tree[path].ultimate.id === upgradeId) return tree[path].ultimate.effect
  }
  return null
}

export function calculateDamage(attackStat, defenseStat, move, attackerElement, defenderElement, ignoreDef = false) {
  const hits = move.multi || 1
  let total = 0
  for (let i = 0; i < hits; i++) {
    let base = move.damage
    base = base * (attackStat / 100)
    const defMult = ignoreDef || move.ignoreDef
      ? 1
      : move.halfDef
        ? (100 / (100 + defenseStat * 0.25))
        : (100 / (100 + defenseStat * 0.5))
    const typeMult = getTypeMultiplier(attackerElement, defenderElement)
    const variance = 0.9 + Math.random() * 0.2
    total += Math.max(1, Math.round(base * defMult * typeMult * variance))
  }
  return { damage: total, typeMult: getTypeMultiplier(attackerElement, defenderElement) }
}

export function getXpThreshold(level) {
  return level * 100 + (level - 1) * 50
}

export function getXpForLevel(level) {
  let total = 0
  for (let i = 1; i < level; i++) total += getXpThreshold(i)
  return total
}
