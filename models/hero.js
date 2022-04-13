module.exports = {
  getAll,
  getOne,
};

const heroes = [
  {heroName: 'Batman', id: '1209',  blurb: "Consequat aliquip fugiat quis est occaecat laborum adipisicing.",
   info: 'Reprehenderit ex eiusmod commodo deserunt deserunt aute exercitation. Proident amet nisi aute officia. Aliqua ex consectetur pariatur officia voluptate tempor commodo proident commodo ea ut.'},
  {heroName: 'Superman', id: '4982',  blurb: 'Tempor ullamco fugiat est id deserunt.', 
  info: 'Ut aute labore irure qui non proident.Cillum elit labore nulla pariatur deserunt nostrud pariatur laboris nisi. Tempor aliqua non sint ad veniam exercitation qui ea nostrud nisi minim. Ea elit amet reprehenderit ut irure.'},
  {heroName: 'Spiderman', id: '1109', blurb: 'Eu esse aute aliqua velit eiusmod elit quis irure non.', 
  info: 'Elit proident voluptate consequat eu ex aliquip nisi tempor commodo. Non pariatur deserunt nisi velit adipisicing qui eiusmod consequat mollit nulla occaecat. Officia mollit adipisicing in nulla voluptate. Quis dolor anim laboris cillum tempor do amet ad culpa enim Lorem consequat anim. Et ad velit sit incididunt.'},
  {heroName: 'Ironman', id: '4747', blurb: 'Ad eu id consequat id dolore.', 
  info: 'Aliquip elit quis sint exercitation Lorem deserunt ut cupidatat aliqua qui ipsum culpa. Exercitation ex ullamco magna aliqua in aliqua velit aute aliquip ut. Cillum nisi do do occaecat est dolor dolor ipsum labore. Ad aliquip elit irure non.'}
];

function getAll() {
  return heroes;
};

function getOne(id) {
  id = parseInt(id);
  return heroes.find(hero => hero.id === true);
};