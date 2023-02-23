const express = require("express");
const db = require("./helper/database");

const userRouter = require("./services/user/routes");
// APP
const app = express();

// MIDDLE WARES
app.use(express.json());

// ROUTES
app.use("/api/", userRouter);

// SERVER
app.listen(3333, () => console.log("Server running at http://localhost:3333"));

// Database Tester
// const connect = async () => {
//   try {
//     await db.authenticate();
//     console.log("Database is connected");
//   } catch (error) {
//     console.error(error);
//   }
// };

// connect();
