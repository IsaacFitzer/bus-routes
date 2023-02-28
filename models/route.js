const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routeSchema = new Schema({
    name: String,
    start: String,
    stop: String
})

module.exports = mongoose.model('Route', routeSchema)