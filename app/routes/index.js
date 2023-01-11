var express = require("express");
var router = express.Router();

const skillMaster = require('../controller/skill_master.controller');
const gradeMaster = require('../controller/grade_master.controller');
const accountMaster = require('../controller/account_masters.controller');
const candidateExperience = require('../controller/candidate_experience.controller');
const  candidateCTC=  require("../controller/candidate_ctc.controller");
const candidateDetails  = require("../controller/candidate_details.controller");
const  candidateFeedbackInfo  = require("../controller/candidate_feedback.controller");
const  candidateJoiningDetails  = require("../controller/candidate_joining_details.controller");

router.post("/addskill",skillMaster.create);
router.get("/allskills",skillMaster.getAll);

router.post("/addexp",gradeMaster.create);
router.get("/allgrades",gradeMaster.getAll);

router.post("/addaccount",accountMaster.create);
router.get("/allaccount",accountMaster.getAll);

router.post("/addcandidateexp",candidateExperience.create);
router.get("/allcandidateexp",candidateExperience.getAll);

router.post("/addcandidatectc",candidateCTC.create);
router.get("/allcandidatectc",candidateCTC.getAll);

router.post("/addcandidatedetails",candidateDetails.create);
router.get("/allcandidatedetails",candidateDetails.getAll);

router.post("/addcandidatefeedback",candidateFeedbackInfo.create);
router.get("/allcandidatefeedback",candidateFeedbackInfo.getAll);

router.post("/addcandidatejoiningdetails",candidateJoiningDetails.create);
router.get("/allcandidatejoiningdetails",candidateJoiningDetails.getAll);



module.exports = router;