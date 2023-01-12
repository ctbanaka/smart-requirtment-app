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

        joining_location:req.body.joining_location,

        current_status:req.body.current_status,

        tower:req.body.tower,

        grade_proposed_bu:req.body.grade_proposed_bu,

        arc_new_grade:req.body.arc_new_grade,

        salary:req.body.salary,

        skill_ID:req.body.skill_ID,

        arc_deviation_new_grade:req.body.arc_deviation_new_grade,

        B1:req.body.B1,

        B2:req.body.B2,

        C1:req.body.C1,

        C2:req.body.C2,

        D1:req.body.D1,

        D2:req.body.D2,

        



        

    };



    await  CandidateDetails.create(candidate)



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



    let data= await CandidateDetails.findAll()



       res.send(data);



  }