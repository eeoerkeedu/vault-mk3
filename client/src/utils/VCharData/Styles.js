const Mystic = {
	name: "Mystic",
	benefit:
		"You gain a magic stat equal to your Essence (ESS) minus any Cyberware points you have spent, at the start of each of your turns you generate Magic points (MP) equal to this stat. You must choose at least one of the awakened classes (Shaman, Mage, Adept) at character creation, these classes can not be taken if you do not have this style.",
	bonuses: {
		1: {
			name: "Knowledge is Power",
			desc: "You learn one more spell of cost 3 MP or less from your available spell lists.",
		},
		2: {
			name: "Honed Sorcery",
			desc: "Spell attack rolls gain honed (Roll an additional die and drop the lowest).",
		},
		3: {
			name: "Readied Spell",
			desc: "After INIT is rolled but before the first turn you may cast one maintenance spell without paying its MP cost. You must still pay its maintenance cost as normal, including on your first turn. ",
		},
		4: {
			name: "Snapcaster",
			desc: "Gain one additional snap action that may only be used for spellcasting.",
		},
		5: {
			name: "Deepened Control",
			desc: "Increase the size of your domain by 2m. If an adept with this bonus spends any MP to recharge their protective aura they gain an additional 1D3 Hit Points (HP) to that aura at the end of that turn.",
		},
		6: {
			name: "Mental Focus",
			desc: "You count as 2 INT higher for Willpower, HP, and max spells known.",
		},
		7: {
			name: "Silencing Strike",
			desc: "When you hit a target with a melee attack or spell you may spend 1 Magic point (MP) to give the target the Silenced condition for one round. (Silenced: A Silenced character cannot speak, use influence abilities or cast spells.)",
		},
		8: {
			name: "Thunder Strike",
			desc: "When you hit with a melee attack or spell you may spend 1 Magic point (MP), if you do those targets are pushed 1D3m away from you, if this was a Critical hit those targets are also knocked prone.",
		},
	},
};

const Titan = {
	name: "Titan",
	benefit:
		"Each time you suffer damage, suffer an injury or miss an attack roll (after any rerolls) you gain a Rage Point (RP). You may bank rage points up to your ESS stat at the end of your turns and lose the rest. All rage points are lost when combat ends.You may spend a Rage Point (RP) at the start of your turn to ignore the Broken condition until the start of your next turn. As long as you have any Rage Points your melee attacks do an additional die of damage.",
	bonuses: {
		1: {
			name: "The Best Defense",
			desc: "When an enemy moves and ends its movement within your melee range you may spend a fate or two Rage Points (RP) to make a melee attack against that enemy.",
		},
		2: {
			name: "Monstrous Vault",
			desc: "As a snap action if you have one or more Rage Points you may Shunt yourself within 3m of your current position. You cannot charge this turn, Enclosed spaces block this movement. (Shunt- this type of movement ignores cheap shots, terrain penalties, and can be vertical or horizontal)",
		},
		3: {
			name: "Die Hard",
			desc: "When you suffer an Injury roll a D6 on a 5-6 ignore it including the injury counter.",
		},
		4: {
			name: "Too Angry to Die",
			desc: "You may spend 1 Rage Point to prevent 1D3 damage as a Damage Reaction.",
		},
		5: {
			name: "Gene-Hacked",
			desc: "On your turn, you may spend a Fate or 3 Rage Points to regain 1D6+1 Hit points (HP) at the start of your next turn. ",
		},
		6: {
			name: "Rage Fueled",
			desc: "You may spend 2 Rage Points to Surge a coordination (CRD) based ACC roll. (Surged- add an additional die to your roll, does not stack with other surge effects)",
		},
		7: {
			name: "Juggernaut",
			desc: "On your turn or as a Damage Reaction Gain: +2 AV, you cannot be Shunted, Pushed or Knocked Prone until the start of your next turn, cost 1 Fate or 3 Rage points.",
		},
		8: {
			name: "Crushing Momentum",
			desc: "Your charge attacks gain +2 Damage, If your charge drops your target you may continue your movement, this can be used on terrain like walls and doors.",
		},
	},
};

