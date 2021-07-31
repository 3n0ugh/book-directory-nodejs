const express = require(express);
const port = 3000;

const app = express();

app.use(express.static("./routers/routers.js"));

app.liste(port, () => {
	console.log(`server is listening on port ${port}...`);
});
