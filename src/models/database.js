const mongoose = require('mongoose'); // connect app to a DB


mongoose.connect("mongodb+srv://maku:maku261780.@cluster0.ocilb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error',console.error.bind(console,'DB connection error!'));
db.once('open', function(){
    console.log('Connected To DB')
});

