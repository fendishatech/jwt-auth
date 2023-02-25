const Sequelize = require("sequelize");
const db = require("../../helper/database");

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    // first_name: {
    //   type: DataTypes.STRING,
    // },
    // last_name: {
    //   type: DataTypes.STRING,
    // },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Users;
