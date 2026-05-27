import { createContext, useContext, useReducer, useEffect } from 'react'
import { CHARACTERS } from '../data/characters.js'
import { getEffectiveStats, getXpThreshold } from '../utils/combat.js'

const SAVE_KEY = 'skyheroes_save'

function buildInitialHeroes() {
  return Object.fromEntries(
    Object.keys(CHARACTERS).map(id => [
      id,
      { level: 1, xp: 0, upgrades: [], chosenPath: null, currentHp: CHARACTERS[id].baseStats.hp },
    ])
  )
}

function getInitialState() {
  try {
    const saved = localStorage.getItem(SAVE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return {
    screen: 'home',
    heroes: buildInitialHeroes(),
    activeHeroId: null,
    gold: 200,
    crystals: [],
    completedLevels: [],
    battleContext: null,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.screen, battleContext: action.screen === 'battle' ? action.battleContext : state.battleContext }

    case 'SELECT_HERO':
      return { ...state, activeHeroId: action.heroId }

    case 'AWARD_BATTLE': {
      const { heroId, xpGained, goldGained, levelId, crystalReward } = action
      const hero = state.heroes[heroId]
      let { level, xp, upgrades, chosenPath } = hero
      let newXp = xp + xpGained
      while (level < 10 && newXp >= getXpThreshold(level)) {
        newXp -= getXpThreshold(level)
        level++
      }
      const stats = getEffectiveStats(heroId, { ...hero, level, upgrades, chosenPath })
      const newHp = Math.min(hero.currentHp + Math.round(stats.maxHp * 0.3), stats.maxHp)
      const newCrystals = crystalReward && !state.crystals.includes(crystalReward)
        ? [...state.crystals, crystalReward]
        : state.crystals
      return {
        ...state,
        gold: state.gold + goldGained,
        crystals: newCrystals,
        completedLevels: state.completedLevels.includes(levelId)
          ? state.completedLevels
          : [...state.completedLevels, levelId],
        heroes: {
          ...state.heroes,
          [heroId]: { ...hero, level, xp: newXp, currentHp: newHp },
        },
      }
    }

    case 'UPDATE_HERO_HP':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          [action.heroId]: { ...state.heroes[action.heroId], currentHp: action.hp },
        },
      }

    case 'POST_BATTLE_HEAL': {
      const hero = state.heroes[action.heroId]
      const stats = getEffectiveStats(action.heroId, hero)
      const healed = Math.round(stats.maxHp * action.fraction)
      return {
        ...state,
        heroes: {
          ...state.heroes,
          [action.heroId]: { ...hero, currentHp: Math.min(hero.currentHp + healed, stats.maxHp) },
        },
      }
    }

    case 'UNLOCK_UPGRADE': {
      const { heroId, upgradeId, pathChosen } = action
      const hero = state.heroes[heroId]
      const updates = { upgrades: [...hero.upgrades, upgradeId] }
      if (pathChosen) updates.chosenPath = pathChosen
      return {
        ...state,
        gold: state.gold - action.cost,
        heroes: { ...state.heroes, [heroId]: { ...hero, ...updates } },
      }
    }

    case 'RESET_GAME':
      return { screen: 'home', heroes: buildInitialHeroes(), activeHeroId: null, gold: 200, crystals: [], completedLevels: [], battleContext: null }

    default:
      return state
  }
}

const GameContext = createContext(null)

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, getInitialState)

  useEffect(() => {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)) } catch {}
  }, [state])

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
}

export function useGame() {
  return useContext(GameContext)
}
