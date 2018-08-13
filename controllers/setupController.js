var todos = require('../models/ToDoModel.js');

//app is express object
module.exports = function(app){
    app.get('/api/setuptodo',function(req,res){
        //seed the DB
        var setupTodos = [
            {
                username:"Tom",
                todo:"Buy groceries",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"Datta",
                todo:"Complete the project",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"Rajath",
                todo:"Play FIFA",
                isDone:false,
                hasAttachment:false
            }
        ];
        todos.create(setupTodos,function(err,result){
            res.send(result);
        });
    });
}