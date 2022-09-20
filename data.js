(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
		{
          name: 'Herbalist',
		  levels: 2,
          desc: ['Potions and poisons you make are 25% stronger.','Potions and poisons you make are 50% stronger.'],
          req: [10,50],
          pos: [0, 0],
		}, {
          name: 'Intensity',
		  levels: 2,
          desc: ['Poisons last for two extra hits.','Poisons last for four extra hits.'],
          req: [30,60],
          pos: [-57, -12],
          deps: [0],
		}, {
          name: 'Solvency',
          desc: [' Poisons you make are 25% more effective.'],
          req: [80],
          pos: [-23, -87],
          deps: [1],
		}, {
          name: 'Green Thumb',
		  levels: 2,
          desc: ['You gather one extra ingredient from plants.','You gather two extra ingredients from plants.'],
          req: [20, 70],
          pos: [23, -38],
          deps: [0],
		}, {
          name: 'Experimenter',
          desc: ['Eating an ingredient reveals all its effects.'],
          req: [40],
          pos: [-6, -54],
          deps: [3],
		}, {
          name: 'Concentration',
		  levels: 2,
          desc: ['Potions last 50% longer.','Potions last twice as long.'],
          req: [30,60],
          pos: [63, -12],
          deps: [0],
		}, {
          name: 'Potency',
          desc: ['Potions you mix are 25% stronger.'],
          req: [80],
          pos: [30, -89],
          deps: [5],
		}, {
          name: 'Purity',
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [90],
          pos: [6, -153],
          deps: [2, 6],
		}, {
          name: 'Chemist',
          desc: ['You create twice as many potions or poisons from the same number of ingredients.'],
          req: [100],
          pos: [6, -225],
          deps: [7],
        }
      ]
    }, {
      name: 'Illusion',
      cname: 'illusion',
      perks: [
        {
          name: 'Illusionist',
		  levels: 2,
          desc: ['Illusion spells cost 25% less Magicka.','Illusion spells cost 50% less Magicka.'],
		  req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Serenity',
          desc: ['Calm spells last for one additional hit.'],
          req: [30],
          pos: [-59, -34],
          deps: [0],
		}, {
          name: 'Tranquility',
          desc: ['Silence spells dispel any magical effects on the target.'],
          req: [70],
          pos: [-43, -57],
          deps: [1],
		}, {
          name: 'Stasis',
          desc: ['Paralysis spells last three times as long.'],
          req: [90],
          pos: [-48, -98],
          deps: [2],
		}, {
          name: 'Captivating Presence',
		  levels: 2,
          desc: ['Illusion spells last 50% longer.','Illusion spells last twice as long.'],
          req: [20,60],
          pos: [13, -43],
          deps: [0],
		}, {
          name: 'Indomitable Will',
		  levels: 2,
          desc: ['Illusion spells are 50% stronger.','Illusion spells are twice as strong.'],
          req: [40,80],
          pos: [-12, -60],
          deps: [4],
		}, {
          name: 'Master of the Mind',
          desc: ['Illusion spells work on undead, daedra and automatons.'],
          req: [100],
          pos: [3, -116],
          deps: [5],
		}, {
          name: 'Howl of Rage',
          desc: ['Frenzy spells increase the target\'s weapon damage by 50% against everyone except the caster.'],
          req: [30],
          pos: [52, -29],
          deps: [0],
		}, {
          name: 'Aspect of Terror',
          desc: ['Fear spells reduce the target\'s Armor Rating by 150 and their Magic Resistance by 25%.'],
          req: [70],
          pos: [44, -54],
          deps: [7],
		}, {
          name: 'Voice of Authority',
          desc: ['Command spells increase the target\'s Armor Rating by 150 and their Magic Resistance by 25%.'],
          req: [90],
          pos: [45, -90],
          deps: [8],		
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'Summoner',
		  levels: 2,
          desc: ['Conjuration spells cost 25% less Magicka.','Conjuration spells cost 50% less Magicka.'],
		  req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Dark Oath',
		  levels: 2,
          desc: ['Summoned creatures last 50% longer.','Summoned creatures last twice as long.'],
          req: [20,60],
          pos: [-60, -15],
          deps: [0],
		}, {
          name: 'Armor of Shadows',
		  levels: 2,
          desc: ['Summoned creatures gain 150 Armor Rating.','Summoned creatures gain 300 Armor Rating.'],
          req: [30,80],
          pos: [-81, -56],
          deps: [1],
		}, {
          name: 'Ritual of Power',
		  levels: 2,
          desc: ['Summoned creatures gain 25% Magic Resistance.','Summoned creatures gain 50% Magic Resistance.'],
          req: [40, 90],
          pos: [-87, -100],
          deps: [2],
		}, {
          name: 'Daedric Pact',
          desc: ['Summoned creatures have 100 extra Health, Magicka, and Stamina.'],
          req: [70],
          pos: [-72, -140],
          deps: [3],
		}, {
          name: 'False Life',
		  levels: 2,
          desc: ['Reanimated zombies move 25% faster.','Reanimated zombies move 50% faster.'],
          req: [20,60],
          pos: [-37, -22],
          deps: [0],
		}, {
          name: 'Undead Servant',
		  levels: 2,
          desc: ['Reanimated zombies last five times longer.','Reanimated zombies last until killed.'],
          req: [30,90],
          pos: [-52, -50],
          deps: [5],
		}, {
          name: 'Necropotence',
		  levels: 2,
          desc: ['Reanimated zombies regenerate Magicka and Stamina over time.','Reanimated zombies regenerate Health, Magicka, and Stamina over time.'],
          req: [40, 80],
          pos: [-52, -90],
          deps: [6],
		}, {
          name: 'Corpse Preparation',
          desc: ['Reanimated zombies no longer disintegrate when they die.'],
          req: [70],
          pos: [-39, -126],
          deps: [7],
		}, {
          name: 'Doors of Oblivion',
          desc: ['You can summon or reanimate one additional minion.'],
          req: [100],
          pos: [-23, -163],
          deps: [4,8],
		}, {
          name: 'Cultist',
		  levels: 2,
          desc: ['Daedric blessings are twice as strong.','Daedric blessings are twice as strong, and you receive additional bonuses when you pray at their shrines.'],
          req: [30,60],
          pos: [0, -70],
          deps: [0],
		}, {
          name: 'Arcane Weapon',
          desc: ['Bound weapons last five times longer.'],
          req: [20],
          pos: [50, -20],
          deps: [0],
		}, {
          name: 'Essence Drain',
		  levels: 2,
          desc: ['Bound weapons absorb Magicka and Stamina.','Bound weapons absorb Health, Magicka, and Stamina.'],
          req: [30,60],
          pos: [72, -57],
          deps: [11],
		}, {
          name: 'Mystic Binding',
		  levels: 2,
          desc: ['Bound weapons deal extra damage.','Bound weapons deal even more damage.'],
          req: [40,80],
          pos: [85, -97],
          deps: [12],
		}, {
          name: 'Haunting Curse',
          desc: ['Bound weapons reduce enemy Magic Resistance by 50% for 10 seconds.'],
          req: [90],
          pos: [59, -136],
          deps: [13],		
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Elementalist',
		  levels: 2,
          desc: ['Destruction spells cost 25% less Magicka.','Destruction spells cost 50% less Magicka.'],
		  req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Rune Mage',
          desc: ['You can maintain up to three runes at once.'],
          req: [40],
          pos: [-39, -3],
          deps: [0],
		}, {
          name: 'Augmented Flames',
		  levels: 2,
          desc: ['Fire spells deal 25% more damage.','Fire spells deal 50% more damage.'],
          req: [30,70],
          pos: [-39, -24],
          deps: [0],
		}, {
          name: 'Firebrand',
		  levels: 2,
          desc: ['Fire spells brand enemies for 10 seconds. Branded targets take 25% extra damage from Fire spells.','Fire spells brand enemies for 10 seconds. Branded targets take 50% extra damage from Fire spells.'],
          req: [60,90],
          pos: [-46, -52],
          deps: [2],
		}, {
          name: 'Combustion',
          desc: ['Fire spells ignite enemies, dealing extra damage over 10 seconds.'],
          req: [80],
          pos: [-55, -85],
          deps: [3],
		}, {
          name: 'Wildfire',
          desc: ['Fire spells have a chance to incinerate targets when they fall below half Health.'],
          req: [100],
          pos: [-78, -111],
          deps: [4],
		}, {
          name: 'Augmented Frost',
		  levels: 2,
          desc: ['Frost spells deal 25% more damage.','Frost spells deal 50% more damage.'],
          req: [30,70],
          pos: [-3, -31],
          deps: [0],
		}, {
          name: 'North Wind',
		  levels: 2,
          desc: ['When you have a Frost spell equipped, you reduce the Frost Resistance of all nearby enemies by up to 50%.','When you have a Frost spell equipped, you reduce the Frost Resistance of all nearby enemies by up to 100%.'],
          req: [60,90],
          pos: [12, -55],
          deps: [6],
		}, {
          name: 'Permafrost',
          desc: ['Frost spells reduce enemy weapon damage by 25% for 10 seconds.'],
          req: [80],
          pos: [-20, -82],
          deps: [7],
		}, {
          name: 'Deep Freeze',
          desc: ['Frost spells have a chance to encase enemies in ice when they fall below half Health.'],
          req: [100],
          pos: [2, -114],
          deps: [8],
		}, {
          name: 'Augmented Shock',
		  levels: 2,
          desc: ['Shock spells deal 25% more damage.','Shock spells deal 50% more damage.'],
          req: [30,70],
          pos: [36, -25],
          deps: [0],
		}, {
          name: 'Unstable Current',
		  levels: 2,
          desc: ['Shock spells have a 25% chance to deal double damage.','Shock spells have a 50% chance to deal double damage.'],
          req: [60,90],
          pos: [39, -62],
          deps: [10],
		}, {
          name: 'Static Field',
          desc: ['Shock spells prevent enemies from regenerating Magicka for 10 seconds.'],
          req: [80],
          pos: [49, -101],
          deps: [11],
		}, {
          name: 'Power Surge',
          desc: ['Shock spells have a chance to overload targets who fall below half Health.'],
          req: [100],
          pos: [72, -142],
          deps: [12],
		}, {
          name: 'Spell Surge',
          desc: ['Dual casting a Destruction spell costs 25% less Magicka.'],
          req: [20],
          pos: [31, -1],
          deps: [0],
		}, {
          name: 'Symmetry',
          desc: ['Destruction cloak spells last twice as long when dual cast.'],
          req: [60],
          pos: [78, -40],
          deps: [14],
		}, {
          name: 'Impact',
          desc: ['Destruction spells have a 50% chance to stagger an opponent when dual cast.'],
          req: [40],
          pos: [62, -10],
          deps: [14],		
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'Healer',
		  levels: 2,
          desc: ['Restoration spells cost 25% less Magicka.','Restoration spells cost 50% less Magicka.'],
		  req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Pilgrim',
		  levels: 2,
          desc: ['Divine blessings are twice as strong.','Divine blessings are twice as strong, and you receive additional bonuses when you pray at their shrines.'],
          req: [30,60],
          pos: [-105, -30],
          deps: [0],
		}, {
          name: 'Divine Glory',
		  levels: 2,
          desc: ['Sun spells deal 25% more damage.','Sun spells deal 50% more damage.'],
          req: [30,70],
          pos: [-39, -23],
          deps: [0],
		}, {
          name: 'Power of the Light',
		  levels: 2,
          desc: ['Sun spells deal extra damage over time.','Sun spells deal even more damage over time.'],
          req: [60, 90],
          pos: [-75, -43],
          deps: [2],
		}, {
          name: 'Ward Absorb',
          desc: ['Wards recharge your magicka when hit with spells.'],
          req: [60],
          pos: [-25, -35],
          deps: [0],
		}, {
          name: 'Plague',
		  levels: 2,
          desc: ['When you have a Poison spell equipped, you reduce the Poison Resistance of all nearby enemies by up to 50%.','When you have a Poison spell equipped, you reduce the Poison Resistance of all nearby enemies by up to 100%.'],
          req: [60, 90],
          pos: [-48, -63],
          deps: [4],
		}, {
          name: 'Scourge',
		  levels: 2,
          desc: ['Poison spells deal 50% extra damage to targets who fall below half Health.','Poison spells deal double damage to targets who fall below half Health.'],
          req: [80,100],
          pos: [-98, -82],
          deps: [5],
		}, {
          name: 'Recovery',
		  levels: 2,
          desc: ['Healing spells are 50% stronger.','Healing spells are twice as strong.'],
          req: [20,60],
          pos: [2, -43],
          deps: [0],
		}, {
          name: 'Respite',
          desc: ['Instant healing spells such as Fast Healing and Close Wounds also restore Stamina.'],
          req: [40],
          pos: [-16, -71],
          deps: [7],
		}, {
          name: 'Repose',
          desc: ['Regeneration and Attunement spells last twice as long.'],
          req: [60],
          pos: [25, -71],
          deps: [7],
		}, {
          name: 'Resolve',
          desc: ['Healing spells are 50% stronger when the target falls below half Health.'],
          req: [80],
          pos: [8, -112],
          deps: [8,9],
		}, {
          name: 'Renewal',
          desc: ['Once per day, you fully heal yourself when your Health drops below 25%.'],
          req: [100],
          pos: [-30, -140],
          deps: [10],
		}, {
          name: 'Radiant Ward',
          desc: ['Ward spells cost 50% less Magicka.'],
          req: [20],
          pos: [26, -37],
          deps: [0],
		}, {
          name: 'Empowered Ward',
          desc: ['Ward spells resist 50% of incoming weapon damage.'],
          req: [40],
          pos: [50, -63],
          deps: [12],
		}, {
          name: 'Prismatic Ward',
          desc: ['Ward spells absorb Magicka from incoming spells.'],
          req: [70],
          pos: [95, -85],
          deps: [13],
		}, {
          name: 'Dawn\'s Wrath',
		  levels: 2,
          desc: ['Turn Undead spells are 50% stronger.','Turn Undead spells are twice as strong.'],
          req: [40,80],
          pos: [40, -23],
          deps: [0],
		}, {
          name: 'Burning Light',
          desc: ['Turn Undead spells deal damage over time.'],
          req: [60],
          pos: [78, -46],
          deps: [15],
		}, {
          name: 'Illumination',
          desc: ['Regeneration, Attunement, and Circle spells last twice as long when dual cast.'],
          req: [40],
          pos: [106, -31],
          deps: [0],
		
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Philosopher',
		  levels: 2,
          desc: ['Alteration spells cost 25% less Magicka.','Alteration spells cost 50% less Magicka.'],
		  req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Mage Armor',
		  levels: 2,
          desc: ['Armor spells are 50% stronger while wearing robes.','Armor spells are twice as strong while wearing robes.'],
          req: [20,70],
          pos: [-17, -30],
          deps: [0],
		}, {
          name: 'Mage Robes',
		  levels: 2,
          desc: ['You gain 50% Magicka Regeneration while wearing robes.','You gain 100% Magicka Regeneration while wearing robes'],
          req: [30, 60],
          pos: [-24, -99],
          deps: [1],
		}, {
          name: 'Meditation',
          desc: ['Spells and enchantments cost 10% less while wearing robes.'],
          req: [80],
          pos: [-89, -128],
          deps: [2],
		}, {
          name: 'Magicka Well',
          desc: ['Your Magicka regenerates twice as fast when you fall below half Magicka while wearing robes.'],
          req: [100],
          pos: [-88, -175],
          deps: [2],
		}, {
          name: 'Barrier',
          desc: ['Protection spells like Oakflesh and Fire Shell last twice as long when dual cast.'],
          req: [40],
          pos: [-1, -41],
          deps: [0],
		}, {
          name: 'Bastion',
          desc: ['Protection spells like Oakflesh and Fire Shell affect nearby allies when dual cast.'],
          req: [70],
          pos: [-2, -83],
          deps: [5],
		}, {
          name: 'Balance',
		  levels: 2,
          desc: ['Alteration spells last 50% longer.','Alteration spells last twice as long.'],
          req: [30,60],
          pos: [18, -30],
          deps: [0],
		}, {
          name: 'Backlash',
          desc: ['You reflect a portion of incoming melee damage back at your attacker while under the effects of a flesh spell.'],
          req: [40],
          pos: [20, -99],
          deps: [7],
		}, {
          name: 'Spell Sip',
          desc: ['You have a 25% chance to absorb the Magicka from incoming spells while under the effects of an armor spell.'],
          req: [90],
          pos: [54, -212],
          deps: [8],
		}, {
          name: 'Spell Shield',
          desc: ['You have 25% Magic Resistance while under the effects of an armor spell.'],
          req: [70],
          pos: [108, -136],
          deps: [8],
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'Artificer',
		  levels: 2,
          desc: ['Enchantments you create are 25% stronger.','Enchantments you create are 50% stronger.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Inscription',
          desc: ['Scrolls are twice as strong.'],
          req: [20],
          pos: [-33, -23],
          deps: [0],
		}, {
          name: 'Jewelry Enchanter',
          desc: ['New enchantments on jewelry are 25% stronger.'],
          req: [30],
          pos: [-18, -75],
          deps: [0],
		}, {
          name: 'Armor Enchanter',
          desc: ['New enchantments on armor, robes, and clothing are 25% stronger.'],
          req: [60],
          pos: [-38, -93],
          deps: [2],
		}, {
          name: 'Weapon Enchanter',
		  desc: ['New enchantments on weapons are 25% stronger.'],
          req: [80],
          pos: [-20, -114],
          deps: [3],
		}, {
          name: 'Elemental Enchanter',
          desc: ['Elemental enchantments are 25% stronger.'],
          req: [40],
          pos: [10, -80],
          deps: [0],
		}, {
          name: 'Corpus Enchanter',
          desc: ['Health, Magicka, and Stamina enchantments are 25% stronger.'],
          req: [70],
          pos: [30, -100],
          deps: [5],
		}, {
          name: 'Insightful Enchanter',
          desc: ['Skill enchantments are 25% stronger.'],
          req: [90],
          pos: [15, -120],
          deps: [6],
		}, {
          name: 'Twin Secrets',
          desc: ['You can place two enchantments on a single item.'],
          req: [100],
          pos: [-10, -204],
          deps: [4,7],
		}, {
          name: 'Conduit',
          desc: ['Staff enchantments cost 50% less charge.'],
          req: [40],
          pos: [28, -24],
          deps: [0],
		}, {
          name: 'Channeler',
          desc: ['Staves regenerate some of their lost charge over time.'],
          req: [70],
          pos: [33, -58],
          deps: [9],
		}, {
          name: 'Resonance',
          desc: ['Weapon enchantments cost 50% less charge.'],
          req: [30],
          pos: [35, -5],
          deps: [0],
		}, {
          name: 'Soul Siphon',
          desc: ['Enchanted weapons regenerate some of their lost charge when they land a killing blow.'],
          req: [60],
          pos: [52, -40],
          deps: [11],
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Craftsman',
		  levels: 2,
          desc: ['You can temper all items by one additional tier.','You can temper all items by two additional tiers.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Blacksmith',
          desc: ['You can temper all items by one additional tier.'],
          req: [30],
          pos: [-43, -34],
          deps: [0],
		}, {
          name: 'Armorer',
          desc: ['You can temper all items by one additional tier.'],
          req: [70],
          pos: [-75, -62],
          deps: [1],
		}, {
          name: 'Forgemaster',
          desc: ['You can temper all items by one additional tier.'],
          req: [90],
          pos: [-50, -80],
          deps: [2],
		}, {
          name: 'Basic Smithing',
          desc: ['You can create Steel and Leather items at any forge.'],
          req: [20],
          pos: [58, -28],
          deps: [0],
		}, {
          name: 'Journeyman Smithing',
          desc: ['You can create Dwarven, Steel Plate, and Scaled items at any forge.'],
          req: [40],
          pos: [104, -50],
          deps: [4],
		}, {
          name: 'Rare Smithing',
          desc: ['You can create Elven items at any forge.'],
          req: [60],
          pos: [61, -61],
          deps: [5],
		}, {
          name: 'Exotic Smithing',
          desc: ['You can create Glass items at any forge.'],
          req: [80],
          pos: [16, -61],
          deps: [6],
		}, {
          name: 'Intermediate Smithing',
          desc: ['You can create Nordic and Orcish items at any forge.'],
          req: [60],
          pos: [140, -68],
          deps: [5],
		}, {
          name: 'Advanced Smithing',
          desc: ['You can create Ebony items at any forge.'],
          req: [80],
          pos: [78, -82],
          deps: [8],
		}, {
          name: 'Mythic Smithing',
          desc: ['You can create Daedric and Dragon items at any forge.'],
          req: [100],
          pos: [-8, -82],
          deps: [7,9],
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'Defender',
		  levels: 2,
          desc: ['Heavy armor is 25% more effective.','Heavy armor is 50% more effective.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Conditioning',
		  levels: 2,
          desc: ['You gain 50% Health Regeneration when wearing three pieces of heavy armor.','You gain 100% Health Regeneration when wearing three pieces of heavy armor.'],
          req: [30,60],
          pos: [-40, -30],
          deps: [0],
		}, {
          name: 'Constitution',
		  levels: 2,
          desc: ['You take 25% less damage when power attacking, drawing a bow, or casting a spell while wearing three pieces of heavy armor.','You take 50% less damage when power attacking, drawing a bow, or casting a spell while wearing three pieces of heavy armor.'],
          req: [60,90],
          pos: [-79, -65],
          deps: [1],
		}, {
          name: 'Invincible',
          desc: ['Your Health regenerates twice as fast when you fall below half Health while wearing three pieces of heavy armor.'],
          req: [100],
          pos: [-106, -109],
          deps: [2],
		}, {
          name: 'Unstoppable',
          desc: ['Your armor weighs nothing and doesn\'t slow you down when wearing three pieces of heavy armor.'],
          req: [40],
          pos: [0, -31],
          deps: [0],
		}, {
          name: 'Juggernaut',
		  levels: 2,
          desc: ['You receive a 25% bonus to armor rating when wearing three pieces of heavy armor.','You receive a 50% bonus to armor rating when wearing three pieces of heavy armor.'],
          req: [20, 70],
          pos: [43, -30],
          deps: [0],
		}, {
          name: 'Immovable',
          desc: ['You resist 50% of incoming stagger when wearing three pieces of heavy armor.'],
          req: [40],
          pos: [88, -72],
          deps: [5],
		}, {
          name: 'Defiance',
          desc: ['You take 25% less damage when you fall below half Health while wearing three pieces of heavy armor.'],
          req: [80],
          pos: [118, -118],
          deps: [6],		
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Gladiator',
		  levels: 2,
          desc: ['Blocking is 25% more effective.','Blocking is 50% more effective.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Discipline',
          desc: ['Blocking with a shield reduces incoming arrow damage by 50%.'],
          req: [20],
          pos: [-30, -20],
          deps: [0],
		}, {
          name: 'Deflection',
          desc: ['Blocking with a shield reduces incoming magic damage by 50%.'],
          req: [40],
          pos: [-29, -72],
          deps: [1],
		}, {
          name: 'Determination',
          desc: ['Blocking with a shield has a 25% chance to negate all incoming damage.'],
          req: [70],
          pos: [-82, -117],
          deps: [2],
		}, {
          name: 'Deliverance',
          desc: ['Blocking with a shield slows down time during an enemy power attack.'],
          req: [90],
          pos: [-15, -148],
          deps: [3],
		}, {
          name: 'Defensive Maneuvers',
          desc: ['Blocking no longer slows your movement.'],
          req: [40],
          pos: [2, -42],
          deps: [0],
		}, {
          name: 'Deadly Bash',
		  levels: 2,
          desc: ['Bashing deals five times more damage.','Bashing deals ten times more damage.'],
          req: [30,70],
          pos: [36, -14],
          deps: [0],
		}, {
          name: 'Stunning Strike',
          desc: ['Power bashing reduces enemy weapon damage by 25% for 10 seconds.'],
          req: [60],
          pos: [40, -65],
          deps: [6],
		}, {
          name: 'Disorienting Blow',
          desc: ['Power bashing causes enemies to take 25% more damage for 10 seconds.'],
          req: [80],
          pos: [104, -101],
          deps: [7],
		}, {
          name: 'Battering Ram',
          desc: ['Power bashing an enemy below half Health has a chance to knock them to the ground.'],
          req: [100],
          pos: [39, -146],
          deps: [8],
        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'Champion',
		  levels: 2,
          desc: ['Two-handed weapons do 25% more damage.','Two-handed weapons do 50% more damage.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Deep Cuts',
		  levels: 2,
          desc: ['Greatswords have a 10% chance of doing critical damage.','Greatswords have a 20% chance of doing critical damage.'],
          req: [20,70],
          pos: [-30, -39],
          deps: [0],
		}, {
          name: 'Mortal Wound',
		  levels: 2,
          desc: ['Critical attacks with greatswords deal three times more damage.','Critical attacks with greatswords deal five times more damage.'],
          req: [40,90],
          pos: [-60, -79],
          deps: [1],
		}, {
          name: 'Warrior\'s Stance',
		  levels: 2,
          desc: ['Power attacks with Two-handed weapons deal 25% extra damage and have a chance to decapitate your enemies.','Power attacks with Two-handed weapons deal 50% extra damage and have a chance to decapitate your enemies.'],
          req: [30,60],
          pos: [1, -35],
          deps: [0],
		}, {
          name: 'Overpower',
          desc: ['Power attacks with Two-handed weapons deal 50% extra damage to targets that are power attacking, drawing a bow, or casting a spell.'],
          req: [40],
          pos: [-21, -81],
          deps: [3],
		}, {
          name: 'Cleave',
          desc: ['Power attacks with Two-handed weapons hit all targets in front of you.'],
          req: [70],
          pos: [4, -102],
          deps: [3],
		}, {
          name: 'Massacre',
          desc: ['Power attacks with Two-handed weapons deal 50% more damage to targets who fall below half Health.'],
          req: [80],
          pos: [27, -80],
          deps: [3],
		}, {
          name: 'Rampage',
          desc: ['Repeated power attacks with Two-handed weapons against a single target deal up to double damage.'],
          req: [100],
          pos: [6, -200],
          deps: [4,6]
		}, {
          name: 'Rip and Tear',
		  levels: 2,
          desc: ['Battleaxes deal extra damage over 5 seconds.','Battleaxes deal extra damage over 10 seconds.'],
          req: [20, 70],
          pos: [38, -47],
          deps: [0],
		}, {
          name: 'Rend and Rake',
		  levels: 2,
          desc: ['Battleaxes deal three times as much damage over time.','Battleaxes deal five times as much damage over time.'],
          req: [40,90],
          pos: [58, -74],
          deps: [8],
		}, {
          name: 'Armor Crusher',
		  levels: 2,
          desc: ['Warhammers reduce enemy Armor Rating by 150 for 10 seconds.','Warhammers reduce enemy Armor Rating by 300 for 10 seconds.'],
          req: [20, 70],
          pos: [46, -35],
          deps: [0],
		}, {
          name: 'Skull Cracker',
		  levels: 2,
          desc: ['Warhammers deal extra damage to Magicka and Stamina.','Warhammers deal even more damage to Magicka and Stamina.'],
          req: [40,90],
          pos: [88, -71],
          deps: [10],
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'Skirmisher',
		  levels: 2,
          desc: ['One-handed weapons do 25% more damage.','One-handed weapons do 50% more damage.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Quick Slash',
		  levels: 2,
          desc: ['Swords and daggers have a 10% chance of dealing critical damage.',' Swords and daggers have a 20% chance of dealing critical damage.'],
          req: [20, 70],
          pos: [-32, -40],
          deps: [0],
		}, {
          name: 'Precise Cuts',
		  levels: 2,
          desc: ['Critical attacks with swords and daggers deal three times more damage.','Critical attacks with swords and daggers deal five times more damage.'],
          req: [40,90],
          pos: [-55, -68],
          deps: [1],
		}, {
          name: 'Fighter\'s Stance',
		  levels: 2,
          desc: ['Power attacks with One-handed weapons deal 25% extra damage and have a chance to decapitate your enemies.','Power attacks with One-handed weapons deal 50% extra damage and have a chance to decapitate your enemies.'],
          req: [30,60],
          pos: [-2, -32],
          deps: [0],
		}, {
          name: 'Overrun',
          desc: ['Power attacks with One-handed weapons deal 50% extra damage to targets that are power attacking, drawing a bow, or casting a spell.'],
          req: [40],
          pos: [-24, -87],
          deps: [3],
		}, {
          name: 'Flourish',
          desc: ['You attack 20% faster with One-handed weapons.'],
          req: [70],
          pos: [-5, -101],
          deps: [3],
		}, {
          name: 'Execute',
          desc: ['Power attacks with One-handed weapons deal 50% more damage to targets who fall below half Health.'],
          req: [80],
          pos: [15, -87],
          deps: [3],
		}, {
          name: 'Onslaught',
          desc: ['Repeated power attacks with One-handed weapons against a single target deal up to double damage.'],
          req: [100],
          pos: [-7, -200],
          deps: [4,6],
		}, {
          name: 'Hack and Slash',
		  levels: 2,
          desc: ['War axes deal extra damage over 5 seconds.','War axes deal extra damage over 10 seconds.'],
          req: [20, 70],
          pos: [21, -42],
          deps: [0],
		}, {
          name: 'Carve and Spit',
		  levels: 2,
          desc: ['War axes deal three times as much damage over time.','War axes deal five times as much damage over time.'],
          req: [40,90],
          pos: [32, -72],
          deps: [8],
		}, {
          name: 'Armor Breaker',
		  levels: 2,
          desc: ['Maces reduce enemy Armor Rating by 150 for 10 seconds.','Maces reduce enemy Armor Rating by 300 for 10 seconds.'],
          req: [20, 70],
          pos: [39, -39],
          deps: [0],
		}, {
          name: 'Bell Ringer',
		  levels: 2,
          desc: ['Maces deal extra damage to Magicka and Stamina.','Maces deal even more damage to Magicka and Stamina.'],
          req: [40,90],
          pos: [58, -62],
          deps: [10],
		}, {
          name: 'Dual Flurry',
          desc: ['You attack 20% faster while dual wielding.'],
          req: [40],
          pos: [82, -18],
          deps: [0],
		}, {
          name: 'Dual Frenzy',
		  levels: 2,
          desc: ['Dual wield power attacks deal 25% more damage.','Dual wield power attacks deal 50% more damage.'],
          req: [70,90],
          pos: [79, -52],
          deps: [12],
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Marksman',
		  levels: 2,
          desc: ['Bows do 25% more damage.','Bows do 50% more damage.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Eagle Eye',
		  levels: 2,
          desc: ['Bows have a 10% chance of dealing critical damage.','Bows have a 20% chance of dealing critical damage.'],
          req: [20, 70],
          pos: [-52, -20],
          deps: [0],
		}, {
          name: 'Grim Focus',
		  levels: 2,
          desc: ['Critical attacks with bows deal three times more damage.','Critical attacks with bows deal five times more damage.'],
          req: [40,90],
          pos: [-84, -62],
          deps: [1],
		}, {
          name: 'Steady Hand',
          desc: ['Zooming in with a bow slows down time.'],
          req: [80],
          pos: [-114, -107],
          deps: [2],
		}, {
          name: 'Quick Draw',
		  levels: 2,
          desc: ['You draw your bow 20% faster.','You draw your bow 40% faster.'],
          req: [30, 70],
          pos: [-18, -30],
          deps: [0],
		}, {
          name: 'Power Shot',
          desc: ['Bows have a 50% chance to stagger enemies.'],
          req: [40],
          pos: [-42, -74],
          deps: [4],
		}, {
          name: 'Ranger',
          desc: ['You move faster with a drawn bow.'],
          req: [60],
          pos: [-72, -124],
          deps: [5],
		}, {
          name: 'Bullseye',
          desc: ['Bows deal guaranteed critical damage to enemies at full Health.'],
          req: [100],
          pos: [-109, -187],
          deps: [3,6],
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
      perks: [
        {
          name: 'Scout',
		  levels: 2,
          desc: ['Light armor is 25% more effective.','Light armor is 50% more effective.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Agility',
		  levels: 2,
          desc: ['You gain 50% Stamina Regeneration when wearing three pieces of light armor.','You gain 100% Stamina Regeneration when wearing three pieces of light armor.'],
          req: [30, 60],
          pos: [-35, -35],
          deps: [0],
		}, {
          name: 'Athletics',
		  levels: 2,
          desc: ['You move 10% faster when wearing three pieces of light armor.','You move 20% faster when wearing three pieces of light armor.'],
          req: [60, 90],
          pos: [-9, -72],
          deps: [1],
		}, {
          name: 'Second Wind',
          desc: ['Your Stamina regenerates twice as fast when you fall below half Stamina while wearing three pieces of light armor.'],
          req: [100],
          pos: [-43, -110],
          deps: [2],
		}, {
          name: 'Unhindered',
          desc: ['Your armor weighs nothing and doesn\'t slow you down when wearing three pieces of light armor.'],
          req: [40],
          pos: [0, -40],
          deps: [0],
		}, {
          name: 'Specialist',
		  levels: 2,
          desc: ['You recieve a 25% armor bonus when wearing three pieces of light armor.','You recieve a 50% armor bonus when wearing three pieces of light armor.'],
          req: [20,70],
          pos: [34, -26],
          deps: [0],
		}, {
          name: 'Endurance',
          desc: ['You spend 25% less Stamina when power attacking or drawing a bow while wearing three pieces of light armor.'],
          req: [40],
          pos: [18, -71],
          deps: [5],
		}, {
          name: 'Adrenaline',
          desc: ['You move 25% faster when sprinting while wearing three pieces of light armor.'],
          req: [80],
          pos: [52, -105],
          deps: [6],
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'Agent',
		  levels: 2,
          desc: ['You are 25% harder to detect when sneaking.','You are 50% harder to detect when sneaking.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Trespasser',
          desc: ['You no longer trigger traps, and you can execute a silent roll while sneaking.'],
          req: [30],
          pos: [-53, -22],
          deps: [0],
		}, {
          name: 'Hidden Threat',
          desc: ['You are twice as hard to detect while standing still.'],
          req: [60],
          pos: [-59, -62],
          deps: [1],
		}, {
          name: 'Infiltrator',
          desc: ['You move 25% faster while sneaking.'],
          req: [80],
          pos: [-16, -85],
          deps: [2],
		}, {
          name: 'Shadow Warrior',
          desc: ['Once every 10 seconds, you can sneak in combat to turn invisible for 5 seconds.'],
          req: [100],
          pos: [15, -131],
          deps: [3],
		}, {
          name: 'Silent Casting',
          desc: ['Your spells are silent to others.'],
          req: [20],
          pos: [-28, -30],
          deps: [0],
		}, {
          name: 'Shadow Casting',
		  levels: 2,
          desc: ['Damage-dealing spells are 50% stronger while sneaking and undetected.','Damage-dealing spells are twice as strong while sneaking and undetected.'],
          req: [40,70],
          pos: [-30, -60],
          deps: [5],
		}, {
          name: 'Deadly Aim',
		  levels: 2,
          desc: ['Sneak attacks with bows deal 25% more damage.','Sneak attacks with bows deal 50% more damage.'],
          req: [30,60],
          pos: [-3, -47],
          deps: [0],
		}, {
          name: 'Merciless',
          desc: ['Unarmed sneak attacks and sneak attacks with melee weapons deal 50% extra damage.'],
          req: [20],
          pos: [21, -25],
          deps: [0],
		}, {
          name: 'Backstab',
          desc: ['Sneak attacks with one-handed weapons deal twice as much damage.'],
          req: [40],
          pos: [40, -49],
          deps: [8],
		}, {
          name: 'Assassin\'s Blade',
		  levels: 2,
          desc: ['Sneak attacks with daggers deal three times damage.','Sneak attacks with daggers deal six times damage.'],
          req: [70,90],
          pos: [18, -80],
          deps: [9],
        }
      ]
    }, {
      name: 'Hand to Hand',
      cname: 'lockpicking',
      perks: [
        {
          name: 'Pugilist',
		  levels: 2,
          desc: ['Unarmed attacks deal 25% more damage.','Unarmed attacks deal 50% more damage.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Light Feet',
		  levels: 2,
          desc: ['You move 10% faster while unarmed.','You move 20% faster while unarmed.'],
          req: [20,70],
          pos: [-42, -38],
          deps: [0],
		}, {
          name: 'Brawler\'s Stance',
		  levels: 2,
          desc: ['Unarmed power attacks deal 25% more damage.','Unarmed power attacks deal 50% more damage.'],
          req: [30,60],
          pos: [-1, -47],
          deps: [0],
		}, {
          name: 'Overwhelm',
          desc: ['Unarmed power attacks deal 50% extra damage to targets who are power attacking, drawing a bow, or casting a spell.'],
          req: [40],
          pos: [-78, -111],
          deps: [2],
		}, {
          name: 'Finisher',
          desc: ['Unarmed power attacks deal 50% more damage to targets who fall below half Health.'],
          req: [80],
          pos: [-42, -180],
          deps: [3],
		}, {
          name: 'Brace',
          desc: ['You resist 25% of all incoming damage while unarmed.'],
          req: [70],
          pos: [-2, -122],
          deps: [2],
		}, {
          name: 'Momentum',
		  levels: 2,
          desc: ['Unarmed power attacks cost 25% less Stamina.','Unarmed power attacks cost 50% less Stamina.'],
          req: [40,70],
          pos: [70, -109],
          deps: [2],
		}, {
          name: 'Knockout',
          desc: ['Unarmed power attacks have a chance to knock down enemies when they fall below half Health.'],
          req: [100],
          pos: [36, -180],
          deps: [6],
		}, {
          name: 'Heavy Blows',
		  levels: 2,
          desc: ['Unarmed attacks deal Stamina damage.','Unarmed attacks deal extra Stamina damage and prevent enemies from regenerating Stamina for 10 seconds.'],
          req: [40,90],
          pos: [40, -37],
          deps: [0],
        }
      ]
    }, {
      name: 'Security',
      cname: 'pickpocket',
      perks: [
        {
          name: 'Collector',
		  levels: 2,
          desc: ['You are 25% more likely to succeed at lockpicking and pickpocketing.','You are 50% more likely to succeed at lockpicking and pickpocketing.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Golden Touch',
          desc: ['You find more gold when opening chests and picking pockets.'],
          req: [20],
          pos: [-13, -25],
          deps: [0],
		}, {
          name: 'Poisoner',
		  levels: 2,
          desc: ['Poisons that you place in enemy pockets are 50% stronger.','Poisons that you place in enemy pockets are twice as strong.'],
          req: [30,60],
          pos: [-60, -34],
          deps: [1],
		}, {
          name: 'Sleight of Hand',
		  levels: 2,
          desc: ['You are 50% more likely to succeed against targets who are not detecting you.','You are twice as likely to succeed against targets who are not detecting you.'],
          req: [30,70],
          pos: [-37, -70],
          deps: [1],
		}, {
          name: 'Misdirection',
          desc: ['Your maximum chance to succeed at pickpocketing is increased to 100% '],
          req: [80],
          pos: [-56, -108],
          deps: [3],
		}, {
          name: 'Perfect Touch',
          desc: ['You can pickpocket equipped weapons, armor, and jewelry.'],
          req: [100],
          pos: [-75, -145],
          deps: [4],
		}, {
          name: 'Locksmith',
          desc: ['Your lockpicks start closer to the opening position.'],
          req: [40],
          pos: [12, -52],
          deps: [1],
		}, {
          name: 'Dungeon Delver',
          desc: ['You find more rare loot in dungeons.'],
          req: [60],
          pos: [49, -89],
          deps: [6],
		}, {
          name: 'Treasure Hunter',
          desc: ['You have a chance to find valuable treasure in any chest.'],
          req: [90],
          pos: [65, -107],
          deps: [7],
		}, {
          name: 'Deep Pockets',
		  levels: 2,
          desc: ['Your Carry Weight is increased by 50.','Your Carry Weight is increased by 100.'],
          req: [40,80],
          pos: [30, -34],
          deps: [1],		
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Merchant',
		  levels: 2,
          desc: ['Buying and selling prices are 25% better.','Buying and selling prices are 50% better.'],
          req: [10,50],
          pos: [0, 0],
        }, {
          name: 'Supplier',
          desc: ['You can sell items to general goods merchants, innkeepers, hunters, miners and farmers for better prices.'],
          req: [20],
          pos: [-32, -20],
          deps: [0],
		}, {
          name: 'Metallurgist',
          desc: ['You can sell items to blacksmiths, fletchers and jewelers for better prices.'],
          req: [30],
          pos: [-54, -50],
          deps: [1],
		}, {
          name: 'Specialist Seller',
          desc: ['You can sell items to mages, tailors and alchemists for better prices.'],
          req: [50],
          pos: [-52, -97],
          deps: [2],
		}, {
          name: 'Investor',
          desc: ['Every merchant in the world gains 500 gold for bartering. You can invest 500 gold with a shopkeeper to increase their available gold by 1000 permanently.'],
          req: [70],
          pos: [-35, -142],
          deps: [3],
		}, {
          name: 'Privileged Customer',
          desc: ['Merchants you invested in will sell valuable, exclusive new items.'],
          req: [100],
          pos: [-2, -192],
          deps: [4],
		}, {
          name: 'Khajiit\'s Connection',
          desc: ['You can sell items to Khajiit\'s caravans for better but still relatively low prices.'],
          req: [40],
          pos: [-16, -54],
          deps: [1],
		}, {
          name: 'Renowned Thief',
          desc: ['You can sell items to fences for better prices.'],
          req: [60],
          pos: [-12, -92],
          deps: [6],
		}, {
          name: 'Black Market',
          desc: ['You can sell stolen items to any merchant.'],
          req: [80],
          pos: [-10, -130],
          deps: [7],
		}, {
          name: 'Persuasion',
          desc: ['Persuasion and intimidation attempts are much more likely to succeed.'],
          req: [30],
          pos: [18, -60],
          deps: [0],
		}, {
          name: 'Bribery',
          desc: ['You can bribe guards to ignore crimes.'],
          req: [60],
          pos: [17, -150],
          deps: [9],
		}, {
          name: 'Bounty Hunter',
          desc: ['Earn 50% more gold from bounty quests rewards.'],
          req: [40],
          pos: [42, -113],
          deps: [9],
		}, {
          name: 'Stormcrown',
		  levels: 2,
          desc: ['Your damage-dealing shouts are 25% stronger.','Your damage-dealing Shouts are twice as strong.'],
          req: [30,70],
          pos: [52, -35],
          deps: [0],
		}, {
          name: 'Stormcrown',
		  levels: 2,
          desc: ['Your Shout cooldown is reduced by 25%.','Your Shout cooldown is reduced by 50%.'],
          req: [60,90],
          pos: [65, -88],
          deps: [12],
        }
      ]
    }
  ];

}).call(this);
