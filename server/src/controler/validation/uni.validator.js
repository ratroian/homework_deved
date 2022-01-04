const Joi = require('joi');

exports.factorialValidate = Joi.object().keys({
  type: Joi.string().valid('recursion', 'cycle').required(),
  number: Joi.number().required(),
});

