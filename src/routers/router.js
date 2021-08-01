const express = require("express");
const router = express.Router();

const {
	getBook,
	getABook,
	addBook,
	updateBook,
	deleteBook,
} = require("./router-controller");

router.route("/").get(getBook).post(addBook);
router.route("/:id").get(getABook).delete(deleteBook).put(updateBook);

module.exports = router;
