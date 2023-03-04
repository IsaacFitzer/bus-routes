var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, ticketsCtrl.index)
router.get('/new', ensureLoggedIn, ticketsCtrl.new)
router.post('/', ensureLoggedIn, ticketsCtrl.create)

module.exports = router;