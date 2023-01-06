module.exports = (sequelize, Sequelize) =>{
 
    const CandidateDetails = sequelize.define("candidate_detail",{

        candidate_Id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        candidate_Name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        email_Id:{
            type:Sequelize.STRING,
            allowNull: false
        },
        no_of_year:{
            type:Sequelize.STRING,
            allowNull: false
        },
        current_company:{
            type:Sequelize.STRING,
            allowNull: false
        },
        joining_location:{
            type:Sequelize.STRING
        },
        current_status:{
            type:Sequelize.STRING
        },
        tower:{
            type:Sequelize.STRING
        },
        skill_ID:{
            type:Sequelize.STRING
        },
        grade_ID:{
            type:Sequelize.STRING
        },
        grade_proposed_bu:{
            type:Sequelize.STRING
        },
        account_ID:{
            type:Sequelize.STRING
        },
        arc_new_grade:{
            type:Sequelize.STRING
        },
        salary:{
            type:Sequelize.STRING
        },
        arc_deviation_new_grade:{
            type:Sequelize.STRING
        },
        B1:{
            type:Sequelize.STRING
        },
        B2:{
            type:Sequelize.STRING
        },
        C1:{
            type:Sequelize.STRING
        },
        C2:{
            type:Sequelize.STRING
        },
        D1:{
            type:Sequelize.STRING
        },
        D2:{
            type:Sequelize.STRING
        },
        
    });
    
    return CandidateDetails;
}