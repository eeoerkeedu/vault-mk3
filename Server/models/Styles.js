const { Schema, model } = require("mongoose");

const styleSchema = new Schema({
	styleName: {},
	styleMainAbility: {},
	styleBonuses: {},
});

const Style = model("Style", styleSchema);
module.exports = Style;
