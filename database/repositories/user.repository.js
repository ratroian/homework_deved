const pgClient = require('../index');

const checkUser = async (universityId) => {
  try {
    const checkUniversityId = await pgClient.query(
      `SELECT * FROM node.universities WHERE id = ${universityId}`
    );
    if (!checkUniversityId.rowCount)
      return {
        error: { status: 404, data: { message: 'University not found!' } },
      };

    return { result: checkUniversityId.rowCount };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

exports.createUser = async (user) => {
  try {
    const { name, age, universityId, status } = user;
    const { error } = await checkUser(universityId);
    if (error) return { error };
    const users = await pgClient.query(`
            INSERT INTO node.users (name, age, university_id, status)
            VALUES ('${name}', ${age}, ${universityId}, '${status}')
            RETURNING id
            `);
    const newObject = {
      id: users.rows[0].id,
      name,
      age,
      universityId,
      status,
    };
    return { result: newObject };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

exports.getTeachersList = async (query) => {
  try {
    const { universityId, page, perPage, name } = query;

    let dbQuery = `
            SELECT * 
            FROM node.users
            WHERE status = 'teacher' AND university_id = ${universityId}
        `;
    if (name) dbQuery += `AND name ILIKE '%${name}%'`;

    if (page != undefined) {
      dbQuery += `LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`;
    }
    const result = await pgClient.query(dbQuery);
    return { result: { page, perPage, teachers: result.rows } };
  } catch (error) {
    return { error };
  }
};

exports.checkStudent = async (id) => {
  try {
    const userData = await pgClient.query(
      `SELECT * FROM node.users WHERE id = ${id}`
    );
    if (!userData.rowCount)
      return { status: 404, result: { message: 'Student not found!' } };
    const { status: userRole } = userData.rows[0];
    if (userRole !== 'student')
      return { status: 400, result: { message: 'This user is not student!' } };

    const { error: dbError, result } = await deleteStudent(id);
    if (dbError) return { status: 500, result: dbError };

    return { result };
  } catch (error) {
    return { error };
  }
};

const deleteStudent = async (id) => {
  try {
    await pgClient.query(
      `DELETE FROM node.users_cources WHERE user_id = ${id}`
    );
    await pgClient.query(`DELETE FROM node.marks WHERE student_id = ${id}`);
    await pgClient.query(`DELETE FROM node.users WHERE id = ${id}`);

    return { result: { message: 'Delete student successfully!' } };
  } catch (error) {
    console.log('[error]', error);
    return { error };
  }
};

exports.getStudentsList = async (query) => {
  try {
    const { universityId, page, perPage, name } = query;

    let dbQuery = `
            SELECT * 
            FROM node.users
            WHERE status = 'student' AND university_id = ${universityId}
        `;
    if (name) dbQuery += `AND name ILIKE '%${name}%'`;

    if (page != undefined) {
      dbQuery += `LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`;
    }
    const result = await pgClient.query(dbQuery);
    return { result: { page, perPage, students: result.rows } };
  } catch (error) {
    return { error };
  }
};

exports.getStudentsListByCourse = async (id) => {
  try {
    const userData = await pgClient.query(
      `SELECT u.* FROM node.users_cources AS c
        INNER JOIN node.users as u ON u.id = c.user_id
        WHERE c.cources_id = ${id}`
    );

    return { result: userData.rows };
  } catch (error) {
    return { error };
  }
};

exports.bindStudentToCourse = async (query) => {
    try {
        const { userId, courseId } = query;
        const userDataCheckStudent = await pgClient.query(
            `SELECT * FROM node.users WHERE status = 'student' AND  id = ${userId}`
            );
            
            if (!userDataCheckStudent.rowCount)
            return {
                error: { message: 'This user is not student!' },
            };
            const userDataCheckUniversity = await pgClient.query(
                `SELECT *
                FROM
                node.cources c
                INNER JOIN node.users t ON
                t.id = c.teacher_id
                INNER JOIN node.universities u ON
                u.id = t.university_id
                INNER JOIN node.users s ON
                    s.university_id = u.id
                    WHERE
                    s.id = ${userId}
                    AND c.id = ${courseId}
                    AND s.university_id = t.university_id;`
            );
            if (!userDataCheckUniversity.rowCount)
            return {
                error: { message: 'This user is not possible to assign to this course!' },
            };
            const userData = await pgClient.query(
              `INSERT INTO node.users_cources (user_id, cources_id)
                VALUES (${userId}, ${courseId})
                RETURNING *;`
            );
    return { result: userData.rows[0] };
  } catch (error) {
    return { error };
  }
};

exports.updateStudent = async (student) => {
  try {
    const { name, age, university_id, status } = student;
    const students = await pgClient.query(
      `UPDATE node.users SET name = '${name}', age = '${age}', university_id= '${university_id}', status = ${status} WHERE id=${id}`
    );
      
    return { result: students.rows[0] };
  } catch (e) {
    return { error: e.message };
  }
};
