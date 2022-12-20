const Elf = {
	name: "Elf",
	shortDec: "Graceful Beings with a Strong Connection to Essence",
	desc: "Elves are born from humans, specifically from humans with at least one mystic parent. These children are revered by human society in the vast majority of human cultures. Being born from magic doesn't necessarily mean that they all embrace it though, as many find that technology also has a lot to offer them. The traits all elves do seem to share is a quickness, grace, and intuition that does always seem just a little unnatural.",
	stats: {
		statsBase: {
			STR: 3,
			PHY: 4,
			SPD: 6,
			AGL: 4,
			CRD: 3,
			MRK: 3,
			INT: 3,
			PER: 4,
			ESS: 4,
		},
		statsMerc: {
			STR: 4,
			PHY: 5,
			SPD: 7,
			AGL: 6,
			CRD: 4,
			MRK: 5,
			INT: 5,
			PER: 5,
			ESS: 5,
		},
		statsExemplar: {
			STR: 6,
			PHY: 6,
			SPD: 8,
			AGL: 6,
			CRD: 6,
			MRK: 7,
			INT: 6,
			PER: 6,
			ESS: 7,
		},
		statsWS: {
			STR: 7,
			PHY: 7,
			SPD: 8,
			AGL: 7,
			CRD: 7,
			MRK: 7,
			INT: 7,
			PER: 7,
			ESS: 9,
		},
	},
	bonuses: [
		{
			name: "Wiry",
			desc: "+1 DEF, and can Dodge even when Knocked Prone, Grappled or Blinded",
		},
		{
			name: "Charisma",
			desc: "Choose 2: Influence, Deceive, Detect, Stealth, Investigate, or Negotiate. Gain 1 point in those skills and the Max number of points you can have in those skills improves by one.",
		},
	],
	speciesAbilities: [
		{
			name: "Athletically Gifted",
			desc: "You gain +1 point in STR, Climb, Run, and Swim, the Max number of points you can have in those Stats/skills improves by one. (This ability must be taken at character creation)",
		},
		{
			name: "Magically Gifted",
			desc: "The first spell you cast each turn has its Magic Point (MP) cost reduced by -1 and range increased by +2m.",
		},
	],
};

export default Elf;
