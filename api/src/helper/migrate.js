const db = require("./database");
const userModel = require("../services/user/model");

const migrateSchema = async () => {
  try {
    await db.authenticate();
    console.log("Database is connected");
    await userModel.sync();
    console.log("Migration must'a went well!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  migrateSchema,
};
