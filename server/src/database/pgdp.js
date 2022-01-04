const { Client } = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "asd123",
    database: "postgres"
})
client.connect((err, res) => {
    if(!err) {
        console.log('Connected to Db');
    } else {
        console.log(err.message);
    }
})
module.exports = client;

