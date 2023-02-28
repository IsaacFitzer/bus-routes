const Route = require('../models/route')

module.exports = {
    index
}

function index(req, res) {
    Route.find({}).then(function(err, routes) {
        res.render('routes/index', { title: 'All Routes', routes })
    })
}