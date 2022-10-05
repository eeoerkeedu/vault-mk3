const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
	Query: {
		users: async () => {
			return await User.find();
		},
		user: async (parent, { username }) => {
			return User.findOne({ username });
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},

		updateUser: async (parent, { userId, username, email, password }) => {
			const userData = await User.findOneAndUpdate(
				{ _id: userId },
				{
					username: username,
					email: email,
					password: await bcrypt.hash(password, 12),
				},
				{ new: true }
			);
			return userData;
		},
	},
};
module.exports = resolvers;
