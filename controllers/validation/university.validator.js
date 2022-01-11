const Joi = require('joi');

exports.universityValidator = Joi.object().keys({
  country: Joi.string().required(),
  city: Joi.string().required(),
  name: Joi.string().required(),
  accreditation: Joi.number().min(0).max(6).required(),
});

exports.universityListValidator = Joi.object().keys({
  page: Joi.number().min(0),
  perPage: Joi.string().min(0),
  name: Joi.string(),
});

