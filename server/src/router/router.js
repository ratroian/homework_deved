const URL = require('url');
const { findFactorial,getError} = require('../controler/controller');


async function routs(req,res,body) {  
    const { method, url } = req;
    const { pathname } = URL.parse(url, true);
  
    switch (true) {
      case method === 'POST' && pathname === '/factorial':
        ({ result, error } = await findFactorial(body));
        break;
      
      case method === 'GET' && pathname === '/db-error':
        ({ result, error } = await getError(body));
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
}

module.exports = { routs };