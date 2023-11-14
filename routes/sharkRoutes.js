const express = require('express')
const router = express.Router()

const sharksController = require('../controllers/sharksController')


router.get('/', sharksController.index)

module.exports = router