const orm = require('../config/orm')

// create the code that will call the ORM functions using burger specific input for the ORM.
const cookin = {
  all: async function() {
    let result = await orm.selectAll();
    return result;
  },
  create: function() {

  },
  update: function() {

  },
  delete: function() {

  }
}

module.exports = cookin;