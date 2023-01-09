module.exports= app => {
    const skillMaster = require("../controller/skill_master.controller.js");

  var router = require("express").Router();

  router.post("/addskill", skillMaster.create);

  app.use('/api', router);
}

// var express = require("express");

// var router = express.Router();

// const skillMaster = require("../controller/skill_master.controller.js");


// router.post("/addskill",skillMaster.create);

// module.exports = app=> app.router;