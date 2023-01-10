const db = require("../models");
const SkillMaster= db.skillMaster;
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

        const skills= {
            skill_name:req.body.skill_name,
            created_by:req.body.created_by,
            updated_by:req.body.updated_by
        };

      await  SkillMaster.create(skills)
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
    let data= await SkillMaster.findAll()
       res.send(data);
  }