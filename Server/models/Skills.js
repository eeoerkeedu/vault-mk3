const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
	skillName: {},
	skillPoints: { type: Number, default: 0 },
	skillEffects: {},
});

const Skills = model("Skills", skillSchema);
module.exports = Skills;
