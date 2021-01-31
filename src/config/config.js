const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'triyoAPI',
    user: process.env.DB_USER || 'triyoAPI',
    password: process.env.DB_PASS || 'triyoAPI',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../triyoAPI.sqlite')
    }
  }
};
