const Ticket = require('../models/ticket')
const Route = require('../models/route')

module.exports = {
    index,
    new: newTicket,
    create
}

function index(req, res) {
    Ticket.find({user: 'fitzerisaac@gmail.com'}).then(function(tickets) {
        res.render('tickets/index', { title: 'All Tickets', tickets })
    })
}

function newTicket(req, res) {
    Route.find({}).then(function(routes) {
        res.render('tickets/new', { title: 'Add Ticket', routes })
    })
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const ticket = new Ticket(req.body)
    ticket.save().then(function() {
        console.log(ticket)
        res.redirect('/tickets')
    })
}