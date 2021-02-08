import { gql } from 'apollo-server-express';

export const CatTypeDef = gql`
	extend type Query {
		cats: [Cat!]
	}
	type Cat {
		id: ID!
		name: String!
	}
	extend type Mutation {
		createCat(name: String!): Cat!
	}
`;
