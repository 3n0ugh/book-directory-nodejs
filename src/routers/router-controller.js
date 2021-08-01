let { book } = require("../data/books");

// to get all books
const getBook = (req, res) => {
	res.status(200).json({ success: true, data: book });
};

//to get a book
const getABook = (req, res) => {
	const { id } = req.params;
	const abook = book.find((abook) => abook.id === Number(id));
	if (!abook) {
		return res.status(400).json({
			success: false,
			msg: `We don't have any book with id ${id}`,
		});
	}
	res.status(200).json({ success: true, data: abook });
};
3;

// to add a book -> not finished yet
const addBook = (req, res) => {
	const body = req.body;
	if (!body) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide book informations" });
	}
	res.status(201).send({ success: true, data: [...book, body] });
};

// to update a book information
const updateBook = (req, res) => {
	const { id } = req.params;
	const body = req.body;
	books.forEach((book, index) => {
		if (book.id === parseInt(id)) {
			books[index] = body;
		}
	});
	res.status(201).json({ success: true, data: [...book, body] });
};

// to delete a book
const deleteBook = (req, res) => {
	const abook = book.find((abook) => abook.id === Number(req.params.id));
	if (!abook) {
		return res.status(404).json({
			success: false,
			msg: `no book with id ${req.params.id}`,
		});
	}
	const newBook = book.filter((abook) => abook.id !== Number(req.params.id));
	return res.status(200).json({ success: true, data: newBook });
};

module.exports = {
	getABook,
	getBook,
	addBook,
	updateBook,
	deleteBook,
};
