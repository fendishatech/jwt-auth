const express = require("express");
const userController = require("./controller");

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.register);

module.exports = router;
