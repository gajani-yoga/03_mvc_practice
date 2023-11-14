const sharks = require('../data')

// localhost:3000/sharks -> app -> routers -> controllers -> models
const index = (req, res) => {
    res.send(sharks)
}

module.exports = {
    index
}