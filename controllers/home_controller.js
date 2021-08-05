const Todo = require('../models/todo');
module.exports.home = function(req , res){
   Todo.find({} , function(err , todos){
       if(err){
           console.log("Error in fetching todos from db");
           return;
       }
       return res.render('home' , {
           title : 'Todo Application',
           todo_list : todos,
       });
   });
}

