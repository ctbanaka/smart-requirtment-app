module.exports= app => {
    const candidate = require("../controller/candidate.controller.js");

  var router = require("express").Router();


  router.post("/candidate", candidate.create);

  router.get('/pendingoffers', candidate.count);

  router.get('/joiningbonus', candidate.joiningBonus);

  router.get('/ratio', candidate.ratio);

  app.use('/api', router);
}