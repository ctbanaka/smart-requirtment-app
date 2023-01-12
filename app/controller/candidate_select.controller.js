const db = require("../models");
const CandidateSelect= db.candidateSelect;
const Op = db.Sequelize.Op;

exports.create = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    

       const candidateSelect= {
        candidateDetailCandidateId:req.body.candidateDetailCandidateId,
        l1_l2_onhold:req.body.l1_l2_onhold,
        l1_l2_select:req.body.l1_l2_select,
        l1_l2_scheduled:req.body.l1_l2_scheduled,
        l3_scheduled:req.body.l3_scheduled,
        l2_scheduled:req.body.l2_scheduled,
        l1_scheduled:req.body.l1_scheduled,
        joined:req.body.joined,
        offer_accept:req.body.offer_accept,
        bu_approved:req.body.bu_approved,
        l1_select:req.body.l1_select,
        l2_select:req.body.l2_select,
        l3_select:req.body.l3_select,
        prescreen_select:req.body.prescreen_select,
        colorcode:req.body.colorcode,
        labelling:req.body.labelling,
        selectratio:req.body.selectratio,
        created_by:req.body.created_by,
        updated_by:req.body.updated_by,
        joining_bonus:req.body.joining_bonus
        
}


        CandidateSelect.create(candidateSelect)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the data."
            });
        });
  }

  exports.joiningBonus= async (req,res)=>{
   let data= await CandidateSelect.count({where:{joining_bonus: {
            [Op.is]: null
        }
    }
    })
    console.log(data);
    res.send({bonus:data});
  }
