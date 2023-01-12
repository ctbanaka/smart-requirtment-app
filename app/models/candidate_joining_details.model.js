module.exports = (sequelize, Sequelize) =>{
 
    const CandidateJoiningDetails = sequelize.define("candidate_joining_details",{

        doj:{
            type:Sequelize.DATE,
            allowNull: false
        },

        joining_month:{
            type:Sequelize.DATE
        },
        
        notice_period:{
            type:Sequelize.INTEGER
        },
        created_by:{
            type:Sequelize.STRING
        },
        
        updated_by:{
            type:Sequelize.STRING
        }

    });
    
    return CandidateJoiningDetails;
}

