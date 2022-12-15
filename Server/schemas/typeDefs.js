const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
		savedCharacaters: [Character]
	}

	type Character {
		charName: String
		charStyle: String
		charSpecies: String
		charClasses: [String]
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
	}
`;

module.exports = typeDefs;
