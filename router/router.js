const URL = require('url');

const {
  CREATE_TEACHER,
  UNIVERSITY,
  UNIVERSITIES_LIST,
  TEACHERS_LIST,
  COURSE,
  COURCES_LIST,
  CREATE_STUDENT,
  DELETE_STUDENT,
  STUDENTS_LIST_UNIVERSITY,
  STUDENTS_LIST_COURSE,
  RAITING,
  UNIVERSITY_RAITING,
  STUDENT_COURSE,
  COURSE_STUDENT,
  STUDENT,
  MARK,
} = require('../constants/routes');

const {
  createTeacher,
  getTeachersList,
  createStudent,
  deleteStudent,
  getStudentsList,
  getStudentsListByCourse,
  bindStudentToCourse,
  updateStudent,
} = require('../controllers/user.controller');

const {
  createUniversity,
  getUniversityById,
  getUniversitiesList,
} = require('../controllers/university.controller');

const {
  createCourse,
  getCourcesList,
  deleteCourse,
  dropStudent,
} = require('../controllers/course.controller');

const {
  getStudentsRatingByCourseId,
  getStudentsRatingByUniversity,
  createMark,
} = require('../controllers/mark.controller');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    // 1. Create a request to create a university
    case method === 'POST' && pathname === UNIVERSITY:
      ({ result, error } = await createUniversity(body));
      break;

    // 2. Get university by id
    case method === 'GET' && pathname === UNIVERSITY:
      ({ result, error } = await getUniversityById(query));
      break;

    // 3.Create list of universities
    case method === 'GET' && pathname === UNIVERSITIES_LIST:
      ({ result, error } = await getUniversitiesList(query));
      break;

    // 4. Create a request to add a teacher to the university
    case method === 'POST' && pathname === CREATE_TEACHER:
      ({ result, error } = await createTeacher(body));
      break;

    // 5. Request for a list of teachers by university id
    case method === 'GET' && pathname === TEACHERS_LIST:
      ({ result, error } = await getTeachersList(query));
      break;

    // 6. Request to create a course
    case method === 'POST' && pathname === COURSE:
      ({ result, error } = await createCourse(body));
      break;

    // 7. Request for a list of cources by university id
    case method === 'GET' && pathname === COURCES_LIST:
      ({ result, error } = await getCourcesList(query));
      break;

    // 8. Request to delete a course
    case method === 'DELETE' && pathname === COURSE:
      ({ result, error } = await deleteCourse(query));
      break;

    // 9. Student creation request
    case method === 'POST' && pathname === CREATE_STUDENT:
      ({ result, error } = await createStudent(body));
      break;

    // 10. Request to remove a student by id
    case method === 'DELETE' && pathname === DELETE_STUDENT:
      ({ result, error } = await deleteStudent(query));
      break;

    // 11. Request for a list of students by university
    case method === 'GET' && pathname === STUDENTS_LIST_UNIVERSITY:
      ({ result, error } = await getStudentsList(query));
      break;

    // 12. Request for a list students by course
    case method === 'GET' && pathname === STUDENTS_LIST_COURSE:
      ({ result, error } = await getStudentsListByCourse(query));
      break;

    // 13 Request for student rating by course id
    case method === 'GET' && pathname === RAITING:
      ({ result, error } = await getStudentsRatingByCourseId(query));
      break;

    // 14 Request for bind stutdent to course
    case method === 'POST' && pathname === STUDENT_COURSE:
      ({ result, error } = await bindStudentToCourse(body));
      break;

    // 15 Request to drop a student from the course (grades must be cleared)
    case method === 'DELETE' && pathname === COURSE_STUDENT:
      ({ result, error } = await dropStudent(body));
      break;

    // 16 Request for a grade by teacher for the course
    case method === 'POST' && pathname === MARK:
      ({ result, error } = await createMark(body));
      break;

    // 18 Request to edit student data
    case method === 'PUT' && pathname === STUDENT:
      ({ result, error } = await updateStudent(body));
      break;

    // Request for student rating by university
    case method === 'GET' && pathname === UNIVERSITY_RAITING:
      ({ result, error } = await getStudentsRatingByUniversity());
      break;
 
    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }

  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify({ error }));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };


