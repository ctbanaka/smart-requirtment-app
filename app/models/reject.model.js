module.exports = (sequelize, Sequelize) => {

    const reject = sequelize.define("reject",{
        
       year: {
        type: Sequelize.INTEGER
       },
    
       amount:{
        type: Sequelize.INTEGER
       },
    
       colorcode: {
        type: Sequelize.TEXT
       }
    
    });
     
    return reject;
    }
    