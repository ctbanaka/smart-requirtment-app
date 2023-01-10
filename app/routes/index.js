var express = require("express");
var router = express.Router();

const skillMaster = require('../controller/skill_master.controller');
const gradeMaster = require('../controller/grade_master.controller');
//const candidateSelect = require('../controller/candidate_select.controller');
const accountMaster = require('../controller/account_master.controller');
//const candidate = require("../controller/candidate.controller.js");

router.post("/addaccount",accountMaster.create);
router.get("/allaccount", accountMaster.getAll);

// router.post("/addcandidateselect",candidateSelect.create);
// router.get("/allcandidateselect", candidateSelect.getAll);

router.post("/addskill",skillMaster.create);
router.get("/allskills", skillMaster.getAll);

router.post("/addgrade",gradeMaster.create);
router.get("/allgrade", gradeMaster.getAll);

module.exports = router;
