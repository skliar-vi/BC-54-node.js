const fs = require('fs').promises

const someFunc = async () => {
    try {
        // console.log(await fs.writeFile('./files/first.txt', "Another phrase"))

        await fs.appendFile('./files/first.txt', "\nMore text...")

        const data = await fs.readFile('./files/first.txt', 'utf-8')
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}

// fs.readFile('./files/first.txt', (err, data) => {
//     console.log(err)
//     console.log(data.toString())
// })


someFunc()