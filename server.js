const express = require('express');
const exphbs = require('express-handlebars');
const cookinRoutes = require('./controllers/cookin_controlla');
const app = express();

const port = process.env.PORT || 3000; // allows deployment on heroku

app.use(express.static("public")); // serve static files from public dir

app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parses request body as JSON

app.engine('handlebars', exphbs({defaultLayout: 'main'})) // sets default template engine as hbs
app.set('view engine', 'handlebars');

app.use(cookinRoutes);

app.listen(port)