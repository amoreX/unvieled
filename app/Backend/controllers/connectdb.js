import mongoose from "mongoose";

export const connectdb = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://nihal:mdnihalrahman@unvieled.v11frhy.mongodb.net/?retryWrites=true&w=majority&appName=unvieled"
		);
		console.log("connected to db");
	} catch (e) {
		console.log("connect badme karlio pehle error dekh ", e);
		throw err;
	}
};
