const validators = require('./validation');
const courseRepository = require('../database/repositories/course.repository');

exports.createCourse = async (body) => {
    const res = validators.validate(body, validators.courseValidator);
    if (res.error) return { error: res.error };
    const { error, result } =
    await courseRepository.createCourse (res.value);

    if (error) return { error };
    return { result: { data: result, status: 200 } };
};

exports.getCourcesList = async (body) => {
  const res = validators.validate(body, validators.filterByUniversityId);
  if (res.error) return { error: res.error };

  const { error, result } = await courseRepository.getCourcesList(res.value);

  if (error) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 201 } };
};

exports.deleteCourse = async (query) => {
    const res = validators.validate(query, validators.idValidator);
    if (res.error) return { error: res.error };
    const { error, result } = await courseRepository.deleteCourse(res.value);

    if (error) return { error };
    return { result: { data: result, status: 200 } };
};

exports.dropStudent = async (body) => {
    const res = validators.validate(body, validators.courseValidator);
    if (res.error) return { error: res.error };
    
    const { error, result } = await dropStudent(res.value);

    if (error) return { error };
    return { result: { data: result, status: 200 } };
};