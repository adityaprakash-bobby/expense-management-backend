import { gql } from 'apollo-server-express';

export const HealthTypeDef = gql`
	type Query {
		health: String!
	}
`;
