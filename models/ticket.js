const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    route: String,
    price: Number,
    owner: String
})

module.exports = mongoose.model('Ticket', ticketSchema)