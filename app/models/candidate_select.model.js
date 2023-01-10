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
            foreignKey: true
        },

        bu_approved:{
            type:Sequelize.BOOLEAN,
            foreignKey: true
        },

        l1_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        l2_select:{
            type:Sequelize.BOOLEAN,
            foreignKey: true,
        },

        l3_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        prescreen_select:{
            type:Sequelize.BOOLEAN,
            allowNull: true
        },

        colorcode:{
            type:Sequelize.STRING
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