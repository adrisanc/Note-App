const express = require('express');
const indexRoutes = require('./src/routes/indexRoutes')
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


//Import enviroment varaibles
require('dotenv').config({path:'variables.env'})

const app = express();
//Template Engine Settings

  app.set("view engine", "ejs");
  app.set('views', path.join(__dirname, './src/views')); // configuration when views folder is inside src folder

//Middlewares
app.use(morgan('dev'))// indicates the visited routes
app.use(express.urlencoded({extended:false})) //allow to get the form's information

//routes
app.use('/', indexRoutes)
const publicPath = path.resolve(__dirname, "./public");

//static files
app.use(express.static(publicPath));

//connect to mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
})

//read localhost variables & port

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


//Port Server
app.listen(port, host, () =>{
  console.log('Server running');
});

