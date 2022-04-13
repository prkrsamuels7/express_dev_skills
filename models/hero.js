module.exports = {
  getAll,
  getOne,
};

const heroes = [
  {heroName: 'Batman', id: 1209,  blurb: "Consequat aliquip fugiat quis est occaecat laborum adipisicing.",
   info: 'Id et quis dolor fugiat laboris incididunt qui officia reprehendAliquip sint velit consectetur veniam elit adipisicing ullamco non nostrud aute pariatur ea qui. Consectetur ipsum excepteur ut do pariatur aliqua eiusmod. Officia eiusmod eiusmod velit Lorem consequat quis culpa tempor veniam exercitation esse qui. Velit ut esse sit est velit ea labore consectetur qui sunt Lorem pariatur ut nostrud. Occaecat cillum mollit occaecat magna pariatur aliqua. Est do laborum ea sint ipsum commodo ullamco aliquip quis laborum eu culpa velit non. Commodo Lorem quis est nostrud eu do veniam ut minim.eExcepteur cillum duis aliqua tempor Lorem ea pariatur Lorem adipisicing laborum ipsum sint proident quis.rit minim enim qui laboris occaecat.' },
  {heroName: 'Superman', id: 4982,  blurb: 'Tempor ullamco fugiat est id deserunt.', 
  info: 'Ut aute labore irure quiNulla est eiusmod non duis deserunt ipsum ea nisi duis Lorem excepteur. Adipisicing ullamco ipsum Lorem labore irure adipisicing veniam deserunt fugiat tempor voluptate quis. Laboris id ad dolore consectetur exercitation. Pariatur sunt officia cupidatat magna incididunt reprehenderit et aute incididunt. non proident.Cillum elit labore nulla pariatur deserunt nostrud pariatur laboris nisi. Tempor aliqua non sint ad veniam exercitation qui ea nostrud nisi minim. Ea elit amet reprehenderit ut irure.'},
  {heroName: 'Spiderman', id: 1109, blurb: 'Eu esse aute aliqua velit eiusmod elit quis irure non.', 
  info: 'Elit proAliqua aliqua eu aliqua deserunt aute pariatur irure excepteur aliquip aliqua amet laboris qui. Tempor veniam proident id eiusmod ex Lorem labore et elit est elit. Reprehenderit sint mollit commodo ex sunt.ident voluptate consequat eu ex aliquip nisi tempor commodo. Non pariatur deserunt nisi velit adipisicing qui eiusmod consequat mollit nulla occaecat. Officia mollit adipisicing in nulla voluptate. Quis dolor anim laboris cillum tempor do amet ad culpa enim Lorem consequat anim. Et ad velit sit incididunt.'},
  {heroName: 'Ironman', id: 4747, blurb: 'Ad eu id consequat id dolore.', 
  info: 'Aliquip elit quis sint exercSit quis consectetur proident magna officia dolor labore nisi et adipisicing ad. Sint voluptate nostrud pariatur ad et aliqua. Non esse sint anim non eiusmod velit excepteur aliquip voluptate qui in. Officia id laborum ex pariatur tempor ea.itation Lorem deserunt ut cupidatat aliqua qui ipsum culpa. Exercitation ex ullamco magna aliqua in aliqua velit aute aliquip ut. Cillum nisi do do occaecat est dolor dolor ipsum labore. Ad aliquip elit irure non.'}
];

function getAll() {
  return heroes;
};

function getOne(id) {
  id = parseInt(id);
  return heroes.find(hero => hero.id === id);
};