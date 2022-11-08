const { Schema, model } = require("mongoose");

const styleSchema = new Schema({
	styleName: { type: String, required: true },
	styleMainAbility: { type: String },
	styleBonuses: [{ type: String }],
});

const Style = model("Style", styleSchema);
module.exports = Style;
