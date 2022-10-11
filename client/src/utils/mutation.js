import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser(
		$userId: ID!
		$username: String
		$email: String
		$password: String
	) {
		updateUser(
			userId: $userId
			username: $username
			email: $email
			password: $password
		) {
			_id
			username
			email
			password
		}
	}
`;

export const UPDATE_USERNAME = gql`
	mutation updateUsername($userId: ID!, $username: String!) {
		updateUsername(userId: $userId, username: $username) {
			_id
			username
		}
	}
`;
