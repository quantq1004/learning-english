import api from './api';

const getUserDetails = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: '/user',
    });

    return response;
  } catch (error) {
    return null;
  }
};

const updateUser = async (name, email, password) => {
  try {
    const response = await api({
      method: 'PUT',
      url: '/user',
      data: { name, email, password },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getUserDetails, updateUser };
