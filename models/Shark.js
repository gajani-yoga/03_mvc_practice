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

    static async create(data) {
        // trying to create a shark
        // we need to know the last id
        // we need to check that the data is present
        // to create shark, new shark(data)

        try { // This paragraph of code will be done for us in database
            let nextId
            sharksData.length
            ? nextId = sharksData.reduce((shark1, shark2) => shark1.id > shark2.id ? shark1 : shark2).id + 1
            : nextId = 1

            const newShark = new Shark({ id: nextId, name: data.name })
            sharksData.push(newShark)
            return newShark
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(data) {
        const shark = sharksData.find(s => s.id === this.id)
        if(shark.name) {
            shark.name = data.name
            return new Shark(shark)
        } else {
            throw new Error('Shark not found')
        }
        }
    async destroy() {
        const shark = sharksData.find(s => s.id === this.id)

        if(shark) {
            const sharInx = sharksData.indexOf(shark)
            sharksData.splice(sharInx, 1)
        } else {
            throw new Error('Shark not found')
        }
    }
    
    }


module.exports = Shark