const Dwarf = {
	name: "Dwarf",
	shortDec: "Tough and Stubborn, Brilliant and Determined",
	desc: "Scores of Dwarven clans also used the first portals while they were open to enter our realm in hopes of finding hard to get to or undervalued resources. Dwarven lore keepers still don't understand how so many of our notions about them are accurate as no dwarf has ever had a resource claim or even record of travel to this realm. Even more disturbingly shortly after arriving, dwarves lost all contact with their home realm, leading to the belief that something terrible may have happened and the only dwarves left are the ones scattered among the countless realms. These dauntless adventurers still love to explore, create, and trade. The technology, knowledge, and experience with Fae they brought with them was more than enough reason for them to be welcomed into human cities and now those advantages make them highly sought mercenaries.",
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
	speciesAbilities: {
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
