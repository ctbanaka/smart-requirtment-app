module.exports = (sequelize, Sequelize) =>{
 
    const candidateFeedback = sequelize.define("candidate_feedback_info",{

        l1_panel_name:{
            type:Sequelize.STRING
        
        },

        l1_avarage_rating:{
            type:Sequelize.INTEGER
        },
        
        l2_panel_name:{
            type:Sequelize.STRING
        
        },

        l2_avarage_rating:{
            type:Sequelize.INTEGER
        },
         
        created_by:{
            type:Sequelize.STRING
        },
        
        updated_by:{
            type:Sequelize.STRING
        }

    });
    
    return candidateFeedback;
}