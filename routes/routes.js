var express = require('express');
var router = express.Router();
const routesCtrl = require('../controllers/routes')

router.get('/', routesCtrl.index)

module.exports = router;
