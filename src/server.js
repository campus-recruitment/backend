const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('./dbContext/mongo');

const example = require('./controllers/example');

const PORT =  5000

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log(req.ip)
    res.status(200).send('All is well!')
})

app.use('/example', example)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))