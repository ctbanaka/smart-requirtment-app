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


db.candidateDetails.belongsTo(db.skillMaster,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.skillMaster.hasMany(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

db.candidateDetails.belongsTo(db.gradeMaster,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.gradeMaster.hasMany(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

db.candidateDetails.belongsTo(db.accountMaster,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.accountMaster.hasMany(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

db.candidateExperience.belongsTo(db.candidateDetails,{ foreignKey: { allowNull: false}, onDelete: 'CASCADE' });
db.candidateDetails.hasOne(db.candidateExperience,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

db.candidateCTC.belongsTo(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.candidateDetails.hasOne(db.candidateCTC,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

db.candidateFeedbackInfo.belongsTo(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.candidateDetails.hasOne(db.candidateFeedbackInfo,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

db.candidateSelect.belongsTo(db.candidateDetails,{ foreignKey: { allowNull:false }, onDelete: 'CASCADE' });
db.candidateDetails.hasOne(db.candidateSelect,{ foreignKey: { allowNull:false}, onDelete: 'CASCADE' });

db.candidateReject.belongsTo(db.candidateDetails,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.candidateDetails.hasOne(db.candidateReject,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

module.exports = db;
