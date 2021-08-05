// to access todoSchema
const Todo = require('../models/todo');

// add a todo
module.exports.add = function(req , res){
    Todo.create({
        description : req.body.description,
        category : req.body.category,
        deadline : req.body.deadline
    }, function(err , newTodo){
        if(err){
            console.log("Error : creating Todo");
            return;
        }
        // console.log(newTodo);
        return res.redirect('back');
    })
    
}