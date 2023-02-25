const Users = require("./model");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = refreshToken;
