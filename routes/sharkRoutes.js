const express = require('express')
const router = express.Router()

const sharksController = require('../controllers/sharksController')


router.get('/', sharksController.index)
router.get('/:id', sharksController.show)
router.post('/', sharksController.create)
router.patch('/:id', sharksController.update)

module.exports = router