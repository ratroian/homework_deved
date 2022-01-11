const URL = require('url');

const {
  GET_POLAND_DATA, GET_FRANCE_DATA, GET_AUSTRIA_DATA,
} = require('../constants/routes');
const {
  getPolandData, getFranceData, getAustriaData,
} = require('../requests/data.requests');

const router = async ({ req, res }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'GET' && pathname === GET_POLAND_DATA:
      ({ result, error } = await getPolandData(query));
      break;
    case method === 'GET' && pathname === GET_FRANCE_DATA:
      ({ result, error } = await getFranceData(query));
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
