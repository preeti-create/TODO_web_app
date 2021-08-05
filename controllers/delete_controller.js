// to access todoSchema
const Todo = require('../models/todo');

// delete a todo
module.exports.delete = function(req , res){
    let id = req.body.selectedTodos;
    // console.log(id);
    Todo.deleteMany({_id:id}, function(err) {
        if (err) {
          console.log("Error in deleting from db");
        } 
        return res.redirect('back');
      });
        
    };
     