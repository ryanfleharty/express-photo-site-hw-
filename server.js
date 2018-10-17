const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

require ('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const usersController = require('./controllers/users');
const photosController= require('./controllers/photos');

app.use('/users', usersController);
app.use('/photos', photosController);

app.get('/', (req,res) => {
  res.render('index.ejs');
});

const port = 3000;


app.listen(port, () => {
  console.log('the server is running, go catch it!')
})
