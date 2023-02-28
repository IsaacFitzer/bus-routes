const Route = require('../models/route')

module.exports = {
    index,
    new: newRoute,
    create
}

function index(req, res) {
    Route.find({}).then(function(routes) {
        res.render('routes/index', { title: 'All Routes', routes })
    })
}

function newRoute(req, res) {
    res.render('routes/new', { title: 'Add Route' })
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const route = new Route(req.body)
    route.save().then(function() {
        console.log(route)
        res.redirect('/routes')
    })
}