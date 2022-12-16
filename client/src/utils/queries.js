import { gql } from "@apollo/client";

export const QUERY_USER = gql`
	query User($username: String!) {
		user(username: $username) {
			_id
			username
			email
			password
			savedCharacters {
				_id
				charName
				charStyle
				charSpecies
				charClasses
			}
		}
	}
`;
