// required mongoose 
const mongoose=require('mongoose');

// connected to the db
mongoose.connect('mongodb://localhost/todolist_mj_db');

// acquired connection to db
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//up and running then print the message
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;