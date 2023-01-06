module.exports = (sequelize, Sequelize) =>{
 
    const GradeMaster = sequelize.define("grade_master",{

        grade_ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        grade_name:{
            type:Sequelize.STRING,
            allowNull: false
        },

        created_by:{
            type:Sequelize.STRING
        },
        
        updated_by:{
            type:Sequelize.STRING
        }
    });
    
    return GradeMaster;
}