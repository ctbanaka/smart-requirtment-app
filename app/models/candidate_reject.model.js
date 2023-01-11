module.exports = (sequelize, Sequelize) =>{
 
    const CandidateReject = sequelize.define("candidate_reject",{

        l1_l2_reject:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l1_reject:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        
        l2_reject:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        l3_reject:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        
        hr_reject:{
            type:Sequelize.BOOLEAN
        },
        bu_reject:{
             type:Sequelize.BOOLEAN
        },
        not_joined:{
          type:Sequelize.BOOLEAN
        },
        offer_decline:{
         type:Sequelize.BOOLEAN
        },
        prescreen_select:{
       type:Sequelize.BOOLEAN
        },
        colorcode:{
            type:Sequelize.STRING
        },

        labelling:{
             type:Sequelize.STRING
            },

        rejectratio:{
            type:Sequelize.INTEGER
        },
        created_by:{
        type:Sequelize.STRING
        },

        updated_by:{
       type:Sequelize.STRING
        },

    });
    
    return CandidateReject;
}

