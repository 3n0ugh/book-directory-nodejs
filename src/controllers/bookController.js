let books = require("../data/books");

let booksDirectory = books;

// to get all books +
const getBooks = (req, res) => {
	res.status(201).json({ success: true, data: books });
};

//to get a book +
const getBook = (req, res) => {
	const { id } = req.params;
	const book = booksDirectory.find((b) => b.isbn === id);
	if (!book) {
		return res.status(400).json({
			success: false,
			msg: `We don't have any book with id ${id}`,
		});
	}
	res.status(201).json({ success: true, data: book });
};

// to add a book
const addBook = (req, res) => {
	const {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		status,
		authors,
		categories,
	} = req.body;

	const bookExist = booksDirectory.find((b) => b.isbn === isbn);
	if (bookExist)
		return res
			.status(200)
			.json({ success: false, msg: "The Book is Already Exists." });

	const book = {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		status,
		authors,
		categories,
	};
	booksDirectory.push(book);

	res.status(201).json({ success: true, data: book });
};

// to update a book information
const updateBook = (req, res) => {
	const { id } = req.params;
	const {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		status,
		authors,
		categories,
	} = req.body;

	let book = booksDirectory.find((b) => b.isbn === id);
	if (!book)
		return res
			.status(404)
			.json({ success: false, msg: "Book does not exist" });

	const updateField = (val, prev) => (!val ? prev : val);

	const updatedBook = {
		...book,
		title: updateField(title, book.title),
		isbn: updateField(isbn, book.isbn),
		pageCount: updateField(pageCount, book.pageCount),
		publishedDate: updateField(publishedDate, book.publishedDate),
		thumbnailUrl: updateField(thumbnailUrl, book.thumbnailUrl),
		shortDescription: updateField(shortDescription, book.shortDescription),
		longDescription: updateField(longDescription, book.longDescription),
		status: updateField(status, book.status),
		authors: updateField(authors, book.authors),
		categories: updateField(categories, book.categories),
	};

	const bookIndex = booksDirectory.findIndex((b) => b.isbn === book.isbn);
	booksDirectory.splice(bookIndex, 1, updatedBook);

	res.status(201).json({ success: true, data: updatedBook });
};

// to delete a book
const deleteBook = (req, res) => {
	const { id } = req.params;

	let book = booksDirectory.find((b) => b.isbn === id);
	if (!book) return res.status(404).send("Book does not exist");

	booksDirectory = booksDirectory.filter((b) => b.isbn !== id);

	res.status(200).json({ success: true, msg: "The Book Has Been Deleted." });
};

module.exports = {
	getBook,
	getBooks,
	addBook,
	updateBook,
	deleteBook,
};
