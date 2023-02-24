const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Book.js
// const Character = require("./Character");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	savedCharacters: [
		{
			charName: { type: String },
			charName: { type: String },
			charStyle: { type: String },
			charSpecies: { type: String },
			charClasses: [
				{
					type: String,
				},
			],
			charEXP: { type: Number, default: 0 },
			charStats: [{ type: String }],
		},
	],
});

const saltRounds = 12;

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
