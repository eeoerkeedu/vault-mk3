const Dwarf = {
	name: "Dwarf",
	stats: {
		statsBase: {
			STR: 5,
			PHY: 6,
			SPD: 4,
			AGL: 3,
			CRD: 3,
			MRK: 3,
			INT: 3,
			PER: 4,
			ESS: 3,
		},
		statsMerc: {
			STR: 6,
			PHY: 7,
			SPD: 5,
			AGL: 5,
			CRD: 5,
			MRK: 4,
			INT: 5,
			PER: 5,
			ESS: 4,
		},
		statsExemplar: {
			STR: 7,
			PHY: 9,
			SPD: 6,
			AGL: 6,
			CRD: 6,
			MRK: 5,
			INT: 7,
			PER: 6,
			ESS: 6,
		},
		statsWS: {
			STR: 8,
			PHY: 10,
			SPD: 6,
			AGL: 7,
			CRD: 7,
			MRK: 6,
			INT: 8,
			PER: 7,
			ESS: 7,
		},
	},
	bonuses: {
		1: {
			name: "Rugged Adventurers",
			desc: "Dwarves gain a +2  to Willpower, dwarves may spend a fate to Surge a Willpower roll. Dwarves ignore movement penalties from armor.",
		},
		2: {
			name: "Industrious",
			desc: "Choose 2: Craft, Demo, Hack, Lore, Repair, First Aid, or Pilot. Gain 1 Skill Point in those skills and the Max number of points you can have in those skills improves by one.",
		},
	},
	speciesabilities: {
		1: {
			name: "Itching for a Fight",
			desc: "When INIT is rolled for a scene you may make a normal move. You gain +1 DEF and AV for the first round of combat.",
		},
		2: {
			name: "Vexing Stubbornness",
			desc: "When you are targeted by a WILL ability you may roll an extra die and drop the die of your choice. If you win the roll and crit, the effect is applied to the character who originally targeted you.",
		},
	},
};

export default Dwarf;
