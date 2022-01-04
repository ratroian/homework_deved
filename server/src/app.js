const http = require('http');
require('./database/pgdp.js')
const {routs} = require('./router/router')
const server = http.createServer(function (req, res) { 

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === "OPTIONS") { 
    res.statusCode = 200; 
    return res.end(); 
  }

  const buffer = [];
  req.on('data', (chunk) => {
    buffer.push(chunk);
  })
  
  req.on('end',async () =>{ 
    const body = buffer.length ? JSON.parse(buffer) : null;
    const result = await routs(req,res,body );
    res.end(JSON.stringify(result));
  })
  })

server.listen(5000);
module.exports.server = server;
console.log('Node.js web server at port 5000 is running..');