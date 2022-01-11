const validators = require('./validation');
const markRepository = require('../database/repositories/mark.repository');

exports.getStudentsRatingByCourseId = async (query) => {
    const res = validators.validate(query, validators.ratingValidator);
    if (res.error) return { error: res.error };

  const { error, result } = await markRepository.getStudentsRatingByCourseId(res.value);

  if (error) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 201 } };
};

exports.createMark = async (body) => {
    const res = validators.validate(body, validators.markValidator);
    if (res.error) return { error: res.error };

    const { error, result } = await markRepository.createMark(res.value);
    if (error) return { error };
    return { result: { data: result, status: 200 } };
};

exports.getStudentsRatingByUniversity = async () => {
  const { error, result } = await markRepository.getStudentsRatingByUniversity();

  if (error) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 201 } };
}; 

 