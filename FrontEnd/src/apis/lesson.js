import api from './api';
import { getToken } from '../utils/localStorage';

const getLessons = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: '/lessons',
    });
    return response;
  } catch (error) {
    return null;
  }
};

const createLesson = async (title, imageURL) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'POST',
      url: '/lesson',
      data: { title, imageURL },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

const updateLesson = async (lessonId, title, imageURL) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'PUT',
      url: `/lesson/${lessonId}`,
      data: { title, imageURL },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

const deleteLesson = async (lessonId) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'DELETE',
      url: `/lesson/${lessonId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getLessons, createLesson, updateLesson, deleteLesson };
