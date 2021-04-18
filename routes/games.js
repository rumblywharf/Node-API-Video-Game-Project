const {index, show, create, update, destroy} = require('../controllers/games');

module.exports = router => {
  router.get('/games', index);
  router.get('/games/:id', show);
  router.post('/games', create);
  router.put('/games', update);
  router.delete('/games', destroy);
};
