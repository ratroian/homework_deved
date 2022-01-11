const validators = require('./validation');
const universityRepository = require('../database/repositories/university.repository');

exports.createUniversity = async (body) => {
  const { value, error } = validators.validate(body, validators.universityValidator);
  if (error) return { error };
  const { error: dbError, result } =
    await universityRepository.createUniversity(value);

  if (dbError) return { error: { status: 500, data: { dbError } } };
  return { result: { data: result, status: 200 } };
};

exports.getUniversityById = async (query) => {
  const { value, error } = validators.validate(query, validators.idValidator);
  if (error) return { error };
  const { error: dbError, result } =
    await universityRepository.getUniversityById(value.id);

  if (dbError) return { error: { status: 500, data: { dbError } } };
  return { result: { data: result, status: 200 } };
};

exports.getUniversitiesList = async (query) => {
  const { value, error } = validators.validate(
    query,
    validators.universityListValidator);
  if (error) return { error };

  const { error: dbError, result } =
    await universityRepository.getUniversitiesList(value);
  
  if (dbError) return { error: { status: 500, data: { dbError } } };
  return { result: { data: result, status: 200 } };
  
};

