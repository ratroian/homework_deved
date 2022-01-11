const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');

const createTeacher = async (body) => {
    const res = validators.validate(body, validators.userValidator);
    if (res.error) return { error: res.error };
    const { error, result } = await userRepository.createUser(res.value);
    if (error) return { error};
    return { result: { data: result, status: 200 } };
};

const getTeachersList = async (body) => {
    const res = validators.validate(body, validators.filterByUniversityId);
    if (res.error) return { error: res.error };

    const { error, result } = await userRepository.getTeachersList (res.value);

    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
};

const createStudent = async (body) => {
    const res = validators.validate(body, validators.userValidator);
    if (res.error) return { error: res.error };
    const { error, result } = await userRepository.createUser(res.value);
    if (error) return { error };
    return { result: { data: result, status: 200 } };
};

const deleteStudent = async (query) => {
    const { value, error } = validators.validate(query, validators.idValidator);
    if (error) return { error };

    const { error: dbError } = await userRepository.checkStudent(value.id);

    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
};

const getStudentsList = async (body) => {
    const res = validators.validate(body, validators.filterByUniversityId);
    if (res.error) return { error: res.error };

    const { error, result } = await userRepository.getStudentsList(res.value);

    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
};

const getStudentsListByCourse = async (query) => {
    const res = validators.validate(query, validators.idValidator);
    if (res.error) return { error: res.error };

    const { error, result } = await userRepository.getStudentsListByCourse(
        res.value.id
    );

    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
}; 

const bindStudentToCourse = async (query) => {
    const res = validators.validate(query, validators.userCourseValidator);
    if (res.error) return { error: res.error };
    
    const { error, result } = await userRepository.bindStudentToCourse(res.value);

    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
}; 

const updateStudent = async (body) => {
    const { value, error } = validators.validate(body, validators.idValidator);
    if (error) return { error };
  const { error: dbError, result } =
    await universityRepository.updateStudent(body);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  createTeacher,
  getTeachersList,
  createStudent,
  deleteStudent,
  getStudentsList,
  getStudentsListByCourse,
  bindStudentToCourse,
  updateStudent,
};
