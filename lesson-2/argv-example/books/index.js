const fs = require('fs/promises')
const { join } = require('path')
const { nanoid } = require('nanoid')

const booksPath = join(__dirname, 'books.json')

const updateBooks = async (books) => await fs.writeFile(booksPath, JSON.stringify(books, null, 3))

const findBookIndex = (books, id) => books.findIndex(book => book.id === id)

const getAllBooks = async () => {
    const books = await fs.readFile(booksPath);

    return JSON.parse(books)
}

const getBookById = async (id) => {
    const books = await getAllBooks()

    const resultBook = books.find(book => book.id == id)

    return resultBook || null;
}

const createBook = async ({ title, author }) => {
    const newBook = {
        id: nanoid(),
        title,
        author,
    }

    const books = await getAllBooks()

    books.push(newBook);

    await updateBooks(books)

    return newBook;
}

const updateBookById = async ({ id, title, author }) => {
    const books = await getAllBooks();

    const bookIndex = findBookIndex(books, id)

    if (bookIndex === -1) {
        return null;
    }

    books[bookIndex] = { id, title, author };

    await updateBooks(books)

    return books[bookIndex];
}

const removeBookById = async (id) => {
    const books = await getAllBooks()

    const bookIndex = findBookIndex(books, id)

    if (bookIndex === -1) {
        return null;
    }

    const [result] = books.splice(bookIndex, 1);

    await updateBooks(books)

    return result;
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBookById,
    removeBookById,
}