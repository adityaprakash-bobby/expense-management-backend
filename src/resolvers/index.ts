import { IResolvers } from 'apollo-server-express';
import { HealthResolver } from './Health';

export const Resolvers: Array<IResolvers> = [HealthResolver];
