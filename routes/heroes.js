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

// POST /heroes (create functionality)
router.post('/', heroesCtrl.create);

// DELETE /heroes/:id (delete functionality)
router.delete('/:id', heroesCtrl.delete);

// GET /heroes/:id/edit  (edit functionality)
router.get('/:id/edit', heroesCtrl.edit);

// PUT /heroes/:id  (update functionality)
router.put('/:id', heroesCtrl.update);




module.exports = router;
