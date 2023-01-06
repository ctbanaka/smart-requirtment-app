module.exports = (sequelize, Sequelize) =>{
 
    const AccountMaster = sequelize.define("account_master",{

        accountId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        accountName:{
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
    
    return AccountMaster;
}

