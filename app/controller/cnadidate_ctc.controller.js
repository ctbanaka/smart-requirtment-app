const db = require("../models");
const CandidateCTC= db.candidateCTC;
const Op = db.Sequelize.Op;

exports.create = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    else{console.log("working")};
        const ctc= {
            candidate_Id:req.body.candidate_Id,
            current_ctc:req.body.current_ctc,
            exp_ctc:req.body.exp_ctc,
            proposed_offer_ctc:req.body.proposed_offer_ctc,
            average_c1_ctc:req.body.average_c1_ctc,
            hike_percent:req.body.hike_percent,
            offered_ctc:req.body.offered_ctc,
            threshold_value:req.body.threshold_value,
            holding_offer:req.body.holding_offer,
            created_by:req.body.created_by,
            updated_by:req.body.updated_by
        };

      await  candidateCTC.create(ctc)
        .then(data => {
            res.send(data);
        })
    .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while creating the data."
            });
        });
  };


  exports.pendingOffers= async (req,res)=>{
    let data= await CandidateCTC.count({where:{holding_offer:true}});
    if(data==null){
        res.send("no pending offers")
    }
    res.send({pendingoffers:data})
    


  }
