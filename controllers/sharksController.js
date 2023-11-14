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

module.exports = {
    index,
    show
}
