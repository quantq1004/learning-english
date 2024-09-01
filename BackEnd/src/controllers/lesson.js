const lessonDao = require('../daos/lesson');

const createLesson = async (req, res) => {
  const { title, imageURL } = req.body;
  const lesson = await lessonDao.createLesson({ title, imageURL });
  return res.send({ status: 1, result: { lesson } });
};

const getLessons = async (req, res) => {
  const searchParams = req.query;
  const lessons = await lessonDao.getLessons(searchParams);
  return res.send({ status: 1, result: { lessons } });
};

const getLesson = async (req, res) => {
  const { id } = req.params;
  const lesson = await lessonDao.getLesson(id);
  return res.send({ status: 1, result: { lesson } });
};

const updateLesson = async (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;
  const lesson = await lessonDao.updateLesson(id, updateInfo);
  return res.send({ status: 1, result: { lesson } });
};

const deleteLesson = async (req, res) => {
  const { id } = req.params;
  await lessonDao.deleteLesson(id);
  return res.send({ status: 1 });
};

module.exports = {
  createLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson,
};
