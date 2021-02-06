import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { TypeDefs } from './typeDefs';
import { Resolvers } from './resolvers';
import { CONSTANTS } from './constants';

const app = express();
const server = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
});

server.applyMiddleware({ app, path: CONSTANTS.ENVIRONMENT.PATH });

app.listen(
	{ port: CONSTANTS.ENVIRONMENT.PORT, host: CONSTANTS.ENVIRONMENT.HOST },
	(port = CONSTANTS.ENVIRONMENT.PORT, host = CONSTANTS.ENVIRONMENT.HOST) =>
		console.log(
			`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`
		)
);
