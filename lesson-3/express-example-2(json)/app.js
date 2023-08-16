const express = require('express')
const books = require('./books')

const app = express()

app.get('/books', (req, res) => {
    res.json(books)
})

app.listen(3000, () => {
    console.log("Server is running");
})