const Slayer = {
	name: "Slayer",
	benefit:
		"You gain one additional attack during your attack action. Note: All attacks must be taken as part of the attack action before using your next action. In addition, some weapon rules like Wrecker and Single Shot (SS) will still limit the number of attacks you can take with those weapons during an Attack Action.",
	bonuses: {
		1: {
			name: "Honed Accuracy",
			desc: "Choose 1 Weapon Rank Group (I.E. Pistols or Light weapons), all attack rolls using that weapon rank group gain honed. (Honed: Roll an additional die and drop the lowest)",
		},
		2: {
			name: "Footwork",
			desc: "Once per turn, during your combat action, after you have fully completed an attack that hits its target, you may make a 2m move, this movement is immune to Cheap Shots. (Cheap Shot: leaving an enemies Melee range grants them a Rear Strike attack with Honed damage)",
		},
		3: {
			name: "Whirlwind",
			desc: "Once per turn you may spend a fate to attack each enemy in your melee range, even if those enemies are in your rear arc who would not normally be in your melee range.",
		},
		4: {
			name: "Untouchable",
			desc: "You may spend a fate to dodge instead of a normal dodge use and when you do the dodge bonus is improved by +2 for this attack and you gain +4 AV against all area damage until the end of your next turn. ",
		},
		5: {
			name: "Steady Shot",
			desc: "When firing full auto you may sacrifice any unused attacks to gain Recoil comp 1 and +1 DMG for each attack sacrificed this way.",
		},
		6: {
			name: "Unreal Quickness",
			desc: "When initiative is rolled you may spend one fate to Automatically go first and gain an extra move action on that turn. ",
		},
		7: {
			name: "Deft Assault",
			desc: "Your Charge movement does not need to be in a straight line but still requires LoS to the target and must end directly facing that target. (Normally charge movement must be in a straight line.) Also if you move only half of your Move distance, you count as having Aimed at the end of that movement. (Normally you must sacrifice your move action to aim.)",
		},
		8: {
			name: "Keen Sight",
			desc: "All PER based skill rolls are Surged. (Surged- add an additional die to your roll, does not stack with other surge effects)",
		},
	},
};

const Strategist = {
	name: "Strategist",
	benefit:
		"When you gain this style you may gain one of its bonuses. Whenever you gain another bonus in this group you may exchange a bonus you have gained from taking this style for another of its bonuses.",
	bonuses: {
		1: {
			name: "Leadership",
			desc: "Living allies (Allies- always includes you) within your Influence  (INF) range gain +1 to attack rolls (ACC) and damage rolls (DMG)",
		},
		2: {
			name: "Practice Drills",
			desc: "At the start of every combat round you may swap the initiative position of two willing Allies within your INF range.",
		},
		3: {
			name: "Logistics",
			desc: "Allies in your Influence range can move through each other without movement penalties. You may spend a snap action to gain evasive or trailblazer for one turn instead of spending a fate.",
		},
		4: {
			name: "Tech Support",
			desc: "Strategist and INF bonuses/abilities can be applied to any drone an ally controls. ",
		},
		5: {
			name: "Coordinated Fire",
			desc: "While in your Influence range allies ignore the cover bonus (+2 DEF) granted by allies in the path of their ranged and magic attacks when attacking enemies. ",
		},
		6: {
			name: "Awareness",
			desc: "All your INIT rolls are Surged, enemies gain no bonuses for Rear Strikes (+2 ACC while you are completely in the rear arc of your target) that target you.",
		},
		7: {
			name: "Hobbyist",
			desc: "Choose 3 skills, when you roll a skill, roll twice and choose the result you want for these skill rolls.",
		},
		8: {
			name: "Intimidating Presence",
			desc: "While in your Influence range and line of sight (LOS) living underling enemies suffer -1 on WILL rolls and attack (ACC) rolls.",
		},
		9: {
			name: "Strategic Dominance",
			desc: "When INIT is rolled you may spend a fate to double your Influence  (INF) range for the entire combat. When you take this bonus you gain one point in and to the max of Influence.",
		},
	},
};
