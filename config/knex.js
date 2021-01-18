const dotenv = require("dotenv");
const knex = require("knex");

dotenv.config();

exports.connectToDatabase = () => {
	return knex({
		client: "pg",
		connection: {
			connectionString: process.env.POSTGRE_DB_URI + "?ssl=true",
			ssl: {
				rejectUnauthorized: false,
			},
		},
	});
};
