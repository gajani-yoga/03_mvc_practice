const express = require('express');
const cors = require('cors');
const logger = require('morgan'); //useful for tracking middleware

const sharks = require('./data')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Shark API'})
})

app.get('/sharks', (req, res) => {
    res.send(sharks)
})

module.exports = app