const Joi = require('joi');

exports.courseValidator = Joi.object().keys({
  name: Joi.string().required(),
  teacherId: Joi.number().min(1).required(),
});


