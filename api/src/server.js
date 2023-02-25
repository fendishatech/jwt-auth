const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const db = require("./helper/database");
const userRouter = require("./services/user/routes");
// DEBUG
const { migrateSchema } = require("./helper/migrate");

// APP
const app = express();

// MIDDLE WARES
app.use(cookieParser());
app.use(express.json());
dotenv.config();

// migrateSchema();

// ROUTES
app.use("/api/", userRouter);

// SERVER
app.listen(3333, () => console.log("Server running at http://localhost:3333"));
