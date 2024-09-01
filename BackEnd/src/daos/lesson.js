const { ObjectId } = require('mongoose').Types;
const Lesson = require('../models/lessons');

const createLesson = async ({ title, imageURL }) => {
  const lesson = await Lesson.create({ title, imageURL });
  return lesson;
};

const getLessons = async (condition) => {
  const lessons = await Lesson.find(condition).lean();
  return lessons;
};

const getLesson = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const lesson = await Lesson.findById(condition);
    return lesson;
  }
  if (typeof condition === 'object' && condition !== null) {
    const lesson = await Lesson.findOne(condition);
    return lesson;
  }
  return null;
};

const updateLesson = async (id, updateFields) => {
  const lesson = await Lesson.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
  return lesson;
};

const deleteLesson = async (id) => {
  const lesson = await Lesson.findByIdAndDelete(id);
  return lesson;
};

module.exports = {
  createLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson,
};
