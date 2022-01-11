const URL = require('url');

const {
  GET_GERMANY_DATA, GET_FRANCE_DATA, GET_ITALY_DATA, GET_AUSTRIA_DATA,
} = require('../constants/routes');
const {
  getGermanyData, getFranceData, getItalyData, getAustriaData,
} = require('../requests/data.requests');

const router = async ({ req, res }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'GET' && pathname === GET_GERMANY_DATA:
      ({ result, error } = await getGermanyData(query));
      break;
    case method === 'GET' && pathname === GET_FRANCE_DATA:
      ({ result, error } = await getFranceData(query));
      break;
    case method === 'GET' && pathname === GET_ITALY_DATA:
      ({ result, error } = await getItalyData(query));
      break;
    case method === 'GET' && pathname === GET_AUSTRIA_DATA:
      ({ result, error } = await getAustriaData(query));
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
