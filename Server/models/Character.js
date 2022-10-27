const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
	charName: {},
	charAppearance: { type: Array, required: true },
	charStyle: [{}],
	charSpecies: {},
	charClasses: [{}],
	charAbilities: [{}],
	charEXP: { type: Interger, default: 0 },
	charTier: {},
	charStats: {},
	charCompStats: [{}],
	charSkills: [{}],
	charArmor: [{}],
	charEoU: [{}],
	charMoves: [{}],
	charWpnRanks: [{}],
	charBitz: [{}],
	charContacts: [{}],
	charInventory: [{}],
	charCyberwear: [{}],
	charVehicles: [{}],
	charDrones: [{}],
	charSpells: [{}],
	charCompanions: [{}],
	charAttacks: [{}],
});

const Character = model("Character", characterSchema);
module.exports = Character;
