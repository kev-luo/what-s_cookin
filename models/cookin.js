const orm = require('../config/orm')

// create the code that will call the ORM functions using burger specific input for the ORM.
const cookin = {
  all: async function() {
    let result = await orm.selectAll();
    return result;
  },
  create: async function(newMeal) {
    let result= await orm.insertOne('cookin', newMeal);
    return result;
  },
  update: async function(mealId) {
    let result = await orm.updateOne('cookin', mealId);
    return result;
  },
  delete: async function(mealId) {
    let result = await orm.deleteOne('cookin', mealId);
    return result;
  }
}

module.exports = cookin;