const express = require("express");

const bankRoutes = require("./route/bank.route");

const app = express();

app.use("/api/branches", bankRoutes);

app.all("*", (req, res) => {
	return res.status(404).json({ msg: "This route does not exists" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`*** Server started on port ${PORT}`);
});
