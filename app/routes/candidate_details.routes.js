const express = require('express');
const router = express.Router();

const CandidateDetails = require('../controller/candidate_details.controller');

router.post('/candidate', CandidateDetails.postCandidate);
module.exports = router;