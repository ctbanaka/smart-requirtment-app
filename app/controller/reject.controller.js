const db = require("../models");
const Reject = db.reject;
const Op = db.Sequelize.Op;


exports.create = (req, res) =>{

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const reject = {
        year: req.body.year,
        amount: req.body.amount,
        colorcode: req.body.colorcode
    };

    Reject.create(reject)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the data."
        });
    });
}

exports.rejected = async(req, res) => {
  let data = await Reject.findAll();
  res.send({data});
}