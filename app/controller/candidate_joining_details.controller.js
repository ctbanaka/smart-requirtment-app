  //post

  const { candidateJoiningDetails } = require("../models");

  exports.create = async(req,res)=>{
    console.log("hiiiiii");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    else{console.log("working")};

        const joining= {
            doj:req.body.doj,

            joining_month:req.body.joining_month,

            notice_period:req.body.notice_period,

            created_by:req.body.created_by,

            updated_by:req.body.updated_by,


        };

      await  candidateJoiningDetails.create(joining)
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
    let data= await candidateJoiningDetails.findAll()
       res.send(data);
  }