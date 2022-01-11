exports.idValidator = require('./id.validator').idValidator;
exports.universityValidator = require('./university.validator').universityValidator;
exports.universityListValidator = require('./university.validator').universityListValidator;
exports.filterByUniversityId = require('./user.validator').filterByUniversityId;
exports.userValidator = require('./user.validator').userValidator;
exports.courseValidator = require('./course.validator').courseValidator;
exports.ratingValidator = require('./mark.validator').ratingValidator;
exports.userCourseValidator = require('./user.validator').userCourseValidator;
exports.markValidator = require('./mark.validator').markValidator;

    
exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });

  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  return { value: result.value };
};
