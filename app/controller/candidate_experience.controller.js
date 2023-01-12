
const { candidateExperience } = require("../models");

exports.create = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
        const exp= {

          relevant_exp:req.body.relevant_exp,
          total_exp:req.body.total_exp,
          level_based_exp:req.body.level_based_exp,
          proposed_grade:req.body.proposed_grade,
          band_diviation:req.body.band_diviation,
          created_by:req.body.created_by,
          updated_by:req.body.updated_by,
        };

      await  candidateExperience.create(exp)
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



  //get all 
  exports.getAll = async (req, res) => {
    let data= await candidateExperience.findAll()
       res.send(data);
  }