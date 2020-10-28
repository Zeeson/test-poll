// database
  module.exports = {
    HOST: 'us-cdbr-east-02.cleardb.com',
    USER: 'b28d90dcbe2070',
    PASSWORD: 'aece22fe',
    DB: 'heroku_e99b24947ad9159', 
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

