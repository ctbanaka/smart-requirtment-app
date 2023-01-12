module.exports = (sequelize, Sequelize) =>{
 
    const CandidateSelect = sequelize.define("candidate_select",{

         

        l1_l2_onhold:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l1_l2_select:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        
        l1_l2_scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l3_scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l2_scheduled:{
            type:Sequelize.BOOLEAN,
           
        },

        l1_scheduled:{
            type:Sequelize.BOOLEAN,
            
        },

        joined:{
            type:Sequelize.BOOLEAN,
           
        },

        offer_accept:{
            type:Sequelize.BOOLEAN,  
        },
        bu_approved:{
            type:Sequelize.BOOLEAN,            
        },
       

        l1_select:{
            type:Sequelize.BOOLEAN,
        },

        l2_select:{
            type:Sequelize.BOOLEAN,  
        },

        l3_select:{
            type:Sequelize.BOOLEAN,
        },

        prescreen_select:{
            type:Sequelize.BOOLEAN,
        },

        joining_bonus:{
            type:Sequelize.INTEGER
        },

        colorcode:{
            type:Sequelize.STRING
        },

        labelling:{
             type:Sequelize.STRING
            },

        selectratio:{
            type:Sequelize.INTEGER
        },

        created_by:{
            type:Sequelize.STRING,
            allowNull: true
        },
        
        updated_by:{
            type:Sequelize.STRING,
            allowNull: true
        },

         
    });
    
    return CandidateSelect;
}