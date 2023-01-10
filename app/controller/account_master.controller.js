const db = require("../models");
const AccountMaster= db.accountMaster;
const Op = db.Sequelize.Op;

exports.create = async(req,res)=>{
    console.log("hiiiiii");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

        const account= {
            accountName:req.body.accountName,
            createdBy:req.body.createdBy,
            updatedBy:req.body.updatedBy
        };

      await  AccountMaster.create(account)
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
    let data= await AccountMaster.findAll()
       res.send(data);
  }