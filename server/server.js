var express = require('express'),
    path = require('path'),
    users = require('./users');
var app = express();

//    bodyParser = require('body-parser'),

app.set('port', process.env.PORT || 5000);

var clientPath = __dirname.replace("/server", "");
app.use('/', express.static(path.join(clientPath, '/client')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.get('/get_user', users.getUser);

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
