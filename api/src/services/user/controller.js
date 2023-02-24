const Users = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json({
      success: true,
      payload: users,
    });
  } catch (error) {
    res.status(500);
  }
};

const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(500).json("password and confirm password do not match");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await Users.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      payload: user,
      message: "User was created successfully",
    });
  } catch (error) {
    res.status(500);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        username: req.body.username,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "username or password not correct",
      });
    }

    const userId = user[0].id;
    const username = user[0].username;
    const email = user[0].email;

    const accessToken = jwt.sign(
      {
        userId,
        username,
        email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      {
        userId,
        username,
        email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "2d",
      }
    );

    await Users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: { id: userId },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure : true
    });

    res.json({
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  register,
  login,
};
