import { gql } from 'apollo-server-express';

export const HealthTypeDef = gql`
	extend type Query {
		health: String!
	}
`;
