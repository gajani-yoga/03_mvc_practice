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

    const update = async (res, req) => {
        if(!req.body.name) {
            res.status(422).send({ error: 'You need to specify the name' })
        }

        try {
            const sharkId = parseInt(req.params.id)
            const data = req.body
            //sharkToUpdate is an instance
            const sharkToUpdate = await Shark.findById(sharkId)
            const updatedShark = await sharkToUpdate.update(data)
            res.send(updatedShark)
        } catch (err) {
            res.status(404).send({ error: err.message })
        }
    }

    const destroy = async (res, req) => {
        try {
            const sharIdx = parseInt(req.params.id)
            
        } catch (error) {
            
        }
    }

}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
