const Changeling = {
	name: "Changeling",
	shortDec: "Rare and Unknowable Shapeshifters",
	desc: "Not many Fae survived the Age of Iron in this realm but changelings often found a way to prosper. Some took the shape of humanoid creatures who were seen just enough to boost tourism where they lived, while others made dangerous plays for the riches of the dying wealthy. These people are still paying the price of having stayed though and they struggle more than anybody to connect to either their magical origins or the sprouting new technologies.",
	stats: {
		statsBase: {
			STR: 4,
			PHY: 5,
			SPD: 5,
			AGL: 5,
			CRD: 3,
			MRK: 3,
			INT: 3,
			PER: 4,
			ESS: 2,
		},
		statsMerc: {
			STR: 4,
			PHY: 6,
			SPD: 6,
			AGL: 6,
			CRD: 4,
			MRK: 4,
			INT: 5,
			PER: 5,
			ESS: 4,
		},
		statsExemplar: {
			STR: 7,
			PHY: 7,
			SPD: 7,
			AGL: 7,
			CRD: 6,
			MRK: 6,
			INT: 6,
			PER: 7,
			ESS: 5,
		},
		statsWS: {
			STR: 8,
			PHY: 7,
			SPD: 7,
			AGL: 8,
			CRD: 7,
			MRK: 7,
			INT: 7,
			PER: 9,
			ESS: 6,
		},
	},
	bonuses: {
		1: {
			name: "Survivors Instinct",
			desc: "When you dodge an attack you may apply the total bonus to either DEF or AV. In addition, you gain Diehard: Whenever you take an injury, roll 1D6 and if you roll a 5-6 ignore the entire injury including the injury counter is ignored.",
		},
		2: {
			name: "A Thousand Faces",
			desc: "You may change any of your appearance entries as a snap action, any other generic face requires little effort, however if you want to mimic someone you have touched the skin of, you must spend a fate and make a deception roll, this use will only last 1 minute for every 5 you get on the roll total and others may get rolls against that skill roll to notice something being off.",
		},
	},
	speciesAbilities: [
		{
			name: "Fate Twister",
			desc: "When you are critically hit by an enemy you gain the fate instead of the attacker. Gain 2 fate if you are critically missed.",
		},
		{
			name: "Trickster Magic",
			desc: "The range of A Thousand Faces extends to 5m and only requires eye contact. If your deception roll is 18 or better you make swap positions with your target.",
		},
	],
};

export default Changeling;
