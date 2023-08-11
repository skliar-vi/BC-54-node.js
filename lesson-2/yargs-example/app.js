const booksService = require('./books')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const invokeAction = async ({ action, id, author, title }) => {
    switch (action) {
        case 'list':
            const books = await booksService.getAllBooks()

            return console.log(books)
        case 'getById':
            const book = await booksService.getBookById(id)

            return console.log(book)
        case 'create':
            const newBook = await booksService.createBook({ title, author })

            return console.log(newBook)
        case 'update':
            const updatedBook = await booksService.updateBookById({ id, title, author })

            return console.log(updatedBook)
        case 'remove':
            const removedBook = await booksService.removeBookById(id)

            return console.log(removedBook)
    }
}

// invokeAction({ action: 'list', });
// invokeAction({ action: 'getById', id: 'zCd_RioNadawdMOBaQwAXnc8Px' });
// invokeAction({ action: 'create', title: 'New book', author: 'Somebody' })
// invokeAction({ action: 'update', id: 'yqwZSXcBuK-mQ79xCGCby', title: 'Updated book', author: 'Somebody' })
// invokeAction({ action: 'remove', id: 'yqwZSXcBuK-mQ79xCGCby' });


const { argv } = yargs(hideBin(process.argv))
console.log(argv)

invokeAction(argv)
