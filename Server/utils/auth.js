const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;
const expiration = "4h";

module.exports = {
	signToken: function ({ email, role, username, _id }) {
		const payload = { email, role, username, _id };
		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
};
