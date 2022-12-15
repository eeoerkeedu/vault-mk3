const { Schema } = require("mongoose");

const characterSchema = new Schema({
	charName: { type: String },
	charStyle: { type: String },
	charSpecies: { type: String },
	charClasses: [
		{
			type: String,
		},
	],
	// charAbilities: [{}],
	// charEXP: { type: Number, default: 0 },
	// charTier: {},
	// charStats: {},
	// charCompStats: [{}],
	// charSkills: [{}],
	// charArmor: [{}],
	// charEoU: [{}],
	// charMoves: [{}],
	// charWpnRanks: [{}],
	// charBitz: [{}],
	// charContacts: [{}],
	// charInventory: [{}],
	// charCyberwear: [{}],
	// charVehicles: [{}],
	// charDrones: [{}],
	// charSpells: [{}],
	// charCompanions: [{}],
	// charAttacks: [{}],
});

module.exports = characterSchema;
