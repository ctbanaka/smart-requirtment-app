module.exports = (sequelize, Sequelize) =>{
 
    const CandidateCTC = sequelize.define("candidate_CTC",{

        candidate_Id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        current_ctc:{
            type:Sequelize.STRING,
            
        },
        exp_ctc:{
            type:Sequelize.STRING,
            
        },
        proposed_offer_ctc:{
            type:Sequelize.STRING,
            
        },
        average_c1_ctc:{
            type:Sequelize.STRING,
            
        },
        hike_percent:{
            type:Sequelize.STRING
        },
        offered_ctc:{
            type:Sequelize.STRING
        },
        threshold_value:{
            type:Sequelize.STRING
        },
        holding_offer:{
            type:Sequelize.STRING
        },
        created_by:{
            type:Sequelize.STRING
        },
        updated_by:{
            type:Sequelize.STRING
        },
       
        
    });
    
    return CandidateCTC;
}