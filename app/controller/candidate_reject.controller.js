const db = require("../models");

const CandidateReject= db.candidateReject;

const Op = db.Sequelize.Op;



exports.create = (req,res)=>{

    if (!req.body) {

        res.status(400).send({

            message: "Content can not be empty!"

        });

        return;

    }

        const candidateReject= {

           

            l1_l2_reject:req.body.l1_l2_reject,

            l1_reject:req.body.l1_reject,

            l2_reject:req.body.l2_reject,

            l3_reject:req.body.l3_reject,

            hr_reject:req.body.hr_reject,

            bu_reject:req.body.bu_reject,

            not_joined:req.body.not_joined,

            offer_decline:req.body.offer_decline,

            prescreen_select:req.body.prescreen_select,

            colorcode:req.body.colorcode,

            labelling:req.body.labelling,

            rejectratio:req.body.rejectratio,

            created_by:req.body.created_by,

            updated_by:req.body.updated_by,

       

        };



        CandidateReject.create(candidateReject)

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

    let data= await CandidateReject.findAll()

       res.send(data);

  }

