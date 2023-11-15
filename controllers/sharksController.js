const Shark = require('../models/Shark')

const index = async (req, res) => {
    const sharks = await Shark.getAll() //only use await keyword inside an async function
    res.send(sharks)
}

const show = async (req, res) => {
    try {
        const sharkId = parseInt(req.params.id)
        //get me a shark please
        const shark = await Shark.findById(sharkId)
        res.send(shark)
    } catch (err) {
        res.status(404).send({ error: err.message})
    }
}

const create = async (req, res) => {
    try {
        console.log(req.body)
        if(!req.body.name) {
            throw new Error('You need a name to create a shark')
        }

        const newShark = await Shark.create(req.body)
        res.status(201).send(newShark)
    } catch (err) {
        res.status(422).send({ error: err.message })
    }
}

module.exports = {
    index,
    show,
    create
}
