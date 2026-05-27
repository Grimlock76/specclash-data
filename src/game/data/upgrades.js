// effect types:
//   { type: 'stat', stat: 'attack'|'defense'|'speed'|'maxHp', value }
//   { type: 'moveStat', moveId, prop: 'damage'|'heal'|'cooldown', value }
//   { type: 'newMove', move: {...} }
//   { type: 'passive', id: string, value }
//
// passive ids: dodge, regen, lifeSteal, counter, phoenixRevive, postBattleHeal

export const UPGRADES = {
  emberFox: {
    shared: [
      { id: 'ef_s1', name: 'Keen Fangs', desc: '+10 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 10 } },
      { id: 'ef_s2', name: 'Heat Aura', desc: '+15 Max HP, +5 Defense', cost: 120, effect: [{ type: 'stat', stat: 'maxHp', value: 15 }, { type: 'stat', stat: 'defense', value: 5 }] },
    ],
    A: {
      name: 'Wildfire',
      description: 'Burn the world. Inferno Burst becomes truly devastating.',
      nodes: [
        { id: 'ef_a1', name: 'Multi-Bite', desc: 'Fire Bite now hits twice (2× hits)', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'fireBite', prop: 'multi', value: 2 } },
        { id: 'ef_a2', name: 'Searing Wounds', desc: 'Burn damage increased to 10/turn', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'fireBite', prop: 'effectValue', value: 10 } },
        { id: 'ef_a3', name: 'Volcanic Fury', desc: 'Inferno Burst deals +30 damage', cost: 400, tier: 3, effect: { type: 'moveStat', moveId: 'infernoB', prop: 'damage', value: 30 } },
      ],
      ultimate: { id: 'ef_au', name: 'Phoenix Flame', desc: 'Once per battle: auto-heal 45 HP when near death', cost: 600, effect: { type: 'passive', id: 'phoenixRevive', value: 45 } },
    },
    B: {
      name: 'Fox Wit',
      description: 'Speed and cunning. Dodge attacks, counter with fire.',
      nodes: [
        { id: 'ef_b1', name: 'Light Footed', desc: '+20 Speed', cost: 200, tier: 1, effect: { type: 'stat', stat: 'speed', value: 20 } },
        { id: 'ef_b2', name: 'Evasion', desc: '18% chance to dodge any attack', cost: 300, tier: 2, effect: { type: 'passive', id: 'dodge', value: 0.18 } },
        { id: 'ef_b3', name: 'Counter Flame', desc: 'Reflect 15 fire damage when hit', cost: 400, tier: 3, effect: { type: 'passive', id: 'counter', value: 15 } },
      ],
      ultimate: { id: 'ef_bu', name: 'Soul of the Fox', desc: 'Restore 40% Max HP after winning a battle', cost: 600, effect: { type: 'passive', id: 'postBattleHeal', value: 0.4 } },
    },
  },

  galeEagle: {
    shared: [
      { id: 'ge_s1', name: 'Sharp Talons', desc: '+10 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 10 } },
      { id: 'ge_s2', name: 'Feather Guard', desc: '+10 Defense, +5 Max HP', cost: 120, effect: [{ type: 'stat', stat: 'defense', value: 10 }, { type: 'stat', stat: 'maxHp', value: 5 }] },
    ],
    A: {
      name: 'Stormcaller',
      description: 'Command the storm. Thunder Dive stuns longer, Wind Slash hits harder.',
      nodes: [
        { id: 'ge_a1', name: 'Crackling Wings', desc: 'Wind Slash also deals burn damage (5/turn, 2 turns)', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'windSlash', prop: 'addBurn', value: 5 } },
        { id: 'ge_a2', name: 'Chain Lightning', desc: 'Thunder Dive +20 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'thunderDive', prop: 'damage', value: 20 } },
        { id: 'ge_a3', name: 'Eye of the Storm', desc: '+15 Attack', cost: 400, tier: 3, effect: { type: 'stat', stat: 'attack', value: 15 } },
      ],
      ultimate: { id: 'ge_au', name: 'Tempest Form', desc: 'Regenerate 8 HP per turn', cost: 600, effect: { type: 'passive', id: 'regen', value: 8 } },
    },
    B: {
      name: 'Wind Rider',
      description: 'Speed and evasion. Strike fast, dodge faster.',
      nodes: [
        { id: 'ge_b1', name: 'Gale Rush', desc: '+25 Speed', cost: 200, tier: 1, effect: { type: 'stat', stat: 'speed', value: 25 } },
        { id: 'ge_b2', name: 'Tailwind Mastery', desc: 'Tailwind lasts 1 extra turn', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'tailwind', prop: 'effectDuration', value: 1 } },
        { id: 'ge_b3', name: 'Aerial Dodge', desc: '20% chance to dodge any attack', cost: 400, tier: 3, effect: { type: 'passive', id: 'dodge', value: 0.20 } },
      ],
      ultimate: { id: 'ge_bu', name: 'Skyward Sovereign', desc: 'After battle: restore 35% Max HP', cost: 600, effect: { type: 'passive', id: 'postBattleHeal', value: 0.35 } },
    },
  },

  boulderBear: {
    shared: [
      { id: 'bb_s1', name: 'Hardened Hide', desc: '+12 Defense', cost: 100, effect: { type: 'stat', stat: 'defense', value: 12 } },
      { id: 'bb_s2', name: 'Iron Core', desc: '+25 Max HP', cost: 120, effect: { type: 'stat', stat: 'maxHp', value: 25 } },
    ],
    A: {
      name: 'Avalanche',
      description: 'Overwhelming force. Earthquake becomes catastrophic.',
      nodes: [
        { id: 'bb_a1', name: 'Crushing Weight', desc: 'Rock Slam +15 damage', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'rockSlam', prop: 'damage', value: 15 } },
        { id: 'bb_a2', name: 'Aftershock', desc: 'Earthquake deals +20 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'earthquake', prop: 'damage', value: 20 } },
        { id: 'bb_a3', name: 'Mountain Strength', desc: '+15 Attack', cost: 400, tier: 3, effect: { type: 'stat', stat: 'attack', value: 15 } },
      ],
      ultimate: { id: 'bb_au', name: 'Living Mountain', desc: 'Regenerate 12 HP per turn', cost: 600, effect: { type: 'passive', id: 'regen', value: 12 } },
    },
    B: {
      name: 'Stone Fortress',
      description: 'Impenetrable defense. Reflect damage back at attackers.',
      nodes: [
        { id: 'bb_b1', name: 'Thick Skin', desc: '+18 Defense', cost: 200, tier: 1, effect: { type: 'stat', stat: 'defense', value: 18 } },
        { id: 'bb_b2', name: 'Stone Fortress', desc: 'Stone Armor lasts 1 extra turn', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'stoneArmor', prop: 'effectDuration', value: 1 } },
        { id: 'bb_b3', name: 'Thorned Shell', desc: 'Reflect 20 damage when hit', cost: 400, tier: 3, effect: { type: 'passive', id: 'counter', value: 20 } },
      ],
      ultimate: { id: 'bb_bu', name: 'Unbreakable', desc: 'Once per battle: auto-heal 60 HP when near death', cost: 600, effect: { type: 'passive', id: 'phoenixRevive', value: 60 } },
    },
  },

  tideSerpent: {
    shared: [
      { id: 'ts_s1', name: 'Deep Waters', desc: '+20 Max HP', cost: 100, effect: { type: 'stat', stat: 'maxHp', value: 20 } },
      { id: 'ts_s2', name: 'Ocean Flow', desc: '+8 Defense, +5 Speed', cost: 120, effect: [{ type: 'stat', stat: 'defense', value: 8 }, { type: 'stat', stat: 'speed', value: 5 }] },
    ],
    A: {
      name: 'Tsunami',
      description: 'Unleash devastating tidal forces.',
      nodes: [
        { id: 'ts_a1', name: 'Surging Waves', desc: 'Water Whip +15 damage', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'waterWhip', prop: 'damage', value: 15 } },
        { id: 'ts_a2', name: 'Crashing Tide', desc: 'Tidal Surge +20 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'tidalSurge', prop: 'damage', value: 20 } },
        { id: 'ts_a3', name: 'Abyssal Power', desc: '+15 Attack', cost: 400, tier: 3, effect: { type: 'stat', stat: 'attack', value: 15 } },
      ],
      ultimate: { id: 'ts_au', name: 'Leviathan Soul', desc: 'Steal 15% of damage dealt as HP', cost: 600, effect: { type: 'passive', id: 'lifeSteal', value: 0.15 } },
    },
    B: {
      name: 'Healing Springs',
      description: 'Sustain through battles with powerful healing.',
      nodes: [
        { id: 'ts_b1', name: 'Spring Waters', desc: 'Healing Tide restores +20 HP', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'healingTide', prop: 'heal', value: 20 } },
        { id: 'ts_b2', name: 'Tidal Renewal', desc: 'Regenerate 6 HP per turn', cost: 300, tier: 2, effect: { type: 'passive', id: 'regen', value: 6 } },
        { id: 'ts_b3', name: 'Deep Mend', desc: 'After battle: restore 50% Max HP', cost: 400, tier: 3, effect: { type: 'passive', id: 'postBattleHeal', value: 0.50 } },
      ],
      ultimate: { id: 'ts_bu', name: 'Ocean Eternal', desc: 'Once per battle: auto-heal 50 HP when near death', cost: 600, effect: { type: 'passive', id: 'phoenixRevive', value: 50 } },
    },
  },

  thornDragon: {
    shared: [
      { id: 'td_s1', name: 'Serrated Scales', desc: '+10 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 10 } },
      { id: 'td_s2', name: 'Bark Hide', desc: '+12 Defense, +10 Max HP', cost: 120, effect: [{ type: 'stat', stat: 'defense', value: 12 }, { type: 'stat', stat: 'maxHp', value: 10 }] },
    ],
    A: {
      name: 'Overgrowth',
      description: 'Overwhelming poison and vines. Nothing escapes.',
      nodes: [
        { id: 'td_a1', name: 'Virulent Vines', desc: 'Vine Lash poison increased to 12/turn', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'vineLash', prop: 'effectValue', value: 12 } },
        { id: 'td_a2', name: 'Toxic Cloud', desc: 'Spore Burst +20 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'sporeBurst', prop: 'damage', value: 20 } },
        { id: 'td_a3', name: 'Feral Growth', desc: '+12 Attack, +8 Speed', cost: 400, tier: 3, effect: [{ type: 'stat', stat: 'attack', value: 12 }, { type: 'stat', stat: 'speed', value: 8 }] },
      ],
      ultimate: { id: 'td_au', name: 'Ancient Canopy', desc: 'Regenerate 10 HP per turn', cost: 600, effect: { type: 'passive', id: 'regen', value: 10 } },
    },
    B: {
      name: 'Ancient Grove',
      description: 'Resilient and patient. Sustain through long battles.',
      nodes: [
        { id: 'td_b1', name: 'Root Network', desc: '+20 Max HP', cost: 200, tier: 1, effect: { type: 'stat', stat: 'maxHp', value: 20 } },
        { id: 'td_b2', name: 'Thorned Bark', desc: 'Reflect 12 damage when hit', cost: 300, tier: 2, effect: { type: 'passive', id: 'counter', value: 12 } },
        { id: 'td_b3', name: 'Ironwood Body', desc: '+15 Defense', cost: 400, tier: 3, effect: { type: 'stat', stat: 'defense', value: 15 } },
      ],
      ultimate: { id: 'td_bu', name: 'Rebirth', desc: 'After battle: restore 45% Max HP', cost: 600, effect: { type: 'passive', id: 'postBattleHeal', value: 0.45 } },
    },
  },

  cogOwl: {
    shared: [
      { id: 'co_s1', name: 'Precision Optics', desc: '+12 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 12 } },
      { id: 'co_s2', name: 'Reinforced Frame', desc: '+10 Defense, +8 Max HP', cost: 120, effect: [{ type: 'stat', stat: 'defense', value: 10 }, { type: 'stat', stat: 'maxHp', value: 8 }] },
    ],
    A: {
      name: 'Overclock',
      description: 'Push systems beyond limits. More damage, more hits.',
      nodes: [
        { id: 'co_a1', name: 'Triple Shot', desc: 'Gear Shot hits 3 times instead of 2', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'gearShot', prop: 'multi', value: 3 } },
        { id: 'co_a2', name: 'Mega Turret', desc: 'Turret deals +15 damage per shot', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'deployTurret', prop: 'effectValue', value: 15 } },
        { id: 'co_a3', name: 'Overclocked Core', desc: 'Overcharge +25 damage', cost: 400, tier: 3, effect: { type: 'moveStat', moveId: 'overcharge', prop: 'damage', value: 25 } },
      ],
      ultimate: { id: 'co_au', name: 'Infinite Loop', desc: 'Regenerate 7 HP per turn', cost: 600, effect: { type: 'passive', id: 'regen', value: 7 } },
    },
    B: {
      name: 'Gadgeteer',
      description: 'Utility and defense. Shields, debuffs, and tricks.',
      nodes: [
        { id: 'co_b1', name: 'Shield Drone', desc: '15% chance to dodge any attack', cost: 200, tier: 1, effect: { type: 'passive', id: 'dodge', value: 0.15 } },
        { id: 'co_b2', name: 'EMP Field', desc: 'Gear Shot also weakens enemy (-10 ATK, 2 turns)', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'gearShot', prop: 'addWeaken', value: 10 } },
        { id: 'co_b3', name: 'Reactive Armor', desc: 'Reflect 18 damage when hit', cost: 400, tier: 3, effect: { type: 'passive', id: 'counter', value: 18 } },
      ],
      ultimate: { id: 'co_bu', name: 'Emergency Protocol', desc: 'Once per battle: auto-heal 40 HP when near death', cost: 600, effect: { type: 'passive', id: 'phoenixRevive', value: 40 } },
    },
  },

  starCat: {
    shared: [
      { id: 'sc_s1', name: 'Arcane Focus', desc: '+12 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 12 } },
      { id: 'sc_s2', name: 'Star Blessing', desc: '+10 Max HP, +8 Speed', cost: 120, effect: [{ type: 'stat', stat: 'maxHp', value: 10 }, { type: 'stat', stat: 'speed', value: 8 }] },
    ],
    A: {
      name: 'Arcane Storm',
      description: 'Devastating magical power. Starfall becomes a supernova.',
      nodes: [
        { id: 'sc_a1', name: 'Piercing Bolt', desc: 'Magic Bolt fully ignores defense', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'magicBolt', prop: 'ignoreDef', value: true } },
        { id: 'sc_a2', name: 'Meteor Strike', desc: 'Starfall +25 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'starfall', prop: 'damage', value: 25 } },
        { id: 'sc_a3', name: 'Celestial Power', desc: '+18 Attack', cost: 400, tier: 3, effect: { type: 'stat', stat: 'attack', value: 18 } },
      ],
      ultimate: { id: 'sc_au', name: 'Cosmic Surge', desc: 'Steal 20% of damage dealt as HP', cost: 600, effect: { type: 'passive', id: 'lifeSteal', value: 0.20 } },
    },
    B: {
      name: 'Mystic Veil',
      description: 'Arcane shields and reflections. Defense through magic.',
      nodes: [
        { id: 'sc_b1', name: 'Shimmering Ward', desc: 'Arcane Shield lasts 1 extra turn', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'arcaneShield', prop: 'effectDuration', value: 1 } },
        { id: 'sc_b2', name: 'Starlight Veil', desc: '17% chance to dodge any attack', cost: 300, tier: 2, effect: { type: 'passive', id: 'dodge', value: 0.17 } },
        { id: 'sc_b3', name: 'Arcane Reflection', desc: 'Reflect 14 damage when hit', cost: 400, tier: 3, effect: { type: 'passive', id: 'counter', value: 14 } },
      ],
      ultimate: { id: 'sc_bu', name: 'Stellar Rebirth', desc: 'After battle: restore 40% Max HP', cost: 600, effect: { type: 'passive', id: 'postBattleHeal', value: 0.40 } },
    },
  },

  shadeWolf: {
    shared: [
      { id: 'sw_s1', name: 'Shadow Fangs', desc: '+12 Attack', cost: 100, effect: { type: 'stat', stat: 'attack', value: 12 } },
      { id: 'sw_s2', name: 'Dark Coat', desc: '+10 Defense, +10 Max HP', cost: 120, effect: [{ type: 'stat', stat: 'defense', value: 10 }, { type: 'stat', stat: 'maxHp', value: 10 }] },
    ],
    A: {
      name: 'Dark Predator',
      description: 'Drain life, land critical hits, vanish and strike.',
      nodes: [
        { id: 'sw_a1', name: 'Vampiric Edge', desc: 'Shadow Strike life steal increased to 60%', cost: 200, tier: 1, effect: { type: 'moveStat', moveId: 'shadowStrike', prop: 'lifeSteal', value: 0.60 } },
        { id: 'sw_a2', name: 'Darkness Surge', desc: 'Vanish Slash +20 damage', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'vanishSlash', prop: 'damage', value: 20 } },
        { id: 'sw_a3', name: 'Alpha Predator', desc: '+15 Attack, +10 Speed', cost: 400, tier: 3, effect: [{ type: 'stat', stat: 'attack', value: 15 }, { type: 'stat', stat: 'speed', value: 10 }] },
      ],
      ultimate: { id: 'sw_au', name: 'Eternal Hunt', desc: 'Steal 25% of all damage dealt as HP', cost: 600, effect: { type: 'passive', id: 'lifeSteal', value: 0.25 } },
    },
    B: {
      name: 'Shadow Realm',
      description: 'Phase through attacks and curse enemies into weakness.',
      nodes: [
        { id: 'sw_b1', name: 'Phase Walk', desc: '20% chance to dodge any attack', cost: 200, tier: 1, effect: { type: 'passive', id: 'dodge', value: 0.20 } },
        { id: 'sw_b2', name: 'Deep Curse', desc: 'Dark Howl also poisons (8/turn, 2 turns)', cost: 300, tier: 2, effect: { type: 'moveStat', moveId: 'darkHowl', prop: 'addPoison', value: 8 } },
        { id: 'sw_b3', name: 'Shadow Veil', desc: 'Reflect 16 damage when hit', cost: 400, tier: 3, effect: { type: 'passive', id: 'counter', value: 16 } },
      ],
      ultimate: { id: 'sw_bu', name: 'Void Walker', desc: 'After battle: restore 50% Max HP', cost: 600, effect: { type: 'passive', id: 'postBattleHeal', value: 0.50 } },
    },
  },
}
