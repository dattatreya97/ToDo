var todos = require('../models/ToDoModel.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:uname',function(req,res){
        console.log(req.params);
        todos.find({username:req.params.uname},function(err,todo){
            if(err) throw err;
            res.send(todo);
        });
    });
    app.get('/api/todo/:id',function(req,res){
        console.log(req.params.id);
        todos.findById({_id:req.params.id},function(err,todo){
            if(err) throw err;
            res.send(todo);
        });
    });

    app.post('/api/todo',function(req,res){
        if(req.body.id){
            todos.findByIdAndUpdate(req.body.id,{
                username:req.body.username,
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            },function(err,todo){
                if(err) throw err;

                res.send('Success');
            });
        }else{
            const new_todo=todos({
                username:req.body.username,
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            });
            new_todo.save(function(err){
                if(err) throw err;
                res.send('Sucess');
            });  
                   
        }
    });

    app.delete('/api/todo',function(req,res){
        todos.findByIdAndRemove(req.body.id,function(err){
            if(err) throw err;
            res.send('Successfully deleted');
        })
    });

    
}