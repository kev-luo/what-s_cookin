const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306, 
  user: 'kevin',
  password: 'mipassword', 
  database: 'cookin_db'
})

db.connect(err => (err) ? console.log(err.stack) : console.log(db.threadId))

module.exports = db;