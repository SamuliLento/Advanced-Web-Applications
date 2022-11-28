var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Recipes' });

  fetch("http://localhost:3000/recipe/pizza")
  .then(response => response.json())

  console.log(response);

  res.render('index', response)
});

router.get('/recipe/:food', function(req, res, next) {
  res.send({
      name: req.params.food,
      ingredients: ["frozen pizza base", "tomato sauce", "mozzarellas"],
      instructions: ["preheat oven 225C", "slice mozzarella", "put tomato sauce on pizza base",
  "put mozzarella slices on pizza", "bake for 15 min"]
  });
});

module.exports = router;
