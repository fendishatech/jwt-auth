const express = require("express");
const userController = require("./controller");
const { verifyToken } = require("../../middlewares/verifyToken");

const router = express.Router();

router.get("/users", verifyToken, userController.getUsers);
router.post("/users/register", userController.register);
router.post("/users/login", userController.login);

module.exports = router;
