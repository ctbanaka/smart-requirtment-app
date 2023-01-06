const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.candidateDetails= require("./candidate_details.model.js")(sequelize, Sequelize);
db.gradeMaster = require("./grade_master.model.js")(sequelize, Sequelize);
db.candidate = require("./candidate.model.js")(sequelize, Sequelize);
db.accountMaster= require("./account_master.model.js")(sequelize, Sequelize);
db.skillMaster = require("./skill_master.model.js")(sequelize, Sequelize);
db.candidateFeedbackInfo= require("./candidate_feedback_info.model.js")(sequelize, Sequelize);
db.candidateExperience = require("./candidate_experience.model.js")(sequelize, Sequelize);
db.candidateSelect = require("./candidate_select.model.js")(sequelize, Sequelize);
db.candidateReject = require("./candidate_reject.model.js")(sequelize, Sequelize);
db.skillMaster= require("./skill_master.model.js")(sequelize, Sequelize);
db.candidateCTC= require("./candidate_CTC.model.js")(sequelize, Sequelize);
db.candidateJoiningDetails= require("./candidate_joining_details.model.js")(sequelize, Sequelize);


db.candidateDetails.belongsTo(db.skillMaster,{foriegnKey:'skill_id'});
db.candidateDetails.belongsTo(db.gradeMaster,{foriegnKey:'geade_id'});
db.candidateDetails.belongsTo(db.accountMaster,{foriegnKey:'account_id'})
db.candidateExperience.belongsTo(db.candidateDetails);
db.candidateCTC.belongsTo(db.candidateDetails);
db.candidateFeedbackInfo.belongsTo(db.candidateDetails,{foriegnKey:'candidate_Id'});
db.candidateSelect.belongsTo(db.candidateDetails);
db.candidateReject.belongsTo(db.candidateDetails);

module.exports = db;
