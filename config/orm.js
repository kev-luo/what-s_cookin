const db = require('./connection');

const orm = {
  selectAll: async function() {
    let result = await db(`SELECT * FROM cookin`);
    return result;
  },
  insertOne: async function(table, newEntry) {
    let queryString = `
      INSERT INTO ?? SET ?`;
    let result = await db(queryString, [[table], newEntry]);
    return result;
  },
  updateOne: async function(table, mealId) {
    let queryString = `
      UPDATE ?? SET demolished=1 WHERE id = ?`;
    let result = await db(queryString, [[table], mealId])
    return result;
  }
}


module.exports = orm;