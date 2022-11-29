const EOS = {
	name: "EOS",
	shortDec: "Powerful and Bold, Created for War but no Longer Destined for it",
	desc: "As the world was crumbling, humanity got desperate. The Fae had returned, the artificial intelligence we had all come to rely on was in open rebellion and nearly every government was failing. When the solution of gene manipulated monstrosities was developed it was quickly embraced. Using only slightly different versions of the same technique, each government began making their own. These nearly unstoppable warriors were quite effective as they healed injuries at rates that seemed impossible, possessed extreme strength and durability, and were still capable of wielding magic about as well as anybody else. The only thing their makers didn’t plan for was free will. The final nail in the coffin for the power structures that used them was these killing machines discovering they could start their own families and a new species was born.",
	stats: {
		statsBase: {
			STR: 6,
			PHY: 6,
			SPD: 5,
			AGL: 2,
			CRD: 3,
			MRK: 3,
			INT: 3,
			PER: 3,
			ESS: 3,
		},
		statsMerc: {
			STR: 7,
			PHY: 8,
			SPD: 6,
			AGL: 4,
			CRD: 5,
			MRK: 4,
			INT: 4,
			PER: 4,
			ESS: 4,
		},
		statsExemplar: {
			STR: 9,
			PHY: 9,
			SPD: 6,
			AGL: 6,
			CRD: 6,
			MRK: 6,
			INT: 5,
			PER: 5,
			ESS: 6,
		},
		statsWS: {
			STR: 10,
			PHY: 10,
			SPD: 6,
			AGL: 6,
			CRD: 7,
			MRK: 7,
			INT: 7,
			PER: 6,
			ESS: 7,
		},
	},
	bonuses: {
		1: {
			name: "War Born",
			desc: "Heal Hit points (HP) equal to your PHY stat one round later, cost 1 Fate. If you would gain negative condition counters (Poison, Pathogen, Radiation, and Stun) you reduce the amount by -1 to a minimum of 0",
		},
		2: {
			name: "Impressive Size",
			desc: "This character's base size is 1.25” and can wield non-big 2 handed weapons in one hand except for Archery ranged weapons. To make a weapon your size add the Big Weapon Customization. Weapons you use that are not big get a -1 Ease of Use(EoU) penalty to ACC.",
		},
	},
	speciesAbilities: {
		1: {
			name: "Tailored Purpose",
			desc: "Choose 1: Marine +1 to AGL and Max AGL, can breath and speak in any water and may Surge Swim Skill rolls. OR Shock Trooper for each Injury Counter you are suffering from, gain +1 ACC and Damage on melee attacks, and gain half the amount healed by your war born ability again on the turn after the original effect happens. OR Subterranean you gain Thermal Vision and +1 to your MRK and maximum possible MRK stat points. (This ability must be taken at character creation)",
		},
		2: {
			name: "Crafted leader",
			desc: "You may use PHY in place of INT for the Influence skill and improve the effects of the Inspire skill action by +1 (to a max of +3 on its next Attack or Skill roll and +3 WILL for 1 round) and the Intimidate skill action by -1 (to a max of -3 on its next Attack or Skill roll and -3 WILL for 1 round).",
		},
	},
};

export default EOS;
