require('dotenv').config();
const util = require('util');
const mysql = require('mysql');

// for local testing
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306, 
//   user: 'kevin',
//   password: process.env.mysqlP, 
//   database: 'cookin_db'
// })

// for Heroku
const connection = mysql.createConnection(process.env.JAWSDB_URL);

const db = util.promisify(connection.query).bind(connection)

module.exports = db;