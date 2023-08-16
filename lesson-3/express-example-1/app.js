const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Welcome<h1>')
})

app.get('/goit', (request, response) => {
    console.log(request.url)
    console.log(request)
    response.send('<h1>Welcome, to go it<h1>')
})

app.listen(3000, () => {
    console.log('Server is running')
})