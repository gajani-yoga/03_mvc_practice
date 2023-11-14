const sharksData = require('../data')


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

    static async findById(sharkId) {
        try {
            const sharkData = sharksData.find(shark => shark.id === sharkId)
            console.log(sharkData)
            return new Shark(sharkData)
        } catch (error) {
            throw new Error('Shark not found')
        }
    }
}

module.exports = Shark