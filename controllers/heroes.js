var Hero = require('../models/hero');

module.exports = {
  index,
  show,
  new: newHero,
  create,
  delete: deleteHero,
  edit,
  update,
};

function update(req, res) {
  Hero.update(req.params.id, req.body);
  res.redirect('/heroes');
};

function edit(req, res) {
  res.render('heroes/edit', {
    hero: Hero.getOne(req.params.id)
  });
};

function deleteHero(req, res) {
  Hero.deleteOne(req.params.id);
  res.redirect('/heroes');
};

function create(req, res) {
  Hero.create(req.body);
  res.redirect('/heroes');
};

function newHero(req, res) {
  res.render('heroes/new')
};

function index(req, res) {
  res.render('heroes/index', { 
    heroes: Hero.getAll() 
  });
};

function show(req, res) {
  res.render('heroes/show', {
    hero: Hero.getOne(req.params.id) 
  });
};