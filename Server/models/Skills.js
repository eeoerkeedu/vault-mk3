const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
	skillName: {},
	skillPoints: { type: Interger, default: 0 },
	skillEffects: {},
});

const Skills = model("Skills", skillsSchema);
module.exports = Skills;
