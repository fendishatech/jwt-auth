const Users = require("./model");

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
