require("dotenv").config();
const express = require("express");
const nodeFetch = require("node-fetch");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

const BASE_URL = "https://the-one-api.dev/v2/";

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./laoptir/build")));

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

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./laoptir/build", "index.html"));
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log("listening at port", port);
});
