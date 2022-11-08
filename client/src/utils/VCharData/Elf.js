const Elf = {
	name: "Elf",
	stats: {
		statsBase: {
			STR: 4,
			PHY: 5,
			SPD: 5,
			AGL: 4,
			CRD: 3,
			MRK: 3,
			INT: 3,
			PER: 4,
			ESS: 3,
		},
		statsMerc: {
			STR: 6,
			PHY: 6,
			SPD: 6,
			AGL: 5,
			CRD: 5,
			MRK: 5,
			INT: 4,
			PER: 5,
			ESS: 4,
		},
		statsExemplar: {
			STR: 7,
			PHY: 8,
			SPD: 7,
			AGL: 6,
			CRD: 6,
			MRK: 6,
			INT: 6,
			PER: 6,
			ESS: 6,
		},
		statsWS: {
			STR: 8,
			PHY: 8,
			SPD: 7,
			AGL: 7,
			CRD: 7,
			MRK: 7,
			INT: 7,
			PER: 7,
			ESS: 8,
		},
	},
	bonuses: {
		1: {
			name: "Do Anything",
			desc: "Choose any stat, it and its max value go up by one.",
		},
		2: {
			name: "Some of Everything",
			desc: "Choose one additional style bonus from this list, you do not need to have the style group as a prerequisite: Mental Focus, Crushing Momentum, Awareness, Keen sight.",
		},
	},
	speciesabilities: {
		1: {
			name: "Practiced Flexibility",
			desc: "Gain access to an ability group not available to your class choices. Also choose 2 skills to improve by one, the max for these skills also improves by one.",
		},
		2: {
			name: "Hyper-Versatile",
			desc: "As a snap action you can change your some of everything ability to any other style bonus on the list.",
		},
	},
};

export default Elf;
