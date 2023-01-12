module.exports = (sequelize, Sequelize) =>{
 
    const CandidateDetails = sequelize.define("candidate_detail",{

        candidate_Id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        candidate_name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        email_id:{
            type:Sequelize.STRING,
            allowNull: false
        },
        no_of_year:{
            type:Sequelize.INTEGER,
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
         
        grade_proposed_bu:{
            type:Sequelize.STRING
        },
         
        arc_new_grade:{
            type:Sequelize.STRING
        },
        salary:{
            type:Sequelize.INTEGER
        },
        is_offerred:{
           type:Sequelize.BOOLEAN 
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