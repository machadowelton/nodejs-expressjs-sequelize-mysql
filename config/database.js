const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'express_sequelize',
    host: process.env.DB_IP_HOST,
    dialect: 'mysql'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }
};