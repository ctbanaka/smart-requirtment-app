  //post

  const db = require("../models");
  const accountMaster= db.accountMaster;
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

        const accounts= {
            accountId:req.body.accountId,
            accountName:req.body.accountName,
            createdBy:req.body.createdBy,
            updatedBy:req.body.updatedBy,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt
        };

      await  accountMaster.create(accounts)
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
    let data= await accountMaster.findAll()
       res.send(data);
  }