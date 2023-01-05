 
module.exports = (sequelize, Sequelize) =>{
 
    const SkillMaster = sequelize.define("skill_master",{

        skillId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        skillName:{
            type:Sequelize.STRING,
            allowNull: false
        },

        createdBy:{
            type:Sequelize.STRING
        },
        
        updatedBy:{
            type:Sequelize.STRING
        }
    });
    
    return SkillMaster;
}