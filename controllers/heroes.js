var Hero = require('../models/hero');

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render('heroes/index', { 
    heroes: Hero.getAll() 
  });
};

function show(req, res) {
  res.render('heroes/show', {
    heroes: Hero.getOne(req.params.id) 
  });
};