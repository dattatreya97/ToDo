var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoschema = Schema({
    username:String,
    todo:String,
    isDone:Boolean,
    hasAttachment:Boolean
});
var Todos = mongoose.model('Todos',todoschema);
module.exports = Todos;