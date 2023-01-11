  //post

  const db = require("../models");
  const gradeMaster= db.gradeMaster;
  const Op = db.Sequelize.Op;

  exports.create = async(req,res)=>{
    console.log("hiiiiii");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    else{console.log("working")};

        const grade= {
            grade_ID:req.body.grade_ID,
            grade_name:req.body.grade_name,
            created_by:req.body.created_by,
            updated_by:req.body.updated_by,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt
        };

      await  gradeMaster.create(grade)
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
    let data= await gradeMaster.findAll()
       res.send(data);
  }