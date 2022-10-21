const { Schema, model } = require("mongoose");

const speciesSchema = new Schema({
	speciesName: {},
	speciesAbility1: {},
	speciesAbility2: {},
	speciesAbility3: {},
	speciesMinStats: [{ type: Array, required: true }],
	speciesMercMax: [{ type: Array, required: true }],
	speciesExMax: [{ type: Array, required: true }],
	speciesWSMax: [{ type: Array, required: true }],
	speciesAbilityList: [{}],
});

const Species = model("Species", speciesSchema);
module.exports = Species;
