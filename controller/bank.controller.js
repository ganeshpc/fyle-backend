const { connectToDatabase } = require("../config/knex");

exports.getBranchNameMatch = async (req, res) => {
	try {
		let searchField = "";
		if (req.query.q) {
			searchField = req.query.q;
			searchField = searchField.toUpperCase();
		}

		let limit = 0;
		if (req.query.limit) {
			limit = req.query.limit;
		}

		let offset = 0;
		if (req.query.offset) {
			offset = req.query.offset;
		}

		const knex = connectToDatabase();

		let sqlData = [];
		try {
			if (limit !== 0) {
				sqlData = await knex
					.select()
					.from("bank_branches")
					.where("branch", "like", `%${searchField}%`)
					.orderBy("ifsc", "asc")
					.limit(limit)
					.offset(offset);
			} else {
				sqlData = await knex
					.select()
					.from("bank_branches")
					.where("branch", "like", `%${searchField}%`)
					.orderBy("ifsc", "asc")
					.offset(offset);
			}
		} catch (error) {
			await knex.destroy();
			return res.status(500).json({ error });
		}

		await knex.destroy();

		// console.log(sqlData);

		return res.json({ sqlData });
	} catch (error) {
		return res.status(500).json({ error });
	}
};

exports.getAllMatch = async (req, res) => {
	try {
		let searchField = "";
		if (req.query.q) {
			searchField = req.query.q;
			searchField = searchField.toUpperCase();
		}

		let limit = 0;
		if (req.query.limit) {
			limit = req.query.limit;
		}

		let offset = 0;
		if (req.query.offset) {
			offset = req.query.offset;
		}

		const knex = connectToDatabase();

		let sqlData = [];
		try {
			if (limit !== 0) {
				sqlData = await knex
					.select()
					.from("bank_branches")
					.where("ifsc", "like", `%${searchField}%`)
					.orWhere("branch", "like", `%${searchField}%`)
					.orWhere("address", "like", `%${searchField}%`)
					.orWhere("city", "like", `%${searchField}%`)
					.orWhere("district", "like", `%${searchField}%`)
					.orWhere("state", "like", `%${searchField}%`)
					.orWhere("bank_name", "like", `%${searchField}%`)
					.orderBy("ifsc", "asc")
					.limit(limit)
					.offset(offset);
			} else {
				sqlData = await knex
					.select()
					.from("bank_branches")
					.where("ifsc", "like", `%${searchField}%`)
					.orWhere("branch", "like", `%${searchField}%`)
					.orWhere("address", "like", `%${searchField}%`)
					.orWhere("city", "like", `%${searchField}%`)
					.orWhere("district", "like", `%${searchField}%`)
					.orWhere("state", "like", `%${searchField}%`)
					.orWhere("bank_name", "like", `%${searchField}%`)
					.orderBy("ifsc", "asc")
					.offset(offset);
			}
		} catch (error) {
			await knex.destroy();
			return res.status(500).json({ error });
		}

		await knex.destroy();
		return res.json({ sqlData });
	} catch (error) {
		return res.status(500).json({ error });
	}
};
