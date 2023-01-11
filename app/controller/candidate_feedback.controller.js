// const db = require("../models");

// const CandidateFeedbackInfo= db.candidateFeedbackInfo;

// const Op = db.Sequelize.Op;
const { candidateFeedbackInfo } = require("../models");



exports.create = async(req,res)=>{

    console.log("hiiiiii");

    if (!req.body) {

        res.status(400).send({

            message: "Content can not be empty!"

        });

        return;

    }

    else{console.log("working")};



        const info= {

            l1_panel_name:req.body.l1_panel_name,

            l1_avarage_rating:req.body.l1_avarage_rating,

            l2_panel_name:req.body.l2_panel_name,

            l2_avarage_rating:req.body.l2_avarage_rating,

            created_by:req.body.created_by,

            updated_by:req.body.updated_by

        };



      await  candidateFeedbackInfo.create(info)

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



  exports.getAll = async (req, res) => {

    let data= await candidateFeedbackInfo.findAll()

       res.send(data);

  }