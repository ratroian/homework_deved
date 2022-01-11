const pgClient = require('../index');

exports.createCourse = async (body) => {
  try {
    const { name, teacherId } = body;
    const { error } = await checkCourse(teacherId);
    if (error) {
      return { error };
    }
    const pgQuery = `
            INSERT INTO node.cources (name, teacher_id)
            VALUES ('${name}', ${teacherId})
            RETURNING *;
        `;

    const result = await pgClient.query(pgQuery);
    return { result: result.rows[0] };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

const checkCourse = async (teacherId) => {
  try {
    const userData = await pgClient.query(
      `SELECT * FROM node.users WHERE id = ${teacherId} AND status = 'teacher';`
    );
    if (!userData.rowCount)
      return {
        error: { status: 404, data: { message: 'User is not teacher!' } },
      };

    return { result: userData.rowCount };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

exports.getCourcesList = async (query) => {
  try {
    const { universityId, page, perPage, name } = query;

    let dbQuery = `
            SELECT c.* FROM node.cources AS c
            INNER JOIN node.users as u ON u.id = c.teacher_id
            WHERE u.university_id = ${universityId}
        `;
    if (name) dbQuery += `AND name ILIKE '%${name}%'`;

    if (page != undefined) {
      dbQuery += `LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`;
    }
    const result = await pgClient.query(dbQuery);
    return { result: { page, perPage, cources: result.rows } };
  } catch (error) {
    return { error };
  }
};

exports.deleteCourse = async (query) => {
  try {
    const { id } = query;
    const res = await deleteMarks(id);
    if (res.error) {
      return { error: res.error };
    }
    const pgQuery = ` DELETE FROM node.cources WHERE id = ${id}`;

    const result = await pgClient.query(pgQuery);
    return {
      result: {
        sucsses: true,
        deletedCourseCount: result.rowCount,
        deletedMarksCount: res.result,
      },
    };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

const deleteMarks = async (courceId) => {
  try {
    const data = await pgClient.query(`DELETE FROM node.marks WHERE course_id = ${courceId};`);
    return { result: data.rowCount };
  } catch (error) {
    return {
      error: { status: 500, data: { error } },
    };
  }
};

exports.dropStudent = async (body) => {
  try {
    const { user_id: studentId, cources_id: courseId } = body;

    const pgQueryStudent = `
            DELETE FROM node.users_cources
            WHERE user_id = ${studentId} AND cources_id = ${courseId};
        `;

    const pgQueryMark = `
            DELETE FROM node.marks
            WHERE student_id = ${studentId} AND course_id = ${courseId};
        `;

    await pgClient.query(pgQueryStudent);
    await pgClient.query(pgQueryMark);

      return {
        result: {
          sucsses: true,
          deletedStudentCount: result.rowCount,
          deletedMarksCount: res.result,
        },
      };
  } catch (error) {
    return { error };
  }
};
