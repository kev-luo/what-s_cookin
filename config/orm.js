const db = require('./connection');

const orm = {
  selectAll: async function() {
    let result = await db(`SELECT * FROM cookin`);
    return result;
  },
  insertOne: function() {

  },
  updateOne: function() {

  }
}


module.exports = orm;