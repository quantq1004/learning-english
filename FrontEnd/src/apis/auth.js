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

export { login, register };
