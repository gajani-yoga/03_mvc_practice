const Shark = require('../models/Shark')

const index = async (req, res) => {
    const sharks = await Shark.getAll() //only use await keyword inside an async function
    res.send(sharks)
}

module.exports = {
    index
}