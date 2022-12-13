const db = require("../models");
const Candidate = db.candidate;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const candidate = {
        selected: req.body.selected,
        joiningBonus: req.body.joiningBonus,
        offerPending: req.body.offerPending
    };

    Candidate.create(candidate)
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

exports.count = async (req, res) => {
   let data= await Candidate.count({ where: { offerPending: true } })
//    res.send(data);
   res.send({message:data});
        // .then(data => {
        //     console.log(data);
        //     res.status(data);
        // })
        // .catch(err => {
        //     res.sendstatus(500).send({
        //         message:
        //             err || "Some error occurred while fetching the data."
        //     });
        // });

}

exports.joiningBonus = async(req, res)=> {
    let data = await Candidate.count({where: {selected:true ,joiningBonus:true}})
    console.log(data);
    res.send({bonus:data});
}


exports.ratio = async (req,res)=> {
    let data = await Candidate.count();
    console.log(data);

    let totalratio = {};
    
    let selected = await Candidate.count({where:{selected:true}});
    let selectedRatio= (selected/data)*100;
    let rejectedRatio = 100-selectedRatio;
    
    totalratio.selectedRatio=selectedRatio;
    totalratio.rejectedRatio=rejectedRatio;

    res.send({totalratio});

}