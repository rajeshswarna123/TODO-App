const express = require('express');

const usersController = require('./controllers/users');

const app = express()
const port = 3000

app
    .use(express.json())

    .get('/api/', (req, res) => {
        res.send('You are on the homepage');
    })

    .use('/api/users', usersController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})