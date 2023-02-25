const express = require("express");
const userController = require("./controller");
const { verifyToken } = require("../../middlewares/verifyToken");
const refreshToken = require("../../middlewares/refreshToken");

const router = express.Router();

router.get("/users", verifyToken, userController.getUsers);
router.post("/users/register", userController.register);
router.post("/users/login", userController.login);
router.get("/users/token", refreshToken);

module.exports = router;
