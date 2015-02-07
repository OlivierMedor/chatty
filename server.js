var express = require('express');
    bodyParser = require('body-parser');


var app = express();

var port = 9001;
app.listen(port);
app.use(bodyParser.json());

var messages = [];

app.get('/', function(req, res) {
    res.send('hello world');
    res.send(JSON.stringify(messages));
})
app.post('/', function(req, res) {
	messages.push(req.body);
	res.send(JSON.stringify(messages));
})
app.use(function(req, res, next) {
 //middleware goes here
    res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Origin', 'OPTIONS, GET, Post');
	res.header('Access-Control-Allow-Origin', 'Oigin, X-Requested-with, Content-Type, Accept');
	next();
});

