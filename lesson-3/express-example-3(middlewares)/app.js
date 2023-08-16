const express = require('express')
const books = require('./books')
const moment = require('moment')
const fs = require('fs/promises')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(async (req, res, next) => {
    const { method, url } = req
    const date = moment().format('DD-MM-YYYY_hh:mm:ss')

    await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`)

    next()
})

app.use((req, res, next) => {
    console.log('I am second middleaware');

    next()
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/contacts', (req, res) => {
    res.json(books)
})

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})

app.listen(3000)