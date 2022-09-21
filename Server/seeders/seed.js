const db = require("../config/connection");
const { User } = require("../models");
const userSeed = require("./userSeeds.json");

db.once("open", async () => {
	try {
		// removes old DB seeds and edits
		await User.deleteMany({});
		console.log("DB deleted");
		await User.insertMany(userSeed);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("all done!");
	process.exit(0);
});
