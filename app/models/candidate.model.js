module.exports = (sequelize, Sequelize) => {

const Candidate = sequelize.define("candidate",{
    
   selected: {
    type: Sequelize.BOOLEAN
   },

   joiningBonus:{
    type: Sequelize.BOOLEAN
   },

   offerPending: {
    type: Sequelize.BOOLEAN
   }

});

return Candidate;
}
