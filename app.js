var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var appController = require('./controllers/appController');
var port = process.env.port||3000;

app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send("");
});
setupController(app);
appController(app);
mongoose.connect(config.getDBConnection(),{ useNewUrlParser: true });
app.listen(port);
