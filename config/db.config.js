// database
  module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'olalekan1',
    DB: 'bincomphptest', 
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

