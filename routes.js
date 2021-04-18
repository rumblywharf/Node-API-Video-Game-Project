module.exports = router => {
  require('./routes/games')(router);
  require('./routes/genres')(router);
  return router;
};
