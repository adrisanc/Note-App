const mongoose = require('mongoose'); // connect app to a DB


mongoose.connect("mongodb://localhost:27017/app-notes-db");
const db = mongoose.connection;
db.on('error',console.error.bind(console,'DB connection error!'));
db.once('open', function(){
    console.log('Connected To DB')
});

