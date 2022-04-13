var express = require('express');
var router = express.Router();

var heroesCtrl = require('../controllers/heroes');

/* GET users listing. */
router.get('/', heroesCtrl.index);

router.get('/:id', heroesCtrl.show);


module.exports = router;
