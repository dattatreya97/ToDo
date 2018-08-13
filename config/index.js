var configvalues = require('./config.json');

module.exports = {
    getDBConnection:function(){
        return 'mongodb://'+configvalues.uname+':'+configvalues.pwd+'@ds$$$$$$.mlab.com:$$$$/yyyy';
    }
}