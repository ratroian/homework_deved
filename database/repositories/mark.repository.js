const pgClient = require('../index');

exports.getStudentsRatingByCourseId = async (query) => {
  try {
    const { course_id: courseId, limit } = query;

    const pgQuery = `
            SELECT u.id, u.name, res.rating FROM node.users u 
            INNER JOIN 
            (SELECT student_id, avg(mark) AS rating 
            FROM node.marks
            WHERE course_id = ${courseId}
            GROUP BY student_id) AS res
            ON u.id = res.student_id
            ORDER BY res.rating DESC
            LIMIT ${limit};  
        `;

    let result = await pgClient.query(pgQuery);
    result = result.rows.map((object) => {
      object.rating = Number(Number(object.rating).toFixed(1));
      return object;
    });
    return { result: { course_id: courseId, ratings: result } };
  } catch (error) {
    return { error };
  }
};

exports.createMark = async (body) => {
    try {
        const {
            mark,
            student_id: studentId,
            course_id: courseId,
        } = body;

        const pgQuery = `
            INSERT INTO node.marks (mark, student_id, course_id)
            VALUES (${mark}, ${studentId}, ${courseId})
            RETURNING *;
        `;

        const result = await pgClient.query(pgQuery);
        return { result: result.rows[0] };
    } catch (error) {
        return { error };
    }
};

exports.getStudentsRatingByUniversity = async () => {
  try {
    const pgQuery = `
        SELECT un.id AS university_id, un.name AS university_name, us.id AS user_id, us.name AS user_name, res.rating FROM node.universities un 
        INNER JOIN node.users us ON us.university_id = un.id
        INNER JOIN 
        (SELECT student_id, avg(mark) AS rating 
        FROM node.marks
        GROUP BY student_id) AS res
        ON us.id = res.student_id
        ORDER BY res.rating DESC;   
        `;

    let result = await pgClient.query(pgQuery);
    let groupped = groupBy(result.rows, 'university_id');
    groupped = groupped.map((object) => {
      let students = object.map((student) => ({
        id: student.user_id,
        name: student.user_name,
        rating: Number(Number(student.rating).toFixed(1)),
      }));

      return {
        id: object[0].university_id,
        name: object[0].university_name,
        students: students,
      };
    });

    return { result: { result: groupped } };
  } catch (error) {
    return { error };
  }
};

function groupBy(arr, prop) {
  const map = new Map(Array.from(arr, (obj) => [obj[prop], []]));
  arr.forEach((obj) => map.get(obj[prop]).push(obj));
  return Array.from(map.values());
}
