const express = require('express')
const router = express.Router()

const sharks = require('../data')

// localhost:3000/sharks -> app -> routers -> controllers -> models
router.get('/', (req, res) => {
    res.send(sharks)
})

module.exports = router