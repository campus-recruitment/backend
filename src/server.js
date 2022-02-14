const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('./dbContext/mongo');

const Student = require('./routes/student');
const User = require('./routes/users')
const auth = require('./middlewares/auth');

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

app.use(Student)
app.use(User)

app.use('/api', auth)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))