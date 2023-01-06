module.exports = (sequelize, Sequelize) =>{
 
    const CandidateSelect = sequelize.define("candidate_select",{

         

        l1_l2_Onhold:{
            type:Sequelize.STRING,
            allowNull: false
        },

        l1_l2_Select:{
            type:Sequelize.STRING,
            allowNull: false
        },
        
        l1_l2_Scheduled:{
            type:Sequelize.STRING,
            allowNull: false
        },

        l3_Scheduled:{
            type:Sequelize.STRING,
            allowNull: false
        },

        l2_Scheduled:{
            type:Sequelize.STRING,
            allowNull: true
        },

        l1_Scheduled:{
            type:Sequelize.STRING,
            allowNull: true
        },

        joined:{
            type:Sequelize.STRING,
            allowNull: true
        },

        offer_accept:{
            type:Sequelize.STRING,
            foreignKey: true
        },

        bu_approved:{
            type:Sequelize.INTEGER,
            foreignKey: true
        },

        l1_select:{
            type:Sequelize.INTEGER,
            allowNull: true
        },

        l2_select:{
            type:Sequelize.INTEGER,
            foreignKey: true,
        },

        l3_select:{
            type:Sequelize.INTEGER,
            allowNull: true
        },

        prescreen_select:{
            type:Sequelize.INTEGER,
            allowNull: true
        },

        created_by:{
            type:Sequelize.INTEGER,
            allowNull: true
        },

         

        updated_by:{
            type:Sequelize.STRING,
            allowNull: true
        },

         
    });
    
    return CandidateSelect;
}