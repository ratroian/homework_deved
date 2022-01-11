const { Client } = require('pg');

const pgClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

pgClient.connect().then(() => console.log('CONNECT TO DB'));

module.exports = pgClient;
