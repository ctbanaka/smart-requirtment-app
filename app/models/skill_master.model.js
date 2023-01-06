 
module.exports = (sequelize, Sequelize) =>{
 
    const SkillMaster = sequelize.define("skill_master",{

        skill_ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        skill_name:{
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
    
    return SkillMaster;
}