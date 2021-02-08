import { Cat } from '../../models/Cat';

export const CatResolver = {
	Query: {
		cats: () => Cat.find(),
	},
	Mutation: {
		createCat: (_, { name }) => {
			const cat = new Cat({
				name,
			});
			return cat.save();
		},
	},
};
