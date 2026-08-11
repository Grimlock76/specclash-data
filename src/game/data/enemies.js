// enemy: { id, name, emoji, element, maxHp, attack, defense, speed, reward, moves, description }

export const ENEMIES = {
  // --- FIRE ZONE ---
  emberImp: {
    id: 'emberImp', name: 'Ember Imp', emoji: '👺', element: 'fire',
    maxHp: 55, attack: 45, defense: 28, speed: 68,
    reward: { gold: 35, xp: 25 },
    description: 'A mischievous fire imp that loves causing chaos.',
    moves: [
      { id: 'ei_scratch', name: 'Scratch', damage: 22, effect: null },
      { id: 'ei_fireball', name: 'Fireball', damage: 30, effect: { type: 'burn', target: 'enemy', value: 5, duration: 2 } },
    ],
  },
  flameHound: {
    id: 'flameHound', name: 'Flame Hound', emoji: '🐕', element: 'fire',
    maxHp: 70, attack: 55, defense: 38, speed: 75,
    reward: { gold: 45, xp: 35 },
    description: 'A rabid hound whose fur burns with living fire.',
    moves: [
      { id: 'fh_bite', name: 'Flaming Bite', damage: 30, effect: { type: 'burn', target: 'enemy', value: 7, duration: 2 } },
      { id: 'fh_charge', name: 'Flame Charge', damage: 40, effect: null },
    ],
  },
  pyrelord: {
    id: 'pyrelord', name: 'Pyrelord', emoji: '🔴', element: 'fire',
    maxHp: 165, attack: 72, defense: 65, speed: 60,
    reward: { gold: 160, xp: 90 },
    description: 'A titan of molten rock who rules the Ember Peaks.',
    isBoss: true,
    moves: [
      { id: 'pl_slam', name: 'Magma Slam', damage: 45, effect: null },
      { id: 'pl_eruption', name: 'Eruption', damage: 60, effect: { type: 'burn', target: 'enemy', value: 8, duration: 3 } },
      { id: 'pl_shield', name: 'Lava Skin', damage: 0, effect: { type: 'defend', target: 'self', value: 35, duration: 2 } },
    ],
  },

  // --- WATER ZONE ---
  tideCrab: {
    id: 'tideCrab', name: 'Tide Crab', emoji: '🦀', element: 'water',
    maxHp: 65, attack: 48, defense: 55, speed: 50,
    reward: { gold: 40, xp: 30 },
    description: 'An armored crab that walks between worlds of sea and shore.',
    moves: [
      { id: 'tc_pinch', name: 'Pinch', damage: 25, effect: null },
      { id: 'tc_spray', name: 'Water Spray', damage: 28, effect: { type: 'weaken', target: 'enemy', value: 10, duration: 2 } },
    ],
  },
  seaWraith: {
    id: 'seaWraith', name: 'Sea Wraith', emoji: '👻', element: 'water',
    maxHp: 75, attack: 58, defense: 42, speed: 72,
    reward: { gold: 50, xp: 40 },
    description: 'The ghost of a drowned sailor, bound to haunt the coast.',
    moves: [
      { id: 'sw_chill', name: 'Chill Touch', damage: 28, effect: { type: 'weaken', target: 'enemy', value: 15, duration: 2 } },
      { id: 'sw_wave', name: 'Tidal Crash', damage: 38, effect: null },
    ],
  },
  depthLeviathan: {
    id: 'depthLeviathan', name: 'Depth Leviathan', emoji: '🐋', element: 'water',
    maxHp: 175, attack: 74, defense: 70, speed: 58,
    reward: { gold: 170, xp: 95 },
    description: 'An ancient leviathan awakened from the abyss by Malvox.',
    isBoss: true,
    moves: [
      { id: 'dl_bite', name: 'Deep Bite', damage: 48, effect: null },
      { id: 'dl_whirlpool', name: 'Whirlpool', damage: 55, effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 } },
      { id: 'dl_heal', name: 'Abyssal Mend', damage: 0, heal: 35, effect: null },
    ],
  },

  // --- AIR ZONE ---
  stormling: {
    id: 'stormling', name: 'Stormling', emoji: '🌪️', element: 'air',
    maxHp: 55, attack: 52, defense: 30, speed: 82,
    reward: { gold: 40, xp: 30 },
    description: 'A tiny but vicious storm elemental.',
    moves: [
      { id: 'sl_gust', name: 'Gust', damage: 24, effect: null },
      { id: 'sl_shock', name: 'Static Shock', damage: 30, effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 } },
    ],
  },
  thunderHarpy: {
    id: 'thunderHarpy', name: 'Thunder Harpy', emoji: '🦅', element: 'air',
    maxHp: 70, attack: 62, defense: 40, speed: 88,
    reward: { gold: 50, xp: 38 },
    description: 'A lightning-fast harpy who swoops from storm clouds.',
    moves: [
      { id: 'th_talon', name: 'Lightning Talon', damage: 32, effect: { type: 'burn', target: 'enemy', value: 5, duration: 2 } },
      { id: 'th_screech', name: 'Screech', damage: 22, effect: { type: 'weaken', target: 'enemy', value: 18, duration: 2 } },
    ],
  },
  cycloneBaron: {
    id: 'cycloneBaron', name: 'Cyclone Baron', emoji: '🌊', element: 'air',
    maxHp: 170, attack: 76, defense: 62, speed: 72,
    reward: { gold: 175, xp: 100 },
    description: 'Malvox\'s viceroy of the skies, a living hurricane.',
    isBoss: true,
    moves: [
      { id: 'cb_slash', name: 'Cyclone Slash', damage: 50, effect: null },
      { id: 'cb_tornado', name: 'Tornado', damage: 40, effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 } },
      { id: 'cb_deflect', name: 'Wind Wall', damage: 0, effect: { type: 'defend', target: 'self', value: 40, duration: 2 } },
    ],
  },

  // --- NATURE ZONE ---
  briarWolf: {
    id: 'briarWolf', name: 'Briar Wolf', emoji: '🐺', element: 'nature',
    maxHp: 68, attack: 55, defense: 38, speed: 72,
    reward: { gold: 45, xp: 35 },
    description: 'A wolf woven from thorns and wild roots.',
    moves: [
      { id: 'bw_bite', name: 'Thorn Bite', damage: 28, effect: { type: 'poison', target: 'enemy', value: 6, duration: 2 } },
      { id: 'bw_howl', name: 'Briar Howl', damage: 22, effect: { type: 'weaken', target: 'enemy', value: 12, duration: 2 } },
    ],
  },
  poisonToad: {
    id: 'poisonToad', name: 'Poison Toad', emoji: '🐸', element: 'nature',
    maxHp: 80, attack: 52, defense: 48, speed: 48,
    reward: { gold: 50, xp: 40 },
    description: 'An enormous toad that secretes paralyzing toxins.',
    moves: [
      { id: 'pt_spit', name: 'Toxic Spit', damage: 20, effect: { type: 'poison', target: 'enemy', value: 10, duration: 3 } },
      { id: 'pt_slam', name: 'Body Slam', damage: 38, effect: null },
    ],
  },
  rootAncient: {
    id: 'rootAncient', name: 'Root Ancient', emoji: '🌳', element: 'nature',
    maxHp: 180, attack: 70, defense: 75, speed: 35,
    reward: { gold: 180, xp: 105 },
    description: 'A forest elder turned wrathful by Malvox\'s corruption.',
    isBoss: true,
    moves: [
      { id: 'ra_stomp', name: 'Root Stomp', damage: 44, effect: null },
      { id: 'ra_spore', name: 'Ancient Spores', damage: 25, effect: { type: 'poison', target: 'enemy', value: 12, duration: 3 } },
      { id: 'ra_regen', name: 'Nature\'s Mend', damage: 0, heal: 40, effect: null },
    ],
  },

  // --- SHADOW CITADEL (Final Chapter) ---
  shadowShade: {
    id: 'shadowShade', name: 'Shadow Shade', emoji: '👤', element: 'shadow',
    maxHp: 72, attack: 62, defense: 42, speed: 80,
    reward: { gold: 55, xp: 45 },
    description: 'A being of pure darkness that feeds on fear.',
    moves: [
      { id: 'ss_drain', name: 'Life Drain', damage: 28, lifeSteal: 0.3, effect: null },
      { id: 'ss_curse', name: 'Shadow Curse', damage: 18, effect: { type: 'weaken', target: 'enemy', value: 20, duration: 2 } },
    ],
  },
  voidKnight: {
    id: 'voidKnight', name: 'Void Knight', emoji: '🧟', element: 'shadow',
    maxHp: 90, attack: 72, defense: 60, speed: 65,
    reward: { gold: 65, xp: 55 },
    description: 'A warrior consumed by the void, now serving Malvox.',
    moves: [
      { id: 'vk_slash', name: 'Void Slash', damage: 38, effect: null },
      { id: 'vk_drain', name: 'Soul Rend', damage: 32, lifeSteal: 0.25, effect: { type: 'weaken', target: 'enemy', value: 15, duration: 2 } },
    ],
  },
  malvox: {
    id: 'malvox', name: 'Malvox the Shadow King', emoji: '👑', element: 'shadow',
    maxHp: 250, attack: 90, defense: 80, speed: 68,
    reward: { gold: 300, xp: 200 },
    description: 'The Lord of Shadows who seeks to plunge all of Skylands into eternal darkness.',
    isBoss: true, isFinalBoss: true,
    moves: [
      { id: 'mx_strike', name: 'Shadow Rend', damage: 60, effect: null },
      { id: 'mx_drain', name: 'Soul Harvest', damage: 45, lifeSteal: 0.4, effect: { type: 'weaken', target: 'enemy', value: 20, duration: 2 } },
      { id: 'mx_curse', name: 'Void Storm', damage: 50, effect: { type: 'poison', target: 'enemy', value: 10, duration: 3 } },
      { id: 'mx_shield', name: 'Dark Veil', damage: 0, effect: { type: 'defend', target: 'self', value: 50, duration: 2 } },
    ],
  },

  // --- SIDE QUEST: Crystal Caverns (Earth) ---
  rockGnome: {
    id: 'rockGnome', name: 'Rock Gnome', emoji: '👷', element: 'earth',
    maxHp: 60, attack: 50, defense: 55, speed: 45,
    reward: { gold: 40, xp: 30 },
    description: 'A stout gnome who tunnels through stone.',
    moves: [
      { id: 'rg_toss', name: 'Boulder Toss', damage: 28, effect: null },
      { id: 'rg_stomp', name: 'Stomp', damage: 32, effect: null },
    ],
  },
  stoneTroll: {
    id: 'stoneTroll', name: 'Stone Troll', emoji: '🗿', element: 'earth',
    maxHp: 90, attack: 58, defense: 70, speed: 38,
    reward: { gold: 55, xp: 42 },
    description: 'A slow but almost unbreakable troll made of living stone.',
    moves: [
      { id: 'st_crush', name: 'Rock Crush', damage: 40, effect: null },
      { id: 'st_shield', name: 'Stone Wall', damage: 0, effect: { type: 'defend', target: 'self', value: 40, duration: 3 } },
    ],
  },
  graniteColossus: {
    id: 'graniteColossus', name: 'Granite Colossus', emoji: '🏔️', element: 'earth',
    maxHp: 200, attack: 78, defense: 92, speed: 30,
    reward: { gold: 200, xp: 130 },
    description: 'A mountain given life — immovable and indestructible.',
    isBoss: true,
    moves: [
      { id: 'gc_quake', name: 'Mega Quake', damage: 55, effect: { type: 'stun', target: 'enemy', value: 1, duration: 1 } },
      { id: 'gc_slam', name: 'Titan Slam', damage: 65, effect: null },
      { id: 'gc_armor', name: 'Granite Skin', damage: 0, effect: { type: 'defend', target: 'self', value: 60, duration: 3 } },
    ],
  },

  // --- SIDE QUEST: Arcane Ruins (Magic) ---
  arcaneSprite: {
    id: 'arcaneSprite', name: 'Arcane Sprite', emoji: '🧚', element: 'magic',
    maxHp: 52, attack: 58, defense: 30, speed: 75,
    reward: { gold: 42, xp: 32 },
    description: 'A wild spirit of raw magic, unpredictable and energetic.',
    moves: [
      { id: 'as_bolt', name: 'Arcane Bolt', damage: 30, halfDef: true, effect: null },
      { id: 'as_zap', name: 'Magic Zap', damage: 22, effect: { type: 'weaken', target: 'enemy', value: 12, duration: 2 } },
    ],
  },
  mirrorPhantom: {
    id: 'mirrorPhantom', name: 'Mirror Phantom', emoji: '🪞', element: 'magic',
    maxHp: 72, attack: 68, defense: 45, speed: 70,
    reward: { gold: 55, xp: 45 },
    description: 'A phantom that copies the abilities of those it faces.',
    moves: [
      { id: 'mp_mimic', name: 'Mirror Strike', damage: 35, effect: null },
      { id: 'mp_illusion', name: 'Illusion Veil', damage: 0, effect: { type: 'defend', target: 'self', value: 30, duration: 2 } },
    ],
  },
  spellBinder: {
    id: 'spellBinder', name: 'The Spell Binder', emoji: '🧙', element: 'magic',
    maxHp: 185, attack: 82, defense: 68, speed: 65,
    reward: { gold: 195, xp: 130 },
    description: 'A rogue archmage who harnessed forbidden spells for power.',
    isBoss: true,
    moves: [
      { id: 'sb_blast', name: 'Arcane Barrage', damage: 50, halfDef: true, effect: null },
      { id: 'sb_curse', name: 'Hex Curse', damage: 25, effect: { type: 'poison', target: 'enemy', value: 8, duration: 3 } },
      { id: 'sb_shield', name: 'Mana Ward', damage: 0, effect: { type: 'defend', target: 'self', value: 45, duration: 2 } },
    ],
  },

  // --- SIDE QUEST: Iron Foundry (Tech) ---
  ironDrone: {
    id: 'ironDrone', name: 'Iron Drone', emoji: '🤖', element: 'tech',
    maxHp: 65, attack: 52, defense: 50, speed: 62,
    reward: { gold: 42, xp: 32 },
    description: 'An automated drone on a permanent attack protocol.',
    moves: [
      { id: 'id_laser', name: 'Laser Beam', damage: 28, effect: null },
      { id: 'id_gear', name: 'Gear Toss', damage: 24, multi: 2, effect: null },
    ],
  },
  steamGolem: {
    id: 'steamGolem', name: 'Steam Golem', emoji: '⚙️', element: 'tech',
    maxHp: 88, attack: 60, defense: 65, speed: 45,
    reward: { gold: 55, xp: 45 },
    description: 'A massive construct powered by scorching steam pressure.',
    moves: [
      { id: 'sg_punch', name: 'Steam Punch', damage: 38, effect: null },
      { id: 'sg_vent', name: 'Pressure Vent', damage: 25, effect: { type: 'burn', target: 'enemy', value: 6, duration: 2 } },
    ],
  },
  mechanoLord: {
    id: 'mechanoLord', name: 'Mechano-Lord', emoji: '🦾', element: 'tech',
    maxHp: 190, attack: 80, defense: 78, speed: 55,
    reward: { gold: 200, xp: 135 },
    description: 'A fully automated war machine with no mercy protocols.',
    isBoss: true,
    moves: [
      { id: 'ml_cannon', name: 'Mega Cannon', damage: 58, effect: null },
      { id: 'ml_salvo', name: 'Rocket Salvo', damage: 30, multi: 2, effect: null },
      { id: 'ml_shield', name: 'Armor Plate', damage: 0, effect: { type: 'defend', target: 'self', value: 50, duration: 2 } },
    ],
  },
}
