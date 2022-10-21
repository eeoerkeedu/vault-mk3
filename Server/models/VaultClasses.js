const { Schema, model } = require("mongoose");

const classesSchema = new Schema({
	className: {},
	classMainAbility: {},
	classSecondAbility: {},
	classXP13Ability: {},
	classAbilityGroups: {},
	classSkills: {},
	classWeaponRanks: {},
	classContacts: {},
	classStyleRequirements: {},
});

const VaultClasses = model("VaultClasses", classesSchema);
module.exports = VaultClasses;
