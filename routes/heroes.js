var express = require('express');
var router = express.Router();

var heroesCtrl = require('../controllers/heroes');

/* GET users listing. */

// GET /heroes (index functionality)
router.get('/', heroesCtrl.index);

// GET /heroes/new  (new functionality)
router.get('/new', heroesCtrl.new);

// GET /heroes/:id  (show functionality)
router.get('/:id', heroesCtrl.show);




module.exports = router;
