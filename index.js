const express = require('express');


//for database
const db = require('./config/mongoose')
const Todo = require('./models/todo');


const app=express();
const port = 8000;

//set up the view engine 
app.set('view engine' , 'ejs');
app.set('views' , './views');



//for data parser
app.use(express.urlencoded());

//to access static files like css and js file
app.use(express.static('assets'));

//router
app.use('/' , require('./routes'))

// check express server
app.listen(port, function(err){
    if(err){
        console.log(`Error Express Server : ${err}`);
        return;
    }

    console.log(`Express server is up and running on port ${port}`);
});

