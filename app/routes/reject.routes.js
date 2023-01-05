module.exports= app => {
    const reject = require("../controller/reject.controller.js");

  var router = require("express").Router();


  router.post("/postreject",reject.create);

  router.get("/reject")

  app.use('/api', router);
}