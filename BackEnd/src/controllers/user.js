const authService = require('../services/user');
const userDao = require('../daos/user');

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await authService.register({ email, name, password });
  return res.send({
    status: 1,
    result: { email: user.email, name: user.name },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await authService.login(email, password);
  return res.send({ status: 1, result: { accessToken } });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  let user = await userDao.getUserById(id);
  if (user.toObject) user = user.toObject();
  delete user.password;
  return res.send({ status: 1, result: { user } });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;
  let user = await userDao.updateUser(id, updateFields);
  if (user.toObject) user = user.toObject();
  delete user.password;
  return res.send({ status: 1, result: { user } });
};

module.exports = { register, login, getUserById, updateUser };
