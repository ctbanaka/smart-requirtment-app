module.exports = (sequelize, Sequelize) =>{
 
    const candidateExperience = sequelize.define("candidate_experience",{

        candidate_ID:{
            type: Sequelize.INTEGER,    
        },

        relevant_exp:{
            type:Sequelize.INTEGER
        
        },

        total_exp:{
            type:Sequelize.STRING
        },
        
        level_based_exp:{
            type:Sequelize.STRING
        },

        proposed_grade:{
            type:Sequelize.STRING
        },

        band_diviation:{
            type:Sequelize.STRING
        },

        created_by:{
            type:Sequelize.STRING
        },
        
        updated_by:{
            type:Sequelize.STRING
        }

    });
    
    return candidateExperience;
}