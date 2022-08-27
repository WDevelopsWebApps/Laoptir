require("dotenv").config();
const express = require("express");
const nodeFetch = require("node-fetch");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

const BASE_URL = "https://the-one-api.dev/v2/";

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./laoptir/build")));

app.get("/api/:subroute/:id/:subroute1", (req, res) => {
	const requestedApi = req.params.id;
	const subroute = req.params.subroute;
	const subroute1 = "/" + req.params.subroute1;
	async function getData() {
		try {
			const data = await nodeFetch(
				BASE_URL + subroute + "/" + requestedApi + subroute1,
				{
					headers: {
						Authorization: "Bearer " + process.env.API_KEY,
					},
				}
			);
			const toJson = await data.json();

			res.send(toJson);
		} catch (err) {
			console.error(err);
			res.redirect("/api");
		}
	}
	getData();
});

app.get("/api/:subroute/:id", (req, res) => {
	const subroute = req.params.subroute;
	const requestedApi = req.params.id;
	console.log(subroute, requestedApi);
	async function getData() {
		try {
			const data = await nodeFetch(BASE_URL + subroute + "/" + requestedApi, {
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

app.get("/api/:id", (req, res) => {
	const requestedApi = req.params.id;
	const requestedQuery = req.query;
	console.log(requestedApi);
	async function getData() {
		try {
			if (Object.keys(requestedQuery).length > 0) {
				const toArray = Object.entries(requestedQuery);
				const toString = toArray[0][0] + "=" + toArray[0][1];

				const data = await nodeFetch(BASE_URL + requestedApi + "?" + toString, {
					headers: {
						Authorization: "Bearer " + process.env.API_KEY,
					},
				});
				const toJson = await data.json();

				res.send(toJson);
			} else {
				const data = await nodeFetch(BASE_URL + requestedApi, {
					headers: {
						Authorization: "Bearer " + process.env.API_KEY,
					},
				});
				const toJson = await data.json();

				res.send(toJson);
			}
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
