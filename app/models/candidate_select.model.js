module.exports = (sequelize, Sequelize) =>{
 
    const CandidateSelect = sequelize.define("candidate_select",{

         

        l1_l2_Onhold:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l1_l2_Select:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        
        l1_l2_Scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l3_Scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },

        l2_Scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        l1_Scheduled:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        joined:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        offer_accept:{
            type:Sequelize.BOOLEAN,
             
        },

        bu_approved:{
            type:Sequelize.BOOLEAN,
            
        },
       

        l1_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        l2_select:{
            type:Sequelize.BOOLEAN,
            
        },

        l3_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        prescreen_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
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