export const STORY = {
  intro: `Long ago, Skylands was a realm of wonder — floating islands home to eight elemental kingdoms, each ruled by legendary heroes. Peace reigned under the Portal Master's watchful eye.

Then Malvox rose from the Shadow Realm, consuming the elemental crystals one by one and plunging the kingdoms into darkness. Now only you can gather the heroes, recover the crystals, and face Malvox before all of Skylands falls.`,

  chapters: [
    {
      id: 1,
      name: 'The Ember Peaks',
      element: 'fire',
      description: 'Malvox\'s shadow army has invaded the volcanic Ember Peaks. The fire crystal is within the Forge Temple — if you can fight through the flames.',
      unlocked: true,
      levels: [
        { id: '1-1', name: 'Lava Fields',       enemies: ['emberImp'],    dialog: 'The plains run red with lava. Ember Imps scatter at your approach — then charge.' },
        { id: '1-2', name: 'Smoldering Bridge', enemies: ['flameHound'],  dialog: 'The ancient bridge burns. A Flame Hound bars the way.' },
        { id: '1-3', name: 'Forge Temple',      enemies: ['flameHound'],  dialog: 'You reach the temple. The Pyrelord awaits within... but first, a guardian.' },
        { id: '1-boss', name: 'Pyrelord', enemies: ['pyrelord'], isBoss: true, dialog: 'The Pyrelord roars. "The fire crystal belongs to Malvox!" Defeat him and claim it back.', crystalReward: 'fire' },
      ],
    },
    {
      id: 2,
      name: 'The Tidal Coast',
      element: 'water',
      description: 'The ocean churns as Malvox\'s corruption spreads through the deep. The Depth Leviathan guards the water crystal in the sunken ruins.',
      unlockAfterChapter: 1,
      levels: [
        { id: '2-1', name: 'Coral Shore',      enemies: ['tideCrab'],    dialog: 'The beach is overrun with Tide Crabs infected by shadow energy.' },
        { id: '2-2', name: 'Sunken Shipwreck', enemies: ['seaWraith'],   dialog: 'Ghost ships drift in the fog. A Sea Wraith emerges from the mist.' },
        { id: '2-3', name: 'Deep Ruins',       enemies: ['seaWraith'],   dialog: 'The ancient underwater city. A guardian blocks the inner sanctum.' },
        { id: '2-boss', name: 'Depth Leviathan', enemies: ['depthLeviathan'], isBoss: true, dialog: 'The ocean trembles. The Leviathan rises. "You dare enter my domain?!"', crystalReward: 'water' },
      ],
    },
    {
      id: 3,
      name: 'The Thundertop',
      element: 'air',
      description: 'Above the clouds, the storm island of Thundertop crackles with corrupted lightning. The Cyclone Baron commands Malvox\'s sky forces.',
      unlockAfterChapter: 2,
      levels: [
        { id: '3-1', name: 'Cloud Approach',  enemies: ['stormling'],      dialog: 'The clouds are alive — Stormlings swirl in every direction.' },
        { id: '3-2', name: 'Lightning Ridge', enemies: ['thunderHarpy'],   dialog: 'A Thunder Harpy dives from the storm, eyes blazing.' },
        { id: '3-3', name: 'Storm Fortress',  enemies: ['thunderHarpy'],   dialog: 'The fortress gates crackle. A harpy captain stands guard.' },
        { id: '3-boss', name: 'Cyclone Baron', enemies: ['cycloneBaron'], isBoss: true, dialog: 'The Cyclone Baron descends. "Malvox\'s sky will never be yours!"', crystalReward: 'air' },
      ],
    },
    {
      id: 4,
      name: 'The Ancient Forest',
      element: 'nature',
      description: 'The great forest has been twisted by Malvox\'s shadow. Its guardian, the Root Ancient, has been turned against the heroes.',
      unlockAfterChapter: 3,
      levels: [
        { id: '4-1', name: 'Darkened Woods',   enemies: ['briarWolf'],   dialog: 'The forest is silent. Then Briar Wolves emerge from the undergrowth.' },
        { id: '4-2', name: 'Poison Marsh',     enemies: ['poisonToad'],  dialog: 'The marsh reeks of toxin. Poison Toads lurk in the murk.' },
        { id: '4-3', name: 'Heart of the Wood',enemies: ['briarWolf'],   dialog: 'The forest\'s heart pulses darkly. A corrupted guardian awaits.' },
        { id: '4-boss', name: 'Root Ancient', enemies: ['rootAncient'], isBoss: true, dialog: 'The ancient tree speaks: "Malvox... has taken my heart... stop... me." Fight it free.', crystalReward: 'nature' },
      ],
    },
    {
      id: 5,
      name: 'The Shadow Citadel',
      element: 'shadow',
      description: 'Malvox\'s fortress at the edge of the Shadow Realm. With four crystals recovered, the portal stands open. The final battle awaits.',
      unlockAfterChapter: 4,
      levels: [
        { id: '5-1', name: 'Citadel Gates',   enemies: ['shadowShade'],  dialog: 'Shadow Shades swarm the gates. They dissolve into darkness only to reform.' },
        { id: '5-2', name: 'Dark Halls',      enemies: ['voidKnight'],   dialog: 'Void Knights patrol the inner halls, loyal to Malvox until the end.' },
        { id: '5-3', name: 'Throne Approach', enemies: ['voidKnight'],   dialog: 'The throne room door looms. One last guardian before Malvox himself.' },
        { id: '5-boss', name: 'Malvox the Shadow King', enemies: ['malvox'], isBoss: true, isFinalBoss: true, dialog: 'Malvox rises. "You brought the crystals here? Foolish hero — now they are MINE." Defeat him once and for all!', crystalReward: 'shadow' },
      ],
    },
  ],

  sideQuests: [
    {
      id: 'sq1',
      name: 'Crystal Caverns',
      element: 'earth',
      description: 'Strange tremors from the Crystal Caverns. Rock Gnomes and Stone Trolls guard a secret — and the Granite Colossus holds an ancient earth crystal.',
      unlocked: true,
      levels: [
        { id: 'sq1-1', name: 'Narrow Tunnels', enemies: ['rockGnome'],      dialog: 'Rock Gnomes scurry through the tunnels, hurling boulders.' },
        { id: 'sq1-2', name: 'Crystal Chamber', enemies: ['stoneTroll'],    dialog: 'A Stone Troll guards the main chamber, nearly as wide as it is tall.' },
        { id: 'sq1-boss', name: 'Granite Colossus', enemies: ['graniteColossus'], isBoss: true, dialog: 'The Colossus awakens with a roar that shakes the cave walls.', crystalReward: 'earth' },
      ],
    },
    {
      id: 'sq2',
      name: 'Arcane Ruins',
      element: 'magic',
      description: 'A rogue archmage has sealed himself in ancient ruins and refuses to release the magic crystal. Overcome the arcane traps and face the Spell Binder.',
      unlockAfterChapter: 2,
      levels: [
        { id: 'sq2-1', name: 'Enchanted Entry',  enemies: ['arcaneSprite'],  dialog: 'Wild Arcane Sprites dance between the ruins pillars.' },
        { id: 'sq2-2', name: 'Mirror Gallery',   enemies: ['mirrorPhantom'], dialog: 'Mirror Phantoms multiply in the gallery\'s endless reflections.' },
        { id: 'sq2-boss', name: 'The Spell Binder', enemies: ['spellBinder'], isBoss: true, dialog: '"None shall pass these ruins! I collected these spells for a reason — and that reason is POWER."', crystalReward: 'magic' },
      ],
    },
    {
      id: 'sq3',
      name: 'Iron Foundry',
      element: 'tech',
      description: 'An abandoned war foundry has been reactivated by Malvox. Drones and golems churn out weapons. The Mechano-Lord must be shut down.',
      unlockAfterChapter: 3,
      levels: [
        { id: 'sq3-1', name: 'Assembly Line', enemies: ['ironDrone'],   dialog: 'Iron Drones roll off the assembly line and immediately open fire.' },
        { id: 'sq3-2', name: 'Furnace Floor', enemies: ['steamGolem'],  dialog: 'Steam Golems lumber between the furnaces, venting scorching pressure.' },
        { id: 'sq3-boss', name: 'Mechano-Lord', enemies: ['mechanoLord'], isBoss: true, dialog: '"TARGET ACQUIRED. ENGAGE COMBAT PROTOCOL OMEGA."', crystalReward: 'tech' },
      ],
    },
  ],
}

export function getLevelById(id) {
  for (const ch of STORY.chapters) {
    const lv = ch.levels.find(l => l.id === id)
    if (lv) return { level: lv, chapter: ch, type: 'chapter' }
  }
  for (const sq of STORY.sideQuests) {
    const lv = sq.levels.find(l => l.id === id)
    if (lv) return { level: lv, quest: sq, type: 'sideQuest' }
  }
  return null
}
