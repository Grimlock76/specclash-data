// move: { id, name, desc, damage, heal, effect, cooldown, ignoreDef, multi }
// effect: { type: 'burn'|'poison'|'stun'|'defend'|'weaken'|'turret', target: 'self'|'enemy', value, duration }

export const CHARACTERS = {
  emberFox: {
    id: 'emberFox',
    name: 'Ember Fox',
    element: 'fire',
    emoji: '🦊',
    description: 'A cunning fox wreathed in living flames. Swift and relentless, she strikes before her enemies can react.',
    flavorText: '"Play with fire — and win."',
    baseStats: { hp: 80, attack: 75, defense: 50, speed: 85 },
    levelGains: { hp: 6, attack: 3, defense: 2, speed: 1 },
    moves: [
      {
        id: 'fireBite', name: 'Fire Bite', desc: 'A scorching bite that leaves a burn.',
        damage: 30, heal: 0, cooldown: 0, ignoreDef: false, multi: 1,
        effect: { type: 'burn', target: 'enemy', value: 6, duration: 2 },
      },
      {
        id: 'flameDash', name: 'Flame Dash', desc: 'A lightning-fast strike that pierces armor.',
        damage: 25, heal: 0, cooldown: 0, ignoreDef: true, multi: 1, effect: null,
      },
      {
        id: 'infernoB', name: 'Inferno Burst', desc: 'Unleashes a massive explosion of fire.',
        damage: 60, heal: 0, cooldown: 2, ignoreDef: false, multi: 1, effect: null,
      },
    ],
  },

  galeEagle: {
    id: 'galeEagle',
    name: 'Gale Eagle',
    element: 'air',
    emoji: '🦅',
    description: 'A majestic storm eagle who commands thunder and wind. The fastest hero in Skylands.',
    flavorText: '"Strike from above. Leave nothing standing."',
    baseStats: { hp: 75, attack: 70, defense: 45, speed: 95 },
    levelGains: { hp: 5, attack: 3, defense: 2, speed: 2 },
    moves: [
      {
        id: 'windSlash', name: 'Wind Slash', desc: 'A razor-edged wind strike that weakens foes.',
        damage: 28, heal: 0, cooldown: 0, ignoreDef: false, multi: 1,
        effect: { type: 'weaken', target: 'enemy', value: 15, duration: 2 },
      },
      {
        id: 'thunderDive', name: 'Thunder Dive', desc: 'A electrifying dive that stuns the enemy.',
        damage: 40, heal: 0, cooldown: 2, ignoreDef: false, multi: 1,
        effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 },
      },
      {
        id: 'tailwind', name: 'Tailwind', desc: 'Generates a protective gale to deflect attacks.',
        damage: 0, heal: 0, cooldown: 1, ignoreDef: false, multi: 1,
        effect: { type: 'defend', target: 'self', value: 30, duration: 2 },
      },
    ],
  },

  boulderBear: {
    id: 'boulderBear',
    name: 'Boulder Bear',
    element: 'earth',
    emoji: '🐻',
    description: 'An ancient bear with skin like granite and the strength of a mountain. Slow but immovable.',
    flavorText: '"I am the mountain. The mountain does not move."',
    baseStats: { hp: 125, attack: 65, defense: 90, speed: 38 },
    levelGains: { hp: 10, attack: 3, defense: 4, speed: 0 },
    moves: [
      {
        id: 'rockSlam', name: 'Rock Slam', desc: 'A crushing blow with stone-hard fists.',
        damage: 40, heal: 0, cooldown: 0, ignoreDef: false, multi: 1, effect: null,
      },
      {
        id: 'stoneArmor', name: 'Stone Armor', desc: 'Hardens skin to drastically reduce damage.',
        damage: 0, heal: 0, cooldown: 1, ignoreDef: false, multi: 1,
        effect: { type: 'defend', target: 'self', value: 45, duration: 3 },
      },
      {
        id: 'earthquake', name: 'Earthquake', desc: 'Shakes the ground with devastating force.',
        damage: 58, heal: 0, cooldown: 2, ignoreDef: false, multi: 1, effect: null,
      },
    ],
  },

  tideSerpent: {
    id: 'tideSerpent',
    name: 'Tide Serpent',
    element: 'water',
    emoji: '🐍',
    description: 'A sea serpent who glides through battle with fluid grace, striking hard and healing from the deep.',
    flavorText: '"The tide always returns — stronger."',
    baseStats: { hp: 90, attack: 65, defense: 70, speed: 68 },
    levelGains: { hp: 7, attack: 3, defense: 3, speed: 1 },
    moves: [
      {
        id: 'waterWhip', name: 'Water Whip', desc: 'A cracking strike of concentrated water.',
        damage: 30, heal: 0, cooldown: 0, ignoreDef: false, multi: 1, effect: null,
      },
      {
        id: 'healingTide', name: 'Healing Tide', desc: 'Draws on ocean energy to restore health.',
        damage: 0, heal: 40, cooldown: 1, ignoreDef: false, multi: 1, effect: null,
      },
      {
        id: 'tidalSurge', name: 'Tidal Surge', desc: 'A massive wave that weakens the enemy.',
        damage: 50, heal: 0, cooldown: 2, ignoreDef: false, multi: 1,
        effect: { type: 'weaken', target: 'enemy', value: 20, duration: 2 },
      },
    ],
  },

  thornDragon: {
    id: 'thornDragon',
    name: 'Thorn Dragon',
    element: 'nature',
    emoji: '🐉',
    description: 'A forest dragon whose scales sprout thorns and vines. Poisons foes and traps them in roots.',
    flavorText: '"Nature always reclaims what was taken."',
    baseStats: { hp: 88, attack: 70, defense: 65, speed: 62 },
    levelGains: { hp: 7, attack: 3, defense: 3, speed: 1 },
    moves: [
      {
        id: 'vineLash', name: 'Vine Lash', desc: 'Whips the enemy with venomous vines.',
        damage: 28, heal: 0, cooldown: 0, ignoreDef: false, multi: 1,
        effect: { type: 'poison', target: 'enemy', value: 7, duration: 3 },
      },
      {
        id: 'rootTrap', name: 'Root Trap', desc: 'Bursts roots from the ground to stun.',
        damage: 12, heal: 0, cooldown: 2, ignoreDef: false, multi: 1,
        effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 },
      },
      {
        id: 'sporeBurst', name: 'Spore Burst', desc: 'Releases a toxic spore cloud dealing heavy damage.',
        damage: 45, heal: 0, cooldown: 1, ignoreDef: false, multi: 1,
        effect: { type: 'poison', target: 'enemy', value: 5, duration: 2 },
      },
    ],
  },

  cogOwl: {
    id: 'cogOwl',
    name: 'Cog Owl',
    element: 'tech',
    emoji: '🦉',
    description: 'A mechanical owl built in an ancient workshop, armed with precision gadgets and infinite ingenuity.',
    flavorText: '"Calculated. Precise. Relentless."',
    baseStats: { hp: 80, attack: 72, defense: 60, speed: 75 },
    levelGains: { hp: 6, attack: 4, defense: 2, speed: 1 },
    moves: [
      {
        id: 'gearShot', name: 'Gear Shot', desc: 'Fires two spinning razor gears.',
        damage: 18, heal: 0, cooldown: 0, ignoreDef: false, multi: 2, effect: null,
      },
      {
        id: 'deployTurret', name: 'Deploy Turret', desc: 'Deploys an auto-turret to fire each turn.',
        damage: 0, heal: 0, cooldown: 2, ignoreDef: false, multi: 1,
        effect: { type: 'turret', target: 'enemy', value: 20, duration: 2 },
      },
      {
        id: 'overcharge', name: 'Overcharge', desc: 'Fires all systems at once for massive damage.',
        damage: 65, heal: 0, cooldown: 2, ignoreDef: false, multi: 1, effect: null,
      },
    ],
  },

  starCat: {
    id: 'starCat',
    name: 'Star Cat',
    element: 'magic',
    emoji: '🐱',
    description: 'A mystical cat from a forgotten star, weaving spells that bend reality itself.',
    flavorText: '"The stars chose me. The stars never lie."',
    baseStats: { hp: 78, attack: 82, defense: 52, speed: 76 },
    levelGains: { hp: 6, attack: 4, defense: 2, speed: 1 },
    moves: [
      {
        id: 'magicBolt', name: 'Magic Bolt', desc: 'An arcane bolt that partially ignores defense.',
        damage: 35, heal: 0, cooldown: 0, ignoreDef: false, multi: 1,
        effect: null, halfDef: true,
      },
      {
        id: 'arcaneShield', name: 'Arcane Shield', desc: 'A magical barrier that blocks and reflects damage.',
        damage: 0, heal: 0, cooldown: 1, ignoreDef: false, multi: 1,
        effect: { type: 'defend', target: 'self', value: 35, duration: 2 },
      },
      {
        id: 'starfall', name: 'Starfall', desc: 'Calls a shower of stars from above.',
        damage: 55, heal: 0, cooldown: 2, ignoreDef: false, multi: 1, effect: null,
      },
    ],
  },

  shadeWolf: {
    id: 'shadeWolf',
    name: 'Shade Wolf',
    element: 'shadow',
    emoji: '🐺',
    description: 'A wolf born from shadow who drains life from foes and disappears into darkness.',
    flavorText: '"I hunt. I drain. I vanish."',
    baseStats: { hp: 82, attack: 76, defense: 55, speed: 83 },
    levelGains: { hp: 6, attack: 3, defense: 2, speed: 1 },
    moves: [
      {
        id: 'shadowStrike', name: 'Shadow Strike', desc: 'A life-draining strike. Heals the user.',
        damage: 32, heal: 0, cooldown: 0, ignoreDef: false, multi: 1,
        lifeSteal: 0.4,
        effect: null,
      },
      {
        id: 'darkHowl', name: 'Dark Howl', desc: 'A terrifying howl that weakens and poisons.',
        damage: 18, heal: 0, cooldown: 1, ignoreDef: false, multi: 1,
        effect: { type: 'weaken', target: 'enemy', value: 20, duration: 2 },
        effect2: { type: 'poison', target: 'enemy', value: 5, duration: 2 },
      },
      {
        id: 'vanishSlash', name: 'Vanish Slash', desc: 'Attacks from the shadows for heavy damage.',
        damage: 50, heal: 0, cooldown: 2, ignoreDef: true, multi: 1, lifeSteal: 0.3,
        effect: null,
      },
    ],
  },
}
