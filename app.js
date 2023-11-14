const express = require('express');
const cors = require('cors');
const logger = require('morgan'); //useful for tracking middleware

const sharkRoutes = require('./routes/sharkRoutes')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Shark API'})
})

//asking middleware to deal with routes
app.use('/sharks', sharkRoutes)
module.exports = app