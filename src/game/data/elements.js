export const ELEMENTS = {
  fire: {
    name: 'Fire', icon: '🔥', color: '#FF4500', lightColor: '#FFD700', bgColor: '#1a0500',
    description: 'Masters of flame and destruction',
    strongAgainst: 'nature', weakAgainst: 'water',
  },
  water: {
    name: 'Water', icon: '💧', color: '#0096C7', lightColor: '#90E0EF', bgColor: '#001830',
    description: 'Rulers of ocean and healing',
    strongAgainst: 'fire', weakAgainst: 'earth',
  },
  earth: {
    name: 'Earth', icon: '🪨', color: '#A0783C', lightColor: '#D4A574', bgColor: '#150F00',
    description: 'Guardians of stone and endurance',
    strongAgainst: 'water', weakAgainst: 'air',
  },
  air: {
    name: 'Air', icon: '⚡', color: '#48CAE4', lightColor: '#AEF0FF', bgColor: '#001040',
    description: 'Wielders of storm and speed',
    strongAgainst: 'earth', weakAgainst: 'nature',
  },
  nature: {
    name: 'Nature', icon: '🌿', color: '#3AB829', lightColor: '#95D86F', bgColor: '#031200',
    description: 'Champions of life and growth',
    strongAgainst: 'air', weakAgainst: 'fire',
  },
  tech: {
    name: 'Tech', icon: '⚙️', color: '#E0A800', lightColor: '#FFE066', bgColor: '#1A1000',
    description: 'Engineers of gadgets and precision',
    strongAgainst: 'magic', weakAgainst: 'shadow',
  },
  magic: {
    name: 'Magic', icon: '✨', color: '#9C27B0', lightColor: '#CE93D8', bgColor: '#0D0020',
    description: 'Wielders of arcane energy',
    strongAgainst: 'shadow', weakAgainst: 'tech',
  },
  shadow: {
    name: 'Shadow', icon: '🌑', color: '#7B5EA7', lightColor: '#C0A8FF', bgColor: '#07050F',
    description: 'Agents of darkness and stealth',
    strongAgainst: 'tech', weakAgainst: 'magic',
  },
}

export function getTypeMultiplier(attackerElement, defenderElement) {
  const el = ELEMENTS[attackerElement]
  if (!el) return 1
  if (el.strongAgainst === defenderElement) return 1.5
  if (el.weakAgainst === defenderElement) return 0.7
  return 1.0
}

export function getTypeLabel(multiplier) {
  if (multiplier >= 1.5) return 'SUPER EFFECTIVE!'
  if (multiplier <= 0.7) return "Not very effective..."
  return null
}
