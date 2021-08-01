const express = require("express");
const port = 3000;
const books = require("./src/routers/router");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/books", books);

app.listen(port, () => {
	console.log(`server is listening on port ${port}...`);
});
