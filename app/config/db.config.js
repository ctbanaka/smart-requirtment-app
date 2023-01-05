module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Chetan#1997",
    DB: "smartapp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
 // postgres://username:password@hostname/databasename
 //postgres://awvhaebv:DJVfhyWFC0inpLRhkserWTxb2QSb38nT@ziggy.db.elephantsql.com/awvhaebv