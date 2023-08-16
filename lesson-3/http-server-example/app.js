const http = require('http')

// request - об'єкт в якому зберігаеться інформація про запит
//response об'єкт в якому зберігаються налаштування відповіді

const server = http.createServer((request, response) => {
    console.log(request.url)
    console.log(request.method)
    const { url } = request

    if (url === '/') {
        response.write('<h1>Home page<h1>')
    }

    if (url === '/contacts') {
        response.write('<h1>Contacts page<h1>')
    }


    response.end();
})

server.listen(3000, () => {
    console.log('Server is running')
})