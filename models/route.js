const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stopsSchema = new Schema({
    address: String
})

const routeSchema = new Schema({
    name: String,
    stops: [stopsSchema]
})

module.exports = mongoose.model('Route', routeSchema)