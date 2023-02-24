const mongoose = require("mongoose");
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
	charEXP: { type: Number, default: 0 },
	// charTier: {},
	charStats: [{ type: String }],
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

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
