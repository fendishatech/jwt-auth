const Users = require("./model");
const bcrypt = require("bcrypt");

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
  const { email, password } = req.body;
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

module.exports = {
  getUsers,
  register,
};
