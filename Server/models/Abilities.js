const { Schema, model } = require("mongoose");

const abilitySchema = new Schema({
	abilityName: {},
	abilityBonus: {},
	abilityReqs: {},
});

const Abilities = model("Abilities", abilitySchema);
module.exports = Abilities;
