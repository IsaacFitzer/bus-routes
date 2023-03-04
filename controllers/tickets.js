const Ticket = require('../models/ticket')
const Route = require('../models/route')

module.exports = {
    index,
    new: newTicket,
    create
}

function index(req, res) {
    Ticket.find({owner: req.user.email}).then(function(tickets) {
        res.render('tickets/index', { title: 'My Tickets', tickets })
    })
}

function newTicket(req, res) {
    Route.find({}).then(function(routes) {
        res.render('tickets/new', { title: 'Buy Ticket', routes })
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