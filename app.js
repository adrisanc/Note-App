const express = require('express');
const indexRoutes = require('./src/routes/indexRoutes')
const path = require('path');

const app = express();
//Template Engine Settings

  app.set("view engine", "ejs");
  app.set('views', path.join(__dirname, './src/views')); // configuration when views folder is inside src folder

//routes
app.use('/', indexRoutes)



//Port Server
app.listen(3000);
console.log('Running on Port', 3000);
