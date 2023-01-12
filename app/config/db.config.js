module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "apeksha@16",
    DB: "smart",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
 