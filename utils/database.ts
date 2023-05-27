import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
	mongoose.set('strictQuery', true);

	if (isConnected) {
		console.log('is connected');
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: 'share',
		});
		isConnected = true;
		console.log('mongo connected');
	} catch (error) {
		console.log(error);
	}
};
