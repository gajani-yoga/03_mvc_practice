const express = require('express')
const router = express.Router()

const sharksController = require('../controllers/sharksController')

// localhost:3000/sharks -> app -> routers -> controllers -> models
router.get('/', sharksController.index)

module.exports = router