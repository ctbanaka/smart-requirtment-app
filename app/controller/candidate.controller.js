 const db = require("../models");
 const CandidateSelect = db.candidateSelect;
 const CandidateReject = db.candidateReject;
 const Op = db.Sequelize.Op;


exports.ratio = async (req,res)=> {
    let selectedCandidates = await CandidateSelect.count();
    let rejectedCandidates = await CandidateReject.count();
    let data = selectedCandidates+rejectedCandidates;
    console.log(data);

    let totalratio = {};
    
    let selected = selectedCandidates;
    let selectedRatio= (selected/data)*100;
    let rejectedRatio = 100-selectedRatio;
    
    totalratio.selectedRatio=selectedRatio;
    totalratio.rejectedRatio=rejectedRatio;

    res.send({totalratio});

}