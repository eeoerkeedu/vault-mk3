const db = require("../config/connection");
const { User } = require("../models");
const userSeed = require("./userSeeds.json");
const bcrypt = require("bcrypt");

db.once("open", async () => {
	try {
		// removes old DB seeds and edits
		await User.deleteMany({});
		console.log("DB deleted");

		let userArray = [];

		for (let i = 0; i < userSeed.length; i++) {
			let hashPass = await bcrypt.hash(userSeed[i].password, 12);

			hashedUser = {
				username: userSeed[i].username,
				email: userSeed[i].email,
				password: hashPass,
			};

			console.log(hashedUser);
			userArray.push(hashedUser);
			console.log(userArray);
		}

		await User.insertMany(userArray);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("all done!");
	process.exit(0);
});
