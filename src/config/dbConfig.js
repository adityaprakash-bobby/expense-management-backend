import { CONSTANTS } from '../constants';
import { connect } from 'mongoose';

export const mongodbCon = connect(
	`mongodb://${CONSTANTS.ENVIRONMENT.HOST}:${CONSTANTS.ENVIRONMENT.DB_PORT}/${CONSTANTS.ENVIRONMENT.DB_NAME}`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
