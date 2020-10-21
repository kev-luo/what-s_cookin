const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306, 
  user: 'kevin',
  password: 'mipassword', 
  database: 'cookin_db'
})

const db = util.promisify(connection.query).bind(connection)

module.exports = db;