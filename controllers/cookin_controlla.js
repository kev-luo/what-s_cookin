const express = require('express');
const cookin = require('../models/cookin');
const cookinRoutes = express.Router();

cookinRoutes.get('/', async (req, res) => {
  let meals = await cookin.all();

  res.render('index', {meals});
})

cookinRoutes.post('/cookthis', async (req, res) => {
  let newMeal = await cookin.create(req.body);
  console.log(newMeal);
  res.redirect('/');
})

cookinRoutes.put('/demolish/:id', async (req, res) => {
  let foodId = req.params.id;
  let demolishFood = await cookin.update(foodId);
  console.log(demolishFood);
  res.send('hi');
})

cookinRoutes.delete('/toss/:id', async (req, res) => {
  let foodId = req.params.id;
  let tossFood = await cookin.delete(foodId);
  console.log(tossFood);
  res.send('bye');
})

module.exports = cookinRoutes;