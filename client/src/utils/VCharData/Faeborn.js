const Faeborn = {
	name: "Faeborn",
	shortDec: "Small and Varied, Gifted with Magic and Flight",
	desc: "Not all the Fae who came through the first portals were bloodthirsty monsters looking for revenge. Some came here out of curiosity and quickly took humanity’s side after watching so much life extinguished so casually. There are always new wild conspiracy theories about what this species' true goal might be. Strangely what they find to be relatively minor genetic variances we perceive as either classic images of beauty or hauntingly horrible terrors. The wings, innate ability to use magic, and supernatural reflexes make these Fae valuable team members in nearly every role, but asking them to take a hit for you might not be a good idea.",
	stats: {
		statsBase: {
			STR: 2,
			PHY: 3,
			SPD: 5,
			AGL: 6,
			CRD: 3,
			MRK: 3,
			INT: 4,
			PER: 5,
			ESS: 3,
		},
		statsMerc: {
			STR: 4,
			PHY: 4,
			SPD: 6,
			AGL: 7,
			CRD: 4,
			MRK: 4,
			INT: 5,
			PER: 7,
			ESS: 5,
		},
		statsExemplar: {
			STR: 5,
			PHY: 5,
			SPD: 7,
			AGL: 9,
			CRD: 5,
			MRK: 5,
			INT: 7,
			PER: 8,
			ESS: 7,
		},
		statsWS: {
			STR: 5,
			PHY: 6,
			SPD: 9,
			AGL: 10,
			CRD: 6,
			MRK: 6,
			INT: 7,
			PER: 9,
			ESS: 8,
		},
	},
	bonuses: [
		{
			name: "Winged Flight",
			desc: "This Character can ignore characters and terrain and can move up and down as easily as side to side while moving. This does not make you immune to cheapshots and you must have space to “land” (hovering at about shoulder height) between movements. You may choose to not land for a number of turns equal to your STR score per mission.",
		},
		{
			name: "Innate Magic",
			desc: "Each Faeborn has a single spell they can cast; this spell is chosen from the 1 MP cost spells of any school or totem. Casting your Innate Magic spell costs 1 fate, can be done once per turn, and cannot be Surged with additional fate or MP even if you are a mystic. Cyberware does not affect the effective magic rating for this spell and if the duration is Maintenance the duration is 1D3 rounds instead. Casting this way does not use a snap action.",
		},
		{
			name: "Small Stature",
			desc: "This character's base size is Small, .75”. Normal sized one-handed weapons may be used by Faeborn in two hands at no penalty. Two-handed weapons need to be made miniature to be used by a Faeborn. Miniature weapons receive -1 DMG.",
		},
	],
	speciesAbilities: [
		{
			name: "Athletically Gifted",
			desc: "You gain a second innate spell and when you use Innate magic you may cast both spells.",
		},
		{
			name: "Cupid's Arrow",
			desc: "Use your AGL instead of STR for archery based requirements and ignore the -1 DMG from miniature on bows.",
		},
	],
};

export default Faeborn;
