const app = require('./app')
const port = process.env.PORT || 3000 //use port defined by environment variable, but if not defined use port 3000

app.listen(port, () => {
    console.log(`API running on ${port}`)
})