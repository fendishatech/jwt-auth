const express = require("express");
const db = require("./helper/database");
// APP
const app = express();
const connect = async () => {
  try {
    await db.authenticate();
    console.log("Database is connected");
  } catch (error) {
    console.error(error);
  }
};

connect();
// SERVER
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
