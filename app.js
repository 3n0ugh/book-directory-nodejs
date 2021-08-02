const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const api = require("./src/routers/catalog");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", api);

app.listen(port, () => {
	console.log(`server is listening on port ${port}...`);
});
