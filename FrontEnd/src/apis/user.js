import api from './api';

const login = async (email, password) => {
  try {
    const response = await api({
      method: 'POST',
      url: '/users/login',
      data: { email, password },
    });

    return response;
  } catch (error) {
    return null;
  }
};

const register = async (name, email, password) => {
  try {
    const response = await api({
      method: 'POST',
      url: '/users/register',
      data: { name, email, password },
    });
    return response;
  } catch (error) {
    return null;
  }
};

const getUserDetails = async (userId) => {
  try {
    const response = await api({
      method: 'GET',
      url: `/users/${userId}`,
    });

    return response;
  } catch (error) {
    return null;
  }
};

const updateUser = async ({ name, email, userId }) => {
  try {
    const response = await api({
      method: 'PUT',
      url: `/users/${userId}`,
      data: { name, email },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { login, register, getUserDetails, updateUser };
