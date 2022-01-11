const Joi = require('joi');

exports.userValidator = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    universityId: Joi.number().integer().min(0).required(),
    status: Joi.string().required()
});

exports.filterByUniversityId = Joi.object().keys({
  universityId: Joi.number().integer().min(0).required(),
  page: Joi.number().min(0),
  perPage: Joi.string().min(0),
  name: Joi.string(),
});

exports.userCourseValidator = Joi.object().keys({
  courseId: Joi.number().integer().min(0).required(),
  userId: Joi.number().integer().min(0).required(),
});

