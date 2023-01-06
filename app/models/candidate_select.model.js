module.exports = (sequelize, Sequelize) =>{
 
    const CandidateSelect = sequelize.define("candidate_select",{

        candidate_ID:{
            type: Sequelize.NUMBER,
        },

        l1_l2_Onhold:{
            type:Sequelize.VARCHAR,
            allowNull: false
        },

        l1_l2_Select:{
            type:Sequelize.VARCHAR,
            allowNull: false
        },
        
        l1_l2_Scheduled:{
            type:Sequelize.VARCHAR,
            allowNull: false
        },

        l3_Scheduled:{
            type:Sequelize.VARCHAR,
            allowNull: false
        },

        l2_Scheduled:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        l1_Scheduled:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        joined:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        offer_accept:{
            type:Sequelize.VARCHAR,
            foreignKey: true
        },

        bu_approved:{
            type:Sequelize.NUMBER,
            foreignKey: true
        },

        l1_select:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        l2_select:{
            type:Sequelize.NUMBER,
            foreignKey: true,
        },

        l3_select:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        prescreen_select:{
            type:Sequelize.NUMBER,
            allowNull: true
        },

        created_by:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        // created_date:{
        //     type:Sequelize.DATE,
        //     allowNull: true
        // },

        updated_by:{
            type:Sequelize.VARCHAR,
            allowNull: true
        },

        // updated_date:{
        //     type:Sequelize.DATE,
        //     allowNull: true
        // },
    });
    
    return CandidateSelect;
}