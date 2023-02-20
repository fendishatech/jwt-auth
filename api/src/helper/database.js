const Sequelize = require("sequelize");

const db = new Sequelize("jwt_auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
