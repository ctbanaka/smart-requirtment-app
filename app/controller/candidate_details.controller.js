  //post

  const { candidateDetails } = require("../models");
  

  exports.create = async(req,res)=>{
    console.log("hiiiiii");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    else{console.log("working")};

        const details= {
            candidate_Id:req.body.candidate_Id,

            candidate_Name:req.body.candidate_Name,

            email_Id:req.body.email_Id,

            no_of_year:req.body.no_of_year,

            current_company:req.body.current_company,

            joining_location:req.body.joining_location,

            current_status:req.body.current_status,

            tower:req.body.tower,

            grade_proposed_bu:req.body.grade_proposed_bu,

            arc_new_grade:req.body.arc_new_grade,

            salary:req.body.salary,

            arc_deviation_new_grade:req.body.arc_deviation_new_grade,

            B1:req.body.B1,

            B2:req.body.B2,

            C1:req.body.C1,

            C2:req.body.C2,

            D1:req.body.D1,

            D2:req.body.D2

        };

      await  candidateDetails.create(details)
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
    let data= await candidateDetails.findAll()
       res.send(data);
  }