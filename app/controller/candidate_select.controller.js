// const db = require("../models");
// const CandidateSelect= db.candidateSelect;
// const Op = db.Sequelize.Op;

// exports.create = (req,res)=>{
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
//         const candidateSelect= {candidateSelect:req.body};

//         CandidateSelect.create(candidateSelect)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the data."
//             });
//         });
//   };
