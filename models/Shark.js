const sharksData = require('../data')

// localhost:3000/sharks -> app -> routers -> controllers -> models/Database
class Shark {
    constructor(data) {
        this.id = data.id
        this.name = data.name
    }
    //async code returns a promise
    static async getAll() {
        try {
            const sharks = sharksData.map(data => new Shark(data)) //index file in data folder acts like a "database"
            return sharks
        } catch (error) {
            throw new Error('Error retrieving sharks')
        }
    }
}

module.exports = Shark