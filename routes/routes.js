var express = require('express');
var router = express.Router();
const routesCtrl = require('../controllers/routes')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', routesCtrl.index)
router.get('/new', ensureLoggedIn, routesCtrl.new)
router.post('/', ensureLoggedIn, routesCtrl.create)
router.post('/:id', ensureLoggedIn, routesCtrl.delete)

module.exports = router;
