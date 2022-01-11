const Joi = require('joi');

exports.mark = Joi.object({
  mark: Joi.number().integer().min(0).max(100).required(),
  student_id: Joi.number().positive().integer().required(),
  course_id: Joi.number().positive().integer().required(),
});

exports.ratingValidator = Joi.object({
  course_id: Joi.number().positive().integer().required(),
  limit: Joi.number().integer().positive().default(10),
});

