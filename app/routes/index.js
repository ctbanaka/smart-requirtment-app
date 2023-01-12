var express = require("express");
var router = express.Router();

const skillMaster = require('../controller/skill_master.controller');
const gradeMaster = require('../controller/grade_master.controller');
const candidateDetails= require('../controller/candidate_details.controller');
const candidateCTC= require('../controller/cnadidate_ctc.controller');
const candidate = require('../controller/candidate.controller')
const accountMaster = require('../controller/account_master.controller');
const candidateSelect= require("../controller/candidate_select.controller")


router.post("/addaccount",accountMaster.create);
router.get("/allaccount", accountMaster.getAll);

router.post('/postcandidate',candidateDetails.postCandidate);

//router.post("/addcandidate",candidateDetails.create);
//router.get("/allcandidate", candidateDetails.getAll);;
router.get('/ratio', candidate.ratio);

router.post("/candidateselected",candidateSelect.create);
router.get("/joiningbonus", candidateSelect.joiningBonus);

router.get('/pendingoffers',candidateDetails.pendingOffers);

router.post("/addskill",skillMaster.create);
router.get("/allskills", skillMaster.getAll);

router.post("/addgrade",gradeMaster.create);
router.get("/allgrade", gradeMaster.getAll);

module.exports = router;
 