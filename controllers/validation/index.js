exports.idValidator = require('./id.validator').idValidator;
exports.userValidator = require('./user.validator').userValidator;

exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });

  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  return { value: result.value };
};
