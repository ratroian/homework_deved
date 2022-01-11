const pgClient = require('../index');

exports.createUniversity = async (university) => {
    try {
    const { country, city, name, accreditation } = university;
    const universities = await pgClient.query(
      `INSERT INTO node.universities (country, city, name, accreditation) VALUES ('${country}', '${city}', '${name}', ${accreditation}) RETURNING id`
      
    );
    const newObject = { id: universities.rows[0].id, country, city, name, accreditation };    
    return { result: newObject };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getUniversityById = async (id) => {
   try {
    const universities = await pgClient.query(
      `SELECT * FROM node.universities WHERE id = ${id} LIMIT 1`
    );
    return { result: universities.rows[0] };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getUniversitiesList = async (queryList) => {
    try {
    const { name, page, perPage } = queryList;
    let query = 'SELECT * FROM node.universities';
    if (name) query += ` WHERE name ILIKE '%${name}%'`;
   
    if (page != undefined) {
        query += `LIMIT ${perPage} OFFSET ${((page - 1) * perPage)}`;
    }
    const result = await pgClient.query(query)
  return { result: result.rows };
  } catch (e) {
    return { error: e.message };
  }
};
