var express = require("express");
var router = express.Router();

const skillMaster = require('../controller/skill_master.controller');

router.post("/addskill",skillMaster.create);
router.get("/allskills", skillMaster.getAll);
module.exports = router;