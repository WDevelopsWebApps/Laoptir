require("dotenv").config();
const express = require("express");
const nodeFetch = require("node-fetch");
const app = express();

app.use(express.urlencoded({ extended: true }));

const BASE_URL = "https://the-one-api.dev/v2/";

app.get("/api/:id", (req, res) => {
	const requestedApi = req.params.id;
	async function getData() {
		try {
			const data = await nodeFetch(BASE_URL + requestedApi, {
				headers: {
					Authorization: "Bearer " + process.env.API_KEY,
				},
			});
			const toJson = await data.json();

			res.send(toJson);
		} catch (err) {
			console.error(err);
			res.redirect("/api");
		}
	}
	getData();
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log("listening at port", port);
});
