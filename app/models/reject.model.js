module.exports = (sequelize, Sequelize) => {

    const Candidate = sequelize.define("reject",{
        
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
    