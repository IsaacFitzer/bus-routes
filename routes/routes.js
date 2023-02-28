var express = require('express');
var router = express.Router();
const routesCtrl = require('../controllers/routes')

router.get('/', routesCtrl.index)
router.get('/new', routesCtrl.new)
router.post('/', routesCtrl.create)

module.exports = router;
