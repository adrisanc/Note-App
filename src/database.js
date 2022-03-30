const {connect} = require('mongoose'); // connect app to a DB

(async() => {
    try {
        const db = await connect("mongodb://localhost:27017/note-app-db")// mongodb:(protocol),note-app-db (DB name)
        console.log("DB connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }  
})