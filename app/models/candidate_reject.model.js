module.exports = (sequelize, Sequelize) =>{
 
    const CandidateJoiningDetails = sequelize.define("candidate_joining_details",{

        candidate_ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
    
        },

        l1_l2_reject:{
            type:Sequelize.STRING,
            allowNull: false
        },

        l1_reject:{
            type:Sequelize.STRING,
            allowNull: false
        },
        
        l2_reject:{
            type:Sequelize.STRING,
            allowNull: false
        },
        l3_reject:{
            type:Sequelize.STRING,
            allowNull: false
        },
        
        hr_reject:{
            type:Sequelize.STRING
        },
        bu_reject:{
             type:Sequelize.STRING
        },
        not_joined:{
          type:Sequelize.STRING
        },
        offer_decline:{
         type:Sequelize.STRING
        },
        prescreen_select:{
       type:Sequelize.INTEGER
        },
        created_by:{
        type:Sequelize.STRING
        },

        updated_by:{
       type:Sequelize.STRING
        },

    });
    
    return CandidateJoiningDetails;
}

