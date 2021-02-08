import { gql } from 'apollo-server-express';
import { CatTypeDef } from './Cat/Cat';
import { HealthTypeDef } from './Health';

const BaseTypeDef = gql`
	type Query {
		empty: String
	}
	type Mutation {
		empty: String
	}
`;

export const TypeDefs = [BaseTypeDef, HealthTypeDef, CatTypeDef];
