const express = require('express');
const cookin = require('../models/cookin');
const cookinRoutes = express.Router();

cookinRoutes.get('/', async (req,res) => {
  let meals = await cookin.all();

  res.render('index', {meals});
})

module.exports = cookinRoutes;