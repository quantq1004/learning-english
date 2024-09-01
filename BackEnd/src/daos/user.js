const { ObjectId } = require('mongoose').Types;
const User = require('../models/users');

const createUser = async ({ email, name, password }) => {
  const user = await User.create({ email, name, password });
  return user;
};

const findUser = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const user = await User.findById(condition);
    return user;
  }

  if (typeof condition === 'object' && condition !== null) {
    const user = await User.findOne(condition);
    return user;
  }

  return null;
};

module.exports = { createUser, findUser };
