const db = require("../models");
const CandidateDetails= db.candidateDetails;
const Op = db.Sequelize.Op;


exports.postCandidate = async (req, res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    const candidate = {
        candidate_name:req.body.candidate_name,
        email_id:req.body.email_id,
        no_of_year: req.body.no_of_year,
        current_company:req.body.current_company,
        
    };

    await CandidateDetails.create(candidate)
    .then(data => {
        res.send(data);
    });

}