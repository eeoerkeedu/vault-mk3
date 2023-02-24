const { gql } = require("apollo-server-express");

const typeDefs = gql`
	input CharInput {
		charName: String
		charStyle: String
		charSpecies: String
		charClasses: [String]
		charStats: [String]
		charEXP: Int!
	}

	type Character {
		_id: ID!
		charName: String
		charStyle: String
		charSpecies: String
		charClasses: [String]
		charStats: [String]
		charEXP: Int!
	}

	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
		savedCharacters: [Character]
	}

	type Query {
		users: [User]
		user(username: String!): User
	}

	type Auth {
		token: ID!
		user: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth

		login(email: String!, password: String!): Auth

		updateUser(
			userId: ID!
			username: String
			email: String
			password: String
		): User

		updateUsername(userId: ID!, username: String!): User

		addCharToRoster(userId: ID!, newCharacter: CharInput): User

		deleteCharFromRoster(userId: ID!, charId: ID!): User
	}
`;

module.exports = typeDefs;
