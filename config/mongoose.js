// require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_db');

//acquire the connection to check if it is sucessfully
const db = mongoose.connection;

//error
db.on('err' , console.error.bind(console , 'Error : connecting to db'));

//up and running
db.once('open' , function(){
    console.log('sucessfully connected to db')
})