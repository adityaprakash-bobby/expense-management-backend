import { model, Schema } from 'mongoose';

const catSchema = new Schema({
	name: String,
});

export const Cat = model('Cat', catSchema);
