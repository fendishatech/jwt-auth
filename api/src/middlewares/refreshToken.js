const Users = require("../services/user/model");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    // GET REFRESH TOKEN
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    // GET USER WITH THAT REFRESH TOKEN IN THE DATABASE
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    // IF THERE IS NO USER WITH THAT REFRESH TOKEN
    if (!user[0]) {
      return res.sendStatus(403);
    }
    // VERIFY
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      const userId = user[0].id;
      const username = user[0].username;
      const email = user[0].email;
      const accessToken = jwt.sign(
        { userId, username, email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15s",
        }
      );

      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = refreshToken;
