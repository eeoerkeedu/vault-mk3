const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
	}
	type Query {
		users: [User]
		user(email: String!): User
	}
	type Mutation {
		addUser(
			username: String!
			email: String!
			password: String!
			role: String!
		)
	}
`;

module.exports = typeDefs;
