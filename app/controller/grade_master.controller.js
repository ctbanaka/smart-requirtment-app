const db = require("../models");
const GradeMaster= db.gradeMaster;
const Op = db.Sequelize.Op;

exports.create = async(req,res)=>{
    console.log("hiiiiii");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

        const grade= {
            grade_name:req.body.grade_name,
            created_by:req.body.created_by,
            updated_by:req.body.updated_by
        };

      await GradeMaster.create(grade)
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
    let data= await GradeMaster.findAll()
       res.send(data);
  }